const e=`# Models\r
\r
## Ideal model\r
\r
The graphical tool studied in this topic rests on a simplified kinematic model:\r
\r
- The moving object is a **point particle** travelling along a single axis.\r
- The plotted kinematic variable (position, velocity, or acceleration) is a **continuous function of time** and can be approximated by **linear segments** (piecewise first-degree polynomials).\r
- Time is measured with an ideal clock of perfect resolution.\r
- No forces are involved: the analysis is purely kinematic (the graph is accepted as given data and information is extracted without asking what causes the motion).\r
\r
Under these conditions the two fundamental graphical operations are exact:\r
\r
| Operation | Meaning |\r
|-------------------------|------------------------------------------------|\r
| Slope of the tangent | Time derivative → velocity or acceleration |\r
| Area under the curve | Time integral → displacement or change in velocity |\r
\r
## Hypotheses\r
\r
- **One-dimensional motion**: the object moves along a single axis; transverse components and curved trajectories are ignored.\r
- **Temporal continuity**: the plotted quantity varies continuously; there are no instantaneous jumps in position or velocity.\r
- **Piecewise linearisation**: within each interval the quantity can be approximated by a straight line. If the actual curvature exceeds 10 % deviation, the segment must be subdivided.\r
- **Absence of forces**: the model does not inquire into the causes of motion; it reads the graph as given data.\r
\r
Violating any of these hypotheses invalidates the slope and area operations as applied here.\r
\r
## Quantitative validity domain\r
\r
| Parameter | Valid range for the piecewise-linear model |\r
|---------------------------|--------------------------------------------------------|\r
| Segment duration | Δt ≥ 0.5 s (typical school-sensor resolution) |\r
| Number of segments | Between 2 and 10 per graph; more than 10 means a smooth curve → use splines |\r
| Acceleration | |a| < 50 m/s² (non-relativistic regime, no correction needed) |\r
| Velocity | v ≪ c; in practice, v < 300 m/s so that classical kinematics suffices |\r
\r
Outside these ranges, linearisation generates significant errors and more sophisticated models should be employed (polynomial fitting, numerical integration, or relativistic kinematics).\r
\r
## Model failure signals\r
\r
1. **Infinite slope**: if the \\(v\\)-\\(t\\) graph shows a vertical jump, the model predicts infinite acceleration, which is physically impossible. This signals a discontinuity in the data (ultrafast phase change or sensor error).\r
2. **Unexpected negative area**: if the \\(v\\)-\\(t\\) graph crosses the time axis, the area below the axis is negative, meaning displacement in the opposite direction. If the problem does not contemplate reversal, a negative area reveals a misinterpretation of the reference frame.\r
3. **Average velocity outside the range**: the average velocity must lie between the minimum and maximum values of \\(v\\) within the interval. If the result falls outside that range, there is an arithmetic error or a wrongly delimited segment.\r
4. **Pronounced curvature where a straight line is assumed**: when the difference between the measured value and the interpolating line exceeds 10 % at any point, the piecewise-linear model is no longer faithful and that segment should be subdivided.\r
\r
## Extended or alternative model\r
\r
When real data do not form perfect straight segments, the model is extended in two ways:\r
\r
1. **Curved-segment fitting**: the linear segments are replaced by degree-2 or degree-3 polynomials (splines), which can approximate smooth curves and yield derivatives closer to the true values.\r
2. **Inclusion of experimental uncertainty**: each point on the graph carries a vertical error bar (uncertainty in the measured quantity) and a horizontal one (sensor time resolution). Slopes and areas are then computed with error propagation.\r
\r
When to switch to the extended model: if the deviation between the data and the interpolating line exceeds 10 % in more than one segment, or if the number of segments exceeds 10, simple linearisation is no longer reliable and spline fitting or numerical integration should be used instead.\r
\r
## Operational comparison\r
\r
| Model | Advantage | Cost |\r
|-----------------------------|-------------------------------------------|---------------------------------------|\r
| Piecewise linear (this one) | Visual, fast, no advanced calculus needed | Loses accuracy on smooth curves |\r
| Global polynomial fit | Good continuous approximation | May oscillate outside the data (Runge phenomenon) |\r
| Numerical integration | Handles any graph shape | Requires digitised data and software |\r
| Exact analytical expression | Elegant symbolic result | Only possible if \\(v(t)\\) or \\(x(t)\\) is known in closed form |\r
\r
For introductory teaching, the piecewise-linear model is the most appropriate: it trains graphical reading (slopes and areas) without requiring higher-calculus tools, and its limitations are easily detected by the student when comparing results with the visual shape of the graph.\r
`;export{e as default};
