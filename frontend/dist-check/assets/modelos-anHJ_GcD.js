const e=`# Modelos físicos: Concepto fuerza centripeta\r
\r
## Modelo ideal\r
\r
El modelo base del leaf describe trayectorias circulares con radio [[r]] fijo y con una lectura clara de la resultante radial [[Frad]]. En este marco, la aceleracion [[ac]] no cambia la rapidez por si sola, sino la direccion de la velocidad. Esa idea permite conectar cinematica y dinamica sin ambiguedades.\r
\r
Las simplificaciones principales son:\r
\r
- Se modela el objeto como particula cuando su tamano no altera la geometria del giro.\r
- Se asume que las magnitudes de entrada ([[m]], [[r]], [[v]] o [[omega]]) son suficientemente estables en el intervalo de analisis.\r
- Se ignoran acoplamientos secundarios que no cambian el orden de magnitud de [[Frad]].\r
\r
Este modelo es deliberadamente economico y util para diagnostico rapido, diseno preliminar y aprendizaje conceptual.\r
\r
## Hipótesis\r
\r
Las hipotesis operativas son:\r
\r
- El movimiento es aproximadamente circular en el tramo estudiado.\r
- El eje radial esta bien definido y permite proyectar fuerzas reales.\r
- Las relaciones entre [[v]], [[omega]], [[T]] y [[r]] son consistentes entre si.\r
- Las unidades estan en SI y [[pi]] se usa de forma coherente al convertir periodo en velocidad angular.\r
\r
Si alguna hipotesis falla, los resultados pueden seguir siendo numericos pero dejan de ser interpretables fisicamente.\r
\r
## Dominio de validez cuantitativo\r
\r
El uso del modelo es razonable cuando:\r
\r
- [[r]] > 0 y se mantiene casi constante.\r
- [[v]] >= 0 y sin oscilaciones extremas en el tramo.\r
- [[omega]] > 0 en regimen de giro definido.\r
- [[T]] > 0 con medicion temporal confiable.\r
\r
Como criterio practico, si la prediccion y la medicion de [[ac]] o [[Fc]] discrepan de forma sistematica por encima de 10% a 15% sin explicacion experimental, conviene revisar supuestos.\r
\r
## Señales de fallo del modelo\r
\r
Hay cuatro alertas frecuentes:\r
\r
- El radio efectivo cambia a lo largo del tramo y ya no representa una circunferencia unica.\r
- Aparece derrape sostenido, de modo que la direccion real del movimiento no coincide con el esquema de giro ideal.\r
- La proyeccion radial de fuerzas deja de cerrar con la estimacion de [[Frad]].\r
- Pequenas variaciones de entrada producen saltos no realistas en la salida, senal de que falta fisica relevante.\r
\r
Estas senales no invalidan la teoria; indican que el problema necesita un modelo mas rico.\r
\r
## Modelo extendido o alternativo\r
\r
El paso natural es incluir efectos que en el modelo ideal se omiten: adherencia no lineal, variacion de radio, deformacion, control activo o perturbaciones del entorno.\r
\r
Transicion explicita: conviene cambiar al modelo alternativo cuando la discrepancia observacion-prediccion se mantiene por encima del umbral acordado en varios ensayos, o cuando las senales de fallo aparecen de forma repetida bajo condiciones nominales.\r
\r
Ese cambio no es un castigo al modelo simple, sino una decision metodologica: mantener simplicidad cuando basta y aumentar complejidad cuando la evidencia lo exige.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo ideal | Modelo extendido |\r
|---------|--------------|------------------|\r
| Variable central | [[ac]] y [[Frad]] | [[ac]] + efectos acoplados |\r
| Parametros | pocos | mas numerosos |\r
| Costo de calculo | bajo | medio o alto |\r
| Uso recomendado | aprendizaje, prediseno, control rapido | validacion fina, seguridad critica |\r
| Riesgo de sobreajuste | bajo | mayor si faltan datos |\r
\r
La practica experta consiste en elegir el menor modelo que explique el fenomeno con precision suficiente para la decision tecnica en juego.\r
`;export{e as default};
