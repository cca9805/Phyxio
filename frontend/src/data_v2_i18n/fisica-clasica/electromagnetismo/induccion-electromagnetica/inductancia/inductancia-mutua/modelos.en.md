## Ideal model

The ideal mutual-inductance model treats two coils as linear, fixed elements coupled by common flux. Primary current [[corriente_fuente]] produces flux linkage [[lambda_21]] in the secondary, and only changes of that current generate [[epsilon_2]].

This model preserves the essential reading: magnetic coupling, induced emf, and Lenz polarity. It ignores winding resistance, parasitic capacitances, variable leakage, core saturation, relative motion, and propagation delays.

## Hypotheses

- The geometry of both coils remains fixed; if this fails, [[inductancia_mutua]] changes.
- The core works in a linear regime; if this fails, [[inductancia_mutua]], [[inductancia_propia_primaria]], and [[inductancia_propia_secundaria]] depend on operating point.
- Coupling can be summarized by constant [[coeficiente_de_acoplamiento]]; if this fails, leakage changes during the process.
- The changing current is primary; if this fails, the source coil must be redefined.
- Times are not so short that parasitic capacitances between coils dominate.

## Quantitative validity domain

The linear model is reasonable if the effective variation of [[inductancia_mutua]] remains below 5 % over the current range used. In air-core systems this condition usually depends on geometry; in ferromagnetic cores it depends on avoiding saturation.

As a practical scale, transients with [[intervalo_de_tiempo]] greater than 1 ms often allow an average reading in introductory courses if coils are small compared with the relevant electromagnetic wavelength. In microseconds, capacitive coupling may contaminate the measurement.

## Model failure signals

A clear signal is that measured [[epsilon_2]] does not scale proportionally with the rate of change of [[corriente_fuente]]. Another is curvature in the graph of [[lambda_21]] versus [[corriente_fuente]] as primary current increases.

The assumptions also fail if the core heats strongly, saturation hum appears, the apparent [[coeficiente_de_acoplamiento]] exceeds the usual physical interval, or measured polarity changes because connections are not documented.

## Extended or alternative model

When to switch to the extended model: if resistance, capacitance, variable leakage, or secondary load modifies the result, use a coupled-inductor model with resistances, parasitic capacitances, and coupling coefficient depending on operating point.

In real transformers, the extended model separates magnetization, leakage, core losses, and load. In inductive energy transfer, it also includes distance, misalignment, and excitation frequency.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Precision | Good for fixed linear coils | Better with load, leakage, and high frequencies |
| Complexity | Uses [[inductancia_mutua]], [[cambio_de_corriente_primaria]], and [[intervalo_de_tiempo]] | Adds resistance, parasitics, variable [[coeficiente_de_acoplamiento]], and losses |
| Range | Introduction and average estimates | Real transformers and power couplings |
| Reading | Shared flux and secondary emf | Power transfer, phase, losses, and resonance |
| Main limit | Does not describe saturation or parasitics | Requires experimental parameters |