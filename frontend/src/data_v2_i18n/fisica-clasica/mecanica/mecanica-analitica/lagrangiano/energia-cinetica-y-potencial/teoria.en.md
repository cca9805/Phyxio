# Kinetic and Potential Energy

## Conceptual Context

Analytical mechanics does not begin by writing every force component. It first organizes the system through kinetic energy [[T]] and potential energy [[V]], expressed in suitable coordinates. This changes the way the model is read: motion and configuration become ingredients of a dynamical function.

The goal of this leaf is to build the Lagrangian [[L]] without confusing it with mechanical energy [[E]]. Although all these quantities are measured in joules, they do not play the same role. [[E]] is used for balance and conservation; [[L]] is used to generate equations of motion in the next leaf.

The graph gives a simple reading. If height [[h]] is fixed, gravitational potential energy remains constant while kinetic energy grows with speed [[v]]. This comparison shows where motion dominates and where configuration dominates.

## 🟢 Essential Level

The essential idea is that a Lagrangian model does not use arbitrary energy terms. Its kinetic and potential parts must describe the same physical system. The kinetic part represents motion; the potential part represents configuration. If references, coordinates, or systems are mixed, the later difference loses physical meaning.

Kinetic energy grows quadratically with speed. Doubling speed does not double the motion energy; it multiplies it by four. Potential energy instead depends on position, height, or deformation measured from a declared reference.

The key didactic distinction is between two questions. If the question is how much mechanical energy is stored or conserved, use the sum. If the question is how to construct the function used by Lagrangian dynamics, use the difference between motion and configuration.

## 🔵 Formal Level

Elementary translational kinetic energy is:

{{f:energia_cinetica_traslacional}}

In generalized coordinates, an effective linear form may be written through generalized velocity:

{{f:energia_cinetica_generalizada}}

In curvilinear or coupled coordinates, the advanced form uses the inertial metric matrix [[G]]. Kinetic energy then depends not on an isolated scalar mass, but on the local geometry of the coordinates:

{{f:energia_cinetica_metrica}}

Gravitational potential energy in a uniform field is:

{{f:energia_potencial_gravitatoria}}

For a linear elastic model around equilibrium:

{{f:energia_potencial_elastica}}

The mechanical Lagrangian is built as:

{{f:lagrangiano_mecanico}}

Total mechanical energy, used for conservation arguments, is:

{{f:energia_mecanica_total}}

Formally, [[T]], [[V]], [[L]], and [[E]] share the dimension of energy, but their roles are not interchangeable. Equal units do not authorize replacing one quantity with another. [[L]] subtracts configuration from motion because its later use is variational; [[E]] adds both contributions because its natural use is energetic.

It is also important to notice that the expressions for [[V]] are not universal. The gravitational form uses height and a uniform field; the elastic form uses displacement from equilibrium and stiffness. Choosing one or the other is a physical decision made before algebra begins.

## 🔴 Structural Level

The correct structure requires [[T]] and [[V]] to be written in the same coordinates. If [[T]] is expressed with [[qdi]] while [[V]] is left in an incompatible coordinate, the Lagrangian may look formally correct and still fail to describe a coherent physical system.

Reference and dynamics must also be separated. Changing the zero of [[V]] can shift the numerical value of [[L]] and [[E]], but it does not by itself change the conservative force derived from the potential. Therefore, interpreting an absolute energy value without declaring the reference is incomplete.

The third structural condition is the validity domain. The formula involving [[m]], [[g]], and [[h]] assumes a uniform field; the formula involving [[k]] and [[qi]] assumes a linear regime. If those hypotheses fail, the model is not repaired by adjusting the last number. The expression for [[V]] or the coordinate choice must change.

## Deep Physical Interpretation

[[T]] answers how much motion is present in the state. [[V]] answers how much configurational storage has been introduced by position, height, or deformation. [[L]] compares those two readings with a sign, so it can be positive, zero, or negative without automatically meaning gain or loss of energy.

The crossing [[T]] equals [[V]] has a precise reading: it marks [[L]]=0, but it does not necessarily mark rest or equilibrium. The system may have speed, height, and continuing evolution. The equality only says that the two energetic contributions have the same numerical value in that state.

This distinction prevents a common mistake: treating the Lagrangian as total energy under another name. In reality, [[E]] and [[L]] are two different combinations of the same ingredients. The first addresses conservation; the second prepares dynamical derivation.

The same state can therefore have a large positive [[E]] and a negative [[L]]. That is not a contradiction. It simply means that the model is being interrogated with two different tools: one asks about total storage, the other about the balance used for variational dynamics.

## Order of Magnitude

In a laboratory setting, a mass [[m]]=1 kg moving at [[v]]=2 m/s has [[T]] of order 2 J. The same mass at [[h]]=0.2 m on Earth has gravitational [[V]] close to 2 J. This shows that moderate speeds and small heights can compete on the same energy scale.

If a tabletop exercise returns energies around \(10^6\) J without large masses, huge heights, or high speeds, units must be reviewed. Order of magnitude protects against arithmetically possible but physically absurd results.

## Personalized Resolution Method

1. Identify the coordinate or speed that describes motion.
2. Write [[T]] in terms of that speed.
3. Declare the potential-energy reference.
4. Write [[V]] with the same coordinate or configuration.
5. Build [[L]] only after [[T]] and [[V]] are coherent.
6. Use [[E]] when the question is conservation, not as a replacement for [[L]].
7. Validate units, sign, reference, and order of magnitude.

## Special Cases and Extended Example

Special case 1: [[V]] is shifted by a constant. Mechanical energy changes its numerical value, and so does [[L]], but conservative dynamics does not change if the constant is coordinate-independent. This explains why the energy reference must be declared without turning it into a false force.

Special case 2: kinetic energy is not simply translational. In angular coordinates or coupled systems, [[T]] may include coordinate-dependent coefficients. The criterion remains the same: it must represent motion in the chosen coordinates.

Extended example: a cart climbing a ramp gains [[V]] as height increases and loses [[T]] if there is no external input. To discuss conservation, use [[E]]. To build the Lagrangian equation, express height through the travel coordinate and form [[L]].

## Real Student Questions

- **Why is [[L]] not [[E]] if both use [[T]] and [[V]]?**  
  Because they combine the same ingredients with different signs and serve different tasks.

- **Can [[L]] be negative?**  
  Yes. It only means that [[V]] exceeds [[T]] in the chosen reference.

- **When do I use elastic instead of gravitational potential energy?**  
  When configuration stores energy through deformation around equilibrium.

- **What should I review if the result is unreasonable?**  
  Review units of [[v]], reference for [[h]], sign of [[V]], and compatibility between [[qi]] and [[qdi]].

## Cross-cutting Connections and Study Paths

This leaf directly prepares Lagrange's equations. First one learns to build [[T]], [[V]], and [[L]]; then one learns to derive the equation of motion. It also connects with oscillators, pendulums, mechanical energy, and systems with generalized coordinates.

The recommended route is to study kinetic and potential energy, then Lagrange's equations, and finally symmetries or Legendre transformation. In that progression, this leaf is the bridge between familiar energy balances and analytical formulation.

## Final Synthesis

Mastering this topic means choosing and combining energy terms without confusing their roles. [[T]] describes motion, [[V]] describes configuration, [[E]] organizes conservation, and [[L]] builds dynamics. That separation is the basis of serious Lagrangian reading.
