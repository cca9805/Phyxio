const e=`# Materiales magneticos

## Contexto conceptual

Los materiales magneticos explican por que una misma bobina puede producir efectos muy distintos si su interior contiene aire, aluminio, cobre, ferrita o hierro dulce. La fuente externa impone una intensidad magnetica [[H]], pero el material responde mediante una magnetizacion [[M]] que modifica el campo magnetico total [[B]]. Esta separacion es esencial para no atribuir todo el fenomeno a la corriente libre.

En este leaf el foco no esta en calcular el campo de una geometria concreta, sino en leer la respuesta del medio. La pregunta fisica central es decidir si el material refuerza, debilita o concentra el campo aplicado. Para eso se usan [[mu]], [[mu_r]] y [[chi_m]] como lenguaje compacto de comparacion.

> [!NOTE]
> La idea clave es que [[H]] describe la excitacion aplicada, mientras [[M]] describe la respuesta del material y [[B]] el resultado final.

## 🟢 Nivel esencial

Un material magnetico no es un recipiente pasivo para el campo. Sus dominios, electrones y corrientes microscopicas pueden organizarse de forma que el campo total [[B]] cambie respecto al que habria en vacio. En un material diamagnetico la respuesta se opone debilmente; en uno paramagnetico acompaña debilmente; en un ferromagnetico puede ser intensa, pero solo en ciertos tramos.

La magnitud mas rapida para comparar materiales es [[mu_r]]. Si esta cerca de la referencia de vacio, el material apenas altera el campo. Si es muy grande en un tramo lineal, concentra mucho campo para una misma [[H]]. Si la respuesta se lee con [[chi_m]], el signo ayuda a distinguir oposicion y alineacion.

> [!WARNING]
> No conviene decir que un material "tiene mucho magnetismo" sin especificar si hablas de [[M]], [[B]], [[mu_r]] o de memoria magnetica.

## 🔵 Nivel formal

En el modelo lineal, isotropo y reversible, se reemplaza la complejidad microscopica por relaciones constitutivas. La primera relacion convierte la comparacion relativa en una permeabilidad con unidades:

{{f:permeabilidad_absoluta}}

Aqui [[mu0]] fija la escala de vacio y [[mu_r]] expresa cuanto se aparta el material de esa referencia. Esta formula no dice por si sola si el material esta cerca de saturarse; solo define una pendiente efectiva mientras el tramo experimental sea lineal.

La desviacion respecto al vacio se expresa mediante:

{{f:susceptibilidad_desde_permeabilidad}}

Con [[chi_m]] positiva, la magnetizacion inducida acompaña a [[H]]. Con [[chi_m]] negativa, se opone. El tamaño de [[chi_m]] indica la intensidad relativa de la respuesta interna, pero no debe extrapolarse fuera del rango medido.

La respuesta material queda conectada con la excitacion mediante:

{{f:magnetizacion_lineal}}

Finalmente, el campo total usado en fuerzas magneticas se obtiene con:

{{f:campo_material_lineal}}

Estas relaciones forman un circuito conceptual: [[H]] es la entrada impuesta, [[M]] es la respuesta interna, [[mu]] y [[mu_r]] condensan la pendiente efectiva, y [[B]] es el resultado macroscópico que afectaria a cargas, conductores o nucleos magneticos. La lectura formal correcta exige mantener ese orden causal.

## 🔴 Nivel estructural

La estructura profunda del tema esta en separar fuente, medio y resultado. [[H]] pertenece a la descripcion de corrientes libres y condiciones de contorno; [[M]] pertenece a la organizacion interna del material; [[B]] pertenece al campo resultante que entra en la fuerza magnetica. Si estas tres funciones se mezclan, el alumno puede obtener numeros plausibles pero una explicacion fisica equivocada.

El modelo lineal funciona como una pendiente local de una curva constitutiva. En materiales debiles, esa pendiente suele ser casi constante en rangos amplios. En ferromagneticos, en cambio, la curva puede comenzar con pendiente elevada, luego curvarse y finalmente acercarse a saturacion. Por eso [[mu_r]] no debe tratarse como una propiedad universal inmutable: puede depender del punto de trabajo, de la historia magnetica y de la temperatura.

La magnetizacion [[M]] tambien introduce una diferencia conceptual entre respuesta reversible y memoria. Si al retirar [[H]] el material conserva parte de su magnetizacion, aparece remanencia y el modelo lineal reversible deja de describir el fenomeno completo. Esa memoria obliga a usar curvas de histeresis, coercitividad y energia perdida por ciclo.

Otra capa estructural es la geometria. Un nucleo cerrado de alta [[mu_r]] concentra flujo con mucha eficacia, pero un entrehierro puede dominar la reluctancia del sistema. Entonces un material excelente no garantiza por si solo un campo alto en la region de interes. La lectura correcta combina material, forma, corriente libre y rango de trabajo.

> [!TIP]
> Cuando un resultado parezca sorprendentemente alto, pregunta primero si estas usando una pendiente local valida o extrapolando una constante fuera de su tramo.

## Interpretación física profunda

La lectura fina de un material magnetico empieza por el signo y termina por la validez. Un [[chi_m]] negativo no significa que no haya respuesta; significa que la respuesta inducida se orienta contra la excitacion. Un [[chi_m]] pequeño y positivo tampoco significa ferromagnetismo: puede ser una alineacion paramagnetica debil, casi invisible sin instrumentacion sensible.

En ferromagneticos, un valor grande de [[mu_r]] puede ser util y engañoso a la vez. Es util porque resume la capacidad de concentrar campo en un tramo. Es engañoso porque oculta saturacion, histeresis y dependencia historica. La magnitud dominante del leaf, [[mu_r]], debe leerse como criterio de comparacion, no como garantia universal de comportamiento.

## Orden de magnitud

En aire o vacio, [[mu_r]] es esencialmente de orden uno. En materiales diamagneticos la diferencia respecto a uno suele ser muy pequeña; en paramagneticos tambien suele ser pequeña pero con signo de alineacion. En ferromagneticos blandos, una [[mu_r]] efectiva puede pasar de cientos a miles en un tramo favorable, mientras [[B]] de laboratorio puede ir desde militeslas hasta valores cercanos a algunos teslas.

Un resultado absurdo aparece si [[mu_r]] enorme se aplica a cualquier [[H]] sin saturacion. Si el calculo predice campos de muchos teslas en un nucleo ordinario sin revisar la curva del material, probablemente se ha extrapolado el modelo lineal fuera de su dominio.

## Método de resolución personalizado

Primero identifica que magnitud controla el problema: si la fuente impone corriente libre, suele conocerse [[H]]; si se mide el campo total, puede conocerse [[B]]; si se compara el material con vacio, la pista principal es [[mu_r]]. Despues decide si estas en regimen lineal, revisando si el enunciado habla de saturacion, remanencia o curva de histeresis.

Luego usa las relaciones constitutivas en orden fisico. Convierte [[mu_r]] en [[mu]], interpreta [[chi_m]], estima [[M]] si interesa la respuesta interna y calcula [[B]] solo al final. Cierra comparando el resultado con ordenes de magnitud y con el tipo de material indicado.

## Casos especiales y ejemplo extendido

Un diamagnetico puede tener [[chi_m]] negativa y aun asi producir un efecto real, aunque pequeño. La señal no es un campo grande, sino una ligera reduccion de la respuesta respecto al vacio. Este caso es util porque obliga a separar "respuesta debil" de "respuesta inexistente".

Un ferromagnetico blando en un transformador puede tener una [[mu_r]] alta a baja excitacion. Si la corriente aumenta demasiado, el incremento de [[B]] deja de ser proporcional a [[H]]. En ese momento el calculo lineal puede seguir dando numeros, pero ya no representa la fisica del nucleo.

Como ejemplo extendido, imagina comparar dos nucleos para una bobina. El primero tiene respuesta casi constante pero moderada; el segundo concentra mucho campo al inicio, aunque se satura antes. La mejor eleccion no depende solo de quien tenga mayor [[mu_r]] nominal, sino de cual mantiene una pendiente util en el rango de [[H]] que realmente usara el dispositivo.

## Preguntas reales del alumno

**¿Por que no basta con hablar solo de campo magnetico?** Porque [[B]] mezcla fuente y material. Para entender por que cambia al introducir un nucleo, necesitas separar [[H]] y [[M]].

**¿Una susceptibilidad negativa significa que el material cancela todo el campo?** No. Significa que la magnetizacion inducida se opone debilmente a [[H]]. La cancelacion total no es la lectura ordinaria.

**¿Por que un hierro con gran permeabilidad no siempre produce mas campo?** Porque puede saturarse. Cuando la pendiente cae, aumentar [[H]] apenas aumenta [[B]].

**¿La permeabilidad relativa es una constante del material?** En materiales lineales debiles puede tratarse asi en muchos rangos. En ferromagneticos suele ser una propiedad efectiva del tramo, no un numero universal.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con [Campo magnetico](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico), porque alli se interpreta [[B]] como campo que actua sobre cargas y corrientes. Tambien conecta con [Ley de Ampere](leaf:fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-ampere), donde [[H]] se relaciona con corrientes libres en geometrías simetricas.

Despues conviene estudiar induccion electromagnetica, especialmente transformadores y autoinduccion. En esos temas, elegir un material magnetico ya no es una cuestion nominal: controla flujo, perdidas, saturacion y eficiencia energetica.

## Síntesis final

Los materiales magneticos se entienden separando excitacion aplicada, respuesta interna y campo resultante. [[mu_r]] y [[chi_m]] ofrecen una lectura compacta, pero solo son fiables dentro del regimen lineal y reversible que el modelo presupone.
`;export{e as default};
