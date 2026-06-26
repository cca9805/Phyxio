const e=`## Modelo ideal\r
\r
El modelo ideal de este leaf asume que la fuerza puede representarse como perfil dependiente de posicion en un intervalo claro entre [[x1]] y [[x2]]. Bajo esa hipotesis, [[W]] se obtiene por acumulacion local y no por una sola multiplicacion global. La ventaja de este modelo es que conserva significado fisico de transferencia distribuida y permite conectar calculo con lectura grafica.\r
\r
Cuando la respuesta es lineal en el rango operativo, la parametrizacion con [[k]] permite un cierre analitico eficiente. Cuando no hay ley exacta pero si informacion de tendencia, [[Fmed]] ofrece una aproximacion util con costo computacional bajo.\r
\r
## Hipótesis\r
\r
Primera hipotesis: existe una descripcion util de la fuerza sobre el eje de posicion para el tramo estudiado. Segunda hipotesis: los limites [[x1]] y [[x2]] se definen en una referencia unica y se mantienen en toda la resolucion. Tercera hipotesis: la variacion de regimen dentro del intervalo es inexistente o tratable por segmentacion. Cuarta hipotesis: el objetivo principal es lectura energetica acumulada del tramo.\r
\r
Tambien se asume coherencia de unidades y signos. Cambiar de referencia espacial durante el procedimiento sin actualizar ecuaciones rompe la interpretacion.\r
\r
## Dominio de validez cuantitativo\r
\r
Regla operativa fuerte: la aproximacion con [[Fmed]] se considera robusta cuando el error_relativo <= 0.10 frente a una referencia integral. Si ese umbral se supera, el modelo aproximado deja de ser recomendable para decisiones sensibles.\r
\r
Para el caso lineal con [[k]], una guia util es mantener delta_k_relativa <= 0.10 en el intervalo. Si la variacion del parametro excede ese rango, la simplificacion lineal puede distorsionar transferencia real.\r
\r
Criterio de escalado: cuando delta_perfil > 0.20 o hay cambios de signo concentrados en zonas estrechas, conviene pasar a integral por tramos o a perfil medido.\r
\r
## Señales de fallo del modelo\r
\r
Primera señal: pequenas variaciones de [[x1]] o [[x2]] generan cambios abruptos de [[W]] sin respaldo en la forma de la curva. Segunda señal: el signo final contradice de forma sistematica la lectura de area orientada. Tercera señal: la discrepancia entre estimacion y referencia integral persiste por encima de tolerancia en ensayos repetidos.\r
\r
Otra señal frecuente es la aparicion de dependencias no incluidas, como historia de carga o efectos de tasa. En ese escenario, la representacion basica queda corta y exige extension metodologica.\r
\r
## Modelo extendido o alternativo\r
\r
El primer escalado es la integral por tramos con perfiles diferenciados. El segundo es ajuste empirico de curva y calculo numerico de area cuando no hay forma analitica confiable. El tercero es acoplar el analisis de trabajo variable con un balance energetico ampliado que explicite disipacion y almacenamiento simultaneos.\r
\r
En contextos de validacion, combinar resultado de modelo con margen experimental suele ser mas util que reportar un numero unico sin incertidumbre.\r
\r
## Comparación operativa\r
\r
El modelo ideal es rapido y didactico, pero sensible a hipotesis. El enfoque por tramos mejora fidelidad con complejidad moderada. El enfoque guiado por datos mejora realismo en perfiles complejos, aunque demanda mayor disciplina metrologica.\r
\r
En terminos de uso, [[Fmed]] conviene para cribado inicial y decisiones de baja sensibilidad. Integral exacta o segmentada conviene para seguridad, dimensionamiento o validacion de precision. Elegir correctamente entre esos niveles es parte del aprendizaje central de este leaf.\r
\r
Transicion explicita final: cuando conviene cambiar de modelo es cuando la discrepancia entre aproximacion y referencia supera tolerancia operativa, cuando aparecen cambios de signo concentrados o cuando el perfil deja de ser estable en el intervalo; en esos casos se abandona la media global y se migra a integral por tramos o perfil medido.`;export{e as default};
