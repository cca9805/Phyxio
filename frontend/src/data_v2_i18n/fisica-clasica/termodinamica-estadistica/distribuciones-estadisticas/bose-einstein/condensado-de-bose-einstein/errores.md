## Errores conceptuales


### Error 1: Pensar que cualquier gas frío condensa
**Por qué parece correcto**
La palabra condensado sugiere que basta con bajar la [[temperatura]].
**Por qué es incorrecto**
El modelo exige bosones, [[densidad_particulas]] suficiente y solapamiento cuántico medido por [[longitud_onda_termica]]. Sin esas condiciones no aparece una [[fraccion_condensada]] macroscópica.
**Señal de detección**
El razonamiento no menciona [[temperatura_critica]] ni [[densidad_critica]].
**Corrección conceptual**
Comprueba primero si el sistema tiene bosones y si [[temperatura]] queda por debajo del umbral ideal.
**Mini-ejemplo de contraste**
Un gas clásico frío y muy diluido puede seguir sin condensar, mientras un gas bosónico más denso sí puede hacerlo a la misma [[temperatura]].


### Error 2: Interpretar la [[fraccion_condensada]] como una probabilidad individual
**Por qué parece correcto**
Una fracción entre 0 y 1 recuerda a una probabilidad.
**Por qué es incorrecto**
La [[fraccion_condensada]] describe una proporción colectiva del [[numero_particulas]], no la biografía de una partícula etiquetada.
**Señal de detección**
Se dice “esta partícula tiene [[fraccion_condensada]] de estar condensada”.
**Corrección conceptual**
Relaciona [[fraccion_condensada]] con [[numero_condensado]] y población del estado fundamental.
**Mini-ejemplo de contraste**
Si [[fraccion_condensada]] es 0,6, significa que el 60 % del conjunto ideal ocupa el estado fundamental, no que cada partícula lleve una etiqueta cambiante.

## Errores de modelo


### Error 3: Usar el modelo ideal en gases fuertemente interactuantes
**Por qué parece correcto**
Las fórmulas del gas ideal son simples y dan una escala rápida.
**Por qué es incorrecto**
Interacciones fuertes desplazan [[temperatura_critica]], modifican la curva de [[fraccion_condensada]] y cambian las excitaciones.
**Señal de detección**
Los datos experimentales no siguen la monotonía ni la saturación esperada.
**Corrección conceptual**
Usa el ideal como referencia y cambia a modelo extendido si las interacciones dominan.
**Mini-ejemplo de contraste**
Una nube diluida se aproxima bien al ideal; un fluido cuántico denso necesita otro modelo.


### Error 4: Tratar una trampa como si tuviera densidad uniforme
**Por qué parece correcto**
El problema puede dar un solo [[numero_particulas]] y un [[volumen]].
**Por qué es incorrecto**
En trampas reales la [[densidad_particulas]] varía; el centro puede condensar antes que los bordes.
**Señal de detección**
Se usa una única densidad sin aclarar que es media o efectiva.
**Corrección conceptual**
Distingue gas homogéneo de gas atrapado y revisa si se necesita aproximación local.
**Mini-ejemplo de contraste**
Dos nubes con igual [[numero_particulas]] pueden condensar distinto si una está mucho más comprimida en el centro.

## Errores matemáticos


### Error 5: Olvidar que la [[fraccion_condensada]] no puede ser negativa
**Por qué parece correcto**
Al sustituir [[temperatura]] mayor que [[temperatura_critica]], una fórmula extrapolada puede producir valores sin sentido.
**Por qué es incorrecto**
Por encima del umbral ideal, la [[fraccion_condensada]] debe tomarse como cero.
**Señal de detección**
Aparece un resultado [[fraccion_condensada]] < 0.
**Corrección conceptual**
Aplica la condición de dominio antes de calcular.
**Mini-ejemplo de contraste**
Si [[temperatura]] supera [[temperatura_critica]], no hay fracción condensada ideal; no se interpreta un número negativo.


### Error 6: Mezclar unidades de [[temperatura]] y energía
**Por qué parece correcto**
[[constante_boltzmann]] conecta [[temperatura]] y energía, y se olvida durante la sustitución.
**Por qué es incorrecto**
[[temperatura]] debe ir en kelvin y la escala energética requiere [[constante_boltzmann]].
**Señal de detección**
El resultado de [[temperatura_critica]] queda en julios o sin unidad clara.
**Corrección conceptual**
Revisa dimensiones con [[constante_planck]], [[masa_particula]] y [[constante_boltzmann]].
**Mini-ejemplo de contraste**
Usar nK como si fueran K cambia el resultado en nueve órdenes de magnitud.

## Errores de interpretación


### Error 7: Leer la gráfica como un salto perfectamente vertical
**Por qué parece correcto**
La palabra crítica sugiere una frontera abrupta.
**Por qué es incorrecto**
La curva ideal de [[fraccion_condensada]] crece progresivamente al bajar [[temperatura]], y los sistemas reales suavizan el umbral.
**Señal de detección**
Se afirma que todo el gas condensa justo al cruzar [[temperatura_critica]].
**Corrección conceptual**
Lee pendiente, saturación y dominio en la gráfica.
**Mini-ejemplo de contraste**
Cerca de [[temperatura_critica]] la fracción puede ser pequeña; muy por debajo, puede acercarse a 1.


### Error 8: Confundir [[densidad_critica]] con [[densidad_particulas]]
**Por qué parece correcto**
Ambas tienen las mismas unidades.
**Por qué es incorrecto**
[[densidad_particulas]] describe el sistema; [[densidad_critica]] es el umbral que se compara con él.
**Señal de detección**
Se sustituyen una por otra sin comparar.
**Corrección conceptual**
Pregunta siempre: ¿mi densidad supera el umbral a esta [[temperatura]]?
**Mini-ejemplo de contraste**
Si [[densidad_particulas]] es menor que [[densidad_critica]], no hay condensado ideal aunque haya muchos bosones.

## Regla de autocontrol rápido

Antes de aceptar un resultado, verifica tres cosas: [[temperatura]] frente a [[temperatura_critica]], rango 0 a 1 de [[fraccion_condensada]] y coherencia entre [[densidad_particulas]] y [[densidad_critica]].