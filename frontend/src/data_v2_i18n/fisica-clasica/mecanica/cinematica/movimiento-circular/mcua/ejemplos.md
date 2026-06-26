# Ejemplo tipo examen: Arranque de un disco duro de alto rendimiento

## Enunciado

Un disco duro mecánico de una estación de trabajo acelera desde el reposo hasta su velocidad [[v]] de operación nominal de $7\,200\;\text{rpm}$ (revoluciones por minuto) en un intervalo de tan solo $1{,}5\;\text{s}$. El plato de datos tiene un radio [[R]] efectivo de 4,75 cm ($0{,}0475\;\text{m}$). 

Como especialista en hardware, debes calcular los siguientes parámetros para validar la resistencia del cabezal de lectura:
1. La **aceleración angular [[alpha]] ** (\(\alpha\)) constante durante el proceso de arranque.
2. El **desplazamiento angular [[delta_theta]] ** (\(\Delta\theta [[theta]] \)) total realizado hasta alcanzar la velocidad nominal, expresado en vueltas.
3. La **rapidez lineal** ($v$) y la **aceleración tangencial [[a_t]] ** ($ [[a_t]] $) de un sector situado en el borde del disco.
4. La **aceleración centrípeta [[a_c]] ** ($ [[a_c]] $) final cuando ya se ha estabilizado la velocidad.

## Datos

- **Velocidad angular [[omega]] inicial [[omega_0]] (\(\omega_0\)):** $0\;\text{rad/s}$ (reposo).
- **Velocidad angular final (\(\omega\)):** $7\,200\;\text{rpm}$.
- **Tiempo [[t]] de arranque ($\Delta t [[delta_t]] $):** $1{,}5\;\text{s}$.
- **Radio del disco ($R$):** $0{,}0475\;\text{m}$.

## Definición del sistema

Consideramos el disco como un sólido rígido donde cada sector circular a una distancia $R$ del eje se comporta como una partícula en MCUA. El punto de interés es el borde exterior (0,0475 m), donde las aceleraciones lineales alcanzan sus valores máximos, sometiendo a las partículas magnéticas al mayor estrés inercial del sistema.

## Modelo físico

Aplicaremos las leyes del **Movimiento Circular Uniformemente Acelerado** (MCUA). El modelo asume que el par motor es constante durante el arranque, lo que resulta en una aceleración angular uniforme. Utilizaremos:
- **Velocidad angular en función del tiempo** la relacion correspondiente.

{{f:mcua_omega_t}}

- **Desplazamiento angular** la relacion correspondiente.

{{f:mcua_dtheta}}

- **Aceleración tangencial** la relacion correspondiente.

{{f:mcua_at}}

- **Aceleración centrípeta** la relacion correspondiente.

{{f:mcua_ac}}

- **Relación sin tiempo entre velocidades** la relacion correspondiente.

{{f:mcua_sin_t}}

- **Velocidad angular media [[omega_med]] ** la relacion correspondiente.

{{f:mcua_delta_t_theta}}


## Justificación del modelo

El MCUA es el modelo estándar para transitorios de arranque en motores eléctricos síncronos, ya que la electrónica de control inyecta una corriente constante para maximizar el par. Se desprecia el rozamiento con el aire dentro de la carcasa sellada al vacío, permitiendo asumir una $\alpha$ perfectamente constante. La rigidez estructural del plato de aluminio permite considerar el radio $R$ como invariable durante la aceleración.

## Resolución simbólica

1. **Velocidad angular final (\(\omega\)):**
 Primero convertimos de rpm a rad/s para obtener la velocidad angular final del leaf:
 ω → n · (2π)/(60)

2. **Aceleración angular (\(\alpha\)):**
 Utilizando la relacion correspondiente, despejamos la aceleración:

{{f:mcua_omega_t}}

 α → (ω - ω_0)/(Δ t)

3. **Desplazamiento angular (\(\Delta\theta\)):**
 Usando la relación de posición la relacion correspondiente o la definición de desplazamiento la relacion correspondiente:

{{f:mcua_theta_t}}

{{f:mcua_dtheta}}

 Δθ → θ - θ_0 [[theta_0]] → ω_0 t + (1)/(2)α t²
 También puede verificarse con la velocidad media la relacion correspondiente.

{{f:mcua_delta_t_theta}}


4. **Componentes lineales en el borde:**
 Aplicamos la relacion correspondiente y la relacion correspondiente:

{{f:mcua_v_omega}}

{{f:mcua_at}}

 v; [[a_t]] 

5. **Aceleración centrípeta final:**
 Usando la relacion correspondiente o la relación sin tiempo la relacion correspondiente:

