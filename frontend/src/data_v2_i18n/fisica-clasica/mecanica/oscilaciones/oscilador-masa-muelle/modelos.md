# Modelos del oscilador masa muelle

## Modelo ideal

El modelo ideal representa el sistema como una masa puntual [[m]] unida a un muelle lineal de rigidez [[k]], sin rozamiento dominante ni forzamiento externo neto. La coordenada [[x]] mide desplazamiento respecto al equilibrio y la fuerza [[F]] se interpreta como restauradora. Este marco permite describir la dinamica con periodicidad estable, amplitud constante y fase bien definida. Su valor didactico es alto porque separa mecanismos esenciales: inercia, elasticidad y estado inicial.

En este contexto, la relacion entre escala temporal y parametros estructurales se concentra en [[omega0]], [[T]] y [[f]]. El modelo no pretende capturar todos los detalles del laboratorio real; busca ofrecer una base causal clara para diagnosticar tendencias y construir criterios de comparacion.

## Hipótesis

Primera hipotesis: linealidad elastica en el rango de deformacion de trabajo. Esto significa que la fuerza restauradora es proporcional al desplazamiento dentro del intervalo operativo y que [[k]] puede tratarse como constante efectiva.

Segunda hipotesis: masa concentrada. Se asume que la distribucion espacial de masa no introduce modos internos relevantes frente al movimiento principal del conjunto.

Tercera hipotesis: disipacion secundaria. Puede existir perdida energetica real, pero su efecto sobre una ventana corta de ciclos se considera pequeno frente al comportamiento armonico dominante.

Cuarta hipotesis: referencia temporal y de fase bien definidas. Las condiciones iniciales de [[A]], [[phi]] y [[t]] deben establecerse de forma coherente para comparar teoria y medicion.

## Dominio de validez cuantitativo

El dominio cuantitativo se evalua con umbrales operativos claros. Define la metrica error_relativo_periodo como el cociente entre diferencia de periodos y periodo de referencia.

Si error_relativo_periodo <= 0.10, la aproximacion lineal suele ser aceptable para prediccion primaria. Si error_relativo_periodo > 0.10 de forma sistematica, el modelo ideal empieza a degradarse y debe revisarse.

Tambien es util controlar la estabilidad de frecuencia. Si [[f]] medida se mantiene dentro de una banda estrecha alrededor del valor teorico, por ejemplo con error relativo <= 5 por ciento en ensayos repetidos, la representacion ideal conserva utilidad predictiva para diseno preliminar.

Finalmente, la consistencia energetica da una tercera prueba: para amplitudes pequenas, la fuerza pico asociada a [[F]] debe escalar de forma aproximadamente lineal con [[A]]. Desviaciones persistentes mayores que 15 por ciento indican que conviene revisar no linealidad, rozamiento o errores de instrumentacion.

## Señales de fallo del modelo

Una senal fuerte de fallo aparece cuando la envolvente de amplitud cae rapidamente y la respuesta deja de ser casi periodica en pocos ciclos. Otra aparece cuando la curva experimental presenta asimetrias marcadas entre semiperiodos opuestos, lo que sugiere no linealidad o rigidez efectiva dependiente de desplazamiento.

Tambien hay fallo cuando el ajuste de fase requiere cambios arbitrarios para cada ensayo. Si la comparacion solo funciona manipulando [[phi]] sin criterio fisico, el problema no es de presentacion sino de modelo.

Por ultimo, si el modelo predice ordenes de magnitud incompatibles con observaciones basicas del banco de prueba, se debe detener la extrapolacion y auditar supuestos antes de seguir calculando.

## Modelo extendido o alternativo

Cuando el modelo ideal no basta, el primer escalado natural es introducir amortiguamiento viscoso efectivo. Este cambio conserva estructura analitica manejable y permite describir decaimiento de amplitud y desplazamientos de fase sin perder interpretabilidad.

Si el sistema trabaja cerca de resonancia con excitacion externa, conviene usar un modelo forzado para separar respuesta transitoria y estacionaria. Ese modelo permite cuantificar picos, ancho de banda y sensibilidad a variaciones parametricas.

En situaciones de gran deformacion o material no lineal, es preferible migrar a relaciones no lineales de fuerza. Este salto complica el calculo, pero evita conclusiones equivocadas en zonas donde la rigidez efectiva ya no es constante.

## Comparación operativa

Operacion rapida: el modelo ideal es superior cuando necesitas estimar [[omega0]], [[T]] y [[f]] con bajo costo computacional y alta trazabilidad conceptual. Es especialmente util en etapa de diseno temprano y en docencia de fundamentos.

Operacion intermedia: el modelo amortiguado es la opcion correcta cuando la pregunta incluye tiempo de asentamiento, perdida energetica por ciclo o control de vibraciones con disipacion relevante.

Operacion avanzada: el modelo forzado o no lineal es necesario cuando hay excitaciones periodicas cercanas a resonancia, topes, holguras o dependencias materiales que cambian la rigidez con amplitud.

Regla de decision: cuando la diferencia entre datos y prediccion del modelo ideal supera el margen de error instrumental y aparece de forma repetida, conviene cambiar de modelo. Cuándo conviene cambiar de modelo: cuando el error relativo sostenido es > 10 por ciento y las discrepancias tienen patron fisico reconocible, no ruido aleatorio.

Transicion explicita recomendada: cuando conviene cambiar de modelo, se migra primero a version amortiguada; si tras ese cambio el error sigue > 10 por ciento en banda de trabajo, se pasa a modelo forzado o no lineal segun el origen fisico de la discrepancia.
