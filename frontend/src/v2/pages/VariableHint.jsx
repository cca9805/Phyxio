import Latex from "react-latex-next";

export default function VariableHint({ id, mag }) {
  if (!mag) return <code>{id}</code>;

  const sym = mag.symbol || id;
  const nombre = (mag.nombre || mag.name || id).replace(/_/g, " ");
  const unit = mag.unidad_si || mag.si_unit || "";
  const desc = mag.descripcion || mag.description || "";

  const tooltip = `${nombre}${unit ? ` (${unit})` : ""}${desc ? ` — ${desc}` : ""}`;

  return (
    <span
      title={tooltip}
      style={{
        cursor: "help",
        borderBottom: "1px dotted rgba(255,255,255,0.35)",
        padding: "0 2px",
        borderRadius: 4,
      }}
    >
      <Latex>{`$${sym}$`}</Latex>
    </span>
  );
}
