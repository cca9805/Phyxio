# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: gas-de-electrones
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Una muestra metálica se modela como gas de electrones libre tridimensional. La muestra contiene [[numero_electrones]] de conducción distribuidos en un [[volumen]] conocido. Se pide estimar la [[densidad_electronica]], la [[energia_fermi]], la [[temperatura_fermi]] y la [[velocidad_fermi]], y explicar qué ocurre con la [[ocupacion_estado]] de un estado cuya [[energia_estado]] queda ligeramente por encima del [[potencial_quimico]] a temperatura ambiente. El objetivo no es describir todas las bandas del metal, sino responder cómo la densidad fija la escala de llenado fermiónico.

## Datos
- [[numero_electrones]]: 8,5·10²⁸ electrones en 1 m³ equivalente de muestra
- [[volumen]]: 1,0 m³
- [[masa_electron]]: 9,11·10⁻³¹ kg
- [[constante_planck_reducida]]: 1,055·10⁻³⁴ J·s
- [[constante_boltzmann]]: 1,381·10⁻²³ J/K
- [[temperatura_absoluta]]: 300 K
- Estado de prueba: [[energia_estado]] ligeramente superior a [[potencial_quimico]]

## Definición del sistema
El sistema es el conjunto de electrones libres de conducción dentro de una porción macroscópica del metal. El fondo iónico se considera uniforme y solo proporciona neutralidad eléctrica. La magnitud de entrada que resume el sistema es [[densidad_electronica]], porque combina cuántos electrones hay con el [[volumen]] donde compiten por estados cuánticos. No se sigue la trayectoria de un electrón individual; se estudia el llenado estadístico de muchos estados accesibles.

## Modelo físico
Se usa un gas de electrones libre, ideal, tridimensional, no relativista y en equilibrio. La exclusión de Pauli impide que todos los electrones ocupen el estado de menor [[energia_estado]], por lo que la ocupación llena progresivamente estados de momento hasta alcanzar [[energia_fermi]]. Para la ocupación alrededor del borde se usa la distribución Fermi-Dirac, donde [[potencial_quimico]] marca el centro de la transición y [[temperatura_absoluta]] controla su anchura.

## Justificación del modelo
El modelo es adecuado para una estimación de orden de magnitud en metales simples, donde la [[densidad_electronica]] es alta y la [[temperatura_absoluta]] ambiente suele ser mucho menor que [[temperatura_fermi]]. Esa separación de escalas permite tratar la frontera de ocupación como muy marcada. Si el ejercicio pidiera detalles de banda, masa efectiva o anisotropía cristalina, habría que sustituir [[masa_electron]] por parámetros de material. Aquí se pide una relación general entre densidad, energía de llenado y ocupación, justo el territorio natural del gas electrónico libre.

## Resolución simbólica
Primero se obtiene [[densidad_electronica]] a partir de [[numero_electrones]] y [[volumen]]. Después se calcula [[energia_fermi]] con la relación de gas libre 3D:

{{f:energia_fermi_gas_electrones_3d}}

La escala térmica equivalente se obtiene mediante:

{{f:temperatura_fermi_gas_electrones}}

La rapidez característica de los electrones del borde se estima con:

{{f:velocidad_fermi}}

Para un estado puntual cercano al borde, se usa la ocupación electrónica:

{{f:ocupacion_fermi_dirac_electrones}}

y se interpreta la separación mediante:

{{f:energia_reducida_electrones}}

Si [[energia_estado]] está por encima de [[potencial_quimico]], [[energia_reducida]] es positiva y [[ocupacion_estado]] disminuye respecto al valor central.

## Sustitución numérica
Con los datos dados, [[densidad_electronica]] es aproximadamente 8,5·10²⁸ m⁻³. Esa densidad, con [[masa_electron]] libre y [[constante_planck_reducida]], da una [[energia_fermi]] de escala de varios electronvoltios, aproximadamente 7 eV en una estimación metálica típica. Al dividir por [[constante_boltzmann]], la [[temperatura_fermi]] queda del orden de 8·10⁴ K. La [[velocidad_fermi]] asociada es del orden de 10⁶ m/s, claramente menor que la velocidad de la luz, por lo que el supuesto no relativista es coherente.

## Validación dimensional
[[densidad_electronica]] tiene dimensión m⁻³. En {{f:energia_fermi_gas_electrones_3d}}, la combinación con [[constante_planck_reducida]] y [[masa_electron]] debe terminar en julios, que son unidades de energía. En {{f:temperatura_fermi_gas_electrones}}, dividir una energía por [[constante_boltzmann]] produce kelvin. En {{f:velocidad_fermi}}, combinar energía con masa produce m²/s² antes de la raíz, y por tanto m/s. [[ocupacion_estado]] es adimensional y debe quedar entre 0 y 1.

## Interpretación física
El resultado indica que la [[densidad_electronica]] del metal impone una [[energia_fermi]] mucho mayor que la energía térmica disponible a [[temperatura_absoluta]] ambiente. Físicamente, esto significa que la mayoría de estados por debajo del borde están bloqueados por ocupación y no participan libremente en cambios térmicos ordinarios. Solo estados con [[energia_estado]] cerca de [[potencial_quimico]] pueden variar apreciablemente su [[ocupacion_estado]]. La [[temperatura_fermi]] enorme no quiere decir que el metal esté a esa temperatura real, sino que la escala cuántica de llenado es muy superior a la agitación térmica. Por eso el gráfico correcto muestra una energía de Fermi alta y creciente con la densidad.

# Ejemplo de aplicación real
## Contexto
En un cable metálico de cobre, los electrones de conducción forman un gas degenerado. Aunque el cable esté a temperatura ambiente, la respuesta eléctrica depende de electrones cercanos a [[energia_fermi]], no de todos los electrones por igual. La [[densidad_electronica]] elevada explica por qué el borde de ocupación está muy por encima de la escala térmica ordinaria.

## Estimación física
Para una [[densidad_electronica]] de orden 10²⁸ m⁻³, la [[energia_fermi]] suele ser de varios eV. La [[temperatura_fermi]] asociada cae en el rango de 10⁴ a 10⁵ K, mientras [[temperatura_absoluta]] ambiente ronda 300 K. Esa comparación de escalas muestra que el gas electrónico es fuertemente degenerado. La estimación de [[velocidad_fermi]] de orden 10⁶ m/s también explica por qué los electrones tienen una escala de movimiento cuántica alta, aunque la corriente macroscópica sea lenta.

## Interpretación
El cable no conduce porque todos los electrones se aceleren igual desde reposo. La mayoría de estados profundos están ocupados y bloqueados; los cambios relevantes ocurren cerca de [[energia_fermi]]. Si se modifica [[densidad_electronica]] mediante material, presión o dopaje, cambia la frontera de llenado y también la disponibilidad de estados alrededor de [[potencial_quimico]]. Así, el gas de electrones conecta una magnitud macroscópica, [[densidad_electronica]], con una lectura microscópica de [[ocupacion_estado]].

