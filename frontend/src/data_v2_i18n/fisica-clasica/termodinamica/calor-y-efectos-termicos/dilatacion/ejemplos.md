# Ejemplo tipo examen

## Enunciado

Un raíl de acero ferroviario tiene una longitud de 18 m a una temperatura de referencia de 10 °C. La temperatura máxima que alcanza el raíl en verano es de 55 °C. Sabiendo que el coeficiente de dilatación lineal del acero es 12×10⁻⁶ K⁻¹, calcula la variación de longitud del raíl y determina si es necesario dejar una junta de dilatación entre raíles contiguos sabiendo que la tolerancia de diseño es de 8 mm.

## Datos

- Longitud inicial del raíl: 18 m
- Temperatura de referencia: 10 °C
- Temperatura máxima estival: 55 °C
- Coeficiente de dilatación lineal del acero: 12×10⁻⁶ K⁻¹
- Tolerancia de diseño de la junta: 8 mm

## Definición del sistema

El sistema es un raíl de acero de longitud [[L0]] definida a 10 °C. Se estudia su variación de longitud [[DeltaL]] al aumentar la temperatura en [[DeltaT]] kelvins. Se supone que el raíl es libre de dilatarse longitudinalmente (sin embridamiento en sus extremos), que el acero es isótropo y que [[alpha]] es constante en el rango de temperatura considerado.

## Modelo físico

Se aplica la ley de dilatación lineal de sólidos en régimen isotrópico con coeficiente constante. La magnitud relevante es [[DeltaL]], cuya expresión relaciona [[alpha]] del material, [[L0]] y [[DeltaT]].

## Justificación del modelo

La variación de temperatura es de 45 K, muy inferior al rango donde [[alpha]] del acero varía significativamente (requeriría superar los 500 K). El producto [[alpha]]·[[DeltaT]] es del orden de 5.4×10⁻⁴, mucho menor que 0.01, confirmando que el modelo lineal con deformaciones pequeñas es válido. El raíl no atraviesa ninguna transición de fase en este rango.

## Resolución simbólica

La ley de dilatación lineal da:

{{f:dilatacion_lineal}}

La variación de temperatura se calcula como temperatura final menos temperatura inicial:

[[DeltaT]] es la diferencia entre la temperatura de verano y la temperatura de referencia.

Con este [[DeltaT]], la variación de longitud [[DeltaL]] del raíl es el producto de [[alpha]], [[L0]] y [[DeltaT]].

Para un sólido isótropo, el coeficiente volumétrico se conecta con el coeficiente lineal mediante:

{{f:relacion_beta_alpha}}

Si el mismo acero se analizara como bloque tridimensional, la variación de volumen se obtendría con:

{{f:dilatacion_volumetrica}}

En ese caso [[beta]] sería el parámetro material volumétrico y [[DeltaV]] el cambio observable de volumen.

## Sustitución numérica

La variación de temperatura es 55 °C menos 10 °C, que resulta en 45 K.

Sustituyendo en la ley de dilatación lineal: [[DeltaL]] es igual a 12×10⁻⁶ K⁻¹ multiplicado por 18 m multiplicado por 45 K, lo que da 9.72×10⁻³ m.

Expresado en milímetros: la variación de longitud del raíl es aproximadamente 9.72 mm.

## Validación dimensional

La dimensión de [[alpha]]·[[L0]]·[[DeltaT]] es [K⁻¹]·[m]·[K], que se simplifica a [m]. El resultado 9.72×10⁻³ m es coherente con la unidad esperada para una variación de longitud. La deformación relativa [[DeltaL]]/[[L0]] es 5.4×10⁻⁴, del mismo orden que [[alpha]]·[[DeltaT]], confirmando la consistencia del cálculo.

## Interpretación física

La variación de longitud del raíl es aproximadamente 9.72 mm, superior a la tolerancia de diseño de 8 mm. Esto significa que **sí es necesario dejar una junta de dilatación** de al menos 10 mm entre raíles contiguos para que el acero pueda dilatarse sin generar tensiones compresivas que deformen la vía.

Este resultado ilustra por qué los tramos de raíl ferroviario no se sueldan directamente entre sí sin previsión de movimiento: para una variación estacional de solo 45 K, un raíl estándar de 18 m se alarga casi un centímetro. Si se empotran los extremos, la tensión compresiva generada puede superar el límite elástico del acero y producir el pandeo lateral de la vía, fenómeno conocido como "sun kink" en ingeniería ferroviaria.

El cociente [[DeltaL]]/[[L0]] de 5.4×10⁻⁴ es la deformación relativa: cada metro del raíl se ha alargado 0.54 mm. Este número adimensional, igual a [[alpha]]·[[DeltaT]], es la propiedad fundamental que permite comparar el comportamiento de distintos materiales bajo el mismo estímulo térmico, independientemente del tamaño del objeto.

---

# Ejemplo de aplicación real

## Contexto

En el diseño del puente colgante del estrecho de Oresund (1.6 km de vano central, acero estructural), los ingenieros deben prever las variaciones dimensionales del tablero metálico debidas a los ciclos térmicos estacionales. La temperatura del acero del tablero puede oscilar entre menos 20 °C en invierno y más 45 °C en verano, una variación total de 65 K. La variación de longitud en el vano central determina el diseño de los aparatos de apoyo y de las juntas de expansión en los extremos.

## Estimación física

Para el vano central de 1600 m de acero estructural con [[alpha]] ≈ 12×10⁻⁶ K⁻¹ y [[DeltaT]] de 65 K, la variación total de longitud del tablero se calcula aplicando la ley de dilatación lineal con [[L0]] de 1600 m.

El resultado es 12×10⁻⁶ K⁻¹ multiplicado por 1600 m multiplicado por 65 K, que da aproximadamente 1.25 m. El tablero del puente se alarga y acorta casi un metro y cuarto a lo largo del año dependiendo de la estación.

Para comparar: si el mismo puente fuera de invar (aleación con [[alpha]] ≈ 1×10⁻⁶ K⁻¹), la variación de longitud sería solo 10 cm bajo las mismas condiciones, doce veces menor. Sin embargo, el invar tiene propiedades mecánicas inferiores y un coste muy superior, lo que lo hace inviable para puentes de gran escala.

Los aparatos de apoyo del puente (rodillos y neopreno bajo el tablero) están dimensionados para acomodar desplazamientos horizontales de hasta 1.5 m. Las juntas de expansión en los accesos permiten el movimiento relativo entre el tablero y el viaducto de acceso sin interrumpir la circulación de vehículos.

## Interpretación

La variación de longitud de 1.25 m en el vano central no es un defecto de diseño: es un comportamiento perfectamente predecible y gestionado gracias a la ley de dilatación lineal. El reto de ingeniería no consiste en evitar la dilatación —lo cual sería imposible con materiales reales— sino en diseñar los elementos estructurales para que la dilatación libre ocurra sin acumular tensiones internas destructivas.

El ejemplo muestra además que la deformación relativa [[DeltaL]]/[[L0]] es la misma independientemente del tamaño del puente: para [[alpha]]·[[DeltaT]] de 7.8×10⁻⁴, cualquier pieza de acero del mismo puente —ya sea de 1 m o de 1600 m— experimenta la misma fracción relativa de elongación. La diferencia está en que piezas más largas producen elongaciones absolutas mayores y exigen mayores recorridos en los sistemas de compensación.
