# Ejemplo tipo examen


## Enunciado

Una cuerda de violín tiene una densidad lineal de masa de 0.5 g/m y está sometida a una tensión que produce una velocidad de propagación de 400 m/s. La cuerda vibra en su modo fundamental con una frecuencia de 440 Hz (nota La) y una [[amplitud]] de 3 mm. Se pide calcular: (a) la densidad de energía en la cuerda, (b) el flujo de energía, y (c) la potencia total transportada si la cuerda tiene 0.33 m de longitud y se considera perpendicular al flujo toda su extensión.

## Datos

- Densidad lineal de masa: 0.5 g/m equivalente a 5×10⁻⁴ kg/m
- Velocidad de propagación: 400 m/s
- Frecuencia: 440 Hz
- [[amplitud]]: 3 mm equivalente a 3×10⁻³ m
- Longitud de la cuerda: 0.33 m

## Definición del sistema

El sistema es una cuerda unidimensional vibrante que transporta energía mecánica desde el punto de excitación (puente del violín) hacia los extremos fijos (clavijero y cordal). La onda se considera armónica y progresiva antes de las reflexiones en los extremos.

## Modelo físico

Se aplica el modelo de onda transversal en cuerda ideal bajo las siguientes condiciones:

- Pequeñas oscilaciones (3 mm << longitud de onda)
- Cuerda uniforme con densidad [[mu]] constante
- Tensión constante a lo largo de la cuerda
- Ausencia de disipación por rozamiento con aire

El flujo de energía se describe mediante la relación constitutiva del modelo de cuerda, derivada de la densidad de energía multiplicada por la velocidad de propagación.

## Justificación del modelo

El modelo de cuerda ideal es aplicable porque la [[amplitud]] (3 mm) es mucho menor que [[lambda]] esperada (aproximadamente 0.9 m para 440 Hz), garantizando el régimen lineal. La cuerda de acero tiene comportamiento elástico uniforme en el rango de tensiones típicas del violín.

El modelo dejaría de ser válido si: (1) la [[amplitud]] superara unos 20 mm, entrando en régimen no lineal con deformaciones importantes; (2) la tensión variara significativamente a lo largo de la cuerda (efectos de cuerda con masa comparable a la tensión); o (3) se consideraran tiempos muy largos donde la disipación acústica en el aire se vuelve dominante.

## Resolución simbólica

Para la densidad de energía en una onda de cuerda:

{{f:flujo_energia_cuerda}}

Aunque esta fórmula da directamente el flujo, podemos obtener la densidad de energía usando la relación fundamental:

{{f:flujo_energia_densidad}}

De esta relación, la densidad de energía se obtiene dividiendo el flujo entre la velocidad de propagación; para la cuerda ideal equivale al factor energético medio del modelo de cuerda sin el factor [[velocidad_de_propagacion]].

Para la potencia total transportada aplicamos:

{{f:potencia_desde_flujo}}

Donde [[area_perpendicular_de_seccion]] en una cuerda unidimensional se interpreta como la longitud efectiva que intercepta el flujo. En este contexto, la potencia total a lo largo de la cuerda se calcula considerando que el flujo se distribuye sobre esa extensión.

## Sustitución numérica

Primero convertimos la frecuencia a frecuencia angular:

La frecuencia ordinaria se convierte a frecuencia angular multiplicando por el factor de ciclo completo. En este caso, [[omega]] ≈ 2764.6 rad/s.

Para la densidad de energía (componente clave del flujo):

Operación: (1/2) × (5×10⁻⁴ kg/m) × (2764.6 rad/s)² × (3×10⁻³ m)²

Desglose: (0.5) × (5×10⁻⁴) × (7.64×10⁶) × (9×10⁻⁶) = 1.72×10⁻² J/m

Por tanto [[u_energia]] ≈ 0.017 J/m (energía por metro de cuerda)

Para el flujo de energía:

{{f:flujo_energia_cuerda}}

Operación: (1/2) × (5×10⁻⁴) × (2764.6)² × (3×10⁻³)² × 400

Desglose: resultado anterior (1.72×10⁻²) × 400 = 6.88 W/m

Por tanto [[densidad_de_flujo_de_energia]] ≈ 6.9 W/m

Para la potencia total considerando la longitud de la cuerda (0.33 m):

{{f:potencia_desde_flujo}}

Interpretación: el flujo de 6.9 W/m actúa a lo largo de los 0.33 m de cuerda vibrante

Operación: multiplicar el flujo obtenido por la longitud efectiva de 0.33 m da una potencia de 2.27 W.

Por tanto [[potencia_de_la_onda]] ≈ 2.3 W

## Validación dimensional

