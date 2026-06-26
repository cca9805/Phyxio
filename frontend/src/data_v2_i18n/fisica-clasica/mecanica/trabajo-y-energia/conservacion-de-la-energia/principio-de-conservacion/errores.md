## Errores conceptuales

### Error 1: confundir conservación con ausencia de cambio

**Por qué parece correcto**
Si el alumno oye "se conserva", interpreta que cada término individual permanece fijo.

**Por qué es incorrecto**
La conservación mecánica se aplica al balance global, no a cada término por separado. [[Ki]] puede disminuir y [[Uf]] aumentar, o al revés, mientras la lectura total siga siendo coherente con [[Em]].

**Señal de detección**
La explicación verbal afirma que como hay conservación entonces no puede cambiar la velocidad.

**Corrección conceptual**
Explicar que "conservar" significa mantener la contabilidad total del sistema y no congelar cada componente energética.

**Mini-ejemplo de contraste**
En una caída ideal, [[Uf]] puede bajar mientras [[Kf]] sube sin violar el balance global.

### Error 2: usar el modelo sin delimitar sistema

**Por qué parece correcto**
Se toma la ecuación como plantilla universal y se sustituye de inmediato.

**Por qué es incorrecto**
Sin frontera de sistema, [[Wnc]] queda ambiguo y el balance pierde significado físico.

**Señal de detección**
No se puede decir qué interacción pertenece al sistema y cuál llega del entorno.

**Corrección conceptual**
Anotar primero sistema, estado inicial, estado final y referencia de potencial.

**Mini-ejemplo de contraste**
Si no se define frontera, una pérdida por fricción puede quedar fuera o dentro del sistema sin criterio y cambiar artificialmente [[Wnc]].

## Errores de modelo

### Error 1: imponer ideal conservativo con disipación evidente

**Por qué parece correcto**
El enunciado no siempre menciona explícitamente la palabra "rozamiento".

**Por qué es incorrecto**
Si hay evidencia de pérdidas, el modelo debe incluir [[Wnc]]; de lo contrario, la conservación estricta es una hipótesis falsa.

**Señal de detección**
La predicción ideal de [[Kf]] es sistemáticamente mayor que la medida experimental.

**Corrección conceptual**
Migrar a un balance con transferencia no conservativa y justificar el signo físico de [[Wnc]].

**Mini-ejemplo de contraste**
Si una rampa real entrega menos [[Kf]] que el ideal, el ajuste correcto es incorporar [[Wnc]] negativo.

### Error 2: mezclar referencias de potencial

**Por qué parece correcto**
Cambiar el cero de potencial parece inofensivo en cada paso parcial.

**Por qué es incorrecto**
Si [[Ui]] y [[Uf]] usan referencias distintas, la resta deja de representar una variación física válida.

**Señal de detección**
Aparecen cambios energéticos exagerados sin causa mecánica clara.

**Corrección conceptual**
Fijar una referencia única desde el inicio y mantenerla hasta la interpretación final.

**Mini-ejemplo de contraste**
Tomar cero potencial en el suelo al inicio y en otra cota al final invalida la comparación entre [[Ui]] y [[Uf]].

## Errores matemáticos

### Error 1: interpretar un resultado negativo de energía cinética como aceptable

**Por qué parece correcto**
La cadena algebraica parece cerrada y no hay errores de cálculo visibles.

**Por qué es incorrecto**
[[K]] y [[Kf]] no pueden ser negativas en mecánica clásica. Un valor negativo apunta a error de signos, datos o modelo.

**Señal de detección**
Salida numérica de [[Kf]] menor que cero.

**Corrección conceptual**
Revisar coherencia de unidades, signo de [[Wnc]] y referencia de [[U]].

**Mini-ejemplo de contraste**
Si el cálculo entrega [[Kf]] negativa, la solución física es revisar modelo y signos, no aceptar el número.

### Error 2: sustituir números demasiado pronto

**Por qué parece correcto**
Ahorra tiempo aparente en ejercicios cortos.

**Por qué es incorrecto**
Oculta relaciones causales y dificulta detectar inconsistencias dimensionales.

**Señal de detección**
No se puede explicar qué término compensa a cuál cuando cambia un dato.

**Corrección conceptual**
Despejar en forma simbólica y después evaluar con datos.

**Mini-ejemplo de contraste**
Al mantener símbolos hasta el final se detecta si el resultado depende de [[Ui]] o de [[Wnc]] antes de sustituir.

## Errores de interpretación

### Error 1: cerrar con número sin lectura física

**Por qué parece correcto**
El resultado coincide con una opción de examen o con una cifra esperada.

**Por qué es incorrecto**
Sin interpretación causal no se valida la pertinencia del modelo ni su transferencia a otro problema.

**Señal de detección**
El alumno no puede explicar qué cambiaría si aumentan pérdidas o cambia la altura inicial.

**Corrección conceptual**
Añadir una frase final de causalidad: qué término aumenta, cuál disminuye y por qué.

**Mini-ejemplo de contraste**
Una buena lectura final explica que al aumentar pérdidas, crece en magnitud [[Wnc]] y disminuye [[Kf]].

### Error 2: tratar [[Em]] como energía total universal

**Por qué parece correcto**
El símbolo se presenta como "energía total" en muchos contextos introductorios.

**Por qué es incorrecto**
[[Em]] es energía mecánica, no incluye automáticamente transferencias térmicas o internas.

**Señal de detección**
Se usan conclusiones térmicas sin introducir términos de transferencia adecuados.

**Corrección conceptual**
Separar explícitamente magnitudes mecánicas de no mecánicas cuando el problema lo exige.

**Mini-ejemplo de contraste**
En un proceso con calentamiento, [[Em]] no describe por sí sola toda la energía intercambiada.

## Regla de autocontrol rápido

Antes de entregar una solución, aplicar este checklist en 30 segundos:

1. Sistema y frontera declarados.
2. Referencia de potencial única para [[Ui]] y [[Uf]].
3. Signo de [[Wnc]] justificado con una frase física.
4. Resultado de [[Kf]] y [[K]] físicamente posible.
5. Lectura final: cómo se repartió [[Em]] entre estados.

Esta regla evita la mayoría de errores recurrentes y convierte el cierre numérico en un cierre físico defendible.