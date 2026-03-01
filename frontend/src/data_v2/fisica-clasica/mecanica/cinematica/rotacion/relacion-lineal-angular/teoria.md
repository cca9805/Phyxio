# Relacion Lineal-Angular

## Idea clave
Conecta magnitudes angulares con medidas lineales en puntos de un cuerpo que gira.

## 1- Que estudia este tema y por que importa
Permite convertir entre theta-omega-alpha y s-vt-at-an.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- s=r theta.
- vt=omega r.
- an depende de omega^2 r.

## 3- Que se calcula en este subtema
- \(r\): radio (m) - Distancia al eje de giro.
- \(s\): longitud_arco (m) - Longitud recorrida sobre la circunferencia.
- \(\theta\): posicion_angular (rad) - Ángulo (en radianes).
- \(\omega\): velocidad_angular (rad/s) - Ritmo de cambio angular.
- \(\alpha\): aceleracion_angular (rad/s^2) - Ritmo de cambio de ω.
- \(v_t\): velocidad_tangencial (m/s) - Velocidad lineal tangencial del punto.
- \(a_t\): aceleracion_tangencial (m/s^2) - Aceleración lineal tangencial.
- \(a_n\): aceleracion_normal (m/s^2) - Aceleración normal (centrípeta).

## 4- Como se calcula (ecuaciones y lectura fisica)
- Longitud de arco

$$
s = r\,\theta
$$

- Velocidad tangencial

$$
v_t = \omega\,r
$$

- Aceleración tangencial

$$
a_t = \alpha\,r
$$

- Aceleración normal (centrípeta)

$$
a_n = \omega^2\,r
$$

- Aceleración normal (con v_t)

$$
a_n = \frac{v_t^2}{r}
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
omega=20 rad/s, r=0.15 m

$$
s = r\,\theta
$$

$$
v_t = \omega\,r
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Diseno de transmisiones.
- Analisis de periferia de discos.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
