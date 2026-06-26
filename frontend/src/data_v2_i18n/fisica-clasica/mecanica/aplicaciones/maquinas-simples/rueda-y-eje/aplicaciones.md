# Aplicaciones de la rueda y el eje

## 1. Torno manual de pozo

**Contexto**: Extracción de agua de pozos rurales mediante un torno de madera accionado a mano. La manivela constituye la rueda; el cilindro de enrollamiento del cable es el eje.

**Magnitudes clave**: [[FR]] (fuerza en la manivela), [[Fr]] (peso del cubo con agua), [[R]] (radio de la manivela), [[r]] (radio del cilindro), [[VM_real]].

**Análisis**: Con [[R]] de 35 cm y [[r]] de 3 cm, [[VM]] de 11,7. Con [[eta]] de 0,85, [[VM_real]] de 9,9. Para subir [[Fr]] de 150 N (15 kg de agua), [[FR]] de 15 N. El operador recorre 11,7 veces más arco que el cubo.

Variable dominante: [[VM_real]] — determina la fuerza máxima de carga que puede manejar un único operador.

Límite de validez: Modelo válido para giro lento (menos de 1 rev/s) y cubo de masa conocida constante. Si la cuerda se enrolla en varias capas, [[r]] efectivo varía y la ventaja mecánica cambia con la posición.

---

## 2. Volante de válvula industrial

**Contexto**: Apertura y cierre de válvulas de compuerta en tuberías industriales de gran diámetro. El volante actúa como rueda; el vástago roscado como eje.

**Magnitudes clave**: [[FR]] (esfuerzo del operador), [[Fr]] (resistencia del vástago), [[R]] (radio del volante), [[r]] (radio del vástago), [[eta]].

**Análisis**: Válvulas de DN 300 tienen vástagos de radio [[r]] de unos 10 mm. Un volante de [[R]] de 20 cm da [[VM]] de 20. Con [[eta]] de 0,70 (roscas con algo de corrosión), [[VM_real]] de 14. Para [[Fr]] de 800 N, [[FR]] de 57 N: manejable por un técnico.

Variable dominante: [[R]] — el único parámetro de diseño accesible sin cambiar la válvula existente.

Límite de validez: El modelo supone [[eta]] constante. En válvulas oxidadas, el rozamiento estático al inicio puede duplicar o triplicar [[Fr]] efectiva; en ese caso el modelo subestima el esfuerzo necesario para arrancar el giro.

---

## 3. Destornillador de mango ancho

**Contexto**: Herramienta de mano donde el mango ancho actúa como rueda y el vástago metálico como eje. El diseño busca maximizar el torque transmitido a la cabeza del tornillo.

**Magnitudes clave**: [[FR]] (fuerza de la palma sobre el mango), [[Fr]] (resistencia del tornillo), [[R]] (radio del mango), [[r]] (radio del vástago), [[VM]].

**Análisis**: Mango de [[R]] de 18 mm, vástago de [[r]] de 3 mm da [[VM]] de 6. Con [[eta]] de 0,95 (baja fricción en mango ergonómico), [[VM_real]] de 5,7. Una palma aplicando 20 N genera 114 N sobre la cabeza del tornillo. Un destornillador de mango fino ([[R]] de 8 mm) solo daría 53 N: el mango ancho es 2,1 veces más efectivo.

Variable dominante: [[R]] — el diseño ergonómico del mango es la principal palanca de mejora.

Límite de validez: Válido para apriete lento. A velocidades altas de atornillado eléctrico, la inercia rotacional del vástago modifica el balance de torques y el modelo estático ya no aplica.

---

## 4. Cabrestante de barco

**Contexto**: Dispositivo rotatorio sobre cubierta usado para tensar amarras y cobrar cadenas de ancla. El operador inserta palancas en los agujeros del tambor (rueda) y hala; el tambor (eje) enrolla el cabo.

**Magnitudes clave**: [[FR]] (fuerza por palanca), [[Fr]] (tensión del cabo), [[R]] (longitud de la palanca), [[r]] (radio del tambor), [[sR]] (recorrido de la palanca), [[sr]] (cabo cobrado), [[eta]].

**Análisis**: Con palancas de [[R]] de 60 cm y tambor de [[r]] de 8 cm, [[VM]] de 7,5. Con [[eta]] de 0,80, [[VM_real]] de 6. Para [[Fr]] de 3000 N (tensión del cabo), cada palanca requiere 500 N. Con dos operarios alternados, el sistema puede mantener 6000 N de tensión. Por vuelta completa, el recorrido de palanca es aproximadamente 3,77 m y se cobra unos 0,50 m de cabo.

Variable dominante: [[sR]] y [[sr]] — en aplicaciones de cobrado de cabo, el recorrido por vuelta determina la velocidad de operación; a mayor [[r]], más cabo por vuelta pero menos ventaja mecánica.

Límite de validez: El modelo supone tensión constante del cabo. En la práctica, la resistencia aumenta a medida que el ancla sale del fondo (mayor peso suspendido), así que [[Fr]] no es constante y el problema se convierte en un balance dinámico.

---

## 5. Manivela de motor de arranque manual

**Contexto**: Arranque manual de motores de combustión interna antiguos (y generadores de emergencia actuales) mediante una manivela enganchada al cigüeñal.

**Magnitudes clave**: [[FR]] (fuerza del operador en la manivela), [[Fr]] (resistencia del motor en el punto muerto superior), [[R]] (longitud de la manivela), [[r]] (radio del muñón del cigüeñal), [[eta]], [[VM_real]].

**Análisis**: Manivela de [[R]] de 30 cm, muñón de [[r]] de 4 cm da [[VM]] de 7,5. Con [[eta]] de 0,78 (resistencia de aceite frío), [[VM_real]] de 5,85. La resistencia al arranque puede ser [[Fr]] de 1200 N; [[FR]] necesaria de 205 N. Esto es elevado para un brazo extendido, lo que explica los accidentes históricos con arranques en retroceso.

Variable dominante: [[eta]] — un aceite de viscosidad inadecuada puede reducir [[eta]] a niveles bajos, elevando [[FR]] hasta hacer el arranque imposible para un operador solo.

Límite de validez: El modelo ideal es solo orientativo. En el arranque real, la resistencia [[Fr]] varía cíclicamente con el ángulo del cigüeñal (efecto de compresión), y la velocidad de giro influye en el rozamiento del aceite.
