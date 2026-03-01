# Armonicos En Cuerdas

## Idea clave
Los armonicos son los modos permitidos de una cuerda con extremos fijos. Cada modo tiene una frecuencia y una forma espacial propias, determinadas por la frontera y por las propiedades del medio.

## 1- Que estudia este tema y por que es esencial
Este tema explica por que una cuerda no vibra con cualquier frecuencia, sino con una familia discreta:
- fundamental \(f_1\),
- segundo armonico \(f_2\),
- tercer armonico \(f_3\), etc.

Sin esta idea, el alumno ve una lista de formulas desconectadas. Con esta idea, entiende de donde salen las frecuencias de una cuerda real, como se afina un instrumento y por que cambia el timbre.

## 2- Mecanismo fisico real: como se forman los armonicos
La cuerda transmite perturbaciones porque una deformacion local genera fuerza restauradora de tension sobre elementos vecinos.

Secuencia fisica:
1. La cuerda se excita y nace una onda viajera.
2. Al llegar a un extremo fijo, la onda se refleja.
3. La superposicion de ida y vuelta crea una onda estacionaria.
4. Solo sobreviven los patrones compatibles con nodos en los extremos.

Ese filtro dinamico por frontera selecciona modos discretos, no continuos.

## 3- Magnitudes que debes identificar siempre
- \(n\): numero de armonico o modo (entero positivo).
- \(f_1\): frecuencia fundamental (Hz).
- \(f_n\): frecuencia del armonico \(n\) (Hz).
- \(L\): longitud vibrante de la cuerda (m).
- \(\lambda_n\): longitud de onda del modo \(n\) (m).
- \(v\): velocidad de propagacion en la cuerda (m/s).
- \(F_t\): tension de la cuerda (N).
- \(\mu_l\): densidad lineal de masa (kg/m).
- \(k_n\): numero de onda modal (rad/m).
- \(\omega_n\): frecuencia angular modal (rad/s).
- \(r_n=f_n/f_1\): razon armonica (adimensional).

## 4- Formulas esenciales y lectura fisica
Relacion armonica:

$$
f_n=nf_1
$$

Fundamental de cuerda fija-fija:

$$
f_1=\frac{v}{2L}
$$

Frecuencia modal desde velocidad y longitud:

$$
f_n=\frac{nv}{2L}
$$

Longitud de onda modal:

$$
\lambda_n=\frac{2L}{n}
$$

Velocidad de onda en cuerda:

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$

Frecuencia armonica completa:

$$
f_n=\frac{n}{2L}\sqrt{\frac{F_t}{\mu_l}}
$$

Numero de onda modal:

$$
k_n=\frac{n\pi}{L}
$$

Frecuencia angular modal:

$$
\omega_n=2\pi f_n
$$

Razon armonica:

$$
r_n=\frac{f_n}{f_1}=n
$$

Lectura fisica clave:
- mayor \(F_t\) implica mayor \(v\) y sube toda la serie armonica,
- mayor \(\mu_l\) implica menor \(v\) y baja toda la serie,
- mayor \(L\) implica menor \(f_1\) y menores \(f_n\).

Nota conceptual importante:
- en regimen lineal, la velocidad de onda no depende de la amplitud,
- depende de propiedades del medio y de la tension.

## 5- Armonicos, timbre y sintesis de senal
Dos cuerdas pueden tener la misma fundamental y sonar distinto. La diferencia esta en el contenido armonico:
- amplitudes \(A_n\),
- fases \(\phi_n\),
- decaimiento temporal de cada modo.

Modelo conceptual de sintesis:

$$
y(t)=\sum_{n=1}^{\infty}A_n\sin(2\pi nf_1t+\phi_n)
$$

Esta formula no da una unica salida escalar; describe la composicion espectral de la onda resultante.

## 6- Metodo de resolucion para problemas de armonicos
1. Verifica condicion de frontera (normalmente cuerda fija-fija).
2. Identifica la incognita: \(f_n\), \(n\), \(L\), \(\lambda_n\), \(F_t\), \(\mu_l\).
3. Escoge primero la formula modal base (\(f_n=nf_1\) o \(f_n=nv/(2L)\)).
4. Si falta \(v\), conecta con \(v=\sqrt{F_t/\mu_l}\).
5. Despeja en simbolico antes de sustituir datos.
6. Sustituye en SI y comprueba unidades.
7. Cierra con interpretacion fisica del resultado.

## 7- Errores tipicos que debes evitar
- tratar \(n\) como real continuo en modos ideales.
- confundir frecuencia armonica con amplitud armonica.
- olvidar convertir \(\mu_l\) de g/m a kg/m.
- mezclar formulas de cuerda con formulas de tubos.
- no verificar que \(f_n/f_1\) sea compatible con entero modal.

## 8- Ejemplo completo guiado
Datos:
- \(L=0.65\ \mathrm{m}\),
- \(F_t=120\ \mathrm{N}\),
- \(\mu_l=6.0\times10^{-3}\ \mathrm{kg/m}\),
- modo \(n=4\).

Paso 1- velocidad de propagacion:

$$
v=\sqrt{\frac{F_t}{\mu_l}}=\sqrt{\frac{120}{6.0\times10^{-3}}}
=\sqrt{20000}\approx 141.42\ \mathrm{m/s}
$$

Paso 2- frecuencia fundamental:

$$
f_1=\frac{v}{2L}=\frac{141.42}{1.30}\approx 108.78\ \mathrm{Hz}
$$

Paso 3- cuarto armonico:

$$
f_4=4f_1\approx 435.12\ \mathrm{Hz}
$$

Paso 4- longitud de onda del modo 4:

$$
\lambda_4=\frac{2L}{4}=0.325\ \mathrm{m}
$$

Interpretacion:
- el modo 4 tiene mas nodos internos que el fundamental,
- su frecuencia es cuatro veces mayor,
- su longitud de onda es cuatro veces menor que \(\lambda_1\).

## 9- Aplicaciones reales
- afinacion y ajuste de instrumentos de cuerda.
- analisis de timbre por espectro armonico.
- diseno vibracional de cuerdas tecnicas y sensores.
- diagnostico de defectos por desplazamiento modal.

## 10- Sintesis final
Dominar armonicos en cuerdas significa:
- entender el mecanismo fisico que selecciona modos discretos,
- calcular frecuencias modales con criterio,
- interpretar espectro y timbre de forma causal,
- resolver problemas sin depender de memorizacion mecanica.
