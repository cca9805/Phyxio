# Cinematica Rotacional

## Idea clave
La cinematica rotacional extiende MRUA al giro.

## 1- Que estudia este tema y por que importa
Relaciona theta, omega y alpha para predecir estado angular en el tiempo.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- Se usan ecuaciones equivalentes a las lineales.
- La version sin tiempo evita pasos innecesarios.
- La coherencia angular es clave para no errar.

## 3- Que se calcula en este subtema
- \(\theta\): posicion_angular (rad) - Orientación angular respecto a un origen.
- \(\theta_0\): posicion_angular_inicial (rad) - Posición angular en el instante inicial.
- \(\Delta\theta\): desplazamiento_angular (rad) - Cambio de posición angular.
- \(\omega\): velocidad_angular (rad/s) - Ritmo de cambio de la posición angular.
- \(\omega_0\): velocidad_angular_inicial (rad/s) - Velocidad angular inicial.
- \(\alpha\): aceleracion_angular (rad/s^2) - Ritmo de cambio de la velocidad angular.
- \(t\): tiempo (s) - Tiempo.
- \(\Delta t\): intervalo_tiempo (s) - Diferencia de tiempos.

## 4- Como se calcula (ecuaciones y lectura fisica)
- Desplazamiento angular

$$
\Delta\theta = \theta - \theta_0
$$

- Velocidad angular media

$$
\omega = \frac{\Delta\theta}{\Delta t}
$$

- Velocidad angular (α constante)

$$
\omega = \omega_0 + \alpha t
$$

- Posición angular (α constante)

$$
\theta = \theta_0 + \omega_0 t + \tfrac{1}{2}\alpha t^2
$$

- Definición de velocidad angular

$$
\omega = \frac{d\theta}{dt}
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
theta0=0, omega0=2, alpha=1.5, t=6

$$
\Delta\theta = \theta - \theta_0
$$

$$
\omega = \frac{\Delta\theta}{\Delta t}
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Arranque de rotores.
- Control temporal de giros.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
