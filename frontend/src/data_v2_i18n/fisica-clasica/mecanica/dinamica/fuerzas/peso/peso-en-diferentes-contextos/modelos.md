# Modelos físicos: Peso en diferentes contextos

## Modelo ideal

El modelo ideal de este leaf combina dos aproximaciones: campo local casi uniforme para entornos de superficie y marco acelerado unidimensional para lectura de soporte. Con ello se describe de forma limpia la diferencia entre peso real y peso aparente sin sobrecargar al estudiante con efectos secundarios irrelevantes en primer paso.

Las simplificaciones clave son:

- Se considera que [[m]] es invariante durante todo el problema.
- En regimen local, [[g0]] se toma constante en la zona de medida.
- La geometria radial se simplifica con [[R]], [[h]] y [[r]] segun el contexto.
- La lectura de soporte se asocia a [[N]] y [[Pap]] cuando hay contacto.

Estas hipotesis no niegan la realidad; la recortan para hacerla calculable con trazabilidad fisica.

## Hipótesis

Hipotesis operativas que deben declararse antes de resolver:

- Hipotesis de campo local: cuando [[h]] es pequena frente a [[R]], el uso de [[g0]] es aceptable.
- Hipotesis de campo central: cuando la escala espacial crece, se usa [[G]], [[M]] y [[r]].
- Hipotesis de contacto: [[Pap]] y [[N]] solo tienen sentido si existe apoyo mecanico.
- Hipotesis de eje dominante: en ascensor o plataforma vertical, la aceleracion [[a]] se modela colineal con el campo.

Si una hipotesis falla, el modelo deja de ser confiable y debe cambiarse.

## Dominio de validez cuantitativo

Condiciones cuantitativas recomendadas:

- Regimen local: abs([[h]]) <= 0.02*[[R]].
- Regimen central: si [[h]] > 0.02*[[R]], usar [[r]] = [[R]] + [[h]] y modelo con [[G]] y [[M]].
- Dominio fisico minimo: [[m]] > 0, [[R]] > 0, [[r]] > 0.
- Coherencia gravitatoria: para [[h]] >= 0 se espera [[gmod]] <= [[g0]].
- Coherencia de lectura: con contacto estable, [[Pap]] >= 0 y se vincula con [[N]].

Transicion explicita: cuándo conviene cambiar de modelo. Si abs([[h]]) <= 0.02*[[R]] deja de cumplirse, o si la diferencia entre estimacion local y central supera la incertidumbre permitida, conviene pasar del modelo local al modelo alternativo central.

Fuera de estos umbrales, la simplificacion local puede ocultar errores sistematicos relevantes.

## Señales de fallo del modelo

Señales observables de fallo:

- La prediccion difiere de la medicion mas de 5 a 10 por ciento de forma consistente.
- El signo esperado de [[Pap]] o la tendencia de [[gmod]] con [[h]] no coincide con el comportamiento fisico.
- Cambios pequenos en entrada producen saltos no plausibles en salida.
- El resultado viola restricciones obvias del problema o del instrumento.

Estas señales indican que no basta recalcular; hay que revisar hipotesis.

## Modelo extendido o alternativo

El modelo alternativo natural es el campo central completo para gravedad y un tratamiento mas realista del soporte cuando el sistema no es cuasiestatico. En aplicaciones tecnicas puede requerirse agregar rotacion del astro, no esfericidad o calibracion instrumental.

Regla practica: si el error relativo entre dos modelos supera 5 por ciento en la magnitud de decision, usar el modelo extendido deja de ser opcional y pasa a ser obligatorio.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo alternativo |
|---------|--------------|--------------------|
| Variable dominante | [[g0]] y entorno local | [[G]], [[M]], [[r]] |
| Escala espacial | Cercana a superficie | Regional u orbital |
| Costo de calculo | Bajo | Medio o alto |
| Sensibilidad a [[h]] | Baja en primer orden | Alta y explicita |
| Limite de validez | abs([[h]]) <= 0.02*[[R]] | Requiere datos geometricos fiables |

Aprender a detectar la frontera entre ambos modelos es parte central de la competencia fisica que este leaf quiere desarrollar.
