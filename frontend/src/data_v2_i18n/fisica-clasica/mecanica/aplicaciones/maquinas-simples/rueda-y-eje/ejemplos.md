# Ejemplo tipo examen

## Enunciado

Una rueda de radio [[R]] de 25 cm está acoplada rígidamente a un eje de radio [[r]] de 2,5 cm. El sistema tiene un rendimiento [[eta]] de 0,80. ¿Qué fuerza [[FR]] debe aplicar el operador en la rueda para vencer una resistencia [[Fr]] de 400 N en el eje? ¿Cuánto arco [[sR]] recorre la mano si el eje avanza [[sr]] de 5 cm?

## Datos

- [[R]] de 0,25 m
- [[r]] de 0,025 m
- [[eta]] de 0,80
- [[Fr]] de 400 N
- [[sr]] de 0,05 m

Todos los datos se consideran constantes durante el proceso, y el régimen de operación se asume cuasiestático para evitar términos inerciales.

## Definición del sistema

Sistema: rueda exterior (radio [[R]]) solidaria con el eje interior (radio [[r]]), ambos con el mismo eje de rotación. El operador aplica [[FR]] tangencialmente en la rueda; la resistencia [[Fr]] actúa tangencialmente en el eje, oponiéndose al giro.

## Modelo físico

En el modelo ideal, el momento de giro aplicado en la rueda equilibra exactamente el momento resistente en el eje:

{{f:torque}}

La ventaja mecánica ideal [[VM]] es la razón de radios:

{{f:ventaja_mecanica_ideal}}

En este caso el sistema tiene pérdidas, por lo que se aplica el modelo real con rendimiento constante. El equilibrio de torques corregido por el factor de pérdidas da:

{{f:ley_rueda_real}}

Para los arcos, la restricción cinemática:

{{f:relacion_desplazamientos}}

## Justificación del modelo

Las condiciones del enunciado corresponden a operación cuasiestática (sin aceleración angular) y a un único valor de rendimiento conocido. La masa de la rueda y el eje no se menciona, por lo que se desprecia la inercia rotacional. El modelo de rendimiento constante [[eta]] es adecuado para una primera estimación en condiciones de carga estacionaria.

## Resolución simbólica

Antes de introducir el rendimiento, conviene identificar el escenario ideal. Si no hubiera pérdidas, el momento de giro aplicado en la rueda equilibraría exactamente el resistente en el eje:

{{f:torque}}

La ventaja mecánica ideal [[VM]] sería:

{{f:ventaja_mecanica_ideal}}

En este caso [[VM]] ideal resulta [[R]] / [[r]] de 0,25 / 0,025 de 10.

Con rendimiento [[eta]] menor que 1, el esfuerzo real es mayor. Despejando [[FR]] de la ley de la rueda real y [[sR]] de la relación de desplazamientos:

{{f:ley_rueda_real}}

{{f:relacion_desplazamientos}}

## Sustitución numérica

[[FR]] resulta 400 × 0,025 dividido entre 0,80 × 0,25 igual a 10 dividido entre 0,20 igual a **50 N**

[[sR]] resulta (0,25 / 0,025) × 0,05 igual a 10 × 0,05 igual a **0,50 m**

La ventaja mecánica real [[VM_real]] resulta [[eta]] × [[R]] / [[r]] igual a 0,80 × 10 igual a **8**

## Validación dimensional

- [[FR]]: [N·m] / ([1]·[m]) = [N] ✓
- [[sR]]: [m]/[m] × [m] = [m] ✓
- [[VM_real]]: adimensional ✓

La consistencia de unidades confirma que no se mezclaron magnitudes incompatibles y que el modelo conserva coherencia física en todo el cálculo.

Comprobación energética: [[FR]]·[[sR]] de 50 × 0,50 de 25 J; [[Fr]]·[[sr]] / [[eta]] de 400 × 0,05 / 0,80 de 25 J ✓

## Interpretación física

La rueda y el eje actúan como un intercambiador de fuerza y desplazamiento: amplificar la fuerza exige reducir el desplazamiento en la misma proporción. Aquí el brazo de la rueda es diez veces mayor que el del eje, por lo que la máquina puede multiplicar la fuerza por ese factor geométrico. El rozamiento reduce esa ventaja: una fracción [[eta]] de la energía de entrada se convierte en calor en los cojinetes, de modo que el esfuerzo aplicado tiene que ser mayor que el valor ideal para vencer la misma resistencia.

Cuando el rendimiento es alto (próximo a 1) la diferencia entre modelo ideal y real es pequeña y el primero basta como estimación. Con [[eta]] bajo (sistema desgastado), la pérdida es dominante y el esfuerzo real puede duplicar el ideal: en esos casos usar el modelo ideal induce errores graves de diseño.

---

# Ejemplo de aplicación real

## Contexto

Un técnico de mantenimiento necesita abrir a mano una válvula de compuerta industrial con volante. La norma de la planta indica que un operador puede aplicar cómodamente [[FR]] de hasta 80 N de forma continuada. La resistencia de la válvula es [[Fr]] de 600 N. El volante tiene un diámetro de 40 cm. El eje del vástago tiene un radio [[r]] de 8 mm. El rendimiento del sistema volante-eje es [[eta]] de 0,75.

## Estimación física

Primero se estima el orden de magnitud: sin rendimiento, la ventaja mecánica ideal [[VM]] sería [[R]] / [[r]]. Para la válvula se necesita [[VM_real]] mínimo de [[Fr]] / [[FR]] de 600 / 80 de 7,5. Esto da el radio mínimo del volante.

Ventaja mecánica real necesaria: [[VM_real]] mínimo de [[Fr]] / [[FR]] de 600 / 80 de 7,5

[[VM_real]] de [[eta]] × [[R]] / [[r]]; despejando [[R]]: R de [[VM_real]] × [[r]] / [[eta]] de 7,5 × 0,008 / 0,75 de **0,080 m de 8 cm**

El volante existente tiene [[R]] de 0,20 m. Su [[VM_real]] real de 0,75 × 0,20 / 0,008 de 18,75: el operador solo necesita aplicar 600 / 18,75 de **32 N**, mucho menos que los 80 N disponibles. El volante está correctamente dimensionado.

## Interpretación

[[VM_real]] de 18,75 significa que el volante reduce el esfuerzo a 1/18,75 de la resistencia. La razón por la que la válvula parece «dura» al abrirla no es la ventaja mecánica insuficiente sino la resistencia estática de la junta de cierre (rozamiento estático > dinámico). Una vez iniciado el giro, la válvula cede con mucha menos fuerza. Este efecto no está capturado por el modelo estático, pero puede estimarse aumentando [[Fr]] un 30–50% para el arranque.

Desde el punto de vista de diseño, el resultado muestra que el volante existente está sobredimensionado para la fuerza disponible. Esto es deliberado en instalaciones industriales: el margen de seguridad permite operar la válvula incluso con el operador más débil del equipo, con guantes de trabajo, en condiciones de corrosión moderada y sin lubricación reciente. La ventaja mecánica [[VM_real]] de 18,75 asegura ese margen con holgura.

