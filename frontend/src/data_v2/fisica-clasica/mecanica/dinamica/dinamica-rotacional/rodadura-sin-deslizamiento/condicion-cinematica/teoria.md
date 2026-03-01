# Condicion Cinematica

## Idea clave
Un cuerpo rueda sin deslizar cuando el punto de contacto con el suelo tiene velocidad instantanea nula respecto al suelo. Esa condicion conecta traslacion y rotacion con una relacion simple: \(v = \omega R\).

## 1- Que fenomeno estudia este subtema
Este subtema responde una duda basica de mecanica: como puede un cuerpo avanzar y girar a la vez sin patinar

En rodadura pura hay dos movimientos simultaneos:
- traslacion del centro de masas,
- rotacion alrededor del centro.

La compatibilidad entre ambos la fija una sola condicion cinematica.

## 2- Base conceptual: que se mueve y que no se mueve
En una rueda que rueda sin deslizar:
- el centro de masas si se mueve con velocidad \(v\),
- el borde de la rueda gira con velocidad tangencial \(\omega R\),
- el punto de contacto, en ese instante, queda en reposo respecto al suelo.

Eso no significa que ese punto "se quede quieto siempre", sino solo en el instante en que toca el suelo.

## 3- Elementos que debes identificar sin error
- \(v\): velocidad lineal del centro de masas (m/s).
- \(\omega\): velocidad angular (rad/s).
- \(R\): radio de la rueda o cilindro (m).
- \(v_{contacto}\): velocidad del punto de contacto respecto al suelo (m/s).
- \(a\): aceleracion lineal del centro de masas (m/s^2).
- \(\alpha\): aceleracion angular (rad/s^2).

## 4- Formulacion matematica minima (y lectura fisica)
Condicion de rodadura pura:

$$
v = \omega R
$$

Lectura del punto de contacto:

$$
v_{contacto}=v-\omega R=0
$$

Relacion de aceleraciones tangenciales (cuando \(R\) es constante):

$$
a = \alpha R
$$

Estas ecuaciones no salen de fuerzas todavia; son restricciones cinematicas del movimiento.

## 5- Cuando aplica esta condicion (modelo y validez)
Aplica bien cuando:
- no hay deslizamiento en el contacto,
- el cuerpo puede modelarse como rigido,
- el radio efectivo de rodadura es constante.

Debes revisar el modelo cuando:
- hay patinamiento (frenada o aceleracion brusca),
- hay deformaciones grandes del neumatico,
- hay contacto complejo con superficies blandas.

## 6- Metodo de resolucion para problemas de rodadura cinematica
1. Define convenio de signos para \(v\) y \(\omega\).
2. Verifica si el enunciado indica rodadura sin deslizamiento.
3. Aplica \(v=\omega R\) o su despeje segun la incognita.
4. Si hay aceleraciones, usa \(a=\alpha R\).
5. Comprueba unidades y coherencia de signos.
6. Interpreta si el resultado es fisicamente plausible.

## 7- Errores frecuentes que bloquean el aprendizaje
- Usar \(v=\omega R\) cuando el sistema esta patinando.
- Mezclar rpm con rad/s sin convertir.
- Ignorar el signo de \(\omega\) al usar una convencion de sentidos.
- Confundir reposo instantaneo del contacto con reposo permanente.

## 8- Ejemplo guia (de principio a fin)
Una rueda de radio \(R=0.30\ \text{m}\) gira con \(\omega=10\ \text{rad/s}\) y rueda sin deslizar.

Paso 1. Velocidad lineal:

$$
v=\omega R=10\cdot 0.30=3.0\ \text{m/s}
$$

Paso 2. Verificacion de contacto:

$$
v_{contacto}=v-\omega R=3.0-3.0=0
$$

Interpretacion:
el dato es compatible con rodadura pura.

## 9- Aplicaciones reales
- Odometria de robots y vehiculos.
- Ajuste de rodillos y cintas transportadoras.
- Analisis de traccion y frenada sin derrape.
- Modelado inicial de ruedas en ingenieria mecanica.

## 10- Sintesis final
Dominar esta condicion significa identificar rapidamente si hay rodadura pura y conectar correctamente variables lineales y angulares antes de pasar a dinamica o energia.
