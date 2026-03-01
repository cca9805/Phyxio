# Poleas Compuestas

## Idea clave
Un polipasto multiplica ventaja mecanica porque distribuye la carga entre varios tramos de cuerda. Cuantos mas tramos sostienen la carga, menor fuerza instantanea necesitas, pero mayor recorrido debes tirar.

## 1- Que estudia este subtema y por que importa
Este subtema estudia aparejos de varias poleas usados para elevar cargas grandes con esfuerzo moderado.

Es importante porque conecta fisica escolar con diseno real de izado:
- conteo correcto de tramos,
- fuerza requerida,
- recorrido total,
- y rendimiento efectivo.

## 2- Mecanismo fisico del polipasto
Si la carga esta sostenida por \(n\) tramos activos y el sistema es ideal:
- cada tramo soporta una tension aproximada \(T\),
- la suma vertical disponible es \(nT\),
- para equilibrio/cuasiestatico: \(nT\approx W\).

Como en el extremo libre aplicas \(F\approx T\), resulta:

$$
F\approx\frac{W}{n}
$$

## 3- Magnitudes que debes dominar
- \(W\): peso de la carga (N).
- \(n\): tramos que sostienen la carga.
- \(F\): fuerza aplicada (N).
- \(T\): tension de tramo (N).
- \(\Delta x_{pull}\): recorrido de tiro (m).
- \(\Delta x_{load}\): recorrido de la carga (m).
- \(\eta\): rendimiento global (adimensional, \(0<\eta\le1\)).

## 4- Ecuaciones base (ideal y no ideal)
Fuerza ideal:

$$
F=\frac{W}{n}
$$

Tension ideal:

$$
T=\frac{W}{n}
$$

Recorrido geometrico:

$$
\Delta x_{pull}=n\,\Delta x_{load}
$$

Balance de trabajo ideal:

$$
F\,\Delta x_{pull}=W\,\Delta x_{load}
$$

Estimacion no ideal con rendimiento:

$$
F_{real}=\frac{W}{\eta n}
$$

## 5- Como resolver un problema de polipasto
1. Dibuja montaje y cuenta \(n\) correctamente.
2. Calcula \(F\) ideal con \(W/n\).
3. Si piden recorrido, usa \(\Delta x_{pull}=n\Delta x_{load}\).
4. Si hay perdidas, corrige con \(\eta\).
5. Interpreta compromiso fuerza vs recorrido y viabilidad operativa.

## 6- Criterio para no equivocarte
El numero clave no es "cuantas poleas hay" sino "cuantos tramos sostienen directamente la carga".

Ese detalle decide casi todo el resultado numerico.

## 7- Errores frecuentes
- Tomar \(n\) como numero de ruedas en vez de tramos activos.
- Ignorar que menor fuerza exige mayor recorrido.
- Usar modelo ideal cuando el problema da rendimiento distinto de 1.
- No revisar unidades o sentido de magnitud del resultado.

## 8- Ejemplo guiado completo
Datos: \(W=800\,\text{N}\), \(n=4\), elevacion \(\Delta x_{load}=0.30\,\text{m}\).

Fuerza ideal:

$$
F=\frac{800}{4}=200\,\text{N}
$$

Recorrido necesario:

$$
\Delta x_{pull}=4\cdot 0.30=1.20\,\text{m}
$$

Si \(\eta=0.80\):

$$
F_{real}=\frac{800}{0.80\cdot4}=250\,\text{N}
$$

## 9- Aplicaciones reales
- Polipastos de obra y mantenimiento industrial.
- Maniobras de rescate y elevacion en espacios confinados.
- Sistemas de izado manual en almacenes.
- Montajes de carga donde importa limitar fuerza humana o del actuador.

## 10- Sintesis final
Dominar poleas compuestas significa controlar conteo de tramos, restricciones geometricas y correccion por rendimiento. Con eso pasas de la formula corta a una evaluacion tecnica util en campo.
