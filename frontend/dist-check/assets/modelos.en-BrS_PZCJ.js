const e=`# Models for Open Systems

## Ideal model

The main model is the macroscopic control volume. A boundary is fixed and everything crossing it is counted. The boundary may cut mass inlets and outlets, heat-transfer surfaces, and shafts or wires through which work is transferred. The model does not follow the same material mass; it follows a region of space or a device.

This model is appropriate when streams have defined average properties. Each inlet and outlet is represented by [[m_dot]] and by a specific energy [[e_flujo]]. Internal accumulation is represented by [[m_sys]] and [[E_sys]]. Heat [[Q_dot]] and work [[W_dot]] are additional energy channels that do not carry matter.

## Hypotheses

- The control-volume boundary is defined before balances are written.
- Mass inlets and outlets can be identified and labeled.
- Each stream has representative average properties.
- The sign convention for heat, work, and flows is stated.
- Neglected terms are justified by scale, not by habit.

## Quantitative validity domain

The average-property model is reasonable if fluctuations across a section are small compared with the mean. Operational criterion: < 5% relative variation in [[m_dot]] or [[h]] within a section is usually enough for an elementary balance. To neglect kinetic energy, compare the velocity term with enthalpy: if it is < 1% of [[h]], it may be omitted in a first approximation.

At steady state, a useful condition is that the variation of [[m_sys]] during the observed interval is less than 1% of the initial inventory. If this is not true, the accumulation term must be kept.

## Model failure signals

The model begins to fail when properties change strongly across a single inlet, when jets, pressure waves, incomplete mixing, or very localized reactions occur. It also fails if a control volume is stated but one cannot decide which streams cross its boundary.

An observable signal is that two instruments placed at the same section give very different values. Another is that the mass balance does not close within experimental uncertainty. In those cases, adjusting numbers is not enough: the boundary must be revised or a distributed model must be used.

## Extended or alternative model

Switch to an unsteady model if [[m_sys]] or [[E_sys]] changes appreciably with time. Switch to a distributed-flow model if properties vary strongly with position. Switch to a kinetic or reactive model if composition changes inside the control volume.

The transition does not remove conservation balances; it refines them. The integral balance remains the base, but it is complemented with local equations, heat transfer, pressure losses, chemical kinetics, or fluid simulation.

## Operational comparison

The ideal model is useful for quick balances of devices with clean inlets and outlets. The extended model is preferable when the boundary includes mixing regions, transients, or spatial variation. The operational decision is simple: if one average property closes mass and energy within uncertainty, the ideal control volume is enough; if it does not close, the boundary or level of detail must change.
`;export{e as default};
