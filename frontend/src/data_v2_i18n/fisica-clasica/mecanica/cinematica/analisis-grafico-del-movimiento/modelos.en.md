# Models

## Ideal model

The graphical tool studied in this topic rests on a simplified kinematic model:

- The moving object is a **point particle** travelling along a single axis.
- The plotted kinematic variable (position, velocity, or acceleration) is a **continuous function of time** and can be approximated by **linear segments** (piecewise first-degree polynomials).
- Time is measured with an ideal clock of perfect resolution.
- No forces are involved: the analysis is purely kinematic (the graph is accepted as given data and information is extracted without asking what causes the motion).

Under these conditions the two fundamental graphical operations are exact:

| Operation | Meaning |
|-------------------------|------------------------------------------------|
| Slope of the tangent | Time derivative → velocity or acceleration |
| Area under the curve | Time integral → displacement or change in velocity |

## Hypotheses

- **One-dimensional motion**: the object moves along a single axis; transverse components and curved trajectories are ignored.
- **Temporal continuity**: the plotted quantity varies continuously; there are no instantaneous jumps in position or velocity.
- **Piecewise linearisation**: within each interval the quantity can be approximated by a straight line. If the actual curvature exceeds 10 % deviation, the segment must be subdivided.
- **Absence of forces**: the model does not inquire into the causes of motion; it reads the graph as given data.

Violating any of these hypotheses invalidates the slope and area operations as applied here.

## Quantitative validity domain

| Parameter | Valid range for the piecewise-linear model |
|---------------------------|--------------------------------------------------------|
| Segment duration | Δt ≥ 0.5 s (typical school-sensor resolution) |
| Number of segments | Between 2 and 10 per graph; more than 10 means a smooth curve → use splines |
| Acceleration | |a| < 50 m/s² (non-relativistic regime, no correction needed) |
| Velocity | v ≪ c; in practice, v < 300 m/s so that classical kinematics suffices |

Outside these ranges, linearisation generates significant errors and more sophisticated models should be employed (polynomial fitting, numerical integration, or relativistic kinematics).

## Model failure signals

1. **Infinite slope**: if the \(v\)-\(t\) graph shows a vertical jump, the model predicts infinite acceleration, which is physically impossible. This signals a discontinuity in the data (ultrafast phase change or sensor error).
2. **Unexpected negative area**: if the \(v\)-\(t\) graph crosses the time axis, the area below the axis is negative, meaning displacement in the opposite direction. If the problem does not contemplate reversal, a negative area reveals a misinterpretation of the reference frame.
3. **Average velocity outside the range**: the average velocity must lie between the minimum and maximum values of \(v\) within the interval. If the result falls outside that range, there is an arithmetic error or a wrongly delimited segment.
4. **Pronounced curvature where a straight line is assumed**: when the difference between the measured value and the interpolating line exceeds 10 % at any point, the piecewise-linear model is no longer faithful and that segment should be subdivided.

## Extended or alternative model

When real data do not form perfect straight segments, the model is extended in two ways:

1. **Curved-segment fitting**: the linear segments are replaced by degree-2 or degree-3 polynomials (splines), which can approximate smooth curves and yield derivatives closer to the true values.
2. **Inclusion of experimental uncertainty**: each point on the graph carries a vertical error bar (uncertainty in the measured quantity) and a horizontal one (sensor time resolution). Slopes and areas are then computed with error propagation.

When to switch to the extended model: if the deviation between the data and the interpolating line exceeds 10 % in more than one segment, or if the number of segments exceeds 10, simple linearisation is no longer reliable and spline fitting or numerical integration should be used instead.

## Operational comparison

| Model | Advantage | Cost |
|-----------------------------|-------------------------------------------|---------------------------------------|
| Piecewise linear (this one) | Visual, fast, no advanced calculus needed | Loses accuracy on smooth curves |
| Global polynomial fit | Good continuous approximation | May oscillate outside the data (Runge phenomenon) |
| Numerical integration | Handles any graph shape | Requires digitised data and software |
| Exact analytical expression | Elegant symbolic result | Only possible if \(v(t)\) or \(x(t)\) is known in closed form |

For introductory teaching, the piecewise-linear model is the most appropriate: it trains graphical reading (slopes and areas) without requiring higher-calculus tools, and its limitations are easily detected by the student when comparing results with the visual shape of the graph.
