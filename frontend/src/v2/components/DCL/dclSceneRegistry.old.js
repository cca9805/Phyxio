import {
  DCL_SCENE_IDS,
  DCL_DIRECTION_MODE_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_BODY_KIND_IDS,
  getLocalizedText,
} from "./dclGrammar";

/**
 * Registro geométrico y semántico de escenas DCL.
 * Este archivo NO renderiza JSX.
 */

/* ============================================================================
 * Utilidades generales
 * ========================================================================== */

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

function norm(x, y) {
  const m = Math.hypot(x, y);
  if (m < 1e-9) return { x: 0, y: 0 };
  return { x: x / m, y: y / m };
}

function dot(a, b) {
  return a.x * b.x + a.y * b.y;
}

function scaleVec(v, s) {
  return { x: v.x * s, y: v.y * s };
}

function addVec(a, b) {
  return { x: a.x + b.x, y: a.y + b.y };
}

function rotate(v, angleRad) {
  return {
    x: v.x * Math.cos(angleRad) - v.y * Math.sin(angleRad),
    y: v.x * Math.sin(angleRad) + v.y * Math.cos(angleRad),
  };
}

/* ============================================================================
 * Lectura robusta de CalculatorV2
 * ========================================================================== */

function pickCalcValue(calc, magnitudeId, fallback = null) {
  if (!calc || !magnitudeId) return fallback;

  if (Object.prototype.hasOwnProperty.call(calc, magnitudeId)) {
    return calc[magnitudeId];
  }

  if (calc.results && Object.prototype.hasOwnProperty.call(calc.results, magnitudeId)) {
    return calc.results[magnitudeId];
  }

  if (calc.values && Object.prototype.hasOwnProperty.call(calc.values, magnitudeId)) {
    return calc.values[magnitudeId];
  }

  if (calc.output && Object.prototype.hasOwnProperty.call(calc.output, magnitudeId)) {
    return calc.output[magnitudeId];
  }

  if (calc.magnitudes && Object.prototype.hasOwnProperty.call(calc.magnitudes, magnitudeId)) {
    return calc.magnitudes[magnitudeId];
  }

  return fallback;
}

function getScalarMagnitude(calc, magnitudeId) {
  const raw = pickCalcValue(calc, magnitudeId, null);

  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (raw && typeof raw.value === "number" && Number.isFinite(raw.value)) return raw.value;
  if (raw && typeof raw.result === "number" && Number.isFinite(raw.result)) return raw.result;

  return null;
}

function getMagnitudeUnit(calc, magnitudeId) {
  const raw = pickCalcValue(calc, magnitudeId, null);
  if (!raw || typeof raw !== "object") return null;

  if (typeof raw.unit === "string" && raw.unit.trim()) return raw.unit.trim();
  if (typeof raw.units === "string" && raw.units.trim()) return raw.units.trim();
  if (typeof raw.unidad === "string" && raw.unidad.trim()) return raw.unidad.trim();
  if (typeof raw.unit_si === "string" && raw.unit_si.trim()) return raw.unit_si.trim();

  return null;
}

/* ============================================================================
 * Escala visual
 * ========================================================================== */

function buildVectorScale(value, options = {}) {
  const abs = Math.abs(value ?? 0);
  const minLen = options.minLen ?? 36;
  const maxLen = options.maxLen ?? 92;
  const softness = options.softness ?? 22;

  if (abs < 1e-12) return minLen * 0.35;

  const normalized = abs / (abs + softness);
  return minLen + normalized * (maxLen - minLen);
}

function buildVectorThickness(value, options = {}) {
  const abs = Math.abs(value ?? 0);
  const minWidth = options.minWidth ?? 2.2;
  const maxWidth = options.maxWidth ?? 6.2;
  const softness = options.softness ?? 16;

  if (abs < 1e-12) return minWidth;

  const normalized = abs / (abs + softness);
  return minWidth + normalized * (maxWidth - minWidth);
}

/* ============================================================================
 * Bases físicas por escena
 * ========================================================================== */

function getSceneSurfaceBasis(sceneId, environment = {}) {
  if (sceneId === DCL_SCENE_IDS.BLOCK_ON_INCLINE) {
    const theta = degToRad(environment.inclineAngleDeg ?? 0);

    const tangentPositive = norm(Math.cos(theta), -Math.sin(theta));
    const tangentNegative = scaleVec(tangentPositive, -1);
    const normalOutward = norm(Math.sin(theta), Math.cos(theta));
    const normalInward = scaleVec(normalOutward, -1);

    return {
      tangentPositive,
      tangentNegative,
      normalOutward,
      normalInward,
    };
  }

  return {
    tangentPositive: { x: 1, y: 0 },
    tangentNegative: { x: -1, y: 0 },
    normalOutward: { x: 0, y: -1 },
    normalInward: { x: 0, y: 1 },
  };
}

