const e=`# Applications: Simple Pulleys\r
\r
## 1. Curtain and awning lifting systems\r
\r
Roller blind systems and retractable awnings employ simple pulleys to allow a person to easily lift or move relatively heavy loads. In large commercial window coverings, the weight of the fabric can reach several kilograms due to the extension and density of the material.\r
\r
The typical configuration uses a fixed pulley at the top of the frame to change the direction of effort, allowing the operator to pull downward or sideways to raise the curtain. This is especially useful when direct access to the upper part is difficult or when ground-level operation is required. The mechanism takes advantage of the fact that available muscular force pulling downward is generally greater than pulling force upward.\r
\r
Dominant variable: The fabric weight [[W]] determines whether a fixed pulley is sufficient or if a system with additional mechanical advantage is required.
\r
Validity limit: When the fabric weight exceeds approximately 25 kg, the simple fixed pulley becomes impractical because it requires excessive pulling forces for comfortable manual operation.\r
\r
## 2. Light construction cranes\r
\r
Portable cranes used in small construction sites and home renovations employ simple pulley configurations to lift construction materials such as bricks, cement bags, and wooden beams. These cranes allow a worker to lift loads of 50-100 kg from the ground to heights of 2-3 floors.\r
\r
The typical design combines a fixed pulley in the upper structure with movable pulleys on the load hook, creating mechanical advantage configurations of 2:1 or 3:1 that allow individual workers to handle loads that would otherwise require two or more people. This increases productivity and reduces the risk of injury from excessive exertion.\r
\r
Dominant variable: The number of active segments [[nSel]] determines the relationship between load capacity and the force the operator must exert.\r
\r
Validity limit: When loads exceed 150 kg or lifting heights exceed 10 meters, simple pulley systems become inadequate and compound pulley systems or motorized cranes are required.\r
\r
## 3. Small sailboat rigging\r
\r
Recreational sailboats and light vessels use simple pulley systems to adjust sail position and control sheet tension. In a small sailboat of 4-6 meters length, the winch or windlass employs fixed and movable pulleys to multiply the force applied by the sailor.\r
\r
When wind pressure acts on the sail, the force required to adjust the sheet can be considerable. A movable pulley configuration reduces the required force by half, allowing a single crew member to control the sail even in moderate wind conditions. The system must balance mechanical advantage with operating speed, as greater advantage implies greater sheet travel.\r
\r
Dominant variable: The wind force on the sail [[W]], which varies with the square of wind speed, determines whether the pulley configuration provides sufficient mechanical advantage.\r
\r
Validity limit: When wind force on the sail exceeds 500 N (approximately strong wind of force 6 on the Beaufort scale), simple pulley systems become insufficient and compound rigging systems or mechanized winches are required.\r
\r
## 4. Physical rehabilitation systems\r
\r
Rehabilitation and physiotherapy equipment employs simple pulleys to perform controlled strengthening exercises. In pulley exercise machines, the patient pulls a cable connected to calibrated loads through fixed or movable pulley configurations.\r
\r
The advantage of this system is the ability to progressively adjust resistance by changing the mass or pulley configuration. For patients recovering from muscle injuries, a fixed pulley provides direct resistance equal to the weight, while a movable pulley allows starting training with half the apparent resistance, progressing gradually.\r
\r
Dominant variable: The adjustable resistance force [[F]] allows calibrating exercise intensity according to patient capabilities and limitations.\r
\r
Validity limit: When resistance greater than 500 N is required or movements with precisely controlled accelerations are needed, simple pulley systems become insufficient and machines with electronic resistance control are required.\r
\r
## 5. Warehouse load lifting\r
\r
Manual lifting systems in warehouses and hardware stores employ simple pulleys to move merchandise between levels. In establishments without mechanical freight elevators, a movable pulley suspended from the ceiling allows workers to lift loads of 20-50 kg from the receiving area to elevated shelving.\r
\r
This system is particularly useful in businesses where lifting frequency does not justify investment in motorized equipment, but occasional loads exceed what is manageable by direct pulling. The movable pulley configuration reduces the required force by half, allowing workers of different physical constitutions to perform the task safely.\r
\r
Dominant variable: The relationship between typical cargo weight [[W]] and average worker strength capacity determines whether a movable pulley is sufficient or if a compound pulley system with greater mechanical advantage is required.\r
\r
Validity limit: When operation frequency exceeds 20 lifts per hour or loads exceed 75 kg, manual simple pulley systems generate excessive fatigue and motorized systems are required to comply with occupational safety regulations.

In this setting, the pulley choice is not a decorative detail: it fixes worker fatigue, available rope travel, and the safe pace of repeated lifting.
`;export{e as default};
