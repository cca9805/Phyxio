const e=`# Common errors: reference frames [[frame_sigma]] \r
\r
## Conceptual errors\r
\r
### Error 1: Believing in an "absolute" position\r
**Why it is incorrect**: The most common mistake is forgetting that position [[r_vec]] does not exist on its own; it is always attached to a well-declared reference frame [[frame_sigma]] . If the origin [[O]] is not fixed, the coordinate has no physical meaning.\r
**Correction**: Always declare the observer and the origin before noting any position data.\r
\r
## Model errors\r
\r
### Error 2: Mixing coordinates from different frames\r
**Why it is incorrect**: This happens when adding a position measured from the platform [[O]] with another measured from the carriage [[O']] without using the Galilean transformation. The result is a number without physical meaning.\r
**Correction**: Use the position transformation transformaci?n galileana de posici?n to translate magnitudes between frames.\r
\r
### Error 3: Ignoring frame acceleration\r
**Why it is incorrect**: The Galilean model assumes a constant [[v_frame]] . If the train brakes or accelerates, the simple transformation is no longer valid, and fictitious forces appear.\r
**Correction**: Verify that the moving frame is inertial or approximately inertial before applying the leaf's formulas.\r
\r
## Mathematical errors\r
\r
### Error 4: Sign error in frame velocity\r
**Why it is incorrect**: Confusing the direction of [[v_frame]] relative to the chosen axis. If the train moves away but its velocity is added as negative (or vice versa), the final position [[r_vec]] will be shifted in the opposite direction from reality.\r
**Correction**: Draw the frames and the vector [[v_frame]] on the same coordinate axis before operating.\r
\r
## Interpretation errors\r
\r
### Error 5: Confusing own velocity with frame velocity\r
**Why it is incorrect**: Attributing to the body a velocity that actually belongs to the observer. For example, thinking a person is walking fast when it is actually the train moving fast relative to the ground.\r
**Correction**: Always identify which part of the observed velocity [[v]] comes from the body [[v_prime]] and which part comes from the [[v_frame]] .\r
\r
---\r
\r
## Quick self-control rule\r
1. Have I named the reference frame [[frame_sigma]] ?\r
2. Have I fixed the origin [[O]] and the positive sign?\r
3. Is the velocity [[v_frame]] constant?\r
4. Have I distinguished between the body's state and the frame's state?\r
`;export{e as default};
