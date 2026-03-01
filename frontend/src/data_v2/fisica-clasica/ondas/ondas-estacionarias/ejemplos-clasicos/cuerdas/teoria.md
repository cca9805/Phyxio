# Cuerdas

## Idea clave
Una cuerda con extremos fijos no puede vibrar de cualquier forma: solo admite modos discretos. Cada modo fija una frecuencia, un patron espacial de nodos y antinodos, y una contribucion concreta al sonido final.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica como aparecen ondas estacionarias en cuerdas tensadas y por que el espectro no es continuo, sino discreto.

Es clave porque conecta:
- propiedades fisicas de la cuerda (\(F_t\), \(\mu_l\), \(L\)),
- magnitudes ondulatorias (v, \lambda_n, f_n),
- y resultados observables (afinacion, timbre, resonancia).

## 2- Mecanismo dinamico real: como se transmite la perturbacion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En una cuerda:
- la tension \(F_t\) aporta la fuerza restauradora transversal,
- la densidad lineal \(\mu_l\) aporta la inercia,
- la reflexion en extremos fijos superpone ondas en sentidos opuestos,
- y solo ciertas frecuencias cumplen simultaneamente las condiciones de frontera.

Resultado: aparecen patrones estacionarios estables con nodos fijos y antinodos oscilantes.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(F_t\): tension de la cuerda (N).
- \(\mu_l\): densidad lineal de masa (kg/m).
- \(L\): longitud vibrante efectiva (m).
- \(v\): velocidad de propagacion en la cuerda (m/s).
- \(n\): numero de modo (1,2,3,...).
- \(f_n\): frecuencia del modo \(n\) (Hz).
- \(f_1\): frecuencia fundamental (Hz).
- \(\lambda_n\): longitud de onda modal (m).
- \(d_{NN}\): distancia entre nodos consecutivos (m).
- \(d_{NA}\): distancia entre nodo y antinodo (m).

## 4- Formulacion matematica esencial
Velocidad de onda en cuerda tensa:

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$

Condicion modal para extremos fijos:

$$
\lambda_n=\frac{2L}{n}
$$

Frecuencia modal:

$$
f_n=\frac{nv}{2L}
$$

Fundamental y armonicos:

$$
f_1=\frac{v}{2L},\qquad f_n=nf_1
$$

Geometria espacial del modo:

$$
d_{NN}=\frac{\lambda_n}{2},\qquad d_{NA}=\frac{\lambda_n}{4}
$$

Lectura fisica:
- mayor \(F_t\) implica mayor \(v\) y frecuencias mas altas,
- mayor \(\mu_l\) implica menor \(v\) y frecuencias mas bajas,
- mayor \(L\) implica frecuencias mas graves.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
El modelo base funciona bien cuando:
- oscilaciones pequenas (regimen lineal),
- tension aproximadamente uniforme,
- extremos efectivamente fijos,
- cuerda esbelta con rigidez flexional despreciable en primera aproximacion.

Deja de ser preciso cuando hay gran amplitud, rigidez elevada, amortiguamiento dominante o apoyos no ideales.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` debes verificar tres ideas:
1. El numero de vientres crece con el modo \(n\).
2. La separacion nodal se reduce al aumentar \(n\).
3. El resultado numerico de `Calculadora` coincide con el patron espacial mostrado.

Si la frecuencia calculada no encaja con el patron de nodos esperado, el planteamiento esta mal.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Identifica que te piden: \(v\), \(f_n\), \(\lambda_n\), geometria nodal, o parametro del medio.
2. Lleva todos los datos a SI.
3. Calcula primero \(v\) con \(F_t\) y \(\mu_l\) cuando corresponda.
4. Usa la condicion modal para el modo pedido.
5. Despeja en simbolico antes de sustituir.
6. Verifica unidades y orden de magnitud.
7. Interpreta fisicamente el resultado (afinacion, timbre, resonancia).

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- Usar masa total en lugar de \(\mu_l\).
- Confundir longitud geometrica con longitud vibrante efectiva.
- Tratar \(n\) como variable continua en lugar de indice entero.
- Pensar que subir amplitud cambia la frecuencia modal en regimen lineal.
- No comprobar coherencia entre calculo y patron espacial.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
La comprension real del tema aparece cuando puedes pasar de:
- datos fisicos de una cuerda real,
- a frecuencias modales,
- a interpretacion sonora y espacial del modo.

Por eso no basta sustituir: hay que justificar por que ese modo existe y que representa.

## 10- Ejemplo guia corto
Datos: \(F_t=100\,\mathrm{N}\), \(\mu_l=5.0\times10^{-3}\,\mathrm{kg/m}\), \(L=0.65\,\mathrm{m}\), \(n=3\).

Paso 1- velocidad:

$$
v=\sqrt{\frac{100}{5.0\times10^{-3}}}\approx141.4\,\mathrm{m/s}
$$

Paso 2- frecuencia fundamental:

$$
f_1=\frac{141.4}{2\cdot0.65}\approx108.8\,\mathrm{Hz}
$$

Paso 3- frecuencia del modo 3:

$$
f_3=3f_1\approx326.4\,\mathrm{Hz}
$$

Interpretacion: el modo 3 produce una frecuencia tres veces la fundamental y un patron con mas nodos internos.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- Afinacion de instrumentos de cuerda.
- Diseno de cuerdas y calibres.
- Analisis de timbre mediante armonicos.
- Diagnostico de cables tensados y elementos esbeltos.
- Sintesis fisica de cuerdas en audio digital.

## 12- Sintesis final
Dominar este subtema significa poder explicar y calcular, con coherencia, como la tension, la inercia lineal y la longitud fijan el espectro modal de una cuerda con extremos fijos.
