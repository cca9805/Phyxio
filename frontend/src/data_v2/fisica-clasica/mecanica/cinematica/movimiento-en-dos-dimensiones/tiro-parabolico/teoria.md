# Tiro Parabolico

## Idea clave
El tiro parabolico es el caso 2D general con velocidad inicial inclinada.

## 1- Que estudia este tema y por que importa
Permite hallar alcance, altura maxima y tiempo de vuelo.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- Se descompone v0 en x e y.
- x es lineal e y cuadratica.
- La trayectoria resultante es parabolica.

## 3- Que se calcula en este subtema
- \(x\): posición horizontal (m) - Coordenada horizontal del proyectil.
- \(y\): posición vertical (m) - Coordenada vertical del proyectil.
- \(x_0\): posición horizontal inicial (m) - Posición horizontal en el instante t = 0.
- \(y_0\): posición vertical inicial (m) - Altura inicial del lanzamiento en t = 0.
- \(t\): tiempo (s) - Tiempo transcurrido desde el lanzamiento.
- \(v_0\): velocidad inicial (m/s) - Módulo de la velocidad de lanzamiento.
- \(\theta\): ángulo de lanzamiento (rad) - Ángulo de la velocidad inicial respecto a la horizontal. (En práctica, a menudo se introduce en grados.)
- \(v_{x0}\): componente horizontal inicial (m/s) - Componente horizontal de la velocidad inicial: vx0 = v0 cos(theta).
- \(v_{y0}\): componente vertical inicial (m/s) - Componente vertical de la velocidad inicial: vy0 = v0 sin(theta).
- \(v_x\): velocidad horizontal (m/s) - Velocidad horizontal (constante): vx = vx0.
- \(v_y\): velocidad vertical (m/s) - Velocidad vertical en el instante t: vy = vy0 - g t.
- \(g\): aceleración de la gravedad (m/s^2) - Magnitud de la gravedad (positiva). La aceleración vertical es a_y = -g si y positivo hacia arriba.
- \(R\): alcance (m) - Desplazamiento horizontal total hasta el impacto (cuando y = 0 en el caso y0 = 0).
- \(h_{\max}\): altura máxima (m) - Altura máxima alcanzada (en lanzamiento hacia arriba).
- \(t_{\text{vuelo}}\): tiempo de vuelo (s) - Tiempo total hasta volver al suelo (caso y0 = 0) o hasta impactar (caso general).

## 4- Como se calcula (ecuaciones y lectura fisica)
- Componentes de la velocidad inicial

$$
v_{x0} = v_0 \cos\theta
$$

- Componente vertical inicial

$$
v_{y0} = v_0 \sin\theta
$$

- Posición horizontal

$$
x = x_0 + v_{x0} t
$$

- Posición vertical

$$
y = y_0 + v_{y0} t - \frac{1}{2} g t^2
$$

- Velocidad vertical en función del tiempo

$$
v_y = v_{y0} - g t
$$

## 5- Por que el modelo es asi
- La forma de las ecuaciones no es arbitraria: sale de como cambian las magnitudes en el tiempo dentro de este modelo.
- Si cambian las hipotesis (eje, rozamiento, marco, aceleracion no constante), cambia tambien la ecuacion valida.
- Por eso primero se valida el modelo y despues se sustituye.

## 6- Metodo de resolucion paso a paso
1. Define incognita y datos en SI.
2. Selecciona ecuacion del subtema.
3. Despeja en simbolico.
4. Sustituye y calcula.
5. Valida signo, unidad y orden de magnitud.

## 7- Dudas tipicas del estudiante (y respuesta)
- **Que se calcula exactamente en este subtema**
  Se calculan las magnitudes cinematicas que describen el estado del movimiento (posicion, velocidad, aceleracion o sus analogos angulares) en un instante o intervalo.
- **Como elijo la ecuacion correcta sin memorizar a ciegas**
  Primero identifica el modelo (uniforme, acelerado, circular, relativo, etc.), luego selecciona la ecuacion que usa justo los datos disponibles y la incognita pedida.
- **Por que a veces me sale un resultado numerico pero fisicamente absurdo**
  Porque un numero solo no garantiza validez: debes revisar signos, unidades, marco de referencia y dominio de aplicacion del modelo.
- **Por que la trayectoria es parabolica**
  Porque x(t) es lineal e y(t) es cuadratica; al eliminar t se obtiene una relacion y(x) de segundo grado.

## 8- Ejemplo guiado completo
v0=30 m/s, theta=40 deg, g=9.8

$$
v_{x0} = v_0 \cos\theta
$$

$$
v_{y0} = v_0 \sin\theta
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Deportes y balistica elemental.
- Robotica educativa.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
