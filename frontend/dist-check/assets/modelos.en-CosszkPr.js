const e=`# Physical models for the definition of moment of inertia\r
\r
## Ideal model\r
\r
The ideal model treats the body as rigid and the rotation axis as perfectly defined. Under that assumption, the mass distribution does not change while the motion is studied, and the moment of inertia can be computed once before moving on to dynamics.\r
\r
## Hypotheses\r
\r
- The rotation axis is fixed and geometrically explicit.\r
- The mass distribution does not change during the interval of interest.\r
- Deformations are negligible compared with the characteristic dimensions of the body.\r
- The distance entering the definition is the perpendicular distance to the axis.\r
\r
## Quantitative validity domain\r
\r
The rigid-body, fixed-axis model remains valid as long as deformation does not appreciably change the radial distances to the axis. A practical engineering rule is to require\r
\r
{{f:energia_rotacional}}\r
\r
, meaning that the effective radial change stays below 1% of the dominant geometric scale. Once Delta r / R ge 0.01, the value of [[I]] should no longer be treated as a fixed constant without further justification.\r
\r
## Model failure signals\r
\r
- Measured angular response is not compatible with [[tau]]/[[I]] even when torque is known.\r
- Mass redistributes during motion.\r
- Vibrations or elastic deformation modify the effective radial geometry.\r
- The problem asks for several non-equivalent axes without keeping one fixed.\r
\r
## Extended or alternative model\r
\r
The first alternative model appears when the system is better represented as a set of point masses. Then the discrete description is the right one:\r
\r
{{f:definicion_discreta}}\r
\r
The second alternative appears when the body is genuinely continuous and must be described through a differential mass element:\r
\r
{{f:definicion_continua}}\r
\r
If the mass distribution changes in time or the axis is no longer fixed, the scalar definition may stop being sufficient and a time-dependent or tensorial treatment becomes necessary.\r
\r
## Operational comparison\r
\r
The discrete model is operational when a few localized masses dominate the problem and makes the role of each [[m_i]] easy to read. The continuous model is more general and captures the role of [[dm]] and density [[rho]] in the final inertia. The radius-of-gyration model is excellent for compact comparison, but it hides the detailed geometric origin of the value of [[I]].\r
\r
In practice, one should switch models when the current one stops making the physics visible. If a discrete sum hides the real geometry, move to the integral model. If the full integral adds no useful insight because the body is standard and tabulated, move back to the known closed form or to the radius of gyration. This comparison matters because the leaf is not only about calculating I, but about choosing the representation that preserves the real cause of the rotational response.`;export{e as default};
