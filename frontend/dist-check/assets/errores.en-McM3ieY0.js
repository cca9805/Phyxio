const e=`# Common errors\r
\r
## Error 1: choosing the wrong operation\r
\r
It seems reasonable because many formulas are solved through similar steps. It fails because the question may ask for comparison, estimation, solving, or validation, not always direct calculation. Detect it by asking what physical information the answer must produce. Correct it by choosing the tool that preserves the relation. Mini-example: using linear subtraction when a phenomenon changes by factor gives a false scale.\r
\r
## Error 2: losing the meaning of the variable\r
\r
It seems reasonable because letters are manipulated as symbols. It fails because each letter represents a quantity with unit, domain, and condition. Detect it when you cannot say what each symbol measures. Correct it by writing the physical name beside the variable. Mini-example: treating time, frequency, and period as interchangeable letters destroys interpretation.\r
\r
## Error 3: ignoring units\r
\r
It seems reasonable because the calculator only handles numbers. It fails because an operation may be arithmetically possible and physically absurd. Detect it by carrying units to the end. Correct it by converting units before operating and rejecting sums of incompatible quantities. Mini-example: adding metres to metres per second does not represent a simple physical quantity.\r
\r
## Error 4: confusing sign and magnitude\r
\r
It seems reasonable because many school answers are requested as positive values. It fails when the sign indicates direction, opposition, loss, or chosen sense. Detect it by comparing the sign with the axis or convention. Correct it by interpreting the sign before taking an absolute value. Mini-example: negative work may mean dissipation, not a wrong calculation.\r
\r
## Error 5: applying a rule outside its domain\r
\r
It seems reasonable because a known rule gives a quick answer. It fails if the model no longer describes the phenomenon: extreme scales, non-negligible friction, or small-variation rules extrapolated too far. Detect it by reviewing validity conditions. Correct it by declaring the domain before using the relation. Mini-example: extrapolating a laboratory proportionality to astronomical scales may be false.\r
\r
## Quick detection rule\r
\r
If the result does not preserve units, does not answer the question, changes in the opposite direction to the model, or claims more precision than available, stop. The error is not only at the end: it probably appeared when choosing the operation or interpreting a variable.\r
\r
<!-- algebra-depth-v2 -->\r
## Quick diagnosis\r
\r
Input error: using a datum without unit, scale, or a decision about whether it is constant. In significant figures and uncertainty, an isolated number rarely contains all the physical information.\r
\r
Structure error: applying a correct operation to the wrong relation. The arithmetic may be right while the physics is wrong if the selected pattern does not represent the phenomenon.\r
\r
Output error: accepting a number without comparing it with an estimate. A result must have a reasonable unit, order of magnitude, sign, and dependence.\r
\r
`;export{e as default};
