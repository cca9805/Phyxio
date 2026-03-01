# Velocidad De Propagacion En Cuerdas

## Idea clave
En una cuerda ideal, la velocidad de propagacion la fija el medio (tension y densidad lineal), no la amplitud de la oscilacion en regimen lineal.

## 1- Que estudia este tema y por que importa
Este tema explica como se propaga una perturbacion transversal en una cuerda y por que su velocidad cambia cuando cambian las propiedades fisicas de la cuerda.

Es fundamental para:
- entender afinacion y respuesta de instrumentos,
- resolver problemas de modos normales y resonancia,
- interpretar mediciones experimentales en laboratorio.

## 2- Mecanismo fisico de propagacion en cuerdas
La propagacion ocurre porque una deformacion local de la cuerda genera fuerzas restauradoras debidas a la tension \(F_t\), y esas fuerzas aceleran el tramo vecino.

En terminos dinamicos:
- la tension aporta el efecto restaurador,
- la densidad lineal \(\mu_l\) aporta la inercia.

Resultado clave:
- mayor tension \(\Rightarrow\) mayor velocidad,
- mayor densidad lineal \(\Rightarrow\) menor velocidad.

## 3- Magnitudes que debes dominar
- \(v\): velocidad de propagacion (m/s).
- \(F_t\): tension de la cuerda (N).
- \(\mu_l\): densidad lineal de masa (kg/m).
- \(m\): masa del tramo de cuerda (kg).
- \(L\): longitud del tramo (m).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(f_1\): frecuencia fundamental (Hz).
- \(f_n\): frecuencia del armonico n (Hz).

## 4- Formulas esenciales y lectura fisica
Velocidad por propiedades de la cuerda:

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$

Densidad lineal:

$$
\mu_l=\frac{m}{L}
$$

Relacion ondulatoria:

$$
v=\lambda f
$$

Periodo-frecuencia:

$$
T=\frac{1}{f}
$$

Frecuencia fundamental (extremos fijos):

$$
f_1=\frac{v}{2L}
$$

Armonico n:

$$
f_n=nf_1=\frac{nv}{2L}
$$

Longitud de onda del armonico n:

$$
\lambda_n=\frac{2L}{n}
$$

Nota conceptual importante:
- en modelo lineal, \(v\) no depende de la amplitud.

## 5- Modelo y condiciones de validez
Este modelo aplica cuando:
- la cuerda es flexible y aproximadamente homogenea,
- la tension es uniforme en el tramo,
- las oscilaciones son pequenas (linealidad).

Limites del modelo:
- gran amplitud (no linealidad),
- rigidez de cuerda no despreciable,
- perdidas por rozamiento importantes,
- tension variable a lo largo de la cuerda.

## 6- Metodo de resolucion paso a paso
1. Identifica si te piden \(v\), \(\mu_l\), \(f_1\), \(f_n\), \(\lambda\) o \(\lambda_n\).
2. Convierte datos a SI.
3. Calcula primero \(\mu_l\) si no la dan.
4. Obtiene \(v\) con \(v=\sqrt{F_t/\mu_l}\).
5. Conecta con \(v=\lambda f\) o con formulas modales segun el enunciado.
6. Verifica unidades y orden de magnitud.
7. Interpreta el resultado fisicamente.

## 7- Errores frecuentes
- usar \(\rho\) (kg/m^3) en lugar de \(\mu_l\) (kg/m).
- tratar \(F_t\) como masa en vez de fuerza.
- olvidar que \(f_1\) depende de \(L\).
- mezclar modo fundamental con armonicos superiores.
- creer que subir amplitud aumenta la velocidad en regimen lineal.

## 8- Ejemplo guiado completo
Datos: \(F_t=100\ \mathrm{N}\), \(\mu_l=0.004\ \mathrm{kg/m}\), \(L=0.65\ \mathrm{m}\).

Paso 1. Velocidad en la cuerda:

$$
v=\sqrt{\frac{100}{0.004}}\approx158.1\ \mathrm{m/s}
$$

Paso 2. Frecuencia fundamental:

$$
f_1=\frac{v}{2L}=\frac{158.1}{2(0.65)}\approx121.6\ \mathrm{Hz}
$$

Paso 3. Tercer armonico:

$$
f_3=3f_1\approx364.8\ \mathrm{Hz}
$$

Interpretacion:
- aumentar \(F_t\) sube \(v\) y sube toda la escala modal,
- aumentar \(\mu_l\) reduce \(v\) y baja las frecuencias modales.

## 9- Aplicaciones reales
- afinacion de guitarras, violines y pianos,
- diseno de cuerdas de instrumentos,
- estudio de vibraciones en cables tensados,
- laboratorios de ondas estacionarias.

## 10- Sintesis final
Dominar este tema significa:
- entender de donde sale \(v=\sqrt{F_t/\mu_l}\),
- aplicar con criterio relaciones modales de cuerdas,
- interpretar resultados en terminos de propagacion y resonancia.
