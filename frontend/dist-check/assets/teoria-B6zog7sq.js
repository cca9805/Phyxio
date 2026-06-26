const e=`# Ley de Gauss

## Contexto conceptual

La ley de Gauss es uno de los pilares de la electrostática clásica y, en su formulación más amplia, la primera de las cuatro ecuaciones de Maxwell. Su poder radica en que **relaciona el campo eléctrico con su fuente —la carga— de forma global**: donde la ley de Coulomb exige integrar la contribución vectorial de cada elemento de carga, la ley de Gauss permite calcular el campo en problemas simétricos con un argumento de conteo global. La cantidad de líneas de campo que salen de una región es simplemente proporcional a la carga que contiene.

Este leaf se centra en la pregunta física central: **¿cómo determina la carga encerrada el flujo eléctrico total a través de cualquier superficie cerrada?** La respuesta convierte la ley de Gauss en una herramienta de cálculo poderosa para geometrías simétricas y en un principio de comprensión para geometrías arbitrarias.

## 🟢 Nivel esencial

Imagina que el campo eléctrico son líneas que brotan de las cargas positivas y terminan en las negativas. Cada carga emite una cantidad fija de líneas: cuantas más cargas positivas hay en una región, más líneas emergen de ella hacia afuera.

La ley de Gauss dice algo sorprendente: si dibujas **cualquier superficie cerrada** alrededor de una región —puede ser una esfera, un cubo, o una forma completamente irregular— el número neto de líneas de campo que la atraviesan hacia fuera depende únicamente de la carga total encerrada, no de la forma que hayas elegido. Una carga positiva envía las mismas líneas hacia afuera independientemente de si la envuelves en un globo pequeño o en uno enorme.

El flujo eléctrico [[Phi_E]] cuantifica ese número de líneas neto. Si [[Q_enc]] es positiva, [[Phi_E]] es positivo: el campo sale. Si [[Q_enc]] es negativa, [[Phi_E]] es negativo: el campo entra. Si [[Q_enc]] es cero, no hay flujo neto aunque el campo no sea necesariamente cero en cada punto de la superficie.

> [!NOTE]
> La clave intuitiva es que la forma de la superficie es irrelevante para el flujo total. Cambiar la superficie gaussiana —siempre que no cruce ninguna carga— no altera el resultado.

## 🔵 Nivel formal

La ley de Gauss en forma integral establece:

{{f:ley_gauss}}

donde [[Phi_E]] es el flujo eléctrico total a través de la superficie cerrada, [[Q_enc]] es la carga eléctrica neta encerrada en su interior, y [[epsilon_0]] es la permitividad del vacío, cuyo valor es aproximadamente 8.854×10⁻¹² C²·N⁻¹·m⁻².

**El flujo se define** como la integral de superficie del campo eléctrico proyectado sobre el vector normal a la superficie. Para una superficie donde el campo es uniforme y perpendicular a ella, el flujo se simplifica al producto del campo por el área.

Cuando la distribución de carga tiene **simetría esférica, cilíndrica o planar**, el campo es uniforme en módulo y perpendicular a la superficie gaussiana natural para esa simetría. En ese caso, la ley de Gauss permite extraer el campo de la integral y obtener:

{{f:campo_gaussiano}}

donde [[E_G]] es el módulo del campo, [[A_G]] es el área total de la superficie gaussiana, [[Q_enc]] es la carga encerrada y [[epsilon_0]] es la permitividad del vacío.

**Dimensionalmente**, el flujo tiene unidades de N·m²·C⁻¹, equivalente a V·m. La ley de Gauss es dimensionalmente consistente: el cociente carga/permitividad tiene las mismas unidades que el flujo.

> [!TIP]
> El truco para aplicar la ley de Gauss eficientemente es elegir la superficie gaussiana de manera que el campo sea perpendicular y uniforme sobre ella, o que sea paralelo a ella (contribución nula). Con esa elección, la integral se convierte en un simple producto.

## 🔴 Nivel estructural

La ley de Gauss es consecuencia directa de la ley de Coulomb: el campo de una carga puntual cae con el inverso del cuadrado de la distancia, y la superficie esférica crece exactamente con el cuadrado del radio. Este balance preciso hace que el flujo a través de cualquier esfera concéntrica sea el mismo, independientemente del radio.

**Desde el punto de vista topológico**, las cargas son fuentes y sumideros del campo. En regiones sin carga, las líneas deben entrar y salir en igual número: el campo en el interior de un **conductor en equilibrio electrostático** es exactamente cero porque cualquier campo interior generaría corrientes hasta neutralizarse. La ley tiene un límite claro: **no permite calcular el campo directamente sin simetría suficiente**; en esos casos la integral debe evaluarse numéricamente.

En la **forma diferencial**, la ley de Gauss establece que la divergencia del campo eléctrico es proporcional a la densidad de carga local dividida entre [[epsilon_0]], la primera ecuación de Maxwell. La generalización a **medios dieléctricos** sustituye [[epsilon_0]] por la permitividad del medio: las cargas ligadas modifican el campo efectivo, aunque el flujo del desplazamiento eléctrico se conserva.

> [!WARNING]
> La ley de Gauss en forma integral no puede aplicarse si la permitividad varía en el espacio. En medios inhomogéneos, debe integrarse la forma diferencial con la permitividad local.

Un aspecto estructural esencial: la ley **solo depende de la suma algebraica** de las cargas interiores, no de su distribución. Dos configuraciones completamente distintas con la misma carga total producen exactamente el mismo flujo.

## Interpretación física profunda

El flujo [[Phi_E]] no mide el campo en un punto: mide **cuánto campo atraviesa colectivamente una superficie**. Dos puntos pueden tener campos distintos en dirección y módulo, pero sus contribuciones se suman algebraicamente. Esta naturaleza colectiva explica la independencia del flujo respecto a la geometría: en regiones sin carga, cualquier tubo de campo que entre por un lado debe salir por el otro sin cambiar el flujo neto.

> [!NOTE]
> Esta interpretación explica por qué el interior de una jaula de Faraday está protegido: cualquier campo exterior que entra por un lado sale por el otro sin penetrar el interior, ya que no hay cargas internas que actúen como fuente.

## Orden de magnitud

Las cargas típicas en experimentos de laboratorio son del orden de microcoulombios (\\(\\mu\\)C), lo que produce flujos del orden de \\(\\mu\\)C / 8.85×10⁻¹² ≈ 10⁵ N·m²·C⁻¹. Para la carga del electrón (1.6×10⁻¹⁹ C), el flujo sería de orden 1.8×10⁻⁸ N·m²·C⁻¹, un valor extremadamente pequeño que ilustra la diferencia entre la escala atómica y la macroscópica.

Un campo de **ruptura del aire** de 3×10⁶ N/C sobre una esfera de radio 10 cm tiene un flujo de aproximadamente 3×10⁶ × 4π × 0.01 ≈ 3.8×10⁵ N·m²·C⁻¹, lo que corresponde a una carga encerrada de unos 3.4 μC. Este orden de magnitud permite detectar resultados absurdos: un flujo de 10³⁰ N·m²·C⁻¹ implicaría cargas del orden de toneladas de coulombios, físicamente imposibles.

La comparación entre la ley de Coulomb y la ley de Gauss muestra que ambas dan el mismo resultado para geometrías simétricas, pero la ley de Gauss es computacionalmente mucho más eficiente para esos casos.

## Método de resolución personalizado

Para aplicar la ley de Gauss de forma sistemática:

1. **Identificar la simetría**: determinar si la distribución de carga tiene simetría esférica, cilíndrica o planar. Sin simetría, la ley de Gauss sigue siendo válida pero no permite obtener el campo directamente.
2. **Elegir la superficie gaussiana**: esfera concéntrica para simetría esférica, cilindro coaxial para simetría cilíndrica, caja rectangular para simetría planar. La superficie debe pasar por el punto donde se quiere conocer el campo.
3. **Calcular [[Q_enc]]**: sumar algebraicamente todas las cargas —con sus signos— que están dentro de la superficie elegida. Las cargas exteriores no contribuyen.
4. **Aplicar la ley de Gauss**: calcular el flujo y, si la simetría permite extraer el campo, dividir entre el área [[A_G]] para obtener [[E_G]].
5. **Verificar el sentido**: la dirección del campo viene dada por el signo de [[Q_enc]] y la geometría de la superficie elegida.

## Casos especiales y ejemplo extendido

**Conductor en equilibrio electrostático**: Dentro de un conductor, cualquier campo interior causaría movimiento de carga hasta anularse. La ley de Gauss sobre una superficie gaussiana completamente inmersa en el conductor da [[E_G]] nulo y [[Q_enc]] nulo: todas las cargas libres se redistribuyen en la superficie del conductor, no en su interior.

**Carga neta cero encerrada**: Si hay dos cargas iguales y opuestas dentro de la superficie, [[Q_enc]] es cero y [[Phi_E]] es cero. Esto no significa que el campo sea cero en cada punto de la superficie —hay campo, pero las contribuciones de entrada y salida se cancelan globalmente.

**Esfera uniformemente cargada**: Para una esfera de radio R con carga total [[Q_enc]] distribuida uniformemente, la ley de Gauss da un campo exterior que decrece como el inverso del cuadrado de la distancia, idéntico al que produciría una carga puntual en el centro. En el interior de la esfera, solo la carga encerrada contribuye al campo, que crece linealmente con la distancia al centro.

## Preguntas reales del alumno

**¿Por qué la forma de la superficie gaussiana no importa si el campo cambia de un punto a otro de ella?**

Porque el flujo es una integral que suma todas las contribuciones. Aunque en un punto el campo sea fuerte y en otro débil, la suma global solo depende de las fuentes interiores. El campo varía de punto a punto, pero la integral sobre la superficie completa da siempre el mismo valor para la misma [[Q_enc]].

**¿Se puede aplicar la ley de Gauss si las cargas están en movimiento?**

En electrostática clásica, la ley de Gauss en su forma integral se aplica a cargas en reposo. Para cargas en movimiento se requiere la forma diferencial con los campos dependientes del tiempo y la forma completa de las ecuaciones de Maxwell. Sin embargo, la ley de Gauss en la forma diferencial sigue siendo válida en electrodinámica.

**¿Por qué la carga exterior no contribuye al flujo neto?**

Porque las líneas de campo de una carga exterior atraviesan la superficie en dos puntos: entran por un lado y salen por el otro. Las contribuciones positiva y negativa se cancelan exactamente en la integral cerrada. Solo las cargas interiores tienen líneas de campo que nacen o terminan dentro de la superficie.

**¿Cómo sé si estoy aplicando correctamente la ley de Gauss?**

La verificación más directa es comprobar que [[Q_enc]] solo incluye las cargas interiores, que [[A_G]] corresponde a la parte activa de la superficie, y que el signo del flujo es coherente con el signo de [[Q_enc]].

## Conexiones transversales y rutas de estudio

La ley de Gauss es puerta de entrada al potencial eléctrico: calculado [[E_G]], se puede integrar para obtener el potencial, camino especialmente eficiente en geometrías simétricas. En la electrostática, es la herramienta fundamental para condensadores y conductores cargados: el leaf de condensadores usa directamente el campo entre placas derivado por Gauss.

Hacia la electrodinámica, la ley de Gauss en forma diferencial es la primera ecuación de Maxwell y el punto de partida para los campos dependientes del tiempo. La conexión con la ley de Coulomb es directa: ambas leyes son equivalentes y contienen la misma información física expresada de manera diferente.

## Síntesis final

La ley de Gauss vincula la causa —la carga encerrada [[Q_enc]]— con el efecto colectivo —el flujo eléctrico [[Phi_E]]— a través de la constante fundamental [[epsilon_0]]. Su potencia operativa reside en la independencia del flujo respecto a la geometría de la superficie gaussiana, lo que permite elegir la superficie más conveniente para cada problema. En geometrías simétricas, esta elección convierte un problema de integración complejo en un cálculo algebraico directo del campo [[E_G]].
`;export{e as default};
