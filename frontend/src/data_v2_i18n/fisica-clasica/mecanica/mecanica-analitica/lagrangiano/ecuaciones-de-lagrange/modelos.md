## Modelo ideal

El modelo ideal del leaf supone que el sistema puede describirse mediante coordenadas generalizadas [[qi]] bien elegidas y un lagrangiano [[L]] diferenciable. La dinamica no se formula como una lista aislada de fuerzas, sino como una estructura energetica basada en [[T]] y [[V]], con posibilidad de incorporar una fuerza generalizada externa [[Qi]] cuando sea necesario.

La simplificacion central consiste en representar el movimiento con pocas variables fisicamente significativas. Esa eleccion reduce redundancia y hace visible que la ecuacion de movimiento nace de comparar la respuesta de [[L]] ante cambios en [[qi]] y [[qdi]].

## Hipotesis

- [[qi]] y [[qdi]] describen de forma regular el estado del sistema.
- [[T]] y [[V]] estan expresadas en las mismas coordenadas.
- [[Qi]] representa solo acciones no potenciales que no se han incluido en [[V]].
- El lagrangiano [[L]] permite construir el operador [[Ri]] sin singularidades en el dominio de trabajo.

## Dominio de validez cuantitativo

El formalismo conserva sentido cuando las derivadas de [[L]] permanecen finitas y cuando el modelo energetico captura las escalas dominantes. En un oscilador lineal, por ejemplo, el termino restaurador asociado a [[k]] y [[qi]] debe tener la misma escala de fuerza que [[Qi]] para que el balance sea interpretable. Como orden de magnitud, si \(|[[Qi]]| \ll |[[k]][[qi]]|\), domina la restauracion elastica; si \(|[[Qi]]| \gg |[[k]][[qi]]|\), domina la accion externa.

Si el problema contiene rozamiento seco, impactos, control discontinuo o excitaciones por tramos, la formulacion puede seguir usandose, pero el cierre mediante [[Qi]] debe revisarse con cuidado. En esos casos, no basta con escribir una ecuacion compacta: hay que declarar el regimen fisico que valida cada expresion.

## Senales de fallo del modelo

Una primera senal de fallo es que [[Ri]] no pueda evaluarse de forma estable por una mala eleccion de coordenadas. Otra aparece cuando una misma accion fisica se incluye simultaneamente dentro de [[V]] y como [[Qi]], produciendo aceleraciones infladas o signos incoherentes.

Tambien falla el modelo si la ecuacion resultante no recupera un limite conocido. Si al anular [[Qi]] un oscilador no vuelve al caso libre esperado, el problema no esta en la algebra final, sino en la construccion previa de [[L]].

## Modelo extendido o alternativo

La transicion aparece cuando conviene abandonar el modelo ideal: restricciones no eliminadas, excitaciones por tramos, discontinuidades o terminos disipativos que no pueden encerrarse con honestidad en [[V]]. En ese punto, un modelo extendido incorpora multiplicadores de Lagrange, dependencias temporales en [[L]], o fuerzas generalizadas que representan disipacion, actuacion o excitacion externa. La ecuacion mantiene la misma logica, pero aumenta la responsabilidad de separar que parte de la fisica entra por energia y que parte entra por accion externa.

Cuando el sistema presenta simetrias, el estudio de [[pi]] ayuda a detectar cantidades conservadas. Ese paso conecta el leaf con desarrollos posteriores de mecanica analitica, donde la forma de [[L]] aporta informacion estructural antes incluso de resolver toda la dinamica.

## Comparacion operativa

- Modelo conservativo: usa el cierre sin [[Qi]] y concentra toda la dinamica en [[L]].
- Modelo forzado: introduce [[Qi]] para representar acciones externas no potenciales.
- Modelo extendido: agrega restricciones explicitas, dependencias temporales o varios grados de libertad.
- Criterio de eleccion: utilizar el nivel minimo capaz de conservar interpretacion fisica y validar limites conocidos.