function getSnapCandidates(sceneId, environment = {}) {
  const basis = getSceneSurfaceBasis(sceneId, environment);

  const axial = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 },
  ];

  if (sceneId === DCL_SCENE_IDS.BLOCK_ON_INCLINE) {
    return [
      basis.tangentPositive,
      basis.tangentNegative,
      basis.normalOutward,
      basis.normalInward,
      ...axial,
    ];
  }

  if (
    sceneId === DCL_SCENE_IDS.HANGING_MASS ||
    sceneId === DCL_SCENE_IDS.TWO_MASSES_ROPE ||
    sceneId === DCL_SCENE_IDS.PULLEY_SIMPLE
  ) {
    return axial;
  }

  return axial;
}

function snapDirectionToScene(direction, sceneId, environment = {}) {
  const d = norm(direction.x, direction.y);
  const candidates = getSnapCandidates(sceneId, environment);

  let best = candidates[0];
  let bestScore = -Infinity;

  candidates.forEach((candidate) => {
    const score = dot(d, candidate);
    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  });

  return best;
}

/* ============================================================================
 * Cuerpos y helpers
 * ========================================================================== */

function getBodyGeometryKey(sceneId, body) {
  if (!body) return null;

  if (
    sceneId === DCL_SCENE_IDS.BLOCK_ON_TABLE ||
    sceneId === DCL_SCENE_IDS.BLOCK_ON_INCLINE ||
    sceneId === DCL_SCENE_IDS.HANGING_MASS ||
    sceneId === DCL_SCENE_IDS.PARTICLE_FREE
  ) {
    return "main";
  }

  if (sceneId === DCL_SCENE_IDS.TWO_MASSES_ROPE) {
    if (body.role === "main" || body.id === "body_left") return "left";
    if (body.role === "secondary" || body.id === "body_right") return "right";
  }

  if (sceneId === DCL_SCENE_IDS.PULLEY_SIMPLE) {
    if (body.kind === DCL_BODY_KIND_IDS.PULLEY || body.role === "mechanism" || body.id === "body_pulley") {
      return "pulley";
    }
    if (body.role === "main" || body.id === "body_block") return "left";
    if (body.role === "secondary" || body.id === "body_mass") return "right";
  }

  return body.id || "main";
}

function getBodyGeometry(sceneId, body, geometry) {
  const key = getBodyGeometryKey(sceneId, body);
  return key ? geometry.bodies[key] : null;
}

function getBodyCenter(bodyGeom) {
  if (!bodyGeom) return { x: 0, y: 0 };

  if (typeof bodyGeom.cx === "number" && typeof bodyGeom.cy === "number") {
    return { x: bodyGeom.cx, y: bodyGeom.cy };
  }

  if (typeof bodyGeom.x === "number" && typeof bodyGeom.y === "number") {
    return {
      x: bodyGeom.x + (bodyGeom.w ?? 0) / 2,
      y: bodyGeom.y + (bodyGeom.h ?? 0) / 2,
    };
  }

  return { x: 0, y: 0 };
}

function getBodyName(profileBody, lang) {
  return getLocalizedText(profileBody?.label || profileBody?.name, lang, profileBody?.id || "");
}

/* ============================================================================
 * Geometría por escena
 * ========================================================================== */

function buildBlockOnTableGeometry({ width, height }) {
  const groundY = height * 0.72;
  const block = {
    x: width * 0.44,
    y: groundY - 54,
    w: 108,
    h: 54,
  };

  return {
    sceneBounds: { width, height },
    guides: { groundY },
    bodies: { main: block },
  };
}

function buildBlockOnInclineGeometry({ width, height, environment }) {
  const thetaDeg = clamp(environment.inclineAngleDeg ?? 25, 0, 90);
  const theta = degToRad(thetaDeg);

  const pivot = { x: width * 0.18, y: height * 0.82 };
  const inclineLength = width * 0.56;
  const end = {
    x: pivot.x + inclineLength * Math.cos(theta),
    y: pivot.y - inclineLength * Math.sin(theta),
  };

  const centerAlong = 0.46;
  const center = {
    x: pivot.x + (end.x - pivot.x) * centerAlong,
    y: pivot.y + (end.y - pivot.y) * centerAlong,
  };

  const block = {
    cx: center.x,
    cy: center.y - 8,
    w: 92,
    h: 48,
    angleDeg: -thetaDeg,
  };

  return {
    sceneBounds: { width, height },
    guides: {
      inclineStart: pivot,
      inclineEnd: end,
      inclineAngleDeg: thetaDeg,
    },
    bodies: { main: block },
  };
}

function buildHangingMassGeometry({ width, height }) {
  const anchor = { x: width * 0.5, y: height * 0.16 };
  const mass = {
    cx: width * 0.5,
    cy: height * 0.56,
    r: 28,
  };

  return {
    sceneBounds: { width, height },
    guides: { anchor },
    bodies: { main: mass },
  };
}

function buildParticleFreeGeometry({ width, height }) {
  return {
    sceneBounds: { width, height },
    guides: {
      center: { x: width * 0.5, y: height * 0.5 },
    },
    bodies: {
      main: {
        cx: width * 0.5,
        cy: height * 0.5,
        r: 8,
      },
    },
  };
}

