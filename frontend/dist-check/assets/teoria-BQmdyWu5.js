const e=`# Dilatacion\r
\r
## Contexto conceptual\r
\r
La dilatación térmica es uno de los fenómenos más universales y de mayor impacto práctico en ingeniería y en la vida cotidiana. Cuando un sólido, un líquido o incluso un gas recibe energía en forma de calor, sus partículas vibran con mayor amplitud alrededor de sus posiciones de equilibrio. Esta mayor agitación molecular se traduce en un incremento promedio de las distancias interatómicas y, macroscópicamente, en un aumento del tamaño del objeto. El fenómeno inverso —la contracción al enfriarse— es igualmente predecible y simétrico.\r
\r
Este leaf se centra en la dilatación de sólidos, donde el fenómeno tiene una descripción cuantitativa especialmente limpia: la variación de una dimensión lineal y la variación del volumen son, en primera aproximación, proporcionales tanto a la dimensión inicial como a la variación de temperatura aplicada. Esta proporcionalidad permite introducir dos coeficientes característicos del material —[[alpha]] y [[beta]]— que encapsulan toda la información termomecánica necesaria para las aplicaciones más frecuentes.\r
\r
La comprensión de la dilatación es prerequisito directo para analizar tensiones térmicas, diseñar juntas de dilatación en puentes o raíles, calibrar instrumentos de medida sometidos a variaciones de temperatura o interpretar el comportamiento de fluidos en recipientes cerrados.\r
\r
## 🟢 Nivel esencial\r
\r
Cuando calientas un metal, **se alarga**. Cuando lo enfrías, **se acorta**. Esta es la idea central de la dilatación térmica lineal: la longitud de un sólido cambia cuando cambia su temperatura.\r
\r
El cambio de longitud no es arbitrario: es **proporcional** a la longitud original del objeto y a cuánto cambia la temperatura. Si tienes una barra dos veces más larga, se dilata el doble. Si la calientas el doble, también se dilata el doble. El factor que gobierna cuánto se dilata cada material es el **coeficiente de dilatación lineal** [[alpha]]: un número característico del material, extremadamente pequeño (del orden de millonésimas de kelvin inverso), que diferencia al aluminio del acero o del vidrio.\r
\r
De la misma manera que una dimensión lineal varía, el volumen completo del sólido también cambia. La variación volumétrica se rige por un coeficiente propio, [[beta]], que para sólidos isótropos es aproximadamente tres veces [[alpha]]. El hecho de que los coeficientes sean tan pequeños explica por qué la dilatación térmica pasa desapercibida en objetos cotidianos, pero se vuelve crítica cuando se trabaja con estructuras de gran tamaño o con tolerancias muy ajustadas.\r
\r
## 🔵 Nivel formal\r
\r
La ley de dilatación lineal establece que la variación de longitud [[DeltaL]] de un sólido es:\r
\r
{{f:dilatacion_lineal}}\r
\r
donde [[alpha]] es el coeficiente de dilatación lineal del material (en K⁻¹), [[L0]] es la longitud inicial a la temperatura de referencia y [[DeltaT]] es la variación de temperatura. La longitud final del sólido es [[L0]] más [[DeltaL]].\r
\r
El coeficiente [[alpha]] depende exclusivamente del material: el acero tiene valores alrededor de 12×10⁻⁶ K⁻¹, el aluminio alrededor de 23×10⁻⁶ K⁻¹ y el invar (una aleación especial de Fe-Ni) apenas 1×10⁻⁶ K⁻¹. Esta propiedad intensiva no cambia si se corta la barra por la mitad: la longitud de referencia [[L0]] cambia, pero [[alpha]] permanece.\r
\r
La extensión tridimensional de esta ley es la dilatación volumétrica:\r
\r
{{f:dilatacion_volumetrica}}\r
\r
donde [[beta]] es el coeficiente de dilatación volumétrica, [[V0]] es el volumen inicial y [[DeltaV]] la variación de volumen. Para sólidos isótropos existe una relación geométrica entre los dos coeficientes:\r
\r
{{f:relacion_beta_alpha}}\r
\r
Esta relación se obtiene al calcular el volumen de un cubo de arista [[L0]] tras la dilatación. El lado final es [[L0]] más [[DeltaL]], por lo que el volumen final es el cubo de esa suma. Al expandir y retener solo los términos de primer orden en [[alpha]]·[[DeltaT]] (que es del orden de 10⁻³ para variaciones de 100 K), se obtiene que la variación de volumen es tres veces [[alpha]] multiplicado por [[V0]] y por [[DeltaT]], confirmando que [[beta]] es aproximadamente tres veces [[alpha]] para sólidos isótropos.\r
\r
Los despejes más útiles de la ley lineal permiten calcular [[alpha]] del material a partir de una medida experimental de [[DeltaL]], o determinar la variación de temperatura [[DeltaT]] necesaria para producir una elongación especificada.\r
\r
## 🔴 Nivel estructural\r
\r
La validez del modelo lineal descansa sobre la hipótesis de que [[alpha]] es constante en el rango de temperatura considerado. En realidad, [[alpha]] depende de la temperatura: para la mayoría de los metales, crece ligeramente con T. A temperaturas muy bajas (próximas al cero absoluto), [[alpha]] tiende a cero según la ley de Debye, lo que implica que el modelo lineal sobreestima la dilatación en ese régimen. A temperaturas muy elevadas (próximas a la fusión), la dependencia de [[alpha]] con T puede ser no despreciable y el modelo lineal subestima la variación real.\r
\r
La condición operativa de validez es que el término [[alpha]]·[[DeltaT]] sea pequeño comparado con la unidad. Para los metales habituales y variaciones de temperatura inferiores a 300 K, este criterio se cumple ampliamente: el mayor error introducido por tratar [[alpha]] como constante es inferior al 2%, perfectamente aceptable para ingeniería.\r
\r
La relación [[beta]] ≈ 3·[[alpha]] exige además que el sólido sea **isótropo**: que sus propiedades mecánicas y térmicas sean iguales en todas las direcciones espaciales. Los metales policristalinos son isótropos a escala macroscópica, pero materiales como la madera, los composites unidireccionales o los cristales con baja simetría tienen coeficientes distintos en cada dirección. En esos casos, cada dirección posee su propio [[alpha]] y el coeficiente volumétrico es la suma de los tres coeficientes lineales (uno por dirección), no necesariamente tres veces el lineal.\r
\r
Otro límite importante del modelo es la presencia de tensiones internas. Si el sólido no puede dilatarse libremente —porque está sujeto, embridado o unido a otro material de [[alpha]] diferente— la dilatación impedida genera **tensiones térmicas**. En esos casos la deformación real [[DeltaL]] puede ser cero o incluso negativa, mientras que la tensión interna crece. Este fenómeno está fuera del alcance de la ley de dilatación libre, pero es conceptualmente inseparable de ella: comprender la dilatación libre es el primer paso imprescindible para analizar las tensiones térmicas en estructuras reales.\r
\r
En el caso de los líquidos, la dilatación volumétrica es dominante y el coeficiente [[beta]] es característico de cada fluido. El agua presenta un comportamiento anómalo entre 0 y 4 °C: [[beta]] es negativo en ese rango, lo que significa que el agua se contrae al calentarse, alcanza su densidad máxima a 4 °C y luego vuelve a dilatarse. Esta anomalía es crítica para la ecología acuática y el diseño de sistemas hidráulicos en climas fríos.\r
\r
## Interpretación física profunda\r
\r
La dilatación lineal [[DeltaL]] tiene signo: positivo cuando el sólido se calienta y se alarga, negativo cuando se enfría y se contrae. Este signo no es una convención arbitraria, sino que refleja el sentido real del proceso térmico. Un cálculo que arroja [[DeltaL]] negativo en un proceso de calentamiento (con [[DeltaT]] positivo) delata un error, casi siempre el orden invertido en la resta de temperaturas.\r
\r
La razón profunda de que [[DeltaL]] sea proporcional a [[L0]] es que la dilatación es un fenómeno **intensivo en términos relativos**: cada par de átomos vecinos se separa la misma fracción de distancia, independientemente de cuántos pares haya en la barra. Por eso la deformación relativa [[DeltaL]] dividida entre [[L0]] es la propiedad fundamental del material (el producto [[alpha]]·[[DeltaT]]), no la elongación absoluta. Dos barras idénticas en material y temperatura pero de diferente longitud tienen el mismo cociente [[DeltaL]]/[[L0]] pero elongaciones absolutas muy distintas.\r
\r
## Orden de magnitud\r
\r
Para el acero estructural con [[alpha]] ≈ 12×10⁻⁶ K⁻¹ y una variación de temperatura de 50 K (amplitud térmica anual típica en Europa central), una barra de 1 metro se dilata aproximadamente 0.6 mm. La misma barra, pero de 100 metros de longitud, se dilataría 60 mm. Un puente colgante de 1000 metros experimenta variaciones de longitud del orden de 600 mm, lo que hace imprescindibles las juntas de dilatación.\r
\r
Estos valores ilustran el contraste de escalas: en un tornillo de 5 cm, la variación térmica estacional es de apenas 3 micrómetros, completamente despreciable. En una tubería industrial de 200 metros, la misma variación de temperatura produce 120 mm de desplazamiento, capaz de romper soldaduras y bridas si no se prevé. La diferencia entre un resultado físicamente absurdo y uno razonable es detectar si [[DeltaL]] es del orden de [[alpha]]·[[L0]]·[[DeltaT]], con [[alpha]] en el rango de 10⁻⁶ a 10⁻⁵ K⁻¹.\r
\r
## Método de resolución personalizado\r
\r
1. **Identificar el régimen**: decidir si se trabaja con dilatación lineal ([[DeltaL]]) o volumétrica ([[DeltaV]]), o con ambas.\r
2. **Recoger los datos**: longitud o volumen iniciales ([[L0]] o [[V0]]), variación de temperatura [[DeltaT]] con signo correcto (T_final menos T_inicial), y coeficiente del material ([[alpha]] o [[beta]]).\r
3. **Seleccionar la fórmula y el despeje correcto**: si se busca [[DeltaL]], aplicar la ley lineal directamente; si se busca [[alpha]], despejar; si se busca [[DeltaT]], despejar.\r
4. **Verificar el signo del resultado**: [[DeltaL]] positivo implica calentamiento; negativo implica enfriamiento. Si el signo no coincide con el proceso físico descrito, revisar [[DeltaT]].\r
5. **Comprobar el orden de magnitud**: el cociente [[DeltaL]]/[[L0]] debe ser del orden de [[alpha]]·[[DeltaT]], típicamente entre 10⁻⁴ y 10⁻². Resultados fuera de este rango indican error de datos.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Dilatación diferencial en bimetales**: si dos materiales con [[alpha]] distintos están unidos, el que más se dilata obliga al conjunto a curvarse. Este principio permite construir termostatos mecánicos y también explica deformaciones no deseadas en piezas compuestas.\r
\r
**Dilatación de liquidos en recipientes**: cuando un líquido con [[beta]] conocido se calienta dentro de un recipiente rígido cuyo material también tiene [[beta]] no nulo, la variación neta de volumen libre es la diferencia entre la dilatación del líquido y la del recipiente. Si el líquido tiene [[beta]] mayor que el material del recipiente, la presión interior aumenta al calentarse, lo que es relevante en calderas y sistemas hidráulicos cerrados.\r
\r
**Caso del agua entre 0 y 4 °C**: el agua presenta un [[beta]] efectivo negativo en ese intervalo. Al calentarse se contrae hasta alcanzar máxima densidad cerca de 4 °C; por encima de esa temperatura vuelve a dilatarse como otros líquidos.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué [[DeltaL]] depende de [[L0]]?**\r
Porque cada tramo de la barra aporta su propia fracción de alargamiento. Una barra más larga contiene más tramos que se dilatan.\r
\r
**¿Por qué [[beta]] es aproximadamente tres veces [[alpha]]?**\r
Porque un sólido isótropo cambia en tres direcciones. Al quedarse solo con el término lineal, las tres contribuciones se suman.\r
\r
**¿Puedo usar grados Celsius?**\r
Sí, si se usa una diferencia [[DeltaT]]. El error aparece al usar una temperatura absoluta como si fuera un intervalo.\r
\r
**¿Qué pasa si el sólido está bloqueado?**\r
La dilatación libre se convierte en tensión térmica. El sólido intenta cambiar de tamaño, pero la restricción mecánica transforma ese cambio impedido en esfuerzo interno.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
La dilatación térmica conecta con [cambios de estado](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/cambios-de-estado), donde el modelo lineal falla durante la transición, y con [calor específico](leaf:física-clasica/termodinámica/calor-y-efectos-térmicos/calor-específico), porque la energía absorbida produce el aumento de temperatura que activa la dilatación.\r
\r
En mecánica de materiales, la dilatación libre es el punto de partida para analizar tensiones térmicas combinando esta ley con la ley de Hooke.\r
\r
La precisión de [[alpha]] determina tolerancias en óptica, turbinas y estructuras. Un error pequeño puede producir holguras insuficientes cuando [[L0]] o [[DeltaT]] son grandes.\r
\r
## Síntesis final\r
\r
La dilatación térmica de sólidos se rige por dos leyes constitutivas lineales que conectan la variación dimensional con la variación de temperatura mediante los coeficientes [[alpha]] y [[beta]], propiedades intensivas del material. La relación geométrica [[beta]] ≈ 3·[[alpha]] para sólidos isótropos une el comportamiento unidimensional con el tridimensional, y el signo de [[DeltaL]] y [[DeltaV]] permite identificar de inmediato si el proceso es de calentamiento o de enfriamiento. El dominio del modelo lineal con sus límites de validez —régimen de pequeñas deformaciones, ausencia de cambio de estado, isotropía y [[alpha]] aproximadamente constante— es la clave para aplicar este leaf con criterio físico real.\r
`;export{e as default};
