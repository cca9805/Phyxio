const e=`\uFEFF# Archimedes' Principle\r
\r
## Conceptual context\r
**Archimedes' Principle** is one of the fundamental pillars of fluid statics and serves as the technological foundation for naval engineering and aerostation. Originally formulated by the Greek polymath Archimedes of Syracuse in the 3rd century BC, this principle establishes that any body submerged, totally or partially, in a fluid at rest experiences an upward vertical force called **buoyancy** (or buoyant force), whose magnitude is exactly equal to the weight of the volume of the fluid that the body has managed to displace to occupy its place.\r
\r
This concept is revolutionary because it allows us to understand that flotation is a parity relationship between the density of the body and that of the surrounding medium. From steel cargo ships to weather balloons, Archimedes' Principle governs any interaction where a solid attempts to displace a fluid within a gravitational field.\r
\r
## 🟢 Essential level\r
Intuitively, we can think of Archimedes' Principle as the "resistance" offered by a fluid to being displaced from its original position. When we submerge an object in water, the fluid is forced to move aside to make room for the body; however, due to internal pressure, the fluid tries to regain that space by pushing the object outward.\r
\r
Imagine you are in a pool and you try to lift a friend. You will notice that they feel much lighter than on land. This occurs because the water is doing part of the work for you, pushing always upward, toward the surface. This "help" from the fluid is what we call buoyancy.\r
\r
- **Buoyancy [[E]]**: It is that upward force that fluid exerts on any object placed within it.\r
- **Displaced volume [[V_des]]**: If we fill a glass of water to the brim and drop a marble in, the water that spills over is the displaced volume. Archimedes discovered that the weight of that little bit of spilled water is identical to the force with which the glass pushes the marble upward.\r
- **The struggle of forces**: To know if something floats or sinks, we just have to see who wins the competition: the weight [[W]] (which pulls down toward the center of the Earth) or the buoyancy [[E]] (which pulls up toward the surface). If buoyancy is greater than weight, the object rises; if weight is greater, the object goes to the bottom.\r
\r
This principle is the reason why a small iron nail sinks without remedy, while an immense ocean liner made of thousands of tons of the same iron manages to stay afloat stably. The difference lies in the fact that the ship, being hollow, displaces an amount of water whose weight far exceeds the weight of the metal itself.\r
\r
## 🔵 Formal level\r
From a mathematical and operational point of view, the **buoyancy** force [[E]] is quantified through the properties of the fluid and the geometry of the body. The fundamental equation defining this magnitude is:\r
\r
{{f:ley_arquimedes}}\r
\r
\r
E = [[rho_f]] cdot g cdot V_{des}\r
\r
\r
Where the following critical parameters intervene:\r
- **[[E]]**: Magnitude of the buoyant force, measured in Newtons (N). Its direction is always opposite to the gravity vector [[g]].\r
- **[[rho_f]]**: Fluid density (text{kg/m}^3). It is vital to remember that we use the density of the liquid or gas surrounding the object, not that of the object itself.\r
- **[[g]]**: Acceleration of gravity (9.81text{ m/s}^2 on the Earth's surface).\r
- **[[V_des]]**: Displaced fluid volume (text{m}^3). If the body is fully submerged, this volume coincides with the total volume of the object. If it is partially floating, it coincides only with the volume of the part that is below the fluid level.\r
\r
### The concept of Apparent Weight\r
When an object is submerged, its weight appears to decrease. This sensation is formalized through **apparent weight** [[W_ap]], which represents the net force that a scale or dynamometer would record underwater:\r
\r
{{f:peso_aparente}}\r
\r
\r
### Flotation criterion according to densities\r
Instead of comparing forces, it is often simpler to compare the average density of the body (rho_c) with that of the fluid ([[rho_f]]):\r
1. **Sinking**: If rho_c > [[rho_f]], the body sinks because its weight will always be greater than the maximum possible buoyancy (fully submerged).\r
2. **Flotation**: If rho_c < [[rho_f]], the body will rise to the surface and remain partially submerged, just at the point where the buoyancy of the displaced volume exactly equals its real weight.\r
3. **Neutral Equilibrium**: If rho_c = [[rho_f]], the body will remain in equilibrium at any position within the fluid, as happens with a submarine that adjusts its density to "stay still" at a determined depth.\r
\r
## 🔴 Structural level\r
Archimedes' Principle is not an arbitrary or isolated law of physics, but a necessary and inevitable consequence of the laws of hydrostatics, specifically the **pressure gradient**. Because pressure in a fluid increases linearly with depth, the bottom face of any submerged object will always be at a greater depth than its top face. This causes the pressure force pushing upward from the bottom to be systematically higher than the pressure force pushing downward from the top.\r
\r
When performing the vector sum (surface integral) of all the infinitesimal pressure forces acting on the object's surface, the horizontal components cancel out due to symmetry, but the vertical ones leave a net resultant upward. The value of this resultant is, by geometric definition, equal to the weight of the fluid that would occupy that same space.\r
\r
From a design perspective, the **Center of Buoyancy** (point of application of buoyancy) and system stability are key. In gases, the compressibility of air causes buoyancy to decrease with height. Hollow structures allow dense materials like concrete or steel to float by creating large air cavities that increase the total submerged volume without adding mass.\r
\r
## Deep physical interpretation\r
At a more abstract level, this principle expresses the search for **minimum potential energy**. The "fluid + object" system configures itself so that the denser material occupies the lowest positions. Buoyancy is the macroscopic manifestation of this energy negotiation between the intruder and the medium's pressure field.\r
\r
## Order of magnitude\r
To visualize the power of this principle, consider some real-life examples:\r
- **The human body**: Our average density is astonishingly close to that of fresh water (approx 1000text{ kg/m}^3). Because of this, a small variation in our lung volume (by inhaling air) is enough to change our density and make us go from sinking to floating peacefully.\r
- **Colossal icebergs**: An iceberg is made of ice with a density of about 920text{ kg/m}^3, while seawater is about 1025text{ kg/m}^3. Archimedes' Principle dictates that 90% of the iceberg's volume must be submerged to generate the buoyancy necessary to support the weight of the entire mass of ice. What we see sticking out is barely the "tip" of a massive underwater structure.\r
- **Cargo ships**: A Nimitz-class aircraft carrier has a mass of about 100,000text{ tons}. To avoid sinking, its design must ensure that the hull displaces exactly 100,000text{ cubic meters} of seawater before the water reaches the deck.\r
- **Helium balloons**: Helium is about 7 times less dense than air. One cubic meter of air weighs about 1.2text{ kg}, while one cubic meter of helium weighs only 0.18text{ kg}. The difference of 1.02text{ kg} is the maximum load that one cubic meter of helium can lift before weight wins over atmospheric buoyancy.\r
\r
## Personalized resolution method\r
To solve any Archimedes problem with professional precision, follow this logical route:\r
1. **Force Diagram (DCL)**: Always identify and draw the force vectors. Weight [[W]] always points down and buoyancy [[E]] always points vertically up.\r
2. **Calculation of mass and weight**: Determine the real weight of the object from mass and gravity. If mass is unknown, obtain it from body density and total volume.\r
3. **Determination of submerged volume**: This is the most critical step. Identify whether the body is fully submerged or partially floating. In partial flotation, the submerged volume is the unknown or is given as a fraction of the total.\r
4. **Buoyancy calculation**: Apply Archimedes' formula using fluid density [[rho_f]], gravity, and displaced volume [[V_des]].\r
5. **Force equilibrium setup**: \r
   - If the object floats in equilibrium, buoyancy equals weight.\r
   - If the object is tied to a submerged dynamometer, cable tension and buoyancy balance the weight.\r
   - If the object is at the bottom with a normal force, normal force plus buoyancy balance the weight.\r
6. **Dimensional verification**: Check that all lengths are in meters, masses in kilograms, and volumes in text{m}^3 to obtain consistent forces in Newtons.\r
\r
## Special cases and extended example\r
A fascinating case is that of the **Bottom Suction Effect**. If a heavy object rests on the smooth bottom of a tank such that there is no fluid film between the bottom face of the object and the floor, Archimedes' Principle stops working. In the absence of fluid underneath, there is no upward pressure to generate buoyancy; on the contrary, the water pressure on the top face pushes the object down, "sealing" it against the bottom. This phenomenon explains why it is so extremely difficult to refloat sunken ships that have become buried in the mud of the seabed: before applying buoyancy, the seal must be "broken" to allow water to pass underneath and generate the buoyant force.\r
\r
Another special case occurs in accelerated fluids. In an elevator rising with acceleration a, the effective gravity becomes g' = g + a. Interestingly, both the body's weight and the weight of the displaced fluid increase in the same proportion, so the flotation condition (rho_c < [[rho_f]]) remains unchanged, although the internal stresses in the body and fluid will be higher.\r
\r
## Real student questions\r
- **Does buoyancy depend on depth?**: No, as long as the liquid is incompressible and the object is fully submerged. The pressure difference between the top and bottom of the object remains constant.\r
- **Why does iron sink but ships don't?**: It's about average density. A ship includes air in its interior, ensuring its total density (mass/volume) is less than water.\r
- **Is there buoyancy in space?**: In microgravity, there is no hydrostatic pressure gradient. Objects in a space station do not float or sink; they simply drift.\r
\r
## Cross-cutting connections and study paths\r
Archimedes' Principle naturally connects with multiple advanced disciplines:\r
- **Geophysics and Isostasy**: Explains how the Earth's crust (less dense) floats on the upper mantle (denser). Mountains have deep "roots" that sink into the mantle, analogous to the submerged part of an iceberg.\r
- **Oceanography**: Variation in density [[rho_f]] due to salinity and temperature changes generates deep convection currents that regulate the global climate, based entirely on buoyancy differences.\r
- **Human Physiology**: Buoyancy control is essential in scuba diving; divers use buoyancy control devices (BCDs) to vary their volume and control their ascent or descent through changes in buoyancy.\r
- **Marine Biology**: Many fish possess a swim bladder, a gas-filled organ they can inflate or deflate to adjust their displaced volume and thus rise or fall in the water column without spending muscular energy.\r
\r
## Final synthesis\r
Archimedes' Principle is the law that defines lightness and equilibrium in the fluid world. It teaches us that the lift capacity of a medium is not magical, but a quantifiable consequence of geometry and density. Understanding that buoyancy is the "ghost" of the weight of the fluid that is no longer present is the key to mastering the design of any artifact that must navigate the seas or traverse the skies. From the bathtub in our house to the oceanic abysses, Archimedes reminds us that we are part of a dynamic system where pressure and gravity constantly negotiate the place each body occupies in space.\r
\r
`;export{e as default};
