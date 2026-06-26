const e=`## 1. Fibra óptica monomodo para telecomunicaciones de larga distancia

En una fibra óptica monomodo, la señal de luz infrarroja a 1550 nm se confina en un núcleo de vidrio dopado con germanio cuyo índice de refracción es ligeramente superior al del revestimiento de sílice pura. La diferencia de índices es típicamente de 0.003 a 0.005, lo que produce un ángulo crítico extremadamente alto, del orden de 88 a 89 grados medidos desde la normal a la interfaz núcleo-revestimiento.

Esta configuración impone que solo los rayos casi perfectamente alineados con el eje de la fibra cumplan la condición de reflexión total interna. El resultado es la eliminación de todos los modos de propagación excepto el fundamental, lo que suprime la dispersión modal y permite anchos de banda superiores a 10 Gbps en tramos de cientos de kilómetros sin regeneración. El diseñador calcula el perfil de índices del núcleo usando la ley de Snell para garantizar que la apertura numérica resultante (del orden de 0.12) sea compatible con los emisores láser de acoplamiento directo.

Variable dominante: la diferencia de índices entre núcleo y revestimiento, que fija el ángulo crítico y determina el número de modos propagantes.
Límite de validez: el modelo de rayos deja de ser suficiente cuando el diámetro del núcleo es inferior a unas pocas longitudes de onda; en ese régimen se necesita la teoría electromagnética completa de guías de onda.

## 2. Prisma de reflexión total en prismáticos militares

Los prismáticos de alta calidad utilizan prismas de vidrio BaK-4 (índice de 1.57) donde los rayos inciden sobre las caras internas a 45 grados, valor significativamente superior al ángulo crítico de la interfaz vidrio–aire (que es de aproximadamente 39.6 grados para ese vidrio). La reflexión total interna redirige el haz sin necesidad de recubrimientos metálicos, evitando las pérdidas por absorción y la degradación por oxidación que sufren los espejos de aluminio.

La ley de Snell predice que para cualquier rayo que incida a 45 grados dentro del prisma, el seno requerido en el aire superaría la unidad, confirmando que la refracción es imposible y que el cien por cien de la energía se refleja. El diseñador selecciona el tipo de vidrio verificando que su ángulo crítico sea al menos 5 grados inferior al ángulo de diseño para garantizar márgenes de tolerancia frente a pequeñas desviaciones de alineación.

Variable dominante: el índice de refracción del vidrio del prisma, que determina el margen entre el ángulo de incidencia nominal y el ángulo crítico.
Límite de validez: si el prisma se contamina superficialmente con aceites o humedad condensada, el índice efectivo del medio exterior sube por encima de 1.00 y el ángulo crítico aumenta, pudiendo reducir la reflectancia total y generar pérdidas inesperadas.

## 3. Refractómetro de Abbe para control de calidad en la industria alimentaria

El refractómetro de Abbe mide el índice de refracción de líquidos aprovechando el ángulo crítico de la interfaz entre un prisma de vidrio pesado (índice conocido con alta precisión, típicamente 1.75) y la muestra líquida. El instrumento ilumina la muestra con luz rasante y observa la frontera entre la zona iluminada y la zona oscura en el campo del ocular; la posición angular de esa frontera está directamente gobernada por la ley de Snell en condiciones de ángulo crítico.

En la industria alimentaria, la concentración de azúcar en un zumo o jarabe se correlaciona linealmente con el índice de refracción en un rango estrecho (1.333 para agua pura hasta 1.504 para jarabe saturado). El técnico de calidad coloca una gota en el prisma, observa la escala y lee directamente el porcentaje de sólidos solubles (grados Brix). La precisión alcanzable es de 0.0001 en índice, equivalente a 0.1 grados Brix.

Variable dominante: el ángulo crítico de la interfaz prisma-muestra, que cambia con la concentración del soluto y permite la lectura cuantitativa directa.
Límite de validez: el método falla cuando la muestra es turbia, coloreada intensamente o contiene burbujas, porque la frontera luz-sombra se difumina y la lectura pierde precisión. También falla para muestras muy viscosas que no forman contacto óptico uniforme con el prisma.

## 4. Diseño de lentes asféricas para objetivos fotográficos

En un objetivo fotográfico multicapa, cada superficie de lente produce refracción descrita por la ley de Snell aplicada localmente. El diseñador óptico traza miles de rayos a través de las superficies, calculando en cada punto el ángulo de refracción según los índices del vidrio entrante y saliente y la normal local a la superficie. La suma de todas estas refracciones produce la imagen en el sensor.

Las lentes asféricas se diseñan modificando la curvatura local para corregir aberraciones: la ley de Snell indica que, al cambiar la pendiente de la superficie en un punto, el ángulo de refracción se modifica de forma predecible. El software de diseño optimiza el perfil asférico minimizando la dispersión de los rayos en el plano focal, usando la ley de Snell como ecuación fundamental en cada iteración del trazado de rayos.

Para vidrios de alto índice (1.80 a 2.00), la refracción es más intensa en cada superficie, lo que permite lentes más delgadas y compactas pero exige mayor precisión de fabricación: un error de 0.1 grados en la normal local produce una desviación del rayo proporcionalmente mayor que en vidrios de bajo índice.

Variable dominante: la curvatura local de la superficie asférica y el índice de refracción del vidrio seleccionado, que juntos determinan la potencia óptica punto a punto.
Límite de validez: la ley de Snell en forma de rayo falla cuando las dimensiones de la pupila se acercan a la longitud de onda (óptica difractiva) o cuando la superficie tiene microestructuras deliberadas (lentes difractivas, metalentes).

## 5. Espejismo inferior en carreteras calientes

En un día caluroso, la capa de aire inmediatamente sobre el asfalto se calienta y su densidad disminuye, reduciendo su índice de refracción de forma gradual. Un rayo de luz que viaja oblicuamente hacia abajo experimenta una refracción continua que lo curva progresivamente hacia arriba. Cuando el ángulo local supera el ángulo crítico de las capas adyacentes, se produce una reflexión total y el rayo nunca alcanza la superficie: el observador ve una imagen invertida del cielo en el suelo, creando la ilusión de un charco de agua.

La ley de Snell se aplica aquí en forma diferencial: cada capa infinitesimal de aire tiene un índice ligeramente distinto, y la componente horizontal del vector de onda se conserva a lo largo de toda la trayectoria curva. El resultado es que el producto del índice local por el seno del ángulo local es constante en todo el recorrido del rayo. Cuando este producto alcanza el valor del índice en la capa más caliente, el rayo se refleja totalmente.

La intensidad del espejismo depende del gradiente vertical de temperatura: gradientes superiores a 2 grados por centímetro de altura (típicos sobre asfalto a más de 60 grados centígrados) producen espejismos visibles a distancias de decenas de metros. Con gradientes menores, la curvatura del rayo es insuficiente para producir reflexión total y el espejismo no se forma.

Variable dominante: el gradiente vertical del índice de refracción del aire, controlado por el gradiente térmico entre la superficie caliente y el aire ambiente.
Límite de validez: el modelo de rayos falla cuando la turbulencia atmosférica produce fluctuaciones rápidas del índice que destruyen la coherencia del rayo; en ese caso se observan centelleo y distorsión en vez de una imagen especular nítida.
`;export{e as default};
