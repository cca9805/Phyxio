# Aplicaciones

## 1. Generadores eléctricos

Un generador convierte movimiento mecanico en fem inducida. Al girar una bobina dentro de un campo magnetico, cambia el flujo enlazado aunque el campo sea casi constante. La ley de Faraday explica por que una rotacion sostenida produce tension alterna.

La hipotesis dominante es que la bobina enlaza cambios de flujo repetibles y que [[numero_de_espiras]] multiplica de forma efectiva. Si el campo no es uniforme o las espiras no son equivalentes, el modelo simple solo da una estimacion.

En diseño, aumentar velocidad de giro, numero de espiras o flujo por espira aumenta la fem disponible. Pero tambien crecen perdidas, calentamiento y exigencias mecanicas. La decision no es solo elevar [[epsilon_ind]], sino hacerlo de forma estable.

La lectura practica separa causa y consecuencia. La causa es el cambio de flujo enlazado por la rotacion; la consecuencia es una tension util que despues dependera de carga, resistencia interna y regulacion. Faraday fija la escala inicial antes de esos detalles.

Variable dominante: rapidez de cambio de flujo [[rapidez_media_de_cambio_de_flujo]] producida por el giro.
Límite de validez: deja de valer si saturacion, perdidas o geometria compleja dominan la forma de onda.

## 2. Transformadores

En un transformador, el primario crea un flujo variable en el nucleo y ese flujo enlaza la bobina secundaria. La ley de Faraday conecta el cambio de flujo con la fem inducida en cada devanado.

La simplificacion dominante es que casi todas las espiras enlazan el mismo flujo y que el nucleo canaliza el campo. Si hay fugas importantes, el flujo que llega al secundario es menor que el esperado.

La aplicacion muestra por que [[numero_de_espiras]] importa. Mas espiras secundarias aumentan la fem inducida si el flujo por espira es comparable. Sin embargo, aislamiento, resistencia y perdidas limitan el aumento util.

Tambien explica por que la frecuencia importa. A igual variacion maxima de flujo, un cambio mas rapido produce mayor fem media o instantanea. Por eso un transformador diseñado para una frecuencia no se usa libremente en otra sin revisar saturacion y calentamiento.

Variable dominante: numero de espiras [[numero_de_espiras]] enlazadas por el flujo variable.
Límite de validez: deja de valer si el nucleo satura o si las fugas magneticas son dominantes.

## 3. Frenado electromagnético

En frenos magneticos, una pieza conductora se mueve dentro de un campo. El movimiento cambia el flujo enlazado por trayectorias conductoras internas y aparecen corrientes inducidas que se oponen al movimiento.

La hipotesis dominante es que el material conductor permite corrientes inducidas y que la geometria mantiene una relacion estable entre velocidad y cambio de flujo. Si el calentamiento cambia la resistencia, la fuerza de frenado puede variar.

La ley de Faraday da la causa inicial: cambio de flujo. La ley de Lenz explica por que la respuesta se opone al movimiento que produce ese cambio. Por eso el frenado aumenta con velocidad y desaparece al detenerse.

La aplicacion es util porque muestra una fem sin fuente quimica ni bateria. La energia electrica inducida procede del trabajo mecanico que intenta mantener el movimiento frente a la oposicion electromagnetica.

Variable dominante: cambio de flujo causado por el movimiento relativo.
Límite de validez: deja de valer si temperatura, campos no uniformes extremos o saturacion modifican la respuesta.

## 4. Sensores inductivos

Un sensor inductivo detecta movimiento, posicion o presencia de metal mediante cambios de flujo enlazado. La señal electrica aparece porque [[flujo_magnetico]] cambia cuando cambia el entorno magnetico de la bobina.

La simplificacion dominante es que el cambio medido procede del objeto detectado. En aplicaciones reales, temperatura, vibracion, campos externos y parasitos tambien pueden modificar la señal.

El diseño busca que el cambio util de flujo sea mayor que el ruido. Para ello se ajustan [[area_enlazada]], numero de espiras, nucleo y electronica de lectura. La ley de Faraday ofrece la escala inicial de la señal.

El sensor no mide "metal" de forma directa. Mide una modificacion del flujo enlazado que se transforma en señal electrica. Esta distincion ayuda a entender falsos positivos por campos externos o por vibraciones del montaje.

Variable dominante: cambio detectable de flujo [[cambio_de_flujo_magnetico]] producido por el objeto.
Límite de validez: deja de valer si acoplamientos parasitos o ruido electronico ocultan el cambio magnetico.

## 5. Micrófonos y captadores dinámicos

En un microfono dinamico o captador de guitarra, una bobina se mueve respecto a un iman. Ese movimiento cambia el flujo enlazado y aparece una fem que reproduce la vibracion mecanica.

La hipotesis dominante es que el desplazamiento produce cambios pequeños y lineales de flujo. Si la bobina se sale del tramo lineal o hay resonancias mecanicas fuertes, la señal se distorsiona.

Esta aplicacion muestra una lectura fina: no se busca una fem maxima, sino una fem proporcional al movimiento. La calidad depende de mantener estable la relacion entre movimiento, [[cambio_de_flujo_magnetico]] y [[epsilon_ind]].

El criterio de diseño es linealidad. Una señal musical o acustica util debe conservar forma temporal, no solo amplitud. Si el flujo cambia de manera no proporcional al movimiento, la fem inducida contiene distorsion.

Variable dominante: rapidez de cambio de flujo asociada a la vibracion.
Límite de validez: deja de valer si no linealidad mecanica o saturacion magnetica domina la señal.