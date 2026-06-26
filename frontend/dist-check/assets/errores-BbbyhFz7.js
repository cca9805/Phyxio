const e=`## Errores conceptuales

### Error 1: Confundir [[I]] con velocidad individual de los electrones
#### Por qué parece correcto
La palabra corriente sugiere movimiento rapido, por lo que muchos estudiantes asocian un valor alto de [[I]] con una velocidad enorme de cada portador.
#### Señal de detección
El razonamiento ignora que [[I]] depende tambien de [[n]] y [[A]], no solo de [[v]].
#### Mini-ejemplo de contraste
Dos materiales pueden mostrar [[I]] similar con [[v]] distinta si cambia la densidad de portadores.
#### Corrección conceptual
Recordar que [[I]] es magnitud macroscópica de flujo neto y que [[v]] de deriva es solo uno de los factores del transporte.

### Error 2: Pensar que signo negativo implica resultado imposible
#### Por qué parece correcto
En muchos ejercicios iniciales solo se trabajan modulos positivos y se asume que cualquier signo menos indica falla algebraica.
#### Señal de detección
Se corrigen manualmente signos para forzar resultado positivo sin revisar convenio.
#### Mini-ejemplo de contraste
Si el sentido real del flujo es opuesto al convenio adoptado, un valor negativo de [[I]] es coherente.
#### Corrección conceptual
Mantener convenio fijo y leer signo como informacion direccional, no como error automatico.

### Error 3: Tratar [[q]] como propiedad fija del sistema sin intervalo temporal
#### Por qué parece correcto
La carga se percibe como cantidad total y se olvida que en este leaf interesa la carga transportada en una ventana.
#### Señal de detección
Se reporta [[q]] sin indicar [[t]], lo que impide reconstruir la tasa de flujo.
#### Mini-ejemplo de contraste
La misma [[q]] en un segundo y en una hora implica corrientes muy distintas.
#### Corrección conceptual
Vincular siempre [[q]] con ventana temporal explicita para sostener interpretacion fisica.

## Errores de modelo

### Error 4: Usar area nominal cuando la conduccion efectiva es menor
#### Por qué parece correcto
El dato de plano o ficha tecnica suele mostrar un area geometrica unica y se asume que todo conduce igual.
#### Señal de detección
La [[J]] calculada parece baja, pero el sistema muestra calentamiento localizado.
#### Mini-ejemplo de contraste
Un estrechamiento en contacto reduce area efectiva y aumenta exigencia local aun con [[I]] constante.
#### Corrección conceptual
Elegir [[A]] efectiva de conduccion y justificarla segun configuracion real.

### Error 5: Aplicar promedio unico en regimen con fases muy distintas
#### Por qué parece correcto
Promediar simplifica calculo y da una cifra compacta.
#### Señal de detección
La misma media no explica picos de respuesta ni comportamiento por tramos.
#### Mini-ejemplo de contraste
Una senal con arranque intenso y cola suave no se interpreta bien con una sola media temporal.
#### Corrección conceptual
Separar analisis por etapas cuando el fenomeno cambia de regimen en la ventana estudiada.

### Error 6: Suponer [[n]] y [[v]] constantes sin rango de validez
#### Por qué parece correcto
El modelo de portadores suele presentarse con parametros constantes para facilitar aprendizaje inicial.
#### Señal de detección
Para ajustar datos se alteran arbitrariamente parametros en cada ejercicio.
#### Mini-ejemplo de contraste
Cambios de temperatura pueden desplazar valores efectivos y romper consistencia entre casos.
#### Corrección conceptual
Explicitar supuestos de material y declarar el rango operativo donde se mantienen.

## Errores matemáticos

### Error 7: Mezclar unidades temporales sin conversion
#### Por qué parece correcto
Milisegundos y segundos conviven en enunciados reales y el cambio de escala pasa desapercibido.
#### Señal de detección
Aparecen corrientes mil veces mayores o menores que el orden esperado.
#### Mini-ejemplo de contraste
Un mismo valor de [[q]] dividido por milisegundos en lugar de segundos desplaza [[I]] por tres ordenes.
#### Corrección conceptual
Unificar unidades al inicio y conservarlas en todo el flujo de calculo.

### Error 8: Olvidar conversion de area al calcular [[J]]
#### Por qué parece correcto
Secciones en milimetros cuadrados se introducen como si fueran metros cuadrados.
#### Señal de detección
La [[J]] resultante no es compatible con limites termicos plausibles.
#### Mini-ejemplo de contraste
Tomar mm^2 como m^2 reduce artificialmente la densidad estimada.
#### Corrección conceptual
Convertir [[A]] a unidades SI antes de normalizar intensidad.

### Error 9: Redondear demasiado pronto y perder trazabilidad
#### Por qué parece correcto
Simplificar cifras intermedias da sensacion de control del procedimiento.
#### Señal de detección
El resultado final cambia mucho al repetir con mas precision.
#### Mini-ejemplo de contraste
En calculos de [[J]], redondeos tempranos de [[A]] afectan fuerte el valor final.
#### Corrección conceptual
Mantener precision intermedia y redondear solo al reportar resultado final.

## Errores de interpretación

### Error 10: Concluir seguridad termica solo con [[I]] total
#### Por qué parece correcto
La corriente total es el dato mas visible en instrumentos de panel.
#### Señal de detección
Se ignora distribucion espacial y aparecen puntos calientes inesperados.
#### Mini-ejemplo de contraste
Dos disenos con la misma [[I]] pueden tener [[J]] muy distinta por cambio de [[A]].
#### Corrección conceptual
Cruzar lectura de [[I]] con [[J]] y criterios de disipacion local.

### Error 11: Confundir coherencia algebraica con validez fisica
#### Por qué parece correcto
Si la cuenta cierra, se asume automaticamente que el modelo representa el fenomeno.
#### Señal de detección
Los resultados no coinciden con observacion y se intenta corregir solo con mas decimales.
#### Mini-ejemplo de contraste
Una ecuacion aplicada fuera de su dominio puede producir numero correcto en forma y errado en significado.
#### Corrección conceptual
Verificar siempre supuestos de ventana temporal, area efectiva y contexto material.

### Error 12: Usar formula correcta con magnitud objetivo equivocada
#### Por qué parece correcto
Se identifica una ecuacion familiar y se aplica sin revisar que se esta pidiendo.
#### Señal de detección
Se responde [[I]] cuando el problema exige [[J]], o viceversa.
#### Mini-ejemplo de contraste
Calcular intensidad total no permite diagnosticar sobrecarga local si la pregunta trata esfuerzo en seccion.
#### Corrección conceptual
Declarar magnitud objetivo antes de resolver y validar que cada paso apunta a ella.

## Regla de autocontrol rápido
Antes de aceptar cualquier resultado, pasar un filtro de cinco preguntas: cual es la magnitud objetivo, que unidades se usaron, que convenio de signo aplica, que supuestos de modelo se declararon y si el orden de magnitud es plausible para el contexto. Si una de esas respuestas no esta clara, el resultado debe considerarse provisional.
`;export{e as default};
