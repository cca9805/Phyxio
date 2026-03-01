# Tubos - Aplicaciones

## Idea clave
El modelo de tubos resonantes permite convertir geometria y condiciones de frontera en decisiones tecnicas de frecuencia y respuesta acustica.

## 1- Donde se usa de forma directa
- Instrumentos de viento (flauta, clarinete, organo, ocarina).
- Ductos y conductos en sistemas de ventilacion y escape.
- Resonadores acusticos de laboratorio.
- Medicion de velocidad del sonido y calibracion de sensores.

## 2- Que decision tecnica permite este subtema
Con este tema puedes decidir:
- si un sistema se modela como abierto-abierto o abierto-cerrado,
- que frecuencia de resonancia apareceria para una longitud dada,
- que longitud requiere una frecuencia objetivo,
- que modos son fisicamente posibles segun frontera.

## 3- Relacion con `Calculadora`, `Leyenda` y `Graficas`
1. En `Calculadora`, selecciona la familia modal correcta (abierto-abierto o abierto-cerrado).
2. En `Leyenda`, verifica simbolos y unidades SI.
3. En `Graficas`, valida que el patron nodal coincide con el modo y el tipo de extremo.

## 4- Formulas que sustentan estas aplicaciones
- $$v=\lambda_n f_n$$
- $$f_n=\frac{nv}{2L}\quad (\text{abierto-abierto})$$
- $$f_n=\frac{(2n-1)v}{4L}\quad (\text{abierto-cerrado})$$
- $$v\approx331+0.6T_c\quad (\text{aire})$$

## 5- Caso practico tipico
Objetivo: disenar un tubo abierto-cerrado para que su fundamental sea 170 Hz con \(v=340\,\mathrm{m/s}\).

$$
L=\frac{v}{4f_1}=\frac{340}{4\cdot170}=0.50\,\mathrm{m}
$$

Resultado: longitud efectiva cercana a 0.50 m.

## 6- Cierre
Una aplicacion esta bien cerrada cuando frecuencia calculada, patron modal y tipo de frontera son coherentes entre si.
