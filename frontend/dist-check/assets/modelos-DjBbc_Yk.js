const e=`## Modelo ideal

El modelo de **gas ideal** trata cada molécula como una partícula puntual sin interacción con el resto. El único efecto mecánico de las moléculas es el choque elástico con las paredes del recipiente, que genera la presión [[P]]. La energía cinética traslacional media es la única forma de energía interna relevante, y es proporcional a [[T]]. El volumen disponible es todo el volumen [[V]] del recipiente: las moléculas no ocupan espacio propio.

Esta simplificación radical produce la **ley del gas ideal**, que es matemáticamente manejable, dimensionalmente consistente y empíricamente válida para la mayoría de los gases a condiciones ordinarias. Las magnitudes conservadas que el modelo predice correctamente son [[P]], [[V]], [[T]] y [[n]]; la energía interna se puede calcular. Las magnitudes ignoradas son las interacciones de largo alcance entre moléculas y el volumen propio de cada una.

## Hipótesis

- Las moléculas son puntos materiales sin extensión espacial.
  - Consecuencia si se viola: a alta densidad el volumen molecular ocupa una fracción apreciable de [[V]], y la presión real es mayor que la predicha por el modelo ideal.
- Las fuerzas entre moléculas son nulas salvo en el choque.
  - Consecuencia si se viola: las fuerzas de atracción reducen la presión efectiva; las de repulsión la aumentan. Ambos efectos se vuelven significativos a densidades altas.
- Los choques son perfectamente elásticos (se conserva la energía cinética).
  - Consecuencia si se viola: habría pérdida neta de energía cinética y el gas se enfriaría espontáneamente, lo que contradice la conservación de la energía en sistemas cerrados.
- El gas está en equilibrio termodinámico o en procesos cuasiestáticos.
  - Consecuencia si se viola: [[P]] y [[T]] no son uniformes en el sistema y la ecuación de estado no puede aplicarse al proceso en curso.

## Dominio de validez cuantitativo

La ley del gas ideal es una buena aproximación cuando:

- Presiones inferiores a 10 MPa (100 atm): a presiones típicas de laboratorio (0.1–1 MPa) el error es inferior al 1 % para gases nobles y diatómicos.
- Temperaturas muy superiores a la temperatura crítica T_c del gas: para N₂ (T_c de 126 K) la ley del gas ideal es válida por encima de 200 K; para CO₂ (T_c de 304 K) la hipótesis requiere temperaturas superiores a 450 K para errores inferiores al 2 % a presiones de 1 atm.
- La densidad numérica de moléculas debe ser mucho menor que la inversa del cubo del diámetro molecular (del orden de 3 × 10⁻¹⁰ m), lo que equivale a presiones muy inferiores a 10⁸ Pa.

Una desigualdad práctica sencilla: el volumen molar (cociente de [[V]] entre [[n]]) debe ser mucho mayor que el volumen de exclusión b de Van der Waals, que es típicamente 20–60 mL/mol para gases comunes.

## Señales de fallo del modelo

- **El factor de compresibilidad se aleja de la unidad**: si el cociente del producto [[P]]·[[V]] real entre el valor teórico ideal, calculado experimentalmente, difiere de la unidad en más del 3–5 %, el modelo ideal no es suficiente.
- **Presión real inferior a la predicha**: indica que las fuerzas de atracción entre moléculas son relevantes; es la señal habitual a alta presión moderada.
- **Presión real superior a la predicha**: indica que el volumen excluido no es negligible; aparece a presiones muy altas (superiores a 100 atm en muchos gases).
- **La densidad se acerca al punto de saturación**: la curva de coexistencia líquido–vapor en el diagrama P–T señala la frontera donde el modelo deja de ser válido por completo.
- **Temperaturas inferiores al doble de T_c**: muchos gases con T_c alta (agua, CO₂, propano) muestran desviaciones significativas a temperatura ambiente si se comprimen moderadamente.

## Modelo extendido o alternativo

Cuando conviene realizar la transición al modelo de Van der Waals es cuando las condiciones del problema combinan [[P]] superior a ~20–50 atm con [[T]] inferior al doble de la temperatura crítica del gas, o cuando el factor de compresibilidad Z medido o estimado se aleja de la unidad en más del 5 %. También conviene pasar al modelo extendido si la predicción de condensación es relevante para el diseño. En la práctica, si [[P]] es menor de 10 atm y [[T]] supera claramente la temperatura crítica, el modelo ideal es suficiente; en cualquier otro caso conviene comprobar Z antes de aceptar el resultado.

La **ecuación de Van der Waals** es la primera extensión sistemática del modelo ideal. Introduce dos parámetros empíricos: a (atracción intermolecular) y b (volumen excluido). La presión real calculada por Van der Waals resulta de dividir el producto de [[n]], [[R]] y [[T]] entre el volumen reducido (volumen total menos el volumen excluido \`n·b\`), y restar la corrección por atracción (proporcional a a y al cuadrado de [[n]]/[[V]]). El primer término supera al ideal porque el espacio disponible es menor; el segundo lo reduce porque las moléculas se atraen.

Más allá de Van der Waals, en ingeniería química se utilizan la **ecuación de Peng–Robinson** (más precisa en la región de coexistencia líquido–vapor) y la **ecuación del virial** (expansión en potencias de la densidad, que converge mejor a densidades intermedias).

## Comparación operativa

| Criterio | Gas ideal (ley del gas ideal) | Van der Waals |
|---|---|---|
| Parámetros | Solo [[R]] (universal) | a, b específicos de cada gas |
| Precisión a 1 atm, T muy superior a T_c | inferior al 1 % de error | inferior al 1 % de error |
| Precisión a 100 atm, T próxima a 2·T_c | 5–20 % de error | 2–5 % de error |
| Predicción de condensación | No | Sí (cualitativamente) |
| Complejidad matemática | Lineal (despeje directo) | Ecuación cúbica en [[V]] |
| Uso recomendado | Estimaciones rápidas, condiciones ordinarias | Gases reales a presiones moderadas-altas |

La ventaja principal del modelo ideal es su transparencia matemática: cualquier variable se despeja directamente con una sola operación. Van der Waals requiere resolver una ecuación cúbica en [[V]], lo que en general exige métodos numéricos o tablas.
`;export{e as default};
