# Aplicaciones

## 1. Generadores electricos de bobina giratoria

En un generador elemental, una bobina gira dentro de un campo magnetico aproximadamente uniforme. La fuente mecanica no crea directamente la electricidad; cambia la orientacion de la bobina y, con ello, cambia [[flujo_magnetico]] a lo largo del tiempo. La lectura de flujo permite separar el papel del iman, que aporta [[campo_magnetico_uniforme]], del papel de la rotacion, que modifica [[cos_theta]].

La hipotesis dominante es que el campo es casi uniforme sobre el area de la bobina y que todas las espiras comparten una orientacion comun. La interpretacion fisica es que la senal electrica aparece porque [[variacion_de_flujo_magnetico]] se repite periodicamente. Si la bobina gira mas rapido, el cambio de flujo ocurre en menos tiempo, aunque el valor maximo de flujo venga fijado por [[flujo_maximo]].

En el diseño real, aumentar [[area_de_la_superficie]] o aumentar el numero de espiras eleva el flujo enlazado, pero tambien cambia resistencia, masa e inercia. Por eso el flujo no se optimiza aislado: se equilibra con perdidas electricas, coste mecanico y estabilidad del giro.

Variable dominante: [[variacion_de_flujo_magnetico]] controla la variacion que alimenta la induccion electrica en cada medio giro.
Límite de validez: el modelo simple falla si el campo no es uniforme, si la bobina se deforma o si las espiras no comparten la misma orientacion.

## 2. Sensores de posicion con efecto inductivo

Muchos sensores industriales detectan posicion o proximidad midiendo cambios en el acoplamiento magnetico. Cuando una pieza metalica entra o sale de una zona de campo, modifica el flujo enlazado por una bobina. La informacion util no es solo que haya campo, sino que el flujo cambia de forma reproducible con la posicion.

La simplificacion es tratar el area de la bobina como fija y atribuir la variacion a cambios efectivos de [[campo_magnetico_uniforme]] o de [[componente_normal_del_campo]]. La interpretacion fisica permite calibrar el sensor: cerca de una posicion concreta, pequenos desplazamientos producen cambios medibles de [[flujo_magnetico]], que luego se convierten en senal electrica.

Esta aplicacion muestra por que conviene leer el flujo como magnitud de sistema. El sensor no mide simplemente el material ni el campo externo; mide como la presencia de la pieza modifica el acoplamiento entre campo y bobina.

Variable dominante: [[flujo_magnetico]] actua como magnitud intermedia entre posicion mecanica y respuesta electrica.
Límite de validez: la lectura deja de ser lineal si el material se satura, si aparecen campos externos o si la geometria de la pieza cambia respecto a la calibracion.

## 3. Blindaje magnetico y cancelacion de flujo

En equipos sensibles, como magnetometros o instrumentacion medica, se usan materiales y geometria para reducir el flujo que atraviesa una region protegida. El objetivo no siempre es anular [[campo_magnetico_uniforme]] en todo el espacio, sino reducir el flujo neto que cruza la superficie relevante del sensor.

El analisis de flujo ayuda a distinguir campo local y acoplamiento total. Dos regiones con campo en sentidos opuestos pueden cancelar parcialmente sus aportes a [[flujo_magnetico]]. Por eso un blindaje se evalua mediante la reduccion de flujo enlazado, no solo por una medida puntual de campo.

En un blindaje bien diseñado, la geometria guia el campo por caminos de menor reluctancia y reduce la componente normal sobre la zona protegida. La variable que interesa al instrumento es el flujo residual, porque ese flujo es el que puede contaminar la medida.

Variable dominante: [[flujo_magnetico]] cuantifica si el sensor queda realmente desacoplado del entorno magnetico.
Límite de validez: el modelo de cancelacion simple falla si el campo varia rapidamente en el espacio o si el material de blindaje entra en saturacion magnetica.

## 4. Bobinas de resonancia y captacion de señal

En antenas de lazo, pastillas de guitarra y bobinas de lectura, la orientacion de la bobina respecto al campo externo determina cuanta senal se capta. Girar la bobina cambia [[cos_theta]] y, por tanto, cambia el flujo que enlaza las espiras sin alterar necesariamente el campo externo.

La hipotesis de trabajo es que la bobina es suficientemente pequena para ver un campo casi uniforme. La interpretacion fisica permite entender por que una pastilla capta mejor ciertas componentes del campo y rechaza otras. El flujo maximo [[flujo_maximo]] marca la escala posible, mientras que el flujo real depende de la orientacion.

En audio, esta lectura se traduce en tono y nivel de salida. Una orientacion o geometria de bobina que reduce [[flujo_magnetico]] para ciertos modos de vibracion tambien reduce la senal correspondiente, actuando como filtro fisico antes de cualquier circuito electronico.

Variable dominante: [[cos_theta]] decide que fraccion del acoplamiento maximo entra realmente en la bobina.
Límite de validez: a frecuencias altas o con bobinas grandes, aparecen retardos, capacitancias parasitas y variaciones espaciales que exigen un modelo electromagnetico mas completo.

## 5. Ensayos de materiales magneticos

En laboratorios de materiales, una muestra se coloca dentro de una bobina para medir como altera el flujo magnetico. La muestra puede concentrar lineas de campo, cambiar [[componente_normal_del_campo]] efectivo y modificar la lectura de [[flujo_magnetico]]. Esa respuesta permite inferir propiedades magneticas sin observar directamente todos los dominios microscopicos.

La simplificacion es comparar el flujo con y sin muestra bajo la misma geometria. Si [[area_de_la_superficie]] y [[cos_theta]] se mantienen constantes, el cambio observado se atribuye principalmente al material. Esta aplicacion convierte el concepto de flujo en una herramienta de diagnostico experimental.

La comparacion exige repetir la medida con la misma orientacion y el mismo recorrido magnetico. Si se cambia la posicion de la muestra, una variacion de [[flujo_magnetico]] podria deberse a geometria y no a propiedades del material.

Variable dominante: [[variacion_de_flujo_magnetico]] mide cuanto cambia el acoplamiento al introducir o retirar la muestra.
Límite de validez: la interpretacion falla si la muestra no llena uniformemente la region, si hay histéresis fuerte o si la respuesta depende de la historia magnetica previa.