function buildTwoMassesRopeGeometry({ width, height }) {
  const tableY = height * 0.68;
  const edgeX = width * 0.72;

  const left = {
    x: width * 0.28,
    y: tableY - 52,
    w: 104,
    h: 52,
  };

  const right = {
    cx: edgeX + 56,
    cy: tableY + 84,
    r: 24,
  };

  return {
    sceneBounds: { width, height },
    guides: {
      tableY,
      edgeX,
      ropeCorner: { x: edgeX, y: tableY },
    },
    bodies: { left, right },
  };
}

function buildPulleySimpleGeometry({ width, height }) {
  const tableY = height * 0.72;
  const pulley = {
    cx: width * 0.72,
    cy: height * 0.34,
    r: 28,
  };

  const left = {
    x: width * 0.34,
    y: tableY - 52,
    w: 104,
    h: 52,
  };

  const right = {
    cx: pulley.cx + 74,
    cy: pulley.cy + 120,
    r: 24,
  };

  return {
    sceneBounds: { width, height },
    guides: {
      tableY,
      supportY: pulley.cy - pulley.r - 18,
      pulleyCenter: { x: pulley.cx, y: pulley.cy },
    },
    bodies: { left, right, pulley },
  };
}

/* ============================================================================
 * Anchors
 * ========================================================================== */

function resolveRectAnchor(b, anchor) {
  switch (anchor) {
    case "top":
      return { x: b.x + b.w / 2, y: b.y };
    case "bottom":
    case "contact":
      return { x: b.x + b.w / 2, y: b.y + b.h };
    case "left":
      return { x: b.x, y: b.y + b.h / 2 };
    case "right":
      return { x: b.x + b.w, y: b.y + b.h / 2 };
    case "attachment":
      return { x: b.x + b.w, y: b.y + b.h / 2 };
    case "center":
    default:
      return { x: b.x + b.w / 2, y: b.y + b.h / 2 };
  }
}

function resolveCircleAnchor(c, anchor) {
  switch (anchor) {
    case "attachment":
    case "top":
      return { x: c.cx, y: c.cy - c.r };
    case "bottom":
      return { x: c.cx, y: c.cy + c.r };
    case "left":
      return { x: c.cx - c.r, y: c.cy };
    case "right":
      return { x: c.cx + c.r, y: c.cy };
    case "center":
    case "contact":
    default:
      return { x: c.cx, y: c.cy };
  }
}

function resolveBodyAnchor({ sceneId, body, geometry, anchor }) {
  if (!body) return { x: 0, y: 0 };

  if (sceneId === DCL_SCENE_IDS.BLOCK_ON_TABLE) {
    const b = getBodyGeometry(sceneId, body, geometry);
    return resolveRectAnchor(b, anchor);
  }

  if (sceneId === DCL_SCENE_IDS.BLOCK_ON_INCLINE) {
    const b = getBodyGeometry(sceneId, body, geometry);
    const center = { x: b.cx, y: b.cy };
    const halfW = b.w / 2;
    const halfH = b.h / 2;
    const angle = degToRad(b.angleDeg);

    const local = {
      center: { x: 0, y: 0 },
      top: { x: 0, y: -halfH },
      bottom: { x: 0, y: halfH },
      left: { x: -halfW, y: 0 },
      right: { x: halfW, y: 0 },
      contact: { x: 0, y: halfH },
      attachment: { x: halfW, y: 0 },
    };

    const p = local[anchor] ?? local.center;
    return addVec(center, rotate(p, angle));
  }

  if (sceneId === DCL_SCENE_IDS.HANGING_MASS) {
    const m = getBodyGeometry(sceneId, body, geometry);
    return resolveCircleAnchor(m, anchor);
  }

  if (sceneId === DCL_SCENE_IDS.PARTICLE_FREE) {
    const p = getBodyGeometry(sceneId, body, geometry);
    return resolveCircleAnchor(p, anchor);
  }

  if (sceneId === DCL_SCENE_IDS.TWO_MASSES_ROPE) {
    const g = getBodyGeometry(sceneId, body, geometry);
    if (!g) return { x: 0, y: 0 };
    if (typeof g.x === "number") return resolveRectAnchor(g, anchor);
    return resolveCircleAnchor(g, anchor);
  }

  if (sceneId === DCL_SCENE_IDS.PULLEY_SIMPLE) {
    const g = getBodyGeometry(sceneId, body, geometry);
    if (!g) return { x: 0, y: 0 };
    if (typeof g.x === "number") return resolveRectAnchor(g, anchor);
    return resolveCircleAnchor(g, anchor);
  }

  return { x: 0, y: 0 };
}

/* ============================================================================
 * Direcciones
 * ========================================================================== */

function resolveRopeDirection({ sceneId, body }) {
  if (sceneId === DCL_SCENE_IDS.HANGING_MASS) {
    return { x: 0, y: -1 };
  }

  if (sceneId === DCL_SCENE_IDS.TWO_MASSES_ROPE) {
    const key = getBodyGeometryKey(sceneId, body);
    if (key === "left") return { x: 1, y: 0 };
    if (key === "right") return { x: 0, y: -1 };
  }

  if (sceneId === DCL_SCENE_IDS.PULLEY_SIMPLE) {
    const key = getBodyGeometryKey(sceneId, body);
    if (key === "left") return { x: 1, y: 0 };
    if (key === "right") return { x: 0, y: -1 };
  }

  return { x: 0, y: -1 };
}

