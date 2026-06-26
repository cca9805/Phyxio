# Linearization and fitting

## What it is

Linearizing means transforming a nonlinear relation so its data appear as a line. Fitting means estimating the line that best summarizes scattered data. The goal is not drawing a pretty line, but obtaining interpretable physical parameters.

A fitted line has slope, intercept, and residuals. The slope often represents a physical constant; the intercept may represent an initial value or systematic error; residuals show how far data depart from the model.

## Why it appears in physics

It appears in laboratories because measurements have noise and because many models are tested better after transformation. A spring is checked with force versus extension, an ideal gas with pressure versus temperature, and a decay with logarithm of the quantity versus time.

It also appears in fields and power laws. If a relation looks like `y = k x^n`, a log-log graph can turn the exponent into a slope. This helps decide whether the proposed model has experimental support.

## Visual or geometric idea

The mental image is straightening a curve without changing the physical question. Data are not transformed to hide problems; new axes are chosen because the expected model becomes linear there.

If transformed points align, slope and intercept can be read more clearly. If residuals still show curved patterns, the linearized model is not capturing all the physics.

## Minimal symbolic language

A line is written `Y = m X + b`, where `X` and `Y` may be transformed variables. For example, if `y = A e^(kt)`, then `ln(y) = ln(A) + kt`; plotting `ln(y)` against `t` makes the slope equal to `k`.

In a power law `y = C x^n`, taking logarithms gives `log(y) = log(C) + n log(x)`. On a log-log graph, the slope represents exponent `n` and the intercept represents scale `C`.

## What the result means

The result of a fit is not only an equation. The slope must have unit and meaning, the intercept must be physically reasonable, and scatter must indicate model quality. A good fit does not replace physical judgment.

If the slope of `F` versus `x` is `120 N/m`, it is interpreted as a spring constant. If the intercept is not zero when it should be, it may indicate calibration, friction, instrumental offset, or incomplete model.

## When not to use it

Do not linearize without a model. Trying transformations until something looks straight may manufacture a false conclusion. The transformation must come from an expected physical relation.

Do not accept a fit because it has high correlation if residuals show pattern, units make no sense, or the interval includes data outside the model regime.

## Operational summary

First state the expected physical model. Then decide which variables to transform, plot the data, fit a line, read slope and intercept with units, check residuals, and interpret the result inside the measured domain.

Basic level: recognize cloud, line, and scatter. Intermediate level: calculate slope and intercept. Advanced level: choose transformation and interpret residuals, uncertainty, and model limits.
