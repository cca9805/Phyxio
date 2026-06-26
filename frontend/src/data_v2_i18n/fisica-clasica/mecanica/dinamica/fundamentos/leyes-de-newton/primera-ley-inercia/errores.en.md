# Errores frecuentes: Newton's First Law (Inertia)

## Conceptual errors

### Error 1: Mixing cause and effect

**Why it seems plausible**: visible motion invites the intuition that a forward net force must be present.

**Why it is incorrect**: first law links state change to [[F_net]], not to motion itself. A body may keep nonzero [[v]] with zero-compatible [[a]].

**Mini contrast example**: an air-track glider keeps nearly constant speed while net-force reading stays around zero.

**Self-correction heuristic**: ask whether velocity is changing, not only whether position changes.

### Error 2: Applying formulas without context validation

**Why it seems plausible**: memorized equations feel universal.

**Why it is incorrect**: if frame or system definition is wrong, [[F_net]] interpretation is physically invalid.

**Mini contrast example**: treating an accelerating elevator as inertial creates a false equilibrium reading.

**Self-correction heuristic**: declare frame and system before symbolic substitution.

### Error 3: Confusing similar magnitudes

**Why it seems plausible**: zero resultant sounds like zero forces; zero acceleration sounds like rest.

**Why it is incorrect**: balanced nonzero forces can still produce [[F_net]] near zero, and [[a]] near zero can coexist with constant nonzero [[v]].

**Mini contrast example**: balanced block on a table and a skater moving at nearly constant speed.

**Self-correction heuristic**: separate force balance, acceleration state, and velocity value.

## Model errors

### Error 4: Missing model-break conditions

**Why it seems plausible**: ideal models work in many textbook cases.

**Why it is incorrect**: small disturbances can accumulate and produce measurable drift over longer windows.

**Mini contrast example**: cart appears inertial over 1 s, but loses measurable speed over 20 s.

**Self-correction heuristic**: set time window and tolerance before claiming inertial regime.

### Error 5: Ignoring known model limits

**Why it seems plausible**: the law is remembered as unconditional.

**Why it is incorrect**: first-law reading requires inertial frame assumptions and valid scale control.

**Mini contrast example**: curved-path vehicle with lateral acceleration is not a pure inertial straight-line case.

**Self-correction heuristic**: write explicit validity conditions and test them against data.

## Mathematical errors

### Error 6: Careless algebraic manipulation

**Why it seems plausible**: symbolic steps are performed by routine.

**Why it is incorrect**: a formally correct manipulation can still lead to wrong physical conclusion if assumptions are mixed.

**Mini contrast example**: wrong mass value yields acceleration inconsistent with measured near-constant speed.

**Self-correction heuristic**: verify units and causal meaning after each algebraic step.

### Error 7: Unit-discipline failure

**Why it seems plausible**: conversion is treated as secondary detail.

**Why it is incorrect**: one conversion mistake can change threshold decisions and model choice.

**Mini contrast example**: mixing cm/s and m/s inflates reported speed drift by two orders of magnitude.

**Self-correction heuristic**: convert to SI at the beginning and keep a unit table while solving.

## Interpretation errors

### Error 8: Overstating precision

**Why it seems plausible**: more decimals look more scientific.

**Why it is incorrect**: true precision is limited by measurement uncertainty and model simplification.

**Mini contrast example**: reporting [[a]] with four decimals when sensor quality supports only two useful digits.

**Self-correction heuristic**: align significant figures with uncertainty and model scope.

### Error 9: Skipping physical interpretation

**Why it seems plausible**: obtaining a number feels like completion.

**Why it is incorrect**: without causal reading, the result does not answer the physical question.

**Mini contrast example**: computing small speed drift but not deciding whether it is noise or real dynamic change.

**Self-correction heuristic**: end with explicit causal conclusion: conserved inertial state or transition to non-equilibrium dynamics.

## Quick self-control rule

1. Frame and system are explicitly declared.
2. [[F_net]] reading is justified by data and tolerance.
3. Consistency between [[a]] and [[v]] is checked.
4. Model limits are written before final claim.
5. Final statement is physically interpreted, not only numeric.
