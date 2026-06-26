const e=`# Physical models: Normal Force on Inclined Planes\r
\r
## Ideal model\r
\r
This leaf uses a rigid-plane, unilateral-contact model to interpret the normal reaction [[N]]. The object is represented by an effective mass [[m]], gravity is represented by [[g]], plane geometry by [[theta]], optional external perpendicular action by [[Fextn]], and perpendicular dynamics by [[aperp]].\r
\r
The model objective is not to capture every microscopic effect. Its objective is to provide a reliable causal map for contact-load estimation and model-validity checks in standard mechanics scenarios.\r
\r
## Hypotheses\r
\r
Core hypotheses are explicit:\r
\r
- The plane can be approximated locally as rigid with a well-defined normal direction.\r
- Contact is unilateral: the surface can push but not pull.\r
- Axis decomposition is consistent and perpendicular terms are not mixed with tangential ones.\r
- [[g]] is treated as locally uniform in the operating domain.\r
- The selected state variables [[m]], [[theta]], [[Fextn]], and [[aperp]] are sufficient to represent perpendicular behavior at the intended fidelity.\r
\r
If any hypothesis is violated, the computed [[N]] may lose operational meaning.\r
\r
## Quantitative validity domain\r
\r
The model is typically defensible when these quantitative conditions are simultaneously satisfied:\r
\r
- Prediction-versus-measurement mismatch for [[N]] remains below a practical threshold, often around 5 to 10 percent in repeated tests.\r
- Angle uncertainty for [[theta]] is controlled so that induced variation in [[N]] stays within accepted engineering tolerance.\r
- Perpendicular acceleration [[aperp]] remains within a regime where linear decomposition and rigid-contact assumptions are still representative.\r
- Additional perpendicular forcing [[Fextn]] is measured or estimated with uncertainty small enough not to dominate decision margins.\r
- Contact condition checks remain consistent, with no systematic requirement of negative [[N]] under observed sustained contact.\r
\r
These conditions are not arbitrary. They define when the simplified model preserves decision quality.\r
\r
## Model failure signals\r
\r
Common failure indicators include:\r
\r
- Repeated negative [[N]] in conditions where physical contact is clearly observed.\r
- Persistent residual patterns between measured and predicted [[N]] that cannot be explained by sensor noise.\r
- Strong sensitivity to small parameter changes inconsistent with physical observations.\r
- Evidence of local surface compliance, stick-slip transitions, or geometry variation outside rigid-plane assumptions.\r
\r
When these indicators appear, continuing with the same model without qualification is unsafe.\r
\r
## Extended or alternative model\r
\r
Possible escalations include:\r
\r
- Contact-compliance models where the surface normal direction and force relation evolve with deformation.\r
- Coupled multiaxis dynamic models when perpendicular and tangential dynamics interact strongly.\r
- Calibrated empirical correction layers for known systematic effects in a bounded operating region.\r
- Hybrid simulation approaches combining rigid-body dynamics with experimentally identified contact parameters.\r
\r
Explicit transition rule: if error metrics exceed the agreed threshold over repeated tests, or if contact-condition checks fail systematically, switch from the ideal model to one of the extended classes and recalibrate parameters before making final decisions.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|--------|-------------|----------------|\r
| Main use | Fast interpretation and design screening | Final validation and off-nominal analysis |\r
| Parameters | [[m]], [[g]], [[theta]], [[Fextn]], [[aperp]] | State-dependent and calibrated parameters |\r
| Computation cost | Low | Medium to high |\r
| Traceability | High and direct | High with careful calibration bookkeeping |\r
| Required data | Basic geometry and loads | Additional test data and identification workflow |\r
\r
A strong engineering workflow starts with the ideal model for clarity and speed, then escalates only when evidence shows that assumptions no longer support required accuracy.\r
`;export{e as default};
