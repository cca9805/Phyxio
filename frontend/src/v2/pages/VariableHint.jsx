import Latex from "../components/shared/SafeLatex.jsx";

export default function VariableHint({ id, mag }) {
  if (!mag) return <code>{id}</code>;

  const sym = mag.symbol || id;
  const nombre = (mag.nombre || mag.name || id).replace(/_/g, " ");
  const unit = mag.unidad_si || mag.si_unit || "";
  const desc = mag.descripcion || mag.description || "";

  return (
    <span className="vh-wrapper">
      <span
        className="vh-trigger"
        style={{
          cursor: "help",
          borderBottom: "1.5px dotted rgba(56, 189, 248, 0.4)",
          padding: "0 2px",
          borderRadius: 2,
          transition: "all 0.2s ease"
        }}
      >
        <Latex>{`$${sym}$`}</Latex>
      </span>
      
      <div className="vh-tooltip-container">
        <div className="vh-tooltip-card">
          <strong>{nombre}</strong>
          {unit && <div className="unit">[{unit}]</div>}
          {desc && <div className="desc">{desc}</div>}
        </div>
      </div>
    </span>
  );
}
