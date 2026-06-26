const e=`# Common errors

## Error 1: choosing the wrong operation

It may seem reasonable to fit a line directly because it is the most familiar method. It fails if the expected model is exponential, quadratic, or power-law. Detect it by comparing the physical equation with the axes used. Correct it by transforming variables before fitting.

## Error 2: losing the meaning of the variable

After linearization, \`X\` and \`Y\` may be \`ln(y)\`, \`x^2\`, or \`log(x)\`. The error is interpreting the slope as if it came from the original axes. Detect it by writing the transformed equation. Correct it by translating slope and intercept back to the original model.

## Error 3: ignoring units

The fit may return a numerical slope without visible unit. In physics this is incomplete. Detect it by deriving units from the transformed axes. Correct it by noting whether the slope is in \`N/m\`, \`1/s\`, \`Pa/K\`, or another coherent unit.

## Error 4: confusing sign and magnitude

A negative coefficient in a decay is not a failure: it indicates decrease. A negative intercept may indicate offset or that the model is not valid near the origin. Detect it by interpreting the sign inside the phenomenon. Correct it by explaining physical sense or checking calibration.

## Error 5: applying a rule outside its domain

A fitted line may work only within the measured interval. Using it outside to predict temperatures, deformations, or intensities may break the model. Detect it by marking the experimental range. Correct it by limiting the conclusion.

## Quick detection rule

If you cannot explain what slope, intercept, and residuals mean, the fit is not yet physical. A closed fit must say what it calculates, what it means, and where it stops being reliable.
`;export{e as default};
