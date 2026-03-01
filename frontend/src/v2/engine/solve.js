import { create, all } from "mathjs";

const math = create(all, { number: "number", precision: 14 });


function toZeroForm(equation) {
  const parts = equation.split("=");
  if (parts.length !== 2) throw new Error("Ecuación inválida (debe contener '=')");
  const lhs = parts[0].trim();
  const rhs = parts[1].trim();
  return `(${lhs}) - (${rhs})`;
}

function extractSymbolsFromEquation(equation) {
  // Usamos forma cero para capturar símbolos de ambos lados
  const zero = toZeroForm(equation);
  const node = math.parse(zero);

  const symbols = new Set();

  node.traverse((n) => {
    if (!n.isSymbolNode) return;

    const name = n.name;

    // Si ese nombre existe en math como función/constante (sqrt, sin, pi, e, etc.),
    // no es un "dato" que el usuario deba introducir.
    if (typeof math[name] === "function") return;
    if (typeof math[name] === "number") return;
    if (typeof math[name] === "boolean") return;
    if (name === "Infinity" || name === "NaN") return;

    symbols.add(name);
  });

  return Array.from(symbols);
}


function evalConstraint(expr, scope) {
  const v = math.evaluate(expr, scope);
  return Boolean(v);
}

const LATEX_ALIAS = {
  x0: "x_0",
  y0: "y_0",
  v0: "v_0",
  dx: "\\Delta x",
  dt: "\\Delta t",

  // ✅ Dinámica (componentes)
  ax: "a_x",
  ay: "a_y",
  vx: "v_x",
  vy: "v_y",
  Fx: "F_x",
  Fy: "F_y",
  Fnet: "\\sum \\vec F",
  
  // ✅ Coeficientes griegos
  mu_s: "\\mu_s",
  mu_k: "\\mu_k",
  mu: "\\mu",

  // ✅ Centro de masas (subíndices numéricos)
  m1: "m_1",
  m2: "m_2",
  m3: "m_3",
  m4: "m_4",
  x1: "x_1",
  x2: "x_2",
  x3: "x_3",
  x4: "x_4",
  y1: "y_1",
  y2: "y_2",
  y3: "y_3",
  y4: "y_4",
  z1: "z_1",
  z2: "z_2",
  z3: "z_3",
  z4: "z_4",
  xcm: "x_{cm}",
  ycm: "y_{cm}",
  zcm: "z_{cm}",
};


function formatNumber(n) {
  if (!Number.isFinite(n)) return String(n);
  const abs = Math.abs(n);
  if (abs !== 0 && (abs < 1e-4 || abs >= 1e6)) return n.toExponential(4);
  return String(Math.round(n * 1e6) / 1e6);
}

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceLatexToken(s, token, replacement) {
  // Reemplaza token cuando:
  // - NO está pegado a letras/backslash por la izquierda (evita comandos)
  // - NO está seguido de '_' (evita v_0 cuando token=v)
  // - Puede estar seguido de otras letras (para manejar productos como mg, vt, etc.)
  const t = escapeRegExp(token);
  const re = new RegExp(`(?<![A-Za-z\\\\])${t}(?![_])`, "g");
  return s.replace(re, replacement);
}

function substituteLatex(latex, known) {
  let s = String(latex || "");

  console.log('[substituteLatex] Input latex:', s);
  console.log('[substituteLatex] known:', known);

  // Ordenar keys por longitud para evitar reemplazos parciales (x0 antes que x)
  const keys = Object.keys(known || {}).sort((a, b) => b.length - a.length);

  for (const k of keys) {
    const val = known[k];
    if (!Number.isFinite(val)) continue;

    const latexName = LATEX_ALIAS[k] || k;

    // Paréntesis para evitar líos de signos y mejorar lectura
    const num = `(${formatNumber(val)})`;

    console.log(`[substituteLatex] Reemplazando ${k} (latex: ${latexName}) con ${num}`);

    // 1) Si es algo "compuesto" (subíndices o comandos), reemplazo exacto
    //    Ej: v_0, x_0, \Delta x
    if (latexName.includes("_") || latexName.startsWith("\\") || latexName.includes("\\Delta")) {
      s = s.replaceAll(latexName, num);
    } else {
      // 2) Token simple: primero intentar reemplazar en contextos de funciones trigonométricas
      //    Ej: \cos\theta, \sin\phi, \tan\alpha
      const trigPattern = new RegExp(`(\\\\(?:sin|cos|tan|sec|csc|cot))\\\\?${escapeRegExp(latexName)}(?![_A-Za-z0-9])`, 'g');
      s = s.replace(trigPattern, `$1${num}`);
      
      // 3) Luego reemplazo token-aware normal
      s = replaceLatexToken(s, latexName, num);
    }

    // 4) Por si el latex trae el id sin alias (x0 en vez de x_0)
    if (latexName !== k) {
      if (k.includes("_") || k.startsWith("\\") || k.includes("\\Delta")) {
        s = s.replaceAll(k, num);
      } else {
        const trigPattern = new RegExp(`(\\\\(?:sin|cos|tan|sec|csc|cot))\\\\?${escapeRegExp(k)}(?![_A-Za-z0-9])`, 'g');
        s = s.replace(trigPattern, `$1${num}`);
        s = replaceLatexToken(s, k, num);
      }
    }

    console.log(`[substituteLatex] Resultado parcial:`, s);
  }

  console.log('[substituteLatex] Output:', s);
  return s;
}



