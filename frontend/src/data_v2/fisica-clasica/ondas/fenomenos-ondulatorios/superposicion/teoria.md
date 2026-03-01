# Superposicion

## Idea clave
En regimen lineal, la respuesta total de un medio es la suma algebraica de las respuestas individuales. Este principio simple explica interferencia, batidos y formacion de patrones complejos.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia como se combinan dos o mas ondas cuando coinciden en el mismo punto del espacio y tiempo.

Es fundamental porque:
- es la base matematica de la interferencia,
- permite predecir amplitud resultante y fase efectiva,
- conecta teoria de ondas con medidas reales de senal.

Sin superposicion no se puede entender por que dos ondas pueden reforzarse o anularse.

## 2- Mecanismo fisico de la superposicion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Cuando varias perturbaciones alcanzan el mismo punto:
- el medio responde a la suma instantanea de desplazamientos,
- cada onda mantiene su identidad dinamica,
- tras cruzarse, en un medio lineal ideal, siguen propagandose sin alterarse permanentemente.

Resultado:
- lo que se suma es la variable de campo (desplazamiento, presion, campo E, etc.),
- no se suman de forma directa las energias con signo.

## 3- Magnitudes y parametros que debes identificar siempre
- y: desplazamiento resultante (m).
- y1, y2: contribuciones individuales (m).
- A1, A2: amplitudes de cada onda (m).
- Ares: amplitud resultante equivalente (m).
- delta_phi: desfase relativo entre ondas (rad).
- k: numero de onda (rad/m).
- omega: frecuencia angular (rad/s).
- Delta_f: diferencia de frecuencias para batidos (Hz).
- f_beat: frecuencia de batido (Hz).

## 4- Formulas esenciales y lectura fisica
Principio de superposicion:

$$
y=y_1+y_2
$$

Suma de dos armonicas de misma frecuencia:

$$
A_{res}=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\Delta\phi}
$$

Caso A1=A2=A:

$$
A_{res}=2A\left|\cos\left(\frac{\Delta\phi}{2}\right)\right|
$$

Condiciones limite de interferencia:

$$
\Delta\phi=2m\pi\ \Rightarrow\ \text{maximo}
$$

$$
\Delta\phi=(2m+1)\pi\ \Rightarrow\ \text{minimo}
$$

Batidos para frecuencias cercanas:

$$
f_{beat}=|f_1-f_2|
$$

Lectura fisica importante:
- misma amplitud y desfase cero -> refuerzo maximo,
- misma amplitud y desfase pi -> anulacion ideal local,
- desfase intermedio -> refuerzo parcial.

## 5- Nota conceptual importante
La superposicion requiere linealidad. Si el medio es no lineal o la amplitud es grande, aparecen terminos de mezcla y el principio deja de aplicarse de forma exacta.

## 6- Dominio de validez del modelo
Valido cuando:
- oscilaciones pequenas,
- medio lineal,
- ausencia de acoplos no lineales dominantes,
- coherencia temporal suficiente para mantener un desfase definido.

Si no hay coherencia, la interferencia estable desaparece aunque la superposicion instantanea siga siendo cierta.

## 7- Metodo de resolucion recomendado
1- Identifica si las ondas tienen misma frecuencia o frecuencias cercanas.
2- Escribe y=y1+y2 en el punto pedido.
3- Si procede, usa Ares con delta_phi.
4- Clasifica el resultado (constructivo, destructivo o parcial).
5- En batidos, calcula f_beat.
6- Verifica unidades y dominio angular.
7- Cierra con interpretacion fisica del patron resultante.

## 8- Errores tipicos que debes evitar
- sumar amplitudes siempre como A1+A2 sin revisar fase.
- confundir superposicion con conservacion de energia punto a punto.
- usar formulas de interferencia sin coherencia de fuentes.
- mezclar grados y radianes en cos(delta_phi).
- olvidar valor absoluto en el caso Ares=2A|cos(delta_phi/2)|.

## 9- Ejemplo completo guiado
Datos:
- A1=3 mm,
- A2=5 mm,
- delta_phi=60 deg=pi/3 rad,
- f1=101 Hz,
- f2=98 Hz.

Paso 1- amplitud resultante:

$$
A_{res}=\sqrt{3^2+5^2+2\cdot3\cdot5\cos\left(\frac{\pi}{3}\right)}
$$

$$
A_{res}=\sqrt{9+25+30\cdot0.5}=\sqrt{49}=7\ \text{mm}
$$

Paso 2- frecuencia de batido:

$$
f_{beat}=|101-98|=3\ \text{Hz}
$$

Interpretacion final:
- hay refuerzo parcial (no maximo ni minimo),
- la envolvente de amplitud oscila a 3 Hz.

## 10- Sintesis final
Dominar superposicion significa:
- sumar correctamente ondas en el dominio de campo,
- usar fase para predecir amplitud resultante,
- distinguir interferencia estable y batidos,
- interpretar patrones complejos con un principio lineal unico.
