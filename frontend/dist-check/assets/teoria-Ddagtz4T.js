const e=`# Aceleracion relativa\r
\r
## Contexto conceptual\r
\r
Este leaf responde una pregunta clave de mecanica: como cambia la aceleracion medida cuando el observador tambien acelera.\r
\r
En muchos problemas de aula se asume, sin decirlo, que el observador esta en un marco inercial. Esa simplificacion puede ser util en primeros pasos, pero en situaciones reales no siempre vale. Un conductor que observa otro auto, un robot que mide una pieza desde una base movil o un carro de inspeccion ferroviaria que sigue otra unidad viven en marcos que pueden tener aceleracion propia.\r
\r
Por eso aparecen tres magnitudes con roles distintos:\r
\r
1. [[a_A]]: aceleracion del objeto A en un marco inercial declarado.\r
2. [[a_B]]: aceleracion del marco observador B en ese mismo marco inercial.\r
3. [[a_rel]]: aceleracion de A observada desde B.\r
\r
El tiempo [[t]] se trata como comun en el regimen clasico del leaf. La ganancia didactica es grande: en vez de mezclar causas, se separa dinamica del objeto y dinamica del observador antes de interpretar.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial no hace falta cargar algebra. La idea central es comparativa: [[a_rel]] expresa como cambia la velocidad de A respecto de B por efecto conjunto de [[a_A]] y [[a_B]].\r
\r
Lectura cualitativa rapida:\r
\r
- Si [[a_rel]] es positiva en el eje elegido, A gana tendencia de velocidad relativa en ese sentido.\r
- Si [[a_rel]] es cercana a cero, A y B comparten aceleracion instantanea similar.\r
- Si [[a_rel]] es negativa, A pierde tendencia de velocidad relativa en ese sentido.\r
\r
Tres aclaraciones evitan errores frecuentes:\r
\r
1. [[a_rel]] nula no significa velocidad relativa nula.\r
2. [[a_rel]] positiva no significa que A tenga una "fuerza nueva"; solo compara marcos.\r
3. El cambio de signo de [[a_rel]] puede venir de cambios en [[a_B]] aun cuando [[a_A]] se mantenga estable.\r
\r
Este nivel busca intuicion causal: quien cambia, el objeto, el observador o ambos. Sin esa base, los calculos se vuelven mecanicos y la interpretacion falla.\r
\r
Tambien conviene una regla verbal simple antes de calcular: cuando la aceleracion del observador crece y la del objeto se mantiene, la lectura relativa suele desplazarse hacia valores menores. Esta frase ayuda a anticipar el signo esperado y reduce errores de interpretacion tempranos.\r
\r
Otra regla esencial practica: antes de abrir una calculadora, describir en una frase que cambia en el objeto y que cambia en el observador. Esa separacion verbal evita mezclar causas desde el inicio.\r
\r
## 🔵 Nivel formal\r
\r
La relacion formal del leaf es:\r
\r
{{f:composicion_aceleracion_galileana}}\r
\r
Caso especial cuando el observador es inercial:\r
\r
{{f:invarianza_aceleracion_inercial}}\r
\r
Interpretacion operativa:\r
\r
- [[a_A]] y [[a_B]] deben estar en la misma convencion de ejes.\r
- [[a_rel]] se interpreta en la misma escala temporal [[t]].\r
- El caso inercial del observador es limite especial, no regla universal.\r
\r
Control cuantitativo recomendado:\r
\r
residual = abs([[a_rel]] - [[a_A]] + [[a_B]]).\r
\r
Si residual se mantiene por debajo de una tolerancia practica, por ejemplo 0.10 m/s^2 en laboratorio docente, el modelo de traslacion galileana suele ser suficiente para lectura de primer orden.\r
\r
Refuerzo formal de metodo:\r
\r
1. Definir una ventana temporal de analisis [[t]] antes de procesar datos.\r
2. Aplicar un filtrado coherente para [[a_A]] y [[a_B]] para evitar sesgos de fase.\r
3. Calcular [[a_rel]] en cada ventana y comparar con umbrales de interpretacion.\r
4. Reportar resultado con banda de incertidumbre, no solo con un valor puntual.\r
\r
Este bloque formal aumenta la capacidad de reproducir resultados entre equipos. Dos analistas que usen el mismo protocolo deben obtener conclusiones compatibles, y si no ocurre, el desacuerdo se vuelve trazable.\r
\r
Refuerzo de consistencia formal: al comparar ventanas consecutivas, conviene registrar tendencia de [[a_rel]] junto con tendencia de [[a_B]]. Cuando ambas evolucionan en direcciones coherentes, la inferencia causal gana robustez.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural responde cuando conviene cambiar de modelo y por que.\r
\r
Condiciones de aplicacion:\r
\r
1. Relacion entre marcos dominada por traslacion.\r
2. Efectos de rotacion relativa despreciables en la ventana analizada.\r
3. Regimen clasico valido.\r
4. Sincronizacion temporal de [[t]] suficientemente buena.\r
\r
Senales de salida de dominio:\r
\r
1. residual persistente por encima del umbral.\r
2. Cambios de conclusion al mover ligeramente la sincronizacion.\r
3. Contradicciones por cambios no declarados de ejes o signos.\r
4. Reclamos de precision mayores que la incertidumbre instrumental.\r
\r
Cuando conviene cambiar de modelo: si residual supera 0.10 m/s^2 de forma sistematica, o si la geometria introduce rotacion relevante, la formulacion de traslacion pura deja de ser adecuada y debe usarse un modelo no inercial extendido.\r
\r
Analisis estructural de decision:\r
\r
- Criterio de permanencia: residual <= 0.10 m/s^2 en mas del 80 por ciento de ventanas.\r
- Criterio de alerta: residual entre 0.10 y 0.20 m/s^2 con tendencia creciente.\r
- Criterio de escalado: residual > 0.20 m/s^2 de manera sostenida o presencia de rotacion dominante.\r
\r
Estos criterios no son solo numericos; organizan el paso entre modelos sin arbitrariedad y reducen errores de interpretacion en informes tecnicos.\r
\r
Este criterio evita dos extremos: sobredimensionar el modelo sin necesidad o forzar una simplificacion fuera de su dominio.\r
\r
## Interpretacion fisica profunda\r
\r
La lectura profunda de [[a_rel]] es causal. No describe una esencia del objeto; describe una diferencia dinamica entre objeto y observador.\r
\r
Esa diferencia es crucial para decisiones tecnicas. En seguimiento vehicular, por ejemplo, el signo y magnitud de [[a_rel]] pueden activar o desactivar acciones de control. Un error de signo puede invertir una decision de seguridad.\r
\r
Tambien explica por que dos observadores pueden "discrepar" sin contradiccion fisica. Si sus marcos tienen aceleraciones distintas, sus mediciones relativas tambien cambian de manera coherente con las ecuaciones.\r
\r
Cuando estudiantes ignoran esta idea suelen construir relatos falsos: "el objeto cambio de comportamiento" cuando en realidad cambio [[a_B]]. La disciplina correcta es separar causas antes de concluir.\r
\r
## Orden de magnitud\r
\r
Rangos orientativos utiles:\r
\r
- Transporte urbano confortable: aceleraciones del orden de 0.3 a 1.5 m/s^2.\r
- Maniobras automotrices mas exigentes: unidades de m/s^2 adicionales.\r
- Plataformas industriales moviles: desde decimas hasta algunos m/s^2.\r
\r
Regla de lectura con incertidumbre:\r
\r
1. Evidencia fuerte: |[[a_rel]]| mucho mayor que la incertidumbre.\r
2. Evidencia media: |[[a_rel]]| comparable a la incertidumbre.\r
3. Evidencia debil: |[[a_rel]]| menor que la incertidumbre.\r
\r
Esta escala evita sobreinterpretar variaciones pequenas y mejora la calidad de decisiones.\r
\r
## Metodo de resolucion personalizado\r
\r
Flujo recomendado para resolver ejercicios:\r
\r
1. Declarar marcos y eje con signo positivo.\r
2. Registrar [[a_A]], [[a_B]] y [[t]] con unidades.\r
3. Revisar hipotesis de validez del modelo.\r
4. Aplicar la relacion formal del leaf.\r
5. Verificar residual y consistencia dimensional.\r
6. Redactar interpretacion causal de [[a_rel]].\r
7. Declarar limite de validez y posible escalado.\r
\r
Chequeo rapido:\r
\r
- Si el signo sorprende, revisar eje y convencion antes de recalcular.\r
- Si residual es alto, revisar sincronizacion antes de cambiar teoria.\r
- Si la conclusion es ambigua, separar en dos frases: que cambia en A y que cambia en B.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Caso especial 1: observador casi inercial. Si [[a_B]] es despreciable frente a incertidumbre, [[a_rel]] y [[a_A]] resultan practicamente iguales en medicion.\r
\r
Caso especial 2: paridad de aceleraciones. Si [[a_A]] y [[a_B]] coinciden en el eje, [[a_rel]] se acerca a cero; eso no implica igualdad de velocidades.\r
\r
Ejemplo extendido de acople ferroviario:\r
\r
En una maniobra de baja velocidad, el vagon A se observa desde el vagon B instrumentado.\r
\r
- Ventana 1: [[a_A]] = 1.9 y [[a_B]] = 0.7 m/s^2, luego [[a_rel]] es positiva.\r
- Ventana 2: [[a_A]] = 1.9 y [[a_B]] = 1.9 m/s^2, luego [[a_rel]] se acerca a cero.\r
- Ventana 3: [[a_A]] = 1.9 y [[a_B]] = 2.2 m/s^2, luego [[a_rel]] es negativa.\r
\r
La dinamica del objeto no cambia de "naturaleza" entre ventanas; cambia la lectura relativa porque cambia el observador. Esa es la idea nuclear del leaf.\r
\r
## Preguntas reales del alumno\r
\r
Pregunta 1: Si [[a_rel]] vale cero, estan en reposo relativo.\r
\r
Respuesta: no necesariamente. Solo indica que la diferencia de velocidades no cambia en ese instante.\r
\r
Pregunta 2: Puedo ignorar [[a_B]] si es pequena.\r
\r
Respuesta: solo si su orden de magnitud es menor que el umbral de decision y la incertidumbre.\r
\r
Pregunta 3: Por que dos observadores difieren sin violar la fisica.\r
\r
Respuesta: porque usan marcos con dinamica distinta; la diferencia es esperable y cuantificable.\r
\r
Pregunta 4: Cuando abandono este modelo.\r
\r
Respuesta: cuando fallan hipotesis de traslacion, sincronizacion o residual.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con:\r
\r
1. Sistemas inerciales y no inerciales.\r
2. Control de seguimiento vehicular.\r
3. Robotica sobre base movil.\r
4. Metrologia y fusion sensorial.\r
\r
Ruta sugerida:\r
\r
- Primero resolver casos 1D de traslacion pura.\r
- Luego incluir incertidumbre y residual.\r
- Despues comparar con escenarios con rotacion.\r
- Finalmente vincular con decisiones de control y seguridad.\r
\r
Esa ruta conserva claridad conceptual mientras aumenta realismo.\r
\r
## Sintesis final\r
\r
[[a_rel]] es una magnitud relacional que une dinamica del objeto y del observador. No basta con calcular; hay que interpretar causalmente.\r
\r
La practica correcta es siempre la misma: declarar supuestos, calcular con consistencia, validar umbrales y concluir con limites explicitos. Con esa disciplina, el modelo resulta simple, potente y util en problemas reales de mecanica aplicada.\r
`;export{e as default};
