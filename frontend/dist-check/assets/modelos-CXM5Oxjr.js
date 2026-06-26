const e=`# Modelos y validez\r
\r
## Modelo ideal\r
\r
El modelo ideal de energia en MHS representa un oscilador armonico simple sin disipacion dominante y sin trabajo externo neto relevante durante la ventana de observacion. En ese marco, la dinamica energetica no se describe como una perdida continua, sino como un intercambio ordenado entre [[K]] y [[U]] mientras la escala total [[E]] permanece estable. Este enfoque transforma el problema en una lectura de balance, no solo de trayectoria.\r
\r
La principal ventaja del modelo es que convierte magnitudes de energia en criterios fisicos interpretables. [[K]] indica movimiento instantaneo, [[U]] indica almacenamiento elastico y [[E]] resume el techo energetico del sistema ideal. Con esa estructura se puede decidir si un registro experimental es compatible con conservacion o si ya hay evidencia suficiente para pasar a un modelo con disipacion.\r
\r
## Hipótesis\r
\r
1. Sistema ideal sin rozamiento dominante ni trabajo externo neto relevante.\r
2. Resorte lineal y masa efectiva bien definida.\r
3. Magnitudes [[x]] y [[v]] medidas en un rango donde la aproximacion lineal es valida.\r
4. Parametros [[m]], [[k]] y [[A]] estables durante la observacion.\r
5. Resolucion temporal suficiente para reconstruir intercambio entre [[K]] y [[U]].\r
\r
Sin estas hipotesis, la lectura de conservacion puede volverse solo aparente y perder valor diagnostico.\r
\r
## Dominio de validez cuantitativo\r
\r
Criterios operativos de uso:\r
\r
- deriva relativa de [[E]] < 5% durante al menos 5 ciclos;\r
- error relativo de reconstruccion entre [[K]]+[[U]] y [[E]] < 8%;\r
- amplitud [[A]] dentro del rango lineal del resorte, por ejemplo < 10% del recorrido mecanico util;\r
- variacion relativa de [[k]] y [[m]] < 5% en la secuencia analizada;\r
- ruido instrumental sobre magnitudes energeticas derivadas < 10%.\r
\r
Estos umbrales no son universales, pero sirven como contrato minimo para aceptar que el modelo energetico ideal conserva capacidad explicativa.\r
\r
## Señales de fallo del modelo\r
\r
1. [[E]] decrece o aumenta de forma sistematica con el tiempo.\r
2. [[K]] y [[U]] no intercambian dominancia en los tramos esperados del ciclo.\r
3. La reconstruccion de [[E]] desde [[A]] y [[k]] contradice repetidamente el balance instantaneo.\r
4. Pequeños cambios de ventana temporal alteran de forma grande la lectura energetica.\r
5. La curva temporal sugiere amortiguamiento o excitacion externa no modelada.\r
\r
Estas señales son observables y obligan a revisar supuestos, no solo aritmetica.\r
\r
## Modelo extendido o alternativo\r
\r
Si la energia total deja de permanecer estable, el modelo alternativo natural es el oscilador amortiguado. Si existe aporte energetico externo, conviene pasar a un modelo forzado. Si la relacion elastica deja de ser lineal, conviene usar una descripcion no lineal donde [[U]] ya no dependa cuadráticamente del desplazamiento.\r
\r
El cambio de modelo tiene un criterio fisico claro: cuando la hipotesis de intercambio puro entre [[K]] y [[U]] deja de describir datos con error acotado, el modelo ideal ya no debe sostener decisiones de interpretacion.\r
\r
## Comparación operativa\r
\r
Modelo ideal energetico:\r
- explica el intercambio entre [[K]] y [[U]] con gran claridad conceptual;\r
- permite comprobar conservacion a partir de balances simples;\r
- sirve para aula, laboratorio basico y diagnostico inicial.\r
\r
Modelo extendido:\r
- necesario cuando hay disipacion, forzamiento o no linealidad apreciable;\r
- exige mas parametros y mejor control experimental;\r
- ofrece mayor fidelidad si el sistema real se aparta de la idealidad.\r
\r
Transicion explicita a modelo alternativo: cuando conviene cambiar de modelo es cuando la deriva relativa de [[E]] > 5% de forma sostenida o cuando el error entre [[K]]+[[U]] y [[E]] > 8% en varios ciclos. En ese punto, mantener el modelo ideal oculta fisica importante y puede degradar conclusiones de diseño o de laboratorio.\r
`;export{e as default};
