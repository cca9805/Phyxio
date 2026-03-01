# Tiro Horizontal

## Idea clave
El tiro horizontal separa MRU en x y MRUA en y.

## 1- Que estudia este tema y por que importa
Ensenia independencia entre componentes horizontal y vertical.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- x evoluciona linealmente.
- y evoluciona con -g.
- El tiempo de vuelo lo fija el eje y.

## 3- Que se calcula en este subtema
- \(x\): posición horizontal (m) - Posición horizontal del proyectil.
- \(x_0\): posición horizontal inicial (m) - Posición horizontal en t = 0.
- \(y\): posición vertical (m) - Posición vertical del proyectil (altura si y>0).
- \(y_0\): altura inicial (m) - Posición vertical en t = 0 (altura inicial).
- \(v_0\): velocidad inicial horizontal (m/s) - Velocidad horizontal inicial (constante si no hay rozamiento).
- \(v_{x0}\): componente horizontal inicial (m/s) - Componente horizontal inicial.
- \(v_x\): velocidad horizontal (m/s) - Componente horizontal de la velocidad (vx = v0).
- \(v_y\): velocidad vertical (m/s) - Componente vertical de la velocidad (vy = -g t si v0y=0).
- \(t\): tiempo (s) - Tiempo transcurrido desde el lanzamiento (t >= 0).
- \(g\): gravedad (m/s^2) - Módulo de la aceleración de la gravedad (aprox. 9,8 m/s^2).
- \(R\): alcance (m) - Distancia horizontal recorrida hasta impactar (cuando y=0).
- \(v\): velocidad total (m/s) - Módulo de la velocidad (v = sqrt(vx^2 + vy^2)).

## 4- Como se calcula (ecuaciones y lectura fisica)
- Posición horizontal (MRU)

$$
x = x_0 + v_0 t
$$

- Posición vertical (caída libre)

$$
y = y_0 - \frac{1}{2} g t^2
$$

- Velocidad vertical

$$
v_y = - g t
$$

- Alcance horizontal

$$
R = v_0 t
$$

- Tiempo de caída (impacto en y=0)

$$
t = \sqrt{\frac{2 y_0}{g}}
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
- **Por que el tiempo de vuelo no depende de la velocidad horizontal**
  Porque el eje vertical determina el tiempo de caida; la componente horizontal solo convierte ese tiempo en alcance.

## 8- Ejemplo guiado completo
y0=20 m, v0=12 m/s, g=9.8

$$
x = x_0 + v_0 t
$$

$$
y = y_0 - \frac{1}{2} g t^2
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Balistica basica sin arrastre.
- Simulacion de trayectorias.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
