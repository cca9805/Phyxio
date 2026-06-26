# Applications

## 1. Nanosystems in contact with a substrate
Dominant variable: [[fluctuacion_energia]]
Validity limit: canonical equilibrium with [[temperatura]] > 0 K and weak but sufficient thermal coupling.

In adsorbed molecules, nanoparticles, or point defects, energy is not fixed as in a rigid macroscopic description. The [[funcion_particion]] predicts how much energy spreads around [[energia_media]]. The measured or estimated quantity is the thermal wandering scale, represented by [[fluctuacion_energia]], obtained from [[varianza_energia]]. This information constrains when a molecular state can be considered stable. If the fluctuation is comparable with separations between configurations, the molecule may hop among accessible states. The analysis stops being valid if the system is not equilibrated with the substrate or if [[energia_microestado]] values change through chemical reactions not included in the model.

In quantum dot systems, [[fluctuacion_energia]] can represent a significant fraction of the confinement energy. If that fraction exceeds the separation between charged and neutral states, the thermodynamic interpretation changes qualitatively. The [[funcion_particion]] allows this threshold to be estimated before experimental measurement, reducing the chance of misinterpreting a thermal fluctuation as a device malfunction.

## 2. Heat capacity of small solids
Dominant variable: [[capacidad_calorifica]]
Validity limit: fixed volume, stable structure, and small [[temperatura]] changes, for example |Delta T|/T < 0.05.

In small solids or mesoscopic crystals, [[capacidad_calorifica]] can be interpreted as a macroscopic response linked to energy fluctuations. The [[funcion_particion]] contains the curvature that generates [[varianza_energia]], and this spread tells how strongly [[energia_media]] changes when [[temperatura]] changes. What is predicted is the thermal sensitivity of the material. If heat capacity shows a maximum, it may indicate that many microscopic modes become active in that interval. The limit appears when expansion, phase change, or mobile defects are not represented by the same set of [[energia_microestado]].

In nanocrystals smaller than ten nanometers, [[capacidad_calorifica]] can show secondary peaks absent in bulk material. These peaks arise from surface vibrational modes with [[energia_microestado]] values distinct from interior modes. The [[varianza_energia]] computed from the curvature of the [[funcion_particion]] identifies in which [[temperatura]] range each surface mode becomes active, guiding experimental design toward the spectral region of interest.

## 3. Canonical Monte Carlo simulations
Dominant variable: [[varianza_energia]]
Validity limit: equilibrated sampling and enough samples for the spread to stabilize.

In simulations, sampled energy fluctuates step by step. The [[varianza_energia]] computed from the energy list should match the value predicted from derivatives of the [[funcion_particion]] if sampling is correct. This application measures the statistical quality of the algorithm and detects lack of equilibrium. A variance that is too small may mean the simulation is not exploring enough states; one that is too large may signal jumps between nonequilibrated regions. [[fluctuacion_energia]] gives a quick scale for deciding whether [[energia_media]] is representative or more sampling is needed.

A practical diagnostic: if [[varianza_energia]] computed over consecutive sample blocks differs by more than ten percent between blocks, the algorithm has not yet equilibrated. In that case, extending the thermalization period before recording [[funcion_particion]]-derived averages is necessary. This block-variance check adds minimal computation time but reliably separates a converged simulation from one still drifting toward equilibrium.

## 4. Detecting thermal transitions
Dominant variable: [[derivada_segunda_log_particion_beta]]
Validity limit: model with comparable states in the interval and no artificial numerical discontinuities.

Near a transition or internal reorganization, the curvature of ln(Z) can grow. That curvature is associated with [[derivada_segunda_log_particion_beta]] and therefore with [[varianza_energia]]. What is predicted is an increase in energy fluctuations as [[temperatura]] changes. In laboratory language, a related signal may appear as a peak in [[capacidad_calorifica]]. The reading is useful for distinguishing gradual activation from collective reorganization. The validity limit appears if the microstate model omits relevant states or if numerical noise is interpreted as a physical peak.

To distinguish a real [[capacidad_calorifica]] peak from a numerical artifact, compute [[varianza_energia]] by two independent routes: from the curvature of [[funcion_particion]] and from direct fluctuations in the sampled energies. If both agree within statistical error, the peak is physical. If they diverge, the [[temperatura]] interval being studied is probably not well equilibrated in the simulation.

## 5. Design of microscopic thermal sensors
Dominant variable: [[temperatura]]
Validity limit: local linear response and relative fluctuations compatible with sensor resolution.

In very small sensors, thermal fluctuations are not a decorative detail; they can limit precision. The [[funcion_particion]] helps estimate the expected [[varianza_energia]] at a given [[temperatura]], and therefore the uncertainty associated with [[fluctuacion_energia]]. What is constrained is resolution: if natural fluctuation is large, the sensor cannot distinguish smaller thermal changes without longer averaging. [[constante_boltzmann]] sets the microscopic scale of this thermal noise. The application fails if the sensor is out of equilibrium or receives nonthermal external energy, such as pulsed radiation or parasitic currents.

Quantitative sensor design requires knowing how long to average so that statistical uncertainty falls below the detection threshold. That averaging time grows with [[varianza_energia]] and shrinks with the signal [[energia_media]]. The [[funcion_particion]] supplies both quantities in a self-consistent way, allowing sensor specifications to be derived from the statistical properties of the physical system rather than from empirical trial and error.