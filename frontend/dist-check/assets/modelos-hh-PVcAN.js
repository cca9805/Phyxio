const e=`# Modelos físicos: condición de sumatoria de momentos

## Modelo ideal

El modelo ideal considera un cuerpo rígido plano sometido a fuerzas externas que producen momentos respecto a un eje fijo. Cada contribución se describe con una fuerza, un brazo y un ángulo: [[F1]], [[r1]], [[theta1]] para la primera, y [[F2]], [[r2]], [[theta2]] para la segunda. El resultado central es [[tau_net]], no un momento aislado.

La condición de equilibrio rotacional se interpreta como cancelación algebraica. [[tau1]] y [[tau2]] pueden tener módulos iguales y signos opuestos. Si queda un momento residual, el sistema conserva tendencia a girar.

## Hipótesis

- El cuerpo se trata como rígido durante el análisis.
- Todas las fuerzas se encuentran en el mismo plano.
- Los momentos se calculan respecto al mismo eje.
- El convenio de signos se fija antes de sumar.
- Los brazos [[r1]] y [[r2]] se miden desde el pivote.
- Los ángulos [[theta1]] y [[theta2]] se miden respecto al radio correspondiente.

## Dominio de validez cuantitativo

El modelo es adecuado cuando la deformación del cuerpo es despreciable frente a las distancias de brazo, por ejemplo menor que el 1 % de [[r1]] o [[r2]]. En montajes de laboratorio, el equilibrio rotacional puede considerarse satisfecho si el valor absoluto de [[tau_net]] queda por debajo de la incertidumbre experimental, por ejemplo menos de 0.05 N m cuando los momentos son de varios N m.

También hay condiciones geométricas mínimas. Para calcular [[Feq]], [[r2]] debe ser mayor que cero y el seno de [[theta2]] no debe estar cerca de cero. Si [[theta2]] es casi 0 o casi pi, la fuerza 2 no tiene brazo efectivo y la fuerza equilibrante necesaria se vuelve físicamente inviable. Si [[r1]] se duplica con [[F1]] y [[theta1]] fijos, [[tau1]] debe duplicarse.

## Señales de fallo del modelo

Una señal de fallo aparece cuando se suman momentos calculados desde pivotes distintos. Otra aparece si se obtienen unidades de N para [[tau_net]] o N m para [[Feq]]. También falla el modelo si se predice equilibrio aunque [[tau_net]] no sea cercano a cero.

Otra señal práctica es igualar [[F1]] y [[F2]] sin revisar brazos ni ángulos. Si [[r2]] es tres veces [[r1]], fuerzas iguales no suelen representar equilibrio; el brazo mayor produce mayor momento. El signo también delata fallos: dos momentos opuestos de igual módulo deben cancelarse, no sumarse.

## Modelo extendido o alternativo

Cuándo conviene cambiar de modelo: cuando el cuerpo no puede considerarse rígido, cuando las fuerzas no están en un plano o cuando el eje cambia durante el movimiento. Cuando conviene cambiar a un modelo alternativo, debe pasarse a un modelo de dinámica rotacional con momento de inercia y aceleración angular, o a un modelo tridimensional vectorial de torques.

También conviene cambiar de modelo si hay una carga distribuida. Antes de usar esta condición, la carga debe sustituirse por una resultante justificada y su punto de aplicación. Si esa sustitución no es válida, el modelo de dos momentos principales no representa el sistema real.

## Comparación operativa

| Situación | Modelo adecuado | Criterio |
|---|---|---|
| Dos fuerzas en una barra rígida | Sumatoria de momentos | Usar [[tau1]], [[tau2]] y [[tau_net]] |
| Se pide fuerza de equilibrio | Diseño con [[Feq]] | Verificar [[r2]] y [[theta2]] |
| Carga distribuida simple | Resultante equivalente | Justificar punto de aplicación |
| Cuerpo deformable | Modelo estructural | Incluir deformación |
| Giro acelerado | Dinámica rotacional | Usar momento de inercia |

La regla práctica es no sumar hasta tener eje, signos y brazos definidos. Si alguno cambia, el balance calculado pertenece a otro modelo.
`;export{e as default};
