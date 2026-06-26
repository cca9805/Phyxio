const e=`# Exam-type example\r
\r
## Problem statement\r
\r
Two systems with the same dynamical structure are compared. The first is a cart with mass [[m]] of 12 kilograms receiving a horizontal net force [[F_net]] of 18 newtons. The second is a disk mounted on a fixed axis with moment of inertia [[I]] of 0.60 kilogram meter squared receiving a net torque [[tau]] of 0.90 newton meter. The task is to compute the cart linear acceleration [[a]] and the disk angular acceleration [[alpha]]. After that, the student must compare the dynamical state reached after 4 seconds through the cart linear momentum [[p]] and the disk angular momentum [[L]], using [[v]] and [[omega]] as intermediate kinematic states.\r
\r
The question asks for more than numbers. It asks why the linear law, the rotational law, and the two momentum definitions play analogous roles, and why that analogy does not make force and torque identical physical quantities.\r
\r
## Data\r
\r
Cart data:\r
- mass of 12 kilograms\r
- horizontal net force of 18 newtons\r
- initial state at rest\r
\r
Disk data:\r
- moment of inertia of 0.60 kilogram meter squared\r
- net torque of 0.90 newton meter\r
- initial state at rest\r
\r
Common data:\r
- observation time of 4 seconds\r
\r
## System definition\r
\r
The first system is the whole cart, so [[F_net]] represents the effective sum of external forces along the chosen direction. The second system is the rigid disk about the fixed axis, so the net torque [[tau]] represents the effective rotational cause about that axis. The analogy is only valid if both dynamical causes have been built correctly.\r
\r
## Physical model\r
\r
For the linear branch use the translational second law:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
For the rotational branch use the rotational second law:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
To read the state reached at the end of the interval use the linear and angular momentum definitions:\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_angular}}\r
\r
## Model justification\r
\r
Both systems have one relevant coordinate and start from rest. The cart mass can be treated as constant and the disk moment of inertia is already given about the correct axis. The exercise is not trying to refine friction or deformation. Its purpose is to show how the same dynamical structure appears in linear language and in rotational language.\r
\r
## Symbolic solution\r
\r
Linear route:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:momento_lineal}}\r
\r
Rotational route:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
{{f:segunda_ley_rotacional}}\r
\r
{{f:momento_angular}}\r
\r
The important comparison is structural. In one branch there is the ratio between [[F_net]] and linear inertia [[m]]. In the other there is the ratio between torque [[tau]] and rotational inertia [[I]]. Then, in each branch, momentum summarizes the accumulated dynamical state.\r
\r
## Numerical substitution\r
\r
Using the statement data, the explicit substitution confirms the same structural pattern in both branches. In the linear branch, the ratio [[F_net]]/[[m]] fixes [[a]], and that value then determines [[v]] and [[p]] at the end of 4 s.\r
\r
For the cart:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_lineal}}\r
\r
Evaluating this block gives [[a]] = 1.5 m/s^2, [[v]] = 6 m/s, and [[p]] = 72 kg*m/s.\r
\r
For the disk:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
{{f:momento_angular}}\r
\r
{{f:momento_angular}}\r
\r
In the rotational branch, substitution gives [[alpha]] = 1.5 rad/s^2, [[omega]] = 6 rad/s, and [[L]] = 3.6 kg*m^2/s. The numerical equality between [[a]] and [[alpha]] in this case is scenario-specific, not a physical identity.\r
\r
## Dimensional validation\r
\r
In the linear branch, dividing net force by mass gives linear acceleration units. In the rotational branch, dividing torque by moment of inertia gives angular acceleration units. The final momenta have different units, but in both cases they describe accumulated dynamical state.\r
\r
## Physical interpretation\r
\r
The result gives a useful teaching coincidence: the numerical value of the linear acceleration matches the numerical value of the angular acceleration in this example. That does not mean translation and rotation are identical. It only means both branches were chosen with the same proportion between net cause and inertia.\r
\r
The second important reading concerns dynamical state. After four seconds, the cart stores linear momentum and the disk stores angular momentum. That comparison shows why the leaf does not stop at the pair force and torque, but also needs the pair formed by the two momenta.\r
\r
# Real-world example\r
\r
## Context\r
\r
A production line coordinates two subsystems. A linear cart moves boxes across a short track and a rotating table reorients them before packaging. The technical team wants a first estimate of whether both actuators are working under comparable dynamical demand. The analogy is useful here not to merge units, but to compare physical structure.\r
\r
## Physical estimation\r
\r
Assume the cart has an effective mass [[m]] of 40 kilograms and available [[F_net]] of 80 newtons. The rotating table has moment of inertia [[I]] of 5.0 kilogram meter squared and available net torque [[tau]] of 10 newton meter. This is not a final design calculation. It is a first quantitative estimate used to judge whether the actuation split is balanced.\r
\r
With those values, the expected linear acceleration is:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
The expected angular acceleration is:\r
\r
{{f:momento_angular}}\r
\r
The first diagnosis is straightforward. Both branches operate with a cause to inertia ratio of the same order. That suggests that, during startup, neither subsystem is obviously oversized or obviously underpowered relative to the other. The estimate is already strong enough to support a preliminary engineering decision about control balance.\r
\r
If both subsystems operate for 3 seconds from rest, the predicted speeds are:\r
\r
{{f:segunda_ley_traslacional}}\r
\r
{{f:segunda_ley_rotacional}}\r
\r
The accumulated dynamical states then become:\r
\r
{{f:momento_lineal}}\r
\r
{{f:momento_angular}}\r
\r
## Interpretation\r
\r
The correct reading is not to ask whether eighty newtons are larger or smaller than ten newton meters. That direct comparison is physically empty. The correct reading is to compare the expected response in each coordinate and the state that each actuator leaves stored by the end of the useful interval.\r
\r
That has immediate practical value. If the rotating table looks slow, the team should not conclude that the subsystem simply lacks "force". It should check whether the available torque is small for the actual rotational inertia of the table. In the same way, if the cart responds poorly, the relevant question is not what torque the other subsystem has, but whether the cart net force is adequate for its effective mass.\r
\r
This estimate also helps with braking and control. A subsystem may not accelerate very much and still store substantial dynamical state by the end of motion. For the table that appears as angular momentum. For the cart it appears as linear momentum. The analogy reminds the engineer that both stored states matter when the goal is to stop, synchronize, or correct motion.\r
\r
The operational conclusion is that this leaf transfers judgment, not units. It helps ask whether the cause to inertia ratio is reasonable in each branch, whether the accumulated state will be easy to dissipate, and whether a behavior difference comes from the dynamical law itself or from a poorly built model.`;export{e as default};
