import { useEffect, useMemo, useRef, useState } from "react";
import "../../styles/floating-tools.css";
import { getUiLanguage } from "../utils/uiLanguage";

const STORAGE_KEY = "phyxio_basic_calculator_v1";

const UI_TEXT = {
  es: {
    title: "Calculadora",
    expression: "Expresion",
    expressionPlaceholder: "Ej: 3*(2+5)^2",
    result: "Resultado",
    power: "Potencia",
    sqrtTitle: "Raiz cuadrada: sqrt(",
    saveHistory: "Guardar en historial (tambien Enter)",
    history: "Historial",
    clear: "Limpiar",
    noHistory: "Aun no hay calculos guardados.",
    reuseExpression: "Reutilizar expresion",
    genericError: "Error",
  },
  en: {
    title: "Calculator",
    expression: "Expression",
    expressionPlaceholder: "Ex: 3*(2+5)^2",
    result: "Result",
    power: "Power",
    sqrtTitle: "Square root: sqrt(",
    saveHistory: "Save to history (also Enter)",
    history: "History",
    clear: "Clear",
    noHistory: "There are no saved calculations yet.",
    reuseExpression: "Reuse expression",
    genericError: "Error",
  },
};

const ERROR_MAP_EN = {
  "Numero invalido (demasiados puntos).": "Invalid number (too many decimal points).",
  "Parentesis desbalanceados.": "Unbalanced parentheses.",
  "Token inesperado.": "Unexpected token.",
  "sqrt() invalido.": "Invalid sqrt().",
  "sqrt() de numero negativo.": "sqrt() of a negative number.",
  "Operacion invalida.": "Invalid operation.",
  "Division por cero.": "Division by zero.",
  "RPN invalido.": "Invalid RPN.",
  "Expresion invalida.": "Invalid expression.",
};

function toUiError(msg, lang) {
  if (!msg) return "";
  const raw = String(msg);
  if (lang !== "en") return raw;
  if (ERROR_MAP_EN[raw]) return ERROR_MAP_EN[raw];
  if (raw.startsWith("Caracter no valido:")) return raw.replace("Caracter no valido:", "Invalid character:");
  if (raw.startsWith("Identificador no soportado:")) return raw.replace("Identificador no soportado:", "Unsupported identifier:");
  if (raw.startsWith("Funcion no soportada:")) return raw.replace("Funcion no soportada:", "Unsupported function:");
  if (raw.startsWith("Operador no soportado:")) return raw.replace("Operador no soportado:", "Unsupported operator:");
  return raw;
}

/**
 * Tokeniza una expresion sencilla:
 * - Numeros: 12, 12.3, 12,3
 * - Operadores: + - * / ^
 * - Parentesis: ( )
 * - Identificadores: pi, e, sqrt
 * - Coma decimal -> punto
 */
function tokenize(expr) {
  const s = String(expr ?? "")
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/π/g, "pi");

  const tokens = [];
  let i = 0;

  const isDigit = (c) => c >= "0" && c <= "9";
  const isAlpha = (c) => (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c === "_";

  while (i < s.length) {
    const c = s[i];

    // number
    if (isDigit(c) || (c === "." && isDigit(s[i + 1]))) {
      let j = i + 1;
      while (j < s.length && (isDigit(s[j]) || s[j] === ".")) j++;
      const raw = s.slice(i, j);
      if ((raw.match(/\./g) || []).length > 1) throw new Error("Numero invalido (demasiados puntos).");
      tokens.push({ type: "num", value: Number(raw) });
      i = j;
      continue;
    }

    // identifier (pi, e, sqrt)
    if (isAlpha(c)) {
      let j = i + 1;
      while (j < s.length && (isAlpha(s[j]) || isDigit(s[j]))) j++;
      const id = s.slice(i, j).toLowerCase();
      tokens.push({ type: "id", value: id });
      i = j;
      continue;
    }

    // operators / parentheses
    if ("+-*/^()".includes(c)) {
      tokens.push({ type: "sym", value: c });
      i += 1;
      continue;
    }

    throw new Error(`Caracter no valido: "${c}"`);
  }

  return tokens;
}

/**
 * Shunting-yard -> RPN (Reverse Polish Notation)
 * Soporta:
 * - + - * / ^
 * - unary minus
 * - funcion sqrt(x)
 * - constantes pi, e
 */
