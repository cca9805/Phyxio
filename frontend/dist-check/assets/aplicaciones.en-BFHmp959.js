const e=`# Applications: Hanging Block\r
\r
## 1. Passenger elevators\r
\r
Modern elevators operate via an electric motor pulling a steel cable connected to the cabin through a pulley system. When the elevator is stopped at a floor waiting for passengers, cable tension is exactly equal to the total weight of the cabin plus the passengers it contains at that moment. To start ascending toward the next floor, the motor increases tension slightly above the weight, generating a controlled acceleration of about 0.5 to 1 m/s² upward.\r
\r
Hanging block analysis predicts that during braking (when arriving at a floor), tension drops below weight to produce negative acceleration (controlled deceleration). Elevators are designed so these tension variations never exceed the cable's safe limits, typically with a safety factor of 10 relative to the maximum nominal load. Modern control systems use real-time tension sensors to ensure accelerations are smooth and comfortable for passengers.\r
\r
Dominant variable: total mass of cabin with passengers, which determines the base weight the system must support.\r
Validity limit: the model assumes inextensible rope; in very long cables (extreme skyscraper elevators), steel elasticity produces oscillations requiring more complex models.\r
\r
## 2. Construction cranes\r
\r
Tower and mobile cranes lift heavy loads at construction sites using high tensile strength steel cables. The qualified operator controls applied tension via the electric motor and hydraulic brake system. When the load hangs at rest waiting to be moved, cable tension exactly equals the weight of the suspended load. To lift the load, the operator increases tension through speed control; for controlled descent, tension is reduced but always kept above zero to avoid uncontrolled free fall.\r
\r
Crane cable selection requires calculating maximum expected tension according to the tension for given acceleration formula. This formula allows sizing the cable by carefully considering the maximum planned load mass and permitted design maximum acceleration.\r
\r
{{f:tension_aceleracion}}\r
\r
Industrial cables are sized with safety factors of 3 to 5 relative to the theoretical material breaking strength, providing an additional margin to absorb unforeseen dynamic effects.\r
\r
Dominant variable: cable safety coefficient relative to maximum working load.\r
Validity limit: when the load swings (pendulum effect), additional tensions appear due to centrifugal effect that the simple model does not capture; forced pendulum analysis is required.\r
\r
## 3. Skydiving and controlled descents\r
\r
A skydiver during the free fall phase before opening the parachute is in an approximate free fall condition where harness tension is almost zero relative to body weight. Upon deploying the parachute, air resistance generates a force equivalent to the hanging block model's tension, which rapidly increases until balancing the total system weight, thus reaching a constant and safe terminal velocity for landing.\r
\r
During parachute opening, tension experiences a significant transient peak that can reach several times the skydiver's weight. This "opening shock" must be carefully designed not to exceed the maximum harness or parachute fabric strength, typically 1500–2000 N for standard sport skydiving harnesses. Parachute design optimises opening speed to minimise this tension peak while ensuring necessary deceleration.\r
\r
Dominant variable: parachute opening speed, which determines how quickly air resistance increases.\r
Validity limit: the pure vertical model fails when there is significant horizontal wind, introducing drift and lateral force components not modelled.\r
\r
## 4. Mine shaft elevators\r
\r
Underground mining hoisting systems transport tons of extracted ore and work personnel via robust cages suspended from steel cables that can reach several kilometres in length in deep shafts. Tension at the top of the cable must overcome not only the useful load's weight but also the suspended cable's own weight, which can be comparable to or even greater than the load at very great depths.\r
\r
Controlled acceleration is critical in these systems: a sudden jerk generates significant dynamic forces that can considerably exceed the calculated static load. Modern mining systems limit acceleration to below 0.3 m/s² when transporting personnel, and up to 0.6 m/s² for ore load only, ensuring operational safety.\r
\r
Dominant variable: shaft depth, which adds the cable's own weight to the total required tension.\r
Validity limit: the elasticity of multi-kilometre cables makes dynamics elastic wave dynamics, not rigid rope dynamics; the simple model is only valid for movements slow relative to wave propagation speed in the cable.\r
\r
## 5. Gym machines (pulleys and counterweights)\r
\r
Gym weight training machines such as pulley systems and multi-stations use hanging blocks with user-selectable calibrated counterweights. When the user pulls the handle, they must overcome the weight of the selected counterweight plus friction in the pulley system. The tension the user must exert depends directly on the mass of the counterweight selected via the adjustment pin.\r
\r
The biomechanical design of these machines exploits that acceleration produced by a given force is inversely proportional to total system mass according to Newton's second law in the vertical direction.\r
\r
{{f:dinamica_vertical}}\r
\r
Heavier counterweights require more pulling force from the user but produce more stable movements and less jerky acceleration during exercise.\r
\r
Dominant variable: user-selected counterweight mass, which directly determines the required exercise tension.\r
Validity limit: friction in pulleys and guides introduces significant frictional forces that the ideal model does not include; for small masses friction can represent 10–20 % of total force, distorting the theoretical linear relationship predicted by the simple model.\r
`;export{e as default};
