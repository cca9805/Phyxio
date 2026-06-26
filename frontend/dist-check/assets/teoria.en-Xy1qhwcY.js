const e=`\uFEFF# The Rocket Equation\r
\r
## Conceptual context\r
\r
Tsiolkovsky's rocket equation is the most celebrated application of the variable-mass momentum balance. It describes how a rocket accelerates by expelling mass at high speed without relying on any external medium. It is the foundational equation of astronautics: it calculates the final velocity as a function of fuel mass, exhaust velocity, and external forces such as gravity.\r
\r
## 🟢 Essential level\r
\r
A rocket accelerates by expelling mass at high speed. The total velocity change it can achieve depends on two factors: how fast the exhaust leaves and how much of the initial mass [[m0]] can be converted into expelled gas. The crucial insight is that the relationship is logarithmic, not linear. Doubling the desired velocity change does not merely double the fuel requirement; it demands a dramatically larger mass ratio. This logarithmic wall is the fundamental reason space travel is so expensive and why rocket engineers obsess over every kilogram.\r
\r
The mass ratio is the quotient of initial mass (the fully loaded rocket) to final mass [[mf]] (the dry structure plus payload). A larger ratio means more fuel relative to useful payload, and the logarithm ensures diminishing returns: each additional increment of speed costs more fuel than the previous one.\r
\r
**Direct example.** A rocket with an exhaust speed of 3000 m/s and a mass ratio of 10 can achieve roughly 6900 m/s of velocity change. That is impressive, but still falls short of the roughly 9400 m/s needed to reach low Earth orbit once gravity and drag losses are included.\r
\r
> [!IMPORTANT]\r
> The rocket equation does not describe instantaneous thrust. It describes the total velocity-change budget that a given combination of initial mass, final mass, and exhaust speed can purchase.\r
\r
## 🔵 Formal level\r
\r
### Derivation\r
\r
Starting from the variable-mass equation without external forces, the instantaneous mass of the rocket multiplied by its acceleration equals the exhaust velocity [[ve]] multiplied by the ejection rate. Dividing both sides by mass, the infinitesimal velocity increment is proportional to the relative decrease in mass multiplied by [[ve]]. Integrating from the initial to the final state gives the rocket equation:\r
\r
\r
When the mission requirement is the required exhaust speed, the inverse rearrangement gives:\r
\r
\r
### With gravity\r
\r
If the rocket ascends vertically against gravity, the ideal [[DeltaV]] is reduced by the product of the gravitational acceleration and the burn time tb. This term is called the **gravity loss**: the rocket loses effective speed simply by fighting gravity while burning fuel.\r
\r
### Thrust and instantaneous acceleration\r
\r
Thrust equals [[ve]] multiplied by the ejection rate. The instantaneous acceleration equals the thrust divided by the instantaneous mass minus the gravitational component. Since the mass decreases, **acceleration increases** over time when thrust is constant. Astronauts experience maximum acceleration just before engine cutoff.\r
\r
### Specific impulse\r
\r
Specific impulse Isp measures a rocket engine's efficiency. It is defined as the ratio of [[ve]] to the standard gravitational acceleration g0 equal to 9.81 m/s², and is measured in seconds. An engine with Isp equal to 300 s has [[ve]] equal to 2943 m/s. Chemical engines: 250–460 s. Ion engines: 1500–5000 s (but with very low thrust).\r
\r
{{f:ve_from_dv}}\r
\r
{{f:dv}}\r
\r
## 🔴 Structural level\r
\r
### Multi-stage rockets\r
\r
The Tsiolkovsky equation shows that the required mass ratio grows exponentially with [[DeltaV]]. For high-[[DeltaV]] missions **stages** are used, each discarded when empty. Each stage has its own mass ratio. By discarding spent structure, the next stage starts with a smaller initial mass, improving efficiency.\r
\r
**Numerical example.** A single-stage rocket with mass ratio 10 and [[ve]] equal to 3000 m/s achieves roughly 6909 m/s. A two-stage rocket, each stage with mass ratio near 3.16, achieves the same [[DeltaV]], but the total structural mass is lower because the first structure is discarded.\r
\r
### Limits of chemical rocketry\r
\r
To reach Earth's escape velocity (11.2 km/s) with [[ve]] equal to 3000 m/s, the required mass ratio is approximately 41.7, meaning 97.6% of the initial mass must be fuel. With structure and payload, this is impossible in a single stage, hence multi-stage rockets are necessary.\r
\r
### Relativistic rocket equation\r
\r
At speeds approaching c, the Tsiolkovsky equation is modified so that the ratio of the rocket speed to c depends on the mass ratio and the ratio of [[ve]] to c. This shows that even with [[ve]] equal to c (photonic propulsion), reaching relativistic speeds requires impractically high mass ratios.\r
\r
### Energy efficiency\r
\r
The efficiency of kinetic-energy transfer to the rocket depends on the rocket–gas relative speed. It is maximised when the rocket's speed equals [[ve]] (the exhaust is stationary in the ground frame and carries away zero kinetic energy).\r
\r
## Deep physical interpretation\r
\r
The rocket equation is a lesson in engineering humility: the logarithmic dependence of [[DeltaV]] on the mass ratio means that every additional km/s of speed costs exponentially more fuel. This "logarithm wall" is the fundamental reason space travel is so expensive and why single-stage-to-orbit rockets remain barely feasible. The equation also showcases the elegance of momentum conservation: in the vacuum of space, with nothing to push against, a rocket propels itself through the same principle a skater uses when throwing a ball.\r
\r
\r
## Order of magnitude\r
\r
To reach LEO ([[DeltaV]] near 9.4 km/s with losses) with [[ve]] equal to 3 km/s, roughly 96% of the initial mass is fuel. The Saturn V (initial mass near 2.97 million kg) placed roughly 47 000 kg into lunar orbit, barely 1.6% of launch mass. The Falcon 9 (initial mass near 550 000 kg) carries roughly 22 800 kg to LEO (4.1%), thanks to first-stage reuse.\r
\r
\r
## Personalized resolution method\r
\r
1. **Identify** [[ve]] (or Isp), [[m0]], [[mf]], and external forces.\r
2. **Without gravity**: apply the rocket equation directly using [[m0]], [[mf]], and [[ve]].\r
3. **With gravity**: subtract g·tb from the ideal [[DeltaV]].\r
4. **If multi-stage**: compute each stage's [[DeltaV]] and sum.\r
5. **Check** consistency: the mass ratio must be greater than 1 and [[mf]] must exceed the dry structure mass.\r
\r
## Special cases and extended example\r
\r
**Full example.** A two-stage rocket to reach low orbit ([[DeltaV]] total near 9400 m/s). Engine: [[ve]] equal to 3000 m/s. Total mass: 100 000 kg. Suppose [[DeltaV]] is split: stage 1 = 5000 m/s, stage 2 = 4400 m/s.\r
\r
Stage 1: mass ratio near 5.30. Mass at end of stage 1: roughly 18 868 kg. Stage 1 fuel: roughly 81 132 kg.\r
\r
If stage 1 structure is 10% of the stage 1 propellant mass: structure = 8113 kg, then discarded.\r
\r
Stage 2 starts at roughly 10 755 kg. Mass ratio near 4.34. Final mass: roughly 2478 kg. Stage 2 fuel: roughly 8277 kg. Stage 2 structure (~10%): 828 kg.\r
\r
**Payload**: roughly 1650 kg, i.e. 1.65% of the total launch mass. This is realistic: the Falcon 9 puts roughly 2.5% into low orbit.\r
\r
## Real student questions\r
\r
- **Why can't we just add more fuel to go faster?** Because more fuel adds mass, and the logarithm grows very slowly. Each extra kilogram of fuel must itself be accelerated, yielding diminishing returns.\r
- **Is an ion engine better than a chemical one?** It has a higher Isp (more [[DeltaV]] per kg of fuel), but very low thrust. It is ideal for long missions in space, not for lifting off from Earth.\r
- **Why multi-stage rockets?** Because discarding the empty first-stage structure reduces the mass the second stage must accelerate, dramatically improving the effective mass ratio.\r
\r
## Cross-cutting connections and study paths\r
\r
- **Prerequisite**: [Momentum balance with mass flow](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/balance-de-momento-con-flujo-de-masa).\r
- **Base**: [Linear momentum](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal).\r
- **Extension**: electric propulsion, solar sails, gravitational assists.\r
\r
## Final synthesis\r
\r
The rocket equation connects [[DeltaV]] to [[ve]] and the mass ratio through a natural logarithm. Its logarithmic dependence imposes severe limits on chemical propulsion and motivates multi-stage designs and high-specific-impulse engines. In the presence of gravity, the gravity loss g·tb reduces the effective [[DeltaV]]. Despite its simplicity, this equation captures the essence of all astronautics: converting mass into speed, kilogram by kilogram, against the unforgiving mathematics of the logarithm.\r
\r
\r
\r
\r
\r
`;export{e as default};
