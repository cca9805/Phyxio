# Ejemplo tipo examen

## Enunciado

Una plataforma de ensayo arrastra una carga lineal mediante una polea rígida conectada a un eje motriz. El sistema parte del reposo y se desea estimar la respuesta inicial durante el primer segundo. Se sabe que existe un torque neto [[tau_net]] aplicado por el motor, y que la polea de radio [[R]] transmite el movimiento a la cuerda sin deslizamiento. La carga traslacional tiene masa [[m]], mientras que la polea tiene momento de inercia [[I]].

El objetivo es determinar la aceleración angular [[alpha]], la aceleración lineal [[a]], y cuantificar cómo se reparte la energía cinética total [[K]] entre su parte traslacional [[Kt]] y su parte rotacional [[Kr]] al final del intervalo analizado.

## Datos

- Masa de la carga: [[m]] = 24 kg.
- Momento de inercia de la polea: [[I]] = 1.8 kg·m2.
- Radio efectivo de la polea: [[R]] = 0.20 m.
- Torque neto aplicado: [[tau_net]] = 18 N·m.
- Velocidad angular final medida: [[omega]] = 7.0 rad/s.
- Tiempo de aceleración analizado: 1.0 s.

Se adopta una convención positiva coherente en el sentido de giro y de traslación, por lo que no se esperan ambiguedades de signo en este caso base.

## Definición del sistema

El sistema mecánico incluye dos subsistemas acoplados:

- Subsistema rotacional: eje y polea rígida, descritos por [[tau_net]], [[I]], [[alpha]], [[omega]].
- Subsistema traslacional: carga lineal, descrita por [[m]], [[a]], [[v]].

El vínculo geométrico se define por contacto sin deslizamiento entre cuerda y polea, lo que obliga a que la aceleración tangencial de la periferia de la polea coincida con la aceleración lineal de la carga. En términos físicos, esto elimina grados de libertad independientes: el estado angular y el estado lineal no pueden evolucionar de manera arbitraria.

## Modelo físico

Se usa un modelo rígido clásico con tres relaciones núcleo del leaf:

- Dinámica de rotación para estimar [[alpha]] desde [[tau_net]] y [[I]].
- Vínculo cinemático para conectar [[alpha]] con [[a]] mediante [[R]].
- Energía cinética total para descomponer [[K]] en [[Kt]] y [[Kr]].

El modelo asume que en el intervalo corto no hay deslizamiento apreciable ni variación relevante de parámetros geométricos.

## Justificación del modelo

Este modelo es adecuado porque:

- El eje de giro es fijo y la polea puede tratarse como cuerpo rígido.
- El radio [[R]] es constante durante todo el proceso.
- El contacto cuerda-polea se diseñó para transmisión adherente, de modo que el vínculo traslación-rotación es válido.
- No se requiere una estimación fina de pérdidas para el objetivo didáctico del ejercicio, que es explicar el acoplamiento causal entre torque, inercia y aceleración.

En un contexto industrial real se añadirían rozamiento interno y pérdidas de transmisión, pero para un examen de dinámica inicial este nivel de detalle es suficiente y pedagógicamente limpio.

## Resolución simbólica

Primero, se calcula la aceleración angular con la ley rotacional:

{{f:segunda_ley_rotacion}}

Luego, se vincula la dinámica angular con la lineal:

{{f:vinculo_traslacion_rotacion}}

Finalmente, para la lectura energética al final del intervalo:

{{f:energia_cinetica_total}}

Para separar energía por mecanismo, usamos además las definiciones operativas:

- [[Kt]] es la parte traslacional asociada a [[m]] y [[v]].
- [[Kr]] es la parte rotacional asociada a [[I]] y [[omega]].
- [[K]] = [[Kt]] + [[Kr]].

## Sustitución numérica

1. Aceleración angular:
- [[alpha]] = [[tau_net]]/[[I]] = 18/1.8 = 10 rad/s2.

2. Aceleración lineal:
- [[a]] = [[alpha]]·[[R]] = 10·0.20 = 2.0 m/s2.

3. Velocidad lineal al final del intervalo (vía vínculo cinemático):
- [[v]] = [[omega]]·[[R]] = 7.0·0.20 = 1.4 m/s.

4. Energía traslacional:
- [[Kt]] = 0.5·[[m]]·[[v]]2 = 0.5·24·(1.4)2 = 23.52 J.

5. Energía rotacional:
- [[Kr]] = 0.5·[[I]]·[[omega]]2 = 0.5·1.8·(7.0)2 = 44.10 J.

6. Energía total:
- [[K]] = [[Kt]] + [[Kr]] = 67.62 J.

Este resultado muestra que, para esta combinación de [[I]] y [[R]], la contribución rotacional supera a la traslacional en la ventana analizada.

## Validación dimensional

- En dinámica rotacional: N·m dividido por kg·m2 produce 1/s2, consistente con [[alpha]].
- En el vínculo: (1/s2) por m produce m/s2, consistente con [[a]].
- En energía: kg·m2/s2 en ambos términos, consistente con joule para [[Kt]], [[Kr]] y [[K]].

