## Contexto conceptual

La autoinduccion aparece cuando una bobina cambia su propia corriente y, por ello, cambia el flujo magnetico que ella misma enlaza. No es un efecto externo añadido: la bobina crea un campo, ese campo queda ligado a sus espiras y cualquier cambio de [[corriente_de_la_bobina]] modifica [[flujo_enlazado]].

Este leaf explica por que una bobina se resiste a cambios bruscos, por que puede generar sobretensiones al abrir un circuito y por que almacena energia en su campo magnetico. La magnitud dominante es [[inductancia_propia]], que resume geometria, numero de espiras y propiedades magneticas del medio.

> [!NOTE]
> La autoinduccion no se opone a que exista corriente; se opone a que la corriente cambie.

## 🟢 Nivel esencial

Una bobina con corriente crea un campo magnetico. Si la corriente aumenta, el campo propio aumenta; si la corriente disminuye, el campo propio disminuye. La autoinduccion es la respuesta de la bobina ante ese cambio: aparece una [[fem_autoinducida]] que intenta frenar la variacion de [[corriente_de_la_bobina]].

La idea intuitiva es parecida a una inercia electromagnetica. Una bobina deja pasar una corriente constante idealmente sin producir fem autoinducida, pero responde con fuerza cuando la corriente cambia rapidamente. Por eso los interruptores, reles y motores con bobinas necesitan protecciones contra picos de tension.

En una lectura cotidiana, la bobina no "detecta" el valor absoluto de corriente como problema. Detecta que el campo propio esta cambiando. Si el cambio es lento, la respuesta puede ser pequeña; si el cambio es brusco, la respuesta puede ser grande aunque la corriente inicial no sea enorme.

> [!WARNING]
> Si solo miras el valor instantaneo de [[corriente_de_la_bobina]], puedes perder el fenomeno principal. La clave esta en [[cambio_de_corriente]] durante [[intervalo_de_tiempo]].

## 🔵 Nivel formal

En una bobina lineal, el flujo enlazado y la corriente mantienen una relacion proporcional. La definicion operativa de inductancia propia es:

{{f:definicion_inductancia}}

Esa relacion separa el estado magnetico [[flujo_enlazado]] de la causa electrica [[corriente_de_la_bobina]]. Si la pendiente es constante, la bobina tiene una [[inductancia_propia]] bien definida en ese tramo. La misma idea puede escribirse como flujo enlazado producido por una corriente:

{{f:flujo_enlazado_lineal}}

Cuando la corriente cambia durante un intervalo, la ley de Faraday-Lenz aplicada al flujo propio da la fem media:

{{f:fem_autoinducida_media}}

El signo negativo no es decorativo: expresa que la fem inducida se orienta contra el cambio de corriente. Si [[cambio_de_corriente]] es positivo, la bobina responde intentando impedir el aumento; si [[cambio_de_corriente]] es negativo, intenta sostener la corriente.

La energia almacenada en el campo magnetico de la bobina lineal queda dada por:

{{f:energia_magnetica}}

Estas cuatro relaciones conectan tres lecturas: pendiente magnetica, oposicion dinamica y almacenamiento energetico. La autoinduccion queda completa solo cuando se leen juntas.

En calculo practico, conviene no mezclar esas lecturas. [[flujo_enlazado]] describe un estado magnetico, [[fem_autoinducida]] describe un cambio temporal y [[energia_magnetica_almacenada]] describe energia disponible. La misma [[inductancia_propia]] aparece en las tres, pero la pregunta fisica decide cual relacion se usa.

## 🔴 Nivel estructural

La estructura profunda de la autoinduccion es una realimentacion electromagnetica local. La corriente [[corriente_de_la_bobina]] crea campo magnetico, el campo produce [[flujo_enlazado]], y el cambio de ese enlace genera [[fem_autoinducida]]. El circuito no necesita otro iman ni otra bobina: se induce a si mismo porque su propio campo esta enlazado con sus espiras.

La inductancia [[inductancia_propia]] depende de la geometria, del numero de vueltas, del nucleo y de la distribucion espacial del campo. En una bobina con nucleo ferromagnetico, [[inductancia_propia]] puede variar si el material se satura; entonces la pendiente entre [[flujo_enlazado]] e [[corriente_de_la_bobina]] deja de ser fija.

La fem autoinducida no indica energia creada de la nada. Indica intercambio entre fuente, campo magnetico y circuito. Cuando una fuente aumenta la corriente, parte del trabajo se almacena como [[energia_magnetica_almacenada]]. Cuando se abre el circuito, esa energia debe salir por algun camino: una chispa, un diodo de rueda libre, una resistencia de descarga o una sobretension.

