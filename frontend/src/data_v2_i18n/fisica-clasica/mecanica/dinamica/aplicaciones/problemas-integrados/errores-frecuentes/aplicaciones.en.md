# Applications: Common errors in dynamics

## 1. Vehicle parked on a ramp

A vehicle with [[masa_total]] = 1 500 kg stops on an urban ramp with [[angulo_plano]] = 15°. The driver needs to verify whether the handbrake is sufficient. Correctly calculating [[componente_normal_erronea]] with:

{{f:proyeccion_normal_plano}}

gives a normal force of 14 204 N. The error of assuming all [[aceleracion_gravedad]] acts perpendicular to the plane yields 14 715 N, a 3.6 % excess. With [[coeficiente_rozamiento_estatico]] = 0.7 and the correct normal, [[fuerza_rozamiento_maximo]] is 9 943 N, well above the [[fuerza_motriz]] of 3 808 N. The vehicle stays put with a wide safety margin.

**Dominant variable:** [[angulo_plano]] — controls the ratio between [[fuerza_motriz]] and [[componente_normal_erronea]]. As θ increases, [[fuerza_motriz]] grows (sine) while [[componente_normal_erronea]] decreases (cosine), narrowing the safety margin.

**Validity limit:** Valid for θ ≤ 45° and dry surfaces with [[coeficiente_rozamiento_estatico]] ≥ 0.3. For steeper angles or wet surfaces, the model predicts sliding and the kinetic coefficient must be used. In real environments, the coefficient can vary with asphalt temperature and tyre pressure, so safety engineers typically apply a 1.5 safety factor over the calculated threshold.

---

## 2. Two-body linked system with rope

Two blocks of [[masa_cuerpo]] (4 kg and 3 kg) are connected by an inextensible rope: the first hangs vertically and the second rests on a horizontal surface with [[coeficiente_rozamiento_estatico]] = 0.4. The most common error is adding the rope tension to the global [[F_ext_net]] when applying:

{{f:ley_newton_sistemas}}

Tension is an internal force of the system: it appears in each body separately but cancels in the global summation. The correct [[aceleracion_sistema]], using [[masa_total]] = 7 kg as the denominator, is 3.92 m/s². Using only one body's mass overestimates [[aceleracion_sistema]] and introduces fictitious [[F_ext_net]].

**Dominant variable:** [[F_ext_net]] — only forces crossing the system boundary contribute to the center of mass acceleration. Internal tensions do not cross that boundary.

**Validity limit:** Applicable while the rope is inextensible and the pulley has no rotational inertia. If the pulley has mass, its moment of inertia increases the effective denominator inertia. In industrial lifting systems, the motorised pulley can contribute up to 20 % of the effective inertia and must be included in [[masa_total]] to avoid overestimating [[aceleracion_sistema]].

---

## 3. Box on a conveyor belt

A box of [[masa_cuerpo]] = 8 kg is placed at rest on a conveyor belt moving at 1.5 m/s. The [[fuerza_erronea]] students often add is a fictitious "belt push force"; the only real horizontal force is kinetic friction. The initial [[aceleracion_sistema]] with kinetic coefficient 0.3 is 2.94 m/s² in the belt direction.

For the [[fuerza_rozamiento_maximo]] threshold, we apply:

{{f:relacion_rozamiento_maximo}}

With [[coeficiente_rozamiento_estatico]] of 0.35, the result is 27.47 N. The [[signo_aceleracion]] changes from positive (acceleration phase) to zero when the box matches the belt speed.

**Dominant variable:** [[coeficiente_rozamiento_estatico]] — distinguishing it from the kinetic coefficient is critical; using the static value during sliding overestimates the box acceleration.

**Validity limit:** Valid while the velocity difference is positive. When the box reaches belt speed, the regime shifts to static and [[F_ext_net]] vanishes.

---

## 4. Inclined plane with oblique applied force

A force of 25 N is applied at 20° above the plane to a block of [[masa_cuerpo]] = 6 kg with [[angulo_plano]] = 25°. The frequent error is ignoring that the perpendicular component of the applied force modifies [[componente_normal_erronea]]. With the correct projection, the normal is 61.88 N. If only:

{{f:proyeccion_normal_plano}}

is used, the result is 53.33 N — a 16 % underestimate of [[componente_normal_erronea]] and therefore of [[fuerza_rozamiento_maximo]]. This can lead to incorrectly concluding the block slides when the higher normal actually raises the static threshold enough to keep it at rest.

**Dominant variable:** [[componente_normal_erronea]] — any force with a perpendicular component to the plane modifies the normal and therefore [[fuerza_rozamiento_maximo]] and the motion criterion.

**Validity limit:** Valid while surface contact is maintained. If the upward perpendicular component of the applied force exceeds the weight component perpendicular to the plane, the block lifts off.

---

## 5. Three-body system in series

Three bodies of [[masa_cuerpo]] (2, 3, and 4 kg) are aligned on a horizontal surface with [[coeficiente_rozamiento_estatico]] = 0.2. An [[F_ext_net]] of 18 N is applied to the first block. The typical error is treating each body separately and including internal tensions in the global summation. Using the correct approach:

{{f:ley_newton_sistemas}}

with [[masa_total]] = 9 kg in the denominator, [[aceleracion_sistema]] is 0.04 m/s². Omitting any mass underestimates the joint inertia and overestimates [[aceleracion_sistema]]. Internal tensions are then found by sectioning the system using the globally obtained acceleration.

**Dominant variable:** [[masa_total]] — the joint inertia of the linked system determines [[aceleracion_sistema]]. Omitting any mass introduces an error proportional to the omitted fraction.

**Validity limit:** Applicable while ropes are inextensible and [[aceleracion_sistema]] does not exceed [[aceleracion_gravedad]]. If bodies are connected by springs, acceleration varies along the train and each segment requires differential analysis. Recognising this boundary is essential for correct model selection.
