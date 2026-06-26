const e=`# Common errors

## Error 1: choosing the wrong operation

It may seem reasonable to always search for \`f'(x) = 0\`. It fails if the extremum is at a domain boundary or if the function is not differentiable. Detect it by checking domain and special points. Correct it by evaluating interior candidates and boundaries.

## Error 2: losing the meaning of the variable

A maximum of velocity, energy, or temperature does not mean the same thing. The error appears when saying "there is a maximum" without stating which quantity. Detect it by reading axes. Correct it by writing variable, unit, and physical question.

## Error 3: ignoring units

The coordinate of the extremum and the extreme value have different units. Saying only \`4\` may mean \`4 s\`, \`4 m\`, or \`4 J\`. Detect it by separating \`x\` from \`f(x)\`. Correct it by writing both with units.

## Error 4: confusing sign and magnitude

Zero slope does not guarantee minimum or maximum. It may be a flat point without extremum. Detect it by inspecting slope sign before and after. Correct it by classifying with sign change or curvature.

## Error 5: applying a rule outside its domain

A mathematical extremum may lie outside physically possible conditions. Detect it by comparing the result with constraints such as positive time, positive length, or validity range. Correct it by rejecting nonphysical candidates.

## Quick detection rule

Every extremum must answer: which quantity, at which point, with which unit, inside which domain, and with which physical meaning. If an answer omits two of these five, it is incomplete.
`;export{e as default};
