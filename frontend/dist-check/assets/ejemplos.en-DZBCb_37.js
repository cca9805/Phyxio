const e=`# Exam-type example

## Problem statement

A railway steel rail has a length of 18 m at a reference temperature of 10 °C. The maximum temperature the rail reaches in summer is 55 °C. Given that the linear expansion coefficient of steel is 12×10⁻⁶ K⁻¹, calculate the length change of the rail and determine whether an expansion gap between adjacent rails is necessary, knowing that the design tolerance is 8 mm.

## Data

- Initial rail length: 18 m
- Reference temperature: 10 °C
- Maximum summer temperature: 55 °C
- Linear expansion coefficient of steel: 12×10⁻⁶ K⁻¹
- Design gap tolerance: 8 mm

## System definition

The system is a steel rail of length [[L0]] defined at 10 °C. The length change [[DeltaL]] when the temperature increases by [[DeltaT]] kelvins is studied. The rail is assumed to be free to expand longitudinally (no clamping at its ends), the steel is isotropic, and [[alpha]] is constant over the temperature range considered.

## Physical model

The law of linear thermal expansion of solids in the isotropic constant-coefficient regime is applied. The relevant quantity is [[DeltaL]], whose expression relates [[alpha]] of the material, [[L0]], and [[DeltaT]].

## Model justification

The temperature change is 45 K, well below the range where [[alpha]] of steel varies significantly (this would require exceeding 500 K). The product [[alpha]]·[[DeltaT]] is of order 5.4×10⁻⁴, much smaller than 0.01, confirming that the linear small-deformation model is valid. The rail does not cross any phase transition in this range.

## Symbolic solution

The law of linear expansion gives:

{{f:dilatacion_lineal}}

The temperature change is calculated as final temperature minus initial temperature:

[[DeltaT]] is the difference between the summer temperature and the reference temperature.

With this [[DeltaT]], the length change [[DeltaL]] of the rail is the product of [[alpha]], [[L0]], and [[DeltaT]].

For an isotropic solid, the volumetric coefficient is connected to the linear coefficient by:

{{f:relacion_beta_alpha}}

If the same steel is analysed as a solid block rather than only as a rail length, the volume change follows:

{{f:dilatacion_volumetrica}}

In that case [[beta]] is the volumetric material parameter and [[DeltaV]] is the observable volume change.

## Numerical substitution

The temperature change is 55 °C minus 10 °C, giving 45 K.

Substituting into the linear expansion law: [[DeltaL]] equals 12×10⁻⁶ K⁻¹ multiplied by 18 m multiplied by 45 K, giving 9.72×10⁻³ m.

Expressed in millimetres: the length change of the rail is approximately 9.72 mm.

## Dimensional validation

The dimension of [[alpha]]·[[L0]]·[[DeltaT]] is [K⁻¹]·[m]·[K], which simplifies to [m]. The result 9.72×10⁻³ m is consistent with the expected unit for a length change. The relative deformation [[DeltaL]]/[[L0]] is 5.4×10⁻⁴, of the same order as [[alpha]]·[[DeltaT]], confirming the consistency of the calculation.

## Physical interpretation

The rail length change is approximately 9.72 mm, exceeding the design tolerance of 8 mm. This means that **an expansion gap of at least 10 mm is necessary** between adjacent rails so that the steel can expand freely without generating compressive stresses that deform the track.

This result illustrates why railway rail sections are not directly welded without provision for movement: for a seasonal variation of only 45 K, a standard 18 m rail elongates by almost one centimetre. If the ends are fixed, the compressive stress generated can exceed the elastic limit of the steel and produce lateral buckling of the track, a phenomenon known as "sun kink" in railway engineering.

The ratio [[DeltaL]]/[[L0]] of 5.4×10⁻⁴ is the relative deformation: every metre of the rail has elongated by 0.54 mm. This dimensionless number, equal to [[alpha]]·[[DeltaT]], is the fundamental property that allows comparing the behaviour of different materials under the same thermal stimulus, regardless of the size of the object.

---

# Real-world example

## Context

In the design of the Øresund suspension bridge (1.6 km central span, structural steel), engineers must account for the dimensional changes of the metal deck due to seasonal thermal cycles. The steel deck temperature can range from minus 20 °C in winter to plus 45 °C in summer, a total variation of 65 K. The length change in the central span determines the design of the bearing devices and the expansion joints at the ends.

## Physical estimation

For the 1600 m central span of structural steel with [[alpha]] ≈ 12×10⁻⁶ K⁻¹ and [[DeltaT]] of 65 K, the total length change of the deck is calculated by applying the linear expansion law with [[L0]] of 1600 m.

The result is 12×10⁻⁶ K⁻¹ multiplied by 1600 m multiplied by 65 K, giving approximately 1.25 m. The bridge deck elongates and contracts by almost one and a quarter metres over the year depending on the season.

For comparison: if the same bridge were made of invar (an alloy with [[alpha]] ≈ 1×10⁻⁶ K⁻¹), the length change would be only 10 cm under the same conditions—twelve times smaller. However, invar has inferior mechanical properties and a much higher cost, making it unfeasible for large-scale bridges.

The bridge's bearing devices (rollers and neoprene pads beneath the deck) are sized to accommodate horizontal displacements of up to 1.5 m. The expansion joints at the access ramps allow relative movement between the deck and the approach viaduct without interrupting vehicle traffic.

## Interpretation

The 1.25 m length change in the central span is not a design flaw: it is a perfectly predictable behaviour managed precisely because of the law of linear expansion. The engineering challenge is not to prevent expansion—which would be impossible with real materials—but to design structural elements so that free expansion occurs without accumulating destructive internal stresses.

The example also shows that the relative deformation [[DeltaL]]/[[L0]] is the same regardless of the size of the bridge: for [[alpha]]·[[DeltaT]] of 7.8×10⁻⁴, any steel piece in the same bridge—whether 1 m or 1600 m long—experiences the same relative fraction of elongation. The difference is that longer pieces produce larger absolute elongations and require greater travel ranges in the compensation systems.
`;export{e as default};
