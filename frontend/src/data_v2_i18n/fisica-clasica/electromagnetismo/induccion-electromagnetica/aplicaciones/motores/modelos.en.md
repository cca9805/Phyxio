## Ideal model

The ideal direct-current motor model describes a flat coil of [[numero_de_conductores_activos]] active conductors rotating in a uniform magnetic field [[campo_magnetico_del_estator]] produced by a permanent-magnet or wound-field stator. The commutator ensures that current [[corriente_de_armadura]] in the active conductors always maintains the same relative direction with respect to the field, so that the resulting torque always acts in the same rotation direction. Electrical losses are summarised by a constant internal resistance and all other dissipations are grouped into a global efficiency [[eta]].

In this model, the Laplace force, torque, back-EMF and mechanical power are the four core quantities that follow directly from the constructive parameters and the operating conditions. The model is linear: torque is strictly proportional to current and back-EMF is strictly proportional to angular speed.

## Hypotheses

The hypotheses of the ideal model are as follows. The magnetic field [[campo_magnetico_del_estator]] in the air gap is uniform and constant, regardless of the load. The active conductors are straight and all have the same active length [[longitud_activa_del_conductor]]. The armature radius [[r_a]] is constant for all conductors. The commutator operates without sparking and without losses, keeping [[sin_theta]] close to unity at all times. The internal winding resistance is constant and independent of temperature. Magnetic losses in the core (hysteresis and eddy currents) are negligible or are implicitly included in [[eta]]. Mechanical friction at the bearings is negligible or is included in [[eta]].

## Quantitative validity domain

The ideal model is valid when the motor operates at steady speed and moderate load. Quantitatively, the air-gap field must be kept below 1.5 T to avoid core saturation. The armature current must not exceed twice the nominal current for the linearity hypothesis to hold. Angular speed must be above 10 rad/s for back-EMF to be significant relative to the internal resistive drop. In laboratory motors, the validity range covers the torque interval from 20 % to 100 % of rated torque.

## Model failure signals

The model ceases to be reliable in the following situations. If the motor starts abruptly, the transient current can exceed ten times the nominal value: the steady-state model cannot predict this behaviour. If the winding temperature rises more than 40 degrees above the design temperature, the internal resistance increases significantly and the constant-resistance hypothesis fails. If the field exceeds 1.5 T, core saturation means that torque is no longer proportional to [[corriente_de_armadura]]: the torque-current curve flattens. If the brushes are worn or the commutator is dirty, the additional electrical losses are not included in the model and the actual efficiency will be lower than calculated.

## Extended or alternative model

Progressive extensions exist to correct the limitations of the ideal model. The transition to an extended model is recommended when the operating conditions exceed the quantitative validity limits of the ideal model, or when the application requires precision beyond what the linear approximation can provide.

When to switch to the extended model: when experimental data differs from the ideal model by more than 10 percent; when the motor operates outside its nominal regime or at elevated temperatures, switch to the variable-resistance model; when dynamic phenomena such as start-up must be modelled, transition to the transient model.

The variable-resistance model introduces the dependence of internal resistance on temperature, allowing torque and current to be estimated under warm operating conditions. This extension becomes necessary when the winding temperature rises more than 30 degrees above ambient, as the resistance increase significantly alters the current-voltage relationship.

The magnetic saturation model replaces the constant field [[campo_magnetico_del_estator]] with a nonlinear magnetisation curve that links flux to excitation current. This model should be used when the armature current exceeds twice the nominal value or when the air-gap field approaches 1.5 T, as core saturation causes the torque-current relationship to deviate substantially from linearity.

To describe start-up and dynamic response, the transient armature-circuit model is required. This model includes winding inductance and rotor mechanical inertia, and demands solving a system of coupled differential equations. It is essential when the motor must accelerate rapidly, when frequent speed changes occur, or when designing PID speed controllers and modern variable-frequency drives.

## Operational comparison

The ideal model predicts torque, mechanical power and efficiency with sufficient accuracy for sizing and design exercises when the motor operates at its rated point. For high-precision applications such as robotics or CNC machines, more complex models are needed that include magnetic nonlinearity, static friction and voltage harmonics from the inverter. The transition to the extended model is justified when the ideal model error exceeds 10 % compared with experimental measurements, or when the design requires predicting behaviour outside the rated operating point.