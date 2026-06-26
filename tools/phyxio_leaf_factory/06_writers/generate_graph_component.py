#!/usr/bin/env python3
"""
Genera automáticamente el componente de gráficos Coord desde graficos.yaml del leaf.
Sin intervención humana ni IA.
"""
import argparse
import yaml
import re
from pathlib import Path


def to_camel_case(snake_str: str) -> str:
    """Convierte ids con guion/underscore a CamelCase."""
    components = re.split(r"[-_]+", snake_str)
    return ''.join(x.title() for x in components)


def to_pascal_component_name(leaf_id: str) -> str:
    """Genera nombre de componente tipo ConduccionGraphsCoord."""
    camel = to_camel_case(leaf_id)
    return f"{camel}GraphsCoord"


def extract_formula_from_leaf(leaf_path: Path) -> dict:
    """Extrae fórmula principal del formulas.yaml."""
    formulas_file = leaf_path / "formulas.yaml"
    if not formulas_file.exists():
        return {"formula": "", "target": "", "magnitudes": []}
    
    try:
        data = yaml.safe_load(formulas_file.read_text(encoding="utf-8"))
        formulas = data.get("formulas", [])
        if formulas:
            # Buscar fórmula con result_semantics.target
            for f in formulas:
                semantics = f.get("result_semantics", {})
                if semantics.get("target"):
                    return {
                        "formula": f.get("expression", ""),
                        "target": semantics.get("target", ""),
                        "magnitudes": list(f.get("magnitudes", {}).keys()) if f.get("magnitudes") else []
                    }
        return {"formula": "", "target": "", "magnitudes": []}
    except Exception:
        return {"formula": "", "target": "", "magnitudes": []}


