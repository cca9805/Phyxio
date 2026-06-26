const e=`# History: Complete Analysis of Frictional Systems\r
\r
## Historical problem\r
\r
Friction was one of the first mechanical phenomena studied quantitatively. Leonardo da Vinci, at the end of the fifteenth century, conducted experiments with blocks sliding on flat surfaces and recorded that the force needed to move an object was proportional to its weight but independent of the contact area. However, his notebooks remained unpublished for centuries. The central question was deceptively simple: what force must be applied for an object to start sliding, and how does the system behave once in motion?\r
\r
## Prior conceptual difficulty\r
\r
Before clear friction laws were formulated, the main confusion was the belief that friction depended on contact area, as everyday intuition suggests. Seventeenth-century natural philosophers did not distinguish between static and kinetic friction, treating them as a single resistive phenomenon. It was also unclear whether friction was a property of the material, the surface or the load. This lack of distinction between regimes prevented reliable quantitative predictions.\r
\r
## What changed\r
\r
Guillaume Amontons rediscovered in 1699 the empirical laws that Da Vinci had observed: the friction force is proportional to the normal load and independent of the apparent contact area. Charles-Augustin de Coulomb, in 1785, added the crucial distinction between static and kinetic friction, demonstrating experimentally that the kinetic coefficient is usually smaller than the static one. Coulomb also verified that the kinetic coefficient is approximately independent of velocity over a wide range. These three empirical laws (proportionality to the normal, independence from area, static-kinetic distinction) constitute the Coulomb model that remains the foundation of current teaching.\r
\r
## Impact on physics\r
\r
The Amontons-Coulomb laws made it possible for the first time to calculate sliding thresholds and to design machines with quantitative predictions of friction losses. Nineteenth-century mechanical engineering (railways, industrial machinery, brakes) relied directly on this model. Moreover, the distinction between static and kinetic regimes inspired the more general idea of regime bifurcation, which reappears in thermodynamics, electromagnetism and fluid mechanics.\r
\r
## Connection with modern physics\r
\r
Modern tribology has revealed that Coulomb's laws are macroscopic approximations of complex microscopic processes: the micro-contacts between surfaces deform plastically, and actual friction depends on velocity (Stribeck law), temperature and roughness at the nanometre scale. Nevertheless, for moderate speeds and dry surfaces, the Coulomb model remains extraordinarily accurate. Vehicle dynamics simulators, manipulation robots and traction control systems use refined versions of the same scheme: compare the tangential force with a threshold and decide the regime before calculating the dynamic response.\r
`;export{e as default};
