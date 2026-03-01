# Encuentros Y Persecuciones

## Idea clave
El encuentro ocurre cuando dos ecuaciones de posicion se igualan en el mismo marco y tiempo.

## 1- Que estudia este tema y por que importa
Integra MRU/MRUA y movimiento relativo para hallar tiempo y punto de cruce.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- Se escriben xA(t) y xB(t).
- Se impone xA=xB.
- Se descartan tiempos no fisicos.

## 3- Que se calcula en este subtema
- \(x_{A0}\): posición inicial de A (m)
- \(x_{B0}\): posición inicial de B (m)
- \(v_A\): velocidad de A (m/s)
- \(v_B\): velocidad de B (m/s)
- \(a_A\): aceleración de A (MRUA) (m/s^2)
- \(a_B\): aceleración de B (MRUA) (m/s^2)
- \(\Delta t\): retraso de salida de B (s)
- \(t\): tiempo desde que sale A (s)
- \(x_*\): posición de encuentro (m)

## 4- Como se calcula (ecuaciones y lectura fisica)
- Encuentro MRU vs MRU (sin retraso)

$$
t = \frac{x_{B0}-x_{A0}}{v_A - v_B}
$$

- Encuentro MRU vs MRU (B sale tarde)

$$
t = \frac{x_{B0}-x_{A0}-v_B\Delta t}{v_A - v_B}
$$

- Encuentro con MRUA (modo lectura)

$$
x_{A0}+v_{A0}t+\frac{1}{2}a_A t^2 = x_{B0}+v_{B0}t+\frac{1}{2}a_B t^2
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
- **Cual es la condicion universal de encuentro**
  Que ambos moviles tengan la misma posicion en el mismo instante dentro del mismo sistema de referencia.

## 8- Ejemplo guiado completo
xA0=0, vA=12; xB0=180, vB=6

$$
t = \frac{x_{B0}-x_{A0}}{v_A - v_B}
$$

$$
t = \frac{x_{B0}-x_{A0}-v_B\Delta t}{v_A - v_B}
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Intercepcion en trafico.
- Planificacion de maniobras.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
