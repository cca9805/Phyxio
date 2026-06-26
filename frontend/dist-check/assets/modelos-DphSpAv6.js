const e=`## Modelo ideal\r
\r
El modelo ideal del leaf usa dos estados del sistema y supone que la comparación energética entre ambos estados es suficiente para resolver la incógnita. En esta versión, [[Ki]], [[Ui]], [[Kf]] y [[Uf]] se organizan para describir qué parte del cambio se interpreta como conversión interna entre energía cinética y energía potencial. El valor [[Em]] se trata como magnitud de control global del estado mecánico y no como una variable aislada de la situación física.\r
\r
La fortaleza del modelo ideal es didáctica y operativa. Didáctica, porque evita perderse en trayectorias intermedias cuando la pregunta solo pide comparar inicio y final. Operativa, porque permite resolver resultados de velocidad, altura o compresión con una cadena corta de decisiones físicas. Ese ahorro de complejidad es válido solo cuando la hipótesis de sistema conservativo está bien justificada.\r
\r
## Hipótesis\r
\r
Las hipótesis mínimas son las siguientes. Primero, el sistema y su frontera están explícitos. Segundo, las contribuciones de energía potencial usan la misma referencia en ambos estados, para que [[Ui]] y [[Uf]] sean comparables. Tercero, si hay fuerzas no conservativas, su efecto aparece de forma explícita mediante [[Wnc]] y no se omite en la interpretación final.\r
\r
También se asume régimen clásico, sin correcciones relativistas ni cuánticas, y una escala experimental donde las incertidumbres no cambian la conclusión cualitativa. En palabras prácticas, el modelo funciona cuando el orden de magnitud de pérdidas reales es pequeño frente al balance mecánico principal.\r
\r
## Dominio de validez cuantitativo\r
\r
Un dominio cuantitativo razonable para problemas de aula e ingeniería básica incluye el rango 0.1 m <= h <= 50 m, velocidades moderadas claramente no relativistas, y trabajos disipativos que no superen una fracción dominante del balance total si se desea conservar [[Em]].\r
\r
Como criterio operativo, puede usarse una desigualdad de control: si \r
perdidas_estimadas/energia_mecanica_inicial <= 0.1, el modelo conservativo suele ser una primera aproximación aceptable. Si esa razón sube de forma sostenida, conviene activar el término [[Wnc]] y pasar al modelo extendido.\r
\r
Criterio cuantitativo explícito adicional:\r
\r
- 0 <= perdidas_estimadas/energia_mecanica_inicial <= 0.1 para aproximación conservativa.\r
- 0.1 < perdidas_estimadas/energia_mecanica_inicial <= 0.3 para transición de modelo.\r
- Orden de magnitud típico del desajuste: entre 10^-1 y 10^0 del balance inicial.\r
\r
## Señales de fallo del modelo\r
\r
Hay señales observables de ruptura. Si la velocidad final medida es mucho menor que la predicha sin pérdidas, el modelo ideal está ocultando disipación real. Si el balance entre [[Ki]] y [[Kf]] exige valores físicamente imposibles, como energía cinética final negativa, hay un error de datos o de hipótesis. Si la referencia de potencial cambia entre estados, la comparación entre [[Ui]] y [[Uf]] se vuelve inconsistente.\r
\r
Otra señal típica es la inconsistencia entre narrativa física y resultado numérico. Cuando la historia causal del sistema dice que hay rozamiento apreciable y aun así se fuerza conservación mecánica estricta, la solución puede cerrar algebraicamente pero fallar físicamente.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido incorpora transferencia no conservativa explícita mediante [[Wnc]]. Ese paso no es un "parche" matemático sino una decisión física: reconocer que parte de la energía mecánica se disipa o se inyecta desde el entorno. En ese marco, [[Em]] deja de ser constante entre estados y la interpretación correcta se desplaza hacia un balance con intercambio.\r
\r
Cuando hay motores, frenado, rozamiento seco intenso o arrastre significativo, el modelo alternativo debe convertirse en el principal. En problemas más complejos, puede ser necesario combinar balance energético con ecuaciones dinámicas para estimar cómo evoluciona [[Wnc]] en el tiempo.\r
\r
## Comparación operativa\r
\r
| Pregunta | Modelo inicial recomendado | Magnitudes de control |\r
|---|---|---|\r
| ¿Se conserva energía mecánica? | Ideal conservativo | [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Em]] |\r
| ¿Hay pérdidas o aportes externos? | Extendido con intercambio | [[Wnc]], [[Ki]], [[Ui]], [[Kf]], [[Uf]] |\r
| ¿La referencia potencial está bien definida? | Revisión de consistencia | [[Ui]], [[Uf]], [[U]] |\r
| ¿La solución es físicamente defendible? | Validación final de modelo | [[Em]], [[Kf]], [[Wnc]] |\r
\r
Esta comparación evita el error de resolver por inercia. Elegir modelo no es un paso burocrático: es la decisión que determina si el número final tiene sentido físico o solo coherencia algebraica local.`;export{e as default};
