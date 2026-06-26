# Errores frecuentes: Numero de Reynolds y regimenes de arrastre

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
Al estudiante le parece natural decir que un valor alto de [[Re]] "produce" por si mismo una fuerza grande.

#### por que es incorrecto
[[Re]] no es una fuerza. Es un criterio de regimen. Lo que cambia es el mecanismo dominante del flujo y, a partir de ahi, cambia el modelo de arrastre que conviene usar.

#### senal de deteccion
En la solucion aparece una frase tipo: "como [[Re]] sube, la fuerza ya esta determinada" sin mencionar modelo de arrastre.

#### correccion conceptual
Primero diagnostica regimen con [[Re]]. Despues elige modelo de arrastre y recien entonces calcula fuerza.

#### mini-ejemplo
Caso mal planteado: "[[Re]] = 5e4, por tanto la fuerza es alta".
Caso corregido: "[[Re]] = 5e4 sugiere dominancia inercial; selecciono bloque de arrastre no lineal y calculo la fuerza con ese bloque".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
La formula existe y los datos numericos estan disponibles; parece suficiente con sustituir.

#### por que es incorrecto
Sin justificar [[L]] y [[v]], el numero obtenido puede no representar el fenomeno real.

#### senal de deteccion
Se usa una longitud tomada del dibujo sin explicar por que esa escala controla el flujo.

#### correccion conceptual
Explica la eleccion de [[L]] y [[v]] antes de calcular. Si la justificacion es debil, la lectura de [[Re]] tambien lo sera.

#### mini-ejemplo
Error: usar la longitud total de un vehiculo cuando la pregunta trata el flujo local en un espejo lateral.
Correccion: usar la escala local relevante para ese subcomponente.

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[eta]] y [[nu]] describen viscosidad, y el alumno asume que son intercambiables sin condiciones.

#### por que es incorrecto
Son magnitudes distintas. Mezclarlas sin consistencia dimensional genera diagnosticos de [[Re]] incoherentes.

#### senal de deteccion
Aparecen conversiones improvisadas o unidades mezcladas entre SI y otros sistemas.

#### correccion conceptual
Elige una via de calculo coherente: con [[eta]] o con [[nu]]. Mantener una sola cadena de unidades hasta el final.

#### mini-ejemplo
Error: usar [[eta]] con una ecuacion escrita para [[nu]].
Correccion: o bien conviertes correctamente o usas la formula que corresponde a la magnitud disponible.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
Si el modelo funciono en un ejercicio previo, se cree que funcionara en toda condicion.

#### por que es incorrecto
El modelo seleccionado por [[Re]] puede dejar de ser adecuado cuando la banda de [[v]] cruza zonas de regimen.

#### senal de deteccion
La prediccion solo coincide en un punto nominal y falla sistematicamente fuera de ese punto.

#### correccion conceptual
Evaluar [[Re]] en limites operativos, no solo en el valor nominal. Si hay cruce de zona, usar enfoque transicional.

#### mini-ejemplo
Error: ajustar un modelo unico para toda la curva de operacion.
Correccion: modelo por tramos en rangos donde el regimen cambia.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
El alumno recuerda una regla de umbral y la usa como verdad universal.

#### por que es incorrecto
Los umbrales dependen de geometria y condiciones de borde; no son fronteras absolutas para cualquier sistema.

#### senal de deteccion
La solucion cita un umbral sin describir tipo de flujo, rugosidad o configuracion.

#### correccion conceptual
Declarar siempre el contexto: flujo interno o externo, escala geometrica y estado del medio.

#### mini-ejemplo
Error: copiar un umbral de tuberia para un problema de arrastre externo.
Correccion: usar referencias acordes con la clase de problema.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
El algebra parece rutinaria y se hace rapido.

#### por que es incorrecto
Un despeje mal hecho puede invertir dependencias y cambiar por completo la interpretacion de sensibilidad.

#### senal de deteccion
Al aumentar [[v]] en el problema, el calculo reporta que [[Re]] disminuye.

#### correccion conceptual
Antes de numerar, revisa dependencias cualitativas: [[Re]] debe crecer con [[v]] y con [[L]] en el mismo medio.

#### mini-ejemplo
Error: escribir [[Re]] proporcional a $1/[[v]]$ por un paso algebraico mal copiado.
Correccion: rehacer despeje y verificar monotonia fisica esperada.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
Se asume que la calculadora resolvera todo aunque las unidades entren mezcladas.

#### por que es incorrecto
El resultado puede variar ordenes de magnitud y desplazar falsamente el regimen.

#### senal de deteccion
Dos estudiantes con mismos datos fisicos llegan a regimenes opuestos por conversiones distintas.

#### correccion conceptual
Unificar unidades al inicio y registrar conversiones intermedias.

#### mini-ejemplo
Error: usar [[L]] en mm y [[v]] en m/s sin conversion.
Correccion: convertir [[L]] a m antes del calculo.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Un numero con muchos decimales transmite falsa sensacion de rigor.

#### por que es incorrecto
La incertidumbre de datos y modelo suele ser mayor que el detalle decimal mostrado.

#### senal de deteccion
Se reporta [[Re]] con seis decimales pero sin discutir tolerancias de [[v]] o viscosidad.

#### correccion conceptual
Reportar cifras significativas consistentes con calidad de datos y usar intervalos cuando proceda.

#### mini-ejemplo
Error: "[[Re]] = 3245.872913" sin barras de incertidumbre.
Correccion: "[[Re]] ~ 3.25e3" con nota de sensibilidad.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Se confunde terminar cuentas con terminar fisica.

#### por que es incorrecto
Sin interpretar mecanismo dominante, no se justifica eleccion de modelo ni validez de prediccion.

#### senal de deteccion
La solucion termina en un valor de [[Re]] sin conclusion sobre bloque de arrastre recomendado.

#### correccion conceptual
Cerrar siempre con tres frases: mecanismo dominante, consecuencia de modelado y limite de validez.

#### mini-ejemplo
Error: "resultado: [[Re]] = 900".
Correccion: "[[Re]] = 900 sugiere zona intermedia; se recomienda validacion adicional antes de fijar un unico modelo".

## Regla de autocontrol rápido

Checklist final:

- ¿[[L]] y [[v]] estan justificados por la escena fisica?
- ¿Las unidades de viscosidad son consistentes en toda la cadena?
- ¿La lectura de [[Re]] lleva a una decision de modelo explicita?
- ¿Se declara el limite de validez de la conclusion?
- ¿La interpretacion final explica mecanismo, no solo numero?

Si una respuesta falla en alguno de estos puntos, hay que corregir antes de aceptar el resultado.
