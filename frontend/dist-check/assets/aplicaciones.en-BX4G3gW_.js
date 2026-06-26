const e=`## 1. Tape speed control in a cassette player\r
\r
A magnetic tape must pass the read/write head at a constant linear velocity of\r
\r
{{f:relacion_v_omega}}\r
\r
. The tape winds onto a receiving reel whose effective radius \`R\` grows from\r
\r
{{f:relacion_v_omega}}\r
\r
 (nearly empty reel) to\r
\r
{{f:relacion_v_omega}}\r
\r
 (nearly full reel). To maintain constant [[v_t]], the reel motor must reduce its angular velocity\r
\r
{{f:relacion_v_omega}}\r
\r
 as \`R\` grows: at\r
\r
{{f:relacion_v_omega}}\r
\r
,\r
\r
{{f:relacion_v_omega}}\r
\r
; at\r
\r
{{f:relacion_v_omega}}\r
\r
,\r
\r
{{f:relacion_v_omega}}\r
\r
.\r
\r
The control circuit uses the linear-angular speed relation in inverted form to estimate R in real time from the angular velocity measured by a tachometer; from R it updates the motor's omega reference. Any deviation in [[v_t]] distorts the recorded signal, producing pitch variation (wow and flutter).\r
\r
Dominant variable: [[v_t]] (the tangential velocity of the tape-head contact point is the magnitude specified by the standard and kept constant by the control circuit; omega is the manipulated variable used to achieve it).\r
\r
Validity limit: valid while the tape is inextensible and the reel is perfectly cylindrical; if the tape slips on the reel, the effective R differs from the geometric one and the omega correction introduces a systematic error in [[v_t]].\r
\r
## 2. Unbalance diagnosis in a turbine rotor\r
\r
A turbine rotor with radius\r
\r
{{f:relacion_v_omega}}\r
\r
 spins at\r
\r
{{f:relacion_v_omega}}\r
\r
. A radial accelerometer on the bearing detects a signal at the rotation frequency of amplitude\r
\r
{{f:relacion_v_omega}}\r
\r
. The nominal value of [[a_n]] is\r
\r
{{f:relacion_v_omega}}\r
\r
; the 50 m/s² signal represents a 0.4 % relative perturbation corresponding to a mass eccentricity that generates periodic vibration superimposed on the equilibrium state. ISO 1940 sets limits on vibration displacement\r
\r
{{f:relacion_v_omega}}\r
\r
, within grade G2.5 for precision machinery.\r
\r
The key point is that [[a_n]] at that speed is so large that even small mechanical unbalances produce appreciable absolute accelerations; the technician uses the normal-acceleration relation as a reference to interpret the accelerometer signal.\r
\r
Dominant variable: [[a_n]] (the normal acceleration is the dominant term in the vibration signal at cruising speed; the technician uses it as a reference to separate the equilibrium response from unbalance perturbations).\r
\r
Validity limit: valid for static unbalance on a rigid shaft; if the shaft flexes (bending modes), the measured signal includes components not captured by [[a_n]] = omega^2·R for the geometric point, and modal analysis is required.\r
\r
## 3. Stress check during industrial fan startup\r
\r
The blades of an industrial fan with radius\r
\r
{{f:relacion_at_alpha}}\r
\r
 must withstand the tangential acceleration [[a_t]] during startup. The motor reaches\r
\r
{{f:relacion_at_alpha}}\r
\r
 in\r
\r
{{f:relacion_at_alpha}}\r
\r
 from rest, with angular acceleration\r
\r
{{f:relacion_at_alpha}}\r
\r
. Using \`relacion_at_alpha\`:\r
\r
{{f:relacion_at_alpha}}\r
\r
This corresponds to 1.2 g at the blade tip, sufficient to generate significant stresses at the blade root in large-span aluminium blades. The manufacturer must verify that the root stress does not exceed the fatigue limit. During startup, [[a_n]] is small because omega is still low; it is [[a_t]] that mechanically loads the structure.\r
\r
Dominant variable: [[a_t]] (during startup, the tangential acceleration is the one that loads the blade root mechanically; [[a_n]] is negligible at the outset because omega is still low, but [[a_t]] already reaches its maximum value).\r
\r
Validity limit: valid while \`alpha\` is constant and the blade is rigid; if the blade flexes during startup, the actual tip acceleration exceeds the rigid-body calculation and finite-element analysis is required.\r
\r
## 4. Wheel lock detection in an ABS system\r
\r
The ABS sensor of a car measures the angular velocity \`omega\` of each wheel with a resolution of 0.1 rad/s. The nominal wheel radius is\r
\r
{{f:relacion_v_omega}}\r
\r
. The control unit computes [[v_t]] = omega × R for each wheel and compares them: if one wheel has [[v_t]] significantly lower than the others, the system detects lock-up and releases the brake. At\r
\r
{{f:relacion_v_omega}}\r
\r
,\r
\r
{{f:relacion_v_omega}}\r
\r
. The linear velocity resolution is\r
\r
{{f:relacion_v_omega}}\r
\r
, sufficient to detect incipient slip.\r
\r
Dominant variable: [[v_t]] - the tangential velocity of the wheel-road contact point is the magnitude the ABS compares between wheels to decide whether lock-up is occurring; omega is the measured datum and [[v_t]] is the decision magnitude.\r
\r
Validity limit: valid for an undeformed wheel rolling without slip; a puncture reduces R and the system overestimates the vehicle's actual speed. Under slipping conditions, the wheel's [[v_t]] and the vehicle's actual speed differ by definition and the model no longer describes the contact-point state.\r
\r
## 5. Effective g selection in a materials testing centrifuge\r
\r
A laboratory needs to subject samples to\r
\r
{{f:aceleracion_normal}}\r
\r
. In steady state (\`alpha\` = 0),\r
\r
{{f:aceleracion_normal}}\r
\r
 and [[a_total]] = [[a_n]] = omega^2·R (the total-acceleration relation reduces to the normal-acceleration relation). With a rotor of\r
\r
{{f:aceleracion_normal}}\r
\r
:\r
\r
{{f:aceleracion_normal}}\r
\r
With\r
\r
{{f:aceleracion_total_modulo}}\r
\r
,\r
\r
{{f:aceleracion_total_modulo}}\r
\r
 is required to reach the same [[a_total]]: halving the radius demands\r
\r
{{f:aceleracion_total_modulo}}\r
\r
times greater angular velocity. During spin-up, [[a_t]] is non-zero and [[a_total]] > [[a_n]]; for fragile samples, the transient acceleration can exceed the nominal value and cause premature fracture.\r
\r
Dominant variable: [[a_total]] (the parameter specified by the test protocol is the total effective acceleration experienced by the sample; in steady state it equals [[a_n]], but during transients [[a_t]] contributes and [[a_total]] exceeds the nominal value).\r
\r
Validity limit: valid for a rigid rotor at steady state; during spin-up or spin-down, [[a_t]] is non-zero and [[a_total]] > [[a_n]], so the sample experiences a transient acceleration above the nominal level, relevant if the sample is fragile or if the protocol requires precise control of the applied load.`;export{e as default};
