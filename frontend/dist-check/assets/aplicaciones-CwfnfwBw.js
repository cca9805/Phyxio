const e=`## 1. sistemas hidráulicos de elevación\r
\r
Variable dominante: [[p]]  \r
Límite de validez: presión casi uniforme y pérdidas despreciables\r
\r
En un elevador hidráulico, una presión generada en un pistón pequeño se transmite a otro pistón mayor. La decisión técnica relevante no es solo aumentar la fuerza [[F]], sino elegir áreas [[A]] que produzcan una fuerza de salida útil sin exigir una presión peligrosa.\r
\r
La hipótesis dominante es que el fluido está confinado y que la presión se transmite de forma prácticamente uniforme. Si aparecen fugas, deformación de conductos o pérdidas viscosas importantes, el modelo ideal deja de ser suficiente.\r
\r
La interpretación física es directa: el diseño convierte una lectura local de presión en fuerza total mediante el área. Una presión moderada puede levantar cargas grandes si el área del pistón de salida es grande.\r
\r
La decisión concreta consiste en escoger el diámetro de los pistones para que la presión de trabajo no supere el límite del circuito. Si se busca más fuerza, no siempre conviene subir [[p]]; a veces basta aumentar [[A]] en el actuador de salida.\r
\r
## 2. neumáticos y contacto con el suelo\r
\r
Variable dominante: [[A]]  \r
Límite de validez: contacto estático aproximado y presión media representativa\r
\r
La presión de un neumático determina cómo se reparte el peso del vehículo sobre la zona de contacto. Si la presión interna es demasiado baja, el área de contacto crece y el neumático se deforma más; si es demasiado alta, el área disminuye y la adherencia puede cambiar.\r
\r
La hipótesis dominante es que se trabaja con una presión media. El contacto real no es perfectamente uniforme, pero la lectura media permite tomar decisiones prácticas sobre seguridad, desgaste y consumo.\r
\r
La decisión concreta es ajustar la presión recomendada por el fabricante, no “poner más presión” sin criterio. El límite aparece cuando el neumático se calienta, se deforma mucho o trabaja fuera de carga nominal.\r
\r
La lectura útil es comparar presión, huella y carga. Un valor de [[p]] correcto mantiene una zona de contacto estable; un valor incorrecto cambia el reparto de fuerzas y puede alterar frenada, desgaste y estabilidad lateral.\r
\r
## 3. diseño de ventosas y sellos\r
\r
Variable dominante: [[p_man]]  \r
Límite de validez: sellado estable y área efectiva conocida\r
\r
Una ventosa funciona creando una presión interior menor que la atmosférica. La fuerza de sujeción depende de la diferencia de presión y del área efectiva. Por eso una fuga pequeña puede reducir mucho la carga soportada.\r
\r
La hipótesis dominante es que la presión manométrica es casi uniforme dentro de la cavidad. Si la superficie es rugosa o porosa, el aire entra y la diferencia de presión desaparece.\r
\r
La interpretación física evita un error clásico: la ventosa no tira activamente de la pared. La atmósfera exterior empuja porque la presión interior es menor.\r
\r
La decisión concreta es estimar la fuerza disponible con [[F]] = [[p]][[A]] usando el módulo de la diferencia de presión. Si el área sellada se reduce por una arruga, la fuerza máxima también disminuye aunque el manómetro marque lo mismo.\r
\r
## 4. recipientes presurizados\r
\r
Variable dominante: [[p_abs]]  \r
Límite de validez: presión interna medida respecto a referencia correcta\r
\r
En botellas de gas, calderas o depósitos, la presión absoluta y la manométrica no son intercambiables. Para evaluar seguridad estructural suele importar la diferencia con el exterior, pero para modelos termodinámicos importa la presión absoluta.\r
\r
La hipótesis dominante es que el sensor y el cálculo usan la misma referencia. Si se introduce [[p_man]] donde una ecuación requiere [[p_abs]], la predicción puede ser incorrecta.\r
\r
La decisión concreta es etiquetar siempre los datos: presión absoluta, presión manométrica o diferencia de presión. Esa etiqueta vale tanto como el número.\r
\r
En inspección técnica, esta diferencia evita sobredimensionar o infradimensionar válvulas y paredes. El cálculo estructural suele mirar diferencias de presión, mientras que el cálculo termodinámico exige [[p_abs]].\r
\r
## 5. presión bajo el agua\r
\r
Variable dominante: profundidad  \r
Límite de validez: fluido en reposo y densidad aproximadamente constante\r
\r
En buceo, piscinas y depósitos, la presión aumenta con la profundidad vertical. La variable decisiva no es el recorrido seguido por el buceador, sino la distancia vertical bajo la superficie.\r
\r
La hipótesis dominante es que el agua está en reposo y que densidad no cambia de forma apreciable. En aguas profundas, fluidos estratificados o sistemas acelerados, esta aproximación requiere correcciones.\r
\r
La interpretación física permite anticipar riesgos: unos pocos metros de profundidad ya añaden una presión manométrica apreciable sobre oídos, máscaras y paredes del recipiente.\r
\r
La decisión concreta es usar profundidad vertical, no longitud recorrida. En una rampa sumergida, dos puntos a la misma profundidad tienen la misma presión hidrostática aunque estén separados horizontalmente.\r
\r
## Cierre operativo de aplicaciones\r
\r
En todas las aplicaciones anteriores, la decisión técnica depende de no confundir la magnitud local [[p]] con la fuerza total [[F]]. Esta separación permite saber si conviene modificar la presión de trabajo, aumentar el área [[A]], cambiar la referencia de medida o revisar si la presión procede de una columna de fluido.\r
\r
También aparece un patrón común: antes de sustituir números hay que declarar el modelo. En un pistón pequeño puede bastar una presión uniforme; en una pared profunda hace falta considerar profundidad; en un recipiente presurizado hay que separar [[p_abs]] y [[p_man]]. La misma palabra presión aparece en todos los casos, pero la lectura física cambia con el sistema.`;export{e as default};
