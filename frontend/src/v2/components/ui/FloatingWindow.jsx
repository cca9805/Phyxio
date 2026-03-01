import { useState, useRef, useEffect } from "react";
import "../../../styles/floating-tools.css";

export default function FloatingWindow({
  title = "Herramienta",
  onClose,
  children,
  width = 380,
  height = 540,
}) {
  const [position, setPosition] = useState({ x: window.innerWidth - width - 16, y: window.innerHeight - height - 16 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // Limitar a los bordes de la ventana
      const maxX = window.innerWidth - width;
      const maxY = window.innerHeight - height;

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, width, height]);

  const handleMouseDown = (e) => {
    if (e.target.closest(".floating-window-close")) return;

    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };

  return (
    <div
      ref={windowRef}
      className="floating-window"
      style={{ 
        width, 
        height,
        left: position.x,
        top: position.y,
        right: 'auto',
        bottom: 'auto',
      }}
      role="dialog"
      aria-label={title}
    >
      {/* Header */}
      <div 
        className="floating-window-header"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="floating-window-title">
          {title}
        </div>

        <button
          type="button"
          onClick={onClose}
          title="Cerrar"
          className="floating-window-close"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="floating-window-body">
        {children}
      </div>
    </div>
  );
}
