const a=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un calorimetro metalico tiene capacidad calorifica conocida [[C]] = 120 J/K. Contiene 250 g de agua. Una resistencia electrica entrega 40 W durante 90 sí y la temperatura del conjunto sube de 20 C a 23.1 C. Estimar la capacidad calorifica total del sistema y comprobar si el dato del calorimetro es relevante.\r
\r
## Datos\r
\r
- Capacidad calorifica del calorimetro: [[C]] = 120 J/K.\r
- Masa de agua: 0.250 kg.\r
- Calor específico del agua: 4186 J/(kg K).\r
- Potencia electrica: 40 W.\r
- Tiempo de calentamiento: 90 s.\r
- Variación medida: [[DeltaT]] = 3.1 K.\r
\r
## Definición del sistema\r
\r
El sistema es agua más calorimetro. La resistencia entrega energía al conjunto y se supone que las perdidas al exterior son pequeñas durante el intervalo. La magnitud que decide el cambio de temperatura no es solo la del agua, sino la capacidad calorifica total del conjunto.\r
\r
## Modelo físico\r
\r
El modelo es de calor sensible. No hay cambio de estado y el rango de temperatura es pequeño, por lo que [[C]] puede tratarse como constante. La energía electrica se transforma en calor [[Q]] y se reparte entre agua y recipiente.\r
\r
## Justificacion del modelo\r
\r
La subida de temperatura es moderada y el agua permanece liquida. La resistencia esta dentro del sistema, de modo que su trabajo electrico se interpreta como calor recibido por el conjunto. Como el calorimetro tiene [[C]] comparable con una fraccion apreciable del agua, no debe omitirse.\r
\r
La eleccion de sistema también evita una ambiguedad experimental: si se mirara solo el agua, parte de la energía suministrada pareceria perdida, aunque en realidad calienta el recipiente. El intervalo de 3.1 K es pequeño, así que no hace falta introducir variación de [[C]] con la temperatura. Además, el tiempo de calentamiento es corto frente al tiempo de enfriamiento del montaje, por lo que las perdidas al aire se tratan como correccion secundaria y no como mecanismo dominante.\r
\r
El modelo queda anclado al leaf porque la pregunta no es el calor específico del agua, sino la capacidad calorifica efectiva del sistema completo. La magnitud observada es [[DeltaT]], la entrada energética es [[Q]] y la respuesta buscada es [[C]]. Si la respuesta calculada reproduce la subida medida, el modelo de capacidad calorifica constante queda validado para ese intervalo.\r
\r
## Resolucion simbolica\r
\r
La definición operacional del leaf es:\r
\r
{{f:definicion_capacidad_calorifica}}\r
\r
Para relacionar la capacidad del agua con su masa y material se usa:\r
\r
{{f:capacidad_calorifica_desde_especifico}}\r
\r
La capacidad total del sistema se obtiene sumando la capacidad del agua y la del calorimetro. Despues se compara el calor entregado con el producto entre capacidad total y variación de temperatura. Si ambos valores son cercanos, el modelo es coherente.\r
\r
## Sustitucion numerica\r
\r
La energía electrica entregada es 3600 J. La capacidad calorifica del agua es 0.250 por 4186, es decir 1046.5 J/K. Sumando el calorimetro, la capacidad total del sistema es 1166.5 J/K.\r
\r
Con una subida de 3.1 K, el calor esperado por el modelo es 1166.5 por 3.1, aproximadamente 3616 J. La diferencia frente a los 3600 J suministrados es menor que el uno por ciento, compatible con redondeo y perdidas pequeñas.\r
\r
## Validacion dimensional\r
\r
[[C]] esta en J/K y [[DeltaT]] en K, por lo que [[Q]] queda en J. El resultado también es físicamente razonable: el calorimetro representa algo más del diez por ciento de la capacidad del agua, así que ignorarlo produciria un error visible en la temperatura calculada.\r
\r
## Interpretacion física\r
\r
El agua domina la respuesta térmica, pero el recipiente no es irrelevante. La capacidad total es mayor que la del agua sola, por lo que el mismo calor produce un cambio de temperatura menor. Esta es precisamente la lectura de [[C]]: mayor capacidad calorifica significa mayor amortiguacion térmica.\r
\r
Si se ignorara el calorimetro, la capacidad usada seria 1046.5 J/K y la misma energía produciria una subida prevista de unos 3.44 K. La medida real es 3.1 K, menor porque el recipiente también absorbe energía. La diferencia no es ruido: es la huella cuantitativa de una capacidad calorifica adicional.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un reactor alimentario contiene 30 kg de producto liquido en una camisa metalica cuya capacidad calorifica efectiva es 18000 J/K. El producto se debe calentar desde 20 C hasta 65 C en media hora. Se quiere estimar la potencia mínima del sistema de calentamiento antes de considerar perdidas.\r
\r
## Estimacion física\r
\r
La capacidad calorifica del contenido se estima a partir de su masa y un calor específico cercano al del agua, 3900 J/(kg K). Eso da una capacidad del contenido de 117000 J/K. Al sumar la camisa metalica, la capacidad total efectiva asciende a 135000 J/K.\r
\r
El cambio de temperatura requerido es [[DeltaT]] = 45 K. La energía sensible necesaria se estima multiplicando la capacidad total por ese cambio de temperatura: aproximadamente 6.08 MJ. Repartida en 1800 s, la potencia mínima media es unos 3.4 kW.\r
\r
La estimacion es una lectura de primer diseño: no pretende describir perfiles internos, agitacion ni perdidas. Sirve para fijar la escala mínima. Si el equipo instalado entregara solo 1 kW, incluso sin perdidas tardaria unas tres veces más. Si entregara 6 kW, habria margen para compensar transferencia imperfecta, tuberias frias y apertura de valvulas.\r
\r
## Interpretacion\r
\r
La lectura cuantitativa muestra que la pared del reactor añade cerca del quince por ciento a la energía que habria que suministrar si solo se calentara el producto. En un diseño real se añade margen por perdidas y por transferencia imperfecta, pero el primer control de escala lo da [[C]]: cuanto mayor es la capacidad calorifica total, más lenta o más potente debe ser la etapa de calentamiento.\r
\r
El resultado también muestra por que dos lotes con la misma temperatura objetivo pueden exigir potencias distintas. Cambiar la masa de producto, el material de la camisa o la cantidad de liquido modifica [[C]] y, por tanto, el calor requerido para el mismo [[DeltaT]]. En operación industrial, esa lectura evita confundir una consigna de temperatura con una necesidad energética.\r
`;export{a as default};
