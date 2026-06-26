const e=`# Modelos físicos: sistemas de referencia [[frame_sigma]] \r
\r
## Modelo ideal\r
\r
El modelo ideal de sistemas de referencia supone que basta con elegir un marco de referencia adecuado para describir el mismo movimiento sin contradicciones. Se conserva solo la estructura imprescindible para que la relación principal describa el mecanismo dominante y para que la lectura del diagrama siga siendo limpia. En este nivel se eliminan detalles secundarios del material o del fluido porque todavía no cambian la conclusión esencial. Esa simplificación es valiosa siempre que el alumno pueda explicar qué fenómeno se ha descartado y por qué su ausencia no altera la interpretación principal.\r
\r
## Hipótesis\r
\r
Las hipótesis operativas del leaf fijan qué magnitudes se consideran dominantes y qué efectos se despreciaron:\r
1. **Marcos galileanos**: Se asume que los marcos [[frame_sigma]] son inerciales o que su aceleración es despreciable frente a la del móvil.\r
2. **Velocidad relativa constante**: La [[v_frame]] no varía durante el intervalo de tiempo analizado, simplificando la relación entre aceleraciones.\r
3. **Ejes paralelos**: Se asume que los sistemas de coordenadas mantienen sus ejes paralelos para evitar rotaciones que compliquen la transformación de [[r_vec]] .\r
4. **Simultaneidad clásica**: Se asume que el [[t_global]] fluye de forma idéntica para todos los observadores, permitiendo una única cronología común.\r
\r
## Dominio de validez cuantitativo\r
\r
El dominio cuantitativo de validez debe declararse con umbrales verificables. Como regla mínima, conviene exigir variaciones relativas de la [[v_frame]] menores del 1 %. Además, las velocidades deben ser muy inferiores a la velocidad de la luz para que las transformaciones de Galileo sigan siendo válidas. Si estos criterios fallan, la magnitud buscada [[r_vec]] o [[v]] deja de ser fiable aunque la sustitución numérica parezca correcta.\r
\r
## Señales de fallo del modelo\r
\r
Las señales de fallo del modelo no suelen empezar en la calculadora, sino en la lectura física:\r
- Un cambio inesperado de signo en la [[v]] que contradiga la observación directa.\r
- Una discrepancia en el [[t_global]] registrado por dos observadores.\r
- Una trayectoria que no pueda reconciliarse mediante una [[v_frame]] constante.\r
- Resultados donde el [[r_vec]] predicho se aleja de la geometría real del montaje.\r
\r
## Modelo extendido o alternativo\r
\r
La transición al modelo extendido se vuelve necesaria cuando una hipótesis central deja de sostenerse:\r
- **Marcos no inerciales**: Si el observador acelera, aparecen fuerzas ficticias en la dinámica y términos de aceleración relativa en la cinemática.\r
- **Relatividad especial**: Cuando la [[v]] es comparable a la velocidad de la luz, el modelo galileano falla y deben usarse las transformaciones de Lorentz.\r
- **Sistemas en rotación**: Si un [[frame_sigma]] gira respecto a otro, el modelo de ejes paralelos deja de servir y aparecen términos de aceleración centrífuga y de Coriolis.\r
\r
El objetivo no es complicar por inercia, sino decidir qué refinamiento cambia de verdad la predicción y cuál solo añade ruido algebraico.\r
\r
## Comparación operativa\r
\r
Cuando conviene cambiar a un modelo alternativo es cuando el marco acelera, cuando los ejes giran o cuando las velocidades dejan de ser peque?as frente a la luz. En esos casos el modelo galileano ya no conserva una traducci?n simple entre observadores y se debe pasar a marcos no inerciales, cinem?tica rotacional o relatividad especial seg?n el origen del fallo.\r
`;export{e as default};