function resolveDirection({
  sceneId,
  directionMode,
  customDirection,
  environment,
  vector,
  body,
}) {
  const basis = getSceneSurfaceBasis(sceneId, environment);

  switch (directionMode) {
    case DCL_DIRECTION_MODE_IDS.UP:
      return { x: 0, y: -1 };
    case DCL_DIRECTION_MODE_IDS.DOWN:
      return { x: 0, y: 1 };
    case DCL_DIRECTION_MODE_IDS.LEFT:
      return { x: -1, y: 0 };
    case DCL_DIRECTION_MODE_IDS.RIGHT:
      return { x: 1, y: 0 };
    case DCL_DIRECTION_MODE_IDS.ALONG_SURFACE_POSITIVE:
      return basis.tangentPositive;
    case DCL_DIRECTION_MODE_IDS.ALONG_SURFACE_NEGATIVE:
      return basis.tangentNegative;
    case DCL_DIRECTION_MODE_IDS.NORMAL_OUTWARD:
      return basis.normalOutward;
    case DCL_DIRECTION_MODE_IDS.NORMAL_INWARD:
      return basis.normalInward;
    case DCL_DIRECTION_MODE_IDS.ROPE_DIRECTION:
      return resolveRopeDirection({ sceneId, vector, body });
    case DCL_DIRECTION_MODE_IDS.CUSTOM:
    default:
      if (customDirection) return norm(customDirection.x, customDirection.y);
      return { x: 1, y: 0 };
  }
}

/* ============================================================================
 * Etiquetas y estilo vectorial
 * ========================================================================== */

function getVectorColor(vector) {
  switch (vector.type) {
    case DCL_VECTOR_TYPE_IDS.WEIGHT:
      return "#ff6b6b";
    case DCL_VECTOR_TYPE_IDS.NORMAL:
      return "#4cc9f0";
    case DCL_VECTOR_TYPE_IDS.FRICTION:
      return "#f4a261";
    case DCL_VECTOR_TYPE_IDS.TENSION:
      return "#c77dff";
    case DCL_VECTOR_TYPE_IDS.ACCELERATION:
      return "#00d084";
    case DCL_VECTOR_TYPE_IDS.VELOCITY:
      return "#00bbf9";
    case DCL_VECTOR_TYPE_IDS.APPLIED_FORCE:
      return "#ffd166";
    case DCL_VECTOR_TYPE_IDS.REACTION:
      return "#b8c0ff";
    default:
      return "#e2e8f0";
  }
}

function getSemanticRoleText(vector, lang) {
  const role = vector.semanticRole || vector.derivedKind || null;
  if (!role) return lang === "en" ? "Vector" : "Vector";

  const map = {
    gravitational_cause: {
      es: "Causa gravitatoria",
      en: "Gravitational cause",
    },
    constraint_force: {
      es: "Fuerza de restricción",
      en: "Constraint force",
    },
    external_action: {
      es: "Acción externa",
      en: "External action",
    },
    opposition: {
      es: "Oposición al movimiento",
      en: "Opposition to motion",
    },
    system_response: {
      es: "Respuesta del sistema",
      en: "System response",
    },
    contact: {
      es: "Fuerza de contacto",
      en: "Contact force",
    },
    component_parallel: {
      es: "Componente paralela",
      en: "Parallel component",
    },
    component_normal: {
      es: "Componente perpendicular",
      en: "Perpendicular component",
    },
    resultant: {
      es: "Resultante",
      en: "Resultant",
    },
  };

  return getLocalizedText(map[role], lang, role);
}

function buildLabelPoint(anchorPoint, endPoint, index = 0) {
  const dx = endPoint.x - anchorPoint.x;
  const dy = endPoint.y - anchorPoint.y;
  const n = norm(dx, dy);
  const perp = { x: -n.y, y: n.x };

  const baseOffset = 14 + Math.min(index, 4) * 2;
  const lateral = index === 0 ? 0 : 10 + (index - 1) * 6;
  const side = index % 2 === 0 ? 1 : -1;

  return {
    x: endPoint.x + n.x * baseOffset + perp.x * lateral * side,
    y: endPoint.y + n.y * baseOffset + perp.y * lateral * side,
  };
}

/* ============================================================================
 * Vectores derivados: componentes y resultante
 * ========================================================================== */

function createResolvedVector({
  sourceVector,
  id,
  symbol,
  localizedLabel,
  anchorPoint,
  direction,
  scalarValue,
  color,
  vectorLength,
  vectorThickness,
  bodyId,
  labelIndex,
  type = sourceVector.type,
  derived = false,
  derivedKind = null,
  visible = true,
  lang = "es",
  displayUnit = null,
}) {
  const endPoint = addVec(anchorPoint, scaleVec(direction, vectorLength));

  return {
    ...sourceVector,
    id,
    type,
    symbol,
    localizedLabel,
    bodyId,
    anchorPoint,
    direction,
    scalarValue,
    vectorLength,
    vectorThickness,
    endPoint,
    color,
    derived,
    derivedKind,
    visible,
    labelPoint: buildLabelPoint(anchorPoint, endPoint, labelIndex),
    roleText: getSemanticRoleText(
      { ...sourceVector, derivedKind, semanticRole: sourceVector.semanticRole },
      lang
    ),
    displayUnit,
  };
}

