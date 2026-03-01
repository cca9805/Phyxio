// engine/models/dinamicaAplicaciones.js
import { sampleMRUA } from "../cinematica/mrua";

/**
 * Escenarios simples para conectar Dinámica -> Cinemática (gráficas).
 * - horizontal: fuerza aplicada F y rozamiento cinético mu_k
 * - plano: baja por plano con rozamiento mu_k (sin fuerza extra)
 */
export function sampleDinamicaAplicaciones({
  scenario = "horizontal",
  // comunes
  m = 1,
  g = 9.81,
  mu_k = 0.2,
  // horizontal
  F = 5,
  // plano
  theta = Math.PI / 12, // 15º
  // cinemática para pintar
  x0 = 0,
  v0 = 0,
  tMax = 10,
  n = 280,
} = {}) {
  const M = Number(m) || 0;
  const G = Number(g) || 0;
  const MU = Number(mu_k) || 0;

  let a = 0;
  let N = 0;
  let W = M * G;
  let fr = 0;

  if (scenario === "plano") {
    const th = Number(theta) || 0;
    N = W * Math.cos(th);
    fr = MU * N;
    // positivo hacia abajo por el plano
    const Wpar = W * Math.sin(th);
    a = M > 0 ? (Wpar - fr) / M : 0;
  } else {
    // horizontal
    N = W;
    fr = MU * N;
    const FF = Number(F) || 0;
    a = M > 0 ? (FF - fr) / M : 0;
  }

  const data = sampleMRUA({ x0, v0, a, tMax, n }) || [];
  // Añadimos fuerzas constantes para poder mostrarlas si quieres
  return data.map((row) => ({
    ...row,
    W,
    N,
    fr,
  }));
}
