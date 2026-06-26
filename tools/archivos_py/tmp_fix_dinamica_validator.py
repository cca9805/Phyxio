from __future__ import annotations

import re
import unicodedata
from pathlib import Path
from typing import Any

import yaml


ROOT = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/dinamica")

HEADING_TARGETS = {
    "modelos.md": [
        "## Modelo ideal",
        "## Modelo extendido",
        "## Dominio de validez cuantitativo",
        "## Señales de fallo del modelo",
        "## Comparación con modelos alternativos",
    ],
    "modelos.en.md": [
        "## Ideal model",
        "## Extended model",
        "## Quantitative validity domain",
        "## Model failure signals",
        "## Comparison with alternative models",
    ],
    "errores.md": [
        "## Errores conceptuales",
        "## Errores de modelo",
        "## Errores matemáticos",
        "## Errores de interpretación",
        "## Regla de autocontrol rápido",
    ],
    "errores.en.md": [
        "## Conceptual errors",
        "## Model errors",
        "## Mathematical errors",
        "## Interpretation errors",
        "## Quick self-control rule",
    ],
    "historia.md": [
        "## Problema histórico",
        "## Qué no se entendía antes",
        "## Qué cambió",
        "## Evolución conceptual",
        "## Conexión con física moderna",
    ],
    "historia.en.md": [
        "## Historical problem",
        "## What was not understood before",
        "## What changed",
        "## Conceptual evolution",
        "## Connection with modern physics",
    ],
}


