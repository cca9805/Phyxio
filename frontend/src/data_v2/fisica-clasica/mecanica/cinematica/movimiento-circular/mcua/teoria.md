# Movimiento Circular Uniformemente Acelerado (MCUA)

## Idea clave
En MCUA la aceleracion angular es constante.

## 1- Que estudia este tema y por que importa
Modela arranque y frenado angular en sistemas rotativos.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- Alpha constante => omega lineal en t.
- Theta incluye t^2.
- Coexisten aceleracion tangencial y normal.

## 3- Que se calcula en este subtema
- \(\theta\): posición angular (rad) - Ángulo respecto a una referencia.
- \(\theta_0\): posición angular inicial (rad) - Ángulo en t = 0.
- \(\omega\): velocidad angular (rad/s) - Derivada de θ. En MCUA varía con el tiempo.
- \(\omega_0\): velocidad angular inicial (rad/s) - Velocidad angular en t = 0.
- \(\alpha\): aceleración angular (rad/s^2) - Constante en MCUA.
- \(t\): tiempo (s) - Tiempo transcurrido.
- \(R\): radio (m) - Radio de la trayectoria circular (constante).
- \(v\): rapidez lineal (m/s) - Rapidez tangencial: v = ωR.
- \(a_t\): aceleración tangencial (m/s^2) - Cambia el módulo de v: a_t = αR.
- \(a_c\): aceleración centrípeta (m/s^2) - Dirigida al centro: a_c = ω^2 R.
- \(\Delta\theta\): desplazamiento angular (rad) - Δθ = θ − θ0.

## 4- Como se calcula (ecuaciones y lectura fisica)
- Velocidad angular

$$
\omega = \omega_0 + \alpha t
$$

- Posición angular

$$
\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2
$$

- Relación sin tiempo

$$
\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)
$$

- Aceleración tangencial

$$
a_t = \alpha R
$$

- Aceleración centrípeta

$$
a_c = \omega^2 R
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

## 8- Ejemplo guiado completo
omega0=5, alpha=2, t=4, R=0.3

$$
\omega = \omega_0 + \alpha t
$$

$$
\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Motores electricos.
- Frenado angular controlado.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
