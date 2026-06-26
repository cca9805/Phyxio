## Errores conceptuales


### Error 1: Creer que la [[temperatura_debye]] es una transición de fase

**Por qué parece correcto**
Su nombre contiene “[[temperatura]]” y aparece como una frontera en muchos gráficos.

**Por qué es incorrecto**
La [[temperatura_debye]] es una escala vibracional asociada a [[frecuencia_debye]], no una [[temperatura]] donde el sólido cambie necesariamente de estructura.

**Señal de detección**
El alumno espera un salto brusco en [[calor_especifico]] justo en [[temperatura_debye]].

**Corrección conceptual**
Debe leerse como escala de comparación para saber qué fracción de modos fonónicos está activada.

**Mini-ejemplo de contraste**
Un sólido con [[temperatura_debye]] de 400 K puede cruzar 400 K sin transición, mientras su curva se acerca gradualmente al límite clásico.


### Error 2: Pensar que todos los modos vibran igual a cualquier [[temperatura]]

**Por qué parece correcto**
En el modelo clásico se enseña que cada grado cuadrático recibe energía por equipartición.

**Por qué es incorrecto**
A baja [[temperatura]], muchos modos tienen energía cuántica demasiado alta para poblarse apreciablemente.

**Señal de detección**
Se usa directamente el límite de Dulong-Petit incluso cuando [[temperatura]]/[[temperatura_debye]] < 0,1.

**Corrección conceptual**
Primero se compara [[temperatura]] con [[temperatura_debye]] y solo después se decide el régimen.

**Mini-ejemplo de contraste**
A 10 K, un sólido con [[temperatura_debye]] de 300 K no tiene el mismo [[calor_especifico_molar]] que a 1000 K.

## Errores de modelo


### Error 3: Aplicar Debye a un sólido complejo sin revisar modos ópticos

**Por qué parece correcto**
El modelo describe sólidos y parece universal.

**Por qué es incorrecto**
En cristales con varios átomos por celda, los modos ópticos pueden aportar energía adicional no descrita por una sola [[funcion_debye]].

**Señal de detección**
El ajuste de [[calor_especifico]] falla en la zona intermedia aunque baja y alta [[temperatura]] parezcan razonables.

**Corrección conceptual**
Usa un modelo Debye-Einstein o una densidad de estados real si la estructura tiene varias ramas vibracionales.

**Mini-ejemplo de contraste**
Un cristal monoatómico simple puede seguir bien Debye; un sólido iónico complejo puede necesitar términos ópticos.


### Error 4: Ignorar contribuciones electrónicas en metales

**Por qué parece correcto**
El leaf se centra en fonones, así que se atribuye todo el [[calor_especifico]] a vibraciones.

**Por qué es incorrecto**
En metales, los electrones cercanos al nivel de Fermi añaden una contribución importante a baja [[temperatura]].

**Señal de detección**
La gráfica de [[calor_especifico]] no sigue una ley cúbica pura cuando [[temperatura]] es muy baja.

**Corrección conceptual**
Separa la parte electrónica de la parte fonónica antes de extraer [[temperatura_debye]].

**Mini-ejemplo de contraste**
Un aislante puede mostrar T³ limpio; un metal puede mostrar un término lineal más el término cúbico.

## Errores matemáticos


### Error 5: Confundir [[temperatura_reducida]] con [[temperatura_debye]]/[[temperatura]]

**Por qué parece correcto**
Ambos cocientes son adimensionales y aparecen en integrales de Debye.

**Por qué es incorrecto**
El régimen físico cambia según se use [[temperatura]]/[[temperatura_debye]] o su inverso.

**Señal de detección**
El alumno clasifica como alta [[temperatura]] un caso donde [[temperatura]] es mucho menor que [[temperatura_debye]].

**Corrección conceptual**
Define el cociente antes de interpretar y conserva la misma convención en todo el ejercicio.

**Mini-ejemplo de contraste**
Si [[temperatura]] es 30 K y [[temperatura_debye]] 300 K, el cociente T/ΘD vale 0,1, no 10.


### Error 6: Usar mal unidades molares y totales

**Por qué parece correcto**
[[calor_especifico]] y [[calor_especifico_molar]] tienen símbolos parecidos.

**Por qué es incorrecto**
Uno depende del tamaño del sistema mediante [[numero_atomos]], mientras el otro se expresa por mol con [[constante_gases]].

**Señal de detección**
Aparece un resultado en J K⁻¹ cuando el problema pedía J mol⁻¹ K⁻¹, o al revés.

**Corrección conceptual**
Comprueba si el dato se refiere a muestra total, átomo o mol antes de sustituir.

**Mini-ejemplo de contraste**
El límite 3R corresponde a [[calor_especifico_molar]], no al calor total de cualquier muestra.

## Errores de interpretación


### Error 7: Leer un [[calor_especifico]] bajo como “el sólido no tiene energía”

**Por qué parece correcto**
Si cuesta poco calentar, parece que el sólido almacena poca energía.

**Por qué es incorrecto**
El valor bajo indica que pocos modos se activan al aumentar [[temperatura]], no que no existan vibraciones.

**Señal de detección**
Se interpreta baja respuesta térmica como ausencia total de movimiento atómico.

**Corrección conceptual**
Relaciona [[calor_especifico]] con modos accesibles, no con quietud absoluta.

**Mini-ejemplo de contraste**
A baja [[temperatura]], la red aún posee vibraciones cuánticas, pero apenas aumenta su energía con T.


### Error 8: Suponer que más [[temperatura_debye]] siempre implica más [[calor_especifico]]

**Por qué parece correcto**
Una escala mayor suena a mayor capacidad térmica.

**Por qué es incorrecto**
A una [[temperatura]] fija, mayor [[temperatura_debye]] suele significar menos modos activados y menor [[calor_especifico]] relativo.

**Señal de detección**
Se predice que el diamante debe tener gran [[calor_especifico_molar]] a [[temperatura]] ambiente solo por su alta [[temperatura_debye]].

**Corrección conceptual**
Interpreta siempre el cociente entre [[temperatura]] y [[temperatura_debye]].

**Mini-ejemplo de contraste**
Un material blando puede estar cerca de 3R a 300 K; uno muy rígido puede seguir por debajo.

## Regla de autocontrol rápido

Antes de aceptar un resultado, comprueba tres cosas: régimen T/ΘD, unidades de [[calor_especifico]] o [[calor_especifico_molar]], y si la curva crece suavemente hacia el límite clásico.