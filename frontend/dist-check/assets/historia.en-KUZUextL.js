const e=`# History\r
\r
## Historical problem\r
\r
How can the changing velocity of a body be represented so that the distance it covers can be calculated, without algebra or infinitesimal calculus at hand?\r
\r
From the fourteenth to the seventeenth century, this problem drove the invention of kinematic diagrams long before a formal mathematical notation for derivatives and integrals existed.\r
\r
## Prior conceptual difficulty\r
\r
Before the work of the Oxford Calculators and the Paris school, the idea that velocity could **vary continuously** was problematic. The Aristotelian tradition distinguished between "natural motion" and "violent motion" but offered no quantitative framework for describing how a quantity changes from instant to instant. There was no clear way to answer the question: "if the velocity is changing, how much total distance is covered?"\r
\r
## What changed\r
\r
### Nicole Oresme and the configuration diagram (c. 1350)\r
\r
The philosopher and mathematician Nicole Oresme, in his *Tractatus de configurationibus qualitatum et motuum*, proposed representing the intensity of a quality (for example, velocity) as the height of a geometric figure whose base is the time interval. In this scheme, uniformly accelerated motion was depicted as a **right triangle** and uniform motion as a **rectangle**. The key insight was his realisation that the **area of the figure** equals the distance covered, anticipating the concept of the integral by more than three centuries.\r
\r
### The Merton College Calculators, Oxford (c. 1330–1350)\r
\r
The *Merton mean-speed theorem* — stated by William Heytesbury, Richard Swineshead, and John Dumbleton — established that a uniformly accelerating body covers the same distance as one moving for the same time at the mean of its initial and final velocities. This result, equivalent to the area of the triangle, is the first quantitative formulation of the relationship between variable velocity and displacement.\r
\r
### Galileo Galilei (c. 1604–1638)\r
\r
Galileo took up the ideas of Oresme and the Mertonians and gave them experimental substance. In his *Discorsi e dimostrazioni matematiche intorno a due nuove scienze* (1638) he used velocity-versus-time diagrams to analyse free fall and motion on an inclined plane. By timing events with a water clock and marking distances along the ramp, he verified that the law d ∝ t² was consistent with a **triangular velocity graph**, consolidating graphical reading as a predictive tool.\r
\r
## Impact on physics\r
\r
| Period | Advance |\r
|-----------------|----------------------------------------------------------------|\r
| 14th c. | Qualitative representation of changing quantities (Oresme, Merton) |\r
| 17th c. | Experimental verification of the \\(v\\)-\\(t\\) graph (Galileo) |\r
| 17th–18th c. | Newton and Leibniz formalise slopes as derivatives and areas as integrals; the graph evolves from a visual tool to a rigorous representation of functions |\r
| 19th c. | Clapeyron uses \\(P\\)-\\(V\\) diagrams in thermodynamics, following the same "area = integrated quantity" logic |\r
| 20th–21st c. | Digital sensors and software generate real-time graphs; graphical analysis becomes a standard laboratory competence |\r
\r
## Connection with modern physics\r
\r
The technique of reading slopes and areas from a graph is by no means limited to elementary kinematics. In particle physics, Feynman diagrams encode scattering amplitudes as graphical elements; in cosmology, the Hubble diagram (recession velocity versus distance) revealed the expansion of the universe by reading the slope as the Hubble constant. Even in general relativity, Minkowski diagrams trace world lines whose slope relates velocity to the speed of light.\r
\r
In all these fields, the pedagogical principle is the same as the one practised here: **the slope of a curve indicates a rate of change, and the area under the curve indicates an accumulated quantity**. What Oresme discovered with rectangular and triangular figures in the fourteenth century remains the cornerstone of graphical analysis throughout physics.\r
`;export{e as default};
