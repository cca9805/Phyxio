## Modelo ideal

El **modelo de condensador ideal** describe un dispositivo con dos armaduras conductoras planas paralelas de área [[capacidad_geometrica_del_condensador_plano]] efectiva uniforme, separadas por un dieléctrico perfectamente lineal, homogéneo e isotrópico, sin pérdidas ni corriente de fuga. En este modelo, la relación entre [[carga_almacenada]], [[capacidad_electrica]] y [[diferencia_de_potencial]] es exactamente lineal, y la energía almacenada [[energia_almacenada_en_el_condensador]] responde a la fórmula con el factor 1/2, sin pérdidas en ninguna etapa del ciclo de carga y descarga.

El modelo conserva las magnitudes [[capacidad_electrica]], [[carga_almacenada]], [[diferencia_de_potencial]] y [[energia_almacenada_en_el_condensador]] en su forma más simple. Ignora la resistencia parásita en serie (ESR), la inductancia parásita (ESL), las corrientes de fuga a través del dieléctrico, la variación de la permitividad [[epsilon]] con el campo eléctrico y la temperatura, y los efectos de borde en los extremos de las armaduras.

## Hipótesis

- **Campo eléctrico uniforme entre armaduras**: requiere que la separación d sea mucho menor que las dimensiones laterales de las placas (\(d \ll \sqrt{A}\)). Si se viola, el campo en los bordes no es uniforme y la capacidad real es ligeramente mayor que la calculada con la fórmula de [[capacidad_geometrica_del_condensador_plano]] a partir de [[epsilon]], el área y la separación.
- **Dieléctrico lineal e isotrópico**: la polarización es proporcional al campo eléctrico en todas las direcciones. Si se viola (materiales ferroeléctricos, cerámicas PZT), la capacidad depende de la tensión aplicada y la relación entre [[carga_almacenada]] y [[diferencia_de_potencial]] no es lineal.
- **Sin pérdidas dieléctricas**: factor de disipación nulo. Si se viola, parte de la energía almacenada se convierte en calor en cada ciclo; la fórmula de energía almacenada sobreestima la energía recuperable.
- **Sin resistencia en serie ni inductancia parásita**: resistencia serie equivalente e inductancia serie ambas despreciables. Si se viola, el condensador no se comporta como capacidad pura a altas frecuencias y la impedancia real no es puramente reactiva.
- **Tensión por debajo de la tensión de ruptura**: [[diferencia_de_potencial]] debe permanecer por debajo del umbral de ruptura del dieléctrico. Si se viola, el dieléctrico conduce y el condensador queda destruido de forma irreversible.

## Dominio de validez cuantitativo

El modelo ideal es una aproximación razonable cuando se cumplen simultáneamente:

- **Relación geométrica**: la separación debe ser al menos 10 veces menor que la raíz del área de la armadura, es decir \(d \ll \sqrt{A}\).
- **Frecuencia baja**: la frecuencia de operación debe ser mucho menor que la frecuencia de autorresonancia \(f_r\). Para condensadores cerámicos típicos, \(f_r\) está entre 1 y 500 MHz; para electrolíticos, entre 10 y 100 kHz.
- **Temperatura en rango nominal**: entre −40°C y +85°C para la mayoría de condensadores industriales. Fuera de este rango la permitividad puede variar hasta un ±20%.
- **Tensión de servicio**: operar por debajo del 50% de la tensión de ruptura para un margen de seguridad adecuado frente a picos transitorios.

## Señales de fallo del modelo

- **No linealidad de Q vs V**: si al representar [[carga_almacenada]] frente a [[diferencia_de_potencial]] el conjunto de puntos no cae sobre una recta, el modelo lineal ya no aplica. Indica que la permitividad [[epsilon]] del dieléctrico depende del campo (cerámica no lineal o material ferroelectrico).
- **Calentamiento del condensador en funcionamiento**: si el condensador se calienta apreciablemente durante la carga y descarga repetidas, las pérdidas dieléctricas (tanδ > 0) no son despreciables. El modelo ideal no predice este calentamiento.
- **Capacidad dependiente de la frecuencia**: si [[capacidad_electrica]] medida con un puente LCR disminuye significativamente al subir la frecuencia, la inductancia parásita ESL es relevante y el modelo ideal ya no es suficiente.
- **Corriente de fuga medible**: si el condensador descargado mediante una resistencia muy alta sigue cediendo corriente detectable, hay corriente de fuga a través del dieléctrico (modelo ideal la supone nula).

## Modelo extendido o alternativo

El **modelo equivalente series RLC** añade al condensador ideal una resistencia en serie equivalente y una inductancia en serie. La impedancia resultante tiene módulo mínimo en la frecuencia de autorresonancia \(f_r\) y crece por encima de ella. Por encima de \(f_r\), la inductancia domina y el componente se comporta como un inductor, no como un condensador.

El modelo también puede extenderse para incluir una resistencia de fuga en paralelo \(R_p\) que modela la corriente de fuga del dieléctrico. Para condensadores electrolíticos con alto tanδ, este elemento es necesario para predecir correctamente la pérdida de carga en circuitos de retención de tensión a largo plazo.

La **transición al modelo extendido conviene cuando** la frecuencia de operación supera el 10% de la frecuencia de autorresonancia del componente, cuando el calentamiento del condensador en uso es medible, o cuando la corriente de fuga no es despreciable frente a la corriente de carga (condensadores electrolíticos viejos o degradados). En aplicaciones de filtrado de alta frecuencia (> 1 MHz), pasar al modelo RLC es obligatorio para predecir correctamente la atenuación del filtro.

## Comparación operativa

| Criterio | Modelo ideal | Modelo RLC extendido |
|---|---|---|
| **Relación Q–V** | Lineal exacta entre carga y tensión | Lineal solo a baja frecuencia |
| **Energía recuperable** | 100% de la energía almacenada | Menor por pérdidas en resistencia serie y factor de disipación |
| **Impedancia** | Puramente reactiva, decrece con la frecuencia | Mínimo en \(f_r\); inductiva por encima |
| **Temperatura** | Sin efecto sobre C | C puede variar ±5–20% según material |
| **Corriente de fuga** | Nula | Modelada por R_p en paralelo |
| **Complejidad de uso** | Mínima, una ecuación | Requiere hoja de datos del fabricante |
| **Rango válido** | CC hasta ~10% de f_r | Todo el rango incluyendo alta frecuencia |