# Models — Brayton and Rankine Cycles

## Ideal model

The reference model for both cycles assumes internally reversible processes, ideal working fluid and lossless components. For the Brayton cycle this means four processes: reversible adiabatic compression (1→2), isobaric heat addition (2→3), reversible adiabatic expansion (3→4) and isobaric heat rejection (4→1). For the standard Rankine: reversible adiabatic pumping (1→2), isobaric heating with phase change (2→3→4), reversible adiabatic expansion (4→5) and isobaric condensation (5→1).

## Hypotheses

The hypotheses that sustain the ideal model are:

- Each component (compressor, turbine, pump) operates at 100 % isentropic efficiency.
- There are no pressure drops in the combustion chamber, boiler or condenser.
- The working fluid is an ideal gas with constant properties (Brayton) or pure water in thermodynamic equilibrium (Rankine).
- There are no heat losses to the environment outside the intended addition and rejection processes.
- Compression and expansion processes are adiabatic and reversible (isentropic).

## Quantitative validity domain

The ideal model is quantitatively valid when:

- The isentropic efficiency of the compressor and turbine exceeds 85 %. Below that threshold, the real cycle deviates significantly from the ideal.
- [[r_p]] is in the range 4–40 for Brayton. For values above 50, [[gamma]] variation with temperature causes the constant-properties model to underestimate compression work by more than 10 %.
- [[T_H]] does not exceed 1600 K in Brayton. Above that, N₂ and O₂ dissociation effects change the gas composition and alter [[gamma]].
- Steam quality at the end of Rankine expansion exceeds 85 %. With higher moisture, blade erosion invalidates the reversible model and real efficiency drops sharply.

## Model failure signals

When the ideal model ceases to be appropriate:

- The measured real efficiency is more than 30 % below the calculated ideal efficiency: irreversibilities are so large that the ideal model is no longer a reliable guide.
- The Brayton compressor outlet temperature is so high that it approaches the turbine inlet temperature: the useful heat addition range vanishes and [[W_neto]] collapses.
- Steam leaves the Rankine expander with moisture above 15 %: droplet entrainment erodes the blades and the isentropic model no longer describes the expansion.

## Extended or alternative model

When more realistic models are warranted, the transition occurs upon exceeding the limits of the ideal model:

**Brayton with variable properties:** when [[r_p]] > 20 and [[T_H]] > 1300 K, values of [[gamma]] and the specific heat at constant pressure vary significantly with temperature. Analysis by numerical integration or air property tables gives more accurate results than the closed-form ideal cycle formula.

**Brayton with regeneration:** a heat recuperator transfers energy from the hot exhaust gases to the compressed air before it enters the combustion chamber. This reduces [[Q_H]] without changing [[W_neto]], improving [[eta_th]]. The regenerator effectiveness (fraction of the maximum transferable heat that is actually transferred) is typically between 70 % and 85 %.

**Rankine with reheating and regeneration:** intermediate reheating increases [[W_neto]] and protects the last-stage blades. Regeneration via steam extraction reduces [[Q_H]] by preheating the feedwater. High-efficiency plants combine up to seven regenerative extractions.

**Combined cycle (Brayton + Rankine):** the combined cycle model sums [[W_neto]] from both cycles and uses only the Brayton [[Q_H]] as the primary energy input. The overall [[eta_th]] exceeds 55 % because the residual energy from the Brayton that would be rejected as [[Q_C]] becomes useful input to the Rankine.

## Operational comparison

| Criterion | Ideal Brayton cycle | Ideal Rankine cycle |
|---|---|---|
| Working fluid | Gas (air) | Steam |
| Efficiency parameter | [[r_p]] and [[gamma]] | [[T_H]], [[T_C]], improvements |
| Compression work | High (40–60 % of gross) | Minimal (< 2 % of gross) |
| Typical real [[eta_th]] | 35–42 % | 33–47 % with improvements |
| Maximum temperature | Up to 1700 K (with cooling) | Up to 900 K (materials) |
| Dominant application | Gas turbines, aviation | Power plants, nuclear |
| Main improvement | Reheating, regeneration, combined cycle | Reheating, multiple regeneration |
