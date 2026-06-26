const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un montacargas eleva una carga de [[m]] igual a quinientos kilogramos desde [[hi]] de menos cinco metros hasta [[hf]] de veinte metros. Se toma [[g]] igual a diez metros por segundo cuadrado y se pide calcular primero el cambio de energia potencial [[dUg]], luego la energia de estado [[Ug]] en la cota final y por ultimo el trabajo [[Wg]] realizado por la gravedad durante el ascenso.\r
\r
## Datos\r
\r
- [[m]] igual a quinientos kilogramos.\r
- [[g]] igual a diez metros por segundo cuadrado.\r
- [[hi]] igual a menos cinco metros.\r
- [[hf]] igual a veinte metros.\r
\r
## Definición del sistema\r
\r
El sistema es carga mas Tierra en aproximacion local. La referencia vertical se mantiene unica para [[hi]], [[hf]] y [[h]]. La pregunta central del problema es de cambio de estado, por lo que la magnitud principal de lectura inicial es [[dUg]].\r
\r
## Modelo físico\r
\r
El escenario encaja con gravedad local casi uniforme y variacion de altura moderada. Por eso se usan las relaciones nucleares del leaf.\r
\r
{{f:variacion_potencial_gravitatorio}}\r
\r
Luego, para leer el valor de estado en la cota final, se usa la formula de estado del mismo modelo.\r
\r
{{f:potencial_gravitatorio_superficie}}\r
\r
Finalmente, para el trabajo gravitatorio se usa la regla de signo opuesto entre transferencia y cambio de energia potencial.\r
\r
{{f:trabajo_gravitatorio}}\r
\r
## Justificación del modelo\r
\r
Este problema no exige modelo gravitatorio global. Exige consistencia de referencia y lectura de signos. Por eso el modelo local del leaf es suficiente y didacticamente correcto.\r
\r
Tambien es un caso excelente para entrenar comunicacion tecnica. Si dos estudiantes hacen la misma operacion pero uno explicita referencia y sentido del proceso, su reporte sera mas util para una revision de calidad. La formula sola no distingue una resolucion robusta de una resolucion fragil. Lo que la distingue es la trazabilidad del razonamiento.\r
\r
## Resolución simbólica\r
\r
1. El cambio de altura se obtiene al comparar [[hf]] frente a [[hi]].\r
2. Con ese cambio se calcula [[dUg]] usando [[m]] y [[g]].\r
3. El trabajo [[Wg]] se deduce por signo opuesto al cambio [[dUg]].\r
4. El valor [[Ug]] en la cota final se obtiene con [[h]] igual a [[hf]] y la misma referencia.\r
\r
## Sustitución numérica\r
\r
La diferencia vertical es de veinticinco metros. El cambio [[dUg]] resulta de ciento veinticinco mil julios y su signo es positivo porque el proceso termina mas alto. El trabajo [[Wg]] vale menos ciento veinticinco mil julios por la convencion conservativa. El valor de [[Ug]] en la cota final, con esta referencia, es de cien mil julios.\r
\r
Si se invirtiera el proceso, los mismos datos de magnitud producirian signos opuestos para [[dUg]] y [[Wg]]. Este contraste es didacticamente valioso porque muestra que el numero absoluto por si solo no decide la interpretacion: la decide el sentido fisico del proceso. Por eso conviene leer siempre la historia del sistema junto con la magnitud calculada.\r
\r
## Validación dimensional\r
\r
Las magnitudes quedan en unidades SI: [[m]] en kilogramos, [[g]] en metros por segundo cuadrado y [[h]] en metros. El resultado energetico aparece en julios para [[dUg]], [[Ug]] y [[Wg]], por lo que la consistencia dimensional se cumple.\r
\r
## Interpretación física\r
\r
El ascenso aumenta [[Ug]], asi que [[dUg]] es positiva. Como la gravedad se opone al ascenso, [[Wg]] es negativa. La lectura causal queda cerrada porque estado y transferencia muestran signos coherentes.\r
\r
Una interpretacion completa no termina en signos. Tambien debe responder si el resultado es razonable en escala. Para una carga de cientos de kilogramos y una diferencia vertical de decenas de metros, energias del orden de cien mil julios son plausibles. Si aparecieran energias varios ordenes de magnitud mayores, se deberia revisar conversion de unidades o lectura de altura.\r
\r
Esta etapa final ayuda a construir criterio profesional: no basta con calcular; hay que argumentar por que el calculo representa bien la situacion real.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una planta logistica se comparan dos rutas de elevacion para el mismo paquete: una ruta corta hasta un entrepiso y otra hasta una estanteria alta. La meta es decidir la demanda energetica minima asociada solo al cambio de altura.\r
\r
## Estimación física\r
\r
Si [[m]] y [[g]] se mantienen, duplicar el salto vertical duplica [[dUg]]. Esto permite estimar rapidamente el impacto energetico de reubicar cargas en niveles superiores sin recalcular toda la dinamica del sistema.\r
\r
Con este tipo de lectura se pueden comparar decisiones logisticas simples. Por ejemplo, si un flujo diario mueve la misma masa muchas veces, una diferencia pequena de altura por ciclo puede convertirse en una diferencia energetica grande en acumulado semanal. Esa informacion permite priorizar ubicaciones y rutas sin esperar un estudio de alta complejidad.\r
\r
## Interpretación\r
\r
La variable clave para la decision operativa es [[dUg]], no el valor aislado de [[Ug]]. Con esa lectura, el equipo tecnico puede comparar escenarios de almacenamiento usando un criterio fisico unico y consistente.\r
\r
En proyectos reales, esta consistencia mejora la comunicacion entre operacion, mantenimiento y seguridad. Cada area puede leer el mismo resultado con su propio enfoque, pero sobre una base fisica comun: estado inicial, estado final y trabajo asociado. Esa es la ventaja principal de usar este leaf como marco de decision.`;export{e as default};
