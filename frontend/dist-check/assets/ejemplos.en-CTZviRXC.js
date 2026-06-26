const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A test sled moves along a horizontal track section. The total mass [[m]] of the sled is 25 kg. It enters the section with an initial speed [[vi]] of 4 m/s and leaves it with a final speed [[vf]] of 10 m/s because the pulling system produces a positive net effect during the interval. Compute the initial kinetic energy [[Ki]], the final kinetic energy [[Kf]], the change [[dK]], and the net work [[Wnet]] done on the sled. Then explain why the result should not be read as a merely linear speed increase and why this task belongs to the work-energy theorem rather than to a rate-of-transfer leaf.\r
\r
## Data\r
\r
The relevant data are a constant mass [[m]] of 25 kg, an initial speed [[vi]] of 4 m/s, and a final speed [[vf]] of 10 m/s. The statement gives no time information and does not specify the force profile point by point. That absence is not a problem. It is the sign that the process should be closed through a state-to-state energetic balance. The motion is clearly classical, translational, and the mass does not vary appreciably during the interval.\r
\r
## System definition\r
\r
The system is the sled alone. The pulling device and the track remain outside the system and are interpreted as external agents. This choice matters because [[Ki]], [[Kf]], [[dK]], and [[Wnet]] can only be compared meaningfully if they refer to the same physical system throughout the whole process. Once the boundary is fixed, the theorem can be read as a global closure between external work balance and change in motion state.\r
\r
## Physical model\r
\r
The physical model compares two motion states of the same system through [[Ki]] and [[Kf]], then connects that difference to [[dK]] and to [[Wnet]]. It does not require rebuilding the entire trajectory or the exact force history in time, because the purpose of the problem is not local dynamics but global balance. The core magnitudes are [[m]], [[vi]], [[vf]], [[Ki]], [[Kf]], [[dK]], and [[Wnet]]. The relevant law is the closure between total net work and change in kinetic-energy state.\r
\r
## Model justification\r
\r
This model is physically appropriate because the mass [[m]] can be treated as constant, the speed range is fully classical, and the question is explicitly about the transition between an initial and a final state. No dominant rotation, strong deformation, or additional energy reservoir is suggested. The statement also does not ask for power or for a detailed time evolution. That is why the work-energy theorem is the correct leaf: it closes the process through the physical law that links global work balance with change of kinetic state.\r
\r
## Symbolic solution\r
\r
Start by expressing the change between the two kinetic states:\r
\r
{{f:variacion_energia_cinetica}}\r
\r
Then close the causal balance through the theorem itself:\r
\r
{{f:teorema_trabajo_energia}}\r
\r
Because the statement provides [[m]], [[vi]], and [[vf]], a direct operational form for [[Wnet]] is also available:\r
\r
{{f:trabajo_neto_desde_estados}}\r
\r
If the problem were inverted and gave [[m]], [[vi]], and [[Wnet]], the final speed [[vf]] would be obtained through:\r
\r
{{f:velocidad_final_desde_trabajo_neto}}\r
\r
## Numerical substitution\r
\r
With mass [[m]] equal to 25 kg and initial speed [[vi]] equal to 4 m/s, the initial kinetic energy [[Ki]] is 200 J. With final speed [[vf]] equal to 10 m/s, the final kinetic energy [[Kf]] is 1250 J. The change [[dK]] is therefore 1050 J. Since the work-energy theorem identifies [[Wnet]] with [[dK]], the net work done on the sled is also 1050 J.\r
\r
The teaching value of the result lies in the scaling. The final speed is only two and a half times the initial one, yet the kinetic-energy budget becomes more than six times larger. This is why the theorem cannot be interpreted through naive linear intuition. The process delivered a much larger mechanical effect than an informal speed comparison would suggest.\r
\r
The example also shows the internal coherence of the leaf. One may compute [[Ki]] and [[Kf]] first and then infer [[dK]] and [[Wnet]]. Or one may go directly to [[Wnet]] through the closed state form in [[m]], [[vi]], and [[vf]]. Both routes converge because they are not different tricks but different entrances into the same physical law.\r
\r
## Dimensional validation\r
\r
Kinetic energy and net work must both be reported in joules. The result is dimensionally consistent with kilograms and squared meters per second. The same unit agreement must hold for [[dK]] and [[Wnet]], otherwise the theorem has been applied to the wrong kind of quantity. This is an important control because nearby topics can tempt students to mix work, force, speed, and rate-of-transfer ideas in the same symbolic line.\r
\r
The sign check is equally important. Since [[vf]] is larger than [[vi]], the system ends with a larger kinetic-energy budget, so [[dK]] must be positive. The theorem then forces [[Wnet]] to be positive as well. If either quantity turned negative, the issue would not be decorative arithmetic but physical incoherence in sign convention or system choice.\r
\r
## Physical interpretation\r
\r
This example makes the identity of the leaf explicit. The pulling system produced positive net work on the sled, and that causal input appears as a larger final kinetic-energy budget. [[Wnet]] gives the causal reading. [[Ki]], [[Kf]], and [[dK]] give the state reading. Neither one is redundant; together they form the full physical story.\r
\r
It also clarifies why this is not a power problem. The question is not how fast in time the energy transfer occurred, but how much net mechanical energy was added to the motion between two states. The correct leaf is therefore the one that links work balance to state change, not the one that measures transfer rate.\r
\r
Finally, the problem shows an operational lesson. A speed increase that looks moderate may require a much larger energetic input than intuition suggests. In testing, transport, or safety design, that difference changes traction demand, braking demand, and structural stress. The answer is only fully useful when it is read as a mechanical narrative rather than as an isolated number.\r
\r
# Real-world example\r
\r
## Context\r
\r
Consider an urban braking situation. A lightweight motorcycle with total mass [[m]] equal to 180 kg approaches an intersection with an initial speed [[vi]] close to 16 m/s. Before entering the crossing zone, the rider reduces the motion to a final speed [[vf]] of about 8 m/s. The goal is to estimate how much kinetic-energy budget has already been removed in that first braking stage and to use the work-energy theorem to explain why a seemingly moderate speed reduction already implies a severe mechanical balance.\r
\r
## Physical estimation\r
\r
With mass [[m]] equal to 180 kg and initial speed [[vi]] of 16 m/s, the initial kinetic energy [[Ki]] is on the order of 23 kJ. When the motorcycle slows to final speed [[vf]] of 8 m/s, the final kinetic energy [[Kf]] drops to about 5.8 kJ. This means the change [[dK]] over that first stage is approximately minus 17 kJ. Accordingly, the net work [[Wnet]] over the same process is also about minus 17 kJ.\r
\r
That order-of-magnitude result is already physically strong. The motorcycle has not even reached full stop, yet the braking system and the tire-road contact have already removed a substantial amount of motion energy from the system. It is not enough to say that the speed has been halved. The decisive point is that the kinetic-energy budget fell by far more than half because speed does not control energy linearly.\r
\r
The estimate also supports a safety reading. If the rider had entered the same maneuver with only a somewhat larger initial speed, the energy that brakes and tires would need to absorb would rise disproportionately. This is a deep physical reason why small-looking speed differences can produce large differences in emergency severity.\r
\r
## Interpretation\r
\r
The real-world case reveals the conceptual power of the leaf. Negative [[Wnet]] is not a decorative sign. It means the surroundings have removed net kinetic energy from the system through braking and contact forces. [[dK]] tells the same story as a comparison between [[Ki]] and [[Kf]]. When both readings align, the theorem becomes more than algebra; it becomes a compact description of a real mechanical process.\r
\r
The example also teaches a modeling rule. If the task were to resolve the exact force profile in time or the detailed brake temperature at every instant, this leaf would not be sufficient on its own. But for interpreting the global motion change between two states, the work-energy theorem is exactly the cleanest tool. Knowing that boundary is part of real competence.\r
\r
In summary, reducing speed means removing motion-energy budget from the system, and that removal can already be large long before full stop. That is why the leaf has practical value: it transforms an intuitive statement about braking into a quantitative and causal reading that can be defended physically.`;export{e as default};
