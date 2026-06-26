# Guided example

## Physical situation

Cooling of a sensor is measured and the temperature difference with the environment is suspected to follow `Delta T = Delta T0 e^(-kt)`. The curved data should not be fitted with a line in `Delta T` versus `t` without transformation.

## Mathematical translation

Take logarithms: `ln(Delta T) = ln(Delta T0) - kt`. The correct graph for testing the model is `ln(Delta T)` versus `t`. The expected slope is `-k` and the intercept is `ln(Delta T0)`.

## Step-by-step calculation

If two transformed points are `(0 s, 3.40)` and `(20 s, 2.40)`, the slope is `(2.40 - 3.40) / 20 s = -0.050 1/s`. Therefore `k = 0.050 1/s`.

The intercept `3.40` is not the initial temperature difference directly. It represents `ln(Delta T0)`, so `Delta T0 = e^3.40`, about `30 K`.

## Reading the result

The sensor reduces its temperature difference with relative rate `0.050 1/s` inside the measured interval. The fit supports exponential decay only if residuals show no systematic pattern.

## Common error avoided

The avoided error is fitting a line to the original curve and reading a slope in `K/s` as if cooling lost the same amount each second. The exponential model loses a fraction proportional to the current state.

# Inverse example

## Given result

A log-log graph of intensity versus distance gives slope `-2.02` when fitting data between `0.5 m` and `5 m`, after subtracting experimental background.

## What physical question it can answer

It can answer whether intensity follows an inverse-square law with distance. It does not prove the mechanism by itself, but it supports that the physical exponent is close to `-2` in the measured range.
