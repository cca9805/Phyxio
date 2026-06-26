const e=`\uFEFF# Ecuacion del cohete\r
\r
## Contexto conceptual\r
\r
La ecuacion del cohete es la aplicacion mas famosa del balance de momento con masa variable. Su fuerza pedagogica no esta solo en que permita calcular velocidades espaciales, sino en que obliga a aceptar una idea contraintuitiva: un cohete puede acelerarse en el vacio sin empujarse "contra algo externo" porque el sistema gana momento al expulsar masa con velocidad relativa [[ve]]. La propulsion aparece, por tanto, como una lectura refinada de la conservacion del momento.\r
\r
El leaf organiza esa lectura con cuatro magnitudes principales. [[DeltaV]] mide la capacidad acumulada de cambio de velocidad. [[ve]] caracteriza la calidad con la que el motor expulsa masa. [[m0]] y [[mf]] fijan la razon de masas entre el estado inicial y el final. A partir de ahi, la ecuacion ideal no es solo una formula directa; tambien es una familia de despejes utiles para decidir cuanta masa final [[mf]] queda, cuanta masa inicial [[m0]] hace falta o que velocidad de eyeccion exige la mision.\r
\r
## 🟢 Nivel esencial\r
\r
La lectura esencial debe ser conceptual antes que algebraica. Si un cohete quiere ganar mas capacidad de maniobra, necesita o bien expulsar masa mas deprisa, o bien partir con una razon de masas mas favorable entre la carga inicial y la carga final. Lo que sorprende es que esa ganancia no crece linealmente con el combustible, sino logaritmicamente. Duplicar la velocidad pedida no significa duplicar combustible, sino aceptar una razon de masas cada vez mas exigente. Por eso la ecuacion del cohete enseña una economia fisica muy concreta: cada metro por segundo adicional cuesta mas que el anterior.\r
\r
El resultado central del leaf conecta el cambio total de velocidad con la velocidad de eyeccion y la razon entre masa inicial y masa final a traves de un logaritmo natural. La consecuencia didactica fuerte es inmediata: la propulsion quimica tiene rendimientos decrecientes y eso obliga a diseñar por etapas, no por fuerza bruta.\r
\r
Un ejemplo sencillo basta para fijar la intuicion. Con una velocidad de eyeccion de 3000 m/s y razon de masas de 10, la capacidad total de maniobra ronda los 6900 m/s. La cifra parece grande, pero aun asi no basta para explicar por si sola una insercion orbital completa con perdidas reales. El mensaje del nivel esencial no es hacer la cuenta, sino entender por que el combustible rinde cada vez menos.\r
\r
> [!IMPORTANT]\r
> El leaf no dice cuanta fuerza instantanea tiene el motor. Dice cuanta capacidad total de cambio de velocidad compra una cierta combinacion de masa inicial, masa final y velocidad de eyeccion.\r
\r
## 🔵 Nivel formal\r
\r
### Derivacion de la ecuacion ideal\r
\r
La derivacion parte del balance de momento para un cohete que expulsa masa sin fuerzas externas dominantes. En una lectura unidimensional ideal, la masa instantanea del cohete multiplicada por la aceleracion iguala la velocidad de exhaust [[ve]] multiplicada por la tasa de eyeccion. Dividiendo por la masa e integrando entre el estado inicial y el final, donde [[DeltaV]] es la diferencia de velocidades, se obtiene la ecuacion del cohete:\r
\r
\r
Definiendo [[DeltaV]] como la diferencia de velocidad final e inicial, aparece la forma habitual del leaf. El paso importante no es tecnico sino interpretativo: el resultado acumula el efecto de miles de pequenos intercambios de momento entre el cohete y los gases expulsados.\r
\r
### Despejes operativos del leaf\r
\r
Una vez fijada la forma directa, la teoria debe mostrar que la ecuacion tambien se usa al reves. El leaf incluye cuatro lecturas operativas que no deben quedar escondidas.\r
\r
La primera es [[mf]], que expresa la masa final como exponencial decreciente del cociente entre [[DeltaV]] y [[ve]]. La misma relacion aparece explicitamente como \`dv_solve_mf\` cuando el problema se formula como "cuanta masa queda despues de exigir cierto [[DeltaV]]". Esta version es central en auditorias de combustible porque transforma una mision en una restriccion directa sobre la masa superviviente.\r
\r
La segunda es el despeje para [[m0]]: la masa inicial necesaria se obtiene multiplicando [[mf]] por la exponencial del cociente entre [[DeltaV]] y [[ve]]. Este despeje se usa cuando la masa final ya esta fijada por estructura y carga util, y lo que se quiere saber es cuanto cuesta arrancar la maniobra.\r
\r
La tercera es la velocidad de exhaust requerida:\r
\r
\r
Esta forma convierte la demanda de mision en una demanda sobre el motor. Es especialmente util cuando la masa inicial y final estan casi cerradas y la pregunta real es si la tecnologia de propulsion disponible es suficiente.\r
\r
### Con gravedad y perdidas\r
\r
Si el encendido no es tan corto o si el cohete asciende contra la gravedad durante un tiempo apreciable, el leaf ideal deja de ser toda la historia. Una primera correccion comun descuenta del [[DeltaV]] ideal el producto de la aceleracion gravitatoria por el tiempo de quemado tb. Ese termino, llamado perdida gravitacional, recuerda que no todo el rendimiento ideal de la ecuacion de Tsiolkovski se traduce en ganancia util de velocidad.\r
\r
### Impulso especifico\r
\r
Otra relacion formal importante conecta la propulsion con una magnitud ingenieril muy usada: el impulso especifico Isp, definido como el cociente entre [[ve]] y la aceleracion estandar g0 igual a 9.81 m/s². El impulso especifico no sustituye a [[ve]], pero permite comparar motores de distintas tecnologias. Cuanto mayor sea [[ve]], menor razon de masas se necesita para el mismo [[DeltaV]]. Esa es la razon fisica por la que motores ionicos o electricos prometen grandes ahorros de propelente en misiones largas, aunque su empuje instantaneo sea pequeno.\r
\r
{{f:ve_from_dv}}\r
\r
{{f:dv}}\r
\r
## 🔴 Nivel estructural\r
\r
### El muro logaritmico\r
\r
La caracteristica estructural del leaf es el logaritmo. Si el cambio de velocidad creciera linealmente con la masa de combustible, bastaria "anadir mas propelente". Pero el logaritmo impone rendimientos decrecientes: cada mejora adicional en [[DeltaV]] exige aumentos de razon de masas cada vez mas duros. Este punto explica por que la propulsion espacial esta llena de compromisos y por que una nave no puede escalar de forma ingenua.\r
\r
### Cohetes multietapa\r
\r
Una forma de negociar ese muro es dividir la mision en etapas. En vez de pedir a un solo vehiculo una razon de masas extrema, se descarta estructura vacia cuando ya no aporta propulsion. La suma de [[DeltaV]] por etapas permite aproximarse a presupuestos altos sin que una sola razon [[m0]]/[[mf]] se vuelva absurda. El leaf, por tanto, no solo describe una nave; tambien justifica por que la ingenieria espacial adopta arquitecturas escalonadas.\r
\r
### Que significa realmente [[mf]]\r
\r
[[mf]] no es "la masa que sobra" de manera neutral. Resume el limite entre lo que se ha podido convertir en propelente util y lo que debe sobrevivir como estructura, carga util, sensores, energia o margen de seguridad. Por eso \`dv_solve_mf\` y [[mf]] tienen valor didactico propio: muestran que toda maniobra consume no solo combustible, sino tambien libertad de diseno para el estado final del vehiculo.\r
\r
### Escalas típicas\r
\r
Para alcanzar cambios de velocidad del orden de km/s, [[ve]] de unos pocos km/s ya obliga a razones de masas grandes. En orbita baja, pequenos satelites pueden cerrar maniobras moderadas con razones de masa contenidas. Para escapar de pozos gravitatorios profundos o encadenar maniobras grandes, las exigencias crecen rapidamente. Estas escalas explican por que una diferencia modesta en [[ve]] puede tener consecuencias enormes sobre [[m0]] y [[mf]].\r
\r
### Limites del leaf\r
\r
La ecuacion ideal no decide por si sola una mision real. Puede quedarse corta si hay perdidas gravitacionales relevantes, arrastre atmosferico, empuje bajo durante tiempos largos, [[ve]] variable o etapas no modeladas por separado. Tampoco distingue cuestiones de potencia, tiempo de maniobra o control actitudinal. Su valor esta en fijar el nucleo del compromiso entre masa y velocidad; los refinamientos vienen despues.\r
\r
## Interpretacion fisica profunda\r
\r
La ecuacion del cohete ensena una version muy austera de la conservacion del momento. El cohete gana velocidad porque entrega momento a los gases expulsados, y el precio de ese intercambio queda codificado en el cociente entre masa inicial y masa final. [[DeltaV]] es una capacidad acumulada; [[ve]] es la calidad con la que el motor convierte masa en efecto dinamico; [[m0]] expresa el coste de arranque; y [[mf]] expresa cuanto sistema util queda despues del esfuerzo.\r
\r
Tambien hay una leccion intelectual mas profunda. La ecuacion no premia la ingenuidad de "poner mas combustible", sino el buen diseno de fronteras, etapas y motores. Obliga a pensar en arquitectura y no solo en algebra. Por eso es una de las formulas mas elegantes de la fisica aplicada: es corta, pero contiene una filosofia completa de compromisos ingenieriles.\r
\r
## Orden de magnitud\r
\r
Con [[ve]] del orden de 2500 a 4500 m/s, un [[DeltaV]] de 1000 m/s puede requerir razones de masa moderadas, mientras que uno de 9000 m/s empuja el diseno a regiones mucho mas exigentes. Esa comparacion basta para entender por que una maniobra orbital pequena y un lanzamiento desde tierra viven en mundos de diseno distintos aunque ambos usen la misma ecuacion.\r
\r
## Metodo de resolucion personalizado\r
\r
1. **Identificar** si la pregunta es directa o inversa.\r
2. **Usar** la ecuacion directa si se buscan cambios de velocidad desde masas y [[ve]].\r
3. **Usar** dv_solve_mf o [[mf]] si se quiere saber cuanta masa final sobrevive.\r
4. **Usar** \`m0_from_dv\` si la maniobra esta fijada y la masa inicial aun no.\r
5. **Usar** \`ve_from_dv\` si el cuello de botella es la tecnologia del motor.\r
6. **Comprobar** que [[m0]] sea mayor que [[mf]], [[mf]] mayor que cero y que el resultado tiene sentido de orden de magnitud.\r
7. **Revisar** si hay perdidas gravitacionales o arrastre que obliguen a salir del regimen ideal.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Ejemplo directo.** Si un vehiculo parte con [[m0]] igual a 1200 kg, termina con [[mf]] igual a 800 kg y usa [[ve]] igual a 2500 m/s, la formula directa da un cambio de velocidad de unos 1014 m/s. El dato importante no es solo la cifra, sino que una perdida de solo 400 kg de masa utilizable no compra una maniobra descomunal.\r
\r
**Ejemplo inverso.** Si el mismo motor debe entregar [[DeltaV]] de 1500 m/s, el despeje dv_solve_mf reduce la masa final a unos 659 kg. Si ese [[mf]] es inaceptable para la mision, entonces el problema ya no es de algebra: hay que aumentar [[m0]], mejorar [[ve]] o redisenar el objetivo.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Por que no basta con anadir mas combustible?** Porque el logaritmo impone rendimientos decrecientes y porque ese combustible extra tambien debe ser acelerado.\r
- **¿Que enseña \`dv_solve_mf\` que no enseñe \`dv\`?** Enseña el coste del objetivo sobre la masa que sobrevive al quemado.\r
- **¿Mayor [[ve]] siempre es mejor?** Para el balance de masa si, pero en ingenieria real tambien importan empuje, potencia y tiempo de maniobra.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Base**: [Balance de momento con flujo de masa](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/balance-de-momento-con-flujo-de-masa).\r
- **Relacion**: propulsion espacial, impulso especifico y diseno de etapas.\r
- **Extension**: perdidas gravitacionales, arrastre y maniobras de baja propulsion.\r
\r
## Sintesis final\r
\r
La ecuacion del cohete describe como [[DeltaV]] depende de [[ve]], [[m0]] y [[mf]] a traves de un logaritmo que impone rendimientos decrecientes. La formula dv ofrece la lectura directa; [[mf]], dv_solve_mf, m0_from_dv y ve_from_dv convierten el mismo nucleo en herramienta de diseno. Entender el leaf significa ver que cada maniobra compra velocidad a cambio de masa superviviente y que el gran limite de la propulsion quimica no es una falta de formulas, sino la dura economia del logaritmo.\r
\r
\r
\r
\r
\r
`;export{e as default};
