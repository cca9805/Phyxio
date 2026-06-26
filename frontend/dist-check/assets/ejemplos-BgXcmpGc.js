const e=`# Ejemplo tipo examen

## Enunciado

Una radiacion visible tiene longitud de onda de vacio de 600 nm, equivalente a 6.00×10⁻⁷ m. Entra perpendicularmente en un vidrio transparente cuyo indice efectivo para esa frecuencia es 1.50. Se quiere estimar la velocidad de fase dentro del vidrio y la longitud de onda real en el material.

Ademas, el laboratorio indica que en esa region espectral el material puede tratarse con [[mu_r]] cercana a uno y una permitividad relativa efectiva compatible con el indice observado. El objetivo es interpretar que cambia al entrar en el medio y que permanece fijado por la fuente.

## Datos

- Longitud de onda de vacio: 600 nm, equivalente a 6.00×10⁻⁷ m.
- Indice efectivo del vidrio: 1.50.
- Velocidad de referencia en vacio: 2.998×10⁸ m/s.
- Permeabilidad relativa efectiva: cercana a 1.
- Medio: vidrio transparente, modelo lineal y con perdidas despreciables.

## Definición del sistema

El sistema es una onda electromagnetica monocromatica que pasa de vacio a vidrio. Las magnitudes de referencia son [[c]] y [[lambda0]]. Las magnitudes que describen el material son [[n]], [[epsilon_r]] y [[mu_r]]. Las magnitudes que se quieren leer dentro del vidrio son [[v_m]] y [[lambda_m]].

La fuente fija la frecuencia, aunque no se calcule explicitamente en este ejemplo. Por eso el cambio de medio no se interpreta como cambio de color, sino como cambio de velocidad de fase y de escala espacial dentro del material.

## Modelo físico

Se usa el modelo de propagacion en medio lineal, homogeneo e isotropo. En este modelo [[n]] resume la respuesta electromagnetica efectiva y permite calcular [[v_m]] a partir de [[c]]. Tambien permite convertir [[lambda0]] en [[lambda_m]].

El modelo incluye una lectura material: si [[mu_r]] es cercana a uno, el indice observado se atribuye principalmente a la respuesta electrica [[epsilon_r]]. Aun asi, ambas magnitudes pertenecen al modelo porque el indice efectivo no es un numero sin causa fisica.

## Justificación del modelo

La aproximacion es razonable porque se trata de una radiacion visible monocromatica en un vidrio transparente, sin absorcion dominante ni anisotropia declarada. En esas condiciones, un indice efectivo describe bien la velocidad de fase y el acortamiento de la longitud de onda.

El modelo dejaria de valer si la radiacion fuera un pulso ultracorto, si el vidrio tuviera dispersion fuerte en el intervalo usado, si hubiera absorcion apreciable o si la pregunta pidiera transporte de informacion. En esos casos habria que pasar a velocidad de grupo, indice dependiente de frecuencia o indice complejo.

## Resolución simbólica

Para la velocidad de fase dentro del medio se usa la relacion entre [[c]], [[n]] y [[v_m]]:

{{f:velocidad_en_medio}}

Para interpretar de donde procede el indice efectivo se usa la respuesta material:

{{f:indice_medio_em}}

Para la longitud de onda dentro del vidrio se relacionan [[lambda0]], [[n]] y [[lambda_m]]:

{{f:longitud_onda_en_medio}}

El orden fisico esperado es claro antes de sustituir: con un indice mayor que uno, [[v_m]] debe ser menor que [[c]] y [[lambda_m]] debe ser menor que [[lambda0]].

## Sustitución numérica

Para la velocidad, dividir 2.998×10⁸ m/s entre 1.50 da aproximadamente 2.00×10⁸ m/s. Por tanto [[v_m]] ≈ 2.00×10⁸ m/s.

Para la longitud de onda en el vidrio, dividir 6.00×10⁻⁷ m entre 1.50 da aproximadamente 4.00×10⁻⁷ m. Por tanto [[lambda_m]] ≈ 4.00×10⁻⁷ m, equivalente a 400 nm dentro del medio.

Si [[mu_r]] se toma cercana a uno, el indice 1.50 corresponde a una permitividad relativa efectiva de orden 2.25. Por tanto [[epsilon_r]] es mayor que uno, coherente con una respuesta electrica que retrasa la propagacion.

## Validación dimensional

En la velocidad en medio, una rapidez dividida por un numero adimensional conserva dimension \`[L T⁻¹]\`, que corresponde a [[v_m]].

En la longitud de onda en medio, una longitud dividida por un numero adimensional conserva dimension \`[L]\`, que corresponde a [[lambda_m]].

En la lectura material, [[epsilon_r]], [[mu_r]] y [[n]] son adimensionales. La operacion combina respuestas relativas del medio y produce otro numero sin unidad.

## Interpretación física

El resultado muestra que la onda no deja de ser la misma radiacion visible al entrar en vidrio. Lo que cambia es la forma en que su fase avanza en el material. La velocidad de fase baja a unas dos terceras partes de la referencia de vacio, y por eso los frentes de onda quedan mas juntos dentro del vidrio.

Si el indice fuera mayor, la velocidad de fase y la longitud de onda material disminuirian mas. Si el indice se acercara a uno, el resultado se aproximaria al comportamiento en aire o vacio. Esta dependencia explica por que lentes, prismas y fibras usan materiales con indices controlados.

No se debe interpretar la longitud de onda de 400 nm dentro del vidrio como un cambio automatico de color. El color esta ligado a la frecuencia en la fuente y al detector. La longitud de onda material importa para fase, interferencia, caminos opticos y diseño de dispositivos, no para decir que la fuente cambio de identidad.

# Ejemplo de aplicación real

## Contexto

Una fibra optica usa un nucleo con indice ligeramente mayor que el revestimiento para guiar luz infrarroja de telecomunicaciones. Aunque la diferencia de indices sea pequeña, modifica la velocidad de fase y la longitud de onda dentro del nucleo. Esas modificaciones son relevantes para fase acumulada, retardo y sincronizacion de señales.

El ingeniero no puede usar directamente la longitud de onda de vacio como escala interna de la fibra. Debe convertirla mediante el indice del material y recordar que los pulsos reales pueden requerir un modelo mas completo si la dispersion es importante.

## Estimación física

Para una longitud de onda de vacio de 1550 nm y un indice de nucleo cercano a 1.45, la longitud de onda dentro del nucleo es del orden de 1070 nm. La velocidad de fase queda del orden de 2.1×10⁸ m/s, claramente menor que [[c]] pero aun enorme en escala humana.

La lectura cuantitativa muestra dos cosas: la fibra no cambia la frecuencia de la fuente, pero si cambia la escala espacial con la que se acumula fase. En un kilometro de fibra, pequeños cambios de indice pueden acumular retrasos medibles.

## Interpretación

La propagacion en medios explica por que las fibras opticas necesitan controlar materiales con precision. No basta con que el material sea transparente: su indice decide guiado, velocidad de fase y longitud de onda interna. Si ademas el indice depende de la frecuencia, distintos componentes del pulso pueden separarse temporalmente.

El modelo simple del leaf da la primera estimacion. Para diseñar un enlace real se añade dispersion, perdidas, modos guiados y velocidad de grupo. Aun asi, la idea base sigue siendo la misma: el medio no cambia la identidad temporal de la fuente, pero si cambia como la onda ocupa el espacio y avanza en el material.
`;export{e as default};
