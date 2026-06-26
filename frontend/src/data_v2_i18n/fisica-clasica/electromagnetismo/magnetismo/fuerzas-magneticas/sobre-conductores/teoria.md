## Contexto conceptual

Un conductor con corriente contiene muchas cargas moviles. Cuando ese conductor atraviesa un [[campo_magnetico]], cada carga recibe una desviacion magnetica y el efecto colectivo aparece como una fuerza mecanica sobre el cable. Este leaf traduce la fuerza sobre cargas individuales al lenguaje macroscópico de conductores.

La idea explica motores, altavoces, railes conductores y fuerzas entre bobinas. No se trata solo de calcular una fuerza: se trata de entender como una corriente electrica puede producir movimiento mecanico al interactuar con un campo.

> [!NOTE]
> El conductor no es empujado porque sea metalico, sino porque transporta [[intensidad_de_corriente]] dentro de un campo magnetico con orientacion adecuada.

## 🟢 Nivel esencial

La fuerza magnetica sobre un conductor aparece cuando hay **corriente** dentro de un campo magnetico. Si no circula corriente, las cargas no tienen movimiento organizado y el tramo no recibe una fuerza magnetica neta del modelo ideal. La magnitud central es [[fuerza_magnetica_sobre_el_conductor]], que mide el empuje total sobre el tramo dentro del campo.

El efecto depende de la corriente, de la longitud del tramo expuesto, de la intensidad del campo y de la orientacion. Si el conductor queda paralelo al campo, la fuerza desaparece; si queda perpendicular, el efecto es maximo.

La idea esencial es reconocer que el cable completo responde como un objeto mecanico visible.

> [!WARNING]
> No dibujes la fuerza a lo largo del cable. La direccion se obtiene con la regla de la mano derecha aplicada a [[intensidad_de_corriente]] y [[campo_magnetico]].

## 🔵 Nivel formal

Para un tramo recto de longitud efectiva [[longitud_efectiva]], con corriente convencional [[intensidad_de_corriente]] en un campo magnetico uniforme [[campo_magnetico]], el modulo de la fuerza se escribe:

{{f:fuerza_conductor_recto}}

La relacion muestra que [[fuerza_magnetica_sobre_el_conductor]] es proporcional a cada factor. Si se duplica [[intensidad_de_corriente]], la fuerza se duplica mientras [[longitud_efectiva]], [[campo_magnetico]] y [[s_theta]] no cambian. Si solo una parte del cable esta dentro del campo, esa parte determina [[longitud_efectiva]]; usar toda la longitud fisica del circuito seria un error de modelo.

La expresion tambien fija una lectura de control. [[intensidad_de_corriente]] es la variable electrica que se puede ajustar rapidamente, [[campo_magnetico]] suele venir dado por el iman o electroiman, [[longitud_efectiva]] depende del diseño geometrico y [[s_theta]] recoge la alineacion. Por eso el mismo conductor puede producir fuerzas muy distintas sin cambiar de material.

Cuando interesa comparar conductores de diferente longitud, conviene normalizar la fuerza por metro efectivo:

{{f:fuerza_por_unidad_longitud}}

La magnitud [[fuerza_magnetica_por_unidad_de_longitud]] separa la intensidad local de la geometria total. Dos conductores pueden tener la misma [[fuerza_magnetica_por_unidad_de_longitud]] y fuerzas totales distintas si sus longitudes expuestas no coinciden. Esta distincion es esencial en actuadores, motores y montajes de laboratorio.

En problemas de comparacion, [[fuerza_magnetica_por_unidad_de_longitud]] evita atribuir al campo una diferencia que en realidad procede de la longitud activa. En problemas de diseño, [[fuerza_magnetica_sobre_el_conductor]] es la magnitud final que debe soportar el soporte mecanico.

## 🔴 Nivel estructural

La estructura profunda es colectiva. La corriente [[intensidad_de_corriente]] representa muchas cargas moviles que atraviesan el conductor. Cada carga siente una desviacion magnetica, pero las cargas no abandonan libremente el metal: transmiten impulso a la red material. Por eso el conductor completo puede moverse, vibrar o ejercer una fuerza sobre un soporte.

La geometria controla el resultado. [[s_theta]] resume la componente perpendicular entre el conductor orientado por la corriente y [[campo_magnetico]]. Un conductor paralelo al campo puede transportar mucha corriente y aun asi no recibir fuerza magnetica lateral. Un conductor perpendicular en el mismo campo recibe la accion maxima.

