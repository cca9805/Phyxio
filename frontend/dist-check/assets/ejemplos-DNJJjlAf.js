const e=`# Ejemplo tipo examen

## Enunciado

Una superficie cuadrada plana de lado 20 cm está colocada en un campo eléctrico uniforme de módulo [[E]] igual a 500 V/m. El campo forma un ángulo de 30° con la normal exterior a la superficie.

**(a)** Calcula el flujo eléctrico [[phi_E]] a través de la superficie.

**(b)** ¿Qué ángulo debería formar el campo con la normal para que el flujo fuera la mitad del calculado en el apartado (a)?

**(c)** Si el número de líneas de campo que atraviesa la superficie es de 40 líneas, ¿cuántas líneas atravesarían una superficie paralela del doble de área en la misma zona del campo?

## Datos

- Lado de la superficie: 20 cm, equivalente a 0.20 m
- Módulo del campo: [[E]] equivale a 500 V/m
- Ángulo entre [[E]] y la normal exterior: [[angulo_campo]] equivale a 30°
- Carga puntual responsable del campo uniforme en la zona: [[q_fuente]] de signo positivo que genera las líneas de campo hacia afuera
- Número de líneas en la superficie original: 40 líneas
- Área de la segunda superficie: el doble de la primera

## Definición del sistema

Sistema: superficie plana cuadrada en campo uniforme. La normal exterior se define como el vector perpendicular al plano de la superficie apuntando hacia el exterior. El campo [[E]] es uniforme en toda la región, de modo que su módulo y dirección son constantes sobre la superficie. El flujo [[phi_E]] mide cuántas líneas de campo atraviesan la superficie considerando la orientación relativa.

## Modelo físico

El modelo aplica la relación de proporcionalidad entre [[rho_lineas]] y [[E]], y la definición de flujo eléctrico [[phi_E]] como producto del campo, el área y el coseno del ángulo [[angulo_campo]]. Las magnitudes núcleo del leaf son [[E]], [[phi_E]], [[rho_lineas]] y [[angulo_campo]].

## Justificación del modelo

El modelo de flujo en campo uniforme es válido porque el campo [[E]] tiene el mismo módulo, dirección y sentido en todo el espacio cercano a la superficie. Esto garantiza que el factor coseno es constante sobre toda la superficie y la integral se reduce a un producto simple. El modelo dejaría de valer si el campo variara significativamente de un extremo a otro de la superficie, lo cual ocurre cerca de cargas puntuales donde la escala de variación del campo es comparable a las dimensiones de la superficie.

## Resolución simbólica

**Apartado (a):** El flujo se obtiene aplicando la relación entre [[phi_E]], [[E]], el área y el ángulo [[angulo_campo]]:

{{f:flujo_electrico_superficie}}

El área de la superficie cuadrada es el producto del lado por sí mismo. Con [[angulo_campo]] de 30°, el coseno vale la raíz de 3 dividida entre 2 (aproximadamente 0.866). El flujo resulta proporcional a [[E]] multiplicado por el área y por ese factor coseno.

**Apartado (b):** Para que el flujo sea la mitad del obtenido en el apartado (a), el factor coseno del nuevo ángulo [[angulo_campo]] debe ser la mitad del coseno de 30°. El coseno del nuevo ángulo vale aproximadamente 0.433, que corresponde a un ángulo de aproximadamente 64°.

**Apartado (c):** La relación entre [[rho_lineas]] y [[E]] indica que el número de líneas que atraviesa una superficie es proporcional al área de esa superficie (para la misma densidad de campo). Si el área se duplica y el campo es el mismo, el número de líneas también se duplica.

{{f:densidad_lineas_campo}}

Para conectar la escala del diagrama con la carga que origina las líneas, se usa la relación de Gauss entre [[q_fuente]] y el flujo neto [[phi_E]]:

{{f:carga_fuente_gauss}}

## Sustitución numérica

**Apartado (a):** El área de la superficie cuadrada es 0.20 multiplicado por 0.20, que da 0.04 m². Multiplicando 500 V/m por 0.04 m² da 20 V·m. Multiplicando por cos(30°), que equivale a 0.866, se obtiene un flujo de aproximadamente 17.3 V·m. Por tanto [[phi_E]] ≈ 17.3 V·m.

**Apartado (b):** La mitad de [[phi_E]] del apartado (a) es aproximadamente 8.65 V·m. El coseno del nuevo [[angulo_campo]] debe ser 8.65 dividido entre (500 × 0.04), que da 0.433. El nuevo [[angulo_campo]] es aproximadamente 64°.

**Apartado (c):** Con 40 líneas para un área de 0.04 m², duplicar el área a 0.08 m² en la misma zona de campo da 80 líneas. La densidad [[rho_lineas]] es la misma (mismo campo, misma orientación), pero el número total de líneas es el doble porque la superficie es el doble.

## Validación dimensional

**Apartado (a):** Las unidades de [[E]] son V/m; las del área son m²; el ángulo es adimensional. El producto tiene unidades \`[V/m] · [m²]\` que simplifican a \`[V·m]\`, que es la unidad correcta de [[phi_E]] ✓

**Apartado (c):** El número de líneas es adimensional y proporcional al área multiplicada por [[rho_lineas]] expresada en líneas/m². El cociente sigue siendo adimensional ✓

## Interpretación física

El resultado del apartado (a) indica que [[phi_E]] depende críticamente de la orientación de la superficie respecto al campo. Un ángulo de 30° entre [[E]] y la normal implica que la superficie capta aproximadamente el 87% del flujo máximo posible (el que obtendría si fuera perpendicular al campo). Esto significa que inclinar la superficie tan solo 30° respecto a la posición óptima apenas reduce el flujo recogido.

El apartado (b) muestra que para reducir el flujo a la mitad hay que inclinar la superficie hasta cerca de 64°. Esto indica que [[phi_E]] decrece lentamente para ángulos pequeños (el coseno varía poco cerca del cero) y más rápidamente para ángulos grandes. Esta no linealidad es conceptualmente importante: no basta con "inclinar un poco" la superficie para reducir el flujo a la mitad; hay que inclinarla bastante.

El apartado (c) revela que [[rho_lineas]] es una magnitud local: no cambia al ampliar la superficie porque depende solo del campo en esa zona, no del tamaño de la herramienta de medida. Duplicar el área simplemente duplica el número de líneas recogidas, pero la intensidad del campo [[E]] en esa zona es idéntica. Este resultado confirma que la densidad de líneas es una propiedad del campo en el espacio, no de la superficie elegida.

Para el diagrama de campo, el número de líneas que se asigna a la [[q_fuente]] que crea este campo uniforme es la referencia que fija la escala del diagrama completo: si [[q_fuente]] es mayor, le corresponden más líneas y la densidad [[rho_lineas]] en toda la zona sería mayor proporcionalmente.

# Ejemplo de aplicación real

## Contexto

Un ingeniero de telecomunicaciones diseña el blindaje de un cable coaxial. El dieléctrico entre el conductor interior y la malla exterior tiene dimensiones tales que la superficie cilíndrica intermedia tiene área lateral de 0.15 m². El campo [[E]] en esa zona, perpendicular al eje del cable, tiene módulo de 2 kV/m. El ingeniero quiere estimar el flujo [[phi_E]] a través de esa superficie cilíndrica para verificar que no se supera el límite de ruptura del dieléctrico.

## Estimación física

La superficie cilíndrica es perpendicular al campo radial en todos sus puntos (el campo es radial y la normal exterior a la superficie cilíndrica también es radial), de modo que [[angulo_campo]] es nulo en todos los puntos de la superficie. El flujo es entonces el producto directo de [[E]] por el área, sin reducción por el ángulo. Multiplicando 2000 V/m por 0.15 m² da [[phi_E]] de 300 V·m.

La densidad de líneas [[rho_lineas]] en esa zona es proporcional a [[E]] de 2 kV/m. Si la escala del diagrama asigna una línea por cada 100 V/m, habrá 20 líneas por metro cuadrado atravesando la superficie.

## Interpretación

El valor obtenido de [[phi_E]] de 300 V·m indica que la carga lineal del conductor interior, multiplicada por la constante de proporcionalidad de la ley de Gauss, es consistente con ese flujo. Físicamente significa que [[E]] de 2 kV/m domina la región interior del cable y determina la tensión eléctrica que soporta el dieléctrico. Si [[E]] aumentara (por ejemplo, al aumentar la corriente de señal), el flujo crecería proporcionalmente y la densidad de líneas [[rho_lineas]] también aumentaría, lo que el diagrama mostraría como líneas más apretadas cerca del conductor interior. Este es el mecanismo geométrico que explica por qué los cables coaxiales con dieléctrico delgado tienen menor tolerancia de tensión que los de dieléctrico grueso.
`;export{e as default};
