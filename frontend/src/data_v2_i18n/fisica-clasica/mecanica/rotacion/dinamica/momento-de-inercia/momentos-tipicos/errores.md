# Errores Comunes: Momentos Típicos de Inercia

## Errores conceptuales

### Error 1: Confundir el factor de forma con una constante arbitraria

**Por qué parece correcto**
Los factores de las fórmulas típicas (1/2, 2/5, 1/12) son números adimensionales pequeños que el estudiante ve impresos en tablas sin contexto derivacional. Al no recordar su origen, los trata como convenciones numéricas intercambiables.

**Por qué es incorrecto**
Cada factor surge de la integral

{{f:disco-macizo}}

aplicada a la geometría específica del cuerpo. El factor 1/2 del disco macizo refleja que la masa se distribuye con densidad radial uniforme entre el eje y el borde; el factor 2/5 de la esfera maciza refleja la distribución tridimensional. Mezclarlos produce un momento de inercia que no corresponde a ningún objeto real.

**Señal de detección**
La inercia calculada supera la del aro fino del mismo radio y masa (

{{f:aro-fino}}

), que es el límite superior teórico para ese radio. Cualquier resultado con factor efectivo mayor que 1 indica un error de modelo.

**Corrección conceptual**
Asociar cada factor a una imagen geométrica: disco (masa apilada en un plano), esfera maciza (masa en tres dimensiones), aro (masa concentrada en el borde). Si la imagen no coincide con el objeto del problema, la fórmula tampoco es la correcta.

**Mini-ejemplo de contraste**
Esfera maciza de 2 kg y radio 0,3 m. Con factor correcto:

{{f:esfera-maciza}}

 kg·m². Con factor de disco:

{{f:esfera-maciza}}

kg·m² (25 % mayor, geometría errónea).

---

### Error 2: Aplicar el catálogo sin verificar la geometría real del objeto

**Por qué parece correcto**
El objeto tiene forma aproximadamente esférica, cilíndrica o rectangular. El estudiante busca la forma más parecida en el catálogo y aplica la fórmula sin verificar si las hipótesis de densidad uniforme y geometría ideal se cumplen.

**Por qué es incorrecto**
Las fórmulas del catálogo asumen densidad volumétrica uniforme y geometría perfecta. Si el objeto tiene huecos internos, gradientes de material o forma irregular, el factor de forma real difiere del teórico y la inercia calculada con la fórmula típica es incorrecta.

**Señal de detección**
El factor de forma experimental

{{f:esfera-maciza}}

obtenido de medida dinámica difiere del catálogo en más del 5 %. Objetos como la Tierra tienen factor real cercano a 0,33 en lugar de 0,4 porque su núcleo metálico está concentrado cerca del eje.

**Corrección conceptual**
Antes de usar una fórmula del catálogo, verificar explícitamente que el objeto sea homogéneo y que su geometría externa coincida con la primitiva elegida. Si no se puede verificar, medir la inercia con un péndulo de torsión en lugar de asumir el factor teórico.

**Mini-ejemplo de contraste**
Esfera hueca de paredes gruesas: usar

{{f:esfera-maciza}}

da un valor mayor que el real, porque parte de la masa está en el hueco central y no contribuye a la inercia. La fórmula correcta integra los radios interior y exterior.

---

## Errores de modelo

### Error 3: Aplicar fórmulas de objeto delgado a objetos con espesor apreciable

**Por qué parece correcto**
La fórmula

{{f:disco-macizo}}

 para la varilla o

{{f:disco-macizo}}

para el disco se presentan sin advertencia de escala. El estudiante las aplica a cualquier prisma largo o cilindro sin verificar la relación de aspecto.

**Por qué es incorrecto**
Estas fórmulas se derivan bajo la hipótesis de que la dimensión transversal es despreciable. Si el diámetro de la varilla o el espesor del disco superan el 10 % de la dimensión principal, la contribución del radio transversal deja de ser nula y el error sistemático supera el margen de cálculo aceptable.

**Señal de detección**
En simulación o experimento, la inercia medida supera consistentemente el valor del catálogo aunque los datos de masa y longitud sean correctos. La diferencia crece al aumentar el espesor relativo del objeto.

**Corrección conceptual**
Verificar que la dimensión transversal sea al menos un orden de magnitud menor que la principal. Si no se cumple, usar la fórmula del cilindro macizo o del prisma rectangular que incluye el radio transversal o las dimensiones a y b de la sección.

**Mini-ejemplo de contraste**
Cilindro de radio

{{f:disco-macizo}}

 m y longitud

{{f:disco-macizo}}

 m. Con fórmula de varilla:

{{f:disco-macizo}}

. Con fórmula de cilindro macizo:

{{f:disco-macizo}}

. La diferencia entre ambas crece a medida que R/L aumenta.

---

### Error 4: Omitir el Teorema de Steiner cuando el eje no pasa por el centro de masas

