# Magnitudes Angulares

## Idea clave
Theta, omega y alpha son el lenguaje base de cualquier problema de rotacion.

## 1- Que estudia este tema y por que importa
Define posicion, velocidad y aceleracion angulares con unidades coherentes.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- Theta ubica estado angular.
- Omega mide tasa de giro.
- Alpha mide variacion de omega.

## 3- Que se calcula en este subtema
- \(\theta\): posición angular (rad) - Orientación angular respecto a un origen elegido.
- \(\theta_0\): posición angular inicial (rad) - Posición angular en el instante inicial.
- \(\Delta\theta\): desplazamiento angular (rad) - Variación de la posición angular (θ_f − θ_i).
- \(\omega\): velocidad angular (rad/s) - Ritmo de cambio de la posición angular.
- \(\omega_0\): velocidad angular inicial (rad/s) - Velocidad angular inicial.
- \(\Delta\omega\): variación de velocidad angular (rad/s) - Cambio de velocidad angular entre dos instantes.
- \(\alpha\): aceleración angular (rad/s^2) - Ritmo de cambio de la velocidad angular.
- \(t\): tiempo (s) - Tiempo transcurrido.
- \(\Delta t\): intervalo de tiempo (s) - Diferencia de tiempos (t_f − t_i).

## 4- Como se calcula (ecuaciones y lectura fisica)
- Desplazamiento angular

$$
\Delta\theta = \theta - \theta_0
$$

- Velocidad angular media

$$
\omega_{\text{med}} = \frac{\Delta\theta}{\Delta t}
$$

- Aceleración angular media

$$
\alpha_{\text{med}} = \frac{\Delta\omega}{\Delta t}
$$

- Velocidad angular (α constante)

$$
\omega = \omega_0 + \alpha t
$$

- Posición angular (α constante)

$$
\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2
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
Delta theta=12 rad en Delta t=3 s

$$
\Delta\theta = \theta - \theta_0
$$

$$
\omega_{\text{med}} = \frac{\Delta\theta}{\Delta t}
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Servomotores y control de ejes.
- Instrumentacion rotativa.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
