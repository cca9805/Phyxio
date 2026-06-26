const e=`## Errores conceptuales

### Error 1: Confundir impedancia mecánica con impedancia acústica específica

**Por qué parece correcto**

Ambas magnitudes se llaman "impedancia" y contienen el producto ρ·c. El alumno generaliza que son lo mismo y las usa indistintamente, ya que en muchos textos aparecen sin distinguir claramente.

**Por qué es incorrecto**

La impedancia acústica específica z = ρ·c relaciona presión con velocidad y se mide en Pa·s/m (rayl). La impedancia mecánica [[Z_mec]] = ρ·c·A relaciona fuerza total con velocidad y se mide en kg/s. Ignorar [[A_sec]] significa ignorar la geometría, lo que produce errores de varios órdenes de magnitud al calcular [[R_Z]] en barras de sección diferente.

**Señal de detección**

El resultado de [[Z_mec]] tiene las mismas unidades que la impedancia acústica (Pa·s/m) en lugar de kg/s, o el cálculo no incluye ningún dato geométrico.

**Corrección conceptual**

La impedancia mecánica incluye el área porque trabaja con fuerza total, no con presión. [[Z_mec]] = [[rho]] · [[c_s]] · [[A_sec]]. Siempre verificar que las unidades del resultado sean kg/s y que el área de la sección aparezca en el cálculo.

**Mini-ejemplo de contraste**

Dos barras del mismo acero: una de 1 cm² y otra de 10 cm². Si se calcula solo la impedancia específica (ρ·c), ambas dan aproximadamente 46 MRayl. Pero sus impedancias mecánicas son 4600 kg/s y 46000 kg/s respectivamente. En una unión entre ambas, el modelo de impedancia específica predice reflexión nula (mismo material), pero la realidad da [[R_Z]] de aproximadamente 0.82 porque las secciones son distintas.

### Error 2: Creer que [[T_Z]] no puede superar 1

**Por qué parece correcto**

En la experiencia cotidiana, la transmisión se asocia con un porcentaje que va de 0% a 100%. El alumno extrapola que T debe estar entre 0 y 1, como ocurre con la transmisión de energía.

**Por qué es incorrecto**

[[T_Z]] es el coeficiente de transmisión en **amplitud de velocidad**, no en energía. La potencia transmitida es P_t = ½ Z₂ T² v², no ½ Z₁ T² v². Cuando Z₂ < Z₁, la velocidad transmitida puede ser mayor que la incidente sin violar la conservación de energía porque la potencia también depende de Z₂.

**Señal de detección**

El alumno descarta resultados con [[T_Z]] > 1 como "imposibles" o añade artificialmente un factor de corrección.

**Corrección conceptual**

La conservación de energía dice: R² + (Z₁/Z₂)·T² = 1 (en potencias). El factor Z₁/Z₂ permite que T > 1 cuando Z₂ < Z₁. La energía se conserva porque el medio receptor, más blando, tiene menor impedancia y su contribución a la potencia es menor por unidad de velocidad.

**Mini-ejemplo de contraste**

Onda de acero (Z₁ = 46000 kg/s) a caucho (Z₂ = 500 kg/s): [[T_Z]] = 2·500/(500+46000) ≈ 0.021. Onda de caucho a acero: [[T_Z]] = 2·46000/(46000+500) ≈ 1.98. El segundo caso da T > 1, pero la potencia transmitida cumple la conservación.

## Errores de modelo

### Error 3: Aplicar la fórmula de reflexión a incidencia oblicua

**Por qué parece correcto**

La fórmula [[R_Z]] = (Z₂ - Z₁)/(Z₂ + Z₁) es elegante y universal en apariencia. El alumno la aplica a cualquier geometría sin considerar que fue derivada bajo hipótesis de incidencia normal.

**Por qué es incorrecto**

Con incidencia oblicua aparece conversión de modos: una onda longitudinal incidente genera ondas longitudinal y transversal tanto reflejadas como transmitidas. Los coeficientes dependen del ángulo según las ecuaciones de Zoeppritz, no de la fórmula simple de impedancias.

**Señal de detección**

El alumno obtiene un solo coeficiente de reflexión para una geometría oblicua, sin mencionar onda transversal reflejada o transmitida.

**Corrección conceptual**

La fórmula simple solo vale para incidencia normal (θ = 0°). Para ángulos no nulos, usar las ecuaciones de Zoeppritz que consideran las cuatro ondas (L reflejada, T reflejada, L transmitida, T transmitida) y la continuidad de desplazamientos y tensiones en la interfaz.

**Mini-ejemplo de contraste**

En incidencia normal acero-aluminio, R ≈ 0.46 y no hay onda transversal. A 45° de incidencia, la onda longitudinal reflejada puede tener R ≈ 0.1 y aparece una onda transversal reflejada significativa. La suma de energías de las cuatro ondas da 1, no la suma simple R² + T² = 1 del modelo normal.

## Errores matemáticos

### Error 4: Invertir Z₁ y Z₂ en la fórmula de [[R_Z]]

**Por qué parece correcto**

La fórmula es simétrica en apariencia y el alumno puede no recordar cuál es el medio incidente y cuál el receptor, o confundir la convención de signos.

**Por qué es incorrecto**

La convención es [[R_Z]] = (Z₂ - Z₁)/(Z₂ + Z₁), donde Z₁ es el medio de donde viene la onda. Invertir da el negativo de [[R_Z]], lo que invierte el signo predicho de la reflexión y la interpretación de la interfaz.

**Señal de detección**

El signo de [[R_Z]] no es consistente con la física: se predice un medio más blando cuando debería ser más rígido, o viceversa.

**Corrección conceptual**

Z₁ siempre es la impedancia del medio desde el cual la onda **incide**. Z₂ es la impedancia del medio hacia el cual la onda intenta propagarse. Si R > 0, el medio receptor es más rígido; si R < 0, es más blando.

**Mini-ejemplo de contraste**

Onda viajando de aluminio (impedancia 17000 kg/s) a acero (impedancia 46000 kg/s): con la convención correcta, [[R_Z]] resulta +0.46. Si se invierten los medios en la fórmula, se obtiene −0.46. El primer resultado (positivo) es correcto porque el acero es más rígido que el aluminio.

## Errores de interpretación

### Error 5: Interpretar reflexión total como pérdida de energía

**Por qué parece correcto**

La energía "no pasa" al otro lado, así que el alumno concluye que se pierde. En la vida cotidiana, la reflexión se asocia con disipación (choque contra pared).

**Por qué es incorrecto**

La reflexión devuelve la energía al medio original; no se disipa. La energía sigue existiendo como onda reflejada. Solo hay pérdida real si el material es disipativo (viscoelástico) o si hay dispersión lateral.

**Señal de detección**

El alumno describe la reflexión total (cuando [[R_Z]] vale 1) como "toda la energía se pierde" o "no hay energía después de la interfaz" en lugar de "toda la energía regresa al medio 1".

**Corrección conceptual**

Reflexión total (|[[R_Z]]| = 1) significa que toda la energía vuelve al medio incidente como onda reflejada. No hay pérdida: la energía cambia de dirección, no desaparece. Solo la absorción (parte imaginaria de Z) destruye energía mecánica convirtiéndola en calor.

**Mini-ejemplo de contraste**

Barra de acero con extremo libre (impedancia del extremo nula): [[R_Z]] vale −1 y la onda regresa invertida con la misma energía. Si se pone un sensor al inicio, mide el doble de la amplitud (ida más vuelta). No hay pérdida; la energía oscila entre ambos extremos indefinidamente si no hay atenuación.

## Regla de autocontrol rápido

Antes de dar por bueno un cálculo de impedancia y reflexión, verificar:
1. [[Z_mec]] tiene unidades de kg/s (no Pa·s/m ni kg/m²s).
2. |[[R_Z]]| ≤ 1 siempre.
3. [[T_Z]] = 1 + [[R_Z]] (relación de consistencia).
4. R²·Z₁ + T²·Z₂ = Z₁ (balance de potencias en la interfaz).
5. Si los dos medios son iguales, [[R_Z]] debe ser cero y [[T_Z]] debe ser uno.
`;export{e as default};
