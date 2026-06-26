# Errores comunes: momento de una fuerza

## Errores conceptuales

### Error 1: creer que una fuerza grande siempre produce mucho momento

**Por qué parece correcto**
La fuerza parece ser la causa directa del giro.

**Por qué es incorrecto**
El momento depende también del brazo perpendicular [[d_perp]]. Una fuerza grande puede no producir giro si pasa por el eje.

**Señal de detección**
Se predice un gran [[tau]] solo porque [[F]] es grande, sin revisar la geometría.

**Corrección conceptual**
Antes de calcular, dibuja la línea de acción y mide el brazo efectivo.

**Mini-ejemplo**
Una fuerza de 100 N alineada con el radio produce momento nulo.

### Error 2: confundir momento con equilibrio rotacional

**Por qué parece correcto**
El momento se usa después en problemas de equilibrio.

**Por qué es incorrecto**
Este leaf calcula una contribución individual. El equilibrio requiere sumar varias contribuciones.

**Señal de detección**
Se concluye que un cuerpo gira o no gira solo a partir de una fuerza aislada.

**Corrección conceptual**
Lee [[tau]] como tendencia de giro, no como decisión final de movimiento.

**Mini-ejemplo**
Una fuerza puede producir [[tau]], pero otra fuerza opuesta puede cancelarlo.

## Errores de modelo

### Error 3: usar [[r]] como si siempre fuera [[d_perp]]

**Por qué parece correcto**
En el caso perpendicular ambos valores coinciden.

**Por qué es incorrecto**
Si la fuerza es oblicua, el brazo efectivo es [[d_perp]], no toda la distancia radial [[r]].

**Señal de detección**
El cálculo da el mismo momento para cualquier [[theta]].

**Corrección conceptual**
Usa la relación geométrica del brazo antes de calcular el momento.

**Mini-ejemplo**
Con [[theta]] = 30°, el brazo efectivo es menor que [[r]].

### Error 4: medir el ángulo respecto al suelo

**Por qué parece correcto**
El ángulo con la horizontal suele ser fácil de ver en el dibujo.

**Por qué es incorrecto**
La fórmula usa [[theta]] como ángulo entre la fuerza y el radio desde el eje.

**Señal de detección**
La fuerza perpendicular al radio no da el máximo momento.

**Corrección conceptual**
Marca el radio desde el eje al punto de aplicación y mide el ángulo respecto a ese radio.

**Mini-ejemplo**
Una fuerza vertical no siempre es perpendicular al radio; depende de la orientación del radio.

## Errores matemáticos

### Error 5: olvidar el seno

**Por qué parece correcto**
Si el ejemplo inicial es perpendicular, el seno vale uno y parece innecesario.

**Por qué es incorrecto**
Para fuerzas oblicuas, el seno decide qué parte de [[r]] produce giro.

**Señal de detección**
Se usa [[tau]] = [[r]] por [[F]] aunque [[theta]] no sea 90°.

**Corrección conceptual**
Calcula primero [[d_perp]] o usa la forma trigonométrica completa.

**Mini-ejemplo**
Con 40 N, 0.30 m y 60°, el momento es menor que 12 N m.

### Error 6: dar unidades incorrectas

**Por qué parece correcto**
N m tiene la misma dimensión que joule y puede confundirse con energía.

**Por qué es incorrecto**
El momento se expresa en N m y se interpreta como tendencia de giro, no como trabajo.

**Señal de detección**
El resultado se escribe en N, m o J sin aclarar que es momento.

**Corrección conceptual**
Conserva la unidad N m para [[tau]] y explica su significado rotacional.

**Mini-ejemplo**
6 N m describe capacidad de giro, no 6 J de trabajo realizado.

## Errores de interpretación

### Error 7: ignorar el signo del momento

**Por qué parece correcto**
Las fórmulas de módulo usan magnitudes positivas.

**Por qué es incorrecto**
El signo de [[tau]] indica sentido horario o antihorario según el convenio.

**Señal de detección**
Se comparan momentos de giro opuesto como si tuvieran el mismo signo.

**Corrección conceptual**
Fija un sentido positivo antes de interpretar el resultado.

**Mini-ejemplo**
Dos fuerzas pueden tener el mismo módulo de momento y sentidos de giro contrarios.

### Error 8: pensar que aumentar fuerza es la única forma de aumentar momento

**Por qué parece correcto**
La fuerza aparece multiplicando en la fórmula.

**Por qué es incorrecto**
También se puede aumentar [[tau]] aumentando [[d_perp]] o haciendo la fuerza más perpendicular.

**Señal de detección**
Se propone siempre aplicar más fuerza aunque se pueda alargar el brazo.

**Corrección conceptual**
Revisa fuerza, brazo y ángulo como tres controles distintos.

**Mini-ejemplo**
Una llave más larga aumenta el momento con la misma fuerza aplicada.

## Regla de autocontrol rápido

Antes de cerrar, comprueba eje definido, línea de acción, brazo perpendicular, ángulo correcto, unidades N m y signo de giro.
