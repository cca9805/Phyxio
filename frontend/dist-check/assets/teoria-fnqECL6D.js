const e=`\uFEFF# Producto escalar

## Que es

El producto escalar combina dos vectores y devuelve un numero. Mide cuanto de un vector esta alineado con otro. Si apuntan en la misma direccion es positivo, si son perpendiculares es cero y si apuntan en sentidos opuestos es negativo.

## Por que aparece en fisica

Aparece en trabajo mecanico, proyecciones, potencia, flujo y angulos entre direcciones. Permite responder que parte de una fuerza actua en un desplazamiento o que componente de un campo atraviesa una superficie.

## Idea visual o geometrica

La imagen visual es una sombra. Proyectas un vector sobre la direccion del otro y multiplicas por el modulo relevante. Solo la parte alineada contribuye; la parte perpendicular no aporta al producto escalar.

![Proyeccion para producto escalar y comparacion con producto vectorial](/graphs/matematicas/vectores-matematicos/producto-escalar-vectorial.svg)

## Lenguaje simbolico minimo

Se escribe \`vec A dot vec B = A B cos(theta)\` o, por componentes, \`A_x B_x + A_y B_y + A_z B_z\`. El resultado no es vector: es escalar con unidad producto de las unidades de los dos vectores.

## Que significa el resultado

El resultado significa alineacion ponderada. En trabajo, \`W = vec F dot vec d\` mide energia transferida por la parte de la fuerza paralela al desplazamiento. Si sale negativo, la fuerza se opone al movimiento.

## Cuando no debes usarlo

No debes usar producto escalar cuando necesitas una direccion perpendicular o un giro. Tampoco debes olvidar el angulo entre vectores: usar solo modulos equivale a suponer alineacion perfecta.

## Resumen operativo

Identifica los dos vectores, mide angulo o componentes, calcula y lee signo y unidad. Nivel basico: perpendicular da cero. Intermedio: proyecciones y trabajo. Avanzado: criterios de alineacion en campos y espacios vectoriales.
`;export{e as default};
