## Ideal model

The ideal model of magnetic materials uses a linear, isotropic, homogeneous, reversible medium. In that framework, [[intensidad_magnetica]] acts as applied excitation, [[magnetizacion]] as proportional internal response, and [[campo_magnetico_total]] as the resulting total field. The microscopic complexity of domains, spins, and bound currents is summarized by [[mu]], [[mu_r]], and [[chi_m]].

The central simplification is to treat the constitutive curve as a straight line over the studied segment. This preserves the physical distinction between source, material, and result, but ignores saturation, remanence, coercivity, anisotropy, and cycle losses.

## Hypotheses

- The material behaves linearly: if this fails, [[mu_r]] stops being a constant slope and the calculation extrapolates poorly.
- The response is reversible: if this fails, magnetic memory appears and [[magnetizacion]] depends on prior history.
- The medium is treated as isotropic: if this fails, the direction of [[campo_magnetico_total]] may not coincide with [[intensidad_magnetica]].
- Temperature remains stable: if this fails, the magnetic response may change during the process.
- Geometry does not introduce dominant demagnetization: if this fails, the effective internal field differs from the estimated applied field.

These hypotheses are not administrative details. They are the boundary between using a material constant and needing an experimental curve.

## Quantitative validity domain

The model is reasonable when the used segment of the [[campo_magnetico_total]] versus [[intensidad_magnetica]] curve keeps a nearly constant slope. As a working rule, an error below 5 % in the experimental slope allows [[mu]] to be treated as effective for introductory calculations.

In soft materials, fields below 1 T < saturation zone of many technical cores often allow a first estimate, although the real threshold depends on the alloy. In weak diamagnetic and paramagnetic materials, the response is so small that the order of magnitude of [[chi_m]] often matters more than saturation.

## Model failure signals

A first failure signal is visible curvature in the [[campo_magnetico_total]] versus [[intensidad_magnetica]] graph. If doubling the excitation produces much less total-field increase than expected, the effective slope is no longer constant.

Another signal is remanence: when the excitation is removed, [[magnetizacion]] does not return to the initial state. Heating by magnetic losses, frequency dependence, different up and down cycles, or a different response after rotating the sample are also suspicious.

## Extended or alternative model

When to switch to the extended model: if saturation, remanence, or hysteresis loops appear, the constant [[mu_r]] is replaced by an experimental material curve. In that model, the state depends on the operating point and on the path followed.

For anisotropic materials, switch to a tensor permeability model. For devices with an air gap, switch to a magnetic-circuit model with reluctances, because geometry may dominate more than the material.

## Operational comparison

| Criterion | Ideal linear model | Extended model |
|---|---|---|
| Precision | Good in stable-slope segments | Better near saturation or with memory |
| Complexity | Uses [[mu_r]] and [[chi_m]] as compact parameters | Requires curve, history, and sometimes frequency |
| Application range | Weak materials or ferromagnets far from saturation | Real cores, magnets, transformers, and cycles |
| Physical reading | Clearly separates [[intensidad_magnetica]], [[magnetizacion]], and [[campo_magnetico_total]] | Adds remanence, coercivity, and losses |
| Main limit | Does not describe hysteresis | Requires reliable experimental data |