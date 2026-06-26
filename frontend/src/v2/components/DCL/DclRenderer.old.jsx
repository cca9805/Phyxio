import React, { useEffect, useMemo, useRef, useState } from "react";
import { normalizeDclProfile, getLocalizedText } from "./dclGrammar";
import { createSceneModel } from "./dclSceneRegistry";
import { DCL_SCENE_REGISTRY } from "./dclSceneRegistry";

const UI_TEXT = Object.freeze({
  rendererTitleFallback: {
    es: "Diagrama de cuerpo libre",
    en: "Free-body diagram",
  },
  graphReady: {
    es: "Lectura del DCL",
    en: "FBD reading",
  },
  graphReadyDesc: {
    es: "Resumen físico de las fuerzas representadas en el diagrama.",
    en: "Physical summary of the forces represented in the diagram.",
  },
  activeForces: {
    es: "Fuerzas visibles",
    en: "Visible forces",
  },
  inactiveForces: {
    es: "Fuerzas ocultas",
    en: "Hidden forces",
  },
  warnings: {
    es: "Advertencias",
    en: "Warnings",
  },
  stepLabel: {
    es: "Paso",
    en: "Step",
  },
  prev: {
    es: "Anterior",
    en: "Previous",
  },
  next: {
    es: "Siguiente",
    en: "Next",
  },
  tooltipMagnitude: {
    es: "Magnitud",
    en: "Magnitude",
  },
  tooltipRole: {
    es: "Rol físico",
    en: "Physical role",
  },
  tooltipBody: {
    es: "Cuerpo",
    en: "Body",
  },
  tooltipVector: {
    es: "Vector",
    en: "Vector",
  },
  stepExplanationTitle: {
    es: "Explicación del paso",
    en: "Step explanation",
  },
  smartHeaderFallback: {
    es: "Diagrama de cuerpo libre",
    en: "Free-body diagram",
  },
});

function getCalcPayload({ sharedParams, paramsIn, __calc }) {
  if (sharedParams?.__calc) return sharedParams.__calc;
  if (paramsIn?.__calc) return paramsIn.__calc;
  if (__calc) return __calc;
  return null;
}

function localize(value, lang, fallback = "") {
  return getLocalizedText(value, lang, fallback);
}

function markerIdFromColor(color) {
  switch (color) {
    case "#ff6b6b":
      return "dcl-arrow-red";
    case "#4cc9f0":
      return "dcl-arrow-blue";
    case "#f4a261":
      return "dcl-arrow-orange";
    case "#c77dff":
      return "dcl-arrow-purple";
    case "#00d084":
      return "dcl-arrow-green";
    case "#00bbf9":
      return "dcl-arrow-cyan";
    case "#ffd166":
      return "dcl-arrow-yellow";
    case "#b8c0ff":
      return "dcl-arrow-indigo";
    default:
      return "dcl-arrow-default";
  }
}

function MarkerDefs() {
  const colors = [
    { id: "dcl-arrow-red", color: "#ff6b6b" },
    { id: "dcl-arrow-blue", color: "#4cc9f0" },
    { id: "dcl-arrow-orange", color: "#f4a261" },
    { id: "dcl-arrow-purple", color: "#c77dff" },
    { id: "dcl-arrow-green", color: "#00d084" },
    { id: "dcl-arrow-cyan", color: "#00bbf9" },
    { id: "dcl-arrow-yellow", color: "#ffd166" },
    { id: "dcl-arrow-indigo", color: "#b8c0ff" },
    { id: "dcl-arrow-default", color: "#e2e8f0" },
  ];

  return (
    <defs>
      {colors.map((item) => (
        <marker
          key={item.id}
          id={item.id}
          viewBox="0 0 10 10"
          refX="8.5"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={item.color} />
        </marker>
      ))}
    </defs>
  );
}

