import { useCallback, useEffect, useRef, useState } from "react";

/**
 * useRafPlayer
 * Motor temporal común para SVG dinámicos (play/pause/reset/seek) basado en requestAnimationFrame.
 *
 * - t avanza con dt real (no frame fijo)
 * - respeta tMax (si se da) y puede auto-parar al llegar
 */
export default function useRafPlayer({ tMax = null, initialT = 0, autoStop = true } = {}) {
  const [t, setT] = useState(initialT);
  const [isPlaying, setIsPlaying] = useState(false);

  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const reset = useCallback((nextT = 0) => {
    setIsPlaying(false);
    setT(nextT);
    lastTsRef.current = null;
  }, []);

  const seek = useCallback((nextT) => {
    setT(nextT);
  }, []);

  const play = useCallback(() => setIsPlaying(true), []);
  const toggle = useCallback(() => setIsPlaying((s) => !s), []);

  useEffect(() => {
    if (!isPlaying) return;

    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      setT((prev) => {
        const next = prev + dt;
        if (tMax != null && Number.isFinite(tMax)) {
          if (autoStop && next >= tMax) {
            // parar justo en tMax
            setIsPlaying(false);
            return tMax;
          }
          return next;
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [isPlaying, tMax, autoStop]);

  return { t, isPlaying, setIsPlaying, play, stop, toggle, reset, seek };
}