def generate_component_code(leaf_id: str, graficos: dict, formula_info: dict) -> str:
    """Genera código JSX del componente Coord siguiendo el patrón de dinámica."""
    
    coord = graficos.get("coord", {})
    title = coord.get("title", {})
    x_axis = coord.get("xAxis", {})
    y_axis = coord.get("yAxis", {})
    
    component_name = to_pascal_component_name(leaf_id)
    
    # Para conducción: P = k * A * dT / L
    formula = "P = k A DeltaT / L"
    variable_control = "DeltaT"
    magnitud_estrella = "P"
    
    title_es = title.get('es', 'Conducción térmica')
    title_en = title.get('en', 'Thermal conduction')
    
    lines = [
        'import React, { useState, useEffect, useMemo, useCallback } from "react";',
        'import {',
        '  CartesianGrid,',
        '  Line,',
        '  LineChart,',
        '  ReferenceDot,',
        '  ReferenceLine,',
        '  ResponsiveContainer,',
        '  Tooltip,',
        '  XAxis,',
        '  YAxis,',
        '} from "recharts";',
        'import MathInline from "@/v2/components/shared/MathInline";',
        'import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";',
        'import { createCoordGraph } from "../../graphFactories.jsx";',
        '',
        'const clamp = (n, a, b) => Math.max(a, Math.min(b, n));',
        'const toNum = (v, fb) => {',
        '  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));',
        '  return Number.isFinite(n) ? n : fb;',
        '};',
        '',
        'const pickParam = (src, keys, fallback) => {',
        '  for (const k of keys) {',
        '    const v = src?.[k];',
        '    if (v === undefined || v === null || v === "") continue;',
        '    const n = toNum(v, NaN);',
        '    if (Number.isFinite(n)) return n;',
        '  }',
        '  return fallback;',
        '};',
        '',
        'function Pill({ active, children, onClick }) {',
        '  return (',
        '    <button',
        '      type="button"',
        '      onClick={onClick}',
        '      style={{',
        '        padding: "8px 10px",',
        '        borderRadius: 14,',
        '        border: "1px solid rgba(255,255,255,0.14)",',
        '        background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)",',
        '        color: "rgba(255,255,255,0.90)",',
        '        fontWeight: 900,',
        '        cursor: "pointer",',
        '      }}',
        '    >',
        '      {children}',
        '    </button>',
        '  );',
        '}',
        '',
        'const graphIdentity = {',
        f'  pregunta_principal: {{',
        f'    es: "{title_es}",',
        f'    en: "{title_en}",',
        '  },',
        f'  variable_control: "{variable_control}",',
        f'  magnitud_estrella: "{magnitud_estrella}",',
        f'  formula: "{formula}",',
        '  target_interpretable: true,',
        '};',
        '',
        'const buildSeries = ({ k, A, L, dtMin, dtMax, steps = 40 }) => {',
        '  const out = [];',
        '  for (let i = 0; i <= steps; i++) {',
        '    const dT = dtMin + (i / steps) * (dtMax - dtMin);',
        '    const P = (k * A * dT) / L;',
        '    out.push({ x: dT, P });',
        '  }',
        '  return out;',
        '};',
        '',
        f'function {component_name}View(props) {{',
        '  void graphIdentity;',
        '  const resolvedParams = props.params ?? props.sharedParams;',
        '  const lang = props.lang ?? "es";',
        '  const uiLang = lang === "en" ? "en" : "es";',
        '  const decSep = uiLang === "en" ? "." : ",";',
        '  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");',
        '  const tt = (es, en) => (uiLang === "en" ? en : es);',
        '',
        '  const p = props.params ?? props.sharedParams ?? {};',
        '',
        '  const schema = useMemo(',
        '    () => [',
        '      { key: "k", aliases: ["k", "conductividad"], default: 1.0 },',
        '      { key: "A", aliases: ["A", "area"], default: 1.0 },',
        '      { key: "L", aliases: ["L", "espesor"], default: 0.1 },',
        '      { key: "dT", aliases: ["dT", "deltaT", "DeltaT"], default: 50 },',
        '      { key: "dtMin", aliases: ["dtMin", "deltaTmin"], default: 0 },',
        '      { key: "dtMax", aliases: ["dtMax", "deltaTmax"], default: 100 },',
        '      { key: "showCurve", aliases: ["mostrarCurva"], default: true },',
        '      { key: "showPoint", aliases: ["mostrarPunto"], default: true },',
        '    ],',
        '    []',
        '  );',
        '',
        '  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });',
        '  const ep = exp.effectiveParams;',
        '',
        '  const k = clamp(toNum(ep.k, 1.0), 0.01, 500);',
        '  const A = clamp(toNum(ep.A, 1.0), 0.001, 10);',
        '  const L = clamp(toNum(ep.L, 0.1), 0.001, 1);',
        '  const dT = clamp(toNum(ep.dT, 50), 0, 500);',
        '  const dtMin = clamp(toNum(ep.dtMin, 0), 0, 50);',
        '  const dtMax = clamp(toNum(ep.dtMax, 100), 10, 500);',
        '  const showCurve = !!ep.showCurve;',
        '  const showPoint = !!ep.showPoint;',
        '',
        '  const Pnow = (k * A * dT) / L;',
        '  const Pmin = (k * A * dtMin) / L;',
        '  const Pmax = (k * A * dtMax) / L;',
        '',
        '  const data = useMemo(',
        '    () => buildSeries({ k, A, L, dtMin, dtMax }),',
        '    [k, A, L, dtMin, dtMax]',
        '  );',
        '',
        '  const yDomain = useMemo(() => {',
        '    return [0, Math.max(10, Pmax) * 1.1];',
        '  }, [Pmax]);',
        '',
        '  const setK = useCallback((value) => { exp.startExperiment(); exp.setValue("k", value); }, [exp]);',
        '  const setA = useCallback((value) => { exp.startExperiment(); exp.setValue("A", value); }, [exp]);',
        '  const setL = useCallback((value) => { exp.startExperiment(); exp.setValue("L", value); }, [exp]);',
        '  const setDT = useCallback((value) => { exp.startExperiment(); exp.setValue("dT", value); }, [exp]);',
        '  const setShowCurve = useCallback((value) => { exp.startExperiment(); exp.setValue("showCurve", value); }, [exp]);',
        '  const setShowPoint = useCallback((value) => { exp.startExperiment(); exp.setValue("showPoint", value); }, [exp]);',
        '',
        '  return (',
        '    <div style={{ display: "grid", gap: 12 }}>',
        '      <div className="v2-card" style={{ padding: 12, background: "rgba(15,23,42,0.74)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)" }}>',
        f'        <div className="v2-card-title">{{tt("{title_es}", "{title_en}")}}</div>',
        '        <div className="muted" style={{ marginTop: 6 }}>',
        '          <MathInline latex={"P = \\\\frac{k A \\\\Delta T}{L}"} />.',
        '          {tt(" Ley de Fourier: flujo de calor proporcional a ΔT", " Fourier law: heat flow proportional to ΔT")}',
        '        </div>',
        '',
        '        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>',
        '          <div',
        '            style={{',
        '              display: "flex",',
        '              gap: 10,',
        '              flexWrap: "wrap",',
        '              alignItems: "center",',
        '              padding: "8px 12px",',
        '              borderRadius: 10,',
        '              border: "1px solid rgba(59,130,246,0.2)",',
        '              background: "rgba(59,130,246,0.08)",',
        '            }}',
        '          >',
        '            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>',
        '              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"k"} /></span>',
        '              <input className="form-control" style={{ width: 74 }} value={fmt(k, 2).replace(",", ".")} onChange={(e) => setK(e.target.value)} />',
        '            </div>',
        '            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>',
        '              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"A"} /></span>',
        '              <input className="form-control" style={{ width: 74 }} value={fmt(A, 3).replace(",", ".")} onChange={(e) => setA(e.target.value)} />',
        '            </div>',
        '            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>',
        '              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"L"} /></span>',
        '              <input className="form-control" style={{ width: 74 }} value={fmt(L, 3).replace(",", ".")} onChange={(e) => setL(e.target.value)} />',
        '            </div>',
        '            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>',
        '              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"\\\\Delta T"} /></span>',
        '              <input className="form-control" style={{ width: 74 }} value={fmt(dT, 1).replace(",", ".")} onChange={(e) => setDT(e.target.value)} />',
        '            </div>',
        '            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>',
        '              {tt("Seguir calculadora", "Follow calculator")}',
        '            </button>',
        '          </div>',
        '',
        '          <div',
        '            style={{',
        '              display: "flex",',
        '              gap: 10,',
        '              flexWrap: "wrap",',
        '              alignItems: "center",',
        '              padding: "8px 12px",',
        '              borderRadius: 10,',
        '              border: "1px solid rgba(2,132,199,0.22)",',
        '              background: "rgba(2,132,199,0.10)",',
        '            }}',
        '          >',
        '            <Pill active={showCurve} onClick={() => setShowCurve(!showCurve)}>{tt("Curva", "Curve")}</Pill>',
        '            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>{tt("Punto", "Point")}</Pill>',
        '          </div>',
        '        </div>',
        '      </div>',
        '',
        '      <div className="v2-card" style={{ padding: 12 }}>',
        '        <div className="muted" style={{ marginBottom: 10 }}>',
        '          <MathInline latex={"P = \\\\frac{k A \\\\Delta T}{L}"} /> = <b>{fmt(Pnow, 2)}</b> W',
        '        </div>',
        '',
        '        <div style={{ width: "100%", height: 340 }}>',
        '          <ResponsiveContainer>',
        '            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>',
        '              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />',
        '              <XAxis',
        '                dataKey="x"',
        '                type="number"',
        '                domain={[dtMin, dtMax]}',
        '                tickFormatter={(value) => fmt(value, 0)}',
        '                stroke="rgba(255,255,255,0.4)"',
        '                label={{ value: "ΔT (K)", position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.5)" }}',
        '              />',
        '              <YAxis',
        '                domain={yDomain}',
        '                tickFormatter={(value) => fmt(value, 1)}',
        '                stroke="rgba(255,255,255,0.4)"',
        '                label={{ value: "P (W)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}',
        '              />',
        '              <Tooltip',
        '                formatter={(value) => [fmt(value, 3), "P"]}',
        '                labelFormatter={(value) => `ΔT = ${fmt(value, 1)} K`}',
        '              />',
        '              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />',
        '              {showCurve ? (',
        '                <Line',
        '                  type="monotone"',
        '                  dataKey="P"',
        '                  name="P(ΔT)"',
        '                  stroke="#3b82f6"',
        '                  strokeWidth={3}',
        '                  dot={false}',
        '                />',
        '              ) : null}',
        '              {showPoint ? (',
        '                <ReferenceDot',
        '                  x={dT}',
        '                  y={Pnow}',
        '                  r={5}',
        '                  fill="#fb923c"',
        '                  stroke="none"',
        '                />',
        '              ) : null}',
        '            </LineChart>',
        '          </ResponsiveContainer>',
        '        </div>',
        '      </div>',
        '    </div>',
        '  );',
        '}',
        '',
        f'const {component_name} = createCoordGraph({{',
        f'  Component: {component_name}View,',
        f'  displayName: "{component_name}",',
        '});',
        '',
        f'{component_name}.graphContract = {component_name}View.graphContract;',
        f'{component_name}.graph_identity = {component_name}View.graph_identity;',
        f'{component_name}.axes = {component_name}View.axes;',
        f'{component_name}.formula = {component_name}View.formula;',
        f'{component_name}.profile = {component_name}View.profile;',
        '',
        f'export default {component_name};',
    ]
    
    return "\n".join(lines)


