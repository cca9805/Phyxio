const e=`# Modelos físicos: Rozamiento dinamico\r
\r
## Modelo ideal\r
\r
El modelo ideal del leaf asume que el contacto ya está en deslizamiento y que el coeficiente dinámico puede tratarse como aproximadamente constante en el intervalo de análisis. Bajo esa hipótesis, la fuerza tangencial de contacto se estima con el modelo de rozamiento dinámico y se orienta en oposición a la velocidad relativa.\r
\r
Este modelo es deliberadamente simple y útil en ingeniería de primer nivel, siempre que se respete su dominio operativo. No busca representar toda la tribología del contacto, sino capturar el efecto dominante para predicción rápida y control básico.\r
\r
## Hipótesis\r
\r
Las hipótesis de trabajo son:\r
\r
- Existe deslizamiento relativo no nulo entre superficies.\r
- La normal [[N]] está correctamente identificada para la configuración dinámica.\r
- El coeficiente [[mu_k]] representa el par de materiales en condiciones cercanas a las del ensayo o uso.\r
- No hay cambios bruscos de temperatura, lubricación o rugosidad durante el intervalo corto evaluado.\r
- La dirección de [[fk]] se asigna por oposición a [[v_rel]].\r
\r
Si alguna hipótesis se rompe, la predicción puede perder validez de manera sistemática.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona de forma robusta cuando se cumplen criterios cuantitativos explícitos como los siguientes:\r
\r
- Variación relativa de [[mu_k]] menor o igual a 10% durante la ventana de cálculo.\r
- Temperatura de interfaz dentro de banda controlada del proceso (por ejemplo, desviación menor a 15 °C respecto de calibración).\r
- Error entre predicción y medición de fuerza tangencial menor o igual a 10% en corridas repetidas.\r
- Régimen cinético sostenido, sin transiciones frecuentes a adherencia intermitente.\r
\r
Fuera de estos rangos, los efectos omitidos dejan de ser secundarios y el modelo simple pierde confiabilidad.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores operativos de fallo:\r
\r
- Deriva creciente entre fuerza medida y fuerza calculada.\r
- Dependencia marcada de la fuerza con la velocidad en un rango donde se asumía constancia.\r
- Evidencia de calentamiento o contaminación que modifica la interfaz.\r
- Cambios de sentido de [[v_rel]] con respuesta de [[fk]] mal representada por el modelo actual.\r
\r
Estos síntomas no invalidan la física de fondo, pero sí la parametrización usada en el cálculo.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal falla, se pasa a un modelo extendido con coeficiente efectivo dependiente de estado o por tramos experimentales. Por ejemplo, [[mu_k]] puede parametrizarse en función de temperatura o rango de [[v_rel]].\r
\r
Transición explícita recomendada: cambiar de modelo cuando el error relativo supere 10% de forma persistente en tres corridas equivalentes o cuando la variación de coeficiente exceda la banda acordada de validación.\r
\r
Este criterio hace reproducible la decisión de cambio y evita subjetividad.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo Ideal | Modelo Extendido |\r
|---------|-------------|------------------|\r
| **Precisión típica** | Buena en banda calibrada | Mayor fuera de banda simple |\r
| **Complejidad** | Baja | Media o alta |\r
| **Costo de datos** | Bajo | Alto (más ensayos) |\r
| **Uso recomendado** | Diseño preliminar y control base | Validación crítica y optimización fina |\r
| **Interpretabilidad** | Alta | Depende de parametrización |\r
\r
La estrategia robusta es escalonada: iniciar con modelo ideal, auditar error, y migrar al extendido solo cuando el criterio cuantitativo lo exige.\r
`;export{e as default};
