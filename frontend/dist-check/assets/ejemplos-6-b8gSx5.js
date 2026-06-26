const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de entrenamiento se desliza sobre una superficie horizontal rugosa. En una prueba de laboratorio, el sistema ya se encuentra en deslizamiento durante el intervalo de interés. El objetivo es estimar la magnitud de la fuerza de rozamiento dinámico, confirmar su dirección física respecto de la velocidad relativa y evaluar cómo cambia la desaceleración si se modifica el material de contacto.\r
\r
## Datos\r
\r
- Fuerza normal medida: [[N]] = 180 N.\r
- Coeficiente dinámico inicial: [[mu_k]] = 0.30.\r
- Velocidad relativa inicial de deslizamiento: [[v_rel]] dirigida hacia +x.\r
- Segundo material de prueba: [[mu_k]] = 0.45 con la misma [[N]].\r
\r
## Definición del sistema\r
\r
Se define como sistema el bloque en contacto con la pista. Sobre el bloque actúan su peso, la normal [[N]] y la fuerza de rozamiento dinámico [[fk]]. Como ya existe deslizamiento, la descripción relevante no es de régimen estático sino cinético. La dirección de [[fk]] debe ser opuesta al sentido de [[v_rel]], porque el contacto disipa energía mecánica y se opone al movimiento relativo.\r
\r
## Modelo físico\r
\r
Se adopta el modelo de rozamiento dinámico con coeficiente efectivo constante en el intervalo corto analizado. Se supone que la textura superficial, la temperatura y la velocidad relativa no cambian lo suficiente como para alterar significativamente [[mu_k]]. Se usa una ecuación para magnitud de fuerza y una condición conceptual para dirección de la fuerza en relación con [[v_rel]].\r
\r
## Justificación del modelo\r
\r
El ensayo fue diseñado con carga estable y velocidad moderada para evitar efectos térmicos fuertes, vibraciones severas o transición de régimen. En estas condiciones, el modelo es adecuado para primera estimación y para comparar materiales. Además, el objetivo del ejercicio es entrenar la diferencia entre dos ideas que suelen mezclarse: calcular cuánto vale [[fk]] y decidir hacia dónde apunta [[fk]] en cada instante.\r
\r
## Resolución simbólica\r
\r
Modelo de magnitud del rozamiento dinámico:\r
\r
{{f:fk_modelo}}\r
\r
Condición de dirección del rozamiento respecto al deslizamiento:\r
\r
{{f:direccion_fk}}\r
\r
Lectura física de estas relaciones: el valor de [[fk]] escala con [[N]] y [[mu_k]], mientras que su orientación siempre se define para oponerse al deslizamiento representado por [[v_rel]].\r
\r
## Sustitución numérica\r
\r
1) Material A:\r
\r
Con [[mu_k]] = 0.30 y [[N]] = 180 N, la fuerza de rozamiento dinámico es 54 N.\r
\r
2) Material B:\r
\r
Con [[mu_k]] = 0.45 y la misma normal, la fuerza de rozamiento dinámico es 81 N.\r
\r
3) Comparación:\r
\r
El incremento de [[mu_k]] produce un aumento de 27 N en [[fk]], equivalente a un 50% respecto del caso inicial.\r
\r
4) Dirección:\r
\r
Si [[v_rel]] apunta hacia +x, entonces [[fk]] apunta hacia -x. Si en otro tramo [[v_rel]] invierte su sentido, [[fk]] también invierte su sentido para mantener oposición al movimiento relativo.\r
\r
## Validación dimensional\r
\r
La ecuación de magnitud conserva coherencia dimensional: coeficiente adimensional por fuerza normal en newtons produce fuerza en newtons. La condición de dirección no introduce nuevas unidades, sino una regla de consistencia vectorial entre fuerza y velocidad relativa.\r
\r
También se valida consistencia física: para igual [[N]], mayor [[mu_k]] implica mayor [[fk]]. El resultado respeta la lectura causal esperada del contacto cinético.\r
\r
## Interpretación física\r
\r
El resultado muestra por qué el rozamiento dinámico no debe tratarse como un número aislado. Su valor depende de dos factores controlables en ingeniería: la normal [[N]] y el material codificado en [[mu_k]]. Su dirección, en cambio, no es un dato libre: queda determinada por el sentido de [[v_rel]].\r
\r
Desde la dinámica, un [[fk]] más alto reduce más intensamente la capacidad de aceleración neta a favor del movimiento y acorta la distancia de frenado por deslizamiento. Desde energía, un [[fk]] más alto implica mayor tasa de disipación térmica en la interfaz. Por eso la selección de materiales no puede hacerse solo con criterio de “más fricción es mejor”. Depende del objetivo operativo: estabilidad, control o eficiencia.\r
\r
Este ejemplo conecta directamente con la teoría del leaf porque utiliza el núcleo completo: [[fk]], [[mu_k]], [[N]] y [[v_rel]], junto con las dos fórmulas de referencia. La interpretación final no es un cierre numérico, sino una decisión de modelo sobre cuánto se disipa y cómo se opone el contacto al deslizamiento.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una línea de embalaje, cajas de cartón pasan por una mesa de deslizamiento antes de entrar a un clasificador. El equipo de mantenimiento detecta dos problemas opuestos en semanas distintas: en algunos turnos las cajas llegan demasiado rápido y golpean topes mecánicos; en otros turnos llegan con velocidad baja y generan cuellos de botella. La hipótesis principal es variación del rozamiento dinámico por cambio de proveedor del recubrimiento.\r
\r
## Estimación física\r
\r
Se miden cargas normales típicas por caja y se ensayan dos recubrimientos. El recubrimiento R1 ofrece [[mu_k]] bajo, lo que reduce [[fk]] y permite mayor velocidad de llegada. El recubrimiento R2 ofrece [[mu_k]] más alto, aumentando [[fk]] y desacelerando más el avance. Con la misma [[N]], la diferencia de [[mu_k]] explica de forma directa la diferencia de comportamiento observada en planta.\r
\r
En una corrida representativa, la normal promedio por caja fue cercana a 140 N. Con R1 (coeficiente dinámico alrededor de 0.25), la fuerza de rozamiento típica se ubicó en el orden de 35 N. Con R2 (coeficiente dinámico cercano a 0.40), la fuerza subió al orden de 56 N. Ese salto de aproximadamente 21 N en resistencia tangencial explica por qué la velocidad de llegada al clasificador cayó de forma perceptible al cambiar recubrimiento.\r
\r
La estimación energética también fue coherente: en recorridos largos, el recubrimiento con mayor [[mu_k]] mostró mayor disipación y elevación térmica de contacto al final del turno. En términos operativos, el sistema ganó amortiguamiento frente a impactos, pero perdió margen de productividad cuando la demanda de flujo era alta.\r
\r
El equipo verifica además la dirección de fuerza mediante video de alta velocidad: el vector de rozamiento cambia de orientación cuando cambia el sentido instantáneo de deslizamiento en las maniobras de corrección lateral. Esta observación confirma la regla vectorial del leaf y evita errores de señal en los modelos de control.\r
\r
## Interpretación\r
\r
La decisión final no fue elegir el recubrimiento con menor ni con mayor [[mu_k]] de forma absoluta, sino el que mantiene mejor compromiso entre seguridad mecánica y productividad. Se seleccionó un material intermedio y se añadieron rutinas de limpieza para reducir variaciones de contacto.\r
\r
La lección física es clara: en régimen dinámico, modelar correctamente [[fk]] exige cuantificar magnitud y dirección. Si se ignora la dependencia con [[v_rel]], los algoritmos de control pueden corregir en sentido equivocado. Si se ignora la dependencia con [[mu_k]] y [[N]], la estimación de disipación queda fuera de escala. El uso coordinado de ambas relaciones del leaf permite pasar de una descripción cualitativa del problema a una decisión operativa verificable.\r
`;export{e as default};
