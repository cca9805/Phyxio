## Conceptual errors


### Error 1: Confusing interference with diffraction

**Why it seems correct**

Both phenomena produce patterns of varying intensity on the screen and both involve waves passing through apertures. The student perceives them as manifestations of the same effect.

**Why it is incorrect**

Interference is the superposition of waves from discrete coherent sources (two or more slits), while diffraction is the propagation of waves through an aperture or around an obstacle. Their mathematical descriptions are different: interference produces equally spaced fringes modulated by cosine squared, while diffraction produces a sinc-squared envelope centred on the central maximum.

**Detection signal**

The student uses the fringe position formula [[y_m]] = [[orden_de_la_franja]] × [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]] substituting [[separacion_entre_rendijas]] with the slit width instead of the slit separation.

**Conceptual correction**

Clearly distinguish between [[separacion_entre_rendijas]] as slit separation (interference parameter) and slit width (diffraction parameter). Single-slit diffraction produces a broad centred pattern, while double-slit interference produces multiple fringes within that envelope.

**Contrast mini-example**

With a single slit of width 0.1 mm illuminated with [[lambda]] = 600 nm at distance [[distancia_a_la_pantalla]] = 1 m, the first diffraction minimum is at 6 mm from the centre. With two slits separated [[separacion_entre_rendijas]] = 0.5 mm, interference fringes are separated by 1.2 mm. If the student confuses both phenomena and uses 0.1 mm as [[separacion_entre_rendijas]], they obtain fringes separated by 6 mm, confusing the diffraction minimum with an interference fringe.

**Mini-example of contrast**

Check 1: In Interference of Light, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Adding intensities instead of amplitudes

**Why it seems correct**

In everyday experience, two light sources illuminating the same area produce greater brightness. The student generalises this observation by directly adding intensities.

**Why it is incorrect**

Electric field amplitudes add vectorially, not intensities. Intensity is proportional to the square of the total amplitude, generating cross terms that depend on relative phase. These terms are responsible for the fringes.

**Detection signal**

The student predicts a uniformly illuminated screen with intensity equal to the sum of individual intensities, without dark fringes.

**Conceptual correction**

Total intensity contains an interference term proportional to the cosine of the phase difference. This term oscillates between positive and negative values, generating maxima where relative phase is zero and minima where it is π.

**Contrast mini-example**

Two beams of equal intensity added in intensity always give 2 × I₀ at every point. Added in amplitude they give 4 × I₀ at maxima and 0 at minima. Total integrated energy is the same in both cases, but spatial distribution is radically different.

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Ignoring the coherence condition

**Why it seems correct**

The student sees two beams of light superposing and expects to observe fringes, as in Young's experiment, regardless of the nature of the sources.

**Why it is incorrect**

Interference requires a stable phase relationship over time. Two independent sources fluctuate in an uncorrelated manner, producing a pattern that changes too rapidly to be observed, averaging to uniform illumination.

**Detection signal**

The student proposes experiments with two independent lamps or lasers separated expecting to observe stable fringes.

**Conceptual correction**

Coherence is an indispensable requirement. Methods to obtain coherent beams include wavefront division (Young's double slit), amplitude division (Michelson interferometer) or use of a single source for both beams.

**Contrast mini-example**

Two laser pointers aimed at the same point on a wall do not produce visible fringes because their oscillators are independent. The same laser divided by a double slit produces perfectly visible stable fringes, because both beams come from the same coherent source.

## Model errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Using the small-angle approximation for high orders

**Why it seems correct**

The formula [[y_m]] = [[orden_de_la_franja]] × [[lambda]] × [[distancia_a_la_pantalla]] / [[separacion_entre_rendijas]] is simple and direct. The student applies it for any value of [[orden_de_la_franja]] without verifying its validity range.

**Why it is incorrect**

The approximation sin(θ) ≈ θ is only valid for angles below 0.1 radians. For high orders where [[orden_de_la_franja]] × [[lambda]] / [[separacion_entre_rendijas]] exceeds 0.1, error grows rapidly and the real position differs significantly from that predicted by the linear formula.

**Detection signal**

The student obtains values of [[y_m]] approaching or exceeding [[distancia_a_la_pantalla]], or implicitly calculates angles above 6 degrees without recognising the invalidity of the approximation.

**Conceptual correction**

Verify that [[orden_de_la_franja]] × [[lambda]] / [[separacion_entre_rendijas]] < 0.1 before using the approximation. For high orders, use the exact expression with arcsine.

**Contrast mini-example**

For [[separacion_entre_rendijas]] = 0.1 mm and [[lambda]] = 600 nm, order [[orden_de_la_franja]] = 100 gives an angle sin(θ) = 0.6, equivalent to 37 degrees. The linear formula predicts [[y_m]] = 1.2 m for [[distancia_a_la_pantalla]] = 2 m. The exact expression gives [[y_m]] = 2 m × tan(37°) = 1.5 m, a 25% error.

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Confusing units between nanometres, millimetres and metres

**Why it seems correct**

Problem data come in convenient units: [[lambda]] in nm and [[separacion_entre_rendijas]] in mm. The student enters them directly into the formula without converting.

**Why it is incorrect**

Formulas require unit consistency. Mixing nm and mm without converting to metres produces error factors of up to 10⁶ in the result.

**Detection signal**

The student obtains fringe separations of the order of metres or kilometres, or of the order of nanometres, absurd values for a laboratory setup.

**Conceptual correction**

Convert all quantities to metres before substituting. Verify that the resulting fringe separation is in the millimetre range for typical laboratory parameters.

**Contrast mini-example**

With [[lambda]] = 600 nm and [[separacion_entre_rendijas]] = 0.5 mm at [[distancia_a_la_pantalla]] = 1.5 m: using correct units, [[separacion_entre_franjas_consecutivas]] = 6 × 10⁻⁷ × 1.5 / (5 × 10⁻⁴) = 1.8 mm. If the student uses 600 and 0.5 without converting, they obtain 600 × 1.5 / 0.5 = 1800 meaningless units.

## Interpretation errors

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 6: Interpreting minima as absence of light from one source

**Why it seems correct**

The student reasons geometrically: if there is a dark point, it must be because light from one slit does not reach there, like a shadow.

**Why it is incorrect**

Light from both slits reaches all points on the screen. Minima occur because waves arrive in antiphase and cancel vectorially, not because one is missing. Destructive interference is an amplitude cancellation phenomenon, not geometric blocking.

**Detection signal**

Explanations such as "at that point only light from one slit arrives" or "the other slit is in shadow there".

**Conceptual correction**

Energy does not disappear at minima; it is redistributed towards maxima. If one slit is blocked, intensity at the former minima increases, demonstrating that both slits were contributing light to those points.

**Contrast mini-example**

With both slits open, a minimum has zero intensity. When one slit is blocked, that same point has intensity I₀, demonstrating that light was arriving but cancelling with that from the other slit.

## Quick self-control rule

Before accepting a result about interference, verify the following conditions. Fringe separation must be in the millimetre range for typical laboratory parameters. The order [[orden_de_la_franja]] must be integer for perfect maxima. The position [[y_m]] must be much smaller than [[distancia_a_la_pantalla]] if the small-angle approximation was used. Units must be consistent in metres throughout the formula. Total intensity integrated over the screen must equal the sum of individual intensities from each slit.

**Mini-example of contrast**

Check 6: In Interference of Light, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.