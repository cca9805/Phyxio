# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: simulaciones-estadisticas
# Target response file: teoria.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Simulaciones estadisticas

## Contexto conceptual

Una simulación estadística sustituye una descripción imposible de seguir partícula a partícula por muchas muestras representativas del sistema. En termodinámica estadística, cada muestra puede ser una configuración microscópica con cierta [[energia]], tomada a una [[temperatura]] dada. Al medir un [[observable]] en esas configuraciones, buscamos una [[media_muestral]] que aproxime el promedio físico real. La pregunta clave no es solo cuánto vale ese promedio, sino cuánta confianza merece. Ahí entra el [[error_estadistico]]: una medida de la incertidumbre producida por usar un [[numero_muestras]] finito.

## 🟢 Nivel esencial

En una simulación estadística, cada muestra es una pequeña ventana al sistema. Si el [[observable]] fluctúa mucho, una sola medida puede engañar: puede caer en una configuración poco típica y dar una lectura exagerada o demasiado baja. Al aumentar el [[numero_muestras]], la [[media_muestral]] se estabiliza porque las fluctuaciones positivas y negativas tienden a compensarse. Sin embargo, la mejora no es lineal: multiplicar las muestras por cien no vuelve el resultado cien veces mejor, sino unas diez veces más preciso. El [[error_estadistico]] mide esa anchura residual alrededor de la [[media_muestral]]. Por eso una simulación no termina al obtener un número; termina cuando el [[error_estadistico]] es pequeño frente a la escala física que se quiere distinguir. Si esa escala es menor que la incertidumbre, el resultado aún no habla con claridad.

## 🔵 Nivel formal

El modelo formal separa tres niveles: valores individuales, promedio estimado e incertidumbre del promedio. Si se toman [[numero_muestras]] valores del [[observable]], su [[suma_observable]] permite construir la [[media_muestral]]:

{{f:media_muestral_observable}}

La dispersión de esos valores se resume mediante la [[desviacion_estandar]], que describe cuánto varía típicamente el [[observable]] de una muestra a otra. La incertidumbre de la media no es esa dispersión completa, sino la dispersión reducida por el número de muestras independientes:

{{f:error_estadistico_media}}

Así, el [[error_estadistico]] disminuye como la raíz inversa de [[numero_muestras]]. Si se quiere reducir el error por un factor diez, hacen falta unas cien veces más muestras efectivas. En simulaciones térmicas, las muestras no siempre son equiprobables: la [[probabilidad_boltzmann]] asigna más peso a estados de menor [[energia]] a una [[temperatura]] fija, usando [[constante_boltzmann]] y [[constante_normalizacion]]:

{{f:factor_boltzmann}}

En algoritmos Monte Carlo, una propuesta con [[diferencia_energia]] positiva puede aceptarse con una [[probabilidad_aceptacion]] térmica, mientras que una propuesta que reduce [[energia]] se acepta de forma natural:

{{f:aceptacion_monte_carlo}}

Estas relaciones conectan muestreo, equilibrio térmico e incertidumbre, y permiten decidir si la [[media_muestral]] distingue fenómenos reales o solo ruido. La lectura formal siempre compara la escala de [[error_estadistico]] con la diferencia física que se desea resolver; sin esa comparación, una cifra precisa puede no tener contenido experimental.

## 🔴 Nivel estructural

La estructura del modelo descansa sobre varias hipótesis. Primero, las muestras deben representar correctamente la distribución física del sistema. En un ensamble canónico, eso significa que la frecuencia de aparición de configuraciones debe ser compatible con la [[probabilidad_boltzmann]] determinada por la [[energia]], la [[temperatura]], la [[constante_boltzmann]] y la [[constante_normalizacion]]. Si el algoritmo visita regiones irrelevantes o ignora estados importantes, la [[media_muestral]] puede ser precisa en apariencia pero sesgada físicamente.

Segundo, la reducción del [[error_estadistico]] con [[numero_muestras]] supone muestras independientes o, al menos, suficientemente descorrelacionadas. En una cadena Monte Carlo, dos configuraciones consecutivas pueden parecer muestras distintas, pero compartir casi la misma [[energia]] y casi el mismo [[observable]]. En ese caso, el [[numero_muestras]] bruto sobrestima la información real. El invariante que debe vigilarse no es solo contar datos, sino estimar cuántas muestras efectivas hay.

Tercero, la [[desviacion_estandar]] debe ser una medida significativa de fluctuación. Si el [[observable]] tiene colas muy largas, cambios bruscos de fase o episodios raros dominantes, el [[error_estadistico]] puede tardar mucho en estabilizarse. Un límite práctico aparece cuando duplicar o triplicar [[numero_muestras]] cambia la [[media_muestral]] más que el propio [[error_estadistico]] esperado: el modelo de incertidumbre aún no está asentado.

