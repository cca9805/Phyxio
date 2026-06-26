## Modelo ideal

El modelo ideal del transformador describe un dispositivo con dos devanados acoplados perfectamente a través de un núcleo ferromagnético de permeabilidad infinita. En este modelo, todo el flujo magnético generado por el primario enlaza completamente con el secundario, sin fugas. Las tensiones siguen directamente la relación de espiras [[numero_de_espiras_primario]]/[[numero_de_espiras_secundario]], mientras que las corrientes siguen la relación inversa.

En el modelo ideal, la potencia aparente se conserva entre primario y secundario. No existen pérdidas ni caídas de tensión internas. El rendimiento [[eta]] toma su valor máximo ideal, y las pérdidas [[perdidas_totales]] son nulas. Este modelo es la base conceptual para el análisis de transformadores y permite cálculos rápidos de primera aproximación.

## Hipótesis

El modelo ideal se basa en las siguientes hipótesis simplificadoras. El acoplamiento magnético entre devanados es perfecto, sin dispersión de flujo. El núcleo tiene permeabilidad magnética infinita, requiriendo corriente de magnetización despreciable. Las resistencias de los devanados son cero, por lo que no hay caída de tensión resistiva ni pérdidas por efecto Joule. No existen pérdidas en el hierro por histéresis ni corrientes de Foucault. El transformador opera en régimen estacionario sinusoidal.

## Dominio de validez cuantitativo

El modelo ideal es válido cuando el transformador opera cerca de su punto nominal con cargas lineales. Cuantitativamente, el error del modelo ideal es menor del 5% cuando la corriente de carga está entre el 25% y el 100% de la nominal. Para transformadores de potencia modernos con rendimiento superior al 98%, el modelo ideal proporciona resultados con error inferior al 2% en el cálculo de tensiones. La potencia aparente debe mantenerse dentro del 95% a 100% del valor nominal [[potencia_aparente]] para mantener la precisión del modelo.

## Señales de fallo del modelo

El modelo ideal deja de ser fiable en las siguientes situaciones. En vacío, el modelo predice corriente primaria nula, pero en realidad circula la corriente de magnetización que puede representar entre el 2% y el 10% de la nominal. Bajo cortocircuito, el modelo predice corriente infinita, mientras que en realidad la impedancia interna limita la corriente a un valor finito típicamente entre 10 y 20 veces la nominal. A plena carga, el modelo no predice la caída de tensión interna típicamente del 2% al 5%. Cuando la tensión aplicada excede el 110% de la nominal, la saturación del núcleo hace que las relaciones lineales dejen de cumplirse.

## Modelo extendido o alternativo

Existen extensiones progresivas para corregir las limitaciones del modelo ideal. La transición a un modelo extendido se recomienda cuando las condiciones de operación exceden los límites de validez cuantitativos del modelo ideal, o cuando la aplicación requiere precisión superior a la que puede proporcionar la aproximación lineal.

Cuando conviene pasar al modelo extendido: cuando los datos experimentales difieren del modelo ideal en más del 5 por ciento; cuando se requiere modelar la caída de tensión bajo carga, pasar al modelo con resistencias de devanado; cuando se necesita precisión en el cálculo de rendimiento a cargas parciales, cambiar al modelo con pérdidas separadas en cobre e hierro.

El modelo con resistencias de devanado incluye la resistencia eléctrica del primario y del secundario como parámetros internos no tratados por la calculadora básica del leaf. Esto permite calcular las caídas de tensión resistivas y las pérdidas de cobre [[perdidas_en_cobre]] con precisión. La corriente de carga ahora produce una reducción medible de [[tension_secundaria]] respecto al valor ideal.

El modelo con pérdidas magnéticas separa las pérdidas en hierro [[perdidas_en_hierro]], consideradas aproximadamente constantes a tensión fija, de las pérdidas en cobre [[perdidas_en_cobre]], que varían con el cuadrado de la corriente. Este modelo permite predecir el rendimiento máximo típicamente al 50-75% de carga.

El modelo completo con impedancia de dispersión incluye la reactancia de dispersión debida al flujo que no enlaza ambos devanados. Es necesario para calcular la regulación de tensión exacta y la corriente de cortocircuito. Este modelo es esencial para el diseño de transformadores de potencia y para el análisis de cortocircuitos en redes eléctricas.

## Comparación operativa

El modelo ideal es suficiente para cálculos de estimación rápida, selección preliminar de transformadores y análisis de principios básicos de operación. Proporciona resultados con error menor al 5% para transformadores de alta calidad operando entre el 75% y el 100% de carga nominal.

La transición al modelo con pérdidas separadas es necesaria cuando se requiere calcular el rendimiento con precisión superior al 1%, cuando se debe determinar el punto de máxima eficiencia, o cuando el transformador opera frecuentemente a cargas parciales. Este modelo es el estándar para especificaciones comerciales y hojas de datos de fabricantes.

El modelo completo con impedancia de dispersión es indispensable para cálculos de cortocircuito, coordinación de protecciones, análisis de regulación de tensión y diseño de transformadores de gran potencia. La transición a este modelo se justifica cuando el error del modelo extendido supera el 2% o cuando se requiere predecir el comportamiento en condiciones de fallo.