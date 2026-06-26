const e=`# Applications\r
\r
## 1. Telemetry in competitive cycling\r
\r
In the time-trial stages of the Tour de France, team vehicles receive **velocity-versus-time** data streamed from GPS sensors and power meters mounted on the bicycle. The sports director inspects the v-t graph to detect when the rider has entered fatigue (sustained downward slope), when a tailwind has boosted speed (constant segment above the predicted pace), and how much reserve remains for the final sprint. **Acceleration** is read directly as the slope of the graph, and **accumulated displacement** is estimated as the area under the curve, enabling real-time comparison of the distance covered against a rival's run. Modern data analysis platforms overlay the rider's actual v-t profile against the pre-planned pacing strategy, highlighting segments where the athlete deviated from the target power output.\r
\r
**Dominant variable:** instantaneous velocity from the GPS \r
**Validity limit:** the piecewise constant-acceleration model fails when the road gradient changes continuously; in that case, linear segments must be shorter than 5 s to keep the error below 3 %.\r
\r
## 2. Braking-distance measurement in road safety\r
\r
Crash-investigation laboratories install **decelerometers** in test vehicles and plot the v-t curve during emergency braking. The stopping distance is computed as the **area under the** v-t **curve** from the reaction instant to a complete stop. For a passenger car initially at 120 km/h braking at a ≈ -8 m/s², the curve is approximately a descending straight line and the resulting triangle area gives about 69 m. If the curve deviates from the straight line (due to brake-pad degradation or ABS pulsation), the actual distance differs from theory and forensic analysts adjust the model.\r
\r
**Dominant variable:** acceleration (slope of the v-t line during braking) \r
**Validity limit:** the constant-acceleration approximation breaks down if braking lasts longer than 4 s, because brake temperature modifies the friction coefficient and the slope is no longer constant.\r
\r
## 3. Elevator monitoring\r
\r
Modern elevators include sensors that trace the v-t curve for each trip between floors. The standard profile has three phases: acceleration ramp, plateau at rated speed, and deceleration ramp — exactly the pattern seen in this leaf's exam-type example. Maintenance engineers verify that the **slopes** (acceleration and deceleration) do not exceed 1.2 m/s² for passenger comfort and that the **total area** is consistent with the inter-floor distance (e.g., 3.5 m per storey). An excessive slope or a mismatched area triggers a calibration alert. In high-speed elevators, the cruising plateau can reach 10 m/s, and the transition ramps are designed with jerk-limited profiles that smooth the corners of the v-t graph, reducing motion sickness.\r
\r
**Dominant variable:** displacement (obtained as the area under v-t) \r
**Validity limit:** in very tall buildings with runs exceeding 20 floors, aerodynamic drag inside the shaft causes the plateau to be not strictly horizontal; the piecewise-linear model introduces up to 5 % error in the estimated distance.\r
\r
## 4. Biomechanical sprint analysis\r
\r
In biomechanics laboratories, high-speed cameras capture the position of a sprinter's centre of mass and generate an x-t graph. The shape of the graph reveals whether the athlete is still accelerating (parabolic curve) or has reached top speed (linear portion). The **tangent slope** at each instant gives the instantaneous velocity, and the **graphical second derivative** — obtained by plotting the derived v-t graph — shows how acceleration evolves. Coaches compare curves from different sessions to quantify improvements of as little as 0.02 m/s² in the start phase.\r
\r
**Dominant variable:** centre-of-mass position (read from x-t) \r
**Validity limit:** the camera's temporal resolution limits slope precision; below 120 fps the linearised segments introduce noise exceeding 10 % in the derived acceleration, and the graphical analysis loses reliability.\r
\r
## 5. Spacecraft docking-manoeuvre control\r
\r
During the docking of a Crew Dragon capsule with the ISS, the navigation system plots the v-t curve of the relative velocity between both bodies. The **slope** of the graph indicates whether the braking micro-pulses are correct, and the **residual area** under the curve after the approach speed drops below 0.03 m/s predicts the remaining closing distance. If the computed area exceeds 10 m while the speed is still decreasing too slowly, the system commands an additional thruster pulse. The entire protocol relies on graphical reading of slopes and areas — the same mathematical tools practised in this topic. Ground controllers monitor the v-t trace in real time and can override the autonomous system if the graphical profile deviates from the safe corridor defined by the mission rules.\r
\r
**Dominant variable:** relative approach velocity (slope and area of the relative v-t) \r
**Validity limit:** at separations below 1 m, residual gravitational perturbations and solar radiation pressure distort the graph's linearity; the piecewise-linear model is valid only while the separation distance exceeds ~2 m.\r
`;export{e as default};
