# Vectores unitarios y bases

## Que es

Un vector unitario es una flecha de modulo uno que solo indica direccion. Una base es un conjunto de direcciones independientes que permite escribir cualquier vector mediante componentes. En fisica, la base convierte geometria en calculo controlado.

## Por que aparece en fisica

Aparece al escribir fuerzas con `i`, `j`, `k`, al usar direcciones radial y tangencial en rotacion, o al describir flujo con normal y tangente. Elegir bien la base simplifica ecuaciones y reduce errores de signo.

## Idea visual o geometrica

La idea visual es construir una regla orientada para cada direccion importante. En cartesiano se usan ejes fijos; en polar, una direccion radial cambia con la posicion y una tangencial gira alrededor del centro.

![Mismo vector expresado en dos bases](/graphs/matematicas/vectores-matematicos/bases-cambio.svg)

## Lenguaje simbolico minimo

Un vector se escribe como `vec A = A_x i + A_y j` en 2D o `A_x i + A_y j + A_z k` en 3D. En otra base podria escribirse `A_r e_r + A_theta e_theta`. Los unitarios no aportan unidad fisica; la unidad vive en las componentes.

## Que significa el resultado

El resultado indica cuanto del vector hay en cada direccion de la base. Un componente cero no elimina el vector: solo dice que no tiene parte en esa direccion. Cambiar de base cambia componentes, pero no cambia la magnitud dirigida original.

## Cuando no debes usarlo

No debes tratar unitarios como magnitudes fisicas. Tampoco debes suponer que todos los unitarios son constantes: en coordenadas polares, `e_r` y `e_theta` cambian con el angulo. Si derivan, pueden aportar terminos adicionales.

## Resumen operativo

Elige base, declara unitarios, proyecta componentes y conserva unidades en las componentes. Nivel basico: `i`, `j`. Intermedio: bases adaptadas. Avanzado: unitarios variables y coordenadas curvilineas.
