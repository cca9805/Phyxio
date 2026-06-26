const e=`# P-V Diagrams\r
\r
## Conceptual context\r
\r
P-V diagrams are the fundamental tool for reading thermodynamic processes in gases. Each point on the plane links pressure [[P]] with volume [[V]] and provides a direct diagnostic of the gas state.\r
\r
This leaf focuses on the interpretation of the area under the trajectory and the shape of the process path. That geometric reading connects state variables with mechanical work and energy transfer.\r
\r
## 🟢 Essential level\r
\r
The essential idea is that the curve shape tells what the gas did. A horizontal path means pressure remained constant; a path moving to the right means volume increased, so the gas did work.\r
\r
When volume does not change, the area under the curve is zero and there is no mechanical work. If the path closes a loop, the enclosed area represents net work exchanged between the gas and the environment.\r
\r
In expansion, the trajectory moves to larger volumes. In compression, the trajectory moves to smaller volumes. The sign of the work follows the direction of the volume change.\r
\r
The P-V diagram also makes it easy to see when a segment does no work, such as a vertical line, versus when the area under the path accounts for exchanged energy.\r
\r
## 🔵 Formal level\r
\r
The ideal gas relation is expressed as:\r
\r
{{f:gas_ideal}}\r
\r
This formula connects state variables [[P]], [[V]], [[n]], [[T]], and constant [[R]]. For an isobaric process, pressure is constant while the volume changes.\r
\r
Work in a constant-pressure process is expressed as:\r
\r
{{f:trabajo_isobarico}}\r
\r
In this expression, [[DeltaV]] is the difference between final and initial volume. The work is proportional to that volume change and its sign depends on the direction of displacement.\r
\r
The ideal gas law also explains how a process path relates to families of isotherms: if [[T]] is constant, the path is a smooth curve. If [[P]] is constant, the path is horizontal. These are formal readings of the same physical relation.\r
\r
The isobaric work expression reinforces that it is not enough to know the volume alone: work depends on how volume changes and whether the pressure used represents the actual process.\r
\r
## 🔴 Structural level\r
\r
In a P-V diagram, the physical structure of the process is organized by regimes. An isobaric process is a horizontal segment. An isochoric process is a vertical segment with zero work. An isothermal process appears as a curved segment that preserves the effective temperature of the gas.\r
\r
The diagram distinguishes state variables from process variables. [[P]] and [[V]] define each point. [[W]] and [[DeltaV]] describe how the path evolves between points.\r
\r
This separation is essential because the same path can be read in two ways: as the state values at each instant, and as an accumulated geometric area. Work is a geometric property of the curve, not an independent state variable.\r
\r
In a real process, the path can combine different segments. For example, a closed cycle may include an expansion segment and a compression segment. Net work is the difference between the area of the expansion and the area of the compression.\r
\r
It also matters whether the pressure is truly constant. If pressure varies, the area under the curve is not simply pressure times volume change. The work must be understood as the area under a general curve, which highlights the geometric origin of the concept.\r
\r
Moreover, the diagram’s validity depends on each point representing a well-defined thermodynamic state. If the process is very fast or irreversibly out of equilibrium, the trajectory stops describing clear successive states and the area interpretation loses precision.\r
\r
The P-V diagram is most direct for ideal gases or processes close to quasi-static. For real gases or phase-change processes, curve shape and position can be affected by non-ideality, and the relation between area and work requires more careful evaluation.\r
\r
In short, the diagram is valid when pressure and volume can be measured at each state, when the process can be approximated by a succession of nearby states, and when a closed cycle defines net work delivered or received.\r
\r
## Deep physical interpretation\r
\r
The deep physical interpretation of a P-V diagram is reading directions and areas. A path to the right indicates gas expansion. A path to the left indicates compression. The sign of [[W]] follows the direction of volume change and the effective pressure force along the path.\r
\r
The shape of the curve also reveals whether the process is closer to a quasi-static regime and whether the gas remained ideal while moving between well-defined states.\r
\r
From the thermodynamic perspective, the P-V diagram is a diagnostic tool. High-pressure, low-volume states lie in the upper-left region; low-pressure, high-volume states lie in the lower-right region. That spatial mapping makes the gas behavior easier to compare.\r
\r
Therefore, the physical interpretation is not just numbers. It is understanding the geometry of the path as a record of energy transfer and equilibrium conditions.\r
\r
## Order of magnitude\r
\r
For laboratory gases, a pressure of order 10⁵ Pa is typical. If pressure remains constant and volume changes by a few hundred milliliters, the work is on the order of hundreds to thousands of joules. A volume change of 0.03 m³ at 1.2×10⁵ Pa produces work near 3×10³ J.\r
\r
A volume of 0.01 m³ is approximately ten liters, while 0.05 m³ is approximately fifty liters. In the diagram, those changes correspond to visible horizontal displacements and measurable areas.\r
\r
A temperature difference of 10 K in a gas at constant pressure is usually less relevant to work than the volume change itself. This order-of-magnitude view helps decide whether the P-V interpretation is sufficient.\r
\r
## Personalized resolution method\r
\r
1. Identify whether the process keeps any variable constant. In a P-V diagram, that appears as a horizontal, vertical, or curved segment.\r
2. Classify the process: isobaric, isochoric, isothermal, or a combination of segments.\r
3. Record the initial and final states with [[P]], [[V]], and, if relevant, [[T]] and [[n]].\r
4. Compute [[DeltaV]] as the difference between final and initial volume.\r
5. If pressure is constant, apply the isobaric work formula. Otherwise, interpret work as the area under the curve.\r
6. Check whether the numerical result is consistent with the curve shape.\r
\r
## Special cases and extended example\r
\r
A special case occurs when pressure is nearly constant but not exactly. In a real engine cycle, the expansion leg may appear nearly horizontal at one scale, while small deviations change the work evaluation.\r
\r
Another case is a vertical segment followed by a horizontal segment. The vertical leg produces no work, while the horizontal leg does. The total work is determined by the horizontal area only.\r
\r
An extended example is a piston that first heats at fixed volume and then expands at almost constant pressure. On the P-V diagram, two distinct segments appear: a vertical climb and then a horizontal extension. The interpretation is that the gas received heat without work first, then delivered work during expansion.\r
\r
This construction shows why distinguishing curve shape from endpoint states is essential.\r
\r
## Real student questions\r
\r
If the curve is horizontal, does that always mean temperature is constant? No. A process can be isobaric with changing temperature as long as pressure remains fixed.\r
\r
Does a closed loop always produce positive net work? No. If compression consumes more area than expansion, the net work can be negative.\r
\r
How do I know whether to interpret the area as work done by the gas or work done on the gas? Look at the sign of [[DeltaV]]: positive expansion means work by the gas; negative compression means work on the gas.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects with ideal gas law, thermodynamic processes, and the first law of thermodynamics. It also links to internal energy and thermodynamic cycles because P-V work is the foundation for efficiency analysis.\r
\r
The recommended path is: first master reading [[P]] and [[V]], then classify processes by path shape, and finally compare work of different cycles.\r
\r
## Final synthesis\r
\r
P-V diagrams translate gas thermodynamics into a clear geometric language. Work is the area under the path, and the path shape determines whether the gas expands, compresses, or follows a process at constant variables.\r
\r
Interpreting the diagram correctly answers the leaf question: how to connect the shape of a P-V path with work and state changes.`;export{e as default};
