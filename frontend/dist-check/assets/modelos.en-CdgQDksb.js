const e=`# Models for non-conservative work

## Ideal model

The ideal model compares two states of the same system and attributes the difference in mechanical energy to net non-conservative work. It does not reconstruct every instant of the motion; it closes the global balance between [[Emi]] and [[Emf]] through [[Wnc]].

This viewpoint is especially effective when the statement already provides initial and final energies, or when those energies can be built cleanly from [[Ki]], [[Ui]], [[Kf]], and [[Uf]]. The model transforms a verbal description into a precise energetic question: how much mechanical energy has entered or left the system?

## Hypotheses

- The system boundary remains fixed during the analysis.
- Initial and final states use the same potential-energy reference.
- Conservative interactions are expressed through state energies.
- Non-conservative effects are grouped into [[Wnc]] without double counting.
- The final balance admits a coherent sign interpretation for [[dEm]].

These assumptions are not decorative. If the system boundary or the energy reference changes halfway through the problem, the same number no longer describes the same physics.

## Quantitative validity domain

The model is quantitatively useful when a state balance dominates the solution. As an operational criterion, a relative difference of roughly 1 % to 5 % between input energy and final energy may be treated as a small loss in a school-level estimate, while a difference of 20 % or more requires an explicit non-conservative contribution.

Sign checks are also quantitative. If a system starts with [[Emi]] = 200 J and ends with [[Emf]] = 120 J, the balance requires a negative [[Wnc]]. If the calculation gives the opposite sign, the issue is not rounding; it is a model or system-reading error.

## Model failure signals

- The computed [[Kf]] or [[Emf]] violates a basic physical condition.
- Contributions from two different systems are mixed inside one balance.
- The result can be justified only by changing the potential-energy reference mid-solution.
- The statement requires a force strongly dependent on time or speed, yet the solver tries to obtain everything from one final balance.
- The sign of [[Wnc]] contradicts the described agent, for example a motor being treated as if it removed energy without justification.

## Extended or alternative model

When the problem asks how a non-conservative force changes along the path, an extended model is needed. Friction, drag, or motor action may require their own force law before they are summarized inside [[Wnc]]. The present leaf still provides the final energetic closure, but it is no longer enough by itself to compute the work.

If speed, time, or trajectory become essential, switch to dynamics or to a force-specific treatment. That transition does not invalidate the energetic balance; it places it at the correct level inside the solution.

## Operational comparison

The state-balance model is preferable when initial and final energies are known, or when the requested output is [[Wnc]], [[Emf]], or [[dEm]]. A force model is better when the target is acceleration, path, or work derived from a variable force. A thermal model becomes necessary when the destination of the lost mechanical energy matters.

Mature modeling does not mean choosing the same tool every time. It means recognizing that non-conservative work is the central device for closing states, while other models connect to it when the problem needs finer physical detail.
`;export{e as default};
