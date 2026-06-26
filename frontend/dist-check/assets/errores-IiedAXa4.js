const e=`# Errores frecuentes: Numero de Reynolds y regimenes de arrastre\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
Al estudiante le parece natural decir que un valor alto de [[Re]] "produce" por si mismo una fuerza grande.\r
\r
#### por que es incorrecto\r
[[Re]] no es una fuerza. Es un criterio de regimen. Lo que cambia es el mecanismo dominante del flujo y, a partir de ahi, cambia el modelo de arrastre que conviene usar.\r
\r
#### senal de deteccion\r
En la solucion aparece una frase tipo: "como [[Re]] sube, la fuerza ya esta determinada" sin mencionar modelo de arrastre.\r
\r
#### correccion conceptual\r
Primero diagnostica regimen con [[Re]]. Despues elige modelo de arrastre y recien entonces calcula fuerza.\r
\r
#### mini-ejemplo\r
Caso mal planteado: "[[Re]] = 5e4, por tanto la fuerza es alta".\r
Caso corregido: "[[Re]] = 5e4 sugiere dominancia inercial; selecciono bloque de arrastre no lineal y calculo la fuerza con ese bloque".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
La formula existe y los datos numericos estan disponibles; parece suficiente con sustituir.\r
\r
#### por que es incorrecto\r
Sin justificar [[L]] y [[v]], el numero obtenido puede no representar el fenomeno real.\r
\r
#### senal de deteccion\r
Se usa una longitud tomada del dibujo sin explicar por que esa escala controla el flujo.\r
\r
#### correccion conceptual\r
Explica la eleccion de [[L]] y [[v]] antes de calcular. Si la justificacion es debil, la lectura de [[Re]] tambien lo sera.\r
\r
#### mini-ejemplo\r
Error: usar la longitud total de un vehiculo cuando la pregunta trata el flujo local en un espejo lateral.\r
Correccion: usar la escala local relevante para ese subcomponente.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[eta]] y [[nu]] describen viscosidad, y el alumno asume que son intercambiables sin condiciones.\r
\r
#### por que es incorrecto\r
Son magnitudes distintas. Mezclarlas sin consistencia dimensional genera diagnosticos de [[Re]] incoherentes.\r
\r
#### senal de deteccion\r
Aparecen conversiones improvisadas o unidades mezcladas entre SI y otros sistemas.\r
\r
#### correccion conceptual\r
Elige una via de calculo coherente: con [[eta]] o con [[nu]]. Mantener una sola cadena de unidades hasta el final.\r
\r
#### mini-ejemplo\r
Error: usar [[eta]] con una ecuacion escrita para [[nu]].\r
Correccion: o bien conviertes correctamente o usas la formula que corresponde a la magnitud disponible.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
Si el modelo funciono en un ejercicio previo, se cree que funcionara en toda condicion.\r
\r
#### por que es incorrecto\r
El modelo seleccionado por [[Re]] puede dejar de ser adecuado cuando la banda de [[v]] cruza zonas de regimen.\r
\r
#### senal de deteccion\r
La prediccion solo coincide en un punto nominal y falla sistematicamente fuera de ese punto.\r
\r
#### correccion conceptual\r
Evaluar [[Re]] en limites operativos, no solo en el valor nominal. Si hay cruce de zona, usar enfoque transicional.\r
\r
#### mini-ejemplo\r
Error: ajustar un modelo unico para toda la curva de operacion.\r
Correccion: modelo por tramos en rangos donde el regimen cambia.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
El alumno recuerda una regla de umbral y la usa como verdad universal.\r
\r
#### por que es incorrecto\r
Los umbrales dependen de geometria y condiciones de borde; no son fronteras absolutas para cualquier sistema.\r
\r
#### senal de deteccion\r
La solucion cita un umbral sin describir tipo de flujo, rugosidad o configuracion.\r
\r
#### correccion conceptual\r
Declarar siempre el contexto: flujo interno o externo, escala geometrica y estado del medio.\r
\r
#### mini-ejemplo\r
Error: copiar un umbral de tuberia para un problema de arrastre externo.\r
Correccion: usar referencias acordes con la clase de problema.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
El algebra parece rutinaria y se hace rapido.\r
\r
#### por que es incorrecto\r
Un despeje mal hecho puede invertir dependencias y cambiar por completo la interpretacion de sensibilidad.\r
\r
#### senal de deteccion\r
Al aumentar [[v]] en el problema, el calculo reporta que [[Re]] disminuye.\r
\r
#### correccion conceptual\r
Antes de numerar, revisa dependencias cualitativas: [[Re]] debe crecer con [[v]] y con [[L]] en el mismo medio.\r
\r
#### mini-ejemplo\r
Error: escribir [[Re]] proporcional a $1/[[v]]$ por un paso algebraico mal copiado.\r
Correccion: rehacer despeje y verificar monotonia fisica esperada.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
Se asume que la calculadora resolvera todo aunque las unidades entren mezcladas.\r
\r
#### por que es incorrecto\r
El resultado puede variar ordenes de magnitud y desplazar falsamente el regimen.\r
\r
#### senal de deteccion\r
Dos estudiantes con mismos datos fisicos llegan a regimenes opuestos por conversiones distintas.\r
\r
#### correccion conceptual\r
Unificar unidades al inicio y registrar conversiones intermedias.\r
\r
#### mini-ejemplo\r
Error: usar [[L]] en mm y [[v]] en m/s sin conversion.\r
Correccion: convertir [[L]] a m antes del calculo.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Un numero con muchos decimales transmite falsa sensacion de rigor.\r
\r
#### por que es incorrecto\r
La incertidumbre de datos y modelo suele ser mayor que el detalle decimal mostrado.\r
\r
#### senal de deteccion\r
Se reporta [[Re]] con seis decimales pero sin discutir tolerancias de [[v]] o viscosidad.\r
\r
#### correccion conceptual\r
Reportar cifras significativas consistentes con calidad de datos y usar intervalos cuando proceda.\r
\r
#### mini-ejemplo\r
Error: "[[Re]] = 3245.872913" sin barras de incertidumbre.\r
Correccion: "[[Re]] ~ 3.25e3" con nota de sensibilidad.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Se confunde terminar cuentas con terminar fisica.\r
\r
#### por que es incorrecto\r
Sin interpretar mecanismo dominante, no se justifica eleccion de modelo ni validez de prediccion.\r
\r
#### senal de deteccion\r
La solucion termina en un valor de [[Re]] sin conclusion sobre bloque de arrastre recomendado.\r
\r
#### correccion conceptual\r
Cerrar siempre con tres frases: mecanismo dominante, consecuencia de modelado y limite de validez.\r
\r
#### mini-ejemplo\r
Error: "resultado: [[Re]] = 900".\r
Correccion: "[[Re]] = 900 sugiere zona intermedia; se recomienda validacion adicional antes de fijar un unico modelo".\r
\r
## Regla de autocontrol rápido\r
\r
Checklist final:\r
\r
- ¿[[L]] y [[v]] estan justificados por la escena fisica?\r
- ¿Las unidades de viscosidad son consistentes en toda la cadena?\r
- ¿La lectura de [[Re]] lleva a una decision de modelo explicita?\r
- ¿Se declara el limite de validez de la conclusion?\r
- ¿La interpretacion final explica mecanismo, no solo numero?\r
\r
Si una respuesta falla en alguno de estos puntos, hay que corregir antes de aceptar el resultado.\r
`;export{e as default};