{{f:mcua_ac}}

{{f:mcua_sin_t}}

 [[a_c]] ; ω² → ω_0² + 2αΔθ

## Sustitución numérica

Los valores se sustituyen ya convertidos al SI: la velocidad angular final es 753,98 rad/s, la aceleración angular es 502,66 rad/s² y el desplazamiento angular acumulado es 565,49 rad. Con radio 0,0475 m, la rapidez lineal del borde es 35,81 m/s, la aceleración tangencial vale 23,88 m/s² y la aceleración centrípeta final alcanza 26993 m/s².

- ω → 7 200 × (2π/60) → 240π ≈ 753,98 rad/s.
- α → 753,98 / 1,5 ≈ 502,66 rad/s².
- Δθ → 0,5 × 502,66 × (1,5)² ≈ 565,49 rad.
- Revoluciones completadas: 565,49 / 2π ≈ 90.
- v.
- [[a_t]] .
- [[a_c]] .

## Validación dimensional

- Aceleración angular: T⁻¹ / T → rad/s². Correcto.
- Rapidez: T⁻¹ · L → m/s. Correcto.
- Desplazamiento: \([\text{T}^{-2}] \cdot [\text{T}^2]\) es adimensional. Correcto.

## Interpretación física

El análisis físico **significa** que nos enfrentamos a la escala extrema de la tecnología moderna. El disco completa 90 revoluciones antes de estabilizarse, lo que **indica** un arranque muy veloz. Debido a la alta velocidad angular, la aceleración centrípeta final de $26\,993\;\text{m/s}^2$ representa cerca de $2\,750$ veces la gravedad terrestre ($g$), lo que **físicamente** nos muestra la inmensa tracción radial requerida.

Por otro lado, la aceleración tangencial de $23{,}88\;\text{m/s}^2$ es comparable a la de un coche de carreras en salida. **Esto implica** que el cabezal de lectura deba esperar a la estabilización para evitar errores de alineación por inercia. La rapidez lineal en un radio tan pequeño justifica por qué estos sistemas se sellan al vacío para evitar turbulencias térmicas.

Además, el hecho de que la aceleración angular sea de $502{,}66\;\text{rad/s}^2$ **depende** de un control de par motor extremadamente preciso. Cualquier fluctuación **disminuye** la fiabilidad del sistema. El MCUA es el lenguaje matemático que **domina** este diseño, garantizando que los datos se escriban solo cuando las fuerzas centrípetas y tangenciales son **coherentes** con el rango de seguridad, **oponiéndose** así a cualquier fallo por vibración excesiva.

# Ejemplo de aplicación real: Frenado de seguridad en una centrífuga industrial

## Contexto

En procesos químicos, se usan centrífugas de gran radio (1,5 m) que giran a $300\;\text{rpm}$. Ante una emergencia, el freno debe detener el sistema en $10$ segundos. Analizaremos si la **aceleración tangencial** requerida es segura para la estructura y cómo evoluciona la **velocidad angular**.

## Estimación física

Estimamos que el frenado será brusco pero no catastrófico. Si el disco va a $300\;\text{rpm}$ (5 vueltas por segundo), tiene una energía cinética considerable. Dado que el radio es de $1{,}5\;\text{m}$, cualquier cambio en el giro se traduce en un movimiento lineal importante en el exterior. Debido a que 10 segundos es un tiempo razonable, la fuerza de frenado debería ser similar a la frenada de un camión pesado, exigiendo que los pernos de anclaje soporten tensiones tangenciales de varios metros por segundo al cuadrado. Esta estimación es consistente con la necesidad de disipar el momento angular de una masa industrial en un tiempo corto.

## Interpretación

Calculamos primero ω_0 → 31,42 rad/s y luego la aceleración angular necesaria: α → -31,42 / 10 → -3,14 rad/s².
Aplicando la aceleración tangencial la relacion correspondiente, obtenemos [[a_t]].

{{f:mcua_at}}

Esta deceleración **significa** que la componente tangencial de la aceleración **se opone** al movimiento para disipar energía. En consecuencia, la aceleración neta **indica** que la carga dentro de la centrífuga tiende a deslizarse hacia adelante.

El diseño industrial **depende** de asegurar una fricción estática interna mayor que el módulo de la aceleración total. **Esto implica** que el valor obtenido para $ [[a_t]] $ debe ser **coherente** con la resistencia de los anclajes. El uso de materiales con alta resistencia estructural **disminuye** el riesgo de rotura, **favoreciendo** una parada segura que **se opone** a la inercia rotacional masiva del equipo industrial en caso de emergencia.
