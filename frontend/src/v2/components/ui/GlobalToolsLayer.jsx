import React from "react";
import { useTool } from "../../context/ToolContext";
import FloatingWindow from "./FloatingWindow";

import Calculadora from "../../tools/Calculadora";
import UnitConverter from "../../tools/UnitConverter";
import Constantes from "../../tools/constantes";

export default function GlobalToolsLayer() {
  const { activeTool, closeTool } = useTool();

  if (!activeTool) return null;

  if (activeTool === "calculadora") {
    return (
      <FloatingWindow title="Calculadora" onClose={closeTool} width={440} height={720}>
        <Calculadora />
      </FloatingWindow>
    );
  }

  if (activeTool === "conversor") {
    return (
      <FloatingWindow title="Conversor de unidades" onClose={closeTool} width={440} height={720}>
        <UnitConverter compact />
      </FloatingWindow>
    );
  }

  if (activeTool === "constantes") {
    return (
      <FloatingWindow title="Constantes" onClose={closeTool} width={440} height={560}>
        <Constantes />
      </FloatingWindow>
    );
  }

  return null;
}
