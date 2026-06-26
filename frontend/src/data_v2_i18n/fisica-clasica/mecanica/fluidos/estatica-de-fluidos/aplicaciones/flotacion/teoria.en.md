# Flotation

## Conceptual context
**Flotation** is the static equilibrium of a submerged body in a fluid, representing the practical application of Archimedes' Principle. A body floats when the upward thrust exactly compensates for its gravitational weight. This principle allows determining the draft and stability of any object, from icebergs to cargo ships, based on the geometric and mechanical interaction between the solid and the liquid medium.

## 🟢 Essential level
Flotation is essentially a competition between two opposing and constant forces: **weight** (gravitational pull pulling the object toward the center of the Earth) and **thrust** (hydrostatic upward force that the fluid exerts). For an object to float on the surface, the maximum thrust that the fluid is capable of generating must be at least equal to the weight of the object. If the weight is greater than this maximum thrust (which occurs when the object is fully submerged and gravity still wins the competition), the object will inevitably sink until it finds a solid support at the bottom of the container.

The fundamental key to flotation is not simply the total mass of the object, but its **average density**. This concept explains why a solid iron nail sinks quickly, while a steel ship of thousands of tons floats elegantly: the ship is not a solid block of steel, but a shell enclosing a large volume of air. By averaging the density of the steel with that of the air contained inside, the total density of the ship turns out to be less than that of water. The hull design allows the ship to "trick" the fluid, displacing an enormous amount of water whose weight far exceeds the weight of the metal structure itself.

Furthermore, flotation is a process of automatic self-adjustment of nature. When you place an object in the water, it begins to descend due to the effect of gravity, displacing fluid in its path. As more volume enters the water, the upward thrust increases proportionally. The object stops descending at the precise moment when the thrust equals the weight. If the object is very light, it will barely need to submerge a small fraction of its body to reach this equilibrium; if it is very heavy but less dense than the fluid, it will submerge almost completely before stopping.

## 🔵 Formal level
The physical-mathematical analysis of flotation is based on the application of Newton's first law to hydrostatic systems. For a body in flotation equilibrium, the sum of vertical forces must be zero. If we define the vertical axis as positive upwards, the force balance is expressed as equality between buoyancy and weight.

By substituting the fundamental expressions for hydrostatic thrust and gravitational weight, we obtain a relationship that links the densities and volumes involved in the phenomenon:
The physical equality can be read as: fluid density times gravitational acceleration times submerged volume equals object density times gravitational acceleration times total volume.

Where [[rho_f]] represents fluid density, gravitational acceleration is a common factor, [[Vsum]] is the submerged part volume (carena volume), [[rho_obj]] the average body density, and [[Vtot]] the total volume. By simplifying gravity on both sides, we arrive at the operational relationship for the **submerged fraction** [[frac_sum]]:

{{f:fraccion_sumergida}}

In words: the submerged fraction equals the ratio between submerged and total volume, and also equals the ratio between object and fluid density.

This equation is of remarkable elegance because it tells us that the percentage of an object that remains underwater depends exclusively on the relationship between its density and that of the fluid, regardless of the total mass or shape of the body (provided it is compact). For example, if a piece of wood has exactly \( 70\% \) of the water's density, we can predict with total certainty that \( 70\% \) of its volume will remain submerged, while the remaining \( 30\% \) will protrude from the surface. This direct proportionality is the basis for the operation of hydrometers, instruments that allow measuring the purity of liquids by observing how deep they sink into them.

To quantify the exact volume of fluid displaced by a freely floating body, we can use the total volume and the fraction calculated above:

{{f:volumen_sumergido}}

In words: the submerged volume is obtained by multiplying the submerged fraction by the total volume.

This submerged volume is fundamental in naval architecture, as it determines the ship's "draft," which is the vertical distance from the keel to the waterline. An increase in the ship's load increases its total weight, forcing the system to seek a new equilibrium point by submerging a greater carena volume until the new thrust compensates for the additional load.

## 🔴 Structural level
The structural analysis of flotation goes beyond a simple balance of forces and enters the field of rotational stability and the validity limits of the hydrostatic model. For a body to float safely, there must not only be a vertical equilibrium, but that equilibrium must be stable; that is, the body must be able to recover its original position if an external force tilts it slightly. Three critical points of the physical structure intervene in this analysis:
1.  **Center of Gravity ($G$)**: The point where the weight force is considered applied. Its position depends on the object's mass distribution.
2.  **Center of Buoyancy ($C$ or $B$)**: The center of gravity of the displaced fluid volume, where the thrust force acts. Its position changes dynamically according to the body's inclination.
3.  **Metacenter ($M$)**: A geometric reference point. For flotation to be stable (that the ship does not capsize), the metacenter must be located above the center of gravity.

