const e=`# Modelos de cambio de velocidad

## Modelo ideal

El modelo ideal de cambio de velocidad describe la propagacion de ondas electromagneticas en medios materiales transparentes mediante un indice de refraccion constante e isotropo. Este modelo simplificado considera que la velocidad de la onda se reduce uniformemente en todo el medio segun la relacion entre [[c_vacio]] y [[n_indice]].

En este modelo, el medio se caracteriza unicamente por su [[n_indice]], un valor adimensional mayor o igual a uno que cuantifica el factor de ralentizacion respecto al vacio. La velocidad resultante [[v_medio]] es constante en todo el material homogeneo y no depende de la direccion de propagacion ni de la intensidad de la onda.

La simplificacion central consiste en ignorar la estructura atomica discreta del material, tratandolo como un continuo con propiedades opticas uniformes. Se asume que el indice es independiente de la frecuencia de la onda, valido para rangos espectrales limitados lejos de resonancias electronicas.

## Hipotesis

- **Homogeneidad**: el material tiene composicion y densidad uniformes en todo su volumen, de modo que [[n_indice]] es constante en cualquier punto.

- **Isotropia**: las propiedades opticas son identicas en todas las direcciones. La velocidad de propagacion no depende de la orientacion relativa entre la onda y la estructura cristalina del material.

- **No dispersion**: el [[n_indice]] es independiente de la [[frecuencia_onda]] o [[lambda_vacio]]. Todos los colores de luz se propagan con la misma velocidad en el medio.

- **Linealidad**: la respuesta del medio es proporcional al campo electrico incidente. No hay efectos opticos no lineales como cambios de indice inducidos por alta intensidad luminosa.

- **Transparencia**: el medio no absorbe energia de la onda. La intensidad se mantiene constante durante la propagacion, sin atenuacion por efectos fotoelectricos ni termicos.

- **Optico delgado**: las interfaces entre medios son superficies planas sin rugosidad que pudiera causar difraccion o dispersion adicional de la luz.

Si se viola la homogeneidad, aparecen gradientes de indice que curvan los rayos de luz. Si se viola la no dispersion, diferentes colores viajan a distintas velocidades produciendo aberraciones cromaticas.

## Dominio de validez cuantitativo

El modelo de indice constante es valido cuando se cumplen las siguientes condiciones cuantitativas:

- La longitud de onda de la radiacion es mucho mayor que el espaciado interatomico del material (tipicamente mayor que diez nanometros). Para longitudes de onda menores, la aproximacion de medio continuo falla y debe usarse optica de cristales.

- La frecuencia de la onda esta alejada al menos un orden de magnitud de las frecuencias de resonancia electronica del material. Cerca de resonancias, el indice varia rapidamente con la frecuencia y puede volverse complejo.

- La intensidad de la onda es menor que diez a la doce vatios por metro cuadrado. A intensidades superiores, efectos no lineales como el enriquecimiento Kerr modifican el indice efectivo.

- El rango de temperatura mantiene el material en fase estable sin transiciones de fase. Cerca de puntos de fusion o evaporacion, el indice varia anomalamente.

- El error relativo del modelo respecto a datos experimentales es menor que el uno por ciento para vidrios opticos estandar en el rango visible.

## Senales de fallo del modelo

Los siguientes sintomas indican que el modelo de indice constante ya no aplica:

- **Separacion de colores**: cuando un haz blanco atraviesa el medio y se descompone en colores, evidenciando dispersion cromatica. El modelo de indice unico no puede describir este fenomeno.

- **Atemacion exponencial**: si la intensidad luminosa disminuye rapidamente con la distancia de manera exponencial, el medio absorbe energia y el modelo de transparencia falla.

- **Doble refraccion**: en ciertos cristales, un rayo incidente se divide en dos rayos emergentes con diferentes polarizaciones y velocidades. Esto indica anisotropia optica no capturada por el modelo isotropo.

- **Autoenfoque o defocusing**: a alta intensidad, el haz luminoso modifica su propia estructura transversal al converger o diverger espontaneamente. Este efecto no lineal viola la hipotesis de linealidad.

- **Variacion temporal del indice**: si el indice medido cambia con el tiempo sin cambio de temperatura, pueden existir procesos de fotoquimica o ionizacion que el modelo estatico no describe.

## Modelo extendido o alternativo

El modelo extendido incorpora dispersion cromatica mediante la relacion de dispersion de Sellmeier o Cauchy. Estas ecuaciones empiricas describen como [[n_indice]] varia con [[lambda_vacio]], permitiendo predecir la velocidad de cada color por separado.

Para medios anisotropos como cristales uniaxiales o biaxiales, el modelo extendido define un tensor de indices o indices principales en direcciones cristalograficas especificas. La velocidad de la onda depende entonces de la orientacion relativa entre la polarizacion y los ejes del cristal.

Cuando conviene pasar al modelo extendido: cuando se disenan sistemas opticos de alta precision donde la dispersion cromatica causa aberraciones inaceptables, o cuando se trabaja con cristales opticos donde la birrefringencia afecta el comportamiento del sistema.

Para medios absorbentes, el modelo extendido introduce un indice complejo donde la parte imaginaria describe la atenuacion de la onda. La velocidad de fase y la velocidad de grupo differen en estos medios, requiriendo descripcion electromagnetica completa.

En optica no lineal de alta intensidad, el indice efectivo depende de la intensidad luminosa segun una relacion de proporcionalidad cuadratica. Cuando conviene cambiar a este modelo: aplicaciones de laser ultraintensos, conmutacion optica rapida o generacion de armónicos.

## Comparacion operativa

| Caracteristica | Modelo ideal | Modelo extendido |
|---|---|---|
| Indice de refraccion | Constante para toda frecuencia | Variable con longitud de onda |
| Isotropia | Total, mismo indice en todas direcciones | Anisotropo posible con indices direccionales |
| Linealidad | Siempre lineal | No lineal a alta intensidad |
| Precision | Alta en rango espectral estrecho | Alta en todo el espectral visible |
| Complejidad computacional | Baja, una sola velocidad | Media, velocidad dependiente de frecuencia |
| Aplicaciones tipicas | Calculos basicos de optica geometrica | Diseno de lentes acromaticas, prismas |

El modelo ideal es preferible cuando se realizan estimaciones rapidas o cuando se trabaja con luz monocromatica lejos de resonancias. El modelo extendido es necesario para sistemas opticos de precision con luz policromatica o materiales cristalinos especiales.
`;export{e as default};