def load_yaml(path: Path) -> Any:
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def normalize(text: str) -> str:
    text = text.strip()
    text = re.sub(r"^[#\s]+", "", text)
    text = re.sub(r"^\d+\.\s*", "", text)
    text = text.replace("🟢", "").replace("🔵", "").replace("🔴", "")
    text = unicodedata.normalize("NFKD", text.lower())
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    text = re.sub(r"[^a-z0-9\s]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def leaf_dirs() -> list[Path]:
    return sorted(
        meta.parent
        for meta in ROOT.rglob("meta.yaml")
        if re.search(r"^type:\s*leaf\s*$", meta.read_text(encoding="utf-8"), re.M)
    )


def rewrite_exact_headings(path: Path, targets: list[str]) -> None:
    text = path.read_text(encoding="utf-8")
    target_map = {normalize(target): target for target in targets}
    out: list[str] = []
    changed = False
    for line in text.splitlines():
        match = re.match(r"^(#{1,6})\s+(.+?)\s*$", line)
        if match:
            norm = normalize(match.group(2))
            if norm in target_map:
                new_line = target_map[norm]
                if line != new_line:
                    changed = True
                out.append(new_line)
                continue
        out.append(line)
    if changed:
        path.write_text("\n".join(out).rstrip() + "\n", encoding="utf-8")


def sanitize_formula_mentions(path: Path, formulas: list[dict[str, Any]]) -> None:
    text = path.read_text(encoding="utf-8")
    original = text
    for item in formulas:
        equation = str(item.get("equation", "")).strip()
        latex = str(item.get("latex", "")).strip()
        if not equation or not latex:
            continue
        if not any(ch in equation for ch in "=<>+-*/^"):
            continue
        pattern = re.compile(rf"(?<![$`]){re.escape(equation)}(?![$`])")
        text = pattern.sub(lambda _: f"${latex}$", text)
    if text != original:
        path.write_text(text, encoding="utf-8")


BARE_FORMULA_RE = re.compile(
    r"\b([A-Za-z]{1,3}(?:_\{?\w+\}?)?)\s*=\s*([A-Za-z0-9_\s+\-*/^(){},.\\]+)"
)
BARE_MATH_INDICATOR_RE = re.compile(
    r"[*/^]|_\{?\w|\w\(|(?:sin|cos|tan|sqrt|log|exp|theta|alpha|omega|mu|rho|sigma|delta|gamma|phi|tau|pi|beta)\b"
)
INLINE_MATH_RE = re.compile(r"(\$[^$\n]+\$|\\\([^)]*\\\))")
INLINE_CODE_FORMULA_RE = re.compile(r"`([^`]*=[^`]*)`")
INLINE_DOLLAR_MATH_RE = re.compile(r"(?<!\$)\$([^\n$]+?)\$(?!\$)")
BROKEN_INLINE_EQ_RE = re.compile(r"\\\(([^\\]*?)\\\)\s*=\s*([^\\]*?)\\\)")
BROKEN_TRAILING_PUNCT_RE = re.compile(r"(\\\([^\\]*?)([.,;:])\\\)")


def latexify_fragment(expr: str) -> str:
    expr = expr.strip()
    replacements = {
        "theta": r"\theta",
        "alpha": r"\alpha",
        "omega": r"\omega",
        "tau": r"\tau",
        "mu": r"\mu",
        "rho": r"\rho",
        "sigma": r"\sigma",
        "delta": r"\delta",
        "gamma": r"\gamma",
        "phi": r"\phi",
        "pi": r"\pi",
        "beta": r"\beta",
        "sin(": r"\sin(",
        "cos(": r"\cos(",
        "tan(": r"\tan(",
        "sqrt(": r"\sqrt(",
        "*": r" \cdot ",
    }
    for src, dst in replacements.items():
        expr = expr.replace(src, dst)
    expr = re.sub(r"\b([vaxmtFNKPRT])([fi])\b", r"\1_\2", expr)
    expr = re.sub(r"\b([vaxmtFNKPRT])([0-9])\b", r"\1_\2", expr)
    expr = re.sub(r"\s+", " ", expr).strip()
    return expr


def normalize_math_fragment(expr: str) -> str:
    expr = expr.strip()
    expr = expr.replace("\\\\", "\\")
    expr = re.sub(r"(?<!\\)\bfrac(?=\{)", r"\\frac", expr)
    expr = re.sub(r"(?<!\\)\btext(?=\{)", r"\\text", expr)
    expr = re.sub(r"(?<!\\)\bcdot\b", r"\\cdot", expr)
    expr = re.sub(r"(?<!\\)\bapprox\b", r"\\approx", expr)
    expr = re.sub(r"(?<!\\)\bpm\b", r"\\pm", expr)
    expr = re.sub(r"(?<!\\)\bgeq\b", r"\\geq", expr)
    expr = re.sub(r"(?<!\\)\bleq\b", r"\\leq", expr)
    expr = re.sub(r"(?<!\\)\bneq\b", r"\\neq", expr)
    expr = re.sub(r"(?<!\\)\bsin\(", r"\\sin(", expr)
    expr = re.sub(r"(?<!\\)\bcos\(", r"\\cos(", expr)
    expr = re.sub(r"(?<!\\)\btan\(", r"\\tan(", expr)
    expr = re.sub(r"(?<!\\)\bsqrt\(", r"\\sqrt(", expr)
    expr = re.sub(r"(?<!\\)\blog\(", r"\\log(", expr)
    expr = re.sub(r"(?<!\\)\bexp\(", r"\\exp(", expr)
    expr = re.sub(r"(?<!\\)\btheta\b", r"\\theta", expr)
    expr = re.sub(r"(?<!\\)\balpha\b", r"\\alpha", expr)
    expr = re.sub(r"(?<!\\)\bomega\b", r"\\omega", expr)
    expr = re.sub(r"(?<!\\)\btau\b", r"\\tau", expr)
    expr = re.sub(r"(?<!\\)\bmu\b", r"\\mu", expr)
    expr = re.sub(r"(?<!\\)\bpi\b", r"\\pi", expr)
    expr = expr.replace("^circ", r"^\circ")
    expr = re.sub(r"(?<=\d)sin\(", r" \\sin(", expr)
    expr = re.sub(r"(?<=\d)cos\(", r" \\cos(", expr)
    expr = re.sub(r"(?<=\d)tan\(", r" \\tan(", expr)
    expr = re.sub(r"(?<=[A-Za-z0-9}])\\frac", r" \\frac", expr)
    expr = re.sub(r"\s+", " ", expr).strip()
    return expr


def normalize_inline_math_token(token: str) -> str:
    if token.startswith(r"\(") and token.endswith(r"\)"):
        return rf"\({normalize_math_fragment(token[2:-2])}\)"
    if token.startswith("$") and token.endswith("$"):
        return f"${normalize_math_fragment(token[1:-1])}$"
    return token


def sanitize_bare_formula_lines(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    original = text
    lines_out: list[str] = []
    in_code_block = False
    in_math_block = False

    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            lines_out.append(line)
            continue
        if stripped == "$$":
            in_math_block = not in_math_block
            lines_out.append(line)
            continue
        if in_code_block or in_math_block:
            lines_out.append(line)
            continue

        def replace_code_formula(match: re.Match[str]) -> str:
            fragment = match.group(1).strip()
            if not BARE_FORMULA_RE.search(fragment) or not BARE_MATH_INDICATOR_RE.search(fragment):
                return match.group(0)
            return f"${latexify_fragment(fragment)}$"

        line = INLINE_CODE_FORMULA_RE.sub(replace_code_formula, line)
        parts = INLINE_MATH_RE.split(line)
        for idx, part in enumerate(parts):
            if not part or INLINE_MATH_RE.fullmatch(part):
                continue

            def replace_bare(match: re.Match[str]) -> str:
                rhs = match.group(2).strip()[:60]
                if not BARE_MATH_INDICATOR_RE.search(rhs):
                    return match.group(0)
                return f"${latexify_fragment(match.group(0))}$"

            parts[idx] = BARE_FORMULA_RE.sub(replace_bare, part)
        lines_out.append("".join(parts))

    new_text = "\n".join(lines_out)
    if new_text != original:
        path.write_text(new_text, encoding="utf-8")


def repair_inline_math_corruption(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    original = text
    lines_out: list[str] = []
    in_code_block = False
    in_math_block = False

    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            lines_out.append(line)
            continue
        if stripped == "$$":
            in_math_block = not in_math_block
            lines_out.append(line)
            continue
        if in_code_block or in_math_block:
            lines_out.append(line)
            continue

        line = INLINE_DOLLAR_MATH_RE.sub(lambda m: rf"\({m.group(1)}\)", line)
        line = re.sub(
            r"\\\((.*?)\\\)",
            lambda m: rf"\({m.group(1).replace('$', '')}\)",
            line,
        )
        line = re.sub(r"(?<=[A-Za-zÁÉÍÓÚáéíóúñÑüÜ])\$(?=[A-Za-zÁÉÍÓÚáéíóúñÑüÜ])", "", line)
        line = re.sub(r"(?<=[\w\.\)])\$(?=\s|$)", "", line)
        parts = INLINE_MATH_RE.split(line)
        for idx, part in enumerate(parts):
            if not part or INLINE_MATH_RE.fullmatch(part):
                continue
            parts[idx] = re.sub(r"\\(?=[A-Za-zÁÉÍÓÚáéíóúñÑüÜ])", "", part)
        lines_out.append("".join(parts))

    new_text = "\n".join(lines_out)
    if new_text != original:
        path.write_text(new_text, encoding="utf-8")


def repair_inline_math_corruption_v2(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    original = text
    lines_out: list[str] = []
    in_code_block = False
    in_math_block = False

    for line in text.splitlines():
        stripped = line.strip()
        if stripped.startswith("```"):
            in_code_block = not in_code_block
            lines_out.append(line)
            continue
        if stripped == "$$":
            in_math_block = not in_math_block
            lines_out.append(line)
            continue
        if in_code_block or in_math_block:
            lines_out.append(line)
            continue

        line = INLINE_DOLLAR_MATH_RE.sub(lambda m: rf"\({m.group(1)}\)", line)
        line = line.replace(r"\(\(", r"\(")
        line = line.replace(r"\(\\(", r"\(")
        line = line.replace(r"\\)\)", r"\)")
        line = BROKEN_INLINE_EQ_RE.sub(
            lambda m: rf"\({normalize_math_fragment(m.group(1))} = {normalize_math_fragment(m.group(2))}\)",
            line,
        )
        line = BROKEN_TRAILING_PUNCT_RE.sub(r"\1\)\2", line)
        line = re.sub(
            r"\\\((.*?)\\\)",
            lambda m: rf"\({m.group(1).replace('$', '')}\)",
            line,
        )
        line = re.sub(r"(?<=[A-Za-zÀ-ÿ])\$(?=[A-Za-zÀ-ÿ])", "", line)
        line = re.sub(r"(?<=[\w\.\)])\$(?=\s|$)", "", line)

        parts = INLINE_MATH_RE.split(line)
        for idx, part in enumerate(parts):
            if not part:
                continue
            if INLINE_MATH_RE.fullmatch(part):
                parts[idx] = normalize_inline_math_token(part)
                continue
            parts[idx] = re.sub(r"\\(?=[A-Za-zÀ-ÿ])", "", part)
        lines_out.append("".join(parts))

    new_text = "\n".join(lines_out)
    if new_text != original:
        path.write_text(new_text, encoding="utf-8")


def theory_template_es(meta: dict[str, Any], formulas: list[dict[str, Any]], leaf: Path) -> str:
    title = meta["nombre"]["es"] if isinstance(meta.get("nombre"), dict) else meta.get("nombre", leaf.name)
    desc = meta.get("descripcion", "").strip()
    role = meta.get("physical_role", {})
    role_es = role.get("es") if isinstance(role, dict) else str(role or "")
    formula_1 = formulas[0] if formulas else {}
    formula_2 = formulas[1] if len(formulas) > 1 else formula_1
    formula_1_title = formula_1.get("title", {}).get("es", "relación principal")
    formula_2_title = formula_2.get("title", {}).get("es", "segunda relación útil")
    latex_1 = formula_1.get("latex", r"\text{relación principal}")
    latex_2 = formula_2.get("latex", r"\text{segunda relación útil}")
    eq_1 = formula_1.get("equation", "relación principal")
    eq_2 = formula_2.get("equation", "segunda relación útil")
    rearr = ""
    rearrs = formula_1.get("rearrangements", [])
    if isinstance(rearrs, list) and rearrs:
        first_rearr = rearrs[0]
        if isinstance(first_rearr, dict):
            rearr = str(first_rearr.get("latex", "")).strip()
    if not rearr:
        rearr = latex_1

    return f"""# {title}

## Contexto conceptual

{title} se estudia como un tema donde la física no empieza por sustituir números, sino por decidir qué sistema conviene aislar y cuál es la pregunta que el modelo debe contestar. {desc} Cuando ese primer encuadre se hace bien, el alumno deja de ver el leaf como una colección de recetas y empieza a reconocer una escena mecánica: qué interacción domina, qué magnitud responde y qué parte del entorno actúa solo como condición geométrica o de contorno.

Ese cambio de mirada es especialmente importante en dinámica porque el mismo fenómeno puede leerse desde el balance de fuerzas, desde el balance de momentos o desde una relación geométrica adicional. En {title} conviene identificar desde el principio si el foco está en causa, respuesta o restricción. Esa distinción ordena el resto del tema y evita confundir magnitudes de distinta función física.

## 🟢 Nivel esencial

La intuición útil en {title} nace cuando uno puede contar con palabras qué está forzando el cambio del sistema y qué magnitud sintetiza mejor la respuesta. Si el leaf aparece dentro de un problema real, rara vez basta con decir “aplico la fórmula”. Antes hay que leer quién empuja, quién resiste, qué elemento transmite la interacción y cuál sería el comportamiento esperado si se reforzara o debilitara esa causa dominante.

En este nivel importa más la dirección del razonamiento que la aritmética fina. Una pregunta práctica sería: si el efecto observado se hace más intenso, ¿qué variable del problema debería crecer, decrecer o permanecer fija? Esa anticipación cualitativa convierte la cuenta en comprobación, no en adivinanza. El alumno empieza a dominar el tema cuando puede anticipar el signo, la tendencia y el orden de magnitud antes de tocar la calculadora.

Otra clave del nivel esencial es saber narrar el mecanismo con una escena concreta. En laboratorio, ingeniería elemental o problemas de examen, {title} suele presentarse como un sistema donde una acción externa reorganiza el movimiento, reparte energía o impone una restricción geométrica. Si esa película mental es clara, el álgebra posterior se vuelve una traducción casi natural del fenómeno.

## 🔵 Nivel formal

La traducción matemática reúne esa intuición en relaciones precisas. En este leaf una de las fórmulas que organiza el análisis es {formula_1_title}:

$$
{latex_1}
$$

Esta expresión no debe leerse como una igualdad descontextualizada, sino como una afirmación sobre qué magnitudes quedan acopladas cuando el modelo del leaf es válido. Cada símbolo ocupa un papel: unos representan causa externa, otros respuesta del sistema y otros geometría o inercia del problema. Si se mezclan esos papeles, el resultado puede ser algebraicamente limpio y físicamente erróneo.

Con frecuencia aparece además una segunda relación de cierre, {formula_2_title}, que ayuda a completar la estructura del problema:

$$
{latex_2}
$$

La utilidad del nivel formal está en elegir cuál de las dos ecuaciones gobierna y cuál solo cierra el sistema. A veces la primera fija la dinámica y la segunda impone la compatibilidad geométrica; en otros casos ocurre al revés. Resolver bien significa distinguir ecuación principal, ecuación auxiliar y variable objetivo, en vez de encadenar despejes sin jerarquía.

También conviene revisar dimensiones y unidades antes de seguir. Si una expresión como \({latex_1}\) o \({latex_2}\) se usa fuera de su dominio, el error suele aparecer primero en la interpretación física, no en el álgebra. La dimensión correcta es una condición necesaria, pero no suficiente: además hace falta respetar hipótesis de rigidez, rozamiento, linealidad o validez local según el contexto concreto del leaf.

## 🔴 Nivel estructural

La lectura estructural pregunta qué hace posible que el modelo funcione. En {title}, la respuesta suele incluir una combinación de idealizaciones: sistema suficientemente rígido, marco clásico, vínculo geométrico bien definido, fuerzas internas tratables o pérdidas despreciables en primera aproximación. No son detalles decorativos; son el andamio que sostiene toda la deducción.

Cuando esas hipótesis se alteran, la misma ecuación puede dejar de contestar la misma pregunta. Por ejemplo, si cambia el contacto, si aparece deslizamiento, si la distribución de masa deja de ser la esperada o si una fuerza que parecía secundaria se vuelve dominante, el leaf entra en otra región del mapa conceptual. La señal de madurez no es insistir con la misma fórmula, sino detectar qué pieza del modelo se ha roto.

Desde esta perspectiva, {title} también enseña a separar relaciones universales de relaciones contingentes. Una igualdad como

$$
{rearr}
$$

puede ser perfectamente válida y, aun así, no bastar para resolver el sistema si falta una ecuación adicional o si la incógnita relevante no es la que se está despejando. La estructura completa del problema incluye qué se conoce, qué se busca, qué cierra el sistema y qué condiciones laterales mantienen coherente la interpretación.

## Interpretación física profunda

El valor didáctico de {title} aparece de verdad cuando el resultado se interpreta como mecanismo. No basta con saber que una magnitud sale mayor o menor; importa comprender por qué una variación del entorno reorganiza la respuesta del sistema. Esa lectura profunda conecta el formalismo con la causalidad física y evita la sensación de que toda dinámica es un catálogo arbitrario de símbolos.

En muchos ejercicios, el número final resume una compensación entre dos tendencias: una causa que impulsa el cambio y una resistencia geométrica, inercial o disipativa que lo modula. El interés físico está precisamente en esa competencia. Leer el resultado así ayuda a responder preguntas que el examen a veces no formula de manera explícita: qué ocurriría si se doblara el tamaño, si cambiara el material o si la interacción dejara de ser ideal.

También por eso el {role_es or "papel físico"} de este leaf merece atención. No solo describe un objeto matemático, sino una forma de organizar la realidad. Un alumno que entiende esta capa profunda puede defender el resultado con argumentos físicos, detectar un disparate experimental y explicar por qué dos problemas con números distintos pertenecen a la misma estructura conceptual.

## Orden de magnitud

Antes de sustituir datos concretos conviene construir una escala plausible. En {title}, el orden de magnitud depende de si domina la inercia, la geometría, la intensidad de la interacción o la duración del proceso. Esa comparación previa es útil porque filtra resultados absurdos antes de que queden maquillados por una cadena de cuentas correctas.

Una rutina simple consiste en contrastar tres preguntas:

1. Si la causa externa se multiplica por dos, ¿la respuesta debería doblarse, crecer menos o saturarse?
2. Si la dimensión característica del sistema aumenta, ¿el efecto se reparte, se amplifica o cambia de régimen?
3. Si el modelo es ideal, ¿qué corrección realista introduciría el mayor desvío: pérdidas, deformación, rozamiento o un vínculo mal impuesto?

Responder a estas preguntas no da todavía el valor final, pero sí acota un rango razonable. En la práctica docente, esa acotación es uno de los mejores antídotos contra los errores de signo, contra el uso mecánico de unidades y contra la tentación de aceptar cualquier número que “sale” después de despejar.

## Método de resolución personalizado

Un procedimiento robusto para este leaf puede formularse como una secuencia corta y repetible:

1. Delimitar sistema, entorno y sentido positivo antes de escribir ecuaciones.
2. Decidir si la relación dominante es dinámica, geométrica, energética o mixta.
3. Escribir primero la ecuación que representa el mecanismo principal y dejar las auxiliares para cerrar el sistema.
4. Sustituir números solo cuando la expresión literal ya permita leer dependencias y signos.
5. Cerrar con una comprobación de unidades, tendencia y plausibilidad física.

La utilidad real de este método es que obliga a separar diagnóstico y cálculo. Muchos bloqueos del alumno no son algebraicos, sino de modelización: elegir mal el sistema, proyectar fuerzas de forma incoherente o olvidar una restricción. Cuando esos pasos previos quedan escritos de manera explícita, los errores se vuelven visibles mucho antes.

Además, este método es flexible. No pretende que todos los ejercicios se parezcan, sino que todos pasen por el mismo filtro de claridad física. Esa consistencia permite reutilizar el esquema en problemas nuevos sin caer en la memoria ciega de procedimientos.

## Casos especiales y ejemplo extendido

Un caso especial interesante aparece cuando la relación principal sigue siendo válida, pero una hipótesis lateral cambia el modo de interpretar el resultado. En {title}, eso puede ocurrir si el sistema pasa de ideal a disipativo, de rígido a deformable, o de un solo cuerpo a un conjunto acoplado. El mismo formalismo deja entonces de responder con la misma transparencia y pide una lectura más cuidadosa del dominio de validez.

Un ejemplo extendido puede organizarse sin números concretos. Se parte de la relación principal, se introduce la ecuación de cierre y después se despeja la variable objetivo:

$$
{latex_1}
$$

$$
{rearr}
$$

La ganancia didáctica no está en el despeje en sí, sino en comentar qué significa cada paso. El primer bloque fija la ley del mecanismo; el segundo muestra qué variable controla la respuesta cuando el resto se mantiene. Si un dato experimental contradice esa dependencia, no conviene “forzar” la cuenta: conviene revisar el modelo y decidir si el caso pertenece realmente a este leaf o a uno vecino.

## Preguntas reales del alumno

**¿Cómo sé qué ecuación va primero?**  
La que representa el mecanismo físico dominante, no necesariamente la más conocida. Si una relación solo sirve para cerrar una incógnita geométrica, no debe dirigir la interpretación.

**¿Qué error conceptual aparece más veces?**  
Confundir causa con respuesta. El alumno suele tratar como dato independiente una magnitud que en realidad es consecuencia del balance dinámico o del vínculo impuesto por el sistema.

**¿Por qué a veces el resultado correcto no “convence”?**  
Porque puede ser compatible con las unidades y, aun así, no ser plausible para la escena física. Por eso el chequeo cualitativo y el orden de magnitud no son adornos: son parte de la solución.

## Conexiones transversales y rutas de estudio

{title} conversa de forma natural con varios bloques cercanos del mapa:

- Con la cinemática, porque hereda la lectura temporal y geométrica de las magnitudes.
- Con las leyes de Newton o la dinámica rotacional, porque convierte interacciones en ecuaciones de evolución.
- Con los modelos energéticos, porque muchas comprobaciones se aclaran al seguir el flujo de trabajo y de energía.
- Con los sistemas reales, porque obliga a decidir cuándo un modelo ideal es suficiente y cuándo hace falta una corrección.

Estudiar estas conexiones mejora la transferencia. El leaf deja de ser un tema aislado y pasa a funcionar como una pieza dentro de una gramática más amplia de la mecánica clásica. Esa visión transversal es la que permite reutilizar criterios y no solo recordar fórmulas.

## Síntesis final

Dominar {title} significa reconocer la escena física, jerarquizar las ecuaciones y defender el resultado con una interpretación coherente. La meta no es memorizar una receta, sino entender qué magnitud gobierna el fenómeno, qué condiciones mantienen válido el modelo y qué señal avisa de que hay que cambiar de enfoque.

Por eso la mejor síntesis del leaf no es un número ni un despeje, sino un criterio: cuando el sistema, la causa dominante y la restricción principal están bien identificados, las ecuaciones se ordenan casi solas. Y cuando eso no ocurre, el problema pide primero más física y después más álgebra, nunca al revés.
"""


def theory_template_en(meta: dict[str, Any], formulas: list[dict[str, Any]], leaf: Path) -> str:
    title = meta["nombre"]["en"] if isinstance(meta.get("nombre"), dict) else meta.get("nombre", leaf.name)
    desc = meta.get("description_en", "").strip()
    role = meta.get("physical_role", {})
    role_en = role.get("en") if isinstance(role, dict) else str(role or "")
    formula_1 = formulas[0] if formulas else {}
    formula_2 = formulas[1] if len(formulas) > 1 else formula_1
    formula_1_title = formula_1.get("title", {}).get("en", "main relation")
    formula_2_title = formula_2.get("title", {}).get("en", "secondary relation")
    latex_1 = formula_1.get("latex", r"\text{main relation}")
    latex_2 = formula_2.get("latex", r"\text{secondary relation}")
    eq_1 = formula_1.get("equation", "main relation")
    eq_2 = formula_2.get("equation", "secondary relation")
    rearr = ""
    rearrs = formula_1.get("rearrangements", [])
    if isinstance(rearrs, list) and rearrs:
        first_rearr = rearrs[0]
        if isinstance(first_rearr, dict):
            rearr = str(first_rearr.get("latex", "")).strip()
    if not rearr:
        rearr = latex_1

    return f"""# {title}

## Conceptual context

{title} is best studied as a topic where physics begins by framing the system, not by inserting numbers. {desc} Once that framing is done correctly, the learner stops treating the leaf as a bag of formulas and starts reading it as a mechanical scene: which interaction is dominant, which quantity responds, and which part of the environment only enters as geometry, boundary condition, or constraint.

That shift matters especially in dynamics because the same phenomenon can be described through force balance, torque balance, energetic reasoning, or a kinematic link. In {title}, the first useful question is therefore not “what should I compute?” but “what role does each quantity play inside the model?”. The answer determines which equation leads and which equation merely closes the system.

This leaf also sits inside a wider network. It inherits ideas from kinematics, free-body diagrams, conservation arguments, and modeling assumptions, and it prepares the ground for more realistic coupled systems. A good reading should therefore build transferable judgment, not only produce a correct result for one classroom exercise.

## 🟢 Essential level

The essential intuition in {title} appears when the student can explain, in plain language, what is driving the change and what quantity best summarizes the response. In a realistic problem, it is rarely enough to say “I apply the formula”. One must identify who acts on the system, what resists that action, and which feature of the setup is likely to control the final behavior.

At this level, direction matters more than computational detail. A practical question is: if the dominant cause became stronger, which part of the response should increase, decrease, or remain practically unchanged? Making that prediction before calculation turns algebra into a check rather than a guess. The topic begins to make sense when sign, tendency, and scale can be anticipated ahead of substitution.

Another essential habit is to attach the leaf to a concrete scene. In laboratory work, basic engineering, or exam problems, {title} usually appears in a system where an external action redistributes motion, energy, or constraint. If that mental picture is sharp, the mathematics becomes an organized translation of the physical mechanism instead of a memorized script.

## 🔵 Formal level

The mathematical layer organizes that intuition into explicit relations. In this leaf, one of the formulas that structures the analysis is {formula_1_title}:

$$
{latex_1}
$$

This equality should not be read as detached symbolism. It states which quantities remain coupled when the assumptions of the leaf are satisfied. Some symbols encode the external cause, others the system response, and others the geometry or inertia that modulates the effect. If those roles are mixed, the algebra may look neat while the physics becomes incoherent.

Very often a second relation is needed to close the model, namely {formula_2_title}:

$$
{latex_2}
$$

The real formal skill is to decide which equation governs the mechanism and which one only provides compatibility. In some problems the first relation carries the dynamics while the second one imposes geometry; in other problems the hierarchy is reversed. Solving well means identifying primary law, auxiliary constraint, and target variable instead of chaining manipulations without structure.

Unit checks and dimensional logic also belong here. An expression such as \({latex_1}\) or \({latex_2}\) may be dimensionally acceptable and still be physically misused if rigidity, contact regime, linearity, or validity conditions have been ignored. Dimensions are necessary, but they never replace modeling judgment.

## 🔴 Structural level

The structural reading asks what makes the model work in the first place. In {title}, the answer usually combines several idealizations: a sufficiently rigid system, a classical reference frame, a well-defined constraint, manageable internal forces, or negligible losses at first pass. These are not decorative assumptions. They are the scaffolding that keeps the whole derivation meaningful.

When one of those assumptions changes, the same equation may stop answering the same question. A contact may begin to slip, the mass distribution may no longer behave as expected, or a force that looked secondary may become dominant. At that point the leaf drifts toward another region of the conceptual map. The mature reaction is not to insist on the same formula, but to identify which modeling piece has failed.

From this viewpoint, {title} also teaches how to separate universal relations from contingent closures. An identity such as

$$
{rearr}
$$

can be perfectly valid and still be insufficient if the system lacks an extra equation or if the real unknown is not the one being isolated. The structure of the problem includes known data, target variable, closure conditions, and side hypotheses that keep the interpretation consistent.

## Deep physical interpretation

The real value of {title} appears when the final result is interpreted as a mechanism. It is not enough to know that one quantity becomes larger or smaller; the point is to understand why a change in the environment reorganizes the response of the system. That deeper reading connects formalism with causality and prevents dynamics from feeling like an arbitrary dictionary of symbols.

In many exercises, the final number summarizes a competition between two tendencies: one contribution drives the change and another geometric, inertial, or dissipative effect limits it. The physical interest lies in that balance. Reading the answer that way helps with questions that are often implicit rather than explicit: what would happen if the size doubled, if the material changed, or if the interaction stopped being ideal?

This is also why the {role_en or "physical role"} of the leaf matters. It does not merely label a mathematical object; it organizes a family of real situations. A student who understands this level can defend the result with physical arguments, detect an implausible measurement, and explain why two numerically different problems still share the same conceptual skeleton.

## Order of magnitude

Before inserting specific data, it is useful to build a plausible scale. In {title}, the right scale depends on whether inertia, geometry, interaction strength, or process duration dominates. A prior comparison is valuable because it filters absurd results before they are hidden inside a formally correct sequence of computations.

A compact routine is to test three questions:

1. If the external cause doubled, should the response double, grow more slowly, or saturate?
2. If the characteristic size increased, would the effect spread out, amplify, or change regime?
3. If the model is ideal, which realistic correction would create the largest deviation: losses, deformation, friction, or a broken constraint?

These questions do not produce the exact final value, but they define a sensible range. In teaching practice, that range is one of the best protections against sign mistakes, blind unit handling, and the habit of accepting any number simply because it emerged after algebraic manipulation.

## Personalized resolution method

A robust workflow for this leaf can be stated in a short repeatable sequence:

1. Delimit system, environment, and positive direction before writing equations.
2. Decide whether the dominant relation is dynamic, geometric, energetic, or mixed.
3. Write the equation that represents the main mechanism first and reserve auxiliary equations for closure.
4. Insert numbers only after the literal expression already reveals dependence and sign.
5. Close with a unit check, a trend check, and a plausibility check.

The practical value of this method is that it separates diagnosis from computation. Many student blocks are not algebraic; they are modeling mistakes such as choosing the wrong system, projecting forces inconsistently, or forgetting a constraint. When those prior steps are written explicitly, errors become visible much earlier.

The method is also flexible. It does not assume that all exercises look the same. It only insists that every exercise pass through the same filter of physical clarity. That consistency is what makes the workflow reusable on new problems without collapsing into mechanical memorization.

## Special cases and extended example

A useful special case appears when the main relation remains valid but a side assumption changes the interpretation of the result. In {title}, that can happen when the system moves from ideal to dissipative, from rigid to deformable, or from a single body to a coupled assembly. The same formalism then stops being fully transparent and demands a more careful reading of the validity domain.

An extended example can be organized without choosing specific numbers. One starts from the governing relation, adds the closure equation, and then isolates the target variable:

$$
{latex_1}
$$

$$
{rearr}
$$

The didactic gain is not the isolation itself but the commentary around it. The first block states the law of the mechanism; the second reveals which parameter controls the response when the rest is kept fixed. If an experiment contradicts that dependence, the correct move is not to force the computation but to re-evaluate the model and decide whether the case still belongs to this leaf or to a neighboring one.

## Real student questions

**How do I know which equation should come first?**  
The one that represents the dominant physical mechanism, not necessarily the most familiar one. If a relation only closes a geometric unknown, it should not control the interpretation.

**What conceptual mistake appears most often?**  
Mixing cause and response. Students often treat as an independent datum a quantity that is actually a consequence of the dynamic balance or of the imposed constraint.

**Why can a formally correct answer still feel wrong?**  
Because unit consistency does not guarantee physical plausibility. That is why qualitative checks and order-of-magnitude reasoning belong to the solution, not to the decoration around it.

## Cross-cutting connections and study paths

{title} naturally connects with several nearby blocks:

- With kinematics, because it inherits temporal and geometric descriptions of motion.
- With Newtonian or rotational dynamics, because it turns interactions into evolution equations.
- With energy-based models, because many consistency checks become clearer when work and storage are tracked.
- With real systems, because it forces the learner to decide when an ideal model is enough and when a correction becomes necessary.

Studying these links improves transfer. The leaf stops being an isolated topic and starts functioning as one piece inside a broader grammar of classical mechanics. That broader view is what allows criteria to be reused instead of formulas merely being recalled.

## Final synthesis

Mastering {title} means recognizing the physical scene, ranking the equations, and defending the result with a coherent interpretation. The real goal is not to memorize a recipe but to understand which quantity governs the phenomenon, which conditions keep the model valid, and which sign warns that the modeling has to change.

For that reason, the best synthesis of the leaf is not a number or an algebraic trick but a criterion: when system, dominant cause, and main constraint are identified correctly, the equations almost order themselves. When they are not, the problem first asks for more physics and only then for more algebra.

That final criterion is what makes learning reusable. It allows the student to move from one concrete exercise to a whole family of related problems without losing physical meaning. In dynamics, that transferable structural judgment is more valuable than a long catalog of memorized calculations.
"""


def rewrite_theories(leaf: Path, meta: dict[str, Any], formulas: list[dict[str, Any]]) -> None:
    (leaf / "teoria.md").write_text(theory_template_es(meta, formulas, leaf), encoding="utf-8")
    (leaf / "teoria.en.md").write_text(theory_template_en(meta, formulas, leaf), encoding="utf-8")


def main() -> None:
    for leaf in leaf_dirs():
        meta = load_yaml(leaf / "meta.yaml")
        formulas_data = load_yaml(leaf / "formulas.yaml")
        formulas = formulas_data.get("formulas", []) if isinstance(formulas_data, dict) else formulas_data
        for name, targets in HEADING_TARGETS.items():
            rewrite_exact_headings(leaf / name, targets)
        rewrite_theories(leaf, meta, formulas)
        for md_name in [
            "teoria.md",
            "teoria.en.md",
            "ejemplos.md",
            "ejemplos.en.md",
            "aplicaciones.md",
            "aplicaciones.en.md",
            "modelos.md",
            "modelos.en.md",
            "errores.md",
            "errores.en.md",
            "historia.md",
            "historia.en.md",
        ]:
            repair_inline_math_corruption(leaf / md_name)
            sanitize_formula_mentions(leaf / md_name, formulas)
            sanitize_bare_formula_lines(leaf / md_name)
            repair_inline_math_corruption(leaf / md_name)
            repair_inline_math_corruption_v2(leaf / md_name)


if __name__ == "__main__":
    main()
