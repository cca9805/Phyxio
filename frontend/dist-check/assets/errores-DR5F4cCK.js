const e=`# Errores frecuentes: sistemas reales\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
**Por qué parece correcto**\r
\r
Cuando la respuesta dinámica es pobre, el estudiante suele culpar de inmediato a una orden baja de [[F_ap]]. En problemas ideales esa intuición puede funcionar.\r
\r
**Por qué es incorrecto**\r
\r
En sistemas reales, la magnitud causal para la aceleración es [[F_net]], no [[F_ap]] aislada. Si [[F_loss]] crece, la aceleración baja aunque el mando se mantenga.\r
\r
**Señal de detección**\r
\r
La explicación no contiene balance de pérdidas y salta directamente de [[F_ap]] a [[a]].\r
\r
**Corrección conceptual**\r
\r
Forzar primero el balance efectivo de fuerzas:\r
\r
{{f:fuerza_neta_real}}\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos transportadores reciben la misma orden de fuerza. El que tiene mayor [[F_loss]] acelera menos y tarda más en arrancar carga.\r
\r
### Error 2: Aplicar fórmulas sin validar contexto\r
\r
**Por qué parece correcto**\r
\r
En entrenamientos repetitivos se interioriza que sustituir números basta para resolver.\r
\r
**Por qué es incorrecto**\r
\r
Una ecuación puede ser correcta y, aun así, no representar el estado físico real. Si cambian temperatura, carga o régimen de fricción, un modelo constante se vuelve frágil.\r
\r
**Señal de detección**\r
\r
No aparece ninguna línea de validez del tipo "este cálculo aplica si...".\r
\r
**Corrección conceptual**\r
\r
Antes de operar, declarar hipótesis de validez y variables consideradas constantes.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con calentamiento rápido, mantener [[eta]] fija produce estimaciones optimistas de desempeño.\r
\r
### Error 3: Tratar magnitudes similares como si fueran equivalentes\r
\r
**Por qué parece correcto**\r
\r
[[F_ap]], [[F_loss]] y [[F_net]] comparten unidades de fuerza y visualmente parecen intercambiables.\r
\r
**Por qué es incorrecto**\r
\r
Sus roles físicos son distintos: entrada, pérdida y efecto útil. Mezclarlas rompe la causalidad de la resolución.\r
\r
**Señal de detección**\r
\r
El alumno aplica la segunda ley con [[F_ap]] sin construir previamente [[F_net]].\r
\r
**Corrección conceptual**\r
\r
Usar una tabla breve con tres columnas: entrada, pérdida y fuerza efectiva. Luego aplicar:\r
\r
{{f:segunda_ley_efectiva}}\r
\r
**Mini-ejemplo de contraste**\r
\r
Con [[F_ap]] alta y [[F_loss]] también alta, la aceleración real puede quedar por debajo de la esperada por intuición ideal.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
**Por qué parece correcto**\r
\r
Si un esquema funcionó en ejercicios anteriores, se asume que seguirá funcionando siempre.\r
\r
**Por qué es incorrecto**\r
\r
En planta aparecen efectos no lineales, cambios de masa y deriva térmica que violan las hipótesis base.\r
\r
**Señal de detección**\r
\r
Se observa discrepancia sostenida entre predicción y medición bajo condiciones repetibles.\r
\r
**Corrección conceptual**\r
\r
Definir umbral de transición y pasar a modelo extendido cuando el error sistemático lo supere.\r
\r
{{f:segunda_ley_masa_variable}}\r
\r
**Mini-ejemplo de contraste**\r
\r
Una cinta con descarga continua mantiene orden similar pero cambia su masa efectiva; el modelo de masa constante deja de ajustar.\r
\r
### Error 5: Ignorar límites de validez explícitos\r
\r
**Por qué parece correcto**\r
\r
Muchos estudiantes ven los límites como texto accesorio y no como parte del resultado.\r
\r
**Por qué es incorrecto**\r
\r
Sin límites, el número final parece universal y se pierde criterio de confianza.\r
\r
**Señal de detección**\r
\r
El cierre no indica condiciones de operación en las que el resultado es fiable.\r
\r
**Corrección conceptual**\r
\r
Terminar cada solución con una línea operativa de validez y una condición clara de cambio de modelo.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un ajuste válido en frío deja de ser representativo tras horas de trabajo por aumento de [[P_loss]].\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
**Por qué parece correcto**\r
\r
Los pasos simbólicos pueden parecer limpios aunque contengan un signo incorrecto.\r
\r
**Por qué es incorrecto**\r
\r
Un signo mal puesto cambia la interpretación de estabilidad, arranque y seguridad.\r
\r
**Señal de detección**\r
\r
Aparecen resultados con dirección física incompatible con el escenario.\r
\r
**Corrección conceptual**\r
\r
Aplicar doble chequeo: coherencia de signo esperado y consistencia dimensional antes de aceptar el resultado.\r
\r
{{f:aceleracion_ideal}}\r
\r
**Mini-ejemplo de contraste**\r
\r
Con mando de tracción positiva, un despeje defectuoso puede entregar aceleración negativa sin sentido físico.\r
\r
### Error 7: Inconsistencia de unidades en balances de potencia\r
\r
**Por qué parece correcto**\r
\r
Bajo presión de tiempo se prioriza el número y se pospone el control de unidades.\r
\r
**Por qué es incorrecto**\r
\r
Mezclar kW con W en el mismo balance distorsiona [[P_loss]] y genera conclusiones falsas sobre [[eta]].\r
\r
**Señal de detección**\r
\r
Los órdenes de magnitud cambian sin una causa física justificable.\r
\r
**Corrección conceptual**\r
\r
Normalizar unidades al inicio y conservarlas visibles en cada paso energético.\r
\r
{{f:potencia_perdida}}\r
\r
**Mini-ejemplo de contraste**\r
\r
Si [[P_in]] se expresa en kW y [[P_out]] en W sin conversión, la pérdida calculada queda físicamente absurda.\r
\r
## Errores de interpretación\r
\r
### Error 8: Reportar precisión superior a la que permite el modelo\r
\r
**Por qué parece correcto**\r
\r
Más decimales se perciben como más rigor.\r
\r
**Por qué es incorrecto**\r
\r
La incertidumbre instrumental y de modelo suele dominar antes del cuarto decimal.\r
\r
**Señal de detección**\r
\r
Se toman decisiones operativas por diferencias menores que el ruido experimental.\r
\r
**Corrección conceptual**\r
\r
Ajustar cifras significativas a la incertidumbre y discutir sensibilidad del resultado.\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos alternativas con [[eta]] casi idéntica no pueden jerarquizarse sin análisis de incertidumbre.\r
\r
### Error 9: Cerrar con número sin lectura física\r
\r
**Por qué parece correcto**\r
\r
Tras completar operaciones, el alumno interpreta que el ejercicio está terminado.\r
\r
**Por qué es incorrecto**\r
\r
Sin lectura causal, el valor no guía diagnóstico ni decisión de ingeniería.\r
\r
**Señal de detección**\r
\r
El cierre solo entrega [[a]] o [[P]] final, sin explicar implicación operativa.\r
\r
**Corrección conceptual**\r
\r
Añadir siempre tres frases de cierre: significado físico, límite de validez y decisión sugerida.\r
\r
{{f:potencia_traslacional}}\r
\r
**Mini-ejemplo de contraste**\r
\r
Un valor correcto de [[P]] no basta: la interpretación determina si conviene mantenimiento, ajuste de carga o cambio de control.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de aceptar una resolución, revisar esta secuencia mínima:\r
\r
- Separar entrada, pérdida y efecto usando [[F_ap]], [[F_loss]] y [[F_net]].\r
- Comprobar que la dinámica se calcula con fuerza neta y no con fuerza de mando.\r
- Verificar coherencia energética entre [[P_in]], [[P_out]] y [[P_loss]].\r
- Declarar explícitamente condición de validez y umbral de cambio de modelo.\r
- Cerrar con interpretación causal y decisión operativa.\r
\r
## Cierre operativo\r
\r
Este catálogo funciona como protocolo de autocontrol. Si el estudiante separa entrada, pérdida y efecto, declara validez del modelo y cierra con interpretación causal, la calidad de resolución sube de forma inmediata y transferible a contexto real.`;export{e as default};
