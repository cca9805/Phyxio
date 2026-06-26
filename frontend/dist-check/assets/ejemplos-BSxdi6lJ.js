const a=`# Ejemplo tipo examen

## Enunciado

Una placa rectangular de aluminio, simplemente apoyada en sus cuatro bordes, tiene dimensiones [[a_dim]] de 0.60 m y [[b_dim]] de 0.40 m. Su espesor [[h_placa]] es 3.0 mm, el módulo de Young [[E_young]] es 70 GPa, el coeficiente de Poisson [[nu_p]] es 0.33 y la densidad volumétrica [[rho_vol]] es 2700 kg/m³. Calcula la rigidez a la flexión, la densidad superficial y la frecuencia del modo (1,1). Después compara cualitativamente con el modo (2,1).

## Datos

- [[a_dim]]: 0.60 m
- [[b_dim]]: 0.40 m
- [[h_placa]]: 0.0030 m
- [[E_young]]: 70 GPa, es decir 70 × 10⁹ Pa
- [[nu_p]]: 0.33
- [[rho_vol]]: 2700 kg/m³
- Modo fundamental: [[m]] = 1, [[n]] = 1
- Segundo modo comparado: [[m]] = 2, [[n]] = 1

## Definición del sistema

El sistema es una placa delgada rectangular que vibra transversalmente. La magnitud dominante que queremos obtener es [[f_mn]], porque identifica a qué frecuencia la placa puede entrar en resonancia para un patrón nodal concreto. Antes de calcular esa frecuencia no basta con conocer el material: hay que construir dos magnitudes intermedias. La primera es [[D_placa]], que mide la resistencia de la placa a curvarse. La segunda es [[rho_s]], que mide la inercia por unidad de área.

Los índices [[m]] y [[n]] no son unidades ni constantes materiales. Describen cuántos semiperíodos espaciales caben en las direcciones asociadas a [[a_dim]] y [[b_dim]]. Por eso el modo (2,1) no se interpreta como "el doble de frecuencia" del modo (1,1), sino como un patrón con una variación espacial adicional en la dirección [[x]].

## Modelo físico

Se usa el modelo de placa delgada de Kirchhoff con material homogéneo, isótropo y deformaciones pequeñas. La placa está idealizada con bordes simplemente apoyados, de modo que el desplazamiento transversal se anula en los bordes. En ese régimen la frecuencia modal depende de la razón entre rigidez flexional e inercia superficial, y de la escala geométrica del patrón nodal.

El modelo es razonable porque el espesor de 3.0 mm es mucho menor que las dimensiones en el plano: [[h_placa]] es del orden de milímetros, mientras que [[a_dim]] y [[b_dim]] son de decenas de centímetros. Si la placa fuera gruesa, anisótropa, laminada o estuviera fuertemente amortiguada, la fórmula ideal dejaría de ser una predicción precisa.

## Justificación del modelo

La pregunta física central es cómo la geometría y el material determinan las frecuencias y los patrones nodales. Este ejemplo lo separa en tres decisiones: calcular [[D_placa]] a partir de material y espesor, calcular [[rho_s]] a partir de masa superficial, y usar los índices modales para distinguir patrones distintos.

La elección del modelo de placa, y no de membrana, se justifica porque la fuerza restauradora principal procede de la rigidez a la flexión. No se proporciona una tensión superficial [[T_mem]] ni una densidad superficial de membrana [[rho_mem]], de modo que usar la fórmula de membrana mezclaría otro régimen físico.

## Resolución simbólica

La rigidez a la flexión se obtiene con:

{{f:rigidez_flexion_placa}}

La densidad superficial de la placa se obtiene con:

{{f:densidad_superficial_placa}}

La frecuencia del modo rectangular de placa se obtiene con:

{{f:frecuencia_modal_placa}}

Primero se calcula [[D_placa]], después [[rho_s]] y finalmente [[f_mn]]. El orden importa: introducir [[rho_vol]] directamente en la fórmula modal produciría una incoherencia dimensional, porque la placa requiere masa por unidad de área, no masa por unidad de volumen.

## Sustitución numérica

Para [[D_placa]], elevar 0.0030 m al cubo da una cantidad muy pequeña, pero se multiplica por el módulo de Young. Al aplicar el factor de Poisson con [[nu_p]] = 0.33, la rigidez queda aproximadamente en 177 N m. Este valor es razonable para una placa metálica fina: no es una lámina flexible de papel, pero tampoco una losa rígida de gran espesor.

Para [[rho_s]], multiplicar 2700 kg/m³ por 0.0030 m da aproximadamente 8.1 kg/m². Esa es la inercia superficial que la placa debe acelerar en cada oscilación.

Para el modo (1,1), el término geométrico combina una variación en [[x]] y una en [[y]]. Con las dimensiones dadas, la contribución asociada a [[b_dim]] es mayor porque 0.40 m es más pequeño que 0.60 m. La frecuencia resultante queda aproximadamente en el rango de varios centenares de hertz, alrededor de 520 Hz con estos datos ideales.

Para el modo (2,1), el término [[m]]/[[a_dim]] se duplica antes de elevarse al cuadrado. La frecuencia aumenta claramente, pero no por una regla lineal simple. La placa no "sube un armónico exacto" como una cuerda ideal unidimensional; ordena modos bidimensionales según la suma de contribuciones espaciales en las dos direcciones.

## Validación dimensional

En [[D_placa]], [[E_young]] tiene unidades de presión y [[h_placa]] aporta una potencia cúbica de longitud. El cociente por factores adimensionales deja una rigidez con unidades de fuerza por longitud efectiva de flexión, expresada como N·m.

En [[rho_s]], [[rho_vol]] multiplicada por [[h_placa]] transforma kg/m³ en kg/m². Esa conversión es imprescindible porque una placa se modela como una superficie vibrante.

En [[f_mn]], la raíz del cociente [[D_placa]]/[[rho_s]] se combina con términos geométricos al cuadrado. El resultado final tiene dimensión de frecuencia. Si en una resolución aparece kg/m³ dentro de la fórmula final, el error no es numérico sino conceptual.

## Interpretación física

La frecuencia fundamental no está determinada solo por el tamaño ni solo por el material. [[D_placa]] recoge la rigidez y aumenta muy rápido con el espesor; [[rho_s]] recoge la inercia que se opone a la aceleración; [[a_dim]] y [[b_dim]] fijan qué longitudes de onda espaciales caben en la placa.

El modo (1,1) tiene el patrón más suave compatible con los bordes. El modo (2,1) introduce una línea nodal adicional aproximadamente perpendicular a la dirección x, por lo que exige curvatura más fina y frecuencia mayor. La lectura visual del patrón nodal es tan importante como el número: dos modos pueden tener frecuencias próximas y formas espaciales muy distintas.

# Ejemplo de aplicación real

## Contexto

Un ingeniero acústico revisa una tapa metálica de una máquina que produce un zumbido intenso cerca de 500 Hz. La tapa puede modelarse inicialmente como una placa rectangular de aluminio con dimensiones próximas a las del ejemplo anterior. El objetivo no es obtener una frecuencia exacta de laboratorio, sino decidir si el zumbido puede estar asociado al modo (1,1) o a un modo superior.

## Estimación física

La estimación usa la misma cadena física: [[E_young]], [[h_placa]] y [[nu_p]] determinan [[D_placa]]; [[rho_vol]] y [[h_placa]] determinan [[rho_s]]; el par ([[a_dim]], [[b_dim]]) y los índices modales determinan [[f_mn]]. Si la primera frecuencia ideal cae cerca de 500 Hz, la tapa tiene un candidato claro para resonar con la excitación del motor.

Un cambio de espesor es muy eficaz. Aumentar [[h_placa]] eleva [[D_placa]] con dependencia cúbica y también aumenta [[rho_s]], pero el efecto neto sobre [[f_mn]] es aproximadamente proporcional al espesor. En cambio, añadir masa superficial sin aumentar rigidez baja la frecuencia. Por eso pegar una lámina pesada puede desplazar la resonancia hacia abajo, mientras que añadir nervios o cambiar el espesor puede desplazarla hacia arriba.

## Interpretación

La aplicación real muestra por qué los modos de placas no se tratan como una lista decorativa de dibujos. El patrón nodal indica dónde la placa se mueve mucho y dónde casi no se mueve. Si se coloca un refuerzo sobre una línea nodal, puede tener poco efecto sobre el modo problemático. Si se coloca en una zona de máxima amplitud, puede cambiar de forma apreciable la frecuencia o el amortiguamiento.

La decisión técnica no consiste solo en calcular [[f_mn]]. Consiste en comparar esa frecuencia con la excitación externa, mirar el patrón espacial, revisar si el modelo de placa delgada es válido y decidir si conviene cambiar rigidez, masa, condiciones de borde o amortiguamiento.
`;export{a as default};
