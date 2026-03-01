# Planos Inclinados

## Idea clave
El plano inclinado reduce la fuerza necesaria para elevar una carga porque transforma un ascenso vertical en un recorrido mas largo sobre una superficie inclinada.

## 1- Que estudia este tema y por que es fundamental
Este tema describe como cambian fuerzas y aceleracion cuando un cuerpo se mueve sobre una rampa. Es esencial porque combina geometria, descomposicion vectorial y dinamica real con rozamiento.

## 2- Mecanismo fisico que lo explica
La gravedad sigue apuntando verticalmente, pero en el eje del plano solo actua su componente paralela:

- componente que impulsa o frena sobre la rampa,
- componente que presiona al cuerpo contra la rampa.

Esa presion define la normal, y la normal fija la friccion. Por eso en este sistema todo empieza en una descomposicion correcta del peso.

## 3- Magnitudes que debes identificar siempre
- \(m\): masa (kg).
- \(g\): gravedad (m/s\(^2\)).
- \(\theta\): angulo del plano.
- \(N\): reaccion normal (N).
- \(W_{\parallel}\): componente paralela del peso (N).
- \(W_{\perp}\): componente perpendicular del peso (N).
- \(\mu\): coeficiente de rozamiento.
- \(f\): fuerza de rozamiento (N).
- \(F_{net}\): fuerza neta en el eje del plano (N).
- \(a\): aceleracion sobre el plano (m/s\(^2\)).

## 4- Formulas esenciales y lectura fisica
Descomposicion del peso:

$$
W_{\parallel}=mg\sin\theta,\qquad W_{\perp}=mg\cos\theta
$$

Normal (si no hay otras fuerzas perpendiculares):

$$
N=mg\cos\theta
$$

Rozamiento dinamico:

$$
f=\mu N=\mu mg\cos\theta
$$

Aceleracion al deslizar hacia abajo:

$$
a=g(\sin\theta-\mu\cos\theta)
$$

Caso ideal sin rozamiento:

$$
a=g\sin\theta
$$

Fuerza minima para subir a velocidad constante (modelo basico):

$$
F_{min}=mg\sin\theta+\mu mg\cos\theta
$$

Clave didactica:
- el plano no elimina trabajo, lo reparte en mas distancia con menor fuerza.

## 5- Dominio de validez del modelo
Valido cuando:
- angulo constante,
- contacto continuo,
- coeficiente de rozamiento aproximadamente constante.

Debe corregirse cuando:
- hay vibraciones fuertes,
- el material cambia mucho con velocidad o temperatura,
- existe rodadura con efecto rotacional relevante.

## 6- Metodo de resolucion paso a paso
1. Define ejes: paralelo y perpendicular al plano.
2. Descompone \(mg\) en esos ejes.
3. Calcula \(N\) con el eje perpendicular.
4. Modela friccion con \(f=\mu N\) si aplica.
5. Escribe segunda ley en eje paralelo.
6. Despeja y sustituye en SI.
7. Interpreta signo y magnitud del resultado.

## 7- Errores tipicos
- usar \(mg\cos\theta\) como componente paralela.
- olvidar que \(\mu\) no tiene unidades.
- mezclar grados y radianes sin control en calculo.
- asumir siempre que el movimiento es hacia abajo.
- no revisar si el resultado es compatible con el sentido supuesto.

## 8- Ejemplo completo guiado
Datos: \(m=12\ \text{kg}\), \(\theta=25^\circ\), \(\mu=0.18\), \(g=9.81\ \text{m/s}^2\).

Paso 1. Componentes:

$$
W_{\parallel}=mg\sin\theta\approx 12\cdot 9.81\cdot \sin25^\circ \approx 49.7\ \text{N}
$$

$$
N=mg\cos\theta\approx 12\cdot 9.81\cdot \cos25^\circ \approx 106.7\ \text{N}
$$

Paso 2. Rozamiento:

$$
f=\mu N\approx 0.18\cdot 106.7\approx 19.2\ \text{N}
$$

Paso 3. Aceleracion descendente:

$$
a=\frac{W_{\parallel}-f}{m}
=\frac{49.7-19.2}{12}
\approx 2.54\ \text{m/s}^2
$$

Interpretacion:
- el cuerpo desciende acelerado,
- el rozamiento reduce casi un 39 por ciento de la componente paralela.

## 9- Aplicaciones reales
- Rampas de carga y descarga.
- Cintas inclinadas en industria.
- Carreteras en pendientes.
- Diseno de accesibilidad y seguridad.
- Analisis de frenado en vias inclinadas.

## 10- Sintesis final
Dominar planos inclinados significa saber conectar geometria del angulo, contacto y friccion para decidir con criterio si un cuerpo sube, baja o queda en equilibrio limite.
