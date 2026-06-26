const e=`# Applications of Extensive Variables

## 1. Mass Balances in Tanks

In a tank, total mass [[m]] is the main extensive variable. If matter enters, leaves, or accumulates, the balance is written for a total amount. Density [[rho]] may help convert volume into mass, but the conserved inventory is mass.

Dominant variable: [[m]], because it represents total material amount.

Validity limit: If nuclear reactions or conversions outside the classical model occur, ordinary mass conservation must be reformulated.

The practical use is immediate: whether the tank is small or large, total mass scales with how much material it contains. Comparing two tanks by [[rho]] identifies material; comparing them by [[m]] gives inventory.

In industry, this distinction prevents purchasing and storage mistakes. Two tanks may contain the same liquid and have equal [[rho]], but the larger tank requires more structure, more transport cost, and more energy to heat. The extensive decides resources; the normalized property decides material identity.

## 2. Internal Energy in Calorimetry

In calorimetry, [[U]] or changes in internal energy are extensive. A double sample requires approximately double energy to produce the same state change if the material is the same. The total heat capacity of a large body therefore exceeds that of a small one.

Dominant variable: [[U]], because it measures total stored energy.

Validity limit: If phase changes, losses, or large internal gradients occur, simple proportionality may require corrections.

The reading avoids common errors: a warm swimming pool may store much more energy than a hot cup, even if its temperature is lower. Total energy is used for balances; temperature or specific energy is used to compare states.

This is why calorimeters are calibrated carefully: it is not enough to know the material; the participating mass also matters. If the sample is doubled and the same temperature change is desired, exchanged energy approximately doubles. Extensivity turns a laboratory property into a scaling rule.

## 3. Volume and Vessel Design

Volume [[V]] is extensive because it increases when parts of the same system are joined. In vessel, pipe, or chamber design, total volume determines capacity, storage, and occupied space. Density is obtained by dividing mass by volume and does not grow by building a larger tank.

Dominant variable: [[V]], because it controls total spatial capacity.

Validity limit: In non-ideal mixtures, final volume may not be the exact sum of initial volumes.

This application is important in chemistry and processing. When liquids are mixed, mass adds with high precision, but volume may contract or expand. That difference does not destroy extensivity; it shows that the ideal volume-sum model needs a mixing term.

In pressure vessels, total volume also affects safety. Increasing [[V]] allows more fluid and more stored energy under some conditions. To compare vessel materials one uses stresses or pressures; to size capacity one uses the extensive [[V]].

## 4. Total Entropy in Processes

Total entropy [[S]] is extensive. In thermodynamic processes, entropy generated, transported, or accumulated is balanced. Two independent subsystems have total entropy equal to the sum of their entropies, provided references are compatible and extra correlations do not dominate.

Dominant variable: [[S]], because it measures total entropy amount of the system.

Validity limit: In very small systems or systems with strong correlations, additivity requires care.

The application shows why qualitative talk about "disorder" is not enough. Machines, mixtures, and heat transfer need entropy amounts that can be added and compared in J/K.

In second-law balances, total entropy generated in a plant can be the sum of contributions from pumps, heat exchangers, and turbines. That sum helps locate where most availability is destroyed. Specific entropy helps compare streams; total [[S]] evaluates global impact.

## 5. Specific Properties and Thermodynamic Tables

Thermodynamic tables often list specific properties such as energy per kg, specific volume, or specific entropy. These properties are obtained by dividing extensives by mass or amount of matter, allowing samples of different size to be compared without size dominating.

Dominant variable: [[x_esp]], because it turns an extensive inventory into a comparable property.

Validity limit: If the sample is not homogeneous, an average specific property may hide internal gradients.

This application connects extensive and intensive thinking. To calculate total inventory, multiply the specific property by [[m]]. To compare states, use the specific property. Moving between both readings is a central skill in applied thermodynamics.

A common example is reading a steam table. The table gives energy or entropy per kg; the real device contains many kg or a flow rate in kg/s. To obtain total energy or power, one must multiply. Forgetting that step confuses the fluid state with installation size.

This is also why reports must state whether a value is total or specific. The same number with a missing "per kg" can change the engineering conclusion completely.

Clear labels prevent costly scaling mistakes.
They also keep audits traceable.
`;export{e as default};
