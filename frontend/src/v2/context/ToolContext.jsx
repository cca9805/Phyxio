import React, { createContext, useContext, useState } from "react";

const ToolContext = createContext(null);

export function ToolProvider({ children }) {
  const [activeTool, setActiveTool] = useState(null);
  // activeTool: "calculadora" | "conversor" | "constantes" | null

  const openTool = (tool) => setActiveTool(tool);
  const closeTool = () => setActiveTool(null);

  return (
    <ToolContext.Provider
      value={{ activeTool, openTool, closeTool }}
    >
      {children}
    </ToolContext.Provider>
  );
}

export function useTool() {
  const ctx = useContext(ToolContext);
  if (!ctx) {
    throw new Error("useTool must be used inside ToolProvider");
  }
  return ctx;
}
