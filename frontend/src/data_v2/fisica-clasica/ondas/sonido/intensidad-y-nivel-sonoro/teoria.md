# Intensidad Y Nivel Sonoro

## Idea clave
La intensidad sonora mide energia fisica por unidad de area y tiempo. El nivel sonoro en decibelios es una escala logaritmica para comparar intensidades de manera util en rangos muy amplios.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema conecta magnitudes fisicas reales (potencia e intensidad) con su representacion perceptiva y tecnica en dB.

Importa porque evita errores muy comunes:
- tratar los decibelios como escala lineal,
- sumar o restar dB sin criterio,
- confundir "mas dB" con "doble intensidad".

## 2- Mecanismo fisico: flujo de energia sonora
Una fuente sonora entrega potencia acustica \(P\). Esa potencia se reparte sobre una superficie de propagacion.

Por eso la intensidad \(I\) es:
- mayor cerca de la fuente,
- menor al aumentar el area de distribucion,
- dependiente del modelo geometrico (fuente puntual, directividad, reflexiones).

En campo libre ideal para fuente puntual, la energia se reparte sobre esferas de radio \(r\), y aparece ley inversa al cuadrado.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(I\): intensidad sonora (W/m^2).
- \(P\): potencia acustica de la fuente (W).
- \(A\): area de reparto de potencia (m^2).
- \(r\): distancia a fuente puntual (m).
- \(I_0\): intensidad de referencia (W/m^2).
- \(\beta\): nivel sonoro en decibelios (dB).
- \(\Delta\beta\): diferencia de niveles (dB).
- \(I_1, I_2\): intensidades para comparacion.

## 4- Formulacion matematica esencial
Definicion de intensidad:

$$
I=\frac{P}{A}
$$

Fuente puntual isotropica en campo libre:

$$
I=\frac{P}{4\pi r^2}
$$

Nivel sonoro relativo a referencia:

$$
\beta=10\log_{10}\left(\frac{I}{I_0}\right)
$$

Despeje de intensidad desde nivel:

$$
I=I_0\,10^{\beta/10}
$$

Comparacion entre dos intensidades:

$$
\Delta\beta=10\log_{10}\left(\frac{I_2}{I_1}\right)
$$

Lectura fisica clave:
- +3 dB implica aproximadamente el doble de intensidad,
- +10 dB implica 10 veces intensidad,
- al duplicar distancia en fuente puntual ideal, la intensidad cae a la cuarta parte (aprox -6 dB).

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
Modelo base valido cuando:
- campo libre aproximado,
- fuente puntual o geometria conocida,
- medio sin absorcion dominante en trayecto corto,
- medida sin saturacion instrumental.

Debe corregirse cuando:
- hay reflexiones intensas (recintos reverberantes),
- hay directividad fuerte de fuente,
- hay atenuacion del medio significativa,
- se mezclan varias fuentes no coherentes sin tratamiento adecuado.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` verifica:
1. Caida de \(I\) con \(r\) segun \(1/r^2\).
2. Relacion no lineal entre \(I\) y \(\beta\).
3. Efecto de cambios de potencia sobre dB.

Si una tendencia visual no coincide con estas reglas, hay error de modelo o de unidades.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Define si te piden magnitud fisica (\(I\), \(P\), \(r\)) o logaritmica (\(\beta\)).
2. Selecciona formula acorde al escenario (general o fuente puntual).
3. Convierte todos los datos a SI.
4. Despeja en simbolico antes de sustituir.
5. Calcula y valida orden de magnitud.
6. Interpreta resultado: cambio real de energia, no solo cambio numerico en dB.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- sumar niveles en dB como si fueran intensidades lineales,
- usar \(\log\) natural en lugar de \(\log_{10}\),
- olvidar \(I_0\) o usar referencia incorrecta,
- aplicar ley de \(1/r^2\) en interiores reverberantes sin criterio,
- perder SI en potencia o area.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
La competencia real aparece cuando puedes pasar de potencia y geometria de fuente a nivel en dB y explicar fisicamente la diferencia entre "mas energia" y "mas percepcion".

## 10- Ejemplo guia corto
Datos: fuente puntual con \(P=0.10\,\mathrm{W}\), \(r=2.0\,\mathrm{m}\), \(I_0=10^{-12}\,\mathrm{W/m^2}\).

Paso 1- intensidad:

$$
I=\frac{0.10}{4\pi(2.0)^2}=1.99\times10^{-3}\,\mathrm{W/m^2}
$$

Paso 2- nivel sonoro:

$$
\beta=10\log_{10}\left(\frac{1.99\times10^{-3}}{10^{-12}}\right)\approx93\,\mathrm{dB}
$$

Interpretacion: nivel elevado tipico de fuente intensa a corta distancia.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- evaluacion de ruido laboral y ambiental,
- diseno de aislamiento y acondicionamiento acustico,
- calibracion de sensores de nivel sonoro,
- ingenieria de audio y control de potencia sonora.

## 12- Sintesis final
Dominar este subtema significa traducir con rigor entre magnitudes energeticas y escala logaritmica, con criterio de modelo y lectura fisica correcta.
