# Applications of energy in rolling

## 1. Bicycle wheels

On a bicycle, each wheel contributes forward energy and spin energy. [[K_total]] estimates how much additional energy is needed to accelerate wheels with different [[I]]. Two wheels with equal [[m]] may feel different if one concentrates mass near the rim, because for the same [[v_cm]] the condition using [[R]] imposes [[omega]], and rotational energy grows with [[I]].

Dominant variable: [[I]], because it controls the rotational fraction at a given speed. Validity limit: the ideal model does not include tire deformation, bearing losses, or aerodynamic drag. In sprinting or city riding, the estimate is still useful for comparing designs.

The application is useful because it turns handling feel into an energy balance. If two wheels have the same [[m]] but different mass distribution, the change appears in [[I]] and not necessarily in total weight. During repeated starts, the accumulated difference can be noticeable even when each event seems small.

## 2. Cylinders and spheres on inclines

When a cylinder or sphere descends an incline, potential energy associated with [[g]] and [[phi]] becomes [[K_total]]. The split depends on [[I]], so a solid sphere, a cylinder, and a hoop do not acquire the same [[a_cm]]. Total mechanical energy [[E_total]] closes the balance if there are no losses.

Dominant variable: the ratio between [[I]] and `m R^2`. Validity limit: if contact cannot provide enough static friction, slipping appears and the ideal balance must include dissipation.

This is the natural laboratory for the topic. It compares bodies with different geometries without changing the release height. The object that sends more energy into spin leaves less energy for [[v_cm]], and therefore arrives with lower translational speed.

## 3. Vehicle tires

In vehicles, rotational energy of the wheels is part of the cost of accelerating. At high speed, [[K_total]] of each wheel can matter during speed changes. The effective radius [[R]] also changes slightly with load and pressure, modifying the relation between [[v_cm]] and [[omega]].

Dominant variable: effective [[R]] together with [[I]]. Validity limit: real tires deform, heat up, and dissipate energy, so the rigid model is only a first approximation.

The reading helps separate effects. Low pressure changes effective radius and increases deformation losses; a heavy rim changes [[I]]. Both phenomena can feel like lower efficiency, but they do not have the same cause or solution.

## 4. Braking and wheel lock

During braking, [[K_total]] must decrease. If the wheel remains in rolling, translation and rotation stay linked. If the wheel locks, [[omega]] drops and sliding appears, with strong contact dissipation. Energy analysis helps distinguish controlled braking from skidding.

Dominant variable: the difference between initial and final [[E_total]]. Validity limit: the ideal model does not describe temperature, wear, or variable adhesion; dissipative terms are required.

Wheel lock is a change of model, not only a change of number. While rolling holds, [[v_cm]], [[R]], and [[omega]] are linked. Once sliding appears, energy is split between heat and motion in a contact-dependent way.

## 5. Mobile robots and precision wheels

In robots, the rolling condition converts measurements of [[omega]] into estimates of [[v_cm]]. Energy helps size motors and batteries when accelerations are frequent. If [[a_cm]] and [[alpha]] are not coherent, there may be slipping or a poorly calibrated radius.

Dominant variable: coherence between [[v_cm]], [[omega]], and [[R]]. Validity limit: soft surfaces, dust, or deformable wheels break the ideal relation and require sensors or contact models.

In robotics, this coherence is also diagnostic. If the controller commands an [[omega]] and odometry estimates an incompatible [[v_cm]], the robot may be slipping. Then [[K_total]] remains a useful reference, but navigation needs correction.

Across all these applications, [[theta]] and [[tau]] can appear when motor or brake work is studied. The central idea remains unchanged: separate translation, rotation, contact condition, and possible losses before interpreting energy.

The advantage of this approach is that it scales from an incline exercise to real machines. First identify the energy split, then decide whether [[E_total]] is conserved or losses must be added. That discipline prevents kinematics, dynamics, and energy from being mixed into one opaque formula.

Another cross-cutting application is experimental data reading. If [[v_cm]] is measured by video and [[omega]] by a sensor, comparison with [[R]] detects slipping before energy balances are trusted. If the data are coherent, [[K_total]] can be separated into two clear bars. If they are not, the experiment is showing dissipation or calibration error, not an exception to energy conservation.

The same logic helps in product design. Engineers can ask whether it is more useful to reduce [[m]], move mass inward to lower [[I]], change [[R]], or improve contact. Each option changes a different part of the rolling model. That makes the formula a diagnostic tool rather than only a numerical recipe.

It also clarifies communication: when a report separates [[K_total]] from [[E_total]], designers can immediately see whether the issue is motion, stored height, or loss.