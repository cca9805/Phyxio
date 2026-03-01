# Velocidad Del Sonido - Aplicaciones

## Idea clave
Calcular bien la velocidad del sonido permite convertir medidas temporales en distancia, disenar sistemas acusticos y validar modelos de medio con criterio fisico.

## 1- Donde se usa de forma directa
- Medicion por tiempo de vuelo (TOF) en ultrasonidos.
- Sonar, ecosonda y localizacion acustica.
- Acustica arquitectonica y control de ruido.
- Monitoreo de procesos en gases y fluidos.

## 2- Que decision tecnica permite este subtema
Con este subtema puedes decidir:
- que modelo usar segun medio (B-rho, gas ideal o aproximacion en aire),
- si la precision requerida obliga a usar Kelvin y parametros termodinamicos,
- como estimar variacion de velocidad por temperatura,
- como traducir tiempos medidos en distancias o profundidades.

## 3- Relacion con `Calculadora`, `Leyenda` y `Graficas`
1. En `Calculadora`, selecciona primero la formula compatible con el medio.
2. En `Leyenda`, verifica unidades y simbolos antes de sustituir.
3. En `Graficas`, valida la tendencia de \(v\) frente a temperatura o densidad.

## 4- Formulas clave aplicadas
- $$v=\lambda f$$
- $$v\approx331+0.6T_c$$
- $$v=\sqrt{\frac{B}{\rho}}$$
- $$v=\sqrt{\frac{\gamma R T_K}{M}}$$

## 5- Caso practico tipico
Objetivo: estimar profundidad por eco en agua.

Si el pulso tarda \(t\) en ir y volver:

$$
d=\frac{vt}{2}
$$

El factor 2 es obligatorio por trayecto ida-vuelta.

## 6- Cierre
Una aplicacion esta bien resuelta cuando ecuacion, medio, unidades y lectura fisica son coherentes entre si.
