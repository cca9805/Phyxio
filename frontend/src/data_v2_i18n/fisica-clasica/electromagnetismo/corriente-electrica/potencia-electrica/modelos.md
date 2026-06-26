## Modelo ideal

El modelo ideal del leaf supone un elemento resistivo equivalente, parametros estables y mediciones coherentes de [[tension_electrica]] e [[corriente_electrica]] en el mismo componente. Bajo esas hipotesis, la potencia se obtiene de forma directa con:

{{f:potencia_base}}

Si ademas la carga es ohmica en el rango de operacion, se aplican formas derivadas:

{{f:potencia_resistiva_corriente}}

{{f:potencia_resistiva_tension}}

Este marco es especialmente util en etapa de predimensionado porque ofrece interpretacion rapida: crecimiento lineal de [[potencia_electrica]] con [[corriente_electrica]] o [[tension_electrica]] en forma base, y sensibilidad cuadratica en formas resistivas. Tambien permite enlazar de inmediato con energia cuando [[potencia_electrica]] se mantiene aproximadamente constante:

{{f:energia_desde_potencia}}

Como idealizacion, el modelo omite saturaciones de fuente, variacion termica de [[resistencia_electrica]], dispersion de tolerancias y efectos de entorno. Aun asi, es el punto de partida correcto para entender causalidad fisica y para detectar inconsistencias evidentes en datos.

## Hipótesis

1. El elemento principal puede representarse por una [[resistencia_electrica]] efectiva positiva y bien definida.
2. Las mediciones de [[tension_electrica]] e [[corriente_electrica]] son simultaneas o representativas del mismo estado.
3. El regimen es cuasi-estacionario en el intervalo de calculo principal.
4. Las variaciones de temperatura no alteran de forma dominante los parametros durante la primera estimacion.
5. La forma de onda, si existe variacion temporal, se resume mediante valores medios o eficaces correctamente definidos.

Estas hipotesis no son decorativas: condicionan validez y calidad de decision. Ignorarlas conduce a resultados que pueden ser algebraicamente correctos pero inutiles para diseno o diagnostico.

## Dominio de validez cuantitativo

El modelo ideal se considera operativo cuando se cumplen criterios cuantitativos minimos:
1. [[resistencia_electrica]] > 0 y su deriva relativa en el intervalo cumple |Delta[[resistencia_electrica]]|/[[resistencia_electrica]] <= 0.05.
2. Diferencia entre potencia obtenida por via directa y forma resistiva <= 10% con datos consistentes.
3. Relacion pico/promedio de [[potencia_electrica]] <= 2 para usar promedio unico sin perder eventos criticos.
4. Temperatura estimada del componente por debajo del limite de hoja de datos con margen >= 10 C.

Si alguno falla, el modelo deja de ser suficiente para conclusion final. No significa que sea inutil; significa que su rol pasa a "estimacion inicial" y debe complementarse con modelo extendido.

## Señales de fallo del modelo

1. Resultados de [[potencia_electrica]] incompatibles con comportamiento observado (por ejemplo, calentamiento mayor al previsto).
2. Inconsistencia sistematica entre [[tension_electrica]], [[corriente_electrica]] y [[resistencia_electrica]] inferida en distintas mediciones.
3. Cambios de [[resistencia_electrica]] por temperatura superiores al umbral definido.
4. Aparicion de componentes reactivos o conmutacion que alteran la interpretacion resistiva simple.
5. Superacion de potencia nominal aun cuando el promedio energetico parezca moderado.

Estas senales indican que el modelo ideal no captura mecanismos relevantes. Persistir en su uso puede llevar a decisiones de diseno inseguras.

## Modelo extendido o alternativo

El modelo extendido incorpora acoplamiento electrotermico y, cuando aplica, naturaleza no puramente resistiva de la carga. En este enfoque, [[resistencia_electrica]] pasa a depender de temperatura y, en algunos casos, de frecuencia o punto de operacion. La potencia se analiza por tramos temporales o mediante perfil [[potencia_electrica]](t), y la energia se obtiene por acumulacion coherente.

La transicion recomendada es explicita: si |Delta[[resistencia_electrica]]|/[[resistencia_electrica]] > 0.05 o si la discrepancia entre formulas supera 10%, cambiar de modelo. En aplicaciones de electronica de potencia, tambien conviene migrar cuando existen picos repetidos de corriente que acercan el sistema a limites termicos aunque el promedio sea aceptable.

Como alternativa adicional, puede emplearse modelo de fuente no ideal con resistencia interna y limitacion de corriente. Ese enfoque explica por que la tension efectiva cae bajo carga y modifica [[potencia_electrica]] disponible, mejorando prediccion en escenarios reales de baterias y convertidores.

## Comparación operativa

Modelo ideal:
1. Ventaja: rapido, transparente y didactico para establecer causalidad entre [[tension_electrica]], [[corriente_electrica]], [[resistencia_electrica]] y [[potencia_electrica]].
2. Costo: menor fidelidad cuando hay no linealidades termicas o dinamicas.
3. Uso preferente: estimacion inicial, verificacion de orden de magnitud y evaluacion preliminar de seguridad.

Modelo extendido:
1. Ventaja: captura desviaciones reales y riesgos termicos con mayor precision.
2. Costo: requiere mas datos, instrumentacion y [[tiempo]] de analisis.
3. Uso preferente: validacion final de diseno, diagnostico de fallas y operacion cercana a limites.

La comparacion no debe plantearse como "uno correcto y otro incorrecto", sino como eleccion de resolucion apropiada para la pregunta fisica. El criterio experto consiste en empezar simple, verificar umbrales, y escalar complejidad cuando la evidencia lo exija.