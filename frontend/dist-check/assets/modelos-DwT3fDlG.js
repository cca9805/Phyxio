const e=`# Modelos fisicos: Arrastre lineal\r
\r
## Modelo ideal\r
\r
El modelo ideal de este leaf asume que la resistencia del fluido puede describirse con una proporcionalidad directa entre [[F_d]] y [[v]] dentro de una ventana operativa concreta. Es una idealizacion util porque simplifica el analisis dinamico y permite calibracion experimental rapida.\r
\r
Las simplificaciones clave son:\r
\r
- La relacion fuerza-rapidez es aproximadamente lineal en el intervalo de interes.\r
- El parametro [[b]] puede tratarse como constante durante el fenomeno analizado.\r
- La geometria efectiva del cuerpo no cambia de forma relevante.\r
- El medio se mantiene suficientemente estable en propiedades que afectan [[b]].\r
\r
Este modelo no es "menos fisico" por ser simple. Es fisico porque declara sus hipotesis y funciona bien cuando esas hipotesis se cumplen.\r
\r
## Hipótesis\r
\r
Hipotesis operativas del modelo:\r
\r
- Hipotesis de referencia: [[v]] se define respecto al fluido, no respecto a un sistema arbitrario.\r
- Hipotesis constitutiva: [[F_d]] depende linealmente de [[v]] en el rango estudiado.\r
- Hipotesis de parametro efectivo: [[b]] resume medio y geometria para ese rango, sin variaciones bruscas.\r
- Hipotesis dinamica: [[m]] se mantiene constante y permite interpretar [[tau]] como escala temporal coherente.\r
\r
Si cualquiera de estas hipotesis se rompe, la lectura lineal puede perder poder explicativo y predictivo.\r
\r
## Dominio de validez cuantitativo\r
\r
Para uso didactico y tecnico inicial, se recomienda validar el modelo con criterios cuantitativos explicitos:\r
\r
1. Ajuste lineal de la grafica [[F_d]]-[[v]] con coeficiente de determinacion alto en el tramo de trabajo.\r
2. Variacion relativa de la pendiente estimada ([[b]]) inferior al margen definido por el protocolo experimental.\r
3. Error relativo medio entre prediccion lineal y medicion dentro del umbral aceptado por la aplicacion.\r
4. Consistencia dimensional y de signo en todos los datos procesados.\r
\r
Un criterio practico de aula y laboratorio es aceptar el modelo lineal cuando el error relativo en el intervalo principal se mantiene por debajo de 10 % y no se observa curvatura sistematica en residuos. Si el error crece y la curvatura aparece, el problema no es de redondeo: el mecanismo dominante puede estar cambiando.\r
\r
## Señales de fallo del modelo\r
\r
Indicadores observables de fallo:\r
\r
- La pendiente aparente de [[F_d]]-[[v]] deja de ser estable.\r
- El mismo [[b]] no permite explicar subrangos distintos de [[v]].\r
- La estimacion de [[tau]] cambia de forma incoherente entre ensayos nominalmente equivalentes.\r
- Las conclusiones dependen mas de ajuste numerico que de mecanismo fisico.\r
\r
Cuando estas señales aparecen, la lectura correcta no es forzar el mismo modelo, sino declarar limite de validez y preparar transicion.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo alternativo natural es una descripcion no lineal del arrastre cuando la proporcionalidad simple deja de representar los datos. En ese escenario, el termino resistivo crece mas rapidamente con la rapidez y la pendiente ya no puede resumirse con un unico [[b]] constante.\r
\r
Tambien puede ser necesario un modelo por tramos: tramo lineal en bajas velocidades y tramo no lineal en velocidades mayores, con un criterio claro de cambio.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo lineal | Modelo no lineal o por tramos |\r
|---------|---------------|-------------------------------|\r
| Relacion [[F_d]]-[[v]] | Proporcional | Curvatura apreciable |\r
| Parametro dominante | [[b]] casi constante | Parametros efectivos variables |\r
| Complejidad | Baja | Media o alta |\r
| Interpretacion rapida | Muy buena | Requiere mas contexto |\r
| Riesgo de extrapolacion | Alto fuera de rango | Menor si se calibra bien |\r
\r
Transicion explicita a modelo alternativo: conviene cambiar de modelo cuando el ajuste lineal pierde estabilidad en el rango objetivo, cuando el error supera el umbral aceptado de forma sistematica o cuando una unica pendiente ya no representa los datos con honestidad fisica.\r
\r
En resumen, el modelo lineal es excelente para lectura inicial, calibracion y analisis de respuesta temporal con [[tau]]. Su fortaleza depende de respetar su dominio y de activar la transicion de modelo en cuanto las senales de fallo aparezcan.`;export{e as default};
