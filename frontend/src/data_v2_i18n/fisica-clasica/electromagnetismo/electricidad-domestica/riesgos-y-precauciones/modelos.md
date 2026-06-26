# Modelos de riesgos y precauciones

## Modelo ideal

El **modelo ideal de evaluación de riesgos** representa el riesgo eléctrico local como el producto de potencia térmica disipada [[potencia_termica_disipada]] por el tiempo de exposición [[tiempo_de_exposicion]], permitiendo cuantificar el daño térmico acumulado [[energia_termica_acumulada]]. En este modelo simplificado:

{{f:potencia_joule}}

{{f:energia_joule}}

La simplificación central consiste en asumir que la resistencia de contacto [[resistencia_electrica_local]] permanece constante durante el intervalo considerado, y que la corriente [[corriente_electrica]] es el valor eficaz representativo del uso. Se ignoran las variaciones de resistencia con la temperatura, los transitorios térmicos, y la dependencia de la resistencia térmica [[resistencia_termica]] con las condiciones de disipación ambiental.

## Hipótesis

- **Hipótesis de resistencia constante**: La resistencia de contacto [[resistencia_electrica_local]] no varía apreciablemente con la temperatura durante el período de evaluación. Si se viola (calentamiento significativo), la resistencia aumenta y el modelo subestima el riesgo real.

- **Hipótesis de régimen estacionario**: La potencia térmica [[potencia_termica_disipada]] es constante o varía lentamente respecto a la constante de tiempo térmica del sistema. Si se viola (transitorios rápidos), la temperatura real difiere de la estimada.

- **Hipótesis de resistencia térmica conocida**: El valor [[resistencia_termica]] puede estimarse razonablemente para el tipo de conexión. Si se desconoce, el incremento térmico [[incremento_de_temperatura]] solo puede determinarse por medición directa.

- **Hipótesis de corriente medible**: La corriente [[corriente_electrica]] puede determinarse con multímetro de gancho o estimarse por la carga conectada. Si no es medible, el cálculo de [[potencia_termica_disipada]] depende de estimaciones de resistencia.

- **Hipótesis de independencia térmica**: Cada punto de conexión se evalúa independientemente, sin considerar transferencia de calor entre puntos próximos. Válida cuando los puntos están separados > 10 cm.

## Dominio de validez cuantitativo

El modelo ideal es aplicable cuando se cumplen las siguientes condiciones:

- **Resistencia estable**: Variación de [[resistencia_electrica_local]] menor que 20 % durante el período de evaluación. Contactos en buen estado o ligeramente degradados.

- **Corriente representativa**: Corriente [[corriente_electrica]] que varía menos de ±30 % respecto al valor medio durante el uso típico.

- **Temperatura moderada**: Incremento térmico [[incremento_de_temperatura]] inferior a 60 K, donde los cambios de resistencia con temperatura son aún moderados.

- **Desigualdad de validez**: El modelo es válido cuando la constante de tiempo térmica del sistema es mucho menor que el tiempo de exposición [[tiempo_de_exposicion]].

- **Régimen cuasi-estacionario**: Variaciones de carga con periodos superiores a 10 minutos, permitiendo que la temperatura siga a la potencia disipada.

## Señales de fallo del modelo

El modelo ideal deja de ser aplicable cuando aparecen estos síntomas:

- **Incremento térmico muy elevado**: [[incremento_de_temperatura]] > 60 K indica que la resistencia probablemente ha aumentado significativamente con la temperatura.

- **Olor a plástico caliente**: Señal de que la temperatura ha superado el límite de degradación del material aislante (> 80-100 °C).

- **Variación rápida de temperatura**: Cambios de más de 10 K en menos de 5 minutos indican transitorio térmico no capturado por el modelo estacionario.

- **Medición de resistencia creciente**: Si [[resistencia_electrica_local]] medida en frío difiere significativamente de la estimada en caliente, el modelo subestima el riesgo.

- **Carbonización visible**: Evidencia de que la temperatura ha superado los 150 °C, invalidando las hipótesis de comportamiento lineal.

