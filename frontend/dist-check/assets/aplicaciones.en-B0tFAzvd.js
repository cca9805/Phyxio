const e=`## 1. Bicycle speedometer from period sensing\r
\r
A magnetic sensor fixed to a bicycle frame detects each pass of a spoke magnet. The controller measures the time between consecutive pulses, which is exactly the [[T_periodo]] of one revolution, and from that value derives [[f]], [[omega]], and the linear speed of the bicycle.\r
\r
Dominant variable: [[T_periodo]]. It is the only quantity directly measured by the hardware; all the others depend on it and on the effective wheel radius [[R]].\r
\r
Validity limit: valid while [[R]] remains constant and the wheel rolls without slipping.\r
\r
This case is useful because it shows an everyday device whose public output is linear while its internal reasoning is rotational. The rider reads speed, but the electronics first infer a rotational description from [[T_periodo]]. If [[T_periodo]] decreases, then [[f]] and [[omega]] increase; if [[R]] changes, the conversion to linear speed becomes biased even when pulse timing is still measured correctly. The example therefore separates measured data, inferred angular quantities, and the final user-facing quantity.\r
\r
## 2. Gear ratio design for a motor reducer\r
\r
A motor reducer connects a fast electric motor to a slower conveyor belt. The practical design target is the output angular velocity [[omega]], while the geometry of the teeth depends on the local radius [[R]] and the corresponding arc [[s]] for each pitch interval.\r
\r
Dominant variable: [[omega]]. The ratio between angular velocities determines the transmission design and the delivered torque.\r
\r
Validity limit: valid in steady state with negligible slip; elastic belts or variable tension introduce corrections that modify the effective [[omega]].\r
\r
It also shows how geometric and kinematic reasoning meet in real design. The transmission is judged by whether it delivers the desired [[omega]], but the contact between teeth or belt elements still depends on arc spacing [[s]] at a given [[R]]. In practice, engineers move back and forth between those two viewpoints: one expresses functional performance and the other expresses geometric compatibility.\r
\r
## 3. Angular position control with an optical encoder\r
\r
A rotary optical encoder generates pulses for each full revolution. By counting pulses, the controller reconstructs the accumulated angular position [[theta]] and stops the motor when the target position is reached. Angular speed [[omega]] is estimated only as an auxiliary quantity.\r
\r
Dominant variable: [[theta]]. It is the quantity that closes the position loop.\r
\r
Validity limit: valid while the encoder does not miss pulses and the sampling system remains fast enough for the current [[omega]].\r
\r
From a control perspective, this example is important because it prevents the common mistake of assuming that the most frequently computed magnitude is automatically the controlled one. A controller may estimate [[omega]] continuously and still care primarily about [[theta]] if the task is endpoint positioning. The leaf helps classify magnitudes by role: some are used to monitor motion, others to make the final control decision.\r
\r
## 4. Safety arc estimation for an articulated arm\r
\r
For an industrial arm, the relevant safety question is not only how much angle [[theta]] the arm rotates, but how much arc length [[s]] the tip sweeps at radius [[R]]. The same rotation can be safe or unsafe depending on the arm length.\r
\r
Dominant variable: [[s]]. Safety criteria are expressed in meters, not in radians.\r
\r
Validity limit: valid for rigid motion with constant [[R]]. Multi-link or extensible systems require segment-by-segment geometry.\r
\r
Pedagogically, this application corrects a widespread misconception: that safety can be judged from angular displacement alone. It cannot. A modest [[theta]] can still sweep a dangerous distance if [[R]] is large, whereas a larger angle may remain acceptable at a short radius. This is exactly why the arc length [[s]] is operationally more relevant than the angle itself in clearance studies.\r
\r
## 5. Alternator synchronisation with the grid\r
\r
Before an alternator is connected to the electrical grid, the operator compares its frequency [[f]] with the grid reference. The angular velocity [[omega]] matters only through that operational criterion.\r
\r
Dominant variable: [[f]]. It is the control variable that determines whether synchronisation is acceptable.\r
\r
Validity limit: valid in steady operation with nearly constant [[omega]]. During startup, a variable-angular-kinematics model is needed instead.\r
\r
This final example gives the leaf a strong practical closure. Grid synchronisation is not a classroom ornament; it is a real operational decision taken from periodic motion data. The operator acts on the machine because a deviation in [[f]] has physical consequences for phase alignment and current surges. In that setting, the value of the leaf becomes clear: angular magnitudes are useful because they support decisions, not because they merely decorate formulas.\r
\r
Taken together, the five applications also reveal a broader pattern. The same physical vocabulary appears in transportation, automation, safety engineering, machine design, and power systems, but the dominant magnitude changes with the decision being made. That is why the leaf should not be memorised as a flat list of definitions. Its real content is the ability to decide whether [[T_periodo]], [[f]], [[omega]], [[theta]], or [[s]] is the quantity that actually governs the question at hand.\r
\r
This cross-context transfer is precisely what makes the topic foundational. Once the learner can recognise which angular magnitude is operationally central in each scenario, later topics such as rolling, rotational dynamics, or graph interpretation become easier to organise. The applications are therefore not an appendix to the theory; they are the place where the theory proves that it can guide real modelling choices.`;export{e as default};
