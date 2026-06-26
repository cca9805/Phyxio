# Pitot Tube — Model and Validity

The Pitot tube is not just a mechanical device, but a family of physical approximations that allow translating pressures into local velocities under various flow regimes.

## Ideal model
The **ideal incompressible Bernoulli model** is the basis for most low-speed applications. It is based on the application of energy conservation along a streamline that ends exactly at the front orifice of the tube (stagnation point).

- **Physical description**: It is assumed that all the kinetic energy of the fluid is entirely converted into static pressure when the flow stops at the mouth of the tube. The resulting pressure is called stagnation pressure [[p_t]].
- **Core equations**: The difference between stagnation pressure and static pressure is used to solve for velocity using the velocidad_pitot formula.

## Hypotheses
For the ideal model to be applicable, the following assumptions must be met:
1.  **Incompressible fluid**: The density does not change significantly upon stagnation (valid for air at Ma < 0.3).
2.  **Steady flow**: Velocity and pressure conditions do not vary with time during measurement.
3.  **Inviscid fluid**: Internal friction of the fluid in the vicinity of the tube is neglected.
4.  **Perfect alignment**: The axis of the probe coincides with the velocity vector of the free flow.

## Quantitative validity domain
To ensure the reliability of measurements, the Pitot model must operate within the following quantitative ranges:

- **Mach Number < 0.3**: In air at sea level, this is equivalent to about 100 meters per second. Above this value, gas compressibility causes density to increase at the stagnation point, invalidating the simple Bernoulli formula.
- **Reynolds Number > 1000**: If the Reynolds number based on the tube diameter is very low (very slow flows or nanoscopic tubes), viscous effects at the tip become dominant and overestimate the total pressure.
- **Angular alignment < 5°**: This is the limit to maintain an error of less than 1% without needing complex angular correction models or spherical head probes.

## Model failure signals
It is detected that the Pitot model is failing or misapplied through the following observable signals:

- **Inverted pressure**: Registered static pressure is higher than stagnation pressure ([[p]] > [[p_t]]), which is physically impossible for a flow hitting the probe and reveals a connection error or design failure.
- **Violent oscillations**: If the differential pressure reading fluctuates rapidly, it indicates that the probe is located in a turbulent wake or separated flow zone, where no coherent streamline exists.
- **Transonic velocities**: If the velocidad_pitot result approaches 300 m/s in air without applying density corrections, it is known that the model is underestimating the real velocity.
- **Cavitacion in liquids**: In the case of hydrofoils, if the pressure in the probe falls below the vapor pressure, the appearance of bubbles invalidates the assumption of an incompressible continuous medium.

## Extended or alternative model
Commercial probes that combine stagnation and static pressure taps in a single body (Prandtl probe) introduce geometric perturbations that the ideal model does not capture.

- **Calibration Factor (C)**: A corrective constant is introduced to compensate for the effects of sensor geometry and the local acceleration it imposes on the surrounding streamlines.
- **Compressibility Models**: For high-speed flights (commercial and military aviation), the Rayleigh-Pitot equation is used, which considers shock waves and adiabatic compression at the probe tip.

## Operational comparison
| Model | Advantages | Disadvantages | When to Choose It |
|---|---|---|---|
| Ideal Pitot | Maximum simplicity, analytical | Ignores compressibility and friction | Low speed (Ma < 0.3), liquids |
| Rayleigh-Pitot | Accurate at high regimes | Complex algebra, requires Ma | Jet aviation, turbines |
| Hot Wire Anemometry | Measures rapid fluctuations | Fragile, requires calibration | Measurement of turbulence in tunnels |
| Laser Anemometry (LDV) | Non-intrusive (no probe) | Very expensive, requires particles | Zones where a probe would alter the flow |

Choosing the model critically depends on the desired precision and whether the flow regime allows safely ignoring viscosity and compressibility effects.