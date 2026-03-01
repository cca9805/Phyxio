# Poleas

## Idea clave
Una polea no elimina la carga: reparte la tension en varios tramos y por eso reduce la fuerza de tiro necesaria.

## 1- Que estudia este subtema y por que importa
Este subtema resuelve problemas tipicos de elevacion: cuanto esfuerzo necesitas, cuantos tramos conviene usar y que cambia cuando hay perdidas reales.

## 2- Imagen fisica correcta
En el modelo ideal, la tension es la misma en cada tramo de una misma cuerda. Si la carga esta soportada por n tramos, el reparto de carga explica la ganancia de fuerza.

## 3- Magnitudes que debes identificar
- R: carga o resistencia (N).
- P: fuerza aplicada en extremo libre (N).
- n: numero de tramos que soportan la carga.
- eta: eficiencia global del sistema.
- VM: ventaja mecanica.
- sP: desplazamiento del extremo libre.
- sR: desplazamiento de la carga.

## 4- Formula base (ideal)

$$
P = \frac{R}{n}
$$

Interpretacion: al duplicar n, la fuerza ideal se reduce a la mitad.

## 5- Poleas reales con eficiencia

$$
P = \frac{R}{n\eta}
$$

con

$$
0<\eta\le 1
$$

Si eta baja, necesitas mas fuerza que en el caso ideal.

## 6- Ventaja mecanica y compromiso cinemativo

$$
VM = \frac{R}{P} = n\eta
$$

y el intercambio desplazamiento-fuerza:

$$
s_P = n\,s_R
$$

Ganas fuerza, pero recorres mas cuerda.

## 7- Metodo de resolucion recomendado
1. Dibuja el sistema y cuenta tramos que sostienen la carga.
2. Decide si es ideal o con eficiencia.
3. Aplica formula de P y despeja.
4. Verifica unidades y orden de magnitud.
5. Interpreta el resultado con VM y desplazamientos.

## 8- Errores tipicos
- Contar mal los tramos activos.
- Usar n total de poleas en vez de n de tramos que sostienen.
- Olvidar eta en sistemas reales.
- Concluir que VM alta implica menor trabajo total sin considerar recorrido.

## 9- Ejemplo guiado
R=1200 N, n=4, eta=0.85.

$$
P=\frac{R}{n\eta}=\frac{1200}{4\cdot0.85}=352.94\ \text{N}
$$

$$
VM=\frac{R}{P}=\frac{1200}{352.94}\approx3.40
$$

Interpretacion: el sistema ayuda de forma clara, pero no alcanza la ventaja ideal n=4 por perdidas.

## 10- Sintesis final
Dominar poleas significa contar bien tramos, aplicar el modelo correcto (ideal o real) y explicar fisicamente el intercambio entre fuerza y desplazamiento.
