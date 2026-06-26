const e=`## 1. Calefacción doméstica mediante radiadores de agua

Los sistemas de calefacción central por agua caliente son una de las aplicaciones más directas del calor sensible. El agua se calienta en una caldera hasta temperaturas típicas entre 60 °C y 80 °C y circula por radiadores metálicos distribuidos por la vivienda. En cada radiador, el agua cede calor al aire de la habitación y regresa a la caldera con una temperatura de retorno entre 10 °C y 20 °C inferior a la de impulsión.

La cantidad de calor cedido en cada radiador depende linealmente de la masa de agua que circula por unidad de tiempo, del calor específico del agua y de la diferencia de temperatura entre impulsión y retorno. El agua es insustituible como fluido caloportador doméstico porque su [[c_esp]] elevado le permite transportar grandes cantidades de [[Q]] con caudales relativamente pequeños y a temperaturas moderadas, lo que reduce el riesgo térmico para los ocupantes y mejora la eficiencia energética del sistema.

Variable dominante: la diferencia de temperatura entre impulsión y retorno del agua, que determina directamente la potencia térmica cedida por el circuito.
Límite de validez: el modelo de calor sensible con [[c_esp]] constante es plenamente válido en el rango 40–90 °C del agua líquida; fuera de ese rango o si se produce vaporización parcial, el modelo debe incorporar el calor latente de vaporización.

## 2. Esterilización en autoclave médica

Las autoclaves utilizan vapor saturado a 121 °C (a una presión de aproximadamente 2 atm) para esterilizar instrumental médico. El proceso involucra dos fenómenos de transferencia de calor: primero, la condensación del vapor sobre la superficie del instrumental (calor latente de condensación, con [[L]] de unos 2 200 000 J/kg), y segundo, el calentamiento del propio instrumental desde la temperatura inicial hasta 121 °C (calor sensible). El calor cedido por el vapor durante la condensación es muy superior al calor sensible posterior.

La eficacia esterilizante no depende solo de la temperatura alcanzada sino de la cantidad de energía térmica entregada a los microorganismos. El uso de vapor en lugar de aire caliente seco permite transferir mucho más [[Q]] por unidad de tiempo a la misma temperatura, porque el calor latente de condensación libera energía de forma masiva en el momento en que el vapor contacta la superficie fría.

Variable dominante: el calor latente de condensación del vapor, que representa más del 90 % del calor total transferido al instrumental en la fase inicial de contacto.
Límite de validez: el modelo de calor latente es válido mientras el vapor permanezca saturado y la presión sea estable; si la presión desciende por debajo de 2 atm, la temperatura de condensación baja de 121 °C y puede comprometerse la esterilización.

## 3. Refrigeración por evaporación en organismos vivos

La sudoración es el mecanismo principal de disipación de calor en mamíferos durante el ejercicio intenso o en ambientes calurosos. El fundamento es el calor latente de vaporización del agua: cada kilogramo de sudor que se evapora extrae aproximadamente 2 430 000 J del organismo a 37 °C, sin que sea necesario bajar la temperatura corporal para liberar esa energía.

La regulación térmica por evaporación es extraordinariamente eficiente precisamente porque el [[L]] del agua es muy alto. Un litro de sudor evaporado extrae unos 2 430 kJ, equivalentes a la energía necesaria para elevar 58 kg de agua en un kelvin. Sin este mecanismo, el cuerpo humano no podría mantener la temperatura central estable durante el ejercicio prolongado. La eficacia del proceso depende de la humedad relativa ambiental: cuando la humedad es alta, la evaporación se dificulta y [[Q]] no se transfiere eficientemente hacia el entorno.

Variable dominante: el calor latente de vaporización del agua corporal, que determina la cantidad de [[Q]] extraído por kilogramo de sudor evaporado.
Límite de validez: el modelo es válido cuando la evaporación es completa; en ambientes de alta humedad relativa (superior al 80 %), la tasa de evaporación disminuye y el modelo de calor latente sobreestima el [[Q]] efectivamente extraído por unidad de masa de sudor.

## 4. Almacenamiento de energía solar térmica con materiales de cambio de fase

Los sistemas de almacenamiento solar de alta eficiencia utilizan materiales de cambio de fase (PCM, del inglés phase change materials) que absorben grandes cantidades de [[Q]] al fundirse durante el día y las liberan al solidificarse durante la noche. Materiales como la parafina (con [[L]] de fusión entre 150 000 y 250 000 J/kg a temperaturas de 20–70 °C) o las sales de hidratación (nitrato de sodio, con [[L]] de unos 170 000 J/kg) permiten almacenar densidades de energía mucho mayores que el agua líquida calentada en el mismo rango de temperatura.

Para el agua líquida entre 20 °C y 60 °C, la densidad de energía es [[m]] · [[c_esp]] · [[DeltaT]], es decir 4186 × 40 ≈ 167 000 J/kg. Un PCM con [[L]] de fusión a 45 °C almacena una cantidad equivalente en un solo cambio de estado, ocupando el mismo volumen pero sin requerir variación de temperatura durante la carga y descarga, lo que facilita la integración con captadores solares de baja temperatura.

Variable dominante: el calor latente de fusión del material de cambio de fase, que determina la densidad de almacenamiento energético del sistema.
Límite de validez: el modelo de calor latente con [[L]] constante es válido a presión atmosférica y en el rango de temperatura de la transición; si la temperatura de operación supera el punto de fusión en varios grados, el sistema pasa a calor sensible con un [[c_esp]] distinto al de la fase sólida.

## 5. Templado y recocido de metales en tratamientos térmicos industriales

Los tratamientos térmicos de metales —templado, recocido, normalizado— consisten en ciclos controlados de calentamiento y enfriamiento que modifican la microestructura y las propiedades mecánicas del material. El calor aportado durante el calentamiento sigue el modelo de calor sensible mientras no hay cambio de fase; al cruzar temperaturas de transformación de fase (como la transición austenítica del acero, a unos 723 °C), aparece un calor latente asociado a la reorganización cristalina.

La velocidad de enfriamiento posterior determina la dureza final del material: un enfriamiento rápido en agua o aceite (temple) fija una microestructura martensítica de alta dureza, mientras que un enfriamiento lento en horno (recocido) produce una microestructura ferrítico-perlítica más blanda y dúctil. La energía total intercambiada en cada ciclo, calculada como la suma de los calores sensibles de cada tramo y los calores latentes de cada transformación de fase, puede alcanzar varios MJ por kilogramo de material, y debe controlarse con precisión para garantizar las propiedades mecánicas del producto final.

Variable dominante: la tasa de transferencia de calor durante el enfriamiento, que controla la velocidad de transformación microestructural y por tanto la dureza y tenacidad del material tratado.
Límite de validez: el modelo de calor sensible con [[c_esp]] constante introduce errores superiores al 10 % en rangos de temperatura de varios cientos de kelvin para el acero; en esos casos es necesario usar valores tabulados de [[c_esp]] en función de la temperatura y sumar los calores latentes de cada transformación de fase identificada en el diagrama de equilibrio del material.
`;export{e as default};
