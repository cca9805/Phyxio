const e=`# Autoinduccion

## Contexto conceptual

La autoinduccion aparece cuando una bobina cambia su propia corriente y, por ello, cambia el flujo magnetico que ella misma enlaza. No es un efecto externo añadido: la bobina crea un campo, ese campo queda ligado a sus espiras y cualquier cambio de [[I]] modifica [[lambda_B]].

Este leaf explica por que una bobina se resiste a cambios bruscos, por que puede generar sobretensiones al abrir un circuito y por que almacena energia en su campo magnetico. La magnitud dominante es [[L]], que resume geometria, numero de espiras y propiedades magneticas del medio.

> [!NOTE]
> La autoinduccion no se opone a que exista corriente; se opone a que la corriente cambie.

## 🟢 Nivel esencial

Una bobina con corriente crea un campo magnetico. Si la corriente aumenta, el campo propio aumenta; si la corriente disminuye, el campo propio disminuye. La autoinduccion es la respuesta de la bobina ante ese cambio: aparece una [[epsilon_L]] que intenta frenar la variacion de [[I]].

La idea intuitiva es parecida a una inercia electromagnetica. Una bobina deja pasar una corriente constante idealmente sin producir fem autoinducida, pero responde con fuerza cuando la corriente cambia rapidamente. Por eso los interruptores, reles y motores con bobinas necesitan protecciones contra picos de tension.

En una lectura cotidiana, la bobina no "detecta" el valor absoluto de corriente como problema. Detecta que el campo propio esta cambiando. Si el cambio es lento, la respuesta puede ser pequeña; si el cambio es brusco, la respuesta puede ser grande aunque la corriente inicial no sea enorme.

> [!WARNING]
> Si solo miras el valor instantaneo de [[I]], puedes perder el fenomeno principal. La clave esta en [[DeltaI]] durante [[Deltat]].

## 🔵 Nivel formal

En una bobina lineal, el flujo enlazado y la corriente mantienen una relacion proporcional. La definicion operativa de inductancia propia es:

{{f:definicion_inductancia}}

Esa relacion separa el estado magnetico [[lambda_B]] de la causa electrica [[I]]. Si la pendiente es constante, la bobina tiene una [[L]] bien definida en ese tramo. La misma idea puede escribirse como flujo enlazado producido por una corriente:

{{f:flujo_enlazado_lineal}}

Cuando la corriente cambia durante un intervalo, la ley de Faraday-Lenz aplicada al flujo propio da la fem media:

{{f:fem_autoinducida_media}}

El signo negativo no es decorativo: expresa que la fem inducida se orienta contra el cambio de corriente. Si [[DeltaI]] es positivo, la bobina responde intentando impedir el aumento; si [[DeltaI]] es negativo, intenta sostener la corriente.

La energia almacenada en el campo magnetico de la bobina lineal queda dada por:

{{f:energia_magnetica}}

Estas cuatro relaciones conectan tres lecturas: pendiente magnetica, oposicion dinamica y almacenamiento energetico. La autoinduccion queda completa solo cuando se leen juntas.

En calculo practico, conviene no mezclar esas lecturas. [[lambda_B]] describe un estado magnetico, [[epsilon_L]] describe un cambio temporal y [[U_B]] describe energia disponible. La misma [[L]] aparece en las tres, pero la pregunta fisica decide cual relacion se usa.

## 🔴 Nivel estructural

La estructura profunda de la autoinduccion es una realimentacion electromagnetica local. La corriente [[I]] crea campo magnetico, el campo produce [[lambda_B]], y el cambio de ese enlace genera [[epsilon_L]]. El circuito no necesita otro iman ni otra bobina: se induce a si mismo porque su propio campo esta enlazado con sus espiras.

La inductancia [[L]] depende de la geometria, del numero de vueltas, del nucleo y de la distribucion espacial del campo. En una bobina con nucleo ferromagnetico, [[L]] puede variar si el material se satura; entonces la pendiente entre [[lambda_B]] e [[I]] deja de ser fija.

La fem autoinducida no indica energia creada de la nada. Indica intercambio entre fuente, campo magnetico y circuito. Cuando una fuente aumenta la corriente, parte del trabajo se almacena como [[U_B]]. Cuando se abre el circuito, esa energia debe salir por algun camino: una chispa, un diodo de rueda libre, una resistencia de descarga o una sobretension.

Tambien es importante distinguir autoinduccion de inductancia mutua. En autoinduccion, el flujo que cambia es el de la propia bobina. En inductancia mutua, el cambio de una bobina afecta a otra.

> [!TIP]
> Para diagnosticar un problema inductivo, pregunta siempre: que corriente cambia, en cuanto tiempo cambia y que inductancia enlaza ese cambio.

## Interpretación física profunda

El signo de [[epsilon_L]] es una lectura de causalidad. No dice que la bobina sea una bateria ordinaria, sino que el campo magnetico reorganiza el circuito para oponerse al cambio impuesto. Esta oposicion es la version local de la ley de Lenz aplicada al propio flujo.

La energia [[U_B]] aclara por que los transitorios inductivos pueden ser peligrosos. Una bobina con corriente almacena energia aunque la corriente sea constante. Al interrumpirla rapidamente, el circuito debe redistribuir esa energia en un tiempo corto, elevando tensiones si no existe un camino seguro de descarga.

## Orden de magnitud

Una inductancia pequeña de electronica puede estar en microhenrios; una bobina de filtro puede estar en milihenrios; un electroiman grande puede alcanzar henrios. Un cambio de 1 A en 1 ms con una bobina de 0.1 H ya puede producir una fem de orden cien voltios.

Un resultado absurdo aparece si se predice una fem enorme usando milisegundos como si fueran segundos, o si se calcula energia negativa. La escala de [[epsilon_L]] crece al reducir [[Deltat]], y la escala de [[U_B]] crece rapidamente con la corriente.

## Método de resolución personalizado

Primero identifica si el problema pide estado, cambio o energia. Si pide estado magnetico, usa [[lambda_B]] y [[L]]. Si pide tension inducida, localiza [[DeltaI]] y [[Deltat]]. Si pide riesgo al abrir o descargar, calcula [[U_B]].

Despues conserva los signos. El sentido elegido para [[I]] fija el signo de [[DeltaI]] y de [[epsilon_L]]. Finalmente revisa el dominio: si hay saturacion, nucleo no lineal o parasitos importantes, la inductancia constante solo es una primera aproximacion.

## Casos especiales y ejemplo extendido

Con corriente constante, una bobina ideal tiene flujo enlazado y energia almacenada, pero no fem autoinducida. Este caso suele confundir porque el campo existe, aunque no cambie. La fem aparece por variacion, no por presencia estatica del campo.

Al abrir un rele, [[DeltaI]] es negativo y [[Deltat]] puede ser muy pequeño. La bobina intenta sostener la corriente y puede elevar la tension en sus terminales. Un diodo de proteccion no elimina la energia; ofrece un camino para disiparla de forma controlada.

Como ejemplo extendido, compara una bobina de baja [[L]] y otra de alta [[L]] sometidas al mismo cambio de corriente. La segunda produce mayor [[epsilon_L]] y almacena mas [[U_B]] para la misma corriente, por lo que exige mas cuidado en conmutacion.

## Preguntas reales del alumno

**¿La inductancia frena siempre la corriente?** No. En el modelo ideal solo se opone a cambios de [[I]]. Una corriente constante no genera fem autoinducida.

**¿Por que aparece una chispa al abrir una bobina?** Porque [[U_B]] almacenada debe salir. Si se corta el camino de corriente, la tension puede crecer hasta abrir otro camino.

**¿Por que importa tanto el tiempo del cambio?** Porque la misma variacion [[DeltaI]] produce mayor [[epsilon_L]] si ocurre en menor [[Deltat]].

**¿La energia de la bobina esta en el cable?** No principalmente. Se almacena en el campo magnetico asociado a la corriente.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [Flujo magnetico](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico), donde se entiende que significa enlazar campo con una superficie. Tambien conecta con [Ley de Faraday](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday), que da la estructura de la fem inducida.

Despues conviene estudiar [Inductancia mutua](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), transformadores y circuitos RL. La autoinduccion es el caso donde el circuito afectado es el mismo que crea el flujo.

## Síntesis final

La autoinduccion es la respuesta de una bobina ante cambios de su propia corriente. [[L]] mide el enlace magnetico por corriente, [[epsilon_L]] expresa la oposicion al cambio y [[U_B]] revela la energia almacenada en el campo.
`;export{e as default};
