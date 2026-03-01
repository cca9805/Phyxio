// frontend/src/v2/components/graphs_shared/svg2/validateSvgConfig.js
// Validador ligero para SvgConfig (solo warnings/errores).
// Diseñado para DEV: imprime en consola y devuelve mensajes acumulados.

function isNum(n) {
  return typeof n === "number" && Number.isFinite(n);
}

function warn(id, msg, extra, bag) {
  // eslint-disable-next-line no-console
  console.warn(`[SvgConfig:${id || "unknown"}] ${msg}`, extra ?? "");
  if (bag) bag.warnings.push(msg);
}

function err(id, msg, extra, bag) {
  // eslint-disable-next-line no-console
  console.error(`[SvgConfig:${id || "unknown"}] ${msg}`, extra ?? "");
  if (bag) bag.errors.push(msg);
}

export function validateSvgConfig(config) {
  const id = config?.id || config?.title || "unknown";
  const bag = { errors: [], warnings: [] };

  if (!config || typeof config !== "object") {
    err(id, "Config no es un objeto.", config, bag);
    return { ok: false, errors: 1, warnings: 0, messages: bag };
  }

  let errors = 0;
  let warnings = 0;

  // id
  if (!config.id || typeof config.id !== "string") {
    warnings++;
    warn(id, `Falta "id" string. Recomendado para debug y consistencia.`, null, bag);
  }

  // title (opcional pero recomendado)
  if (config.title != null && typeof config.title !== "string") {
    warnings++;
    warn(id, `"title" debería ser string si existe.`, { title: config.title }, bag);
  }

  // frame + viewBox
  const vb = config?.frame?.viewBox;
  if (!vb || typeof vb !== "object") {
    errors++;
    err(id, `Falta frame.viewBox {xMin,xMax,yMin,yMax}.`, { frame: config?.frame }, bag);
  } else {
    const keys = ["xMin", "xMax", "yMin", "yMax"];
    for (const k of keys) {
      if (!isNum(vb[k])) {
        errors++;
        err(id, `frame.viewBox.${k} debe ser number finito.`, vb, bag);
      }
    }
    if (isNum(vb.xMin) && isNum(vb.xMax) && vb.xMax <= vb.xMin) {
      errors++;
      err(id, `frame.viewBox.xMax debe ser > xMin.`, vb, bag);
    }
    if (isNum(vb.yMin) && isNum(vb.yMax) && vb.yMax <= vb.yMin) {
      errors++;
      err(id, `frame.viewBox.yMax debe ser > yMin.`, vb, bag);
    }
  }

  // bounds
  const bounds = config?.frame?.bounds;
  if (bounds != null && typeof bounds !== "object") {
    warnings++;
    warn(id, `frame.bounds debería ser objeto si existe.`, bounds, bag);
  } else if (bounds && typeof bounds === "object") {
    const bKeys = ["floorY", "ceilingY", "leftX", "rightX"];
    for (const k of bKeys) {
      if (bounds[k] != null && !isNum(bounds[k])) {
        warnings++;
        warn(id, `bounds.${k} debería ser number (o undefined).`, bounds, bag);
      }
    }
    if (bounds.behavior && !["clamp", "hide", "bounce"].includes(bounds.behavior)) {
      warnings++;
      warn(
        id,
        `bounds.behavior inválido: "${bounds.behavior}". Usa "clamp"|"hide"|"bounce".`,
        bounds,
        bag
      );
    }
    if (bounds.hideOutside != null && typeof bounds.hideOutside !== "boolean") {
      warnings++;
      warn(id, `bounds.hideOutside debería ser boolean si existe.`, bounds, bag);
    }
  }

  // params.defaults + schema
  const defaults = config?.params?.defaults;
  if (defaults != null && typeof defaults !== "object") {
    warnings++;
    warn(id, `params.defaults debería ser objeto si existe.`, defaults, bag);
  } else if (!defaults) {
    warnings++;
    warn(id, `Falta params.defaults (obj). Recomendado aunque el gráfico no tenga controles.`, null, bag);
  }

  const schema = config?.params?.schema;
  if (schema != null && !Array.isArray(schema)) {
    errors++;
    err(id, `params.schema debe ser un array si existe.`, schema, bag);
  }

  // schema keys -> defaults
  if (Array.isArray(schema)) {
    const knownTypes = new Set(["number", "range", "toggle", "select"]);
    const keys = new Set();

    for (const c of schema) {
      if (!c || typeof c !== "object") {
        warnings++;
        warn(id, `Un control en schema no es objeto.`, c, bag);
        continue;
      }
      if (!c.key || typeof c.key !== "string") {
        errors++;
        err(id, `Un control en schema no tiene key string.`, c, bag);
        continue;
      }
      if (keys.has(c.key)) {
        warnings++;
        warn(id, `Key duplicada en schema: "${c.key}".`, c, bag);
      }
      keys.add(c.key);

      if (!c.type || !knownTypes.has(c.type)) {
        warnings++;
        warn(id, `Control "${c.key}" tiene type inválido: "${c.type}".`, c, bag);
      }

      if (c.label != null && typeof c.label !== "string") {
        warnings++;
        warn(id, `Control "${c.key}" label debería ser string.`, c, bag);
      }

      if ((c.type === "range" || c.type === "number") && (c.min != null || c.max != null)) {
        if (c.min != null && !isNum(c.min)) {
          warnings++;
          warn(id, `Control "${c.key}" min debería ser number.`, c, bag);
        }
        if (c.max != null && !isNum(c.max)) {
          warnings++;
          warn(id, `Control "${c.key}" max debería ser number.`, c, bag);
        }
        if (isNum(c.min) && isNum(c.max) && c.max <= c.min) {
          warnings++;
          warn(id, `Control "${c.key}" tiene max <= min.`, c, bag);
        }
      }

      if (c.step != null && !isNum(c.step)) {
        warnings++;
        warn(id, `Control "${c.key}" step debería ser number.`, c, bag);
      }

      if (c.type === "select") {
        if (!Array.isArray(c.options)) {
          warnings++;
          warn(id, `Control "${c.key}" type="select" debería tener options[].`, c, bag);
        } else {
          for (const opt of c.options) {
            if (!opt || typeof opt !== "object" || opt.value == null) {
              warnings++;
              warn(id, `Control "${c.key}" tiene una option inválida.`, opt, bag);
            }
          }
        }
      }

      if (defaults && typeof defaults === "object" && !(c.key in defaults)) {
        warnings++;
        warn(id, `schema incluye "${c.key}" pero no existe en params.defaults.`, { key: c.key, defaults }, bag);
      }
    }
  }

  // sanitize
  if (config?.params?.sanitize != null && typeof config.params.sanitize !== "function") {
    warnings++;
    warn(id, `params.sanitize debería ser función si existe.`, config.params.sanitize, bag);
  }

  // objects vs render
  const hasRender = typeof config.render === "function";
  const hasObjects = Array.isArray(config.objects);

  if (!hasRender && !hasObjects) {
    errors++;
    err(id, `Config debe tener "render(ctx)" o "objects[]".`, config, bag);
  }

  if (hasObjects) {
    for (let i = 0; i < config.objects.length; i++) {
      const o = config.objects[i];
      if (!o || typeof o !== "object") {
        warnings++;
        warn(id, `objects[${i}] no es objeto.`, o, bag);
        continue;
      }
      if (!o.type || typeof o.type !== "string") {
        warnings++;
        warn(id, `objects[${i}] sin type string.`, o, bag);
      }
      if (o.when != null && typeof o.when !== "function" && typeof o.when !== "boolean") {
        warnings++;
        warn(id, `objects[${i}].when debería ser boolean o función(ctx).`, o, bag);
      }
    }
  }

  const ok = errors === 0;

  if (!ok) {
    err(id, `Config inválido: ${errors} error(es), ${warnings} warning(s).`, null, bag);
  } else if (warnings > 0) {
    warn(id, `Config OK con ${warnings} warning(s).`, null, bag);
  }

  return { ok, errors, warnings, messages: bag };
}



