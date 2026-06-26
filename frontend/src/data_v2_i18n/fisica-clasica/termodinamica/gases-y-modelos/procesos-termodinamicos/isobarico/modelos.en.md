## Ideal model

The standard model of the isobaric process is the **ideal gas at constant pressure with a quasi-static reversible process**. In this model, pressure [[p]] remains exactly fixed throughout the transformation, the gas obeys the ideal equation of state, and the process occurs slowly enough that the system is always in mechanical and thermal equilibrium with its surroundings. Mechanical work is exactly the product [[p]] times [[DeltaV]], and the absorbed heat satisfies the first law without corrections.

The magnitudes conserved in this model are **pressure** [[p]] and the amount of substance \(n\). The magnitudes that change are volume ([[V1]] → [[V2]]), temperature ([[T1]] → [[T2]]), internal energy ([[DeltaU]]), and the entropy of the system. The model neglects gas viscosity, piston friction, temperature gradients inside the gas, and the time required for the system to reach equilibrium after each infinitesimal variation.

## Hypotheses

- **Ideal gas**: gas molecules do not interact beyond point elastic collisions, and the molecular proper volume is negligible. Consequence of violation: the equation of state deviates from the ideal law, especially at high pressure or low temperature, and Gay-Lussac's law ceases to be exact.
- **Constant pressure**: the external pressure acting on the piston equals the internal pressure at all times. Consequence of violation: the process is no longer isobaric; it may become a polytropic or even irreversible process if the external pressure changes abruptly.
- **Quasi-static process**: the process occurs so slowly that the system passes through a continuous succession of equilibrium states. Consequence of violation: actual work is less than [[p]] times [[DeltaV]] (in expansion), because internal pressure waves dissipate energy. The process generates entropy irreversibly.
- **No piston friction**: there is no energy loss due to friction between the piston and the cylinder walls. Consequence of violation: part of the calculated work converts to frictional heat and is not transferred to surroundings as useful mechanical energy.
- **Constant heat capacities**: \(C_p\) and \(C_V\) do not depend on temperature. Consequence of violation: heat [[Q]] calculated as \(n C_p \Delta T\) is only an approximation; for large temperature changes, the vibrational modes of polyatomic gases activate progressively.

## Quantitative validity domain

The model is valid while the following conditions are met:

- **Moderate pressure**: up to 10 MPa for most gases. Below \(5 \times 10^5\) Pa and with [[DeltaT]] < 500 K, the ideal gas approximation produces errors below 1% in [[W]] and [[Q]].
- **Temperature far from liquefaction point**: for nitrogen (liquefaction point near 77 K), the model fails for [[T1]] < 150 K; for water vapour, it fails near 100 °C at 1 atm if condensation begins.
- **Process speed**: for a quasi-static process, the piston velocity must be well below the speed of sound in the gas (around 340 m/s in air). In internal combustion engine processes, this assumption is approximate.
- **Reasonable temperature difference**: the constant-\(C_p\) assumption holds for temperature variations up to about 300 K in ordinary diatomic gases (N₂, O₂, air). For larger variations, \(C_p(T)\) must be integrated explicitly.

## Model failure signals

- **The pV diagram line is not horizontal**: if measured pressure and volume data show that pressure varies while volume changes, the process was not isobaric. This is detected directly by plotting the actual process on the experimental pV diagram.
- **The ratio [[V1]]/[[T1]] ≠ [[V2]]/[[T2]]**: if temperature and volume data do not satisfy Gay-Lussac's law, the gas did not behave ideally or pressure was not constant. A deviation above 2% in the ratio indicates model failure.
- **Calculated [[W]] differs from measured [[W]]**: if the mechanically measured work (e.g., via piston displacement) is significantly less than the product [[p]] times [[DeltaV]], irreversibilities are present (friction, rapid expansion).
- **Cylinder wall temperature different from gas temperature**: if there is an appreciable thermal gradient between the gas and the walls, the process was neither quasi-static nor thermally equilibrated with surroundings, and the actual heat exchange differs from the calculated value.

## Extended or alternative model

The **polytropic process** is the natural generalisation of the isobaric process. In a polytropic process with index \(n\), pressure and volume satisfy a relation of the type \(p \cdot V^n\) constant. The isobaric process corresponds to the limiting case of zero index (constant pressure), the isothermal to index 1, the adiabatic to index \(\gamma\), and the isochoric to index \(n\) tending to infinity. The polytropic model allows describing processes with partial heat dissipation that are neither fully adiabatic nor fully isobaric.

For real gases with molecular interactions (Van der Waals gases, dense gases), the Van der Waals equation of state replaces the ideal gas law. In that case, isobaric work is no longer the simple product [[p]] times [[DeltaV]] and must be calculated by integrating \(\int_{V_1}^{V_2} p \, dV\) with the real equation of state. The difference from the ideal model can exceed 5% at moderate pressures for polar or dense gases.

The transition to the extended model is justified when process conditions approach the quantitative validity limits described above: pressures above 10 MPa, temperatures near the condensation point, or processes fast enough for the quasi-static assumption to fail.

## Operational comparison

| Criterion | Ideal isobaric model | Polytropic / real gas model |
|---|---|---|
| Work formula | [[p]] times [[DeltaV]] (exact) | numerical integration of \(\int p \, dV\) |
| Equation of state | ideal gas law | Van der Waals or other real EOS |
| Pressure during process | Exactly constant | May vary (polytropic index \(n\)) |
| Exchanged heat | \(n C_p \Delta T\) if \(C_p\) constant | Requires integrating \(C_p(T)\) |
| Application range | Low-medium pressure, gas far from condensation | High pressure, polar or dense gas |
| Calculation complexity | Minimal (product of two scalars) | Moderate-high (numerical integration) |
| Typical error in [[W]] | < 1% under ordinary conditions | Reduced to < 0.1% for real gas |
