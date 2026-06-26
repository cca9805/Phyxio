# Guided example

## Physical situation

A laboratory measures force versus extension for a spring. The points almost form a line passing near the origin. In another experiment, the amplitude of an oscillation decreases by the same proportion each second.

## Mathematical translation

The spring suggests a linear function `F = kx`, where the slope `k` is the spring constant. The amplitude that loses the same fraction per unit time suggests a decreasing exponential `A = A0 e^(-bt)`.

## Step-by-step calculation

If the spring passes through `(x = 0.02 m, F = 1.0 N)` and `(x = 0.06 m, F = 3.0 N)`, the slope is `(3.0 - 1.0) N / (0.06 - 0.02) m = 50 N/m`. This parameter has unit force per length.

For the amplitude, if each second keeps `80%`, a fixed amount is not subtracted: the value is multiplied by `0.8`. After three seconds the remaining amplitude is `A0 (0.8)^3`, a discrete exponential decay behavior.

## Reading the result

The first result says that the spring requires `50 N` for each meter of extension in the measured interval. The second says that the loss depends on the current value, not on a fixed subtraction per time step.

## Common error avoided

The avoided error is calling every increasing relation linear. A decreasing exponential may also look smooth, but its change is proportional to the remaining value rather than to a fixed time increment.

# Inverse example

## Given result

A position-time graph repeats the same shape every `2 s` and oscillates between `-0.10 m` and `0.10 m`. The proposed fit is sinusoidal.

## What physical question it can answer

It can answer questions about amplitude, period, frequency, and phase of an oscillation. It does not by itself answer total energy or the cause of the restoring force, although it points toward an oscillatory model.
