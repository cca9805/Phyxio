# Ejemplo tipo examen

## Enunciado

Una caja de [[m]] = 18 kg esta en reposo sobre un piso horizontal rugoso. Un operario aplica una fuerza horizontal [[F_ap]] de 55 N para intentar moverla. El coeficiente de rozamiento estatico es [[mu_s]] = 0.35 y la gravedad local es [[g]] = 9.81 m/s^2.

Se pide: identificar todas las fuerzas reales que actuan sobre el sistema, justificar su agente fisico, calcular [[P]] y el limite maximo de [[f_s]], y decidir si el cuerpo permanece en reposo o inicia deslizamiento. Ademas, validar con una regla de existencia de contacto cuando el estado de contacto [[system_contact]] cambia.

## Datos

- [[m]] = 18 kg
- [[g]] = 9.81 m/s^2
- [[F_ap]] = 55 N
- [[mu_s]] = 0.35
- Sistema inicialmente en apoyo completo: [[system_contact]] = 1
- Eje x horizontal, eje y vertical

## Definicion del sistema

Sistema: caja sobre superficie horizontal, con accion de un agente externo que empuja hacia +x. Interacciones fisicas esperadas: gravedad Tierra-caja, contacto piso-caja y empuje del operario. El objetivo del leaf es evitar fuerzas inventadas y quedarse solo con fuerzas reales trazables a un agente.

## Modelo fisico

Se usa un modelo de cuerpo puntual en mecanica clasica con contacto seco. Las relaciones nucleares son:

{{f:weight_definition}}

{{f:friction_limit_static}}

{{f:force_existence_logic}}

La primera fija el peso [[P]] por masa y gravedad. La segunda expresa que [[f_s]] no es un valor fijo, sino una fuerza de ajuste hasta un maximo [[mu_s]]*[[N]]. La tercera evita errores conceptuales: si no hay contacto, no puede haber ni [[N]] ni [[f]].

## Justificacion del modelo

El modelo es adecuado porque el movimiento esperado es lento, el piso es aproximadamente rigido y no se requieren efectos relativistas ni deformaciones complejas. La identificacion de fuerzas se apoya en agentes claros:

- Tierra produce [[P]].
- Piso produce [[N]] y [[f]] (en este caso [[f_s]] por regimen estatico).
- Operario produce [[F_ap]].

La decision de movimiento se basa en comparar fuerza aplicada con capacidad maxima de [[f_s]]. Si [[F_ap]] no supera el limite estatico, no hay deslizamiento y la aceleracion es nula.

## Resolucion simbolica

1) Peso:

{{f:weight_definition}}

2) En piso horizontal sin componente vertical de [[F_ap]], equilibrio vertical da [[N]] = [[P]].

3) Limite de rozamiento estatico:

{{f:friction_limit_static}}

4) Regla de existencia de contacto:

{{f:force_existence_logic}}

Con [[system_contact]] = 1, pueden existir [[N]] y [[f]]. Si en algun instante [[system_contact]] pasa a 0 (caja en el aire), entonces [[N]] = 0 y [[f]] = 0 por definicion fisica del modelo.

5) Criterio de reposo/deslizamiento:

- Si [[F_ap]] <= [[f_s]] max, el cuerpo permanece en reposo y [[f_s]] se ajusta a [[F_ap]].
- Si [[F_ap]] > [[f_s]] max, inicia deslizamiento y el modelo debe pasar a rozamiento cinetico.

## Sustitucion numerica

1) Calculo de [[P]]:

[[P]] = [[m]]*[[g]] = 18*9.81 = 176.58 N

2) Entonces [[N]] = 176.58 N (por equilibrio vertical).

3) Limite estatico:

[[f_s]] max = [[mu_s]]*[[N]] = 0.35*176.58 = 61.80 N

4) Comparacion:

La comparacion clave indica que [[F_ap]] es menor que el umbral estatico de 61.80 N.

Resultado: no hay deslizamiento. El rozamiento estatico se ajusta a [[f_s]] = 55 N en sentido opuesto al empuje. La caja sigue en reposo.

5) Verificacion de escenario alterno:

Si el operario aumentara [[F_ap]] a 70 N, entonces [[F_ap]] > [[f_s]] max y se perderia el equilibrio estatico. Ese umbral separa los dos regimenes.

## Validacion dimensional

- [[P]] en N, consistente con [[m]] en kg y [[g]] en m/s^2.
- [[f_s]] y [[N]] en N, consistente con [[mu_s]] adimensional.
- La desigualdad de rozamiento estatico conserva unidades de fuerza en ambos lados.

No hay incoherencia dimensional; la decision del regimen depende del balance fisico entre [[F_ap]] y [[f_s]] max.

## Interpretación física

El valor central de este ejemplo no es la aritmetica, sino la identificacion correcta de agentes y limites. El operario no "crea" directamente aceleracion: crea [[F_ap]]. El piso no impone un rozamiento fijo: ajusta [[f_s]] hasta su maximo permitido por [[mu_s]] y [[N]]. La Tierra fija [[P]] a traves de [[m]] y [[g]].

Esto implica una lectura físicamente coherente: si [[F_ap]] aumenta, la respuesta de [[f_s]] se opone al cambio hasta su limite; por tanto, el resultado no depende de una cuenta aislada sino del regimen de contacto activo.

