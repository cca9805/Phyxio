# Reflexion

## Idea clave
La reflexion ocurre cuando una onda encuentra una frontera y parte de la perturbacion vuelve al medio de origen. La geometria del rayo reflejado esta gobernada por la normal a la superficie.

## 1- Que estudia este tema y por que es fundamental
Este tema explica como se comporta una onda al chocar con un limite entre medios o con un extremo mecanico.

Es fundamental porque aparece en:
- ecos en ultrasonidos y sonar,
- reflexion de luz y radar,
- ondas en cuerdas y tubos,
- diagnostico de interfaces y defectos.

Sin dominar reflexion, es facil interpretar mal angulos, fases y amplitudes de los ecos.

## 2- Mecanismo fisico de la reflexion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Cuando esa perturbacion alcanza una frontera:
1. la condicion de frontera impone compatibilidad dinamica,
2. una parte de la energia se refleja,
3. otra parte puede transmitirse (si el otro medio lo permite).

En el caso ideal de superficie plana y regmenes lineales:
- el angulo de reflexion se iguala al de incidencia respecto a la normal,
- la fase reflejada depende del tipo de frontera.

## 3- Magnitudes y parametros que debes identificar siempre
- theta_i: angulo de incidencia respecto a la normal (rad o deg).
- theta_r: angulo de reflexion respecto a la normal (rad o deg).
- phi_i: fase de la onda incidente (rad).
- phi_r: fase de la onda reflejada (rad).
- Z1, Z2: impedancias de los medios en interfaz.
- R_A: coeficiente de reflexion en amplitud.
- R_I: coeficiente de reflexion en intensidad.
- T_I: coeficiente de transmision en intensidad.

## 4- Formulas esenciales y lectura fisica
Ley de reflexion geometrica:

$$
\theta_r=\theta_i
$$

Coeficiente de reflexion en amplitud (incidencia normal):

$$
R_A=\frac{Z_2-Z_1}{Z_2+Z_1}
$$

Coeficiente de reflexion en intensidad:

$$
R_I=\left(\frac{Z_2-Z_1}{Z_2+Z_1}\right)^2
$$

Coeficiente de transmision en intensidad ideal:

$$
T_I=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}
$$

Chequeo energetico ideal:

$$
R_I+T_I=1
$$

Regla de fase en extremos clasicos de cuerda:

$$
\phi_r=\phi_i+\pi \quad (\text{extremo fijo})
$$

$$
\phi_r=\phi_i \quad (\text{extremo libre, ideal})
$$

Lectura fisica importante:
- salto grande de impedancia produce reflexion intensa,
- igualdad de impedancias reduce reflexion,
- el signo de R_A da informacion de inversion de fase.

## 5- Nota conceptual importante
La ley theta_r=theta_i no dice cuanta energia vuelve, solo la direccion geometrica de la componente reflejada.

Para amplitud e intensidad necesitas impedancias y condiciones de frontera.

## 6- Dominio de validez del modelo
Estas expresiones son validas cuando:
- superficie localmente plana,
- regimen lineal,
- incidencia bien definida,
- medios modelables por impedancias efectivas.

Si hay rugosidad, dispersion angular, conversion modal o anisotropia fuerte, se requieren modelos mas avanzados.

## 7- Metodo de resolucion recomendado
1. Dibuja la normal y fija referencia angular.
2. Calcula theta_r con la ley geometrica.
3. Si piden amplitud/intensidad, calcula R_A, R_I y T_I.
4. Determina si hay inversion de fase segun frontera.
5. Verifica unidades y consistencia fisica.
6. Interpreta: direccion, energia reflejada y calidad del eco.

## 8- Errores tipicos que debes evitar
- medir angulos respecto a la superficie en vez de la normal.
- confundir R_A con R_I.
- olvidar que R_I usa cuadrado del contraste.
- mezclar grados y radianes en el mismo calculo.
- asumir inversion de fase en toda reflexion sin mirar frontera.
- cerrar sin interpretar si el eco esperado debe ser fuerte o debil.

## 9- Ejemplo completo guiado
Datos:
- theta_i=35 deg,
- Z1=1.5e6,
- Z2=45e6 kg/(m^2*s),
- phi_i=0.

Paso 1- angulo reflejado:

$$
\theta_r=\theta_i=35^\circ
$$

Paso 2- reflexion en amplitud:

$$
R_A=\frac{45-1.5}{45+1.5}\approx0.935
$$

Paso 3- reflexion en intensidad:

$$
R_I=R_A^2\approx0.874
$$

Paso 4- transmision en intensidad:

$$
T_I=1-R_I\approx0.126
$$

Paso 5- fase (si frontera efectiva fija):

$$
\phi_r=\phi_i+\pi=\pi
$$

Interpretacion final:
- reflexion muy intensa por alto contraste de impedancia,
- eco esperado fuerte,
- posible inversion de fase segun condicion de frontera.

## 10- Sintesis final
Dominar reflexion significa:
- separar geometria angular de reparto energetico,
- usar correctamente impedancias y coeficientes,
- interpretar fase reflejada con criterio de frontera,
- resolver problemas de ecos con consistencia fisica.
