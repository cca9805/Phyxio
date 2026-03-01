# Energia cinetica rotacional

## Idea clave
La energia asociada al giro depende de cuanto gira el cuerpo ($\omega$) y de como esta distribuida su masa respecto al eje ($I$).

## 1- Que estudia este tema y por que es fundamental
Este tema extiende energia cinetica traslacional a sistemas rotacionales y explica por que dos cuerpos con la misma masa pueden requerir distinta energia para girar igual de rapido.

## 2- Imagen fisica correcta
El momento de inercia $I$ actua como "inercia al giro". A igual $\omega$, mayor $I$ implica mayor energia almacenada en rotacion.

## 3- Variables clave
- Momento de inercia: $I$ (kg m^2).
- Velocidad angular: $\omega$ (rad/s).
- Energia cinetica rotacional: $E_{rot}$ (J).

## 4- Formula esencial

$$
E_{rot}=\frac{1}{2}I\omega^2
$$

Cambio entre estados:

$$
\Delta E_{rot}=\frac{1}{2}I(\omega_f^2-\omega_i^2)
$$

## 5- Dominio de validez
Modelo de cuerpo rigido con eje definido y $I$ conocido/constante respecto a ese eje. Si cambia el eje o la configuracion de masa, cambia $I$.

## 6- Metodo de resolucion
1- Identifica eje de giro y momento de inercia correcto.
2- Determina estados angular inicial y final.
3- Calcula energia o variacion con formula rotacional.
4- Relaciona con trabajo de torque o conservacion segun enunciado.

## 7- Errores tipicos
- Usar $I$ de otra geometria o de otro eje.
- Introducir $\omega$ en rpm sin convertir a rad/s.
- Confundir energia rotacional con traslacional.
- Olvidar que ambos terminos pueden coexistir en rodadura.

## 8- Ejemplo guiado
Disco con $I=0.6\,\text{kg m}^2$ acelera de $\omega_i=4$ a $\omega_f=10\,\text{rad/s}$:

$$
\Delta E_{rot}=\frac{1}{2}\cdot0.6\cdot(10^2-4^2)=0.3\cdot84=25.2\,\text{J}
$$

## 9- Aplicaciones reales
- Volantes de inercia.
- Sistemas de transmision y almacen energetico rotacional.
- Maquinaria con ejes y rotores.

## 10- Sintesis final
La energia cinetica rotacional permite cuantificar el costo energetico del giro y es imprescindible en cualquier analisis de dinamica rotacional.
