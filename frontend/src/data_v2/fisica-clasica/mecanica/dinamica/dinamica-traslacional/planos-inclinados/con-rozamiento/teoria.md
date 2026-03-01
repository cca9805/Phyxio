# Con Rozamiento

## Idea clave
En un plano inclinado con rozamiento, el movimiento resulta de la competencia entre la componente paralela del peso y la friccion. No siempre desliza: primero hay que comprobar si se supera el umbral estatico.

## 1- Que fenomeno estudia este subtema
Este subtema lleva el modelo ideal a un escenario realista: la superficie ofrece resistencia al movimiento.

Debes distinguir dos regimenes:
- estatico (aun no desliza),
- cinetico (ya desliza y acelera o se frena).

## 2- Base conceptual: quien gana en la rampa
Sobre el eje del plano actuan:
- \(mg\sin\theta\) (tendencia a bajar),
- \(f\) (se opone al deslizamiento o al movimiento).

Sobre el eje perpendicular:

$$
N=mg\cos\theta
$$

Con eso puedes evaluar umbral y dinamica.

## 3- Elementos que debes identificar siempre
- \(m, g, \theta\): masa, gravedad y angulo.
- \(N\): normal.
- \(\mu_s,\mu_k\): coeficientes de friccion.
- \(f_s\), \(f_k\): rozamiento estatico/cinetico.
- \(a\): aceleracion sobre el plano.

## 4- Formulacion matematica minima (y lectura fisica)
Normal:

$$
N=mg\cos\theta
$$

Umbral estatico:

$$
f_{s,\max}=\mu_s N
$$

Condicion de inicio de deslizamiento cuesta abajo:

$$
mg\sin\theta>f_{s,\max}
$$

Si desliza (modelo cinetico):

$$
f_k=\mu_k N=\mu_k mg\cos\theta
$$

$$
a=g(\sin\theta-\mu_k\cos\theta)
$$

## 5- Cuando aplican estas relaciones (modelo y validez)
Aplican bien cuando:
- puedes usar coeficientes \(\mu_s,\mu_k\) aproximadamente constantes,
- el contacto es suficientemente estable,
- el movimiento se reduce a una direccion sobre el plano.

Debes ampliar modelo cuando:
- hay velocidad alta con friccion no lineal,
- hay vibracion importante,
- existe rodadura o deformacion apreciable.

## 6- Metodo de resolucion para problemas tipo
1. Dibuja fuerzas y define ejes del plano.
2. Calcula \(N\).
3. Compara \(mg\sin\theta\) con \(\mu_s N\) para decidir si desliza.
4. Si no desliza, \(a=0\).
5. Si desliza, usa \(f_k=\mu_k N\) y resuelve \(a\).
6. Interpreta el signo y magnitud de \(a\).

## 7- Errores frecuentes que bloquean el aprendizaje
- Usar \(\mu_k\) para decidir inicio de movimiento.
- Omitir la comprobacion del umbral estatico.
- Cambiar sentido de friccion sin justificar.
- Intercambiar seno/coseno al proyectar.

## 8- Ejemplo guia (de principio a fin)
Datos: \(\theta=30^\circ\), \(\mu_s=0.60\), \(\mu_k=0.40\), \(g=9.8\).

Paso 1. Comprobar inicio:

$$
\tan\theta=\tan 30^\circ=0.577<\mu_s=0.60
$$

No desliza desde reposo: \(a=0\).

Si el bloque ya esta deslizandose, entonces:

$$
a=g(\sin\theta-\mu_k\cos\theta)=9.8(0.5-0.4\cdot 0.866)\approx 1.50\ \text{m/s}^2
$$

## 9- Aplicaciones reales
- Frenado y traccion en pendientes.
- Seguridad de cargas en rampas.
- Diseno de cintas transportadoras inclinadas.
- Analisis de estabilidad en planos de apoyo.

## 10- Sintesis final
Dominar este subtema significa decidir correctamente el regimen de friccion antes de calcular y despues interpretar si el resultado es coherente con la fisica del contacto.
