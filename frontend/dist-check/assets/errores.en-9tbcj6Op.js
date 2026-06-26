const e=`# Errors

## Conceptual errors

A common conceptual error is using the same series for every tube. It looks plausible because all tubes contain air, length, and sound, but the boundary changes the modal shape. An open-open tube has displacement antinodes at both ends, while an open-closed tube combines an antinode and a node. Therefore the [[f_n]] series changes.

Another conceptual error is forgetting that "open" and "closed" refer to acoustic boundary behavior. A visually open region may still be modified by a mouthpiece, a lip, or a strong coupling element. The first question is not only what the tube looks like, but how the air can move at the boundary.

## Model errors

A frequent model error is using [[L]] as if it were always the acoustic length. At an open mouth, air motion extends somewhat outside the tube, so [[L_eff]] can be larger than the physical length. If the problem mentions end correction, ignoring it shifts all frequencies.

It is also an error to treat any cavity as a simple tube. A bottle, a bell, or a resonator with side holes may require extended models. The ideal tube is narrow, nearly uniform, and has well-defined ends.

## Mathematical errors

The most common mathematical failure is substituting [[m]] as if it were [[n]]. In a closed tube, the modal factor does not run through every integer of the open series, but through odd factors generated from [[m]]. Another failure is putting the factor four of the closed tube where the factor two of the open tube belongs, or the reverse.

Units matter as well. [[v]] must be in m/s, [[L_eff]] in metres, and [[f_n]] in hertz. If centimetres are used without conversion, frequency may become one hundred times too large.

Dimensional validation must end in \`[T⁻¹]\`.

## Interpretation errors

An interpretation error is mixing displacement nodes with pressure nodes. At a closed end, air displacement has a node, but pressure has an antinode. If the plotted variable is not declared, the mode may look contradictory.

Another error is thinking that a strong resonance means the tube contains any frequency. A large response actually indicates compatibility between [[L_eff]], [[v]], and the modal family. Intermediate frequencies can excite air, but they do not rebuild a stable standing pattern.

## Quick self-control rule

Before accepting the result, ask: is the tube open-open or open-closed; am I using [[L_eff]] rather than the wrong length; is the modal index [[n]] or [[m]] as appropriate; does the frequency [[f_n]] fall in a reasonable audible order?
`;export{e as default};