// Método de la secante para f(x)=0
function solveNumeric(zeroExpr, target, known, guess = 1) {
  const f = (x) => math.evaluate(zeroExpr, { ...known, [target]: x });

  let x0 = guess;
  let x1 = guess + 1;
  let f0 = f(x0);
  let f1 = f(x1);

  for (let i = 0; i < 60; i++) {
    const denom = f1 - f0;
    if (Math.abs(denom) < 1e-14) break;

    const x2 = x1 - f1 * (x1 - x0) / denom;
    const f2 = f(x2);

    if (!Number.isFinite(x2)) break;
    if (Math.abs(f2) < 1e-10) return x2;

    x0 = x1; f0 = f1;
    x1 = x2; f1 = f2;
  }

  throw new Error("No converge al resolver la ecuación.");
}

export function solveEquation({ equation, target, known, constraints = [], latex, unit }) {
  if (!equation || !target) return { ok: false, error: "Falta equation o target." };

  // Validación de datos
  const syms = extractSymbolsFromEquation(equation);
  const missing = syms.filter(s => s !== target && !(s in known));
  if (missing.length) {
    return { ok: false, error: `Faltan datos: ${missing.join(", ")}`, steps: [], warnings: [] };
  }

  // Constraints
  const failed = [];
  for (const c of constraints) {
    if (!c?.expr) continue;
    try {
      const ok = evalConstraint(c.expr, known);
      if (!ok) failed.push(c.message || `No se cumple: ${c.expr}`);
    } catch (e) {
      // si no se puede evaluar, lo tratamos como warning en MVP
    }
  }
  if (failed.length) {
    return { ok: false, error: failed[0], steps: [], warnings: failed.slice(1) };
  }

  // Resolver
  const zeroExpr = toZeroForm(equation);

  let value;
  try {
    value = solveNumeric(zeroExpr, target, known, 1);
  } catch (e) {
    return { ok: false, error: e.message, steps: [], warnings: [] };
  }

    // --- Steps didácticos ---
  // Elegimos una "fórmula bonita" si nos la pasan; si no, usamos equation.
  const latexFormula = latex || equation;

  // Para el desarrollo: NO sustituimos nunca la incógnita (target)
  const knownForSteps = { ...known };
  delete knownForSteps[target];

  console.log('[solve.js] target:', target);
  console.log('[solve.js] known:', known);
  console.log('[solve.js] knownForSteps:', knownForSteps);
  console.log('[solve.js] latexFormula:', latexFormula);

  const stepsRich = [
    { kind: "formula", latex: latexFormula },
    { kind: "substitution", latex: substituteLatex(latexFormula, knownForSteps) },
    {
      kind: "result",
      latex: `${LATEX_ALIAS[target] || target} = ${formatNumber(value)}${unit ? `\\,${unit}` : ""}`,
    },
  ];

  // DEBUG: Log para ver qué LaTeX se genera
  console.log('[solve.js] stepsRich:', stepsRich);
  console.log('[solve.js] Sustitución LaTeX:', stepsRich[1].latex);

  // Mantener compatibilidad con el formato antiguo `steps`
  const steps = [
    { type: "text", value: "Fórmula:" },
    { type: "latex", value: latexFormula },
    { type: "text", value: "Sustitución:" },
    { type: "latex", value: substituteLatex(latexFormula, knownForSteps) },
    { type: "text", value: "Resultado:" },
    { type: "latex", value: `${target} = ${formatNumber(value)}${unit ? `\\,${unit}` : ""}` },
  ];

  return { ok: true, result: { [target]: value }, steps, stepsRich, warnings: [] };
}
