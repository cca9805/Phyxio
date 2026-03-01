import { useTool } from "../../context/ToolContext";
import "../../../styles/floating-tools.css";

function Btn({ children, onClick, title, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`tool-launcher-btn ${active ? "active" : ""}`}
    >
      {children}
    </button>
  );
}

export default function ToolLauncher() {
  const { activeTool, openTool, closeTool } = useTool();

  const toggle = (tool) => {
    if (activeTool === tool) closeTool();
    else openTool(tool);
  };

  return (
    <div className="tool-launcher">
      <Btn
        title="Calculadora"
        onClick={() => toggle("calculadora")}
        active={activeTool === "calculadora"}
      >
        🧮
      </Btn>

      <Btn
        title="Conversor"
        onClick={() => toggle("conversor")}
        active={activeTool === "conversor"}
      >
        🔁
      </Btn>

      <Btn
        title="Constantes"
        onClick={() => toggle("constantes")}
        active={activeTool === "constantes"}
      >
        📌
      </Btn>
    </div>
  );
}
