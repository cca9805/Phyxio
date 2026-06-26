# Guided example

## Physical situation

A sensor measures a separation of `2.5 mm` between two marks, and we want to use that length in a formula written in metres. We also want to express the result in scientific notation so that the scale is clear.

The problem is not just moving a decimal point. It requires recognizing that the prefix milli represents `10^-3` and that the base unit compatible with the formula is the metre.

## Mathematical translation

Write `2.5 mm = 2.5 x 10^-3 m`. The coefficient is `2.5`, the exponent is `-3`, and the final unit is `m`. The length remains positive; the negative exponent only means it is smaller than one metre.

If a formula later asks for this distance multiplied by a force of `4 N`, the associated work is `4 N x 2.5 x 10^-3 m`. The conversion allows newton metre to be read correctly as joule.

## Step-by-step calculation

First replace the prefix: `milli = 10^-3`. Then keep the number: `2.5 mm = 2.5 x 10^-3 m`. If we calculate work, multiply coefficients: `4 x 2.5 = 10`, and keep the exponent `10^-3`.

The intermediate result is `10 x 10^-3 J`. Normalize the coefficient: `10 x 10^-3 = 1.0 x 10^-2`. Therefore the work is `1.0 x 10^-2 J`.

## Reading the result

The length is millimetre-scale and the work is hundredth-of-a-joule scale. This physical reading matters: a force of a few newtons acting over a few millimetres should not produce many joules.

Scientific notation shows that the result is not close to `1 J`, but one hundred times smaller. If the milli prefix had been forgotten, the work would have been a thousand times too large.

## Common error avoided

A common error is writing `2.5 mm = 2.5 x 10^3 m`, confusing milli with kilo. Units alone may not reveal this error, but scale does: two millimetres cannot become thousands of metres.

Another error is leaving `10 x 10^-3` in a form that is hard to compare. The normalized form `1.0 x 10^-2` displays the order of magnitude more clearly.

## Second guided case: area with a prefix

A plate has an area of `12 cm^2`, and we want to use it in a pressure formula written in `m^2`. The prefix centi means `10^-2`, but because the unit is squared, the factor must be squared too.

The correct translation is `12 cm^2 = 12 x (10^-2 m)^2 = 12 x 10^-4 m^2 = 1.2 x 10^-3 m^2`. The typical error is writing `12 x 10^-2 m^2`, which is one hundred times too large.

If a force of `6 N` acts on that area, pressure is `p = F/A = 6 N / (1.2 x 10^-3 m^2) = 5.0 x 10^3 Pa`. The physical reading is coherent: a moderate force over a small area produces thousands of pascals.

In Phyxio, this is a good moment to open the unit converter and check `cm^2` to `m^2`. The check does not replace the written step: it confirms that the factor `10^-2` was squared and not applied only once.

## Third guided case: compound speed

A car moves at `72 km/h`, and we want to use that speed in a formula with seconds. Convert kilometres to metres and hours to seconds: `72 km/h = 72 x 10^3 m / 3600 s`.

Since `72/3.6 = 20`, the result is `20 m/s = 2.0 x 10^1 m/s`. The conversion is not merely moving a decimal point: it changes both numerator and denominator. If only kilometres were changed to metres, the result would be absurd.

The converter can verify the final value, but the prior estimate is required: road speed should be on the scale of tens of metres per second, not thousands. Afterwards, the calculator can be used to multiply that speed by a time already expressed in seconds.

## Fourth guided case: density

Water has approximate density `1 g/cm^3`. To use it in SI, convert mass and volume: `1 g = 10^-3 kg` and `1 cm^3 = (10^-2 m)^3 = 10^-6 m^3`.

Therefore `1 g/cm^3 = 10^-3 kg / 10^-6 m^3 = 10^3 kg/m^3`. This example shows why a density can become numerically larger when expressed in SI: the denominator volume becomes much smaller when written in cubic metres.

If density is used together with physical constants or material parameters, check the constants table or reference values available in Phyxio. This separates two tasks: converting the unit correctly and using a reliable physical value.

# Inverse example

## Given result

Suppose a calculation gives `6.0 x 10^-6 s`. Without changing the value, it can be written as `6.0 microseconds`, because micro represents `10^-6`.

The result says that the process occurs on a very short time scale, much shorter than a millisecond and far shorter than a second.

## What physical question it can answer

This result could answer how long an electronic signal takes to cross a small circuit, how long a measurement pulse lasts, or what time interval separates two fast events.

The inverse example teaches scale reading before further calculation. If the described phenomenon were the falling time of a ball from a table, `10^-6 s` would be suspicious and the data should be checked.

<!-- algebra-depth-v2 -->
# Example read by levels

## Basic level

Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.

## Intermediate level

Solve the same setup after changing one input by a factor `10` or `1/10`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of scientific notation and SI prefixes.

## Advanced level

Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.

