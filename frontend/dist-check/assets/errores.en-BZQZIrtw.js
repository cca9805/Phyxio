const e=`# Common errors

## Error 1: choosing the wrong operation

It may seem reasonable to always calculate slope or always calculate area when a graph appears. It fails because each operation answers a different question. On \`v-t\`, slope gives acceleration, but area gives displacement. Detect it by reading the verb in the prompt: rate of change asks for slope; accumulated total asks for area. Correct it by writing the physical question first.

## Error 2: losing the meaning of the variable

This error appears when \`x\` and \`y\` are treated as empty letters. If the vertical axis changes from position to velocity, the same operation changes meaning. Detect it by checking labels and units before calculating. Correct it by writing one line: "vertical divided by horizontal means..." or "vertical times horizontal means...".

## Error 3: ignoring units

A slope without units is disconnected from physics. For example, \`Delta x / Delta t = 5\` must be read as \`5 m/s\` if the axes are meters and seconds. In an \`F-t\` area, the unit is \`N s\`, not \`N\`. Detect it by checking whether the final unit is a quotient or a product. Correct it by operating with units too.

## Error 4: confusing sign and magnitude

A negative area or negative slope does not mean "impossible quantity". It means opposite sense, decrease, or signed accumulation. On a velocity-time graph, negative area is displacement in the negative direction. Detect it by comparing the curve with the horizontal axis. Correct it by separating magnitude, sign, and physical meaning.

## Error 5: applying a rule outside its domain

Computing a slope from two distant points on a curve and calling it instantaneous is a domain error. Extrapolating an area outside the measured interval is another one. Detect it by asking whether the result describes a point, a segment, or an unobserved extension. Correct it by stating the interval and the type of approximation.

## Quick detection rule

If the result has vertical unit divided by horizontal unit, it must be interpreted as a rate. If it has vertical unit multiplied by horizontal unit, it must be interpreted as accumulation. If the final unit does not match the physical question, the operation was almost certainly chosen incorrectly.
`;export{e as default};
