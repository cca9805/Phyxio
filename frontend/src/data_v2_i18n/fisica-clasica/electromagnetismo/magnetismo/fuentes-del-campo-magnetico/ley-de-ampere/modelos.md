## Modelo ideal

El modelo ideal es magnetostatico: las corrientes son constantes, la geometria no cambia y la curva amperiana puede elegirse con simetria clara. En ese marco, [[circulacion_magnetica]] depende solo de [[corriente_encerrada]], y no de corrientes exteriores a la superficie encerrada.

La simplificacion central consiste en transformar una integral cerrada en una lectura geometrica. Para un hilo largo, [[campo_magnetico]] es tangente y constante sobre una circunferencia de radio [[radio_amperiano]]. Para un solenoide largo, [[campo_de_solenoide_largo]] se aproxima uniforme en el interior.

## Hipótesis

- Corrientes estacionarias: si [[corriente_del_conductor]] cambia rapidamente, la version magnetostatica queda incompleta.
- Curva cerrada orientada: sin orientacion no se puede asignar signo a [[circulacion_magnetica]] ni a [[corriente_encerrada]].
- Simetria suficiente: si [[campo_magnetico]] no es constante, tangente o nulo por tramos, no puede sacarse de la integral.
- Medio lineal o vacio: si el material satura, [[mu0]] ya no describe la respuesta efectiva.
- Distancias lejos de bordes: cerca de extremos aparecen campos de fuga y simetria rota.

## Dominio de validez cuantitativo

El modelo de hilo largo es razonable cuando la longitud del conductor supera en al menos un orden de magnitud la distancia [[radio_amperiano]] usada. Como criterio operativo, la aproximacion es defendible si longitud del tramo recto > 20 veces el radio amperiano.

Para solenoides, el modelo interior funciona mejor cuando la longitud supera varias veces el diametro. Un error inferior al 5 % suele requerir mediciones cerca de la zona central y lejos de los extremos.

## Señales de fallo del modelo

Una señal clara de fallo aparece cuando medidas de [[campo_magnetico]] sobre la curva no son parecidas entre si. Si el campo varia mucho en puntos que el modelo trataba como equivalentes, la simetria elegida no existe.

Otra señal es una prediccion de [[campo_de_solenoide_largo]] que crece linealmente con [[corriente_del_conductor]] en los calculos, pero se curva en los datos reales. Eso apunta a saturacion del nucleo, calentamiento o cambios materiales.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: geometria finita, bobinas cortas, materiales magneticos no lineales o campos variables en el tiempo. En esos casos se usa Biot-Savart, simulacion numerica o la forma de Maxwell con corriente de desplazamiento.

La transicion al modelo extendido no niega Ampere; conserva su lectura global y añade la fisica que el modelo ideal habia ignorado.

## Comparación operativa

| Modelo | Ventaja | Límite |
|---|---|---|
| Ampere ideal | Muy rapido con simetria clara | No resuelve campos locales sin simetria |
| Biot-Savart | Sirve para geometria arbitraria de corriente | Requiere integrar contribuciones locales |
| Maxwell completo | Incluye campos variables y capacitores | Mayor complejidad conceptual y matematica |