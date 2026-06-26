# Aplicaciones: Exam-Type Problems
# Applications: Exam-Type Problems

## 1. Pulley systems in construction cranes

Construction cranes use pulley and counterweight systems that are analytically equivalent to the linked-mass system. A prefabricated concrete block is raised via a counterweight on an inclined rail, reducing motor energy consumption. Civil engineers apply exactly the same linked-mass equations to determine whether the counterweight can start the ascent without motor assistance. The [[aceleracion_sistema]] determines the minimum motor power, while [[tension_cuerda]] dictates the minimum diameter of the steel cable. In tall buildings, this analysis is repeated for each section of the path because the effective [[angulo_plano]] varies with the rail curvature.

**Dominant variable:** [[aceleracion_sistema]] — it determines the power the motor must supply and the cycle times of the crane.

**Validity limit:** The ideal model applies when the cable mass is below 5% of [[masa_1]] and the lifting speed does not exceed 2 m/s; above these values, cable inertia and bearing lubricant viscosity require more complete models.

## 2. Emergency brakes in funicular railways

Mountain funicular railways operate with two cabins joined by the same cable: as one rises, the other descends. In emergency situations (main cable failure), the brake system must absorb the [[fuerza_rozamiento]] needed to stop motion. Engineers calculate the maximum tolerable [[aceleracion_sistema]] for passengers (generally below 0.3 g) and derive the minimum [[fuerza_rozamiento]] the emergency brakes must provide. The [[fuerza_normal]] between the brake pads and the rail directly determines this force via [[coeficiente_rozamiento]] of the friction materials.

**Dominant variable:** [[fuerza_rozamiento]] — it is the quantity engineers adjust through brake system design to control braking [[aceleracion_sistema]].

**Validity limit:** The model is valid for braking at speeds below 15 m/s; above this value, heat generated modifies [[coeficiente_rozamiento]] nonlinearly and thermomechanical analysis is required.

## 3. Conveyor belts in mining

Underground mines use inclined conveyor belts to raise ore from depth. The ore constitutes [[masa_1]] that must ascend the inclined plane; the motor acts as a virtual [[masa_2]] providing traction force through the belt. If the desired [[aceleracion_sistema]] is high, [[tension_cuerda]] in the belt can exceed the structural limits of the material. Engineers size the belt tensile strength by calculating [[tension_cuerda]] for the worst case: cold start (with static [[coeficiente_rozamiento]], higher than dynamic) and maximum load. [[componente_tangencial_peso]] of the ore is the main resistance and directly determines motor power consumption.

**Dominant variable:** [[tension_cuerda]] — its maximum value during start-up determines the belt's tensile class and service life.

**Validity limit:** The model applies while belt elastic elongation is below 0.5% of its length; very long belts (over 500 m) require tension wave models that account for force propagation along the belt.

## 4. Wheelchair ramps for accessibility

Accessible ramp design requires knowing the force a person must exert to push a loaded wheelchair upward. The user provides the force equivalent to a virtual [[masa_2]]; the wheelchair with its occupant is [[masa_1]] on the inclined plane. International standards (ISO 9999) limit the maximum [[angulo_plano]] to 5° for independently usable ramps, precisely because at that angle [[componente_tangencial_peso]] of a standard wheelchair (90 kg) is about 77 N, manageable for most users. [[coeficiente_rozamiento]] of rubber wheels on dry pavement (≈ 0.02) is so low that [[fuerza_rozamiento]] is negligible, and the model reduces to a traction force balancing [[componente_tangencial_peso]].

**Dominant variable:** [[angulo_plano]] — it is the design variable regulating accessibility; small angle changes produce proportional changes in [[componente_tangencial_peso]] and the required effort.

**Validity limit:** The model is valid for [[angulo_plano]] below 10° and paved surfaces with [[coeficiente_rozamiento]] below 0.05; on steeper ramps or rough surfaces, wheel dynamics and load distribution between wheelchair axles require additional analysis.

## 5. Elevators with counterweight

Modern elevators incorporate a counterweight of mass equivalent to the empty cabin plus 40–50% of the nominal payload. The cabin-counterweight system reproduces exactly the linked two-mass system: [[masa_1]] (counterweight) descends as [[masa_2]] (cabin with passengers) rises, and [[aceleracion_sistema]] is given by the force imbalance. The motor only supplies the force difference. [[tension_cuerda]] in the suspension cables under full load and full [[aceleracion_sistema]] (typically 1 m/s²) determines the cable safety factor, which by regulation must exceed 12. [[fuerza_normal]] between the guide shoes and the rail generates guiding [[fuerza_rozamiento]], consuming 2–5% of motor energy.

**Dominant variable:** [[masa_2]] (total cabin mass with load) — it determines the force imbalance the motor must compensate, and hence the building's energy consumption.

**Validity limit:** The linked two-mass model is valid for speeds below 4 m/s; high-speed elevators (above 6 m/s) require treating cables as distributed elastic elements.

## Operational synthesis across cases

Across cranes, funiculars, conveyor belts, ramps, and elevators, the same decision pattern appears: estimate [[componente_tangencial_peso]], estimate [[fuerza_rozamiento]], compare against available traction, and infer the sign and scale of [[aceleracion_sistema]]. This shared structure is what makes exam-type problems educationally powerful and industrially relevant.

In professional practice, engineers use this first-order model as a screening tool before finite-element models or multiphysics simulations. If the preliminary linked-mass balance already fails by order of magnitude, detailed simulation will not rescue the design. If it passes with healthy margins, advanced models are then used to certify fatigue life, thermal behavior, and safety factors.
