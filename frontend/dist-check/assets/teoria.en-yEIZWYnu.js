const e=`# Rolling as a Bridge\r
\r
## Conceptual context\r
\r
Rolling is the case in which a rigid body advances and spins at the same time. The center of mass translates with [[v_cm]] and [[a_cm]], while the body changes orientation through [[omega]], [[alpha]], and [[theta]]. The physical bridge between both descriptions is not a verbal analogy: contact imposes it through the radius [[R]].\r
\r
The central question is: **Why does rolling mean combining center-of-mass translation and rigid-body rotation?** The graph must show a wheel advancing, spinning, and keeping the contact point instantaneously at rest when there is no slipping.\r
\r
> [!NOTE]\r
> Recommended graph: SVG wheel with center of mass, center velocity, spin, and instantaneous contact point; Coord comparison between [[v_cm]] and [[omega]] times [[R]].\r
\r
## 🟢 Essential Level\r
\r
Rolling does not simply mean moving. A wheel can translate without spinning, as in locked sliding; it can spin without advancing, as in slipping in place; and it can roll, which is the combined case. In ideal rolling, center advance and spin are synchronized.\r
\r
The essential idea is to recognize two simultaneous readings. From outside, we see the center advance. From the body, we see points rotating around the center. Rolling joins those readings because the contact point does not slip. Therefore [[v_cm]] and [[omega]] are not the same quantity: one is linear velocity and the other is angular velocity. The radius [[R]] is the physical translator.\r
\r
## 🔵 Formal Level\r
\r
The core relation of the leaf is the ideal rolling condition:\r
\r
The formal level requires distinguishing variable, parameter, and condition. [[omega]] is a spin variable; [[v_cm]] is an advance variable; [[R]] is the geometric parameter that translates one reading into the other. The equality does not say that every rotation produces advance; it says that no-slip contact forces useful rotation to match center advance. This precision prevents applying the formula to slipping wheels.\r
\r
{{f:condicion_rodadura_puente}}\r
\r
For accelerations, the same kinematic bridge is:\r
\r
{{f:aceleracion_rodadura_puente}}\r
\r
For accumulated displacement, the equivalent bridge is:\r
\r
{{f:desplazamiento_rodadura_puente}}\r
\r
This equality is valid only for rolling without slipping. Formally, [[v_cm]] measures center-of-mass advance, [[omega]] measures spin rate, and [[R]] converts spin into traveled length. If contact fails, the equality no longer describes the system even if the units still look correct.\r
\r
The same bridge appears in accelerations: [[a_cm]] is connected to [[alpha]] through the radius while the constraint holds. It also appears in displacements: the angle [[theta]] turned is related to the distance traveled by the center. These relations do not replace dynamics; they express contact geometry.\r
\r
## 🔴 Structural Level\r
\r
Structurally, this leaf separates three models. Pure translation describes the center of mass but ignores spin. Pure rotation describes orientation but ignores advance. Rolling describes the coupling between both. The correct model depends on whether contact imposes a constraint or allows slipping.\r
\r
The reasoning has a fixed sequence: inspect contact first, decide whether coupling exists, and only then use the relation. If that order is reversed, a locked wheel or a spinning wheel on ice can look like rolling even though the bridge is absent.\r
\r
The condition breaks when slipping, dominant deformation, variable effective radius, or intermittent contact appears. In those cases, switch to an extended model and treat translation and rotation as more independent variables. The graph should help detect the difference: if the contact point cannot be read as instantaneously at rest, ideal rolling is not justified.\r
\r
## Deep physical interpretation\r
\r
The deep reading is both causal and geometric. Contact turns spin into advance: one full turn moves the center by a length proportional to radius. If [[omega]] increases with fixed [[R]], [[v_cm]] increases. If [[R]] increases with fixed [[omega]], the center advances more per unit time. If [[v_cm]] does not match the geometric product, there is slipping or a different effective radius.\r
\r
The result must not be read as an isolated formula. The equality says that two ways of measuring the same advance are compatible: one from center translation and one from rigid-body spin. That is why rolling works as a conceptual bridge between linear and angular kinematics.\r
\r
## Order of magnitude\r
\r
For a wheel of radius 0.30 m spinning at 10 rad/s, a center speed near 3 m/s is reasonable. If a classroom wheel calculation gave 300 m/s, units or radius should be reviewed. If a large wheel and a small wheel have the same [[omega]], the large one advances faster; if they have the same [[v_cm]], the small one must spin faster.\r
\r
## Personalized resolution method\r
\r
1. Decide whether the statement concerns advance, spin, or contact.\r
2. Check whether rolling without slipping is stated or defensible.\r
3. Use the rolling condition only after fixing [[R]] and sign convention.\r
4. Compare the result with the graph: center, spin, and contact point must be coherent.\r
5. If slipping appears, use an extended model with sliding.\r
\r
## Special cases and extended example\r
\r
A locked wheel sliding on ice has translation without rolling. A wheel spinning on a very slippery surface may have rotation without proportional advance. A bicycle wheel on dry pavement approximates ideal rolling during many intervals of motion.\r
\r
In a bicycle, changing the gear ratio changes the relation between pedaling and wheel spin, but the wheel-ground contact still requires [[v_cm]] to match wheel spin if there is no skid. This distinction separates internal mechanism from external contact condition.\r
\r
## Real student questions\r
\r
**Is rolling the same as spinning?** No. Spinning describes orientation; rolling also requires coupled center advance.\r
\r
**Why does radius appear?** Because it converts an angular quantity into a length or linear velocity.\r
\r
**What happens if it slips?** The rolling relation no longer closes the problem and sliding must be modeled.\r
\r
**Is the contact point always at rest?** In ideal rolling it is instantaneously at rest relative to the ground; it is not the same material point all the time.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects rotational kinematics, linear-angular relations, the no-slip rolling condition, and rolling dynamics. It also prepares rolling energy, because total kinetic energy combines center motion and rotation around the center.\r
\r
A natural path is to study angular magnitudes first, then the linear-angular relation, then this conceptual bridge, and finally the no-slip rolling condition as a stricter constraint.\r
\r
## Final synthesis\r
\r
Rolling as a bridge teaches that translation and rotation are not separate chapters when contact without slipping is present. The center advances, the body spins, and the radius joins both readings. A correct solution preserves that double reading in the formula, the graph, and the interpretation.\r
\r
This bridge also prepares quantities that appear later. Mass [[m]], moment of inertia [[I]], gravity [[g]], incline angle [[phi]], torque [[tau]], total kinetic energy [[K_total]], and mechanical energy [[E_total]] are not the main focus here, but they depend on first understanding how advance and spin are coupled. In dynamics, [[tau]] explains why [[omega]] changes. In energy, [[K_total]] adds a translational part and a rotational part. On an incline, [[g]] and [[phi]] may cause advance, but the rolling reading still requires center motion and spin to be compatible.\r
\r
That is why this leaf does not yet try to solve every rolling problem. Its task is more basic: build the shared vocabulary needed to read them. If the student understands that [[v_cm]], [[omega]], and [[R]] form one contact condition, later formulas for energy, torque, and acceleration become easier to interpret. Without that bridge, later formulas look like arbitrary lists.\r
\r
The final check is graphical: the center, the rim, and the contact point must tell the same story.`;export{e as default};
