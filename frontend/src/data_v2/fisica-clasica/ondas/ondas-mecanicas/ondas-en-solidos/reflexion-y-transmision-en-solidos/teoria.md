# Reflexion Y Transmision En Solidos

## Idea clave
Cuando una onda llega a la interfaz entre dos solidos con distinta impedancia mecanica, una parte se refleja y otra se transmite. El reparto depende del contraste de impedancias.

## 1- Que estudia este tema y por que es fundamental
Este tema explica como cuantificar en una frontera solido-solido:
- reflexion de amplitud,
- reflexion de intensidad,
- transmision de intensidad.

Es fundamental para ensayos no destructivos, acoplamiento estructural, sismica de interfaces y diseno de uniones mecanicas.

## 2- Mecanismo fisico en la interfaz
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

En la frontera entre medios:
- continuidad de magnitudes dinamicas impone condiciones de borde,
- si \(Z_1\neq Z_2\), no toda la energia cruza,
- aparece onda reflejada + onda transmitida.

Cuanto mayor el contraste de impedancias, mayor reflexion.

## 3- Magnitudes y parametros que debes identificar
- \(Z_1\): impedancia del medio incidente (Pa*s/m).
- \(Z_2\): impedancia del medio de transmision (Pa*s/m).
- \(R_A\): coeficiente de reflexion de amplitud (1).
- \(T_A\): coeficiente de transmision de amplitud (1).
- \(R_I\): coeficiente de reflexion de intensidad (1).
- \(T_I\): coeficiente de transmision de intensidad (1).
- \(\rho\): densidad (kg/m^3).
- \(v\): velocidad de onda en el medio (m/s).

## 4- Formulas esenciales y lectura fisica
Impedancia mecanica efectiva:

$$
Z=\rho v
$$

Reflexion de amplitud (incidencia normal):

$$
R_A=\frac{Z_2-Z_1}{Z_2+Z_1}
$$

Transmision de amplitud (presion/esfuerzo):

$$
T_A=\frac{2Z_2}{Z_1+Z_2}
$$

Reflexion de intensidad:

$$
R_I=R_A^2
$$

Transmision de intensidad:

$$
T_I=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}
$$

Balance energetico ideal (sin perdidas):

$$
R_I+T_I=1
$$

Lectura fisica:
- si \(Z_1=Z_2\), no hay reflexion (\(R_A=0\), \(R_I=0\));
- si \(Z_2\gg Z_1\), la reflexion tiende a ser alta;
- si \(Z_2\ll Z_1\), tambien puede haber reflexion alta pero con cambio de fase en amplitud.

## 5- Nota conceptual importante
Los coeficientes de amplitud y de intensidad no son lo mismo.
La intensidad depende del cuadrado de amplitud y del medio de propagacion.

## 6- Metodo de resolucion recomendado
1. Calcula \(Z_1\) y \(Z_2\) (si no vienen dados) con \(Z=\rho v\).
2. Calcula \(R_A\) y, si procede, \(T_A\).
3. Calcula \(R_I\) y \(T_I\).
4. Verifica balance \(R_I+T_I\approx1\) en modelo ideal.
5. Interpreta signo de \(R_A\) y magnitud de \(R_I\).

## 7- Errores tipicos
- confundir \(R_A\) con \(R_I\).
- olvidar que \(R_I\) y \(T_I\) deben estar entre 0 y 1 en modelo ideal.
- usar impedancias con unidades inconsistentes.
- ignorar el signo de \(R_A\) (fase de la onda reflejada).
- no comprobar balance energetico.

## 8- Ejemplo completo guiado
Datos:
- \(Z_1=18\times10^6\ \mathrm{Pa\,s/m}\),
- \(Z_2=45\times10^6\ \mathrm{Pa\,s/m}\).

Paso 1- reflexion de amplitud:

$$
R_A=\frac{45-18}{45+18}=\frac{27}{63}=0.4286
$$

Paso 2- reflexion de intensidad:

$$
R_I=R_A^2\approx0.1837
$$

Paso 3- transmision de intensidad:

$$
T_I=\frac{4Z_1Z_2}{(Z_1+Z_2)^2}\approx0.8163
$$

Comprobacion:

$$
R_I+T_I\approx1.0000
$$

Interpretacion: se refleja ~18.4% de la intensidad y se transmite ~81.6%.

## 9- Aplicaciones reales
- inspeccion de uniones y soldaduras.
- acoplamiento de sensores ultrasonicos.
- evaluacion de interfaces en materiales multicapa.
- analisis de reflexiones sismicas en geologia.

## 10- Sintesis final
Dominar reflexion y transmision en solidos significa:
- modelar correctamente la interfaz,
- calcular coeficientes de amplitud e intensidad sin confusiones,
- validar balance energetico,
- interpretar fisicamente el contraste de impedancias.
