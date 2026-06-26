const e=`# Modelos

## Modelo ideal

El modelo estándar del leaf de temperatura trata las escalas Celsius, kelvin y Fahrenheit como **relaciones lineales exactas** entre sí, con coeficientes de conversión constantes e independientes del valor de la temperatura. Bajo esta hipótesis, la conversión entre [[T_K]], [[T_C]] y [[T_F]] es siempre una función afín (lineal con desplazamiento), y [[DeltaT]] es la misma magnitud numérica tanto en Celsius como en kelvin.

Este modelo asume que las relaciones de conversión son **definiciones exactas del SI** y que el termómetro empleado para medir la temperatura es ideal (no altera el estado del sistema medido, tiene respuesta instantánea y es perfectamente lineal en su rango de uso). En la práctica de laboratorio de secundaria y bachillerato, todos los termómetros de uso habitual (mercurio, alcohol, digitales) se comportan con suficiente linealidad para que el modelo sea válido.

## Hipótesis

- **Linealidad de las escalas**: la relación entre cualquier par de escalas (Celsius-kelvin, Celsius-Fahrenheit) es lineal con coeficientes constantes. Esta hipótesis es exacta por definición del SI para Celsius-kelvin. Para Fahrenheit es también exacta por definición histórica.

- **Invariancia de los coeficientes con la temperatura**: los factores 273.15, 9/5 y 32 no dependen del valor de [[T_K]], [[T_C]] o [[T_F]]. Esto es cierto de forma absoluta porque estas son definiciones, no relaciones empíricas.

- **Termómetro ideal**: el dispositivo de medida no perturba el sistema, no tiene inercia térmica y su respuesta es instantánea. En la práctica, los termómetros reales tienen inercia y perturbación mínima, pero despreciable para la mayoría de aplicaciones.

- **Sistema en equilibrio térmico**: la temperatura medida es representativa de todo el sistema, lo que requiere que el sistema esté en equilibrio térmico interno. Si hay gradientes de temperatura dentro del sistema (un objeto con diferente temperatura en su interior y en su superficie), la temperatura medida localmente puede diferir de la media del sistema.

## Dominio de validez cuantitativo

Las relaciones de conversión son exactas por definición para cualquier temperatura en el rango físicamente realizable, esto es, [[T_K]] > 0 K. No hay un límite superior de validez.

Para termómetros de laboratorio de uso habitual, la precisión es del orden de ±0.1 °C para termómetros de mercurio calibrados y ±0.01 °C para termómetros digitales de precisión. En metrología primaria, los termómetros de gas de helio alcanzan incertidumbres de ±0.001 K.

El modelo de termómetro ideal introduce error despreciable cuando la masa del termómetro es mucho menor que la masa del sistema medido (menos de 1/100 en relación calórica). Para un termómetro de mercurio de 10 g en un recipiente de 1 litro de agua, la corrección de perturbación es del orden de 0.001 °C.

## Señales de fallo del modelo

- **[[T_K]] calculado negativo**: indica que [[T_C]] introducido es inferior a –273.15 °C, lo que viola el límite físico del modelo. Caso imposible en la práctica; casi siempre indica un error de datos.

- **Conversión Celsius-Fahrenheit que no da 32 para [[T_C]] igual a cero**: señal de que se omitió el término +32 o se aplicó el factor 9/5 de forma incorrecta.

- **[[DeltaT]] con signo contrario al proceso físico descrito**: si el enunciado dice que el sistema se calienta pero [[DeltaT]] es negativo, el orden de la resta está invertido (se calculó temperatura inicial menos final en lugar de final menos inicial).

- **Resultado [[T_K]] igual a [[T_C]]**: indica que se olvidó sumar el desplazamiento de 273.15 en la conversión Celsius-kelvin.

## Modelo extendido o alternativo

Para aplicaciones de alta precisión metrológica (laboratorios primarios, calibración de patrones), la Escala Internacional de Temperatura de 1990 (ITS-90) define la temperatura mediante puntos fijos de substancias puras (triple point of water at 273.16 K, etc.) y termómetros estándar (termómetro de resistencia de platino, termómetro de gas). Este modelo extiende la escala kelvin con mayor exactitud en rangos específicos.

Cuando al alumno se le introduce el concepto de temperatura en el nivel universitario avanzado, el modelo se generaliza: la temperatura termodinámica se define como la derivada de la energía interna respecto a la entropía a volumen constante. Esta definición microscópica es la base de la mecánica estadística y es independiente de cualquier relación de conversión.

Cuando conviene pasar al modelo extendido: cuando la precisión de la medida exige incertidumbre inferior a 0.01 K, cuando se trabaja a temperaturas por debajo de 14 K o por encima de 1235 K (donde la ITS-90 usa termómetros de radiación), o cuando se necesita una definición de temperatura válida para sistemas cuánticos fuera de equilibrio.

## Comparación operativa

| Criterio | Modelo estándar (conversión lineal) | Modelo extendido (ITS-90 o termodinámico) |
|---|---|---|
| Precisión típica | ±0.1 °C a ±0.01 °C según termómetro | < ±0.001 K en laboratorios primarios |
| Complejidad de cálculo | Una operación aritmética | Requiere tabla de calibración y ajuste |
| Rango de validez | Todo el rango físico (0 K a +∞) | Rango específico según termómetro patrón |
| Nivel educativo | ESO, Bachillerato, primer curso universitario | Metrología avanzada, termometría de investigación |
| Herramienta | Fórmula algebraica directa | Curva de calibración, tabla ITS-90 |
`;export{e as default};
