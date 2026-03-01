# Palancas

## Idea clave
La palanca no crea energia: transforma como se reparte el esfuerzo por medio del brazo de palanca y el equilibrio de momentos.

## 1- Que estudia este subtema y por que importa
Este subtema conecta estatica y aplicaciones reales. Te ensena a responder preguntas del tipo: cuanto esfuerzo necesito para levantar una carga, que brazo conviene alargar y por que una herramienta facilita tanto el trabajo.

## 2- Imagen fisica correcta
Hay un punto de giro (fulcro) y fuerzas aplicadas a distintas distancias del eje.
La capacidad de giro de cada fuerza depende de dos cosas:
- su magnitud,
- su brazo respecto al eje.

Esa capacidad se mide con el momento o torque.

## 3- Magnitudes que debes identificar siempre
- P: fuerza de potencia (N).
- R: fuerza de resistencia o carga (N).
- bP: brazo de potencia (m).
- bR: brazo de resistencia (m).
- tauP: momento de potencia (N*m).
- tauR: momento de resistencia (N*m).
- VM: ventaja mecanica ideal (adimensional).

## 4- Formula base y lectura fisica
Condicion de equilibrio rotacional:

$$
P\,b_P = R\,b_R
$$

Despejes utiles:

$$
P = \frac{R b_R}{b_P}
$$

$$
R = \frac{P b_P}{b_R}
$$

Interpretacion:
- si aumentas bP, necesitas menos P para la misma carga;
- si aumentas bR, necesitas mas P.

## 5- Ventaja mecanica sin frases vacias

$$
VM = \frac{R}{P} = \frac{b_P}{b_R}
$$

- VM > 1: multiplicas fuerza.
- VM = 1: no hay ganancia de fuerza.
- VM < 1: sacrificas fuerza para ganar desplazamiento o precision.

## 6- Tipos de palanca y que optimiza cada una
- Primer genero: fulcro entre potencia y resistencia (ejemplo: balancin).
- Segundo genero: resistencia entre fulcro y potencia (ejemplo: carretilla).
- Tercer genero: potencia entre fulcro y resistencia (ejemplo: antebrazo).

Cada tipo prioriza una combinacion distinta de fuerza, velocidad y rango de movimiento.

## 7- Metodo de resolucion recomendado
1. Dibuja el sistema y define eje de giro.
2. Elige signo de momentos (horario/antihorario).
3. Escribe sumatoria de momentos igual a cero en equilibrio.
4. Despeja en simbolico.
5. Sustituye en SI y verifica unidades.
6. Interpreta si el resultado es razonable para la geometria del problema.

## 8- Errores tipicos
- Usar distancias al extremo en lugar del brazo real al fulcro.
- Olvidar el sentido del momento (signo).
- Mezclar metros con centimetros sin convertir.
- Concluir que VM alta implica menor trabajo total.

## 9- Ejemplo guiado
Carga R=900 N, bR=0.2 m, bP=0.8 m.

$$
P = \frac{R b_R}{b_P} = \frac{900\cdot 0.2}{0.8}=225\ \text{N}
$$

$$
VM = \frac{R}{P}=\frac{900}{225}=4
$$

Interpretacion: la palanca reduce la fuerza a una cuarta parte, a cambio de mayor recorrido en el punto de aplicacion de P.

## 10- Sintesis final
Dominar palancas significa dominar momentos: identificar eje, brazo y sentido de giro. Con ese criterio puedes analizar herramientas reales sin depender de memoria mecanica.