Esta lectura causal evita dos errores frecuentes. Primero, inventar fuerzas "de inercia" en un marco inercial sin justificacion. Segundo, asumir que el rozamiento siempre vale [[mu_s]]*[[N]]; en realidad, ese valor es el tope, no el valor obligatorio.

Ademas, la variable [[system_contact]] tiene papel conceptual fuerte. Cuando hay contacto, aparecen [[N]] y [[f]]. Cuando no hay contacto, ambas fuerzas desaparecen. Esa regla protege la coherencia del diagrama de cuerpo libre y evita sumar fuerzas que no tienen agente fisico activo.

En terminos de toma de decisiones, el problema muestra un criterio operativo robusto: antes de resolver ecuaciones de movimiento, conviene preguntar si el sistema esta en reposo estatico admisible. Esa pregunta se responde comparando [[F_ap]] contra [[f_s]] max. Si no se cruza el umbral, no se necesita un modelo dinamico mas complejo.

La lectura fisica no termina en "no se mueve". Lo relevante es que el contacto esta activo ([[system_contact]] = 1), que la superficie aun tiene capacidad de respuesta estatica y que el margen disponible es de 6.8 N (61.8 - 55). Ese margen permite absorber pequenas variaciones de empuje sin cambiar de regimen. Por eso la conclusion tecnica es una recomendacion concreta: mantener el empuje por debajo de 60 N si se busca estabilidad con margen operativo.

# Ejemplo de aplicacion real

## Contexto

En una linea de embalaje, cajas de distintas masas avanzan sobre una mesa y un actuador lateral aplica una fuerza [[F_ap]] para redirigir cada caja a un carril secundario. En horas de alta humedad, algunas cajas no se desvían como se espera. El equipo de operaciones sospecha "falta de fuerza del actuador", mientras mantenimiento sospecha cambio de friccion por polvo y humedad.

## Estimación física

Para una caja tipica de [[m]] = 24 kg:

- [[P]] = [[m]]*[[g]] = 24*9.81 = 235.44 N
- Si [[system_contact]] = 1, entonces [[N]] ronda ese valor en horizontal.
- En turno seco, [[mu_s]] = 0.40 -> [[f_s]] max aprox 94.2 N
- En turno humedo, [[mu_s]] = 0.22 -> [[f_s]] max aprox 51.8 N

Si el actuador aplica [[F_ap]] = 60 N, el comportamiento cambia por regimen:

- Seco: 60 < 94.2, la caja puede quedar en reposo relativo lateral.
- Humedo: 60 > 51.8, se supera el limite estatico y aparece deslizamiento lateral.

La misma fuerza aplicada genera resultados distintos porque cambia [[mu_s]], no porque "desaparezca" el actuador.

Lectura cuantitativa explicita: el cambio de umbral entre turno seco y humedo es de 42.4 N (94.2 - 51.8), que es mayor que la fuerza aplicada de referencia en muchos lotes. Eso explica por que un ajuste menor del actuador no corrige el problema cuando la causa dominante es el contacto.

En terminos de estimacion por orden de magnitud, pasar de un umbral cercano a 10^2 N a otro cercano a 5x10^1 N cambia la escala de seguridad del proceso. Esa diferencia de escala es fisicamente relevante y confirma que el valor razonable de [[F_ap]] depende del estado real de contacto.

## Interpretacion

La aplicacion confirma el objetivo del leaf: identificar fuerzas reales y su condicion de existencia antes de culpar componentes de planta. El diagrama correcto incluye [[P]], [[N]], [[f]] y [[F_ap]]; no incluye fuerzas ficticias sin agente.

La accion de mejora no es solo subir [[F_ap]]. Puede ser tambien restaurar condiciones de superficie para recuperar [[mu_s]], reducir variabilidad de polvo, o redisenar la estrategia de contacto para controlar [[N]].

En terminos de ingenieria, el modelo base permite diagnostico rapido: calcular [[P]], estimar [[f_s]] max, comparar con [[F_ap]], y decidir si el problema es de actuador o de interfaz de contacto. Ese procedimiento reduce tiempos de parada y mejora decisiones de mantenimiento preventivo.

La estimacion cuantitativa permite una accion operativa inmediata: si el turno humedo mantiene [[mu_s]] cercano a 0.22, el actuador deberia bajar lotes de masa o aumentar su capacidad para sostener un margen minimo de 10 N por encima del umbral. Sin ese margen, pequenas variaciones de polvo o vibracion empujan al sistema al deslizamiento no deseado.

En lectura fisica, esto significa que el limite no depende solo del mando electrico del actuador, sino del estado del interfaz material. Por eso la recomendacion no es unica: se puede intervenir en control, en limpieza de superficie o en rediseno del apoyo para aumentar [[N]] efectivo. Esta conclusion causal evita culpar al subsistema equivocado.

Interpretacion causal final: el efecto observado (desvio fallido) no nace de una "fuerza faltante" abstracta, sino de una reduccion concreta de capacidad de contacto. Cuando [[mu_s]] cae, la misma orden de mando empuja al sistema fuera del regimen estatico. Por eso la accion tecnica correcta combina decision de control con gestion de superficie y verificacion de [[system_contact]].

Tambien deja una regla transferible: siempre que un sistema cambie de comportamiento sin cambiar mando principal, revisar primero parametros de contacto y estado [[system_contact]]. Muchas fallas aparentes de control son, en realidad, cambios de regimen en fuerzas de contacto.