def update_index_js(domain_dir: Path, leaf_id: str, component_name: str, graficos: dict) -> bool:
    """Actualiza el index.js del dominio para añadir el nuevo gráfico."""
    index_file = domain_dir / "index.js"
    if not index_file.exists():
        print(f"❌ No existe index.js en {domain_dir}")
        return False
    
    coord = graficos.get("coord", {})
    title = coord.get("title", {})
    x_axis = coord.get("xAxis", {})
    y_axis = coord.get("yAxis", {})
    hints = coord.get("agentHints", {})
    
    # Leer contenido actual
    content = index_file.read_text(encoding="utf-8")
    
    # Verificar si ya existe
    if f'"{leaf_id}":' in content or f'"{leaf_id}"' in content:
        print(f"⚠️  El leaf '{leaf_id}' ya existe en index.js")
        return False
    
    # Generar entrada rawGraphs
    graph_entry = f'''  "{leaf_id}": {{
    Coord: {{
      id: "{leaf_id}-Coord",
      graphId: "{leaf_id}-Coord",
      title: {{ es: "{title.get('es', 'Gráfica Coord')}", en: "{title.get('en', 'Coord Graph')}" }},
      xAxis: {{ es: "{x_axis.get('es', 'X')}", en: "{x_axis.get('en', 'X')}" }},
      yAxis: {{ es: "{y_axis.get('es', 'Y')}", en: "{y_axis.get('en', 'Y')}" }},
      xMagnitude: "diferencia_temperatura", yMagnitude: "potencia_termica",
      relation: {{ es: "P = k·A·ΔT/L. Potencia térmica proporcional a la diferencia de temperatura.", en: "P = k·A·ΔT/L. Thermal power proportional to temperature difference." }},
      physicalReading: {{ es: "Pendiente = k·A/L. Intercepto en origen.", en: "Slope = k·A/L. Intercept at origin." }},
      slopeMeaning: {{ es: "dP/dΔT = k·A/L: conductancia térmica.", en: "dP/dΔT = k·A/L: thermal conductance." }},
      interceptMeaning: {{ es: "P(0) = 0: sin diferencia de temperatura no hay flujo.", en: "P(0) = 0: no temperature difference means no flow." }},
      curvatureMeaning: {{ es: "Recta: relación lineal de Fourier.", en: "Straight: Fourier linear relation." }},
      signMeaning: {{ es: "P > 0: calor fluye de caliente a frío.", en: "P > 0: heat flows from hot to cold." }},
      areaMeaning: {{ es: "Sin interpretación directa.", en: "No direct interpretation." }},
      domainMeaning: {{ es: "ΔT > 0 K, k > 0, A > 0, L > 0.", en: "ΔT > 0 K, k > 0, A > 0, L > 0." }},
      modelConnection: {{ es: "Ley de Fourier de conducción térmica.", en: "Fourier's law of heat conduction." }},
      formulaConnection: {{ es: "P = k·A·ΔT/L, Φ = P/A, R = L/(k·A).", en: "P = k·A·ΔT/L, Φ = P/A, R = L/(k·A)." }},
      readingFocus: {{ es: "leer pendiente como conductancia y verificar linealidad.", en: "read slope as conductance and verify linearity." }},
      agentHints: {{ es: {hints.get('es', [])}, en: {hints.get('en', [])} }},
      commonMistakes: {{ es: ["Confundir P con Φ (flujo por área).", "Usar cm² sin convertir a m²."], en: ["Confusing P with Φ (flux per area).", "Using cm² without converting to m²."] }},
      recommendedTab: "graficas", type: "Coord", graphType: "Coord",
      component: {component_name},
    }},
  }},
'''
    
    # Encontrar dónde insertar (antes del cierre de rawGraphs)
    # Buscar el patrón "};" que cierra rawGraphs
    pattern = r'(const rawGraphs = \{)([\s\S]*?)(\};)'
    
    import re
    match = re.search(pattern, content)
    if match:
        # Insertar antes del cierre
        new_content = content[:match.end(2)] + '\n' + graph_entry + content[match.end(2):]
        
        # Añadir import al principio
        import_line = f'import {component_name} from "./Coord/{component_name}.jsx";\n'
        # Buscar otros imports y añadir después
        import_pattern = r'(import \w+ from "\./Coord/\w+\.jsx";\n)'
        last_import_match = None
        for m in re.finditer(import_pattern, new_content):
            last_import_match = m
        
        if last_import_match:
            new_content = new_content[:last_import_match.end()] + import_line + new_content[last_import_match.end():]
        else:
            # Añadir después del primer import
            first_import = re.search(r'(import .* from ".*";\n)', new_content)
            if first_import:
                new_content = new_content[:first_import.end()] + import_line + new_content[first_import.end():]
        
        index_file.write_text(new_content, encoding="utf-8")
        print(f"✅ index.js actualizado con {leaf_id}")
        return True
    else:
        print("❌ No se pudo encontrar el patrón rawGraphs en index.js")
        return False


