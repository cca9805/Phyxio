const e=`## Conceptual errors

### Error 1: Believing that internal processes violate isolation

**Why it seems correct**

The student observes that things happen inside the isolated system: hot water cools the cold water, gases mix, temperatures equalize. They reason that if there is "internal activity," there must be some kind of exchange with the exterior. The incorrect analogy is that of a black box: "if something happens inside, it must come from outside."

**Why it is incorrect**

Isolation only governs exchanges through the **boundary** of the system with its surroundings. Internal processes —mixing, thermal redistribution, reactions— are reorganizations of the energy already present in the system. They do not add or remove energy from the total system. The first law applied to the isolated system establishes that [[DeltaU]] is zero regardless of how many internal processes occur.

**Detection signal**

The student writes that [[DeltaU]] is non-zero arguing that "there was an internal reaction" or "the fluids mixed." The clearest signal is justifying non-zero [[DeltaU]] by referencing a process that occurs inside, not through, the boundary.

**Conceptual correction**

The isolated system condition is a property of the **boundary**, not of the interior. If the boundary is adiabatic, rigid, and impermeable, then [[Q_ais]] and [[W_ais]] are zero and [[DeltaU]] is zero, regardless of what happens inside. Internal processes affect the distribution of energy, not its total.

**Contrast mini-example**

An explosive detonates inside a perfectly isolated, rigid container. The explosion is an extremely violent internal process. Even so, [[DeltaU]] of the complete system is zero: chemical energy converted to kinetic and thermal energy, but none crossed the boundary. The temperature of the resulting gas will be extremely high, but the total energy of the system is the same as before the detonation.

---

### Error 2: Confusing internal temperature with heat exchange

**Why it seems correct**

The student associates high temperature with "a lot of heat leaving" and low temperature with "a lot of heat entering." If the system is at 500 °C, it seems inevitable that it "releases heat" to the surroundings. The cognitive confusion mixes the thermal state of the system (temperature) with a transfer process (heat).

**Why it is incorrect**

Heat [[Q_ais]] is an energy transfer through the boundary, not a state property of the system. A system at 500 °C with a perfectly adiabatic boundary has strictly zero [[Q_ais]]. The internal temperature describes how much energy the system has, not whether that energy is flowing outward. Heat flow depends on the temperature gradient across the boundary and the conductivity of that boundary, not on the interior temperature.

**Detection signal**

The student writes that [[Q_ais]] is positive or negative arguing that "the system is hot" or "there is a lot of energy inside." The reasoning starts from the interior temperature instead of the boundary properties.

**Conceptual correction**

[[Q_ais]] is zero if and only if the boundary is adiabatic. Internal temperature does not determine [[Q_ais]]. To compute [[Q_ais]], one must analyze the boundary properties (thermal conductivity, area, exterior-interior temperature gradient), not the internal state of the system.

**Contrast mini-example**

A Dewar filled with liquid nitrogen at −196 °C and another empty Dewar at room temperature. Both have adiabatic boundaries. In both [[Q_ais]] ≈ 0 over short times, even though the temperature difference between interior and exterior is enormous in the nitrogen case. The boundary insulation, not the interior temperature, determines [[Q_ais]].

---

## Model errors

### Error 3: Applying the isolated system model when the boundary does not meet the conditions

**Why it seems correct**

In a problem that says "closed container," the student automatically assumes an isolated system. The word "closed" intuitively suggests that nothing can enter or leave. Moreover, in many basic-level problems, closed containers are treated as isolated for simplicity, incorrectly generalizing that practice.

**Why it is incorrect**

A "closed" container in thermodynamics defines a **closed system**, not an isolated system. A closed system allows exchange of heat and work with the surroundings, even though it does not exchange matter. To be an isolated system, the container must also be adiabatic (no conduction, convection, or thermal radiation) and rigid (no volume change). A glass container closed in a room, for example, exchanges heat with the room air: it is not an isolated system.

**Detection signal**

The student applies zero [[DeltaU]] to a thin-walled or conducting container, or to a process lasting many hours in an environment at a different temperature. The signal is using the isolated model without explicitly verifying the boundary properties.

**Conceptual correction**

Before applying the isolated system model, verify three boundary conditions: adiabatic (no heat flow), rigid (no pressure-volume work), and impermeable (no matter flow). If any of these three conditions fails, the appropriate model is a closed or open system, depending on which exchanges do occur.

**Contrast mini-example**

A cup of hot water covered with a plate. The student treats it as an isolated system and calculates zero [[DeltaU]]. But in 30 minutes, the water loses several kJ of heat to the plate and the surrounding air. [[DeltaU]] is negative, not zero. The correct model is a closed system with negative [[Q_ais]] (heat released to the surroundings).

---

### Error 4: Believing that the entropy of an isolated system can decrease

**Why it seems correct**

The student remembers that "in some processes entropy decreases" —for example, when a gas is cooled, its entropy decreases. They reason that if it can decrease in that case, it can also decrease in an isolated system if the "right" process occurs. The incorrect generalization ignores that in the examples they know, the decrease in system entropy is always accompanied by a larger increase in the surroundings.

**Why it is incorrect**

In an isolated system there are no surroundings to compensate. The Clausius-Planck inequality establishes that [[S_ais]] is greater than or equal to zero for any process in an isolated system, without exception. When a gas is cooled in an open container, the decrease in gas entropy is possible because the heat released to the surroundings increases the entropy of the surroundings by a greater amount. In an isolated system, that compensation mechanism does not exist.

**Detection signal**

The student obtains negative [[S_ais]] and accepts it without review, or argues that the process "orders" the system and therefore [[S_ais]] can be negative. The signal is not questioning the negative sign of [[S_ais]] in a declared isolated system.

**Conceptual correction**

Negative [[S_ais]] in an isolated system is always an error. The correction is to review whether the system is truly isolated, whether the entropy calculation is correct, or whether the entropy of the system has been confused with the entropy of the surroundings. The entropy of the universe (system plus surroundings) may have been what was incorrectly evaluated.

**Contrast mini-example**

A calculation yields [[S_ais]] of −50 J/K when mixing two gases in an isolated container. This result is impossible and reveals an error. The entropy of mixing of gases is always positive. If the result is negative, a sign error has been made in the expression used, or the entropy of the reverse process (forced separation) has been calculated instead.

---

## Mathematical errors

### Error 5: Incorrectly applying the energy balance by not nullifying [[Q_ais]] and [[W_ais]] separately

**Why it seems correct**

The student remembers that "in an isolated system [[DeltaU]] is zero" and applies that condition directly without decomposing the first law into its two terms. In problems with numerical temperature data, they may substitute zero [[DeltaU]] without verifying whether [[Q_ais]] and [[W_ais]] are truly zero, leading to incomplete balances.

**Why it is incorrect**

The first law states that [[DeltaU]] is the sum of [[Q_ais]] and [[W_ais]]. To conclude that [[DeltaU]] is zero, one must first justify independently that [[Q_ais]] is zero (adiabatic boundary) and [[W_ais]] is zero (rigid boundary). If the student assumes zero [[DeltaU]] without verifying both conditions, they may overlook situations where one transfer compensates the other, yielding zero [[DeltaU]] by cancellation —which is not an isolated system, but a coincidence.

**Detection signal**

The student writes directly "isolated system, therefore [[DeltaU]] is zero" without any mention of [[Q_ais]] and [[W_ais]] individually. The verification step for each boundary condition is missing.

**Conceptual correction**

The correct procedure is: (1) verify that [[Q_ais]] is zero from the adiabatic condition of the boundary; (2) verify that [[W_ais]] is zero from the rigid boundary condition; (3) conclude that [[DeltaU]] is zero by the first law. Steps 1 and 2 cannot be skipped.

**Contrast mini-example**

A container with an internal piston and heat-conducting walls. The heat entering is positive and the work the system does compressing something external is equal in magnitude. The sum gives zero [[DeltaU]], but the system is not isolated: there are heat and work exchanges that cancel out. Treating it as an isolated system because [[DeltaU]] is zero would be a serious modeling error.

---

## Interpretation errors

### Error 6: Interpreting the equilibrium of an isolated system as a state with no microscopic motion

**Why it seems correct**

The student associates "equilibrium" with "stillness" or "rest." If the isolated system at equilibrium has uniform temperature and uniform pressure, it seems that "nothing moves." The macroscopic image of uniformity is incorrectly translated into microscopic inactivity.

**Why it is incorrect**

Thermodynamic equilibrium is a macroscopic state of uniformity of intensive properties (temperature, pressure, chemical potential), not a state of microscopic inactivity. At the microscopic level, molecules continue to move, collide, and exchange energy at great speed. Equilibrium is the most probable statistical state, in which microscopic fluctuations average to macroscopically constant values. [[S_ais]] reaches its maximum precisely because the number of accessible microstates is at its greatest.

**Detection signal**

The student describes the equilibrium state of the isolated system as "static," "inactive," or "without processes," confusing macroscopic invariance with microscopic inactivity. Or they interpret that [[S_ais]] stops growing because "there is nothing left to happen."

**Conceptual correction**

Thermodynamic equilibrium is the condition in which the macroscopic state variables (temperature, pressure, composition) are uniform throughout the system and do not change over time. At the microscopic level, molecular activity is at its maximum in that state: the system is constantly exploring all its accessible microstates with equal probability. [[S_ais]] is at its maximum because the number of accessible microstates is at its maximum.

**Contrast mini-example**

A perfect gas at equilibrium in an isolated system has all its molecules moving at varying speeds according to the Maxwell-Boltzmann distribution. If we imagine "freezing" the molecular motion, the gas would be in the state of minimum possible entropy, not equilibrium. Equilibrium requires intense microscopic activity, not inactivity.

---

## Quick self-control rule

To verify that a calculation about an isolated system is correct, check these five conditions before giving the answer as valid:

1. Is it explicitly justified that [[Q_ais]] is zero by mentioning the adiabatic property of the boundary?
2. Is it explicitly justified that [[W_ais]] is zero by mentioning the rigidity of the boundary?
3. Is the result of [[DeltaU]] zero, or is there an explanation for why it might not be in the case studied?
4. Is the result of [[S_ais]] greater than or equal to zero? If it is negative, there is an error in the calculation or in the system definition.
5. Have the internal processes described (mixing, reaction, redistribution) been treated as internal reorganizations and not as exchanges with the surroundings?

If any of these five checks fails, the analysis has at least one conceptual or mathematical error to correct before concluding.
`;export{e as default};
