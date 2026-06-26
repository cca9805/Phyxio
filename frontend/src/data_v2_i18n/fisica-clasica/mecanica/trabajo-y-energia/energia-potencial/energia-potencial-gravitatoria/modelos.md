# Modelos

## Modelo ideal

El modelo ideal del leaf usa gravedad local casi uniforme y una referencia vertical fija para describir la energia de estado [[Ug]]. En este marco, [[m]] y [[g]] actuan como parametros de escala y [[h]] como variable de estado. La fortaleza del modelo es su simplicidad operativa: permite leer cambios energeticos sin resolver dinamica completa.

Este modelo es apropiado cuando la variacion vertical no altera de manera importante la intensidad del campo y cuando la pregunta didactica se centra en balance de energia, no en detalle orbital.

## Hipótesis

El uso correcto del modelo depende de tres hipotesis principales. Primero, [[hi]] y [[hf]] deben medirse con la misma referencia vertical. Segundo, [[g]] se considera constante en el intervalo. Tercero, el sistema se analiza en regimen clasico y con unidades SI consistentes.

Si una de estas condiciones se rompe, el calculo puede seguir pareciendo correcto pero la interpretacion de [[dUg]] y [[Wg]] pierde fiabilidad. Por eso la comprobacion de hipotesis debe hacerse antes de sustituir valores.

## Dominio de validez cuantitativo

El dominio tipico incluye laboratorios, edificaciones, rampas y elevadores donde las alturas son moderadas frente a la escala planetaria. En este rango, la variacion de [[g]] es pequena y la aproximacion local funciona con buena robustez para tareas didacticas y tecnicas introductorias.

Como criterio operativo, si el problema se mantiene en escalas donde [[g]] puede tomarse aproximadamente constante y el objetivo es interpretar trabajo y energia entre estados, el modelo del leaf es suficiente. Cuando la escala crece hacia regimens donde la gravedad cambia apreciablemente con la distancia, se requiere un modelo gravitatorio mas amplio.

Criterio cuantitativo de uso: si el salto vertical cumple 0 m <= salto_vertical <= 1000 m en contexto local y no se exige precision fina, el modelo del leaf suele ser suficiente para decisiones didacticas y de ingenieria basica.

Como orden de magnitud operativo, el rango mas habitual para este modelo va desde 10 m hasta 1000 m en aplicaciones locales, con errores tipicos menores al 5 por ciento cuando no hay exigencia metrologica estricta.

## Señales de fallo del modelo

La primera senal de fallo aparece cuando el problema entra en distancias grandes respecto al radio del cuerpo central. La segunda aparece cuando se mezclan referencias de altura entre estado inicial y final. La tercera aparece cuando el analisis exige precision incompatible con la aproximacion uniforme de [[g]].

Tambien hay fallo cuando la lectura de signos se vuelve inconsistente de manera sistematica. Si el proceso asciende y aun asi se interpreta [[dUg]] negativa sin causa fisica, no es solo un error de algebra: es una falla de modelo o de referencia.

## Modelo extendido o alternativo

Cuando el modelo local deja de ser adecuado, conviene pasar a una descripcion gravitatoria no uniforme. El objetivo no es abandonar el enfoque energetico, sino conservar su logica con una relacion de potencial mas general. En esa transicion, la idea de estado sigue vigente, pero la dependencia espacial ya no es la misma del escenario local.

En problemas mixtos, una estrategia util es separar niveles: usar modelo local para estimacion preliminar y modelo extendido para validacion final cuando la escala o la precision lo exijan.

## Comparación operativa

El modelo ideal gana por claridad y velocidad de uso en problemas escolares y de ingenieria basica. El modelo extendido gana cuando la escala espacial crece o la tolerancia de error se vuelve exigente. La eleccion correcta no depende de preferencia algebraica, sino del dominio fisico del problema.

En resumen, el criterio practico es simple: si referencia, escala y coherencia de [[g]] se mantienen, el modelo del leaf es la mejor primera opcion. Si no se mantienen, cambiar de modelo es parte de resolver bien.