def main():
    parser = argparse.ArgumentParser(description="Genera componente de gráficos Coord desde graficos.yaml")
    parser.add_argument("--leaf-id", required=True, help="ID del leaf (ej: conduccion)")
    parser.add_argument("--leafs-root", default="frontend/src/data_v2_i18n", help="Ruta raíz de los leafs")
    parser.add_argument("--domain", default="termodinamica", help="Dominio de gráficos (ej: termodinamica)")
    args = parser.parse_args()
    
    # Rutas
    project_root = Path(__file__).parent.parent.parent.parent  # tools/phyxio_leaf_factory/06_writers -> raíz
    leaf_path = project_root / args.leafs_root / "pruebas" / args.leaf_id
    graficos_file = leaf_path / "graficos.yaml"
    
    if not graficos_file.exists():
        print(f"❌ No existe graficos.yaml en {leaf_path}")
        return 1
    
    # Leer graficos.yaml
    try:
        graficos = yaml.safe_load(graficos_file.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"❌ Error leyendo graficos.yaml: {e}")
        return 1
    
    # Verificar que tenga coord
    if not graficos.get("coord"):
        print(f"⚠️  El graficos.yaml no tiene sección 'coord'")
        return 1
    
    # Extraer info de fórmulas
    formula_info = extract_formula_from_leaf(leaf_path)
    
    # Generar componente
    component_name = to_pascal_component_name(args.leaf_id)
    component_code = generate_component_code(args.leaf_id, graficos, formula_info)
    
    # Guardar componente
    domain_dir = project_root / "frontend" / "src" / "v2" / "components" / "graphs" / args.domain
    coord_dir = domain_dir / "Coord"
    coord_dir.mkdir(parents=True, exist_ok=True)
    
    component_file = coord_dir / f"{component_name}.jsx"
    component_file.write_text(component_code, encoding="utf-8")
    print(f"✅ Componente generado: {component_file}")
    
    # Actualizar index.js
    if update_index_js(domain_dir, args.leaf_id, component_name, graficos):
        print(f"\n🎉 Gráfico Coord generado exitosamente para '{args.leaf_id}'")
        print(f"   Componente: {component_name}")
        print(f"   Dominio: {args.domain}")
        return 0
    else:
        print(f"\n⚠️  Componente generado pero no se pudo actualizar index.js")
        return 1


