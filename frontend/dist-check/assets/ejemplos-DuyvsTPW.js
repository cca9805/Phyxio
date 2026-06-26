const e=`# Ejemplo tipo examen

## Enunciado

Una bomba de laboratorio contiene nitrógeno molecular a una temperatura de 27 °C y una presión de 101 325 Pa. Determina la velocidad cuadrática media de las moléculas de nitrógeno, la energía cinética media por molécula, y la presión que ejercería ese mismo gas si se comprimiera hasta la mitad del volumen original a la misma temperatura.

## Datos

- Gas: nitrógeno molecular (N₂)
- Masa molar del nitrógeno: 28.0 g por mol
- Temperatura: 27 °C (a convertir a kelvin)
- Presión inicial: 101 325 Pa
- Constante de Boltzmann: 1.381 × 10⁻²³ J/K
- Número de Avogadro: 6.022 × 10²³ moléculas por mol
- Volumen final: la mitad del volumen inicial

## Definición del sistema

El sistema es el gas de nitrógeno encerrado en el recipiente. Se trata de un sistema cerrado (el número de moléculas [[N]] permanece constante) con paredes rígidas inicialmente, luego deformables para la segunda parte del problema. Se asume que el gas satisface las hipótesis del modelo cinético ideal: moléculas puntuales sin interacciones intermoleculares y distribución de velocidades isotrópica.

## Modelo físico

El modelo aplicado es el **modelo cinético del gas ideal**, cuyas magnitudes centrales son [[v_rms]], [[T]], [[m_mol]], [[E_k_mol]], [[P]] y [[V]]. Las tres fórmulas del leaf son aplicables: la velocidad cuadrática media depende de [[T]] y [[m_mol]]; la energía cinética media depende solo de [[T]]; y la presión cinética conecta [[N]], [[m_mol]], [[v_rms]] y [[V]].

## Justificación del modelo

El nitrógeno a presión atmosférica y temperatura ambiente se comporta como gas ideal con desviaciones inferiores al 0.1 %. La temperatura de 300 K está muy por encima de la temperatura crítica del nitrógeno (126 K), lo que garantiza que el gas está en fase gaseosa y lejos de la condensación. Las hipótesis del modelo cinético ideal son plenamente válidas en estas condiciones.

El modelo dejaría de ser válido si se elevara la presión por encima de varios MPa o si la temperatura descendiera hacia los 130 K, donde las interacciones intermoleculares del nitrógeno se vuelven significativas.

## Resolución simbólica

**Paso 1 — Velocidad cuadrática media.**

Primero se convierte la temperatura a kelvin: 27 °C más 273.15 da 300.15 K, que se aproxima a 300 K.

La masa de una molécula de nitrógeno se obtiene dividiendo la masa molar entre el número de Avogadro. La masa molar es 28.0 g/mol, es decir, 0.0280 kg/mol. Dividiéndola entre 6.022 × 10²³ se obtiene [[m_mol]] de aproximadamente 4.65 × 10⁻²⁶ kg por molécula.

Aplicando la fórmula de la velocidad cuadrática media:

{{f:velocidad_cuadratica_media}}

**Paso 2 — Energía cinética media por molécula.**

Con la temperatura ya en kelvin y la constante de Boltzmann [[k_B]], se aplica directamente:

{{f:energia_cinetica_media}}

**Paso 3 — Presión tras comprimir a la mitad del volumen.**

A temperatura constante (proceso isotérmico), [[v_rms]] no varía. La presión cinética del gas es:

{{f:presion_cinetica}}

Al reducir [[V]] a la mitad manteniendo [[N]], [[m_mol]] y [[v_rms]] constantes, el factor [[N]] dividido por [[V]] se duplica, por lo que [[P]] también se duplica.

## Sustitución numérica

**Cálculo de [[v_rms]].**

Multiplicar tres veces [[k_B]] (1.381 × 10⁻²³ J/K) por [[T]] (300 K) da aproximadamente 1.243 × 10⁻²⁰ J. Dividir ese valor entre [[m_mol]] (4.65 × 10⁻²⁶ kg) da aproximadamente 2.674 × 10⁵ m²/s². La raíz cuadrada de ese resultado es aproximadamente 517 m/s. Por tanto, [[v_rms]] ≈ 517 m/s.

**Cálculo de [[E_k_mol]].**

Multiplicar tres medios por [[k_B]] (1.381 × 10⁻²³ J/K) por [[T]] (300 K). Tres medios multiplicado por 1.381 × 10⁻²³ da aproximadamente 2.072 × 10⁻²³ J/K. Multiplicando por 300 K resulta aproximadamente 6.21 × 10⁻²¹ J. Por tanto, [[E_k_mol]] ≈ 6.21 × 10⁻²¹ J por molécula.

**Cálculo de [[P]] tras comprimir.**

La presión inicial es 101 325 Pa. Al reducir el volumen a la mitad a temperatura constante, la densidad molecular se duplica. Por tanto, [[P]] final ≈ 202 650 Pa, es decir, aproximadamente el doble de la presión atmosférica estándar.

## Validación dimensional

**Velocidad cuadrática media:** la dimensión del argumento de la raíz es \`[M L² T⁻² Theta⁻¹]·[Theta]·[M]⁻¹\`, que se simplifica a \`[L² T⁻²]\`. La raíz cuadrada da \`[L T⁻¹]\`, que es la dimensión de una velocidad. ✓

**Energía cinética media:** la dimensión de [[k_B]] multiplicada por [[T]] es \`[M L² T⁻² Theta⁻¹]·[Theta]\`, que da \`[M L² T⁻²]\`, es decir, joules. ✓

**Presión cinética:** la dimensión de [[N]] (adimensional) multiplicada por [[m_mol]] \`[M]\`, multiplicada por [[v_rms]] al cuadrado \`[L² T⁻²]\`, dividida por [[V]] \`[L³]\`, da \`[M L⁻¹ T⁻²]\`, que es la dimensión del pascal. ✓

## Interpretación física

El resultado [[v_rms]] de aproximadamente 517 m/s para el nitrógeno a temperatura ambiente es mayor que la velocidad del sonido en el aire (340 m/s), lo cual no es coincidencia: el sonido se propaga gracias al movimiento molecular y su velocidad de fase está relacionada con [[v_rms]], aunque no son la misma magnitud. Este orden de magnitud confirma que el resultado es físicamente razonable.

La energía cinética media [[E_k_mol]] de 6.21 × 10⁻²¹ J por molécula parece diminuta, pero debe compararse con la escala molecular. La energía de un enlace covalente típico es del orden de 10⁻¹⁹ J, unas quince veces mayor. Esto explica por qué las colisiones moleculares a temperatura ambiente no rompen enlaces: las moléculas del gas chocan con energía suficiente para rebotar elásticamente, pero no para romper la estructura interna de la molécula de nitrógeno.

Si la temperatura aumentara en un factor de 225 (hasta unos 67 500 K), [[E_k_mol]] llegaría al orden de magnitud de energía de enlace covalente y empezarían a producirse disociaciones moleculares. Eso es precisamente lo que ocurre en las capas altas de la ionosfera, donde la radiación ultravioleta calienta el gas a temperaturas equivalentes suficientes para disociar el nitrógeno molecular.

La compresión isotérmica que dobla la presión ilustra con claridad que [[v_rms]] es una magnitud de temperatura, no de densidad: las moléculas no se han acelerado, solo se han apiñado en un espacio menor, aumentando la frecuencia de colisiones con las paredes. Este es el fundamento microscópico de la ley de Boyle.

---

# Ejemplo de aplicación real

## Contexto

Los neumáticos de un avión comercial deben soportar presiones de hasta 1.4 MPa durante el aterrizaje. En tierra, antes del vuelo, los técnicos comprueban la presión del nitrógeno con el que se inflaron (los neumáticos de avión se inflan con nitrógeno puro en lugar de aire para evitar problemas de humedad y oxidación). Durante el vuelo, la temperatura del gas en el neumático puede variar entre −50 °C en altitud (cuando el tren está expuesto al frío exterior) y 200 °C inmediatamente después del aterrizaje por el calor de la fricción. Se pide estimar cuánto varía la presión del neumático entre esas dos condiciones extremas.

## Estimación física

La temperatura del nitrógeno pasa de −50 °C (equivalente a 223 K) a 200 °C (equivalente a 473 K). Se asume que el volumen del neumático permanece aproximadamente constante (el caucho es muy rígido a estas presiones) y que el número de moléculas [[N]] no varía.

A volumen constante, la presión cinética [[P]] es proporcional a [[N]] por [[m_mol]] por [[v_rms]] al cuadrado dividido entre tres veces [[V]]. Como [[v_rms]] cuadrado es proporcional a [[T]], la presión a [[V]] y [[N]] constantes es proporcional a [[T]].

Partiendo de una presión de referencia de 1.0 MPa a 223 K, la presión a 473 K se puede estimar multiplicando por el cociente de temperaturas: 473 dividido entre 223 es aproximadamente 2.12. Por tanto, la presión estimada tras el aterrizaje es de aproximadamente 2.12 MPa.

Esta variación de presión de más del doble es la razón por la que los sistemas de neumáticos de avión están diseñados con márgenes de seguridad muy amplios y por la que los técnicos siempre miden la presión en frío (antes del vuelo) como referencia operativa.

## Interpretación

El modelo cinético predice con precisión este efecto: la presión del gas aumenta proporcionalmente con [[T]] cuando el volumen y el número de moléculas son constantes. Esta es la ley de Gay-Lussac, que el modelo cinético deriva sin necesitar datos experimentales adicionales.

La ventaja del nitrógeno respecto al aire en este contexto no es cinética sino química: el nitrógeno puro no contiene vapor de agua (que condensa al enfriarse, generando variaciones de presión adicionales) ni oxígeno (que reacciona con el caucho acelerando su degradación). La velocidad cuadrática media del nitrógeno a esas temperaturas es del orden de 400 a 600 m/s, perfectamente dentro del régimen de gas ideal sin correcciones necesarias.
`;export{e as default};
