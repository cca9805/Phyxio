const e=`# Ejemplo guiado

## Situacion fisica

Un cuerpo recibe dos vectores relacionados con movimiento en 2d: uno apunta hacia la derecha con modulo 6 unidades y otro apunta hacia arriba con modulo 8 unidades. La pregunta es que resultado vectorial describe el efecto conjunto y que significado fisico tiene.

## Traduccion matematica

Se escriben los vectores como componentes en ejes perpendiculares: A = (6, 0) y B = (0, 8). El objeto matematico es una combinacion vectorial en la misma base, no una suma de nombres ni una comparacion de modulos aislados.

## Calculo paso a paso

La resultante es R = A + B = (6, 8). Su modulo es sqrt(6^2 + 8^2) = 10. La direccion forma un angulo cuyo tangente vale 8/6, de modo que apunta hacia el primer cuadrante, entre los dos vectores originales.

## Lectura del resultado

El resultado significa que el efecto conjunto no es 14 en una direccion cualquiera, sino una flecha de modulo 10 con direccion definida. Si las unidades eran newtons, la resultante esta en newtons; si eran metros por segundo, esta en metros por segundo.

## Error comun evitado

El error evitado es sumar modulos cuando las direcciones son perpendiculares. Esa suma solo seria valida para vectores colineales y con mismo sentido. Aqui la geometria obliga a usar componentes y reconstruir modulo.

# Ejemplo inverso

## Resultado dado

Se obtiene un vector resultante R = (0, 0) al sumar tres fuerzas aplicadas sobre un punto material, todas expresadas en los mismos ejes y con la misma unidad.

## Que pregunta fisica permite responder

Permite responder si el punto esta en equilibrio tras considerar esas fuerzas. No significa que no existan fuerzas, sino que sus efectos vectoriales se cancelan en la base elegida.
`;export{e as default};
