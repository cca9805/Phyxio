const e=`\uFEFF# Communicating Vessels - Model and validity\r
\r
## Ideal model\r
The ideal model assumes that two connected branches share the same pressure at the same depth. When the system is at rest, the correct comparison is not made between arbitrary points but between points lying on the same horizontal level inside the fluid.\r
\r
The most useful equilibrium expression is:\r
\r
\r
[[rho1]] * [[h1]] = [[rho2]] * [[h2]]\r
\r
\r
or, if the problem asks for the height in branch 2,\r
\r
\r
[[h2]] = frac{[[rho1]] * [[h1]]}{[[rho2]]}\r
\r
\r
Its educational strength is that it connects a very simple image, two connected columns, with a precise physical reading: the lighter side needs more height to compensate the same bottom pressure.\r
\r
## Hypotheses\r
- The system is in hydrostatic equilibrium.\r
- Both heights are measured from the same horizontal reference.\r
- Gravity is the same in both branches.\r
- Densities [[rho1]] and [[rho2]] can be treated as constants.\r
\r
## Quantitative validity domain\r
The model works especially well when the columns are clearly identified and the interfaces are not distorted by agitation or mixing. In school problems and simple technical setups, a reasonable criterion is to work with [[h1]] >= 0, [[h2]] >= 0, and positive densities. It is also useful to keep one quantitative reference in mind: if [[rho1]] = [[rho2]], equilibrium forces [[h1]] = [[h2]]; if [[rho2]] is half of [[rho1]], then [[h2]] must be about twice [[h1]]. This kind of order-of-magnitude comparison is enough to catch absurd results before redoing the full calculation.\r
\r
## Model failure signals\r
There are observable warnings that the ideal model is no longer enough. If the free surfaces do not settle, the system is not at equilibrium. If the heights are read from different references, the result loses physical meaning. The model also fails when several interfaces or several fluids per branch are present and everything is forced into one single [[h1]] and one single [[h2]]. Another clear warning appears when the result contradicts the obvious limit: equal fluids cannot end with different heights in the ideal model.\r
\r
## Extended or alternative model\r
When more than two relevant segments are present, the model must be expanded into a sum of hydrostatic contributions. Instead of one single equality [[rho1]] [[h1]] = [[rho2]] [[h2]], the analysis is built segment by segment. Each segment contributes its own density and effective height. This extended model is also needed when the problem includes complex geometry, multiple interfaces, or branches in which the whole column does not belong to the same fluid.\r
\r
## Operational comparison\r
The ideal model is best when one branch can be summarized by [[rho1]] and [[h1]] and the other by [[rho2]] and [[h2]]. The extended model becomes necessary when the real setup can no longer be reduced that way without losing physical information. The operational rule is simple: if one horizontal level compares two equivalent columns, use the ideal model; if the pressure path crosses several fluids or interfaces, switch to the extended model before calculating.\r
\r
The strength of the leaf lies exactly there. It first offers a compact reading of equilibrium between two branches. Then it makes clear when that compact form stops being enough. That transition from ideal to expanded model is a central part of expert learning.\r
\r
`;export{e as default};
