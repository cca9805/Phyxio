const e=`# Ejemplo tipo examen

## Enunciado

Un acero estructural tiene un modulo de Young de 210 GPa y un coeficiente de Poisson de 0.29. Se pide calcular el modulo de cizalla, el modulo de compresibilidad, el primer parametro de Lame, y verificar la coherencia interna usando la relacion de E en funcion de G y K.

Datos del problema:

- Modulo de Young: 210 GPa
- Coeficiente de Poisson: 0.29

## Datos

- [[E_young]]: 210 GPa (210 por diez a la novena Pa)
- [[nu_poisson]]: 0.29

Estos dos datos forman un par independiente suficiente para un solido isotropo. El valor de [[E_young]] fija la escala de rigidez longitudinal y [[nu_poisson]] fija como se reparte esa rigidez entre respuesta a cizalla y respuesta volumetrica. Como 0.29 esta dentro del intervalo fisico (-1, 0.5), se espera que [[G_shear]], [[K_bulk]] y [[lambda_lame]] salgan positivos y del orden de decenas o centenas de GPa, no de MPa ni de TPa.

## Definicion del sistema

El sistema es un solido isotropo homogeneo en regimen elastico lineal. Se supone que el material tiene la misma respuesta mecanica en todas las direcciones. No hay cargas aplicadas: el objetivo es obtener las constantes elasticas completas a partir de un par conocido (E, nu).

## Modelo fisico

El modelo usa las relaciones algebraicas de la elasticidad isotropa. Las magnitudes nucleares son [[E_young]], [[nu_poisson]], [[G_shear]], [[K_bulk]] y [[lambda_lame]]. A partir de E y nu se calculan las demas constantes usando las formulas de conversion.

## Justificacion del modelo

Las relaciones son exactas para cualquier solido isotropo en regimen elastico lineal. Las unicas condiciones de validez son: isotropia del material y valores de nu dentro del rango termodinamico (-1 a 0.5). El acero estructural cumple ambas condiciones. El modelo dejaria de ser valido si el material fuera anisotropo (por ejemplo, un composite laminado) o si estuviera fuera del regimen elastico.

## Resolucion simbolica

Primero se calcula el modulo de cizalla:

{{f:relacion_G_E_nu}}

Se sustituye [[E_young]] y [[nu_poisson]] en la formula para obtener [[G_shear]].

A continuacion el modulo de compresibilidad:

{{f:relacion_K_E_nu}}

Se sustituye [[E_young]] y [[nu_poisson]] para obtener [[K_bulk]].

Despues el primer parametro de Lame:

{{f:relacion_lambda_E_nu}}

Se sustituye [[E_young]] y [[nu_poisson]] para obtener [[lambda_lame]].

Finalmente la verificacion con la relacion independiente de nu:

{{f:relacion_E_G_K}}

Se sustituyen los valores calculados de [[G_shear]] y [[K_bulk]] y se comprueba que el resultado es igual al [[E_young]] original.

## Sustitucion numerica

Modulo de cizalla: 210 dividido entre 2 por (1 mas 0.29) da 210 dividido entre 2.58, que es 81.40 GPa. Por tanto [[G_shear]] ≈ 81.4 GPa.

Modulo de compresibilidad: 210 dividido entre 3 por (1 menos 2 por 0.29) da 210 dividido entre 3 por 0.42, que es 210 dividido entre 1.26, que es 166.67 GPa. Por tanto [[K_bulk]] ≈ 166.7 GPa.

Primer parametro de Lame: 210 por 0.29 dividido entre (1 mas 0.29) por (1 menos 0.58) da 60.9 dividido entre 1.29 por 0.42, que es 60.9 dividido entre 0.5418, que es 112.41 GPa. Por tanto [[lambda_lame]] ≈ 112.4 GPa.

Verificacion: 9 por 166.67 por 81.40 dividido entre (3 por 166.67 mas 81.40) da 122071 dividido entre 581.4, que es 209.97 GPa. Coincide con [[E_young]] de 210 GPa dentro del redondeo. Coherencia confirmada.

## Validacion dimensional

- [[G_shear]]: Pa dividido entre adimensional da Pa ✓
- [[K_bulk]]: Pa dividido entre adimensional da Pa ✓
- [[lambda_lame]]: Pa por adimensional dividido entre adimensional da Pa ✓
- Verificacion de E: Pa por Pa dividido entre Pa da Pa ✓

## Interpretacion fisica

El cociente [[ratio_G_E]] resulta 0.388, tipico de metales con [[nu_poisson]] alrededor de 0.3. El material resiste cizalla con una rigidez que es aproximadamente un 39 % de su rigidez a traccion.

El cociente [[ratio_K_E]] resulta 0.794. El material no es especialmente incompresible: su modulo de compresibilidad es del mismo orden que el de Young. Si [[nu_poisson]] fuera mas cercano a 0.5 (como en el caucho), K seria ordenes de magnitud mayor que E.

El [[lambda_lame]] positivo confirma que [[nu_poisson]] es positivo. Un lambda negativo habria indicado un material auxetico.

La verificacion cruzada con la formula E en funcion de G y K confirma que los tres calculos son mutuamente coherentes. Si hubiera un error en cualquiera de ellos, esta verificacion lo detectaria inmediatamente.

# Ejemplo de aplicacion real

## Contexto

Un ingeniero de ensayos no destructivos mide las velocidades de onda P y S en una pieza de aluminio mediante ultrasonidos. Obtiene una velocidad longitudinal de 6350 m/s y una velocidad transversal de 3100 m/s. La densidad del aluminio es 2700 kg/m³. Se pide determinar E, G, K y nu del material a partir de estas medidas.

## Estimacion fisica

El modulo de cizalla se obtiene directamente de la velocidad transversal: [[G_shear]] es densidad por velocidad S al cuadrado, es decir 2700 por 3100 al cuadrado, que da 25.95 GPa.

Para obtener K, se usa la relacion entre velocidad P y los modulos: la velocidad P al cuadrado es (K mas cuatro tercios de G) dividido entre la densidad. Despejando: K es densidad por velocidad P al cuadrado menos cuatro tercios de G. Esto da 2700 por 6350 al cuadrado menos cuatro tercios de 25.95 por diez a la novena, que es 108.89 menos 34.60, dando 74.29 GPa. Por tanto [[K_bulk]] ≈ 74.3 GPa.

Ahora se calcula E con la formula en funcion de G y K: 9 por 74.3 por 25.95 dividido entre (3 por 74.3 mas 25.95) da 17352 dividido entre 248.85, que es 69.7 GPa. Por tanto [[E_young]] ≈ 69.7 GPa.

Finalmente nu: (3K menos 2G) dividido entre (2 por (3K mas G)) da (222.9 menos 51.9) dividido entre (2 por 248.85), que es 171 dividido entre 497.7, dando 0.344. Por tanto [[nu_poisson]] ≈ 0.344.

La lectura cuantitativa es coherente antes incluso de consultar una tabla: [[ratio_G_E]] queda cerca de 25.95/69.7 = 0.37 y [[ratio_K_E]] cerca de 74.3/69.7 = 1.07. Eso describe un metal que resiste la compresion algo mas que la traccion y cuya rigidez a cizalla es aproximadamente un tercio largo de la rigidez longitudinal. Si la estimacion diera E de 20 GPa o 200 GPa para aluminio, o un nu fuera del rango 0.30-0.36 esperado, la medida ultrasonica deberia revisarse.

## Interpretacion

Los valores obtenidos son tipicos del aluminio: E alrededor de 70 GPa, nu alrededor de 0.33-0.35. La concordancia con valores tabulados confirma que la pieza no tiene defectos significativos que alteren las velocidades de onda.

Este metodo es no destructivo: basta medir dos velocidades de onda y la densidad para obtener las cuatro constantes elasticas del material. Es la base de la caracterizacion elastica por ultrasonidos, usada rutinariamente en control de calidad de materiales metalicos, ceramicos y composites.

Si los valores calculados difirieran significativamente de los tabulados, indicaria heterogeneidad del material, presencia de defectos internos (porosidad, microgrietas), anisotropia inducida por el proceso de fabricacion, o temperatura fuera del rango habitual.
`;export{e as default};
