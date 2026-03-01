# Palancas

## Idea clave
Una palanca no "crea" fuerza: redistribuye fuerza y desplazamiento alrededor de un fulcro. La condicion central es el equilibrio de momentos.

## 1- Que estudia este tema y por que importa
Este tema explica como una barra rigida apoyada en un punto (fulcro) permite mover cargas grandes con fuerzas menores. Es base de herramientas manuales, mecanismos industriales y biomecanica.

Si no entiendes palancas, aplicas formulas de memoria. Si las entiendes, sabes que variable debes modificar para reducir esfuerzo real.

## 2- Imagen fisica correcta del mecanismo
En una palanca hay dos efectos simultaneos:

1. Efecto dinamico local:
- una fuerza aplicada en un brazo produce tendencia de giro.

2. Balance global:
- el sistema entra en equilibrio cuando los momentos opuestos se compensan.

La razon fisica es directa:
- toda fuerza aplicada a una distancia del fulcro genera un momento,
- la palanca transmite ese momento al otro lado.

## 3- Magnitudes que debes identificar siempre
- \(P\): fuerza aplicada o potencia (N).
- \(R\): fuerza resistente o carga (N).
- \(b_P\): brazo de potencia, distancia al fulcro (m).
- \(b_R\): brazo de resistencia, distancia al fulcro (m).
- \(\tau_P\): momento de potencia (N*m).
- \(\tau_R\): momento de resistencia (N*m).
- \(VM\): ventaja mecanica adimensional.
- \(\eta\): rendimiento real (entre 0 y 1).

## 4- Formulas esenciales y lectura fisica
Condicion ideal de equilibrio:

$$
P\,b_P = R\,b_R
$$

Momentos individuales:

$$
\tau_P=P\,b_P,\qquad \tau_R=R\,b_R
$$

Ventaja mecanica ideal:

$$
VM_{ideal}=\frac{R}{P}=\frac{b_P}{b_R}
$$

Relacion de trabajo (modelo ideal):

$$
P\,s_P = R\,s_R
$$

Ventaja mecanica real:

$$
VM_{real}=\eta\,VM_{ideal}
$$

Nota conceptual clave:
- en palanca ideal, ganar fuerza implica recorrer mas distancia en el punto de aplicacion.

## 5- Tipos de palanca y criterio de uso
1. Primera clase: fulcro entre potencia y resistencia.
2. Segunda clase: resistencia entre fulcro y potencia.
3. Tercera clase: potencia entre fulcro y resistencia.

Lectura de ingenieria:
- segunda clase suele dar \(VM>1\),
- tercera clase suele priorizar velocidad y recorrido, no multiplicacion de fuerza.

## 6- Dominio de validez del modelo
El modelo basico funciona bien si:
- barra casi rigida,
- fulcro con friccion pequena,
- deformaciones pequenas,
- equilibrio cuasiestatico.

Se degrada cuando:
- hay impactos o aceleraciones grandes,
- hay holguras y flexion relevantes,
- cambia el fulcro efectivo por deformacion.

## 7- Metodo de resolucion didactico
1. Dibuja fulcro, fuerzas y distancias perpendiculares.
2. Define sentido positivo de giro.
3. Escribe momentos respecto al fulcro.
4. Impone equilibrio: suma de momentos igual a cero.
5. Despeja en simbolico.
6. Sustituye en SI y verifica unidades.
7. Interpreta si el resultado es fisicamente viable.

## 8- Errores frecuentes que debes evitar
- medir brazo sobre la barra en lugar de distancia perpendicular a la linea de accion.
- confundir equilibrio de fuerzas con equilibrio de momentos.
- usar \(VM\) ideal en sistemas con friccion sin corregir por rendimiento.
- olvidar convertir cm a m.
- reportar solo numero final sin explicar implicacion mecanica.

## 9- Ejemplo completo guiado
Datos: \(R=800\ \text{N}\), \(b_R=0.20\ \text{m}\), \(b_P=0.80\ \text{m}\).

Paso 1. Fuerza aplicada ideal:

$$
P=\frac{R\,b_R}{b_P}
=\frac{800\cdot 0.20}{0.80}
=200\ \text{N}
$$

Paso 2. Ventaja mecanica ideal:

$$
VM_{ideal}=\frac{R}{P}=\frac{800}{200}=4
$$

Paso 3. Si el rendimiento es \(\eta=0.85\):

$$
VM_{real}=0.85\cdot 4=3.4
$$

Interpretacion:
- en ideal necesitas 200 N,
- en real la ayuda efectiva baja por perdidas.

## 10- Sintesis final
Dominar palancas significa entender una idea central: la maquina no regala energia, solo transforma como se intercambian fuerza y recorrido bajo equilibrio de momentos.
