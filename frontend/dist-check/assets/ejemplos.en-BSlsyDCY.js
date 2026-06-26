const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A passenger car moves along a flat circular curve with radius [[r]]. The safety team must determine whether tire-road grip can provide the required inward force without sustained skid at speed [[v]]. The known quantities are vehicle mass [[m]], curve radius [[r]], operating speed [[v]], gravitational acceleration [[g]], and a representative static-friction coefficient [[mu]].\r
\r
The task is not only computational. The student must explain how the radial resultant [[Frad]] is generated in a flat curve and how that mechanism changes if the same curve is redesigned as a banked curve. In other words, the analysis compares two engineering strategies for satisfying the same curvature demand.\r
\r
## Data\r
\r
- [[m]] = 1400 kg\r
- [[r]] = 85 m\r
- [[v]] = 18 m/s\r
- [[g]] = 9.8 m/s^2\r
- [[mu]] = 0.35\r
\r
An additional design variant is included: for the same target speed [[v]], estimate the ideal banking angle [[th]] and discuss how the role of static friction [[fs]] changes under nominal operation.\r
\r
## System definition\r
\r
The vehicle is modeled as a particle following a circular path with constant [[r]]. In the flat-curve case, the radial resultant [[Frad]] is mainly supplied by lateral static friction [[fs]]. In the banked-curve case, geometry lets the normal force [[Nn]] contribute a radial component, reducing exclusive dependence on [[fs]]. In both cases, centripetal acceleration [[ac]] represents the kinematic curvature demand.\r
\r
The radial axis is defined positive toward the center of curvature, while the vertical axis handles weight-normal balance. This convention prevents a common conceptual error: treating centripetal force as an extra interaction instead of the resultant of real forces projected along the radial direction.\r
\r
## Physical model\r
\r
The four core leaf relations used in this solution are:\r
\r
{{f:radial_base}}\r
\r
{{f:adherencia_maxima}}\r
\r
{{f:curva_plana_vmax}}\r
\r
{{f:peralte_ideal}}\r
\r
These equations form a coherent chain. The first defines total radial demand. The second defines contact-force capacity through friction. The third gives the compact flat-curve speed limit. The fourth sets the banking angle that can satisfy the same speed-radius pair with reduced friction dependence.\r
\r
## Model justification\r
\r
This model is suitable because the scenario involves quasi-constant radius, non-relativistic speed, and a grip regime where static friction is still a valid approximation. There is no dominant severe bumping, no strong transient braking in the analyzed segment, and no evidence of sustained sliding.\r
\r
Separating flat and banked cases is physically meaningful, not pedagogical decoration. In real infrastructure, these are alternative design choices. Flat curves rely mostly on [[mu]] and surface condition; banked curves introduce geometric assistance through [[th]] and [[Nn]], improving robustness at the design speed.\r
\r
## Symbolic solution\r
\r
For the flat curve, compute radial demand first and derive [[Frad]] and [[ac]]. Then compare that demand with available friction capacity using the static-friction limit and the compact maximum-speed expression.\r
\r
For the banked variant, keep [[v]] and [[r]] fixed and solve for [[th]] that satisfies the ideal non-slip design condition. This step shows that banking does not remove radial dynamics. It changes the force decomposition used to meet the same curvature requirement.\r
\r
The symbolic workflow is therefore: radial demand, flat-grip feasibility, and banking design for the same operating target.\r
\r
## Numerical substitution\r
\r
With the given values, radial demand is in the multi-kilonewton range, and [[ac]] is about 3.8 m/s^2. That level is realistic for a fast urban/interchange maneuver but not an extreme race-track condition. Under [[mu]] = 0.35, the flat-curve margin exists but is limited, so moderate grip degradation in rain can push the case close to the skid threshold.\r
\r
The flat-curve maximum-speed estimate is close to operating speed, confirming sensitivity to surface condition. In the banked redesign, the resulting [[th]] lies in a plausible roadway range and shifts a relevant fraction of [[Frad]] support from friction [[fs]] to the radial component of [[Nn]].\r
\r
From an engineering perspective, the output is actionable: in flat curves, maintenance of [[mu]] is critical; with banking, geometric design provides an additional safety buffer at the target speed.\r
\r
## Dimensional validation\r
\r
The radial equation yields force units when evaluating [[m]] times [[v]] squared over [[r]]. The flat-curve speed formula returns velocity units because [[mu]] is dimensionless and [[g]][[r]] has squared-speed units. The banking relation is dimensionless through tangent, consistent with [[th]] as an angle.\r
\r
This check catches frequent mistakes: using diameter instead of radius, treating degrees as a direct trigonometric ratio, or assigning units to [[mu]]. If units do not close, safety interpretation is unreliable regardless of algebraic appearance.\r
\r
## Physical interpretation\r
\r
The same curvature demand can be met by different force architectures. On flat curves, the dominant mechanism is lateral adherence. On banked curves, roadway geometry allows [[Nn]] to carry part of the radial task, decreasing exclusive reliance on [[fs]].\r
\r
The speed sensitivity is also explicit: radial demand scales strongly with [[v]], so moderate speed increases can sharply reduce operational margin. This is why small speed differences may create large risk differences in cornering.\r
\r
The key conceptual result is practical: equations support design decisions. Teams can choose to manage [[mu]] operationally, redesign [[th]] and [[r]] geometrically, or combine both strategies for robust safety.\r
\r
# Real-world example\r
\r
## Context\r
\r
A highway operator reports repeated incidents in a connector ramp linking a mainline lane to a downhill exit. The technical team has measured speed distribution [[v]], effective radius [[r]], and seasonal grip variation reflected in [[mu]]. Management is debating two interventions: stricter speed enforcement or reconstruction with additional banking.\r
\r
Using the leaf variables, engineers compare radial demand [[Frad]], acceleration [[ac]], and robustness against grip deterioration. This framework replaces anecdotal arguments with quantitative criteria for infrastructure decisions.\r
\r
## Physical estimation\r
\r
The first step is to compute radial demand across the observed [[v]] range. Then maximum safe flat-curve speed is estimated for dry and wet [[mu]] values. The comparison reveals that in wet conditions the current flat geometry operates near the friction limit, so a small drop in [[mu]] can require [[fs]] above feasible contact capacity.\r
\r
Next, the team evaluates an ideal banking angle [[th]] for a realistic design speed. The estimate indicates that moderate banking can transfer part of radial support to the normal-force geometry, improving wet-condition margin without forcing extreme speed reduction.\r
\r
The estimate also includes a policy warning: banking is not a universal cure. If real [[v]] exceeds design assumptions, dependence on [[fs]] rises again. Speed management and geometry must therefore be treated as coupled controls.\r
\r
## Interpretation\r
\r
This applied case shows why the leaf matters for infrastructure practice. In causal terms, corner safety depends on how [[Frad]] is supplied under uncertain [[mu]]. If support is almost entirely friction-based, the system is fragile under rain and contamination. If design includes adequate [[th]] and [[r]], the same traffic operation becomes more resilient.\r
\r
The engineering conclusion is not one-dimensional. A robust strategy combines [[v]] governance, surface maintenance, and coherent banking design. Once [[ac]], [[Frad]], [[fs]], and [[Nn]] are quantified together, decisions become physically auditable rather than intuition-driven.\r
`;export{e as default};
