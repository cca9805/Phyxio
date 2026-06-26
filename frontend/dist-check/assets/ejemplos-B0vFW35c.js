const e=`# Ejemplo tipo examen

## Enunciado

Una onda longitudinal incide perpendicularmente sobre una interfaz plana entre acero y aluminio. Se conocen la densidad y la velocidad longitudinal de ambos materiales. Se pide calcular los coeficientes de reflexion y transmision tanto en amplitud como en energia, y verificar la conservacion energetica.

Datos del problema:

- Densidad del acero: 7800 kg/m³
- Velocidad longitudinal en acero: 5900 m/s
- Densidad del aluminio: 2700 kg/m³
- Velocidad longitudinal en aluminio: 6350 m/s

## Datos

- Densidad del acero (medio 1): 7800 kg/m³
- Velocidad longitudinal en acero: 5900 m/s
- Densidad del aluminio (medio 2): 2700 kg/m³
- Velocidad longitudinal en aluminio: 6350 m/s

## Definicion del sistema

El sistema es una interfaz plana entre dos semiespacios infinitos: el medio 1 (acero) y el medio 2 (aluminio). Una onda plana longitudinal viaja en el acero y llega perpendicularmente a la frontera. Se suponen ambos medios homogeneos, isotropos, en regimen elastico lineal. La interfaz esta perfectamente unida (sin huecos ni capas intermedias). No se consideran ondas transversales porque la incidencia es normal.

## Modelo fisico

El modelo usa las condiciones de contorno de continuidad de desplazamiento y tension normal en la interfaz para una onda plana a incidencia normal. Las magnitudes nucleares son [[Z_1]], [[Z_2]], [[Z_medio]], [[R_amp]], [[T_amp]], [[R_E]] y [[T_E]]. La impedancia de cada medio se calcula con la formula del producto densidad-velocidad y los coeficientes se obtienen de las relaciones de Fresnel acusticas.

## Justificacion del modelo

El modelo de incidencia normal en interfaz plana es valido porque el enunciado especifica incidencia perpendicular y ambos medios son isotropos. En estas condiciones no hay conversion de modo (no se generan ondas S) y las ecuaciones se simplifican a las formulas escalares clasicas. El modelo deja de ser valido si la incidencia es oblicua (aparece conversion de modo y angulos criticos), si la interfaz es rugosa (dispersion difusa) o si los materiales son anisotropos.

## Resolucion simbolica

Primero se calculan las impedancias acusticas de cada medio:

{{f:impedancia_acustica}}

Se aplica la formula para ambos medios: [[Z_1]] es el producto de la densidad del acero por su velocidad, y [[Z_2]] es el producto de la densidad del aluminio por su velocidad. En forma general, cada resultado es una [[Z_medio]] asociada al material por el que viaja la onda.

A continuacion se calcula el coeficiente de reflexion en amplitud:

{{f:coeficiente_reflexion_amplitud}}

Y el coeficiente de transmision en amplitud:

{{f:coeficiente_transmision_amplitud}}

Los coeficientes energeticos se obtienen como:

{{f:coeficiente_reflexion_energia}}

{{f:coeficiente_transmision_energia}}

La verificacion final es comprobar que [[R_E]] mas [[T_E]] suma exactamente la unidad.

## Sustitucion numerica

Impedancia del acero: 7800 multiplicado por 5900 da 46.02 por diez a la sexta, es decir 46.02 MRayl. Por tanto [[Z_1]] ≈ 46.02 MRayl.

Impedancia del aluminio: 2700 multiplicado por 6350 da 17.15 por diez a la sexta, es decir 17.15 MRayl. Por tanto [[Z_2]] ≈ 17.15 MRayl.

Coeficiente de reflexion en amplitud: (17.15 menos 46.02) dividido entre (17.15 mas 46.02) da menos 28.87 dividido entre 63.17, que es aproximadamente menos 0.457. Por tanto [[R_amp]] ≈ −0.457.

Coeficiente de transmision en amplitud: dos veces 46.02 dividido entre 63.17 da 92.04 dividido entre 63.17, que es aproximadamente 1.457. Por tanto [[T_amp]] ≈ 1.457.

Coeficiente de reflexion en energia: el cuadrado de 0.457 da aproximadamente 0.209. Por tanto [[R_E]] ≈ 0.209.

Coeficiente de transmision en energia: 1 menos 0.209 da 0.791. Por tanto [[T_E]] ≈ 0.791.

Verificacion: 0.209 mas 0.791 da 1.000, confirmando la conservacion de energia.

## Validacion dimensional

- Impedancia acustica: \`[M L⁻³]\` por \`[L T⁻¹]\` da \`[M L⁻² T⁻¹]\` (Pa·s/m) ✓
- Coeficientes de reflexion y transmision: cocientes de impedancias (mismas unidades) dan adimensional \`[1]\` ✓
- Coeficientes energeticos: adimensional al cuadrado o producto/cociente de adimensionales, dan \`[1]\` ✓

## Interpretacion fisica

El signo negativo de [[R_amp]] indica que la onda reflejada invierte su fase: esto ocurre porque la onda pasa de un medio de alta impedancia (acero) a uno de baja impedancia (aluminio). Es el caso analogo a una cuerda que pasa de un tramo pesado a uno ligero: el extremo "libre" refleja con inversion.

La amplitud transmitida de 1.457 (mayor que 1) no viola la conservacion de energia. El aluminio tiene menor impedancia y por tanto la amplitud de la onda crece para transportar la misma potencia. La energia transmitida es solo el 79.1 % de la incidente, lo cual es fisicamente coherente.

El 20.9 % de energia reflejada significa que un transductor ultrasonico posicionado en el acero detectaria un eco significativo al encontrar la interfaz con aluminio. Este eco permite identificar la frontera entre materiales y es la base de la inspeccion por ultrasonidos.

# Ejemplo de aplicacion real

## Contexto

Un tecnico de ensayos no destructivos inspecciona una placa de acero de 20 mm de espesor con un transductor ultrasonico de contacto. Necesita estimar cuanta señal de eco recibira de un defecto interno tipo delaminacion (capa de aire atrapada en el interior del acero).

La impedancia del acero es aproximadamente 46 MRayl y la del aire es aproximadamente 0.000415 MRayl.

## Estimacion fisica

El coeficiente de reflexion en amplitud es la diferencia de impedancias dividida entre su suma. Dado que la impedancia del aire es despreciable frente a la del acero, el cociente se aproxima a menos uno: la reflexion es practicamente total con inversion de fase.

El coeficiente de reflexion en energia se aproxima a la unidad: mas del 99.99 % de la energia incidente se refleja en la interfaz acero-aire.

Esto significa que incluso un defecto tipo grieta o delaminacion muy fino produce un eco fuerte e inequivoco. La señal reflejada es practicamente igual en amplitud a la incidente. Por eso la tecnica de ultrasonidos por pulso-eco es tan sensible para detectar defectos tipo delaminacion.

## Interpretacion

La sensibilidad del metodo se basa en el contraste extremo de impedancias entre acero y aire. Cualquier discontinuidad que introduzca una capa de aire, por fina que sea, produce una reflexion casi total que el transductor detecta facilmente. En cambio, si el defecto estuviera relleno de otro metal con impedancia similar al acero (como una soldadura incompleta con material de aporte compatible), la reflexion seria mucho menor y la deteccion mas dificil. Este ejemplo ilustra por que la caracterizacion del tipo de defecto es importante en la inspeccion industrial.
`;export{e as default};
