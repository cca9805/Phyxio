## 1. Roller-coaster Simulation

In an ideal roller coaster, the exchange between [[T]] and [[V]] explains why the cart accelerates while descending and slows while climbing. Height [[h]] sets gravitational potential energy, and speed [[v]] sets kinetic energy.

Dominant variable: comparison between [[T]] and [[V]].  
Validity limit: the ideal model ignores friction, air resistance, and wheel losses.

The application is didactic because it shows energy transfer before differential equations are introduced. If [[E]] remains approximately constant, students can predict speeds at different heights. If one wants to move toward a Lagrangian formulation along the track, [[L]] is built using the travel coordinate.

It also allows losses to be discussed in a controlled way. If measured speed is lower than conservation of [[E]] predicts, the deficit is interpreted as dissipated energy. That comparison introduces the limit of the ideal model without abandoning energy reasoning.

## 2. Mechanical Oscillator Design

In a mass-spring oscillator, elastic potential energy depends on [[k]] and [[qi]], while kinetic energy depends on [[m]] and speed. Energy alternates between motion and deformation.

Dominant variable: energy split between [[T]] and [[V]].  
Validity limit: the quadratic elastic expression is valid only near the linear regime.

This application shows why the equilibrium reference matters. If [[qi]] is not measured from elastic equilibrium, potential energy may be misread. In design, increasing [[k]] changes the scale of elastic storage and modifies the dynamical response that later appears in Lagrange's equations.

In the laboratory, measuring amplitude and speed makes it possible to check whether energy alternates consistently. When amplitude decreases cycle after cycle, the conservative model is no longer sufficient and dissipation or external forcing must be introduced.

## 3. Robotics and Generalized Coordinates

In a robotic arm, kinetic energy is not always expressed with a single Cartesian speed. It may depend on several generalized velocities [[qdi]] and an inertia matrix. Even then, the logic of this leaf remains: write [[T]], write [[V]], and build [[L]].

Dominant variable: [[L]] as the function organizing dynamics.  
Validity limit: a coherent description of masses, joints, and potential references is required.

The practical advantage is that energy compresses information about the whole mechanism. Instead of projecting every force into every joint, the energetic model helps generate equations systematically. This reduces errors in coupled mechanisms and improves controller traceability.

The same structure supports audits. If one joint responds unexpectedly, the team can inspect whether the issue lies in the kinetic term, in the gravitational potential of the links, or in a poorly defined reference.

## 4. Biomechanics of Motion

In human gait or jumping, [[T]] measures motion of the body or its segments, while gravitational [[V]] changes with elevation of the center of mass. The energy split helps compare techniques, efficiency, and energy recovery across phases.

Dominant variable: scale of [[E]] and split between [[T]] and [[V]].  
Validity limit: the real body includes muscular dissipation and tissues that are not perfectly elastic.

Although a simple model does not capture all physiology, it provides an initial reading. An efficient jump transforms muscular work into height and speed in an organized way. For advanced analysis, the Lagrangian can be extended with joint coordinates and non-conservative terms.

This use forces a separation between mechanical and biological interpretation. [[T]] and [[V]] describe mechanical states, but the body introduces muscular actuation and dissipation. The application is therefore useful for beginning analysis, not for closing it without physiological data.

## 5. Teaching Analytical Mechanics

This leaf acts as a prelude to Lagrange's equations. The teacher can show that knowing energy formulas is not enough: students must choose references, check units, and decide whether the task requires [[E]] or [[L]].

Dominant variable: conceptual difference between [[L]] and [[E]].  
Validity limit: students should already recognize kinetic and potential energy in basic contexts.

The educational value is strong because it connects secondary-school mechanics with university mechanics. Students already know mechanical energy, but now learn that the same pair [[T]] and [[V]] can organize another tool: the Lagrangian. This transition prevents analytical mechanics from looking like arbitrary notation.

For teachers, the leaf offers an assessable sequence: identify terms, validate units, declare a reference, build [[L]], and explain why [[E]] answers another question. That route reveals whether students understand physics or merely substitute values into formulas.

Taken together, these applications show that kinetic and potential energy are not isolated formulas. They are modeling pieces. When written in compatible coordinates, they allow conservation arguments, Lagrangian construction, and comparison of real scales of motion and configuration.

The shared criterion is always the same: before calculating, decide which energy represents motion, which energy represents configuration, and which combination answers the question. That discipline prevents model mixing and prepares the transition to advanced analytical mechanics.

It also gives instructors a concrete way to assess reasoning: ask for the reference, the dominant term, and the reason for choosing [[L]] or [[E]].
