const e=`## 1. Fibra optica para telecomunicaciones

La transmision de datos a larga distancia por fibra optica depende de la reflexion total interna. La luz se inyecta en el nucleo de vidrio con un angulo superior al angulo critico [[theta_c]], rebotando miles de veces por kilometro sin perdida por transmision. Cada rebote cumple exactamente la ley de reflexion: [[theta_r]] iguala a [[theta_i]] en cada punto de contacto con el revestimiento.

Las fibras modernas transmiten terabits por segundo a traves de oceanos enteros. El diseno del contraste entre [[n1]] del nucleo y [[n2]] del revestimiento determina la apertura numerica de la fibra y el rango de angulos que se propagan sin fuga. Una fibra tipica de telecomunicaciones tiene un nucleo de indice 1.48 y revestimiento de 1.46, produciendo un angulo critico elevado que exige inyectar la luz con gran precision angular.

Variable dominante: el angulo critico [[theta_c]], que determina el cono de aceptacion de la fibra y el confinamiento de la senal luminosa.
Límite de validez: el modelo geometrico deja de ser valido en fibras monomodo con diametro de nucleo inferior a 10 micrometros, donde dominan los modos de propagacion ondulatoria.

## 2. Espejos retroreflectores en senalizacion vial

Los retroreflectores de esquina de cubo devuelven la luz exactamente en la direccion de origen mediante tres reflexiones sucesivas en caras perpendiculares. Cada reflexion cumple la ley: [[theta_r]] es igual a [[theta_i]] en cada cara. La geometria de tres espejos perpendiculares garantiza que el rayo de salida es antiparalelo al de entrada, independientemente del angulo de llegada.

Esta propiedad se usa en catadiopticos de vehiculos, senales de trafico y reflectores lunares dejados por las misiones Apollo. La intensidad retornada depende de la calidad especular de las caras. Los retroreflectores lunares permiten medir la distancia Tierra-Luna con precision milimetrica mediante pulsos laser.

Variable dominante: el angulo de incidencia [[theta_i]] sobre cada cara, que determina la precision del retorno.
Límite de validez: si las caras no son exactamente perpendiculares entre si, el rayo de retorno se desvia y la retroreflexion pierde eficiencia. Errores mayores de 0.5 grados reducen significativamente el retorno.

## 3. Endoscopia medica

Los endoscopios transmiten imagenes del interior del cuerpo mediante haces de fibras opticas coherentes. La reflexion total interna confina la luz dentro de cada fibra individual, permitiendo iluminar cavidades internas y transportar la imagen de vuelta al observador sin perdida de resolucion.

El angulo critico entre el vidrio del nucleo y el revestimiento polimerico determina la flexibilidad del instrumento: cuanto menor sea [[theta_c]], mayor es el rango de curvaturas que la fibra tolera sin que los rayos escapen. En endoscopios modernos, el revestimiento se elige para maximizar la diferencia de indices y permitir curvas cerradas dentro del cuerpo humano.

Variable dominante: el angulo critico [[theta_c]], que fija la curvatura maxima admisible del endoscopio sin perdida de imagen.
Límite de validez: en fibras de diametro extremadamente pequeno o curvaturas muy cerradas, los rayos superan el angulo de aceptacion y se pierden en el revestimiento, degradando la imagen.

## 4. Telescopios reflectores

Los telescopios de tipo Newton y Cassegrain usan espejos concavos como objetivos primarios. La ley de reflexion aplicada localmente en cada punto del espejo parabolico hace que todos los rayos paralelos al eje converjan en el foco. El angulo de incidencia [[theta_i]] respecto a la normal local varia segun la posicion en el espejo, pero [[theta_r]] siempre lo replica exactamente.

La ventaja sobre lentes refractoras es la ausencia de aberracion cromatica: la reflexion no depende de la longitud de onda, por lo que todos los colores convergen en el mismo punto focal. Los grandes telescopios como el James Webb usan espejos segmentados donde cada segmento aplica la ley de reflexion con su propia normal, y el alineamiento de todos los segmentos reconstruye la imagen final.

Variable dominante: el angulo de reflexion [[theta_r]] en cada punto del espejo, que determina la convergencia de los rayos en el foco.
Límite de validez: el modelo de reflexion geometrica falla si la superficie del espejo tiene imperfecciones mayores que una fraccion de la longitud de onda; aparecen efectos de dispersion que degradan la imagen.

## 5. Prismas de reflexion total en binoculares

Los prismas Porro de los prismaticos usan la reflexion total interna para invertir la imagen sin necesidad de recubrimiento metalico. La luz entra en el prisma de vidrio ([[n1]] de aproximadamente 1.52) y llega a la cara interna con angulo superior al critico (aproximadamente 42 grados para vidrio-aire), reflejandose totalmente.

La ventaja frente a espejos metalicos es doble: no hay perdida por absorcion en la capa reflectante y no hay degradacion con el tiempo (no hay recubrimiento que se oxide). Los prismaticos de alta gama utilizan vidrio BaK4 con indice [[n1]] de 1.57, que ofrece un angulo critico aun menor y un campo de vision mas uniforme sin oscurecimiento en los bordes.

Variable dominante: el indice de refraccion del prisma [[n1]], que determina el angulo critico y la calidad de la reflexion total.
Límite de validez: si la cara del prisma se contamina con liquido o suciedad que aumente [[n2]] localmente, el angulo critico sube y la reflexion total puede fallar en algunas zonas, produciendo manchas oscuras en la imagen.
`;export{e as default};
