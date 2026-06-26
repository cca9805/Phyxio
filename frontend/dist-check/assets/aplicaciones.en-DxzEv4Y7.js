const e=`# Applications: Newton's First Law (Inertia)\r
\r
## 1. Urban transport under low acceleration\r
\r
### Fenómeno / Phenomenon\r
\r
When a bus keeps nearly constant speed on a straight road segment, passengers feel stable motion because the whole system operates near dynamic equilibrium.\r
\r
### Qué se conserva / qué cambia\r
\r
The global motion state is conserved: [[v]] stays near a mean value. Small local vibrations change, but no sustained net dynamic change is present.\r
\r
### Magnitudes dominantes\r
\r
The key reading is [[F_net]] close to zero in time average. From that reading, [[a]] is treated as near zero and [[v]] is interpreted as nearly constant.\r
\r
### Escala típica\r
\r
On stable segments, longitudinal acceleration fluctuations of a few hundredths of m/s^2 are often treated as operational noise. Mean speed typically lies between 8 m/s and 15 m/s depending on route.\r
\r
Dominant variable: [[F_net]] as the operational equilibrium indicator during cruise.\r
\r
Validity limit: inertial reading is no longer sufficient when sustained acceleration emerges outside declared tolerance.\r
\r
### Cierre operativo\r
\r
This application shows first law as a practical tool for ride comfort, steady energy demand, and predictable driving control.\r
\r
## 2. Automated logistics platforms\r
\r
### Fenómeno / Phenomenon\r
\r
Warehouse autonomous carts run through cruise phases where motor action mostly compensates small losses, keeping the state close to inertial behavior.\r
\r
### Qué se conserva / qué cambia\r
\r
Uniform-motion condition is conserved during each cruise segment. Actuator states change during start and braking transitions, which are outside pure first-law domain.\r
\r
### Magnitudes dominantes\r
\r
Control architecture tracks effective [[F_net]] and limits disturbances to keep [[a]] low. The operational goal is holding [[v]] inside a narrow band for scheduling reliability.\r
\r
### Escala típica\r
\r
Typical internal speeds are between 1 m/s and 2 m/s, with relative variation targets below 3 percent per cycle. Larger drift triggers sensor recalibration or wheel-friction review.\r
\r
Dominant variable: [[v]] because schedule reliability depends on controlled speed-band stability.\r
\r
Validity limit: once cumulative drift exceeds control threshold over consecutive cycles.\r
\r
### Cierre operativo\r
\r
First law acts here as a flow-stability criterion. If dynamic equilibrium is maintained in cruise, safety and throughput improve.\r
\r
## 3. Educational dynamics laboratory tests\r
\r
### Fenómeno / Phenomenon\r
\r
In air-track labs, students compare push and no-push intervals to verify that uniform motion persists when external resultant is negligible.\r
\r
### Qué se conserva / qué cambia\r
\r
Kinematic state is conserved in near-zero-resultant intervals. State changes only when an external interaction breaks that balance.\r
\r
### Magnitudes dominantes\r
\r
[[F_net]], [[a]], and [[v]] are measured with digital acquisition. The core learning target is correlating these three readings as one causal chain.\r
\r
### Escala típica\r
\r
Forces of a few hundredths of N and accelerations of a few hundredths of m/s^2 are common in this setup. Velocity can remain stable for several seconds in low-dissipation windows.\r
\r
Dominant variable: [[a]] as the discriminator between real dynamic change and measurement noise.\r
\r
Validity limit: when the mismatch between inertial prediction and measured trend remains persistent.\r
\r
### Cierre operativo\r
\r
The application turns a theoretical statement into reproducible evidence and trains tolerance-aware interpretation.\r
\r
## 4. Inertial navigation and prediction windows\r
\r
### Fenómeno / Phenomenon\r
\r
Vehicle navigation algorithms project motion state over short intervals under low-net-perturbation assumptions, especially between external sensor updates.\r
\r
### Qué se conserva / qué cambia\r
\r
[[v]] prediction is conserved over short windows when estimated [[F_net]] stays low. Model confidence changes as time uncertainty accumulates.\r
\r
### Magnitudes dominantes\r
\r
Internal filter dynamics use estimated [[a]] to update [[v]]. If acceleration remains zero-compatible, inertial extrapolation dominates.\r
\r
### Escala típica\r
\r
Prediction windows from 0.1 s to 2 s can maintain low error in well-calibrated scenarios. Beyond that range, accumulated drift requires stronger external correction.\r
\r
Dominant variable: [[v]] propagated by the estimator between external updates.\r
\r
Validity limit: uncertainty growth that makes pure inertial extrapolation non-trustworthy.\r
\r
### Cierre operativo\r
\r
This use case shows first law as a computational criterion for when state propagation remains trustworthy.\r
\r
## 5. Engineering synthesis and model-switch criterion\r
\r
### Fenómeno / Phenomenon\r
\r
Real systems alternate between near-inertial phases and net-actuated phases. The critical decision is identifying when treating [[F_net]] as zero is no longer valid.\r
\r
### Qué se conserva / qué cambia\r
\r
Simple-model usefulness is conserved while [[v]] drift remains below operational threshold. The analysis framework changes when acceleration becomes persistently non-negligible.\r
\r
### Magnitudes dominantes\r
\r
[[F_net]] sets the model-switch trigger, [[a]] quantifies deviation, and [[v]] summarizes accumulated observable effect.\r
\r
### Escala típica\r
\r
In practical control, model-switch thresholds are defined by safety and accuracy constraints. For example, exceeding a preset acceleration band for several consecutive cycles activates a fuller dynamic controller.\r
\r
Dominant variable: [[F_net]] because it defines the causal trigger for model transition.\r
\r
Validity limit: persistent acceleration outside the accepted band, forcing transition to non-equilibrium dynamics.\r
\r
### Cierre operativo\r
\r
Final synthesis is methodological: first law does not compete with richer models, it organizes them by indicating when inertial reading is enough and when non-equilibrium dynamics is required.\r
\r
This final criterion supports transparent decision logs, reproducible audits, and safer real-time control policies across engineering teams.\r
`;export{e as default};
