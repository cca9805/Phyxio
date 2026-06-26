# Ejemplo tipo examen

## Enunciado

Un dron de vigilancia realiza un tramo rectilíneo en un marco terrestre rotatorio. El sistema de guiado necesita estimar el desvio lateral por efecto Coriolis durante la fase de crucero para decidir si activa compensacion preventiva.

Se pide estimar [[a_cor]], convertirla a [[F_cor]] para la masa total del dron, estimar [[y]] al final del tramo y justificar si el efecto es operativamente relevante para la tolerancia de ruta.

## Datos

- [[omega]] conocida del marco terrestre local.
- [[v_rel]] del dron respecto del suelo: 80 m/s.
- [[alpha]] efectiva del tramo: 90 grados.
- [[m]] total: 12 kg.
- [[t]] de tramo: 60 s.
- Tolerancia lateral del plan de vuelo: 8 m.

## Definición del sistema

Sistema: dron tratado como punto material para estimacion de primer orden en un marco rotatorio local.

Entradas principales: [[omega]], [[v_rel]], [[alpha]], [[t]], [[m]].

Salidas de interes: [[a_cor]], [[F_cor]], [[y]].

## Modelo físico

Se usa modelo de Coriolis de primer orden para aplicaciones fisicas de trayectoria lateral.

Relaciones nucleares empleadas:

{{f:aceleracion_coriolis_aplicada}}

{{f:fuerza_desde_aceleracion}}

{{f:desvio_lateral_aproximado}}

{{f:criterio_relevancia_conceptual}}

## Justificación del modelo

El tramo es relativamente corto y la estimacion buscada es una correccion inicial de guiado, no una simulacion aerodinamica completa. Por eso, una aproximacion de primer orden es razonable.

La validez depende de que [[v_rel]] y [[alpha]] no cambien de forma extrema durante el intervalo. Si aparecen maniobras agresivas, viento cruzado dominante o cambios fuertes de orientacion, se requiere modelo extendido.

## Resolución simbólica

Paso 1: estimar [[a_cor]] con la formula aplicada de Coriolis.

{{f:aceleracion_coriolis_aplicada}}

Paso 2: convertir a fuerza equivalente para masa total.

{{f:fuerza_desde_aceleracion}}

Paso 3: proyectar desvio acumulado en el tiempo del tramo.

{{f:desvio_lateral_aproximado}}

Paso 4: usar criterio de relevancia para decidir si compensar.

{{f:criterio_relevancia_conceptual}}

## Sustitución numérica

Con [[alpha]] proxima a configuracion de maxima contribucion, la estimacion de [[a_cor]] queda del orden de 0.012 m/s^2 para el tramo dado.

Con [[m]] = 12 kg, la fuerza equivalente [[F_cor]] queda del orden de 0.14 N.

Con [[t]] = 60 s, el desvio acumulado [[y]] queda del orden de 22 m.

## Validación dimensional

- [[a_cor]] debe quedar en unidades de m/s^2.
- [[F_cor]] debe quedar en N al multiplicar por [[m]].
- [[y]] debe quedar en m al acumular efecto durante [[t]].

La coherencia dimensional se mantiene en los tres pasos.

## Interpretación física

Aunque [[a_cor]] parece pequena en valor instantaneo, su acumulacion durante [[t]] produce un [[y]] muy superior a la tolerancia lateral de 8 m. Por lo tanto, el efecto no es decorativo: cambia la decision de control.

La lectura aplicada es clara: sin compensacion, el dron tendera a salir de corredor de trayectoria. El sistema de guiado debe introducir correccion sistematica durante el tramo.

Esta conclusion no debe leerse solo como comparacion numerica. Fisicamente, el resultado expresa una curvatura lateral efectiva sostenida por el marco rotatorio durante todo el segmento. Aunque cada instante aporta poco, la suma temporal cambia la posicion final de manera acumulativa y sistematica.

Tambien hay una lectura de seguridad operacional. Si el corredor tiene margenes estrechos, la desviacion prevista aumenta riesgo de violar limites de mision o de forzar maniobras correctivas tardias. Esa maniobra tardia suele costar mas energia, aumenta carga sobre actuadores y puede degradar estabilidad del lazo de control.

Por eso, en terminos de diseno de decision, el resultado sugiere compensacion anticipada y no reactiva. Corregir temprano distribuye el esfuerzo de control, mantiene el sistema en zona lineal de actuacion y reduce probabilidad de saturacion en la fase final.

Finalmente, la interpretacion causal permite diagnosticar residuales. Si tras compensar queda un sesgo lateral persistente, ese remanente no invalida la lectura Coriolis; mas bien indica que hay contribuciones adicionales (viento, sesgo sensorial o error geometrico) que deben modelarse en la siguiente iteracion.

# Ejemplo de aplicación real

## Contexto

En oceanografia operacional, un drifter superficial se desplaza con [[v_rel]] moderada durante varias horas. El equipo de modelado necesita distinguir cuanto del desplazamiento lateral se explica por Coriolis y cuanto por corrientes locales.

## Estimación física

Para una ventana de observacion de varias horas, una [[a_cor]] moderada puede generar [[y]] acumulada de decenas a centenas de metros. Esa escala es comparable con la resolucion de productos de asimilacion regional.

Al traducir la lectura, se observa que el termino Coriolis puede explicar una fraccion relevante del sesgo lateral cuando la geometria [[alpha]] permanece estable y la velocidad [[v_rel]] no cae drásticamente.

## Interpretación

El uso aplicado del modelo permite separar dos decisiones:

1. Si conviene corregir deriva lateral en tiempo casi real.
2. Si conviene escalar a modelo extendido con forzamiento adicional.

En este caso, el criterio de relevancia indica que Coriolis debe incluirse en la prediccion base, y luego ajustarse con terminos ambientales para mejorar fidelidad.

Una practica profesional recomendable es cerrar cada ciclo con tres salidas: estimacion base de Coriolis, residuo observado y accion de modelo para el siguiente ciclo. Ese cierre convierte un ejemplo aislado en rutina de mejora continua y evita que la calibracion dependa de intuiciones no documentadas.