function appendInclineComponents({
  profile,
  vectorsResolved,
  labelUsageByBody,
  lang,
}) {
  if (
    profile.scene !== DCL_SCENE_IDS.BLOCK_ON_INCLINE ||
    profile.options?.resolveComponents !== true
  ) {
    return vectorsResolved;
  }

  const basis = getSceneSurfaceBasis(profile.scene, profile.environment);
  const theta = degToRad(profile.environment?.inclineAngleDeg ?? 0);
  const derivedVectors = [];

  vectorsResolved.forEach((vector) => {
    if (vector.type !== DCL_VECTOR_TYPE_IDS.WEIGHT) return;

    const bodyId = vector.bodyId;
    const baseMagnitude =
      typeof vector.scalarValue === "number"
        ? Math.abs(vector.scalarValue)
        : 1;

    const parallelMagnitude = baseMagnitude * Math.sin(theta);
    const normalMagnitude = baseMagnitude * Math.cos(theta);

    const parallelLength =
      typeof vector.scalarValue === "number"
        ? buildVectorScale(parallelMagnitude)
        : Math.max(vector.vectorLength * Math.sin(theta), 18);

    const normalLength =
      typeof vector.scalarValue === "number"
        ? buildVectorScale(normalMagnitude)
        : Math.max(vector.vectorLength * Math.cos(theta), 18);

    const parallelThickness =
      typeof vector.scalarValue === "number"
        ? buildVectorThickness(parallelMagnitude)
        : Math.max(vector.vectorThickness - 0.4, 2.1);

    const normalThickness =
      typeof vector.scalarValue === "number"
        ? buildVectorThickness(normalMagnitude)
        : Math.max(vector.vectorThickness - 0.4, 2.1);

    const pIndex = labelUsageByBody[bodyId] ?? 0;
    labelUsageByBody[bodyId] = pIndex + 1;

    derivedVectors.push(
      createResolvedVector({
        sourceVector: vector,
        id: `${vector.id}__component_parallel`,
        symbol: "P∥",
        localizedLabel: lang === "en" ? "Parallel component" : "Componente paralela",
        anchorPoint: vector.anchorPoint,
        direction: basis.tangentPositive,
        scalarValue: parallelMagnitude,
        color: "#ff9f1c",
        vectorLength: parallelLength,
        vectorThickness: parallelThickness,
        bodyId,
        labelIndex: pIndex,
        derived: true,
        derivedKind: "component_parallel",
        lang,
        displayUnit: vector.displayUnit,
      })
    );

    const nIndex = labelUsageByBody[bodyId] ?? 0;
    labelUsageByBody[bodyId] = nIndex + 1;

    derivedVectors.push(
      createResolvedVector({
        sourceVector: vector,
        id: `${vector.id}__component_normal`,
        symbol: "P⊥",
        localizedLabel: lang === "en" ? "Normal component" : "Componente perpendicular",
        anchorPoint: vector.anchorPoint,
        direction: basis.normalInward,
        scalarValue: normalMagnitude,
        color: "#2ec4b6",
        vectorLength: normalLength,
        vectorThickness: normalThickness,
        bodyId,
        labelIndex: nIndex,
        derived: true,
        derivedKind: "component_normal",
        lang,
        displayUnit: vector.displayUnit,
      })
    );
  });

  return [...vectorsResolved, ...derivedVectors];
}

function appendResultant({
  profile,
  vectorsResolved,
  labelUsageByBody,
  lang,
}) {
  if (profile.options?.resolveResultant !== true || vectorsResolved.length === 0) {
    return vectorsResolved;
  }

  const forceVectors = vectorsResolved.filter((v) => {
    if (v.visible === false) return false;
    if (v.derived) return false;
    return (
      v.type !== DCL_VECTOR_TYPE_IDS.VELOCITY &&
      v.type !== DCL_VECTOR_TYPE_IDS.ACCELERATION
    );
  });

  if (forceVectors.length === 0) return vectorsResolved;

  const bodyId = forceVectors[0].bodyId;
  const origin = forceVectors[0].anchorPoint;

  const sum = forceVectors.reduce(
    (acc, v) => {
      const dx = v.endPoint.x - v.anchorPoint.x;
      const dy = v.endPoint.y - v.anchorPoint.y;
      return {
        x: acc.x + dx,
        y: acc.y + dy,
      };
    },
    { x: 0, y: 0 }
  );

  const magnitude = Math.hypot(sum.x, sum.y);
  if (magnitude < 1e-9) return vectorsResolved;

  const direction = norm(sum.x, sum.y);
  const index = labelUsageByBody[bodyId] ?? 0;
  labelUsageByBody[bodyId] = index + 1;

  const resultant = createResolvedVector({
    sourceVector: forceVectors[0],
    id: "resultant__visual",
    type: "resultant",
    symbol: "R",
    localizedLabel: lang === "en" ? "Resultant" : "Resultante",
    anchorPoint: origin,
    direction,
    scalarValue: magnitude,
    color: "#ffffff",
    vectorLength: magnitude,
    vectorThickness: 4.6,
    bodyId,
    labelIndex: index,
    derived: true,
    derivedKind: "resultant",
    lang,
    displayUnit: forceVectors[0].displayUnit,
  });

  return [...vectorsResolved, resultant];
}

