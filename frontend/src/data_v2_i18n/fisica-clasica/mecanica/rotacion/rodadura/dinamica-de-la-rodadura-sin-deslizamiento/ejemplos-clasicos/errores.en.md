# Frequent errors in classic rolling examples

## Conceptual errors
The most common conceptual error is assuming that any wheel that rotates and advances is in pure rolling. A system may rotate and move forward while still slipping. The rolling condition is a quantitative relation that must be checked with data.

Another conceptual mistake is treating the ideal model as absolute truth. Real measurements include noise and tolerance. Ignoring this leads to brittle all-or-nothing conclusions instead of graded confidence.

A third issue is interpreting values without declaring sign conventions, which can produce opposite conclusions from similar numbers.

## Model errors
A frequent model error is keeping R constant when effective contact radius changes with load or deformation. In that case residual growth is misread as sensor failure.

Another model error is applying a single residual threshold across very different regimes. Low-speed educational rigs and high-speed benches should not always share identical acceptance bands.

Model misuse also appears when asynchronous measurements are treated as simultaneous, creating artificial residuals.

## Mathematical errors
The dominant mathematical error is forgetting rpm to rad/s conversion before applying

{{f:conversion_rpm_rad}}

. This introduces a systematic scale factor and corrupts interpretation.

Unit inconsistency is another source of failure, such as mixing millimeter radius with meter-per-second velocity.

Early rounding can also flip residual sign when two terms are close, leading to wrong regime classification.

## Interpretation errors
A common interpretation error is assuming that small [[delta]] proves complete mechanical health. [[delta]] evaluates local kinematic coherence, not full system integrity.

Another error is overreacting to a single outlier without checking repeatability and measurement quality.

The opposite error is ignoring persistent residual drift because ideal behavior was expected beforehand.

## Quick self-control rule
Use this five-point rule: declare sign convention, validate [[R]] and units, convert [[n]] when needed, compute and classify [[delta]], and publish an action-oriented conclusion.

If any point is missing, treat the output as preliminary. This rule catches most recurrent mistakes early and improves decision quality in practical workflows.

Repeated use of this checklist builds reliable habits that transfer to larger modeling tasks.