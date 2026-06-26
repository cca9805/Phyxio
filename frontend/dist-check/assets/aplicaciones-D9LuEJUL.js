const e=`# Aplicaciones: Segunda ley fuerza masa\r
\r
## 1. Aceleración de bicicletas y scooters urbanos\r
\r
### Fenómeno\r
\r
Cuando una bicicleta electrica arranca en semaforo, la aceleracion depende de la fuerza neta disponible y de la masa total del sistema ciclista mas vehiculo.\r
\r
### Qué se conserva / qué cambia\r
\r
Se conserva la masa en intervalos cortos. Cambia el estado de movimiento porque aparece [[F_net]] neta de traccion menos resistencias.\r
\r
### Magnitudes dominantes\r
\r
[[F_net]], [[m]] y [[a]] dominan la lectura. Si aumenta carga, para igual traccion disminuye aceleracion.\r
\r
### Escala típica\r
\r
Aceleraciones de arranque suelen estar entre 0.5 y 2.5 m/s^2 segun potencia y carga.\r
\r
Variable dominante: [[m]] cuando el usuario transporta peso adicional.\r
\r
Límite de validez: si aparecen pendientes fuertes o viento intenso no modelado, la lectura simple requiere ajuste.\r
\r
### Cierre operativo\r
\r
La segunda ley permite anticipar tiempos de arranque y mejorar seguridad en cruces urbanos.\r
\r
En gestion de movilidad, este analisis tambien ayuda a definir limites de carga recomendada. Si la masa sube por encima de cierto valor, la aceleracion util cae y aumenta el tiempo de exposicion en cruces. Por eso, la lectura de [[m]] no es solo academica: impacta seguridad real del usuario.\r
\r
## 2. Diseño de actuadores en robótica móvil\r
\r
### Fenómeno\r
\r
Un robot de almacen necesita cumplir perfiles de aceleracion para mantener productividad y no derribar carga.\r
\r
### Qué se conserva / qué cambia\r
\r
Se conserva masa estructural base; cambia la masa efectiva con el paquete transportado. Cambia la aceleracion para una misma fuerza de motor.\r
\r
### Magnitudes dominantes\r
\r
[[F_x]] y [[a_x]] son clave en el eje de avance. [[m]] fija el costo de acelerar.\r
\r
### Escala típica\r
\r
En robots ligeros, fuerzas utiles de decenas de N producen aceleraciones del orden de 0.5 a 3 m/s^2.\r
\r
Variable dominante: [[F_x]] disponible bajo limite termico de motor.\r
\r
Límite de validez: cuando el piso introduce deslizamiento y la fuerza efectiva deja de ser la prevista.\r
\r
### Cierre operativo\r
\r
La ley guia el dimensionamiento de motor, bateria y estrategia de control.\r
\r
Adicionalmente, permite negociar compromisos entre rapidez y vida util de componentes. Forzar picos de [[F_x]] mejora respuesta inmediata, pero puede elevar temperatura de motor y consumo. Un buen diseno usa la segunda ley para encontrar zona operativa sostenible.\r
\r
## 3. Ensayos de dinámica en laboratorio\r
\r
### Fenómeno\r
\r
Se usan carros y sensores para medir fuerza y aceleracion en intervalos cortos con masa controlada.\r
\r
### Qué se conserva / qué cambia\r
\r
Se conserva [[m]] por configuracion experimental. Cambia [[a]] al variar [[F_net]] aplicada con masas colgantes o actuadores.\r
\r
### Magnitudes dominantes\r
\r
[[F_net]] conecta la causa externa con [[a]], y la comparacion entre prediccion y medida valida o invalida hipotesis.\r
\r
### Escala típica\r
\r
Fuerzas entre 1 N y 10 N sobre masas entre 0.5 kg y 3 kg son comunes en practicas didacticas.\r
\r
Variable dominante: [[a]] medida para contrastar modelo.\r
\r
Límite de validez: cuando el ruido del sensor supera la variacion que se quiere estudiar.\r
\r
### Cierre operativo\r
\r
La aplicacion vuelve visible la causalidad y desarrolla criterio de incertidumbre experimental.\r
\r
Tambien prepara para lectura critica de datos: no toda discrepancia invalida teoria, muchas discrepancias revelan limites de sensor o montaje. Este entrenamiento mejora la calidad de informes y evita conclusiones apresuradas.\r
\r
## 4. Seguridad vehicular en frenado\r
\r
### Fenómeno\r
\r
Durante frenado de emergencia, la fuerza neta negativa define la aceleracion de desaceleracion y la distancia necesaria para detenerse.\r
\r
### Qué se conserva / qué cambia\r
\r
La masa del vehiculo cambia poco en el evento. Cambia [[a]] en sentido opuesto al movimiento por accion de frenos y adherencia.\r
\r
### Magnitudes dominantes\r
\r
[[F_net]] resultante de freno y contacto neumatico suelo determina la tasa de reduccion de velocidad.\r
\r
### Escala típica\r
\r
Deceleraciones de 4 a 9 m/s^2 dependen de adherencia y estado del sistema.\r
\r
Variable dominante: [[F_net]] maxima transmisible sin perder control.\r
\r
Límite de validez: si hay bloqueo de ruedas o condiciones extremas de pista, el modelo debe incluir no linealidades adicionales.\r
\r
### Cierre operativo\r
\r
La segunda ley conecta decisiones de frenado con distancias de seguridad reales.\r
\r
En analisis de accidentes, esta misma relacion sirve para reconstruir escenarios aproximados y evaluar si una maniobra era fisicamente viable en el tiempo disponible. De nuevo, la ley opera como puente entre evidencia y decision.\r
\r
## 5. Síntesis para ingeniería de decisiones\r
\r
### Fenómeno\r
\r
Todo sistema mecanico con accion externa requiere decidir si la fuerza disponible alcanza para lograr aceleracion objetivo con la masa existente.\r
\r
### Qué se conserva / qué cambia\r
\r
Se conserva el marco causal del modelo. Cambian fuerzas efectivas y masa operativa segun configuracion real.\r
\r
### Magnitudes dominantes\r
\r
[[F_net]] define la accion, [[m]] define inercia, [[a]] resume respuesta.\r
\r
### Escala típica\r
\r
En control aplicado, umbrales de aceleracion se fijan por seguridad, confort y tiempo de ciclo.\r
\r
Variable dominante: cociente [[F_net]] sobre [[m]].\r
\r
Límite de validez: cuando fuerzas no modeladas o masa variable rompen la hipotesis de segundo nivel.\r
\r
### Cierre operativo\r
\r
La sintesis metodologica es clara: no basta medir fuerza ni masa por separado; hay que interpretar su relacion para decidir accion, riesgo y rendimiento.\r
\r
Cuando este enfoque se institucionaliza en equipos tecnicos, disminuyen errores de diagnostico y mejora la trazabilidad de decisiones. La segunda ley se convierte asi en criterio comun de trabajo entre diseno, operacion y validacion.\r
`;export{e as default};