function buildResolutionSteps(profile, lang) {
  const steps = [];

  steps.push({
    index: 0,
    id: "base",
    label: lang === "en" ? "Base diagram" : "Diagrama base",
    explanation:
      lang === "en"
        ? "Only the original forces of the problem are shown."
        : "Se muestran solo las fuerzas originales del problema.",
  });

  if (profile.options?.resolveComponents === true) {
    steps.push({
      index: 1,
      id: "components",
      label: lang === "en" ? "Components" : "Componentes",
      explanation:
        lang === "en"
          ? "The weight is decomposed into parallel and perpendicular components."
          : "El peso se descompone en componentes paralela y perpendicular.",
    });
  }

  if (profile.options?.resolveResultant === true) {
    const nextIndex = steps.length;
    steps.push({
      index: nextIndex,
      id: "resultant",
      label: lang === "en" ? "Resultant" : "Resultante",
      explanation:
        lang === "en"
          ? "A visual resultant vector summarizes the visible forces."
          : "Una resultante visual resume las fuerzas visibles.",
    });
  }

  return steps;
}

function applyResolutionStep(profile, vectorsResolved) {
  const steps = buildResolutionSteps(profile, profile.lang || "es");
  const maxStep = Math.max(0, steps.length - 1);
  const rawStep = profile.options?.resolutionStep;
  const step = clamp(rawStep ?? maxStep, 0, maxStep);

  if (step <= 0) {
    return {
      vectors: vectorsResolved.filter((v) => !v.derived),
      currentStep: 0,
      steps,
    };
  }

  if (step === 1 && profile.options?.resolveComponents === true) {
    return {
      vectors: vectorsResolved.filter(
        (v) => !v.derived || v.derivedKind === "component_parallel" || v.derivedKind === "component_normal"
      ),
      currentStep: 1,
      steps,
    };
  }

  return {
    vectors: vectorsResolved,
    currentStep: step,
    steps,
  };
}

/* ============================================================================
 * Interpretación gráfica
 * ========================================================================== */

function buildContactConsistency(profile) {
  const hasContactScene =
    profile.scene === DCL_SCENE_IDS.BLOCK_ON_TABLE ||
    profile.scene === DCL_SCENE_IDS.BLOCK_ON_INCLINE ||
    profile.scene === DCL_SCENE_IDS.TWO_MASSES_ROPE ||
    profile.scene === DCL_SCENE_IDS.PULLEY_SIMPLE;

  const visibleNormals = profile.vectors.filter(
    (v) => v.type === DCL_VECTOR_TYPE_IDS.NORMAL && v.style?.visible !== false && v.visible !== false
  );
  const visibleFriction = profile.vectors.filter(
    (v) => v.type === DCL_VECTOR_TYPE_IDS.FRICTION && v.style?.visible !== false && v.visible !== false
  );

  const warnings = [];

  if (!hasContactScene && (visibleNormals.length > 0 || visibleFriction.length > 0)) {
    warnings.push("Hay fuerzas de contacto visibles en una escena sin contacto explícito.");
  }

  return {
    ok: warnings.length === 0,
    warnings,
  };
}

function buildEquilibriumHints(vectorsResolved, profile, lang) {
  const hints = [];
  const visible = vectorsResolved.filter((v) => v.visible !== false);

  const hasWeight = visible.some((v) => v.type === DCL_VECTOR_TYPE_IDS.WEIGHT);
  const hasNormal = visible.some((v) => v.type === DCL_VECTOR_TYPE_IDS.NORMAL);
  const hasAcceleration = visible.some((v) => v.type === DCL_VECTOR_TYPE_IDS.ACCELERATION);
  const hasApplied = visible.some((v) => v.type === DCL_VECTOR_TYPE_IDS.APPLIED_FORCE);
  const hasFriction = visible.some((v) => v.type === DCL_VECTOR_TYPE_IDS.FRICTION);
  const hasComponents = visible.some((v) => v.derivedKind === "component_parallel" || v.derivedKind === "component_normal");
  const hasResultant = visible.some((v) => v.derivedKind === "resultant");

  if (
    profile.scene === DCL_SCENE_IDS.BLOCK_ON_TABLE &&
    hasWeight &&
    hasNormal &&
    !hasApplied &&
    !hasFriction &&
    !hasAcceleration
  ) {
    hints.push(
      lang === "en"
        ? "The weight and the normal balance vertically."
        : "El peso y la normal se compensan verticalmente."
    );

    hints.push(
      lang === "en"
        ? "No net horizontal force is shown in the diagram."
        : "No aparece fuerza horizontal neta en el diagrama."
    );
  } else if (!hasAcceleration) {
    hints.push(
      lang === "en"
        ? "No acceleration is shown explicitly in the diagram."
        : "No se muestra aceleración explícita en el diagrama."
    );
  }

  if (hasComponents) {
    hints.push(
      lang === "en"
        ? "The weight has been decomposed into parallel and perpendicular components."
        : "El peso se ha descompuesto en componentes paralela y perpendicular."
    );
  }

  if (hasResultant) {
    hints.push(
      lang === "en"
        ? "A visual resultant vector is displayed."
        : "Se muestra una resultante visual."
    );
  }

  if (visible.some((v) => v.type === DCL_VECTOR_TYPE_IDS.TENSION)) {
    hints.push(
      lang === "en"
        ? "Tension should be read as a force transmitted by the rope."
        : "La tensión debe leerse como fuerza transmitida por la cuerda."
    );
  }

  return hints;
}

