# Ondas transversales y longitudinales

## Contexto conceptual

Las ondas se clasifican por una pregunta muy concreta: **como se mueve la perturbacion** respecto a la direccion en la que avanza el patron. Si el medio se desplaza perpendicularmente al avance, hablamos de onda transversal. Si se desplaza paralelamente, hablamos de onda longitudinal.

Esta distincion no depende de que el dibujo sea bonito ni de que aparezcan crestas visibles. Depende de comparar orientaciones fisicas. Por eso este leaf usa [[u_perp]], [[u_parallel]] y [[A]] como magnitudes de lectura, no como adornos.

La clasificacion es especialmente importante porque cambia que sensor se usa, que modelo del medio se elige y que errores visuales deben evitarse. Una misma palabra, onda, cubre mecanismos de deformacion muy distintos.

## 🟢 Nivel esencial

Una onda transversal se reconoce porque la perturbacion va **de lado** respecto al avance. En una cuerda, el pulso puede avanzar hacia la derecha mientras los puntos de la cuerda suben y bajan. La forma viaja en una direccion y el movimiento local ocurre en otra.

Una onda longitudinal se reconoce porque la perturbacion va **en la misma linea** que el avance. En sonido, las zonas de aire se comprimen y se separan a lo largo de la direccion en que se propaga la onda. No hace falta ver una cresta vertical para que haya onda.

La clave inicial es comparar direcciones, no formas dibujadas.

> [!NOTE]
> Transversal no significa siempre vertical. Longitudinal no significa inmovil. Ambas palabras solo tienen sentido despues de fijar la direccion de propagacion.

## 🔵 Nivel formal

Para convertir la clasificacion en lectura operativa, se separa la perturbacion total [[A]] en una componente perpendicular [[u_perp]] y una componente paralela [[u_parallel]]. La comparacion normalizada evita decidir solo por el tamaño absoluto de la perturbacion.

{{f:coeficiente_transversal}}

El indice [[C_T]] crece cuando la componente perpendicular domina. Una onda idealmente transversal tendria casi toda la perturbacion normal al avance. En una cuerda tensa, esta lectura suele ser clara porque el desplazamiento visible esta separado de la direccion de propagacion.

{{f:coeficiente_longitudinal}}

El indice [[C_L]] crece cuando la componente paralela domina. En una onda sonora, la magnitud visible no suele ser una altura, sino una alternancia de compresiones y rarefacciones alineadas con el avance. Si ambos indices son relevantes, la onda puede ser mixta o el modelo de clasificacion simple puede ser insuficiente.

Una clasificacion rigurosa exige que [[A]], [[u_perp]] y [[u_parallel]] se midan sobre el mismo estado de onda. Si se mide [[u_perp]] en una imagen y [[u_parallel]] en otra situacion, los indices dejan de tener lectura fisica comun.

La decision no requiere que uno de los indices sea exactamente uno. En datos reales basta identificar predominio y declarar incertidumbre si los valores quedan cercanos.

La comparacion formal debe hacerse con la misma escala [[A]] y con el mismo eje de propagacion. Si cambia cualquiera de esas referencias, [[C_T]] y [[C_L]] ya no son indicadores comparables del mismo modo ondulatorio.

## 🔴 Nivel estructural

La estructura profunda es geometrica: primero se fija la direccion de propagacion, despues se proyecta la perturbacion respecto a esa direccion. Sin esa referencia, transversal y longitudinal se vuelven etiquetas visuales ambiguas. Un mismo dibujo rotado no debe cambiar el tipo fisico de onda.

En ondas mecanicas, el tipo depende de como el medio permite deformarse. Una cuerda tensa favorece desplazamientos transversales; un fluido ordinario sostiene compresiones longitudinales y no mantiene esfuerzos de corte estaticos. En solidos pueden existir ambos tipos, porque el material soporta compresion y tambien deformacion de cizalla.

La distincion tambien afecta a la energia y a la medicion. En una onda transversal, una camara puede seguir desplazamientos laterales del medio. En una longitudinal, puede ser necesario medir densidad, presion o separacion entre particulas. El patron se propaga aunque el movimiento local sea de ida y vuelta alrededor del equilibrio.

El modelo por componentes falla si la onda tiene polarizacion cambiante, si el medio es anisotropo o si se mezclan modos. En esos casos, [[C_T]] y [[C_L]] siguen siendo utiles como diagnostico local, pero no bastan para describir toda la dinamica. La clasificacion debe pasar de "tipo puro" a "modo dominante".

Esta lectura estructural tambien evita un error de escala. Una amplitud grande no convierte una onda en transversal ni una compresion pequeña deja de ser longitudinal. Lo decisivo es la orientacion de la perturbacion respecto al avance, evaluada con una misma referencia geometrica.