La longitud efectiva [[longitud_efectiva]] es otro filtro estructural. No cuenta la longitud total del circuito, sino el tramo que esta inmerso en el campo con orientacion relevante. En un motor real, las partes opuestas de una espira pueden recibir fuerzas en sentidos distintos; el efecto util aparece como par o giro, no como simple traslado.

El modelo falla si el campo cambia mucho sobre el conductor, si la corriente no es uniforme, si hay calentamiento que deforma la pieza o si la fuerza mecanica cambia la geometria durante la medicion. En esos casos hay que pasar de una formula de tramo recto a una suma por segmentos.

La fuerza por unidad de longitud permite ver la estructura local antes de integrar todo el circuito. Si [[fuerza_magnetica_por_unidad_de_longitud]] es grande pero [[longitud_efectiva]] es pequeño, el efecto total puede ser moderado. Si [[fuerza_magnetica_por_unidad_de_longitud]] es modesto pero se reparte sobre muchos tramos activos, la maquina puede producir una fuerza total considerable.

Tambien hay una lectura energetica implicita. El campo magnetico guia la direccion de la fuerza, pero la energia mecanica entregada en un motor procede de la fuente que mantiene la corriente. Separar causa geometrica y suministro energetico evita interpretar [[campo_magnetico]] como una bateria mecanica.

> [!TIP]
> Piensa siempre en tres capas: corriente organizada, campo externo y tramo efectivo. La fuerza aparece donde esas tres capas coinciden.

## Interpretación física profunda

La fuerza sobre conductores es el puente entre electricidad y mecanica. La corriente no solo transporta energia electrica; tambien puede interactuar con el campo para producir un empuje medible. Esa es la base conceptual de los motores electricos.

La direccion es tan importante como el modulo. Invertir [[intensidad_de_corriente]] invierte la fuerza, invertir [[campo_magnetico]] tambien la invierte, e invertir ambos conserva el mismo sentido. Esta simetria permite controlar movimiento con conmutadores y bobinas.

## Orden de magnitud

Un conductor de 0.20 m con 5 A en un campo de 0.10 T puede recibir una fuerza de decimas de newton si esta perpendicular al campo. En cambio, con campos ambientales de microteslas la fuerza cae varios ordenes de magnitud. Si un cable pequeno en un iman debil produce newtons completos, el resultado exige revisar unidades, longitud efectiva u orientacion.

## Método de resolución personalizado

Primero identifica el tramo que esta realmente dentro del campo. Despues fija el sentido convencional de [[intensidad_de_corriente]] y la direccion de [[campo_magnetico]]. Para el modulo usa [[intensidad_de_corriente]], [[longitud_efectiva]], [[campo_magnetico]] y [[s_theta]]. Para el sentido, aplica la mano derecha; si solo se pide comparacion entre cables, usa [[fuerza_magnetica_por_unidad_de_longitud]].

## Casos especiales y ejemplo extendido

Si el conductor es paralelo al campo, [[s_theta]] se anula y no hay fuerza aunque la corriente sea grande. Si el conductor es perpendicular, la fuerza es maxima y suele observarse como desplazamiento lateral o tension sobre un soporte.

En una espira rectangular, dos lados pueden sentir fuerzas opuestas. Si esas fuerzas actuan en lineas distintas, generan giro. Por eso la fuerza sobre conductores no solo explica traslacion, sino tambien el par motor.

## Preguntas reales del alumno

- **¿Por que el cable se mueve si las cargas estan dentro del metal?** Porque las cargas transmiten impulso a la red del conductor y el efecto se vuelve mecanico.
- **¿Cuenta toda la longitud del cable?** No. Cuenta [[longitud_efectiva]], la parte efectiva dentro del campo y con orientacion relevante.
- **¿La fuerza va en el sentido de la corriente?** No. Se obtiene con la orientacion conjunta de [[intensidad_de_corriente]] y [[campo_magnetico]].
- **¿Por que aparece fuerza por unidad de longitud?** Porque [[fuerza_magnetica_por_unidad_de_longitud]] permite comparar tramos distintos sin mezclar longitud total.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [sobre cargas en movimiento](leaf:fisica-clasica/electromagnetismo/magnetismo/fuerzas-magneticas/sobre-cargas-en-movimiento), porque un conductor es un conjunto de cargas moviles. Tambien conecta con motores, generadores y fuerzas entre corrientes.

La ruta natural es pasar de un conductor recto a una espira y despues a un motor. En cada paso se conserva la misma idea local, pero la geometria convierte fuerzas laterales en movimiento rotatorio.

## Síntesis final

La fuerza magnetica sobre conductores muestra como una corriente dentro de un campo puede producir accion mecanica. Su lectura exige distinguir corriente, longitud efectiva, campo, orientacion y fuerza por unidad de longitud.