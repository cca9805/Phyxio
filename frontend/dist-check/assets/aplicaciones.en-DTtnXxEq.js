const e=`# Applications of work and torque\r
\r
## 1. Electric motors\r
\r
An electric motor delivers [[tau]] to a shaft rotating with [[omega]]. Power [[P]] estimates energy per unit time, while [[W]] estimates accumulated energy during a cycle. In speed control, torque is not always constant, so \`trabajo_torque_variable\` may be required.\r
\r
Dominant variable: [[P]], because it limits useful energy rate. Validity limit: the ideal model does not include electrical efficiency, heat, or motor saturation.\r
\r
## 2. Disk brakes\r
\r
A brake applies [[tau]] opposite to rotation. Work [[W]] is usually negative for the rotor and becomes heat. Power [[P]] evaluates instantaneous thermal load and overheating risk.\r
\r
Dominant variable: [[tau]], because it fixes energy extraction for a given turn. Validity limit: real braking torque changes with temperature, pressure, and speed.\r
\r
## 3. Wrenches and tools\r
\r
When tightening a bolt, torque applied through an angle [[theta]] may represent work on the joint. If angle is small but torque is high, energy may be moderate even while mechanical stress is large.\r
\r
Dominant variable: [[theta]], because without rotation there is no work even if torque exists. Validity limit: part of the work is lost in thread friction and deformation.\r
\r
## 4. Turbines and generators\r
\r
A turbine receives torque from a fluid, and a generator extracts power from the shaft. \`potencia_angular\` connects [[tau]], [[omega]], and [[P]]. Accumulated work over an interval comes from integrating power or torque.\r
\r
Dominant variable: [[omega]], because at equal torque it increases power. Validity limit: real machines include aerodynamic, electrical, and mechanical losses.\r
\r
## 5. Torsional springs\r
\r
In a torsional spring, [[tau]] changes with [[theta]], so work is area under the curve and not a simple product. This application shows why \`trabajo_torque_variable\` is necessary for elastic systems.\r
\r
Dominant variable: the curve of [[tau]] versus [[theta]]. Validity limit: if the spring leaves the elastic regime, the curve is no longer reversible.\r
\r
Across all applications, action, displacement, energy, and rate must be separated. The same torque can be safe over a short interval and problematic if held through many turns. A full energy reading prevents motors, brakes, or tools from being sized from torque alone.\r
\r
## Comparison of design decisions\r
\r
In electric motors, the most visible catalog value is often maximum torque, but real selection depends on the whole curve. A motor may sustain high [[tau]] briefly and then limit current to avoid overheating. In that case [[P]] marks instantaneous demand, while accumulated [[W]] helps estimate thermal energy. Design therefore compares duty cycles, not only torque peaks.\r
\r
In brakes, the goal is not to produce useful mechanical energy but to extract it from the rotor. The sign of [[W]] is therefore a dissipation reading. Two braking events with the same total work can be very different if one concentrates extraction in a short time. High [[P]] requires rapid heat rejection, while total work fixes the energy that must ultimately leave the system.\r
\r
In tools, a torque wrench controls [[tau]], but the result on the joint also depends on [[theta]] and friction. A small additional turn can strongly change preload if the system is stiff, while part of the work can be lost in threads. The application shows that tightening torque is not a direct measurement of stored energy or clamping force without an additional model.\r
\r
In turbines and generators, the same equation reads opposite directions of transfer. The turbine delivers torque to the shaft; the generator applies resisting torque to convert mechanical energy into electrical energy. If [[omega]] increases for the same [[tau]], mechanical power increases, but aerodynamic and electrical losses may also grow. The balance must separate input power, useful power, and heat.\r
\r
In torsional springs, area under the curve is decisive because torque usually grows with angle. Using final [[tau]] as if it were constant overestimates stored work in a linear spring. This application is a natural transition toward rotational elastic potential energy and toward systems where the experimental curve matters more than a closed-form formula.\r
\r
The practical rule is to ask what is controlled and what is measured. If torque is controlled and rotation is measured, compute [[W]]. If speed is controlled and torque is measured, compute [[P]]. If both change, a curve or integration is needed. This decision prevents a correct formula from being applied in the wrong context.\r
\r
In the laboratory, the same rule guides data collection. A torque sensor alone is not enough to estimate energy; it needs an encoder measuring [[theta]]. A tachometer alone is not enough to estimate power; it needs simultaneous torque on the same axis. When sensors are not synchronized, uncertainty can exceed the difference being measured. For that reason, motor and brake tests record torque, angle, speed, and temperature as coupled signals.\r
\r
This also matters in diagnostics. A falling [[omega]] with positive applied torque may indicate hidden resisting torque. A high computed [[P]] with little temperature rise may indicate that the measured torque is not acting on the reported shaft. The formulas therefore support both design and fault detection.`;export{e as default};
