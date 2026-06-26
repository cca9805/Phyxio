# Aplicaciones: Poleas compuestas

## 1. Grúas de construcción

Las grúas torre y móviles utilizan sistemas de poleas compuestas para levantar materiales de construcción pesados.

**Descripción:**
El mecanismo de elevación de una grúa típica emplea 4 a 8 tramos de cuerda para reducir la fuerza requerida en el cabrestante. Una carga de 2000 kg puede ser elevada con una fuerza de tracción de 300-400 N en el cable del cabrestante. El sistema de poleas permite que motores eléctricos relativamente pequeños muevan cargas masivas que de otro modo requerirían equipos mucho más grandes y costosos. La configuración típica incluye poleas fijas en la parte superior de la torre y poleas móviles suspendidas del gancho de carga.

**Magnitudes típicas:**
- [[W]]: 10 000 N a 50 000 N (cargas de 1 a 5 toneladas)
- [[nSel]]: 4 a 8 tramos en configuraciones estándar
- [[eta]]: 0.85 a 0.95 en equipos bien mantenidos
- [[F_real]]: 1500 N a 6000 N en el cabrestante

**Variable dominante:** El número de tramos [[nSel]] determina la capacidad de carga máxima para una potencia de motor dada.

**Límite de validez:** Cuando la altura de elevación supera 100 m, el peso propio del cable se vuelve significativo y debe incluirse en los cálculos.

## 2. Aparejos náuticos

Los veleros utilizan sistemas de poleas (llamados " aparejos") para multiplicar la fuerza sobre las velas y ajustar su posición.

**Descripción:**
Un winch o cabrestante de velero combina poleas fijas en el mástil con poleas móviles en la vela para permitir que una o dos personas controlen velas de gran superficie (50-100 m²) que experimentan fuerzas de viento de miles de newtons. Los sistemas de aparejo permiten ajustar la tensión de las velas con precisión, optimizando la propulsión del barco según las condiciones del viento. El diseño náutico ha perfeccionado estos sistemas durante siglos, buscando el equilibrio entre complejidad mecánica y facilidad de operación en condiciones marinas adversas.

**Magnitudes típicas:**
- [[W]]: Fuerza del viento sobre la vela, 2000 N a 10 000 N
- [[nSel]]: 2 a 6 tramos según el tamaño del velero
- [[eta]]: 0.80 a 0.90 debido a exposición a salitre y desgaste
- [[F_real]]: 400 N a 2000 N en el cabrestante

**Variable dominante:** La eficiencia [[eta]] es crítica porque el mantenimiento en ambiente marino es difícil.

**Límite de validez:** Sistemas con más de 6 tramos se vuelven imprácticos por acumulación de cuerda y pérdidas de fricción.

## 3. Equipos de rescate y evacuación

Los bomberos y equipos de rescate en montaña emplean polipastos portátiles para evacuación vertical.

**Descripción:**
Un kit de rescate típico incluye poleas móviles y cuerda de alta resistencia para crear sistemas de 4-6 tramos que permiten a un rescatista elevar o descender una víctima sin ayuda adicional. La carga incluye el peso del herido más el arnés y equipo de seguridad. Los sistemas portátiles están diseñados para montaje rápido en condiciones de emergencia, permitiendo evacuaciones verticales desde grietas, barrancos o edificios. La ligereza del equipo es crucial, ya que los rescatistas deben transportarlo hasta el lugar de la emergencia a través de terreno difícil.

**Magnitudes típicas:**
- [[W]]: 800 N a 1500 N (persona de 80-150 kg con equipo)
- [[nSel]]: 4 a 6 tramos
- [[eta]]: 0.85 a 0.95 (equipos de aluminio ligeros)
- [[F_real]]: 150 N a 300 N (manejable para un rescatista)

**Variable dominante:** La relación entre [[W]] y [[F_real]] determina si un solo rescatista puede operar el sistema.

**Límite de validez:** Emergencias donde el tiempo es crítico (< 5 minutos), ya que configurar el sistema requiere varios minutos.

## 4. Elevación de escenarios teatrales

Los teatros de ópera y conciertos utilizan sistemas de poleas compuestas para mover decorados pesados y cambiar escenarios.

**Descripción:**
Los sistemas de "contras" permiten que técnicos de escenario eleven elementos decorativos de toneladas de peso desde el piso hasta 20-30 m de altura. Un sistema típico tiene 6-10 tramos para permitir operación manual segura.

**Magnitudes típicas:**
- [[W]]: 5000 N a 30 000 N (500 kg a 3 toneladas de decorado)
- [[nSel]]: 6 a 10 tramos
- [[eta]]: 0.75 a 0.90 (sistemas con poleas de gran diámetro)
- [[F_real]]: 600 N a 4000 N

**Variable dominante:** El número de tramos [[nSel]] determina la velocidad de elevación (inversamente proporcional).

**Límite de validez:** Cambios de escenario deben completarse en < 2 minutos, lo que limita la ventaja mecánica máxima práctica.

## 5. Industria minera y extracción

Las operaciones de minería superficial utilizan sistemas de cable para transportar mineral en terrenos accidentados.

**Descripción:**
Los "cableways" o vías de cable transportan mineral desde la mina hasta plantas de procesamiento atravesando valles. Los sistemas de tracción emplean poleas compuestas para mover cargas de decenas de toneladas con motores de potencia moderada.

**Magnitudes típicas:**
- [[W]]: 50 000 N a 200 000 N (5 a 20 toneladas)
- [[nSel]]: 4 a 8 tramos en cabrestantes principales
- [[eta]]: 0.70 a 0.85 (ambiente polvoriento y pesadas cargas)
- [[F_real]]: 7500 N a 70 000 N (requiere motorización)

**Variable dominante:** La eficiencia [[eta]] es crítica porque las pérdidas se traducen en costos energéticos significativos a escala industrial.

**Límite de validez:** Distancias mayores a 1 km requieren compensadores de tensión de cable debido a expansión térmica y elasticidad.
