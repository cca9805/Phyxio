const e=`## 1. Bancadas de máquinas

Una máquina rotativa aplica fuerzas periódicas sobre su base. El modelo de fuerza forzada permite calcular la amplitud estacionaria [[X]] para la frecuencia de trabajo [[omega_f]], sin afirmar todavía que se esté en resonancia. Esta lectura ayuda a decidir si la vibración esperada supera la tolerancia geométrica o de ruido.

Variable dominante: [[X]], porque cuantifica la vibración permanente que verá la bancada.

Límite de validez: si hay golpes, holguras o rigidez variable, el modelo lineal deja de representar la respuesta.

En mantenimiento predictivo, esta lectura permite separar una vibración esperada de una anomalía. Si la máquina gira siempre a la misma [[omega_f]] y la amplitud [[X]] aumenta con el tiempo sin cambiar [[F0]], el problema probablemente está en la bancada, en el amortiguamiento efectivo o en la rigidez de montaje. El modelo no diagnostica la pieza defectuosa por sí solo, pero ordena qué magnitudes hay que medir.

## 2. Actuadores periódicos

Un actuador que empuja con una señal sinusoidal necesita conocer no solo cuánto se mueve el sistema, sino cuándo responde. La amplitud [[F0]] impuesta por el actuador produce una respuesta [[X]], pero el desfase [[delta]] puede afectar a sincronización y control.

Variable dominante: [[delta]], porque el retraso puede ser más crítico que la amplitud.

Límite de validez: si el actuador satura o la señal no es sinusoidal, se requiere un modelo de control más amplio.

En un sistema mecatrónico, el desfase puede decidir si una corrección llega a tiempo. Una respuesta con poca amplitud pero mucho retraso puede empeorar una regulación, mientras que una amplitud mayor con fase conocida puede compensarse en el controlador. Por eso el leaf no trata solo de calcular movimiento, sino de entender la relación temporal entre causa y respuesta.

## 3. Aislamiento vibratorio

Un soporte puede recibir excitaciones periódicas de motores, compresores o ventiladores. La respuesta forzada permite estimar si el movimiento transmitido será aceptable a una frecuencia concreta. El diseñador puede modificar [[k]], [[m]] o [[b]] para reducir [[X]] sin cambiar necesariamente la fuente.

Variable dominante: [[omega_f]], porque es la frecuencia impuesta por la máquina.

Límite de validez: amplitudes grandes y materiales viscoelásticos no lineales pueden invalidar los parámetros constantes.

La aplicación didáctica clave es distinguir aislamiento de eliminación. El soporte no hace desaparecer la fuerza: modifica cómo se transmite. Si se cambia [[k]], se desplaza la relación entre elasticidad e inercia; si se cambia [[b]], se modifica la amplitud y el retraso; si se cambia [[m]], se altera la oposición dinámica. Cada decisión tiene coste mecánico y no siempre mejora todos los criterios a la vez.

## 4. Instrumentación y sensores

Un sensor mecánico sometido a excitación periódica puede entregar una lectura retrasada. La fuerza forzada permite separar el tamaño de la lectura, medido por [[X]], del retraso de fase [[delta]]. Esta separación es importante cuando el sensor debe seguir una señal externa.

Variable dominante: [[F0]], porque la excitación externa fija la escala de la respuesta.

Límite de validez: ruido electrónico, filtrado activo o acoplamientos múltiples requieren modelos de señal más complejos.

En calibración, comparar [[X]] y [[delta]] frente a una excitación conocida ayuda a detectar si el sensor mide la magnitud buscada o si está filtrando la señal mecánica. Una lectura pequeña puede parecer buena por ser estable, pero si el desfase es alto no representa instantáneamente al fenómeno externo. La fuerza forzada da el lenguaje para hacer esa crítica.

## 5. Ensayos de respuesta en frecuencia

En laboratorio se aplica una fuerza conocida y se mide [[x]] para distintos valores de [[omega_f]]. Este leaf describe cada punto de esa curva: amplitud y fase para una frecuencia dada. Después, con muchos puntos, puede estudiarse resonancia.

Variable dominante: [[b]], porque el amortiguamiento controla la suavidad de la respuesta y el desfase.

Límite de validez: si el transitorio no ha decaído antes de medir, los valores no representan régimen estacionario.

Esta aplicación conecta directamente con prácticas de laboratorio. Para cada frecuencia se debe aplicar la fuerza, esperar a que desaparezca la respuesta libre y registrar varios ciclos repetibles. Solo entonces tiene sentido asociar un par amplitud-fase a esa frecuencia. Si se mezcla el transitorio con la respuesta permanente, la curva resultante puede sugerir falsamente un pico, una pérdida de amortiguamiento o una rigidez equivocada.

En conjunto, estas aplicaciones muestran que fuerza forzada es una herramienta de diagnóstico para una frecuencia impuesta. Su valor didáctico está en separar fuente, sistema y respuesta: [[F0]] y [[omega_f]] pertenecen a la fuente; [[m]], [[k]] y [[b]] pertenecen al sistema; [[X]], [[delta]] y [[x]] describen la respuesta.

Esa separación permite tomar decisiones sin confundir niveles. Cambiar la fuente modifica la excitación; cambiar la masa, la rigidez o el amortiguamiento modifica el sistema; medir amplitud, fase y desplazamiento caracteriza la consecuencia observable. Por eso la fuerza forzada aparece en diseño, diagnóstico y enseñanza experimental con criterio físico operativo.
`;export{e as default};