def to_pascal_svg_component_name(leaf_id: str) -> str:
    """Genera nombre de componente SVG tipo ConveccionGraphsSvg."""
    camel = to_camel_case(leaf_id)
    return f"{camel}GraphsSvg"


def to_pascal_dcl_component_name(leaf_id: str) -> str:
    """Genera nombre de componente DCL tipo ConveccionGraphsDcl."""
    camel = to_camel_case(leaf_id)
    return f"{camel}GraphsDcl"


def generate_svg_wrapper_code(leaf_id: str) -> str:
    """Genera código JSX del wrapper SVG."""
    component_name = to_pascal_svg_component_name(leaf_id)
    profile_name = f"{leaf_id}.svg.profile"
    
    return f'''import {{ createSvgGraph }} from "@/v2/components/graphs/graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/{profile_name}.jsx";

export default createSvgGraph({{
  displayName: "{component_name}",
  profile,
}});
'''


def generate_dcl_wrapper_code(leaf_id: str) -> str:
    """Genera código JSX del wrapper DCL."""
    component_name = to_pascal_dcl_component_name(leaf_id)
    profile_name = f"{leaf_id}.dcl.profile"
    
    return f'''import {{ createDclGraph }} from "@/v2/components/graphs/graphFactories.jsx";
import profile from "@/v2/components/DCL/profiles/{profile_name}.js";

export default createDclGraph({{
  displayName: "{component_name}",
  profile,
}});
'''


