# Modelos — Ciclos Brayton y Rankine

## Modelo ideal

El modelo de referencia para ambos ciclos asume procesos internamente reversibles, fluido de trabajo ideal y componentes sin pérdidas. Para el ciclo Brayton, esto significa cuatro procesos: compresión adiabática reversible (1→2), adición de calor isobárica (2→3), expansión adiabática reversible (3→4) y rechazo de calor isobárico (4→1). Para el Rankine estándar: bombeo adiabático reversible (1→2), calentamiento isobárico con cambio de fase (2→3→4), expansión adiabática reversible (4→5) y condensación isobárica (5→1).

## Hipótesis

Las hipótesis que sustentan el modelo ideal son:

- Cada componente (compresor, turbina, bomba) opera con eficiencia isentrópica del 100 %.
- No hay caídas de presión en la cámara de combustión, la caldera ni el condensador.
- El fluido de trabajo es un gas ideal de propiedades constantes (Brayton) o agua pura en equilibrio termodinámico (Rankine).
- No hay pérdidas de calor al exterior fuera de los procesos de adición y rechazo previstos.
- Los procesos de compresión y expansión son adiabáticos y reversibles (isentrópicos).

## Dominio de validez cuantitativo

El modelo ideal es cuantitativamente válido cuando:

- La eficiencia isentrópica del compresor y la turbina es superior al 85 %. Por debajo de ese umbral, el ciclo real se aleja significativamente del ideal.
- [[r_p]] está en el rango 4–40 para el Brayton. Para valores superiores a 50, la variación de [[gamma]] con la temperatura hace que el modelo de propiedades constantes subestime el trabajo de compresión en más de un 10 %.
- [[T_H]] no supera los 1600 K en el Brayton. Por encima, los efectos de disociación del N₂ y del O₂ modifican la composición del gas y alteran [[gamma]].
- La calidad del vapor al final de la expansión en el Rankine es superior al 85 %. Con humedad mayor, la erosión de álabes invalida el modelo reversible y el rendimiento real cae bruscamente.

## Señales de fallo del modelo

Cuando el modelo ideal deja de ser apropiado:

- El rendimiento real medido es más de un 30 % inferior al rendimiento ideal calculado: las irreversibilidades son tan grandes que el modelo ideal no sirve de guía confiable.
- La temperatura de salida del compresor en el Brayton es tan alta que se acerca a la temperatura de entrada a la turbina: el rango útil de adición de calor desaparece y [[W_neto]] colapsa.
- El vapor sale del Rankine con una humedad superior al 15 %: el arrastre de gotas erosiona los álabes y el modelo isentrópico ya no describe la expansión.

## Modelo extendido o alternativo

Cuando conviene pasar a modelos más realistas, la transición se produce al superar los límites del modelo ideal:

**Brayton con propiedades variables:** cuando [[r_p]] > 20 y [[T_H]] > 1300 K, los valores de [[gamma]] y del calor específico a presión constante varían significativamente con la temperatura. El análisis por integración numérica o por tablas de propiedades del aire da resultados más precisos que la fórmula cerrada del ciclo ideal.

**Brayton con regeneración:** un recuperador de calor transfiere energía de los gases de escape calientes al aire comprimido antes de entrar a la cámara de combustión. Esto reduce [[Q_H]] sin cambiar [[W_neto]], mejorando [[eta_th]]. La eficiencia del regenerador (fracción del calor máximo transferible que realmente se transfiere) suele estar entre el 70 % y el 85 %.

**Rankine con recalentamiento y regeneración:** el recalentamiento intermedio aumenta [[W_neto]] y protege los álabes de la última etapa. La regeneración mediante extracción de vapor reduce [[Q_H]] al precalentar el agua de alimentación. Las centrales de alta eficiencia combinan hasta siete extracciones de regeneración.

**Ciclo combinado (Brayton + Rankine):** el modelo de ciclo combinado suma el [[W_neto]] de ambos ciclos y usa [[Q_H]] del ciclo Brayton como única entrada energética primaria. El [[eta_th]] global supera el 55 % porque la energía residual del Brayton que se rechazaría como [[Q_C]] se convierte en entrada útil del Rankine.

## Comparación operativa

| Criterio | Ciclo Brayton ideal | Ciclo Rankine ideal |
|---|---|---|
| Fluido de trabajo | Gas (aire) | Vapor de agua |
| Parámetro de eficiencia | [[r_p]] y [[gamma]] | [[T_H]], [[T_C]], mejoras |
| Trabajo de compresión | Alto (40–60 % del bruto) | Mínimo (< 2 % del bruto) |
| [[eta_th]] típico real | 35–42 % | 33–47 % con mejoras |
| Temperatura máxima | Hasta 1700 K (con refrigeración) | Hasta 900 K (materiales) |
| Aplicación dominante | Turbinas de gas, aviación | Centrales eléctricas, nuclear |
| Mejora principal | Recalentamiento, regeneración, ciclo combinado | Recalentamiento, regeneración múltiple |
