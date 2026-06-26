const e=`# Ondas sismicas P y S

## Contexto conceptual

Cuando un sismo libera energia en el interior de la Tierra, esa energia se propaga como ondas elasticas a traves de las rocas. Existen dos tipos fundamentales de ondas de cuerpo: las **ondas P** (primarias, de compresion) y las **ondas S** (secundarias, de cizalla). Comprender sus diferencias de velocidad y su comportamiento en distintos medios es esencial para la sismologia, la geofisica de exploracion y la ingenieria sismorresistente.

Las ondas P y S constituyen la base del metodo sismologico: la diferencia de tiempos de llegada permite localizar el foco de un terremoto, y la presencia o ausencia de ondas S revela el estado solido o liquido de las capas internas terrestres.

## 🟢 Nivel esencial

Las **ondas P** comprimen y dilatan el material en la misma direccion de avance, como un muelle que se aprieta y suelta. Su velocidad [[v_p]] es la mas alta de todas las ondas sismicas. Las **ondas S** desplazan las particulas perpendicularmente a la direccion de propagacion, como una cuerda que vibra. Su velocidad [[v_s]] es siempre menor que la de las P.

> [!NOTE]
> Las ondas P siempre viajan mas rapido que las S en el mismo medio. Por eso llegan primero a un sismografo y reciben el nombre de «primarias». La diferencia de tiempos de llegada [[delta_t_ps]] es la clave para localizar el foco del terremoto.

Las ondas S no se propagan en fluidos porque los liquidos y gases carecen de rigidez de cizalla. Esta propiedad fue clave para descubrir que el nucleo externo de la Tierra es liquido: las ondas S desaparecen al cruzarlo. La combinacion de ambos tipos de onda permite tanto localizar sismos como diagnosticar el estado fisico de los materiales terrestres.

## 🔵 Nivel formal

La velocidad de la onda P en un medio isotropo y homogeneo viene dada por:

{{f:velocidad_onda_p}}

Donde [[K_bulk]] es el modulo de compresibilidad, [[G_shear]] el modulo de cizalla y [[rho_medio]] la densidad. La presencia de ambos modulos refleja que la onda P involucra tanto cambio de volumen como cambio de forma.

La velocidad de la onda S depende unicamente de la rigidez de cizalla:

{{f:velocidad_onda_s}}

El cociente entre ambas velocidades se relaciona directamente con el coeficiente de Poisson del medio:

{{f:relacion_vp_vs_poisson}}

Para un solido con [[nu_poisson]] de 0.25, el [[ratio_vp_vs]] vale exactamente la raiz de 3 (aproximadamente 1.73). Valores superiores a 2 indican saturacion de fluidos en los poros.

La diferencia de tiempos de llegada entre P y S a una estacion sismologica permite estimar la distancia al foco:

{{f:diferencia_tiempos_sismo}}

Donde [[d_foco]] es la distancia al hipocentro y [[delta_t_ps]] el intervalo medido entre las dos llegadas. Este principio es la base de la triangulacion sismica: midiendo [[delta_t_ps]] en al menos tres estaciones y conociendo las velocidades del medio, se puede determinar la posicion tridimensional del foco. La proporcionalidad directa entre [[delta_t_ps]] y [[d_foco]] es consecuencia de la propagacion a velocidad constante en un medio homogeneo.

## 🔴 Nivel estructural

La diferencia fundamental entre P y S reside en el tipo de deformacion que movilizan. La onda P produce **dilatacion volumetrica** (compresion-rarefaccion), por lo que su velocidad depende tanto de [[K_bulk]] como de [[G_shear]]. La onda S produce **distorsion de forma** sin cambio de volumen, y solo depende de [[G_shear]].

> [!WARNING]
> En un fluido, [[G_shear]] es exactamente cero. Esto implica que [[v_s]] se anula y la onda S no existe. Las ondas P, en cambio, siguen propagandose porque [[K_bulk]] permanece finito.

**Condiciones de validez del modelo:**

- **Isotropia**: si el medio es anisotropo (rocas laminadas, cristales), las velocidades dependen de la direccion de propagacion y aparecen ondas quasi-P y quasi-S.
- **Homogeneidad**: en medios estratificados, las ondas se refractan en cada interfaz segun la ley de Snell. Las trayectorias dejan de ser rectas y las dromocronas se curvan.
- **Elasticidad lineal**: para amplitudes grandes (zona cercana al foco), los efectos no lineales modifican la propagacion.
- **Longitud de onda larga**: si la longitud de onda es comparable al tamaño de los granos o fracturas, aparece dispersion y atenuacion por scattering.

La relacion [[ratio_vp_vs]] es un **indicador litologico poderoso**. Rocas secas cristalinas muestran valores cercanos a 1.7, mientras que rocas saturadas de agua o gas muestran valores mayores (2.0–2.5). Esta variacion permite detectar la presencia de fluidos en formaciones geologicas profundas desde la superficie.

> [!TIP]
> Si [[ratio_vp_vs]] supera 2.0 en una formacion que deberia ser roca seca, probablemente hay fluidos en los poros. Si baja de 1.5, el dato es sospechoso y debe revisarse.

La **zona de sombra sismica** (entre 104 y 140 grados de distancia angular) se explica porque las ondas P se refractan al entrar en el nucleo liquido (donde [[v_s]] se anula) y las S son completamente absorbidas. Este fenomeno fue la primera evidencia directa de que el nucleo externo es liquido.

## Interpretacion fisica profunda

La velocidad [[v_p]] combina dos mecanismos de restitucion elastica: la resistencia a la compresion ([[K_bulk]]) y la resistencia al cambio de forma ([[G_shear]]). Esto significa que incluso en un material muy blando en cizalla pero incompresible (como el agua), las ondas P se propagan eficazmente.

La velocidad [[v_s]], al depender solo de [[G_shear]], es un indicador puro de la rigidez estructural. Un medio que permite ondas S es necesariamente un solido. Esta dicotomia convierte al par P/S en una herramienta de diagnostico del estado fisico de la materia.

El [[delta_t_ps]] crece linealmente con la distancia en un medio homogeneo. En la Tierra real, la curvatura de las dromocronas refleja la variacion de velocidad con la profundidad (efecto de presion y temperatura sobre los modulos elasticos).

## Orden de magnitud

- **Corteza terrestre**: [[v_p]] de 5500 a 6500 m/s, [[v_s]] de 3000 a 3700 m/s
- **Manto superior**: [[v_p]] de 7800 a 8100 m/s, [[v_s]] de 4300 a 4600 m/s
- **Nucleo externo (liquido)**: [[v_p]] de 8000 a 10300 m/s, [[v_s]] nula
- **Agua**: [[v_p]] de 1500 m/s, [[v_s]] nula

Un sismo local a 50 km de profundidad genera un [[delta_t_ps]] de unos 7 segundos. Un telesismo a 10000 km produce un [[delta_t_ps]] superior a 10 minutos.

Si se obtiene [[v_p]] superior a 9000 m/s en corteza continental, el resultado es fisicamente absurdo y debe revisarse la entrada de modulos o densidad.

## Metodo de resolucion personalizado

1. **Identificar el medio**: determinar [[K_bulk]], [[G_shear]] y [[rho_medio]] del material (tablas geofisicas o ensayos de laboratorio).
2. **Calcular [[v_p]]**: aplicar la formula con raiz cuadrada de ([[K_bulk]] mas 4/3 de [[G_shear]]) dividido entre [[rho_medio]].
3. **Calcular [[v_s]]**: aplicar la raiz cuadrada de [[G_shear]] entre [[rho_medio]].
4. **Verificar coherencia**: comprobar que [[v_p]] es mayor que [[v_s]]. Si no, hay un error en los modulos.
5. **Estimar distancia**: si se dispone de [[delta_t_ps]], obtener [[d_foco]] multiplicando por el factor de velocidades.
6. **Clasificar litologia**: calcular [[ratio_vp_vs]] y comparar con tablas de referencia para identificar el tipo de roca.

## Casos especiales y ejemplo extendido

**Caso del fluido**: al hacer [[G_shear]] nulo, la formula de [[v_p]] se reduce a la velocidad del sonido en fluido (raiz de [[K_bulk]] entre [[rho_medio]]). Las ondas S desaparecen por completo.

**Caso del material de Poisson ideal** ([[nu_poisson]] de 0.25): el [[ratio_vp_vs]] vale exactamente la raiz de 3. Muchas rocas igneas secas se aproximan a este valor, lo que simplifica los calculos de primer orden.

**Medio parcialmente saturado**: la saturacion parcial produce un aumento brusco de [[ratio_vp_vs]] porque [[K_bulk]] se incrementa con el agua mientras [[G_shear]] apenas cambia. Este efecto es la base de la deteccion de reservorios de hidrocarburos mediante sismica.

**Anisotropia**: en rocas sedimentarias laminadas, [[v_p]] paralela a la laminacion puede ser un 10–20 por ciento mayor que perpendicular a ella. Los modelos isotropos ya no son suficientes y se requiere un tensor elastico completo.

## Preguntas reales del alumno

- **¿Por que la P siempre es mas rapida que la S?** Porque la formula de [[v_p]] incluye [[K_bulk]] sumado con [[G_shear]], mientras la de [[v_s]] solo incluye [[G_shear]]. Al sumar un termino positivo en el numerador, [[v_p]] es necesariamente mayor.

- **¿Como se sabe que el nucleo externo es liquido?** Porque las ondas S no lo atraviesan: [[G_shear]] es cero en un liquido, lo que anula [[v_s]]. Solo las P continuan (con [[K_bulk]] finito).

- **¿La diferencia de tiempos solo sirve para medios homogeneos?** En teoria si, pero en la practica se usan dromocronas corregidas por modelos de velocidad terrestre (como PREM o IASP91) que tienen en cuenta la variacion de propiedades con la profundidad.

- **¿Puede [[ratio_vp_vs]] ser menor que la raiz de 2?** En principio si: implicaria [[nu_poisson]] negativo, lo que corresponde a un material auxetico. Son raros en geologia pero existen en materiales sinteticos.

- **¿Que pasa con las ondas superficiales?** Las ondas superficiales (Rayleigh y Love) se derivan de las P y S al interactuar con la superficie libre. Son mas lentas pero con mayor amplitud a distancias largas, y causan la mayor parte del dano sismico.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con [Ondas longitudinales en barras](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras), donde se estudia la propagacion en geometria confinada. La diferencia principal es que en barra esbelta solo interviene el modulo de Young (con la condicion de deformacion libre lateral), mientras en medio infinito intervienen [[K_bulk]] y [[G_shear]] como parametros independientes.

Tambien conecta con [Impedancia mecanica en solidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos), ya que los coeficientes de reflexion y transmision en interfaces geologicas dependen de las impedancias acusticas (producto de densidad por velocidad).

Para la aplicacion practica en ingenieria, el leaf [Dispersion y atenuacion en solidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/dispersion-y-atenuacion-en-solidos) extiende el modelo elastico ideal a medios viscoelasticos con perdidas.

## Sintesis final

Las ondas sismicas P y S son las dos formas fundamentales de propagacion elastica en el interior de la Tierra. Su velocidad depende de los modulos elasticos y la densidad del medio, y su cociente revela el coeficiente de Poisson y la posible presencia de fluidos. La diferencia de tiempos de llegada es la herramienta basica de localizacion sismica, y la extincion de las ondas S en fluidos es la evidencia geofisica fundamental de la existencia del nucleo liquido terrestre.
`;export{e as default};
