# Ejemplo tipo examen

## Enunciado

Un calorimetro metalico tiene capacidad calorifica conocida [[C]] = 120 J/K. Contiene 250 g de agua. Una resistencia electrica entrega 40 W durante 90 sí y la temperatura del conjunto sube de 20 C a 23.1 C. Estimar la capacidad calorifica total del sistema y comprobar si el dato del calorimetro es relevante.

## Datos

- Capacidad calorifica del calorimetro: [[C]] = 120 J/K.
- Masa de agua: 0.250 kg.
- Calor específico del agua: 4186 J/(kg K).
- Potencia electrica: 40 W.
- Tiempo de calentamiento: 90 s.
- Variación medida: [[DeltaT]] = 3.1 K.

## Definición del sistema

El sistema es agua más calorimetro. La resistencia entrega energía al conjunto y se supone que las perdidas al exterior son pequeñas durante el intervalo. La magnitud que decide el cambio de temperatura no es solo la del agua, sino la capacidad calorifica total del conjunto.

## Modelo físico

El modelo es de calor sensible. No hay cambio de estado y el rango de temperatura es pequeño, por lo que [[C]] puede tratarse como constante. La energía electrica se transforma en calor [[Q]] y se reparte entre agua y recipiente.

## Justificacion del modelo

La subida de temperatura es moderada y el agua permanece liquida. La resistencia esta dentro del sistema, de modo que su trabajo electrico se interpreta como calor recibido por el conjunto. Como el calorimetro tiene [[C]] comparable con una fraccion apreciable del agua, no debe omitirse.

La eleccion de sistema también evita una ambiguedad experimental: si se mirara solo el agua, parte de la energía suministrada pareceria perdida, aunque en realidad calienta el recipiente. El intervalo de 3.1 K es pequeño, así que no hace falta introducir variación de [[C]] con la temperatura. Además, el tiempo de calentamiento es corto frente al tiempo de enfriamiento del montaje, por lo que las perdidas al aire se tratan como correccion secundaria y no como mecanismo dominante.

El modelo queda anclado al leaf porque la pregunta no es el calor específico del agua, sino la capacidad calorifica efectiva del sistema completo. La magnitud observada es [[DeltaT]], la entrada energética es [[Q]] y la respuesta buscada es [[C]]. Si la respuesta calculada reproduce la subida medida, el modelo de capacidad calorifica constante queda validado para ese intervalo.

## Resolucion simbolica

La definición operacional del leaf es:

{{f:definicion_capacidad_calorifica}}

Para relacionar la capacidad del agua con su masa y material se usa:

{{f:capacidad_calorifica_desde_especifico}}

La capacidad total del sistema se obtiene sumando la capacidad del agua y la del calorimetro. Despues se compara el calor entregado con el producto entre capacidad total y variación de temperatura. Si ambos valores son cercanos, el modelo es coherente.

## Sustitucion numerica

La energía electrica entregada es 3600 J. La capacidad calorifica del agua es 0.250 por 4186, es decir 1046.5 J/K. Sumando el calorimetro, la capacidad total del sistema es 1166.5 J/K.

Con una subida de 3.1 K, el calor esperado por el modelo es 1166.5 por 3.1, aproximadamente 3616 J. La diferencia frente a los 3600 J suministrados es menor que el uno por ciento, compatible con redondeo y perdidas pequeñas.

## Validacion dimensional

[[C]] esta en J/K y [[DeltaT]] en K, por lo que [[Q]] queda en J. El resultado también es físicamente razonable: el calorimetro representa algo más del diez por ciento de la capacidad del agua, así que ignorarlo produciria un error visible en la temperatura calculada.

## Interpretacion física

El agua domina la respuesta térmica, pero el recipiente no es irrelevante. La capacidad total es mayor que la del agua sola, por lo que el mismo calor produce un cambio de temperatura menor. Esta es precisamente la lectura de [[C]]: mayor capacidad calorifica significa mayor amortiguacion térmica.

Si se ignorara el calorimetro, la capacidad usada seria 1046.5 J/K y la misma energía produciria una subida prevista de unos 3.44 K. La medida real es 3.1 K, menor porque el recipiente también absorbe energía. La diferencia no es ruido: es la huella cuantitativa de una capacidad calorifica adicional.

---

# Ejemplo de aplicación real

## Contexto

Un reactor alimentario contiene 30 kg de producto liquido en una camisa metalica cuya capacidad calorifica efectiva es 18000 J/K. El producto se debe calentar desde 20 C hasta 65 C en media hora. Se quiere estimar la potencia mínima del sistema de calentamiento antes de considerar perdidas.

## Estimacion física

La capacidad calorifica del contenido se estima a partir de su masa y un calor específico cercano al del agua, 3900 J/(kg K). Eso da una capacidad del contenido de 117000 J/K. Al sumar la camisa metalica, la capacidad total efectiva asciende a 135000 J/K.

El cambio de temperatura requerido es [[DeltaT]] = 45 K. La energía sensible necesaria se estima multiplicando la capacidad total por ese cambio de temperatura: aproximadamente 6.08 MJ. Repartida en 1800 s, la potencia mínima media es unos 3.4 kW.

La estimacion es una lectura de primer diseño: no pretende describir perfiles internos, agitacion ni perdidas. Sirve para fijar la escala mínima. Si el equipo instalado entregara solo 1 kW, incluso sin perdidas tardaria unas tres veces más. Si entregara 6 kW, habria margen para compensar transferencia imperfecta, tuberias frias y apertura de valvulas.

## Interpretacion

La lectura cuantitativa muestra que la pared del reactor añade cerca del quince por ciento a la energía que habria que suministrar si solo se calentara el producto. En un diseño real se añade margen por perdidas y por transferencia imperfecta, pero el primer control de escala lo da [[C]]: cuanto mayor es la capacidad calorifica total, más lenta o más potente debe ser la etapa de calentamiento.

El resultado también muestra por que dos lotes con la misma temperatura objetivo pueden exigir potencias distintas. Cambiar la masa de producto, el material de la camisa o la cantidad de liquido modifica [[C]] y, por tanto, el calor requerido para el mismo [[DeltaT]]. En operación industrial, esa lectura evita confundir una consigna de temperatura con una necesidad energética.
