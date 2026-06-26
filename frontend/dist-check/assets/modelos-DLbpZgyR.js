const e=`# Modelos físicos: sin rozamiento\r
\r
## Modelo ideal\r
\r
El modelo base describe un bloque de masa [[m]] sobre una rampa rígida de ángulo [[theta]], bajo gravedad uniforme [[g]], sin fricción ni fuerzas externas adicionales. La dinámica nace de la proyección del peso [[P]] en sus componentes [[P_par]] y [[P_perp]], con reacción normal [[N]] sobre el eje perpendicular.\r
\r
En términos operativos, este modelo ideal responde tres preguntas con costo bajo: qué acelera el sistema ([[a]]), cuánto tarda en recorrer una longitud [[L]] ([[t]]) y con qué rapidez termina ([[v_f]]). Esa capacidad de predicción rápida justifica su papel como modelo de entrada en cursos de mecánica y en prefactibilidad de diseño.\r
\r
## Hipótesis\r
\r
- El contacto bloque-rampa se mantiene en todo el tramo.\r
- No hay fuerza de rozamiento ni pérdidas dominantes.\r
- La geometría de la rampa es fija y el ángulo [[theta]] constante por tramo.\r
- El movimiento es unidimensional sobre el eje del plano.\r
\r
Hipótesis implícitas, pero relevantes:\r
\r
- [[g]] se considera constante en el espacio y tiempo del ensayo.\r
- No hay aportes externos de vibración o empuje adicional.\r
- El bloque no rota de forma dominante ni cambia su distribución de masa durante el movimiento.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es confiable cuando:\r
\r
- 0 <= [[theta]] <= 90 grados.\r
- 0 <= [[a]] <= [[g]].\r
- [[N]] = [[P_perp]] y [[N]] >= 0.\r
- Error relativo predicción-medición <= 10 por ciento en ensayos equivalentes.\r
- Velocidades moderadas donde los efectos de arrastre no dominan.\r
\r
Interpretación del dominio: estas desigualdades no son un formalismo vacío; delimitan el régimen donde el término dominante sigue siendo [[P_par]]. Cuando surge un término no modelado del mismo orden, la calidad predictiva cae abruptamente.\r
\r
## Señales de fallo del modelo\r
\r
- Se observa desaceleración no explicada por cambio de [[theta]].\r
- [[v_f]] medida resulta sistemáticamente menor que la predicción ideal.\r
- El tiempo [[t]] medido crece con repeticiones pese a condiciones geométricas idénticas.\r
- El balance en eje normal sugiere fuerzas no incluidas en el modelo.\r
\r
Señal metodológica adicional: cuando diferentes grupos miden el mismo montaje y obtienen sesgos direccionales parecidos (no dispersión aleatoria), suele tratarse de una omisión sistemática del modelo, no de error de cálculo individual.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando aparecen señales de fallo, el siguiente nivel es incluir fricción y disipación:\r
\r
- Paso a plano con rozamiento cinético y estático.\r
- Inclusión de pérdidas por aire o deformación cuando sean relevantes.\r
- Posible variación de parámetros con temperatura o estado superficial.\r
\r
Cuando conviene cambiar de modelo: si el error relativo supera 10 por ciento de forma persistente en tres mediciones consecutivas, o si [[v_f]] y [[t]] dejan de cumplir coherencia con [[a]] ideal, abandonar el modelo sin rozamiento y pasar al modelo con fricción.\r
\r
Este criterio de transición convierte una intuición difusa en una regla reproducible. La ventaja didáctica es alta: el estudiante aprende que cambiar de modelo no es "rendirse", sino aplicar ciencia con control de hipótesis.\r
\r
## Comparación operativa\r
\r
Modelo ideal:\r
\r
- Alta claridad causal.\r
- Costo computacional mínimo.\r
- Excelente para aprendizaje y primera estimación.\r
\r
Modelo extendido:\r
\r
- Mayor fidelidad experimental.\r
- Más parámetros y calibración.\r
- Necesario para diseño fino y validación de ingeniería.\r
\r
El criterio correcto no es elegir el modelo más complejo, sino el más simple que todavía explique los datos con rigor.\r
\r
En síntesis, el modelo ideal es excelente cuando se busca comprensión causal y estimación rápida. El modelo extendido es obligatorio cuando la decisión depende de precisión fina. Saber alternar entre ambos con evidencia es una competencia de nivel profesional.`;export{e as default};
