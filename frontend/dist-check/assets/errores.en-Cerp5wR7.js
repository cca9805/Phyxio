const e=`\uFEFF# Frequent errors in classic rolling examples\r
\r
## Conceptual errors\r
The most common conceptual error is assuming that any wheel that rotates and advances is in pure rolling. A system may rotate and move forward while still slipping. The rolling condition is a quantitative relation that must be checked with data.\r
\r
Another conceptual mistake is treating the ideal model as absolute truth. Real measurements include noise and tolerance. Ignoring this leads to brittle all-or-nothing conclusions instead of graded confidence.\r
\r
A third issue is interpreting values without declaring sign conventions, which can produce opposite conclusions from similar numbers.\r
\r
## Model errors\r
A frequent model error is keeping R constant when effective contact radius changes with load or deformation. In that case residual growth is misread as sensor failure.\r
\r
Another model error is applying a single residual threshold across very different regimes. Low-speed educational rigs and high-speed benches should not always share identical acceptance bands.\r
\r
Model misuse also appears when asynchronous measurements are treated as simultaneous, creating artificial residuals.\r
\r
## Mathematical errors\r
The dominant mathematical error is forgetting rpm to rad/s conversion before applying\r
\r
{{f:conversion_rpm_rad}}\r
\r
. This introduces a systematic scale factor and corrupts interpretation.\r
\r
Unit inconsistency is another source of failure, such as mixing millimeter radius with meter-per-second velocity.\r
\r
Early rounding can also flip residual sign when two terms are close, leading to wrong regime classification.\r
\r
## Interpretation errors\r
A common interpretation error is assuming that small [[delta]] proves complete mechanical health. [[delta]] evaluates local kinematic coherence, not full system integrity.\r
\r
Another error is overreacting to a single outlier without checking repeatability and measurement quality.\r
\r
The opposite error is ignoring persistent residual drift because ideal behavior was expected beforehand.\r
\r
## Quick self-control rule\r
Use this five-point rule: declare sign convention, validate [[R]] and units, convert [[n]] when needed, compute and classify [[delta]], and publish an action-oriented conclusion.\r
\r
If any point is missing, treat the output as preliminary. This rule catches most recurrent mistakes early and improves decision quality in practical workflows.\r
\r
Repeated use of this checklist builds reliable habits that transfer to larger modeling tasks.`;export{e as default};
