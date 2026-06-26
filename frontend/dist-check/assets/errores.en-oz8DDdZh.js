const e=`# Frequent errors\r
\r
## Conceptual errors\r
\r
### Error 1: expecting kinetic energy to grow linearly with speed\r
Por que parece correcto: many introductory relationships feel proportional.\r
Señal de detección: the student says that doubling [[v]] only doubles [[K]].\r
Mini-ejemplo de contraste: with the same [[m]], doubling speed makes kinetic energy four times larger.\r
Corrección conceptual: remember that [[K]] is far more sensitive to [[v]] than to [[m]] because speed enters quadratically.\r
\r
### Error 2: turning a signed velocity into negative kinetic energy\r
Por que parece correcto: velocity components often carry sign in kinematics.\r
Señal de detección: a negative value of [[K]] appears after substitution.\r
Mini-ejemplo de contraste: a body moving left can still brake, collide, and transfer energy.\r
Corrección conceptual: use speed magnitude [[v]] when computing kinetic energy.\r
\r
## Model errors\r
\r
### Error 3: applying the translational model when rotation matters\r
Por que parece correcto: the basic formula is easy and familiar.\r
Señal de detección: the statement involves rolling or rigid-body rotation, but only translational energy is used.\r
Mini-ejemplo de contraste: a rolling wheel stores energy in both translation and rotation.\r
Corrección conceptual: decide first whether a purely translational reading is sufficient.\r
\r
## Mathematical errors\r
\r
### Error 4: mixing units and losing the correct scale\r
Por que parece correcto: the formula is remembered but unit discipline is weak.\r
Señal de detección: grams or kilometers per hour are inserted without conversion.\r
Mini-ejemplo de contraste: a school-level ball can suddenly acquire car-scale energy if units are mishandled.\r
Corrección conceptual: convert to SI before calculating and check that [[K]], [[dK]], and [[Wnet]] end in joules.\r
\r
## Interpretation errors\r
\r
### Error 5: treating [[Wnet]] as the work of one force without justification\r
Por que parece correcto: one visible force often dominates simple examples.\r
Señal de detección: the entire change [[dK]] is attributed to a single force while others are ignored.\r
Mini-ejemplo de contraste: a real braking process may involve brakes, slope, rolling resistance, and air drag.\r
Corrección conceptual: state explicitly that [[Wnet]] is the sum of the work of all relevant forces on the chosen system.\r
\r
## Quick self-control rule\r
\r
Before accepting the answer, check four things. First, [[K]], [[Ki]], and [[Kf]] cannot be negative. Second, if the system slows down, [[dK]] and usually [[Wnet]] should be negative. Third, modest relative changes in [[v]] can produce large changes in [[K]], so scale matters. Fourth, if the result does not support a clear causal story about why the system gained or lost kinetic energy, the exercise is not yet fully solved.`;export{e as default};
