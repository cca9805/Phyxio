const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de madera se encuentra en reposo sobre una mesa horizontal. El coeficiente de rozamiento estático entre ambas superficies es 0.45 y el coeficiente cinético es 0.35. La masa del bloque es 8 kg. Un estudiante aplica un empuje horizontal de 42 N. Determinar si el bloque se pone en movimiento y, en caso afirmativo, calcular la aceleración resultante.\r
\r
## Datos\r
\r
- Masa del bloque: 8 kg\r
- Coeficiente de rozamiento estático: 0.45\r
- Coeficiente de rozamiento cinético: 0.35\r
- Empuje horizontal aplicado: 42 N\r
- Aceleración de la gravedad: 9.8 m/s²\r
\r
## Definición del sistema\r
\r
El sistema es un único bloque apoyado sobre una superficie horizontal. Se elige un eje positivo en la dirección del empuje. Las únicas fuerzas relevantes son el peso, la normal, la fuerza aplicada y el rozamiento. No hay aceleración vertical ni fuerzas con componente normal adicional.\r
\r
## Modelo físico\r
\r
Se aplica el modelo de rozamiento seco de Coulomb sobre superficie horizontal. La [[N]] equilibra el peso porque no hay componente vertical adicional. El análisis de régimen se resuelve comparando [[F_ext]] con [[F_ext_crit]], que depende de [[mu_e]] y [[N]]. Una vez confirmado el régimen, se usa la fórmula de [[a]] correspondiente. Todas las fórmulas del leaf intervienen en la secuencia: primero la normal, luego el umbral, después la fricción y finalmente la aceleración.\r
\r
## Justificación del modelo\r
\r
El modelo horizontal simple es válido porque el empuje es puramente horizontal (no altera [[N]]), la superficie es rígida, la velocidad esperable es moderada y [[mu_c]] se idealiza como constante. El modelo dejaría de valer si el empuje tuviera una componente vertical significativa, si la superficie fuera blanda o si la velocidad alcanzada hiciera depender el coeficiente cinético de la rapidez.\r
\r
## Resolución simbólica\r
\r
Primero se calcula la fuerza normal a partir del equilibrio vertical:\r
\r
{{f:normal_horizontal}}\r
\r
A continuación se determina el umbral estático del sistema:\r
\r
{{f:friccion_estatica_max}}\r
\r
Con ese valor se establece la fuerza externa crítica:\r
\r
{{f:umbral_deslizamiento}}\r
\r
Se compara [[F_ext]] con [[F_ext_crit]]. Si el empuje supera el umbral, el régimen es cinético y la fuerza de rozamiento toma el valor constante dado por:\r
\r
{{f:friccion_cinetica}}\r
\r
La fricción en reposo habría sido simplemente la igualación al empuje:\r
\r
{{f:friccion_estatica_reposo}}\r
\r
Finalmente, la aceleración dinámica se obtiene con:\r
\r
{{f:aceleracion_dinamica}}\r
\r
## Sustitución numérica\r
\r
Paso 1: la normal resulta de multiplicar 8 kg por 9.8 m/s², lo que da 78.4 N. Por tanto [[N]] ≈ 78.4 N.\r
\r
Paso 2: el rozamiento estático máximo es 0.45 por 78.4 N, es decir 35.28 N. Así [[f_emax]] ≈ 35.28 N.\r
\r
Paso 3: la fuerza crítica coincide con [[f_emax]] en este modelo, por lo que [[F_ext_crit]] ≈ 35.28 N.\r
\r
Paso 4: como 42 N supera 35.28 N, el bloque desliza. El rozamiento cinético vale 0.35 por 78.4 N, es decir 27.44 N. Así [[f_r]] ≈ 27.44 N.\r
\r
Paso 5: la aceleración es la diferencia entre 42 N y 27.44 N, dividida entre 8 kg. Eso da 14.56 N divididos entre 8 kg, aproximadamente 1.82 m/s². Por tanto [[a]] ≈ 1.82 m/s².\r
\r
## Validación dimensional\r
\r
- La normal tiene unidades de fuerza: \`[M]·[L T⁻²]\` resulta \`[M L T⁻²]\` ✓\r
- El rozamiento es un coeficiente adimensional \`[1]\` por una fuerza \`[M L T⁻²]\`, lo que da fuerza ✓\r
- La aceleración es diferencia de fuerzas \`[M L T⁻²]\` dividida entre masa \`[M]\`, lo que da \`[L T⁻²]\` ✓\r
\r
## Interpretación física\r
\r
El resultado muestra que el empuje de 42 N supera el umbral estático de 35.28 N con un margen de unos 7 N, lo que significa que el bloque efectivamente arranca. Sin embargo, la aceleración resultante es solo 1.82 m/s², un valor moderado que indica que la mayor parte del empuje se invierte en vencer la fricción cinética (27.44 N de 42 N). Esto implica que en sistemas con rozamiento, el empuje neto disponible para acelerar es siempre mucho menor que el empuje total aplicado.\r
\r
Desde el punto de vista físico, la decisión de régimen es el momento más crítico del problema. El bloque no «sabe» que va a deslizar hasta que [[F_ext]] cruza el umbral; por debajo de él la superficie responde reactivamente y el sistema permanece en equilibrio estático. Esta naturaleza de umbral convierte al problema en una bifurcación: la misma fórmula de [[a]] produce cero o un valor finito según el régimen. Es una estructura que reaparece en muchos fenómenos de la física, desde la descarga eléctrica hasta la ruptura de un material.\r
\r
Si el coeficiente estático fuese mayor —por ejemplo 0.6 en lugar de 0.45— el umbral subiría a unos 47 N y el mismo empuje de 42 N no lograría mover el bloque. Esto ilustra la sensibilidad del resultado al par de materiales en contacto. Si en cambio se duplicase la masa a 16 kg, la normal subiría a 156.8 N y el umbral estático a 70.6 N, muy por encima del empuje: el bloque permanecería en reposo. La masa influye doblemente: eleva el umbral de arranque y, en caso de deslizamiento, reduce la aceleración por mayor inercia. En resumen, [[mu_e]] gobierna si el bloque arranca y [[mu_c]] gobierna cuánto acelera una vez en movimiento; la masa y la gravedad ([[g]]) fijan la escala de fuerzas a través de la normal.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un almacén logístico, un operario debe desplazar cajas de 25 kg sobre un suelo de hormigón pulido. El coeficiente de rozamiento estático entre la base de cartón de la caja y el hormigón es aproximadamente 0.40 y el cinético es 0.30. El operario puede ejercer un empuje horizontal sostenido de hasta 120 N. Se necesita estimar si puede arrancar la caja por sí solo y qué aceleración inicial obtendrá.\r
\r
## Estimación física\r
\r
La normal sobre hormigón horizontal equivale al peso de la caja: 25 kg por 9.8 m/s² da aproximadamente 245 N. El umbral estático es 0.40 por 245 N, es decir 98 N. Como el operario puede empujar hasta 120 N, supera el umbral con margen y la caja arranca. La fricción cinética vale 0.30 por 245 N, unos 73.5 N. El empuje neto es 120 N menos 73.5 N, es decir 46.5 N, y la aceleración inicial resulta de dividir entre 25 kg: aproximadamente 1.86 m/s². Ese valor es razonable para un arranque manual de una caja mediana.\r
\r
Si la caja pesase 40 kg, el umbral subiría a unos 157 N y el operario ya no podría arrancarla solo: necesitaría ayuda o un dispositivo de rodillos que reduzca el coeficiente efectivo. Esta estimación rápida permite al encargado del almacén decidir si asignar un solo operario o un equipo de dos.\r
\r
## Interpretación\r
\r
El cálculo confirma que la decisión de régimen es el paso crítico en la logística de cargas manuales. El dato clave no es la fuerza máxima del operario en sí misma, sino su comparación con el umbral estático del sistema. Una vez superado el umbral, la aceleración depende de la diferencia entre empuje y fricción cinética, dividida entre la masa. En la práctica, un suelo más rugoso o una caja más pesada pueden convertir una operación unipersonal en una imposible, lo que justifica el uso de carretillas o rodillos en almacenes industriales.\r
`;export{e as default};
