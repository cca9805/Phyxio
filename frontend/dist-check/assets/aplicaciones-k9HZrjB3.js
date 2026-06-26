const e=`# Aplicaciones

## 1. Selección del diferencial adecuado para baños y zonas húmedas

El baño es el espacio doméstico con mayor concentración de riesgo eléctrico: superficies conductoras (bañera metálica, ducha, tuberías), agua que reduce drásticamente [[R_cuerpo]] y usuarios que pueden estar simultáneamente en contacto con la tierra (suelo mojado). Un fallo de aislamiento en un calentador eléctrico de bañera de 1000 W puede poner la fase a 230 V en contacto con la masa metálica.

En un adulto bajo la ducha, [[R_cuerpo]] puede descender a 500–800 Ω. Aplicando la Ley de Ohm con una tensión de 230 V y una resistencia de 600 Ω se obtiene una corriente corporal de 383 mA —más de 12 veces el umbral de fibrilación de 30 mA. El diferencial de 30 mA dispararía ante esta corriente, pero si el tiempo de respuesta es 40 ms y la corriente es 383 mA, la probabilidad de fibrilación ventricular en esos 40 ms es estadísticamente alta.

IEC 60364-7-701 exige diferencial de 30 mA como mínimo en baños, y recomienda 10 mA para el circuito de la bañera/ducha en instalaciones nuevas. Con 10 mA la [[I_cuerpo]] mínima que activa el diferencial es 3 veces menor que con 30 mA: para la misma corriente corporal de 383 mA, el [[margen]] de seguridad en tiempo de disparo mejora, pero sobre todo el diferencial detectaría fugas de contacto indirecto mucho más pequeñas antes de que se conviertan en riesgo directo.

Variable dominante: [[R_cuerpo]] (determina si la corriente corporal supera el umbral del diferencial con [[margen]] suficiente para el tiempo de disparo).

Límite de validez: la protección diferencial es eficaz solo si el circuito de tierra de la instalación está correctamente ejecutado (< 37 Ω según REBT); sin tierra efectiva, el diferencial no detecta la fuga.

## 2. Evaluación de riesgo en mantenimiento eléctrico doméstico

Un particular decide sustituir un enchufe deteriorado sin cortar la corriente porque "solo toca el neutro y la tierra, no la fase". Sin embargo, en una instalación con neutro rotado o conexiones intercambiadas en el cuadro, lo que aparenta ser neutro puede llevar tensión de fase. Con las manos secas (donde [[R_cuerpo]] es de unos 50 000 Ω) y una tensión de contacto [[V_contacto]] de 230 V, la corriente corporal sería de unos 4.6 mA —molesta pero no peligrosa. Sin embargo, si las manos están húmedas por trabajo en zona de cocina (donde [[R_cuerpo]] baja a unos 3 000 Ω), la corriente sube a unos 76.7 mA, bien dentro de la zona de fibrilación.

El protocolo correcto es siempre verificar ausencia de tensión con un comprobador de tensión antes de tocar ningún conductor, independientemente de cuál se crea que es el neutro. El uso del comprobador es la única forma de garantizar una tensión de contacto [[V_contacto]] nula antes de iniciar el trabajo.

El [[margen]] de protección del diferencial de 30 mA en el caso húmedo sería de aproximadamente 0.39 (valor inferior a 1): el diferencial no protegería porque la corriente supera su umbral antes de que pueda considerarse seguro el contacto.

Variable dominante: [[V_contacto]] (la incertidumbre sobre qué conductor tiene tensión es el factor de riesgo primario en mantenimiento sin comprobación previa).

Límite de validez: este análisis asume contacto unipolar (fase a tierra a través del cuerpo); los contactos bipolares (fase a neutro a través del cuerpo) no se detectan con el diferencial y son igualmente letales.

## 3. Diseño de instalación en locales con riesgo aumentado (garajes, talleres)

Un garaje doméstico combina suelos de hormigón húmedo, herramientas eléctricas portátiles con cables desgastados, y usuarios que pueden tocar simultáneamente una herramienta con fallo de aislamiento y una tubería metálica de agua o calefacción conectada a tierra. Este escenario es funcionalmente idéntico al del baño en términos de riesgo: [[R_cuerpo]] reducida por sudor y entorno húmedo, y [[V_contacto]] potencialmente igual a 230 V si el aislamiento de la herramienta falla.

Las medidas de protección que reducen el riesgo operan directamente sobre las variables de la ecuación de [[I_cuerpo]]. Reducir [[V_contacto]] mediante el uso de herramientas a 24 V o 48 V (transformadores de seguridad SELV) baja la corriente por debajo de 24 mA o 48 mA respectivamente. Instalar un diferencial de 30 mA con tiempo de respuesta < 20 ms garantiza desconexión antes del umbral de fibrilación para corrientes entre 30 mA y 100 mA.

Los talleres profesionales con maquinaria trifásica requieren adicionalmente verificar que la tensión de contacto en caso de fallo de fase sea la tensión de fase a tierra (230 V), no la tensión de línea a línea (400 V), que produciría corrientes letales incluso con [[R_cuerpo]] alta.

Variable dominante: [[I_cuerpo]] resultante, que debe mantenerse por debajo de 30 mA mediante combinación de reducción de [[V_contacto]] (SELV cuando sea posible) y diferencial de alta sensibilidad.

Límite de validez: las herramientas con doble aislamiento (clase II) eliminan la necesidad de tierra de protección pero no reducen el riesgo de contacto directo con conductores activos; el diferencial sigue siendo necesario para detectar fugas en instalación fija.

## 4. Inspección y verificación de instalaciones antiguas

Una instalación doméstica de 30 años puede tener cables con aislamiento PVC envejecido y agrietado, conexiones oxidadas y tomas de tierra que no cumplen la resistencia máxima de 37 Ω exigida por REBT. El deterioro de [[R_cuerpo]] del aislamiento (no del cuerpo humano, sino de los cables) acumula corrientes de fuga que consumen el [[margen]] del diferencial.

Si la fuga acumulada de la instalación es de 20 mA y el diferencial general es de 30 mA, el [[margen]] efectivo disponible para detectar un contacto accidental es solo 10 mA. Un contacto con [[R_cuerpo]] = 10 000 Ω (manos secas) a 230 V produce una corriente [[I_cuerpo]] de 23 mA: la corriente corporal más la fuga acumulada da 43 mA, superando el umbral de 30 mA y produciendo un disparo. Pero en una situación con el diferencial en mala condición por envejecimiento (tiempo de respuesta de 100 ms), la exposición de 23 mA durante 100 ms puede producir efectos musculares graves.

La verificación periódica requiere medir la corriente de fuga total de la instalación (debe ser < 15 mA en instalaciones con diferencial de 30 mA) y medir la resistencia de tierra (< 37 Ω). Calcular el [[margen]] efectivo en función de la sensibilidad [[I_diferencial]], la fuga de la instalación y la corriente corporal esperada para el peor caso de contacto relevante.

Variable dominante: [[I_diferencial]] efectivo disponible (umbral del diferencial menos la corriente de fuga acumulada de la instalación).

Límite de validez: la medición de fuga de instalación debe hacerse con todos los equipos conectados y en funcionamiento, ya que la fuga de condensadores de filtro solo aparece con los equipos encendidos.

## 5. Protección de usuarios vulnerables: niños y personas con marcapasos

Los umbrales fisiológicos de [[I_segura]] de IEC 60479 están definidos para adultos sanos. Los niños tienen masa corporal menor y mayor proporción de agua corporal, lo que reduce [[R_cuerpo]] y rebaja los umbrales de peligro fisiológico. Las personas con marcapasos cardíacos son especialmente vulnerables porque la corriente externa puede interferir con el ritmo eléctrico artificial del marcapasos a corrientes tan bajas como 1–2 mA.

Para hogares con niños pequeños, las medidas de protección combinan reducción de [[V_contacto]] (cubre de protección en enchufes, que eliminan el contacto accidental) con diferencial de alta sensibilidad (10 mA). En locales infantiles (guarderías, escuelas), la normativa exige tomas con obturador y diferenciales de 10 mA para todos los circuitos accesibles.

Para personas con marcapasos, el umbral de [[I_cuerpo]] que puede interferir con el dispositivo es mucho menor que el de fibrilación: se estiman riesgos de interferencia a corrientes de 1–5 mA en frecuencias de 50 Hz. Esto implica que incluso contactos que el diferencial de 30 mA no detectaría (corrientes de 5 mA < 30 mA) pueden representar riesgo para estas personas. La medida más efectiva en este caso es la reducción de [[V_contacto]] mediante sistemas SELV (tensiones de seguridad extra-baja, < 50 V) en las zonas donde el usuario pasa más tiempo.

Variable dominante: [[I_segura]] específica del usuario (difiere significativamente del valor estándar para usuarios vulnerables), que determina el diferencial necesario y la tensión máxima admisible.

Límite de validez: el modelo de Ohm para [[I_cuerpo]] sigue siendo válido, pero el umbral de peligro [[I_segura]] debe ajustarse individualmente; el análisis estándar con los umbrales IEC 60479 de adultos sanos puede subestimar el riesgo para usuarios vulnerables en un factor 5–10.
`;export{e as default};
