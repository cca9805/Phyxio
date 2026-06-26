const e=`## Errores conceptuales\r
\r
### Error 1: confundir conservación con ausencia de cambio\r
\r
**Por qué parece correcto**\r
Si el alumno oye "se conserva", interpreta que cada término individual permanece fijo.\r
\r
**Por qué es incorrecto**\r
La conservación mecánica se aplica al balance global, no a cada término por separado. [[Ki]] puede disminuir y [[Uf]] aumentar, o al revés, mientras la lectura total siga siendo coherente con [[Em]].\r
\r
**Señal de detección**\r
La explicación verbal afirma que como hay conservación entonces no puede cambiar la velocidad.\r
\r
**Corrección conceptual**\r
Explicar que "conservar" significa mantener la contabilidad total del sistema y no congelar cada componente energética.\r
\r
**Mini-ejemplo de contraste**\r
En una caída ideal, [[Uf]] puede bajar mientras [[Kf]] sube sin violar el balance global.\r
\r
### Error 2: usar el modelo sin delimitar sistema\r
\r
**Por qué parece correcto**\r
Se toma la ecuación como plantilla universal y se sustituye de inmediato.\r
\r
**Por qué es incorrecto**\r
Sin frontera de sistema, [[Wnc]] queda ambiguo y el balance pierde significado físico.\r
\r
**Señal de detección**\r
No se puede decir qué interacción pertenece al sistema y cuál llega del entorno.\r
\r
**Corrección conceptual**\r
Anotar primero sistema, estado inicial, estado final y referencia de potencial.\r
\r
**Mini-ejemplo de contraste**\r
Si no se define frontera, una pérdida por fricción puede quedar fuera o dentro del sistema sin criterio y cambiar artificialmente [[Wnc]].\r
\r
## Errores de modelo\r
\r
### Error 1: imponer ideal conservativo con disipación evidente\r
\r
**Por qué parece correcto**\r
El enunciado no siempre menciona explícitamente la palabra "rozamiento".\r
\r
**Por qué es incorrecto**\r
Si hay evidencia de pérdidas, el modelo debe incluir [[Wnc]]; de lo contrario, la conservación estricta es una hipótesis falsa.\r
\r
**Señal de detección**\r
La predicción ideal de [[Kf]] es sistemáticamente mayor que la medida experimental.\r
\r
**Corrección conceptual**\r
Migrar a un balance con transferencia no conservativa y justificar el signo físico de [[Wnc]].\r
\r
**Mini-ejemplo de contraste**\r
Si una rampa real entrega menos [[Kf]] que el ideal, el ajuste correcto es incorporar [[Wnc]] negativo.\r
\r
### Error 2: mezclar referencias de potencial\r
\r
**Por qué parece correcto**\r
Cambiar el cero de potencial parece inofensivo en cada paso parcial.\r
\r
**Por qué es incorrecto**\r
Si [[Ui]] y [[Uf]] usan referencias distintas, la resta deja de representar una variación física válida.\r
\r
**Señal de detección**\r
Aparecen cambios energéticos exagerados sin causa mecánica clara.\r
\r
**Corrección conceptual**\r
Fijar una referencia única desde el inicio y mantenerla hasta la interpretación final.\r
\r
**Mini-ejemplo de contraste**\r
Tomar cero potencial en el suelo al inicio y en otra cota al final invalida la comparación entre [[Ui]] y [[Uf]].\r
\r
## Errores matemáticos\r
\r
### Error 1: interpretar un resultado negativo de energía cinética como aceptable\r
\r
**Por qué parece correcto**\r
La cadena algebraica parece cerrada y no hay errores de cálculo visibles.\r
\r
**Por qué es incorrecto**\r
[[K]] y [[Kf]] no pueden ser negativas en mecánica clásica. Un valor negativo apunta a error de signos, datos o modelo.\r
\r
**Señal de detección**\r
Salida numérica de [[Kf]] menor que cero.\r
\r
**Corrección conceptual**\r
Revisar coherencia de unidades, signo de [[Wnc]] y referencia de [[U]].\r
\r
**Mini-ejemplo de contraste**\r
Si el cálculo entrega [[Kf]] negativa, la solución física es revisar modelo y signos, no aceptar el número.\r
\r
### Error 2: sustituir números demasiado pronto\r
\r
**Por qué parece correcto**\r
Ahorra tiempo aparente en ejercicios cortos.\r
\r
**Por qué es incorrecto**\r
Oculta relaciones causales y dificulta detectar inconsistencias dimensionales.\r
\r
**Señal de detección**\r
No se puede explicar qué término compensa a cuál cuando cambia un dato.\r
\r
**Corrección conceptual**\r
Despejar en forma simbólica y después evaluar con datos.\r
\r
**Mini-ejemplo de contraste**\r
Al mantener símbolos hasta el final se detecta si el resultado depende de [[Ui]] o de [[Wnc]] antes de sustituir.\r
\r
## Errores de interpretación\r
\r
### Error 1: cerrar con número sin lectura física\r
\r
**Por qué parece correcto**\r
El resultado coincide con una opción de examen o con una cifra esperada.\r
\r
**Por qué es incorrecto**\r
Sin interpretación causal no se valida la pertinencia del modelo ni su transferencia a otro problema.\r
\r
**Señal de detección**\r
El alumno no puede explicar qué cambiaría si aumentan pérdidas o cambia la altura inicial.\r
\r
**Corrección conceptual**\r
Añadir una frase final de causalidad: qué término aumenta, cuál disminuye y por qué.\r
\r
**Mini-ejemplo de contraste**\r
Una buena lectura final explica que al aumentar pérdidas, crece en magnitud [[Wnc]] y disminuye [[Kf]].\r
\r
### Error 2: tratar [[Em]] como energía total universal\r
\r
**Por qué parece correcto**\r
El símbolo se presenta como "energía total" en muchos contextos introductorios.\r
\r
**Por qué es incorrecto**\r
[[Em]] es energía mecánica, no incluye automáticamente transferencias térmicas o internas.\r
\r
**Señal de detección**\r
Se usan conclusiones térmicas sin introducir términos de transferencia adecuados.\r
\r
**Corrección conceptual**\r
Separar explícitamente magnitudes mecánicas de no mecánicas cuando el problema lo exige.\r
\r
**Mini-ejemplo de contraste**\r
En un proceso con calentamiento, [[Em]] no describe por sí sola toda la energía intercambiada.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de entregar una solución, aplicar este checklist en 30 segundos:\r
\r
1. Sistema y frontera declarados.\r
2. Referencia de potencial única para [[Ui]] y [[Uf]].\r
3. Signo de [[Wnc]] justificado con una frase física.\r
4. Resultado de [[Kf]] y [[K]] físicamente posible.\r
5. Lectura final: cómo se repartió [[Em]] entre estados.\r
\r
Esta regla evita la mayoría de errores recurrentes y convierte el cierre numérico en un cierre físico defendible.`;export{e as default};
