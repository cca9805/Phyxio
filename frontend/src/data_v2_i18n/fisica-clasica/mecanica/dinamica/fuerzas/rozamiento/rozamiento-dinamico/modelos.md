# Modelos físicos: Rozamiento dinamico

## Modelo ideal

El modelo ideal del leaf asume que el contacto ya está en deslizamiento y que el coeficiente dinámico puede tratarse como aproximadamente constante en el intervalo de análisis. Bajo esa hipótesis, la fuerza tangencial de contacto se estima con el modelo de rozamiento dinámico y se orienta en oposición a la velocidad relativa.

Este modelo es deliberadamente simple y útil en ingeniería de primer nivel, siempre que se respete su dominio operativo. No busca representar toda la tribología del contacto, sino capturar el efecto dominante para predicción rápida y control básico.

## Hipótesis

Las hipótesis de trabajo son:

- Existe deslizamiento relativo no nulo entre superficies.
- La normal [[N]] está correctamente identificada para la configuración dinámica.
- El coeficiente [[mu_k]] representa el par de materiales en condiciones cercanas a las del ensayo o uso.
- No hay cambios bruscos de temperatura, lubricación o rugosidad durante el intervalo corto evaluado.
- La dirección de [[fk]] se asigna por oposición a [[v_rel]].

Si alguna hipótesis se rompe, la predicción puede perder validez de manera sistemática.

## Dominio de validez cuantitativo

El modelo funciona de forma robusta cuando se cumplen criterios cuantitativos explícitos como los siguientes:

- Variación relativa de [[mu_k]] menor o igual a 10% durante la ventana de cálculo.
- Temperatura de interfaz dentro de banda controlada del proceso (por ejemplo, desviación menor a 15 °C respecto de calibración).
- Error entre predicción y medición de fuerza tangencial menor o igual a 10% en corridas repetidas.
- Régimen cinético sostenido, sin transiciones frecuentes a adherencia intermitente.

Fuera de estos rangos, los efectos omitidos dejan de ser secundarios y el modelo simple pierde confiabilidad.

## Señales de fallo del modelo

Indicadores operativos de fallo:

- Deriva creciente entre fuerza medida y fuerza calculada.
- Dependencia marcada de la fuerza con la velocidad en un rango donde se asumía constancia.
- Evidencia de calentamiento o contaminación que modifica la interfaz.
- Cambios de sentido de [[v_rel]] con respuesta de [[fk]] mal representada por el modelo actual.

Estos síntomas no invalidan la física de fondo, pero sí la parametrización usada en el cálculo.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, se pasa a un modelo extendido con coeficiente efectivo dependiente de estado o por tramos experimentales. Por ejemplo, [[mu_k]] puede parametrizarse en función de temperatura o rango de [[v_rel]].

Transición explícita recomendada: cambiar de modelo cuando el error relativo supere 10% de forma persistente en tres corridas equivalentes o cuando la variación de coeficiente exceda la banda acordada de validación.

Este criterio hace reproducible la decisión de cambio y evita subjetividad.

## Comparación operativa

| Aspecto | Modelo Ideal | Modelo Extendido |
|---------|-------------|------------------|
| **Precisión típica** | Buena en banda calibrada | Mayor fuera de banda simple |
| **Complejidad** | Baja | Media o alta |
| **Costo de datos** | Bajo | Alto (más ensayos) |
| **Uso recomendado** | Diseño preliminar y control base | Validación crítica y optimización fina |
| **Interpretabilidad** | Alta | Depende de parametrización |

La estrategia robusta es escalonada: iniciar con modelo ideal, auditar error, y migrar al extendido solo cuando el criterio cuantitativo lo exige.