function buildGraphWarnings(profile, geometry, vectorsResolved) {
  const warnings = [];

  if (profile.labels?.length > 5) {
    warnings.push("Hay muchas etiquetas explícitas. Revisa posibles solapes.");
  }

  const byBody = {};
  for (const v of vectorsResolved) {
    byBody[v.bodyId] = (byBody[v.bodyId] || 0) + 1;
  }

  Object.entries(byBody).forEach(([bodyId, count]) => {
    if (count >= 4) {
      warnings.push(`El cuerpo "${bodyId}" acumula ${count} vectores visibles.`);
    }
  });

  if (profile.scene === DCL_SCENE_IDS.PULLEY_SIMPLE && !geometry.bodies.pulley) {
    warnings.push("La escena de polea no ha generado la polea geométrica.");
  }

  return warnings;
}

function buildGraphInterpretationPayload({
  profile,
  calc,
  vectorsResolved,
  geometry,
  lang,
  bodyRuntimeMap,
  resolutionSteps,
  currentStep,
}) {
  const activeForces = [];
  const inactiveForces = [];

  vectorsResolved.forEach((v) => {
    const readableLabel = v.localizedLabel || getLocalizedText(v.label, lang, v.symbol || v.id);

    if (v.visible === false || v.style?.visible === false) {
      inactiveForces.push(readableLabel);
    } else {
      activeForces.push(readableLabel);
    }
  });

  return {
    sceneId: profile.scene,
    sceneTitle: getLocalizedText(profile.meta?.title, lang, profile.scene),
    question: profile.question,
    questionText: getLocalizedText(profile.meta?.question, lang, ""),
    bodiesCount: profile.bodies.length,
    vectorsCount: vectorsResolved.length,
    bodies: profile.bodies.map((b) => ({
      id: b.id,
      kind: b.kind,
      role: b.role,
      label: getBodyName(b, lang),
      center: bodyRuntimeMap[b.id]?.center ?? null,
      geometryKey: bodyRuntimeMap[b.id]?.geometryKey ?? null,
    })),
    vectors: vectorsResolved.map((v) => ({
      id: v.id,
      type: v.type,
      label: v.localizedLabel || getLocalizedText(v.label, lang, v.symbol || v.id),
      symbol: v.symbol,
      magnitudeId: v.magnitudeId,
      scalarValue: v.scalarValue,
      displayUnit: v.displayUnit || null,
      direction: v.direction,
      isZero: Math.abs(v.scalarValue ?? 0) < 1e-9,
      sign:
        typeof v.scalarValue === "number" && Number.isFinite(v.scalarValue)
          ? Math.sign(v.scalarValue)
          : null,
      visible: v.visible,
      bodyId: v.bodyId,
      derived: !!v.derived,
      derivedKind: v.derivedKind ?? null,
      roleText: v.roleText || getSemanticRoleText(v, lang),
    })),
    calcSnapshot: calc ?? null,
    geometrySummary: {
      width: geometry.sceneBounds.width,
      height: geometry.sceneBounds.height,
      hasPulley: Boolean(geometry.bodies.pulley),
      hasLeftBody: Boolean(geometry.bodies.left),
      hasRightBody: Boolean(geometry.bodies.right),
    },
    activeForces,
    inactiveForces,
    contactConsistency: buildContactConsistency(profile),
    equilibriumHints: buildEquilibriumHints(vectorsResolved, profile, lang),
    graphWarnings: buildGraphWarnings(profile, geometry, vectorsResolved),
    resolutionSteps,
    currentStep,
    currentStepLabel: resolutionSteps?.[currentStep]?.label || null,
    currentStepExplanation: resolutionSteps?.[currentStep]?.explanation || null,
  };
}

/* ============================================================================
 * Registro de escenas
 * ========================================================================== */

