const e=`## Modelo ideal\r
\r
El modelo ideal es una rueda rígida que rueda sin deslizar sobre una superficie fija. El centro de masas avanza con [[v_cm]], el sólido gira con [[omega]] y el radio [[R]] conecta ambas lecturas mediante la condición de rodadura. El punto de contacto está instantáneamente en reposo respecto al suelo.\r
\r
## Hipótesis\r
\r
El cuerpo conserva su forma, el radio efectivo no cambia y el eje de giro es estable. La superficie no se mueve, no hay patinaje y las magnitudes angulares [[theta]], [[omega]] y [[alpha]] se miden con una convención de signo fija. Si se usan aceleraciones, [[a_cm]] y [[alpha]] también quedan acopladas por el radio.\r
\r
## Dominio de validez cuantitativo\r
\r
Rango cuantitativo explícito: el modelo es razonable cuando 0.01 m <= [[R]] <= 1.0 m, 0 <= [[omega]] <= 100 rad/s, las velocidades son no relativistas y la deformación del contacto es pequeña frente al radio. Para [[R]] de 0.30 m y [[omega]] de 10 rad/s, una [[v_cm]] de unos 3 m/s es plausible. Una discrepancia grande entre avance medido y giro indica deslizamiento.\r
\r
## Señales de fallo del modelo\r
\r
El modelo falla si hay marca de arrastre, derrape, giro sin avance, avance con rueda bloqueada, radio efectivo variable o contacto intermitente. También falla si el gráfico muestra que el punto de contacto no puede interpretarse como instantáneamente quieto.\r
\r
## Modelo extendido o alternativo\r
\r
Conviene cambiar de modelo cuando aparece deslizamiento, deformación, neumático blando, suelo móvil o pérdida de contacto. Se debe cambiar a modelo alternativo si [[v_cm]] y [[omega]] dejan de coincidir mediante [[R]]. El modelo extendido trata la traslación y la rotación como variables parcialmente independientes e incluye rozamiento cinético o pérdidas.\r
\r
## Comparación operativa\r
\r
| Situación | Modelo útil | Magnitudes clave |\r
|---|---|---|\r
| Rueda sobre suelo seco | Rodadura ideal | [[v_cm]], [[omega]], [[R]] |\r
| Rueda bloqueada | Traslación con deslizamiento | [[v_cm]], rozamiento |\r
| Rueda patinando en sitio | Rotación con deslizamiento | [[omega]], [[theta]] |\r
| Contacto deformable | Modelo extendido | radio efectivo, pérdidas |\r
\r
La comparación muestra por qué este leaf es un puente. No basta con saber cinemática lineal ni cinemática angular por separado; la rodadura exige decidir si el contacto las une de verdad.\r
\r
El modelo ideal se usa como punto de entrada para modelos posteriores con [[m]], [[I]], [[tau]], [[K_total]] y [[E_total]]. Si el puente cinemático no está justificado, tampoco se puede repartir energía ni escribir dinámica de rodadura con confianza. Por eso el criterio de validez se formula antes de cualquier cálculo de fuerzas.\r
\r
En problemas reales, esta decisión se documenta antes del cálculo numérico. Se indica qué magnitud se mide, qué magnitud se infiere y qué observación invalidaría la inferencia. Así el modelo ideal no se confunde con una descripción universal.`;export{e as default};
