# Condicion De Estacionariedad

## Idea clave
Una onda estacionaria aparece cuando dos ondas de igual frecuencia y amplitud comparable se superponen en sentidos opuestos y cumplen condiciones de frontera compatibles. No cualquier frecuencia sirve: solo las frecuencias modales permitidas.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia la condicion matematica y fisica que permite pasar de onda viajera a onda estacionaria.

Es fundamental porque:
- explica por que existen modos discretos,
- conecta frontera geometrica con frecuencias permitidas,
- es base de resonancia en cuerdas, tubos, barras y cavidades.

Sin esta condicion, resolver ondas estacionarias se vuelve una lista de formulas sin criterio.

## 2- Mecanismo fisico de la estacionariedad
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Para obtener estacionariedad se requiere:
1. Onda incidente + onda reflejada en sentido contrario.
2. Misma frecuencia (coherencia temporal).
3. Frontera que fije nodos/vientres en posiciones concretas.

Si la fase de ida y vuelta no cierra con la frontera, el patron no se estabiliza.

## 3- Magnitudes y parametros esenciales
- n: numero de modo (1,2,3,...).
- L: longitud efectiva del sistema (m).
- v: velocidad de onda en el medio (m/s).
- lambda_n: longitud de onda modal (m).
- f_n: frecuencia del modo n (Hz).
- k_n: numero de onda modal (rad/m).
- omega_n: frecuencia angular modal (rad/s).

## 4- Formulas esenciales y lectura fisica
### Caso frontera equivalente en ambos extremos (cuerda fija-fija o tubo abierto-abierto)
Condicion geometrica:

$$
L=\frac{n\lambda_n}{2}
$$

Longitud de onda modal:

$$
\lambda_n=\frac{2L}{n}
$$

Frecuencia modal:

$$
f_n=\frac{nv}{2L}
$$

### Caso frontera asimetrica (tubo abierto-cerrado)
Solo modos impares:

$$
L=\frac{(2n-1)\lambda_n}{4}
$$

$$
f_n=\frac{(2n-1)v}{4L}
$$

### Parametros de onda modal

$$
k_n=\frac{2\pi}{\lambda_n}
$$

$$
omega_n=2\pi f_n
$$

Lectura fisica importante:
- la frontera cuantiza las frecuencias posibles,
- al aumentar L, los modos se comprimen en frecuencia,
- al aumentar v, todo el espectro modal se desplaza hacia arriba.

## 5- Nota conceptual importante
La estacionariedad no implica ausencia de energia. Significa que el patron espacial (nodos/vientres) es estacionario, aunque la energia oscile y se intercambie localmente entre formas cinetica y potencial.

## 6- Dominio de validez del modelo
Valido cuando:
- regimen lineal,
- reflexion suficientemente definida,
- perdidas moderadas (Q no extremadamente bajo),
- frontera bien aproximada por ideal fija/libre/abierta/cerrada.

Con amortiguamiento fuerte o frontera compleja, el patron modal se ensancha y la estacionariedad ideal se degrada.

## 7- Metodo de resolucion recomendado
1- Identifica tipo de frontera del sistema.
2- Escribe condicion geometrica modal correcta.
3- Calcula lambda_n y luego f_n.
4- Verifica que n es compatible (todos o solo impares).
5- Si hace falta, calcula k_n y omega_n.
6- Interpreta posicion de nodos y vientres.
7- Valida orden de magnitud y coherencia fisica.

## 8- Errores tipicos que debes evitar
- usar f_n=nv/(2L) en sistemas abierto-cerrado.
- olvidar restriccion de modos impares en frontera asimetrica.
- confundir n (modo) con numero de nodos visibles.
- mezclar Hz y rad/s sin conversion.
- usar L geometrica cuando la longitud efectiva es distinta.

## 9- Ejemplo completo guiado
Datos:
- cuerda fija-fija,
- L=0.80 m,
- v=120 m/s,
- modo n=3.

Paso 1- longitud de onda modal:

$$
\lambda_3=\frac{2L}{3}=\frac{1.6}{3}=0.533\ \mathrm{m}
$$

Paso 2- frecuencia modal:

$$
f_3=\frac{3\cdot120}{2\cdot0.80}=225\ \mathrm{Hz}
$$

Paso 3- numero de onda y frecuencia angular:

$$
k_3=\frac{2\pi}{\lambda_3}\approx11.78\ \mathrm{rad/m}
$$

$$
omega_3=2\pi f_3\approx1413.7\ \mathrm{rad/s}
$$

Interpretacion:
- modo 3 presenta mas nodos internos que el fundamental,
- frecuencia mayor por cuantizacion modal discreta.

## 10- Sintesis final
Dominar la condicion de estacionariedad significa:
- traducir frontera en condicion matematica,
- obtener modos y frecuencias permitidas,
- entender por que el espectro es discreto,
- resolver resonancia con criterio fisico desde la base.
