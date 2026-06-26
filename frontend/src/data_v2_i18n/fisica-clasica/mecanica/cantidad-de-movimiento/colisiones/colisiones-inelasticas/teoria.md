# Colisiones inelásticas

## Contexto conceptual

Una colisión inelástica representa el escenario más común en el mundo macroscópico, donde la interacción entre dos cuerpos no es perfectamente reversible. A diferencia del límite ideal elástico, en estos choques parte de la energía cinética del sistema se "pierde" o degrada. Sin embargo, esta energía no desaparece del universo; simplemente deja de alimentar el movimiento de traslación de los cuerpos para transformarse en calor, sonido o deformaciones plásticas permanentes.

El parámetro fundamental que gobierna este proceso es el coeficiente de restitución [[e]]. En una colisión inelástica, los cuerpos conservan su cantidad de movimiento lineal total [[p]], pero la velocidad con la que se alejan tras el impacto es menor que la velocidad con la que se aproximaban. Es un proceso de rebote "amortiguado" o debilitado, situado en el espectro intermedio entre el rebote perfecto y el pegado total.

## 🟢 Nivel esencial

La idea esencial de este leaf es que un choque inelástico es un proceso de intercambio de movimiento con "coste energético". Imagina dos objetos que chocan y rebotan, pero no con la misma energía con la que llegaron. El sistema sigue conservando su inercia global, pero el rebote resultante es menos vigoroso.

Lo que define a la colisión inelástica es que los cuerpos **sí se separan** tras el contacto, pero lo hacen con una velocidad relativa menor. Parte de la energía cinética original se ha utilizado para deformar los materiales o se ha disipado como ruido y calor. Si comparamos la energía inicial con la energía final, notaremos una disminución clara. Esta diferencia es la variación de energía cinética, que en este leaf siempre será un valor negativo.

En este nivel, lo más importante es entender que la inelasticidad es una medida de la "imperfección" del rebote. No llegamos al extremo de que los cuerpos queden pegados (eso sería un choque totalmente inelástico), pero tampoco recuperamos toda la energía (como en el choque elástico).

> [!IMPORTANT]
> En una colisión inelástica hay rebote, pero ese rebote es más débil que el original. El coeficiente de restitución [[e]] es el termómetro que mide cuánta "vida" le queda al rebote después del impacto.

## 🔵 Nivel formal

### El sistema de leyes de balance
El análisis de una colisión inelástica requiere el uso del principio de conservación del momento lineal [[p]], que se mantiene inalterado independientemente de la pérdida de energía:


La segunda restricción viene impuesta por el coeficiente de restitución [[e]], que define la relación entre las velocidades relativas antes y después del choque:

{{f:e_definition}}

### Soluciones para las velocidades finales
Al resolver simultáneamente el balance de momento y la condición de restitución, obtenemos las expresiones para las velocidades finales [[v1f]] y [[v2f]] de las masas [[m1]] y [[m2]]:



Estas ecuaciones son las herramientas operativas fundamentales del leaf. Notarás que si el coeficiente [[e]] fuera igual a 1, recuperaríamos las fórmulas del choque elástico.

### El caso del "Pegado" (Totalmente Inelástico)
Un subcaso de gran interés ocurre cuando el coeficiente de restitución es nulo. En esta situación, los cuerpos no se separan tras el impacto y ambos se mueven con una velocidad común:

{{f:v_perfectly_inelastic}}

### Balance energético y disipación
La energía cinética inicial [[Ki]] y la final [[Kf]] se calculan como la suma de las energías de cada partícula:

{{f:ki_system}}

{{f:kf_system}}

La energía disipada o perdida durante el impacto se cuantifica mediante la variación de energía:

{{f:delta_k}}

Para evaluar la severidad de la pérdida, solemos calcular la fracción de energía que se ha transformado en otras formas no mecánicas:

{{f:energy_loss_fraction}}

{{f:v1f_inelastic}}

{{f:v2f_inelastic}}

{{f:p}}

## 🔴 Nivel estructural

