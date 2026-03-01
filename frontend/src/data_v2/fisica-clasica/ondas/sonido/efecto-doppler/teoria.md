# Efecto Doppler

## Idea clave
El efecto Doppler es un cambio de frecuencia observada causado por movimiento relativo entre fuente, medio y observador. En sonido, el medio importa y el convenio de signos es decisivo.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica por que una sirena suena mas aguda al acercarse y mas grave al alejarse, aunque la fuente emita siempre la misma frecuencia propia.

Es esencial porque:
- evita errores de signos,
- conecta cinemática con propagacion de ondas,
- permite interpretar mediciones en trafico, medicina y navegacion.

## 2- Mecanismo fisico del corrimiento
En sonido, la fuente en movimiento comprime o separa frentes de onda en el medio:
- al acercarse, los frentes llegan mas juntos al observador \(\Rightarrow\) sube \(f_{obs}\),
- al alejarse, llegan mas separados \(\Rightarrow\) baja \(f_{obs}\).

Si quien se mueve es el observador, cambia la tasa de encuentro con frentes de onda aunque la separacion entre frentes en el medio sea la misma.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(f_0\): frecuencia emitida por la fuente (Hz).
- \(f_{obs}\): frecuencia observada (Hz).
- \(v\): velocidad de propagacion en el medio (m/s).
- \(v_o\): velocidad del observador respecto al medio (m/s).
- \(v_s\): velocidad de la fuente respecto al medio (m/s).
- \(\Delta f\): corrimiento de frecuencia (Hz).
- \(z\): corrimiento relativo \((f_0-f_{obs})/f_{obs}\) en notacion comparativa.

## 4- Formulacion matematica esencial
Forma general clasica en 1D (con signo algebraico coherente):

$$
f_{obs}=f_0\frac{v+v_o}{v-v_s}
$$

Interpretacion de signo:
- \(v_o>0\): observador moviendose hacia la fuente.
- \(v_s>0\): fuente moviendose hacia el observador.

Casos utiles (modulos positivos):

Acercamiento mutuo:

$$
f_{obs}=f_0\frac{v+|v_o|}{v-|v_s|}
$$

Alejamiento mutuo:

$$
f_{obs}=f_0\frac{v-|v_o|}{v+|v_s|}
$$

Fuente fija:

$$
f_{obs}=f_0\frac{v+v_o}{v}
$$

Observador fijo:

$$
f_{obs}=f_0\frac{v}{v-v_s}
$$

Corrimiento en Hz:

$$
\Delta f=f_{obs}-f_0
$$

Aproximacion de baja velocidad (\(|v_o|,|v_s|\ll v\)):

$$
\frac{\Delta f}{f_0}\approx\frac{v_o+v_s}{v}
$$

Lectura fisica clave:
- en sonido, el medio define \(v\) y rompe simetria total entre fuente y observador,
- si \(v_s\to v\) en aproximacion clasica frontal, el modelo entra en limite singular (frente de choque).

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
Valido cuando:
- regimen clasico no relativista,
- medio aproximadamente en reposo global,
- movimiento casi rectilineo en linea de vision,
- velocidades claramente menores que \(v\).

No valido o requiere refinamiento cuando:
- hay viento significativo (medio en movimiento),
- trayectorias 2D/3D con angulos variables sin proyectar,
- regimen relativista (ondas electromagneticas),
- proximidad a onda de choque.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` comprueba:
1. Compresion de frentes por delante de la fuente cuando se acerca.
2. Dilatacion de frentes por detras al alejarse.
3. Cambio monotono de \(f_{obs}\) al variar \(v_o\) o \(v_s\).

Si la tendencia visual no coincide con el calculo, revisa signos y referencia de movimiento.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Dibuja eje y define sentido positivo.
2. Decide quien se mueve respecto al medio.
3. Asigna signos de \(v_o\) y \(v_s\) con criterio consistente.
4. Selecciona forma general o caso particular.
5. Despeja en simbolico y luego sustituye en SI.
6. Verifica si \(f_{obs}>f_0\) o \(<f_0\) coincide con intuicion fisica.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- usar signos por memoria sin dibujar el eje,
- confundir velocidad de fuente respecto al aire con respecto al observador,
- aplicar formula de sonido a luz sin cambiar modelo,
- ignorar que viento altera velocidad efectiva de propagacion,
- aceptar resultado sin validar tendencia fisica.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
Dominas este subtema cuando puedes justificar el signo del corrimiento antes de calcular el numero.

## 10- Ejemplo guia corto
Datos: \(f_0=800\,\mathrm{Hz}\), \(v=340\,\mathrm{m/s}\), observador en reposo, fuente acercandose con \(v_s=30\,\mathrm{m/s}\).

$$
f_{obs}=800\frac{340}{340-30}=877.4\,\mathrm{Hz}
$$

Interpretacion: aumenta frecuencia observada por compresion de frentes.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- radar y control de velocidad (analogia ondulatoria),
- ecografia Doppler en hemodinamica,
- meteorologia Doppler,
- navegacion y localizacion acustica.

## 12- Sintesis final
Dominar Doppler significa controlar signos, modelo y validez fisica para convertir movimiento relativo en corrimiento de frecuencia fiable.
