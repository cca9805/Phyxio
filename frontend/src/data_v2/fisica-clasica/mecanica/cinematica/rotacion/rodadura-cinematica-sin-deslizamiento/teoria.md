# Rodadura Sin Deslizamiento

## Idea clave
En rodadura pura se cumple vcm=omega R y no hay deslizamiento en el punto de contacto.

## 1- Que estudia este tema y por que importa
Acopla traslacion y rotacion en sistemas de rueda-suelo.

## 2- Como ocurre el fenomeno (que cambia, como cambia y por que)
- El punto de contacto instantaneo tiene velocidad relativa nula.
- vcm y omega quedan vinculadas por R.
- Los puntos del borde no comparten la misma velocidad respecto al suelo.

## 3- Que se calcula en este subtema
- \(R\): radio (m) - Radio de la rueda/cilindro.
- \(x\): desplazamiento_lineal (m) - Avance del centro de masas sobre el suelo.
- \(\theta\): posicion_angular (rad) - Ángulo girado.
- \(\omega\): velocidad_angular (rad/s) - Velocidad angular.
- \(\alpha\): aceleracion_angular (rad/s^2) - Aceleración angular.
- \(v_{cm}\): velocidad_centro_masas (m/s) - Velocidad de traslación del centro de masas.
- \(a_{cm}\): aceleracion_centro_masas (m/s^2) - Aceleración lineal del centro de masas.
- \(v_{arriba}\): velocidad_punto_superior (m/s) - Velocidad del punto superior del borde respecto al suelo (rodadura pura).
- \(v_{contacto}\): velocidad_punto_contacto (m/s) - Velocidad del punto de contacto respecto al suelo (rodadura pura 0).
- \(v_{slip}\): velocidad_deslizamiento (m/s) - Velocidad relativa en el contacto (si no hay rodadura pura).

## 4- Como se calcula (ecuaciones y lectura fisica)
- Avance y giro (rodadura pura)

$$
x = R\,\theta
$$

- Condición de rodadura sin deslizamiento (velocidad)

$$
v_{cm} = \omega\,R
$$

- Condición de rodadura sin deslizamiento (aceleración)

$$
a_{cm} = \alpha\,R
$$

- Velocidad del punto superior (rodadura pura)

$$
v_{\text{arriba}} = 2\,v_{cm}
$$

- Velocidad del punto de contacto (rodadura pura)

$$
v_{\text{contacto}} = 0
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
R=0.35 m, omega=12 rad/s

$$
x = R\,\theta
$$

$$
v_{cm} = \omega\,R
$$

Interpretacion:
- El resultado debe ser coherente con el sentido fisico del problema.

## 9- Errores tipicos y como detectarlos
- Cambiar signos sin criterio de eje.
- Mezclar unidades sin conversion.
- Usar formula fuera de su dominio de validez.

## 10- Aplicaciones reales y cierre del tema
- Vehiculos y bicicletas.
- Control de adherencia.

Cierre:
- Dominas este subtema cuando puedes justificar el modelo, calcular sin ambiguedad y explicar fisicamente el resultado final.
