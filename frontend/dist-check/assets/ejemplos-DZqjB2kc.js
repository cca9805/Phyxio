const e=`\uFEFF# Ejemplo tipo examen

## Enunciado

En un laboratorio de física nuclear de alta energía, dos núcleos de helio con masas idénticas [[m1]] y [[m2]] (de 2.0 u cada una) se preparan para una colisión elástica frontal. En el sistema de referencia del laboratorio, la partícula 1 se desplaza con una velocidad inicial medida [[v1]] (de 3500 m/s) hacia la derecha. Simultáneamente, la partícula 2 se mueve en sentido contrario con una velocidad [[v2]] (de -1500 m/s) hacia la izquierda. Se solicita al estudiante realizar un análisis cinemático completo del sistema antes del impacto, determinando con precisión la velocidad del centro de masas [[vcm]], las velocidades relativas en el marco de momento cero denominadas [[u_i]], y las energías cinéticas involucradas [[K_lab]] y [[K_cm]]. Finalmente, se debe verificar la consistencia del momento lineal total [[ptot]] y la validez del modelo mediante la aplicación del Teorema de König y el cálculo de la masa reducida [[mu]].

## Datos

- Masa de la partícula 1 (núcleo de helio): [[m1]] (2 u).
- Masa de la partícula 2 (núcleo de helio): [[m2]] (2 u).
- Velocidad de la partícula 1 en el laboratorio: [[v1]] (3500 m/s).
- Velocidad de la partícula 2 en el laboratorio: [[v2]] (-1500 m/s).
- Masa total del sistema de partículas: [[M]] (4 u).
- Constante de masa atómica: 1 u, aproximadamente 1.66 × 10⁻²⁷ kg.

## Definición del sistema

El sistema físico está constituido por el conjunto de las dos partículas masivas en interacción mutua. Se define como un sistema aislado, dado que no actúan fuerzas externas netas, lo que garantiza que el momento lineal total [[ptot]] se mantiene constante en el tiempo. El objetivo es situar al observador en el centro de masas para simplificar la descripción de la colisión, transformando un problema asimétrico en el laboratorio en uno perfectamente simétrico en el marco de momento cero. Este cambio de perspectiva permite centrarse en la agitación interna y las leyes de conservación locales.

## Modelo físico

Se adopta el modelo de partículas puntuales bajo la cinemática de Galileo, puesto que las velocidades observadas son despreciables frente a la rapidez de la luz en el vacío. El centro de masas se modela como un punto que se desplaza con una velocidad constante [[vcm]] que define el origen del marco CM. Para caracterizar la inercia relativa del sistema, introduciremos el concepto de masa reducida [[mu]]. El análisis energético se fundamentará en el **Primer Teorema de König**, que permite separar la energía de traslación del sistema de su energía cinética interna [[K_cm]], la cual está intrínsecamente ligada a la velocidad relativa [[v_rel]] mediante una relación cuadrática.

## Justificación del modelo

La justificación de emplear el marco del centro de masas es físicamente explícita: porque al restar la velocidad [[vcm]] de las velocidades individuales, eliminamos el movimiento de conjunto del sistema. Se asume que el sistema es inercial y se considera que cualquier fuerza interna (como la repulsión electromagnética entre núcleos) no altera la trayectoria del baricentro. Este modelo es válido para colisiones elásticas donde se desprecia la estructura interna de los núcleos, tratándolos como masas ideales. La rapidez constante del CM es una consecuencia directa de la ausencia de rozamiento externo o campos de fuerza no uniformes, lo que permite que el análisis sea matemáticamente ideal y pedagógicamente transparente. Al ser un sistema de masas iguales, la simetría es máxima y el cálculo es robusto frente a pequeñas perturbaciones.

## Resolución simbólica

La secuencia lógica de cálculo para la resolución cinemática es la siguiente:

1. **Inercia total**: Primero, establecemos la masa total del sistema [[M]] mediante la relación de suma:

{{f:M_sum}}

donde la suma de masas resulta en 4 u. 2. **Velocidad de arrastre**: Hallamos la velocidad del centro de masas [[vcm]] aplicando la expresión fundamental:

{{f:vcm_formula}}

3. **Cambio de marco**: Determinamos las velocidades internas [[u_i]] respecto al baricentro aplicando la transformación de Galileo:

{{f:velocity_transformation}}

4. **Verificación de balance**: Confirmamos que el momento en el marco CM es nulo mediante la condición de balance:

{{f:u_balance}}

5. **Parámetros relativos**: Calculamos la masa reducida [[mu]] empleando la fórmula:

{{f:reduced_mass_formula}}

y la velocidad relativa [[v_rel]] como la diferencia entre velocidades de laboratorio:

{{f:relative_velocity}}

6. **Balance energético**: Evaluamos la energía cinética interna [[K_cm]] a través de la forma reducida:

{{f:internal_energy_reduced}}

y calculamos la energía total del laboratorio [[K_lab]] por suma directa antes de validarla mediante el Teorema de König:

{{f:lab_kinetic_energy}}

{{f:konig_energy}}

7. **Consistencia final**: Confirmamos el momento total [[ptot]] del laboratorio usando primero la suma de partículas:

{{f:total_momentum_sum}}

y después la relación macroscópica:

{{f:total_momentum_vcm}}

## Sustitución numérica

1. **Masa total**: [[M]] de 4 u.

{{f:M_sum}}

2. **Velocidad CM**: [[vcm]] de 1000 m/s.

{{f:vcm_formula}}

3. **Velocidades internas** [[u_i]]:
   - Partícula 1: _u1_ de 3500 - 1000, resultando en 2500 m/s.

{{f:velocity_transformation}}

- Partícula 2: _u2_ de -1500 - 1000, resultando en -2500 m/s.

{{f:velocity_transformation}}

- Se cumple el balance:

{{f:u_balance}}

4. **Masa reducida**: [[mu]] de 1 u.

{{f:reduced_mass_formula}}

5. **Velocidad relativa**: [[v_rel]] de 5000 m/s.

{{f:relative_velocity}}

6. **Energía de traslación**: [[K_trans]] de 2.0 x 10⁶ unidades.

{{f:K_trans}}

7. **Energía interna**: [[K_cm]] de 12.5 x 10⁶ unidades.

{{f:internal_energy_reduced}}

8. **Energía total**: [[K_lab]] de 14.5 x 10⁶ unidades.

{{f:lab_kinetic_energy}}

{{f:konig_energy}}

## Validación dimensional

- La velocidad del centro de masas [[vcm]] tiene dimensiones de \`[L T⁻¹]\`, coherente con el cociente momento/masa.
- La energía cinética interna [[K_cm]] arroja unidades de \`[M L² T⁻²]\` al multiplicar masa por velocidad al cuadrado.

El Teorema de König:

{{f:konig_energy}}

es dimensionalmente homogéneo, permitiendo sumar la energía interna y la energía de traslación del CM sin conflicto de unidades.

## Interpretación física

La interpretación de estos resultados revela que el sistema posee una energía total en el laboratorio de 14.5 x 10⁶ unidades, pero de ese total, solo 12.5 x 10⁶ corresponden a la energía cinética interna [[K_cm]]. Esto significa que el 86% de la energía está disponible para la interacción real entre las partículas, mientras que el resto es energía "atrapada" en la traslación global del centro de masas.

En el marco de momento cero, las partículas se aproximan con velocidades idénticas en módulo (2500 m/s) pero opuestas, lo que indica una simetría perfecta que simplifica enormemente el análisis de la colisión elástica. Por tanto, el uso de magnitudes como la masa reducida [[mu]] no es un mero artificio, sino una lectura física de cómo el sistema se ve a sí mismo, independientemente de la velocidad [[vcm]] con la que el laboratorio lo vea pasar. La consistencia entre las siguientes leyes refuerza la validez del modelo clásico aplicado:

{{f:konig_energy}}

{{f:internal_energy_reduced}}

# Ejemplo de aplicación real

## Contexto

En los aceleradores de partículas de vanguardia, como el CERN, la distinción entre energía de laboratorio y energía de centro de masas es crítica. Un diseño eficiente busca que toda la energía de los imanes se convierta en energía interna [[K_cm]] para permitir la creación de nuevas partículas masivas (Bosón de Higgs, etc.).

## Estimación física

Consideremos un experimento de "blanco fijo" frente a uno de "colisionador frontal". En un blanco fijo, una partícula con gran momento lineal choca contra una masa en reposo. Gran parte de la energía del impacto se gasta en "empujar" el sistema hacia adelante para conservar el momento total [[ptot]].

Si realizamos una estimación cuantitativa, observamos que para duplicar la energía interna [[K_cm]] en un blanco fijo, se requeriría aumentar la energía del laboratorio [[K_lab]] de forma no lineal (cuadrática en el límite relativista). En cambio, al usar un colisionador frontal con momentos opuestos, la velocidad [[vcm]] es nula, y cada Joule aportado se convierte directamente en energía de agitación interna. Esta eficiencia es la que permite que colisionadores de unos pocos kilómetros superen en capacidad de descubrimiento a blancos fijos que requerirían el tamaño de un continente.

## Interpretación

El marco del centro de masas es la brújula de la física experimental. Al minimizar [[vcm]], maximizamos la fracción de energía que se vuelve "útil" para la ciencia. La relación establecida por la masa reducida [[mu]] y la velocidad relativa [[v_rel]] nos dice que el universo prefiere la simetría: en el corazón del centro de masas, la física es más pura, los cálculos más simples y la energía más fecunda. Esta lección de economía natural es lo que hace que el marco CM sea indispensable en la ingeniería del siglo XXI.
\r
`;export{e as default};
