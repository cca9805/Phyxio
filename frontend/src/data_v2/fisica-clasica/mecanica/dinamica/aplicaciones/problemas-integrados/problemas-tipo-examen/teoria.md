# Problemas Tipo Examen

## Idea clave
Un problema tipo examen no se resuelve por memoria de formulas: se resuelve con metodo. Primero modelo fisico, despues ecuaciones, luego calculo y al final validacion.

## 1- Que estudia este tema y por que es fundamental
Este tema entrena la resolucion de ejercicios integrados de dinamica en los que aparecen varias piezas simultaneas: peso, normal, rozamiento, fuerzas externas, descomposicion por ejes y segunda ley de Newton.

Es fundamental porque en examen el fallo habitual no es algebraico, sino de planteamiento: eje mal elegido, signo incoherente o fuerza omitida.

## 2- Imagen fisica correcta antes de calcular
Antes de escribir una sola ecuacion, debes contestar:
- Que cuerpo o sistema analizo
- Que interacciones actuan sobre el
- En que direccion es esperable el movimiento
- Que simplificaciones son validas en este enunciado

Si este bloque previo esta mal, todo el desarrollo numerico queda contaminado.

## 3- Magnitudes que debes identificar siempre
- \(m\): masa del cuerpo (kg).
- \(g\): aceleracion de la gravedad (m/s^2).
- \(\theta\): angulo del plano o de la fuerza (rad).
- \(N\): normal de contacto (N).
- \(\mu\): coeficiente de rozamiento (adimensional).
- \(f\): fuerza de rozamiento (N).
- \(F\): fuerza aplicada (N).
- \(F_{net}\): fuerza neta en el eje de movimiento (N).
- \(a\): aceleracion (m/s^2).
- \(t, v, x\): tiempo, velocidad y posicion para la parte cinematica.

## 4- Formulas base y lectura fisica
Componente paralela del peso:

$$
F_{\parallel}=mg\sin\theta
$$

Normal en plano inclinado:

$$
N=mg\cos\theta
$$

Rozamiento dinamico:

$$
f=\mu N
$$

Fuerza neta en el eje elegido:

$$
F_{net}=F-F_{\parallel}-f
$$

Segunda ley escalar:

$$
a=\frac{F_{net}}{m}
$$

Cinematica con aceleracion constante:

$$
v=v_0+at
$$

$$
x=x_0+v_0t+\frac{1}{2}at^2
$$

Lectura fisica importante:
- si sube \(\mu\), suele bajar \(a\);
- si sube \(\theta\), sube \(F_{\parallel}\) y cambia el balance;
- no se puede interpretar \(a\) sin haber fijado el eje y el signo.

## 5- Dominio de validez del modelo
Este esquema aplica cuando:
- el movimiento se puede aproximar como 1D por eje elegido,
- los coeficientes de rozamiento son constantes,
- no hay cambios bruscos de regimen durante el intervalo analizado.

Si hay fuerza variable en posicion, cambios de contacto o rozamiento no lineal, se requieren modelos mas avanzados.

## 6- Metodo de resolucion paso a paso
1. Dibuja sistema y define ejes con criterio fisico.
2. Construye DCL completo.
3. Proyecta fuerzas por ejes.
4. Escribe ecuaciones de Newton por eje.
5. Resuelve simbolicamente antes de sustituir.
6. Sustituye en SI y calcula.
7. Comprueba unidades, signo y orden de magnitud.
8. Interpreta resultado: que significa en el fenomeno real.

## 7- Errores tipicos que debes evitar
- intercambiar seno y coseno en la descomposicion,
- olvidar incluir la normal al calcular rozamiento,
- mezclar magnitudes de ejes distintos,
- aplicar cinematica de \(a\) constante sin justificarla,
- dar resultado sin comprobacion de sentido fisico.

## 8- Ejemplo guiado completo
Datos: \(m=5\,\text{kg}\), \(\theta=30^\circ\), \(\mu=0.20\), \(F=60\,\text{N}\), \(g=9.8\,\text{m/s}^2\), \(v_0=0\).

Paso 1. Componentes y fuerzas de contacto:

$$
F_{\parallel}=mg\sin\theta=5\cdot 9.8\cdot 0.5=24.5\,\text{N}
$$

$$
N=mg\cos\theta=5\cdot 9.8\cdot 0.866\approx 42.43\,\text{N}
$$

$$
f=\mu N=0.2\cdot 42.43\approx 8.49\,\text{N}
$$

Paso 2. Fuerza neta y aceleracion:

$$
F_{net}=60-24.5-8.49=27.01\,\text{N}
$$

$$
a=\frac{F_{net}}{m}=\frac{27.01}{5}\approx 5.40\,\text{m/s}^2
$$

Paso 3. Si \(t=3\,\text{s}\):

$$
v=v_0+at=0+5.40\cdot 3=16.2\,\text{m/s}
$$

Interpretacion: la fuerza aplicada supera peso paralelo y rozamiento, por eso la aceleracion sale positiva en el eje elegido.

## 9- Aplicaciones reales
- entrenamiento de examen en bachillerato y primer curso universitario,
- validacion de simulaciones de bloques y planos inclinados,
- diseno preliminar de arrastre en sistemas mecanicos simples,
- control basico de seguridad (fuerza minima para mover una carga).

## 10- Sintesis final
Dominar este tema significa resolver problemas integrados con criterio reproducible: identificar, modelar, calcular, verificar e interpretar.

Ese flujo evita "acertar por suerte" y permite explicar por que el resultado es correcto.
