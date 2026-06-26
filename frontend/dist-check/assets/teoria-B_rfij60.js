const e=`# Ondas flexionales en vigas

## Contexto conceptual

Cuando se golpea una barra metálica o un raíl de tren, la perturbación no se propaga como una onda simple con velocidad constante. Las ondas de flexión —también llamadas ondas transversales de curvatura— son inherentemente **dispersivas**: su velocidad de propagación depende de la frecuencia. Las componentes de alta frecuencia viajan más rápido que las de baja frecuencia, haciendo que un pulso inicialmente compacto se ensanche progresivamente al recorrer la viga.

Este fenómeno es la razón por la que un golpe en un raíl suena diferente según la distancia al punto de impacto: el oyente percibe primero las componentes agudas (alta frecuencia, alta velocidad) y después las graves (baja frecuencia, baja velocidad). Comprender la dispersión flexional es fundamental en acústica estructural, diseño de instrumentos musicales, análisis de vibraciones en maquinaria y control de ruido en edificios.

Este leaf presenta la teoría clásica de Euler-Bernoulli, que describe la propagación de ondas de flexión en vigas esbeltas, y establece las relaciones entre frecuencia, número de onda, velocidades de fase y de grupo, y los parámetros geométricos y materiales de la sección.

## 🟢 Nivel esencial

Una **onda de flexión** es una perturbación transversal que viaja a lo largo de una viga, produciendo curvatura local. A diferencia de las ondas longitudinales (compresión-tracción), aquí el desplazamiento es perpendicular al eje de la viga.

La propiedad más importante de las ondas flexionales es su **dispersión**: la velocidad con que se propagan depende de la frecuencia. Las componentes de alta frecuencia viajan más rápido. Esto contrasta con las ondas en una cuerda ideal, que viajan todas a la misma velocidad sin importar su frecuencia.

La velocidad de propagación de la flexión depende de tres factores:

- La **rigidez a la flexión** de la viga, que combina la elasticidad del material con la forma de la sección transversal. Una viga más rígida propaga ondas más rápido.
- La **masa distribuida** de la viga. Una viga más pesada propaga ondas más lento.
- La **frecuencia** de la onda. A mayor frecuencia, mayor velocidad.

Existen dos velocidades relevantes:
- La **velocidad de fase**: la velocidad a la que se mueve un patrón de crestas y valles.
- La **velocidad de grupo**: la velocidad a la que viaja la energía. En vigas, la velocidad de grupo es exactamente el doble de la velocidad de fase.

> [!NOTE]
> Las ondas de flexión son siempre más lentas que las ondas longitudinales en el mismo material. A 1 kHz en una barra de acero de 5 mm, la velocidad de fase flexional es de unos 130 m/s, frente a 5100 m/s para la onda longitudinal.

## 🔵 Nivel formal

La relación de dispersión de Euler-Bernoulli establece la conexión entre frecuencia angular [[omega]] y número de onda [[k_flex]]:

{{f:relacion_dispersion_flex}}

Esta relación cuadrática ([[omega]] proporcional al cuadrado del número de onda) es la fuente de toda la dispersión. La velocidad de fase se define como el cociente entre frecuencia angular y número de onda:

{{f:velocidad_fase_flexional}}

La dependencia con la raíz cuadrada de [[omega]] confirma que ondas de mayor frecuencia se propagan más rápido. La velocidad de grupo, definida como la derivada de [[omega]] respecto a [[k_flex]], resulta exactamente el doble de la velocidad de fase:

{{f:velocidad_grupo_flexional}}

La relación 2:1 entre velocidad de grupo y velocidad de fase es una consecuencia directa de la dispersión cuadrática y constituye una firma diagnóstica del modelo de Euler-Bernoulli.

La longitud de onda flexional se relaciona con [[k_flex]] de forma estándar:

{{f:longitud_onda_flexional}}

Al aumentar la frecuencia, [[lambda_flex]] disminuye como la raíz cuadrada inversa de [[omega]], no proporcionalmente como en ondas no dispersivas. Esto significa que el acortamiento de la longitud de onda es más lento de lo que la intuición sugiere.

> [!TIP]
> Para estimar rápidamente la velocidad de fase flexional: calcular el radio de giro de la sección ([[r_giro]]) y multiplicar por la raíz cuadrada de [[omega]] y de la velocidad longitudinal del material. El resultado será del orden correcto.

## 🔴 Nivel estructural

La ecuación de movimiento de Euler-Bernoulli para una viga uniforme produce una ecuación diferencial parcial de cuarto orden en el desplazamiento transversal. Su solución general incluye no solo ondas propagantes sino también **ondas evanescentes** que decaen exponencialmente desde las fuentes o discontinuidades.

La ecuación característica admite cuatro raíces para el número de onda: dos reales (ondas propagantes en ambas direcciones) y dos imaginarias (ondas evanescentes). En una viga infinita, solo las propagantes importan; en una viga finita, las evanescentes son esenciales para satisfacer las condiciones de contorno y producen los campos cercanos que dominan en las proximidades de los apoyos y las fuentes.

La **curva de dispersión** de [[omega]] frente a [[k_flex]] es una parábola que pasa por el origen. Su pendiente en cualquier punto da la velocidad de grupo, mientras que la pendiente de la recta que une el punto con el origen da la velocidad de fase. La relación parabólica implica que la **velocidad de fase tiende a cero** cuando [[omega]] tiende a cero (ondas muy largas apenas se propagan) y **crece sin límite** a frecuencias altas.

Sin embargo, a frecuencias altas el modelo de Euler-Bernoulli deja de ser válido porque ignora dos efectos:
- La **deformación por cortante transversal**, que limita la velocidad real por debajo de la velocidad de onda de cortante del material.
- La **inercia rotacional** de las secciones, que añade un término inercial adicional.

El modelo de **Timoshenko** incorpora ambos efectos y predice que la velocidad de fase se satura a la velocidad de onda de cortante (aproximadamente 0.6 veces la longitudinal). La transición entre Euler-Bernoulli y Timoshenko ocurre cuando [[lambda_flex]] se acerca al espesor de la sección.

La **dispersión** tiene consecuencias prácticas importantes:
- Un pulso breve (impacto) se ensancha temporalmente al propagarse, porque sus componentes frecuenciales viajan a velocidades diferentes.
- La forma de llegada de un impulso a un observador distante permite determinar las propiedades del material si se mide con precisión temporal (técnica de ultrasonidos con ondas guiadas).
- En estructuras finitas, los modos de resonancia a frecuencias de flexión no están equiespaciados (a diferencia de las ondas longitudinales), lo que produce un espectro modal denso a frecuencias altas.

El **radio de giro** [[r_giro]] de la sección juega un papel central como escala de longitud intrínseca. La velocidad de fase puede escribirse como el producto del radio de giro, la velocidad longitudinal del material y la raíz de k: cuando [[lambda_flex]] se hace comparable a [[r_giro]], las correcciones de Timoshenko se vuelven necesarias.

> [!WARNING]
> La velocidad de fase flexional puede superar numéricamente la velocidad longitudinal si se extrapola el modelo de Euler-Bernoulli a frecuencias demasiado altas. Esto es una señal de que el modelo ha dejado de ser válido, no de que la física permita superar ese límite.

## Interpretación física profunda

La dispersión flexional refleja que la rigidez a la flexión involucra **derivadas de cuarto orden** del desplazamiento. Una cuerda (derivada segunda) produce ondas no dispersivas; una viga (derivada cuarta) produce dispersión cuadrática. El orden de la derivada espacial determina la ley de dispersión.

La flexión implica compresión y tracción en fibras alejadas del eje neutro. La fuerza restauradora por unidad de longitud es proporcional a la cuarta derivada del desplazamiento, no a la segunda.

El cociente EI/[[rho_lin]] es el parámetro maestro para el diseño: materiales con alto E y baja densidad producen vigas con velocidades de fase más altas por kg de estructura.

## Orden de magnitud

Para una barra de acero rectangular de 5 mm × 20 mm de sección:
- [[E_young]] es 210 GPa (en SI: 210 × 10⁹ Pa)
- [[I_seccion]] es 20 × 5³ / 12 × 10⁻¹² m⁴, que da 2.08 × 10⁻¹⁰ m⁴
- [[rho_lin]] es 7850 × 0.005 × 0.020, que da 0.785 kg/m
- A [[omega]] de 6283 rad/s (1 kHz), [[v_fase_flex]] resulta aproximadamente 130 m/s
- [[v_grupo_flex]] resulta aproximadamente 260 m/s
- [[lambda_flex]] resulta aproximadamente 0.13 m

Para comparación, la velocidad longitudinal en el mismo acero es de 5100 m/s: la onda flexional viaja 40 veces más lenta a 1 kHz. A 10 kHz, la velocidad de fase sube a unos 410 m/s y a 100 kHz a 1300 m/s, acercándose gradualmente al límite del modelo.

Si [[v_fase_flex]] resulta mayor que 5000 m/s para una viga de acero a frecuencia audible, hay un error de unidades: lo más probable es que [[I_seccion]] esté en cm⁴ sin convertir.

## Método de resolución personalizado

Para calcular la velocidad de fase flexional en una viga:

1. Obtener [[E_young]] del material en Pa (si está en GPa, multiplicar por 10⁹).
2. Calcular [[I_seccion]] de la sección en m⁴. Para sección rectangular de base b y altura h en la dirección de la flexión: b·h³/12.
3. Calcular [[rho_lin]] como [[rho_vol]] × [[A_seccion]], donde [[A_seccion]] es b·h para sección rectangular.
4. Definir [[omega]] en rad/s (si se parte de Hz, multiplicar por 2π).
5. Aplicar la fórmula de [[v_fase_flex]]: raíz cuarta del producto EI por [[omega]] al cuadrado dividido por rho·A.
6. Calcular [[v_grupo_flex]] como el doble de [[v_fase_flex]].
7. Calcular [[lambda_flex]] como 2π dividido por [[k_flex]], donde [[k_flex]] se obtiene dividiendo [[omega]] entre [[v_fase_flex]].
8. Verificar que [[lambda_flex]] sea al menos 6 veces el espesor de la sección.

Si el paso 8 no se cumple, el modelo de Euler-Bernoulli no es fiable y debe usarse Timoshenko.

## Casos especiales y ejemplo extendido

**Viga circular:** [[I_seccion]] es π·r⁴/4, radio de giro r/2. La dispersión flexional determina la frecuencia de vibración de ejes rotantes.

**Viga en I:** momento de inercia mucho mayor que secciones macizas del mismo peso, elevando la velocidad de fase y las frecuencias de resonancia.

**Vigas cortas vs. largas:** cuando la longitud es comparable a pocas longitudes de onda, los modos de resonancia discretos dominan. Cuando la viga es mucho más larga que [[lambda_flex]], la propagación libre domina.

**Límite de bajas frecuencias:** cuando [[omega]] tiende a cero, [[v_fase_flex]] tiende a cero y la viga responde de forma casi estática.

## Preguntas reales del alumno

**¿Por qué la velocidad de fase flexional depende de la frecuencia mientras que la longitudinal no?**
Porque la fuerza restauradora en flexión involucra la cuarta derivada espacial, que introduce dispersión. En ondas longitudinales la fuerza depende solo de la segunda derivada y no hay dispersión.

**¿Puede la velocidad de fase flexional superar la velocidad longitudinal?**
No físicamente. El modelo de Euler-Bernoulli predice crecimiento ilimitado, pero es un artefacto: a frecuencias altas la deformación por cortante limita la velocidad a unos 3100 m/s en acero.

**¿Por qué la velocidad de grupo es mayor que la de fase?**
Porque la curva de [[omega]] frente al número de onda es convexa. La tangente (velocidad de grupo) siempre tiene mayor pendiente que la secante desde el origen (velocidad de fase).

**¿Para qué sirve conocer la velocidad de grupo?**
Para calcular tiempos de llegada de energía. Un golpe a 10 m con velocidad de grupo de 500 m/s llega en 20 ms. La velocidad de fase no da esta información porque no transporta energía.

## Conexiones transversales y rutas de estudio

Conexión con [ondas longitudinales en barras](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras) (caso no dispersivo), [modos en placas y membranas](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/modos-en-placas-y-membranas) (extensión 2D de EI) y [dispersión y atenuación en sólidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos) (combinación de dispersión con atenuación).

## Síntesis final

Las ondas de flexión en vigas son inherentemente dispersivas: su velocidad de propagación crece con la raíz cuadrada de la frecuencia. La velocidad de grupo es exactamente el doble de la velocidad de fase en el modelo de Euler-Bernoulli, reflejando la dispersión cuadrática. Los parámetros de control son la rigidez EI y la masa lineal [[rho_lin]], y el modelo es válido mientras la longitud de onda sea muy superior al espesor de la sección.
`;export{e as default};
