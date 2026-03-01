# Descomposicion Vectorial De Fuerzas

## Idea clave
Descomponer una fuerza es proyectarla sobre ejes elegidos para poder aplicar la segunda ley por componentes sin perder significado fisico.

## 1- Que problema resuelve la descomposicion
La ecuacion de Newton es vectorial:

$$
\sum \vec F = m\vec a
$$

Pero al resolver ejercicios trabajas con ecuaciones escalares. La descomposicion vectorial es el paso que conecta ambas cosas de forma rigurosa.

## 2- Proyeccion en ejes cartesianos
Si un vector \(\vec F\) forma angulo \(\theta\) con eje \(x\):

$$
F_x = F\cos\theta
$$

$$
F_y = F\sin\theta
$$

y

$$
\vec F = F_x\hat i + F_y\hat j
$$

No memorices sin dibujo: siempre define desde que eje mides el angulo.

## 3- Regla practica seno-coseno sin confusion
- componente sobre eje del angulo: coseno,
- componente sobre eje perpendicular: seno.

Luego ajusta signos segun direccion real del vector.

## 4- Signos: donde mas errores aparecen
El signo no lo da la funcion trigonometrica "de memoria". Lo da el sentido de la proyeccion respecto a los ejes positivos elegidos.

Procedimiento seguro:
1. Dibuja vector y ejes.
2. Proyecta geometricamente.
3. Asigna signo por sentido (+ o -).
4. Reemplaza en ecuaciones.

## 5- Caso clave en dinamica: plano inclinado
Para el peso \(mg\), si eje \(x\) es paralelo al plano y \(y\) perpendicular:

$$
P_{\parallel}=mg\sin\theta
$$

$$
P_{\perp}=mg\cos\theta
$$

Esto permite escribir:

$$
\sum F_{\parallel}=ma_{\parallel}
$$

$$
\sum F_{\perp}=ma_{\perp}
$$

y calcular normal, rozamiento y aceleracion de forma limpia.

## 6- Relacion con normal y rozamiento
La normal suele salir de la ecuacion perpendicular:

$$
\sum F_{\perp}=0 \ \text{o}\ ma_{\perp}
$$

Luego el rozamiento depende de \(N\):

$$
f_k=\mu_k N,\quad f_s\le \mu_s N
$$

Por eso, una descomposicion mal hecha del peso arrastra errores en toda la resolucion.

## 7- Metodo general de descomposicion
1. Elige ejes convenientes.
2. Identifica vectores a proyectar.
3. Dibuja triangulos de proyeccion.
4. Escribe componentes con modulo y signo.
5. Reemplaza en sumatorias por eje.
6. Verifica unidades y coherencia de sentido.

## 8- Ejemplo guiado
Fuerza \(F=50\,\text{N}\) a \(30^\circ\) sobre horizontal.

$$
F_x=50\cos30^\circ \approx 43.3\ \text{N}
$$

$$
F_y=50\sin30^\circ =25\ \text{N}
$$

Interpretacion:
- mayor aporte horizontal que vertical,
- si \(x\) era direccion de avance, este vector contribuye principalmente al avance.

## 9- Errores tipicos
- Intercambiar seno y coseno por no definir el angulo.
- Ignorar signos al pasar a ecuaciones.
- Descomponer aunque el eje ya este alineado con la fuerza.
- Tratar componentes como fuerzas nuevas independientes.
- Cambiar ejes a mitad de resolucion.

## 10- Sintesis final
La descomposicion vectorial no es un truco algebraico: es geometria aplicada a la dinamica. Si eliges bien ejes y signos, las ecuaciones quedan transparentes y el problema se resuelve con consistencia fisica.

