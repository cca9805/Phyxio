# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: distribucion-de-velocidades
# Target response file: teoria.en.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Velocity Distribution
## Conceptual context
An ideal gas does not contain molecules moving at one common speed. Even at a single [[temperatura_absoluta]], each particle has its own [[velocidad]] because collisions constantly redistribute microscopic motion. The Maxwell-Boltzmann speed distribution describes that population: few molecules are very slow, many gather around a typical range, and few are very fast. This is why a gas can have reproducible pressure while its molecules remain individually unpredictable. The curve is therefore not decorative; it is the object that links microscopic mechanics to thermodynamic observation. The central question is how [[temperatura_absoluta]] shapes the whole distribution, not which molecule happens to be fastest. Therefore the graph of [[densidad_probabilidad_velocidad]] versus [[velocidad]] is a statistical map of molecular agitation. It explains why repeated measurements on a large gas sample can be stable even though no molecule keeps a fixed speed.

## 🟢 Essential level
The [[temperatura_absoluta]] sets the energy scale of molecular motion. When it increases, the distribution of [[velocidad]] shifts toward larger values and becomes broader: more molecules occupy the fast tail, although slow molecules still exist. When it decreases, the distribution narrows and moves toward lower speeds. The [[masa_particula]] also matters. At the same [[temperatura_absoluta]], lighter particles reach larger characteristic speeds because the same thermal energy corresponds to more motion for a smaller mass. The [[densidad_probabilidad_velocidad]] is not a direct number of molecules. A probability comes from an interval of [[velocidad]], so the area between two limits gives [[probabilidad_intervalo]], while the curve height only shows which speeds are locally more frequent.

## 🔵 Formal level
The model uses the Maxwell-Boltzmann speed distribution. The horizontal variable is [[velocidad]], the vertical variable is [[densidad_probabilidad_velocidad]], and the shape depends on [[temperatura_absoluta]], [[masa_particula]], and [[constante_boltzmann]].

{{f:maxwell_boltzmann_velocidad}}

Three characteristic speeds summarize different readings of the same curve. The [[velocidad_mas_probable]] marks the maximum of [[densidad_probabilidad_velocidad]]. The [[velocidad_media]] is the average speed. The [[velocidad_rms]] weights fast molecules more strongly because it uses squared speed.

{{f:velocidad_mas_probable}}

{{f:velocidad_media}}

{{f:velocidad_cuadratica_media}}

The microscopic thermal energy is represented by [[energia_cinetica_media]] and is linked to [[temperatura_absoluta]].

{{f:energia_cinetica_media_gas}}

For an experimental question about a range, [[velocidad_minima]] and [[velocidad_maxima]] define the interval. The area under the curve in that interval gives [[probabilidad_intervalo]].

{{f:probabilidad_intervalo_velocidad}}

Because [[densidad_probabilidad_velocidad]] is a density, it has inverse-speed units. Multiplying it by a small speed interval produces a dimensionless probability. Thus the mathematics describes a whole population, not a single universal molecular speed.

## 🔴 Structural level
The model assumes a classical, dilute ideal gas in thermal equilibrium. Particles are treated as pointlike molecules or atoms with a common [[masa_particula]], elastic collisions, and no long-range interactions during most of their motion. The [[temperatura_absoluta]] must be meaningful, which requires enough collisions for energy to be statistically redistributed. If the sample contains several species, each species needs its own distribution because [[masa_particula]] changes the speed scale.

The central invariant is normalization: the total area under [[densidad_probabilidad_velocidad]] versus [[velocidad]] represents all available probability. The curve can shift and broaden, but it cannot create or destroy probability. Another invariant reading is the ordering of characteristic speeds. The [[velocidad_mas_probable]] lies below [[velocidad_media]], and [[velocidad_media]] lies below [[velocidad_rms]], because the high-speed tail affects averages more than the local maximum.

Boundary cases matter. Near zero [[velocidad]], the density tends to zero because in three-dimensional velocity space there are very few states with almost no speed. At very high [[velocidad]], the density also falls because such speeds require unusually large kinetic energy at a finite [[temperatura_absoluta]]. If [[temperatura_absoluta]] becomes high enough for ionization, internal excitations, dissociation, or relativistic effects, the simple classical model is no longer sufficient. If the gas becomes too dense or too cold, quantum statistics and interactions may replace the Maxwell-Boltzmann description.

