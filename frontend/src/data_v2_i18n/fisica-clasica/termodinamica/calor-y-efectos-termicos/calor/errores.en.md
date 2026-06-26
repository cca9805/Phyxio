## Conceptual errors

### Error 1: Confusing heat with temperature

**Why it seems correct**

In everyday language, "more heat" and "higher temperature" are used interchangeably. An object at high temperature seems to "have a lot of heat", leading to the belief that both are the same quantity or that temperature is a measure of stored heat.

**Why it is incorrect**

Heat [[Q]] is energy in transit: it only exists during a transfer process between two systems at different temperatures. Temperature describes the thermodynamic state of the system, while [[Q]] describes an exchange. One kilogram of water at 50 °C has more internal energy than 10 grams of water at 50 °C, but both are at the same temperature. The heat exchanged when cooling each one depends on mass and specific heat capacity, not on temperature alone.

**Detection signal**

The student uses phrases like "the body contains heat" or calculates [[Q]] from the absolute temperature instead of the temperature change [[DeltaT]].

**Conceptual correction**

Heat is not stored: it is transferred. What is stored in a body is its internal energy, which depends on temperature, mass, and the nature of the material. Heat is the process, not the content.

**Contrast mini-example**

Two bodies at the same temperature of 80 °C: one of lead (1 kg) and one of water (1 kg). If both cool to 20 °C, the water releases approximately 11 times more energy than the lead, even though they started at the same temperature. Temperature was equal, but the energy released is very different.

---

### Error 2: Confusing heat with internal energy

**Why it seems correct**

In introductory thermodynamics it is said that "by absorbing heat, a body increases its internal energy". This correct relationship leads many students to believe that heat and internal energy are the same thing, or that "measuring heat" is equivalent to measuring internal energy.

**Why it is incorrect**

Internal energy is a state function: its value depends only on the thermodynamic state of the system (temperature, pressure, composition). Heat [[Q]] is a path function: its value depends on how the process is carried out. Two processes that take the same system from the same initial to the same final state can exchange different amounts of [[Q]]. Internal energy only changes by the same amount as the sum of [[Q]] plus the work exchanged.

**Detection signal**

The student claims that "the internal energy of the system equals the heat absorbed" without mentioning work, or accumulates heats from previous processes as if they were a state quantity.

**Conceptual correction**

Heat is one of the energy transfer mechanisms, not the energy itself. The change in internal energy depends on both [[Q]] and the work W exchanged: this is precisely the first law of thermodynamics. If there is no work, all energy enters as [[Q]]; if there is work, both must be added.

**Contrast mini-example**

A gas can increase its internal energy by 500 J by receiving 500 J of heat with no work, or by receiving 700 J of heat and doing 200 J of work on the surroundings. In both cases internal energy increases by 500 J, but [[Q]] differs between the two paths.

## Model errors

### Error 3: Applying sensible heat during a phase change

**Why it seems correct**

The sensible heat formula is easy to apply and always available. When a process includes a phase change, the student sometimes applies the same formula with [[DeltaT]] from initial to final temperature without separating segments, computing a sensible [[Q]] with a [[DeltaT]] that spans the transition temperature.

**Why it is incorrect**

During a phase transition, temperature remains constant even though energy is being transferred. The heat in that segment does not warm or cool the material: it reorganizes its molecular structure. If the transition is included within a single [[DeltaT]], all the latent heat energy is ignored, which can be larger than the sensible heat of all other segments combined.

**Detection signal**

The student computes [[Q]] as [[m]] · [[c_esp]] · [[DeltaT]] using initial and final temperatures that span the transition, without mentioning or calculating the latent heat [[L]] of that transition.

**Conceptual correction**

When a process crosses the transition temperature, it must be split into segments: sensible heat up to the transition temperature, latent heat at the transition, and sensible heat from the transition temperature to the final temperature. The three heats are added to obtain the total [[Q]] of the process.

