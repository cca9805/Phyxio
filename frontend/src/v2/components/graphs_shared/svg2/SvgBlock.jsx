// frontend/src/v2/components/graphs_shared/svg2/SvgBlock.jsx
import React from "react";
import SvgStage from "./SvgStage";
import SvgAside from "./SvgAside";
import SvgRenderer from "./SvgRenderer";
import { validateSvgConfig } from "./validateSvgConfig";
import SvgConfigErrorPanel from "./SvgConfigErrorPanel";

/**
 * SvgBlock (v2)
 * Pegamento: state + sanitize + layout Frame + Aside.
 * Soporta configs:
 *  - config.render(ctx)  (legacy)
 *  - config.objects[]    (declarativo)
 */
export default function SvgBlock({ config, externalParams = null, onExternalParamsChange }) {
  const defaults = config?.params?.defaults && typeof config.params.defaults === "object"
    ? config.params.defaults
    : {};

  const [params, setParams] = React.useState(defaults);

  // Si cambia el config
  // Params externos (p.ej. calculadora) -> permite "seguir" y sincronizar
  const mergedParams = React.useMemo(() => {
    const local = params && typeof params === "object" ? params : {};
    const ext = externalParams && typeof externalParams === "object" ? externalParams : {};
    if (typeof config?.params?.mergeExternal === "function") {
      try {
        return config.params.mergeExternal(local, ext);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("[SvgBlock] mergeExternal() crashed:", e);
        return local;
      }
    }
    return local;
  }, [params, externalParams, config]);

  // Helper para propagar cambios del SVG a params externos (calculadora)
  const propagateExternal = React.useCallback(
    (nextLocal, changedKeys) => {
      if (typeof onExternalParamsChange !== "function") return;
      if (typeof config?.params?.propagateExternal !== "function") return;
      const ext = externalParams && typeof externalParams === "object" ? externalParams : {};
      try {
        const patch = config.params.propagateExternal(nextLocal, ext, changedKeys);
        if (patch && typeof patch === "object") onExternalParamsChange(patch);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("[SvgBlock] propagateExternal() crashed:", e);
      }
    },
    [config, externalParams, onExternalParamsChange]
  );

  // Si cambia el config (p.ej. navegas a otro leaf), resetea params a defaults
  React.useEffect(() => {
    setParams(defaults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.id]);

  const safeParams = React.useMemo(() => {
    const base = mergedParams && typeof mergedParams === "object" ? mergedParams : {};
    if (typeof config?.params?.sanitize === "function") {
      try {
        return config.params.sanitize(base);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("[SvgBlock] sanitize() crashed:", e);
        return base;
      }
    }
    return base;
  }, [params, config]);

  // DEV strict mode: valida y si hay errores, muestra panel rojo
  const [devValidation, setDevValidation] = React.useState(null);

  React.useEffect(() => {
    if (!import.meta?.env?.DEV) return;
    try {
      const res = validateSvgConfig(config);
      setDevValidation(res);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("[SvgConfig] validator crashed:", e);
      setDevValidation({
        ok: false,
        errors: 1,
        warnings: 0,
        messages: { errors: ["Validator crashed."], warnings: [] },
      });
    }
  }, [config]);

  if (import.meta?.env?.DEV && devValidation && devValidation.ok === false) {
    const errs = devValidation.messages?.errors || [];
    const warns = devValidation.messages?.warnings || [];
    const details =
      `Errores:\n- ${errs.length ? errs.join("\n- ") : "(ninguno)"}\n\n` +
      `Warnings:\n- ${warns.length ? warns.join("\n- ") : "(ninguno)"}`;

    return (
      <SvgConfigErrorPanel
        title={`SVG config inválido (${config?.id || "sin id"})`}
        details={details}
      />
    );
  }

  const frame = config?.frame || {};
  const viewBox = frame?.viewBox;

  const bounds = {
    hideOutside: true,
    ...(frame?.bounds || {}),
  };

  const controls = Array.isArray(config?.params?.schema) ? config.params.schema : [];

  const title = config?.title || "Gráfico";
  const description = config?.description || "";

  const handleChange = (partial) => {
    if (!partial || typeof partial !== "object") return;
    const changedKeys = Object.keys(partial);

    setParams((p) => {
      const next = { ...(p || {}), ...partial };
      // Propagar al exterior (calculadora) si el config lo define
      propagateExternal(next, changedKeys);
      return next;
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
      <SvgStage
        width={frame?.width ?? 520}
        height={frame?.height ?? 320}
        viewBox={viewBox}
        bounds={bounds}
        params={safeParams}
        renderSvg={(frameCtx) => {
          // Backward compatible: si existe render(ctx), úsalo
          if (typeof config?.render === "function") {
            try {
              return config.render({ ...frameCtx, params: safeParams });
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error(`[SvgBlock] config.render() crashed (${config?.id || "unknown"}):`, e);
              if (import.meta?.env?.DEV) {
                return (
                  <SvgConfigErrorPanel
                    title={`Error en render() (${config?.id || "sin id"})`}
                    details={String(e?.message ?? e)}
                  />
                );
              }
              return null;
            }
          }

          // Declarativo: objects[]
          const objects = Array.isArray(config?.objects) ? config.objects : [];

          return (
            <SvgRenderer
              objects={objects}
              ctx={{
                ...frameCtx,
                params: safeParams,
                frame: {
                  viewBox: viewBox,
                  bounds: frameCtx?.bounds,
                },
              }}
            />
          );
        }}
      />

      <SvgAside
        title={title}
        description={description}
        params={safeParams}
        onChange={handleChange}
        controls={controls}
      />
    </div>
  );
}
