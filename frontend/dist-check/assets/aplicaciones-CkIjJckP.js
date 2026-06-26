const e=`# Aplicaciones: Rozamiento estatico\r
\r
## 1. Arranque sin patinamiento en un vehiculo\r
\r
Cuando un vehículo comienza a moverse desde el reposo, la rueda necesita ejercer una fuerza tangencial sobre el suelo sin que exista deslizamiento relativo instantáneo en la zona de contacto. La fuerza que acelera al vehículo depende de que el contacto rueda-suelo pueda sostener una demanda [[Ft]] suficientemente grande sin superar el umbral [[fsmax]]. Si el motor exige demasiado par para la adherencia disponible, la rueda patina y el régimen deja de ser estático.\r
\r
Variable dominante: [[Ft]]\r
\r
Límite de validez: el análisis deja de ser puramente estático cuando la rueda entra en patinamiento sostenido o cuando el coeficiente [[mus]] cambia mucho por agua, hielo o grava suelta.\r
\r
Esta aplicación muestra que el rozamiento estático no solo “frena”: también permite transmitir fuerza útil. Sin él, un automóvil no podría arrancar de forma controlada. En diseño automotriz, aumentar la adherencia efectiva del neumático equivale a ampliar el rango de fuerzas tangenciales que pueden transferirse al suelo sin perder tracción.\r
\r
## 2. Sujeción de piezas en una mordaza o pinza\r
\r
En manufactura, una mordaza mantiene una pieza inmóvil mientras una herramienta la corta, perfora o pule. La pieza no debe deslizar aunque aparezcan vibraciones y fuerzas laterales. La seguridad del montaje depende de que el producto entre [[mus]] y [[N]] genere un [[fsmax]] mayor que la demanda tangencial inducida por la operación. Si ese margen es insuficiente, la pieza se mueve, la tolerancia geométrica se pierde y el proceso deja de ser confiable.\r
\r
Variable dominante: [[N]]\r
\r
Límite de validez: la descripción simple falla cuando la pieza se deforma mucho, cuando el contacto cambia de textura por desgaste o cuando aparecen lubricantes que modifican bruscamente [[mus]].\r
\r
La lectura física importante es que aumentar la presión de apriete no es un fin en sí mismo. Se hace para elevar la capacidad del contacto y conservar adherencia frente a perturbaciones. Un diseño inteligente busca el valor de [[N]] suficiente para garantizar inmovilidad sin dañar la pieza ni introducir deformaciones innecesarias.\r
\r
## 3. Estabilidad de una escalera apoyada\r
\r
Una escalera apoyada contra una pared es un ejemplo clásico de equilibrio con varios contactos. En la base aparece una fuerza normal importante y, junto con el coeficiente [[mus]], se determina la capacidad de rozamiento estático que impide que la escalera se abra hacia afuera. El peso de la persona modifica la distribución de cargas y aumenta la demanda tangencial en la base. El problema se resuelve comparando esa demanda con [[fsmax]], no asignando automáticamente el valor máximo desde el inicio.\r
\r
Variable dominante: [[fsmax]]\r
\r
Límite de validez: el modelo simple deja de ser suficiente si la pared también aporta rozamiento apreciable, si la escalera flexa de manera importante o si la carga cambia dinámicamente por saltos o movimientos bruscos.\r
\r
Esta aplicación es valiosa porque conecta el leaf con seguridad cotidiana. Una escalera aparentemente estable puede volverse insegura si la normal en la base disminuye por geometría o si la superficie de apoyo reduce [[mus]]. La diferencia entre un montaje seguro y uno peligroso puede estar en un margen estático pequeño pero decisivo.\r
\r
## 4. Transporte de objetos sobre una mesa inclinable\r
\r
En líneas de producción y clasificación, muchos objetos se depositan sobre bandejas o mesas que cambian ligeramente de ángulo. El objetivo operativo es que los objetos permanezcan adheridos mientras la plataforma reconfigura su posición. El control del sistema consiste, en esencia, en asegurar que la componente tangencial del peso y cualquier perturbación adicional produzcan una [[Ft]] menor que la capacidad [[fsmax]] del contacto.\r
\r
Variable dominante: [[mus]]\r
\r
Límite de validez: la aplicación deja de ser estática si la mesa vibra con amplitud notable, si la superficie acumula polvo o líquido, o si el material del objeto cambia de forma significativa entre lotes.\r
\r
Desde el punto de vista industrial, esta aplicación enseña que el coeficiente [[mus]] es un parámetro de diseño y mantenimiento. No basta con conocer el ángulo geométrico de la mesa; hay que controlar el estado real de la superficie. Pequeñas variaciones en limpieza o textura pueden transformar una instalación robusta en otra propensa a fallos de adherencia.\r
\r
## 5. Agarre en pinzas roboticas y manos artificiales\r
\r
Un robot que toma una pieza debe generar suficiente normal para que el contacto soporte fuerzas tangenciales debidas al peso, a aceleraciones del brazo y a cambios de orientación. El agarre exitoso no se basa solo en apretar fuerte, sino en calcular cuánta capacidad estática requiere cada maniobra. La comparación entre demanda [[Ft]] y umbral [[fsmax]] permite decidir si el objeto puede manipularse sin resbalar y con qué margen de seguridad.\r
\r
Variable dominante: [[fs]]\r
\r
Límite de validez: el modelo debe ampliarse si hay materiales blandos, contactos muy localizados, efectos adhesivos especiales o cambios rápidos de aceleración que modifiquen el reparto real de cargas.\r
\r
Esta aplicación enlaza el leaf con robótica y biomecánica. Una mano artificial eficiente no maximiza la fuerza a ciegas; regula [[N]] para obtener el [[fsmax]] necesario con el menor consumo y el menor riesgo de dañar el objeto. La física del rozamiento estático se convierte así en una herramienta de control y no solo de análisis pasivo.\r
`;export{e as default};
