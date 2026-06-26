const n=`# Common Errors in Rolling Analysis\r
\r
## Conceptual Errors\r
\r
### Error 1: Assuming maximum friction\r
It is a very common mistake to think that the friction force is always equal to its maximum value\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
.\r
\r
### Por qué parece correcto\r
In basic statics problems, we often calculate the threshold of impending motion using this equality, leading students to believe friction is a fixed value.\r
\r
### Por qué es incorrecto\r
In pure rolling, friction is an adjustable constraint force. It takes exactly the value needed to maintain the condition\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
. It only reaches the value [[mu_s]] N at the limit of slipping.\r
\r
### Mini-ejemplo\r
If a cylinder rolls down a gentle ramp, [[fs]] might be 2 N even if the limit [[mu_s]] N is 10 N. Forcing it to be 10 N would yield a physically impossible acceleration.\r
\r
## Model Errors\r
\r
### Error 2: Ignoring the grip limit\r
Not checking whether the calculated value of [[fs]] is physically possible according to the available surface.\r
\r
### Por qué parece correcto\r
Once you have an elegant formula for acceleration [[a]], it is tempting to apply it to any angle or surface without further thought.\r
\r
### Por qué es incorrecto\r
Every surface has a physical limit. If the dynamics require a friction of 50 N but the ground can only provide 30 N, the pure rolling model ceases to exist.\r
\r
### Mini-ejemplo\r
On an icy ramp, the theoretical rolling acceleration is not met because the tire slips almost immediately, transitioning to a kinetic friction model.\r
\r
## Mathematical Errors\r
\r
### Error 3: Forgetting the kinematic link\r
Attempting to solve the system of translation and rotation by treating [[a]] and [[alpha]] as independent variables.\r
\r
### Por qué parece correcto\r
They are two different motions (advancing and spinning), so one instinctively assigns them separate degrees of freedom.\r
\r
### Por qué es incorrecto\r
The essence of rolling without slipping is that the contact point is an instantaneous center of rotation, which mathematically links advancement with rotation.\r
\r
### Mini-ejemplo\r
Without the link, you couldn't predict that a sphere will roll faster than a cylinder; both would seem to depend on arbitrary, unlinked forces.\r
\r
## Interpretation Errors\r
\r
### Error 4: Static friction work\r
Claiming that static friction [[fs]] dissipates mechanical energy and slows down the body through "rubbing."\r
\r
### Por qué parece correcto\r
The word "friction" is usually associated with energy loss, heat, and slowing down in everyday language.\r
\r
### Por qué es incorrecto\r
In pure rolling, the point of application of [[fs]] has zero velocity relative to the ground at the instant of contact. By the definition of work (\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
), if there is no displacement of the application point in the direction of the force, the work is zero.\r
\r
### Mini-ejemplo\r
A bowling ball in pure rolling would maintain its velocity indefinitely if it weren't for rolling resistance (which is a different phenomenon from static friction).\r
\r
## Quick self-control rule\r
To verify your dynamic analysis, always check the sign of the friction force [[fs]]. In a ramp without external torques, [[fs]] must point upwards to provide the torque that makes the body spin down. If your calculation yields a downward friction, you have likely swapped the direction of the torque or the linear force.`;export{n as default};
