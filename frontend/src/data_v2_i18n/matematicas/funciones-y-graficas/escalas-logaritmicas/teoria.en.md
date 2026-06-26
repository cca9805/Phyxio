# Logarithmic scales

## What it is

A logarithmic scale represents multiplications as equal steps. On a linear scale, moving one mark adds a fixed amount; on a logarithmic scale, moving one mark multiplies by a fixed factor.

This makes it possible to compare quantities spanning many orders of magnitude without crushing small values or losing large ones. The central tool is not merely "doing logarithms", but reading ratios and exponents.

## Why it appears in physics

It appears in sound, pH, light intensity, spectra, seismology, astronomical data, and power laws. Many phenomena change by factors of `10`, `100`, or `1000`, not by small absolute differences.

It also appears when linearizing data. An exponential becomes a line on semilog axes, and a power law becomes a line on log-log axes. In that way a graph reveals exponents and relative rates.

## Visual or geometric idea

The visual image is a ruler where equal spaces represent equal ratios. From `1` to `10`, from `10` to `100`, and from `100` to `1000` there is the same distance if the base is `10`.

On semilog, only one axis is logarithmic; it is useful for exponentials. On log-log, both axes are logarithmic; it is useful for power laws. The line that appears does not mean the same as a line on linear axes.

## Minimal symbolic language

The logarithm answers: to which exponent must the base be raised to get a number. In base `10`, `log(1000) = 3` because `10^3 = 1000`.

Physics uses expressions such as `L = 10 log10(I/I0)` for decibels or `pH = -log10([H+])`. On log-log graphs, if `y = C x^n`, then `log(y) = log(C) + n log(x)`, and the slope is `n`.

## What the result means

A logarithmic result usually means ratio, not absolute difference. Increasing by `20 dB` does not add a fixed intensity: it multiplies the intensity ratio by `100`. Lowering pH by one unit multiplies `H+` concentration by `10`.

On a log-log graph, a slope `-2` means that when `x` is multiplied by `10`, `y` is divided by `100`. This scaling reading is more important than the visual drawing.

## When not to use it

Do not apply logarithms to negative quantities or zeros. Before plotting on a logarithmic scale, check that quantities are positive and that the ratio used is dimensionless when required.

Do not compare visual distances on log axes as if they were linear differences. On log axes, equal spaces mean equal factors; forgetting this misreads slopes, separations, and averages.

## Operational summary

Identify whether the problem compares ratios, factors, or many orders of magnitude. Decide whether you need linear, semilog, or log-log scale. Read multiplications rather than additions, and translate each slope or jump into a physical factor.

Basic level: recognize that each decade multiplies by `10`. Intermediate level: interpret dB, pH, and log-log slopes. Advanced level: use logarithmic scales to diagnose exponentials, power laws, and data limits.