There are critical structural conditions and limits that can alter the behavior predicted by ideal equations. At the micro-scale, **surface tension** can act as an elastic membrane that supports the weight of small objects (such as water striders) even if their density is greater than that of the fluid. On the other hand, in dynamic systems where the fluid is in motion, hydrodynamic lift forces appear that can raise the body, reducing its effective draft below what pure statics predicts.

Finally, the body's structural integrity is a determining factor. If a hollow object suffers a fracture and external fluid begins to flood its cavities (as happened with the Titanic), its average density [[rho_obj]] increases progressively as air is replaced by water. At the moment this average density equals or exceeds the density of the external fluid [[rho_f]], the theoretical submerged fraction [[frac_sum]] reaches the value of \( 1 \), the surface flotation equilibrium is broken, and the body initiates an accelerated descent toward the bottom, transforming a flotation system into a gravity sinking system.

## Deep physical interpretation
Flotation is ultimately a manifestation of the principle of minimum energy. The body-fluid system seeks the configuration that minimizes the total gravitational potential energy. When a body is submerged, it must "lift" an equivalent amount of fluid toward the surface; equilibrium is reached when the energy effort of lifting the fluid equals the energy benefit of the body's descent. It is a mechanical dialogue between the inertia of the solid mass and the hydrostatic pressure of the continuous medium, where the liquid's free surface acts as the decision boundary for the system.

## Order of magnitude
-   **Icebergs**: Ice density is approximately \( 917\text{ kg/m}^3 \), while seawater density is \( 1025\text{ kg/m}^3 \). The resulting submerged fraction is \( 0.895 \), which confirms the nautical warning that almost \( 90\% \) of an iceberg's mass remains invisible below the surface, representing a hidden danger.
-   **Human body**: In fresh water, a person with lungs full of air has an average density of about \( 980\text{ kg/m}^3 \). This allows \( 2\% \) of the body volume (enough for the nose and mouth) to remain out of the water without effort. However, when exhaling air, density can rise to \( 1020\text{ kg/m}^3 \), causing sinking if no additional mechanical work is performed.
-   **Dead Sea**: Due to its extreme salt concentration, its density reaches \( 1240\text{ kg/m}^3 \). A human bather floats with a submerged fraction of barely \( 0.80 \), resulting in such high buoyancy that it is practically impossible to sink completely passively.

## Personalized resolution method
1.  **Identify Densities**: Obtain the values for object density [[rho_obj]] and fluid density [[rho_f]] in consistent units (usually \( \text{kg/m}^3 \)).
2.  **Calculate Theoretical Fraction**: Apply the density-ratio relationship to determine the percentage of volume that will remain below the surface.
3.  **Verify Flotation Condition**: If the calculated fraction is less than or equal to \( 1 \), the object will float. If it is greater than \( 1 \), the object will sink and flotation statics is no longer applicable.
4.  **Determine Actual Volumes**: Use total volume [[Vtot]] to find carena volume [[Vsum]] by multiplying by the submerged fraction.
5.  **Stability Analysis**: Evaluate if the center of gravity is low enough (adding ballast if necessary) to ensure that the equilibrium is stable against tilting.

## Special cases and extended example
**The industrial hydrometer**: This instrument is a masterly application of flotation. It consists of a hollow glass cylinder with a calibrated weight at its base. When placed in a liquid of unknown density, the instrument sinks until the thrust equals its weight. Since the hydrometer's weight and total volume are constant, the depth at which it stops depends exclusively on the liquid density. A graduated scale on the instrument's neck allows direct reading of density or alcohol content, converting a flotation phenomenon into a high-precision analytical measurement.

## Real student questions
-   **Why do I float better in the sea than in a pool?** Because saltwater is denser than freshwater. Since [[rho_f]] is greater, the submerged fraction [[frac_sum]] needed to balance your weight is smaller, so you protrude more from the surface.
-   **What happens if the object is hollow but has a leak?** Its average density increases as water replaces air. When the average density exceeds that of the external fluid, the maximum thrust can no longer compensate for the weight and the object sinks.
-   **Can something float in the air?** Yes, helium or hot air balloons float following exactly the same laws. As long as the density of the whole (balloon + gas + load) is less than the surrounding air density, there will be a positive flotation fraction.

## Cross-cutting connections and study paths
-   **Oceanography**: Study of ocean currents driven by density variations (thermohaline circulation).
-   **Zoology**: Neutral buoyancy mechanisms in cephalopods through controlled gas chambers.
-   **Aerospace Engineering**: Fuel behavior in satellite tanks under microgravity conditions.

## Final synthesis
Flotation is the balance between weight and hydrostatic thrust. Governed by the density ratio, it defines the behavior of any body interacting with a fluid. Mastering its laws allows predicting draft and stability in naval design and understanding natural phenomena.