function toRpn(tokens) {
  const out = [];
  const opStack = [];

  const prec = {
    "u-": 5,
    "^": 4,
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
  };

  const rightAssoc = new Set(["^", "u-"]);

  const isOp = (t) => t?.type === "op";
  const isFunc = (t) => t?.type === "func";

  let prev = null;

  for (const t of tokens) {
    if (t.type === "num") {
      out.push(t);
      prev = t;
      continue;
    }

    if (t.type === "id") {
      // funciones soportadas
      if (t.value === "sqrt") {
        opStack.push({ type: "func", value: "sqrt" });
      } else if (t.value === "pi") {
        out.push({ type: "num", value: Math.PI });
      } else if (t.value === "e") {
        out.push({ type: "num", value: Math.E });
      } else {
        throw new Error(`Identificador no soportado: ${t.value}`);
      }
      prev = t;
      continue;
    }

    if (t.type === "sym") {
      const v = t.value;

      if (v === "(") {
        opStack.push({ type: "lpar", value: "(" });
        prev = t;
        continue;
      }

      if (v === ")") {
        while (opStack.length && opStack[opStack.length - 1].type !== "lpar") {
          out.push(opStack.pop());
        }
        if (!opStack.length) throw new Error("Parentesis desbalanceados.");
        opStack.pop(); // pop "("

        // si encima hay una funcion, se aplica
        if (opStack.length && isFunc(opStack[opStack.length - 1])) {
          out.push(opStack.pop());
        }

        prev = t;
        continue;
      }

      // operador
      if ("+-*/^".includes(v)) {
        // unary minus si:
        // - al inicio
        // - despues de '('
        // - despues de otro operador
        const unary =
          v === "-" &&
          (!prev ||
            (prev.type === "sym" && prev.value === "(") ||
            (prev.type === "op") ||
            (prev.type === "sym" && "+-*/^".includes(prev.value)));

        const op = { type: "op", value: unary ? "u-" : v };

        while (opStack.length) {
          const top = opStack[opStack.length - 1];

          if (isFunc(top)) {
            out.push(opStack.pop());
            continue;
          }

          if (isOp(top)) {
            const pTop = prec[top.value] ?? 0;
            const pOp = prec[op.value] ?? 0;
            const shouldPop =
              rightAssoc.has(op.value) ? pTop > pOp : pTop >= pOp;

            if (shouldPop) {
              out.push(opStack.pop());
              continue;
            }
          }

          break;
        }

        opStack.push(op);
        prev = op;
        continue;
      }
    }

    throw new Error("Token inesperado.");
  }

  while (opStack.length) {
    const x = opStack.pop();
    if (x.type === "lpar") throw new Error("Parentesis desbalanceados.");
    out.push(x);
  }

  return out;
}

function evalRpn(rpn) {
  const st = [];

  for (const t of rpn) {
    if (t.type === "num") {
      st.push(t.value);
      continue;
    }

    if (t.type === "func") {
      if (t.value === "sqrt") {
        const a = st.pop();
        if (!Number.isFinite(a)) throw new Error("sqrt() invalido.");
        if (a < 0) throw new Error("sqrt() de numero negativo.");
        st.push(Math.sqrt(a));
        continue;
      }
      throw new Error(`Funcion no soportada: ${t.value}`);
    }

    if (t.type === "op") {
      if (t.value === "u-") {
        const a = st.pop();
        if (!Number.isFinite(a)) throw new Error("Operacion invalida.");
        st.push(-a);
        continue;
      }

      const b = st.pop();
      const a = st.pop();
      if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error("Operacion invalida.");

      switch (t.value) {
        case "+":
          st.push(a + b);
          break;
        case "-":
          st.push(a - b);
          break;
        case "*":
          st.push(a * b);
          break;
        case "/":
          if (b === 0) throw new Error("Division por cero.");
          st.push(a / b);
          break;
        case "^":
          st.push(Math.pow(a, b));
          break;
        default:
          throw new Error(`Operador no soportado: ${t.value}`);
      }
      continue;
    }

    throw new Error("RPN invalido.");
  }

  if (st.length !== 1 || !Number.isFinite(st[0])) throw new Error("Expresion invalida.");
  return st[0];
}

function formatResult(x) {
  if (!Number.isFinite(x)) return "";
  const abs = Math.abs(x);
  if (abs !== 0 && (abs >= 1e6 || abs < 1e-4)) return x.toExponential(10);
  // redondeo suave
  const r = Math.round(x * 1e12) / 1e12;
  return String(r);
}

function safeLoad() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function safeSave(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silent
  }
}

function Btn({ children, onClick, title, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`calc-btn ${className}`}
    >
      {children}
    </button>
  );
}

