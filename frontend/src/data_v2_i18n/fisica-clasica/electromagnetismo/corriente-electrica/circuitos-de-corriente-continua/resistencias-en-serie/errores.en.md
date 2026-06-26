## Conceptual errors

A frequent conceptual mistake is to think [[corriente]] is depleted after crossing each resistor. In a strict series path, [[corriente]] is common, while local behavior appears through distributed [[caida_de_tension]]. If a student reports different branch currents inside a one-path chain, the issue is conceptual, not algebraic.

Another conceptual confusion is mixing series and parallel rules. In passive series, [[resistencia_equivalente]] should not be smaller than a positive individual element. If that happens, topology assumptions were mixed or unit conversion was broken.

## Model errors

One major model error is to use ideal allocation while the output stage is strongly loaded. In that case, effective topology changes and ideal distribution no longer holds. A practical symptom is output [[caida_de_tension]] collapsing when load is attached.

A second model error is ignoring thermal drift in [[resistencia_generica]]. If parameters drift with heating, a static one-pass prediction can diverge from measured operation over time. Model validity must be checked against observed stability.

## Mathematical errors

The most common mathematical error is unit inconsistency between ohm and kiloohm. This can inflate or deflate [[corriente]] by orders of magnitude while still looking numerically tidy.

Another mathematical error is skipping loop-closure verification with [[tension_total]]. Intermediate numbers may look plausible, but without closure, sign and substitution mistakes remain hidden.

## Interpretation errors

A typical interpretation error is to conclude that lower global [[corriente]] always means safer operation. Local stress can still increase if one element captures a larger drop [[caida_de_tension]]. Good interpretation combines global and local variables.

Another interpretation error is to stop at arithmetic output without discussing model boundaries. Real reliability depends on load interaction, tolerance spread, and thermal conditions, not only on nominal equations.

## Quick self-control rule

Use this short control sequence before accepting any answer:
1. Confirm strict series topology.
2. Normalize units for [[resistencia_uno]], [[resistencia_dos]], [[resistencia_tres]], [[resistencia_generica]], and [[tension_total]].
3. Compute [[resistencia_equivalente]] and verify physical plausibility.
4. Compute [[corriente]] and check scale.
5. Compute each [[caida_de_tension]] and check distribution logic.
6. Perform loop closure against [[tension_total]].
7. Decide whether ideal assumptions are still valid under load and temperature.

Following this checklist usually removes the majority of conceptual, model, and arithmetic errors in introductory and intermediate series-circuit analysis.