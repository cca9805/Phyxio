const e=`# Applications: Complete Analysis of Frictional Systems\r
\r
## 1. Emergency braking in automobiles\r
\r
When a driver slams the brakes, the tyres transition from rolling without slipping (static regime) to locking up (kinetic regime). Stopping distance depends critically on which regime is active, because the static tyre-asphalt coefficient (around 0.7 to 0.9 on dry road) is greater than the kinetic one (0.5 to 0.7). ABS systems keep the wheels just below the sliding threshold to exploit the higher static grip and shorten the braking distance.\r
\r
The regime decision is exactly the one in this leaf: compare the tangential force on the tyre with the contact's [[F_ext_crit]]. If exceeded, the wheels skid and deceleration drops. ABS modulates brake pressure thousands of times per second to avoid crossing that threshold.\r
\r
Dominant variable: static friction coefficient between tyre and road surface, which depends on moisture and asphalt condition.\r
Validity limit: the constant-coefficient model fails under aquaplaning conditions, where a water film eliminates dry contact.\r
\r
## 2. Design of industrial conveyor belts\r
\r
A conveyor belt moves objects by exploiting the static friction between the belt surface and the object's base. The motor drives the belt, but the object only advances if the available static friction is sufficient to transmit the required acceleration without the object sliding on the belt. If the belt starts too quickly, [[F_ext]] exceeds [[F_ext_crit]] and the objects skid, losing synchronisation with the production line.\r
\r
Engineers select belt materials with high [[mu_e]] (rough rubber, for example) and limit the start-up acceleration to ensure that objects never enter the kinetic regime. In sectors such as the food industry, where surfaces can be wet, textures are added or belts are slightly inclined to improve grip.\r
\r
Dominant variable: belt start-up acceleration, which determines whether the inertial force on the object exceeds the static threshold.\r
Validity limit: the model fails when the object surface is irregular or deformable, because the effective contact area changes and the coefficient is no longer constant.\r
\r
## 3. Clamping with vices and bench clamps\r
\r
A bench vice holds a metal workpiece by pressure: the jaws exert a normal force on the piece and the resulting static friction prevents it from sliding when a machining force (drilling, filing, milling) is applied. The cutting force acts as [[F_ext]] and the static threshold [[F_ext_crit]] depends on the product of [[mu_e]] and the clamping force.\r
\r
If the operator does not tighten enough, the cutting force exceeds the threshold and the workpiece shifts inside the vice, ruining the operation and creating a safety hazard. In practice, technicians over-tighten to maintain a wide safety margin, which increases [[N]] and raises [[f_emax]] well above the expected machining force.\r
\r
Dominant variable: normal clamping force of the vice, which directly controls the available static threshold.\r
Validity limit: the model breaks down if the jaws plastically deform the workpiece, because the contact geometry changes and friction ceases to be proportional to the normal.\r
\r
## 4. Sport climbing and sole adhesion\r
\r
In rock climbing, the climber places the shoe sole on a hold or an inclined surface and trusts that static friction will support their weight. The tangential component of gravity acts as [[F_ext]] and the maximum static friction depends on [[mu_e]] between the rubber sole and the rock, multiplied by the normal component of the contact. If the inclination exceeds a certain angle, the tangential component exceeds [[F_ext_crit]] and the foot slips.\r
\r
Climbing soles are manufactured with high-coefficient rubber (often above 0.8 when dry) and designed with profiles that maximise contact. Climbers learn to load their weight onto their feet to increase [[N]] at the support point, raising [[f_emax]] and allowing them to adhere to steeper walls. On wet rock, [[mu_e]] can drop by half and the same move that was safe becomes impossible.\r
\r
Dominant variable: inclination angle of the support surface, which determines the ratio between tangential and normal components of the weight.\r
Validity limit: the Coulomb model breaks down on wet, sandy or mossy surfaces, where adhesion depends on factors that cannot be reduced to a single constant coefficient.\r
\r
## 5. Preventing slides on warehouse shelving\r
\r
Warehouse shelves support stacked boxes that can slide if a bump, seismic vibration or abrupt forklift manoeuvre generates a transient horizontal force. The stability of each box depends on the horizontal force not exceeding the threshold [[F_ext_crit]] given by [[mu_e]] between the box base and the shelf. Industrial safety regulations require verifying that the maximum expected acceleration (from an earthquake or impact) multiplied by the box mass does not exceed the available static friction.\r
\r
Practical solutions include anti-slip mats that raise [[mu_e]], physical shelf lips, and placing the heaviest objects on the lowest levels to lower the overall centre of gravity. Each measure modifies a different parameter in this leaf's model: either it raises the coefficient or it reduces the effective horizontal force.\r
\r
Dominant variable: transient horizontal acceleration (seismic or impact), which acts as the disturbing force on each box.\r
Validity limit: the model does not account for toppling by torque; if the box is tall and narrow, it may topple before sliding, and the pure friction analysis becomes insufficient.\r
`;export{e as default};
