## Conceptual errors

### Error 1: Confusing quasi-static process with reversible process

**Why it seems correct**

Textbooks state that a reversible process must be quasi-static (infinitely slow). The student generalises: "if it is slow, it is reversible."

**Why it is incorrect**

A quasi-static process with friction is slow but irreversible. Friction dissipates mechanical energy as internal heat, generating entropy even if the process is infinitely slow. The quasi-static condition is necessary but not sufficient: absence of friction, spontaneous mixing, and finite gradients of any thermodynamic potential is also required.

**Detection signal**

The student classifies as reversible a slow process with friction (e.g., gas compression with a friction piston) and unexpectedly obtains [[DeltaS_univ]] > 0.

**Conceptual correction**

Reversible = quasi-static + no dissipation. If there is any source of friction, turbulence, or free mixing, the process is irreversible regardless of speed.

**Mini contrast example**

Gas compression at infinitesimal speed with frictionless piston: reversible, [[DeltaS_univ]] = 0. Same compression with friction piston: quasi-static but irreversible, [[DeltaS_univ]] > 0 because friction generates heat.

### Error 2: Believing [[DeltaS_sis]] = 0 is the reversibility condition

**Why it seems correct**

The student associates "nothing changes" with "reversible." If the system entropy does not change, it seems the process left no trace.

**Why it is incorrect**

The reversibility condition is [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]] = 0, not [[DeltaS_sis]] = 0. In a reversible isothermal expansion, [[DeltaS_sis]] > 0 (the gas gains entropy by expanding) but [[DeltaS_ent]] = −[[DeltaS_sis]] < 0 (the reservoir loses exactly the same). The process is reversible even though the system changes its entropy.

**Detection signal**

The student states that a reversible isothermal process has [[DeltaS_sis]] = 0, or that every reversible process is isentropic.

**Conceptual correction**

[[DeltaS_sis]] = 0 corresponds to a system **isentropic** process (reversible adiabatic), which is a particular case of a reversible process, not the general definition. The general definition is [[DeltaS_univ]] = 0.

**Mini contrast example**

Reversible isothermal expansion of 1 mol of ideal gas at 300 K, doubling volume: [[DeltaS_sis]] = R·ln(2) ≈ 5.76 J/(mol·K) (not zero). [[DeltaS_ent]] = −5.76 J/(mol·K). [[DeltaS_univ]] = 0 (reversible). The system changed its entropy, but the universe did not.

### Error 3: Believing a reversible process exchanges no heat or work

**Why it seems correct**

"Reversible" sounds like "nothing happens," as if the system were isolated and still. If nothing happens, there is no heat or work.

**Why it is incorrect**

In a reversible process, enormous changes can occur: the gas can expand to double its volume, absorb thousands of joules of heat, and perform significant work. What is special is not the absence of interaction, but the absence of degradation. All absorbed heat can be recovered as work, and vice versa.

**Detection signal**

The student states that a generic reversible process exchanges no heat or work, confusing it with an isolated system in equilibrium.

**Conceptual correction**

A reversible process can freely exchange heat and work. What it cannot do is generate net entropy in the universe. Reversible isothermal expansion absorbs [[Q_rev]] and performs work of the same energetic amount; reversible is not synonymous with static.

**Mini contrast example**

In a reversible isothermal expansion of two moles at 500 K that triples volume, the reversible heat is large and positive, of order 9 kJ. The process is still reversible because the gas entropy gain is compensated by the reservoir.

## Model errors

### Error 4: Assuming Carnot efficiency is achievable in practice

**Why it seems correct**

The formula [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] gives a concrete number for any pair of temperatures. The student interprets it as an achievable design target.

**Why it is incorrect**

Carnot efficiency requires infinitesimal T gradients, which implies infinitely slow heat transfer. A machine with a Carnot cycle would have zero power (infinitesimal work per cycle, infinite duration). In practice, to obtain finite power, finite gradients are needed that generate irreversibility.

**Detection signal**

The student designs a thermal system expecting to reach exactly [[eta_Carnot]] and is disappointed when real performance is 30-60% of the Carnot value.

**Conceptual correction**

[[eta_Carnot]] is a theoretical ceiling, like the speed of light in relativity. The practical optimum at maximum power is often better approximated by endoreversible Curzon-Ahlborn-type models. For typical reservoirs, those models give values much closer to real plant performance than the pure Carnot ceiling.

**Mini contrast example**

In a thermal power plant with a hot reservoir near 800 K and a cold reservoir near 300 K, [[eta_Carnot]] is a high limit, while real efficiency usually remains well below it. The endoreversible model predicts practical performance better than pure Carnot.

### Error 5: Applying the Carnot formula to non-cyclic processes

**Why it seems correct**

If [[eta_Carnot]] is the maximum efficiency of a process between two temperatures, the student applies it to any process involving those temperatures, cyclic or not.

**Why it is incorrect**

The Carnot formula is derived for **cycles** operating between two reservoirs. In a non-cyclic process (heating a block, single expansion), the system does not return to its initial state and the concept of "cycle efficiency" does not apply. For non-cyclic processes, exergy analysis is used: W_max = ΔExergy of the system.

**Detection signal**

The student calculates [[eta_Carnot]] for a block cooling in a lake and obtains a number with no clear operational meaning.

**Conceptual correction**

For non-cyclic processes, maximum extractable work is not obtained by multiplying heat by [[eta_Carnot]], but through an exergy difference between initial and final states. The Carnot formula applies only to complete cycles between two reservoirs.

**Mini contrast example**

Block at 800 K cooling to 300 K (lake): maximum extractable work is less than Q_total · [[eta_Carnot]] because the block temperature varies during the process. Integration is required, not applying the point formula.

## Mathematical errors

### Error 6: Using Celsius temperatures in the Carnot formula

**Why it seems correct**

The student knows the reservoir temperatures in degrees Celsius (e.g., 327 °C and 27 °C) and enters them directly into the formula.

**Why it is incorrect**

The formula [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] requires absolute kelvin temperatures. With Celsius: 1 − 27/327 = 0.917 (91.7%). With kelvin: 1 − 300/600 = 0.50 (50%). The error is 41.7 percentage points, completely changing the conclusion about design viability.

**Detection signal**

[[eta_Carnot]] comes out close to 90-100% for everyday temperatures. Such high efficiency is immediately suspicious.

**Conceptual correction**

Rule: always convert to kelvin before applying the formula. T(K) = T(°C) + 273.15. For the example reservoirs: [[T_caliente]] = 600 K, [[T_frio]] = 300 K, [[eta_Carnot]] = 50%.

**Mini contrast example**

Reservoirs at 500 °C and 25 °C. Celsius: 1 − 25/500 = 0.95 (95%, absurd). Kelvin: 1 − 298/773 = 0.614 (61.4%, realistic as theoretical ceiling). The difference: 33.6 points.

## Interpretation errors

These errors appear when the result is calculated correctly, but the meaning of reversibility, maximum efficiency, or the domain of Carnot is interpreted incorrectly.

## Quick self-control rule

Before accepting a reversible process result:

1. **Verify [[DeltaS_univ]] = 0**: if positive, the process is not reversible or there is an error.
2. **Verify [[DeltaS_sis]] = −[[DeltaS_ent]]**: compensation must be exact.
3. **Verify temperatures in kelvin**: if [[eta_Carnot]] > 80% for everyday temperatures, suspect Celsius.
4. **Verify eta_real ≤ [[eta_Carnot]]**: if real efficiency exceeds Carnot, there is a definite error.
5. **Verify reversibility conditions**: is there friction, finite gradients, or mixing in the problem statement? If so, the process is not reversible.