Tambien es importante distinguir autoinduccion de inductancia mutua. En autoinduccion, el flujo que cambia es el de la propia bobina. En inductancia mutua, el cambio de una bobina afecta a otra.

> [!TIP]
> Para diagnosticar un problema inductivo, pregunta siempre: que corriente cambia, en cuanto tiempo cambia y que inductancia enlaza ese cambio.

## Interpretación física profunda

El signo de [[fem_autoinducida]] es una lectura de causalidad. No dice que la bobina sea una bateria ordinaria, sino que el campo magnetico reorganiza el circuito para oponerse al cambio impuesto. Esta oposicion es la version local de la ley de Lenz aplicada al propio flujo.

La energia [[energia_magnetica_almacenada]] aclara por que los transitorios inductivos pueden ser peligrosos. Una bobina con corriente almacena energia aunque la corriente sea constante. Al interrumpirla rapidamente, el circuito debe redistribuir esa energia en un tiempo corto, elevando tensiones si no existe un camino seguro de descarga.

## Orden de magnitud

Una inductancia pequeña de electronica puede estar en microhenrios; una bobina de filtro puede estar en milihenrios; un electroiman grande puede alcanzar henrios. Un cambio de 1 A en 1 ms con una bobina de 0.1 H ya puede producir una fem de orden cien voltios.

Un resultado absurdo aparece si se predice una fem enorme usando milisegundos como si fueran segundos, o si se calcula energia negativa. La escala de [[fem_autoinducida]] crece al reducir [[intervalo_de_tiempo]], y la escala de [[energia_magnetica_almacenada]] crece rapidamente con la corriente.

## Método de resolución personalizado

Primero identifica si el problema pide estado, cambio o energia. Si pide estado magnetico, usa [[flujo_enlazado]] y [[inductancia_propia]]. Si pide tension inducida, localiza [[cambio_de_corriente]] y [[intervalo_de_tiempo]]. Si pide riesgo al abrir o descargar, calcula [[energia_magnetica_almacenada]].

Despues conserva los signos. El sentido elegido para [[corriente_de_la_bobina]] fija el signo de [[cambio_de_corriente]] y de [[fem_autoinducida]]. Finalmente revisa el dominio: si hay saturacion, nucleo no lineal o parasitos importantes, la inductancia constante solo es una primera aproximacion.

## Casos especiales y ejemplo extendido

Con corriente constante, una bobina ideal tiene flujo enlazado y energia almacenada, pero no fem autoinducida. Este caso suele confundir porque el campo existe, aunque no cambie. La fem aparece por variacion, no por presencia estatica del campo.

Al abrir un rele, [[cambio_de_corriente]] es negativo y [[intervalo_de_tiempo]] puede ser muy pequeño. La bobina intenta sostener la corriente y puede elevar la tension en sus terminales. Un diodo de proteccion no elimina la energia; ofrece un camino para disiparla de forma controlada.

Como ejemplo extendido, compara una bobina de baja [[inductancia_propia]] y otra de alta [[inductancia_propia]] sometidas al mismo cambio de corriente. La segunda produce mayor [[fem_autoinducida]] y almacena mas [[energia_magnetica_almacenada]] para la misma corriente, por lo que exige mas cuidado en conmutacion.

## Preguntas reales del alumno

**¿La inductancia frena siempre la corriente?** No. En el modelo ideal solo se opone a cambios de [[corriente_de_la_bobina]]. Una corriente constante no genera fem autoinducida.

**¿Por que aparece una chispa al abrir una bobina?** Porque [[energia_magnetica_almacenada]] almacenada debe salir. Si se corta el camino de corriente, la tension puede crecer hasta abrir otro camino.

**¿Por que importa tanto el tiempo del cambio?** Porque la misma variacion [[cambio_de_corriente]] produce mayor [[fem_autoinducida]] si ocurre en menor [[intervalo_de_tiempo]].

**¿La energia de la bobina esta en el cable?** No principalmente. Se almacena en el campo magnetico asociado a la corriente.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [Flujo magnetico](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), donde se entiende que significa enlazar campo con una superficie. Tambien conecta con [Ley de Faraday](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), que da la estructura de la fem inducida.

Despues conviene estudiar [Inductancia mutua](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), transformadores y circuitos RL. La autoinduccion es el caso donde el circuito afectado es el mismo que crea el flujo.

## Síntesis final

La autoinduccion es la respuesta de una bobina ante cambios de su propia corriente. [[inductancia_propia]] mide el enlace magnetico por corriente, [[fem_autoinducida]] expresa la oposicion al cambio y [[energia_magnetica_almacenada]] revela la energia almacenada en el campo.