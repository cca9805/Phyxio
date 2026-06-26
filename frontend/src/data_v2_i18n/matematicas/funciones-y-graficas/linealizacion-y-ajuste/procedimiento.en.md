# Procedure

## Before calculating

Write the expected physical model, not only the shape of the data. Ask whether the relation should be linear directly or whether it needs a transformation such as `ln(y)`, `1/x`, `x^2`, or `log(x)`.

Check units, data range, and uncertainty. A fit using data outside the physical regime can produce numerically precise but conceptually false parameters.

## Step 1: identify the mathematical object

The object is an experimental data table with one controlled variable and one measured variable. Identify independent variable, dependent variable, and the physical parameter to extract.

If the model is `F = kx`, fit `F` against `x`. If it is `y = A e^(kt)`, fit `ln(y)` against `t`. If it is `y = C x^n`, fit `log(y)` against `log(x)`.

## Step 2: choose the operation

Choose the transformation from the model, not from appearance. For direct proportionality, use a linear graph. For exponential, use semilog. For power law, use log-log. For quadratic dependence, try plotting against `x^2`.

Then fit a line and calculate slope and intercept. If the transformation does not produce a reasonable line, do not force the model.

## Step 3: preserve units and signs

The slope of the transformed line may have units different from the original slope. In `ln(y)` versus `t`, the slope has unit `1/s`. In `F` versus `x`, the slope has unit `N/m`.

The sign of the parameter also has meaning. A negative `k` in an exponential indicates decay; a positive one indicates growth. A nonzero intercept may have physical meaning or reveal offset.

## Step 4: calculate

Select points or use statistical fitting. Calculate `m = Delta Y / Delta X` as a first estimate and compare it with the global fit if available. Also calculate the intercept `b` with `b = Y - mX`.

Check residuals: the difference between data and fitted line. Random residuals suggest a compatible model; patterned residuals indicate curvature, regime change, or omitted variable.

## Step 5: interpret the result

Translate `m` and `b` back to the original model. If you fitted `ln(y) = ln(A) + kt`, the slope is `k` and the intercept is `ln(A)`, not `A`. You must undo the transformation to read the physical parameter.

Write a domain-limited conclusion: "in this interval, the data support a linear relation..." or "the log-log transformation suggests exponent...". Avoid universal claims.

## Self-check checklist

Model before fit, justified transformation, units of slope and intercept, residuals checked, interval declared, uncertainty considered, and physical conclusion written. If one item is missing, the fit is not closed.
