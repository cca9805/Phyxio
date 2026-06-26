const e=`# Ejemplo tipo examen

## Enunciado

Una fuerza [[F]] = 40 N se aplica en el extremo de una llave a una distancia radial [[r]] = 0.30 m del eje de una tuerca. La fuerza forma un ángulo [[theta]] = 60° con el radio desde el eje hasta el punto de aplicación. Calcula el brazo perpendicular [[d_perp]], el momento [[tau]] y explica qué cambiaría si la fuerza se aplicara perpendicularmente.

## Datos

| Magnitud | Valor |
|---|---|
| [[F]] | 40 N |
| [[r]] | 0.30 m |
| [[theta]] | 60° |

El eje de giro es el centro de la tuerca. El signo del momento se asignará después según el sentido de giro; en el cálculo de módulo se usan fuerza y distancias positivas.

## Definición del sistema

El sistema estudiado es la llave sometida a una fuerza externa respecto al eje de la tuerca. No se está sumando con otras fuerzas ni comprobando equilibrio. El objetivo del leaf es medir la contribución rotacional de una sola fuerza.

## Modelo físico

La forma directa del momento usa el brazo perpendicular:

{{f:torque_perpendicular_definition}}

Si el brazo perpendicular no se conoce, se obtiene desde la geometría:

{{f:lever_arm_relation}}

Combinando fuerza, distancia radial y ángulo se usa la forma trigonométrica:

{{f:torque_trigonometric_definition}}

## Justificación del modelo

El modelo es válido porque la fuerza actúa en un plano y el eje está claramente definido. La distancia [[r]] se mide desde el eje hasta el punto de aplicación, mientras que [[theta]] es el ángulo entre la fuerza y el radio, no el ángulo con el suelo. Como la fuerza no es perpendicular, [[d_perp]] debe ser menor que [[r]].

## Resolución simbólica

Primero se calcula [[d_perp]] como la parte de [[r]] que realmente funciona como brazo de giro. Después se multiplica ese brazo por [[F]] para obtener [[tau]]. La misma lectura puede hacerse directamente con la fórmula trigonométrica: el seno de [[theta]] reduce o aumenta la eficacia rotacional según la dirección de la fuerza.

Si [[theta]] fuera 90°, el seno valdría uno y el brazo perpendicular coincidiría con [[r]]. Si [[theta]] fuera 0°, la línea de acción pasaría por el eje y el momento sería nulo.

## Sustitución numérica

Con [[theta]] = 60°, el seno vale aproximadamente 0.866. Por tanto, [[d_perp]] = 0.30 m por 0.866, es decir, unos 0.260 m. El momento vale [[tau]] = 40 N por 0.260 m, aproximadamente 10.4 N m.

Si la fuerza se aplicara perpendicularmente con la misma [[F]] y el mismo [[r]], el momento sería 12 N m. La diferencia no procede de cambiar la fuerza, sino de cambiar el brazo efectivo.

## Validación dimensional

El brazo perpendicular [[d_perp]] queda en metros. El momento [[tau]] queda en N m porque combina una fuerza en newtons con una distancia en metros. El resultado no debe expresarse solo en N ni solo en m.

La validación física también es coherente: como la fuerza no es perpendicular, el momento de 10.4 N m es menor que el máximo posible de 12 N m para esa distancia y esa fuerza.

## Interpretación física

El resultado indica que la fuerza tiene una tendencia de giro apreciable, pero no máxima. Parte de la fuerza se orienta de forma menos eficaz porque no actúa perpendicularmente al radio. La llave no “siente” solo la fuerza de 40 N; siente esa fuerza aplicada con una geometría concreta.

La interpretación cualitativa es observable: empujar la llave más perpendicularmente produciría más facilidad de giro sin aumentar la fuerza. Empujarla más alineada con el mango reduciría [[d_perp]] y podría hacer que una fuerza grande produjera poco momento.

# Ejemplo de aplicación real

## Contexto

Una persona intenta abrir una puerta empujando cerca del borde. La puerta gira alrededor de las bisagras, que funcionan como eje. La fuerza de la mano puede tener la misma magnitud en distintos intentos, pero el momento cambia si cambia la distancia a las bisagras o la dirección del empuje.

## Estimación física

Si la mano aplica unos 25 N a 0.80 m de las bisagras y empuja casi perpendicularmente, el momento esperado está cerca de 20 N m. Si empuja con un ángulo de 30° respecto al radio, el brazo efectivo se reduce a la mitad y el momento baja aproximadamente a 10 N m. La diferencia se debe a [[theta]] y [[d_perp]], no a una variación de [[F]].

## Interpretación

La aplicación muestra por qué el momento de una fuerza es una magnitud geométrica y dinámica a la vez. La fuerza aporta intensidad, pero la geometría decide cuánta de esa intensidad produce giro. En una puerta, una llave o una manivela, aumentar [[r]] o hacer la fuerza más perpendicular aumenta [[tau]] sin cambiar necesariamente la fuerza aplicada.

## Lista de verificación

1. ¿Está definido el eje de giro?
2. ¿[[r]] se mide desde ese eje?
3. ¿[[theta]] es el ángulo entre fuerza y radio?
4. ¿Se ha calculado [[d_perp]] cuando la fuerza es oblicua?
5. ¿[[tau]] se expresa en N m y se interpreta como tendencia de giro?
`;export{e as default};
