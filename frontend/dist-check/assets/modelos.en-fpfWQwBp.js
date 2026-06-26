const e=`# Physical model\r
\r
## Ideal model\r
\r
The ideal model is a **plane, harmonic, transverse electromagnetic wave** propagating in vacuum. Its fields are described with rms values [[E0]] and [[B0]], and transport is summarized by the average intensity [[S_med]]. The model does not attempt to describe the full source; it studies a front that is far enough away and uniform enough.\r
\r
The energetic interpretation is organized through [[u_EM]], which measures average energy per volume, and through [[S_med]], which measures power per area. The mechanical interpretation appears through [[g_EM]] and [[p_rad]], always as magnitudes associated with the propagation direction.\r
\r
## Hypotheses\r
\r
The first hypothesis is that the wave can be treated as plane over the observed region. That requires the effective area [[A]] to be small compared with the beam variation scale. The second hypothesis is that the medium introduces no relevant absorption, dispersion, or internal reflection before the wave reaches the surface.\r
\r
Normal incidence is also assumed when [[p_rad]] is used directly. If the surface is tilted, the projected area replaces [[A]]. If specular reflection is important, the mechanical push changes because electromagnetic momentum leaves in a different direction.\r
\r
## Quantitative validity domain\r
\r
As a practical criterion, the local model is reasonable if intensity varies by less than 10 % across the illuminated area. For ordinary applications, a safe condition is [[S_med]] < 1e6 W/m2 and an absorbing surface without destructive heating. In precision optics or intense-laser work, the limit can be much lower if the material deforms or changes absorption.\r
\r
For a classical pressure reading, [[p_rad]] should remain small compared with the dominant mechanical pressure in the setup. If [[p_rad]] > 1 Pa, check whether the regime is still a classical plane wave, whether extreme focusing is present, or whether the material is no longer linear.\r
\r
## Model failure signals\r
\r
The model begins to fail if the beam is tightly focused, if intensity varies strongly across [[A]], if nonlinear material effects appear, or if the surface reflects more energy than it absorbs. It also fails when [[P_rad]] is used as if it were a local wave property, because total power depends on intercepted area.\r
\r
Another failure signal is obtaining a pressure comparable with ordinary mechanical loads from common illumination. In that case the scale [[c]] has often been omitted, or an intensity has been used that was actually total power.\r
\r
## Extended or alternative model\r
\r
The first extended model introduces reflectivity. A reflecting surface does not merely absorb momentum; it changes the direction of outgoing momentum, so the push can be larger than in ideal absorption. That model needs an additional optical coefficient and is no longer described only by [[S_med]] and [[c]].

It is convenient to switch model when the question is no longer answered by normal absorption, uniform effective area, and a plane wave. The explicit transition occurs if reflection is dominant, if incidence is oblique, if intensity varies by more than 10 % across [[A]], or if the material medium shares energy and momentum with matter.

Another extended model allows material media. In a dispersive medium, the relevant speed is not always [[c]], and energy may be shared between field and matter. Then [[u_EM]], [[S_med]], and [[g_EM]] require more careful definitions.
\r
## Operational comparison\r
\r
The ideal model is fast, calculable, and suitable for understanding the relation between energy, intensity, and pressure. It is the right choice when the front is uniform and the surface absorbs simply. Its pedagogical advantage is that it separates three questions: how much energy is in the field, how much crosses a surface, and how much push it produces.\r
\r
The extended model is necessary when the material, incidence direction, or reflection matters. It is more realistic, but it also introduces parameters that can hide the physical core. Therefore it is best to start with the ideal model and extend it only when a failure signal demands it.\r
\r
`;export{e as default};
