const e=`# Errores comunes: tipos de palancas

## Errores conceptuales

### Error 1: clasificar por ventaja mecánica

**Por qué parece correcto**
La ventaja mecánica parece resumir la utilidad de la palanca.

**Por qué es incorrecto**
La clase depende del orden apoyo-potencia-resistencia, no del valor de [[VM]].

**Señal de detección**
Se dice que toda palanca con [[VM]] mayor que 1 es de segunda clase.

**Corrección conceptual**
Identifica primero qué elemento queda en medio y solo después interpreta [[VM]].

**Mini-ejemplo**
Una palanca de primera clase puede tener [[VM]] mayor que 1 si el apoyo está cerca de la resistencia.

### Error 2: pensar que tercera clase significa mal diseño

**Por qué parece correcto**
Muchas terceras clases tienen desventaja en fuerza.

**Por qué es incorrecto**
Pueden ganar recorrido, velocidad o control, que también son objetivos mecánicos.

**Señal de detección**
Se descarta una pinza o el antebrazo porque [[P]] puede ser mayor que [[R]].

**Corrección conceptual**
Relaciona la clase con la función buscada, no solo con fuerza.

**Mini-ejemplo**
El antebrazo sacrifica fuerza para mover la mano con rapidez y precisión.

## Errores de modelo

### Error 3: medir brazos desde el extremo de la barra

**Por qué parece correcto**
La longitud total es fácil de ver.

**Por qué es incorrecto**
[[d_P]] y [[d_R]] se miden desde el apoyo hasta la línea de acción correspondiente.

**Señal de detección**
Se usa la misma longitud para ambos brazos aunque el apoyo no esté en el centro.

**Corrección conceptual**
Dibuja el apoyo y mide cada brazo desde él.

**Mini-ejemplo**
En una carretilla, el brazo de resistencia se mide desde la rueda hasta la carga, no desde las manos.

### Error 4: cambiar la clase al cambiar la fuerza

**Por qué parece correcto**
Al variar [[P]] cambia el comportamiento del sistema.

**Por qué es incorrecto**
La clase solo cambia si cambia el orden espacial de apoyo, potencia y resistencia.

**Señal de detección**
Se afirma que una palanca pasa de tercera a segunda porque aumenta la carga.

**Corrección conceptual**
Mantén separadas configuración y valores de fuerza.

**Mini-ejemplo**
Un antebrazo sigue siendo tercera clase aunque levante una carga mayor.

## Errores matemáticos

### Error 5: invertir los brazos en la ventaja

**Por qué parece correcto**
Ambos brazos aparecen como razón y es fácil cambiar el orden.

**Por qué es incorrecto**
En este leaf [[VM]] se lee como [[d_P]] dividido por [[d_R]].

**Señal de detección**
Una carretilla con brazo de potencia mayor sale con [[VM]] menor que 1.

**Corrección conceptual**
Escribe primero qué brazo corresponde a potencia y cuál a resistencia.

**Mini-ejemplo**
Si [[d_P]] = 1.2 m y [[d_R]] = 0.4 m, [[VM]] = 3.

### Error 6: despejar fuerza sin conservar momentos

**Por qué parece correcto**
Puede parecer suficiente dividir fuerzas directamente.

**Por qué es incorrecto**
La palanca ideal equilibra momentos, no fuerzas aisladas.

**Señal de detección**
Se obtiene [[P]] = [[R]] aunque los brazos sean distintos.

**Corrección conceptual**
Usa la igualdad entre [[P]] por [[d_P]] y [[R]] por [[d_R]].

**Mini-ejemplo**
Una carga de 300 N a 0.4 m se equilibra con 100 N a 1.2 m.

## Errores de interpretación

### Error 7: creer que primera clase siempre multiplica fuerza

**Por qué parece correcto**
Muchas herramientas de primera clase parecen facilitar el esfuerzo.

**Por qué es incorrecto**
La primera clase solo indica que el apoyo está en medio; la ventaja depende de los brazos.

**Señal de detección**
No se calculan [[d_P]] ni [[d_R]] porque se asume ventaja automática.

**Corrección conceptual**
Clasifica primero y compara brazos después.

**Mini-ejemplo**
Un balancín con apoyo centrado tiene [[VM]] cercana a 1.

### Error 8: confundir potencia con potencia eléctrica

**Por qué parece correcto**
La palabra potencia tiene otros usos en física.

**Por qué es incorrecto**
En palancas, [[P]] significa fuerza de entrada, medida en newtons.

**Señal de detección**
Se expresa [[P]] en watts.

**Corrección conceptual**
Lee [[P]] como fuerza aplicada, no como energía por tiempo.

**Mini-ejemplo**
Una potencia de 100 N es una fuerza, no 100 W.

## Regla de autocontrol rápido

Antes de cerrar, identifica apoyo, potencia y resistencia; decide qué elemento queda en medio; mide brazos desde el apoyo; usa momentos para calcular; interpreta [[VM]] sin confundirla con [[clase_palanca]].
`;export{e as default};
