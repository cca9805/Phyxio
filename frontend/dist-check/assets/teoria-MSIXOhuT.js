const e=`\uFEFF# La rueda y el eje\r
\r
La rueda y el eje es una máquina simple que convierte un esfuerzo pequeño aplicado en un radio grande en una resistencia grande desarrollada en un radio pequeño, o viceversa. Ruedas de timón, destornilladores, grifos de manivela, tornos y volantes son todos ejemplos del mismo principio: dos cilindros coaxiales de radios distintos que giran solidariamente, intercambiando fuerza por recorrido de arco.\r
\r
A diferencia de la polea, donde la ventaja mecánica depende del número de tramos de cuerda, aquí la ventaja mecánica es una propiedad estrictamente geométrica: la razón entre el radio de la rueda [[R]] y el radio del eje [[r]].\r
\r
## Contexto conceptual\r
\r
La física de la rueda y el eje es la física del torque. Cuando una fuerza actúa a cierta distancia de un eje de rotación, produce un efecto giratorio proporcional al producto fuerza por distancia. Dos fuerzas en equilibrio sobre la misma máquina deben generar torques iguales y opuestos respecto al eje común. Ese principio de equilibrio de torques es la semilla de todas las fórmulas del leaf.\r
\r
Desde la perspectiva de la energía, la rueda y el eje es un intercambiador puro: lo que ganas en fuerza lo pagas en longitud de arco recorrido. El trabajo de entrada [[FR]]·[[sR]] es siempre mayor o igual que el trabajo útil [[Fr]]·[[sr]], siendo la diferencia la energía disipada por rozamiento. Esta es la Regla de Oro aplicada a la rotación.\r
\r
## 🟢 Nivel esencial\r
\r
La idea central es sencilla: si la rueda es grande y el eje es pequeño, una fuerza aplicada en la rueda puede superar una fuerza mucho mayor en el eje, porque el brazo de la rueda [[R]] es mayor que el brazo del eje [[r]].\r
\r
Imagina un grifo de agua duro. Si empujas directamente sobre el eje metálico, necesitas mucha fuerza. Si colocas una manivela de radio largo, el mismo efecto de giro se consigue con mucha menos fuerza. La manivela es la rueda; el eje del grifo es el eje.\r
\r
La ventaja mecánica ideal [[VM]] resume esa ganancia: es la razón entre el radio de la rueda [[R]] y el radio del eje [[r]]. Si [[R]] mide 30 cm y [[r]] mide 3 cm, la ventaja mecánica es 10: con 50 N en la rueda puedes vencer 500 N en el eje. El precio es que la mano recorre 10 veces más arco que el punto de carga.\r
\r
## 🔵 Nivel formal\r
\r
La ventaja mecánica ideal se expresa formalmente como:\r
\r
{{f:ventaja_mecanica_ideal}}\r
\r
La relación ideal entre esfuerzo y resistencia se resume con:\r
\r
{{f:ley_rueda_ideal}}\r
\r
Y el concepto base de momento de giro se formaliza con:\r
\r
{{f:torque}}\r
\r
Para cuantificar el sistema completo necesitamos relacionar también los desplazamientos. Rueda y eje comparten el mismo ángulo de giro θ, pero los arcos son distintos porque los radios son distintos:\r
\r
{{f:relacion_desplazamientos}}\r
\r
El arco de entrada [[sR]] (R·θ) es siempre mayor que el arco de salida [[sr]] (r·θ) cuando R supera r. Esto es la expresión cinemática de la Regla de Oro: lo que ganas en fuerza lo pagas en recorrido.\r
\r
En la práctica real, la fricción en los cojinetes y en el contacto entre cuerda y eje reduce la eficiencia del sistema. El rendimiento [[eta]] recoge todas esas pérdidas en un único número entre 0 y 1. Con el rendimiento incluido, el esfuerzo real es mayor que el ideal:\r
\r
{{f:ley_rueda_real}}\r
\r
Y la ventaja mecánica real [[VM_real]] es siempre menor que la ideal:\r
\r
{{f:ventaja_mecanica_real}}\r
\r
Un rendimiento del 85% implica que [[VM_real]] vale 0,85 · (R/r). Si la ventaja geométrica es 10 y el rendimiento es 0,85, la ventaja efectiva es solo 8,5; con 100 N en la rueda solo vences 850 N en el eje, no los 1000 N ideales.\r
\r
El balance energético completo integra fuerzas y desplazamientos:\r
\r
{{f:balance_energia_rueda}}\r
\r
El miembro izquierdo [[FR]]·[[sR]] es el trabajo de entrada; el miembro derecho ([[Fr]]·[[sr]])/[[eta]] es el trabajo de salida escalado por el rendimiento. La diferencia (1 − [[eta]]) · [[Fr]] · [[sr]] es calor disipado.\r
\r
## 🔴 Nivel estructural\r
\r
### El torque como concepto unificador\r
\r
Todas las fórmulas anteriores se derivan del equilibrio de torques. El torque [[tau]] de una fuerza con brazo de momento [[r_arm]] es:\r
\r
Para la rueda y el eje en equilibrio estático, el torque de la fuerza de entrada debe igualar el torque de la resistencia. En el modelo ideal, el torque motor [[FR]]·R equilibra el torque resistente [[Fr]]·r; en el modelo real, las pérdidas se introducen como un torque de fricción adicional que rompe esa igualdad exacta.\r
\r
### Condiciones de validez del modelo\r
\r
El modelo de ventaja mecánica con rendimiento constante [[eta]] asume:\r
\r
1. **Rigidez**: rueda y eje no se deforman bajo carga. En ejes de pequeño diámetro sometidos a torques grandes, el eje puede torsionarse, modificando el ángulo relativo entre entrada y salida.\r
2. **Eta constante**: [[eta]] no depende de la velocidad ni de la carga. En la realidad, la fricción disminuye ligeramente al aumentar la velocidad (régimen hidrodinámico) y aumenta bajo cargas extremas.\r
3. **Radio constante**: [[R]] y [[r]] son fijos. En sistemas con cuerda enrollada en capas, el radio efectivo aumenta con el número de capas enrolladas, variando la ventaja mecánica durante la operación.\r
4. **Masa de la máquina despreciable**: la inercia rotacional de la rueda y del eje no se considera. En aplicaciones dinámicas (aceleraciones altas), el momento de inercia añade un torque resistente adicional que no aparece en estas fórmulas.\r
\r
### Límites de operación\r
\r
Si el rendimiento [[eta]] cae por debajo del valor crítico r/R, la ventaja mecánica real [[VM_real]] se vuelve menor que 1. En ese caso el sistema no amplifica la fuerza: el rozamiento supera la ganancia geométrica. Este límite debe comprobarse en sistemas con cojinetes desgastados o mal lubricados.\r
\r
En el extremo opuesto, si se necesita aumentar la ventaja mecánica más allá de lo que permite la relación de radios R/r (por razones de resistencia estructural del eje o de dimensiones de la máquina), se recurren a trenes de engranajes en cascada, equivalentes a conectar en serie varias ruedas y ejes con distintas relaciones.\r
\r
### Análisis dimensional y coherencia\r
\r
La consistencia dimensional es el primer filtro de validez de cualquier resultado:\r
\r
- [[FR]] y [[Fr]] en N; [[R]] y [[r]] en m → [[VM]] y [[VM_real]] son adimensionales.\r
- [[sR]] y [[sr]] en m → arcos, no ángulos en radianes.\r
- [[eta]] puro, entre 0 y 1.\r
\r
Un resultado [[VM]] inferior a 1 con R mayor que r señala invariablemente un error de inversión de la razón de radios en la fórmula. Un resultado [[VM_real]] mayor que [[VM]] indica que [[eta]] se introdujo en el denominador en vez de en el numerador.\r
\r
## Interpretación física profunda\r
\r
La rueda y el eje enseña que la fuerza y el recorrido no son magnitudes independientes: están ligadas por el trabajo. No puedes aumentar la fuerza de salida sin pagar el precio en recorrido de entrada. El rendimiento [[eta]] es el recordatorio de que incluso ese intercambio tiene un coste: parte del trabajo se pierde irremediablemente en forma de calor.\r
\r
La Regla de Oro no es una limitación del diseño sino una consecuencia directa de la conservación de la energía. Ninguna máquina simple —ni la palanca, ni la polea, ni la rueda y el eje— puede generar trabajo de la nada. Solo pueden redistribuir la fuerza y el desplazamiento en la forma más conveniente para el operador.\r
\r
## Orden de magnitud\r
\r
- **Destornillador con mango ancho**: R ≈ 20 mm, r ≈ 3 mm → [[VM]] de aproximadamente 6,7.\r
- **Torno de pozo de agua**: R ≈ 40 cm, r ≈ 3 cm → [[VM]] de aproximadamente 13.\r
- **Volante de válvula industrial**: R ≈ 60 cm, r ≈ 2 cm → [[VM]] de aproximadamente 30.\r
\r
## Método de resolución personalizado\r
\r
Sigue el protocolo I-D-E-V (Identificación, Diagrama, Equilibrio, Validación):\r
\r
1. **Identificación**: localiza [[R]] (brazo de entrada) y [[r]] (brazo de salida); verifica que R > r para ventaja positiva.\r
2. **Diagrama**: dibuja la sección transversal de la máquina con las dos fuerzas tangenciales y sus brazos.\r
3. **Equilibrio**: aplica la ley correspondiente según el modelo:\r
\r
   para el modelo ideal, o bien:\r
\r
   para el modelo real. Calcula [[VM]] o [[VM_real]] según se pida.\r
4. **Validación**: comprueba que el esfuerzo es menor que la resistencia (si R supera r) y que [[sR]] supera [[sr]] en la misma proporción. Si el enunciado da arcos, verifica el balance energético:\r
\r
## Casos especiales y ejemplo extendido\r
\r
Si se diseña un torno para subir agua de un pozo con una carga de 500 N, y se dispone de un operador que puede aplicar cómodamente 60 N, la ventaja mecánica mínima necesaria es [[VM]] de unos 500/60, es decir, 8,3. Si el rendimiento estimado es [[eta]] de 0,85, entonces Se necesita una [[VM]] geométrica de unos 9,8. Eligiendo [[R]] de 49 cm y [[r]] de 5 cm, la [[VM_real]] resulta 0,85 × 9,8 ≈ 8,3, suficiente para el diseño. El arco que recorre el operador por vuelta completa es [[sR]] de 2π × 0,49 ≈ 3,08 m; el cubo sube [[sr]] de 2π × 0,05 ≈ 0,31 m por vuelta. Para subir el cubo 10 m el operador debe girar la rueda 32 veces, recorriendo 98 m de arco con 60 N de fuerza.\r
\r
## Preguntas reales del alumno\r
- **¿Por qué no puedo hacer el eje infinitamente pequeño para tener ventaja ilimitada?** Porque el eje debe soportar el torque de salida [[Fr]]·[[r]]. Si [[r]] disminuye, el torque en el material del eje sigue siendo el mismo; la tensión de corte en el eje aumenta inversamente con r³, llevándolo a la rotura.\r
- **¿La rueda y el eje sirve para multiplicar velocidad?** Sí: si se aplica el esfuerzo en el eje y la resistencia en la rueda, los papeles se invierten. Se pierde fuerza pero se gana velocidad de la mano. Eso es lo que hace el pedal de una bicicleta respecto al piñón trasero.\r
- **¿Qué diferencia hay entre la rueda y el eje y un engranaje?** En ambos se transmite torque entre dos elementos de distinto radio. La diferencia es que en la rueda y el eje los dos cilindros son solidarios (giran juntos), mientras que en los engranajes se transmite torque entre dos ejes distintos mediante dientes en contacto.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Palanca**: el mecanismo es análogo; [[R]] y [[r]] hacen el papel de los brazos de la palanca.\r
- **Engranajes**: un tren de engranajes es una cadena de ruedas y ejes donde la relación de transmisión es el producto de las razones de radios individuales.\r
- **Freno diferencial**: combina ruedas de radios próximos para obtener ventajas mecánicas muy altas con pequeñas diferencias geométricas.\r
\r
## Síntesis final\r
\r
La rueda y el eje transforma el giro de un radio grande en el torque de un radio pequeño. La ventaja mecánica [[VM]] es la razón R/r; [[eta]] es la tarjeta de rendimiento del sistema. Juntos determinan qué fuerza real obtiene el usuario por cada Newton que aplica en la rueda.\r
\r
`;export{e as default};
