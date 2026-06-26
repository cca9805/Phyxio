const e=`## Conceptual errors

The following errors appear when the scope of the second law, the system-surroundings boundary, or the physical meaning of entropy generation is interpreted incorrectly.
\r
### Error 1: Applying the second law to the system only\r
\r
**Why it seems correct**\r
\r
The popular statement of the second law says "entropy always increases," and the student interprets "entropy" as that of the system being studied. If they calculate [[DeltaS_sis]] < 0, they conclude the process is impossible.\r
\r
**Why it is incorrect**\r
\r
The second law applies to the **universe** (system + surroundings), not to the system alone. [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]] ≥ 0 is the correct formulation. The system can lose entropy (cool down, compress, become ordered) as long as the surroundings gain at least that same amount. A refrigerator works exactly this way: the interior loses entropy but the motor generates enough in the surroundings.\r
\r
**Detection signal**\r
\r
The student discards a process with [[DeltaS_sis]] < 0 as "impossible" without calculating [[DeltaS_ent]], or states that "the system's entropy always grows."\r
\r
**Conceptual correction**\r
\r
The correct rule is [[DeltaS_univ]] ≥ 0. To verify if a process is possible: (1) calculate [[DeltaS_sis]] as a state function, (2) calculate [[DeltaS_ent]], (3) sum them. Only if the sum is negative is the process impossible.\r
\r
**Mini contrast example**\r
\r
Steam condensation at 373 K: [[DeltaS_sis]] = −109 J/(mol·K) (system becomes ordered). [[DeltaS_ent]] = +109 J/(mol·K) (surroundings absorb latent heat). [[DeltaS_univ]] = 0 (reversible process at the limit). Not impossible: it occurs constantly in nature.\r
\r
### Error 2: Using the system's Q_rev to calculate surroundings entropy\r
\r
**Why it seems correct**\r
\r
The student has learned that [[DeltaS_sis]] = Q_rev/T and generalises: "for the surroundings I also use Q_rev/T." Since Q_rev is the heat of the reversible path, it seems coherent.\r
\r
**Why it is incorrect**\r
\r
[[DeltaS_sis]] is calculated with Q_rev because it is a state function (we need a reversible path to evaluate it). But [[DeltaS_ent]] is calculated with the **real** heat [[Q_sis]] because the surroundings, being a reservoir in equilibrium, process any heat in an internally reversible manner. For the reservoir, Q_real and Q_rev coincide. The error arises when the system's Q_rev (which differs from real Q in an irreversible process) is used to calculate surroundings entropy.\r
\r
**Detection signal**\r
\r
The student obtains [[DeltaS_univ]] = 0 for a clearly irreversible process (heat transfer at finite ΔT, free expansion). This happens because using Q_rev for both cancels the irreversibility.\r
\r
**Conceptual correction**\r
\r
For surroundings: [[DeltaS_ent]] = −Q_sys_real / [[T_ent]]. For system: [[DeltaS_sis]] is calculated via a reversible path (may use Q_rev). The asymmetry is fundamental and is the key to correct calculation.\r
\r
**Mini contrast example**\r
\r
Ideal gas expands irreversibly against constant external pressure (less than internal P). Q_real ≠ Q_rev. If Q_rev is used for surroundings: [[DeltaS_univ]] = 0 (false). If Q_real is used: [[DeltaS_univ]] > 0 (correct, the process is irreversible).\r
\r
### Error 3: Believing irreversibility requires heat transfer\r
\r
**Why it seems correct**\r
\r
Many examples of irreversibility involve heat (conduction between bodies at different T), and the best-known [[S_gen]] formula includes Q. The student generalises: "without heat, there is no irreversibility."\r
\r
**Why it is incorrect**\r
\r
Free expansion of an ideal gas is irreversible without heat or work exchange. The gas transitions from state (V_i, T) to state (V_f, T) spontaneously, and [[DeltaS_univ]] = nR·ln(V_f/V_i) > 0. Irreversibility comes from the spontaneous transition to a macrostate with more accessible microstates, not from heat flow.\r
\r
**Detection signal**\r
\r
The student states that free expansion leaves the universe entropy unchanged because no real heat is exchanged, confusing the actual process with the path used to calculate [[DeltaS_sis]].
\r
**Conceptual correction**\r
\r
[[DeltaS_sis]] is not calculated with the real-process heat, which may be zero, but with a reversible path between the same states. For free expansion, use an equivalent reversible isotherm; the system gains entropy and, because there is no real exchange with the surroundings, that gain is also the universe entropy change.
\r
**Mini contrast example**\r
\r
One mole of ideal gas freely expands until its volume doubles. Although the real heat is zero, the equivalent reversible isotherm gives a positive [[DeltaS_sis]], so [[DeltaS_univ]] is positive as well. It is an irreversible process without heat transfer.
\r
## Model errors\r
\r
### Error 4: Not correctly identifying what is "system" and what is "surroundings"\r
\r
**Why it seems correct**\r
\r
In simple problems, the system/surroundings boundary seems obvious (the block is the system, the water is the surroundings). But in problems with several interacting bodies, the student gets confused about what to include in each part.\r
\r
**Why it is incorrect**\r
\r
If the boundary is incorrectly defined, [[DeltaS_sis]] and [[DeltaS_ent]] are calculated incorrectly. For example, if two blocks are placed in contact without an external reservoir, the "universe" is just the two blocks. There is no separate "surroundings," so applying a reservoir temperature [[T_ent]] makes no sense.
\r
**Detection signal**\r
\r
The student looks for a "surroundings" temperature that does not exist in the problem, or adds contributions inconsistently (counting the same heat twice).\r
\r
**Conceptual correction**\r
\r
The thermodynamic universe includes everything that interacts during the process. If there are no external surroundings (composite isolated system), [[DeltaS_univ]] = [[DeltaS_univ]] = sum of variacion de entropia of each part. No need to find a fictitious "surroundings."\r
\r
**Mini contrast example**\r
\r
Two blocks, one hot and one cold, are put in contact and isolated from the exterior. The universe is the pair of blocks. [[DeltaS_univ]] is obtained by adding the contribution of each block and is positive; there is no separate [[DeltaS_ent]] and no [[T_ent]] to look for.
\r
### Error 5: Confusing "spontaneous process" with "process without external intervention"\r
\r
**Why it seems correct**\r
\r
The word "spontaneous" suggests the process occurs by itself, without help. The student concludes that a process requiring external work (like compressing a gas) cannot be spontaneous.\r
\r
**Why it is incorrect**\r
\r
In thermodynamics, "spontaneous" means [[DeltaS_univ]] > 0: the process generates net entropy in the universe. A compressor generates irreversibility (friction, gradients) and [[DeltaS_univ]] > 0 even though it requires work. What is "spontaneous" is the entropy generation associated with irreversibilities, not the overall process which may require energy input.\r
\r
**Detection signal**\r
\r
The student classifies gas compression as "non-spontaneous" because "it needs work," even though the complete process (including motor, fuel, and surroundings) generates entropy.\r
\r
**Conceptual correction**\r
\r
"Spontaneous" = [[DeltaS_univ]] > 0 for the complete universe (system + machine + work source + surroundings). A process can require work and still be globally irreversible.\r
\r
**Mini contrast example**\r
\r
Gas compression with friction: the gas loses entropy, but friction generates heat that warms the surroundings. [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]] + [[DeltaS_ent]] > 0. Irreversible process (spontaneous in the global thermodynamic sense) even though it requires work.\r
\r
## Mathematical errors\r
\r
### Error 6: Inverting the heat sign when calculating surroundings DeltaS\r
\r
**Why it seems correct**\r
\r
The student knows that if the system absorbs heat Q > 0, the surroundings lose it. But when writing the formula, they forget the negative sign: writing [[DeltaS_ent]] = Q/[[T_ent]] instead of −Q/[[T_ent]].\r
\r
**Why it is incorrect**\r
\r
If the system absorbs [[Q_sis]] > 0, the surroundings release that same amount. The surroundings' entropy change is [[DeltaS_ent]] = −[[Q_sis]]/[[T_ent]] < 0. Omitting the negative sign inverts the result and may give [[DeltaS_univ]] = [[DeltaS_sis]] + [[Q_sis]]/[[T_ent]] erroneously large, masking possible errors.\r
\r
**Detection signal**\r
\r
[[DeltaS_univ]] turns out to be the sum of two positive quantities in a process where clearly the surroundings should lose entropy (releases heat to system). The result is excessively positive.\r
\r
**Conceptual correction**\r
\r
Mnemonic rule: [[DeltaS_ent]] has the opposite sign to [[Q_sis]]. If the system absorbs heat ([[Q_sis]] > 0), the surroundings lose entropy ([[DeltaS_ent]] < 0). If the system releases heat ([[Q_sis]] < 0), the surroundings gain entropy ([[DeltaS_ent]] > 0).\r
\r
**Mini contrast example**\r
\r
System absorbs 1000 J from a reservoir at 300 K. Correct: [[DeltaS_ent]] = −1000/300 = −3.33 J/K. Incorrect: [[DeltaS_ent]] = +1000/300 = +3.33 J/K. The difference is 6.67 J/K in [[DeltaS_univ]], which can reverse the conclusion about the process nature.\r
\r
## Interpretation errors

These errors appear when the numerical calculation is possible, but the physical reading of the result leads to a wrong conclusion about spontaneity, the universe boundary, or exergy loss.

## Quick self-control rule
\r
Before accepting a [[DeltaS_univ]] result:\r
\r
1. **Check sign of [[DeltaS_univ]]**: must be ≥ 0. If negative, there is a definite error.\r
2. **Check sign consistency**: if the system absorbs heat, [[DeltaS_ent]] must be negative (surroundings release). If the system releases heat, [[DeltaS_ent]] must be positive.\r
3. **Verify [[DeltaS_sis]] was calculated as a state function**: regardless of the real process being irreversible; [[DeltaS_sis]] is always evaluated via a reversible path.\r
4. **Verify [[DeltaS_ent]] was calculated with Q_real**: not with the system's Q_rev.\r
5. **Check limiting case**: if ΔT → 0 (nearly reversible process), [[DeltaS_univ]] must tend to 0. If it doesn't, there is a formula error.\r
`;export{e as default};
