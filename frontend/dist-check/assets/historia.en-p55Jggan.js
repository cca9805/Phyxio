const e=`# History of Differential and Thermal-Magnetic Protection\r
\r
## Historical problem\r
\r
For decades, domestic electrical protection was limited to fuses that only responded to extreme short-circuit currents. Moderate overloads and earth leakage could persist for long periods without anything acting. Incidents from indirect electrical contact and fires from degraded connections were frequent and difficult to prevent with available instruments. The consumer unit was treated as a "black box": it either tripped or did not, without identifying which physical quantity was out of range.\r
\r
## Prior conceptual difficulty\r
\r
Before the standardisation of differential protection, the distinction between protection of people and protection of installations was conceptually confused. Protection of wiring (MCB function) was mixed up with personal protection against electrical contact (RCD function). This confusion generated incorrect decisions: changing the MCB for a leakage problem, or raising the RCD for an overload problem. The absence of a clearly identified physical quantity as the cause of each trip prevented correct diagnosis.\r
\r
## What changed\r
\r
The introduction of standardised MCBs in the second half of the twentieth century made it possible to associate the trip with measurable [[I]]: if [[I]] exceeded [[I_n]] for long enough, the bimetallic element acted reproducibly. This transformed diagnosis: instead of "why did the box trip?", one could ask "which circuit had elevated [[I]] and why?". The generalisation of the high-sensitivity RCD (30 mA) added a protection layer specific to people, anchored in [[I_delta]] as a physical quantity independent of total [[I]]. This conceptual leap is what allows correctly diagnosing the three incident types: overcurrent, differential leakage, and local thermal defect.\r
\r
## Impact on physics\r
\r
The analysis of residential electrical protection illustrates a fundamental physical principle: physically distinct systems require distinct control quantities. Total [[I]] and [[I_delta]] are independent quantities that can behave completely differently in the same circuit at the same instant. This duality of control quantities is an example of the general principle that the safety of a complex system cannot be guaranteed by a single supervisory variable.\r
\r
## Connection with modern physics\r
\r
Modern smart consumer unit monitors measure [[I_fase]], [[I_neutro]], and [[I_delta]] in real time and log events with high time resolution. This allows detection of progressive degradation patterns: an installation habitually at [[margen_dif]] of 0.7 that rises to 0.9 in humid seasons indicates insulation deterioration before the first trip occurs. The transition from reactive protection to predictive maintenance based on continuous [[margen_dif]] and [[margen_termico]] monitoring is the current direction of technological development in residential electrical management.\r
`;export{e as default};
