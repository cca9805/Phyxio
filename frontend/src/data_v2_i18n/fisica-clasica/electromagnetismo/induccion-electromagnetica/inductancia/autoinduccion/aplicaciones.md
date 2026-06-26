# Aplicaciones

## 1. Proteccion de reles y solenoides

Cuando se desconecta un rele, la bobina intenta sostener la corriente que estaba circulando. La [[fem_autoinducida]] puede elevar la tension en los terminales y dañar el transistor de control. Por eso se añaden diodos, resistencias, varistores o redes de absorcion.

La hipotesis dominante es que la bobina trabaja en regimen lineal durante la descarga. Si el nucleo satura o el interruptor abre en tiempos extremadamente cortos, parasitos y arcos pueden dominar la respuesta.

La decision de proteccion no es unica. Un diodo reduce mucho la tension, pero alarga el tiempo durante el cual la corriente sigue circulando. Una resistencia o un zener permiten apagar antes, a costa de aceptar mayor tension. La lectura de [[energia_magnetica_almacenada]] indica cuanta energia debe disiparse y la lectura de [[fem_autoinducida]] indica que tension puede exigir el transitorio.

En laboratorio, este caso sirve para distinguir una bobina desconectada de una resistencia desconectada. En la resistencia, la tension cae con la corriente; en la bobina, la tension aparece precisamente para impedir que la corriente desaparezca de golpe. Esa lectura evita interpretar el pico como una fuente externa misteriosa.

Variable dominante: fem autoinducida producida por [[cambio_de_corriente]] durante [[intervalo_de_tiempo]].
Límite de validez: deja de valer si las capacitancias parasitas o el arco electrico dominan la descarga.

## 2. Filtros inductivos en fuentes de alimentacion

Un inductor de filtro suaviza cambios de corriente en una fuente conmutada. Su [[inductancia_propia]] permite almacenar energia y entregarla entre pulsos, reduciendo rizado. La autoinduccion es el mecanismo que evita que la corriente cambie bruscamente.

La simplificacion dominante es tratar [[inductancia_propia]] como constante en el rango de corriente. En potencia real, el nucleo puede saturarse y perder capacidad de filtrado justo cuando mas corriente circula.

En el diseño se compara rizado permitido, frecuencia de conmutacion y corriente maxima. Una inductancia mayor suaviza mejor, pero suele aumentar tamaño, resistencia del bobinado y coste. Si la corriente de pico reduce [[inductancia_propia]], el filtro puede fallar aunque el valor nominal parezca suficiente en la ficha tecnica.

La magnitud no se elige solo por comodidad algebraica. Tambien fija el tamaño del componente, el calentamiento por cobre y la respuesta ante cambios de carga. Por eso la autoinduccion conecta directamente la ecuacion elemental con decisiones de diseño medibles.

Variable dominante: inductancia efectiva en el rango de corriente de trabajo.
Límite de validez: deja de valer si el nucleo satura o si la frecuencia activa perdidas y parasitos importantes.

## 3. Encendido de motores y bobinas de potencia

Al conectar un motor o electroiman, la corriente no alcanza instantaneamente su valor final. La autoinduccion retrasa el crecimiento porque [[fem_autoinducida]] se opone al aumento de [[corriente_de_la_bobina]]. Esto limita picos iniciales, aunque la resistencia tambien participa.

La interpretacion correcta separa arranque inductivo de regimen estacionario. Una vez establecida la corriente, la fem autoinducida ideal desaparece, pero [[energia_magnetica_almacenada]] sigue almacenada en el campo magnetico.

En motores reales interviene ademas la fem de movimiento, pero al inicio la autoinduccion del devanado condiciona la pendiente de corriente. Esta pendiente afecta a protecciones, contactores y controladores. Un arranque demasiado brusco puede producir esfuerzos termicos y mecanicos aunque el valor final de corriente sea aceptable.

La observacion temporal es importante: no basta con medir corriente final. Dos bobinas con la misma corriente estable pueden forzar protecciones distintas si tienen inductancias distintas, porque el camino hasta el regimen permanente no es el mismo.

Variable dominante: rapidez de aumento de corriente al conectar el dispositivo.
Límite de validez: deja de valer si la resistencia, el movimiento mecanico o la saturacion del nucleo controlan el arranque.

## 4. Bobinas de ignicion

Una bobina de ignicion usa autoinduccion para generar tensiones altas al interrumpir rapidamente la corriente primaria. La energia acumulada en [[energia_magnetica_almacenada]] se transfiere hacia un pulso de alta tension capaz de producir chispa.

El diseño busca una descarga rapida y controlada. Una [[inductancia_propia]] grande aumenta energia disponible, pero tambien puede ralentizar la carga o exigir interruptores mas robustos.

La clave practica es controlar el instante de interrupcion. Si se corta demasiado pronto, [[corriente_de_la_bobina]] no ha crecido lo suficiente y [[energia_magnetica_almacenada]] es pequeña. Si se espera demasiado, se desperdicia energia en calentamiento. Por eso el control electronico de ignicion ajusta tiempo de carga, corriente limite y aislamiento.

El mismo principio aparece en cualquier circuito que deba producir un pulso breve desde energia magnetica acumulada. La autoinduccion no crea energia: reorganiza la energia almacenada y puede concentrarla en una tension grande si la interrupcion es suficientemente rapida.

Variable dominante: energia magnetica almacenada antes de la interrupcion.
Límite de validez: deja de valer si el acoplamiento, la capacitancia o la ruptura del aislante dominan el pulso.

## 5. Limitacion de corriente en electronica de potencia

En convertidores, inductores y reactancias limitan la pendiente de corriente. Esto protege semiconductores y estabiliza transferencia de energia. La autoinduccion convierte cambios bruscos de mando en cambios de corriente mas suaves.

La hipotesis dominante es que la bobina conserva [[inductancia_propia]] en todo el ciclo. Si el nucleo entra en saturacion, la corriente puede crecer rapidamente y destruir el dispositivo de conmutacion.

La aplicacion no se limita a "poner una bobina grande". Un valor excesivo puede volver lento el control, aumentar perdidas y empeorar respuesta ante cambios de carga. El valor adecuado de [[inductancia_propia]] se elige para limitar [[cambio_de_corriente]] en el [[intervalo_de_tiempo]] de conmutacion, manteniendo margen termico y magnetico.

La lectura fisica permite diagnosticar fallos. Si una corriente sube mas deprisa de lo previsto, la causa puede ser saturacion, temperatura alta o una inductancia real menor que la especificada. En todos los casos, el problema visible es una oposicion insuficiente al cambio de corriente.

Variable dominante: inductancia minima garantizada bajo corriente maxima.
Límite de validez: deja de valer si la temperatura o la saturacion reducen la inductancia por debajo del margen de diseño.