**Contrast mini-example**

Heating 1 kg of ice from −10 °C to 10 °C. Applying the sensible formula directly with a [[DeltaT]] of 20 K would give about 42 kJ using water's specific heat. The correct result includes three segments and exceeds 380 kJ, with the heat of fusion (334 kJ) being the dominant component: the error would be nearly nine times.

## Mathematical errors

### Error 4: Reversing the subtraction order in the temperature change

**Why it seems correct**

In many physical formulas the order of subtraction does not matter if only the magnitude is sought. A student accustomed to working with positive quantities may subtract T_initial − T_final and obtain the same absolute value of [[DeltaT]], without noticing that the sign is the opposite.

**Why it is incorrect**

The sign of [[DeltaT]] directly determines the sign of [[Q]]. If a body cools (T_final < T_initial), [[DeltaT]] must be negative so that [[Q]] is negative and the physical result is correct: the system releases heat. Reversing the order produces positive [[Q]] in a heat-releasing process, contradicting the definition of sign.

**Detection signal**

The student obtains positive [[Q]] for a cooling process, or negative [[Q]] for a heating process. Sometimes the student notices this and adds a negative sign ad hoc without physical justification.

**Conceptual correction**

The change in any quantity is always computed as final_value − initial_value. Thus [[DeltaT]] = T_final − T_initial. This convention is universal in physics and ensures that the sign of the change reflects the direction of the change.

**Contrast mini-example**

A metal piece cools from 200 °C to 50 °C. With the correct subtraction, [[DeltaT]] is negative, [[Q]] is negative, and the result correctly indicates that the system releases heat. If subtracted the other way, [[Q]] is positive: the metal would appear to absorb heat while cooling, which is physically absurd.

## Interpretation errors

### Error 5: Interpreting a negative Q result as a calculation error

**Why it seems correct**

Students who mainly work with positive quantities tend to interpret a negative result as a sign that something went wrong. The magnitude of heat has a clear physical meaning, and the sign can seem like an arbitrary convention.

**Why it is incorrect**

The sign of [[Q]] has a precise and necessary physical meaning. Negative [[Q]] indicates that the system releases energy to the surroundings, which is a completely valid result. Ignoring the sign or taking the absolute value without justification means losing the most important information in the result: the direction of energy flow. In thermodynamics, the sign is not decorative.

**Detection signal**

The student writes "[[Q]] comes out negative, but since it is heat we take it as positive" or presents the result in absolute value adding an informal note to indicate the correct sign.

**Conceptual correction**

The sign of [[Q]] is part of the result, not an error. It must always be reported with its sign and interpreted physically: negative [[Q]] is an exothermic or heat-releasing process. The positive absolute value can be used when only the amount of exchanged energy matters, but it must be explicitly stated that the absolute value is being used.

**Contrast mini-example**

A radiator at 80 °C cools to the ambient temperature of 20 °C, releasing heat to the room. The physically correct result has negative [[Q]] (the system, the radiator, loses energy). If reported with a positive sign, the calculation suggests the room is heating the radiator, reversing the causality of the process.

## Quick self-control rule

Before accepting any heat result as correct, verify three conditions:

1. **Sign consistency**: the sign of [[Q]] must match the sign of [[DeltaT]] in sensible heat. If both have opposite signs, there is an error in the temperature subtraction or in the sign assigned to the process.

2. **Reasonable order of magnitude**: for water at atmospheric pressure, sensible heat between 0 °C and 100 °C is approximately 419 kJ per kilogram; the heat of fusion is about 334 kJ/kg and the heat of vaporization about 2 260 kJ/kg. If the result departs by more than an order of magnitude from these values for masses in the usual range, look for a unit error.

3. **Complete segments in processes with phase change**: if the process crosses the transition temperature, verify that the three heats have been added (sensible before, latent at the transition, sensible after) and not only the sensible heat of the temperature-varying segments.
