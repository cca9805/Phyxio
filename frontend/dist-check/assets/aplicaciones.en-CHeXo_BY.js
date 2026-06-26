const e=`# Applications of Thermodynamic Equilibrium

## 1. Temperature Measurement with Thermometers

A thermometer measures correctly only when it reaches thermal equilibrium with the observed body. Before that moment, the reading represents the sensor during its relaxation, not necessarily the object. The central condition is that [[DeltaT]] between sensor and sample becomes negligible.

Dominant variable: [[T]], because the final reading must be a common temperature.

Validity limit: If the sensor extracts too much heat or [[tau]] is long, the measurement perturbs the system and the transient must be modeled.

In metrology, one waits several characteristic times before recording the value. This practice turns equilibrium into a concrete experimental rule: touching the object is not enough; the thermal gradient must disappear.

It also supports uncertainty estimates. If the reading changes by 0.5 K per minute, the system is not settled enough for a precision measurement. If it changes by less than 0.02 K per minute and the instrument resolves 0.1 K, the remaining difference is below what the setup can distinguish. Thermal equilibrium then becomes a decision tied to resolution, [[tau]] and sensor perturbation.

## 2. Pistons and Containers with Movable Boundaries

A gas under a piston reaches mechanical equilibrium when internal pressure balances the effective external pressure. If [[DeltaP]] is appreciable, the piston accelerates or moves until volume changes. This application appears in heat engines, syringes, cylinders and quasi-static processes.

Dominant variable: [[P]], because it determines force per unit area on the boundary.

Validity limit: If friction, shocks, turbulence or fast motion are important, internal pressure may not be uniform and the instantaneous-equilibrium model fails.

The practical use is deciding whether a simple equation of state can be used. If the gas is not in mechanical equilibrium, a single global pressure can hide important internal differences.

In the laboratory this affects data taking during slow compression. If the piston moves too fast, pressure waves, friction and local heating appear; then [[P]] is no longer a single variable for the whole gas. Waiting, or moving the piston in small steps, approximates a sequence of equilibrium states and allows the process to be interpreted as quasi-static.

## 3. Phase Diagrams and State Changes

Melting, boiling and sublimation curves represent coexistence of phases at equilibrium. On a phase line, phases share compatible intensive conditions, including chemical potential [[mu]]. If those conditions fail, one phase grows at the expense of another.

Dominant variable: [[mu]], because it decides the net direction of transfer between phases.

Validity limit: Near nucleation, supercooling or metastability, the system may take time to reach phase equilibrium even when the diagram indicates the stable phase.

This application shows that equilibrium does not mean absence of microscopic exchange. Molecules pass from one phase to another, but net rates compensate and macroscopic amounts remain constant.

The reading of [[mu]] is essential in mixtures, solutions and vapor in contact with liquid. Two phases may have different concentrations and still be at equilibrium if the chemical potential of each exchangeable species matches across the phases. Phase diagrams are therefore not just temperature charts: they combine [[T]], [[P]] and material conditions.

## 4. Industrial Mixing and Reaction Processes

In reactors and mixers, declaring equilibrium permits use of final compositions, equilibrium constants and simplified balances. If affinity [[A]] has not vanished, reaction or diffusion keeps advancing and the observed state is transient.

Dominant variable: [[A]], because it summarizes the generalized drive of evolution.

Validity limit: If kinetics is slow, conversion may be incomplete during residence time; then a kinetic model is needed.

In industry, this distinction prevents overdesigning or underdesigning equipment. A reactor may be close to thermal equilibrium and far from chemical equilibrium, so stable temperature does not guarantee stable final composition.

A practical example is a reactor with good temperature control but slow kinetics. The thermal jacket can keep [[DeltaT]] small while composition continues changing for minutes or hours. If thermal stability is confused with complete equilibrium, yield is misread and a kinetic limitation may be mistaken for a thermodynamic limit.

## 5. HVAC and Thermal Comfort

A room is approximately in equilibrium when air, walls and objects have close temperatures and no relevant thermal currents remain. In practice there is often partial equilibrium: air may be mixed, while walls, windows and occupants maintain gradients.

Dominant variable: [[DeltaT]], because small sustained differences produce perceptible heat flows.

Validity limit: With sunlight, forced ventilation or equipment running, the system may be in steady state rather than thermodynamic equilibrium.

This application explains why two rooms with the same air temperature may feel different. Complete thermodynamic equilibrium would include radiative exchange, convection, humidity and contact with surfaces.

For building design, the concept separates steady comfort from true equilibrium. A room may keep constant temperature because equipment supplies heat continuously, not because gradients have vanished. That is a steady state with sustained flows. Recognizing the difference helps evaluate insulation, required power and response time after opening a window or turning a system on.
`;export{e as default};
