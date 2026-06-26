const e=`# Physical applications\r
\r
## 1. Kinematics\r
\r
<!-- algebra-numbered-app-fix-v1:1 -->\r
Physical context: a motion problem with the model already chosen. Operational use: calculate or interpret the isolated variable and compare whether the final scale is coherent with the motion.\r
\r
In kinematics, rearrangement changes the question asked within the same motion relation. If distance and time are known, average speed can be found; if speed and distance are known, time can be found; if acceleration and time are known, the change in velocity can be found.\r
\r
The model still comes first. Decide whether the motion is uniform, uniformly accelerated, or variable. Only then solve for the requested quantity. This prevents using a constant-speed equation in a situation where acceleration matters.\r
\r
## 2. Dynamics\r
\r
<!-- algebra-numbered-app-fix-v1:2 -->\r
Physical context: a dynamical system with axis, mass, and net force defined. Operational use: calculate the unknown and detect whether sign, unit, and dependence respect the model.\r
\r
In dynamics, rearranging Newton's second law allows the same relation to answer questions about net force, mass, or acceleration. The final unit controls the result: newtons for force, kilograms for mass, and metres per second squared for acceleration.\r
\r
It also reveals proportionality. For the same force, a larger mass gives a smaller acceleration; for the same acceleration, a larger mass requires a larger force. The rearranged expression should preserve that physical reading.\r
\r
## 3. Work, energy, and power\r
\r
<!-- algebra-numbered-app-fix-v1:3 -->\r
Physical context: energy or power transfer during a process. Operational use: calculate the target quantity and interpret whether the sign represents energy input or loss.\r
\r
Energy relations connect work, force, displacement, power, and time. Rearranging them can show how long a power source must operate, what average force produces a given work, or how much energy is transferred.\r
\r
Signs matter strongly here. Negative work is not fixed by changing algebra; it may mean that a force removes mechanical energy from the system or acts against the motion.\r
\r
## 4. Electricity\r
\r
<!-- algebra-numbered-app-fix-v1:4 -->\r
Physical context: a circuit with measurable voltage, current, and resistance. Operational use: calculate the unknown variable and compare whether direct or inverse dependence makes sense.\r
\r
In simple circuits, rearrangement moves between voltage, current, and resistance. If resistance increases while voltage stays fixed, current decreases; that inverse dependence must appear in the final expression.\r
\r
Units protect the calculation. Volts, amperes, and ohms are not labels added at the end; they indicate whether the operation is physically meaningful.\r
\r
## 5. Fluids and pressure\r
\r
In fluids, rearrangement appears when pressure, force, area, density, or height are related. The same pressure can come from a large force over a large area or a smaller force over a smaller area.\r
\r
Physical interpretation is essential because some quantities must be positive, such as area, density, and volume. If the rearrangement gives a negative area, the issue lies in the model, signs, or data.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Intensive transfer closure\r
\r
In kinematics, the context is deciding whether a motion equation can find position, velocity, acceleration, or time. The operational use is to decide first which variable appears once and which appears repeatedly; if time appears squared, the problem is no longer a linear rearrangement.\r
\r
In dynamics, the model \`F = m a\` looks simple, but the physical context decides the sign of net force and whether mass can be treated as constant. The rearrangement is valid only after the axis, system, and conditions are fixed.\r
\r
In electricity and fluids, solving for resistance, pressure, or area requires checking zero denominators and units. That control prevents impossible results even when the calculator returns a number.\r
\r
`;export{e as default};
