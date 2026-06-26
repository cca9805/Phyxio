## Modelo ideal

El modelo ideal del método de Monte Carlo supone que cada [[valor_muestra]] procede de una distribución física correcta y que el conjunto de muestras representa el observable que se quiere estimar. El resultado central es el [[estimador_montecarlo]], acompañado de [[error_estandar]] como medida de incertidumbre estadística. En este modelo, el azar se usa para recorrer estados posibles, no para abandonar las restricciones físicas. Si se emplea Metropolis, [[probabilidad_aceptacion]] se interpreta como un criterio térmico ligado a [[energia_estado]], [[temperatura]] y [[constante_boltzmann]].

## Hipótesis

- Las muestras son representativas: si no lo son, el [[estimador_montecarlo]] queda sesgado aunque parezca estable.
- El [[numero_muestras]] es suficientemente grande: si es demasiado pequeño, el [[error_estandar]] domina la lectura.
- La [[varianza_muestral]] es finita: si hay colas extremas, la convergencia puede ser muy lenta.
- Los [[peso_muestra]] son correctos cuando se usa promedio ponderado: si no, el promedio deja de representar el sistema físico.
- En Metropolis, la cadena alcanza equilibrio estadístico: si no mezcla, [[probabilidad_aceptacion]] no garantiza exploración suficiente.

## Dominio de validez cuantitativo

Un cálculo básico es razonable cuando [[numero_muestras]] > 10³ y preferible cuando [[numero_muestras]] > 10⁵ para observables con ruido apreciable. La incertidumbre relativa debería cumplir [[error_estandar]]/|[[estimador_montecarlo]]| < 0,05 para una estimación didáctica y < 0,01 para una estimación más exigente. En Metropolis, valores de [[probabilidad_aceptacion]] entre 0,2 y 0,8 suelen indicar exploración útil; cerca de 0 la cadena se bloquea, cerca de 1 puede estar dando pasos demasiado pequeños.

## Señales de fallo del modelo

El modelo falla si el [[estimador_montecarlo]] cambia sistemáticamente al duplicar [[numero_muestras]], si [[error_estandar]] no decrece, si la [[varianza_muestral]] crece por eventos raros dominantes o si distintas semillas producen resultados incompatibles. También hay alarma si [[probabilidad_aceptacion]] permanece extrema o si los [[peso_muestra]] concentran casi todo el promedio en unas pocas muestras.

## Modelo extendido o alternativo

Cuando el muestreo uniforme es ineficiente conviene usar importancia estadística, Metropolis, cadenas de Markov, estratificación o técnicas de reducción de varianza. Si las muestras están correlacionadas, se estima un tamaño efectivo menor que [[numero_muestras]]. Si el observable depende mucho de estados raros, el promedio ponderado con [[peso_muestra]] puede sustituir al promedio simple. Todas estas variantes comparten la estructura diagnóstica de [[estimador_montecarlo]], [[varianza_muestral]] y [[error_estandar]].


Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.
## Comparación operativa

| Enfoque | Uso adecuado | Riesgo principal |
| Promedio simple | Muestras equivalentes | Ignorar [[varianza_muestral]] |
| Promedio ponderado | Pesos no uniformes | Normalizar mal [[peso_muestra]] |
| Metropolis | Distribuciones térmicas | Mala [[probabilidad_aceptacion]] |
| Más muestras | Reducir [[error_estandar]] | No corregir sesgo |