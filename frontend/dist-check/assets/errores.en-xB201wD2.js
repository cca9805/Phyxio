const e=`# Frequent mistakes: Introduction to Non-Inertial Frames\r
\r
## Conceptual errors\r
\r
### Error 1: Mixing cause and description layer\r
\r
Why it seems correct: many terms appear together, so students assume all of them are real physical causes of the same type.\r
\r
Why it is incorrect: [[F_real]] and [[F_ficticia]] do not have the same physical meaning. Real forces come from identifiable interactions, while fictitious terms come from frame choice.\r
\r
Detection signal: the report assigns [[F_ficticia]] to a direct material source without discussing frame acceleration.\r
\r
Mini-contrast example: in a carriage with nonzero [[a_marco]], an object appears to drift backward internally even with no extra horizontal contact force.\r
\r
Conceptual correction: separate real-interaction reasoning from frame-correction reasoning before interpreting causality.\r
\r
### Error 2: Applying equations without context validation\r
\r
Why it seems correct: using one familiar equation feels efficient and often works in simple exercises.\r
\r
Why it is incorrect: when [[omega]] or [[a_marco]] is relevant, inertial-only equations create systematic bias.\r
\r
Detection signal: persistent prediction residuals with no frame-class review.\r
\r
Mini-contrast example: [[a_rel]] is computed from [[F_real]] only on a rotating platform, and observed path curvature is missed.\r
\r
Conceptual correction: classify the frame first, then select active terms.\r
\r
### Error 3: Confusing similar magnitudes\r
\r
Why it seems correct: [[a_marco]] and [[a_rel]] share units, and [[F_centrifuga]] and [[F_real]] are both forces.\r
\r
Why it is incorrect: each quantity has a different role in diagnostics and model closure.\r
\r
Detection signal: [[a_marco]] is replaced by [[a_rel]] in fictitious-force estimation, or [[F_centrifuga]] is interpreted as contact force.\r
\r
Mini-contrast example: two bodies with equal [[m]] in the same accelerating frame receive the same translational inertial correction even with different real-force inventories.\r
\r
Conceptual correction: define a magnitude-role table before algebraic steps.\r
\r
## Model errors\r
\r
### Error 4: Not detecting simplified-model breakdown\r
\r
Why it seems correct: baseline models work often in low-complexity contexts, creating false confidence.\r
\r
Why it is incorrect: with high [[omega]] or high [[v_rel]], neglecting [[F_coriolis]] or [[F_centrifuga]] can change trajectory class.\r
\r
Detection signal: relative error stays above 10 percent across repeated windows but model is not escalated.\r
\r
Mini-contrast example: a guidance loop keeps inertial shortcuts during aggressive turning and accumulates unexplained lateral drift.\r
\r
Conceptual correction: enforce explicit quantitative transition criteria.\r
\r
### Error 5: Ignoring known validity limits\r
\r
Why it seems correct: a good fit in one setup is assumed to generalize automatically.\r
\r
Why it is incorrect: validity depends on scales of [[a_marco]], [[omega]], [[r]], and [[v_rel]].\r
\r
Detection signal: a calibration validated in low rotation is reused in high-rotation conditions without revalidation.\r
\r
Mini-contrast example: a linear-bench model is transferred directly to a rotating table and fails.\r
\r
Conceptual correction: recheck thresholds whenever scale or geometry changes.\r
\r
## Mathematical errors\r
\r
### Error 6: Careless algebraic manipulation\r
\r
Why it seems correct: symbolic rearrangement looks straightforward.\r
\r
Why it is incorrect: a sign or direction mistake can invert the physical interpretation.\r
\r
Detection signal: numerically plausible magnitude with physically impossible direction.\r
\r
Mini-contrast example: reversing fictitious-force direction yields relative acceleration opposite to measurements.\r
\r
Conceptual correction: lock axis orientation and sign conventions before each step.\r
\r
### Error 7: Unit and constant inconsistency\r
\r
Why it seems correct: spreadsheets hide units, so conversion errors remain invisible.\r
\r
Why it is incorrect: mixing rad/s, rpm, m/s, and km/h corrupts non-inertial terms by large factors.\r
\r
Detection signal: huge output swings under unchanged physical behavior.\r
\r
Mini-contrast example: entering [[omega]] in rpm but treating it as rad/s massively overestimates [[F_centrifuga]].\r
\r
Conceptual correction: convert everything to SI units before computation.\r
\r
## Interpretation errors\r
\r
### Error 8: Over-claiming precision\r
\r
Why it seems correct: many decimal digits look scientific.\r
\r
Why it is incorrect: true confidence is limited by measurement uncertainty and model adequacy.\r
\r
Detection signal: decisions are made from changes below noise floor.\r
\r
Mini-contrast example: declaring regime change from 0.01 m/s^2 variation with 0.05 m/s^2 uncertainty.\r
\r
Conceptual correction: match significant digits to metrological and model limits.\r
\r
### Error 9: Skipping physical interpretation\r
\r
Why it seems correct: obtaining a final number is mistaken for solving the physics problem.\r
\r
Why it is incorrect: without causal interpretation, you cannot distinguish object dynamics from frame effects.\r
\r
Detection signal: report ends with numeric tables but no statement about frame validity.\r
\r
Mini-contrast example: [[a_rel]] is reported without discussing whether [[system_classification]] remains consistent.\r
\r
Conceptual correction: always close with interpretation, threshold, and model decision.\r
\r
## Quick self-control rule\r
\r
1. Did you separate [[F_real]] from [[F_ficticia]] explicitly?\r
2. Did you keep [[a_marco]] distinct from [[a_rel]]?\r
3. Did you test whether [[omega]] and [[v_rel]] activate rotational terms?\r
4. Did you validate SI units and sign conventions?\r
5. Did you apply a quantitative threshold for model acceptance or escalation?\r
`;export{e as default};
