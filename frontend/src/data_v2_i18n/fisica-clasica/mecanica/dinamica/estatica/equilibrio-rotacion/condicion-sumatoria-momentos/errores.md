# Errores comunes: condición de sumatoria de momentos

## Errores conceptuales

### Error 1: igualar fuerzas en lugar de momentos

**Por qué parece correcto**
En equilibrio traslacional se comparan fuerzas, y el alumno puede aplicar esa idea sin revisar el giro.

**Por qué es incorrecto**
El equilibrio rotacional depende de [[tau1]] y [[tau2]], no solo de [[F1]] y [[F2]]. Los brazos y ángulos cambian el efecto de cada fuerza.

**Señal de detección**
Se escribe [[F2]] = [[F1]] aunque [[r1]] y [[r2]] sean distintos.

**Corrección conceptual**
Compara momentos y exige [[tau_net]] = 0.

**Mini-ejemplo**
Una fuerza de 40 N a 0.75 m puede equilibrar 60 N a 0.50 m si actúan en sentidos opuestos.

### Error 2: pensar que momento neto cero significa ausencia de fuerzas

**Por qué parece correcto**
Si el sistema no gira, puede parecer que no actúa nada.

**Por qué es incorrecto**
Puede haber varias fuerzas actuando y aun así cancelarse sus momentos.

**Señal de detección**
Se descarta una fuerza real porque el problema dice que hay equilibrio.

**Corrección conceptual**
Distingue equilibrio rotacional de ausencia de interacción.

**Mini-ejemplo**
Una balanza equilibrada tiene pesos en ambos lados, aunque [[tau_net]] sea cero.

## Errores de modelo

### Error 3: mezclar pivotes distintos

**Por qué parece correcto**
Cada momento individual puede estar bien calculado.

**Por qué es incorrecto**
La sumatoria de momentos solo tiene sentido si todos se calculan respecto al mismo eje.

**Señal de detección**
[[tau1]] se mide desde un extremo y [[tau2]] desde otro sin transformar el planteamiento.

**Corrección conceptual**
Elige un pivote único antes de calcular cualquier brazo.

**Mini-ejemplo**
No se puede restar un momento respecto al centro con otro respecto al extremo y llamar al resultado [[tau_net]].

### Error 4: usar la distancia total en lugar del brazo

**Por qué parece correcto**
La longitud de la barra es un dato visible y fácil de copiar.

**Por qué es incorrecto**
El brazo [[r1]] o [[r2]] es la distancia desde el eje hasta la línea de acción correspondiente.

**Señal de detección**
El mismo valor de longitud se usa para fuerzas aplicadas en puntos diferentes.

**Corrección conceptual**
Marca el pivote y mide cada brazo desde ese punto.

**Mini-ejemplo**
En una barra de 1 m con pivote central, una fuerza en el extremo tiene brazo de 0.5 m, no de 1 m.

## Errores matemáticos

### Error 5: sumar módulos y perder signos

**Por qué parece correcto**
Los módulos de momento son positivos y parecen más fáciles de manejar.

**Por qué es incorrecto**
La cancelación depende del signo. Momentos opuestos deben restarse algebraicamente.

**Señal de detección**
Dos momentos iguales y opuestos dan un [[tau_net]] distinto de cero.

**Corrección conceptual**
Fija sentido positivo antes de sustituir números.

**Mini-ejemplo**
Si [[tau1]] = 30 N m y [[tau2]] = 30 N m en sentido opuesto, el momento neto es cero con el convenio del leaf.

### Error 6: olvidar el seno del ángulo

**Por qué parece correcto**
Cuando la fuerza es perpendicular, el seno vale uno y no se nota.

**Por qué es incorrecto**
Si [[theta1]] o [[theta2]] no son 90°, solo una parte de la fuerza produce giro.

**Señal de detección**
El cálculo no cambia al variar [[theta2]].

**Corrección conceptual**
Incluye el factor angular en cada momento individual.

**Mini-ejemplo**
Una fuerza alineada con el radio no produce momento aunque su magnitud sea grande.

## Errores de interpretación

### Error 7: interpretar [[Feq]] como momento

**Por qué parece correcto**
[[Feq]] aparece después de imponer una condición sobre momentos.

**Por qué es incorrecto**
[[Feq]] es una fuerza; sus unidades son N, no N m.

**Señal de detección**
El resultado de fuerza equilibrante se expresa en N m.

**Corrección conceptual**
Revisa que el momento se haya dividido por un brazo efectivo.

**Mini-ejemplo**
Si se debe compensar 30 N m desde 0.75 m, la fuerza necesaria es 40 N.

### Error 8: olvidar que también puede hacer falta equilibrio traslacional

**Por qué parece correcto**
El enunciado puede centrarse en la sumatoria de momentos.

**Por qué es incorrecto**
Para equilibrio estático completo se necesita además sumatoria de fuerzas nula.

**Señal de detección**
Se concluye que el cuerpo está en reposo solo porque [[tau_net]] = 0.

**Corrección conceptual**
Lee este leaf como condición rotacional y comprueba fuerzas cuando el problema lo requiera.

**Mini-ejemplo**
Dos fuerzas paralelas iguales aplicadas en el mismo punto pueden tener momento neto cero y fuerza neta distinta de cero.

## Regla de autocontrol rápido

Antes de cerrar, comprueba eje único, signo único, brazos desde el pivote, ángulos respecto al radio, unidades N m para momentos y [[tau_net]] cercano a cero si se afirma equilibrio.
