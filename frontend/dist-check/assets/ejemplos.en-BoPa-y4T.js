const e=`# Exam-type example

## Problem statement

A long thin straight wire carries uniform linear charge density. Known data: [[lambda]] is 8 nC/m; ε₀ is 8.85 × 10⁻¹² C²/(N·m²). Required: (a) compute the electric field [[E]] at [[r_dist]] = 5 cm from the wire, far from its ends; (b) find the distance [[r_dist]] at which [[E]] is half the previous result; (c) determine the surface charge density [[sigma]] of an infinite plane that produces the same field as obtained in (a).

## Data

- [[lambda]] is 8 nC/m (equivalent to 8 × 10⁻⁹ C/m)
- [[r_dist]] in part (a) is 5 cm (equivalent to 0.05 m)
- ε₀ is 8.85 × 10⁻¹² C²/(N·m²)
- The wire is much longer than the observation distance
- The charge is distributed only along the wire surface (no [[rho_vol]] applies here); the volumetric description is irrelevant because the distribution is linear

## System definition

Reference frame: origin at the wire point closest to the field point; z-axis along the wire; r-axis radial perpendicular to the wire. The field point lies on the r-axis at distance [[r_dist]] from the wire. By cylindrical symmetry, [[E]] has no axial or azimuthal component: only the radial component is non-zero.

## Physical model

The wire length is much greater than [[r_dist]] = 5 cm, so the **infinite wire model with uniform [[lambda]]** applies. Contributions [[dE]] from wire elements have axial components that cancel by symmetry; only the net radial component is non-zero and is integrated over the full length. For part (c) the **infinite plane model with uniform [[sigma]]** applies. If the source were a charged solid body instead of a wire, the relevant density would be [[rho_vol]] and the integral would extend over three dimensions.

## Model justification

The infinite wire model is valid when [[r_dist]] is much smaller than the wire length. With [[r_dist]] = 5 cm and a wire of metric or greater length, the condition is amply satisfied. The model would cease to be valid if [[r_dist]] were comparable to the wire length: in that case [[dE]] would need to be integrated over the finite length and the result would be smaller than the infinite-wire prediction.

## Symbolic solution

**Part (a):** the radial field of an infinite wire is obtained by integrating contributions [[dE]] with cylindrical symmetry:

{{f:campo_hilo_infinito}}

**Part (b):** from the same formula, [[E]] is inversely proportional to [[r_dist]]. If [[E]] is halved, [[r_dist]] doubles, since their product is constant for fixed [[lambda]].

**Part (c):** the field of an infinite plane perpendicular to the r-axis does not depend on [[r_dist]]:

{{f:campo_plano_infinito}}

Setting this equal to [[E]] from part (a) and solving for [[sigma]] gives the required surface density.

## Numerical substitution

**Part (a):** the denominator of the infinite wire formula is the product 2π times ε₀ times [[r_dist]]. Multiplying 2π by 8.85 × 10⁻¹² gives approximately 55.6 × 10⁻¹²; multiplying by 0.05 gives 2.78 × 10⁻¹². Dividing [[lambda]] = 8 × 10⁻⁹ by 2.78 × 10⁻¹² gives [[E]] ≈ 2878 V/m. So [[E]] ≈ 2.88 kV/m.

**Part (b):** since [[E]] varies inversely with [[r_dist]], obtaining half the field requires doubling the distance. Therefore [[r_dist]] ≈ 10 cm.

**Part (c):** solving for [[sigma]] from the infinite plane formula, [[sigma]] equals 2 times ε₀ times [[E]]. Multiplying 2 by 8.85 × 10⁻¹² by 2878 gives [[sigma]] ≈ 51 × 10⁻⁹ C/m². So [[sigma]] ≈ 51 nC/m².

## Dimensional validation

**Part (a):** units of [[lambda]] are C/m; of ε₀ are C²/(N·m²); of [[r_dist]] are m. The denominator 2πε₀ · [[r_dist]] has units \`[C² N⁻¹ m⁻¹]\`. Dividing C/m by C² N⁻¹ m⁻¹ gives \`[N C⁻¹]\`, equivalent to V/m ✓

**Part (c):** ε₀ · [[E]] has units \`[C² N⁻¹ m⁻²] · [N C⁻¹]\` simplifying to C/m². Multiplying by the numerical factor 2 preserves C/m² ✓

## Physical interpretation

Part (b) illustrates the 1/r law of the wire directly: doubling [[r_dist]] divides [[E]] by exactly two. This implies that [[E]] depends solely on [[lambda]] and [[r_dist]], and that any change in distance translates inversely and proportionally into the field. The linear geometry of the source is physically consistent with a slower decay than the point charge: the extended source dominates the radial direction and retains the field more effectively. This same 1/r law governs safety zones around high-voltage cables and the field inside cylindrical capacitors.

Part (c) indicates that the same [[E]] amplitude can be obtained from completely different geometries. The plane field is physically meaningful: [[sigma]] determines the amplitude and the planar symmetry means the field neither increases nor decreases with [[r_dist]]. For a volumetric distribution, [[rho_vol]] would govern the field analogously but with integration over three dimensions.

# Real-world example

## Context

A horizontal high-voltage cable 200 m long carries an accumulated charge of 1.6 μC under low-humidity conditions. A technician works with a sensitive measuring instrument that may be damaged if [[E]] exceeds 500 V/m. The minimum safe distance at which the technician can work from the cable must be determined.

## Physical estimation

The cable length (200 m) far exceeds the technician's typical working distances (of the order of metres), so the infinite wire model with uniform [[lambda]] is appropriate. The linear density is obtained by dividing the total charge by the length: 1.6 × 10⁻⁶ C divided by 200 m gives [[lambda]] ≈ 8 × 10⁻⁹ C/m.

Applying the infinite wire field formula:

{{f:campo_hilo_infinito}}

and solving for [[r_dist]] with [[E]] equal to the limit of 500 V/m: the denominator 2π × 8.85 × 10⁻¹² × 500 gives approximately 27.8 × 10⁻⁹. Dividing [[lambda]] = 8 × 10⁻⁹ by 27.8 × 10⁻⁹ gives [[r_dist]] ≈ 0.288 m. The minimum safe distance is approximately 29 cm.

## Interpretation

The minimum safety distance of 29 cm is governed primarily by [[lambda]]: if the transported charge doubled to 16 nC/m, the minimum distance would also double to 58 cm, illustrating the linear proportionality between [[lambda]] and [[r_dist]] at fixed field. Equally, if the instrument limit dropped to 250 V/m, the distance would double as well. This allows the technician to scale the safe distance quickly: multiply the reference distance by the ratio of the actual [[lambda]] to the reference [[lambda]], or by the ratio of the reference limit to the actual instrument limit.
`;export{e as default};