Cuarto, hay casos frontera: con [[numero_muestras]] muy pequeño, la [[media_muestral]] puede depender demasiado de unos pocos valores; con [[desviacion_estandar]] casi nula, el [[error_estadistico]] también será pequeño, pero eso solo es fiable si el muestreo exploró de verdad los estados relevantes. A [[temperatura]] muy baja, la simulación puede quedar atrapada en mínimos de [[energia]]; a [[temperatura]] alta, muchas propuestas se aceptan y las fluctuaciones aumentan. La lectura gráfica debe reflejar que el [[error_estadistico]] baja al crecer [[numero_muestras]], pero con pendiente cada vez más suave. Si el gráfico no muestra esa tendencia, hay que revisar modelo, correlaciones, unidades y regla de aceptación.

También hay invariantes de interpretación: la unidad de [[error_estadistico]] debe coincidir con la del [[observable]], la [[media_muestral]] no debe depender del tamaño de tabla como lo hace la [[suma_observable]], y una conclusión física solo es defendible cuando la diferencia buscada supera claramente la incertidumbre. El modelo se rompe si el error calculado disminuye mientras las medias por bloques no convergen.

## Interpretación física profunda

El [[error_estadistico]] no es un fallo de la simulación: es la huella cuantitativa de que el sistema fluctúa. Una [[media_muestral]] sin incertidumbre sería una estatua de niebla, elegante pero inútil. La [[desviacion_estandar]] habla de la variabilidad microscópica del [[observable]]; el [[error_estadistico]] habla de cuánto esa variabilidad contamina el promedio. Cuando [[numero_muestras]] crece, no desaparecen las fluctuaciones de cada estado, pero se cancelan mejor en la media. La [[probabilidad_aceptacion]] y la [[probabilidad_boltzmann]] determinan qué configuraciones entran en el coro estadístico: si el muestreo no respeta esa música térmica, el promedio canta fuera de tono aunque tenga muchas muestras.

## Orden de magnitud

En simulaciones de aula o laboratorio computacional, [[numero_muestras]] suele ir de 10² a 10⁶. Si [[desviacion_estandar]] es del orden de 2 unidades del [[observable]], con [[numero_muestras]] = 10⁴ el [[error_estadistico]] esperado ronda 2/100, es decir, unas 0,02 unidades. Reducirlo a 0,002 exige aproximadamente 10⁶ muestras. La escala manda: pedir una precisión diez veces mayor cuesta cien veces más muestreo.

## Método de resolución personalizado

Primero identifica el [[observable]] y su unidad. Después separa datos individuales, [[suma_observable]] y [[media_muestral]]. Calcula o estima la [[desviacion_estandar]], porque sin dispersión no hay lectura honesta de incertidumbre. Usa [[numero_muestras]] efectivo, no solo el número guardado en la tabla. Obtén el [[error_estadistico]] y compáralo con la diferencia física que quieres resolver. En simulaciones térmicas, verifica que [[temperatura]], [[energia]], [[diferencia_energia]], [[probabilidad_boltzmann]] y [[probabilidad_aceptacion]] sean coherentes con el modelo. Finalmente, mira el gráfico: si el error no decrece suavemente, revisa correlaciones o sesgos.

## Casos especiales y ejemplo extendido

Si [[numero_muestras]] es pequeño, la [[media_muestral]] puede variar mucho entre ejecuciones. Si [[observable]] casi no fluctúa, una [[desviacion_estandar]] baja puede indicar estabilidad real o mala exploración. Si la [[temperatura]] es muy baja, una propuesta con [[diferencia_energia]] positiva tendrá [[probabilidad_aceptacion]] pequeña y el sistema puede moverse despacio por el espacio de estados. Como ejemplo, imagina estimar la [[energia]] media de un sólido simplificado. Con 10³ muestras, la [[media_muestral]] parece razonable pero el [[error_estadistico]] no permite distinguir dos modelos cercanos. Con 10⁵ muestras, el error baja unas diez veces y la comparación empieza a tener sentido físico.

## Preguntas reales del alumno

¿Más muestras siempre dan mejor resultado? Sí, pero solo si las muestras son representativas. Si están muy correlacionadas, aumentar [[numero_muestras]] mejora menos de lo esperado.

¿Por qué el error baja tan despacio? Porque las fluctuaciones se compensan estadísticamente. Para reducir mucho el [[error_estadistico]], necesitas que muchas desviaciones independientes se promedien.

¿La [[media_muestral]] es el valor verdadero? No exactamente. Es una estimación finita del promedio físico. Su fiabilidad se lee junto con [[error_estadistico]].

¿Qué papel tiene la [[temperatura]]? Controla qué estados de [[energia]] son frecuentes mediante [[probabilidad_boltzmann]] y afecta a la [[probabilidad_aceptacion]] de cambios energéticos.

## Conexiones transversales y rutas de estudio

Este leaf conecta probabilidad, termodinámica y métodos numéricos. Sirve de puente hacia ensambles estadísticos, Monte Carlo, fluctuaciones, equilibrio térmico y análisis de datos experimentales. También prepara una lectura crítica de gráficos: no basta ver una curva bonita; hay que preguntar qué incertidumbre queda escondida bajo cada punto.

## Síntesis final

Una simulación estadística convierte muchas fluctuaciones microscópicas en una estimación macroscópica. Su brújula no es solo la [[media_muestral]], sino el [[error_estadistico]]: la medida que dice cuánta muestra falta para confiar en el resultado.

