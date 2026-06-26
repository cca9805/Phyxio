# Modelos y validez

## Modelo ideal

El modelo ideal de energia en MHS representa un oscilador armonico simple sin disipacion dominante y sin trabajo externo neto relevante durante la ventana de observacion. En ese marco, la dinamica energetica no se describe como una perdida continua, sino como un intercambio ordenado entre [[K]] y [[U]] mientras la escala total [[E]] permanece estable. Este enfoque transforma el problema en una lectura de balance, no solo de trayectoria.

La principal ventaja del modelo es que convierte magnitudes de energia en criterios fisicos interpretables. [[K]] indica movimiento instantaneo, [[U]] indica almacenamiento elastico y [[E]] resume el techo energetico del sistema ideal. Con esa estructura se puede decidir si un registro experimental es compatible con conservacion o si ya hay evidencia suficiente para pasar a un modelo con disipacion.

## Hipótesis

1. Sistema ideal sin rozamiento dominante ni trabajo externo neto relevante.
2. Resorte lineal y masa efectiva bien definida.
3. Magnitudes [[x]] y [[v]] medidas en un rango donde la aproximacion lineal es valida.
4. Parametros [[m]], [[k]] y [[A]] estables durante la observacion.
5. Resolucion temporal suficiente para reconstruir intercambio entre [[K]] y [[U]].

Sin estas hipotesis, la lectura de conservacion puede volverse solo aparente y perder valor diagnostico.

## Dominio de validez cuantitativo

Criterios operativos de uso:

- deriva relativa de [[E]] < 5% durante al menos 5 ciclos;
- error relativo de reconstruccion entre [[K]]+[[U]] y [[E]] < 8%;
- amplitud [[A]] dentro del rango lineal del resorte, por ejemplo < 10% del recorrido mecanico util;
- variacion relativa de [[k]] y [[m]] < 5% en la secuencia analizada;
- ruido instrumental sobre magnitudes energeticas derivadas < 10%.

Estos umbrales no son universales, pero sirven como contrato minimo para aceptar que el modelo energetico ideal conserva capacidad explicativa.

## Señales de fallo del modelo

1. [[E]] decrece o aumenta de forma sistematica con el tiempo.
2. [[K]] y [[U]] no intercambian dominancia en los tramos esperados del ciclo.
3. La reconstruccion de [[E]] desde [[A]] y [[k]] contradice repetidamente el balance instantaneo.
4. Pequeños cambios de ventana temporal alteran de forma grande la lectura energetica.
5. La curva temporal sugiere amortiguamiento o excitacion externa no modelada.

Estas señales son observables y obligan a revisar supuestos, no solo aritmetica.

## Modelo extendido o alternativo

Si la energia total deja de permanecer estable, el modelo alternativo natural es el oscilador amortiguado. Si existe aporte energetico externo, conviene pasar a un modelo forzado. Si la relacion elastica deja de ser lineal, conviene usar una descripcion no lineal donde [[U]] ya no dependa cuadráticamente del desplazamiento.

El cambio de modelo tiene un criterio fisico claro: cuando la hipotesis de intercambio puro entre [[K]] y [[U]] deja de describir datos con error acotado, el modelo ideal ya no debe sostener decisiones de interpretacion.

## Comparación operativa

Modelo ideal energetico:
- explica el intercambio entre [[K]] y [[U]] con gran claridad conceptual;
- permite comprobar conservacion a partir de balances simples;
- sirve para aula, laboratorio basico y diagnostico inicial.

Modelo extendido:
- necesario cuando hay disipacion, forzamiento o no linealidad apreciable;
- exige mas parametros y mejor control experimental;
- ofrece mayor fidelidad si el sistema real se aparta de la idealidad.

Transicion explicita a modelo alternativo: cuando conviene cambiar de modelo es cuando la deriva relativa de [[E]] > 5% de forma sostenida o cuando el error entre [[K]]+[[U]] y [[E]] > 8% en varios ciclos. En ese punto, mantener el modelo ideal oculta fisica importante y puede degradar conclusiones de diseño o de laboratorio.
