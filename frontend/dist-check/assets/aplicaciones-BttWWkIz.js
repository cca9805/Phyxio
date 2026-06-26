const e=`# Aplicaciones: Poleas simples\r
\r
## 1. Elevación de cortinas y toldos\r
\r
Los sistemas de cortinas enrollables y toldos retráctiles emplean poleas simples para permitir que una persona eleve o desplace cargas relativamente pesadas con facilidad. En una cortina de gran tamaño para ventanales comerciales, el peso del tejido puede alcanzar varios kilogramos debido a la extensión y la densidad del material.\r
\r
La configuración típica utiliza una polea fija en la parte superior del marco para cambiar la dirección del esfuerzo, permitiendo al operario tirar hacia abajo o lateralmente para elevar la cortina. Esto es especialmente útil cuando el acceso directo a la parte superior es difícil o cuando se requiere operación desde el suelo. El mecanismo aprovecha que la fuerza muscular disponible hacia abajo es generalmente mayor que la fuerza de tracción hacia arriba.\r
\r
Variable dominante: El peso del tejido [[W]] determina si una polea fija es suficiente o si se requiere un sistema con ventaja mecánica adicional.
\r
Límite de validez: Cuando el peso del tejido supera aproximadamente 25 kg, la polea fija simple deja de ser práctica porque requiere fuerzas de tracción excesivas para operación manual cómoda.\r
\r
## 2. Gruas de construcción ligeras\r
\r
Las grúas portátiles utilizadas en obras de construcción pequeñas y reformas domésticas emplean configuraciones de poleas simples para elevar materiales de construcción como ladrillos, bolsas de cemento y vigas de madera. Estas grúas permiten que un trabajador eleve cargas de 50-100 kg desde el suelo hasta alturas de 2-3 pisos.\r
\r
El diseño típico combina una polea fija en la estructura superior con poleas móviles en el gancho de carga, creando configuraciones de ventaja mecánica 2:1 o 3:1 que permiten que trabajadores individuales manejen cargas que de otro modo requerirían dos o más personas. Esto aumenta la productividad y reduce el riesgo de lesiones por esfuerzo excesivo.\r
\r
Variable dominante: El número de tramos activos [[nSel]] determina la relación entre la capacidad de carga y la fuerza que debe ejercer el operario.\r
\r
Límite de validez: Cuando las cargas superan 150 kg o las alturas de elevación exceden 10 metros, los sistemas de poleas simples se vuelven inadecuados y se requieren sistemas de poleas compuestas o grúas motorizadas.\r
\r
## 3. Aparejos de veleros pequeños\r
\r
Los veleros de recreo y embarcaciones ligeras utilizan sistemas de poleas simples para ajustar la posición de las velas y controlar la tensión de los cabos. En un velero pequeño de 4-6 metros de eslora, el winch o cabrestante emplea poleas fijas y móviles para multiplicar la fuerza aplicada por el marinero.\r
\r
Cuando el viento ejerce presión sobre la vela, la fuerza necesaria para ajustar la escota puede ser considerable. Una configuración con polea móvil reduce la fuerza requerida a la mitad, permitiendo que un solo tripulante controle la vela incluso en condiciones de viento moderado. El sistema debe equilibrar la ventaja mecánica con la velocidad de operación, ya que mayor ventaja implica mayor recorrido de cabo.\r
\r
Variable dominante: La fuerza del viento sobre la vela [[W]], que varía con la velocidad del viento al cuadrado, determina si la configuración de poleas proporciona suficiente ventaja mecánica.\r
\r
Límite de validez: Cuando la fuerza del viento sobre la vela excede 500 N (aproximadamente viento fuerte de fuerza 6 en la escala Beaufort), los sistemas de poleas simples resultan insuficientes y se requieren sistemas de aparejos compuestos o winches mecanizados.\r
\r
## 4. Sistemas de rehabilitación física\r
\r
Los equipos de rehabilitación y fisioterapia emplean poleas simples para realizar ejercicios de fortalecimiento controlado. En máquinas de ejercicio de poleas, el paciente tira de un cable conectado a cargas calibradas mediante configuraciones de polea fija o móvil.\r
\r
La ventaja de este sistema es la capacidad de ajustar progresivamente la resistencia mediante cambios en la masa o en la configuración de poleas. Para pacientes en recuperación de lesiones musculares, una polea fija proporciona resistencia directa igual al peso, mientras que una polea móvil permite iniciar el entrenamiento con la mitad de la resistencia aparente, progresando gradualmente.\r
\r
Variable dominante: La fuerza de resistencia ajustable [[F]] permite calibrar la intensidad del ejercicio según las capacidades y limitaciones del paciente.\r
\r
Límite de validez: Cuando se requiere resistencia superior a 500 N o movimientos con aceleraciones controladas precisamente, los sistemas de poleas simples resultan insuficientes y se requieren máquinas con control electrónico de resistencia.\r
\r
## 5. Elevación de cargas en almacenes\r
\r
Los sistemas manuales de elevación en almacenes y tiendas de hardware emplean poleas simples para mover mercancía entre niveles. En establecimientos que no disponen de montacargas mecánicos, una polea móvil suspendida del techo permite que los trabajadores eleven cargas de 20-50 kg desde el área de recepción hasta estanterías elevadas.\r
\r
Este sistema es particularmente útil en comercios donde la frecuencia de elevación no justifica la inversión en equipos motorizados, pero la carga ocasional excede lo manejable por tracción directa. La configuración con polea móvil reduce la fuerza requerida a la mitad, permitiendo que trabajadores de diferente constitución física realicen la tarea de forma segura.\r
\r
Variable dominante: La relación entre el peso de la carga típica [[W]] y la capacidad de fuerza del trabajador promedio determina si una polea móvil es suficiente o si se requiere un sistema de poleas compuestas con mayor ventaja mecánica.\r
\r
Límite de validez: Cuando la frecuencia de operación supera 20 elevaciones por hora o las cargas exceden 75 kg, los sistemas manuales de poleas simples generan fatiga excesiva y se requieren sistemas motorizados para cumplir normativas de seguridad laboral.\r
`;export{e as default};
