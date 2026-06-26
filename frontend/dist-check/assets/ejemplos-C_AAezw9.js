const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
En una vivienda unifamiliar de construcción tradicional, el sistema de calefacción original consiste en radiadores eléctricos de efecto Joule. Durante una temporada invernal típica de 150 días, el equipo registra un [[consumo eléctrico estacional|E_est]] de 5000 kWh. Dado que estos sistemas transforman la electricidad en calor con una eficiencia cercana a la unidad, podemos asumir que la [[demanda térmica estacional|Q_est]] de la vivienda es también de 5000 kWh. El propietario decide realizar una mejora integral en dos etapas para alcanzar un estándar de alta eficiencia energética: primero, la instalación de ventanas de triple vidrio que reduce la [[Q_est]] en un 25% y, segundo, la sustitución de radiadores por una bomba de calor con un [[SCOP]] medio de 3.5. Se solicita calcular el [[nuevo]] consumo [[E_est]] y determinar el [[ahorro energético porcentual|Ahorro_pct]] global del sistema tras la intervención.\r
\r
## Datos\r
- [[consumo base|E_base]] ([[E_est]] inicial): 5000 kWh eléctricos iniciales.\r
- [[demanda térmica base|Q_est]]: 5000 kWh térmicos (por [[SCOP]] = 1 en radiadores).\r
- Reducción de demanda pasiva: 25% (mejoras en la envolvente).\r
- Rendimiento estacional [[nuevo]] ([[SCOP]]): 3.5 (bomba de calor).\r
\r
## Definición del sistema\r
El sistema físico bajo estudio es la envolvente térmica de la vivienda y el generador térmico acoplado. Se considera un sistema cerrado desde el punto de vista del balance de masa, pero abierto al flujo de energía térmica que se pierde por las paredes y ventanas, y al flujo de energía eléctrica que alimenta el compresor de la aerotermia.\r
\r
## Modelo físico\r
Se utiliza el modelo de balance estacional estacionario. Se asume que la vivienda se comporta como un sistema térmico con pérdidas lineales compensadas por una fuente de calor (generador) cuyo rendimiento se mide mediante el [[SCOP]]. La [[demanda térmica|Q_est]] se considera constante a lo largo de la temporada invernal para promediar el flujo de energía. No se consideran aportes internos gratuitos por ocupación o electrodomésticos para simplificar el cálculo inicial del [[consumo eléctrico|E_est]].\r
\r
## Justificación del modelo\r
El uso de este modelo es adecuado porque el análisis cubre una temporada completa de 150 días, lo que permite promediar las fluctuaciones horarias de temperatura, viento y radiación solar, centrándose exclusivamente en el flujo de energía neto acumulado que determina la factura energética final del hogar.\r
\r
## Resolución simbólica\r
Para resolver este problema, determinamos primero la nueva demanda térmica proyectada tras la mejora pasiva de aislamiento. La nueva demanda es igual a la demanda térmica [[base]] multiplicada por el factor de reducción de tres cuartas partes (0.75). Este paso es crucial para entender que la eficiencia de la máquina actúa sobre una carga menor.\r
\r
Posteriormente, aplicamos la definición de [[SCOP]] para encontrar el [[nuevo]] consumo eléctrico necesario para cubrir esa carga:\r
\r
{{f:consumo_estacional}}\r
\r
Finalmente, evaluamos el ahorro relativo comparando los dos estados energéticos mediante la fórmula de ahorro porcentual estándar:\r
\r
{{f:ahorro_porcentual}}\r
\r
Para completar el análisis económico básico, se puede proyectar el coste estacional si se conoce el precio de la energía:\r
\r
{{f:facturacion_estacional}}\r
\r
## Sustitución numérica\r
1. Nueva demanda térmica: 5000 kWh * 0.75 = 3750 kWh térmicos.\r
2. Nuevo consumo eléctrico: 3750 kWh / 3.5 = 1071.43 kWh eléctricos.\r
3. Ahorro porcentual energético: 100 * (1 - 1071.43 / 5000) = 78.57%.\r
4. Coste proyectado (a 0.22 EUR/kWh): 1071.43 * 0.22 = 235.71 EUR.\r
\r
## Validación dimensional\r
La fórmula de consumo estacional divide una cantidad de energía (kWh térmicos) entre un coeficiente adimensional, resultando en energía (kWh eléctricos), lo cual es dimensionalmente coherente. El ahorro porcentual es una razón de dos energías, por lo que resulta en un valor porcentual puro, sin unidades físicas, como se esperaba en el análisis técnico.\r
\r
## Interpretación física\r
El ahorro conseguido supera el 78%. Es fundamental notar que el ahorro total no es la simple suma de las mejoras (25% + ahorro por cambio de máquina), sino un efecto multiplicativo y sinérgico. Al reducir la demanda térmica de la casa, la bomba de calor no solo tiene menos trabajo, sino que cada unidad de energía que inyecta lo hace con una eficiencia muy superior a la tecnología resistiva anterior. Esta sinergia demuestra que la rehabilitación de edificios es tan importante como la eficiencia de las máquinas instaladas. Además, al reducir el consumo, se disminuye la dependencia de la red eléctrica, aportando robustez al sistema energético nacional.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Análisis de rentabilidad y resiliencia ante una crisis de precios en el mercado mayorista. Una familia invierte 6000 EUR en las mejoras del ejemplo anterior para blindarse ante la inflación. Se busca comparar el periodo de retorno de la inversión si el [[precio_medio]] de la energía es de 0.22 EUR/kWh frente a un escenario de crisis energética donde el precio sube a 0.396 EUR/kWh.\r
\r
## Estimación física\r
- Inversión inicial total: 6000 EUR.\r
- [[E_base]] (escenario Joule): 5000 kWh.\r
- [[E_nuevo]] (escenario bomba de calor + aislamiento): 1071.43 kWh.\r
- Ahorro anual en mercado estable: 864.29 EUR cada temporada.\r
- Ahorro anual en mercado de crisis: 1555.71 EUR cada temporada.\r
- [[Coste anual final|C_est]]: aproximadamente 235 EUR frente a los 1100 EUR que pagaban antes de la intervención.\r
\r
## Interpretación\r
La eficiencia energética reduce drásticamente la exposición económica de las familias a la volatilidad de los precios internacionales de la energía. En periodos de crisis, la amortización de las medidas de ahorro se acelera significativamente, casi duplicando su velocidad de retorno, lo que convierte la inversión en eficiencia en un escudo financiero crítico. Además, un sistema eficiente garantiza que, incluso con precios elevados, el [[coste económico estacional|C_est]] final del confort térmico sea manejable, evitando situaciones de pobreza energética. La reducción del consumo de 5000 kWh a apenas poco más de 1000 kWh supone una liberación de recursos financieros que la familia puede dedicar a otros fines, mejorando su calidad de vida global y su resiliencia ante futuros choques externos.\r
`;export{e as default};
