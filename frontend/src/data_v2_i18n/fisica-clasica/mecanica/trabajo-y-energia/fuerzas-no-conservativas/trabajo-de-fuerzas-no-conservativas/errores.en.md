# Frequent errors in non-conservative work

## Conceptual errors

### Error 1: assuming [[Wnc]] always means energy loss

- **Why it seems correct:** early examples often use friction, where [[Wnc]] is negative.
- **Why it is incorrect:** motors and external drives are also non-conservative and may increase mechanical energy.
- **Detection signal:** the statement describes an input agent, but the solution forces a negative sign.
- **Conceptual correction:** determine the sign of [[Wnc]] from the physical agent, not from habit.
- **Mini-example:** if [[Emi]] = 80 J and [[Emf]] = 140 J, net non-conservative work is positive.

### Error 2: treating [[dEm]] as a positive accumulated loss

- **Why it seems correct:** energy change is confused with "amount lost".
- **Why it is incorrect:** [[dEm]] keeps its sign and distinguishes mechanical gain from mechanical loss.
- **Detection signal:** a decrease in mechanical energy is reported as a positive change.
- **Conceptual correction:** read [[dEm]] as a signed difference between final and initial state.
- **Mini-example:** if energy drops from 200 J to 150 J, [[dEm]] is negative.

## Model errors

### Error 3: changing the system boundary during the balance

- **Why it seems correct:** including or excluding agents may appear convenient while solving.
- **Why it is incorrect:** [[Wnc]], [[Emi]], and [[Emf]] are comparable only for the same system.
- **Detection signal:** one part of the solution treats the motor as external and another treats it as internal.
- **Conceptual correction:** fix the system at the start and keep it unchanged.
- **Mini-example:** if the motor is external, its input belongs inside [[Wnc]].

### Error 4: hiding different mechanisms inside one ambiguous datum

- **Why it seems correct:** a single total number looks simpler.
- **Why it is incorrect:** gross motor work and internal losses are not the same quantity as net non-conservative work unless explicitly defined that way.
- **Detection signal:** the final state does not match the assumed [[Wnc]], so the solver patches the result informally.
- **Conceptual correction:** state whether [[Wnc]] is net work or one specific contribution.
- **Mini-example:** motor +1200 J and losses -140 J produce net non-conservative work +1060 J.

## Mathematical errors

### Error 5: mixing energy terms from different states

- **Why it seems correct:** all quantities share energy units.
- **Why it is incorrect:** [[Ki]] and [[Ui]] build [[Emi]], while [[Kf]] and [[Uf]] build [[Emf]].
- **Detection signal:** an initial kinetic term is added to a final potential term without justification.
- **Conceptual correction:** build each state first and compare states afterward.
- **Mini-example:** do not construct initial mechanical energy with [[Ki]] and [[Uf]].

### Error 6: accepting negative [[Kf]] as a valid answer

- **Why it seems correct:** the algebra may look correct.
- **Why it is incorrect:** final kinetic energy cannot be negative in classical mechanics.
- **Detection signal:** the symbolic balance closes, but the output violates a basic physical condition.
- **Conceptual correction:** review the sign of [[Wnc]], potential references, and the reachability of the proposed final state.
- **Mini-example:** if the balance gives [[Kf]] below zero, the modeled scenario is inconsistent.

## Interpretation errors

### Error 7: ending without saying what changed physically

- **Why it seems correct:** the exercise already has a numerical answer.
- **Why it is incorrect:** this leaf requires identifying mechanical gain, mechanical loss, or effective conservation.
- **Detection signal:** the solution ends with a subtraction and no causal reading.
- **Conceptual correction:** translate the sign of [[Wnc]] and [[dEm]] into a physical statement.
- **Mini-example:** "45 J" is incomplete; "the motor adds 45 J of net mechanical energy" is physically meaningful.

## Quick self-control rule

1. Fix the system before writing any balance.
2. Build initial and final states separately.
3. Interpret [[Wnc]] through sign and mechanism.
4. Check outputs such as [[Kf]] against basic physical constraints.
5. Close with a verbal conclusion: gain, loss, or conservation of mechanical energy.
