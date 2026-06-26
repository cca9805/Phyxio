# Applications

## 1. Power transformer cores

In a transformer, the magnetic core guides flux between coils with a relatively small magnetizing current. The reason is not that the coil changes nature, but that the material offers high [[mu_r]] over the operating segment and converts moderate [[intensidad_magnetica]] into useful [[campo_magnetico_total]] for inducing voltage in the secondary winding.

The dominant hypothesis is operation in the nearly linear part of the material curve. If the core approaches saturation, magnetizing current rises, heating increases, and the waveform may distort. The physical interpretation requires reading [[mu_r]] as an operating slope, not as a fixed commercial label.

In practice, a laminated steel, magnetic powder, or ferrite is selected according to frequency, admissible losses, and target flux density. A core that is excellent at low frequency may be unsuitable for fast switching, because cycle losses and induced-current losses change the design decision.

Dominant variable: effective relative permeability of the core within the excitation range used.
Validity limit: invalid when saturation, intense hysteresis, or heating by magnetic losses appears.

## 2. Ferrites in switched-mode supplies

Ferrites are used in high-frequency transformers and inductors because they combine useful magnetic response with reduced electrical losses. Their [[mu_r]] concentrates field, while high resistivity limits eddy currents that would be destructive in compact metallic materials.

The dominant simplification is to treat the material through an effective permeability for a given frequency and temperature. The interpretation changes if frequency rises too much: then losses, dispersion, and complex permeability dependence matter as much as the initial [[mu_r]] value.

This application shows that "magnetic material" does not always mean "largest possible field". In a switched-mode supply, the goal is to store and transfer energy in a controlled way, keep the core cool, and prevent [[campo_magnetico_total]] from entering a region where the electronic controller loses margin.

Dominant variable: effective permeability dependent on frequency and temperature.
Validity limit: invalid when losses or dispersion make the response no longer purely linear and reversible.

## 3. Magnetic shielding of slow fields

A high-permeability magnetic shield does not block the field like an opaque wall. It redirects field lines through a lower-reluctance path, so the protected region is left with smaller [[campo_magnetico_total]]. The key is that the material concentrates the field inside itself without saturating.

The dominant hypothesis is that the shield works with sufficiently low fields and closed geometry. If there are gaps, poorly designed corners, or overly intense fields, local concentration may saturate the material and reduce effectiveness exactly where protection is most needed.

The design criterion is not simply to maximize thickness, but to distribute the field so that no region works outside its useful segment. Precision shields therefore use layers, smooth geometry, and materials with high initial response, but also with real margin against saturation.

Dominant variable: total magnetic field inside the shield and margin against saturation.
Validity limit: invalid if the material saturates or if geometry leaves open field paths.

## 4. Magnetic sensors with concentrator cores

Some sensors use ferromagnetic pieces to concentrate the external field in a sensitive region. The material increases local [[campo_magnetico_total]] so that a Hall, magnetoresistive, or inductive probe works with a better signal. The correct reading separates the environmental field from geometric and material amplification.

The dominant hypothesis is that the concentrator does not nonlinearly alter the quantity being measured. If [[mu_r]] changes with field level, the sensor may no longer be calibrated with a single slope. Therefore designs use ranges where the material acts as a stable concentrator.

In instrumentation, a response that is too intense may be worse than a moderate but reproducible response. The sensor needs a stable relation between external field and local reading; if the material keeps memory, the same sample may give different readings depending on exposure history.

Dominant variable: effective slope that transforms external field into measured local field.
Validity limit: invalid if concentrator response depends too strongly on field level or magnetic history.

## 5. Magnetic separation of materials

In recycling, mining, or laboratory work, materials are separated according to magnetic response. Ferromagnets respond strongly and may be attracted by field gradients. Diamagnetic and paramagnetic materials require more sensitive techniques because their [[chi_m]] is usually much smaller in magnitude.

The dominant hypothesis is that material response reliably identifies the target phase. In real mixtures, particle size, humidity, oxidation, and field geometry may dominate the effective force. Therefore a reading based only on "being magnetic" is too poor for process design.

The reading of [[chi_m]] helps predict whether separation will be robust or marginal. When the difference between phases is small, a strong gradient, particle-size control, and often several stages are needed. Material physics then becomes a process decision, not a simple classroom classification.

Dominant variable: effective magnetic susceptibility of the phase to be separated.
Validity limit: invalid if the sample is heterogeneous, if aggregation occurs, or if the response is nonlinear in the gradient used.