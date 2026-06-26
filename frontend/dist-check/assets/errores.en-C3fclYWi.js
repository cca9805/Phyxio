const e=`# Common Errors in the Kelvin-Planck Statement\r
\r
## Conceptual Errors\r
\r
### Error 1: "The first law allows a perfect engine"\r
\r
**Description.** The student reasons that, if energy is conserved, all [[Q_H]] can simply become [[W]]. This ignores that the first law does not decide direction or energy quality.\r
\r
**Why it is incorrect.** Kelvin-Planck adds an independent restriction: in a [[ciclo]], the only effect cannot be taking heat from one reservoir and converting it completely into work. The energy balance can close while the entropy balance fails.\r
\r
**Correction.** First apply energy conservation. Then apply the second-law prohibition. Both must hold.\r
\r
**Contrast mini-example.** If an engine receives 1000 J and delivers 1000 J as work without rejection, it conserves energy but violates the second law. If it receives 1000 J, delivers 350 J and rejects 650 J, it may be compatible with Kelvin-Planck.\r
\r
### Error 2: "Rejected heat is only poor engineering"\r
\r
**Description.** The student thinks [[Q_C]] would disappear with perfect materials, frictionless turbines or ideal insulation.\r
\r
**Why it is incorrect.** Improvements reduce irreversibilities, but they do not remove the rejection requirement for a cyclic engine between finite reservoirs. Even a reversible Carnot cycle rejects heat.\r
\r
**Correction.** Interpret [[Q_C]] as a structural part of the cycle, not only as an accidental loss. Engineering can move [[eta]] closer to [[eta_carnot]], but not make [[eta]] equal to one.\r
\r
**Contrast mini-example.** A better turbine increases net work, but it still needs a condenser or cold reservoir. Without a cold reservoir, there is no ordinary cyclic heat engine.\r
\r
## Model Errors\r
\r
### Error 3: "Applying Kelvin-Planck to any process with heat"\r
\r
**Description.** The student applies the statement to a one-shot expansion, a chemical reaction or a battery as if every device were a cyclic heat engine.\r
\r
**Why it is incorrect.** The statement concerns devices operating in a [[ciclo]]. If the system ends in another state, internal energy, composition, mass or chemical energy changes must be included.\r
\r
**Correction.** Before using Kelvin-Planck, ask whether the system returns to its initial state. If not, use an open or non-cyclic process model.\r
\r
**Contrast mini-example.** A gas expanding once can produce work while changing state. A cyclic engine must return to the start and cannot hide stored internal energy.\r
\r
## Mathematical Errors\r
\r
### Error 4: "Using Celsius in the Carnot limit"\r
\r
**Description.** Temperatures are entered in degrees Celsius in the Carnot limit, producing an absurd efficiency.\r
\r
**Why it is incorrect.** Thermodynamic temperature ratios use an absolute scale. [[T_H]] and [[T_C]] must be expressed in kelvin.\r
\r
**Correction.** Always convert to kelvin before comparing temperatures in the Carnot limit. Then verify that [[eta_carnot]] lies between zero and one.\r
\r
**Contrast mini-example.** A reservoir at 500 degrees Celsius and an environment at 25 degrees Celsius are not entered as 500 and 25 in the Carnot ratio; they are converted to absolute temperatures.\r
\r
## Interpretation Errors\r
\r
### Error 5: "Confusing high efficiency with second-law violation"\r
\r
**Description.** The student thinks any large [[eta]] violates Kelvin-Planck.\r
\r
**Why it is incorrect.** The second law does not forbid efficient engines. It forbids perfect efficiency in a single-reservoir cycle and forbids exceeding the reversible limit between two reservoirs.\r
\r
**Correction.** Compare [[eta]] with one and with [[eta_carnot]]. If it remains below both boundaries and the energy balance closes, there is no violation.\r
\r
**Contrast mini-example.** An engine with efficiency 0.45 may be possible if its Carnot limit is 0.60. An engine with efficiency 1.00 in a cycle is forbidden.\r
\r
## Quick self-control rule\r
\r
If a proposal says "a cyclic engine takes heat from a single reservoir and all of it leaves as work", mark a Kelvin-Planck violation. If there are two reservoirs, calculate [[eta]], check [[eta_carnot]] and look for the rejected heat [[Q_C]].\r
`;export{e as default};
