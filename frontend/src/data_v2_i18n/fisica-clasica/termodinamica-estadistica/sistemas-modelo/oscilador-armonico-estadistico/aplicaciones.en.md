# Applications

## 1. Molecular vibrations in solids
Dominant variable: [[frecuencia_angular]]
Validity limit: harmonic approximation valid only while thermal amplitude keeps the potential nearly quadratic

In a solid, atoms vibrate around equilibrium positions. Each normal mode can often be approximated as a harmonic oscillator with its own [[frecuencia_angular]]. The model predicts which modes contribute most to [[energia_media]] at a given [[temperatura]]. Low [[frecuencia_angular]] modes have smaller [[energia_cuantica]] and activate earlier; high [[frecuencia_angular]] modes remain more visibly quantized. What is measured or predicted is the thermal contribution of each mode, and what is constrained is the part of heat capacity that can be explained by harmonic vibrations. A practical criterion is to evaluate [[beta]] for each mode and form the product of [[beta]] with [[energia_cuantica]]: when that product is well below one, the mode is thermally active and [[probabilidad_ocupacion]] is spread across many levels; when it is well above one, the mode is frozen near its ground state and its contribution to [[energia_media]] approaches the zero-point value. This criterion allows identifying which modes genuinely contribute to heat capacity before carrying out a full numerical calculation for the entire system.

## 2. Low-[[temperatura]] heat capacity
Dominant variable: [[temperatura]]
Validity limit: cold regime when the thermal scale is below 0.1 times [[energia_cuantica]] for many modes

At low [[temperatura]], not all vibrational modes accept energy easily. The oscillator model explains why heat capacity can fall: [[probabilidad_ocupacion]] of excited levels becomes very small when the bath scale does not reach the spacing set by [[energia_cuantica]]. The predicted [[energia_media]] stays close to the quantum minimum for stiff modes. This application does not measure one isolated particle; it interprets the aggregate response of many oscillators. The useful constraint is the comparison between [[temperatura]] and each [[frecuencia_angular]]. At high [[temperatura]], the Dulong–Petit law emerges when the thermal scale dominates [[energia_cuantica]] for all modes; the model then predicts [[energia_media]] proportional to [[temperatura]] for each degree of freedom, recovering the classical equipartition result and providing an upper bound that experiments in many solids confirm. The Einstein model used this same harmonic oscillator statistical framework to explain why heat capacity falls at low [[temperatura]], showing that [[funcion_particion]] cannot be ignored once the thermal scale no longer dominates the quantum spacing.

## 3. Resonant sensor design
Dominant variable: [[energia_media]]
Validity limit: weak thermal coupling and high quality factor, without dominant external driving

In microresonators and sensors, thermal noise in a mechanical mode is related to [[energia_media]]. If the resonator [[frecuencia_angular]] is increased, quantum structure may affect the thermal reading at very low [[temperatura]]. The model estimates the expected background energy and separates real signal from thermal fluctuation. It predicts noise level, measures effective occupation, and constrains the range in which the reading may be treated as classical. [[funcion_particion]] is not directly measured, but it organizes the interpretation of [[probabilidad_ocupacion]]. In MEMS sensor design, the quantum noise floor appears when [[energia_cuantica]] exceeds the thermal agitation: in that regime [[energia_media]] approaches the zero-point value and cannot be reduced further by lowering [[temperatura]], because [[funcion_particion]] no longer varies significantly with [[temperatura]] and the [[probabilidad_ocupacion]] is almost entirely concentrated in the ground state, setting a physical limit to the minimum detectable signal.

## 4. Field modes and thermal radiation
Dominant variable: [[probabilidad_ocupacion]]
Validity limit: individual mode clearly defined and stationary thermal equilibrium established

A field mode in a cavity can be treated mathematically as a harmonic oscillator. Its [[frecuencia_angular]] fixes [[energia_cuantica]], while [[temperatura]] controls occupation. The model predicts how many quanta populate the mode and how [[energia_media]] changes. This reading is central in thermal radiation, microwave cavities, and quantum optics. It is not enough to know that the environment is warm: a large [[frecuencia_angular]] mode may still have low occupation in a significant thermal bath. The [[probabilidad_ocupacion]] of a radiation mode follows the Planck distribution when summed over all modes; in this way the [[funcion_particion]] of a single oscillator connects directly with the blackbody spectrum, and the [[energia_media]] integrated over frequencies reproduces the observed spectral shape.

## 5. Local approximation of chemical bonds
Dominant variable: [[energia_cuantica]]
Validity limit: small displacements around molecular equilibrium

A chemical bond near its equilibrium length can be approximated by a harmonic potential. The effective [[frecuencia_angular]] summarizes bond stiffness, and [[energia_cuantica]] gives the spacing between vibrational levels. The model predicts whether a given [[temperatura]] activates noticeable vibrations or whether the bond stays near its ground state. It constrains spectroscopic interpretation, vibrational energy storage, and molecular stability. The application fails when the bond is stretched too far, because the real potential is no longer quadratic. In IR spectroscopy, absorption bands correspond to specific [[frecuencia_angular]] values; the model allows comparing [[energia_cuantica]] for each band with the thermal scale to decide whether the bond is vibrationally excited at room [[temperatura]] or occupies only its ground state, directly determining which transitions are observable and which remain thermally frozen.