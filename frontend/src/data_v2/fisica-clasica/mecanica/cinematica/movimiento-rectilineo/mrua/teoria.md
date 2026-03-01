# Movimiento Rectilineo Uniformemente Acelerado (MRUA)

## Idea clave
En MRUA la aceleracion es constante y la posicion tiene termino cuadratico en el tiempo.

## 1- Que estudia este tema y por que importa
Describe arranques, frenadas y variaciones lineales de velocidad.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- a constante => v lineal en t.
- x integra v y aparece t^2.
- Torricelli evita pasar por t cuando conviene.

## 3- Que se calcula en este subtema
- \(x\): posición (m) - Posición sobre el eje x.
- \(x_0\): posición inicial (m) - Posición en t = 0.
- \(v\): velocidad (m/s) - Velocidad en un instante.
- \(v_0\): velocidad inicial (m/s) - Velocidad en t = 0.
- \(a\): aceleración (m/s^2) - Aceleración constante.
- \(t\): tiempo (s) - Tiempo transcurrido desde t = 0.
- \(\Delta x\): desplazamiento (m) - Cambio de posición (x - x0).

## 4- Como se calcula (ecuaciones y lectura fisica)
- Ecuación horaria (posición)

$$
x = x_0 + v_0 t + \frac{1}{2} a t^2
$$

- Velocidad en MRUA

$$
v = v_0 + a t
$$

- Ecuación de Torricelli

$$
v^2 = v_0^2 + 2 a (x - x_0)
$$

- Desplazamiento con velocidad media (a constante)

$$
\Delta x = \frac{(v_0 + v)}{2}\,t
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
- **Por que aparece t^2 en la posicion**
  Porque la velocidad cambia con el tiempo; al integrar una funcion lineal en t, la posicion adquiere termino cuadratico.

## 8- Ejemplo guiado completo
x0=0, v0=4 m/s, a=2 m/s^2, t=5 s

$$
x = x_0 + v_0 t + \frac{1}{2} a t^2
$$

$$
v = v_0 + a t
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Frenado de vehiculos.
- Arranque de maquinaria lineal.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
