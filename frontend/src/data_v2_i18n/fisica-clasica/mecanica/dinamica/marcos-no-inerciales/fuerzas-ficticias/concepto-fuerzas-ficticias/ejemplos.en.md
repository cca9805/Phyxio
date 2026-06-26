# Exam-type example

## Problem statement

A test platform translates with constant acceleration relative to the ground. Inside the platform, a block with known mass moves along a straight guide. The analysis team must describe the motion from the platform frame and from an inertial frame to verify consistency. The task is to determine the frame-induced fictitious force, the relative acceleration measured inside the platform, and the corresponding inertial acceleration. The final report must explain why the result does not imply a new material interaction.

## Data

- [[m]] = 12 kg
- [[a_marco]] = 1.8 m/s^2 along the positive analysis axis
- [[F_res]] = -6 N on the selected axis
- Translational non-inertial frame in the analysis window
- Sign convention: positive along platform motion

## System definition

Physical system: block approximated as a point mass in 1D inside an accelerated platform.

Leaf magnitudes used explicitly: [[m]], [[a_marco]], [[F_fict]], [[F_res]], [[a_rel]], [[a_in]].

Main objective: separate frame effect from real interactions.

## Physical model

Chosen model: translational non-inertial scalar projection with cross-check toward inertial reading.

Core relations from this leaf:

{{f:fuerza_ficticia_traslacional}}

{{f:segunda_ley_marco_no_inercial}}

{{f:relacion_aceleraciones}}

{{f:ecuacion_vectorial_conceptual}}

## Model justification

The platform shows approximately stable [[a_marco]] in the interval, so first-order scalar treatment is physically justified for this objective. The problem does not request high-fidelity multi-axis reconstruction. It requests causal interpretation, sign coherence, and frame-consistent acceleration mapping.

Using [[F_fict]] is physically explicit, not optional. The observer is in a non-inertial frame. Without that term, the in-frame equation would fail to represent observed trend. The model is also testable: it predicts [[a_rel]] and allows reconstruction of [[a_in]], which can be checked against independent inertial interpretation.

Rejection criteria are explicit. If repeated mismatch exceeds tolerance or if direction-sensitive control requires vector resolution, the model must escalate. Therefore, this is not formula recitation; it is a bounded physical model with declared scope.

## Symbolic solution

Step 1: compute [[F_fict]] from [[m]] and [[a_marco]].

{{f:fuerza_ficticia_traslacional}}

Step 2: compute [[a_rel]] from [[F_res]], [[F_fict]], and [[m]].

{{f:segunda_ley_marco_no_inercial}}

Step 3: recover [[a_in]] through acceleration relation.

{{f:relacion_aceleraciones}}

Step 4: close consistency using conceptual vector equation.

{{f:ecuacion_vectorial_conceptual}}

Expected causal chain: [[a_marco]] drives [[F_fict]], combined [[F_res]] plus [[F_fict]] sets [[a_rel]], and [[a_rel]] with [[a_marco]] gives [[a_in]].

## Numerical substitution

With [[m]] = 12 and [[a_marco]] = 1.8, fictitious contribution is about [[F_fict]] = -21.6 N under the selected sign convention.

Combining [[F_res]] = -6 N and [[F_fict]] = -21.6 N yields about -27.6 N effective in-frame force, so [[a_rel]] is approximately -2.3 m/s^2.

Using [[a_in]] = [[a_rel]] + [[a_marco]], inertial acceleration is about -0.5 m/s^2. This means inertial-frame acceleration remains mildly negative while in-frame reading appears stronger due to frame correction.

## Dimensional validation

- [[F_fict]] must be in N from [[m]] times [[a_marco]].
- [[a_rel]] must be in m/s^2 from force divided by [[m]].
- [[a_in]] and [[a_rel]] must share acceleration units.

Trend checks:
- Increasing [[a_marco]] increases magnitude of [[F_fict]].
- Changing [[m]] rescales [[F_fict]] linearly at fixed [[a_marco]].
- Changing [[F_res]] can reverse [[a_rel]] depending on sign balance.

## Physical interpretation

The output does not reveal a new environmental interaction. It reveals a frame-consistency correction required by non-inertial description. [[F_res]] still represents real interactions; [[F_fict]] encodes frame acceleration compensation.

Difference between [[a_rel]] and [[a_in]] confirms the leaf theory: frame change modifies representation, not underlying physics. This prevents two common mistakes: treating frame correction as a mysterious extra force and equating local in-frame observation with absolute dynamics.

Additional causal reading: when the frame accelerates, the in-frame observer needs a correction term to preserve equation-observation coherence. That correction does not compete with real interaction terms; it organizes the same event under the chosen observer state. The right interpretation is therefore not "a new force appeared" but "a frame condition requires an explicit compensation term".

Decision-level reading: if the task is local control, [[a_rel]] can be the primary operational signal; if the task is external audit, [[a_in]] is often more informative. The same computation supports both only when frame distinction is made explicit.

# Real-world example

## Context

In automated manufacturing, mobile modules move on accelerated carrier platforms to synchronize stations. Local sensors estimate acceleration and control software decides compensation actions. If [[F_res]] and [[F_fict]] are not separated correctly, the controller may classify frame bias as external disturbance and apply wrong correction.

## Physical estimation

Consider an interval with [[a_marco]] near 1.2 m/s^2 and module [[m]] around 25 kg. The resulting [[F_fict]] is of order 30 N. If projected real interaction [[F_res]] is around 10 N in opposite direction, [[a_rel]] will differ substantially from [[a_in]].

Teams exploit that difference for calibration policy. If repeated mismatch between estimated and measured trend exceeds 10 percent, they move from scalar first-order model to vector-aware higher-fidelity estimation.

A practical implementation detail is traceability: every estimate is stored with frame assumptions. This makes campaign-to-campaign comparison robust and avoids confusing regime change with assumption drift.

## Interpretation

This use case shows why the leaf is operationally strong. It defines what to estimate, in what order, and with what escalation criterion. [[a_marco]] explains frame-origin correction, [[F_fict]] quantifies dynamic impact, [[F_res]] keeps real-interaction reading explicit, and [[a_rel]] with [[a_in]] audits frame consistency.

The result is not only a number. It is a decision protocol that reduces false diagnostics, prevents overcompensation, and connects theory to action under measurable criteria.

It also reinforces continuity with theory and interpretation modules: the sequence [[a_marco]] to [[F_fict]] to [[a_rel]] to [[a_in]] links conceptual understanding, symbolic resolution, and operational decision in one coherent chain.
