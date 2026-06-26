const e=`# Tubes

## Conceptual context

An acoustic tube is an air column that can sustain **longitudinal standing waves**. What oscillates is not a visible string, but the air: some regions alternate compression and rarefaction, while others act as reference points for the pattern. Tubes are therefore the classical example of resonance in wind instruments, organs, bottles, and sound cavities.

The key point of this leaf is that end type changes the frequency series. A tube open at both ends does not select the same modes as a tube open at one end and closed at the other. The effective length [[L_eff]], sound speed [[v]], and modal index [[n]] or [[m]] determine the frequency [[f_n]].

## 🟢 Essential level

At an open tube end, air can move easily. That region behaves as a displacement antinode. At a closed end, the air next to the wall cannot move longitudinally, so a displacement node appears. This boundary difference completely changes which patterns fit.

The essential idea is to distinguish **open-open tube** and **open-closed tube** before calculating. The first admits a complete harmonic series. The second selects only odd patterns, because it must join an antinode at the open mouth with a node at the closed end. The physical length [[L]] is useful, but real resonance often depends on [[L_eff]].

> [!NOTE]
> In tube acoustics, "open" and "closed" describe air-motion conditions, not only visual appearance.

## 🔵 Formal level

For a tube open at both ends, the air column has displacement antinodes at both mouths. The effective length contains an integer number of half-wavelengths, and the modal frequency is:

{{f:frecuencia_tubo_abierto}}

The wavelength associated with the same mode is:

{{f:longitud_onda_tubo_abierto}}

Here [[n]] takes consecutive integer values. Therefore the ideal open tube produces a complete harmonic series. If [[L_eff]] remains fixed, doubling the modal index doubles the frequency, because the spatial pattern is compressed without changing the speed [[v]].

For an open-closed tube, the closed boundary imposes a displacement node and the open boundary imposes an antinode. The fundamental contains one quarter of a wavelength, and higher modes appear through odd factors:

{{f:frecuencia_tubo_cerrado}}

The corresponding modal wavelength is:

{{f:longitud_onda_tubo_cerrado}}

The index [[m]] does not enumerate all harmonics of the open series; it generates odd factors. This formal detail is the center of the leaf: a tube closed at one end does not have the ideal second harmonic of a comparable open tube.

## 🔴 Structural level

The deep structure of the phenomenon is **selection by acoustic boundary**. In a fixed string, the boundaries are usually displacement nodes. In a tube, an open mouth and a closed end do not impose the same condition. Therefore two tubes with similar length may have different fundamentals and different resonance series.

The quantity [[L_eff]] introduces an important nuance. Air at an open mouth does not stop moving exactly at the geometric cut of the tube. Oscillation extends a little outside, so the acoustic length may be larger than [[L]]. In narrow tubes this correction can be treated as small; in wide mouths, bells, or real flutes, the simple model needs adjustments.

The speed [[v]] provides the time scale and depends on the medium. In everyday air it is of order a few hundred metres per second, but it changes with temperature and composition. If the air is warm, frequency rises for the same geometry. If there is strong flow, significant loss, or poorly defined ends, resonances shift and broaden.

The graphical reading must distinguish displacement and pressure. At a closed end there is a displacement node but a pressure antinode. At an open end the opposite is approximately true. This duality explains many errors: drawing pressure antinodes while reasoning about displacement antinodes changes the meaning of the mode.

> [!WARNING]
> Using the full open-tube series in an open-closed tube produces resonances that the ideal model does not allow.

## Deep physical interpretation

A tube resonates when the reflected sound wave rebuilds the same pattern after crossing the air column. The boundary decides whether reflection must be compatible with a displacement antinode or a displacement node. Therefore [[L_eff]] alone is not enough: the resonator end type must be known.

The frequency [[f_n]] is a reading of compatibility between space and time. [[lambda_n]] tells which spatial scale fits; [[v]] tells how fast the disturbance propagates; [[n]] or [[m]] selects the modal family. When these pieces match, an external excitation can be amplified as a stable tone.

## Order of magnitude

An open tube with [[L_eff]] close to 0.50 m in ordinary air has a fundamental of order hundreds of hertz. An open-closed tube with the same effective length has a lower fundamental order, because it fits a fundamental quarter-wave. Tubes of a few centimetres lead to kilohertz frequencies; metre-scale tubes lead to tens of hertz.

An absurd result is detected by scale comparison. If a half-metre tube gives a megahertz frequency, an excessively small length or a nonacoustic speed has probably been used. If a millihertz frequency appears, metres may have been confused with kilometres or the modal series may have been misused.

## Personalized resolution method

First identify the ends: open-open or open-closed. Then decide whether to use [[L]] or a corrected [[L_eff]]. Choose [[n]] for an open tube or [[m]] for a closed tube. Compute [[lambda_n]] to check the modal drawing, and finally compute [[f_n]] with the appropriate series.

The visual self-check is to inspect the boundaries. An open-open tube should show displacement antinodes at both ends. An open-closed tube should show an antinode at the open mouth and a node at the closed end. If the drawing does not respect that, the calculation has been applied to the wrong tube.

## Special cases and extended example

A blown bottle resembles an open-closed resonator, but it does not always behave as a simple tube: the cavity volume and neck may dominate. Thus the tube leaf is a first approximation, not a universal description of any hollow object.

An ideal open flute is closer to an open-open tube, although side holes change the effective length. Opening a hole creates a new acoustic boundary and reduces [[L_eff]]. The pitch rises because the compatible pattern becomes shorter.

In an organ, open and stopped pipes can produce related notes with different lengths. A stopped pipe can produce a low note with less physical length than an equivalent open pipe, precisely because its fundamental is based on a quarter-wave.

## Real student questions

**Why is an open end a displacement antinode?** Because air at the mouth can move outward and inward with little mechanical restriction.

**Why is a closed end a displacement node?** Because the wall prevents air from advancing longitudinally at that point.

**Do all tubes have all harmonics?** No. An ideal open-closed tube selects only the odd series.

**Why use [[L_eff]] instead of always using [[L]]?** Because the acoustic boundary of an open mouth does not exactly coincide with the geometric edge.

## Cross-cutting connections and study paths

This leaf connects with [Standing-wave condition](leaf:fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad), because it applies modal fitting to an air column. It also connects with [Nature of sound](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido), where the longitudinal wave is interpreted as pressure variation.

The natural route continues toward resonance, musical instruments, and timbre. Tubes show that the same mathematics of standing waves changes physical form when boundary conditions change.

## Final synthesis

Tubes select frequencies through effective length, sound speed, and end type. An open tube uses consecutive integer modes; an open-closed tube uses odd factors. Understanding [[f_n]] requires reading the acoustic boundary first and then applying the correct modal series.
`;export{e as default};
