const e=`# Ejemplo tipo examen

## Enunciado

Una barra de aluminio de sección rectangular (base 25 mm, altura 8 mm en la dirección de flexión) se excita transversalmente a una frecuencia de 2 kHz. Datos del aluminio: módulo de Young 70 GPa, densidad volumétrica 2700 kg/m³.

Determinar:
1. La velocidad de fase flexional.
2. La velocidad de grupo.
3. La longitud de onda flexional.
4. Si el modelo de Euler-Bernoulli es aplicable a esta frecuencia.

## Datos

- Base de la sección: b de 0.025 m
- Altura de la sección (dirección de flexión): h de 0.008 m
- Frecuencia: f de 2000 Hz
- [[E_young]]: 70 × 10⁹ Pa
- [[rho_vol]]: 2700 kg/m³

## Definición del sistema

Viga de aluminio de sección rectangular con base 25 mm y altura 8 mm, sometida a excitación transversal armónica en la dirección de menor inercia.

## Modelo físico

Viga de Euler-Bernoulli: sección constante, material isótropo elástico, pequeñas deformaciones. La onda de flexión se propaga con dispersión cuadrática: [[omega]] se relaciona con [[k_flex]], [[v_fase_flex]] depende de la frecuencia y [[v_grupo_flex]] duplica la velocidad de fase.

## Justificación del modelo

El modelo de Euler-Bernoulli es apropiado porque la longitud de onda resultante (19.2 cm) es mucho mayor que el espesor de la sección (8 mm), satisfaciendo la condición de viga esbelta con un factor de seguridad superior a 4.

## Resolución simbólica

{{f:velocidad_fase_flexional}}

[[I_seccion]] se calcula como b·h³/12

[[rho_lin]] se calcula como [[rho_vol]] × [[A_seccion]], con [[A_seccion]] igual a b × h

[[omega]] se calcula como 2π × f

[[v_fase_flex]] se calcula como la raíz cuarta de ([[E_young]]·[[I_seccion]]·[[omega]]²/[[rho_lin]])

[[v_grupo_flex]] se calcula como 2 × [[v_fase_flex]]

[[lambda_flex]] se calcula como 2π / [[k_flex]], con [[k_flex]] igual a [[omega]]/[[v_fase_flex]]

## Sustitución numérica

[[I_seccion]] vale 0.025 × (0.008)³ / 12 dando 1.067 × 10⁻⁹ m⁴

[[A_seccion]] vale 0.025 × 0.008 dando 2.0 × 10⁻⁴ m²

[[rho_lin]] vale 2700 × 2.0 × 10⁻⁴ dando 0.54 kg/m

[[omega]] vale 2π × 2000 dando 12 566 rad/s

Numerador EI·omega²: 74.69 × 1.579 × 10⁸ dando 1.179 × 10¹⁰

Cociente: 1.179 × 10¹⁰ / 0.54 dando 2.184 × 10¹⁰

Raíz cuarta: 384 m/s

[[v_fase_flex]] resulta **384 m/s**

[[v_grupo_flex]] vale 2 × 384 resultando **768 m/s**

[[k_flex]] vale 12 566 / 384 resultando 32.7 rad/m

[[lambda_flex]] vale 2π / 32.7 resultando **0.192 m**

## Validación dimensional

\`[M L⁻¹ T⁻²]·[L⁴]·[T⁻²] / [M L⁻¹]\` da \`[L⁴ T⁻⁴]\`

Raíz cuarta: \`[L T⁻¹]\` ✓

Condición de validez: [[lambda_flex]] (0.192 m) > 6 × h (0.048 m) ✓

## Interpretación física

La velocidad de fase de 384 m/s es muy inferior a la velocidad longitudinal del aluminio (5100 m/s), confirmando que las ondas de flexión son mucho más lentas que las longitudinales. La velocidad de grupo (768 m/s) es el doble exacto, verificando la dispersión cuadrática.

La longitud de onda de 19.2 cm indica que en una barra de 1 m cabrían aproximadamente 5 longitudes de onda completas, lo que corresponde a un régimen de propagación libre donde las condiciones de contorno son menos dominantes que los efectos de propagación.

Si se aumentara la frecuencia a 20 kHz, la velocidad de fase subiría a 1215 m/s y [[lambda_flex]] bajaría a 6 cm, todavía mayor que 6h (4.8 cm), pero ya en el límite de validez.

# Ejemplo de aplicación real

## Contexto

Un ingeniero acústico debe diseñar una barrera antivibración para un suelo industrial. Las máquinas excitan el suelo a través de vigas de acero IPE-200 que transmiten ondas de flexión en el rango de 100 Hz a 5 kHz. El ingeniero necesita conocer a qué velocidad viaja la energía de flexión para dimensionar el aislamiento y predecir tiempos de respuesta.

## Estimación física

Esta estimación de orden de magnitud comprueba la escala de [[v_grupo_flex]], [[lambda_flex]] y el límite de validez del modelo antes de elegir la separación de aislamiento.

Datos del perfil IPE-200: [[E_young]] de 210 × 10⁹ Pa, [[I_seccion]] (eje fuerte) de 1943 × 10⁻⁸ m⁴, [[A_seccion]] de 28.5 × 10⁻⁴ m², [[rho_vol]] de 7850 kg/m³, [[rho_lin]] de 22.4 kg/m, altura total 200 mm.

A 500 Hz ([[omega]] de 3142 rad/s): EI vale 4.08 × 10⁶ N·m². Aplicando la fórmula de [[v_fase_flex]]: raíz cuarta de (4.08 × 10⁶ × (3142)² / 22.4) da **1158 m/s**. [[v_grupo_flex]] resulta **2316 m/s**. [[lambda_flex]] resulta **2.32 m**.

A 5 kHz ([[omega]] de 31 416 rad/s): [[v_fase_flex]] resulta 3663 m/s. [[lambda_flex]] resulta 0.73 m, que es menor que 6 × 0.2 m (1.2 m): el modelo de Euler-Bernoulli **no es válido** a esta frecuencia para el IPE-200 en eje fuerte.

## Interpretación

A 500 Hz, la energía de vibración recorre la viga IPE-200 a 2316 m/s. En una viga de 10 m, el tiempo de tránsito es de 4.3 ms. El aislamiento debe actuar en tiempos menores para ser efectivo contra transitorios.

La longitud de onda de 2.32 m a 500 Hz indica que las discontinuidades de aislamiento deben separarse menos de una longitud de onda. Con 3 m de separación entre apoyos, la barrera es adecuada a 500 Hz pero insuficiente a frecuencias más bajas.

El dato crucial: la velocidad de grupo (no la de fase) determina cuán rápido llega la vibración al punto a proteger. Usar la velocidad de fase subestimaría la transmisión real en un factor 2. El límite de validez del modelo para este perfil está en torno a 2 kHz; por encima, debe usarse Timoshenko.
`;export{e as default};
