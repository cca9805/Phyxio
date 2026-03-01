# Traslacion Y Rotacion

## Idea clave
En un sistema mixto, parte de la energia va a mover el centro de masas y otra parte a sostener el giro. Ignorar una de las dos produce modelos incompletos.

## 1- Que estudia este subtema y por que es clave
Este subtema explica problemas donde no basta con F=ma ni con tau=I*alpha por separado. El comportamiento real surge del acoplamiento entre ambas dinamicas.

## 2- Imagen fisica correcta
Un cuerpo (rueda, cilindro, esfera) puede:
- trasladarse con velocidad v,
- rotar con velocidad angular omega.

Si hay rodadura sin deslizamiento, no son movimientos independientes.

## 3- Magnitudes principales
- m: masa (kg).
- R: radio (m).
- I: momento de inercia (kg*m^2).
- omega: velocidad angular (rad/s).
- v: velocidad lineal (m/s).
- Kt: energia cinetica traslacional (J).
- Kr: energia cinetica rotacional (J).
- K: energia cinetica total (J).

## 4- Acoplamiento cinematico
Rodadura sin deslizamiento:

$$
v = \omega R
$$

y para aceleraciones:

$$
a = \alpha R
$$

Esta condicion cierra el sistema y permite pasar de variables angulares a lineales.

## 5- Dinamica acoplada
Ecuaciones base:

$$
F_{net}=ma
$$

$$
\tau_{net}=I\alpha
$$

Con la relacion a=alpha R, puedes resolver un conjunto unico y coherente.

## 6- Lectura energetica (muy importante)

$$
K_t=\frac{1}{2}mv^2
$$

$$
K_r=\frac{1}{2}I\omega^2
$$

$$
K=K_t+K_r
$$

Con v=omega R:

$$
K=\frac{1}{2}m(\omega R)^2+\frac{1}{2}I\omega^2
$$

## 7- Metodo de resolucion recomendado
1. Identifica si hay deslizamiento o rodadura pura.
2. Escribe ecuaciones lineal y angular.
3. Usa condicion de acoplamiento si aplica.
4. Resuelve simbolicamente antes de sustituir.
5. Verifica unidades y reparto energetico.
6. Interpreta cual termino domina (traslacional o rotacional).

## 8- Errores tipicos
- Usar v=omega R cuando si hay deslizamiento.
- Mezclar I de una geometria distinta.
- Calcular solo Kt y olvidar Kr.
- Perder coherencia de ejes y signos en torque.

## 9- Ejemplo guiado
Datos: m=3 kg, R=0.25 m, I=0.09 kg*m^2, omega=12 rad/s.

$$
v=\omega R=12\cdot0.25=3\ \text{m/s}
$$

$$
K_t=\frac{1}{2}mv^2=\frac{1}{2}\cdot3\cdot9=13.5\ \text{J}
$$

$$
K_r=\frac{1}{2}I\omega^2=\frac{1}{2}\cdot0.09\cdot144=6.48\ \text{J}
$$

$$
K=13.5+6.48=19.98\ \text{J}
$$

Interpretacion: en este caso domina la contribucion traslacional, pero la rotacional no es despreciable.

## 10- Sintesis final
Dominar este subtema significa resolver sistemas acoplados sin simplificaciones indebidas y explicar de donde sale cada parte de la energia y del movimiento.
