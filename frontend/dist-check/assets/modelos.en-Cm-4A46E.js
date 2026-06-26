const e=`# Physical models: Flat and Banked Curves\r
\r
## Ideal model\r
\r
The baseline model treats the vehicle as a particle moving on a circular path with approximately constant [[r]]. Curvature demand is represented by [[ac]] and [[Frad]]. On a flat curve, inward support is mainly provided by [[fs]]. On a banked curve, the orientation of [[Nn]] adds a radial contribution controlled by [[th]].\r
\r
This ideal model is useful because it separates three layers clearly: kinematic demand, dynamic supply, and operating margin under grip uncertainty through [[mu]].\r
\r
## Hypotheses\r
\r
- The local trajectory can be approximated as circular with a well-defined [[r]].\r
- Speed [[v]] is approximately steady in the analyzed segment.\r
- Tire-road contact remains in static-grip regime, so [[fs]] stays below the adherence threshold set by [[mu]] and [[Nn]].\r
- Road geometry is stable enough to treat [[th]] as a design parameter.\r
\r
Under these assumptions, the leaf equations provide reliable first-order diagnostics and design comparisons.\r
\r
## Quantitative validity domain\r
\r
The model is valid when:\r
\r
- [[r]] > 0 and [[m]] > 0.\r
- [[mu]] > 0 and [[Nn]] > 0 in adherence calculations.\r
- [[v]] remains in a regime where severe transients are not dominant.\r
- [[th]] is interpreted as roadway banking, not instantaneous body lean in aggressive maneuvers.\r
\r
In practice, this domain covers preliminary analysis of road curves, connector-ramp audits, and training-grade simulations.\r
\r
## Model failure signals\r
\r
- Persistent gap between prediction and measured behavior beyond operational tolerance.\r
- Sustained slip events despite predicted margin.\r
- Strong in-curve braking or acceleration invalidating quasi-uniform assumptions.\r
- Rapidly varying surface condition producing sharp local changes in effective [[mu]].\r
\r
When these signals appear, parameter tuning is not enough; the model class must be upgraded.\r
\r
## Extended or alternative model\r
\r
The next model level typically includes:\r
\r
- Longitudinal and lateral load transfer.\r
- Nonlinear tire-force behavior under slip.\r
- Variable curvature and surface disturbances.\r
- Coupling with active stability-control logic.\r
\r
### Explicit transition to an alternative model\r
\r
Switch from the ideal to the extended model when control is no longer driven mainly by [[v]]-[[r]]-[[mu]] balance and repeated field evidence shows unacceptable mismatch with ideal predictions. A practical criterion is sustained error above safety tolerance across multiple comparable events; at that point, transient and nonlinear effects must be modeled explicitly.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal curve model | Extended vehicle model |\r
|---|---|---|\r
| Main variables | [[v]], [[r]], [[mu]], [[th]] | Coupled dynamic states |\r
| Main output | [[Frad]] and adherence margin | Full stability envelope |\r
| Computational cost | Low | Medium/high |\r
| Recommended use | Fast diagnosis and early design | Final validation and critical cases |\r
\r
The pedagogical progression is straightforward: start with the ideal model to build causal understanding, then migrate to extended modeling when operational risk requires higher fidelity.\r
`;export{e as default};
