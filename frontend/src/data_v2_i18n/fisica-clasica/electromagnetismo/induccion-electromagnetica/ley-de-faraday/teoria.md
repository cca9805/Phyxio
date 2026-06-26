## Contexto conceptual

La ley de Faraday describe como aparece una fem inducida cuando cambia el flujo magnetico enlazado por un circuito. Es una ley central de la induccion electromagnetica porque convierte una variacion magnetica en una respuesta electrica medible.

Este leaf explica que debe cambiar, que papel desempeñan [[cambio_de_flujo_magnetico]], [[intervalo_de_tiempo]] y [[numero_de_espiras]], y por que el signo de [[epsilon_ind]] no es un detalle algebraico sino la lectura de oposicion de Lenz. Sirve para entender generadores, transformadores, sensores y bobinas.

> [!NOTE]
> No todo campo magnetico induce fem. La clave es el cambio de flujo enlazado.

## 🟢 Nivel esencial

Imagina una espira atravesada por campo magnetico. Si el campo, el area efectiva o la orientacion cambian, cambia el flujo que atraviesa la espira. La ley de Faraday dice que ese cambio provoca una fem [[epsilon_ind]] alrededor del circuito.

La idea esencial es **cambio**, no presencia. Un iman quieto cerca de una espira puede producir flujo, pero no una fem sostenida si el flujo no varia. En cambio, mover el iman, girar la espira o cambiar el campo puede inducir tension.

Si la espira tiene muchas vueltas, el efecto se acumula. El numero [[numero_de_espiras]] multiplica la respuesta cuando las espiras enlazan cambios similares de flujo. Por eso una bobina puede producir una fem apreciable aunque el cambio por vuelta sea pequeño.

> [!WARNING]
> El error mas comun es usar el flujo como si fuera la causa directa. La causa de la fem es la variacion de flujo durante un tiempo.

## 🔵 Nivel formal

Para un cambio finito de flujo, la forma media de la ley de Faraday es:

{{f:ley_faraday_media}}

La relacion muestra tres controles: cuanto cambia el flujo, cuanto tarda en cambiar y cuantas espiras enlazan ese cambio. Si [[cambio_de_flujo_magnetico]] aumenta en modulo o [[intervalo_de_tiempo]] disminuye, el modulo de [[epsilon_ind]] crece. Si [[numero_de_espiras]] aumenta, se suman contribuciones de mas espiras.

Conviene aislar primero la rapidez media de cambio de flujo:

{{f:tasa_cambio_flujo}}

Con esa magnitud, la ley se ve como una relacion lineal entre causa temporal y respuesta inducida:

{{f:ley_faraday_tasa}}

Esta forma es especialmente util para graficos. Si [[numero_de_espiras]] se mantiene fijo, variar [[rapidez_media_de_cambio_de_flujo]] cambia [[epsilon_ind]] de forma proporcional y con signo opuesto. La pendiente no representa una resistencia ni una fuente externa; representa cuantas espiras suman la respuesta inducida.

Cuando el flujo procede de un campo uniforme efectivo que atraviesa un area, puede estimarse con:

{{f:flujo_uniforme}}

Estas formulas no describen cuatro fenomenos separados. Descomponen una misma lectura: primero se determina [[flujo_magnetico]], luego el cambio [[cambio_de_flujo_magnetico]], despues la rapidez [[rapidez_media_de_cambio_de_flujo]] y finalmente la fem [[epsilon_ind]] con el signo de oposicion.

El orden de uso importa. Si se calcula [[epsilon_ind]] antes de definir que superficie produce [[flujo_magnetico]], el signo y la escala quedan sin base fisica. Por eso la matematica formal empieza por el flujo enlazado y termina en la fem inducida.

## 🔴 Nivel estructural

La estructura profunda de la ley de Faraday une geometria, campo y circuito. El flujo [[flujo_magnetico]] no es solo campo magnetico: incluye que superficie se elige, que orientacion tiene y que parte del campo la atraviesa. Por eso el mismo campo puede inducir respuestas distintas en circuitos con distinta area u orientacion.

La ley tambien separa estado y proceso. [[flujo_magnetico]] describe un estado magnetico; [[cambio_de_flujo_magnetico]] describe una diferencia entre estados; [[rapidez_media_de_cambio_de_flujo]] describe la rapidez media de esa diferencia. La fem inducida pertenece al proceso, no al estado aislado. Esta distincion evita atribuir fem a un campo estatico.

Hay varias formas fisicas de cambiar el flujo. Puede cambiar [[campo_magnetico_perpendicular_efectivo]], puede cambiar [[area_enlazada]], puede cambiar la orientacion efectiva o puede cambiar la forma del circuito. El modelo simple usa [[campo_magnetico_perpendicular_efectivo]] y [[area_enlazada]] cuando el campo puede tratarse como uniforme; si el campo varia mucho en el espacio, se necesita una descripcion integral.

