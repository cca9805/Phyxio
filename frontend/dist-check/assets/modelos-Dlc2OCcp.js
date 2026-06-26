const e=`\uFEFF# Modelos de riesgos y precauciones\r
\r
## Modelo ideal\r
\r
El **modelo ideal de evaluación de riesgos** representa el riesgo eléctrico local como el producto de potencia térmica disipada [[P_joule]] por el tiempo de exposición [[t]], permitiendo cuantificar el daño térmico acumulado [[E_joule]]. En este modelo simplificado:\r
\r
{{f:potencia_joule}}\r
\r
{{f:energia_joule}}\r
\r
La simplificación central consiste en asumir que la resistencia de contacto [[R]] permanece constante durante el intervalo considerado, y que la corriente [[I]] es el valor eficaz representativo del uso. Se ignoran las variaciones de resistencia con la temperatura, los transitorios térmicos, y la dependencia de la resistencia térmica [[R_th]] con las condiciones de disipación ambiental.\r
\r
## Hipótesis\r
\r
- **Hipótesis de resistencia constante**: La resistencia de contacto [[R]] no varía apreciablemente con la temperatura durante el período de evaluación. Si se viola (calentamiento significativo), la resistencia aumenta y el modelo subestima el riesgo real.\r
\r
- **Hipótesis de régimen estacionario**: La potencia térmica [[P_joule]] es constante o varía lentamente respecto a la constante de tiempo térmica del sistema. Si se viola (transitorios rápidos), la temperatura real difiere de la estimada.\r
\r
- **Hipótesis de resistencia térmica conocida**: El valor [[R_th]] puede estimarse razonablemente para el tipo de conexión. Si se desconoce, el incremento térmico [[DeltaT]] solo puede determinarse por medición directa.\r
\r
- **Hipótesis de corriente medible**: La corriente [[I]] puede determinarse con multímetro de gancho o estimarse por la carga conectada. Si no es medible, el cálculo de [[P_joule]] depende de estimaciones de resistencia.\r
\r
- **Hipótesis de independencia térmica**: Cada punto de conexión se evalúa independientemente, sin considerar transferencia de calor entre puntos próximos. Válida cuando los puntos están separados > 10 cm.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo ideal es aplicable cuando se cumplen las siguientes condiciones:\r
\r
- **Resistencia estable**: Variación de [[R]] menor que 20 % durante el período de evaluación. Contactos en buen estado o ligeramente degradados.\r
\r
- **Corriente representativa**: Corriente [[I]] que varía menos de ±30 % respecto al valor medio durante el uso típico.\r
\r
- **Temperatura moderada**: Incremento térmico [[DeltaT]] inferior a 60 K, donde los cambios de resistencia con temperatura son aún moderados.\r
\r
- **Desigualdad de validez**: El modelo es válido cuando la constante de tiempo térmica del sistema es mucho menor que el tiempo de exposición [[t]].\r
\r
- **Régimen cuasi-estacionario**: Variaciones de carga con periodos superiores a 10 minutos, permitiendo que la temperatura siga a la potencia disipada.\r
\r
## Señales de fallo del modelo\r
\r
El modelo ideal deja de ser aplicable cuando aparecen estos síntomas:\r
\r
- **Incremento térmico muy elevado**: [[DeltaT]] > 60 K indica que la resistencia probablemente ha aumentado significativamente con la temperatura.\r
\r
- **Olor a plástico caliente**: Señal de que la temperatura ha superado el límite de degradación del material aislante (> 80-100 °C).\r
\r
- **Variación rápida de temperatura**: Cambios de más de 10 K en menos de 5 minutos indican transitorio térmico no capturado por el modelo estacionario.\r
\r
- **Medición de resistencia creciente**: Si [[R]] medida en frío difiere significativamente de la estimada en caliente, el modelo subestima el riesgo.\r
\r
- **Carbonización visible**: Evidencia de que la temperatura ha superado los 150 °C, invalidando las hipótesis de comportamiento lineal.\r
\r
## Modelo extendido o alternativo\r
\r
El **modelo extendido de evaluación térmica** incorpora la dependencia de la resistencia eléctrica con la temperatura y considera el régimen transitorio térmico. En este modelo:\r
\r
- La resistencia [[R]] se modela como función lineal de la temperatura: R(T) = R₀[1 + α(T - T₀)]\r
- La temperatura sigue una ecuación diferencial de primer orden: el incremento térmico temporal [[DeltaT]]/[[t]] = ([[P_joule]]/[[C_th]]) - ([[DeltaT]]/([[R_th]]·[[C_th]]))\r
- Se requiere conocer la capacidad térmica [[C_th]] del sistema, además de la resistencia térmica [[R_th]]\r
\r
Este modelo es necesario cuando se observan incrementos térmicos superiores a 40 K o cuando el sistema experimenta ciclos de carga/desconexión frecuentes.\r
\r
## Transición entre modelos\r
\r
### Cuando conviene cambiar de modelo\r
\r
La transición del **modelo ideal** al **modelo extendido** debe realizarse cuando:\r
\r
- **Incremento térmico elevado persistente**: Cuando [[DeltaT]] supera 40 K de forma estable, indicando probable aumento de resistencia con temperatura.\r
\r
- **Ciclos térmicos frecuentes**: Cuando el punto de conexión experimenta más de 5 ciclos de encendido/apagado por hora, generando transitorios térmicos significativos.\r
\r
- **Material degradado**: Cuando se observa decoloración, deformación o olor en el material aislante, indicando que las propiedades térmicas/eléctricas han cambiado.\r
\r
- **Evaluación de mejoras térmicas**: Cuando se quiere predecir el efecto de mejorar la disipación (ventilación, cambio de material), requiriendo el modelo completo con [[C_th]] y [[R_th]].\r
\r
- **Certificación normativa**: Para documentación técnica formal que debe incluir márgenes de seguridad calculados con mayor precisión.\r
\r
### Cómo realizar la transición\r
\r
El cambio de modelo consiste en:\r
\r
1. **Medir resistencia en frío y en caliente**: Determinar el coeficiente de temperatura α experimentalmente.\r
\r
2. **Estimar capacidad térmica [[C_th]]**: A partir de la masa y material del conector, o mediante ensayo de respuesta transitoria.\r
\r
3. **Resolver la ecuación diferencial térmica**: Numéricamente o analíticamente para los perfiles de carga típicos.\r
\r
4. **Verificar con medición directa de temperatura**: Comparar predicciones del modelo extendido con lecturas de termómetro infrarrojo.\r
\r
## Comparación operativa\r
\r
| Criterio | Modelo ideal | Modelo extendido |\r
|:---|:---|:---|\r
| **Precisión** | Alta (error < 15 %) para ΔT < 40 K | Muy alta (error < 5 %) considerando no linealidades |\r
| **Complejidad** | Baja. Cálculos algebraicos simples | Media. Requiere resolución de ecuaciones diferenciales |\r
| **Rango de aplicación** | Mantenimiento preventivo habitual | Diagnóstico de fallos, certificación, mejoras térmicas |\r
| **Variables necesarias** | [[I]], [[R]], [[t]], [[R_th]] estimados | [[I]](t), R(T), [[C_th]], [[R_th]] precisos |\r
| **Validez típica** | Regletas, enchufes en uso normal | Puntos críticos, instalaciones industriales |\r
| **Ventaja principal** | Rapidez y simplicidad de cálculo | Precisión realista para condiciones extremas |\r
| **Límite principal** | Subestima riesgo a alta temperatura | Requiere datos adicionales difíciles de obtener |\r
| **Cuándo usar** | Evaluación rutinaria, priorización rápida | Análisis detallado, diseño de mejoras, certificación |\r
\r
El modelo ideal es suficiente para la mayoría de las evaluaciones domésticas preventivas. El modelo extendido solo es necesario cuando se detectan anomalías significativas (olor, deformación, incremento térmico > 40 K) o en aplicaciones profesionales donde la precisión completa justifica el esfuerzo adicional de caracterización térmica.\r
`;export{e as default};
