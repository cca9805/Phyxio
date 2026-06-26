const e=`## Ideal model

The ideal generator model uses a rigid coil with [[N]] turns rotating at constant [[omega]] in a uniform [[B]] field. The effective geometry is summarized by [[A]], and the main electrical result is a sinusoidal [[epsilon_0]]. The model preserves the link between mechanical work, changing [[Phi_B]], and induced emf, but it ignores internal resistance, friction, magnetic saturation, and heating.

Its central simplification is to treat flux linkage as clean and repeatable on every turn. This separates geometric design from energy delivery. The model is good for predicting voltage scale, not for guaranteeing real power under every load.

## Hypotheses

- Approximately uniform magnetic field: if this fails, [[B]] no longer represents the field crossing the whole coil.
- Steady rotation: if [[omega]] fluctuates strongly, the signal no longer has a well-defined amplitude and frequency.
- Fixed effective area: if the coil deforms, [[A]] changes and linked flux varies from turn to turn.
- Negligible losses in emf estimation: if heating or friction is significant, [[P_elec]] falls below ideal output.
- Compatible external load: if the load demands too much current, terminal voltage drops and isolated-emf modelling is insufficient.

## Quantitative validity domain

The ideal model is reasonable when speed variations are below 5 %, internal losses are below 10 % of [[P_mec]], and the magnetic field remains far from saturation. In educational coils, it is often usable with [[B]] between 0.01 T and 0.5 T, [[omega]] below 500 rad/s, and areas smaller than 0.1 m².

As an order of magnitude, a laboratory coil producing tens of volts can be described well by this model if the load does not force large currents. For industrial powers, the ideal model is only a first reading: winding resistance, reactance, voltage regulation, and cooling must be included.

## Model failure signals

A clear failure signal is that doubling [[omega]] does not approximately increase the observed voltage amplitude. Another is that predicted [[epsilon_0]] is high, but terminal voltage drops strongly when a moderate load is connected. Then the issue is not only induction, but internal impedance and losses.

The model also fails if the curve is no longer stably periodic, if saturation clips the waveform, or if required torque grows disproportionately relative to delivered power. These signals show that the real generator is operating outside the linear hypothesis.

## Extended or alternative model

The extended model adds internal resistance, mechanical losses, magnetic losses, and coupling with the load. Instead of treating [[eta]] as an external datum, it can be estimated from heating, friction, and magnetic-circuit efficiency. This separates internal emf from useful terminal voltage.

When to switch to the extended model: if the problem asks for power under load, voltage regulation, heating, or comparison between real designs. Switch to this model also when dealing with three-phase alternators, saturable cores, or variable speeds.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Aim | Scale of [[epsilon_0]] and induction reading | Real output, losses, and loaded behaviour |
| Complexity | Low, with few quantities | Medium or high, with electrical and mechanical parameters |
| Accuracy | Good for classroom estimates | Required for technical design |
| Main limit | Ignores terminal drop and losses | Requires data that may not be available |

`;export{e as default};
