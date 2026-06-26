const e=`# Ley de lenz

## Contexto conceptual

La ley de Lenz da el sentido fisico de la induccion electromagnetica. Faraday dice cuanto vale la fem inducida; Lenz dice con que polaridad aparece para oponerse al cambio de flujo que la produce.

Este leaf explica por que la induccion no se opone al campo magnetico por existir, sino al cambio de flujo enlazado. La magnitud central es [[epsilon_ind]], pero su lectura depende de [[DeltaPhi_B]], [[r_Phi]] y de la convencion de signo elegida.

> [!NOTE]
> Lenz no es una fuerza nueva. Es la lectura de signo que impide que la induccion refuerce espontaneamente el cambio que la origina.

## 🟢 Nivel esencial

Cuando el flujo magnetico enlazado con un circuito cambia, aparece una fem inducida. La ley de Lenz afirma que esa fem tiene un sentido tal que intenta oponerse al cambio de flujo. Si el flujo aumenta, la respuesta inducida tiende a frenar ese aumento; si disminuye, tiende a sostenerlo.

La idea clave es **oposicion al cambio**, no oposicion al campo. Una espira cerca de un iman quieto puede tener flujo, pero no necesita generar fem sostenida. En cambio, al acercar o alejar el iman, el circuito responde al cambio de flujo.

Esta regla tambien protege la conservacion de la energia. Si la corriente inducida reforzara el cambio que la produce, el sistema podria amplificarse sin trabajo externo. Lenz indica que para mantener el cambio hay que aportar energia desde fuera.

> [!WARNING]
> No preguntes primero hacia donde va el campo. Pregunta si el flujo enlazado aumenta o disminuye respecto a una normal elegida.

## 🔵 Nivel formal

La ley de Lenz aparece en la forma media de Faraday mediante el signo negativo:

{{f:ley_lenz_faraday}}

Para separar modulo y signo, conviene definir la rapidez media de cambio de flujo:

{{f:tasa_cambio_flujo}}

Con esa rapidez, la oposicion de Lenz se lee directamente:

{{f:ley_lenz_tasa}}

La regla puede escribirse tambien como relacion conceptual entre signos:

{{f:regla_signos_lenz}}

Estas relaciones dicen lo mismo desde niveles distintos. [[r_Phi]] contiene el signo del cambio de flujo, mientras [[epsilon_ind]] aparece con signo contrario si [[N]] es positivo. El signo no es un castigo algebraico: codifica la polaridad fisica de la fem inducida.

En calculos de modulo se puede tomar el valor absoluto al final, pero la interpretacion debe conservar el signo durante el razonamiento. Si se elimina el signo desde el principio, se pierde la informacion que Lenz aporta.

La parte formal exige mantener separadas dos preguntas. El modulo de [[epsilon_ind]] responde a la rapidez del cambio y al numero de espiras. El signo responde a si el flujo aumenta o disminuye respecto a la normal. Mezclar ambas preguntas suele producir respuestas numericas correctas con polaridad equivocada.

En una grafica de [[epsilon_ind]] frente a [[r_Phi]], Lenz aparece como una pendiente negativa. Esa pendiente no representa disipacion; representa que la respuesta inducida cambia de signo cuando cambia el signo de la variacion de flujo.

## 🔴 Nivel estructural

La estructura profunda de Lenz se basa en una realimentacion negativa. Un cambio de flujo crea una fem inducida; si el circuito permite corriente, esa corriente produce un campo magnetico asociado. La orientacion de ese campo se opone al cambio de flujo inicial.

Para aplicar la ley, primero se fija una superficie y una normal. Esa eleccion da signo a [[Phi_B]] y a [[DeltaPhi_B]]. Despues se decide si el flujo aumenta o disminuye. Solo entonces se asigna la polaridad inducida. Sin esa secuencia, frases como "se opone al campo" se vuelven ambiguas.

La ley de Lenz se conecta con la conservacion de la energia. Al acercar un iman a una espira cerrada, suele aparecer una fuerza que se opone al movimiento. Esa oposicion no destruye energia; transforma trabajo mecanico en energia electrica, calor o energia magnetica.

La respuesta depende del circuito. Si la espira esta abierta, puede existir fem inducida pero apenas corriente. Si esta cerrada y tiene baja resistencia, la corriente inducida puede ser apreciable y su campo puede ejercer fuerzas detectables. La regla de signo sigue siendo la misma, pero las consecuencias mecanicas cambian.

El modelo simple falla si no puede definirse una superficie, si el acoplamiento es distribuido y rapido, o si se mezclan varias fuentes de flujo sin separarlas. En esos casos, Lenz sigue orientando la causalidad, pero hay que usar un modelo de campo o circuito mas detallado.

Tambien importa distinguir polaridad inducida de sentido convencional de corriente. La polaridad se deduce con Lenz; la corriente real depende de si existe un camino cerrado y de la resistencia del circuito. Por eso dos montajes con la misma fem pueden producir efectos mecanicos muy distintos.

> [!TIP]
> Procedimiento seguro: fija normal, decide si [[Phi_B]] aumenta o disminuye, invierte el signo para la respuesta inducida y despues traduce ese signo a corriente o polaridad.

## Interpretación física profunda

Lenz expresa que la induccion electromagnetica es reactiva. El circuito no "elige" impedir todo campo magnetico; responde al cambio que altera su flujo enlazado. Por eso la misma configuracion puede producir sentidos opuestos al invertir el movimiento.

La palabra oponerse tampoco significa cancelar completamente. La respuesta inducida puede ser pequeña si la resistencia es alta o si el acoplamiento es debil. Lenz fija la direccion de la tendencia, no garantiza que el cambio desaparezca.

## Orden de magnitud

En una bobina de 100 espiras, un cambio de flujo de 0.001 Wb por espira en 0.01 s puede producir una fem de orden 10 V. En sensores pequeños, la respuesta puede estar en milivoltios; en generadores o bobinas de encendido, puede alcanzar cientos o miles de voltios.

Un resultado absurdo aparece si la polaridad inducida refuerza el cambio inicial, si [[epsilon_ind]] se predice sin [[DeltaPhi_B]], o si [[Deltat]] se usa en milisegundos sin convertir. La escala depende del modulo; el sentido depende del signo.

## Método de resolución personalizado

Primero dibuja la normal positiva y decide el signo de [[Phi_B]]. Segundo compara el estado inicial y final para encontrar si [[DeltaPhi_B]] aumenta o disminuye. Tercero aplica oposicion: la corriente o fem inducida debe producir un efecto contrario a ese cambio.

Despues calcula el modulo con [[Deltat]] y [[N]] si hace falta. Finalmente traduce el signo a una frase fisica: la espira intenta sostener el flujo, reducir su aumento o resistir el movimiento que lo cambia.

## Casos especiales y ejemplo extendido

Si el flujo es constante, Lenz no predice corriente inducida sostenida. Puede haber campo y flujo, pero no hay cambio que oponer. Esta distincion evita errores con imanes quietos junto a espiras fijas.

Si un iman se acerca a una espira cerrada, el flujo suele aumentar. La corriente inducida se orienta para crear un campo que se opone a ese aumento. Si el iman se aleja, el flujo disminuye y la corriente cambia de sentido para sostenerlo.

Como ejemplo extendido, una placa metalica que cae entre imanes experimenta corrientes inducidas. Esas corrientes generan efectos magneticos que se oponen al movimiento relativo. La energia potencial perdida termina como calor y no como aceleracion libre.

## Preguntas reales del alumno

**¿Lenz se opone siempre al campo magnetico?** No. Se opone al cambio de flujo enlazado. Si el campo esta presente pero no cambia, no hay fem inducida media.

**¿Por que el signo negativo importa?** Porque fija la polaridad fisica de [[epsilon_ind]]. Sin el signo solo queda un voltaje sin sentido inducido.

**¿La corriente inducida siempre cancela el cambio?** No. Tiende a oponerse, pero su intensidad depende de resistencia, acoplamiento y energia disponible.

**¿Que hago si no se el sentido de la normal?** Debes elegir una normal y mantenerla. Cambiar la normal cambia signos, pero no cambia la fisica si eres coherente.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [Flujo magnetico](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico) y [Ley de faraday](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/ley-de-faraday). Faraday da la relacion cuantitativa; Lenz da la lectura de polaridad.

Despues conviene estudiar [Autoinduccion](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/autoinduccion), [Inductancia mutua](leaf:fisica-clasica/electromagnetismo/induccion-electromagnetica/inductancia/inductancia-mutua), frenado magnetico, generadores y transformadores.

## Síntesis final

La ley de Lenz afirma que la induccion se orienta contra el cambio de flujo que la causa. [[epsilon_ind]] tiene sentido fisico solo si se conserva el signo de [[DeltaPhi_B]] o [[r_Phi]] y se interpreta la polaridad inducida.
`;export{e as default};
