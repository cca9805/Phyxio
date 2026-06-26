const e=`## 1. Machine base frames

A rotating machine applies periodic forces to its base. The forced-oscillation model computes the steady amplitude [[X]] at the operating frequency [[omega_f]], without yet claiming resonance. This reading helps decide whether expected vibration exceeds geometric or noise tolerance.

Dominant variable: [[X]], because it quantifies the permanent vibration seen by the base.

Validity limit: if impacts, looseness, or variable stiffness appear, the linear model no longer represents the response.

In predictive maintenance, this reading separates expected vibration from anomaly. If the machine always rotates at the same [[omega_f]] and amplitude [[X]] grows over time while [[F0]] has not changed, the problem is likely in the base frame, the effective damping, or mounting stiffness. The model does not identify the damaged part by itself, but it orders which quantities must be measured.

## 2. Periodic actuators

An actuator pushing with a sinusoidal signal must know not only how far the system moves, but also when it responds. The amplitude [[F0]] imposed by the actuator produces a response [[X]], but phase lag [[delta]] can affect synchronization and control.

Dominant variable: [[delta]], because delay may be more critical than amplitude.

Validity limit: if the actuator saturates or the signal is not sinusoidal, a broader control model is required.

In a mechatronic system, phase lag can decide whether a correction arrives on time. A response with small amplitude but large delay may worsen regulation, whereas a larger response with known phase can be compensated by the controller. This is why the leaf is not only about computing motion; it is about understanding the timing between cause and response.

## 3. Vibration isolation

A support can receive periodic excitation from motors, compressors, or fans. Forced response estimates whether transmitted motion will be acceptable at one specific frequency. The designer may modify [[k]], [[m]], or [[b]] to reduce [[X]] without necessarily changing the source.

Dominant variable: [[omega_f]], because it is imposed by the machine.

Validity limit: large amplitudes and nonlinear viscoelastic materials can invalidate constant parameters.

The key didactic point is to distinguish isolation from elimination. The support does not make the force vanish; it changes how it is transmitted. Changing [[k]] shifts the relation between elasticity and inertia, changing [[b]] modifies amplitude and lag, and changing [[m]] alters dynamic opposition. Each design choice has a mechanical cost and does not improve every criterion at once.

## 4. Instrumentation and sensors

A mechanical sensor subject to periodic excitation may deliver a delayed reading. Forced oscillation separates reading size, measured by [[X]], from phase delay [[delta]]. This separation matters when the sensor must track an external signal.

Dominant variable: [[F0]], because external excitation sets the response scale.

Validity limit: electronic noise, active filtering, or multiple couplings require more complex signal models.

In calibration, comparing [[X]] and [[delta]] under known excitation helps detect whether the sensor measures the intended quantity or filters the mechanical signal. A small reading may look good because it is stable, but if the phase lag is large it does not represent the external phenomenon instantaneously. Forced oscillation provides the language for that critique.

## 5. Frequency-response tests

In the laboratory, a known force is applied and [[x]] is measured for different values of [[omega_f]]. This leaf describes each point of that curve: amplitude and phase at one given frequency. With many points, resonance can be studied afterward.

Dominant variable: [[b]], because damping controls response smoothness and phase lag.

Validity limit: if the transient has not decayed before measurement, the values do not represent steady state.

This application connects directly with laboratory practice. For each frequency, the force must be applied, the free response must be allowed to decay, and several repeatable cycles must be recorded. Only then does it make sense to assign an amplitude-phase pair to that frequency. If transient and permanent response are mixed, the resulting curve may falsely suggest a peak, a damping loss, or an incorrect stiffness.

Overall, these applications show that forced oscillation is a diagnostic tool for an imposed frequency. Its didactic value lies in separating source, system, and response: [[F0]] and [[omega_f]] belong to the source; [[m]], [[k]], and [[b]] belong to the system; [[X]], [[delta]], and [[x]] describe the response.

That separation supports decisions without mixing levels. Changing the source modifies the excitation; changing mass, stiffness, or damping modifies the system; measuring amplitude, phase, and displacement characterizes the observable consequence. This is why forced oscillation appears in design, diagnosis, and experimental teaching. It is useful before resonance is discussed because it gives meaning to each single operating point. A technician can then decide whether to keep the current frequency, redesign a support, add damping, or collect a complete frequency sweep for deeper analysis with clearer physical criteria and better experimental timing.

It also prevents treating every large vibration as the same physical problem.
`;export{e as default};
