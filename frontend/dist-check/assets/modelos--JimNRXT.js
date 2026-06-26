const e=`## Modelo ideal
El modelo ideal de este leaf asume señal sinusoidal pura, frecuencia estable y magnitudes bien definidas en régimen estacionario. Bajo ese marco, [[v_t]] puede describirse con amplitud [[Vmax]], ritmo [[omega]] o [[f]], escala temporal [[T]] y desfase [[phi]], mientras la lectura energética se resume con [[Vrms]], [[Irms]] y [[P]].

Este modelo es extremadamente útil porque permite convertir una señal compleja en una estructura manejable de parámetros físicos. No pretende agotar toda la realidad de red, pero sí establecer un lenguaje operativo común para análisis, medición y comunicación técnica.

## Hipótesis
Primera hipótesis: periodicidad estable. La señal debe repetir su patrón con variación pequeña en amplitud y fase dentro de la ventana de observación. Segunda hipótesis: linealidad práctica del entorno de medición, de modo que relaciones entre magnitudes no cambien de forma dominante durante el caso. Tercera hipótesis: predominio sinusoidal, es decir, componente fundamental claramente dominante frente a armónicos.

Además, se asume consistencia metrológica: [[Vrms]] e [[Irms]] provienen del mismo estado de operación, [[f]] y [[omega]] se convierten con trazabilidad explícita y [[phi]] mantiene una convención definida de referencia temporal.

## Dominio de validez cuantitativo
Como criterio operativo, el modelo básico es confiable cuando THD <= 5% y la deriva de frecuencia cumple 0.98 <= f_medida/f_nominal <= 1.02 durante la medición principal. En ese régimen, la conversión de senoide pura y la estimación de potencia activa mantienen error acotado para uso didáctico y diagnóstico preliminar.

También conviene exigir estabilidad de amplitud: variación relativa de [[Vmax]] menor o igual al 5 por ciento en la ventana analizada. Si estas condiciones no se cumplen, la interpretación puramente sinusoidal deja de ser suficiente y el valor eficaz debe evaluarse con definición general, no solo con fórmula de senoide pura.

## Señales de fallo del modelo
Una primera señal de fallo aparece cuando las conversiones básicas dan resultados incompatibles entre sí, por ejemplo cuando [[T]] no coincide con 1/[[f]] dentro del error instrumental esperado. Otra señal clara es obtener [[P]] físicamente inverosímil respecto de [[Vrms]] e [[Irms]] reportadas.

También falla el modelo cuando osciloscopio y medidor RMS describen comportamientos que no pueden reconciliarse con una forma sinusoidal dominante. Si la señal muestra recortes, asimetrías o armónicos fuertes, las relaciones cerradas del leaf siguen siendo útiles como referencia, pero ya no como representación suficiente.

## Modelo extendido o alternativo
Cuando el modelo ideal no basta, el paso natural es introducir análisis armónico y definición integral de RMS sobre la forma real de onda. Ese modelo extendido conserva el papel de [[f]], [[omega]] y [[phi]], pero distribuye la energía entre componentes espectrales y evita sobrerrepresentar la fundamental.

En contextos de electrónica de potencia o cargas no lineales, esta extensión no es opcional. Permite distinguir si el problema principal es fase de la fundamental o contenido armónico. Esa diferencia es clave para corregir potencia activa, pérdidas y calidad de red con acciones efectivas.

La transición explícita es esta: cuando THD > 5% o cuando la relación f_medida/f_nominal queda fuera del intervalo 0.98 a 1.02, conviene abandonar el modelo mínimo y pasar al modelo extendido antes de tomar decisiones de diseño o corrección.

## Comparación operativa
El modelo ideal es superior para aprendizaje inicial, validación de unidades y lectura física rápida. El modelo extendido es superior para especificación fina, diagnóstico de distorsión y decisiones de ingeniería con tolerancias exigentes.

Elegir uno u otro depende del objetivo. Si la meta es construir intuición y coherencia básica, el ideal es suficiente. Si la meta es certificar desempeño real con señal no ideal, el extendido es el marco correcto.
`;export{e as default};
