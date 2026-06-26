const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Un gas ideal de 0.50 mol se encuentra en un recipiente con volumen inicial de 0.020 m³ y presión constante de 1.2×10⁵ Pa. El gas se expande a volumen final 0.050 m³. Calcular el trabajo mecánico realizado, describir la forma de la trayectoria en el diagrama p-V e interpretar físicamente el resultado.\r
\r
Este ejercicio exige no solo el cálculo numérico, sino también una explicación de la forma de la trayectoria y su relación con el trabajo.\r
\r
## Datos\r
- Cantidad de gas: 0.50 mol\r
- Presión constante: 1.2×10⁵ Pa\r
- Volumen inicial: 0.020 m³\r
- Volumen final: 0.050 m³\r
\r
Los datos se presentan como valores físicos directos, sin usar símbolos de variable con asignación.\r
\r
## Definición del sistema\r
Sistema: un gas ideal cerrado dentro de un cilindro con pistón móvil. La presión externa aplicada al pistón se mantiene constante mientras el volumen del gas cambia.\r
\r
El sistema no intercambia masa con el entorno, pero sí puede entregar trabajo mecánico por desplazamiento del pistón. Se asume que el cilindro está bien aislado lateralmente para centrarse en el trabajo p-V.\r
\r
## Modelo físico\r
Se asume la ley del gas ideal y un proceso isobárico. Como la presión permanece constante, la trayectoria en el diagrama p-V es una recta horizontal que une el volumen inicial con el volumen final.\r
\r
El modelo descarta efectos de no idealidad y considera que la temperatura puede variar sin que la presión cambie. También supone que las condiciones de equilibrio local se mantienen durante la expansión.\r
\r
## Justificación del modelo\r
La presión constante justifica el uso de la expresión de trabajo isobárico. Además, la carga externa que aplica el pistón se mantiene estable, lo que hace que el gas experimente un proceso cercano al ideal.\r
\r
El hecho de que la curva del proceso sea horizontal en el diagrama p-V es la prueba visual de que la presión no varía. Esto permite conectar directamente el área bajo la curva con el trabajo [[W]].\r
\r
## Resolución simbólica\r
{{f:gas_ideal}}\r
\r
{{f:trabajo_isobarico}}\r
\r
La constante [[R]] aparece en la ley del gas ideal y forma parte de la resolución simbólica.\r
\r
Con [[P]] constante, el trabajo [[W]] se calcula como la presión multiplicada por [[DeltaV]], la variación de volumen entre los dos estados.\r
\r
## Sustitución numérica\r
El cambio de volumen es 0.030 m³, obtenido como la diferencia entre 0.050 m³ y 0.020 m³. La presión constante es 1.2×10⁵ Pa.\r
\r
Multiplicar 1.2×10⁵ Pa por 0.030 m³ da aproximadamente 3.6×10³ J. Por tanto, [[W]] es positivo y representa energía entregada al entorno.\r
\r
Esa energía es comparable a la energía necesaria para levantar un pequeño peso de un kilogramo unos tres metros, lo que ayuda a dimensionar el resultado.\r
\r
## Validación dimensional\r
La unidad de trabajo es el joule. Un pascal equivale a un newton por metro cuadrado, y al multiplicarlo por un volumen en metros cúbicos se obtiene una unidad de energía. El resultado es coherente con la dimensión de trabajo.\r
\r
La cadena de unidades es: Pa × m³ → N/m² × m³ → N·m, que corresponde a J. Esta comprobación confirma que el cálculo es consistente con las magnitudes definidas.\r
\r
## Interpretación física\r
En el diagrama p-V la trayectoria es una línea horizontal entre 0.020 m³ y 0.050 m³. El área bajo la curva representa el trabajo mecánico realizado por el gas sobre el pistón.\r
\r
El resultado físico muestra que el gas se expande y cede energía al entorno. Si el volumen final fuera menor, el área tendría signo opuesto y el gas absorbería trabajo.\r
\r
Físicamente, la expansión se entiende como el efecto de un desequilibrio entre la presión interna del gas y la carga externa: al aumentar la energía térmica, las colisiones moleculares transmiten mayor impulso sobre el pistón, desplazándolo.\r
\r
Además, si la presión dejara de ser constante, el cálculo del trabajo requeriría integrar la curva completa, lo que cambiaría la interpretación del área. En ese caso, la forma de la curva se vuelve crítica para evaluar el trabajo neto.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Un cilindro con un pistón cargado por una fuerza constante se calienta lentamente. El gas dentro del cilindro se expande mientras la presión aplicada por el pistón se mantiene casi constante.\r
\r
La situación es común en demostraciones de termodinámica donde una masa fija mantiene la presión, y permite observar el trabajo de expansión de forma controlada.\r
\r
## Estimación física\r
Con una presión de 1.2×10⁵ Pa y un cambio de volumen de 0.030 m³, el trabajo mecánico realizado es del orden de 3.6 kJ. Esa energía es la que impulsa el movimiento del pistón y puede medirse con una fuerza y un desplazamiento conocidos.\r
\r
En un contexto real de laboratorio, ese orden de magnitud es suficiente para que el trabajo sea observable sin requerir instrumentos de alta precisión.\r
\r
## Interpretación\r
El gas entrega energía al mover el pistón. El diagrama p-V permite visualizar que el tramo relevante es isobárico y que el área bajo la curva corresponde al trabajo disponible.\r
\r
Este ejemplo real muestra que la forma de la trayectoria en un diagrama p-V es útil para estimar el trabajo sin conocer cada detalle microscópico del gas. También ilustra cómo la misma área puede interpretarse como energía mecánica útil en aplicaciones prácticas.\r
`;export{e as default};
