const e=`\uFEFF# Principio de Arquímedes\r
\r
## Contexto conceptual\r
El **Principio de Arquímedes** es una de las leyes fundamentales de la estática de fluidos y constituye la piedra angular de la ingeniería náutica y la aerostación. Formulado originalmente por el sabio griego Arquímedes de Siracusa en el siglo III a.C., este principio establece que todo cuerpo sumergido, total o parcialmente, en un fluido en reposo experimenta una fuerza vertical ascendente denominada **empuje** (o fuerza boyante), cuya magnitud es exactamente equivalente al peso del volumen del fluido que el cuerpo ha logrado desalojar para ocupar su lugar. \r
\r
Este concepto es revolucionario porque permite entender que la flotación es una relación de paridad entre la densidad del cuerpo y la del medio.\r
\r
## 🟢 Nivel esencial\r
De forma intuitiva, podemos pensar en el Principio de Arquímedes como la "resistencia" que ofrece un fluido a ser desplazado de su posición original. Cuando sumergimos un objeto en agua, el fluido se ve obligado a apartarse para dejar espacio al cuerpo; sin embargo, debido a la presión interna, el fluido intenta recuperar ese espacio empujando al objeto hacia afuera.\r
\r
- **El Empuje [[E]]**: Es esa fuerza que sentimos como una "ayuda" cuando intentamos levantar a alguien dentro de una piscina. Sentimos que las cosas pesan menos porque el agua está haciendo parte del trabajo por nosotros, empujando siempre hacia arriba, hacia la superficie.\r
- **Volumen desplazado [[V_des]]**: Si llenamos un vaso de agua hasta el borde y dejamos caer una canica, el agua que se derrama es el volumen desalojado. Arquímedes descubrió que el peso de ese chorrito de agua que se cayó es idéntico a la fuerza con la que el vaso empuja a la canica hacia arriba.\r
- **La lucha de fuerzas**: Para saber si algo flota o se hunde, solo debemos mirar quién gana la competición: el peso [[W]] (que tira hacia abajo hacia el centro de la Tierra) o el empuje [[E]] (que tira hacia arriba hacia la libertad de la superficie). Si el empuje es mayor que el peso, el objeto sube; si el peso es mayor, el objeto se va al fondo.\r
\r
Este principio es la razón por la que un pequeño clavo de hierro se hunde sin remedio, mientras que un inmenso transatlántico fabricado con miles de toneladas del mismo hierro logra mantenerse a flote de forma estable. La diferencia radica en que el barco, al ser hueco, desplaza una cantidad de agua cuyo peso supera con creces el propio peso del metal.\r
\r
## 🔵 Nivel formal\r
Desde un punto de vista matemático y operativo, la fuerza de **empuje** [[E]] se cuantifica a través de las propiedades del fluido y la geometría del cuerpo. La ecuación fundamental que define esta magnitud es:\r
\r
{{f:ley_arquimedes}}\r
\r
\r
E = [[rho_f]] cdot g cdot V_{des}\r
\r
\r
Donde intervienen los siguientes parámetros críticos:\r
- **[[E]]**: Magnitud de la fuerza de empuje, medida en Newtons (N). Su dirección es siempre opuesta al vector de la gravedad [[g]].\r
- **[[rho_f]]**: Densidad del fluido (text{kg/m}^3). Es vital recordar que usamos la densidad del líquido o gas que rodea al objeto, no la del objeto mismo.\r
- **[[g]]**: Aceleración de la gravedad (9.81text{ m/s}^2 en la superficie terrestre).\r
- **[[V_des]]**: Volumen de fluido desplazado (text{m}^3). Si el cuerpo está totalmente sumergido, este volumen coincide con el volumen total del objeto. Si está flotando, coincide únicamente con el volumen de la parte que está bajo el nivel del fluido.\r
\r
### El concepto de Peso Aparente\r
Cuando un objeto se sumerge, su peso parece disminuir. Esta sensación se formaliza mediante el **peso aparente** [[W_ap]], que representa la fuerza neta que registraría una báscula o dinamómetro bajo el agua:\r
\r
{{f:peso_aparente}}\r
\r
\r
### Criterio de flotabilidad según densidades\r
En lugar de comparar fuerzas, a menudo es más sencillo comparar la densidad media del cuerpo (rho_c) con la del fluido ([[rho_f]]):\r
1. **Hundimiento**: Si rho_c > [[rho_f]], el cuerpo se hunde porque su peso siempre será mayor que el empuje máximo posible (totalmente sumergido).\r
2. **Flotación**: Si rho_c < [[rho_f]], el cuerpo subirá hasta la superficie y quedará parcialmente sumergido, justo en el punto donde el empuje del volumen desalojado iguale exactamente a su peso real.\r
3. **Equilibrio Neutro**: Si rho_c = [[rho_f]], el cuerpo permanecerá en equilibrio en cualquier posición dentro del fluido, como ocurre con un submarino que ajusta su densidad para "quedarse quieto" a una profundidad determinada.\r
\r
## 🔴 Nivel estructural\r
El Principio de Arquímedes no es una ley arbitraria o aislada de la física, sino una consecuencia necesaria e inevitable de las leyes de la hidrostática, específicamente del **gradiente de presión**. Debido a que la presión en un fluido aumenta linealmente con la profundidad, la cara inferior de cualquier objeto sumergido estará siempre a una profundidad mayor que su cara superior. Esto genera que la fuerza de presión que empuja hacia arriba desde el fondo sea sistemáticamente superior a la fuerza de presión que empuja hacia abajo desde el techo.\r
\r
Al realizar la suma vectorial (integral de superficie) de todas las fuerzas de presión infinitesimales que actúan sobre la superficie del cuerpo, las componentes horizontales se anulan por simetría, pero las verticales dejan una resultante neta hacia arriba. El valor de esta resultante es, por definición geométrica, igual al peso del fluido que ocuparía ese mismo hueco.\r
\r
Desde una perspectiva de diseño, se considera el **Centro de Carena** (punto de aplicación del empuje) y la estabilidad del sistema. En gases, la compresibilidad del aire hace que el empuje disminuya con la altura. Las estructuras huecas permiten que materiales densos como el hormigón floten al aumentar drásticamente el volumen desplazado sin aumentar proporcionalmente la masa.\r
\r
## Interpretación física profunda\r
A nivel abstracto, este principio expresa la búsqueda de la **mínima energía potencial**. El sistema "fluido + objeto" se configura para que el material más denso ocupe la posición más baja. El empuje es la manifestación macroscópica de esta negociación energética entre el cuerpo intruso y el campo de presión del medio. Es un mecanismo de sustentación pasiva que convierte a los fluidos en soportes estructurales dinámicos.\r
\r
## Orden de magnitud\r
Para visualizar la potencia de este principio, consideremos algunos ejemplos de la vida real:\r
- **El cuerpo humano**: Nuestra densidad media es asombrosamente cercana a la del agua dulce (approx 1000text{ kg/m}^3). Por ello, una pequeña variación en el volumen de nuestros pulmones (al inspirar aire) es suficiente para cambiar nuestra densidad y hacernos pasar de hundirnos a flotar plácidamente.\r
- **Icebergs colosales**: Un iceberg está formado por hielo con una densidad de unos 920text{ kg/m}^3, mientras que el agua de mar tiene unos 1025text{ kg/m}^3. El Principio de Arquímedes dicta que el 90% del volumen del iceberg debe estar sumergido para generar el empuje necesario que sostenga el peso de toda la masa de hielo. Lo que vemos sobresalir es apenas la "punta" de una estructura masiva submarina.\r
- **Barcos de carga**: Un portaaviones de clase Nimitz tiene una masa de unas 100,000text{ toneladas}. Para no hundirse, su diseño debe garantizar que el casco desplace exactamente 100,000text{ metros cúbicos} de agua de mar antes de que el agua llegue a la cubierta.\r
- **Globos de helio**: El helio es unas 7 veces menos denso que el aire. Un metro cúbico de aire pesa unos 1.2text{ kg}, mientras que un metro cúbico de helio pesa solo 0.18text{ kg}. La diferencia de 1.02text{ kg} es la carga máxima que ese metro cúbico de helio puede elevar antes de que el peso gane al empuje atmosférico.\r
\r
## Método de resolución personalizado\r
Para resolver cualquier problema de Arquímedes con precisión profesional, sigue esta ruta lógica:\r
1. **Diagrama de Cuerpo Libre (DCL)**: Identifica y dibuja siempre los vectores de fuerza. El peso [[W]] siempre apunta hacia abajo y el empuje [[E]] siempre apunta verticalmente hacia arriba.\r
2. **Cálculo de la masa y el peso**: Determina el peso real del objeto a partir de su masa y la gravedad. Si no conoces la masa, búscala mediante la densidad del cuerpo y su volumen total.\r
3. **Determinación del volumen sumergido**: Este es el paso más crítico. Identifica si el cuerpo está totalmente sumergido o si está flotando parcialmente.\r
4. **Cálculo del Empuje**: Aplica la fórmula de Arquímedes con la densidad del fluido [[rho_f]], la gravedad y el volumen desplazado [[V_des]].\r
5. **Planteamiento del equilibrio de fuerzas**: \r
   - Si el objeto flota en equilibrio, el empuje iguala al peso.\r
   - Si el objeto está atado a un dinamómetro sumergido, la tensión del cable y el empuje equilibran el peso.\r
   - Si el objeto está en el fondo y hay fuerza normal, la normal junto con el empuje equilibran el peso.\r
6. **Verificación dimensional**: Comprueba que todas las unidades sean consistentes (SI) para obtener fuerzas en Newtons.\r
\r
## Casos especiales y ejemplo extendido\r
Un caso fascinante es el del **Efecto de Succión en el Fondo**. Si un objeto pesado descansa sobre el fondo liso de un tanque de modo que no existe ninguna película de fluido entre la cara inferior del objeto y el suelo, el Principio de Arquímedes deja de funcionar. En ausencia de fluido debajo, no hay presión ascendente que genere empuje; al contrario, la presión del agua sobre la cara superior empuja el objeto hacia abajo, "sellándolo" contra el fondo. Este fenómeno explica por qué es tan difícil reflotar barcos hundidos que han quedado enterrados en el lodo del lecho marino: antes de aplicar el empuje, hay que "romper" el sello para permitir que el agua pase por debajo y genere la fuerza boyante.\r
\r
Otro caso especial ocurre en fluidos acelerados. En un ascensor que sube con aceleración a, la gravedad efectiva se convierte en g' = g + a. Curiosamente, tanto el peso del cuerpo como el peso del fluido desplazado aumentan en la misma proporción, por lo que la condición de flotabilidad (rho_c < [[rho_f]]) permanece inalterada, aunque las tensiones internas en el cuerpo y el fluido serán mayores.\r
\r
## Preguntas reales del alumno\r
- **¿Depende el empuje de la profundidad?**: No, mientras el líquido sea incompresible y el objeto esté totalmente sumergido. La diferencia de presión entre las caras superior e inferior permanece constante.\r
- **¿Por qué el hierro se hunde pero los barcos no?**: Por la densidad media. Un barco incluye el aire en su interior, logrando que su densidad total (masa/volumen) sea menor que la del agua.\r
- **¿Hay empuje en el espacio?**: En microgravedad no hay gradiente de presión hidrostática, por lo que el empuje desaparece y los objetos simplemente derivan.\r
\r
## Conexiones transversales y rutas de estudio\r
El Principio de Arquímedes se conecta de forma natural con múltiples disciplinas avanzadas:\r
- **Geofísica e Isostasia**: Explica cómo la corteza terrestre (menos densa) flota sobre el manto superior (más denso). Las montañas tienen "raíces" profundas que se hunden en el manto, de forma análoga a la parte sumergida de un iceberg.\r
- **Oceanografía**: La variación de la densidad [[rho_f]] por cambios de salinidad y temperatura genera corrientes de convección profundas que regulan el clima global, basadas enteramente en diferencias de empuje.\r
- **Fisiología Humana**: El control de la flotabilidad es esencial en el buceo autónomo; los buceadores usan chalecos hidrostáticos para variar su volumen y controlar su ascenso o descenso mediante cambios en el empuje.\r
- **Biología Marina**: Muchos peces poseen una vejiga natatoria, un órgano lleno de gas que pueden inflar o desinflar para ajustar su volumen desalojado y así subir o bajar en la columna de agua sin gastar energía muscular.\r
\r
## Síntesis final\r
El Principio de Arquímedes es la ley de la ligereza en el mundo fluido. Nos enseña que la sustentación es una consecuencia de la geometría y la densidad. Comprender que el empuje es el peso del fluido ausente es la clave para dominar cualquier artefacto que navegue los mares o surque los cielos.\r
\r
`;export{e as default};
