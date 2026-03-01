# Aplicaciones

## Idea clave
Este subtema integra la fisica del sonido en problemas reales: medir distancias por eco, evaluar niveles en dB, interpretar corrimiento Doppler y tomar decisiones tecnicas con criterio cuantitativo.

## 1- Que fenomeno explica este subtema y por que importa
Aqui no se introduce una sola formula nueva, sino el uso coordinado de varios modelos de sonido para resolver escenarios completos.

Importa porque en aplicaciones reales nunca aparece una ecuacion aislada: hay que elegir modelo, validar supuestos y cruzar resultados.

## 2- Mapa de problemas reales que resuelve
Este subtema cubre cuatro bloques operativos:
1. Tiempo de vuelo y eco para distancia y localizacion.
2. Intensidad y nivel sonoro para seguridad y control de ruido.
3. Doppler para inferir movimiento relativo.
4. Conversion entre magnitudes fisicas (SI) y escalas tecnicas (dB).

## 3- Variables y parametros clave (ver tab `Leyenda`)
- \(v,\lambda,f,T\): nucleo ondulatorio.
- \(d,t,t_{echo}\): geometria y tiempo de vuelo.
- \(P,I,r,I_0,\beta\): energia y nivel sonoro.
- \(f_0,f_{obs},v_o,v_s,\Delta f\): Doppler y corrimiento.

## 4- Formulacion matematica esencial
Relacion de propagacion:

$$
v=\lambda f
$$

Periodo:

$$
T=\frac{1}{f}
$$

Distancia por eco:

$$
d=\frac{vt_{echo}}{2}
$$

Intensidad de fuente puntual:

$$
I=\frac{P}{4\pi r^2}
$$

Nivel sonoro:

$$
\beta=10\log_{10}\left(\frac{I}{I_0}\right)
$$

Doppler clasico 1D:

$$
f_{obs}=f_0\frac{v+v_o}{v-v_s}
$$

Corrimiento en frecuencia:

$$
\Delta f=f_{obs}-f_0
$$

## 5- Modelo y validez (ver tab `Modelo y validez`)
Para aplicar bien este tema debes verificar:
- medio y velocidad de propagacion adecuados,
- geometria de campo libre para \(1/r^2\),
- referencia \(I_0\) correcta en dB,
- convenio de signos consistente en Doppler.

Si falla cualquiera de estos puntos, el resultado numerico puede ser formalmente correcto y fisicamente incorrecto.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` valida tres tendencias:
1. El eco devuelve distancia proporcional a tiempo y velocidad.
2. El nivel en dB crece logaritmicamente con intensidad.
3. El corrimiento Doppler cambia de signo segun acercamiento o alejamiento.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Identifica bloque del problema (eco, nivel, Doppler o mixto).
2. Dibuja esquema fisico y define incognita.
3. Selecciona ecuacion minima del bloque.
4. Convierte a SI y despeja en simbolico.
5. Sustituye, calcula y verifica orden de magnitud.
6. Interpreta resultado en contexto aplicado.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- olvidar el factor 2 en eco,
- operar dB como magnitud lineal,
- usar signos Doppler sin definir eje,
- mezclar parametros de distintos medios,
- dar resultado sin criterio de validez del modelo.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
Este subtema se domina cuando puedes encadenar correctamente modelos: por ejemplo, estimar distancia por eco y despues evaluar si el nivel recibido es util o seguro.

## 10- Ejemplo guia integrador
Datos:
- \(v=343\,\mathrm{m/s}\),
- \(t_{echo}=0.20\,\mathrm{s}\),
- \(P=0.50\,\mathrm{W}\),
- \(r=10\,\mathrm{m}\),
- \(I_0=10^{-12}\,\mathrm{W/m^2}\).

Paso 1- distancia por eco:

$$
d=\frac{343\cdot0.20}{2}=34.3\,\mathrm{m}
$$

Paso 2- intensidad a 10 m:

$$
I=\frac{0.50}{4\pi(10)^2}=3.98\times10^{-4}\,\mathrm{W/m^2}
$$

Paso 3- nivel sonoro:

$$
\beta=10\log_{10}\left(\frac{3.98\times10^{-4}}{10^{-12}}\right)\approx86\,\mathrm{dB}
$$

Interpretacion: objeto a 34.3 m y señal con nivel alto en condiciones de campo libre.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- ultrasonido y sensores de distancia,
- monitoreo de ruido industrial,
- control de trafico y velocidad,
- navegacion acustica y ensayos de campo.

## 12- Sintesis final
Dominar este subtema significa seleccionar y combinar modelos de sonido con criterio de validez para resolver problemas reales de principio a fin.
