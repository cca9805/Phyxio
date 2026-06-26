const e=`## 1. Playground safety: fall height in a slide structure\r
\r
When designing a tall playground slide, an engineer does not only consider appearance or total ramp length. It is also necessary to estimate what happens if a child loses contact with an elevated section and enters an approximately vertical fall segment. If the effective height difference is \\( 1.8\\;\\text{m} \\), the vertical-motion-under-gravity model helps estimate the arrival speed and decide whether the impact surface must absorb more energy.\r
\r
This kind of estimate is especially useful during safety certification, because it transforms a geometric design choice into a physically interpretable consequence. A seemingly small increase in available fall height may noticeably increase the arrival speed and therefore the required energy absorption of the protective surface below the structure.\r
\r
Dominant variable: \`h\`, because the available height directly controls the initial gravitational energy and the speed reached during descent.\r
\r
Validity limit: this model is only reasonable if the analyzed segment can be approximated as nearly vertical and if air resistance remains negligible compared with gravity.\r
\r
---\r
\r
## 2. Basketball: reading the highest point of a free throw\r
\r
When a coach studies a free throw in slow motion, one relevant question is whether the ball reaches enough height before descending toward the rim. Near the highest point, the vertical velocity becomes zero for an instant, even though gravity is still acting. The model of vertical motion under gravity helps interpret that critical moment and distinguish between “zero velocity” and “zero acceleration,” which are physically different statements.\r
\r
Dominant variable: \`v\`, because the sign change of the vertical velocity marks the transition from ascent to descent and identifies the top of the motion.\r
\r
Validity limit: the analysis stops being purely vertical if one wants to describe the entire projectile path, because then the horizontal component also matters and the problem becomes two-dimensional.\r
\r
---\r
\r
## 3. Delivery drones: controlled descent time\r
\r
A drone that releases a small package from a known height must estimate how long the object takes to reach the ground if, after release, the initial motion can be approximated as vertical. In low-altitude logistics, this calculation may be used to synchronize warning signals, gate control, or impact-detection timing. Here the main operational interest is not only final height, but the time scale of the process.\r
\r
From an operational point of view, this time estimate helps define safety margins. If the drone releases the package too close to the ground, the object may not stabilize before impact; if the release happens too high, wind exposure and targeting uncertainty increase. Flight time is therefore not a secondary number, but a design variable.\r
\r
Dominant variable: \`t\`, because the practical decision depends on flight time rather than only on height or instantaneous speed.\r
\r
Validity limit: as soon as the package has large surface area or very small mass, air resistance can no longer be neglected and the real descent time departs from the free-fall prediction.\r
\r
---\r
\r
## 4. Laboratory testing: comparing velocity and height\r
\r
In an upper-secondary laboratory activity, students throw a steel sphere upward and record heights and times with a high-speed camera. The goal is not merely to obtain a final number, but to verify that the relation between height and velocity can be analyzed without always going through time as an intermediate step. In that context, Torricelli’s equation becomes especially useful because it directly links kinematic state to vertical position.\r
\r
Dominant variable: \`v\`, because the experimental comparison focuses on how velocity changes when height changes, especially near the top point and during descent.\r
\r
Validity limit: the method requires a well-calibrated spatial reference and negligible lateral oscillations; otherwise the reading is no longer strictly one-dimensional.\r
\r
---\r
\r
## 5. Forensic engineering: reconstructing a fall from impact evidence\r
\r
In a technical investigation, an expert may need to estimate the approximate height from which a tool fell before striking a lower surface. If the available evidence allows the impact speed to be estimated and the path can be treated as approximately vertical, the gravity-driven model provides a first plausible reconstruction of the event. In this setting, the model is not used to “repeat a formula,” but to infer a past physical episode from measurable magnitudes.\r
\r
A reconstruction of this kind can also help discriminate between incompatible hypotheses. An impact mark may correspond to simple free fall, to an initial downward launch, or to a path altered by intermediate contacts. The ideal vertical model does not solve the whole investigation by itself, but it does provide a first physical filter for separating plausible scenarios from those that do not match the observed magnitudes.\r
\r
Dominant variable: \`h\`, because the key practical question is to recover an initial height compatible with the observed final speed.\r
\r
Validity limit: this preliminary reconstruction fails if there were rebounds, prior contacts with other structures, unknown initial vertical speed, or significant aerodynamic effects during the fall.\r
`;export{e as default};