def generate_svg_index_entry(leaf_id: str, graficos: dict) -> str:
    """Genera entrada SVG para index.js."""
    svg = graficos.get("svg", {})
    
    title = svg.get("title", {})
    x_axis = svg.get("xAxis", {})
    y_axis = svg.get("yAxis", {})
    
    # Agent hints
    agent_hints_es = svg.get("agentHints", {}).get("es", [])
    agent_hints_en = svg.get("agentHints", {}).get("en", [])
    
    hints_es_str = ", ".join([f'"{h}"' for h in agent_hints_es]) if agent_hints_es else '"Visualización interactiva del sistema físico."'
    hints_en_str = ", ".join([f'"{h}"' for h in agent_hints_en]) if agent_hints_en else '"Interactive visualization of the physical system."'
    
    return f'''  "{leaf_id}": {{
    Svg: {{
      id: "{leaf_id}-Svg",
      graphId: "{leaf_id}-Svg",
      title: {{ es: "{title.get('es', 'Visualización SVG')}", en: "{title.get('en', 'SVG Visualization')}" }},
      xAxis: {{ es: "{x_axis.get('es', 'x')}", en: "{x_axis.get('en', 'x')}" }},
      yAxis: {{ es: "{y_axis.get('es', 'y')}", en: "{y_axis.get('en', 'y')}" }},
      agentHints: {{
        es: [{hints_es_str}],
        en: [{hints_en_str}],
      }},
      recommendedTab: "graficas", type: "Svg", graphType: "Svg",
      component: {to_pascal_svg_component_name(leaf_id)},
    }},
  }},
'''


def generate_dcl_index_entry(leaf_id: str, graficos: dict) -> str:
    """Genera entrada DCL para index.js."""
    dcl = graficos.get("dcl", {})
    
    title = dcl.get("title", {})
    
    return f'''  "{leaf_id}": {{
    Dcl: {{
      id: "{leaf_id}-Dcl",
      graphId: "{leaf_id}-Dcl",
      title: {{ es: "{title.get('es', 'Diagrama de Cuerpo Libre')}", en: "{title.get('en', 'Free Body Diagram')}" }},
      recommendedTab: "graficas", type: "Dcl", graphType: "Dcl",
      component: {to_pascal_dcl_component_name(leaf_id)},
    }},
  }},
'''


def update_index_js_with_svg(domain_dir: Path, leaf_id: str, component_name: str, graficos: dict) -> bool:
    """Actualiza index.js con entrada SVG."""
    index_file = domain_dir / "index.js"
    if not index_file.exists():
        print(f"❌ No existe index.js en {domain_dir}")
        return False
    
    content = index_file.read_text(encoding="utf-8")
    
    # Verificar si ya existe
    if f'"{leaf_id}":' in content and "Svg:" in content.split(f'"{leaf_id}":')[0].split("{")[-1] if f'"{leaf_id}":' in content else False:
        print(f"⚠️  Entrada SVG para {leaf_id} ya existe en index.js")
        return True
    
    # Import
    import_line = f'import {component_name} from "./Svg/{component_name}.jsx";\n'
    
    # Entrada
    graph_entry = generate_svg_index_entry(leaf_id, graficos)
    
    # Insertar import
    first_import = re.search(r'(import .* from ".*";\n)', content)
    if first_import:
        content = content[:first_import.end()] + import_line + content[first_import.end():]
    
    # Insertar entrada
    pattern = r'(const rawGraphs = \{)([\s\S]*?)(\};)'
    match = re.search(pattern, content)
    if match:
        content = content[:match.end(2)] + '\n' + graph_entry + content[match.end(2):]
        index_file.write_text(content, encoding="utf-8")
        print(f"✅ index.js actualizado con SVG para {leaf_id}")
        return True
    
    return False


