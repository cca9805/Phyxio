# Intensidad Ondulatoria

## Idea clave
La intensidad ondulatoria mide la potencia que atraviesa una unidad de area. Es la magnitud operativa para comparar "cuanta energia por segundo" llega a un punto.

## 1- Que fenomeno estudia este tema
Este tema estudia la distribucion espacial de potencia ondulatoria.
Es esencial para evaluar niveles de exposicion, alcance y atenuacion geometrica.

## 2- Base conceptual: que se mueve y que no se mueve
- Una fuente entrega potencia \(P\).
- Esa potencia se reparte sobre un area de frente de onda.
- Al aumentar la distancia, la misma potencia se reparte sobre mas area y baja la intensidad.

## 3- Elementos del tema (identificacion correcta)
- \(I\): intensidad (W/m^2).
- \(P\): potencia de la fuente (W).
- \(A\): area efectiva de paso (m^2).
- \(r\): distancia a fuente puntual (m).
- \(I_0\): intensidad de referencia (W/m^2).
- \(\beta\): nivel en dB.

## 4- Formulacion matematica minima (y que significa cada ecuacion)
$$
I=\frac{P}{A}
$$
Interpretacion:
- definicion general de intensidad.

$$
I=\frac{P}{4\pi r^2}
$$
Interpretacion:
- para fuente puntual isotropa, describe ley inversa al cuadrado.

$$
\beta=10\log_{10}\!\left(\frac{I}{I_0}\right)
$$
Interpretacion:
- convierte intensidad a escala logaritmica (dB).

$$
\Delta\beta=10\log_{10}\!\left(\frac{I_2}{I_1}\right)
$$
Interpretacion:
- compara dos niveles sin necesidad de conocer \(I_0\).

## 5- Cuando aplican estas relaciones (modelo y validez)
Aplican cuando:
- la fuente puede aproximarse como puntual/isotropa,
- no hay absorcion compleja dominante,
- el medio se trata uniforme en el trayecto.

Si hay directividad fuerte o reflexiones dominantes, se requiere modelo mas detallado.

## 6- Metodo de resolucion para problemas de intensidad ondulatoria
1. Identifica si el problema pide \(I\), \(P\), \(r\) o \(\beta\).
2. Elige definicion general o ley esferica segun geometria.
3. Despeja en simbolico y sustituye en SI.
4. Si piden dB, aplica relacion logaritmica al final.
5. Verifica sentido fisico (intensidad debe ser positiva).

## 7- Errores frecuentes que bloquean el aprendizaje
- usar \(A\) plana cuando la geometria es esferica.
- olvidar que \(r\) va al cuadrado.
- confundir dB con unidad lineal.
- usar log natural en lugar de log base 10.

## 8- Ejemplo guia (de principio a fin)
Datos: fuente puntual con \(P=2.0\ \mathrm{W}\), distancia \(r=4.0\ \mathrm{m}\), \(I_0=10^{-12}\ \mathrm{W/m^2}\).

Paso 1. Intensidad:
$$
I=\frac{P}{4\pi r^2}=\frac{2.0}{4\pi(4.0)^2}\approx9.95\times10^{-3}\ \mathrm{W/m^2}
$$

Paso 2. Nivel:
$$
\beta=10\log_{10}\left(\frac{I}{I_0}\right)
\approx10\log_{10}(9.95\times10^9)
\approx100\ \mathrm{dB}
$$

Interpretacion final:
- la intensidad cae con distancia,
- el nivel en dB traduce esa intensidad a escala perceptiva/logaritmica.

## 9- Aplicaciones reales
- acustica ambiental.
- diseno de aislamiento.
- seguridad en exposicion a ultrasonidos.
- calibracion de sensores de energia ondulatoria.

## 10- Sintesis final
Dominar intensidad ondulatoria significa relacionar potencia, geometria y nivel logaritmico sin perder coherencia fisica.
