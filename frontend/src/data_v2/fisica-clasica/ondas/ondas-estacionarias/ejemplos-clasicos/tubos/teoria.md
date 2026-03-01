# Tubos

## Idea clave
En un tubo sonoro, las ondas estacionarias aparecen por reflexion y superposicion dentro de una columna de aire. Las condiciones de frontera en los extremos seleccionan que frecuencias estan permitidas y cuales no.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica como se forman modos resonantes en columnas de aire y por que un tubo no vibra con cualquier frecuencia, sino con una familia discreta.

Importa porque permite:
- comprender instrumentos de viento,
- predecir frecuencias resonantes en tubos,
- distinguir claramente tubo abierto-abierto de tubo abierto-cerrado,
- resolver problemas sin memorizar formulas aisladas.

## 2- Mecanismo dinamico real: como se transmite la perturbacion
La propagacion ocurre porque una compresion local del aire genera un gradiente de presion que empuja a la capa vecina. Ese proceso se repite y la perturbacion avanza por el tubo.

En extremos y fronteras:
- en un extremo abierto, la presion acustica perturbada tiende a cero (nodo de presion),
- en un extremo cerrado, la velocidad de particula tiende a cero (nodo de desplazamiento).

Cuando la onda reflejada vuelve y se superpone con la incidente, aparecen patrones estacionarios compatibles con esas fronteras.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(L\): longitud efectiva del tubo (m).
- \(v\): velocidad del sonido en el medio (m/s).
- \(n\): indice modal entero (1,2,3,...).
- \(\lambda_n\): longitud de onda del modo \(n\) (m).
- \(f_n\): frecuencia modal del modo \(n\) (Hz).
- \(f_1\): frecuencia fundamental (Hz).
- \(T_c\): temperatura en grados Celsius para estimar \(v\) en aire.

## 4- Formulacion matematica esencial
Relacion de onda:

$$
v=\lambda_n f_n
$$

### Tubo abierto-abierto

$$
\lambda_n=\frac{2L}{n},\qquad f_n=\frac{nv}{2L},\qquad n=1,2,3,\dots
$$

Fundamental:

$$
f_1=\frac{v}{2L}
$$

### Tubo abierto-cerrado

$$
\lambda_n=\frac{4L}{2n-1},\qquad f_n=\frac{(2n-1)v}{4L},\qquad n=1,2,3,\dots
$$

Fundamental:

$$
f_1=\frac{v}{4L}
$$

Aproximacion util para aire en funcion de temperatura:

$$
v\approx 331+0.6\,T_c
$$

Lectura fisica clave:
- abierto-abierto admite serie armonica completa,
- abierto-cerrado solo admite armonicos impares,
- en regimen lineal la frecuencia modal no depende de la amplitud, depende de frontera, longitud y velocidad del medio.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
El modelo base funciona bien cuando:
- perturbaciones pequenas (linealidad),
- tubo de seccion casi uniforme,
- perdidas viscosas y termicas moderadas,
- longitud efectiva bien definida.

Debes corregir modelo cuando:
- hay fuerte amortiguamiento,
- hay cambios bruscos de seccion,
- la correccion de borde en extremos abiertos no es despreciable.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` valida siempre:
1. Que el patron espacial coincide con tipo de tubo (abierto-abierto o abierto-cerrado).
2. Que al aumentar \(n\) aparecen mas nodos internos.
3. Que la frecuencia calculada sigue la ley modal esperada.

Si el patron visual no coincide con la formula aplicada, hay error de modelo o de frontera.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Identifica tipo de tubo y extremos.
2. Define la incognita real (\(f_n\), \(\lambda_n\), \(L\), \(v\), etc.).
3. Convierte datos a SI.
4. Usa la relacion modal correcta para ese tipo de frontera.
5. Despeja primero en simbolico.
6. Sustituye, verifica unidades y orden de magnitud.
7. Interpreta resultado en terminos de resonancia y armonicos permitidos.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- aplicar formula de abierto-abierto a un tubo abierto-cerrado,
- usar armonicos pares en tubo abierto-cerrado,
- tomar longitud geometrica cuando se requiere longitud efectiva,
- confundir nodo de presion con nodo de desplazamiento,
- ignorar que la temperatura modifica \(v\) y desplaza frecuencias.

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
La comprension real aparece cuando puedes justificar por que un tubo concreto admite ciertos modos y excluye otros.

No basta obtener un numero: hay que explicar si ese modo es fisicamente posible para esa frontera.

## 10- Ejemplo guia corto
Datos: tubo abierto-cerrado con \(L=0.85\,\mathrm{m}\), \(v=340\,\mathrm{m/s}\), modo \(n=2\).

Frecuencia modal:

$$
f_2=\frac{(2\cdot2-1)\,340}{4\cdot0.85}=\frac{1020}{3.4}=300\,\mathrm{Hz}
$$

Interpretacion:
- corresponde al tercer armonico de la serie (impar),
- es compatible con frontera abierto-cerrado,
- un armonico par equivalente estaria prohibido en este tipo de tubo.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- diseno y afinacion de flautas, clarinetes y organos,
- diagnostico de resonadores y conductos,
- control de ruido en ductos,
- metrologia acustica y calibracion de cavidades.

## 12- Sintesis final
Dominar este subtema significa poder decidir el modelo de frontera correcto, calcular frecuencias permitidas y justificar fisicamente por que unas resonancias aparecen y otras no.
