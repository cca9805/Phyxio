const e=`## Modelo ideal

El **gas ideal** trata cada molécula como una partícula puntual sin extensión espacial y sin fuerzas de interacción con el resto de moléculas. El único efecto mecánico relevante es el choque perfectamente elástico contra las paredes del recipiente, que genera la [[P]]. La energía interna del sistema es puramente cinética y traslacional, proporcional a [[T]]. El volumen disponible coincide con el volumen total [[V]] del recipiente: las moléculas no ocupan espacio propio.

Esta idealización produce la ley del gas ideal, matemáticamente lineal y analíticamente manejable. Las magnitudes que el modelo predice correctamente son [[P]], [[V]], [[T]] y [[n]]; la energía interna por mol resulta de (3/2)·[[R]]·[[T]] para gases monoatómicos. Las magnitudes ignoradas son las interacciones de largo alcance entre moléculas y el volumen finito de cada una.

## Hipótesis

- Las moléculas son puntos materiales sin extensión espacial.
  - Consecuencia si se viola: a alta densidad el volumen molecular ocupa una fracción apreciable de [[V]], y la [[P]] real supera a la predicha por el modelo ideal.
- Las fuerzas entre moléculas son nulas excepto durante el choque.
  - Consecuencia si se viola: las fuerzas de atracción reducen la [[P]] efectiva; las de repulsión la elevan. Ambos efectos se vuelven significativos a densidades altas.
- Los choques con las paredes son perfectamente elásticos (se conserva la energía cinética total).
  - Consecuencia si se viola: habría pérdida neta de energía cinética y el gas se enfriaría espontáneamente, lo que contradice la conservación de la energía en sistemas cerrados.
- El gas se halla en equilibrio termodinámico o en un proceso cuasiestático.
  - Consecuencia si se viola: [[P]] y [[T]] no son uniformes en el sistema y la ecuación de estado no puede aplicarse al proceso en curso.

## Dominio de validez cuantitativo

El gas ideal es una buena aproximación cuando:

- La presión es inferior a 10 MPa (≈ 100 atm): a presiones de laboratorio habituales (0.1–1 MPa) el error es inferior al 1 % para gases nobles y diatómicos comunes (N₂, O₂, Ar).
- La temperatura supera el doble de la temperatura crítica T_c del gas: para N₂ (T_c: 126 K) la ley del gas ideal es válida por encima de 200 K; para CO₂ (T_c: 304 K) se requieren temperaturas superiores a 450 K para mantener errores inferiores al 2 % a 1 atm.
- La densidad numérica de moléculas es mucho menor que la inversa del cubo del diámetro molecular (del orden de 3 × 10⁻¹⁰ m), equivalente a presiones muy inferiores a 10⁸ Pa.

Una comprobación práctica sencilla: el **volumen molar** (cociente [[V]]/[[n]]) debe ser mucho mayor que el volumen de exclusión b de Van der Waals, típicamente 20–60 mL/mol para gases comunes. A condiciones ordinarias, el volumen molar es del orden de 22–25 L/mol, cuatro órdenes de magnitud mayor que b.

## Señales de fallo del modelo

- **El factor de compresibilidad se aleja de la unidad**: si el cociente (P·V real)/(n·R·T) difiere de 1 en más del 3–5 %, el modelo ideal no es suficiente.
- **Presión real inferior a la predicha**: indica que las fuerzas de atracción entre moléculas son relevantes; es la señal habitual a presión moderada-alta.
- **Presión real superior a la predicha**: indica que el volumen excluido no es negligible; aparece a presiones muy altas (superiores a 100 atm en muchos gases).
- **La temperatura se acerca a la temperatura crítica o de ebullición**: la curva de coexistencia líquido–vapor en el diagrama P–T señala la frontera donde el modelo deja de ser válido por completo.
- **Gas con moléculas polares a densidades moderadas**: las interacciones dipolo–dipolo y fuerzas de hidrógeno hacen que el factor de compresibilidad se aleje de la unidad antes que en gases no polares.

## Modelo extendido o alternativo

La ecuación de Van der Waals es el modelo alternativo más habitual para gases reales cuando las hipótesis del gas ideal dejan de ser válidas. Conviene pasar al modelo de Van der Waals cuando se combinan [[P]] superior a 20–50 atm con [[T]] inferior al doble de la temperatura crítica, o cuando el factor de compresibilidad Z calculado o estimado se aleja de la unidad en más del 5 %. Si [[P]] es menor de 10 atm y [[T]] supera claramente la temperatura crítica, el modelo ideal es suficiente.

La ecuación de Van der Waals introduce dos parámetros empíricos: **a** (corrección por atracción intermolecular) y **b** (volumen excluido por mol). La [[P]] corregida resulta de dividir el producto de [[n]], [[R]] y [[T]] entre el volumen reducido [[V]]−n·b, y restar el término de atracción a·n²/[[V]]². El primer ajuste supera al ideal porque el espacio disponible es menor; el segundo lo reduce porque las moléculas se atraen.

## Comparación operativa

| Criterio | Gas ideal | Van der Waals |
|---|---|---|
| Parámetros | Solo [[R]] (universal) | a, b específicos de cada gas |
| Precisión a 1 atm, T ≫ T_c | inferior al 1 % de error | inferior al 1 % de error |
| Precisión a 100 atm, T ≈ 2·T_c | 5–20 % de error | 2–5 % de error |
| Predicción de condensación | No | Sí (cualitativamente) |
| Complejidad matemática | Lineal (despeje directo) | Ecuación cúbica en [[V]] |
| Uso recomendado | Estimaciones rápidas, condiciones ordinarias | Gases reales a presiones moderadas-altas |

La ventaja principal del modelo ideal es su transparencia matemática: cualquier variable se despeja con una sola operación algebraica. La ecuación de Van der Waals requiere resolver una ecuación cúbica en [[V]], lo que en general exige métodos numéricos o tablas.
`;export{e as default};
