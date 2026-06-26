const e=`## 1. Válvula de seguridad en calderas industriales

Una caldera de vapor industrial es esencialmente un recipiente metálico que somete agua y vapor a temperaturas y presiones elevadas. Cuando la válvula de salida se cierra accidentalmente y el quemador continúa aportando calor, el vapor actúa como gas en un proceso isocórico: el volumen del recipiente es constante y toda la energía térmica va a incrementar [[DeltaU]], aumentando la temperatura y la presión del vapor de forma proporcional.

La presión sube linealmente con la temperatura absoluta según la ley de Gay-Lussac isocórica, y puede superar el límite de ruptura del recipiente si no hay un mecanismo de alivio. Las válvulas de seguridad están diseñadas para abrirse cuando la presión supera un umbral, convirtiendo el proceso de isocórico a isobárico o liberando vapor al exterior. El cálculo de ese umbral parte directamente del análisis del proceso isocórico: para un volumen dado de vapor con [[n]] moles y calor específico [[Cv]], el incremento de presión por grado de temperatura se conoce con exactitud y permite dimensionar la válvula.

Variable dominante: la temperatura absoluta del vapor, que determina la presión ejercida sobre las paredes del recipiente.
Límite de validez: el modelo isocórico es válido mientras la válvula permanezca cerrada y no haya cambio de fase del vapor (condensación parcial alteraría el cálculo de [[Cv]] efectivo).

---

## 2. Motor de explosión ciclo Otto (fase de combustión)

En el ciclo Otto ideal de un motor de gasolina, la fase de combustión (quema de la mezcla aire-gasolina) se modela como un proceso isocórico. El pistón se encuentra momentáneamente en el punto muerto superior, donde su velocidad es cero, y la combustión ocurre en un tiempo tan breve que el volumen de la cámara puede considerarse constante durante ese instante.

Durante esta fase isocórica, la energía química liberada en la combustión se transforma en [[DeltaU]] del gas, elevando bruscamente su temperatura y presión sin que el pistón haya avanzado. Es precisamente esta presión elevada la que después empuja el pistón hacia abajo en la carrera de expansión (que es un proceso distinto, no isocórico). El trabajo útil del motor procede de la carrera de expansión posterior, no de la fase de combustión isocórica en sí. La eficiencia del ciclo Otto ideal depende directamente de la relación entre la energía añadida en la fase isocórica y el trabajo extraído en la expansión.

Variable dominante: la cantidad de calor de combustión aportada durante la fase isocórica, que determina el incremento de presión y temperatura inicial de la carrera de expansión.
Límite de validez: el modelo isocórico de la combustión es válido cuando la velocidad del motor es suficientemente alta para que el tiempo de combustión sea mucho menor que el tiempo de una carrera del pistón; a baja velocidad la combustión se produce con cierto desplazamiento del pistón y el proceso ya no es estrictamente isocórico.

---

## 3. Almacenamiento de gases comprimidos en cilindros

Los cilindros de gas comprimido (oxígeno medicinal, hidrógeno industrial, gas natural vehicular) son recipientes de acero o aleaciones de alta resistencia diseñados para mantener el gas a alta presión. Cuando estos cilindros están almacenados en un entorno con variación de temperatura (sol directo en exterior, locales no climatizados), el gas experimenta un proceso isocórico: el volumen del cilindro no cambia y la presión varía proporcionalmente a la temperatura absoluta.

Un cilindro de oxígeno medicinal cargado a 150 bar a 20 °C (293 K) puede alcanzar presiones de aproximadamente 164 bar si se expone a una temperatura ambiente de 50 °C (323 K), porque la razón entre 323 y 293 es 1.10. Aunque el incremento relativo parece pequeño, en presiones absolutas altas ese 10 % representa 15 bar adicionales que deben estar dentro del margen de seguridad del cilindro. Los coeficientes de seguridad de diseño para cilindros de gas comprimido incluyen explícitamente el margen de sobrepresión isocórica por variación de temperatura ambiental.

Variable dominante: la temperatura ambiental a la que está expuesto el cilindro, que determina directamente la presión interna del gas por la ley isocórica de Gay-Lussac.
Límite de validez: el modelo de gas ideal isocórico es válido mientras el gas se mantenga en fase gaseosa; si la temperatura desciende por debajo del punto de licuación del gas (por ejemplo, el propano se licua a 0 °C a 1 atm), el proceso deja de ser isocórico y la relación presión-temperatura cambia radicalmente.

---

## 4. Termometría de gas a volumen constante

El termómetro de gas a volumen constante es el instrumento de referencia de la escala de temperatura termodinámica. Consiste en un bulbo de vidrio o acero lleno de un gas poco reactivo (generalmente helio o nitrógeno) conectado a un manómetro, con un mecanismo para mantener el volumen del gas estrictamente constante durante la medición. La temperatura se determina midiendo la presión del gas y aplicando la proporcionalidad isocórica entre presión y temperatura absoluta.

Este termómetro se usa como patrón primario de temperatura porque su comportamiento corresponde directamente a la definición termodinámica de temperatura: la presión de un gas ideal a volumen constante es proporcional a la temperatura absoluta, con una proporcionalidad que no depende del tipo de gas en el límite de gas ideal. El termómetro de gas a volumen constante permite medir temperaturas con una incertidumbre inferior a un milésimo de kelvin en laboratorios de metrología, basándose exclusivamente en el análisis isocórico.

Variable dominante: la presión del gas, que actúa como señal termométrica directa proporcional a la temperatura absoluta.
Límite de validez: el modelo isocórico perfecto se aplica cuando el volumen del bulbo se mantiene rigurosamente constante; en la práctica, la dilatación térmica del bulbo introduce una corrección sistemática pequeña que los laboratorios de metrología calculan y compensan.

---

## 5. Análisis de accidentes por sobrecalentamiento de aerosoles

Los envases de aerosol (desodorante, laca, pintura en spray) contienen una mezcla de propelente gaseoso y producto bajo presión. Si el envase se expone a fuentes de calor intenso (interior de un automóvil al sol en verano, proximidad de llama), el gas propelente experimenta un proceso isocórico porque el envase metálico no se deforma de forma apreciable. La presión interna sube proporcionalmente a la temperatura absoluta hasta que puede superar la presión de rotura de la lata, con riesgo de explosión.

Los organismos de seguridad (normas UN y ADR para transporte de mercancías peligrosas) prohíben exponer envases de aerosol a temperaturas superiores a 50 °C precisamente por este mecanismo. A 50 °C (323 K) frente a la temperatura de llenado de 20 °C (293 K), la presión interna se incrementa en la razón de 323 a 293, aproximadamente un 10 %. Dado que los aerosoles se llenan con presiones de diseño de 3 a 8 bar, ese incremento del 10 % puede acercar la presión al límite de ruptura del envase si este ya ha sufrido alguna imperfección estructural.

Variable dominante: la temperatura absoluta del gas propelente en el interior del envase, que determina la presión ejercida sobre la pared metálica.
Límite de validez: el análisis isocórico puro es válido mientras el propelente permanezca en fase gaseosa; si parte del propelente está en fase líquida (como ocurre en condiciones normales de almacenamiento), la relación entre temperatura y presión sigue la curva de presión de vapor del propelente, que es más compleja que la ley isocórica lineal.
`;export{e as default};
