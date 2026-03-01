# Sin Rozamiento

## Idea clave
En un plano inclinado ideal sin rozamiento, la aceleracion no depende de la masa: depende solo de la gravedad y del angulo del plano, porque la fuerza paralela efectiva es \(mg\sin\theta\).

## 1- Que fenomeno estudia este subtema
Este subtema analiza el caso base de rampa ideal: un bloque que puede deslizar sin friccion.

Es el modelo de referencia para:
- entender la descomposicion del peso,
- fijar el planteamiento por ejes,
- comparar luego con el caso real con rozamiento.

## 2- Base conceptual: por que hay que rotar ejes
Si usas ejes horizontal-vertical, el problema se complica.
Si usas ejes paralelo-perpendicular al plano, el problema se simplifica:
- en el eje perpendicular no hay aceleracion,
- en el eje paralelo se resuelve todo el movimiento.

## 3- Elementos que debes identificar siempre
- \(m\): masa del bloque.
- \(g\): gravedad.
- \(\theta\): angulo del plano.
- \(N\): normal.
- \(P_{\parallel}=mg\sin\theta\): componente paralela del peso.
- \(P_{\perp}=mg\cos\theta\): componente perpendicular del peso.
- \(a\): aceleracion sobre el plano.

## 4- Formulacion matematica minima (y lectura fisica)
Descomposicion del peso:

$$
P_{\parallel}=mg\sin\theta,\qquad P_{\perp}=mg\cos\theta
$$

Equilibrio normal:

$$
N=mg\cos\theta
$$

Dinamica sobre el plano:

$$
mg\sin\theta=ma
$$

Resultado:

$$
a=g\sin\theta
$$

Lectura fisica:
- \(\theta=0\) implica \(a=0\),
- al aumentar \(\theta\), aumenta \(a\),
- en limite ideal \(\theta\to 90^\circ\), \(a\to g\).

## 5- Cuando aplica este modelo (validez)
Aplica bien cuando:
- la friccion es despreciable,
- el bloque se modela como puntual,
- la geometria del plano es fija.

No aplica directamente cuando:
- hay rozamiento apreciable,
- hay rodadura en lugar de deslizamiento,
- existen fuerzas externas adicionales no incluidas.

## 6- Metodo de resolucion para problemas tipo
1. Dibuja el diagrama de fuerzas.
2. Define ejes paralelo/perpendicular.
3. Proyecta el peso en ambos ejes.
4. Resuelve \(N\) en eje perpendicular.
5. Resuelve \(a\) en eje paralelo.
6. Comprueba resultado con limites fisicos del angulo.

## 7- Errores frecuentes que bloquean el aprendizaje
- Intercambiar seno y coseno al proyectar.
- Mantener ejes horizontal-vertical sin necesidad.
- Creer que la masa cambia la aceleracion en este caso ideal.
- Olvidar definir el sentido positivo sobre el plano.

## 8- Ejemplo guia (de principio a fin)
Datos: \(\theta=30^\circ\), \(g=9.8\ \text{m/s}^2\).

$$
a=g\sin\theta=9.8\sin 30^\circ=9.8(0.5)=4.9\ \text{m/s}^2
$$

Si \(m=2\ \text{kg}\), la normal seria:

$$
N=mg\cos 30^\circ=2(9.8)(0.866)\approx 17.0\ \text{N}
$$

Interpretacion:
la masa afecta a fuerzas, pero no a la aceleracion del caso ideal sin rozamiento.

## 9- Aplicaciones reales
- Analisis base de rampas.
- Aproximaciones iniciales en mecanica de transporte inclinado.
- Comparacion con casos reales para estimar efecto de friccion.

## 10- Sintesis final
Dominar este subtema significa dominar el lenguaje de proyecciones en planos inclinados y usar un modelo ideal que sirve como referencia para todos los casos mas complejos.
