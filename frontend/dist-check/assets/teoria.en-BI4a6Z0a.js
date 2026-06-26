const e=`# Friction and Dissipation\r
\r
## Conceptual Context\r
\r
Friction is a contact interaction that opposes relative sliding. In work-energy problems it matters because it does not store recoverable mechanical energy like a spring or a conservative field; it transforms part of that energy into heating, sound, wear, and microscopic deformation.\r
\r
The central distinction is between the work done by friction [[Wr]], which has a sign, the dissipated energy [[Edis]], which is reported as positive, and the change in mechanical energy [[dEm]], which tells whether useful mechanical energy has been conserved or degraded.\r
\r
## 🟢 Essential Level

In the dry-contact model, friction is understood as an interaction that opposes sliding and degrades mechanical energy. The first step is not calculation, but deciding whether dry contact, actual sliding, and the chosen system justify a mechanical-loss description.

The essential point is sign: the work done by friction on the sliding body is usually negative. That negativity does not mean energy disappears; it means conversion into less recoverable forms within the mechanical model.
\r
## 🔵 Formal Level\r
\r
Dry contact is first modeled through the relation between [[fr]], [[mu]], and [[N]]:\r
\r
{{f:fuerza_rozamiento_cinetico}}\r
\r
When [[fr]] opposes motion over a distance [[d]], its mechanical work is:\r
\r
{{f:trabajo_rozamiento}}\r
\r
Dissipated energy is defined as a positive quantity from the negative work of friction:\r
\r
{{f:energia_disipada_rozamiento}}\r
\r
On a horizontal surface with no other vertical forces, the normal force can be replaced by the weight:\r
\r
{{f:trabajo_rozamiento_horizontal}}\r
\r
The mechanical-energy balance is modified by dissipative work:\r
\r
{{f:balance_energia_mecanica_disipacion}}\r
\r
The same statement can be read as the change in mechanical energy:\r
\r
{{f:variacion_energia_mecanica_rozamiento}}\r
\r
If the rate of degradation matters, use the average dissipated power:\r
\r
{{f:potencia_disipada_media}}\r
\r
## 🔴 Structural Level\r
\r
The model assumes dry or lightly lubricated contact, approximately constant [[mu]], actual sliding, and a well-defined normal force [[N]]. If there is pure rolling, hydrodynamic lubrication, severe wear, strong heating, or dominant fluid drag, this is no longer the governing model.\r
\r
The physical criterion is not to memorize that friction "removes energy", but to choose the system carefully. If the system is only the block, [[Wr]] is usually negative. If the system includes the block, the surface, and the thermal environment, total energy is conserved but changes form.\r
\r
A structural analysis also asks which variable controls the result. If sliding distance doubles, the magnitude of [[Wr]] doubles in the constant-force model. If the normal force doubles, [[fr]] doubles and so does dissipation per meter. If the same converted energy occurs in less time, [[Edis]] is unchanged but [[Pdis]] increases. These three sensitivities separate geometry, contact, and thermal risk.\r
\r
## Deep Physical Interpretation\r
\r
Friction links dynamics and energy: [[N]] and [[mu]] set the force scale, [[d]] sets how much negative work accumulates, and [[t]] tells whether the resulting dissipated power [[Pdis]] is mild or dangerous.\r
\r
Thus two problems with the same [[Edis]] may be physically different. Dissipating 1000 J in an hour may be harmless, whereas dissipating it in a tenth of a second may damage a brake, tool, or contact surface.\r
\r
Expert reading avoids two extremes. The first is treating friction as a mere subtraction inside an energy formula. The second is rejecting the model because it is microscopically incomplete. In the proper range, the model with [[mu]] and [[N]] is powerful because it condenses contact complexity into a testable energy prediction.\r
\r
\r
## Order of magnitude\r
\r
Friction of a few tens of newtons acting over a few meters produces hundreds of joules. That scale appears in a block that warms only slightly, but also in a gentle bicycle braking event. In a vehicle, mass and speed raise the energy to tens or hundreds of kilojoules, so the problem is no longer only about distance; it is also about thermal management.\r
\r
Power adds another order-of-magnitude reading. Dissipating 1000 J in 100 s equals 10 W, a rate that is easy to remove. Dissipating 1000 J in 0.1 s equals 10000 W for a short instant, enough to raise local temperature substantially. This is why [[Pdis]] connects an energy balance with damage, wear, and safety. The same estimate also checks plausibility: a few watts suggests slow heating, whereas concentrated kilowatts require heat sinks, airflow, or a different contact material.\r
\r
\r
## Personalized resolution method\r
\r
1. Define the system: body alone, body plus surface, or system plus thermal environment.\r
2. Decide whether sliding occurs and whether the Coulomb model is valid.\r
3. Compute [[N]] before using [[fr]]; do not replace it by [[m]][[g]] unless the geometry justifies it.\r
4. Use [[Wr]] with sign and [[Edis]] as a positive accumulated quantity.\r
5. Close the balance between [[Emi]], [[Emf]], and [[dEm]].\r
6. If the process has a duration, compute [[Pdis]] to assess heating and practical risk.\r
\r
## Special Cases and Extended Example\r
\r
On a horizontal surface, [[N]] = [[m]][[g]] gives the common horizontal-work expression. On an inclined plane the normal force must be recomputed. In braking systems, clutches, and bearings, dissipated power is often more important than total energy because it controls temperature and damage.\r
\r
Guide example: a block stops because of friction. Its initial kinetic energy is part of [[Emi]], the final mechanical energy [[Emf]] can be zero if it ends at rest at the same height, and [[Wr]] then equals [[dEm]]. The dissipated energy [[Edis]] has the same magnitude as the mechanical loss, but positive sign.\r
\r
## Real Student Questions\r
\r
- **Why is friction work negative while dissipated energy is positive?**  \r
  Because [[Wr]] is signed mechanical transfer on the system, while [[Edis]] measures how much has been converted into heat, sound, or deformation.\r
\r
- **Can I always use [[fr]] = [[mu]][[N]]?**  \r
  No. It requires dry contact and a sliding regime in which [[mu]] is approximately constant.\r
\r
- **What should I check when the result looks wrong?**  \r
  Check [[N]] first, then the sign of [[Wr]], and finally whether the chosen system allows a valid comparison between [[Emi]] and [[Emf]].\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf depends on mechanical work, kinetic energy, and conservation of energy. It also connects to friction in dynamics, because the same [[fr]] can appear either in Newton's law or in an energy balance.\r
\r
The natural next step is \`trabajo-de-fuerzas-no-conservativas\`, where friction becomes one example of a broader family of forces that change a system's mechanical energy.\r
\r
It also connects to translational dynamics: the same [[fr]] that produces [[Wr]] here can produce deceleration in Newton's law. The difference is viewpoint. Dynamics asks for acceleration instant by instant; this leaf asks for energy transferred over a path.\r
\r
## Final Synthesis

Mastering friction and dissipation means reading mechanical loss without saying that energy disappears. The final goal is to close balances with [[Wr]], interpret [[Edis]], and estimate whether [[Pdis]] turns a small-looking loss into a real physical problem.

With that criterion, the student can move from a simple block to a real brake without changing the logic: define the system, write signed work, identify transformed energy, and check the validity of the model. This is the core competence of the leaf: not memorizing a friction formula, but deciding what part of the mechanical energy budget has become unavailable and whether the rate of that conversion matters.

That competence also helps a teacher connect algebra with physical judgment: every numerical answer must say what system lost mechanical energy, where the transformed energy went, and whether the model remains valid after the contact has heated or changed.
`;export{e as default};
