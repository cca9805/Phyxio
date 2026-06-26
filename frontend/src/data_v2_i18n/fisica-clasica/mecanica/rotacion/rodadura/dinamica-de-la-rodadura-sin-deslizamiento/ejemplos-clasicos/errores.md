# Errores frecuentes en ejemplos clásicos de rodadura

## Errores conceptuales

### Error 1: Creer que un ejemplo clásico solo exige sustituir números

**Por qué parece correcto:**  
El enunciado suele traer [[v]], [[n]] y [[R]], así que parece que basta con meter datos en una fórmula.

**Por qué es incorrecto:**  
En este leaf el objetivo es validar coherencia. Si no se entiende qué mide cada magnitud y en qué instante fue medida, el resultado puede ser numéricamente limpio pero físicamente inútil.

**Señal de detección:**  
El alumno calcula una velocidad ideal sin preguntarse si [[n]] está en rpm, si el radio es efectivo o si los sensores están sincronizados.

**Corrección conceptual:**  
Leer primero el ejemplo como flujo de medición y después como problema algebraico.

**Mini-ejemplo de contraste:**  
Dos sensores pueden dar valores correctos por separado y, aun así, producir un residual falso si no corresponden al mismo intervalo temporal.

## Errores de modelo

### Error 2: Usar un único umbral para cualquier ejemplo

**Por qué parece correcto:**  
Una vez que se aprende un valor de referencia para [[delta]], apetece reutilizarlo en todos los casos.

**Por qué es incorrecto:**  
El umbral depende del montaje, de la velocidad, de la resolución instrumental y del objetivo del análisis. Un banco de baja velocidad no se evalúa igual que una rueda industrial rápida.

**Señal de detección:**  
Se clasifican como equivalentes ejemplos con escalas y sensores muy distintos.

**Corrección conceptual:**  
Declarar siempre el umbral y justificar por qué es razonable para ese ejemplo clásico.

**Mini-ejemplo de contraste:**  
Un residual de 0.2 m/s puede ser despreciable en una línea rápida y muy grande en un experimento de laboratorio lento.

## Errores matemáticos

### Error 3: Confundir rpm con rad/s

**Por qué parece correcto:**  
La lectura de [[n]] viene del instrumento y se trata como si ya fuera la variable angular del modelo.

**Por qué es incorrecto:**  
La condición de rodadura usa [[omega]] en unidades SI. Si no se convierte [[n]], toda la comparación entre giro y avance queda mal escalada.

**Señal de detección:**  
El alumno obtiene un residual alto y lo interpreta como deslizamiento cuando en realidad es un error de conversión.

**Corrección conceptual:**  
Aplicar siempre primero la conversión desde rpm a rad/s.

**Mini-ejemplo de contraste:**  
Una lectura de 300 rpm no significa 300 rad/s, sino aproximadamente 31.4 rad/s. Esa diferencia cambia por completo la velocidad ideal predicha.

## Errores de interpretación

### Error 4: Pensar que un único residual basta para concluir toda la historia física

**Por qué parece correcto:**  
El residual resume muy bien la coherencia del ejemplo y parece tentador darle todo el peso.

**Por qué es incorrecto:**  
[[delta]] es una lectura local de coherencia cinemática. Puede coexistir con errores de sincronización, radio efectivo mal estimado o deriva de sensor. Interpretarlo sin contexto empobrece el diagnóstico.

**Señal de detección:**  
Se concluye “hay deslizamiento” sin revisar tendencia temporal, umbral o calidad instrumental.

**Corrección conceptual:**  
Usar [[delta]] como indicador principal, pero no como prueba aislada independiente del contexto experimental.

**Mini-ejemplo de contraste:**  
Un valor ligeramente fuera de umbral en una sola muestra puede ser ruido; el mismo valor repetido en diez ventanas consecutivas ya apunta a un fallo real de contacto o medición.

## Regla de autocontrol rápido

Antes de cerrar un ejemplo clásico, responder cinco preguntas: qué mide [[n]], cómo se convierte a [[omega]], si [[R]] es realmente el radio efectivo, qué umbral se adopta para [[delta]] y qué acción práctica se deriva del diagnóstico. Si una de esas cinco respuestas falta, el ejemplo no está realmente validado.