function Arrow({
  vector,
  onMouseEnter = null,
  onMouseLeave = null,
  onMouseMove = null,
  isHighlighted = false,
}) {
  const dashed =
    vector.type === "acceleration" ||
    vector.type === "velocity" ||
    vector.derived === true;

  return (
    <g
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      style={{ cursor: "pointer" }}
    >
      <line
        x1={vector.anchorPoint.x}
        y1={vector.anchorPoint.y}
        x2={vector.endPoint.x}
        y2={vector.endPoint.y}
        stroke={vector.color || "#e2e8f0"}
        strokeWidth={
          isHighlighted
            ? Math.max((vector.vectorThickness || 2.5) + 1.1, 3.6)
            : vector.vectorThickness || 2.5
        }
        strokeDasharray={dashed ? "6 5" : undefined}
        markerEnd={`url(#${markerIdFromColor(vector.color || "#e2e8f0")})`}
        strokeLinecap="round"
        opacity={vector.derived ? 0.78 : isHighlighted ? 1 : 0.98}
      />
      <text
        x={vector.labelPoint.x}
        y={vector.labelPoint.y}
        fill={vector.color || "#e2e8f0"}
        fontSize="14"
        fontWeight={isHighlighted ? "700" : "600"}
        dominantBaseline="middle"
        textAnchor="middle"
        opacity={vector.derived ? 0.9 : 1}
      >
        {vector.symbol || vector.localizedLabel}
      </text>
    </g>
  );
}

function renderBodyName(bodyGeom, bodyProfile, lang) {
  const name = localize(
    bodyProfile?.label || bodyProfile?.name,
    lang,
    bodyProfile?.id || ""
  );
  if (!name) return null;

  if (typeof bodyGeom?.x === "number") {
    return {
      x: bodyGeom.x + bodyGeom.w / 2,
      y: bodyGeom.y - 14,
      text: name,
    };
  }

  if (typeof bodyGeom?.cx === "number") {
    return {
      x: bodyGeom.cx,
      y: bodyGeom.cy - (bodyGeom.r ?? 10) - 14,
      text: name,
    };
  }

  return null;
}

function RenderRectBody({ bodyGeom }) {
  return (
    <rect
      x={bodyGeom.x}
      y={bodyGeom.y}
      width={bodyGeom.w}
      height={bodyGeom.h}
      rx="12"
      ry="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    />
  );
}

function RenderCircleBody({ bodyGeom, fill = "none" }) {
  return (
    <circle
      cx={bodyGeom.cx}
      cy={bodyGeom.cy}
      r={bodyGeom.r}
      fill={fill}
      stroke="currentColor"
      strokeWidth="2.5"
    />
  );
}

