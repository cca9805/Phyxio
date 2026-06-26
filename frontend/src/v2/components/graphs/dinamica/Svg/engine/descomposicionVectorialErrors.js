// frontend/src/v2/components/graphs/dinamica/engine/descomposicionVectorialErrors.js
export function detectErrors(params = {}) {
  const theta = Number(params.theta ?? 30);
  const errors = [];

  if (theta === 0) {
    errors.push({
      code: "fy_zero",
      es: "Si θ = 0°, la componente vertical debe ser nula.",
      en: "If θ = 0°, the vertical component must be zero.",
    });
  }

  if (theta === 90) {
    errors.push({
      code: "fx_zero",
      es: "Si θ = 90°, la componente horizontal debe ser nula.",
      en: "If θ = 90°, the horizontal component must be zero.",
    });
  }

  if (theta < 0 || theta > 90) {
    errors.push({
      code: "domain",
      es: "Este profile está pensado para ángulos entre 0° y 90°.",
      en: "This profile is intended for angles between 0° and 90°.",
    });
  }

  return errors;
}