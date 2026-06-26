# Ejemplo tipo examen


## Enunciado

Un material magnético se estudia al enfriarse alrededor de su [[temperatura_critica]]. Se mide un [[parametro_de_orden]] normalizado asociado a la magnetización espontánea. Por encima de la transición el valor medio es compatible con cero. Por debajo, se obtienen datos que parecen seguir una ley continua. Se pide decidir si el [[parametro_de_orden]] identifica una ruptura de simetría, estimar su comportamiento cerca de la transición y comprobar si existe un [[salto_parametro_de_orden]] apreciable.

## Datos

- [[temperatura_critica]]: 300 K
- [[temperatura]] medida: 294 K
- [[parametro_de_orden]] normalizado a 294 K: 0,20
- [[amplitud_critica]] estimada: 1,0
- [[exponente_critico_beta]] estimado: 0,33
- Incertidumbre del [[parametro_de_orden]]: 0,01
- [[campo_conjugado]] aplicado: despreciable durante la medida
- [[susceptibilidad]] cualitativa: aumenta cerca de la transición

## Definición del sistema

El sistema es una muestra magnética homogénea observada cerca de su [[temperatura_critica]]. La fase ordenada se identifica con magnetización espontánea no nula y la fase desordenada con magnetización media nula en ausencia de [[campo_conjugado]]. El [[parametro_de_orden]] se interpreta como una magnitud normalizada, de modo que su unidad efectiva es adimensional. La comparación se hace siempre con el mismo convenio de signo, para evitar confundir dominios orientados en sentidos opuestos con fases distintas.

## Modelo físico

Se usa un modelo de transición continua. La [[temperatura_reducida]] mide la distancia relativa a la [[temperatura_critica]]. El [[parametro_de_orden]] se anula gradualmente al aproximarse a la transición desde la fase ordenada. No se presupone un [[salto_parametro_de_orden]]; se comprueba comparando la señal con la incertidumbre. La [[susceptibilidad]] se considera una prueba de sensibilidad frente al [[campo_conjugado]], no una segunda definición de la fase.

## Justificación del modelo

El modelo es adecuado porque el valor del [[parametro_de_orden]] por encima de la [[temperatura_critica]] es compatible con cero y por debajo aumenta de manera progresiva. Además, el [[campo_conjugado]] aplicado es despreciable, así que la señal observada puede interpretarse como orden espontáneo. Si hubiera histéresis fuerte o coexistencia de valores, el análisis tendría que centrarse en el [[salto_parametro_de_orden]]. Aquí, en cambio, la lectura principal es la aparición suave de orden al reducir la [[temperatura]].

## Resolución simbólica

Primero se ubica la muestra mediante la [[temperatura_reducida]]:

{{f:temperatura_reducida_orden}}

Después se describe la desaparición continua del [[parametro_de_orden]] desde la fase ordenada:

{{f:ley_parametro_orden_continuo}}

Para comprobar si hay discontinuidad se compara el valor a ambos lados de la transición:

{{f:parametro_orden_diferencia_fases}}

Finalmente, si se aplicara un [[campo_conjugado]] pequeño, la respuesta se interpretaría con:

{{f:susceptibilidad_parametro_orden}}

## Sustitución numérica

Con [[temperatura]] de 294 K y [[temperatura_critica]] de 300 K, la distancia relativa es del orden de -0,02. El signo negativo indica que la muestra está por debajo de la transición, en el lado ordenado según el convenio elegido. Usando [[amplitud_critica]] cercana a 1 y [[exponente_critico_beta]] de 0,33, un valor de [[parametro_de_orden]] alrededor de 0,2 es plausible. Si el valor por encima de la transición es 0,00 ± 0,01 y no aparece diferencia finita mayor que varias incertidumbres, no se confirma un [[salto_parametro_de_orden]].

## Validación dimensional

La [[temperatura]] y la [[temperatura_critica]] se expresan en kelvin, por lo que su cociente relativo produce una [[temperatura_reducida]] adimensional. El [[parametro_de_orden]] se ha normalizado, así que [[amplitud_critica]] también se interpreta como adimensional en este ejemplo. El [[exponente_critico_beta]] no tiene unidad. La [[susceptibilidad]] dependería de la unidad usada para el [[campo_conjugado]], por eso no se calcula numéricamente sin especificar la perturbación.

## Interpretación física

El resultado indica que el [[parametro_de_orden]] sí identifica la fase: por encima de la [[temperatura_critica]] no hay orden espontáneo medible y por debajo aparece un valor finito. La [[temperatura_reducida]] negativa no es un detalle algebraico, sino la señal de que se observa el lado ordenado. La ausencia de un [[salto_parametro_de_orden]] grande frente a la incertidumbre favorece una lectura continua, no abrupta. Físicamente, el sistema no cambia porque se “añada” una sustancia nueva, sino porque sus componentes seleccionan colectivamente una orientación. La [[susceptibilidad]] creciente refuerza la idea de proximidad crítica: el orden se vuelve muy sensible a cualquier [[campo_conjugado]] residual.

# Ejemplo de aplicación real


## Contexto

En un laboratorio de materiales se mide la transición magnética de una aleación ligera para sensores. Interesa saber si el cambio de fase cerca de 300 K será suave, porque una respuesta brusca produciría calibraciones inestables. Se registra el [[parametro_de_orden]] mediante una señal proporcional a la magnetización, se controla la [[temperatura]] y se reduce al mínimo el [[campo_conjugado]] externo.

## Estimación física

Supongamos que la señal normalizada pasa de 0,30 a 0,15 al acercarse desde [[temperatura_reducida]] de -0,05 a -0,01. Ese cambio es de orden 10^-1, claramente superior a un ruido instrumental de 10^-2. Si el valor por encima de [[temperatura_critica]] cae a menos de 0,01, el cero es compatible con simetría restaurada. Una [[susceptibilidad]] que se multiplica por 20 cerca de la transición indicaría que el sensor será muy sensible a pequeños campos residuales. La estimación no exige conocer todos los detalles microscópicos, pero sí mantener el mismo convenio para [[parametro_de_orden]].

## Interpretación

La aplicación muestra por qué el [[parametro_de_orden]] es útil fuera del examen. Permite decidir si un material cambia de fase de manera controlable, si la señal se apaga suavemente o si aparece un [[salto_parametro_de_orden]]. También advierte que un [[campo_conjugado]] pequeño puede sesgar la medida justo donde la [[susceptibilidad]] es mayor. Para diseñar sensores, el valor absoluto importa menos que la forma de la transición y la estabilidad cerca de [[temperatura_critica]].