const e=`\uFEFF# Colisiones elásticas\r
\r
## Contexto conceptual\r
\r
Una colisión elástica representa el límite ideal de la mecánica clásica donde la interacción entre dos cuerpos se produce sin ninguna degradación de la energía mecánica. En este escenario, el sistema cerrado formado por los participantes no solo conserva su cantidad de movimiento lineal total, sino que también mantiene íntegra su energía cinética traslacional. Es una "transacción" física perfecta: toda la energía invertida en la deformación elástica temporal durante el contacto es devuelta íntegramente al sistema cuando los cuerpos se separan.\r
\r
En el mundo macroscópico, las colisiones elásticas son una aproximación. Objetos muy rígidos como bolas de acero, de billar o esferas de vidrio se comportan de manera casi elástica, pero siempre existe una mínima fracción de energía que se disipa en forma de ondas sonoras, calor por fricción interna o deformaciones plásticas permanentes. Sin embargo, en el dominio atómico y subatómico, las colisiones elásticas son la norma y no la excepción. Los átomos de un gas noble chocan elásticamente entre sí miles de millones de veces por segundo, lo que permite que la temperatura del gas se mantenga constante sin necesidad de aportes externos de energía. El parámetro que cuantifica esta "perfección" es el coeficiente de restitución [[e]].\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial de este leaf es que un choque elástico es un proceso de redistribución de movimiento puramente conservativo. Imagina dos cuerpos que se aproximan con velocidades iniciales determinadas. Al chocar, intercambian momento lineal [[p]]. Lo que hace especial al choque elástico es que la "moneda de cambio" (la energía cinética) no tiene "comisiones". La energía que entra en el choque es exactamente la misma que sale.\r
\r
Esto significa que si sumamos la energía cinética inicial del sistema, el resultado será idéntico a la energía cinética final. Físicamente, la energía cinética total [[K]] se mantiene constante. Esta es la condición de elasticidad absoluta. En términos prácticos, si observamos una colisión y notamos que los cuerpos se alejan con la misma energía total con la que llegaron, podemos afirmar que estamos ante una colisión perfectamente elástica.\r
\r
Para el alumno, la colisión elástica es el "caso fácil" desde el punto de vista del balance energético. Permite predecir las velocidades de salida simplemente conociendo las masas y las condiciones de entrada. Es el estándar de oro de la eficiencia mecánica. Ninguna colisión real puede superar la transferencia de energía que se produce en una colisión elástica.\r
\r
> [!IMPORTANT]\r
> "Elástica" no significa que los cuerpos sean de goma blanda. Al contrario, los materiales más rígidos suelen producir los choques más elásticos porque devuelven la energía de deformación de forma más eficiente. El coeficiente de restitución para estos choques es siempre la unidad.\r
\r
## 🔵 Nivel formal\r
\r
### El sistema de leyes fundamentales\r
El análisis formal de una colisión elástica en una dimensión (1D) requiere la resolución simultánea de dos leyes de conservación. La primera es la conservación del momento lineal [[p]], que asegura que el centro de masas del sistema mantiene su estado de movimiento constante:\r
\r
\r
La segunda es la conservación de la energía cinética total [[K]]. Definimos primero el estado energético inicial [[Ki]] y el final [[Kf]]:\r
\r
{{f:ki_system}}\r
\r
{{f:kf_system}}\r
\r
La ley de conservación de energía cinética establece entonces que la energía no se degrada:\r
\r
{{f:K}}\r
\r
Para este leaf, la condición de elasticidad se resume en el coeficiente de restitución:\r
\r
{{f:e_definition}}\r
\r
### Solución analítica general\r
Al combinar el balance de momento (ecuación lineal) con el balance de energía (ecuación cuadrática), obtenemos dos soluciones matemáticas para las velocidades finales [[v1f]] y [[v2f]] de las masas [[m1]] y [[m2]]:\r
\r
{{f:v1f}}\r
\r
{{f:v2f}}\r
\r
### La elegancia de las velocidades relativas\r
Un resultado fundamental y mucho más sencillo de aplicar en el laboratorio es la relación de velocidades relativas. Esta ley establece que la velocidad con la que los cuerpos se alejan es igual en magnitud pero opuesta en sentido a la velocidad con la que se acercaban:\r
\r
\r
Esta relación es equivalente a decir que el coeficiente de restitución [[e]] es 1, y permite resolver la mayoría de los problemas de examen sin necesidad de recurrir a términos cuadráticos.\r
\r
### Transferencia de energía cinética\r
Un parámetro de gran interés en ingeniería es la fracción de transferencia de energía [[T_fraction]]. Si el proyectil [[m1]] impacta contra un blanco [[m2]] en reposo, la proporción de energía que el blanco "roba" al proyectil se calcula como:\r
\r
\r
{{f:p}}\r
\r
{{f:rel}}\r
\r
{{f:delta_k}}\r
\r
{{f:energy_transfer}}\r
\r
## 🔴 Nivel estructural\r
\r
### Geometría en el Espacio de Fases\r
Desde una perspectiva geométrica avanzada, las leyes de conservación definen restricciones en el espacio de velocidades. La conservación de momento lineal se visualiza como una línea recta en este plano. La conservación de energía cinética se visualiza como una elipse. La solución del choque es el punto donde la recta y la elipse se cruzan.\r
\r
### Simetría y Reversibilidad Temporal\r
Las colisiones elásticas poseen una propiedad estructural profunda: la **reversibilidad temporal**. Debido a que no hay disipación (la entropía del sistema no aumenta), las ecuaciones son invariantes si invertimos la flecha del tiempo. Si grabáramos una colisión elástica y proyectáramos el video hacia atrás, los movimientos resultantes seguirían cumpliendo perfectamente las leyes de Newton. Esto las diferencia radicalmente de las colisiones inelásticas.\r
\r
### Invariancia Galileana\r
El leaf de colisiones elásticas es consistente bajo cambios de sistema de referencia inercial. Sin embargo, el cálculo se simplifica drásticamente si nos situamos en el **Marco del Centro de Masas**. En este marco, el momento total es nulo por definición, y el choque elástico se reduce a una simple inversión del sentido de las velocidades de cada partícula, manteniendo sus módulos intactos.\r
\r
## Interpretación física profunda\r
\r
La colisión elástica es la manifestación de la perfección mecánica. Representa un universo donde la información y el movimiento se transfieren sin "ruido" ni degradación. En física estadística, este modelo es la base de la Teoría Cinética de los Gases. Si las colisiones moleculares no fueran elásticas, la presión de los neumáticos de un coche disminuiría constantemente simplemente porque el aire dentro se "enfriaría" al perder energía en cada choque.\r
\r
## Orden de magnitud\r
\r
Para contextualizar el leaf, es útil observar los órdenes de magnitud en diferentes escalas:\r
- **Escala Atómica**: Las colisiones entre neutrones y núcleos de hidrógeno en un moderador de reactor nuclear son casi perfectamente elásticas, con energías del orden de 10^-21 Julios.\r
- **Escala de Laboratorio**: Una bola de acero rebotando sobre una placa de granito tiene un [[e]] de aproximadamente 0.95. Las fuerzas de contacto pueden alcanzar los 10000 N en apenas 0.0001 segundos.\r
- **Escala Astronómica**: Las asistencias gravitatorias (gravity assists) de sondas espaciales como la Voyager con planetas como Júpiter se modelan como colisiones elásticas de "largo alcance", permitiendo a la sonda ganar velocidades de decenas de kilómetros por segundo.\r
\r
## Método de resolución personalizado\r
\r
1. **Definir Sentido Positivo**: Establece un eje X y asigna signos coherentes a las velocidades iniciales.\r
2. **Identificar Parámetros**: Listar las masas [[m1]], [[m2]] y las condiciones de velocidad inicial [[v1i]] y [[v2i]].\r
3. **Aplicar Balances Nucleares**: Usar la ley de momento lineal:\r
\r
\r
y la condición de elasticidad:\r
\r
\r
4. **Resolver el Sistema**: Hallar las incógnitas de salida [[v1f]] y [[v2f]].\r
5. **Verificación Energética**: Calcula la energía inicial [[Ki]] y la final [[Kf]] para asegurar que la variación de energía [[DeltaK]] sea nula:\r
\r
\r
6. **Análisis de Eficiencia**: Si el blanco estaba en reposo, utiliza la fórmula de fracción de transferencia:\r
\r
\r
## Casos especiales y ejemplo extendido\r
\r
### La Cuna de Newton\r
El caso de masas iguales es el más espectacular. La transferencia de energía es máxima y se describe por la relación:\r
\r
\r
Esto significa que si el blanco está en reposo, el proyectil se detiene totalmente y el blanco adquiere toda su velocidad.\r
\r
### El Rebote contra una Pared Infinita\r
Si la masa del blanco es infinitamente más grande que la del proyectil, la fórmula de velocidad final se simplifica a la inversión de su velocidad inicial. El proyectil simplemente invierte su dirección de movimiento manteniendo su rapidez intacta.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Por qué se dice que se conserva la energía si los cuerpos cambian de velocidad?** Se conserva la energía *total del sistema*. Lo que pierde un cuerpo lo gana el otro. No hay "fuga" al exterior del sistema cerrado.\r
- **¿Es lo mismo un choque elástico que uno elástico?** "Elástico" se refiere a la conservación de energía cinética traslacional. No debe confundirse con la elasticidad de materiales, aunque están relacionadas.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Fundamento**: Se apoya en el [Principio de Conservación del Momento](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
- **Contraste**: Estudia [Colisiones Inelásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas).\r
- **Herramienta de medida**: [Coeficiente de Restitución](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion).\r
\r
## Síntesis final\r
\r
Las colisiones elásticas constituyen el pilar conservativo de la dinámica de sistemas. Al garantizar que tanto la cantidad de movimiento [[p]] como la energía cinética [[K]] se mantienen constantes, ofrecen un marco de predictibilidad perfecta para la interacción entre cuerpos rígidos o partículas. En este leaf, la eficiencia es del 100%, la reversibilidad es total y la variación de energía [[DeltaK]] es el testigo mudo de un proceso sin pérdidas donde la física se muestra en su estado más puro y simétrico.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
