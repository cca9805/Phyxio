const e=`## Historical problem

Before Carnot there was no universal way to compare heat engines: each design was judged by fuel, working fluid, or mechanical detail. The historical problem was to find a technology-independent upper bound.

## Prior conceptual difficulty

The caloric theory treated heat as a conserved substance and did not clearly separate real process, ideal process, and reversible limit. A quantity measuring the global trace of a process was missing.

## What changed

## Historical timeline

### 1824 — Sadi Carnot publishes "Reflections on the Motive Power of Fire"

Carnot established that the efficiency of a heat engine depends only on the temperatures of the hot and cold reservoirs, not on the working fluid. He described the ideal cycle (now the Carnot cycle) as a maximum efficiency reference. He did this without knowledge of the first law of thermodynamics and using the caloric theory (erroneous), but his fundamental conclusions proved correct.

Carnot demonstrated that no engine operating between two reservoirs can exceed the efficiency of a reversible engine, and that all reversible engines between the same reservoirs have the same efficiency. This was the first universal limitation theorem in thermodynamics.

### 1850 — Rudolf Clausius formalises the second law

Clausius reformulated Carnot's ideas in precise mathematical terms, defining entropy as a state function and the reversibility condition as [[DeltaS_univ]] = 0. His inequality (cyclic integral of dQ/T ≤ 0, with equality for reversible processes) provided the quantitative tool Carnot lacked.

Clausius introduced the formal distinction between reversible and irreversible processes and proved that the entropy of the universe never decreases. The apocryphal phrase "Die Entropie der Welt strebt einem Maximum zu" summarises his contribution: the entropy of the world tends towards a maximum.

### 1851 — William Thomson (Lord Kelvin) and the absolute temperature scale

Thomson reformulated the second law independently of Clausius and demonstrated that the Carnot cycle efficiency defines an absolute temperature scale independent of any thermometric substance. Thermodynamic temperature (kelvin) is defined precisely by the reversible cycle relation Q_C/Q_H = [[T_frio]]/[[T_caliente]].

This connection between reversible processes and the definition of temperature was a conceptual milestone: the temperature scale itself is founded on the idea of reversibility.

### 1865 — Clausius formally introduces the term "entropy"

Clausius coined the term "entropy" (from the Greek τροπή, transformation) to name the state function whose variation is dS = δQ_rev / T. The reversible process condition (δQ_rev) was thus incorporated into the very definition of entropy. Every entropy measurement requires, at least conceptually, a reversible path between states.

### 1875 — Josiah Willard Gibbs and equilibrium thermodynamics

Gibbs extended Clausius's formalism to multicomponent and multiphase systems, using thermodynamic potentials to study chemical and phase equilibrium. His work established that equilibrium can be recognised through an appropriate potential minimum under the imposed constraints, and that equilibrium phase transitions are reversible processes.

Gibbs's contribution was decisive for applying reversibility to chemistry and process engineering, extending the concept beyond heat engines.

### 1905–1909 — Constantin Carathéodory and axiomatisation

Carathéodory provided an axiomatic formulation of the second law based on adiabatic inaccessibility: "In the neighbourhood of every equilibrium state, there exist states inaccessible by adiabatic processes." This formulation eliminates reference to heat engines and defines reversibility as the boundary between accessible and inaccessible states.

### 1975 — Curzon and Ahlborn: finite-time thermodynamics

Curzon and Ahlborn published the efficiency at maximum power of an endoreversible cycle: eta_CA = 1 − sqrt([[T_frio]]/[[T_caliente]]). This result broke with the tradition of evaluating only maximum efficiency (Carnot) and opened the field of finite-time thermodynamics, where internal reversibility is maintained but heat transfer with reservoirs is irreversible.

This model predicts real power plant efficiencies with remarkable accuracy and marked the beginning of modern thermoeconomic optimisation.

## Impact on physics

Reversibility turned the second law into a predictive tool: it allowed absolute temperature, maximum efficiency, entropy as a state function, and limits on extractable work to be defined.

## Current impact

The concept of reversible process remains the pillar of engineering thermodynamics. Every energy efficiency evaluation (power plants, refrigerators, fuel cells, storage systems) is based on comparing the real process with the reversible one. Second-law efficiency, destroyed exergy, and exergy analysis are tools derived directly from the condition [[DeltaS_univ]] = 0.

In current research, reversible processes serve as reference in thermodynamic computation (Landauer's reversible computing), molecular nanomotors (nanoscale Carnot engines), and quantitative biology (efficiency of cellular biochemical processes compared to the reversible limit).

## Connection with modern physics

The idea remains central in reversible computation, Landauer limits, nanomotors, and finite-time thermodynamics: every real process is evaluated against a reversible limit with no net entropy generation.

## Connecting thread

Carnot (1824) intuited the efficiency limit without formal tools. Clausius (1850-1865) formalised entropy and the reversibility condition. Thomson (1851) connected reversibility with the definition of temperature. Gibbs (1875) extended the concept to chemistry. Carathéodory (1905) axiomatised it. Curzon and Ahlborn (1975) complemented it with the reality of finite power. The central idea — that the reversible process is the ideal limit against which every real process is measured — has not changed in two centuries.
`;export{e as default};
