# Tono Y Timbre

## Idea clave
El tono (altura percibida) se relaciona principalmente con la frecuencia fundamental. El timbre depende de la "huella" espectral y temporal del sonido: amplitudes armonicas, fases relativas y envolvente de la señal.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica por que dos instrumentos pueden tocar la misma nota (mismo tono) y aun asi sonar claramente distintos (distinto timbre).

Importa porque conecta:
- fisica de la señal sonora,
- analisis espectral,
- y percepcion auditiva aplicada a musica, audio e ingenieria.

## 2- Mecanismo fisico y perceptivo
Cuando una fuente vibra periodicamente, genera una componente fundamental y, en general, armonicos superiores.

El sistema auditivo interpreta:
- la fundamental como referencia principal de tono,
- el reparto de energia entre armonicos como color sonoro,
- la evolucion temporal (ataque, sostenido, decaimiento) como parte clave del timbre.

Dos sonidos con igual \(f_1\) pueden diferir mucho si cambia:
- espectro de amplitudes \(A_n\),
- estructura temporal,
- o contenido no armonico.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(f_1\): frecuencia fundamental (Hz).
- \(f_n\): frecuencia del armonico \(n\) (Hz).
- \(n\): indice armonico (1,2,3,...).
- \(A_n\): amplitud del armonico \(n\).
- \(r_n\): razon armonica \(A_n/A_1\).
- \(v\): velocidad de propagacion en el medio (m/s).
- \(L\): longitud efectiva del resonador (m).
- \(\lambda_n\): longitud de onda asociada al armonico \(n\) (m).
- \(f_a, f_b\): frecuencias para comparacion perceptiva.
- \(\Delta c\): diferencia en cents.
- \(A(t)\): envolvente temporal.

## 4- Formulacion matematica esencial
Serie armonica ideal:

$$
f_n=nf_1
$$

Fundamental en resonador ideal abierto-abierto o cuerda fija-fija:

$$
f_1=\frac{v}{2L}
$$

Fundamental en resonador abierto-cerrado:

$$
f_1=\frac{v}{4L}
$$

Longitud de onda armonica:

$$
\lambda_n=\frac{v}{f_n}
$$

Razon de amplitudes para caracterizar timbre:

$$
r_n=\frac{A_n}{A_1}
$$

Comparacion de altura en cents:

$$
\Delta c=1200\log_2\left(\frac{f_b}{f_a}\right)
$$

Envolvente temporal simplificada (modelo conceptual):

$$
A(t)=A_0e^{-\alpha t}
$$

Lectura fisica clave:
- tono no es igual a timbre,
- igual \(f_1\) no implica igual espectro,
- la envolvente temporal altera fuerte la identidad sonora.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
Modelo base valido cuando:
- señal aproximadamente periodica,
- armonicos identificables,
- analisis en regimen lineal.

Debe refinarse cuando:
- hay ruido o transitorios dominantes,
- hay inarmonicidad marcada,
- la percepcion esta condicionada por nivel, contexto o enmascaramiento.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` comprueba:
1. Relacion lineal \(f_n\) frente a \(n\) en modelo armonico.
2. Diferencias de espectro manteniendo \(f_1\) fija.
3. Efecto de la envolvente en la forma temporal del sonido.

Si el espectro no coincide con el timbre esperado, revisa la distribucion de \(A_n\).

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Define si te piden tono (frecuencia) o timbre (estructura espectral/temporal).
2. Si hay resonador, identifica condicion de frontera y calcula \(f_1\).
3. Genera armonicos con \(f_n=nf_1\) cuando aplique.
4. Usa razones \(r_n\) para comparar timbres.
5. Para diferencias de altura, convierte a cents si procede.
6. Interpreta fisicamente y no solo numericamente.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- confundir "misma nota" con "mismo sonido",
- usar solo \(f_1\) para concluir timbre,
- ignorar envolvente temporal,
- asumir serie perfectamente armonica en toda fuente real,
- mezclar unidades y escalas perceptivas sin conversion.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
Este subtema se domina cuando puedes explicar por que dos señales con igual frecuencia fundamental suenan distintas y puedes justificarlo con su espectro y su envolvente.

## 10- Ejemplo guia corto
Datos: \(f_1=220\,\mathrm{Hz}\). Hallar \(f_3\), \(f_5\) y comparar un intervalo con \(f_b=233.08\,\mathrm{Hz}\).

Paso 1- armonicos:

$$
f_3=3f_1=660\,\mathrm{Hz},\qquad f_5=5f_1=1100\,\mathrm{Hz}
$$

Paso 2- diferencia en cents respecto a \(f_a=220\,\mathrm{Hz}\):

$$
\Delta c=1200\log_2\left(\frac{233.08}{220}\right)\approx100\,\text{cents}
$$

Interpretacion: es aproximadamente un semitono por encima, con mismo criterio de altura, pero el timbre dependera del espectro real.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- sintetizadores y diseno de sonido,
- identificacion de instrumentos,
- compresion y codificacion de audio,
- afinacion y analisis musical asistido.

## 12- Sintesis final
Dominar tono y timbre significa separar altura, espectro y envolvente, y usar cada magnitud en el problema correcto.
