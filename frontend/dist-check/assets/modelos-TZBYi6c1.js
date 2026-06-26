const e=`# Modelos físicos de enchufes y tomas\r
\r
## Modelo ideal\r
\r
El modelo de toma ideal trata los contactos metálicos como conductores perfectos con [[R_contacto]] = 0 y por tanto [[P_perdida]] = 0. En este modelo, la corriente total [[I_tot]] fluye sin pérdida desde el pin del enchufe al conductor del circuito. La toma solo actúa como interruptor mecánico y punto de conexión sin efecto térmico propio.\r
\r
Este modelo ideal es el punto de referencia para definir el concepto de sobrecarga: cuando [[I_tot]] supera [[I_max]], se supera el límite de diseño del componente, independientemente de [[R_contacto]].\r
\r
## Hipótesis\r
\r
- Los contactos metálicos son conductores perfectos en el modelo ideal.\r
- Toda la resistencia parásita del circuito está concentrada en [[R_contacto]] cuando el modelo incluye pérdidas de contacto.\r
- Las cargas son resistivas puras con factor de potencia unitario.\r
- La corriente es alterna sinusoidal y se usa su valor eficaz (RMS).\r
- El régimen es permanente: no se modelan transitorios de arranque ni ciclos intermitentes.\r
- [[P_tot]] = suma de potencias nominales con factor de simultaneidad = 1 (peor caso).\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo es válido cuando se cumplen simultáneamente:\r
- Régimen permanente: tiempo de operación > 30 minutos sin cambios de carga.\r
- Factor de potencia ≥ 0,85 para las cargas conectadas.\r
- [[I_tot]] ≤ 2 · [[I_max]] (para factores de simultaneidad menores que 1, la corriente real puede ser menor).\r
- [[R_contacto]] ≤ 1 Ω (para valores mayores, el modelo de Joule localizado puede subestimar la temperatura real del contacto).\r
\r
**Condición cuantitativa de riesgo:** [[margen_uso]] ≥ 0,8 en uso continuo (más de 2 horas) activa la zona de vigilancia. [[margen_uso]] ≥ 1 indica sobrecarga activa que requiere acción inmediata. [[P_perdida]] ≥ 1 W indica disipación de contacto apreciable; [[P_perdida]] ≥ 5 W es condición de riesgo térmico severo.\r
\r
## Señales de fallo del modelo\r
\r
El modelo de Joule localizado falla o es insuficiente cuando:\r
- El enchufe se calienta apreciablemente con [[I_tot]] muy por debajo de [[I_max]]: indica [[R_contacto]] muy alta, posiblemente por conexión no completamente insertada o contacto muy oxidado.\r
- La temperatura del enchufe fluctúa sin cambios de carga: puede indicar un contacto intermitente que genera arcos eléctricos locales, fenómeno no modelado por la resistencia estática.\r
- El calentamiento aparece solo en un polo (fase o neutro) y no en el otro: indica asimetría de [[R_contacto]] entre los dos contactos del enchufe.\r
- Los síntomas aparecen tras arranque de motor (compresor, bomba): el transitorio de arranque puede generar [[I_tot]] pico muy superior a la nominal, calentando el contacto aunque la corriente en régimen permanente esté dentro del límite.\r
\r
Estas señales de fallo observable indican que el modelo estático no es suficiente y que se requiere inspección física del contacto.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo estático es insuficiente, se puede extender incorporando:\r
1. **Resistencia térmica del contacto al entorno**: permite predecir la temperatura real del contacto en función de [[P_perdida]] y las condiciones de ventilación. Requiere datos del fabricante (resistencia térmica en K/W).\r
2. **Modelo de arco eléctrico intermitente**: cuando el contacto está muy degradado, puede generar microarcos que disipan energía de forma no lineal. Este modelo requiere análisis de señal de corriente, no solo valor eficaz.\r
3. **Factor de simultaneidad real**: en lugar de asumir todos los equipos encendidos al máximo, se puede estimar la probabilidad de que todos estén encendidos al mismo tiempo usando distribuciones estadísticas de uso.\r
\r
La transición al modelo extendido se justifica cuando el modelo simple predice seguridad pero hay síntomas físicos observables de calentamiento.\r
\r
## Cuándo cambiar de modelo\r
\r
La transicion (cambio de modelo) del esquema de [[margen_uso]] al modelo extendido con [[R_contacto]] — cuando conviene cambiar de modelo — se produce cuando los síntomas físicos no son explicables por sobrecarga simple:\r
- [[margen_uso]] < 0,8 pero el enchufe o regleta está perceptiblemente caliente al tacto.\r
- La temperatura superficial del plástico supera 40 °C con corriente moderada.\r
- Hay decoloración, olor o chispa visible en el momento de la conexión.\r
- La toma tiene más de 15 años de uso continuo en aplicaciones de alta potencia.\r
\r
En estos casos, el modelo de resistencia estática de Joule localizado debe complementarse con inspección física del contacto o medición directa de [[R_contacto]] con instrumento de resolución mili-ohm. Si [[R_contacto]] > 0,5 Ω, la sustitución de la toma es la única solución segura.\r
\r
## Comparación operativa\r
\r
| Situación | Modelo adecuado | Variable crítica |\r
|-----------|----------------|-----------------|\r
| Verificación preventiva (sin síntomas) | Modelo de [[margen_uso]] | [[margen_uso]] |\r
| Calentamiento con carga normal | Modelo de Joule + [[R_contacto]] | [[P_perdida]], [[R_contacto]] |\r
| Calentamiento intermitente | Modelo de arco (requiere técnico) | Inspección física |\r
| Diseño de regleta nueva | Modelo completo con [[P_max]] | [[I_max]], [[P_max]] |\r
\r
En la práctica doméstica, el modelo de [[margen_uso]] y el modelo de Joule localizado cubren más del 90 % de los casos de diagnóstico sin necesidad de instrumentación específica.\r
`;export{e as default};
