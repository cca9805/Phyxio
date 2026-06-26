const e=`# Inertia tensor [[tensor_inercia]]\r
\r
## Conceptual context\r
\r
The inertia tensor appears when a scalar moment of inertia is no longer sufficient to describe the rotation of a rigid body in three dimensions. If the motion is exactly about a principal axis, one number may be enough. But as soon as the body is asymmetric or the chosen axes are not aligned with its natural directions, a matrix description becomes necessary. This is not mathematical ornament. It is the correct answer to a different physical question: not only how hard rotation is, but also how mass geometry can redirect the angular response.\r
\r
The central idea of the leaf is that [[tensor_inercia]] maps [[omega]] into [[momento_angular]]. In an arbitrary frame, that map may mix components. That is why [[producto_inercia]] exists: it is not algebraic noise but the signature of asymmetry relative to the chosen axes. Once a student understands this, the tensor stops looking like "a matrix that must be diagonalized" and starts looking like a physical map between spin direction and angular response.\r
\r
The role of axes also changes here. In the leaf on the definition of moment of inertia, one learns that the object-axis pair matters. This leaf goes one step further: the whole axis set may be chosen well or badly. Some frames reveal coupling, others make the tensor diagonal. The body is the same, but the clarity of the reading changes. This is why principal axes are so important.\r
\r
## 🟢 Essential level\r
\r
The essential intuition of the inertia tensor can be stated without matrices. Imagine an asymmetric body, for example a plate with extra mass on one side. If you try to spin it with an [[omega]] directed along a non-principal direction, the resulting [[momento_angular]] does not have to point the same way. That lack of parallelism is the first physical sign that a scalar moment of inertia is no longer enough.\r
\r
At this level, three ideas are enough. First, [[momento_angular]] and [[omega]] need not be parallel. Second, the mismatch comes from mass geometry, not from algebraic accident. Third, there is always a special basis, the principal-axis basis, in which the tensor becomes diagonal and the reading simplifies. Those three ideas organize the entire leaf.\r
\r
One intuitive way to phrase it is to say that the tensor describes preferred spin directions. Some directions are natural for the body because the response does not mix across axes. Other directions are oblique, and then one component of [[omega]] feeds several components of [[momento_angular]]. [[producto_inercia]] is exactly the indicator of that mixing.\r
\r
The didactic consequence is important. When the tensor has not yet been diagonalized, a result should not be read only by its magnitude. Direction matters. An angular momentum [[momento_angular]] that is numerically correct in size but wrong in orientation is still a poor physical reading. That criterion separates mechanical manipulation from genuine understanding.\r
\r
## 🔵 Formal level\r
\r
Formally, the inertia tensor is a symmetric relation represented by a matrix:\r
\r
{{f:rel_l_omega}}\r
\r
The diagonal entries are moments of inertia relative to the chosen axes. The off-diagonal entries are [[producto_inercia]]. Their sign depends on convention, but their presence or absence has physical content: they reveal whether the frame is aligned with the principal directions of the mass distribution.\r
\r
The structural relation of the leaf is the matrix form between [[momento_angular]], [[tensor_inercia]], and [[omega]]:\r
\r
{{f:rel_l_omega}}\r
\r
This equation captures the essence of the topic. In principal axes the matrix becomes diagonal and the relation decouples:\r
\r
{{f:rel_l_omega}}\r
\r
In that case, the relation recovers a scalar reading component by component. Outside principal axes, each component of [[momento_angular]] may depend on several components of [[omega]]. That is why the scalar form\r
\r
{{f:rel_l_omega}}\r
\r
cannot be used blindly if the problem has not yet been reduced to a principal direction.\r
\r
The rotational [[E]] energy changes its reading as well. In the principal basis it can be written as\r
\r
{{f:energia_cinetica_tensores}}\r
\r
for pure rotation about one principal axis. If the motion has several components, the full energetic form must include the complete quadratic contribution of the tensor.\r
\r
This point matters: the scalar [[E]] does not erase the geometric content of the tensor; it compresses it. The excited principal direction and the eigenvalues of the tensor decide how much energy is stored for the same angular-speed scale.\r
\r
## 🔴 Structural level\r
\r
The structural reading asks why the matrix can be simplified and when it stops being safe to do so. The simplification relies on two facts. First, the tensor is symmetric, so it admits orthogonal eigenvectors. Second, those eigenvectors define the principal axes. Diagonalization is not a trick of calculation. It is the step that reveals the body’s intrinsic inertial structure.\r
\r
When the chosen axes are not principal, [[producto_inercia]] appears and the interpretation becomes richer. That richness should not be seen as unwanted complication. It is exactly the information needed to describe an asymmetric body. If one forced a scalar model, one would lose the very phenomenon that makes the leaf necessary: the body may respond angularly in a direction different from the apparently imposed one.\r
\r
The structure also depends on the origin. Moving the origin in an uncontrolled way modifies the matrix. This is why the tensor is usually interpreted relative to the center of mass and a declared frame. If origins or frames are mixed, the matrix may become meaningless even when the numbers look plausible. A poor coordinatization can easily disguise itself as "correct algebra".\r
\r
## Deep physical interpretation\r
\r
The deep physical reading of the inertia tensor is not merely that it is "a matrix of mass distribution". That statement is true but too weak. Physically, the tensor says that the body does not respond equally to every spin direction. Some directions are privileged because they align with intrinsic modes of the mass distribution. Others generate cross-axis mixing. In that sense, the tensor is a tool for reading dynamical anisotropy.\r
\r
[[producto_inercia]] is the cleanest doorway into this idea. If it vanishes by symmetry or by choosing principal axes, the response decouples. If it does not vanish, one part of the spin contaminates another part of [[momento_angular]]. That is where the misalignment between [[momento_angular]] and [[omega]] comes from, and it is also one of the conceptual bridges toward wobble, precession, and rotational stability.\r
\r
Energy [[E]] reinforces the same lesson from a different angle. Not all spin directions cost the same. Rotating about the principal axis associated with the largest eigenvalue requires more energy for the same angular-speed scale than rotating about the axis associated with the smallest eigenvalue. The tensor therefore organizes not only directions but energetic scales.\r
\r
## Order of magnitude\r
\r
This leaf benefits from estimation before computation. If a body has principal moments of order 10 kg m^2 and [[producto_inercia]] of order 10^-3 kg m^2, angular coupling will probably be negligible at first pass. But if the products are of order 1 kg m^2, misalignment may be physically relevant. A practical rule is to inspect ratios between off-diagonal and diagonal terms, because those ratios set the scale of component mixing. If they are below 10^-2, a nearly diagonal model is often enough. If they rise to 10^-1, coupling should not be ignored.\r
\r
Another useful comparison involves eigenvalues. If $I_1$, $I_2$, and $I_3$ are very different, principal directions are strongly distinct and inertial anisotropy is pronounced. If they are nearly equal, the body approaches a more isotropic behavior and axis choice becomes less dramatic physically.\r
\r
## Personalized resolution method\r
\r
A robust workflow for the inertia tensor can be written as follows:\r
\r
1. Declare origin, axes, and whether the frame is arbitrary or principal.\r
2. Write the matrix with controlled signs and explicit symmetry.\r
3. Apply the matrix relation to obtain [[momento_angular]] from [[tensor_inercia]] and [[omega]].\r
4. Compare the directions of [[momento_angular]] and [[omega]] before reducing anything.\r
5. If a cleaner interpretation is needed, diagonalize and move to principal axes.\r
6. Only after that use energetic or scalar expressions on a principal axis.\r
\r
This method prevents a very common mistake: diagonalizing too early and hiding the very phenomenon under study. If the problem is about coupling or misalignment, the arbitrary frame is part of the physics, not just a temporary inconvenience.\r
\r
## Special cases and extended example\r
\r
The most important special case is symmetry. In a body with enough symmetry, [[producto_inercia]] can vanish directly in a frame adapted to that symmetry. Then the tensor becomes diagonal almost immediately and the leaf starts to resemble the scalar moment of inertia, but without collapsing into it: now we understand why that reduction works.\r
\r
Another special case is approximate isotropy, when the eigenvalues are almost equal. In that limit, changing the spin direction alters the energetic reading only slightly. By contrast, when eigenvalues are very different, axis choice becomes dynamically decisive.\r
\r
As an extended example, imagine a plate with an extra mass in one quadrant. In a Cartesian frame attached to its edges, [[producto_inercia]] is nonzero. If you compute [[momento_angular]] for an oblique [[omega]], the two vectors fail to align. If you then rotate to the principal frame, the same body reveals natural directions and the reading of [[E]] becomes cleaner. The phenomenon has not changed; the model has become more transparent.\r
\r
## Real student questions\r
\r
**Why is the tensor symmetric?**  \r
Because its components are built from quadratic coordinate combinations and, physically, the rotational response does not care about exchanging the order of those axis labels.\r
\r
**Is a product of inertia [[producto_inercia]] always bad?**  \r
No. It is neither bad nor good. It is information. It may be inconvenient in control problems because it creates coupling, but it is exactly what describes real asymmetry.\r
\r
**When may I go back to a scalar formula?**  \r
When the system has already been expressed in principal axes or when the problem has been reduced in a justified way to one principal direction. Before that, a scalar formula usually hides relevant physics.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects naturally with several nearby topics:\r
\r
- With \`definicion-momento-de-inercia\`, because it extends the scalar idea into a matrix structure.\r
- With \`momentos-tipicos\`, because it explains why tabulated formulas work only on well-chosen axes.\r
- With the \`teorema-de-ejes-paralelos\`, because changing origin alters the tensor and not only one number.\r
- With stability and gyroscopes, because diagonalization and principal axes anticipate more or less stable spin modes.\r
\r
Following these links helps prevent the tensor from being studied as an isolated block of linear algebra. In reality, it is one of the core pieces of three-dimensional rotational dynamics.\r
\r
## Final synthesis\r
\r
To master the inertia tensor is to understand that mass distribution fixes not only a rotational cost but a full geometry of response. [[tensor_inercia]] maps [[omega]] into [[momento_angular]], [[producto_inercia]] describes coupling between axes, and principal axes reveal the body's natural directions. From there, the angular relation and the energetic expression stop being isolated formulas and become well-ordered consequences of the same physical framework.`;export{e as default};