def update_index_js_with_dcl(domain_dir: Path, leaf_id: str, component_name: str, graficos: dict) -> bool:
    """Actualiza index.js con entrada DCL."""
    index_file = domain_dir / "index.js"
    if not index_file.exists():
        print(f"❌ No existe index.js en {domain_dir}")
        return False
    
    content = index_file.read_text(encoding="utf-8")
    
    # Verificar si ya existe
    if f'"{leaf_id}":' in content and "Dcl:" in content.split(f'"{leaf_id}":')[0].split("{")[-1] if f'"{leaf_id}":' in content else False:
        print(f"⚠️  Entrada DCL para {leaf_id} ya existe en index.js")
        return True
    
    # Import
    import_line = f'import {component_name} from "./Dcl/{component_name}.jsx";\n'
    
    # Entrada
    graph_entry = generate_dcl_index_entry(leaf_id, graficos)
    
    # Insertar import
    first_import = re.search(r'(import .* from ".*";\n)', content)
    if first_import:
        content = content[:first_import.end()] + import_line + content[first_import.end():]
    
    # Insertar entrada
    pattern = r'(const rawGraphs = \{)([\s\S]*?)(\};)'
    match = re.search(pattern, content)
    if match:
        content = content[:match.end(2)] + '\n' + graph_entry + content[match.end(2):]
        index_file.write_text(content, encoding="utf-8")
        print(f"✅ index.js actualizado con DCL para {leaf_id}")
        return True
    
    return False


def generate_all_graph_components(leaf_id: str, graficos: dict, domain_dir: Path, 
                                   svg_profile_dir: Path, dcl_profile_dir: Path) -> dict:
    """Genera todos los componentes de gráficos (Coord, Svg, Dcl) para un leaf."""
    results = {
        "coord": False,
        "svg": False,
        "dcl": False,
    }
    
    # Coord
    if graficos.get("coord"):
        coord_component = to_pascal_component_name(leaf_id)
        coord_code = generate_component_code(leaf_id, graficos, {"formula": "", "target": "", "magnitudes": []})
        
        coord_dir = domain_dir / "Coord"
        coord_dir.mkdir(parents=True, exist_ok=True)
        
        coord_file = coord_dir / f"{coord_component}.jsx"
        coord_file.write_text(coord_code, encoding="utf-8")
        
        update_index_js(domain_dir, leaf_id, coord_component, graficos)
        results["coord"] = True
        print(f"✅ Coord generado: {coord_file}")
    
    # SVG
    if graficos.get("svg"):
        svg_component = to_pascal_svg_component_name(leaf_id)
        svg_code = generate_svg_wrapper_code(leaf_id)
        
        svg_dir = domain_dir / "Svg"
        svg_dir.mkdir(parents=True, exist_ok=True)
        
        svg_file = svg_dir / f"{svg_component}.jsx"
        svg_file.write_text(svg_code, encoding="utf-8")
        
        update_index_js_with_svg(domain_dir, leaf_id, svg_component, graficos)
        results["svg"] = True
        print(f"✅ SVG wrapper generado: {svg_file}")
        
        # Generar perfil SVG si no existe
        profile_file = svg_profile_dir / f"{leaf_id}.svg.profile.jsx"
        if not profile_file.exists():
            print(f"⚠️  Perfil SVG no existe: {profile_file}")
            print(f"   Ejecuta: python generate_svg_profile.py --leaf-id {leaf_id} --title-es \"...\" --title-en \"...\"")
    
    # DCL
    if graficos.get("dcl"):
        dcl_component = to_pascal_dcl_component_name(leaf_id)
        dcl_code = generate_dcl_wrapper_code(leaf_id)
        
        dcl_dir = domain_dir / "Dcl"
        dcl_dir.mkdir(parents=True, exist_ok=True)
        
        dcl_file = dcl_dir / f"{dcl_component}.jsx"
        dcl_file.write_text(dcl_code, encoding="utf-8")
        
        update_index_js_with_dcl(domain_dir, leaf_id, dcl_component, graficos)
        results["dcl"] = True
        print(f"✅ DCL wrapper generado: {dcl_file}")
        
        # Generar perfil DCL si no existe
        profile_file = dcl_profile_dir / f"{leaf_id}.dcl.profile.js"
        if not profile_file.exists():
            print(f"⚠️  Perfil DCL no existe: {profile_file}")
            print(f"   Ejecuta: python generate_dcl_profile.py --leaf-id {leaf_id} --title-es \"...\" --title-en \"...\"")
    
    return results


if __name__ == "__main__":
    exit(main())
