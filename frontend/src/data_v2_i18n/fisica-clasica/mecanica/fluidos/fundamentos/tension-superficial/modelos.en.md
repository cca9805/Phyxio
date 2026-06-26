## Ideal model
The ideal model of surface tension assumes a clean, stable interface with uniform surface tension [[sigma]]. The boundary is treated as a geometric surface with no thickness, able to produce force when a contact length [[L]] exists and able to generate a pressure jump when the surface is curved.

The model keeps the quantities that describe the interface: [[sigma]], [[L]], [[R]], [[r]], [[theta]] and [[h]]. It ignores evaporation, surface contamination, microscopic roughness, wetting hysteresis and local temperature variations. The central simplification is that the interface responds reversibly and that its geometry can be described by well-defined radii and angles.

## Hypotheses
- **Clean interface:** if surfactants, dust or grease are present, [[sigma]] may change locally and the calculated force no longer represents a uniform property.
- **Stable geometry:** if the meniscus vibrates or breaks, [[R]] and [[theta]] are not constant and static formulas lose value.
- **Correct effective length:** if diameter is used instead of perimeter, or one face instead of two, [[F]] is wrongly scaled.
- **Uniform gravity:** ordinary capillarity takes [[g]] as constant; if acceleration changes, [[h]] changes as well.
- **Narrow tube and defined wetting:** the capillary formula requires known [[r]] and a physically measurable angle [[theta]].

## Quantitative validity domain
Quantitative level: The surface force model is physically significant when the surface force [[F]] is comparable to the weight or pressure of the system, typically for 0.02 N/m <= [[sigma]] <= 0.5 N/m. For water, using [[sigma]] near 0.072 N/m allows detecting incorrect orders of magnitude. Capillary model validity requires a radius [[r]] < 5 mm, since for larger radii the rise becomes negligible compared to the meniscus effects at the wall.

In capillarity, visible rise mainly appears when [[r]] is below a few millimeters. With larger radii, the column weight grows and [[h]] becomes small. In curved interfaces, [[dp]] increases as [[R]] decreases; micrometric radii may produce kilopascals, while millimetric radii produce much smaller values.

## Model failure signals
A clear failure signal is excessive dependence on a poorly defined contact angle. If small variations of [[theta]] change the sign or value of [[h]], the problem requires more precise experimental data.

Another signal appears when the surface is contaminated: non-reproducible drops, hysteretic menisci or films that rupture before equilibrium. The model also fails when dynamics dominate. Then Re, viscosity and velocity must enter the reading because the interface no longer behaves as a static boundary.

## Extended or alternative model
The extended model includes surfactants, temperature variation, contact-angle hysteresis and dynamic wetting. Instead of a single [[sigma]], an effective surface tension may depend on position, time or concentration.

It is appropriate to switch to the extended model when surfactants, hysteresis or appreciable motion appear. For jets, moving drops or film rupture, capillary balances are combined with viscosity and inertia. There Re does not replace surface tension, but it indicates whether motion can alter the shape before equilibrium is reached.

## Operational comparison
| Model | Precision | Complexity | Suitable use |
|---|---:|---:|---|
| Clean static interface | High if geometry is stable | Low | Drops, menisci and laboratory capillaries |
| Capillarity with real angle | Medium-high | Medium | Tubes with measured wetting |
| Contaminated interface | Variable | High | Soaps, oils, mixtures and biology |
| Dynamic model | High in fast processes | High | Jets, drop impact and moving wetting fronts |