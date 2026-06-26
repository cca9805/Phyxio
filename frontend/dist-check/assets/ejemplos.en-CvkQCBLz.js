const e=`# Exam-type example

## Problem statement

A rigid bar of mass [[m]] = 1.8 kg has center-of-mass moment of inertia [[I_cm]] = 0.060 kg*m^2. It is suspended from a pivot located [[d]] = 0.22 m from the center of mass. Take [[g]] = 9.81 m/s^2. Compute [[I_O]], the equivalent length [[leq]], the linear angular frequency [[omega0]], and the small-oscillation period [[T0]]. Then discuss whether the result would remain exact for an initial amplitude [[theta]] = 0.45 rad.

## Data

The data are [[m]], [[I_cm]], [[d]], and [[g]]. The unknowns are [[I_O]], [[leq]], [[omega0]], and [[T0]]. The quantity [[theta]] appears to decide whether the linear result should be treated as an approximation or as a sufficient description. The quantities [[theta_dot]], [[theta_dd]], and [[E]] also belong to the full model, although not all are needed for the main numerical calculation.

## System definition

The system is a rigid body with a fixed pivot. The center of mass does not coincide with the rotation axis, so weight produces a restoring torque. The bar is first analyzed in the small-oscillation regime and then the validity of that result is checked against a finite angular amplitude.

## Physical model

The physical model is the advanced physical pendulum and it is explicitly anchored to core leaf magnitudes: [[I_O]], [[I_cm]], [[m]], [[d]], [[g]], [[theta]], [[T0]], and [[omega0]]. First, center-of-mass inertia is shifted to the actual pivot to obtain [[I_O]]. Then the linear approximation provides the time scale through [[omega0]] and [[T0]]. Finally, angular amplitude [[theta]] decides whether the linear model is sufficient or whether the nonlinear equation and energy [[E]] must enter interpretation.

## Model justification

The model is valid because [[m]] is positive, [[d]] is nonzero, [[g]] is uniform, and the bar is treated as rigid. The pivot is assumed fixed, so the relevant inertia is [[I_O]], not [[I_cm]]. The linear part is valid only if the angle is small; this is why the amplitude of 0.45 rad is evaluated at the end as a validity condition and is not mixed silently with [[T0]].

## Symbolic solution

To shift inertia to the pivot, use:

{{f:steiner_pf_av}}

The equivalent length is obtained with:

{{f:longitud_equivalente_pf_av}}

The linear angular frequency is computed with:

{{f:omega0_pf_av}}

The small-oscillation linear period is:

{{f:periodo_lineal_pf_av}}

The complete model that justifies the amplitude limitation is:

{{f:ecuacion_no_lineal_pf}}

The energy reading for finite amplitudes is expressed by:

{{f:energia_pf_av}}

## Numerical substitution

First compute [[I_O]] = 0.060 + 1.8*(0.22)^2 = 0.060 + 0.0871 = approximately 0.147 kg*m^2. The equivalent length is [[leq]] = 0.147/(1.8*0.22) = 0.371 m. This length is not a distance drawn directly on the bar, but the length of the simple pendulum with the same linear period.

The linear angular frequency is [[omega0]] = sqrt(1.8*9.81*0.22/0.147) = sqrt(26.4) = 5.14 rad/s. The period is [[T0]] = 2*pi/5.14 = 1.22 s. Using the period formula directly gives the same value within rounding.

## Dimensional validation

In Steiner, [[m]][[d]]^2 has units kg*m^2, the same as [[I_cm]] and [[I_O]]. In [[leq]], dividing kg*m^2 by kg*m gives meters. In [[omega0]], the ratio between angular restoring strength and inertia gives s^-2, and its square root gives rad/s. Finally, [[T0]] is measured in seconds.

## Physical interpretation

The period of 1.22 s does not depend only on the distance to the center of mass. It depends on how mass is distributed relative to the pivot. If [[I_cm]] had been used instead of [[I_O]], the actual inertia would have been underestimated and the period would have been too small.

The amplitude [[theta]] = 0.45 rad is about 26 degrees. It is not a strictly small oscillation. Therefore [[T0]] is a useful linear reference, but the real period will be slightly larger and should be interpreted with the nonlinear equation or energy if experimental precision is required. That conclusion is part of the result, not a final detail.

# Real-world example

## Context

In a laboratory, an irregular mechanical part is suspended from several holes and its oscillation period is measured to estimate its moment of inertia. The part cannot be modeled as a point mass, and the center of mass has been located beforehand by balance.

## Physical estimation

For each hole, [[d]] and the small-amplitude period [[T0]] are measured. With [[m]] and [[g]] known, [[I_O]] is inferred from the period. It is then compared with [[I_cm]] + [[m]][[d]]^2 to check whether the part behaves as a rigid body and whether the center of mass has been correctly located. If measurements at different pivots are inconsistent, the error may lie in center-of-mass position, friction, or amplitude.

The estimation must include an order-of-magnitude check and an approximate scale for expected periods. A reasonable value for [[T0]] in this family is typically between 0.8 s and 1.8 s. If an estimate falls far outside that scale, units should be audited first, then pivot geometry, and then amplitude assumptions. This physically grounded sequence prevents accepting numerically neat but implausible results.

## Interpretation

The real application shows why the leaf is advanced. It does not only compute a period: it infers rotational properties from a time measurement. If amplitude is small and energy loss is low, the method is powerful. If amplitude is large, [[E]] and the nonlinear model indicate that the observed period no longer directly represents [[T0]]. The experimental decision is to control amplitude, axis, units, and body rigidity before trusting the computed inertia.
`;export{e as default};
