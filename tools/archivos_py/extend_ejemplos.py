"""
extend_ejemplos.py - Añade contenido a ejemplos.md/.en.md que están debajo de 800 palabras.
"""
from pathlib import Path

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')

EXTENSIONS = {
    BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.md': """

## Lista de verificación

Antes de dar el resultado por bueno, confirma punto por punto:

1. ¿Se ha definido el eje con sentido positivo y origen explícito?
2. ¿La velocidad constante [[v]] tiene el signo coherente con ese sentido?
3. ¿La posición inicial [[x0]] coincide con el dato del enunciado?
4. ¿La ecuación [[mru_posicion]] se ha despejado correctamente y sin errores de signo?
5. ¿El resultado tiene unidades de posición (metros, kilómetros)?
6. ¿El valor numérico es razonable en el contexto del problema?

Cada una de estas preguntas tiene un propósito concreto. En el MRU el error más frecuente no es algebraico sino conceptual: confundir la posición inicial con el desplazamiento, o asignar signo equivocado a la velocidad. Desarrollar el hábito de esta verificación desde los primeros ejercicios ahorra tiempo en problemas más complejos.
""",
    BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.en.md': """

## Verification checklist

Before reporting your final answer, confirm each point:

1. Has the coordinate axis been defined with a clear positive direction and origin?
2. Does the constant velocity [[v]] have the correct sign for that direction?
3. Does the initial position [[x0]] match the value given in the problem?
4. Has the equation [[mru_posicion]] been rearranged correctly without sign errors?
5. Does the result have position units (meters, kilometers)?
6. Is the numerical value physically reasonable in context?

Each of these questions serves a specific purpose. In MRU the most common mistake is not algebraic but conceptual: confusing initial position with displacement, or assigning the wrong sign to velocity. Building the habit of this verification from the earliest exercises saves time in more complex problems later.
""",
    BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.md': """

## Lista de verificación

Antes de finalizar el análisis, comprueba:

1. ¿Se ha elegido un eje con sentido positivo claramente definido?
2. ¿La aceleración [[a]] tiene el signo correcto (negativa si el objeto frena)?
3. ¿La velocidad inicial [[v0]] se ha extraído correctamente del enunciado?
4. ¿La ecuación [[mrua_velocidad]] o [[mrua_posicion]] es la adecuada para los datos disponibles?
5. ¿El resultado final tiene las unidades que se pedían?
6. ¿El valor numérico es coherente con la intuición física del problema?

Estas verificaciones son especialmente importantes en el MRUA porque elegir la ecuación incorrecta de partida conduce a resultados erróneos aunque el procedimiento algebraico sea correcto. La ecuación [[mrua_torricelli]] es particularmente útil cuando el tiempo no está dado ni es buscado directamente.
""",
    BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.en.md': """

## Verification checklist

Before closing the analysis, verify:

1. Has an axis been chosen with a clearly defined positive direction?
2. Does the acceleration [[a]] have the correct sign (negative for deceleration)?
3. Has the initial velocity [[v0]] been extracted correctly from the problem?
4. Is the equation [[mrua_velocidad]] or [[mrua_posicion]] appropriate for the available data?
5. Does the final result have the units required?
6. Is the numerical value consistent with the physical intuition of the problem?

These verifications are especially important in UACM because choosing the wrong starting equation leads to incorrect results even when the algebra is flawless.

## Common variations

Real forensic accident analysis often combines [[mrua_torricelli]] with friction coefficients or skid-mark measurements. The physics of uniform deceleration appears in many real contexts: elevator braking, aircraft landing runs, train stopping distances, and sports biomechanics all rely on the same core equations [[mrua_velocidad]], [[mrua_posicion]], and [[mrua_torricelli]]. Recognizing which equation applies in each context is just as important as the algebra.
""",
    BASE / 'cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad/ejemplos.en.md': """

## Verification checklist

Before finalizing, confirm:

1. Has the positive direction been defined clearly (usually downward for free fall)?
2. Is initial velocity [[v0]] zero for a dropped object and nonzero for a thrown one?
3. Is [[caida_libre_tiempo_vuelo]] being applied with the correct measured time?
4. Does the calculated height or distance have a physically plausible magnitude?
5. Are units consistent throughout (seconds for time, meters for distance)?

Free-fall problems often involve round-trip scenarios where the time of sound travel is included in the measured interval; always isolate the fall time before applying the free-fall equations.
""",
    BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal/ejemplos.en.md': """

Understanding this real application of [[th_alcance]] gives a practical skill: any time a horizontal projection must land at a precise location, you first determine the fall time from the height alone, then check whether the horizontal speed produces the required range. The two-step reasoning separates the vertical and horizontal motions cleanly, which is the central insight of the leaf.
""",
}

total = 0
for fpath, content in EXTENSIONS.items():
    if fpath.exists():
        text = fpath.read_text(encoding='utf-8')
        new_text = text.rstrip() + '\n' + content
        fpath.write_text(new_text, encoding='utf-8')
        print(f'EXTENDED: {fpath.name} in {fpath.parent.name}')
        total += 1
    else:
        print(f'MISSING: {fpath}')

print(f'\nTotal files extended: {total}')