export default function Calculadora() {
  const lang = getUiLanguage();
  const t = UI_TEXT[lang] || UI_TEXT.es;
  const [expr, setExpr] = useState("2*(3+5)");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);

  // Load persisted state
  useEffect(() => {
    const saved = safeLoad();
    if (!saved) return;
    if (typeof saved.expr === "string") setExpr(saved.expr);
    if (Array.isArray(saved.history)) setHistory(saved.history.slice(0, 12));
  }, []);

  // Persist
  useEffect(() => {
    const timer = setTimeout(() => safeSave({ expr, history }), 200);
    return () => clearTimeout(timer);
  }, [expr, history]);

  const computed = useMemo(() => {
    try {
      if (!String(expr).trim()) return { ok: false, value: "", error: "" };

      const tokens = tokenize(expr);
      const rpn = toRpn(tokens);
      const val = evalRpn(rpn);

      return { ok: true, value: formatResult(val), error: "" };
    } catch (e) {
      return { ok: false, value: "", error: toUiError(e?.message || t.genericError, lang) };
    }
  }, [expr, lang, t.genericError]);

  // Resultado "en vivo" (pero sin ensuciar historial)
  useEffect(() => {
    setResult(computed.ok ? computed.value : "");
    setError(computed.ok ? "" : computed.error);
  }, [computed]);

  function focusInput() {
    requestAnimationFrame(() => inputRef.current?.focus?.());
  }

  function insert(txt) {
    setExpr((prev) => `${prev}${txt}`);
    focusInput();
  }

  function clearAll() {
    setExpr("");
    setResult("");
    setError("");
    focusInput();
  }

  function backspace() {
    setExpr((prev) => prev.slice(0, -1));
    focusInput();
  }

  function commit() {
    if (!String(expr).trim()) return;
    if (!computed.ok) return;

    const entry = { expr: expr.replace(/\s+/g, ""), result: computed.value, ts: Date.now() };
    setHistory((h) => [entry, ...h.filter((x) => x.expr !== entry.expr)].slice(0, 12));
    focusInput();
  }

  function useHistory(item) {
    setExpr(item.expr);
    focusInput();
  }

  return (
    <div className="calc-container">
      <div className="calc-header">
        <h3 className="calc-title">{t.title}</h3>
      </div>

      <div className="calc-main-panel">
        <label className="calc-label">{t.expression}</label>
        <input
          ref={inputRef}
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") commit();
          }}
          placeholder={t.expressionPlaceholder}
          className="calc-input"
        />

        <div className="calc-result-box">
          <div className="calc-result-label">{t.result}</div>
          <div className="calc-result-value">
            {result ? result : <span className="calc-result-placeholder">...</span>}
          </div>
          {error ? (
            <div className="calc-error">
              {error}
            </div>
          ) : null}
        </div>

        <div className="calc-keypad">
          <Btn onClick={() => clearAll()} className="calc-btn-wide">C</Btn>
          <Btn onClick={() => backspace()}>⌫</Btn>
          <Btn onClick={() => insert("(")}>(</Btn>

          <Btn onClick={() => insert("7")}>7</Btn>
          <Btn onClick={() => insert("8")}>8</Btn>
          <Btn onClick={() => insert("9")}>9</Btn>
          <Btn onClick={() => insert(")")}>)</Btn>

          <Btn onClick={() => insert("4")}>4</Btn>
          <Btn onClick={() => insert("5")}>5</Btn>
          <Btn onClick={() => insert("6")}>6</Btn>
          <Btn onClick={() => insert("*")}>×</Btn>

          <Btn onClick={() => insert("1")}>1</Btn>
          <Btn onClick={() => insert("2")}>2</Btn>
          <Btn onClick={() => insert("3")}>3</Btn>
          <Btn onClick={() => insert("/")}>÷</Btn>

          <Btn onClick={() => insert("0")}>0</Btn>
          <Btn onClick={() => insert(".")}>.</Btn>
          <Btn onClick={() => insert("+")}>+</Btn>
          <Btn onClick={() => insert("-")}>−</Btn>

          <Btn onClick={() => insert("^")} title={t.power}>^</Btn>
          <Btn onClick={() => insert("π")} title="pi">π</Btn>
          <Btn onClick={() => insert("e")} title="e">e</Btn>
          <Btn
            onClick={() => insert("sqrt(")}
            title={t.sqrtTitle}
          >
            √(
          </Btn>

          <Btn
            onClick={() => commit()}
            className="calc-btn-full"
            title={t.saveHistory}
          >
            =
          </Btn>
        </div>
      </div>

      <div className="calc-history-section">
        <div className="calc-history-header">
          <h4 className="calc-history-title">{t.history}</h4>
          <button
            type="button"
            className="calc-history-clear"
            onClick={() => setHistory([])}
          >
            {t.clear}
          </button>
        </div>

        {history.length === 0 ? (
          <div className="calc-history-empty">
            {t.noHistory}
          </div>
        ) : (
          <div className="calc-history-list">
            {history.map((h) => (
              <button
                key={h.ts}
                type="button"
                onClick={() => useHistory(h)}
                className="calc-history-item"
                title={t.reuseExpression}
              >
                <div className="calc-history-expr">{h.expr}</div>
                <div className="calc-history-result">= {h.result}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

