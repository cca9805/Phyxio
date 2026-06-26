const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una plataforma de ensayo arrastra una carga lineal mediante una polea rígida conectada a un eje motriz. El sistema parte del reposo y se desea estimar la respuesta inicial durante el primer segundo. Se sabe que existe un torque neto [[tau_net]] aplicado por el motor, y que la polea de radio [[R]] transmite el movimiento a la cuerda sin deslizamiento. La carga traslacional tiene masa [[m]], mientras que la polea tiene momento de inercia [[I]].\r
\r
El objetivo es determinar la aceleración angular [[alpha]], la aceleración lineal [[a]], y cuantificar cómo se reparte la energía cinética total [[K]] entre su parte traslacional [[Kt]] y su parte rotacional [[Kr]] al final del intervalo analizado.\r
\r
## Datos\r
\r
- Masa de la carga: [[m]] = 24 kg.\r
- Momento de inercia de la polea: [[I]] = 1.8 kg·m2.\r
- Radio efectivo de la polea: [[R]] = 0.20 m.\r
- Torque neto aplicado: [[tau_net]] = 18 N·m.\r
- Velocidad angular final medida: [[omega]] = 7.0 rad/s.\r
- Tiempo de aceleración analizado: 1.0 s.\r
\r
Se adopta una convención positiva coherente en el sentido de giro y de traslación, por lo que no se esperan ambiguedades de signo en este caso base.\r
\r
## Definición del sistema\r
\r
El sistema mecánico incluye dos subsistemas acoplados:\r
\r
- Subsistema rotacional: eje y polea rígida, descritos por [[tau_net]], [[I]], [[alpha]], [[omega]].\r
- Subsistema traslacional: carga lineal, descrita por [[m]], [[a]], [[v]].\r
\r
El vínculo geométrico se define por contacto sin deslizamiento entre cuerda y polea, lo que obliga a que la aceleración tangencial de la periferia de la polea coincida con la aceleración lineal de la carga. En términos físicos, esto elimina grados de libertad independientes: el estado angular y el estado lineal no pueden evolucionar de manera arbitraria.\r
\r
## Modelo físico\r
\r
Se usa un modelo rígido clásico con tres relaciones núcleo del leaf:\r
\r
- Dinámica de rotación para estimar [[alpha]] desde [[tau_net]] y [[I]].\r
- Vínculo cinemático para conectar [[alpha]] con [[a]] mediante [[R]].\r
- Energía cinética total para descomponer [[K]] en [[Kt]] y [[Kr]].\r
\r
El modelo asume que en el intervalo corto no hay deslizamiento apreciable ni variación relevante de parámetros geométricos.\r
\r
## Justificación del modelo\r
\r
Este modelo es adecuado porque:\r
\r
- El eje de giro es fijo y la polea puede tratarse como cuerpo rígido.\r
- El radio [[R]] es constante durante todo el proceso.\r
- El contacto cuerda-polea se diseñó para transmisión adherente, de modo que el vínculo traslación-rotación es válido.\r
- No se requiere una estimación fina de pérdidas para el objetivo didáctico del ejercicio, que es explicar el acoplamiento causal entre torque, inercia y aceleración.\r
\r
En un contexto industrial real se añadirían rozamiento interno y pérdidas de transmisión, pero para un examen de dinámica inicial este nivel de detalle es suficiente y pedagógicamente limpio.\r
\r
## Resolución simbólica\r
\r
Primero, se calcula la aceleración angular con la ley rotacional:\r
\r
{{f:segunda_ley_rotacion}}\r
\r
Luego, se vincula la dinámica angular con la lineal:\r
\r
{{f:vinculo_traslacion_rotacion}}\r
\r
Finalmente, para la lectura energética al final del intervalo:\r
\r
{{f:energia_cinetica_total}}\r
\r
Para separar energía por mecanismo, usamos además las definiciones operativas:\r
\r
- [[Kt]] es la parte traslacional asociada a [[m]] y [[v]].\r
- [[Kr]] es la parte rotacional asociada a [[I]] y [[omega]].\r
- [[K]] = [[Kt]] + [[Kr]].\r
\r
## Sustitución numérica\r
\r
1. Aceleración angular:\r
- [[alpha]] = [[tau_net]]/[[I]] = 18/1.8 = 10 rad/s2.\r
\r
2. Aceleración lineal:\r
- [[a]] = [[alpha]]·[[R]] = 10·0.20 = 2.0 m/s2.\r
\r
3. Velocidad lineal al final del intervalo (vía vínculo cinemático):\r
- [[v]] = [[omega]]·[[R]] = 7.0·0.20 = 1.4 m/s.\r
\r
4. Energía traslacional:\r
- [[Kt]] = 0.5·[[m]]·[[v]]2 = 0.5·24·(1.4)2 = 23.52 J.\r
\r
5. Energía rotacional:\r
- [[Kr]] = 0.5·[[I]]·[[omega]]2 = 0.5·1.8·(7.0)2 = 44.10 J.\r
\r
6. Energía total:\r
- [[K]] = [[Kt]] + [[Kr]] = 67.62 J.\r
\r
Este resultado muestra que, para esta combinación de [[I]] y [[R]], la contribución rotacional supera a la traslacional en la ventana analizada.\r
\r
## Validación dimensional\r
\r
- En dinámica rotacional: N·m dividido por kg·m2 produce 1/s2, consistente con [[alpha]].\r
- En el vínculo: (1/s2) por m produce m/s2, consistente con [[a]].\r
- En energía: kg·m2/s2 en ambos términos, consistente con joule para [[Kt]], [[Kr]] y [[K]].\r
\r
Además, se valida coherencia física:\r
\r
- [[K]] es no negativa.\r
- [[Kr]] y [[Kt]] son no negativas.\r
- Con [[tau_net]] positiva y convención positiva, [[alpha]] y [[a]] resultan positivas.\r
\r
No aparece ninguna señal de contradicción causal, por lo que el cálculo es internamente consistente.\r
\r
## Interpretación física\r
\r
La lectura didáctica clave es que el acoplamiento entre traslación y rotación no solo cambia el valor de la aceleración; también cambia cómo se distribuye la energía mecánica disponible. Aun con una masa [[m]] relativamente alta, un momento de inercia [[I]] no despreciable puede absorber una fracción importante de energía en forma rotacional. Esto explica por qué muchos sistemas con poleas o ruedas responden más lento de lo que predice una intuición puramente traslacional.\r
\r
Si en este problema redujéramos [[I]] manteniendo [[tau_net]], la [[alpha]] aumentaría y, vía vínculo, crecería también [[a]]. La carga lineal ganaría velocidad más rápido. Ese es precisamente el tipo de decisión de diseño que conecta la física del leaf con ingeniería de transmisión y optimización dinámica.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una línea automática de empaque, cada ciclo exige acelerar y frenar rodillos que arrastran cajas. El actuador aplica torque al eje principal, y cada rodillo convierte parte de ese efecto en traslación de banda. El equipo técnico observa que, al aumentar la inercia de un rodillo por cambio de material, la cadencia de producción cae aunque la consigna del motor no haya cambiado.\r
\r
El problema operativo es decidir si conviene incrementar el torque nominal, reducir masa rotacional de los rodillos, o rediseñar radio efectivo para mejorar la respuesta de [[a]] sin disparar consumo energético.\r
\r
## Estimación física\r
\r
Se comparan dos configuraciones bajo el mismo [[tau_net]] de 30 N·m y radio [[R]] = 0.15 m:\r
\r
- Configuración A: [[I]] = 1.2 kg·m2.\r
- Configuración B: [[I]] = 2.0 kg·m2.\r
\r
Usando la ecuación rotacional:\r
\r
{{f:segunda_ley_rotacion}}\r
\r
Se obtiene:\r
\r
- A: [[alpha]] = 25 rad/s2.\r
- B: [[alpha]] = 15 rad/s2.\r
\r
Con el vínculo:\r
\r
{{f:vinculo_traslacion_rotacion}}\r
\r
- A: [[a]] = 3.75 m/s2.\r
- B: [[a]] = 2.25 m/s2.\r
\r
La diferencia es del 40% en aceleración lineal efectiva. Para un ciclo corto de producción, ese cambio altera tiempos de sincronización entre estaciones y puede producir acumulación de producto.\r
\r
Si se evalúa energía tras 0.8 s de aceleración, la configuración con mayor [[I]] retiene más fracción en [[Kr]], lo que retrasa la ganancia de [[v]] útil sobre la banda. Aunque el sistema total siga conservando coherencia energética, la eficiencia funcional de ciclo se degrada.\r
\r
Para cuantificar esa lectura energética, supongamos velocidades angulares de cierre de tramo:\r
\r
- A: [[omega]] = 20 rad/s.\r
- B: [[omega]] = 12 rad/s.\r
\r
Con el vínculo, las velocidades lineales asociadas son [[v]] = [[omega]]·[[R]]:\r
\r
- A: [[v]] = 3.0 m/s.\r
- B: [[v]] = 1.8 m/s.\r
\r
La energía total se evalúa con:\r
\r
{{f:energia_cinetica_total}}\r
\r
Tomando [[m]] = 35 kg:\r
\r
- Configuración A: [[Kt]] = 157.5 J, [[Kr]] = 240 J, [[K]] = 397.5 J.\r
- Configuración B: [[Kt]] = 56.7 J, [[Kr]] = 144 J, [[K]] = 200.7 J.\r
\r
La estimación muestra no solo diferencia de aceleración instantánea, sino una brecha energética útil de casi 100 J en [[Kt]], directamente ligada a capacidad de transporte por ciclo.\r
\r
## Interpretación\r
\r
La conclusión práctica es que no basta con “subir motor”. El diseño dinámico requiere balance entre [[tau_net]], [[I]], [[R]] y [[m]] para lograr una [[a]] compatible con el tiempo de ciclo. Cuando el cuello de botella es inercial, aligerar masa rotacional suele ser más efectivo que sobredimensionar torque continuo.\r
\r
Además, interpretar solo [[K]] total puede inducir decisiones erróneas. En este caso, distinguir [[Kt]] de [[Kr]] permite ver que la configuración A convierte mejor la energía en avance de banda, mientras la B retiene más energía en giro relativo al resultado lineal esperado. Esa diferencia es la que impacta directamente el KPI de unidades por minuto.\r
\r
Didácticamente, este caso enseña tres ideas transferibles:\r
\r
- El torque determina [[alpha]], pero la geometría [[R]] define cómo esa respuesta se proyecta sobre [[a]].\r
- La energía total [[K]] no informa sola; conviene distinguir [[Kt]] y [[Kr]] para entender desempeño real.\r
- La física de acoplamiento traslación-rotación permite justificar decisiones de diseño con criterios cuantitativos y no por intuición aislada.\r
`;export{a as default};
