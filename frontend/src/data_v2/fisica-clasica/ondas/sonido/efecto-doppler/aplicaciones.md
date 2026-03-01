# Efecto Doppler - Aplicaciones

## Idea clave
El corrimiento Doppler traduce movimiento relativo en informacion medible de frecuencia.

## 1- Donde se aplica de forma directa
- Ecografia Doppler para medir flujo sanguineo.
- Sensores de velocidad en trafico y navegacion.
- Meteorologia Doppler (velocidad radial de precipitacion).
- Acustica de sirenas, trenes y aeronaves.

## 2- Que decision tecnica permite este subtema
Con este subtema puedes decidir:
- sentido del movimiento relativo,
- magnitud aproximada de corrimiento,
- si el modelo clasico es suficiente o requiere refinamiento,
- interpretacion correcta de incremento/decremento de frecuencia.

## 3- Relacion con `Calculadora`, `Leyenda` y `Graficas`
1. En `Calculadora`, define signos de velocidad antes de operar.
2. En `Leyenda`, verifica que velocidades sean respecto al medio.
3. En `Graficas`, valida compresion o dilatacion de frentes según el caso.

## 4- Formulas clave en aplicaciones
- $$f_{obs}=f_0\frac{v+v_o}{v-v_s}$$
- $$f_{obs}=f_0\frac{v+v_o}{v}\quad(\text{fuente fija})$$
- $$f_{obs}=f_0\frac{v}{v-v_s}\quad(\text{observador fijo})$$
- $$\Delta f=f_{obs}-f_0$$

## 5- Caso practico tipico
Si una fuente se acerca, \(f_{obs}\) debe subir.

Si el calculo da \(f_{obs}<f_0\), suele haber error de signos o de referencia de velocidades.

## 6- Cierre
Una aplicacion esta bien cerrada cuando numero, signo del corrimiento y visualizacion de frentes son coherentes.