Además, se valida coherencia física:

- [[K]] es no negativa.
- [[Kr]] y [[Kt]] son no negativas.
- Con [[tau_net]] positiva y convención positiva, [[alpha]] y [[a]] resultan positivas.

No aparece ninguna señal de contradicción causal, por lo que el cálculo es internamente consistente.

## Interpretación física

La lectura didáctica clave es que el acoplamiento entre traslación y rotación no solo cambia el valor de la aceleración; también cambia cómo se distribuye la energía mecánica disponible. Aun con una masa [[m]] relativamente alta, un momento de inercia [[I]] no despreciable puede absorber una fracción importante de energía en forma rotacional. Esto explica por qué muchos sistemas con poleas o ruedas responden más lento de lo que predice una intuición puramente traslacional.

Si en este problema redujéramos [[I]] manteniendo [[tau_net]], la [[alpha]] aumentaría y, vía vínculo, crecería también [[a]]. La carga lineal ganaría velocidad más rápido. Ese es precisamente el tipo de decisión de diseño que conecta la física del leaf con ingeniería de transmisión y optimización dinámica.

# Ejemplo de aplicación real

## Contexto

En una línea automática de empaque, cada ciclo exige acelerar y frenar rodillos que arrastran cajas. El actuador aplica torque al eje principal, y cada rodillo convierte parte de ese efecto en traslación de banda. El equipo técnico observa que, al aumentar la inercia de un rodillo por cambio de material, la cadencia de producción cae aunque la consigna del motor no haya cambiado.

El problema operativo es decidir si conviene incrementar el torque nominal, reducir masa rotacional de los rodillos, o rediseñar radio efectivo para mejorar la respuesta de [[a]] sin disparar consumo energético.

## Estimación física

Se comparan dos configuraciones bajo el mismo [[tau_net]] de 30 N·m y radio [[R]] = 0.15 m:

- Configuración A: [[I]] = 1.2 kg·m2.
- Configuración B: [[I]] = 2.0 kg·m2.

Usando la ecuación rotacional:

{{f:segunda_ley_rotacion}}

Se obtiene:

- A: [[alpha]] = 25 rad/s2.
- B: [[alpha]] = 15 rad/s2.

Con el vínculo:

{{f:vinculo_traslacion_rotacion}}

- A: [[a]] = 3.75 m/s2.
- B: [[a]] = 2.25 m/s2.

La diferencia es del 40% en aceleración lineal efectiva. Para un ciclo corto de producción, ese cambio altera tiempos de sincronización entre estaciones y puede producir acumulación de producto.

Si se evalúa energía tras 0.8 s de aceleración, la configuración con mayor [[I]] retiene más fracción en [[Kr]], lo que retrasa la ganancia de [[v]] útil sobre la banda. Aunque el sistema total siga conservando coherencia energética, la eficiencia funcional de ciclo se degrada.

Para cuantificar esa lectura energética, supongamos velocidades angulares de cierre de tramo:

- A: [[omega]] = 20 rad/s.
- B: [[omega]] = 12 rad/s.

Con el vínculo, las velocidades lineales asociadas son [[v]] = [[omega]]·[[R]]:

- A: [[v]] = 3.0 m/s.
- B: [[v]] = 1.8 m/s.

La energía total se evalúa con:

{{f:energia_cinetica_total}}

Tomando [[m]] = 35 kg:

- Configuración A: [[Kt]] = 157.5 J, [[Kr]] = 240 J, [[K]] = 397.5 J.
- Configuración B: [[Kt]] = 56.7 J, [[Kr]] = 144 J, [[K]] = 200.7 J.

La estimación muestra no solo diferencia de aceleración instantánea, sino una brecha energética útil de casi 100 J en [[Kt]], directamente ligada a capacidad de transporte por ciclo.

## Interpretación

La conclusión práctica es que no basta con “subir motor”. El diseño dinámico requiere balance entre [[tau_net]], [[I]], [[R]] y [[m]] para lograr una [[a]] compatible con el tiempo de ciclo. Cuando el cuello de botella es inercial, aligerar masa rotacional suele ser más efectivo que sobredimensionar torque continuo.

Además, interpretar solo [[K]] total puede inducir decisiones erróneas. En este caso, distinguir [[Kt]] de [[Kr]] permite ver que la configuración A convierte mejor la energía en avance de banda, mientras la B retiene más energía en giro relativo al resultado lineal esperado. Esa diferencia es la que impacta directamente el KPI de unidades por minuto.

Didácticamente, este caso enseña tres ideas transferibles:

- El torque determina [[alpha]], pero la geometría [[R]] define cómo esa respuesta se proyecta sobre [[a]].
- La energía total [[K]] no informa sola; conviene distinguir [[Kt]] y [[Kr]] para entender desempeño real.
- La física de acoplamiento traslación-rotación permite justificar decisiones de diseño con criterios cuantitativos y no por intuición aislada.
