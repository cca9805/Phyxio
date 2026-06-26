# Modelos físicos: Curvas planas y peraltadas

## Modelo ideal

El modelo base representa al vehiculo como particula que describe una trayectoria circular de radio [[r]] aproximadamente constante. La exigencia de curvatura se expresa con [[ac]] y [[Frad]]. En curva plana, la principal fuente radial es [[fs]]; en curva peraltada, la orientacion de [[Nn]] agrega contribucion radial controlada por [[th]].

Este modelo es util porque separa con claridad tres capas: demanda kinematica (cuanto debe curvarse el movimiento), oferta dinamica (que fuerzas reales pueden sostener esa curvatura) y margen operativo (que tan lejos estamos del limite de adherencia ligado a [[mu]]).

## Hipótesis

- La trayectoria local puede aproximarse como circular, con [[r]] bien definido.
- La rapidez [[v]] no presenta oscilaciones abruptas durante el tramo analizado.
- El contacto rueda-pavimento opera en regimen de adherencia estatica, por lo que [[fs]] no supera el umbral impuesto por [[mu]] y [[Nn]].
- La via tiene geometria estable, de modo que [[th]] puede tratarse como parametro de diseno en el sector.

Bajo estas hipotesis, las relaciones del leaf permiten diagnosticar seguridad y comparar alternativas de diseno con trazabilidad fisica.

## Dominio de validez cuantitativo

El modelo opera de forma confiable cuando:

- [[r]] > 0 y [[m]] > 0.
- [[mu]] > 0 y [[Nn]] > 0 para aplicar limites de adherencia.
- [[v]] se mantiene en un rango donde no dominan transitorios extremos.
- [[th]] se interpreta en el marco de peralte vial, no como inclinacion instantanea de un vehiculo en maniobra agresiva.

En terminos practicos, funciona bien para evaluacion inicial de curvas urbanas y carreteras, auditoria de rampas y comparaciones de alternativas de proyecto.

## Señales de fallo del modelo

- Diferencias sistematicas entre prediccion y medicion superiores a tolerancia operacional.
- Evidencia de deslizamiento prolongado aun cuando el modelo predice margen.
- Presencia de frenado intenso en plena curva, que rompe la hipotesis de regimen casi uniforme.
- Superficie muy heterogenea donde [[mu]] cambia de forma brusca dentro del tramo.

Cuando estas senales aparecen, no basta ajustar un numero: hay que cambiar de marco de modelado.

## Modelo extendido o alternativo

El siguiente nivel incorpora dinamica transitoria y acoplamientos reales:

- Transferencia de carga longitudinal y lateral durante frenado/aceleracion.
- Modelo de neumatico no lineal para fuerza lateral en funcion de deslizamiento.
- Geometria variable de curva y perturbaciones de superficie.
- Interaccion con controles activos de estabilidad.

### Transición explícita de modelo alternativo

Conviene pasar del modelo ideal al extendido cuando la variable de control deja de ser solo [[v]] y aparece una combinacion de maniobras que altera de forma no lineal la capacidad de [[fs]] para sostener [[Frad]]. Un criterio operativo simple es: si el error entre prediccion ideal y dato de campo supera el margen aceptable de seguridad en varios eventos consecutivos, se abandona el esquema ideal y se adopta modelo transitorio con neumatico no lineal.

Dicho de forma directa: este es el punto donde conviene cambiar de modelo, porque la aproximacion inicial deja de representar el fenomeno dominante en la curva real.

### Cuando conviene cambiar de modelo

Se pasa del modelo ideal al modelo alternativo cuando aparecen dos condiciones simultaneas: primero, la discrepancia prediccion-medicion deja de ser ruido y se vuelve sistematica; segundo, la decision de seguridad depende de fenomenos que el modelo simple no representa. En ese escenario, mantener el modelo ideal no es conservador, es incorrecto.

## Comparación operativa

| Aspecto | Modelo ideal de curva | Modelo extendido de vehiculo |
|---|---|---|
| Variable principal | [[v]], [[r]], [[mu]], [[th]] | Estados dinamicos acoplados |
| Salida clave | [[Frad]] y margen de adherencia | Estabilidad completa en maniobra |
| Costo computacional | Bajo | Medio/alto |
| Uso recomendado | Diagnostico rapido y diseno preliminar | Validacion final y casos criticos |

La regla didactica es clara: se comienza con el modelo ideal para entender causalidad y ordenes de magnitud; se escala al modelo extendido cuando el riesgo operativo exige mayor fidelidad.