### La Flecha del Tiempo y la Irreversibilidad
Desde un punto de vista estructural, la colisión inelástica introduce la **irreversibilidad** en la mecánica. A diferencia de las colisiones elásticas, si grabáramos este proceso y lo proyectáramos hacia atrás, el video resultante violaría las leyes de la termodinámica. La energía degradada en calor no puede reintegrarse espontáneamente para aumentar la velocidad de rebote de los cuerpos.

### Masa Reducida e Inercia Relativa
En física avanzada, la pérdida de energía en un choque inelástico suele expresarse en función de la **masa reducida** del sistema. Este concepto resume la inercia efectiva del movimiento relativo. La energía disipada es directamente proporcional a la energía cinética medida desde el marco del centro de masas, multiplicada por el factor de pérdida asociado a la restitución.

### Disipación Multicanal
La energía que desaparece del balance cinético ([[DeltaK]]) se distribuye en múltiples canales:
- **Energía Térmica**: Aumento de la agitación molecular en el punto de contacto.
- **Energía Acústica**: Ondas de presión que percibimos como el sonido del impacto.
- **Trabajo de Deformación**: Energía utilizada para reorganizar la estructura cristalina o molecular de los materiales (abolladuras, fracturas).

## Interpretación física profunda

La colisión inelástica es el recordatorio de que la mecánica clásica está inmersa en un universo termodinámico. El parámetro [[e]] no es una constante fundamental de la naturaleza, sino una propiedad empírica que depende de la composición química, la temperatura y la velocidad de los cuerpos. Representa el "ruido" o la fricción interna que acompaña a toda transacción de movimiento en el mundo real.

## Orden de magnitud

Para contextualizar el leaf, observemos valores típicos del coeficiente de restitución:
- **Pelota de Golf**: [[e]] aproximadamente 0.85 (muy eficiente).
- **Pelota de Tenis**: [[e]] aproximadamente 0.75.
- **Choque entre Vehículos**: [[e]] entre 0.1 y 0.3 (gran deformación y disipación).
- **Caída de un objeto de madera sobre suelo duro**: [[e]] aproximadamente 0.5.

## Método de resolución personalizado

1. **Establecer Referencia**: Definir el sentido positivo del eje de movimiento.
2. **Listar Parámetros**: Identificar las masas [[m1]], [[m2]] y las velocidades de entrada [[v1i]], [[v2i]].
3. **Determinar la Restitución**: Identificar el valor de [[e]]. Si el problema dice que "quedan unidos", usa e = 0.
4. **Aplicar Ecuaciones Operativas**: Calcular las velocidades finales usando:



5. **Calcular la Pérdida**: Evaluar la variación de energía [[DeltaK]] y, si es necesario, la fracción de pérdida [[loss_fraction]].

## Casos especiales y ejemplo extendido

### Choque contra pared fija
Si una de las masas es infinita (como una pared), la velocidad final del proyectil se reduce simplemente a su velocidad inicial multiplicada por el coeficiente de restitución y con signo invertido. La energía disipada es máxima en este escenario para un valor dado de [[e]].

### El límite de "Pegado Total"
En este caso, la pérdida de energía cinética es la máxima permitida por la conservación del momento lineal. Es el choque más disipativo posible dentro de un sistema aislado.

## Preguntas reales del alumno

- **¿Se conserva el momento si se pierde energía?** Sí. El momento lineal [[p]] depende de la simetría espacial de las leyes de Newton, mientras que la energía cinética [[K]] depende de la naturaleza interna de las fuerzas de contacto.
- **¿Puede ser e mayor que 1?** Solo si hay una explosión o liberación de energía interna durante el choque (colisión superelástica), pero eso queda fuera del modelo inelástico pasivo.

## Conexiones transversales y rutas de estudio

- **Origen**: [Conservación del Momento](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).
- **Límite Ideal**: [Colisiones Elásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas).
- **Herramienta**: [Coeficiente de Restitución](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion).

## Síntesis final

Las colisiones inelásticas constituyen el puente entre la mecánica pura y la realidad disipativa. Al integrar el coeficiente de restitución [[e]] con la conservación del momento [[p]], este leaf permite predecir no solo el movimiento final de los cuerpos, sino también la cantidad de energía mecánica que se transforma en calor o deformación. En este escenario, la variación de energía [[DeltaK]] es el indicador de la ineficiencia mecánica del impacto.







