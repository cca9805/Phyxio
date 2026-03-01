# Intensidad Y Nivel Sonoro - Aplicaciones

## Idea clave
Este subtema permite convertir datos de fuente y distancia en niveles operativos para seguridad, diseno y diagnostico acustico.

## 1- Donde se aplica de forma directa
- Evaluacion de exposicion a ruido en trabajo.
- Diseno de recintos y barreras acusticas.
- Calibracion de sonometros y sistemas de monitoreo.
- Ingenieria de audio en escenarios y estudios.

## 2- Que decision tecnica permite este subtema
Con este subtema puedes decidir:
- si el nivel medido es seguro o requiere mitigacion,
- como cambia el nivel al variar potencia o distancia,
- cuanto reduce un sistema de aislamiento expresado en dB,
- si un incremento en dB implica cambio energetico grande o pequeno.

## 3- Relacion con `Calculadora`, `Leyenda` y `Graficas`
1. En `Calculadora`, calcula intensidad o nivel segun lo que pida el problema.
2. En `Leyenda`, confirma referencia \(I_0\) y unidades SI.
3. En `Graficas`, valida caida con distancia y conversion logaritmica.

## 4- Formulas clave en aplicaciones
- $$I=\frac{P}{A}$$
- $$I=\frac{P}{4\pi r^2}$$
- $$\beta=10\log_{10}\left(\frac{I}{I_0}\right)$$
- $$I=I_0\,10^{\beta/10}$$

## 5- Caso practico tipico
Si una maquina sube de 80 dB a 90 dB, el cambio no es "+12.5%". Es un aumento de intensidad de 10 veces.

## 6- Cierre
Una aplicacion esta bien cerrada cuando el resultado en dB se traduce a impacto energetico real con interpretacion fisica correcta.
