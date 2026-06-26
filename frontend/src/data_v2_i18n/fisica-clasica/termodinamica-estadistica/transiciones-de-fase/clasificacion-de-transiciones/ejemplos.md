# Ejemplo tipo examen


## Enunciado

Un material presenta una transición cerca de 320 K. En un experimento a presión constante se mide un intercambio energético molar asociado al cambio de fase y, además, un parámetro estructural que distingue ambas fases. Se quiere decidir si la transición debe clasificarse como de primer orden o como continua, usando discontinuidades termodinámicas y el comportamiento del [[parametro_de_orden]].

## Datos

- [[temperatura_critica]]: 320 K
- [[calor_latente]] molar medido: 2,4 kJ/mol
- [[parametro_de_orden]] justo por debajo de [[temperatura_critica]]: 0,80
- [[parametro_de_orden]] justo por encima de [[temperatura_critica]]: 0,10
- Incertidumbre experimental del [[parametro_de_orden]]: 0,03
- [[temperatura]] de barrido: entorno de 315 K a 325 K

## Definición del sistema

El sistema es una muestra macroscópica sometida a un barrido térmico alrededor de la [[temperatura_critica]]. Se supone que el intercambio de energía se mide por mol y que la muestra alcanza estados cercanos al equilibrio en cada punto. La variable que decide la clasificación no es solo la [[temperatura]], sino el conjunto formado por [[calor_latente]], [[salto_entropia]], [[parametro_de_orden]] y [[salto_parametro_de_orden]]. La [[energia_libre_gibbs]] se considera el potencial termodinámico adecuado para comparar fases bajo las condiciones del experimento.

## Modelo físico

La transición se interpreta mediante una clasificación termodinámica: si hay [[calor_latente]] finito y [[salto_entropia]] finito en [[temperatura_critica]], la transición es de primer orden. Si no hay calor latente y el [[parametro_de_orden]] se anula continuamente, se estudia una ley crítica. Aquí se observa un intercambio energético finito y una diferencia clara entre los valores del [[parametro_de_orden]] a ambos lados de la transición.

## Justificación del modelo

El modelo es apropiado porque el problema pregunta por discontinuidades, no por la cinética microscópica del cambio. El [[calor_latente]] indica intercambio energético durante la transición. El [[salto_parametro_de_orden]] compara directamente la organización interna antes y después del cruce de [[temperatura_critica]]. Además, la incertidumbre del [[parametro_de_orden]] es mucho menor que la diferencia observada, por lo que el salto no parece ruido. Si el barrido mostrara gran histéresis o dependencia de velocidad, habría que añadir un modelo cinético, pero los datos dados permiten una clasificación termodinámica inicial.

## Resolución simbólica

Primero se relaciona el [[calor_latente]] con el [[salto_entropia]] en la [[temperatura_critica]]:

{{f:salto_entropia_latente}}

Después se calcula el [[salto_parametro_de_orden]] entre los valores de ambas fases:

{{f:salto_parametro_orden}}

Por último se aplica el criterio de clasificación por derivadas de la [[energia_libre_gibbs]]:

{{f:criterio_derivada_energia_libre}}

Si la transición fuera continua, el [[parametro_de_orden]] seguiría una ley de escala crítica controlada por [[exponente_critico_beta]] y [[amplitud_critica]]:

{{f:exponente_parametro_orden}}

Si el [[calor_latente]] es distinto de cero, hay discontinuidad entrópica. Si el [[salto_parametro_de_orden]] supera la incertidumbre, la organización interna también cambia de forma brusca.

## Sustitución numérica

Para el salto de entropía molar se usa el cociente entre [[calor_latente]] y [[temperatura_critica]]:

[[salto_entropia]] ≈ 7,5 J/(mol·K), resultado de dividir 2400 J/mol entre 320 K.

Para el parámetro de orden:

[[salto_parametro_de_orden]] ≈ 0,80 - 0,10 = 0,70.

Como 0,70 es mucho mayor que la incertidumbre 0,03, el salto es experimentalmente significativo. La presencia simultánea de [[calor_latente]] molar y de [[salto_parametro_de_orden]] finito apunta a una transición de primer orden. El [[orden_de_transicion]] se asigna por la discontinuidad de una derivada de la [[energia_libre_gibbs]].

## Validación dimensional

El [[calor_latente]] molar tiene unidades J/mol. Al dividirlo por la [[temperatura_critica]] en K se obtiene J/(mol·K), que son unidades correctas para [[salto_entropia]] molar. El [[parametro_de_orden]] puede ser adimensional o tener unidades según el caso; en este ejemplo se compara con la misma unidad a ambos lados, de modo que [[salto_parametro_de_orden]] conserva la dimensión del [[parametro_de_orden]]. La clasificación no suma magnitudes incompatibles: usa cada una como señal física distinta.

## Interpretación física

El resultado significa que el sistema no reorganiza su fase de manera suavemente crítica, sino mediante una transformación con intercambio energético finito. El [[calor_latente]] muestra que al llegar a [[temperatura_critica]] parte de la energía se dedica a cambiar la fase y no solo a variar la [[temperatura]]. El [[salto_entropia]] indica que las configuraciones accesibles cambian bruscamente entre las fases. Además, el gran [[salto_parametro_de_orden]] revela que la organización interna representada por el [[parametro_de_orden]] no desaparece poco a poco, sino que cambia de valor de forma abrupta. Físicamente, la evidencia combinada de energía, entropía y orden interno es mucho más sólida que una observación visual aislada. La clasificación de primer orden se apoya en señales independientes y coherentes.

# Ejemplo de aplicación real


## Contexto

En un laboratorio de materiales se analiza una aleación funcional que cambia de estructura cerca de 250 K. El objetivo no es solo medir a qué [[temperatura]] cambia, sino saber si la transición implica [[calor_latente]] aprovechable para almacenamiento térmico o si es una transición continua con respuesta crítica. Se mide calorimetría diferencial y una señal estructural proporcional al [[parametro_de_orden]].

## Estimación física

Supón que la señal calorimétrica integrada da [[calor_latente]] ≈ 1,2 kJ/mol y que la [[temperatura_critica]] está alrededor de 250 K. Entonces [[salto_entropia]] es del orden de 1200/250 ≈ 4,8 J/(mol·K), un valor razonable y medible. Si el [[parametro_de_orden]] cambia de 1,0 a 0,2 en menos de 0,5 K, el [[salto_parametro_de_orden]] es grande frente a una incertidumbre típica de 0,02. Esa escala permite restringir el diseño: el material puede almacenar energía latente, pero su respuesta estará concentrada en una ventana estrecha de [[temperatura]].

## Interpretación

La clasificación orienta decisiones prácticas. Si la transición es de primer orden, el material puede ser útil cuando se desea intercambio energético concentrado cerca de [[temperatura_critica]], pero puede mostrar histéresis y fatiga. Si fuera continua, no habría [[calor_latente]] comparable, aunque podría ser interesante por sensibilidad crítica. En la aleación propuesta, la presencia de [[salto_entropia]] y [[salto_parametro_de_orden]] sugiere que el rendimiento depende de controlar el ciclo térmico, no solo de elegir una [[temperatura_critica]] conveniente.