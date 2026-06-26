const e=`# Applications: Compound Pulleys

## 1. Construction Cranes

Tower and mobile cranes use compound pulley systems to lift heavy construction materials.

**Description:**
The lifting mechanism of a typical crane employs 4 to 8 rope segments to reduce the force required at the winch. A 2000 kg load can be lifted with a pulling force of 300-400 N on the winch cable. The pulley system allows relatively small electric motors to move massive loads that would otherwise require much larger and more expensive equipment. The typical configuration includes fixed pulleys at the top of the tower and movable pulleys suspended from the load hook.

**Typical magnitudes:**
- [[W]]: 10,000 N to 50,000 N (loads of 1 to 5 tons)
- [[nSel]]: 4 to 8 segments in standard configurations
- [[eta]]: 0.85 to 0.95 in well-maintained equipment
- [[F_real]]: 1,500 N to 6,000 N at the winch

**Dominant variable:** The number of segments [[nSel]] determines the maximum load capacity for a given motor power.

**Validity limit:** When lifting height exceeds 100 m, the cable's own weight becomes significant and must be included in calculations.

## 2. Nautical Rigging

Sailboats use pulley systems (called "rigs") to multiply force on sails and adjust their position.

**Description:**
A winch or windlass on a sailboat combines fixed pulleys on the mast with movable pulleys on the sail to allow one or two people to control large surface area sails (50-100 m²) experiencing wind forces of thousands of newtons. The rigging systems allow precise adjustment of sail tension, optimizing boat propulsion according to wind conditions. Nautical design has perfected these systems over centuries, seeking the balance between mechanical complexity and ease of operation in adverse marine conditions.

**Typical magnitudes:**
- [[W]]: Wind force on sail, 2,000 N to 10,000 N
- [[nSel]]: 2 to 6 segments depending on boat size
- [[eta]]: 0.80 to 0.90 due to salt spray exposure and wear
- [[F_real]]: 400 N to 2,000 N at the winch

**Dominant variable:** Efficiency [[eta]] is critical because maintenance in marine environments is difficult.

**Validity limit:** Systems with more than 6 segments become impractical due to rope accumulation and friction losses.

## 3. Rescue and Evacuation Equipment

Firefighters and mountain rescue teams use portable block and tackle systems for vertical evacuation.

**Description:**
A typical rescue kit includes movable pulleys and high-strength rope to create 4-6 segment systems that allow a single rescuer to lift or lower a victim without additional help. The load includes the injured person's weight plus harness and safety equipment. Portable systems are designed for rapid assembly in emergency conditions, enabling vertical evacuations from crevices, ravines, or buildings. Equipment lightness is crucial, as rescuers must transport it to the emergency site through difficult terrain.

**Typical magnitudes:**
- [[W]]: 800 N to 1,500 N (person of 80-150 kg with equipment)
- [[nSel]]: 4 to 6 segments
- [[eta]]: 0.85 to 0.95 (lightweight aluminum equipment)
- [[F_real]]: 150 N to 300 N (manageable for one rescuer)

**Dominant variable:** The relationship between [[W]] and [[F_real]] determines whether a single rescuer can operate the system.

**Validity limit:** Emergencies where time is critical (< 5 minutes), since setting up the system requires several minutes.

## 4. Theater Stage Lifting

Opera houses and concert venues use compound pulley systems to move heavy scenery and change sets.

**Description:**
"Counterweight" systems allow stage technicians to lift decorative elements weighing tons from the floor up to 20-30 m height. A typical system has 6-10 segments to allow safe manual operation. These systems operate silently and smoothly, essential for live performances where mechanical noise would disrupt the artistic experience.

**Typical magnitudes:**
- [[W]]: 5,000 N to 30,000 N (500 kg to 3 tons of scenery)
- [[nSel]]: 6 to 10 segments
- [[eta]]: 0.75 to 0.90 (systems with large diameter pulleys)
- [[F_real]]: 600 N to 4,000 N

**Dominant variable:** The number of segments [[nSel]] determines the lifting speed (inversely proportional).

**Validity limit:** Scene changes must be completed in < 2 minutes, which limits the maximum practical mechanical advantage.

## 5. Mining and Extraction Industry

Surface mining operations use cable systems to transport ore across rugged terrain.

**Description:**
Cableways transport ore from the mine to processing plants across valleys. Traction systems employ compound pulleys to move loads of tens of tons with motors of moderate power. These industrial systems operate continuously in harsh environments.

**Typical magnitudes:**
- [[W]]: 50,000 N to 200,000 N (5 to 20 tons)
- [[nSel]]: 4 to 8 segments on main winches
- [[eta]]: 0.70 to 0.85 (dusty environment and heavy loads)
- [[F_real]]: 7,500 N to 70,000 N (requires motorized traction)

**Dominant variable:** Efficiency [[eta]] is critical because losses translate to significant energy costs at industrial scale.

**Validity limit:** Distances greater than 1 km require cable tension compensators due to thermal expansion and elasticity.
`;export{e as default};