En medios reales, las fronteras pueden transformar parte de un modo en otro. Al reflejarse o transmitirse, una perturbacion puede cambiar la distribucion entre [[u_perp]] y [[u_parallel]]. Por eso la clasificacion debe revisarse cuando cambia el medio, la frontera o la direccion de propagacion.

El criterio de validez mas fuerte es la **separacion modal**. Si un registro permite aislar una componente dominante de forma estable, la etiqueta transversal o longitudinal tiene sentido predictivo. Si las componentes varian, el resultado debe leerse como diagnostico local y no como propiedad global de toda la onda.

Tambien hay un limite experimental. En sonido, [[u_parallel]] puede ser dificil de observar directamente y se infiere mediante presion; en una cuerda, [[u_perp]] suele verse de forma directa. La ausencia de una señal visual no prueba ausencia de componente: solo indica que el instrumento usado no mide esa variable.

> [!WARNING]
> Clasificar por la forma del dibujo sin fijar direccion de avance produce errores sistematicos.

## Interpretación física profunda

La diferencia entre transversal y longitudinal no dice que una onda sea mas real que otra. Dice **que variable fisica oscila** y en que direccion lo hace. En una cuerda, el desplazamiento lateral es visible. En sonido, lo que cambia de forma directa es la compresion del aire.

Esta lectura prepara fenomenos posteriores. La reflexion, la transmision y la velocidad de propagacion dependen del tipo de deformacion que el medio puede sostener. No basta con saber que hay una onda; importa saber como el medio participa en ella.

## Orden de magnitud

En una cuerda de aula, [[u_perp]] puede ser de milimetros a centimetros, mientras [[u_parallel]] es despreciable para el modelo ideal. En sonido audible, los desplazamientos del aire son pequenos, pero [[u_parallel]] domina la clasificacion. Un indice fuera del intervalo esperado entre cero y uno indica normalizacion mal planteada.

Una diferencia de orden 0.8 frente a 0.1 indica predominio claro. Valores cercanos, como 0.45 y 0.55, no justifican una etiqueta pura sin mas evidencia experimental.

## Método de resolución personalizado

Primero dibuja o identifica la direccion de propagacion. Despues pregunta como se mueve la perturbacion local. Si domina [[u_perp]], la lectura es transversal; si domina [[u_parallel]], la lectura es longitudinal. Si ninguna domina claramente, no fuerces una etiqueta pura.

Finalmente revisa el medio. Una cuerda, un fluido y un solido no sostienen los mismos modos con la misma facilidad. La clasificacion debe ser coherente con el mecanismo fisico del medio, no solo con el esquema visual.

## Casos especiales y ejemplo extendido

Una onda en la superficie del agua no es puramente transversal ni puramente longitudinal. Las particulas pueden describir trayectorias con componentes verticales y horizontales. Por eso se habla de movimiento mixto y conviene comparar componentes antes de clasificar.

En un solido, una onda longitudinal comprime y dilata el material, mientras una onda transversal de corte desplaza capas lateralmente. Esta diferencia permite que las ondas sismicas lleguen en familias distintas y con velocidades distintas.

Como ejemplo extendido, observa un muelle. Si desplazas un extremo lateralmente y el pulso avanza por el muelle, domina [[u_perp]]. Si comprimes espiras y la compresion avanza, domina [[u_parallel]]. El mismo objeto puede mostrar ambos tipos segun como se excite.

## Preguntas reales del alumno

**¿Una onda transversal siempre sube y baja?** No. Sube y baja solo si el avance se dibuja horizontal. Lo esencial es la perpendicularidad respecto a la propagacion.

**¿Una onda longitudinal no tiene amplitud?** Si tiene. Su amplitud se asocia a compresion, desplazamiento paralelo o cambio de presion, no a altura vertical.

**¿El sonido es longitudinal porque va hacia delante?** Es longitudinal porque la perturbacion del aire es paralela al avance, no solo porque el sonido se propague.

**¿Puede haber ondas mixtas?** Si. En medios reales pueden coexistir componentes transversales y longitudinales, y entonces conviene hablar de predominio.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [concepto de onda](leaf:fisica-clasica/ondas/fundamentos/concepto-de-onda), donde se distingue perturbacion y propagacion. Tambien prepara [velocidad de propagacion](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/velocidad-de-propagacion), porque cada modo puede viajar con una rapidez distinta.

Despues conviene estudiar sonido, ondas en cuerdas y ondas sismicas. En todos esos temas, la clasificacion transversal o longitudinal determina que magnitud se mide y que modelo del medio se necesita.

## Síntesis final

Una onda es transversal o longitudinal segun la orientacion de su perturbacion respecto al avance. La clave es comparar [[u_perp]] y [[u_parallel]] con una misma escala [[A]], no clasificar por apariencia del dibujo.
