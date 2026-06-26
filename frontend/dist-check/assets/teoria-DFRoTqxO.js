const e=`\uFEFF# Manómetros\r
\r
## Contexto conceptual\r
El **manómetro** es un pilar de la instrumentación en ingeniería de fluidos, fundamental para cuantificar la presión de gases o líquidos en sistemas cerrados. Su refinamiento permitió el desarrollo de la máquina de vapor y el control de procesos industriales complejos. Es un transductor analógico que convierte la presión (magnitud invisible) en una altura de columna (magnitud geométrica observable) mediante las leyes de la hidrostática. A diferencia de los sensores digitales, son "estándares primarios": su precisión depende solo de la longitud y la densidad [[rho]]. Por ello, siguen siendo la referencia absoluta en laboratorios de metrología y en aplicaciones críticas de seguridad industrial donde la fiabilidad mecánica es innegociable.\r
\r
## 🟢 Nivel esencial\r
Podemos imaginar un manómetro como una **balanza de empujes** donde el peso de un líquido equilibra la presión de un gas. El modelo más común es el **manómetro de tubo en U**: un tubo transparente con forma de "U" que contiene un líquido manométrico. Si ambos extremos están abiertos al aire, el líquido queda al mismo nivel porque la presión atmosférica empuja por igual en ambas superficies del fluido. Al conectar un extremo a un tanque con gas a presión y dejar el otro abierto, el gas empujará el líquido hacia abajo en su rama y lo hará subir en la abierta hasta alcanzar un nuevo estado de equilibrio estable.\r
\r
Este movimiento se detiene cuando el peso de la columna desplazada iguala exactamente la fuerza del gas en el punto de contacto. El desnivel vertical [[dh]] entre las superficies es proporcional a la presión: a más empuje del gas, mayor diferencia de altura observaremos en la escala graduada. Usamos agua para presiones bajas y mercurio para presiones altas por su gran densidad, lo que permite mantener el tamaño del instrumento dentro de límites prácticos y manejables. Es una herramienta de diagnóstico visual inmediata que no requiere de baterías ni circuitos electrónicos para funcionar con total precisión.\r
\r
## 🔵 Nivel formal\r
El funcionamiento se basa en la condición de equilibrio estático de un fluido incompresible y homogéneo en un campo gravitatorio constante. Según la ley de Pascal, la presión en cualquier punto de un plano horizontal dentro de un fluido continuo y en reposo absoluto debe ser idéntica. Si trazamos una línea horizontal imaginaria (isobara) que pase por el menisco más bajo, la presión en la rama izquierda del sistema [[p2]] debe equilibrar exactamente a la suma de la presión en la superficie de la rama de referencia [[p1]] más el peso por unidad de área de la columna de líquido excedente.\r
\r
Este balance de fuerzas define la **Ecuación Manométrica Fundamental**, que relaciona la diferencia de presión manométrica con la altura hidrostática:\r
\r
{{f:manometro}}\r
\r
Donde [[dp]] es la diferencia de presión manométrica \\( p_2 - p_1 \\), [[rho]] es la densidad del fluido manométrico, [[g]] es la aceleración de la gravedad y [[dh]] es el desnivel vertical medido. Para obtener la presión absoluta del sistema [[p2]], integramos la presión de referencia externa mediante la relación:\r
\r
{{f:presion_relativa}}\r
\r
El manómetro mide la **presión relativa** respecto a la rama de referencia. Si está abierta a la atmósfera, mide presión manométrica; si está cerrada al vacío, mide presión absoluta (como un barómetro). Esta versatilidad permite calibrar transductores industriales electrónicos modernos, garantizando que los datos sean trazables a constantes físicas fundamentales de la naturaleza.\r
\r
## 🔴 Nivel estructural\r
El diseño de los manómetros varía para optimizar la sensibilidad y el rango de operación según la necesidad industrial específica. En los **manómetros de cubeta**, una rama es un depósito de gran sección donde el nivel apenas desciende, mientras que en el tubo estrecho el ascenso es máximo. Esto permite leer la presión observando una sola columna en una escala vertical fija, simplificando la operación técnica. Los **manómetros de tubo inclinado** se usan para micro-presiones; al inclinar el tubo un ángulo alpha, el fluido recorre una distancia mayor y gana la misma altura vertical por relación trigonométrica.\r
\r
Existen límites físicos críticos en la estructura de estos instrumentos. El diámetro interno debe ser superior a \\( 6\\text{ mm} \\) para que la tensión superficial no introduzca errores sistemáticos de lectura. Según la ley de Jurin, el ascenso capilar falsearía la medida en tubos muy estrechos al alterar el menisco. Asimismo, los **sellos de diafragma** protegen el líquido [[rho]] de fluidos corrosivos o temperaturas extremas que alterarían su densidad intrínseca y, por ende, la precisión de la medida final. El uso de **manómetros diferenciales** permite medir directamente la caída de presión [[dp]] entre dos puntos de un flujo, como filtros o medidores Venturi.\r
\r
## Interpretación física profunda\r
La lectura manométrica es una competencia de energías molecular y gravitatoria. El choque de billones de moléculas del gas (presión) contra la superficie del líquido se equilibra con el peso del exceso de fluido desplazado (energía potencial). En términos de fuerzas, la presión en la rama izquierda ejerce una fuerza neta [[F_L]], equilibrada por la fuerza de la rama derecha [[F_R]], el peso de la columna y la reacción hidrostática del contenedor. Ilustra la **Paradoja Hidrostática**: la presión depende de la profundidad, no de la forma del tubo. Es la representación visual de la fuerza neta del fluido sobre las paredes, traduciendo una propiedad intensiva (presión) en una extensiva (altura) de forma elegante.\r
\r
## Orden de magnitud\r
-   **Agua**: 10 metros de agua equivalen aproximadamente a 1 atm de presión [[dp]] (\\( 101325\\text{ Pa} \\)).\r
-   **Sensibilidad**: Un manómetro de agua es muy sensible: \\( 1\\text{ mm} \\) de desnivel [[dh]] son unos \\( 9.8\\text{ Pa} \\).\r
-   **Mercurio**: Con una densidad [[rho]] \\( 13.6 \\) veces mayor, equilibra 1 atm con solo 760 mm de Hg.\r
-   **Neumáticos**: Un coche usa \\( 200\\text{-}250\\text{ kPa} \\). Medir esto con agua requeriría un tubo de 20 m.\r
\r
## Método de resolución personalizado\r
1.  **Referencia**: Empieza en un extremo de presión conocida (ej. la atmósfera [[p1]]).\r
2.  **Ruta de la Presión**: Avanza por el tubo. Si desciendes una distancia vertical en un fluido de densidad [[rho]], la presión aumenta; si asciendes, la presión disminuye.\r
3.  **Isobaras**: Puedes saltar horizontalmente entre ramas si el fluido es el mismo y continuo, ignorando las curvas del fondo.\r
4.  **Igualación**: Al llegar al otro extremo, iguala la suma a la presión final [[p2]].\r
5.  **Unidades**: Asegúrate de usar metros y \\( \\text{kg/m}^3 \\) para obtener el resultado [[dp]] en Pascales.\r
\r
## Casos especiales y ejemplo extendido\r
El **manómetro de pozo** mide succiones mínimas en laboratorios de combustión. El desnivel [[dh]] es "negativo" respecto al sistema, indicando que la atmósfera gana la competencia de empuje. En la industria, el **manómetro diferencial** en un filtro de aire diagnostica obstrucciones: si [[dp]] supera los \\( 250\\text{ Pa} \\), el filtro está sucio. El manómetro traduce una pérdida de eficiencia invisible en un dato geométrico tangible para el mantenimiento preventivo. El uso de dos líquidos inmiscibles permite medir presiones ínfimas aprovechando la mínima diferencia de densidades para amplificar el movimiento del menisco.\r
\r
## Preguntas reales del alumno\r
-   **¿Influye el ancho del tubo?** No. Según la paradoja hidrostática, el desnivel [[dh]] depende solo de la presión [[dp]] y la densidad [[rho]], no de la sección.\r
-   **¿Y si hay burbujas?** Introducen errores porque el aire tiene una densidad muy baja y rompe el comportamiento esperado de la columna manométrica.\r
-   **¿Por qué no usar alcohol?** Aunque es sensible, se evapora fácil y su densidad cambia al absorber humedad ambiental.\r
-   **¿Funciona en el espacio?** No. Sin gravedad ([[g]]), el líquido no tiene peso y la presión lo expulsaría del tubo sin alcanzar el equilibrio.\r
\r
## Conexiones transversales y rutas de estudio\r
-   **Meteorología**: El barómetro es un manómetro de una rama que mide el peso de la atmósfera.\r
-   **Medicina**: El esfigmomanómetro mide la presión sanguínea en mmHg por herencia manométrica directa.\r
-   **Aeronáutica**: El Tubo de Pitot-estático se integra con manómetros diferenciales para determinar la velocidad de los aviones.\r
\r
## Síntesis final\r
El manómetro traduce lo invisible (presión molecular) en lo visible (altura geométrica) con una elegancia física insuperable. Es la aplicación práctica más directa de la hidrostática, mostrando cómo la gravedad [[g]] y la densidad [[rho]] instrumentan el mundo de los fluidos. Dominar su funcionamiento permite transitar con rigor científico desde el laboratorio hasta las infraestructuras industriales donde el control de la presión garantiza la eficiencia y la seguridad. Es el puente perfecto entre la abstracción teórica y la realidad tangible de la tecnología moderna.\r
\r
`;export{e as default};
