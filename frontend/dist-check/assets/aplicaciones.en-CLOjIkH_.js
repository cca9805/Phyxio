const e=`## 1. Railway scheduling on a single-track segment\r
\r
On a single-track railway line, two trains may approach each other from opposite stations with different departure schedules. The operational problem is not only to know where they are, but to decide whether their timing leads to a meeting point inside a safe section or whether one of them must wait before entering the shared track.\r
\r
In this situation, the physical core is not the speed of each train taken separately, but the comparison between initial separation and relative evolution. A departure delay or a small change in velocity may significantly shift the meeting point, with direct consequences for safety and traffic control.\r
\r
Dominant variable: [[t_e]] , because the practical decision depends on the instant at which the encounter would occur within the critical segment.\r
\r
Validity limit: the model becomes unreliable if velocities cease to be approximately constant or if the real route can no longer be reduced to an effective one-dimensional motion.\r
\r
## 2. Pursuit of a vehicle by an inspection drone\r
\r
A drone follows the trajectory of a vehicle moving along a straight road in order to begin data acquisition once it is exactly above it. The question is not whether both move fast or slowly, but whether the drone can compensate for the initial separation [[d_0]] and for a possible delayed start [[dt]] before the vehicle leaves the inspection zone.\r
\r
The physical reading is organized through the relative velocity [[v_rel]] : if the drone does not reduce the gap fast enough, there will be no operational encounter even though both bodies move in the same direction.\r
\r
Dominant variable: [[v_rel]] , because it summarizes whether the pursuit actually closes the separation between chaser and target.\r
\r
Validity limit: this approximation loses reliability if the vehicle changes speed frequently or if the drone requires lateral maneuvers that destroy the one-dimensional simplification.\r
\r
## 3. Coordination of two robots in a logistics line\r
\r
Two mobile robots move along the same industrial corridor from different starting points and must coincide at a transfer station in order to exchange a load. The problem is not to describe each trajectory independently, but to ensure that both arrive at the same point at the same instant so that the operation is physically possible.\r
\r
Here the relevant quantity is not so much the travel time of one or the other in isolation, but the coincidence position [[x_e]] , because it determines whether the transfer takes place inside the intended functional area or outside it.\r
\r
Dominant variable: [[x_e]] , because the success of the operation depends on the actual location where both moving bodies coincide.\r
\r
Validity limit: the model fails if the robots do not maintain a well-defined straight path or if intermediate stops and accelerations alter the planned encounter structure.\r
\r
## 4. Delay detection in an experimental setup\r
\r
In a laboratory experiment, two carts are supposed to meet on a straight track after being released according to a prescribed temporal sequence. If one of them starts with a small delay, the analysis must explicitly introduce [[dt]] in order to decide whether the observed encounter matches the intended model or reveals a synchronization failure.\r
\r
In this case, the main interest is not obtaining a final number for the exercise, but diagnosing whether the setup has reproduced the designed sequence correctly.\r
\r
Dominant variable: [[dt]] , because a starting delay changes the structure of the problem even if the nominal velocities remain the same.\r
\r
Validity limit: this reading loses meaning if the delay cannot be measured with sufficient resolution or if the release conditions modify the expected velocities from the very beginning.\r
\r
## 5. Interceptor reach in an automatic system\r
\r
An automatic system must decide whether a body launched from a base can intercept another object already moving along a straight guide. In this context, the question is not to describe a past pursuit, but to evaluate the feasibility of a future interception under known conditions.\r
\r
The structure resembles a pursuit problem, but here the real interest is whether the encounter is physically achievable before the target leaves the useful operating zone.\r
\r
In practical systems, this question is not limited to whether interception is mathematically possible. It also matters whether the encounter happens inside a useful spatial window and early enough for the automatic response to remain operational. A formally valid interception may still be irrelevant if it takes place too late or outside the accessible region of the device. This is why physical feasibility and operational usefulness must be evaluated together rather than treated as separate questions, since a solution that works on paper may still fail when real timing constraints, detection limits, or system response delays are taken into account.\r
\r
This is why physical feasibility and operational usefulness must be evaluated together rather than treated as separate questions.\r
\r
Dominant variable: [[d_0]] , because the initial separation determines whether interception is possible within the available operational interval.\r
\r
Validity limit: the model becomes insufficient if the target changes its motion regime or if the interceptor requires an acceleration phase that prevents the whole maneuver from being treated as uniform motion.\r
`;export{e as default};
