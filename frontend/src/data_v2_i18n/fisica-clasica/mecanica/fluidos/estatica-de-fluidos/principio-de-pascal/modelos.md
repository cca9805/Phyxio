# Principio de Pascal - Modelo y validez

## Modelo ideal
El modelo ideal de Pascal trata al fluido como un cable de transmisión de fuerza perfectamente rígido e instantáneo. Se basa en la premisa física de que el fluido es una sustancia continua, isótropa e incompresible que no puede almacenar energía elástica en su volumen. Esta idealización permite que el trabajo de compresión realizado en un émbolo de entrada se transfiera íntegramente al émbolo de salida sin ninguna pérdida de energía interna significativa. En este escenario, la presión se comporta como una variable de estado escalar que se distribuye de manera uniforme por todo el dominio del fluido confinado, actuando instantáneamente sobre las fronteras del sistema.

## Hipótesis
- **Fluido perfectamente incompresible**: Se asume que la densidad rho es constante e independiente de la presión aplicada.
- **Ausencia de efectos viscosos**: No existe fricción interna ni adherencia en las paredes que cause caídas de presión dinámicas.
- **Confinamiento indeformable**: Las paredes del recipiente, mangueras y cilindros son infinitamente rígidas y no se expanden bajo carga.
- **Régimen estático puro**: Se desprecia cualquier efecto de inercia o energía cinética del fluido en movimiento.
- **Comunicación continua**: No existen burbujas de aire ni obstrucciones en las líneas de transmisión.

## Dominio de validez cuantitativo
Para que el Principio de Pascal sea una herramienta de ingeniería precisa y no solo una aproximación cualitativa, deben cumplirse rigurosamente los siguientes criterios técnicos:
- **Criterio de Incompresibilidad**: El módulo de compresibilidad volumétrica B del fluido debe ser al menos 1000 veces mayor que la presión hidrostática máxima del sistema (B gg p). Para el aceite hidráulico estándar, B approx 1,5text{ GPa}, lo que permite operar hasta presiones de 1,5text{ MPa} con un error menor al 0.1%.
- **Criterio de Velocidad**: Si el fluido se mueve, el Número de Reynolds (Re) debe ser tal que las pérdidas de carga por fricción Delta p sean menores al 1% de la presión de trabajo. Esto suele requerir flujos laminares en todas las válvulas y conductos.
- **Criterio de Rigidez Estructural**: El módulo de Young de las paredes del contenedor debe ser órdenes de magnitud superior al del fluido para garantizar que el confinamiento sea efectivo.

## Señales de fallo del modelo
- **Respuesta elástica o "esponjosa"**: El émbolo de salida no se mueve inmediatamente o rebota al aplicar carga. Esto suele deberse a la presencia de gases disueltos o burbujas que invalidan la hipótesis de incompresibilidad.
- **Calentamiento del fluido**: Si el sistema se calienta durante la operación, indica que el trabajo mecánico se está disipando en forma de calor debido a la viscosidad, rompiendo la hipótesis de balance de trabajo ideal.
- **Pérdida de presión en reposo**: Fallo en los sellos.

## Modelo extendido o alternativo
En aplicaciones de alta presión (aerospacial o minería profunda), el modelo de Pascal se queda corto y debe transicionar a la **Hidromecánica Real**.
- **Qué cambia**: Se introduce el coeficiente de compresibilidad adiabático y la elasticidad de las mangueras (efecto capacitivo).
- **Alternativa**: Ecuaciones de Navier-Stokes para el análisis del flujo transitorio y modelos de elementos finitos para la interacción fluido-estructura (FSI).

## Comparación operativa
Mientras que el modelo de Pascal es perfecto para el dimensionamiento básico de gatos y prensas, los modelos extendidos son obligatorios para diseñar sistemas de control de vuelo por cable (fly-by-wire) donde la latencia de la onda de presión y la deformación del aceite son críticas para la seguridad.