export const DCL_SCENE_REGISTRY = {
  [DCL_SCENE_IDS.BLOCK_ON_TABLE]: {
    id: DCL_SCENE_IDS.BLOCK_ON_TABLE,
    label: {
      es: "Bloque sobre mesa",
      en: "Block on table",
    },
    buildGeometry: buildBlockOnTableGeometry,
  },

  [DCL_SCENE_IDS.BLOCK_ON_INCLINE]: {
    id: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
    label: {
      es: "Bloque en plano inclinado",
      en: "Block on incline",
    },
    buildGeometry: buildBlockOnInclineGeometry,
  },

  [DCL_SCENE_IDS.HANGING_MASS]: {
    id: DCL_SCENE_IDS.HANGING_MASS,
    label: {
      es: "Masa colgante",
      en: "Hanging mass",
    },
    buildGeometry: buildHangingMassGeometry,
  },

  [DCL_SCENE_IDS.PARTICLE_FREE]: {
    id: DCL_SCENE_IDS.PARTICLE_FREE,
    label: {
      es: "Partícula libre",
      en: "Free particle",
    },
    buildGeometry: buildParticleFreeGeometry,
  },

  [DCL_SCENE_IDS.TWO_MASSES_ROPE]: {
    id: DCL_SCENE_IDS.TWO_MASSES_ROPE,
    label: {
      es: "Dos masas unidas por cuerda",
      en: "Two masses connected by rope",
    },
    buildGeometry: buildTwoMassesRopeGeometry,
  },

  [DCL_SCENE_IDS.PULLEY_SIMPLE]: {
    id: DCL_SCENE_IDS.PULLEY_SIMPLE,
    label: {
      es: "Polea simple",
      en: "Simple pulley",
    },
    buildGeometry: buildPulleySimpleGeometry,
  },
};

/* ============================================================================
 * API principal
 * ========================================================================== */

export function createSceneModel(profile, runtime = {}) {
  const {
    width = 820,
    height = 420,
    calc = null,
    lang = profile.lang || "es",
  } = runtime;

  const sceneEntry = DCL_SCENE_REGISTRY[profile.scene];
  if (!sceneEntry) {
    throw new Error(`[DCL Scene Registry] Unsupported scene "${profile.scene}".`);
  }

  const geometry = sceneEntry.buildGeometry({
    width,
    height,
    environment: profile.environment,
    profile,
  });

  const bodyIndex = Object.fromEntries(profile.bodies.map((b) => [b.id, b]));

  const bodyRuntimeMap = Object.fromEntries(
    profile.bodies.map((body) => {
      const geom = getBodyGeometry(profile.scene, body, geometry);
      return [
        body.id,
        {
          geometryKey: getBodyGeometryKey(profile.scene, body),
          geometry: geom,
          center: getBodyCenter(geom),
        },
      ];
    })
  );

  const labelUsageByBody = {};
  const shouldSnapDirections = profile.options?.snapVectorDirections === true;

  let vectorsResolved = profile.vectors
    .filter((v) => v.style?.visible !== false && v.visible !== false)
    .map((vector) => {
      const body = bodyIndex[vector.bodyId];
      const anchor = resolveBodyAnchor({
        sceneId: profile.scene,
        body,
        geometry,
        anchor: vector.anchor,
      });

      const direction = resolveDirection({
        sceneId: profile.scene,
        directionMode: vector.directionMode,
        customDirection: vector.customDirection,
        environment: profile.environment,
        vector,
        body,
      });

      const scalarValue = getScalarMagnitude(calc, vector.magnitudeId);
      const signedValue = typeof scalarValue === "number" ? scalarValue : null;

      let finalDirection = direction;
      if (typeof signedValue === "number" && signedValue < 0) {
        finalDirection = scaleVec(direction, -1);
      }

      if (shouldSnapDirections) {
        finalDirection = snapDirectionToScene(finalDirection, profile.scene, profile.environment);
      }

      const vectorLength =
        typeof signedValue === "number"
          ? buildVectorScale(signedValue)
          : 58;

      const vectorThickness =
        typeof signedValue === "number"
          ? buildVectorThickness(signedValue)
          : 2.6;

      const end = addVec(anchor, scaleVec(finalDirection, vectorLength));

      const currentCount = labelUsageByBody[vector.bodyId] ?? 0;
      labelUsageByBody[vector.bodyId] = currentCount + 1;
      const labelIndex = currentCount;

      return {
        ...vector,
        localizedLabel: getLocalizedText(vector.label, lang, vector.symbol || vector.id),
        anchorPoint: anchor,
        direction: finalDirection,
        vectorLength,
        vectorThickness,
        endPoint: end,
        scalarValue: signedValue,
        color: getVectorColor(vector),
        labelPoint: buildLabelPoint(anchor, end, labelIndex),
        derived: false,
        derivedKind: null,
        roleText: getSemanticRoleText(vector, lang),
        displayUnit: getMagnitudeUnit(calc, vector.magnitudeId),
      };
    });

  vectorsResolved = appendInclineComponents({
    profile,
    vectorsResolved,
    labelUsageByBody,
    lang,
  });

  vectorsResolved = appendResultant({
    profile,
    vectorsResolved,
    labelUsageByBody,
    lang,
  });

  const stepData = applyResolutionStep(profile, vectorsResolved);
  vectorsResolved = stepData.vectors;

  const interpretationBridge = buildGraphInterpretationPayload({
    profile,
    calc,
    vectorsResolved,
    geometry,
    lang,
    bodyRuntimeMap,
    resolutionSteps: stepData.steps,
    currentStep: stepData.currentStep,
  });

  return {
    profile,
    geometry,
    bodyIndex,
    bodyRuntimeMap,
    vectorsResolved,
    interpretationBridge,
    resolutionSteps: stepData.steps,
    currentStep: stepData.currentStep,
  };
}