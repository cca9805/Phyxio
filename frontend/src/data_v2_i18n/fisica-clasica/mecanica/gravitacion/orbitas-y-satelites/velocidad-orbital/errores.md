# Errores frecuentes en velocidad orbital

## Errores conceptuales
### Error 1: confundir altura con radio orbital
**Por qué parece correcto**
La analogia incorrecta es pensar que toda distancia vertical en el dibujo es la distancia relevante del problema. El alumno ve [[h]] en el enunciado y generaliza que cualquier ecuacion orbital puede usar ese dato directamente.

**Por qué es incorrecto**
Las relaciones de velocidad orbital usan [[r]] al centro, no altura sobre superficie. Si se usa [[h]] en lugar de [[r]], la dinamica queda mal escalada y se subestima o sobreestima [[v_orb]].

**Señal de detección**
El resultado cae fuera del orden de magnitud esperado para el entorno planetario del ejercicio.

**Corrección conceptual**
Primero reconstruye geometria con [[r]] igual [[R]] mas [[h]], y solo despues aplica la ecuacion orbital.

**Mini-ejemplo de contraste**
Si se usa solo altura para una orbita baja, la velocidad sale artificialmente pequena. Al convertir con radio total, la rapidez vuelve a escala fisicamente plausible.

### Error 2: tomar velocidad de escape como velocidad orbital
**Por qué parece correcto**
La generalizacion excesiva es asumir que ambas son velocidades caracteristicas del mismo sistema y, por tanto, intercambiables.

**Por qué es incorrecto**
[[v_orb]] describe condicion para orbita circular ligada. [[v_escape]] define umbral para abandonar el sistema. Mezclarlas cambia por completo la interpretacion energetica.

**Señal de detección**
La solucion concluye orbita estable usando una velocidad claramente por encima del umbral de permanencia circular.

**Corrección conceptual**
Decide antes de calcular si buscas permanencia ligada o frontera de escape.

**Mini-ejemplo de contraste**
Usar [[v_escape]] para disenar orbita de observacion implica exigir energia innecesaria. Usar [[v_orb]] resuelve la condicion correcta del problema.

## Errores de modelo
### Error 1: aplicar dos cuerpos en regimen dominado por perturbaciones
**Por qué parece correcto**
La heuristica de simplificacion extrema lleva a creer que el modelo ideal siempre es suficiente por ser el mas conocido.

**Por qué es incorrecto**
Cuando perturbaciones acumuladas no son pequenas, el modelo ideal pierde validez predictiva y puede dar derivas sistematicas.

**Señal de detección**
La diferencia entre prediccion y dato observado crece de forma repetida en varias vueltas.

**Corrección conceptual**
Mantener modelo ideal para lectura base y migrar a modelo extendido cuando la discrepancia supera el margen operativo.

**Mini-ejemplo de contraste**
Una prediccion ideal coincide en la primera vuelta, pero falla despues por arrastre acumulado. Al incluir perturbacion, la deriva se explica.

### Error 2: usar vis viva como si toda orbita fuera circular
**Por qué parece correcto**
El alumno recuerda una formula general y la aplica de forma automatica sin revisar supuestos geometricos.

**Por qué es incorrecto**
En vis viva, [[a]] y [[r]] cumplen roles distintos. Forzar igualdad en toda la trayectoria elimina la variacion fisica de rapidez en elipticas.

**Señal de detección**
La velocidad calculada no cambia entre periapsis y apoapsis cuando deberia hacerlo.

**Corrección conceptual**
Distingue radio instantaneo y semieje mayor; solo en circular ideal coinciden.

**Mini-ejemplo de contraste**
Si se impone [[a]] igual [[r]] en una elipse, el perfil de velocidad queda plano y contradice la lectura energetica.

## Errores matemáticos
### Error 1: mezclar kilometros y metros
**Por qué parece correcto**
La analogia administrativa es creer que cambiar de unidad no afecta mientras los numeros se vean razonables.

**Por qué es incorrecto**
La constante gravitatoria esta en SI y las potencias de distancia amplifican cualquier mezcla de unidades.

**Señal de detección**
Aparecen saltos de tres o seis ordenes de magnitud sin causa fisica real.

**Corrección conceptual**
Normaliza todas las distancias a metros antes de aplicar raices y potencias.

**Mini-ejemplo de contraste**
Con [[r]] en kilometros, la velocidad sale desfasada; al convertir a metros, recupera escala coherente.

### Error 2: redondear demasiado pronto
**Por qué parece correcto**
La generalizacion simplista sugiere que reducir decimales en cada paso ahorra trabajo sin costo relevante.

**Por qué es incorrecto**
En expresiones con raices y diferencias, el redondeo temprano desplaza resultados y puede cambiar una conclusion de comparacion.

**Señal de detección**
Dos metodos equivalentes dan resultados incompatibles al final de la cuenta.

**Corrección conceptual**
Conserva precision intermedia y redondea solo al reportar.

**Mini-ejemplo de contraste**
Con redondeo prematuro, dos orbitas parecen equivalentes. Con precision intermedia, la diferencia de periodo reaparece y es relevante.

## Errores de interpretación
### Error 1: reportar numero sin lectura fisica
**Por qué parece correcto**
La heuristica escolar de exito numerico hace creer que obtener un valor final ya equivale a comprender el problema.

**Por qué es incorrecto**
Sin interpretar tendencia, validez y escala, un numero aislado no permite decidir si la solucion describe un sistema realista.

**Señal de detección**
El informe no explica que ocurre si cambia [[r]], [[M]] o el regimen energetico.

**Corrección conceptual**
Agregar siempre lectura causal: que variable domina, que cambio produce y cual es el limite del modelo.

**Mini-ejemplo de contraste**
Dos soluciones con mismo valor numerico pueden tener significado opuesto si una usa modelo fuera de validez.

### Error 2: ignorar el signo de energia
**Por qué parece correcto**
Se asume que solo importa el modulo de velocidad y que el signo energetico es detalle secundario.

**Por qué es incorrecto**
El signo de [[E]] clasifica regimen orbital. Ignorarlo elimina la distincion entre estado ligado y estado de escape.

**Señal de detección**
Se afirma orbita ligada con energia positiva o escape con energia negativa sin justificacion adicional.

**Corrección conceptual**
Usar energia especifica como chequeo estructural junto con velocidad y geometria.

**Mini-ejemplo de contraste**
Una trayectoria con [[E]] negativa no corresponde a escape libre en el modelo clasico, aunque la rapidez instantanea parezca grande.

## Regla de autocontrol rápido
Antes de entregar, aplica esta secuencia: identifica objetivo fisico, convierte [[h]] a [[r]], verifica SI, contrasta tendencia de [[v_orb]] con cambios de [[r]], y confirma coherencia con [[E]] cuando el problema lo requiera. Si alguno de estos cinco pasos falla, la solucion debe revisarse antes de aceptarse.