function renderSceneGeometry(sceneModel) {
  const { profile, geometry, bodyRuntimeMap } = sceneModel;

  if (profile.scene === "block_on_table") {
    const body = profile.bodies[0];
    const block = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;
    return (
      <>
        <line
          x1="80"
          y1={geometry.guides.groundY}
          x2={geometry.sceneBounds.width - 60}
          y2={geometry.guides.groundY}
          stroke="currentColor"
          strokeWidth="3"
        />
        <RenderRectBody bodyGeom={block} />
      </>
    );
  }

  if (profile.scene === "block_on_incline") {
    const { inclineStart, inclineEnd } = geometry.guides;
    const body = profile.bodies[0];
    const block = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;

    return (
      <>
        <line
          x1={inclineStart.x}
          y1={inclineStart.y}
          x2={inclineEnd.x}
          y2={inclineEnd.y}
          stroke="currentColor"
          strokeWidth="3"
        />
        <g
          transform={`translate(${block.cx} ${block.cy}) rotate(${block.angleDeg})`}
        >
          <rect
            x={-block.w / 2}
            y={-block.h / 2}
            width={block.w}
            height={block.h}
            rx="10"
            ry="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </g>
      </>
    );
  }

  if (profile.scene === "hanging_mass") {
    const anchor = geometry.guides.anchor;
    const body = profile.bodies[0];
    const mass = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;

    return (
      <>
        <line
          x1={anchor.x}
          y1={anchor.y}
          x2={mass.cx}
          y2={mass.cy - mass.r}
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx={anchor.x} cy={anchor.y} r="5" fill="currentColor" />
        <RenderCircleBody bodyGeom={mass} />
      </>
    );
  }

  if (profile.scene === "particle_free") {
    const body = profile.bodies[0];
    const point = bodyRuntimeMap[body.id]?.geometry || geometry.bodies.main;

    return (
      <>
        <circle
          cx={point.cx}
          cy={point.cy}
          r={point.r + 2}
          fill="currentColor"
          opacity="0.14"
        />
        <circle cx={point.cx} cy={point.cy} r={point.r} fill="currentColor" />
      </>
    );
  }

  if (profile.scene === "two_masses_rope") {
    const leftProfile =
      profile.bodies.find((b) => b.role === "main") || profile.bodies[0];
    const rightProfile =
      profile.bodies.find((b) => b.role === "secondary") || profile.bodies[1];

    const left = bodyRuntimeMap[leftProfile.id]?.geometry || geometry.bodies.left;
    const right =
      bodyRuntimeMap[rightProfile.id]?.geometry || geometry.bodies.right;
    const { tableY, edgeX } = geometry.guides;

    return (
      <>
        <line
          x1="90"
          y1={tableY}
          x2={edgeX}
          y2={tableY}
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          x1={edgeX}
          y1={tableY}
          x2={edgeX}
          y2={tableY + 90}
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          x1={left.x + left.w}
          y1={left.y + left.h / 2}
          x2={edgeX}
          y2={left.y + left.h / 2}
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <line
          x1={edgeX}
          y1={left.y + left.h / 2}
          x2={edgeX}
          y2={right.cy - right.r}
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <RenderRectBody bodyGeom={left} />
        <RenderCircleBody bodyGeom={right} />
      </>
    );
  }

  if (profile.scene === "pulley_simple") {
    const blockProfile =
      profile.bodies.find((b) => b.role === "main") || profile.bodies[0];
    const massProfile =
      profile.bodies.find((b) => b.role === "secondary") || profile.bodies[1];
    const pulleyProfile =
      profile.bodies.find((b) => b.role === "mechanism") || profile.bodies[2];

    const block =
      bodyRuntimeMap[blockProfile.id]?.geometry || geometry.bodies.left;
    const mass = bodyRuntimeMap[massProfile.id]?.geometry || geometry.bodies.right;
    const pulley =
      bodyRuntimeMap[pulleyProfile.id]?.geometry || geometry.bodies.pulley;
    const { tableY, supportY } = geometry.guides;

    return (
      <>
        <line
          x1="90"
          y1={tableY}
          x2={pulley.cx}
          y2={tableY}
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          x1={pulley.cx - 70}
          y1={supportY}
          x2={pulley.cx + 70}
          y2={supportY}
          stroke="currentColor"
          strokeWidth="3"
        />
        <line
          x1={pulley.cx}
          y1={supportY}
          x2={pulley.cx}
          y2={pulley.cy - pulley.r}
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <line
          x1={block.x + block.w}
          y1={block.y + block.h / 2}
          x2={pulley.cx - pulley.r}
          y2={block.y + block.h / 2}
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d={`M ${pulley.cx - pulley.r} ${block.y + block.h / 2}
              A ${pulley.r} ${pulley.r} 0 0 0 ${pulley.cx + pulley.r} ${pulley.cy}
              L ${mass.cx} ${mass.cy - mass.r}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <RenderRectBody bodyGeom={block} />
        <RenderCircleBody bodyGeom={mass} />
        <RenderCircleBody bodyGeom={pulley} />
        <circle cx={pulley.cx} cy={pulley.cy} r="4.5" fill="currentColor" />
      </>
    );
  }

  return null;
}

function getReadingFocus(profile, lang) {
  return localize(profile.interpretation?.reading_focus, lang, "");
}

function Tooltip({ data, lang }) {
  if (!data?.vector) return null;

  const vector = data.vector;
  const magnitudeText =
    typeof vector.scalarValue === "number"
      ? Number(vector.scalarValue).toFixed(2)
      : "—";

  const unitText = vector.displayUnit ? ` ${vector.displayUnit}` : "";

  return (
    <div
      style={{
        position: "absolute",
        left: data.x + 12,
        top: data.y + 12,
        pointerEvents: "none",
        zIndex: 20,
        minWidth: 190,
      }}
      className="rounded-xl border border-white/10 bg-slate-950/95 px-3 py-2 text-xs text-slate-200 shadow-2xl"
    >
      <div className="font-semibold text-slate-100">
        {localize(UI_TEXT.tooltipVector, lang)}:{" "}
        {vector.symbol || vector.localizedLabel}
      </div>
      <div className="mt-1 text-slate-400">{vector.localizedLabel}</div>
      <div className="mt-2">
        <span className="text-slate-400">
          {localize(UI_TEXT.tooltipMagnitude, lang)}:
        </span>{" "}
        <span className="text-slate-100">
          {magnitudeText}
          {unitText}
        </span>
      </div>
      <div className="mt-1">
        <span className="text-slate-400">
          {localize(UI_TEXT.tooltipRole, lang)}:
        </span>{" "}
        <span className="text-slate-100">{vector.roleText || "—"}</span>
      </div>
      <div className="mt-1">
        <span className="text-slate-400">
          {localize(UI_TEXT.tooltipBody, lang)}:
        </span>{" "}
        <span className="text-slate-100">{vector.bodyId || "—"}</span>
      </div>
    </div>
  );
}

function StepControls({ steps, currentStep, setCurrentStep, lang }) {
  if (!Array.isArray(steps) || steps.length <= 1) return null;

  return (
    <div className="mb-3 flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
        disabled={currentStep <= 0}
        className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-200 disabled:opacity-40"
      >
        {localize(UI_TEXT.prev, lang)}
      </button>

      <div className="text-xs text-slate-400">
        {localize(UI_TEXT.stepLabel, lang)} {currentStep + 1} / {steps.length}
      </div>

      <button
        type="button"
        onClick={() =>
          setCurrentStep((s) => Math.min(steps.length - 1, s + 1))
        }
        disabled={currentStep >= steps.length - 1}
        className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-200 disabled:opacity-40"
      >
        {localize(UI_TEXT.next, lang)}
      </button>

      <div className="ml-2 text-xs text-slate-300">
        {steps[currentStep]?.label || ""}
      </div>
    </div>
  );
}

function StepExplanation({ sceneModel, lang }) {
  const info = sceneModel?.interpretationBridge;
  if (!info?.currentStepExplanation) return null;

  return (
    <div className="mb-3 rounded-xl border border-sky-500/15 bg-sky-500/5 p-3 text-xs text-slate-300">
      <div className="font-semibold text-slate-100">
        {localize(UI_TEXT.stepExplanationTitle, lang)}
      </div>
      <div className="mt-1 text-slate-300">{info.currentStepExplanation}</div>
    </div>
  );
}

function InlineInterpretation({ sceneModel, lang }) {
  const info = sceneModel?.interpretationBridge;
  if (!info) return null;

  return (
    <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/50 p-3 text-xs text-slate-300">
      <div className="font-semibold text-slate-100">
        {localize(UI_TEXT.graphReady, lang)}
      </div>
      <div className="mt-1">{localize(UI_TEXT.graphReadyDesc, lang)}</div>

      <div className="mt-3 grid gap-2 md:grid-cols-2">
        <div>
          <div className="font-medium text-slate-200">
            {localize(UI_TEXT.activeForces, lang)}
          </div>
          <div className="mt-1 text-slate-400">
            {info.activeForces?.length ? info.activeForces.join(", ") : "—"}
          </div>
        </div>

        <div>
          <div className="font-medium text-slate-200">
            {localize(UI_TEXT.inactiveForces, lang)}
          </div>
          <div className="mt-1 text-slate-400">
            {info.inactiveForces?.length ? info.inactiveForces.join(", ") : "—"}
          </div>
        </div>
      </div>

      {info.equilibriumHints?.length > 0 ? (
        <div className="mt-3 text-slate-400">
          {info.equilibriumHints.join(" · ")}
        </div>
      ) : null}

      {info.graphWarnings?.length > 0 ? (
        <div className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-2 text-amber-200">
          <div className="font-medium">
            {localize(UI_TEXT.warnings, lang)}
          </div>
          <div className="mt-1">{info.graphWarnings.join(" · ")}</div>
        </div>
      ) : null}
    </div>
  );
}

function getQuestionLabel(question, lang) {
  const map = {
    force_balance: {
      es: "Equilibrio",
      en: "Equilibrium",
    },
    identify_directions: {
      es: "Direcciones de fuerza",
      en: "Force directions",
    },
    identify_forces: {
      es: "Identificación de fuerzas",
      en: "Force identification",
    },
    compare_forces: {
      es: "Comparación de fuerzas",
      en: "Force comparison",
    },
    decomposition: {
      es: "Descomposición",
      en: "Decomposition",
    },
    resultant: {
      es: "Resultante",
      en: "Resultant",
    },
  };

  return localize(map[question], lang, "");
}

function getSmartHeader(profile, lang) {
  const explicit = localize(profile.meta?.smartHeader, lang, "");
  if (explicit) return explicit;

  const sceneLabel = localize(
    DCL_SCENE_REGISTRY[profile.scene]?.label,
    lang,
    profile.scene
  );

  const questionLabel = getQuestionLabel(profile.question, lang);

  if (questionLabel && sceneLabel) {
    return `${questionLabel} · ${sceneLabel}`;
  }

  return (
    sceneLabel ||
    localize(
      profile.meta?.title,
      lang,
      localize(UI_TEXT.smartHeaderFallback, lang)
    )
  );
}

function getTheoryBridge(profile, lang) {
  const headerBridge = localize(
    profile.interpretation?.header_bridge,
    lang,
    ""
  );
  if (headerBridge) return headerBridge;

  const direct =
    localize(profile.interpretation?.graph_role, lang, "") ||
    localize(profile.interpretation?.graph_reading, lang, "") ||
    localize(profile.interpretation?.calc_reading, lang, "");

  if (direct) return direct;

  return "";
}

export default function DclRenderer({
  profile,
  lang = "es",
  width = 820,
  height = 420,
  sharedParams = null,
  paramsIn = null,
  __calc = null,
  interpretationDoc = null,
  onGraphStateChange = null,
  onInterpretationContextChange = null,
}) {
  const wrapperRef = useRef(null);
  const [hoveredVectorId, setHoveredVectorId] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  const normalizedProfile = useMemo(() => {
    return normalizeDclProfile({
      ...profile,
      lang,
    });
  }, [profile, lang]);

  const calcPayload = useMemo(
    () => getCalcPayload({ sharedParams, paramsIn, __calc }),
    [sharedParams, paramsIn, __calc]
  );

  const availableSteps = useMemo(() => {
    const steps = [
      { index: 0, label: lang === "en" ? "Base diagram" : "Diagrama base" },
    ];

    if (normalizedProfile.options?.resolveComponents === true) {
      steps.push({
        index: 1,
        label: lang === "en" ? "Components" : "Componentes",
      });
    }

    if (normalizedProfile.options?.resolveResultant === true) {
      steps.push({
        index: steps.length,
        label: lang === "en" ? "Resultant" : "Resultante",
      });
    }

    return steps;
  }, [normalizedProfile.options, lang]);

  const initialStep = useMemo(() => {
    const explicit = normalizedProfile.options?.resolutionStep;
    if (typeof explicit === "number") {
      return Math.max(0, Math.min(explicit, availableSteps.length - 1));
    }
    return Math.max(0, availableSteps.length - 1);
  }, [normalizedProfile.options, availableSteps.length]);

  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const profileForRender = useMemo(() => {
    return {
      ...normalizedProfile,
      options: {
        ...(normalizedProfile.options || {}),
        resolutionStep: currentStep,
      },
    };
  }, [normalizedProfile, currentStep]);

  const sceneModel = useMemo(() => {
    return createSceneModel(profileForRender, {
      width,
      height,
      calc: calcPayload,
      lang,
    });
  }, [profileForRender, width, height, calcPayload, lang]);

  useEffect(() => {
    if (typeof onGraphStateChange === "function") {
      onGraphStateChange(sceneModel);
    }
  }, [sceneModel, onGraphStateChange]);

  useEffect(() => {
    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({
        graph: sceneModel.interpretationBridge,
        interpretationDoc,
        calc: calcPayload,
        lang,
      });
    }
  }, [
    sceneModel,
    interpretationDoc,
    calcPayload,
    onInterpretationContextChange,
    lang,
  ]);

  const title = localize(
    normalizedProfile.meta?.title,
    lang,
    localize(UI_TEXT.rendererTitleFallback, lang, "DCL")
  );

  const smartHeader = getSmartHeader(normalizedProfile, lang);
  const theoryBridge = getTheoryBridge(normalizedProfile, lang);
  const readingFocus = getReadingFocus(normalizedProfile, lang);

  const sceneLabel = localize(
    DCL_SCENE_REGISTRY[normalizedProfile.scene]?.label,
    lang,
    normalizedProfile.scene
  );

  const normalizedSmartHeader = (smartHeader || "").trim().toLowerCase();
  const normalizedSceneLabel = (sceneLabel || "").trim().toLowerCase();

  const showSceneLabel =
    !!sceneLabel &&
    normalizedSceneLabel !== normalizedSmartHeader &&
    !normalizedSmartHeader.includes(normalizedSceneLabel);

  const showBodyNames = normalizedProfile.options?.showBodyNames === true;
  const showStepControls = normalizedProfile.options?.showStepControls === true;

  function handleVectorMouseMove(event, vector) {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    setTooltip({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      vector,
    });
  }

  function handleVectorMouseEnter(vector, event) {
    setHoveredVectorId(vector.id);
    handleVectorMouseMove(event, vector);
  }

  function handleVectorMouseLeave() {
    setHoveredVectorId(null);
    setTooltip(null);
  }

  return (
    <div
      ref={wrapperRef}
      className="relative w-full rounded-2xl border border-white/10 bg-slate-950/60 p-4"
    >
      <div className="mb-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-slate-100">
              {smartHeader || title}
            </div>

            {theoryBridge ? (
              <div className="mt-1 max-w-[70ch] text-xs text-slate-400">
                {theoryBridge}
              </div>
            ) : null}
          </div>

          {readingFocus ? (
            <div className="mt-1 max-w-[70ch] text-xs font-medium text-sky-300">
              {readingFocus}
            </div>
          ) : null}

          {showSceneLabel ? (
            <div className="shrink-0 text-xs text-slate-500">
              {sceneLabel}
            </div>
          ) : null}
        </div>
      </div>

      {showStepControls && (
        <StepControls
          steps={availableSteps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          lang={lang}
        />
      )}

      {showStepControls && <StepExplanation sceneModel={sceneModel} lang={lang} />}

      <svg
        width="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full overflow-visible rounded-xl bg-slate-900/70 text-slate-100"
      >
        <MarkerDefs />

        {renderSceneGeometry(sceneModel)}

        {showBodyNames &&
          normalizedProfile.bodies.map((body) => {
            const bodyGeom = sceneModel.bodyRuntimeMap?.[body.id]?.geometry;
            const label = renderBodyName(bodyGeom, body, lang);
            if (!label) return null;

            return (
              <text
                key={`body-name-${body.id}`}
                x={label.x}
                y={label.y}
                fill="#cbd5e1"
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
              >
                {label.text}
              </text>
            );
          })}

        {sceneModel.vectorsResolved.map((vector) => (
          <Arrow
            key={vector.id}
            vector={vector}
            isHighlighted={hoveredVectorId === vector.id}
            onMouseEnter={(event) => handleVectorMouseEnter(vector, event)}
            onMouseLeave={handleVectorMouseLeave}
            onMouseMove={(event) => handleVectorMouseMove(event, vector)}
          />
        ))}

        {(normalizedProfile.labels || [])
          .filter((label) => label.visible !== false)
          .map((label) => (
            <text
              key={label.id}
              x={width * 0.08}
              y={
                height * 0.1 +
                18 * (normalizedProfile.labels.indexOf(label) + 1)
              }
              fill="#cbd5e1"
              fontSize="12"
            >
              {localize(label.text, lang, label.id)}
            </text>
          ))}
      </svg>

      <Tooltip data={tooltip} lang={lang} />

      <InlineInterpretation sceneModel={sceneModel} lang={lang} />
    </div>
  );
}