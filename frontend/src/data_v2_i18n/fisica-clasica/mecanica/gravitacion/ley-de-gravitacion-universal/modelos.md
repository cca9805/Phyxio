# Modelos de ley de gravitacion universal

## Modelo ideal

El modelo ideal considera dos masas puntuales [[m1]] y [[m2]] separadas por una distancia [[r]] entre centros de masa. La interaccion se describe por una unica magnitud de salida [[F]], y su escala la fija [[G]]. Este recorte es poderoso porque conserva la esencia de la fisica gravitatoria sin exigir geometria compleja ni calculo numerico avanzado.

En este marco, la atraccion es central y radial. Eso significa que la direccion de la fuerza apunta sobre la linea que une ambas masas. Para muchos problemas introductorios, este modelo no solo es suficiente, tambien es el mejor punto de partida para evitar mezclar variables innecesarias.

## Hipotesis

Hipotesis 1: regimen clasico newtoniano, sin correcciones relativistas relevantes.

Hipotesis 2: masas tratables como puntuales o como distribuciones esfericas equivalentes.

Hipotesis 3: distancia [[r]] positiva y medida entre centros, nunca entre superficies arbitrarias.

Hipotesis 4: unidades SI consistentes para [[G]], masas y distancias.

Hipotesis 5: ausencia de escalas extremas donde el modelo pierda validez fisica.

Estas hipotesis no son decorativas. Son el contrato que define cuando el resultado puede interpretarse como una prediccion fisica y cuando solo seria una cuenta formal.

## Dominio de validez cuantitativo

Un criterio cuantitativo minimo es mantener [[r]] claramente mayor que cero y usar una escala donde la aproximacion puntual sea razonable. En problemas de campo, se suele trabajar con [[M]] como fuente y estimar [[g]] o [[a]] en radios donde el cuerpo fuente pueda modelarse con simetria radial.

Como regla practica de aula, si el cambio relativo abs([[r2]]-[[r1]])/[[r1]] <= 0.1, puede usarse comparacion directa con error conceptual bajo. Si abs([[r2]]-[[r1]])/[[r1]] > 0.1, conviene recalcular con la ley completa y revisar sensibilidad numerica.

Para comparaciones de fuerza, la relacion entre [[F1]] y [[F2]] mediante [[r1]] y [[r2]] es valida cuando las masas no cambian entre ambos estados. Si cambian masas, conviene regresar a la expresion general de [[F]].

En escenarios superficiales, usar [[R]] como radio de referencia es valido solo cuando el punto de interes coincide con esa condicion geometrica. Cuando hay altura significativa, se debe usar [[r]] absoluto.

Cuando conviene cambiar de modelo: si abs([[r2]]-[[r1]])/[[r1]] > 0.1 o si se requiere error estimado menor a 5 por ciento, se migra del atajo de comparacion al modelo general completo.

## Senales de fallo del modelo

Una senal de fallo aparece cuando el resultado exige precision relativista o cuando la geometria real no puede comprimirse en una sola distancia radial. Otra senal es obtener valores absurdos de [[F]], [[g]] o [[a]] por mezcla de unidades.

Tambien hay fallo cuando se confunden papeles de magnitudes: usar [[m]] de prueba donde corresponde [[m1]] y [[m2]], o tratar [[R]] como si siempre fuera igual a [[r]]. En esos casos, la ecuacion elegida puede ser correcta, pero el sistema modelado no lo es.

## Modelo extendido o alternativo

Cuando el escenario involucra varias fuentes, se usa superposicion para construir campo total [[g]]. Cuando la precision requerida es mayor, se incorporan metodos numericos y geometria completa. Si la escala fisica entra en regimen relativista, se migra a marcos teoricos mas avanzados.

En docencia, una extension util es separar explicitamente problemas de dos cuerpos y problemas de campo local. Esto ayuda a decidir si la salida relevante es [[F]], [[g]], [[P]] o [[a]], y evita que el estudiante aplique una formula correcta al objetivo equivocado.

## Comparacion operativa

Modelo ideal: rapido, interpretable y suficiente para gran parte de ejercicios de fundamentos.

Modelo de campo local: excelente para conectar fuente [[M]] con [[g]], [[P]] y [[a]] sin repetir toda la ley de dos masas en cada paso.

Modelo extendido de superposicion: necesario cuando hay multiples fuentes o simetria rota.

Regla final de seleccion: si el problema puede representarse con una distancia radial dominante y fuentes bien definidas, usar modelo ideal o de campo. Si no, escalar al modelo extendido antes de calcular.