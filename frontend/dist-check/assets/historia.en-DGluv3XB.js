const e=`# History and development\r
\r
## Historical problem\r
\r
In the mid-17th century, physicists struggled to predict what would happen after a collision between bodies. Some experiments with pendulums showed that a certain quantity was conserved during impacts, but there was no clear conceptual framework to explain when or why. The central problem was: **what quantity is conserved in a collision, and under what conditions?** The answer depended on a distinction nobody had formulated precisely: the system boundary and the role of external forces.\r
\r
René Descartes was the first to formulate, around 1644, a conservation law for the quantity of motion in his *Principia Philosophiae*. Descartes recognized that the product of mass by velocity was conserved in certain collisions, but his formulation used unsigned scalar values, causing the law to fail in oblique collisions or those with rebound. Christiaan Huygens, through experiments with pendulums, demonstrated empirically that Descartes' results were incorrect in many concrete cases, but he lacked the mathematical language to correct them systematically.\r
\r
## Prior conceptual difficulty\r
\r
Before Newton, the concept of an "isolated system" did not exist as such. Physicists had no systematic way to distinguish between internal and external forces on a system. Everything was treated as a bilateral interaction between two bodies, without considering that the choice of which bodies belonged to the system was arbitrary and critical to the outcome. This conceptual difficulty led Descartes to formulate an incorrect conservation law, and the controversy between Leibniz's school —which preferred vis viva mv²— and Newton's lasted for decades. The debate was not merely technical: it was about which quantity truly captured the "quantity of motion" of the universe.\r
\r
Leibniz introduced the concept of *vis viva* (living force), proportional to mv², which competed with Newtonian momentum until d'Alembert and Euler showed that both were valid quantities with different roles: momentum describes the interaction with external forces, and kinetic energy describes work. The confusion persisted because nobody had explicitly formulated the boundary condition: to apply conservation, one must first define what belongs to the system.\r
\r
## What changed\r
\r
Isaac Newton, in his *Philosophiæ Naturalis Principia Mathematica* (1687), explicitly stated that the change in linear momentum equals the applied external force. The isolated system condition arises directly from his Second Law as a limiting case: when the net force is zero, momentum is conserved. Joseph-Louis Lagrange, in his *Mécanique Analytique* (1788), formally established the distinction between internal forces (which cancel in pairs by the Third Law) and external forces (which modify the system's dynamic state). Leonhard Euler had previously systematized the equations of motion for particle systems, making clear that only external forces contribute to the change in total momentum.\r
\r
The key change was recognizing that internal forces between parts of the system always sum to zero (Third Law), so the condition of isolation refers exclusively to interaction with the external environment. This reformulation turned the conservation principle into a precise and operational tool.\r
\r
## Impact on physics\r
\r
Clarifying the concept of the isolated system had profound and practical consequences. It enabled the development of particle-system mechanics, rigid-body mechanics, and collision theory applied in engineering. In the 19th century, the analogy with thermodynamically closed systems proved fruitful: momentum conservation became one of the pillars of theoretical and experimental physics. In relativistic mechanics, linear momentum acquired a corrected form (p = γmv) that is equally conserved in isolated systems. In quantum mechanics, the momentum operator satisfies the same conservation laws whenever the Hamiltonian is invariant under translations.\r
\r
## Connection with modern physics\r
\r
In 1915, Emmy Noether proved that every continuous symmetry of the laws of physics implies a conserved quantity. The homogeneity of space —physical laws are the same at every point— implies conservation of linear momentum. This derivation, known as **Noether's theorem**, provides the deep justification for the principle: it is not an empirical law, but an inevitable consequence of the translational symmetry of the universe.\r
\r
In particle physics, momentum conservation in collisions is the primary tool for inferring the existence of unobserved particles, such as the neutrino (proposed by Pauli in 1930 to explain missing momentum in beta decay) or the particles of the Standard Model discovered at accelerators. From Descartes to Noether, the idea of the isolated system traveled three centuries, from being an empirical observation about collisions to becoming an inevitable consequence of the symmetry of space.\r
`;export{e as default};
