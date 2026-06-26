const e=`## Modelo ideal

El modelo estándar del ensayo ultrasónico por tiempo de vuelo asume propagación de **ondas planas** en un medio homogéneo, isótropo y sin disipación. En este marco, [[v_us]] es constante en toda la pieza, el haz no se diverge y la reflexión en una interfaz plana obedece exclusivamente a la diferencia de [[Z_ac]] entre los dos medios. La ecuación de posición del defecto y la de [[R_ac]] en incidencia normal son las dos únicas relaciones necesarias para el diagnóstico básico.

Este modelo idealizado ignora la geometría finita del haz, la atenuación del material, la rugosidad de las interfaces y la anisotropía de la microestructura. Su simplificación central es tratar el pulso como una perturbación puntual que se propaga en línea recta a velocidad constante.

## Hipótesis

- **Homogeneidad**: [[v_us]] es uniforme en toda la pieza inspeccionada. Violarla produce un error sistemático en [[d_defecto]]: si [[v_us]] varía un 3 % en alguna zona, la profundidad calculada puede diferir hasta un 3 % de la real.
- **Isotropía**: las propiedades elásticas del material son iguales en todas las direcciones. En composites de fibra de carbono, esta hipótesis falla y [[v_us]] puede variar un 20 % entre la dirección de fibra y la transversal.
- **Incidencia normal**: el haz es perpendicular a la interfaz del defecto. Si el defecto está inclinado respecto al haz, la onda reflejada no regresa al transductor y [[R_ac]] calculado sobreestima la señal recibida.
- **Onda plana**: el haz no se diverge en la zona de inspección. Esta hipótesis es válida en la zona de Fresnel cercana; en la zona de Fraunhofer (campo lejano), la divergencia del haz reduce la amplitud del eco con la distancia.
- **Temperatura constante**: [[v_us]] no varía durante el ensayo. Un cambio de 10 °C en acero produce una variación de [[v_us]] de aproximadamente 5 m/s, equivalente a un error de [[d_defecto]] de 0.1 % por grado Celsius.

## Dominio de validez cuantitativo

El modelo de tiempo de vuelo con [[v_us]] constante es válido cuando la variación local de velocidad en el material es menor de 1 %. Para acero austenítico de grano fino, esto es razonable hasta temperaturas de servicio por debajo de 200 °C. Por encima de 400 °C, la variación de [[v_us]] con la temperatura supera el 2 %, lo que exige recalibración en caliente.

La hipótesis de onda plana es válida para profundidades mayores que la longitud de campo cercano, dada por el cuadrado del radio del transductor dividido entre la longitud de onda. Para un transductor de 10 mm de diámetro a 5 MHz en acero con [[v_us]] de 5900 m/s, la longitud de campo cercano es aproximadamente 20 mm; para profundidades menores de 20 mm, la hipótesis de onda plana no es válida y la amplitud del eco puede ser hasta un 6 dB mayor o menor de lo esperado.

El modelo de incidencia normal aplica mientras el ángulo entre el haz y la normal a la interfaz del defecto es menor de 10°. Para ángulos mayores de 20°, la energía reflejada hacia el transductor disminuye significativamente y el defecto puede no detectarse con confianza.

## Señales de fallo del modelo

- **Eco fantasma**: aparición de picos en el A-scan que no corresponden a posiciones físicamente posibles dentro de la pieza. Indica reflexiones múltiples (el pulso rebota varias veces entre defecto y pared trasera) o ecos de modo convertido (parte de la onda longitudinal se convierte en cizalladura y regresa con tiempo diferente).
- **Eco de defecto ausente a pesar de defecto conocido**: cuando el defecto es pequeño comparado con la longitud de onda o cuando está orientado oblicuamente. Señala que el modelo de incidencia normal ha fallado para esa geometría.
- **Variación de amplitud del eco trasero sin causa geométrica**: en materiales de grano grueso, el ruido de dispersión de grano aumenta con la profundidad y puede enmascarar el eco trasero. Indica que el modelo sin disipación está fallando.
- **[[d_defecto]] calculada mayor que el espesor nominal de la pieza**: señal clara de que el eco interpretado es una reflexión múltiple de la pared trasera y no de un defecto real.

## Modelo extendido o alternativo

El modelo extendido incorpora la **atenuación del material**, modelada mediante un coeficiente de atenuación en decibelios por milímetro que reduce la amplitud del eco con la profundidad. Incluye además la **divergencia del haz** en el campo lejano y permite calcular la corrección de amplitud en función de la distancia. Este modelo extendido es necesario en inspecciones de piezas gruesas donde la amplitud del eco cae por debajo del umbral de detección antes de alcanzar la pared trasera.

Para materiales anisótropos o geometrías complejas (tuberías curvas, piezas de geometría irregular), el modelo extendido requiere la simulación de trayectoria del rayo con [[v_us]] variable según la dirección y la posición. Las técnicas de phased array y TOFD trabajan con múltiples ángulos y requieren este modelo extendido para reconstruir la posición del defecto en 2D o 3D.

Cuando conviene pasar al modelo extendido: si la variación de [[v_us]] en la pieza supera el 1 %, si la frecuencia del transductor es inferior a 1 MHz en materiales de grano grueso, o si la profundidad de inspección supera 100 mm en materiales con atenuación significativa. Cambiar a este modelo cuando la amplitud del eco de calibración cae más de 6 dB respecto al valor inicial sin causa geométrica aparente.

## Comparación operativa

| Criterio | Modelo ideal (onda plana, medio homogéneo) | Modelo extendido (atenuación, anisotropía, phased array) |
|---|---|---|
| Complejidad de cálculo | Baja: una fórmula por parámetro | Alta: simulación numérica o correcciones empíricas |
| Precisión en piezas homogéneas finas | Alta (error menor del 1 % en [[d_defecto]]) | No aporta mejora apreciable |
| Precisión en piezas gruesas o anisótropas | Limitada (errores superiores al 5 %) | Alta, con calibración adecuada |
| Rango de aplicación | Piezas de acero de hasta 50–80 mm y frecuencias superiores a 2 MHz | Cualquier material y geometría con la instrumentación adecuada |
| Coste instrumental | Equipo portátil convencional | Equipo de phased array o TOFD, coste tres a diez veces mayor |

El modelo ideal sigue siendo la referencia de partida en el 80 % de los ensayos industriales de rutina. El modelo extendido se usa cuando el criterio de aceptación del cliente o la norma aplicable exige una mayor resolución o cuando la pieza presenta características que invalidan las hipótesis del modelo ideal.
`;export{e as default};