## Modelo extendido o alternativo

El **modelo extendido de evaluación térmica** incorpora la dependencia de la resistencia eléctrica con la temperatura y considera el régimen transitorio térmico. En este modelo:

- La resistencia [[resistencia_electrica_local]] se modela como función lineal de la temperatura: R(T) = R₀[1 + α(T - T₀)]
- La temperatura sigue una ecuación diferencial de primer orden: el incremento térmico temporal [[incremento_de_temperatura]]/[[tiempo_de_exposicion]] = ([[potencia_termica_disipada]]/[[capacidad_termica]]) - ([[incremento_de_temperatura]]/([[resistencia_termica]]·[[capacidad_termica]]))
- Se requiere conocer la capacidad térmica [[capacidad_termica]] del sistema, además de la resistencia térmica [[resistencia_termica]]

Este modelo es necesario cuando se observan incrementos térmicos superiores a 40 K o cuando el sistema experimenta ciclos de carga/desconexión frecuentes.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|:---|:---|:---|
| **Precisión** | Alta (error < 15 %) para ΔT < 40 K | Muy alta (error < 5 %) considerando no linealidades |
| **Complejidad** | Baja. Cálculos algebraicos simples | Media. Requiere resolución de ecuaciones diferenciales |
| **Rango de aplicación** | Mantenimiento preventivo habitual | Diagnóstico de fallos, certificación, mejoras térmicas |
| **Variables necesarias** | [[corriente_electrica]], [[resistencia_electrica_local]], [[tiempo_de_exposicion]], [[resistencia_termica]] estimados | [[corriente_electrica]](t), R(T), [[capacidad_termica]], [[resistencia_termica]] precisos |
| **Validez típica** | Regletas, enchufes en uso normal | Puntos críticos, instalaciones industriales |
| **Ventaja principal** | Rapidez y simplicidad de cálculo | Precisión realista para condiciones extremas |
| **Límite principal** | Subestima riesgo a alta temperatura | Requiere datos adicionales difíciles de obtener |
| **Cuándo usar** | Evaluación rutinaria, priorización rápida | Análisis detallado, diseño de mejoras, certificación |

El modelo ideal es suficiente para la mayoría de las evaluaciones domésticas preventivas. El modelo extendido solo es necesario cuando se detectan anomalías significativas (olor, deformación, incremento térmico > 40 K) o en aplicaciones profesionales donde la precisión completa justifica el esfuerzo adicional de caracterización térmica.

## Transición entre modelos

### Cuando conviene cambiar de modelo

La transición del **modelo ideal** al **modelo extendido** debe realizarse cuando:

- **Incremento térmico elevado persistente**: Cuando [[incremento_de_temperatura]] supera 40 K de forma estable, indicando probable aumento de resistencia con temperatura.

- **Ciclos térmicos frecuentes**: Cuando el punto de conexión experimenta más de 5 ciclos de encendido/apagado por hora, generando transitorios térmicos significativos.

- **Material degradado**: Cuando se observa decoloración, deformación o olor en el material aislante, indicando que las propiedades térmicas/eléctricas han cambiado.

- **Evaluación de mejoras térmicas**: Cuando se quiere predecir el efecto de mejorar la disipación (ventilación, cambio de material), requiriendo el modelo completo con [[capacidad_termica]] y [[resistencia_termica]].

- **Certificación normativa**: Para documentación técnica formal que debe incluir márgenes de seguridad calculados con mayor precisión.

### Cómo realizar la transición

El cambio de modelo consiste en:

1. **Medir resistencia en frío y en caliente**: Determinar el coeficiente de temperatura α experimentalmente.

2. **Estimar capacidad térmica [[capacidad_termica]]**: A partir de la masa y material del conector, o mediante ensayo de respuesta transitoria.

3. **Resolver la ecuación diferencial térmica**: Numéricamente o analíticamente para los perfiles de carga típicos.

4. **Verificar con medición directa de temperatura**: Comparar predicciones del modelo extendido con lecturas de termómetro infrarrojo.