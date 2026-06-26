const e=`\uFEFF# Bernoulli's Equation — Model and Validity\r
\r
The Bernoulli model connects pressure [[p]], velocity [[v]], and elevation [[z]] in a closed energy balance. The key is not memorising a formula but knowing which hypotheses make it valid and when to switch to a more realistic version.\r
\r
## Ideal model\r
\r
The base model applies\r
\r
{{f:head}}\r
\r
to a steady, incompressible, inviscid flow. In this framework the energy head [[H]] is conserved between any two points on the same streamline: all the fluid's mechanical energy (pressure, kinetic, and potential) is redistributed without losses.\r
\r
Physically, the model treats the duct as a reversible converter between pressure energy and kinetic energy. It does not deny the existence of viscosity or turbulence; it simply sets them aside to isolate the central energy-conservation mechanism.\r
\r
## Hypotheses\r
\r
The ideal model holds if the following hypotheses are satisfied simultaneously:\r
\r
1. **Incompressible fluid**: density [[rho]] is treated as constant. Excellent for liquids and reasonable for gases with Ma < 0.3.\r
2. **Steady flow**: quantities do not change appreciably with time at any fixed point.\r
3. **Inviscid fluid**: no internal friction or head losses. All mechanical energy is conserved.\r
4. **Along a streamline**: the points being compared lie on the same particle trajectory.\r
\r
## Quantitative validity domain\r
\r
Although the model is conceptual, it should be linked to observable criteria:\r
\r
- Ma < 0.3: velocities below ~102 m/s in air at 20 °C. Above that, density variation exceeds 5 % and the incompressibility assumption fails.\r
- High Reynolds number (Re > 10^4): outside the boundary layer viscosity does not dominate and the equation is applicable.\r
- Diffuser expansion angle below ~15°: beyond that the boundary layer separates and invalidates the streamline reading.\r
- Static pressure everywhere above the fluid's vapour pressure (to avoid cavitation).\r
\r
## Model failure signals\r
\r
The ideal model has failed when these signals are observed:\r
\r
- The calculated pressure is negative in absolute terms: imminent cavitation or data error.\r
- The calculated velocity exceeds 100 m/s in air (Ma > 0.3): the incompressibility hypothesis breaks down.\r
- The total energy head [[H]] **increases** in the flow direction without a pump: this violates the second law of thermodynamics.\r
- Bends, valves, or abrupt expansions generating non-negligible local losses are present.\r
- The result is hypersensitive to minimal variations in input data.\r
\r
## Extended or alternative model\r
\r
When the ideal model is insufficient, the natural step is to extend it:\r
\r
- **Bernoulli with losses (Darcy-Weisbach)**: a head-loss term is added, depending on duct length, diameter, and velocity squared. It requires a friction factor that depends on Reynolds number and relative roughness.\r
- **Bernoulli with machines**: a pump adds h_p > 0; a turbine subtracts h_t > 0.\r
- **Compressible Bernoulli**: for gases at velocities above Ma 0.3, an isentropic form with specific-heat ratio effects is used.\r
\r
## Explicit transition between models\r
\r
The practical decision can be summarised as follows:\r
\r
- If the aim is to understand the physical mechanism or make a first estimate, start with ideal Bernoulli.\r
- If precision in real pipes is needed, switch to the head-loss model (Darcy-Weisbach). The changeover criterion is that head losses represent more than 5 % of the available elevation or pressure difference.\r
- If the gas velocity exceeds Ma 0.3 or thermal effects appear, migrate to the compressible model.\r
- If a full analysis with velocity profiles, recirculation, or separation is required, use the Navier-Stokes equations or CFD.\r
\r
## Operational comparison\r
\r
| Option | Main advantage | Main limitation | When to use |\r
|---|---|---|---|\r
| Ideal Bernoulli | Simple, analytical, fast | Ignores viscosity and losses | Conceptual study and first estimate |\r
| Bernoulli with losses | Includes real friction | Requires f and duct data | Industrial pipe networks |\r
| Navier-Stokes equations | Complete, including viscosity | Very complex, rarely analytical | Research, CFD, precise design |\r
| Potential flow model | External flows around solids | Does not capture separation or turbulence | Low angle-of-attack aerodynamics |\r
\r
`;export{e as default};
