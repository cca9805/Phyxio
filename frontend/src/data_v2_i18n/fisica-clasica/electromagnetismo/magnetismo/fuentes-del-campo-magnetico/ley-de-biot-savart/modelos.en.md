## Ideal model

The ideal model is magnetostatic: current [[corriente_electrica]] is steady, the conductor is thin, and the medium is approximated as vacuum. In that framework, each oriented element [[dl]] produces a contribution [[contribucion_diferencial_de_campo]] that is then added vectorially.

The central simplification is treating current as a geometric line. Distance [[distancia_al_punto_de_observacion]], orientation, and angular factor [[s_theta]] are preserved, while real conductor thickness, microscopic current structure, and electromagnetic delays are ignored.

## Hypotheses

- Steady current: if [[corriente_electrica]] changes rapidly, propagation effects appear and the local magnetostatic model becomes incomplete.
- Thin conductor: if thickness matters, each internal section has a different distance to the point.
- Linear medium or vacuum: if the magnetic material saturates, [[mu0]] does not represent the effective response.
- Known geometry: if the path of [[dl]] is unknown, the contributions cannot be summed correctly.
- Observation point outside the ideal conductor: if [[distancia_al_punto_de_observacion]] approaches zero, the line model loses physical meaning.

## Quantitative validity domain

The long-wire model is reasonable when the straight length exceeds the distance [[distancia_al_punto_de_observacion]] to the point by at least one order of magnitude. As an operational criterion, using it is defensible if straight-section length > 20 times the perpendicular distance.

For a loop, the center formula requires the point to be at the center within small geometric tolerances. A displacement below 5 % of the radius may keep a qualitative estimate, but exact symmetry is already lost.

## Model failure signals

A clear failure signal appears when points treated as symmetric by the model measure different fields. If [[campo_magnetico]] changes strongly when the probe is moved slightly, the real geometry does not match the ideal one.

Another signal is that the field does not grow linearly with [[corriente_electrica]]. That may indicate heating, nonlinear magnetic material, induced currents, or a source that does not maintain steady current.

## Extended or alternative model

When to switch to the extended model: thick conductors, short coils, magnetic materials, changing currents, or off-symmetry points. In those cases one uses numerical integration, volumetric current-distribution models, or the full Maxwell equations.

The transition to the extended model preserves the idea of adding contributions, but abandons the ideal line and vacuum response. Switching to that model is necessary when real data show dependence on thickness, frequency, or material.

## Operational comparison

| Model | Advantage | Limit |
|---|---|---|
| Differential Biot-Savart | Describes local geometry in detail | Requires integrating many contributions |
| Integrated long wire | Fast for extended straight conductors | Fails near ends and in short segments |
| Center loop | Very clear for ideal circular coils | Valid exactly at the center only |
| Numerical model | Works for complex real geometry | Depends on discretization and input data |