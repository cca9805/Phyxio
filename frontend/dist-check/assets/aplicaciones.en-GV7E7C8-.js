const e=`# Real-World Applications: Pulleys and Tackles

## 1. Tower cranes in civil construction
Dominant variable: [[n]]
Validity limit: Breaking strength of the steel cable and counterweight stability.

In construction sites, tower cranes use massive factorial tackles to lift heavy materials. The key is not just the motor's power, but the number of effective segments [[n]]. By passing the cable through multiple moving pulleys located at the hook, relatively small electric motors can lift tons of steel or concrete. The operator controls the speed, but it is the tackle's geometry that multiplies the force. The critical limit is the cable's breaking load: even if we add more pulleys to reduce the effort [[P]], the cable must be able to withstand the total distributed tension \`T\`.

In practice, large tower cranes employ between 4 and 8 active segments [[n]]. This allows a 15 kW motor to lift loads of up to 6000 kg at working speeds of 0.1 m/s. The efficiency [[eta]] of the complete system, including losses in the drums and in the hook's roller bearings, typically falls between 0.85 and 0.92. This means that between 8 % and 15 % of the consumed electrical energy is dissipated as heat before reaching the useful load. Selecting the right [[n]] is therefore not purely a force problem but also an energy management decision.

## 2. Lifting systems in modern elevators
Dominant variable: [[eta]]
Validity limit: Pulley groove wear and frictional grip.

Elevators do not rely on a motor alone, but on a system of traction pulleys and counterweights. The counterweight matches a large part of the cabin's weight, so the motor only has to overcome the load difference and friction. Here, the efficiency [[eta]] is vital for the building's energy efficiency. Deflection pulleys allow the motor to be efficiently located in the machine room, redirecting the effort toward the elevator shaft. Maintenance focuses on preventing cable slip on the pulley, which would compromise safety.

## 3. Strength training machines in sports centers
Dominant variable: [[Np]]
Validity limit: Friction in bearings and cable stretching.

In gyms, pulleys serve an ergonomic and variable load function. They allow the effort's direction to be changed so the user can work different muscle groups by pulling in any direction. Furthermore, the use of moving pulleys [[Np]] allows the weight stacks to be fractioned for finer load adjustments. The user's perception of weight depends directly on the system's mechanical advantage. A common failure is ignoring bearing friction, which makes the downward effort feel "lighter" than the upward one due to friction hysteresis.

In modern cable resistance machines, maintenance engineers regularly measure the effective [[eta]] of each station to ensure that the effort perceived by the user matches the target training load. A degraded [[eta]] caused by cable stiffness or worn bearings can reduce actual training intensity by 15 to 20 % without the user noticing, which is both a performance and a safety concern.

## 4. Sailing maneuvers in classical and modern naval engineering
Dominant variable: [[n]]
Validity limit: Rigging stiffness and wind force.

Historically, sailing ships relied on "blocks" (wooden pulleys) to manage sails of hundreds of square meters. Without tackles with a high value of [[n]], it would be impossible for a human crew to trim the sheets against wind pressure. Today, high-tech winches and pulleys on racing boats minimize efficiency losses [[eta]] using ceramic ball bearings. The tackle's design determines the boat's response speed to wind changes, where the displacement relationship [[sP]] defines how fast the sailor must work.

## 5. Mountain and cave rescue systems
Dominant variable: [[VM]]
Validity limit: Load capacity of anchors and rope elasticity.

In emergency situations, rescuers set up pulley systems (tackles) to extract people from crevices or shafts. They often use potential tackles to maximize the mechanical advantage [[VM]] with the minimum equipment possible. A single person can lift an injured person and a stretcher thanks to force multiplication. The limiting factor is the safety of the anchors: the total force on the fixing point to the ceiling or rock is the sum of the load [[W]] and the effort [[P]], which can double the stress on the natural structure if not calculated correctly.

A common technique in rescue operations is the 3:1 compound tackle, which can be combined with a second tackle to achieve a total mechanical advantage of 9:1. With this arrangement, a rescuer only needs to apply an effort [[P]] of approximately 100 N to move a load of 900 N. The elasticity of dynamic ropes reduces peak loads on the anchors, but it also introduces energy losses that lower the effective efficiency [[eta]] of the tackle. In extended operations, rope friction against rock edges is the factor that most degrades [[eta]], potentially dropping it below 0.7 and making it necessary to increase [[n]] or redistribute the tackle configuration to maintain safe working loads.
`;export{e as default};
