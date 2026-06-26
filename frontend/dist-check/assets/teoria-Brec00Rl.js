const e=`# Coherencia

## Contexto conceptual

La coherencia describe la capacidad de una onda luminosa para mantener una relacion de fase suficientemente estable como para producir interferencia observable. No basta con tener dos haces de luz: para ver franjas claras y oscuras, las fases que llegan al detector deben conservar una correlacion durante el tiempo y la diferencia de caminos del experimento.

En optica fisica, coherencia conecta fuentes reales con patrones de interferencia. Una fuente muy intensa puede no dar buenas franjas si su fase cambia demasiado rapido; una fuente menos intensa pero mas estable puede producir un patron muy contrastado. Por eso coherencia no es sinonimo de brillo.

El concepto permite decidir si un interferometro, una doble rendija, una fuente laser o una lampara filtrada pueden sostener un patron. La pregunta fisica clave es comparar la escala de coherencia de la fuente con la diferencia de camino del montaje.

## 🟢 Nivel esencial

La idea esencial es que las franjas aparecen cuando las ondas que se recombinan llegan con una relacion de fase estable. Si esa relacion se mantiene, las zonas brillantes y oscuras permanecen definidas. Si la relacion cambia de forma desordenada, el patron se lava y el detector registra una iluminacion casi uniforme.

La magnitud [[L_c]] resume una distancia util de estabilidad. Si el desajuste de caminos [[Delta_L]] es pequeno frente a esa escala, la interferencia puede verse con buen contraste. Si el desajuste se vuelve demasiado grande, la fuente ya no mantiene memoria de fase entre los dos caminos.

La visibilidad [[V]] mide el contraste real entre franjas brillantes y oscuras. Una visibilidad alta no significa necesariamente mas luz total; significa mejor diferencia relativa entre maximos y minimos. Esa distincion es fundamental para leer experimentos.

> [!NOTE]
> Coherencia es estabilidad de fase, no intensidad. Una fuente puede ser brillante y poco coherente, o menos brillante y muy util para interferencia.

## 🔵 Nivel formal

La primera relacion convierte el tiempo de coherencia [[tau_c]] en una longitud de coherencia [[L_c]]. El tiempo de coherencia mide durante cuanto tiempo la fase permanece correlacionada de forma util; multiplicarlo por la velocidad de propagacion da una escala espacial comparable con caminos opticos.

{{f:longitud_coherencia}}

Esta longitud no es el tamano de la fuente ni la distancia maxima que viaja la luz. En aire o vacio, [[c]] actua como velocidad de conversion entre la memoria temporal de fase y la distancia comparable con el montaje. Es una escala de comparacion: si dos recorridos difieren mucho mas que [[L_c]], las fases relativas cambian demasiado para sostener franjas estables.

Para representar de forma simple como cae la coherencia al aumentar la diferencia de camino se usa una magnitud adimensional [[C_rel]]. El modelo no pretende sustituir una funcion de correlacion completa; sirve para leer monotonicamente la perdida de coherencia al crecer [[Delta_L]].

{{f:coherencia_relativa}}

El resultado se interpreta entre cero y uno. Valores cercanos a uno indican caminos bien correlacionados; valores pequenos indican que el patron de interferencia deberia perder contraste.

La visibilidad experimental se obtiene comparando la intensidad maxima [[I_max]] con la intensidad minima [[I_min]] del patron. Esta relacion mide contraste normalizado y elimina la dependencia directa de la potencia total de la fuente.

{{f:visibilidad_franjas}}

Una visibilidad cercana a uno indica franjas muy marcadas. Una visibilidad cercana a cero indica que maximos y minimos apenas se distinguen, sea por incoherencia, fondo luminoso, desequilibrio de haces o mala alineacion.

## 🔴 Nivel estructural

La estructura profunda de la coherencia combina tres niveles: fuente, propagacion y deteccion. La fuente determina [[tau_c]] y por tanto [[L_c]]. El montaje introduce [[Delta_L]] mediante caminos distintos. El detector mide [[V]] como consecuencia visible de esa relacion. Si se mezclan estos niveles, se confunde una propiedad de la fuente con un fallo del montaje.

La coherencia temporal se relaciona con la estabilidad de fase a lo largo del tiempo y con el ancho espectral de la fuente. Una fuente de espectro muy ancho pierde correlacion rapidamente, porque combina frecuencias que se desfasaran entre si. Una fuente de espectro estrecho puede mantener fase durante mas tiempo y permitir diferencias de camino mayores.

Tambien existe coherencia espacial, ligada a la extension angular o fisica de la fuente. Una fuente extensa puede producir haces que llegan desde puntos distintos con fases no correlacionadas. Este leaf se centra en escalas temporales y de camino, pero la lectura experimental completa debe recordar que la geometria de la fuente tambien puede borrar franjas.

La coherencia no es todo o nada. En la practica, las franjas se degradan gradualmente. Por eso conviene trabajar con indicadores como [[C_rel]] o [[V]] en lugar de decidir solo si la interferencia existe. Un patron con contraste bajo puede contener informacion util si el detector y el ruido lo permiten.

La estructura tambien obliga a distinguir prediccion y diagnostico. [[C_rel]] predice una perdida esperada por camino; [[V]] diagnostica lo que realmente se midio. Si ambas lecturas no coinciden, el montaje esta aportando otro mecanismo fisico o instrumental.

> [!WARNING]
> No atribuyas toda perdida de visibilidad a falta de coherencia. Desalineacion, intensidades desiguales, vibraciones, fondo luminoso y resolucion del detector tambien reducen contraste.

## Interpretación física profunda

La coherencia expresa memoria de fase. Dos haces pueden proceder de la misma fuente, pero si el camino de uno retrasa demasiado la fase respecto al otro, el detector recibe combinaciones que cambian durante la medida. El promedio temporal borra entonces las franjas.

La lectura fisica fina consiste en separar contraste y energia. [[V]] no dice cuanta potencia llega, sino cuan distinguibles son maximos y minimos. Una imagen con poca luz puede tener alta visibilidad si el detector es sensible; una imagen brillante puede tener baja visibilidad si las fases se mezclan.

En interferometria, la coherencia funciona como una regla de calidad de la fuente y del montaje. Permite saber si tiene sentido aumentar la diferencia de camino, si conviene filtrar espectralmente la fuente o si se necesita una fuente laser.

## Orden de magnitud

Una lampara de espectro ancho puede tener [[L_c]] de micrometros, mientras un laser estabilizado puede alcanzar metros o mas. Esta diferencia de muchos ordenes de magnitud explica por que una doble rendija simple puede funcionar con luz filtrada, pero un interferometro de brazos largos suele requerir una fuente mucho mas coherente.

Un resultado absurdo aparece si una lampara blanca ordinaria se usa con diferencias de camino de centimetros y se espera alto contraste, o si una visibilidad casi nula se interpreta como ausencia total de luz. La pregunta correcta es comparar [[Delta_L]] con [[L_c]] y despues leer [[V]].

## Método de resolución personalizado

Primero identifica que se esta evaluando: escala temporal de la fuente, diferencia de caminos o contraste medido. Si conoces [[tau_c]], calcula [[L_c]]. Si conoces el montaje, compara [[Delta_L]] con esa escala. Si tienes una imagen de franjas, usa [[I_max]] e [[I_min]] para estimar [[V]].

Despues decide si el problema es de fuente o de montaje. Si [[Delta_L]] supera mucho [[L_c]], falta coherencia temporal. Si [[V]] es baja aunque los caminos esten bien emparejados, revisa intensidades, alineacion, fondo o coherencia espacial.

## Casos especiales y ejemplo extendido

Un laser no es automaticamente perfecto. Puede tener alta coherencia temporal, pero vibraciones, ruido de modo o mala alineacion reducen la visibilidad. Por eso la coherencia de la fuente es necesaria para muchos montajes, pero no suficiente para garantizar franjas limpias.

Una lampara blanca puede producir interferencia si se filtra y si la diferencia de camino es muy pequena. El filtro reduce el ancho espectral y aumenta la escala de coherencia, aunque tambien reduce potencia. Este intercambio entre brillo y coherencia es central en optica experimental.

En tomografia de coherencia optica ocurre lo contrario de lo que a veces se piensa: se busca una coherencia relativamente corta para seleccionar profundidades. La perdida de coherencia fuera de una ventana de camino se convierte en una herramienta de resolucion.

## Preguntas reales del alumno

**¿Mas intensidad significa mas coherencia?** No. La intensidad mide energia por area y tiempo; la coherencia mide estabilidad de fase.

**¿Por que desaparecen las franjas si los haces siguen llegando al detector?** Porque llegan con fases que cambian durante la medida, y el promedio temporal borra maximos y minimos.

**¿Un laser siempre da visibilidad perfecta?** No. Un laser ayuda, pero el montaje puede perder contraste por vibraciones, desalineacion o haces con intensidades muy distintas.

**¿La coherencia es una propiedad solo de la fuente?** No completamente. La fuente aporta una escala de coherencia, pero el montaje decide si la diferencia de caminos queda dentro de esa escala.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Interferencia de la luz](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz), donde se estudia como se suman ondas. Tambien conecta con [Difraccion de la luz](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/difraccion-de-la-luz), porque ambos fenomenos requieren estabilidad de fase para formar patrones definidos.

La ruta natural es estudiar interferencia, despues coherencia y finalmente aplicaciones interferometricas. Asi se entiende que una formula de franjas no basta si la fuente no conserva fase en la escala del experimento.

## Síntesis final

La coherencia mide si una fuente y un montaje conservan fase suficiente para producir franjas observables. [[L_c]], [[Delta_L]], [[C_rel]] y [[V]] permiten traducir esa idea en una lectura fisica: estabilidad temporal, desajuste de caminos y contraste experimental.
`;export{e as default};
