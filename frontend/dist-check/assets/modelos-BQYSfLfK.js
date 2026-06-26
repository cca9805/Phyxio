const e=`# Modelos físicos: momento de una fuerza

## Modelo ideal

El modelo ideal considera una fuerza [[F]] aplicada a un cuerpo rígido plano respecto a un eje fijo. La geometría queda descrita por la distancia radial [[r]], el ángulo [[theta]] y el brazo perpendicular [[d_perp]]. El resultado [[tau]] mide la tendencia de esa fuerza aislada a producir giro.

Este modelo no decide equilibrio. Solo cuantifica una contribución rotacional. Para analizar equilibrio se deben sumar varios momentos en otro leaf.

## Hipótesis

- El cuerpo se aproxima como rígido.
- El eje de giro está definido antes de calcular.
- La fuerza se aplica en un punto conocido.
- La fuerza y el radio están en un mismo plano.
- [[r]] y [[d_perp]] son distancias no negativas.
- [[theta]] se mide entre la fuerza y el radio.

## Dominio de validez cuantitativo

El modelo funciona bien cuando la deformación del cuerpo es pequeña frente a la distancia al eje, por ejemplo menor que el 1 % de [[r]]. En problemas introductorios, [[theta]] debe estar entre 0 y pi rad, [[F]] debe ser no negativa y [[d_perp]] no puede superar [[r]].

Una comprobación numérica útil es que si [[theta]] = 90°, [[d_perp]] debe coincidir con [[r]]. Si [[theta]] = 0 o pi, [[d_perp]] debe ser cero y [[tau]] también. Si [[F]] = 20 N y [[d_perp]] = 0.30 m, el momento esperado es de la escala de 6 N m. Un resultado en N o en m indica fallo dimensional.

## Señales de fallo del modelo

El modelo falla si se usa la longitud total de una barra como brazo aunque la fuerza sea oblicua. También falla si el eje cambia durante el cálculo o si [[theta]] se mide respecto a la horizontal en lugar de respecto al radio. Otra señal clara aparece cuando [[d_perp]] sale mayor que [[r]], algo imposible en la geometría plana del leaf.

Si una fuerza pasa por el eje y aun así se obtiene [[tau]] distinto de cero, se ha interpretado mal el brazo efectivo. Si una fuerza perpendicular no produce el máximo momento para [[F]] y [[r]] fijos, hay un error de ángulo o de seno.

## Modelo extendido o alternativo

Cuándo conviene cambiar de modelo: si hay varias fuerzas actuando a la vez y se quiere decidir equilibrio, conviene cambiar a un modelo alternativo de sumatoria de momentos. Si el cuerpo gira con aceleración, conviene cambiar a un modelo alternativo de dinámica rotacional con momento de inercia. Si la fuerza o el eje no están en un plano, debe usarse un modelo vectorial tridimensional.

También conviene cambiar de modelo si el cuerpo se deforma de manera apreciable. En ese caso, la línea de acción y el brazo efectivo pueden variar con la deformación, y el modelo rígido deja de representar la situación.

## Comparación operativa

| Situación | Modelo adecuado | Criterio |
|---|---|---|
| Una fuerza y un eje fijo | Momento de una fuerza | Calcular [[tau]] |
| Brazo perpendicular conocido | Definición directa | Usar [[F]] y [[d_perp]] |
| Fuerza oblicua | Geometría trigonométrica | Usar [[r]] y [[theta]] |
| Varias fuerzas | Sumatoria de momentos | Sumar contribuciones |
| Giro acelerado | Dinámica rotacional | Incluir inercia angular |

La regla práctica es localizar primero el eje y la línea de acción. Sin esos dos elementos, el momento no está físicamente definido.
`;export{e as default};
