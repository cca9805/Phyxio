// frontend/src/v2/agent/PhyxioAgentFloating.jsx

import React, { useEffect, useRef, useState } from "react";
import PhyxioAgentPanel from "./PhyxioAgentPanel";
import phyxiAvatar from "../../assets/phyxio/phyxi/phyxio-ia.png";
import { getUiLanguage, tr } from "../utils/uiLanguage";
import "./PhyxioAgentFloating.css";

const STORAGE_KEY = "phyxio-agent-floating-position";

const DEFAULT_POSITION = {
  right: 20,
  bottom: 20,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getBubblePlacement(position) {
  if (typeof window === "undefined") {
    return "up-left";
  }

  const isOnLeftSide = position.right > window.innerWidth / 2;
  const isOnTopSide = position.bottom > window.innerHeight / 2;

  if (isOnLeftSide && isOnTopSide) return "down-right";
  if (isOnLeftSide && !isOnTopSide) return "up-right";
  if (!isOnLeftSide && isOnTopSide) return "down-left";

  return "up-left";
}

export default function PhyxioAgentFloating({
  leafId,
  locale = null,
  level = "BACHILLERATO",
  leafContext = null,
}) {
  const lang = locale || leafContext?.language || getUiLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef(null);
  const hasDraggedRef = useRef(false);
  const latestPositionRef = useRef(DEFAULT_POSITION);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const parsed = JSON.parse(stored);

      if (
        typeof parsed?.right === "number" &&
        typeof parsed?.bottom === "number"
      ) {
        setPosition(parsed);
        latestPositionRef.current = parsed;
      }
    } catch {
      setPosition(DEFAULT_POSITION);
      latestPositionRef.current = DEFAULT_POSITION;
    }
  }, []);

  useEffect(() => {
    latestPositionRef.current = position;
  }, [position]);

  function toggleOpen() {
    if (hasDraggedRef.current) {
      hasDraggedRef.current = false;
      return;
    }

    setIsOpen((current) => !current);
  }

  function closeBubble() {
    setIsOpen(false);
  }

  function handlePointerDown(event) {
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startRight: latestPositionRef.current.right,
      startBottom: latestPositionRef.current.bottom,
    };

    hasDraggedRef.current = false;
    setIsDragging(true);

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // No pasa nada si el navegador no captura el puntero.
    }
  }

  function handlePointerMove(event) {
    if (!dragRef.current) return;

    const dx = event.clientX - dragRef.current.startX;
    const dy = event.clientY - dragRef.current.startY;

    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      hasDraggedRef.current = true;
    }

    const buttonSize = window.innerWidth <= 720 ? 120 : 180;
    const margin = 8;

    const maxRight = Math.max(margin, window.innerWidth - buttonSize - margin);
    const maxBottom = Math.max(margin, window.innerHeight - buttonSize - margin);

    const nextPosition = {
      right: clamp(dragRef.current.startRight - dx, margin, maxRight),
      bottom: clamp(dragRef.current.startBottom - dy, margin, maxBottom),
    };

    latestPositionRef.current = nextPosition;
    setPosition(nextPosition);
  }

  function handlePointerUp(event) {
    if (!dragRef.current) return;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(latestPositionRef.current)
      );
    } catch {
      // No pasa nada si localStorage no está disponible.
    }

    try {
      event.currentTarget.releasePointerCapture(dragRef.current.pointerId);
    } catch {
      // Puede fallar si el puntero ya fue liberado.
    }

    dragRef.current = null;
    setIsDragging(false);
  }

  const bubblePlacement = getBubblePlacement(position);

  return (
    <div
      className={[
        "phyxio-agent-floating",
        isDragging ? "is-dragging" : "",
        `phyxio-agent-floating--${bubblePlacement}`,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        right: `${position.right}px`,
        bottom: `${position.bottom}px`,
      }}
    >
      {isOpen && (
        <div className="phyxio-agent-floating__bubble">
          <div className="phyxio-agent-floating__topbar">
            <div className="phyxio-agent-floating__identity">
              <span>{tr(lang, "Preguntar a Phyxi", "Ask Phyxi")}</span>
            </div>

            <button
              type="button"
              className="phyxio-agent-floating__close"
              onClick={closeBubble}
              aria-label={tr(lang, "Cerrar asistente Phyxio", "Close Phyxio assistant")}
            >
              ×
            </button>
          </div>

          <PhyxioAgentPanel
            leafId={leafId}
            locale={lang}
            level={level}
            leafContext={leafContext}
            compact
          />
        </div>
      )}

      <button
        type="button"
        className="phyxio-agent-floating__avatar-button"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onClick={toggleOpen}
        aria-label={tr(lang, "Abrir Phyxio Agent", "Open Phyxio Agent")}
      >
        <img
          src={phyxiAvatar}
          alt={tr(lang, "Phyxi, asistente de Phyxio", "Phyxi, Phyxio assistant")}
          className="phyxio-agent-floating__avatar"
          draggable="false"
        />
      </button>
    </div>
  );
}
