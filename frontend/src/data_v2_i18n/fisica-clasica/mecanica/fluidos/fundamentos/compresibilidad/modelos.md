# Modelos Físicos de Compresibilidad

## Modelo ideal
El modelo ideal de compresibilidad se basa en la **Teoría de la Elasticidad Lineal de los Fluidos**, que describe la respuesta volumétrica de un medio continuo ante esfuerzos de compresión hidrostática. En este modelo, el fluido se considera un muelle volumétrico perfecto donde la deformación relativa es linealmente proporcional a la carga de presión aplicada. A diferencia de los sólidos, el fluido ideal no soporta esfuerzos cortantes, por lo que toda la energía de deformación se almacena exclusivamente en el cambio de volumen. Este modelo es la base de la hidrostática avanzada y la acústica física elemental.

## Hipótesis
Para aplicar este modelo de forma rigurosa, se deben asumir las siguientes simplificaciones fundamentales:
1.  **Homogeneidad e Isotropía**: Las propiedades elásticas como [[B]] y [[beta]] son idénticas en todos los puntos del fluido y en todas las direcciones del espacio.
2.  **Régimen Lineal**: Se supone que el módulo volumétrico [[B]] es una constante del material que no depende de la presión actual.
3.  **Proceso Isotérmico**: Se asume que el calor generado por la compresión se disipa instantáneamente, manteniendo la temperatura constante.
4.  **Continuidad**: El fluido se trata como un continuo, ignorando los efectos de la estructura molecular o huecos microscópicos.

## Dominio de validez cuantitativo
El modelo lineal es altamente preciso y confiable bajo las siguientes métricas cuantitativas:
- **Líquidos**: Para la gran mayoría de aceites y agua, el error del modelo es inferior al 1% para presiones de hasta 1000 bar (100 MPa).
- **Gases**: Válido solo para variaciones de presión extremadamente pequeñas, donde la relación Delta p / p_0 sea menor a 0.05.
- **Régimen Subsónico**: En dinámica, el modelo es válido para números de Mach inferiores a 0.3, donde el aire puede tratarse como casi incompresible.
- **Deformaciones**: La robustez se mantiene siempre que la contracción relativa sea inferior al 5% del volumen inicial [[V]].

## Señales de fallo del modelo
Un investigador debe estar alerta a las siguientes señales que indican que el modelo ideal ha dejado de ser representativo:
1.  **Histéresis Volumétrica**: Si al retirar la presión el fluido no recupera su volumen original exacto, lo que sugiere la presencia de efectos viscosos o plásticos no contemplados.
2.  **Calentamiento Térmico**: Si la temperatura del sistema aumenta significativamente durante la compresión, lo que invalida la hipótesis de proceso isotérmico y requiere un ajuste adiabático.
3.  **No linealidad en la velocidad del sonido**: Si la velocidad de las ondas medidas experimentalmente no coincide con la predicción teórica sqrt{B/rho}, es una señal clara de que [[B]] está variando con la presión.

## Modelo extendido o alternativo
Cuando se superan los límites del dominio ideal, decidir cuando conviene cambiar de modelo es una decisión crítica:
1.  **Ecuación de Estado de Tait**: Es la alternativa obligatoria para líquidos sometidos a presiones extremas (como en el fondo de las fosas oceánicas).
2.  **Modelo Adiabático (Isentrópico)**: Utilizado en acústica de alta frecuencia donde no hay tiempo para el intercambio de calor.
3.  **Ecuación de Van der Waals**: Para gases reales donde el volumen ocupado por las propias moléculas y las fuerzas de atracción intermoleculares se vuelven relevantes.

## Comparación operativa
Mientras que el modelo ideal es perfectamente suficiente para el cálculo de gatos hidráulicos y prensas industriales, el modelo adiabático es el estándar en la ciencia acústica. Por otro lado, en la industria petroquímica de alta presión y en la aerodinámica de proyectiles supersónicos, el uso de ecuaciones de estado de gases reales es crítico para evitar errores de diseño que podrían llevar al colapso estructural. La elección del modelo depende siempre del equilibrio entre la precisión requerida y la complejidad computacional del problema.
