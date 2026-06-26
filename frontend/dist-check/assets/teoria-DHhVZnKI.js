const e=`# Analogía lineal-angular\r
\r
## Contexto conceptual\r
\r
En mecánica, diferentes tipos de movimiento pueden describirse mediante estructuras matemáticas similares. La dinámica traslacional y la dinámica rotacional son un ejemplo especialmente relevante.\r
\r
Aunque describen fenómenos distintos —movimiento lineal frente a movimiento de giro—, ambas responden a una misma idea fundamental: cómo una interacción modifica el estado de movimiento de un sistema.\r
\r
La analogía entre ambas no es solo una herramienta de memorización, sino una forma de comprender la estructura profunda de las leyes físicas.\r
\r
---\r
\r
## 🟢 Nivel esencial\r
\r
Si empujas un objeto, este puede acelerar. Cuanta mayor sea su resistencia al cambio, más difícil será modificar su movimiento.\r
\r
De forma análoga, si produces un giro sobre un objeto, este comienza a rotar o cambia su velocidad de giro. Cuanto mayor sea su resistencia rotacional, más difícil será modificar ese giro.\r
\r
La idea clave es que siempre hay:\r
\r
- una acción que provoca el cambio\r
- una resistencia del sistema\r
- una respuesta en forma de aceleración\r
\r
En este nivel no hace falta memorizar toda la tabla. Basta con reconocer el patrón causal: algo empuja o hace girar, algo se opone al cambio, y el sistema responde acelerando. Esa lectura evita el error de pensar que la analogía es una traducción palabra por palabra.\r
\r
La pregunta física esencial es: ¿qué cambia cuando el movimiento deja de ser rectilíneo y pasa a depender de un eje? En traslación, la masa resume la resistencia. En rotación, la resistencia depende también de dónde está situada esa masa.\r
\r
---\r
\r
## 🔵 Nivel formal\r
\r
La dinámica traslacional se describe mediante:\r
\r
{{f:segunda_ley_newton}}\r
\r
En dinámica rotacional aparece una relación formalmente equivalente:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
Esta correspondencia permite establecer el paralelismo:\r
\r
- [[F]] ↔ [[tau]]\r
- [[m]] ↔ [[I]]\r
- [[a]] ↔ [[alpha]]\r
\r
Desde un punto de vista matemático, ambas ecuaciones tienen la misma estructura: una magnitud causa una aceleración proporcional e inversamente dependiente de una propiedad del sistema.\r
\r
La correspondencia lineal-angular se completa con otras parejas útiles: desplazamiento lineal frente a desplazamiento angular, velocidad lineal frente a velocidad angular y cantidad de movimiento lineal frente a momento angular. Sin embargo, en esta hoja el núcleo dinámico es la relación entre causa, resistencia y respuesta.\r
\r
Conviene leer las ecuaciones como modelos. La expresión\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
un eje definido y un momento de inercia adecuado a ese eje. Si alguna de esas condiciones falta, la analogía sigue orientando, pero el cálculo queda incompleto.\r
\r
En esta etapa ya sí conviene escribir los símbolos, porque el objetivo formal es comprobar qué ocupa cada lugar en la ecuación. La comparación no se limita a nombrar magnitudes: obliga a verificar unidades, signo, sistema físico y variable despejada antes de calcular.\r
\r
La analogía permite trasladar estrategias de resolución entre problemas.\r
\r
Para pasar de traslación a rotación:\r
\r
1. Identificar el eje de giro.\r
2. Sustituir fuerzas por torques.\r
3. Sustituir masa por momento de inercia.\r
4. Aplicar la segunda ley rotacional con eje y convenciones de signo explícitos.\r
\r
Este procedimiento no es automático: requiere interpretar correctamente cada magnitud en su contexto físico.\r
\r
Una rutina segura es escribir primero la versión lineal solo como patrón: causa/resistencia/respuesta. Después se elige el eje de giro, se calcula o selecciona [[I]], se determina el brazo de palanca de cada fuerza y se suma el torque neto. Solo entonces se usa la ecuación rotacional. Si se salta el eje, el resultado puede tener buena apariencia algebraica y mala física.\r
\r
---\r
\r
## 🔴 Nivel estructural\r
\r
La analogía lineal-angular funciona como un mapa de estructura, no como una igualdad de magnitudes. El valor estructural está en preservar el patrón causal y, al mismo tiempo, declarar qué piezas cambian al pasar de traslación a rotación. En traslación, la resistencia inercial se concentra en [[m]] y no depende del eje de análisis. En rotación, la resistencia inercial se expresa en [[I]] y depende explícitamente de la geometría y del eje elegido. Esta diferencia introduce un criterio de validez: si no está claro el eje, no hay interpretación robusta de [[tau]], [[I]] ni [[alpha]].\r
\r
También cambia la naturaleza de la causa dinámica. La fuerza neta [[F]] se interpreta en el eje lineal seleccionado, mientras que el torque neto [[tau]] surge de una combinación entre intensidad de fuerza y brazo de palanca. Por eso dos configuraciones con la misma fuerza pueden tener torques muy distintos. Estructuralmente, la analogía conserva la forma matemática de la ley dinámica, pero exige una capa geométrica adicional para que el modelo represente el fenómeno real.\r
\r
Desde el punto de vista metodológico, la analogía tiene límites claros. Si el eje varía con el tiempo, si el cuerpo se deforma de forma apreciable o si la distribución de masa cambia durante el movimiento, la correspondencia simple deja de ser suficiente para cálculo directo. Sigue siendo útil para organizar hipótesis, pero la resolución debe pasar a un modelo extendido con torque variable, momento de inercia efectivo por etapas o formulación completa de cuerpo rígido. En términos de validez, la analogía es fuerte para lectura estructural y moderada para predicción numérica cuando el sistema se aleja del caso ideal.\r
\r
La progresión de profundidad entre niveles debe leerse así: en el nivel esencial se reconoce el patrón causa-resistencia-respuesta; en el formal se escribe y manipula la ecuación; en el estructural se audita el dominio de validez y se decide si el modelo puede usarse sin correcciones. Esta tercera capa evita el error típico de aplicar una tabla de correspondencias como receta automática. Un resultado numérico puede parecer correcto y, aun así, ser físicamente inválido si se omitió el eje o se ignoró la dependencia geométrica de [[I]].\r
\r
Un criterio práctico de cierre estructural es comprobar tres condiciones antes de aceptar una solución: coherencia de eje y signos, compatibilidad entre distribución de masa y valor de [[I]], y consistencia entre causa dinámica y respuesta observada. Si una de estas condiciones falla, la analogía no debe desecharse, pero sí reinterpretarse como guía conceptual y no como sustituto del modelo físico completo.\r
\r
---\r
\r
## Interpretación física profunda\r
\r
La lectura profunda de la analogía no es que existan dos ecuaciones parecidas, sino que ambos dominios responden al mismo principio causal de la dinámica: una acción neta produce cambio de estado cuando actúa sobre una resistencia inercial. En traslación, esa resistencia está concentrada en [[m]]. En rotación, aparece repartida espacialmente y sintetizada en [[I]]. Por eso la analogía tiene una parte estable, la estructura causal, y una parte variable, la geometría del sistema.\r
\r
Esta distinción permite resolver mejor problemas mixtos. Cuando un sistema combina avance y giro, la analogía ayuda a separar qué magnitudes se conservan como patrón y cuáles requieren cálculo específico del eje y la distribución de masa. El resultado pedagógico importante es que el estudiante deja de usar equivalencias mecánicas y empieza a justificar por qué una sustitución es válida en un caso y no en otro.\r
\r
## Orden de magnitud\r
\r
En aplicaciones didácticas típicas, un objeto de laboratorio puede tener [[m]] entre 0.1 y 5 kg, mientras que su [[I]] efectivo puede variar más de un orden de magnitud para la misma masa si cambia el reparto radial. Como regla rápida, desplazar masa hacia el borde puede multiplicar [[I]] por factores de 2 a 5 sin cambiar [[m]]. Bajo el mismo [[tau]], esa variación reduce [[alpha]] en la misma proporción.\r
\r
Este orden de magnitud explica por qué dos sistemas con masa similar pueden mostrar respuestas angulares muy distintas. También justifica una práctica de modelado: antes de calcular con detalle, conviene estimar si la geometría del sistema sugiere un [[I]] bajo, medio o alto. Esa estimación inicial evita errores de escala y ayuda a detectar resultados numéricos poco plausibles.\r
\r
## Método de resolución personalizado\r
\r
1. Declara el eje y el convenio de signos para traslación y rotación.\r
2. Identifica tríada causal en ambos lados: causa, resistencia y respuesta.\r
3. Escribe la ecuación traslacional y la ecuación rotacional solo después de fijar sistema y eje.\r
4. Calcula o selecciona [[I]] respecto al eje real, no respecto a un eje implícito.\r
5. Verifica consistencia de unidades y compara escala esperada de [[a]] y [[alpha]].\r
6. Cierra con validación de dominio: rigidez aproximada, eje estable y pérdidas no dominantes.\r
\r
Este método prioriza interpretación antes de sustitución. Si al final la cuenta y la física no coinciden, se revisa primero el eje y la elección de [[I]], y solo después el álgebra. Esa secuencia reduce fallos típicos de la analogía lineal-angular en ejercicios de nivel intermedio y avanzado.\r
\r
---\r
\r
## Casos especiales y ejemplo extendido\r
\r
Un mismo objeto puede ser fácil de desplazar pero difícil de girar. Por ejemplo, una barra larga y una masa puntual pueden tener la misma masa, pero comportarse de forma muy distinta al rotar.\r
\r
Esto evidencia que la distribución de masa es clave en rotación.\r
\r
Otro caso especial aparece cuando la fuerza pasa por el eje. Aunque la fuerza sea grande, el torque puede ser nulo si el brazo de palanca es cero. Esta situación muestra el límite de la frase "torque equivale a fuerza": no equivale de forma directa, porque depende de cómo se aplica la fuerza respecto al eje.\r
\r
---\r
\r
## Preguntas reales del alumno\r
\r
¿Por qué dos objetos con la misma masa no giran igual?\r
\r
Porque el momento de inercia depende de cómo está distribuida la masa respecto al eje de giro.\r
\r
¿Puedo usar siempre la misma tabla de analogías?\r
\r
Puedes usarla como mapa inicial, pero no como sustituto del modelo. Antes de calcular, comprueba si el eje está definido, si el cuerpo puede considerarse rígido y si [[I]] corresponde realmente a ese eje.\r
\r
---\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este concepto conecta con:\r
\r
- momento de inercia\r
- torque y momento\r
- segunda ley rotacional\r
\r
También es fundamental para entender la rodadura y la conservación del momento angular.\r
\r
La ruta natural de estudio es avanzar desde esta hoja hacia torque y momento de inercia, y después hacia energía rotacional y momento angular. En cada paso se repite el mismo mensaje: la forma matemática ayuda, pero el significado físico debe reconstruirse en el contexto angular.\r
\r
---\r
\r
## Síntesis final\r
\r
La analogía lineal-angular permite entender la dinámica como una estructura coherente. Su valor no está en igualar magnitudes, sino en reconocer patrones de comportamiento y trasladar métodos de resolución entre contextos distintos.`;export{e as default};
