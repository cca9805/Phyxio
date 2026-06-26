const e=`# Physical models: The Concept of Centripetal Force\r
\r
## Ideal model\r
\r
The core model describes circular motion with fixed radius [[r]] and a clear radial-resultant interpretation [[Frad]]. In this framework, [[ac]] changes velocity direction, not speed magnitude by itself. This separation enables a clean bridge between kinematics and dynamics.\r
\r
Main simplifications are:\r
\r
- The object is treated as a particle when size effects are negligible.\r
- Inputs ([[m]], [[r]], [[v]], [[omega]]) are assumed sufficiently stable in the analyzed interval.\r
- Secondary couplings are neglected when they do not change the order of magnitude of [[Frad]].\r
\r
This is an intentionally compact model, effective for first-pass design, diagnostics, and conceptual training.\r
\r
## Hypotheses\r
\r
Operational hypotheses are:\r
\r
- Motion is approximately circular in the studied segment.\r
- The radial axis is well defined for force projection.\r
- The relations among [[v]], [[omega]], [[T]], and [[r]] are mutually consistent.\r
- SI units are used consistently, including proper use of [[pi]] in period-angle conversion.\r
\r
If any hypothesis fails, outputs may remain numerical but lose physical interpretability.\r
\r
## Quantitative validity domain\r
\r
The model is reliable when:\r
\r
- [[r]] > 0 and approximately constant.\r
- [[v]] >= 0 without strong transients in the segment.\r
- [[omega]] > 0 under a clear rotation regime.\r
- [[T]] > 0 with trustworthy timing data.\r
\r
As a practical criterion, if prediction-measurement discrepancy in [[ac]] or [[Fc]] stays above roughly 10% to 15% across repeated trials, assumptions should be revisited.\r
\r
## Model failure signals\r
\r
Four common warning signs are:\r
\r
- Effective radius varies significantly along the path.\r
- Sustained slip appears, breaking the ideal turning assumption.\r
- Radial force projection no longer closes with estimated [[Frad]].\r
- Small input changes create unrealistic output jumps.\r
\r
These signals do not invalidate the theory; they indicate that the problem requires richer physics.\r
\r
## Extended or alternative model\r
\r
The next step is to include effects omitted in the ideal block: nonlinear adhesion, variable curvature, elastic deformation, active control, or environmental disturbances.\r
\r
Explicit transition rule: switch to the alternative model when observation-prediction mismatch remains above the agreed threshold in repeated tests, or when failure signals persist under nominal conditions.\r
\r
This transition is methodological, not punitive: keep simplicity when sufficient, increase complexity when evidence demands it.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|--------|-------------|----------------|\r
| Core variable | [[ac]] and [[Frad]] | [[ac]] plus coupled effects |\r
| Number of parameters | low | higher |\r
| Computational cost | low | medium or high |\r
| Recommended use | training, predesign, fast control | fine validation, critical safety |\r
| Overfitting risk | low | higher if data are weak |\r
\r
Expert practice is selecting the smallest model that explains behavior with enough precision for the decision at hand.\r
`;export{e as default};
