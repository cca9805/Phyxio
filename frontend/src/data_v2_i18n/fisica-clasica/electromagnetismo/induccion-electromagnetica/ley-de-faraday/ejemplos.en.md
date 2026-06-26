# Exam-type example


## Problem statement

A 200-turn coil links magnetic flux per turn that goes from 0.0030 Wb to 0.00050 Wb in 0.020 s. Compute the flux change per turn, the average flux-change rate, and the average induced emf. Interpret the sign with the chosen normal.

## Data

- Number of turns [[numero_de_espiras]]: 200.
- Initial flux [[flujo_magnetico]]: 0.0030 Wb per turn.
- Final flux: 0.00050 Wb per turn.
- Interval [[intervalo_de_tiempo]]: 0.020 s.
- The positive normal is the one used to write the initial flux.

## System definition

The system is a coil. The linked surface is that of each turn, and all turns are assumed to link similar flux changes. The emf [[epsilon_ind]] is interpreted around the whole circuit.

## Physical model

The average form of Faraday's law is used. Flux decreases, so [[cambio_de_flujo_magnetico]] is negative with the chosen normal. The final emf sign must express opposition to the decrease of flux.

## Model justification

The statement gives a finite change between two states and a clear time interval. No complex nonuniform fields, motion fast enough for propagation effects, or nonequivalent turns are mentioned.

The coil has many turns, so [[numero_de_espiras]] multiplies the response if each turn links the same flux change. The result would differ if the flux datum already represented total linkage of the whole coil.

## Symbolic solution

The average flux-change rate is defined as:

{{f:tasa_cambio_flujo}}

The average Faraday law for a coil is:

{{f:ley_faraday_media}}

The same reading can be written directly with flux-change rate:

{{f:ley_faraday_tasa}}

If flux came from an effective uniform field and known area, it would be estimated with:

{{f:flujo_uniforme}}

## Numerical substitution

Final flux is smaller than initial flux, so [[cambio_de_flujo_magnetico]] is a decrease of 0.0025 Wb. Dividing that change by 0.020 s gives an average flux-change rate with magnitude 0.125 Wb/s.

Multiplying that rate by 200 turns gives an average emf magnitude of 25 V. Because flux decreases relative to the positive normal, Faraday's sign makes [[epsilon_ind]] positive in the reference that tries to sustain the original flux.

If time conversion or multiplication by [[numero_de_espiras]] were forgotten, the result would change by large factors. The numerical reading must therefore be accompanied by unit control and sign interpretation.

## Dimensional validation

Weber divided by second produces volt, so [[rapidez_media_de_cambio_de_flujo]] has the proper dimension for generating emf. Number of turns [[numero_de_espiras]] adds no unit; it only multiplies the response.

The sign reading is also coherent. Decreasing flux induces emf oriented to oppose that decrease, not to accelerate flux loss.

## Physical interpretation

The coil is not responding to initial flux by itself. It responds because linked flux falls during a short time. That fall forces the circuit to generate an emf with polarity tending to maintain the flux being lost.

The 25 V value is reasonable for a many-turn coil, even though the change per turn looks small. Accumulation by [[numero_de_espiras]] turns a moderate flux variation into a measurable voltage.

Physically, this means each turn contributes a small emf with coherent orientation. The complete coil does not change the cause of the phenomenon; it amplifies total emf because the same magnetic linkage is repeated many times.

If the same change happened ten times more slowly, the average emf would be ten times smaller. If it happened at the same rate but with a single turn, the emf would be two hundred times smaller. These comparisons show that the law measures rate of change and accumulated linkage.

# Real-world example


## Context

A simple generator rotates a coil inside a magnetic field. Although the field may remain almost constant, the effective orientation of the coil changes and therefore the linked flux changes.

## Physical estimation

If a many-turn coil experiences a flux variation of a few thousandths of a weber per turn in hundredths of a second, emf may be tens of volts. Increasing rotation speed reduces the characteristic time of the change and raises induced emf.

The estimate also shows the role of geometry. A coil with larger [[area_enlazada]] or better orientation relative to [[campo_magnetico_perpendicular_efectivo]] can link more flux; if that flux changes during rotation, electrical response grows.

This estimate separates useful design changes from irrelevant ones. Increasing the field helps only if it increases linked flux that changes; increasing area helps only if the added area is crossed by the effective field component.

## Interpretation

The generator does not create voltage because static magnetic field exists, but because flux linked by the coil changes continuously. Faraday's law translates that geometric and temporal change into emf.

Correct design reads [[flujo_magnetico]], [[cambio_de_flujo_magnetico]], [[intervalo_de_tiempo]], and [[numero_de_espiras]] together. If any of these quantities is ignored, the physical cause of induced voltage is lost or its scale is poorly estimated.

The real point is not the numerical voltage alone. The generator works because mechanical motion continuously changes magnetic linkage, and the electrical output is a record of that changing linkage.