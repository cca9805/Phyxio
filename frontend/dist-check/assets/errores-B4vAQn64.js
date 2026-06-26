const e=`# Errores frecuentes en velocidad orbital\r
\r
## Errores conceptuales\r
### Error 1: confundir altura con radio orbital\r
**Por qué parece correcto**\r
La analogia incorrecta es pensar que toda distancia vertical en el dibujo es la distancia relevante del problema. El alumno ve [[h]] en el enunciado y generaliza que cualquier ecuacion orbital puede usar ese dato directamente.\r
\r
**Por qué es incorrecto**\r
Las relaciones de velocidad orbital usan [[r]] al centro, no altura sobre superficie. Si se usa [[h]] en lugar de [[r]], la dinamica queda mal escalada y se subestima o sobreestima [[v_orb]].\r
\r
**Señal de detección**\r
El resultado cae fuera del orden de magnitud esperado para el entorno planetario del ejercicio.\r
\r
**Corrección conceptual**\r
Primero reconstruye geometria con [[r]] igual [[R]] mas [[h]], y solo despues aplica la ecuacion orbital.\r
\r
**Mini-ejemplo de contraste**\r
Si se usa solo altura para una orbita baja, la velocidad sale artificialmente pequena. Al convertir con radio total, la rapidez vuelve a escala fisicamente plausible.\r
\r
### Error 2: tomar velocidad de escape como velocidad orbital\r
**Por qué parece correcto**\r
La generalizacion excesiva es asumir que ambas son velocidades caracteristicas del mismo sistema y, por tanto, intercambiables.\r
\r
**Por qué es incorrecto**\r
[[v_orb]] describe condicion para orbita circular ligada. [[v_escape]] define umbral para abandonar el sistema. Mezclarlas cambia por completo la interpretacion energetica.\r
\r
**Señal de detección**\r
La solucion concluye orbita estable usando una velocidad claramente por encima del umbral de permanencia circular.\r
\r
**Corrección conceptual**\r
Decide antes de calcular si buscas permanencia ligada o frontera de escape.\r
\r
**Mini-ejemplo de contraste**\r
Usar [[v_escape]] para disenar orbita de observacion implica exigir energia innecesaria. Usar [[v_orb]] resuelve la condicion correcta del problema.\r
\r
## Errores de modelo\r
### Error 1: aplicar dos cuerpos en regimen dominado por perturbaciones\r
**Por qué parece correcto**\r
La heuristica de simplificacion extrema lleva a creer que el modelo ideal siempre es suficiente por ser el mas conocido.\r
\r
**Por qué es incorrecto**\r
Cuando perturbaciones acumuladas no son pequenas, el modelo ideal pierde validez predictiva y puede dar derivas sistematicas.\r
\r
**Señal de detección**\r
La diferencia entre prediccion y dato observado crece de forma repetida en varias vueltas.\r
\r
**Corrección conceptual**\r
Mantener modelo ideal para lectura base y migrar a modelo extendido cuando la discrepancia supera el margen operativo.\r
\r
**Mini-ejemplo de contraste**\r
Una prediccion ideal coincide en la primera vuelta, pero falla despues por arrastre acumulado. Al incluir perturbacion, la deriva se explica.\r
\r
### Error 2: usar vis viva como si toda orbita fuera circular\r
**Por qué parece correcto**\r
El alumno recuerda una formula general y la aplica de forma automatica sin revisar supuestos geometricos.\r
\r
**Por qué es incorrecto**\r
En vis viva, [[a]] y [[r]] cumplen roles distintos. Forzar igualdad en toda la trayectoria elimina la variacion fisica de rapidez en elipticas.\r
\r
**Señal de detección**\r
La velocidad calculada no cambia entre periapsis y apoapsis cuando deberia hacerlo.\r
\r
**Corrección conceptual**\r
Distingue radio instantaneo y semieje mayor; solo en circular ideal coinciden.\r
\r
**Mini-ejemplo de contraste**\r
Si se impone [[a]] igual [[r]] en una elipse, el perfil de velocidad queda plano y contradice la lectura energetica.\r
\r
## Errores matemáticos\r
### Error 1: mezclar kilometros y metros\r
**Por qué parece correcto**\r
La analogia administrativa es creer que cambiar de unidad no afecta mientras los numeros se vean razonables.\r
\r
**Por qué es incorrecto**\r
La constante gravitatoria esta en SI y las potencias de distancia amplifican cualquier mezcla de unidades.\r
\r
**Señal de detección**\r
Aparecen saltos de tres o seis ordenes de magnitud sin causa fisica real.\r
\r
**Corrección conceptual**\r
Normaliza todas las distancias a metros antes de aplicar raices y potencias.\r
\r
**Mini-ejemplo de contraste**\r
Con [[r]] en kilometros, la velocidad sale desfasada; al convertir a metros, recupera escala coherente.\r
\r
### Error 2: redondear demasiado pronto\r
**Por qué parece correcto**\r
La generalizacion simplista sugiere que reducir decimales en cada paso ahorra trabajo sin costo relevante.\r
\r
**Por qué es incorrecto**\r
En expresiones con raices y diferencias, el redondeo temprano desplaza resultados y puede cambiar una conclusion de comparacion.\r
\r
**Señal de detección**\r
Dos metodos equivalentes dan resultados incompatibles al final de la cuenta.\r
\r
**Corrección conceptual**\r
Conserva precision intermedia y redondea solo al reportar.\r
\r
**Mini-ejemplo de contraste**\r
Con redondeo prematuro, dos orbitas parecen equivalentes. Con precision intermedia, la diferencia de periodo reaparece y es relevante.\r
\r
## Errores de interpretación\r
### Error 1: reportar numero sin lectura fisica\r
**Por qué parece correcto**\r
La heuristica escolar de exito numerico hace creer que obtener un valor final ya equivale a comprender el problema.\r
\r
**Por qué es incorrecto**\r
Sin interpretar tendencia, validez y escala, un numero aislado no permite decidir si la solucion describe un sistema realista.\r
\r
**Señal de detección**\r
El informe no explica que ocurre si cambia [[r]], [[M]] o el regimen energetico.\r
\r
**Corrección conceptual**\r
Agregar siempre lectura causal: que variable domina, que cambio produce y cual es el limite del modelo.\r
\r
**Mini-ejemplo de contraste**\r
Dos soluciones con mismo valor numerico pueden tener significado opuesto si una usa modelo fuera de validez.\r
\r
### Error 2: ignorar el signo de energia\r
**Por qué parece correcto**\r
Se asume que solo importa el modulo de velocidad y que el signo energetico es detalle secundario.\r
\r
**Por qué es incorrecto**\r
El signo de [[E]] clasifica regimen orbital. Ignorarlo elimina la distincion entre estado ligado y estado de escape.\r
\r
**Señal de detección**\r
Se afirma orbita ligada con energia positiva o escape con energia negativa sin justificacion adicional.\r
\r
**Corrección conceptual**\r
Usar energia especifica como chequeo estructural junto con velocidad y geometria.\r
\r
**Mini-ejemplo de contraste**\r
Una trayectoria con [[E]] negativa no corresponde a escape libre en el modelo clasico, aunque la rapidez instantanea parezca grande.\r
\r
## Regla de autocontrol rápido\r
Antes de entregar, aplica esta secuencia: identifica objetivo fisico, convierte [[h]] a [[r]], verifica SI, contrasta tendencia de [[v_orb]] con cambios de [[r]], y confirma coherencia con [[E]] cuando el problema lo requiera. Si alguno de estos cinco pasos falla, la solucion debe revisarse antes de aceptarse.`;export{e as default};
