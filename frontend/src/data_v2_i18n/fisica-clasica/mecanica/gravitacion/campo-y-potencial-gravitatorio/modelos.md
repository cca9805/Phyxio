# Modelos y alcance en campo y potencial gravitatorio

## Modelo ideal
El modelo ideal del leaf supone que la masa fuente [[M]] puede tratarse como puntual o como distribución esférica equivalente vista desde fuera. Bajo esa hipótesis, el problema se describe con una coordenada radial [[r]] y con potencial de referencia en el infinito. La fortaleza del modelo está en que permite leer dinámica local con [[g]] y estructura energética con [[V]] sin contradicción interna.

En esta capa ideal, la masa de prueba [[m]] no altera el campo generado por la fuente. Solo responde al campo existente. Esa separación entre generación y respuesta hace posible conectar de forma limpia cálculo dinámico, cálculo de potencial y balance energético. Además, evita introducir complejidad innecesaria cuando se estudian trayectorias o transferencias orbitales de primer nivel.

## Hipótesis
1. Régimen clásico no relativista.
2. Simetría esférica efectiva o aproximación de masa puntual.
3. Misma referencia geométrica para [[ri]] y [[rf]].
4. Referencia de potencial explícita y constante en todo el análisis.
5. Conversión de datos a SI antes de cualquier sustitución.

Estas hipótesis no son decorativas. Cada una elimina ambigüedad física concreta y reduce el riesgo de confundir errores de modelo con errores algebraicos.

## Dominio de validez cuantitativo
Como regla operativa, el modelo ideal funciona bien cuando la escala radial analizada no rompe las hipótesis de simetría y régimen clásico. Para decidir de forma práctica se pueden usar criterios cuantitativos simples.

- Si abs([[rf]] - [[ri]]) / [[ri]] <= 0.1, la aproximación local suele ser razonable para estimaciones rápidas.
- Si abs([[rf]] - [[ri]]) / [[ri]] > 0.1, conviene usar dependencia radial completa para evitar sesgo en [[DeltaU]].
- Si abs([[gf]] - [[gi]]) / [[gi]] <= 0.1, tratar [[g]] como casi constante puede ser aceptable.
- Si abs([[gf]] - [[gi]]) / [[gi]] > 0.1, conviene abandonar aproximación local y aplicar lectura radial completa.

Estos umbrales no sustituyen juicio experto, pero aportan una guía clara para decidir el cambio de nivel de modelado.

## Señales de fallo del modelo
El modelo falla cuando produce coherencia numérica aparente pero incoherencia física. Una señal típica es obtener signo incompatible entre desplazamiento radial y variación de energía potencial. Otra señal es forzar un único valor de [[g]] en un intervalo donde el cambio entre [[gi]] y [[gf]] es significativo.

También hay fallo cuando la geometría real de la fuente rompe la simetría asumida y aparecen efectos no capturados por una sola coordenada radial. En ese escenario, mantener el modelo ideal solo por comodidad algebraica reduce la calidad física de la conclusión.

## Modelo extendido o alternativo
Cuando el modelo ideal pierde robustez, la extensión natural es pasar a superposición de múltiples fuentes y sumar contribuciones de campo y potencial de manera correcta. Para escenarios extremos, el siguiente salto es un marco relativista donde la descripción newtoniana deja de ser suficiente.

La transición debe declararse explícitamente: cuando conviene cambiar de modelo. Conviene cambiar de modelo cuando abs([[gf]] - [[gi]]) / [[gi]] > 0.1 o cuando la estructura de la fuente impide su aproximación esférica. Con esa condición se evita sostener un modelo elegante pero físicamente débil.

## Comparación operativa
El modelo ideal ofrece rapidez y claridad conceptual. El modelo extendido ofrece mayor fidelidad bajo geometría compleja o grandes variaciones radiales. En práctica docente y técnica, el ideal sirve para estimación inicial y el extendido sirve para validación final.

La habilidad central de este leaf es saber conmutar entre ambos sin perder coherencia causal. Ese criterio de conmutación es más valioso que cualquier cálculo aislado porque determina si la predicción es realmente defendible.