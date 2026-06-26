const e=`\uFEFF# Operaciones con vectores

## Que es

Operar con vectores significa combinar flechas respetando direccion, sentido y modulo. La suma produce un vector resultante; la resta compara dos vectores; multiplicar por un escalar cambia modulo y, si el escalar es negativo, invierte el sentido.

## Por que aparece en fisica

Aparece cuando varias fuerzas actuan sobre un cuerpo, cuando se calcula desplazamiento neto, cuando se suman campos o cuando se descompone una velocidad. La fisica se aplica por resultantes y componentes, no por listas de modulos aislados.

## Idea visual o geometrica

La suma se ve con regla punta-cola o paralelogramo. La resta se ve sumando el opuesto. Descomponer es sustituir una flecha por dos flechas perpendiculares que juntas producen el mismo efecto sobre los ejes elegidos.

![Suma de vectores por punta-cola y paralelogramo](/graphs/matematicas/vectores-matematicos/suma-vectores.svg)

## Lenguaje simbolico minimo

Si \`vec A = (A_x, A_y)\` y \`vec B = (B_x, B_y)\`, entonces \`vec A + vec B = (A_x + B_x, A_y + B_y)\`. Multiplicar por \`k\` da \`k vec A = (k A_x, k A_y)\`. Las unidades se conservan salvo que el escalar tenga unidad.

## Que significa el resultado

El resultado es una nueva magnitud dirigida. Una fuerza neta cero significa equilibrio tras sumar componentes, no ausencia de fuerzas individuales. Una resta de velocidades puede representar velocidad relativa, no una perdida de rapidez.

## Cuando no debes usarlo

No debes sumar modulos si las direcciones no coinciden. Tampoco debes olvidar signos de componentes ni mezclar vectores expresados en bases distintas. Antes de operar, todos los vectores deben estar en la misma referencia.

## Resumen operativo

Dibuja, elige ejes, expresa componentes, opera componente a componente y reconstruye modulo y direccion si hace falta. Nivel basico: suma grafica. Intermedio: componentes. Avanzado: resultantes, equilibrio y cambios de referencia.
`;export{e as default};
