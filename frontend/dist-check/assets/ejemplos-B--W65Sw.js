const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un trineo de pruebas se desplaza sobre una pista horizontal. La masa [[m]] del conjunto es de 25 kg. Entra al tramo de ensayo con una rapidez inicial [[vi]] de 4 m/s y sale de él con una rapidez final [[vf]] de 10 m/s gracias al empuje neto del sistema de arrastre. Se pide obtener la energia cinetica inicial [[Ki]], la energia cinetica final [[Kf]], la variacion [[dK]] y el trabajo neto [[Wnet]] realizado sobre el trineo. Tambien se pide justificar por que el resultado no debe interpretarse como un simple aumento lineal de rapidez y por que este problema pertenece al teorema trabajo-energia y no a un leaf de tasa temporal.\r
\r
## Datos\r
\r
Los datos relevantes son una masa [[m]] constante de 25 kg, una rapidez inicial [[vi]] de 4 m/s y una rapidez final [[vf]] de 10 m/s. El enunciado no entrega tiempo de accion ni describe la fuerza en cada instante. Eso no bloquea la resolucion; al contrario, indica que la via adecuada es un cierre por estados. Tambien se entiende que el movimiento es clasico, traslacional y que no hay cambio de masa apreciable durante el proceso.\r
\r
## Definición del sistema\r
\r
El sistema es solo el trineo. El mecanismo de arrastre y la pista quedan fuera del sistema y se interpretan como agentes externos. Esta eleccion es necesaria para que [[Ki]], [[Kf]], [[dK]] y [[Wnet]] hablen del mismo objeto físico durante todo el problema. Si el sistema cambiara a mitad de razonamiento, la ley dejaria de cerrar aunque los numeros siguieran pareciendo razonables.\r
\r
## Modelo físico\r
\r
El modelo físico compara dos estados de movimiento del mismo sistema. La informacion nuclear se organiza con [[m]], [[vi]], [[vf]], [[Ki]], [[Kf]], [[dK]] y [[Wnet]]. No se necesita reconstruir toda la trayectoria ni seguir la fuerza neta instante a instante porque la pregunta del problema es global: que balance de trabajo explica el cambio de presupuesto cinetico entre el comienzo y el final. Esa es justamente la identidad del leaf.\r
\r
## Justificación del modelo\r
\r
El modelo es adecuado porque la masa [[m]] puede tratarse como constante, el regimen es claramente clasico y la descripcion traslacional basta para capturar el cambio mecanico relevante. Ademas, el enunciado no pide una historia temporal ni una potencia, sino un cierre entre dos estados. Si hubiese rotacion dominante, deformacion importante o necesidad de seguir la fuerza en el tiempo, este leaf no seria suficiente por si solo. Aqui, en cambio, el teorema trabajo-energia es el marco natural porque el dato esencial es el paso de [[vi]] a [[vf]] bajo un balance global de interacciones externas.\r
\r
## Resolución simbólica\r
\r
Primero se compara el estado final con el inicial mediante la variacion de energia cinetica:\r
\r
{{f:variacion_energia_cinetica}}\r
\r
Despues se cierra el balance causal del proceso con la ley nuclear del leaf:\r
\r
{{f:teorema_trabajo_energia}}\r
\r
Como el enunciado entrega [[m]], [[vi]] y [[vf]], tambien puede usarse la forma operativa directa del trabajo neto:\r
\r
{{f:trabajo_neto_desde_estados}}\r
\r
Y si el problema se planteara al reves, a partir de [[m]], [[vi]] y [[Wnet]], la rapidez final [[vf]] vendria dada por:\r
\r
{{f:velocidad_final_desde_trabajo_neto}}\r
\r
## Sustitución numérica\r
\r
Con una masa [[m]] de 25 kg y una rapidez inicial [[vi]] de 4 m/s, la energia cinetica inicial [[Ki]] es de 200 J. Con la rapidez final [[vf]] de 10 m/s, la energia cinetica final [[Kf]] asciende a 1250 J. La variacion [[dK]] resulta, por tanto, de 1050 J. Como el teorema trabajo-energia iguala [[Wnet]] con [[dK]], el trabajo neto realizado sobre el trineo tambien vale 1050 J.\r
\r
La lectura didactica fuerte no es solo ese valor, sino la escala del cambio. La rapidez final es dos veces y media la inicial, pero el presupuesto cinetico final es mucho mas de seis veces el inicial. Esa diferencia muestra por que no basta una intuicion lineal basada solo en comparar [[vi]] y [[vf]]. El proceso ha transferido mucha mas energia de la que sugiere una lectura superficial del movimiento.\r
\r
El problema enseña ademas que dentro del mismo leaf hay varias entradas coherentes. Puede calcularse primero [[Ki]] y [[Kf]], despues [[dK]] y por ultimo [[Wnet]]. O puede usarse la forma operativa directa en terminos de [[m]], [[vi]] y [[vf]]. Si el planteamiento es consistente, ambas rutas deben cerrar la misma historia física.\r
\r
## Validación dimensional\r
\r
Las energias y el trabajo neto deben expresarse en julios. El cierre dimensional es coherente porque las magnitudes relevantes pertenecen al dominio energetico correcto cuando se combinan masa en kilogramos y rapidez en metros por segundo. [[dK]] y [[Wnet]] comparten unidad, como exige la ley. Si el resultado final se expresara como fuerza, velocidad o tasa temporal, habria una mezcla de leafs y por tanto un error de modelado.\r
\r
La validacion fisica incluye tambien el signo. Como [[vf]] supera a [[vi]], el sistema termina con mayor presupuesto cinetico, por lo que [[dK]] debe ser positiva. El teorema obliga entonces a que [[Wnet]] tambien lo sea. Si uno de esos signos saliera invertido, el alumno deberia revisar la definicion del sistema o la coherencia del balance de trabajo.\r
\r
## Interpretación física\r
\r
El ejemplo muestra por que el teorema trabajo-energia es una ley de cierre y no una simple formula de calculo. [[Wnet]] positiva significa que el entorno ha entregado al trineo energia mecanica neta. [[dK]] positiva expresa esa misma realidad como comparacion entre el estado inicial y el final. La coincidencia entre ambas magnitudes no es casual; es precisamente el contenido fisico del leaf.\r
\r
Tambien muestra por que este problema no debe leerse como uno de potencia. No importa cuanto tardo el empuje en actuar, sino cuanto presupuesto cinetico gano el sistema entre dos estados. El foco esta en el balance global, no en la tasa temporal. Elegir bien el leaf es parte de la resolucion.\r
\r
Por ultimo, el ejemplo deja una consecuencia operativa clara. Un aumento de rapidez que visualmente parece moderado puede exigir un aporte mecanico mucho mayor del esperado. En ensayos, transporte o seguridad, esa diferencia cambia demandas de traccion, frenado y diseno estructural. El numero final solo queda bien interpretado cuando se traduce a esa historia fisica.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Considera ahora una situacion real de frenado en movilidad urbana. Una motocicleta ligera con masa total [[m]] de 180 kg se aproxima a una interseccion con una rapidez inicial [[vi]] cercana a 16 m/s. Antes de entrar en la zona de cruce, el conductor reduce la marcha hasta una rapidez final [[vf]] de unos 8 m/s. El objetivo es estimar cuanto presupuesto cinetico se ha retirado ya en ese primer tramo de frenado y usar el teorema trabajo-energia para explicar por que una reduccion aparentemente moderada de velocidad implica un balance mecanico severo.\r
\r
## Estimación física\r
\r
Con la masa [[m]] indicada y una rapidez inicial [[vi]] de 16 m/s, la energia cinetica inicial [[Ki]] queda en el entorno de 23 kJ. Cuando la motocicleta baja hasta la rapidez final [[vf]] de 8 m/s, la energia cinetica final [[Kf]] desciende a unos 5.8 kJ. Eso significa que la variacion [[dK]] del primer tramo es aproximadamente de menos 17 kJ. En consecuencia, el trabajo neto [[Wnet]] del frenado en ese mismo tramo tambien es cercano a menos 17 kJ.\r
\r
Esta estimacion deja una idea muy clara. La motocicleta no se ha detenido por completo y, sin embargo, el sistema de frenado y el contacto con el pavimento ya han retirado del movimiento una cantidad de energia considerable. No basta con decir que la velocidad se redujo a la mitad. Lo decisivo es que el presupuesto cinetico cayo mucho mas de la mitad porque la rapidez controla el saldo energetico de forma no lineal.\r
\r
La lectura cuantitativa tambien ayuda a interpretar decisiones reales. Si el conductor hubiera entrado en la misma maniobra con una rapidez algo mayor, el saldo que deben absorber frenos y neumaticos creceria mucho mas deprisa de lo que sugiere la intuicion cotidiana. Esa es una de las razones fisicas por las que pequeñas diferencias de velocidad cambian tanto la severidad de una maniobra de emergencia.\r
\r
## Interpretación\r
\r
La aplicacion real revela con claridad la fuerza del leaf. [[Wnet]] negativa no es un signo decorativo; significa que el entorno ha extraido energia cinetica neta del sistema a traves del frenado y del contacto. [[dK]] cuenta la misma historia como diferencia entre [[Ki]] y [[Kf]]. Cuando ambas lecturas coinciden, el alumno comprende que la ley no es una coincidencia algebraica, sino una descripcion compacta y robusta del proceso.\r
\r
El ejemplo tambien enseña una regla de modelado. Si la pregunta exigiera reconstruir la fuerza de frenado a cada instante o la temperatura exacta del disco durante toda la maniobra, este leaf tendria que complementarse con otros modelos. Pero para interpretar el cambio global del movimiento entre dos estados, el teorema trabajo-energia es exactamente la herramienta adecuada. Saber esa frontera es parte del aprendizaje real.\r
\r
En resumen, la maniobra muestra que reducir velocidad significa retirar presupuesto cinetico del sistema, y que esa retirada puede ser muy grande incluso antes de llegar al reposo. Esa es la utilidad práctica del leaf: transformar una impresion intuitiva sobre frenadas en una lectura cuantitativa y causal defendible.`;export{e as default};