Graph reading must separate height from area. A tall peak does not mean all molecules have exactly that [[velocidad]]. It means that speeds around that region are locally more probable. For [[probabilidad_intervalo]], the relevant quantity is the area between [[velocidad_minima]] and [[velocidad_maxima]]. The model fails when measurements show persistent multiple peaks, nonthermal tails, directional anisotropy, or too few collisions to establish equilibrium. In those cases the curve reflects preparation history, flows, fields, or constraints, not only [[temperatura_absoluta]] and [[masa_particula]].

## Deep physical interpretation
The [[densidad_probabilidad_velocidad]] turns chaotic microscopic motion into a stable collective prediction. An individual molecule constantly changes [[velocidad]], yet the population keeps a reproducible shape when [[temperatura_absoluta]] is fixed. The [[velocidad_mas_probable]] tells where the curve is highest, not what every molecule does. The [[velocidad_media]] answers what speed is expected when one molecule is sampled at random. The [[velocidad_rms]] connects better to [[energia_cinetica_media]], because squaring speed emphasizes the fast tail.

## Order of magnitude
For air near room conditions, with [[masa_particula]] around 10^-26 kg and [[temperatura_absoluta]] near 300 K, characteristic speeds are typically hundreds of m/s. Light gases have larger [[velocidad_media]] at the same [[temperatura_absoluta]]. Heavy gases shift the curve left. A narrow [[probabilidad_intervalo]] depends both on interval width and on the local value of [[densidad_probabilidad_velocidad]].

## Personalized resolution method
First identify the gas species to set [[masa_particula]]. Convert the temperature to [[temperatura_absoluta]] in kelvin. Decide whether the task asks for the full curve, [[velocidad_mas_probable]], [[velocidad_media]], [[velocidad_rms]], [[energia_cinetica_media]], or [[probabilidad_intervalo]]. Choose the corresponding formula and check units. If an interval is requested, do not use only the curve height: estimate or integrate the area between [[velocidad_minima]] and [[velocidad_maxima]]. Then interpret how the answer changes with [[temperatura_absoluta]] or [[masa_particula]].

## Special cases and extended example
When [[temperatura_absoluta]] decreases, the distribution narrows and shifts to lower [[velocidad]], but it does not become a single line while the classical model remains valid. When [[masa_particula]] decreases, the curve moves to higher speeds even at the same [[temperatura_absoluta]]. For nitrogen at room conditions, most molecules are grouped around hundreds of m/s. Heating the gas increases [[velocidad_mas_probable]], [[velocidad_media]], and [[velocidad_rms]], and the fast tail becomes more visible. The [[energia_cinetica_media]] follows the thermal scale.

## Real student questions
Why does the curve start at zero if very slow molecules can exist? Because the probability of exactly zero speed is negligible in three dimensions; a small interval of [[velocidad]] is what matters.

Is [[velocidad_mas_probable]] the same as [[velocidad_media]]? No. The fast tail pushes [[velocidad_media]] above the local maximum.

Does higher [[temperatura_absoluta]] accelerate every molecule equally? No. It changes the whole distribution: some molecules remain slow and others become much faster.

What does [[densidad_probabilidad_velocidad]] measure? It measures probability per unit speed, so a real probability needs an interval.

## Cross-cutting connections and study paths
This topic connects kinetic theory, ideal gases, graph interpretation, thermal energy, and statistics. It also clarifies why macroscopic equilibrium can coexist with microscopic variety. Later topics reuse this logic whenever a measurable quantity is an average over many microscopic states. It prepares the path toward energy distributions, diffusion, thermal transport, and comparisons with quantum distributions. It also separates instantaneous microscopic values from collective averages.

## Final synthesis
The [[temperatura_absoluta]] does not assign one speed to the gas, and that is the central lesson. It fixes the shape of a population, so physical interpretation comes from the curve, its characteristic speeds, and the areas associated with intervals. That viewpoint is statistical physics in miniature. It shapes a distribution. Maxwell-Boltzmann lets us read typical speeds, mean energy, and interval probabilities while keeping the statistical nature of molecular motion visible.


