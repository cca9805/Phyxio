const e=`# Common mistakes: Definition and Mathematical Expression\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing cause and effect\r
\r
Treating weight as a fixed input instead of an interaction result causes immediate reasoning failures. [[P]] depends on both [[m]] and [[g]].\r
\r
### Error 2: Applying formulas mechanically without context\r
\r
Using [[Pmod]] = [[m]]*[[gmod]] is valid only under suitable assumptions. If [[r]] variation is relevant, central-field treatment may be required.\r
\r
### Error 3: Mixing similar-looking magnitudes\r
\r
[[P]] versus [[Pmod]] and [[g]] versus [[gmod]] are not interchangeable. Vector and scalar forms answer different physical questions.\r
\r
## Model errors\r
\r
### Error 4: Missing model breakdown signals\r
\r
Repeated mismatch under changing radial conditions is a warning that a uniform-field approximation may be insufficient.\r
\r
### Error 5: Ignoring known model limits\r
\r
A plausible number is not enough. Reports must state which model assumptions support the result.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless rearrangements\r
\r
Small algebra mistakes in radial dependence can produce large physical errors.\r
\r
### Error 7: Unit inconsistencies\r
\r
Incorrect units for [[G]] or [[r]] generate wrong gravity and weight by orders of magnitude.\r
\r
## Interpretation errors\r
\r
### Error 8: Overstating precision\r
\r
Decimal abundance does not imply physical reliability.\r
\r
### Error 9: Stopping at a number\r
\r
A complete answer must explain causal links among [[m]], [[gmod]], [[r]], and the final value.\r
\r
## Quick self-control rule\r
\r
Check representation, assumptions, units, and causal interpretation before accepting the result.\r
\r
A practical checklist can be made explicit: verify whether the task is directional or scalar, verify whether [[gmod]] can be treated as local constant, verify whether [[r]]-dependence is relevant, and verify whether the final interpretation states why the value changed. This final sentence-level audit catches many hidden mistakes before they propagate.\r
\r
When teams standardize this checklist across exercises, failure patterns become easier to detect early. That improves conceptual learning and reduces repetitive correction cycles.\r
\r
It also improves assessment quality, because reviewers can evaluate reasoning consistency instead of only checking final numeric outputs.\r
`;export{e as default};