- Unidades de densidad de energía: `kg/m × (rad/s)² × m² = J/m`.
- Unidades de flujo: densidad lineal de energía multiplicada por velocidad, con resultado en potencia por longitud.
- Unidades de potencia: flujo lineal multiplicado por longitud efectiva, con resultado en watts.

Desglose dimensional para el flujo:

- [[mu]]: `[M L⁻¹]`
- [[omega]] al cuadrado: `[T⁻²]`
- [[amplitud]] al cuadrado: `[L²]`
- [[velocidad_de_propagacion]]: `[L T⁻¹]`

Producto dimensional: `[M L⁻¹] · [T⁻²] · [L²] · [L T⁻¹] = [M L² T⁻³]`, que corresponde a potencia por longitud en este modelo de cuerda.

## Interpretación física

El resultado muestra que una cuerda de violín típica transporta aproximadamente **2.3 watts de potencia mecánica** en su vibración fundamental. Este valor, aunque modesto comparado con sistemas eléctricos, representa una intensidad considerable para vibraciones mecánicas acústicas.

La densidad de energía de 0.017 J/m indica que cada metro de cuerda almacena energía suficiente para levantar un gramo unos 17 centímetros contra la gravedad. El flujo de 6.9 W/m significa que esta energía se transporta a ritmo sostenido a lo largo de la cuerda.

Si la [[amplitud]] se redujera a la mitad (1.5 mm), la potencia caería a un cuarto (aproximadamente 0.6 W) debido a la dependencia cuadrática con la [[amplitud]]. Esto explica por qué los violinistas pueden controlar dinámicamente el volumen del instrumento con sutiles variaciones de presión en el arco: pequeños cambios de [[amplitud]] producen grandes cambios de potencia acústica emitida.

La prioridad técnica en diseño de instrumentos debe centrarse en maximizar la transferencia de esta potencia mecánica al aire como son audible, minimizando las pérdidas en los soportes fijos de la cuerda.

---

# Ejemplo de aplicación real


## Contexto

Los sistemas de **ultrasonido médico de alta intensidad (HIFU)** utilizan ondas mecánicas de alta frecuencia concentradas para calentar tejidos biológicos con fines terapéuticos. El flujo de energía controlado permite destruir tejido tumoral sin cirugía invasiva, calentando selectivamente regiones de pocos milímetros hasta temperaturas letales (más de 56°C) mientras los tejidos circundantes permanecen fríos.

## Estimación física

Un transductor HIFU típico emite ondas de ultrasonido con frecuencia de 1 MHz (ω = 2π×10⁶ rad/s ≈ 6.3×10⁶ rad/s) en un haz focalizado. La intensidad (flujo de energía) en el foco alcanza valores de 10³ a 10⁴ W/cm² (equivalente a 10⁷ a 10⁸ W/m²).

Considerando una [[amplitud]] de presión de 0.1 MPa en el tejido (módulo de volumen del agua biológica K ≈ 2.2 GPa), la [[amplitud]] de desplazamiento molecular es aproximadamente:

La [[amplitud]] molecular se estima comparando la [[amplitud]] de presión con el módulo volumétrico y el número de onda. Con una longitud de onda cercana a 1.5 mm, el desplazamiento resultante queda en escala microscópica.

Operación: desplazamiento de moléculas del orden de 10⁻⁸ m, velocidades de oscilación de 0.06 m/s

La densidad de energía en el foco resulta de aproximadamente 3.3×10⁴ J/m³, y con la velocidad del sonido en tejido blando (1500 m/s), el flujo coincide con los valores clínicos esperados.

## Interpretación

El flujo de energía de 10⁷ W/m² transportado por el ultrasonido representa una **concentración extrema de potencia** en un punto focal de milímetros. Este flujo deposita energía suficiente para elevar la temperatura del tejido más de 10°C por segundo, logrando la necrosis térmica deseada en tiempos cortos (segundos a minutos).

La clave del éxito terapéutico radica en la **geometría del flujo**: el transductor produce un haz convergente que focaliza el flujo en un punto, creando un "punto caliente" intenso mientras el flujo en los tejidos vecinos permanece bajo. La dirección del flujo, perpendicular a las superficies de onda esféricas convergentes, concentra energía exactamente donde se requiere.

Variable dominante: la [[amplitud]] de presión en el foco, que controla cuadráticamente el flujo de energía depositada.

Límite de validez: si el flujo excede 10⁹ W/m², aparecen efectos de cavitación (formación de burbujas de vapor) que modifican drásticamente la absorción de energía y pueden causar daño mecánico no deseado. El régimen HIFU válido opera por debajo de este umbral, manteniendo calentamiento térmico controlado sin cavitación violenta.