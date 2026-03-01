import React from "react";
import { loadSvgConfigByLeafRelPath } from "./svgRegistry";
import SvgBlock from "./SvgBlock";

export default function Svg2GraphView({ leafRelPath }) {
  const [cfg, setCfg] = React.useState(null);
  const [err, setErr] = React.useState("");

  React.useEffect(() => {
    let alive = true;
    setCfg(null);
    setErr("");

    if (!leafRelPath) return;

    loadSvgConfigByLeafRelPath(leafRelPath)
      .then((c) => alive && setCfg(c))
      .catch((e) => alive && setErr(String(e?.message ?? e)));

    return () => {
      alive = false;
    };
  }, [leafRelPath]);

  if (!leafRelPath) {
    return <div className="muted">Falta leafRelPath para cargar svg.config.js</div>;
  }

  if (err) {
    // En prod puedes hacerlo silencioso si quieres
    return <div className="muted">SVG v2 no disponible: {err}</div>;
  }

  if (!cfg) return <div className="muted">Cargando SVG…</div>;

  return <SvgBlock config={cfg} />;
}
