# Modelos

## Modelo ideal

El modelo ideal trata el tubo como una columna de aire unidimensional, estrecha y con seccion aproximadamente constante. La onda sonora es longitudinal, y los extremos se sustituyen por condiciones de frontera: vientre de desplazamiento en un extremo abierto y nodo de desplazamiento en un extremo cerrado. Con esa simplificacion, [[L_eff]] y [[v]] bastan para calcular la escala de [[f_n]].

El modelo no pretende describir todos los detalles de un instrumento real. Aisla la seleccion modal. En un tubo abierto-abierto se usa [[n]] para una serie completa; en un tubo abierto-cerrado se usa [[m]] para generar factores impares. Esa diferencia es la identidad fisica del leaf.

## Hipótesis

- El aire del tubo es aproximadamente uniforme.
- La velocidad del sonido [[v]] se mantiene estable durante la medicion.
- El tubo es estrecho frente a [[lambda_n]].
- Los extremos abiertos se pueden aproximar como vientres de desplazamiento.
- El extremo cerrado, si existe, se comporta como nodo de desplazamiento.
- Las perdidas por viscosidad, radiacion y turbulencia son pequenas en primera lectura.

Estas hipotesis permiten representar la columna de aire con una longitud efectiva [[L_eff]]. Si la boca es ancha, si hay flujo fuerte o si el instrumento tiene geometria compleja, el modelo ideal solo da una orientacion inicial.

## Dominio de validez cuantitativo

Como criterio cuantitativo, el modelo simple es razonable cuando el radio del tubo es menor que una decima parte de [[lambda_n]] y cuando la correccion de extremo es pequena frente a [[L_eff]]. Rango operativo: tubos de 0.05 m a 3 m con frecuencias entre 20 Hz y 5 kHz suelen entrar en el orden de magnitud escolar si el aire esta cerca de condiciones ambientales.

Otro control util es comparar [[L_eff]] con la longitud de onda. En un tubo abierto-cerrado fundamental, la longitud efectiva debe ser del orden de un cuarto de onda. Si el calculo exige una longitud efectiva de milimetros para un tono grave, o decenas de metros para un silbato agudo, el modelo o las unidades estan mal planteados.

## Señales de fallo del modelo

Una senal de fallo aparece cuando las resonancias medidas no siguen la serie esperada. Si un tubo cerrado muestra con fuerza una frecuencia par de la serie abierta, tal vez no esta realmente cerrado, o el acoplamiento de la fuente esta excitando otro modo. Si un tubo abierto no muestra armonicos casi consecutivos, puede haber correccion de extremo grande o perdidas selectivas.

Tambien fallan las predicciones cuando el flujo de aire es intenso, cuando la temperatura cambia a lo largo del tubo, o cuando la campana modifica mucho la radiacion. En esos casos, [[f_n]] sigue siendo una magnitud observable, pero ya no se deduce con precision desde el modelo elemental.

## Modelo extendido o alternativo

Un modelo extendido incorpora correccion de extremo dependiente del radio, perdidas, impedancia acustica de la boca, campanas, agujeros laterales y acoplamiento con la fuente. En instrumentos de viento, estos detalles son esenciales para explicar afinacion fina y timbre.

Otra alternativa es un modelo experimental: se barre la frecuencia de excitacion y se registran picos de respuesta. Luego se compara la serie medida con la abierta o la cerrada. Esta transicion al modelo extendido conserva la idea de frontera acustica, pero reconoce que el tubo real no es una linea perfecta.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Geometria | Tubo estrecho y uniforme | Campanas, agujeros, radios variables |
| Extremos | Abiertos o cerrados ideales | Impedancia y correccion de extremo |
| Serie modal | Completa o impar | Frecuencias desplazadas y amortiguadas |
| Uso | Estimar [[lambda_n]] y [[f_n]] | Afinacion real, timbre y medicion precisa |

El modelo ideal es la primera lectura. El extendido se usa cuando el experimento muestra desviaciones observables y persistentes.