El signo negativo representa la parte causal de Lenz: la fem inducida aparece con polaridad que se opone al cambio de flujo que la produce. Sin esa lectura, la ley solo daria un modulo y perderia la direccion fisica de la respuesta.

Los limites aparecen cuando el circuito no esta bien definido, cuando el cambio es tan rapido que la aproximacion cuasiestatica deja de ser suficiente, o cuando el campo no uniforme no puede resumirse con un unico [[campo_magnetico_perpendicular_efectivo]]. En esos casos, la idea de Faraday sigue siendo central, pero la estimacion elemental deja de bastar.

> [!TIP]
> Para resolver, pregunta siempre: que flujo enlaza el circuito, como cambia, en cuanto tiempo cambia y que signo impone Lenz.

## Interpretación física profunda

La ley de Faraday no dice que el campo magnetico "empuje" cargas por estar presente. Dice que un cambio de enlace magnetico crea una circulacion electrica inducida. La fem es una respuesta del circuito completo, no solo de un punto local.

La palabra enlazado es decisiva. Un campo cercano que no atraviesa la superficie elegida no contribuye al flujo de ese circuito. Del mismo modo, un area grande no importa si la componente efectiva [[campo_magnetico_perpendicular_efectivo]] es nula.

## Orden de magnitud

Una bobina con 100 espiras y un cambio de flujo de 0.001 Wb por espira en 0.01 s puede producir una fem del orden de 10 V. En sensores pequeños, las fem pueden estar en microvoltios o milivoltios; en generadores y transformadores, pueden llegar a cientos o miles de voltios.

Un resultado absurdo aparece si se predice una fem grande con [[cambio_de_flujo_magnetico]] nulo, si [[intervalo_de_tiempo]] se usa en milisegundos sin convertir, o si se olvida [[numero_de_espiras]] en una bobina.

## Método de resolución personalizado

Primero identifica la superficie y la normal positiva. Despues calcula o estima [[flujo_magnetico]] en los estados relevantes. Si el problema da estados inicial y final, obtiene [[cambio_de_flujo_magnetico]] antes de pensar en la fem.

Luego convierte [[intervalo_de_tiempo]] a segundos, aplica [[numero_de_espiras]] si hay bobina y conserva el signo. Al final interpreta la polaridad: la fem se orienta contra el cambio de flujo, no contra el flujo en si.

## Casos especiales y ejemplo extendido

Con flujo constante, la fem inducida media es nula aunque el flujo sea grande. Esta situacion aparece con un iman quieto respecto a una espira fija. Hay campo, hay flujo, pero no hay cambio de enlace.

Si se gira una espira en un campo uniforme, el flujo cambia aunque el modulo del campo no cambie. La induccion puede venir de orientacion, de area, de campo o de movimiento. Faraday agrupa todas esas posibilidades bajo el cambio de flujo enlazado.

Como ejemplo extendido, compara dos bobinas sometidas al mismo cambio de flujo por espira. La bobina con mas [[numero_de_espiras]] produce mayor [[epsilon_ind]], siempre que las espiras enlacen cambios semejantes. Si solo una parte de las espiras enlaza el campo, usar el numero total exagera la fem.

## Preguntas reales del alumno

**¿Puede haber flujo sin fem inducida?** Si. Si [[flujo_magnetico]] permanece constante, no hay fem media aunque el flujo sea distinto de cero.

**¿Por que importa el signo negativo?** Porque indica la polaridad que se opone al cambio de flujo. Es la lectura de Lenz.

**¿Aumentar el area siempre aumenta la fem?** No necesariamente. Aumenta el flujo solo si el area añadida queda atravesada por [[campo_magnetico_perpendicular_efectivo]] efectivo y cambia en el proceso.

**¿La fem aparece en un punto concreto?** No como una bateria puntual ideal. La ley describe una fem alrededor del circuito enlazado.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Flujo magnetico](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), donde se define que significa enlazar campo con una superficie. Tambien conecta con [Ley de Lenz](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-lenz), que interpreta el signo.

Despues conviene estudiar [Autoinduccion](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion), [Inductancia mutua](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), generadores y transformadores.

## Síntesis final

La ley de Faraday afirma que la fem inducida nace del cambio de flujo magnetico enlazado. [[cambio_de_flujo_magnetico]], [[intervalo_de_tiempo]], [[numero_de_espiras]] y el signo de Lenz permiten pasar de una variacion magnetica a una respuesta electrica interpretable.