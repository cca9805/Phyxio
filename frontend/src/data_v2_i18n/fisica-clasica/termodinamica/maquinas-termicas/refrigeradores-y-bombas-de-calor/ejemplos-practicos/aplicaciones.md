# Aplicaciones — Ejemplos prácticos

## 1. Refrigerador doméstico

El refrigerador doméstico es la aplicación más universal de la refrigeración por compresión de vapor. Un refrigerador estándar mantiene el compartimento principal a 4 grados Celsius ([[T_C]] de 277 K) y el congelador a menos 18 grados Celsius ([[T_C]] de 255 K), con el condensador rechazando calor al ambiente a 25 a 35 grados Celsius ([[T_H]] de 298 a 308 K). El compresor consume entre 80 y 200 W y el [[COP_real]] típico oscila entre 2 y 4 dependiendo del modelo, la carga y las condiciones ambientales. La etiqueta energética europea clasifica los refrigeradores según el consumo anual en kWh, que depende directamente del [[COP_real]] promedio a lo largo del año. Un refrigerador clase A consume aproximadamente 100 kWh al año, mientras que uno clase F puede consumir 400 kWh o más. La fracción de Carnot [[eta_Carnot]] típica es del 40 al 55 %, lo que indica que hay margen de mejora pero que los diseños actuales ya son razonablemente eficientes.

Variable dominante: [[COP_real]], que determina directamente el consumo eléctrico anual y la clasificación energética.

Límite de validez: el modelo de COP constante deja de ser válido cuando la temperatura ambiente supera los 43 grados Celsius o cuando la puerta se abre frecuentemente, ya que el compresor debe funcionar en ciclos de arranque y parada que reducen la eficiencia promedio.

## 2. Aire acondicionado residencial tipo split

El aire acondicionado split es la solución más extendida para climatización residencial. La unidad interior absorbe calor del espacio a 22 a 25 grados Celsius ([[T_C]] de 295 a 298 K) y la unidad exterior lo rechaza al ambiente a 35 a 45 grados Celsius ([[T_H]] de 308 a 318 K). Las potencias de compresor [[W_comp]] van desde 500 W en unidades de 2.5 kW de refrigeración hasta 3000 W en unidades de 10 kW. El [[COP_real]] en modo refrigeración oscila entre 3 y 5, y en modo bomba de calor entre 2.5 y 4.5. La normativa europea exige un SEER (seasonal energy efficiency ratio) mínimo que es esencialmente el COP promedio ponderado por las condiciones climáticas anuales. Los sistemas inverter con compresores de velocidad variable alcanzan [[eta_Carnot]] del 45 al 60 % porque adaptan la potencia a la demanda real, evitando los ciclos de encendido y apagado que degradan la eficiencia.

Variable dominante: [[T_H]] del condensador exterior, que en climas cálidos puede alcanzar 50 grados Celsius y reduce drásticamente el [[COP_real]].

Límite de validez: el modelo falla cuando la humedad relativa es muy alta y el evaporador dedica una fracción significativa de su capacidad a deshumidificar en lugar de enfriar, reduciendo el COP sensible efectivo.

## 3. Bomba de calor geotérmica

La bomba de calor geotérmica extrae calor del subsuelo a temperatura estable de 10 a 15 grados Celsius ([[T_C]] de 283 a 288 K) y lo entrega al sistema de calefacción a 35 a 55 grados Celsius ([[T_H]] de 308 a 328 K). La ventaja fundamental sobre las bombas aerotérmicas es que [[T_C]] es constante durante todo el año, lo que proporciona un [[COP_real]] estable entre 3.5 y 5.0 independientemente del clima exterior. El [[COP_Carnot]] de refrigeración oscila entre 7 y 14 dependiendo de la temperatura de entrega, y la [[eta_Carnot]] típica es del 35 al 50 %. La inversión inicial es mayor que en sistemas aerotérmicos (perforación de pozos, instalación de sondas), pero el ahorro energético a lo largo de 20 años compensa el sobrecoste en la mayoría de climas europeos. Para una vivienda con demanda de calefacción de 10 kW, la potencia eléctrica del compresor [[W_comp]] es de 2000 a 2850 W, y el calor extraído del subsuelo [[Q_C]] es de 7150 a 8000 W.

Variable dominante: [[T_H]] de entrega al sistema de calefacción. Sistemas de suelo radiante (35 grados Celsius) permiten COP mucho más altos que radiadores convencionales (55 grados Celsius).

Límite de validez: el modelo falla cuando el terreno se agota térmicamente tras años de extracción sin recuperación estival, reduciendo [[T_C]] progresivamente y degradando el COP.

## 4. Congelación industrial de alimentos

La congelación industrial opera a temperaturas de evaporación de menos 25 a menos 40 grados Celsius ([[T_C]] de 233 a 248 K) con condensación a 35 a 40 grados Celsius ([[T_H]] de 308 a 313 K). El salto térmico de 60 a 80 K es mucho mayor que en refrigeración doméstica, lo que reduce el [[COP_Carnot]] a valores de 3 a 4 y el [[COP_real]] a 1.2 a 2.0. La [[eta_Carnot]] baja al 30 a 50 % por las grandes irreversibilidades asociadas a compresores de múltiples etapas y diferencias de temperatura en los intercambiadores. Las potencias de compresor [[W_comp]] alcanzan 50 a 500 kW para túneles de congelación rápida. El consumo energético es un componente significativo del coste operativo, lo que hace que mejoras del 5 % en el [[COP_real]] representen ahorros de miles de euros anuales. El uso de sistemas de doble etapa con enfriamiento intermedio mejora el COP entre un 15 y 25 % respecto a la compresión simple.

Variable dominante: [[T_C]] del evaporador. Cada grado de reducción en [[T_C]] disminuye el [[COP_real]] aproximadamente un 3 a 4 %.

Límite de validez: el modelo de COP constante falla durante las fases transitorias de congelación donde la carga térmica varía rápidamente a medida que el producto cambia de fase.

## 5. Bomba de calor aerotérmica para agua caliente sanitaria

La bomba de calor aerotérmica para agua caliente sanitaria (ACS) extrae calor del aire ambiente o del aire de ventilación del edificio a 15 a 25 grados Celsius ([[T_C]] de 288 a 298 K) y calienta agua a 55 a 65 grados Celsius ([[T_H]] de 328 a 338 K) para uso doméstico. El [[COP_real]] típico es de 2.5 a 3.5, con [[COP_Carnot]] de 7 a 8 y [[eta_Carnot]] del 30 al 45 %. La potencia del compresor [[W_comp]] es de 400 a 700 W para depósitos de 200 a 300 litros. El ahorro respecto a un calentador eléctrico de resistencia (COP de 1) es del 60 al 70 % en la factura eléctrica. La normativa europea ErP (Energy-related Products) exige un COP mínimo para la certificación de estos equipos. El sistema es particularmente eficiente cuando se alimenta del aire extraído de ventilación a 20 grados Celsius, lo que mantiene [[T_C]] alto y estable durante todo el año, elevando el [[COP_real]] hasta 3.5.

Variable dominante: la diferencia [[T_H]] menos [[T_C]], que determina directamente el [[COP_Carnot]] y por tanto el techo del [[COP_real]].

Límite de validez: el modelo falla cuando la temperatura del aire fuente cae por debajo de 7 grados Celsius y se requiere descongelación frecuente del evaporador, reduciendo el COP efectivo un 15 a 25 %.
