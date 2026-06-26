const e=`# Common errors

## Error 1: choosing the wrong operation

It may seem reasonable to subtract values on a logarithmic scale as if it were linear. It fails because logarithmic differences represent factors. Detect it by asking whether each mark adds or multiplies. Correct it by converting logarithmic jumps into ratios.

## Error 2: losing the meaning of the variable

The logarithm of intensity, concentration, or distance does not mean the same thing. If the variable or reference is forgotten, the number loses physical meaning. Detect it by reading axis and definition. Correct it by writing the quotient used, such as \`I/I0\`.

## Error 3: ignoring units

Taking the logarithm of a dimensional quantity without reference is dangerous. Physical scales use a dimensionless ratio. Detect it by looking for the scale reference. Correct it by forming the quotient before the logarithm.

## Error 4: confusing sign and magnitude

A negative exponent or a minus sign in pH changes the reading. It is not deleted for convenience. Detect it by testing what happens when the quantity increases. Correct it by interpreting whether the result grows, decreases, or reverses the scale.

## Error 5: applying a rule outside its domain

Logarithms do not accept zero or negative real values. In noisy data, a zero may appear and block the transformation. Detect it by checking data before plotting. Correct it with another model, reference, or justified experimental treatment.

## Quick detection rule

If at the end you cannot say "this is multiplied by...", you have not interpreted a logarithmic scale. Correct reading always returns to factors, ratios, or orders of magnitude.
`;export{e as default};
