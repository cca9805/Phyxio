const e=`# Harmonic Oscillator

## Conceptual context

The harmonic oscillator is the most important linear model in analytical mechanics. It appears when a system is displaced slightly from a stable equilibrium and the restoring force can be approximated as proportional to displacement. That is why it is used for springs, mechanical vibrations, normal modes, small pendulum oscillations, and local approximations to more complex potentials.

In this leaf, [[m]], [[k]], [[omega]], [[Tper]], [[A]], and [[E]] form a simple causal chain. Mass provides inertia, stiffness provides return, angular frequency measures natural rhythm, period translates that rhythm into cycle time, amplitude fixes maximum displacement, and total energy measures how strongly the mode has been excited.

## 🟢 Essential level

The essential idea is that a harmonic oscillator does not need a constant force; it needs a force that grows as the system moves away from equilibrium. If the displacement is small and the return is linear, the resulting motion is periodic and has a natural rhythm. That rhythm does not depend on pushing harder once [[m]] and [[k]] are fixed; it depends on the balance between inertia and stiffness.

A larger mass responds more slowly because it has more inertia. Greater stiffness responds faster because it pulls the system back more strongly. Amplitude, in the ideal linear model, does not change the period; it changes stored energy. This separation prevents a common misconception: a larger oscillation is not necessarily slower or faster in the ideal harmonic model.

Total energy remains constant if there is no damping or external forcing. During the motion, energy is exchanged between kinetic and elastic potential forms, but total [[E]] is fixed by [[k]] and [[A]]. The physical reading is not merely computing a frequency; it is deciding which parameter controls rhythm and which controls energy.

## 🔵 Formal level

The natural angular frequency is obtained by comparing restoring stiffness with mass inertia:

{{f:omega}}

The oscillation period translates angular frequency into the time for one complete cycle:

{{f:Tper}}

The total mechanical energy associated with maximum amplitude in a quadratic elastic potential is:

{{f:E}}

These three relations are enough to solve the core of the linear model. If the question asks for rhythm, compute [[omega]] and [[Tper]]. If it asks for excitation energy, use [[E]]. If [[m]] changes, the rhythm changes but energy at the same amplitude and stiffness does not. If [[A]] changes, energy changes but the linear period does not.

Formally, the relations should be read as a sequence, not as an isolated list. First the system-inertia pair is identified through [[k]] and [[m]]. Then the natural clock [[omega]] is obtained, independently of how the system was released. Next that clock is translated into [[Tper]], a quantity that can be compared directly with experimental data. Only at the end does [[A]] enter to set [[E]], because amplitude describes the preparation of the motion, not the basic temporal property of the oscillator.

This organization prevents two common algebraic mistakes. The first is putting amplitude inside the natural frequency, mixing initial state with system parameter. The second is treating energy as if it depended directly on mass, when in the ideal linear spring model maximum energy comes from elastic potential. The formal level therefore does more than calculate: it orders which quantity answers which physical question.

## 🔴 Structural level

Structurally, the harmonic oscillator represents the quadratic approximation of a potential near a stable minimum. In analytical mechanics this is central because many systems are not exactly harmonic, yet behave harmonically for small oscillations. The generalized coordinate may be a position, a small angle, or a normal coordinate; what matters is positive potential curvature around equilibrium.

The model becomes insufficient when damping, external forcing, strong nonlinearity, or large amplitudes appear. If effective stiffness changes with displacement, [[omega]] is no longer constant. If dissipation exists, [[E]] is no longer conserved. If external forcing dominates, the observed rhythm may be controlled by the driving frequency rather than by the natural frequency.

The structural reading also separates parameters from state. [[m]] and [[k]] describe the system; [[A]] describes how the motion is prepared; [[omega]] and [[Tper]] are temporal consequences; [[E]] summarizes mechanical excitation. This classification prevents treating all quantities as interchangeable data.

## Deep physical interpretation

The harmonic oscillator is powerful because it converts stability into periodic motion. If equilibrium is stable, a small perturbation does not send the system away indefinitely; it brings it back, crosses equilibrium, and repeats the energy exchange. Natural frequency measures the rate of that exchange.

From the Lagrangian point of view, the model shows how quadratic kinetic energy and quadratic potential energy produce a linear equation. From the Hamiltonian point of view, the phase-space trajectory is closed: the system does not lose energy, it only redistributes it between position and momentum. This is why the oscillator is a conceptual laboratory for analytical mechanics.

Amplitude plays a different role from frequency. Increasing [[A]] makes the oscillation more energetic, but it does not alter the natural clock while the spring remains linear. That independence is a signature of the ideal model and a way to detect nonlinearity in real data.

## Order of magnitude

In laboratory systems, [[omega]] may range from a few radians per second to thousands or more, depending on mass and stiffness. A kilogram-scale mass with a soft spring may oscillate over seconds; a small component with high stiffness may oscillate over milliseconds. This scale helps reject impossible answers.

Energy is highly sensitive to amplitude. Doubling [[A]] multiplies [[E]] by four if [[k]] is unchanged. Therefore small amplitudes in stiff systems may contain appreciable energy, while large amplitudes in soft systems may remain moderate.

## Personalized resolution method

First identify whether the problem asks for rhythm, time, or energy. If it asks for rhythm, locate [[m]] and [[k]] and compute [[omega]]. If it asks for a cycle time, convert that reading into [[Tper]]. If it asks for excitation or stored energy, use [[k]] and [[A]].

Then check the model: the return must be linear, mass constant, oscillations small, and damping negligible. Units should be checked before substitution: [[k]] in N/m, [[m]] in kg, and [[A]] in m. Finally interpret the result: high frequency means fast response; large period means slow oscillation; high energy means large amplitude or high stiffness.

## Special cases and extended example

If [[A]] is zero, the system is at equilibrium and [[E]] is zero, although [[omega]] still characterizes how it would respond to a small perturbation. If [[k]] becomes very small, return is weak and the period grows. If [[m]] grows strongly, inertia dominates and motion slows down.

As a conceptual example, two oscillators may have the same amplitude but different frequencies if their masses or stiffnesses differ. They may also have the same period and different energies if their amplitudes or stiffnesses differ. Separating these possibilities is what makes the model an analysis tool rather than a substitution recipe.

## Real student questions

A common question is why amplitude does not appear in the period. The answer is that this independence holds only in the ideal linear model; in nonlinear systems it can fail. Another frequent question is whether angular frequency and frequency in hertz are the same. They are not: [[omega]] is measured in radians per second and must be converted for cycles per second.

Students also often confuse high energy with faster oscillation. In this model, higher energy due to larger amplitude does not change the natural rhythm. It changes how far the system moves from equilibrium and how much energy it exchanges, not the system clock.

## Cross-cutting connections and study paths

This leaf connects with Lagrangian mechanics because the oscillator comes from kinetic energy and a quadratic potential. It connects with Hamiltonian mechanics because total energy is constant and the phase-space trajectory is closed. It also prepares normal modes, molecular vibrations, analogous circuits, and small pendulum oscillations.

A good study route is: first understand stable equilibrium and restoring force, then compute frequency and period, then interpret amplitude energy, and finally recognize when the linear model fails. This progression avoids mixing temporal response with energetic excitation.

## Final synthesis

The harmonic oscillator teaches how to read a stable system through three questions: what natural rhythm it has, how long it takes to repeat motion, and how much energy a given amplitude stores. After this leaf, you should distinguish system parameters, oscillation state, and temporal consequences, and know when the ideal model stops representing a real vibration.
`;export{e as default};
