# Resonancia Y Modos En Barras

## Idea clave
La resonancia en una barra aparece cuando la excitacion coincide con una frecuencia modal permitida por la geometria y las condiciones de frontera. En ese punto la respuesta crece y la energia se concentra en modos concretos.

## 1- Que estudia este tema y por que es fundamental
Este tema conecta tres piezas que en clase suelen verse separadas:
- propagacion longitudinal en barras,
- cuantizacion modal por frontera,
- respuesta resonante real con amortiguamiento.

Es fundamental porque en barras reales (estructuras, ejes, sensores, barras de ultrasonidos) no basta con conocer una unica velocidad de onda: hay que saber en que frecuencias el sistema amplifica y como de estrecha es la resonancia.

## 2- Mecanismo fisico de la resonancia en barras
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En una barra axial:
- la deformacion longitudinal produce esfuerzo normal,
- el modulo elastico E fija la rigidez,
- la densidad rho fija la inercia.

Cuando una onda reflejada vuelve en fase con la excitacion, se refuerza la amplitud y aparece una onda estacionaria modal.

Resultado dinamico:
- lejos de resonancia la respuesta es moderada,
- cerca de resonancia la amplitud aumenta,
- el amortiguamiento limita el pico y define el factor de calidad Q.

## 3- Magnitudes y parametros que debes identificar siempre
- E: modulo de Young (Pa).
- rho: densidad del material (kg/m^3).
- v: velocidad de onda longitudinal axial (m/s).
- L: longitud efectiva de la barra (m).
- n: numero de modo (1,2,3,...).
- f_n: frecuencia modal del modo n (Hz).
- lambda_n: longitud de onda modal (m).
- k_n: numero de onda modal (rad/m).
- f_0: frecuencia de resonancia medida (Hz).
- Delta_f: ancho de banda a media potencia (Hz).
- Q: factor de calidad (1).
- zeta: razon de amortiguamiento (1).
- f_1, f_2: frecuencias de media potencia (Hz).

## 4- Formulas esenciales y lectura fisica
Velocidad axial en barra homogenea:

$$
v=\sqrt{\frac{E}{\rho}}
$$

Condicion modal (barra con extremos de mismo tipo, por ejemplo fijo-fijo o libre-libre):

$$
f_n=\frac{n\,v}{2L}
$$

Longitud de onda modal asociada:

$$
\lambda_n=\frac{2L}{n}
$$

Numero de onda modal:

$$
k_n=\frac{n\pi}{L}
$$

Factor de calidad por ancho de banda:

$$
Q=\frac{f_0}{\Delta f}
$$

Ancho de banda:

$$
\Delta f=f_2-f_1
$$

Relacion aproximada con amortiguamiento pequeno:

$$
zeta\approx\frac{1}{2Q}
$$

Lectura fisica clave:
- v depende del material (E y rho), no de la amplitud en regimen lineal.
- f_n depende de v y L: cambiar longitud desplaza toda la escalera modal.
- Q alto implica pico resonante estrecho y menor disipacion por ciclo.

## 5- Dominio de validez del modelo
Este modelo funciona bien cuando:
- deformaciones pequenas (linealidad elastica),
- barra esbelta y comportamiento predominantemente axial,
- propiedades E y rho aproximadamente constantes,
- amortiguamiento moderado para usar zeta~1/(2Q).

Si hay no linealidad, plasticidad, geometria compleja o acoplo flexional/torsional fuerte, hay que usar modelos modales mas completos.

## 6- Metodo de resolucion para problemas de resonancia en barras
1. Define frontera y tipo de modo (axial, no flexional).
2. Calcula v con E y rho o toma v medida si el enunciado la da.
3. Calcula f_n con la condicion modal adecuada.
4. Si hay datos experimentales de pico, calcula Q=f_0/Delta_f.
5. Obtiene zeta si se pide amortiguamiento efectivo.
6. Valida unidades SI y orden de magnitud.
7. Interpreta: que modo domina y que implica en diseno/diagnostico.

## 7- Errores tipicos que debes evitar
- usar formula axial en un problema dominado por flexion.
- olvidar que la frontera cambia las frecuencias permitidas.
- mezclar Hz con rad/s sin convertir.
- confundir frecuencia modal teorica f_n con frecuencia medida f_0 de un pico real.
- calcular Q con frecuencias que no son de media potencia.
- concluir resonancia solo por amplitud alta sin comprobar fase y vecindad de f_n.

## 8- Ejemplo completo guiado
Datos:
- E=2.10x10^11 Pa,
- rho=7800 kg/m^3,
- L=1.20 m,
- pico experimental en f_0=2150 Hz,
- frecuencias de media potencia: f_1=2120 Hz, f_2=2180 Hz.

Paso 1- velocidad axial:

$$
v=\sqrt{\frac{2.10\times10^{11}}{7800}}\approx 5189\ \mathrm{m/s}
$$

Paso 2- frecuencia modal teorica n=1:

$$
f_1=\frac{1\cdot 5189}{2\cdot1.20}\approx2162\ \mathrm{Hz}
$$

Es coherente con el pico medido f_0=2150 Hz.

Paso 3- ancho de banda y factor Q:

$$
\Delta f=f_2-f_1=2180-2120=60\ \mathrm{Hz}
$$

$$
Q=\frac{2150}{60}\approx35.8
$$

Paso 4- amortiguamiento aproximado:

$$
zeta\approx\frac{1}{2Q}=\frac{1}{71.6}\approx0.014
$$

Interpretacion final:
- la barra presenta resonancia marcada pero no extrema,
- el modo fundamental axial explica el pico principal,
- el amortiguamiento es bajo (zeta ~1.4%).

## 9- Aplicaciones reales
- caracterizacion modal de barras metalicas y compuestas.
- diseno de resonadores mecanicos y transductores.
- control de vibraciones en ejes, tirantes y elementos de maquina.
- ensayos no destructivos por barrido en frecuencia.
- identificacion de dano por cambios de f_n y Q.

## 10- Sintesis final
Dominar resonancia y modos en barras significa:
- unir material, geometria y frontera en un unico modelo,
- calcular frecuencias modales con criterio,
- interpretar picos reales con Q y Delta_f,
- pasar del calculo numerico a una conclusion fisica util para ingenieria y laboratorio.
