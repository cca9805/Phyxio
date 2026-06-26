const e=`## Ideal model

The standard heat model treats thermal energy transfer as proportional to mass, the specific heat capacity of the material, and the temperature change. This model assumes that the specific heat capacity [[c_esp]] is constant over the temperature range of the process and that no intermediate phase changes occur. In the case of latent heat, the model assumes constant temperature throughout the entire phase transition, with a constant latent heat [[L]] for the specific transition.

The model simplifies the molecular nature of the process: in reality, the vibrational, rotational, and translational modes of molecules evolve with temperature, causing [[c_esp]] to vary continuously. For most basic physics and engineering calculations at atmospheric pressure, the variation of [[c_esp]] is small enough to be neglected.

## Hypotheses

- The specific heat capacity [[c_esp]] is independent of temperature over the range of the process. If the range exceeds several hundred kelvin, this hypothesis becomes questionable and may introduce errors greater than 5 %.
- No phase change occurs during the sensible heat process. If the temperature range crosses the melting or boiling point, the sensible heat model is incomplete and must be supplemented with the latent heat model.
- The mass [[m]] remains constant. In processes involving partial evaporation or condensation, the effective mass changes and the model is no longer strictly valid.
- The system is homogeneous: the entire mass is at the same temperature at each instant. For extended bodies with internal temperature gradients, this hypothesis is only an approximation.

## Quantitative validity domain

The sensible heat model with constant [[c_esp]] is valid when the temperature range is less than 200 K for most simple solids and liquids. For water between 0 °C and 100 °C, the variation of [[c_esp]] is less than 1 %, confirming the model's validity over this range.

The specific heat capacity of water varies noticeably beyond the liquid range: ice has [[c_esp]] ≈ 2090 J/(kg·K) and steam at 100 °C ≈ 2010 J/(kg·K), both substantially lower than the 4186 J/(kg·K) of liquid water.

For metals, the variation of [[c_esp]] with temperature can exceed 20 % over ranges of several hundred kelvin, making it necessary to use an average value or to integrate over the T-dependence.

The latent heat model with constant [[L]] is valid when pressure does not deviate significantly from 1 atm. At very different pressures, the transition point and the value of [[L]] change; for example, the heat of vaporization of water decreases as pressure increases, vanishing at the critical point (374 °C, 218 atm).

## Model failure signals

- **Temperature that does not change even though heat is supplied or removed at a constant rate**: this is the most direct signal that a phase change is in progress and that the sensible heat model does not apply in that segment.
- **Calculated heat very different from experimentally measured heat**: if the discrepancy exceeds 10 % under standard conditions, the specific heat is probably not constant over the analyzed range or an unaccounted phase change is present.
- **Mass that decreases during the process**: in open systems with evaporation, part of the mass leaves the system as vapor before reaching the boiling point, making [[m]] non-constant.
- **Computed [[DeltaT]] greater than 300 K in a single segment**: over that range, the constant [[c_esp]] hypothesis may introduce errors of up to 20 % in metals and complex materials.

## Extended or alternative model

The extended model incorporates the temperature dependence of specific heat capacity: [[c_esp]] is treated as a variable property rather than a fixed number. In this case, sensible heat is calculated by integrating over the temperature range. For gases, statistical thermodynamics provides exact expressions for specific heat as a function of molecular degrees of freedom.

For heterogeneous systems or those with temperature gradients, the continuous heat transfer model (conduction, convection, and radiation) replaces the point sensible heat model. In this context, [[Q]] is no longer a global scalar but a spatially distributed energy flux density.

When to switch to the extended model: when the temperature variation exceeds 200 K, when the process crosses more than one phase transition, or when precision better than 5 % is required for materials with strongly temperature-dependent specific heat capacity.

## Operational comparison

| Aspect | Simple model (constant c) | Extended model (temperature-dependent c) |
|---|---|---|
| Calculation complexity | Direct multiplication | Numerical or tabular integration |
| Typical error for water 0–100 °C | Less than 1 % | Exact reference |
| Typical error for metals 20–500 °C | 5–20 % | Less than 1 % |
| Applicability during phase changes | Does not apply at the transition | Requires separate latent heat model |
| Recommended use | Quick calculations, secondary school physics | Precision engineering, advanced thermodynamics |
`;export{e as default};
