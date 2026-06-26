const e=`## Historical problem\r
\r
In the mid-18th century, physicists and natural philosophers observed that ice melted slowly even when fire burned beside it at a much higher temperature, and that boiling water never exceeded a certain temperature no matter how much more strongly it was heated. These observations contradicted the intuitive notion that more heat always produces more temperature. The unanswered question was: why does heat disappear during a phase change without producing any temperature rise?\r
\r
The difficulty lay in the caloric model of the time, which identified temperature with the "quantity of caloric" in a body. If heat entered ice and the temperature did not rise, where was the caloric going? The answer required conceptually separating temperature and heat, which had not yet been formally articulated.\r
\r
## Prior conceptual difficulty\r
\r
The main obstacle was the identification of heat with temperature in physical thinking prior to Black. If heat and temperature were the same thing (or proportional), it made no sense that a body could absorb heat without rising in temperature. Experiments showing ice melting at constant temperature were an inexplicable mystery with the conceptual tools available.\r
\r
The second difficulty was empirical: quantitatively measuring the heat exchanged during a phase change required a calorimeter, which did not yet exist as a systematic instrument. Without a quantitative measure, the phenomenon could be described qualitatively but could not be formulated as a law.\r
\r
## What changed\r
\r
Joseph Black, between 1757 and 1762, formulated the concept of latent heat (from Latin latens: hidden) based on systematic observations of the melting of ice and boiling of water. Black argued that the caloric did not disappear, but was "hidden" in the solid or in the vapor during the transition, changing the structure of the material without affecting temperature. He called this heat "latent" to distinguish it from "sensible" heat that did produce temperature change.\r
\r
Black quantified that melting 1 pound of ice at 0 C required the same caloric as heating 1 pound of water from 0 C to 60 F (approximately 33 C), giving a first estimate of L_f for water. He also determined that the latent heat of vaporization of water was much greater than that of fusion, though he could not quantify it precisely.\r
\r
Johan Wilcke independently conducted similar experiments in Sweden around 1772, reaching concordant results. James Watt used the concept of latent heat directly in the design of his improved steam engine: he understood that condensing steam in the cylinder wasted energy because the [[Q_lat]] of vaporization had to be resupplied each cycle, and he designed the separate condenser to avoid that waste.\r
\r
## Impact on physics\r
\r
The discovery of latent heat was the second pillar of calorimetry (alongside specific heat, also formulated by Black), and laid the foundations for 19th-century thermodynamics. It allowed quantitative explanation of the water cycle in nature, the temperature differences between oceanic and continental climates, and the operation of steam engines.\r
\r
The introduction of latent heat into the analysis of the Carnot cycle (1824) and refrigeration cycles (Perkins, 1834; Gorrie, 1844) was direct. Without the concept of [[Q_lat]], the systematic design of heat engines would have been impossible.\r
\r
The microscopic explanation of latent heat had to wait for the kinetic theory of matter and the statistical thermodynamics of the 19th and early 20th centuries. Boltzmann and Clausius explained that [[L]] measures the energy needed to break the energetic bonds between molecules during the transition: in melting, the long-range forces of the crystal; in vaporization, practically all intermolecular cohesion forces.\r
\r
## Connection with modern physics\r
\r
Latent heat has a precise description in statistical mechanics: it is the enthalpy difference between the two phases in equilibrium at [[T_trans]]. In the language of first-order phase transitions (Ehrenfest, 1933), the jump in enthalpy at [[T_trans]] is exactly [[Q_lat]] = [[m]]  [[L]], whereas in second-order transitions (such as the ferromagnetic transition) there is no latent heat and [[L]] is zero.\r
\r
The concept of latent heat appears also in particle physics as an analogy: the "phase transition" of the quark-gluon plasma to the hadronic state in the primordial universe, microseconds after the Big Bang, released an amount analogous to a latent heat that contributed to primordial nucleosynthesis. The latent heat of ordinary phase changes and that of these cosmological phase transitions share the same mathematical description of statistical thermodynamics.\r
\r
`;export{e as default};