**Por qué parece correcto**
El catálogo proporciona un valor numérico para cada forma. El estudiante asume que ese valor sirve para cualquier configuración sin verificar si el eje del problema coincide con el eje del catálogo.

**Por qué es incorrecto**
Las fórmulas del catálogo dan la inercia respecto al eje que pasa por el centro de masas con la orientación de simetría. Si el eje real está desplazado una distancia d, la inercia correcta es

{{f:barra-centro}}

. Ignorar el término md^2 siempre subestima la inercia.

**Señal de detección**
El par necesario para producir la aceleración angular calculada resulta menor que el par medido experimentalmente, o el sistema alcanza la velocidad de consigna más lentamente de lo previsto.

**Corrección conceptual**
Antes de usar una fórmula del catálogo, comprobar si el eje del problema pasa por el centro de masas de la figura. Si no pasa, calcular I_{cm} con el catálogo y sumar md^2, donde d es la distancia entre los dos ejes paralelos.

**Mini-ejemplo de contraste**
Varilla de masa

{{f:barra-extremo}}

 kg y longitud

{{f:barra-extremo}}

 m que gira por un extremo. Sin Steiner:

{{f:barra-extremo}}

 kg·m². Con Steiner (

{{f:barra-extremo}}

):

{{f:barra-extremo}}

kg·m². El error por omisión es del 75 %.

---

## Errores matemáticos

### Error 5: Sustituir el diámetro en lugar del radio

**Por qué parece correcto**
El diámetro es la dimensión que más frecuentemente aparece en catálogos y esquemas técnicos. El estudiante lo lee directamente del dato y lo inserta sin conversión.

**Por qué es incorrecto**
Las fórmulas típicas están escritas en términos del radio R, no del diámetro. Como

{{f:aro-fino}}

, sustituir D por R eleva al cuadrado un factor de 2, produciendo un error del 300 % en el resultado final.

**Señal de detección**
El resultado sale cuatro veces mayor que la estimación de orden de magnitud, o mayor que la inercia del aro fino del mismo radio nominal, que es el límite teórico superior.

**Corrección conceptual**
Antes de sustituir, identificar explícitamente si el dato dado es radio o diámetro y convertir

{{f:aro-fino}}

antes de elevar al cuadrado, nunca después.

**Mini-ejemplo de contraste**
Disco con masa

{{f:disco-macizo}}

 kg y diámetro

{{f:disco-macizo}}

 m. Correcto:

{{f:disco-macizo}}

 m,

{{f:disco-macizo}}

 kg·m². Incorrecto:

{{f:disco-macizo}}

kg·m² (cuatro veces mayor).

---

## Errores de interpretación

### Error 6: Creer que el catálogo exime de analizar el eje de rotación real

**Por qué parece correcto**
El catálogo proporciona un valor final con nombre y figura. El estudiante interpreta ese valor como la respuesta definitiva para cualquier problema que involucre esa forma, sin considerar que el eje del catálogo es solo el eje de simetría del cuerpo aislado.

**Por qué es incorrecto**
Las fórmulas del catálogo son propiedades intrínsecas del centro de masas. En la gran mayoría de aplicaciones reales, el eje de giro no pasa por el centro geométrico del cuerpo, y la inercia operativa es I_{cm} + md^2. Esta "parálisis de catálogo" impide resolver problemas reales donde los ejes casi nunca coinciden con el centro de simetría.

**Señal de detección**
El estudiante busca sin éxito una fórmula del catálogo para "una barra que gira por un punto a un tercio de su longitud", en lugar de componer la solución con la fórmula de la tabla y el Teorema de Steiner.

**Corrección conceptual**
Ver las fórmulas del catálogo como punto de partida, no como respuesta final. La interpretación correcta exige identificar si el eje del problema coincide con el eje de simetría del catálogo y aplicar el desplazamiento correspondiente si no coincide.

**Mini-ejemplo de contraste**
Placa rectangular de masa m, lados a y b, girando por una esquina en lugar del centro. La fórmula del catálogo da

{{f:placa-rectangular}}

. Con Steiner para el eje de la esquina se añade

{{f:placa-rectangular}}

, obteniendo

{{f:placa-rectangular}}

. Usar solo el catálogo subestima la inercia a la mitad.

---

## Regla de autocontrol rápido

Para verificar la validez de la elección de fórmula típica, aplicar la **regla F.G.E. (Factor, Geometría, Eje)**:

1. **Factor**: Comparar el número (1/2, 2/5, etc.). ¿Es coherente con la concentración de masa? Más masa lejos del eje implica factor mayor.
2. **Geometría**: ¿Es el objeto realmente uniforme y delgado según las hipótesis de la fórmula? ¿Es el espesor despreciable respecto a la dimensión principal?
3. **Eje**: ¿Coincide exactamente el eje del catálogo con el eje del problema? Si el eje está desplazado, añadir md^2.