# Trabajo y torque

## Idea clave
En rotacion, el trabajo lo realiza un torque durante un desplazamiento angular. Es el equivalente rotacional de fuerza por desplazamiento en traslacion.

## 1- Que estudia este tema y por que es fundamental
Este tema conecta accion de torque, energia de rotacion y potencia angular. Es base para motores, frenos y mecanismos de transmision.

## 2- Imagen fisica correcta
Si el torque actua en el mismo sentido del giro, entrega energia al sistema. Si se opone al giro, extrae energia (frenado).

## 3- Variables relevantes
- Torque: $\tau$ (N m).
- Desplazamiento angular: $\theta$ (rad).
- Trabajo rotacional: $W_{rot}$ (J).
- Potencia angular: $P$ (W).

## 4- Formulas esenciales
Definicion diferencial:

$$
dW=\tau\,d\theta
$$

Torque constante:

$$
W_{rot}=\tau\Delta\theta
$$

Torque variable:

$$
W_{rot}=\int_{\theta_i}^{\theta_f}\tau(\theta)\,d\theta
$$

Conexion con energia rotacional:

$$
W_{net,rot}=\Delta E_{rot}
$$

Potencia angular:

$$
P=\tau\omega
$$

## 5- Dominio de validez
Modelo de cuerpo rigido con eje definido y unidades coherentes en radianes para desplazamiento angular.

## 6- Metodo de resolucion
1- Define sentido positivo de giro.
2- Asigna signo al torque segun ese convenio.
3- Calcula trabajo por producto o integral segun corresponda.
4- Conecta con $\Delta E_{rot}$ para hallar velocidades angulares.
5- Usa $P=\tau\omega$ cuando pidan ritmo de transferencia.

## 7- Errores tipicos
- Mezclar grados con radianes en ecuaciones de trabajo.
- Perder signo de torque en frenado.
- Usar torque neto cuando piden trabajo de un torque concreto.
- Confundir N m (torque) con J (energia) sin contexto.

## 8- Ejemplo guiado
Un eje recibe torque constante $\tau=12\,\text{N m}$ durante $\Delta\theta=15\,\text{rad}$.

$$
W_{rot}=\tau\Delta\theta=12\cdot15=180\,\text{J}
$$

Si en ese instante gira a $\omega=20\,\text{rad/s}$:

$$
P=\tau\omega=12\cdot20=240\,\text{W}
$$

## 9- Aplicaciones reales
- Potencia de motores electricos.
- Frenado de rotores y discos.
- Balance energetico en transmisiones mecanicas.

## 10- Sintesis final
Trabajo y torque son la pieza central del analisis energetico rotacional: cuantifican cuanto y que tan rapido se transfiere energia en sistemas en giro.
