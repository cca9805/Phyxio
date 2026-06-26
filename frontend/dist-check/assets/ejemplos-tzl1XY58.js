const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un bloque de [[masa_1]] = 3 kg reposa sobre un plano inclinado con [[angulo_plano]] = 30° y [[coeficiente_rozamiento]] = 0.20. Una cuerda inextensible lo conecta a través de una polea ideal (sin masa) con un bloque colgante de [[masa_2]] = 2 kg. El sistema parte del reposo. Calcula la [[aceleracion_sistema]] del conjunto y la [[tension_cuerda]] en la cuerda.\r
\r
## Datos\r
\r
- [[masa_1]] = 3 kg (bloque sobre el plano)\r
- [[masa_2]] = 2 kg (bloque colgante)\r
- [[angulo_plano]] = 30°\r
- [[coeficiente_rozamiento]] = 0.20\r
- [[aceleracion_gravedad]] = 9.8 m/s²\r
\r
## Definición del sistema\r
\r
El sistema lo forman los dos bloques unidos por la cuerda. El eje positivo para [[masa_2]] apunta hacia abajo (sentido del descenso esperado) y para [[masa_1]] apunta hacia arriba por el plano. La polea cambia la dirección de la [[tension_cuerda]] pero no altera su módulo (polea ideal sin masa).\r
\r
## Modelo físico\r
\r
Se aplica la Segunda Ley de Newton a cada cuerpo por separado y se impone el vínculo cinemático de cuerda inextensible: ambos bloques tienen la misma [[aceleracion_sistema]] en valor absoluto.\r
\r
En términos operativos del leaf, el cierre del modelo se hace encadenando relaciones físicas y no solo algebraicas: [[fuerza_normal]] fija el nivel de [[fuerza_rozamiento]], la proyección del peso de [[masa_1]] sobre el plano define [[componente_tangencial_peso]], y la diferencia entre tracción y resistencias determina [[aceleracion_sistema]]. Con esa aceleración común, se obtiene [[tension_cuerda]] de manera coherente para ambos cuerpos. Esta secuencia evita saltos algebraicos y conserva la lectura causal de fuerzas.\r
\r
## Justificación del modelo\r
\r
El [[angulo_plano]] = 30° está dentro del rango de validez (θ < 60°). Las [[masa_1]] y [[masa_2]] son del orden de kilogramos, por lo que los efectos de la inercia de la polea y la elasticidad de la cuerda son despreciables. El [[coeficiente_rozamiento]] = 0.20 corresponde a rozamiento bajo, dentro del modelo de Coulomb cinético.\r
\r
## Resolución simbólica\r
\r
**Paso 1 — Fuerza normal sobre el plano inclinado:**\r
\r
{{f:fuerza_normal_plano}}\r
\r
**Paso 2 — Componente tangencial del peso del bloque sobre el plano:**\r
\r
{{f:componente_tangencial_peso}}\r
\r
**Paso 3 — Fuerza de rozamiento dinámica:**\r
\r
{{f:fuerza_rozamiento_dinamica}}\r
\r
**Paso 4 — Vínculo de aceleración (cuerda inextensible):**\r
\r
{{f:vinculo_aceleracion}}\r
\r
**Paso 5 — Segunda ley de Newton para el sistema vinculado:**\r
\r
{{f:segunda_ley_newton_sistema}}\r
\r
**Paso 6 — Tensión de la cuerda:**\r
\r
{{f:tension_cuerda_sistema}}\r
\r
## Sustitución numérica\r
\r
A partir de las expresiones anteriores con los datos del enunciado:\r
\r
- [[fuerza_normal]] = 3 × 9.8 × cos(30°) ≈ 3 × 9.8 × 0.866 ≈ 25.5 N\r
- [[componente_tangencial_peso]] = 3 × 9.8 × sin(30°) = 3 × 9.8 × 0.5 = 14.7 N\r
- [[fuerza_rozamiento]] = 0.20 × 25.5 ≈ 5.1 N\r
- [[aceleracion_sistema]] = (2 × 9.8 − 14.7 − 5.1) / (3 + 2) = (19.6 − 14.7 − 5.1) / 5 = −0.2 / 5 ≈ −0.04 m/s²\r
\r
El signo negativo indica que el sistema no acelera en el sentido asumido: el bloque colgante no desciende por sí solo con estos parámetros. El sistema tiende al reposo o requeriría una perturbación inicial para moverse en sentido contrario.\r
\r
Con [[aceleracion_sistema]] ≈ 0 (equilibrio límite):\r
\r
- [[tension_cuerda]] ≈ [[masa_2]] × [[aceleracion_gravedad]] = 2 × 9.8 = 19.6 N\r
\r
## Validación dimensional\r
\r
Las ecuaciones tienen unidades consistentes:\r
\r
- [[fuerza_normal]] y [[fuerza_rozamiento]]: dimensiones de fuerza \`[M L T⁻²]\`\r
- [[aceleracion_sistema]]: dimensiones de aceleración \`[L T⁻²]\`\r
- [[tension_cuerda]]: dimensiones de fuerza \`[M L T⁻²]\`\r
- [[coeficiente_rozamiento]]: magnitud adimensional \`[1]\`\r
\r
## Interpretación física\r
\r
El resultado [[aceleracion_sistema]] ≈ −0.04 m/s² indica que las fuerzas resistivas (componente tangencial del peso de [[masa_1]] más rozamiento) superan casi exactamente el peso de [[masa_2]]. El sistema está en equilibrio dinámico límite: pequeñas variaciones de [[angulo_plano]] o [[coeficiente_rozamiento]] pueden cambiar el sentido del movimiento.\r
\r
La lectura física no es "solo un número": el signo de [[aceleracion_sistema]] revela qué mecanismo domina. Aquí domina la suma [[componente_tangencial_peso]] + [[fuerza_rozamiento]], por eso la [[tension_cuerda]] queda prácticamente igual al peso de [[masa_2]]. En diseño, esta situación es crítica porque un cambio pequeño de superficie (sube [[coeficiente_rozamiento]]) puede bloquear el arranque, mientras que una ligera reducción del [[angulo_plano]] o del rozamiento vuelve al sistema motor.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En sistemas de transporte montañoso (telecabinas, telesillas) una cabina conectada mediante cable a un contrapeso reproduce analíticamente el sistema de dos masas vinculadas. La inclinación del cable, la fricción del sistema de guías y las diferencias de masa determinan si el motor debe aportar fuerza neta o si el contrapeso puede mover el sistema por sí solo.\r
\r
Un técnico necesita estimar si un contrapeso de 800 kg es suficiente para arrastrar una cabina de 1200 kg por un raíl inclinado 20° con [[coeficiente_rozamiento]] = 0.15.\r
\r
## Estimación física\r
\r
El orden de magnitud de las fuerzas relevantes en esta aplicación:\r
\r
- [[componente_tangencial_peso]] de la cabina ≈ 1200 × 9.8 × 0.34 ≈ 4000 N\r
- [[fuerza_normal]] de la cabina ≈ 1200 × 9.8 × 0.94 ≈ 11 050 N\r
- [[fuerza_rozamiento]] ≈ 0.15 × 11 050 ≈ 1660 N\r
- Fuerza tractora del contrapeso ≈ 800 × 9.8 ≈ 7840 N\r
\r
La [[aceleracion_sistema]] estimada: (7840 − 4000 − 1660) / (1200 + 800) ≈ 2180 / 2000 ≈ 1.1 m/s². El contrapeso es suficiente para mover la cabina.\r
\r
Como control rápido, si la incertidumbre en [[coeficiente_rozamiento]] fuese ±0.03, la [[fuerza_rozamiento]] variaría alrededor de ±330 N y la [[aceleracion_sistema]] cambiaría en torno a ±0.17 m/s². Incluso con ese margen, la aceleración seguiría siendo positiva, lo que confirma robustez operativa básica. Esta lectura cuantitativa es exactamente la utilidad del modelo: decidir si un diseño funciona antes de construir un prototipo.\r
\r
## Interpretación\r
\r
El mismo modelo que se usa en el aula para el sistema de dos bloques vinculados predice correctamente que el contrapeso tiene capacidad de arrastrar la cabina. La [[aceleracion_sistema]] positiva confirma que el diseño es automotor. La [[tension_cuerda]] en el cable sería del orden de 6000–8000 N, dato clave para el dimensionamiento mecánico. Aumentar el [[angulo_plano]] o reducir el [[coeficiente_rozamiento]] (mejores rodamientos) permitiría usar un contrapeso más ligero.\r
`;export{e as default};
