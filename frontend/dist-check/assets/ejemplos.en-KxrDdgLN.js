const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A crate rests on a horizontal platform and is pulled by a rope. During the stage being analyzed, no slipping is observed between the crate and the platform. The task is to determine whether the contact can still sustain static equilibrium, estimate the actual static friction force, and identify the condition that would start sliding.\r
\r
## Data\r
\r
- Measured normal force: [[N]] = 200 N.\r
- Static friction coefficient for the two surfaces: [[mus]] = 0.40.\r
- Tangential demand applied by the rope in the first trial: [[Ft]] = 50 N.\r
- Tangential demand in a more demanding second trial: [[Ft]] = 90 N.\r
\r
## System definition\r
\r
The system is the crate, with external forces projected along the contact plane. In the tangential direction, the applied demand [[Ft]] tends to move the crate, while the static friction force [[fs]] adjusts to prevent slipping. The normal force [[N]] sets the contact scale and, together with [[mus]], determines the maximum sustainable static value [[fsmax]].\r
\r
## Physical model\r
\r
We use the static friction model with an approximately constant effective coefficient over the operating range. The central idea is not to assign a fixed value to [[fs]] in advance, but to compare the tangential demand [[Ft]] with the adhesion ceiling [[fsmax]]. As long as [[Ft]] does not exceed that threshold, the contact remains in the static regime and [[fs]] takes exactly the value required to balance the demand.\r
\r
## Model justification\r
\r
The platform is designed for dry contact, small deformations, and moderate loads. Under those conditions, the static threshold model is sufficient to decide whether the system keeps adhesion. The problem requires distinguishing three levels clearly: the actual value of [[fs]], the maximum value [[fsmax]] that the contact could provide, and the transition condition to sliding when the demand becomes larger than the static capacity.\r
\r
## Symbolic solution\r
\r
Static adjustment condition:\r
\r
{{f:condicion_estatica}}\r
\r
Maximum static friction threshold:\r
\r
{{f:umbral_estatico}}\r
\r
Sliding onset criterion:\r
\r
{{f:criterio_deslizamiento}}\r
\r
Physical reading of the system: [[fs]] is not always equal to the maximum. It adjusts to [[Ft]] while adhesion is maintained. The value [[fsmax]] acts as a regime boundary, not as a force that must appear in every problem.\r
\r
## Numerical substitution\r
\r
1. Static threshold calculation:\r
\r
With [[mus]] = 0.40 and [[N]] = 200 N, the maximum value sustainable by the contact is [[fsmax]] = 80 N.\r
\r
2. First trial:\r
\r
The tangential demand is [[Ft]] = 50 N. Since 50 N is below the threshold of 80 N, the contact remains in the static regime and the actual friction force is [[fs]] = 50 N.\r
\r
3. Second trial:\r
\r
The tangential demand rises to [[Ft]] = 90 N. In that case, the demand exceeds the static threshold. The model indicates that the contact can no longer maintain relative rest and the onset-of-sliding condition is reached.\r
\r
4. Comparison between scenarios:\r
\r
The decisive change is not that the surface "creates more force" without limit, but that there is a clear quantitative boundary. Below 80 N the system stays attached; above 80 N the static regime is no longer valid.\r
\r
## Dimensional validation\r
\r
The threshold relation is dimensionally coherent: a dimensionless coefficient multiplied by a normal force in newtons produces a force in newtons. The adjustment and sliding conditions compare quantities with the same dimension, which makes the regime decision physically meaningful.\r
\r
There is also an important conceptual validation: the actual value [[fs]] in the first case is smaller than [[fsmax]], which is exactly what must happen when the system remains attached without being right at the sliding threshold.\r
\r
## Physical interpretation\r
\r
This result reveals the essential difference between static friction and a catalog force. The contact does not always deliver the maximum; it responds adaptively to the imposed demand. As long as the tangential requirement stays within the system capacity, [[fs]] matches [[Ft]] and preserves relative rest. The maximum [[fsmax]] appears only as the validity frontier of the static regime.\r
\r
From a design viewpoint, increasing [[mus]] or [[N]] raises the adhesion capacity and widens the range of loads that can be sustained without relative motion. From an experimental viewpoint, observing when [[Ft]] becomes larger than [[fsmax]] gives a clean signature of the transition from adhesion to sliding. That causal reading is the core of the leaf.\r
\r
The deeper lesson is that static friction should be interpreted as a compatibility response of the interface, not as a fixed obstacle placed in advance. In the first trial, the surface provides exactly what is required to keep the crate attached, no more and no less. In the second trial, the model does not predict a larger miraculous force; it predicts the loss of the static regime itself. That difference is what makes the result physically meaningful rather than merely numerical.\r
\r
# Real-world example\r
\r
## Context\r
\r
In an assembly line, loaded trays wait on a tilting table before entering an automated station. The process team must ensure that the trays do not slide during gentle angle changes or during small ambient vibrations. If the contact loses adhesion too early, downstream misalignment and jams appear.\r
\r
## Physical estimation\r
\r
The team first measures the effective normal force of a typical tray and estimates [[mus]] for the current surface coating. With those data it calculates [[fsmax]] and compares it with the maximum tangential demand expected during system start-up. In a reference test, [[N]] is of the order of 150 N and the static coefficient is about 0.45, giving a threshold close to 67.5 N. Vibrations and tilt together generate an estimated [[Ft]] of roughly 40 N, so the tray keeps adhesion with a comfortable margin.\r
\r
When the team tests a cheaper coating, the coefficient drops to about 0.25. With the same normal load, the threshold falls to about 37.5 N and is now below the expected tangential demand. That quantitative comparison shows that the system is no longer robust against ordinary operating disturbances.\r
\r
## Interpretation\r
\r
The technical decision is not made by looking only at material cost, but by comparing the demand [[Ft]] with the contact capacity [[fsmax]]. The original coating preserves a reasonable static margin; the alternative one sits too close to, or even below, the operational requirement. The physical reading is direct: it is not enough to know that friction exists, one must quantify whether the static regime can still sustain adhesion without crossing the sliding threshold.\r
\r
That conclusion is not merely numerical. It explains why two surfaces that both "have friction" may behave very differently in practice. What matters is whether the available static capacity remains comfortably above the real tangential demand during operation. Once that margin becomes too small, the system is no longer robust even if gross sliding has not yet appeared.\r
`;export{e as default};
