# Guided example

## Physical situation

A wave travels through the same medium, so its speed `v` remains constant. The question is what happens to wavelength `lambda` when frequency `f` doubles. The situation is simple, but it forces you to separate the changing datum, the fixed condition, and the responding quantity.

The same way of thinking later applies to more advanced cases: intensity spreading over surfaces, fields decreasing with distance, or geometric models changing size.

## Mathematical translation

The model is `v = f lambda`. If `v` remains constant, the product `f lambda` must be conserved. Therefore, `lambda` is not directly proportional to `f`; it is inversely proportional to `f`.

The translation is not only rearranging. It is reading the dependence: if one variable in a constant product increases by a factor, the other must decrease by the same factor to keep the result fixed.

## Step-by-step calculation

Initial frequency: `f`. Initial wavelength: `lambda`. Initial speed: `v = f lambda`.

If the new frequency is `2f`, the new wavelength must be `lambda/2`, because `(2f)(lambda/2) = f lambda = v`. The scale factor for frequency is `2`; the scale factor for wavelength is `1/2`.

As a physical check, the unit of `lambda` remains a length. No new unit appears; only the length separating two crests changes.

## Reading the result

The result means that, in the same medium, more frequent waves have closer crests. If frequency doubles, wavelength is halved. The conclusion depends on `v` staying fixed; if the medium changes, the relation may change.

This reading matters more than memorizing the rearrangement. It lets you anticipate the direction of change before inserting numbers and helps reject results where frequency and wavelength increase together without a change in speed.

## Common error avoided

This avoids saying "if one thing doubles, the other also doubles". That reasoning only works for direct proportionality. In a constant product, increasing one quantity forces the other to decrease.

# Inverse example

## Given result

A report says: "when distance from a source doubles, the measured intensity drops to one quarter". The result does not give all absolute values, but it gives a clear scaling structure.

## What physical question it can answer

It can answer whether the phenomenon spreads over a spherical surface or follows an inverse-square law. In a relation `I proportional to 1/r^2`, going from `r` to `2r` changes intensity to `I/4`.

It also detects errors: if someone expected `I/2`, they were using a `1/r` law; if they expected `2I`, they treated distance as direct proportionality. Scaling does not only calculate; it identifies which model may stand behind the data.

<!-- algebra-depth-v2 -->
# Example read by levels

## Basic level

Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.

## Intermediate level

Solve the same setup after changing one input by a factor `10` or `1/10`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of proportionality and scaling.

## Advanced level

Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.

