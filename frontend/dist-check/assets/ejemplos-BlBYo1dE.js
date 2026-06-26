const a=`# Ejemplo tipo examen

## Enunciado

Una barra cilindrica de acero esta sometida a una fuerza de traccion axial. Se conocen las propiedades elasticas del material y se pide determinar las deformaciones longitudinal y transversal, asi como verificar la coherencia entre los modulos elasticos mediante la relacion fundamental del isotropo.

Datos del problema:

- Tension normal aplicada: 150 MPa
- Modulo de Young del acero: 200 GPa
- Coeficiente de Poisson del acero: 0.30

## Datos

- Tension normal aplicada: 150 MPa
- Modulo de Young: 200 GPa
- Coeficiente de Poisson: 0.30
- Variacion de presion hidrostatica para comprobacion volumetrica: [[DeltaP]] de 50 MPa
- Cambio relativo de volumen medido: [[DeltaV_rel]] de -3.7 por diez a la menos cuatro

## Definicion del sistema

El sistema consiste en una barra cilindrica de acero sometida a traccion uniaxial en su eje longitudinal. Se supone el material isotropo, homogeneo y en regimen elastico lineal. La seccion transversal permanece plana y perpendicular al eje durante la deformacion (hipotesis de Bernoulli). No hay cargas laterales ni restricciones de contorno que impidan la contraccion transversal libre.

## Modelo fisico

El modelo se basa en la ley de Hooke para un solido isotropo en traccion uniaxial. Las magnitudes nucleares del leaf son [[E_young]], [[nu_poisson]] y [[G_shear]], conectadas por la relacion fundamental entre modulos. La [[sigma]] aplicada produce una [[epsilon]] longitudinal y una [[epsilon_transv]] transversal acopladas por [[nu_poisson]]. El [[G_shear]] se obtiene a partir de [[E_young]] y [[nu_poisson]] mediante la relacion termodinamica del isotropo.

## Justificacion del modelo

El modelo de elasticidad lineal isotropa es valido porque la tension aplicada (150 MPa) esta muy por debajo del limite elastico del acero comun (entre 250 y 600 MPa), por lo que la relacion tension-deformacion es lineal y reversible. El acero policristalino se comporta como isotropo a escala macroscopica porque los granos cristalinos estan orientados aleatoriamente.

El modelo dejaria de ser valido si la tension superase el limite elastico (apareceria plasticidad), si la barra tuviera una textura cristalografica marcada (anisotropia) o si la temperatura fuera lo suficientemente alta como para modificar significativamente los modulos elasticos.

## Resolucion simbolica

Primero se calcula la deformacion longitudinal usando la definicion del modulo de Young:

{{f:modulo_young}}

Despejando la deformacion:

{{f:modulo_young}}

La deformacion longitudinal resulta del cociente entre la tension y el modulo de Young.

A continuacion se obtiene la deformacion transversal mediante el coeficiente de Poisson:

{{f:relacion_poisson}}

La deformacion transversal es el producto del coeficiente de Poisson por la deformacion longitudinal [[epsilon_long]], cambiado de signo (contraccion).

Finalmente se verifica la coherencia calculando el modulo de cizalla a partir de la relacion fundamental:

{{f:relacion_E_G_nu}}

Despejando [[G_shear]]:

{{f:relacion_E_G_nu}}

El modulo de cizalla queda determinado por el modulo de Young y el coeficiente de Poisson.

Si el mismo acero se sometiera a un ensayo tangencial, la tension tangencial [[tau]] seria la carga aplicada y la deformacion angular [[gamma]] seria la respuesta observable asociada a [[G_shear]]; aqui se calcula el modulo de cizalla por coherencia isotropa, no por una medida directa de cizalla.

Como comprobacion volumetrica independiente, se usa la relacion del modulo de compresibilidad entre la variacion de presion [[DeltaP]] y el cambio relativo de volumen [[DeltaV_rel]]:

{{f:modulo_compresibilidad}}

Esta parte no sustituye al ensayo de traccion; verifica que la respuesta volumetrica del mismo solido es compatible con el orden de magnitud esperado para el acero.

## Sustitucion numerica

Para la deformacion longitudinal, dividir 150 MPa entre 200 GPa (equivalente a 200 000 MPa) da un valor de 7.5 por diez a la menos cuatro. Por tanto [[epsilon]] ≈ 7.5×10⁻⁴.

Para la deformacion transversal, multiplicar el coeficiente de Poisson (0.30) por la deformacion longitudinal y cambiar el signo da menos 2.25 por diez a la menos cuarta. Por tanto [[epsilon_transv]] ≈ −2.25×10⁻⁴.

Para el modulo de cizalla, dividir 200 GPa entre el producto de 2 por (1 mas 0.30), es decir dividir entre 2.60, resulta aproximadamente 76.9 GPa. Por tanto [[G_shear]] ≈ 76.9 GPa.

Para la comprobacion volumetrica, dividir la variacion de presion [[DeltaP]] de 50 MPa entre el valor absoluto de [[DeltaV_rel]] da aproximadamente 135 GPa. Por tanto [[K_bulk]] queda en el orden esperado para un acero, sin contradecir la respuesta de traccion.

## Validacion dimensional

- Deformacion longitudinal: \`[M L⁻¹ T⁻²]\` dividido entre \`[M L⁻¹ T⁻²]\` da adimensional \`[1]\` ✓
- Deformacion transversal: adimensional por adimensional da adimensional \`[1]\` ✓
- Modulo de cizalla: \`[M L⁻¹ T⁻²]\` dividido entre adimensional da \`[M L⁻¹ T⁻²]\` ✓

## Interpretacion fisica

La deformacion longitudinal de 7.5×10⁻⁴ (menos del 0.1 %) confirma que el acero apenas se alarga bajo 150 MPa, lo que es coherente con su elevada rigidez. Para una barra de un metro de longitud, este valor representaria un alargamiento de solo 0.75 milimetros, imperceptible a simple vista pero perfectamente medible con un extensometro.

La contraccion transversal de 2.25×10⁻⁴ muestra que la barra se estrecha lateralmente al ser estirada, exactamente en la proporcion dictada por el [[nu_poisson]]. Si el coeficiente de Poisson fuera mayor (acercandose a 0.5, como en el caucho), la contraccion lateral seria casi igual a la elongacion y el volumen apenas cambiaria. Si fuera menor (acercandose a cero, como en el corcho), la contraccion transversal seria minima y el volumen aumentaria apreciablemente al estirar.

El modulo de cizalla calculado de 76.9 GPa es consistente con el valor tabulado para el acero (aproximadamente 80 GPa, con variaciones segun la aleacion). Esta concordancia valida la coherencia interna del modelo isotropo: conocer dos de los tres modulos permite predecir el tercero sin medicion adicional. Si el valor calculado difiriera significativamente del tabulado, habria que cuestionar la hipotesis de isotropia o la precision de los datos de entrada.

# Ejemplo de aplicacion real

## Contexto

En un ensayo de caracterizacion de materiales por ultrasonidos, un ingeniero mide la velocidad de las ondas longitudinales y transversales en una muestra de aluminio para determinar sus constantes elasticas sin destruir la pieza. El ensayo registra una velocidad longitudinal de 6350 m/s y una velocidad transversal de 3100 m/s. La densidad de la muestra es 2700 kg/m³.

## Estimacion fisica

A partir de las velocidades y la densidad, el modulo de cizalla se obtiene como el producto de la densidad por el cuadrado de la velocidad transversal. Multiplicar 2700 kg/m³ por el cuadrado de 3100 m/s (9.61×10⁶ m²/s²) da aproximadamente 25.9 GPa. Por tanto [[G_shear]] ≈ 25.9 GPa.

El modulo de onda plana M se obtiene como el producto de la densidad por el cuadrado de la velocidad longitudinal. Multiplicar 2700 kg/m³ por el cuadrado de 6350 m/s (4.032×10⁷ m²/s²) da aproximadamente 108.9 GPa.

El modulo de compresibilidad se obtiene restando cuatro tercios de [[G_shear]] al modulo de onda plana. Restando 34.6 GPa a 108.9 GPa se obtiene aproximadamente 74.3 GPa. Por tanto [[K_bulk]] ≈ 74.3 GPa.

El coeficiente de Poisson se puede estimar a partir del cociente de velocidades al cuadrado. Usando la relacion entre velocidades y Poisson, el resultado es aproximadamente 0.34. Por tanto [[nu_poisson]] ≈ 0.34.

Finalmente, [[E_young]] se obtiene mediante la relacion fundamental, multiplicar 2 por [[G_shear]] por la suma de 1 mas [[nu_poisson]], lo que da aproximadamente 69.5 GPa.

## Interpretacion

Los valores obtenidos (E aproximadamente 69.5 GPa, G aproximadamente 25.9 GPa, K aproximadamente 74.3 GPa, nu aproximadamente 0.34) son consistentes con los valores tabulados para aluminio puro. Esto demuestra que la medicion de velocidades ultrasonicas permite caracterizar completamente las propiedades elasticas de un isotropo sin necesidad de ensayos destructivos. La tecnica es fundamental en control de calidad industrial, inspeccion de soldaduras y evaluacion de integridad estructural.
`;export{a as default};
