# Guided example

## Physical situation

A cart moves at a constant speed of `3 m/s` and covers `24 m`. We want to calculate the time required. The appropriate physical relation for uniform motion is distance equals speed multiplied by time.

The question is not merely which number is missing. It asks how long the cart must maintain that speed to cover that distance. The unknown is time, and the expected unit is seconds.

## Mathematical translation

Write the relation as `d = v t`. Here `d` is distance, `v` is constant speed, and `t` is time. The unknown `t` is multiplied by `v`, so isolating it requires dividing both sides by `v`.

The symbolic result is `t = d / v`, provided that speed is not zero. This condition has physical meaning: if speed is zero, the cart does not cover the distance in any finite time.

## Step-by-step calculation

Start with `d = v t`. Divide both sides by `v`: `d / v = t`. Rewrite the result as `t = d / v`, which places the unknown naturally on the left.

Now substitute the data: `t = 24 m / (3 m/s)`. The units simplify because metre divided by metre per second gives second. The numerical result is `t = 8 s`.

## Reading the result

The result means that, if the cart keeps a constant speed of `3 m/s`, it needs `8 s` to travel `24 m`. It says nothing about acceleration, braking, or changes of direction, because those effects are not part of the chosen model.

The dependence also makes sense: more distance requires more time at the same speed, while more speed requires less time for the same distance. This confirms the physical meaning of the rearrangement.

## Common error avoided

A common mistake is writing `t = v / d` because the student remembers that division is involved but reverses the relation. Units reveal the error immediately: `(m/s)/m` gives `1/s`, not seconds.

Another mistake is substituting numbers before isolating the variable and losing track of each quantity. Keeping the symbolic form first makes it easier to check units, nonzero speed, and physical dependence.

## Second guided case: rearrangement with a root and a physical branch

The kinetic energy of a translating particle is written `K = (1/2) m v^2`. If `K` and `m` are known, we want the associated speed. The unknown is squared, so division is not enough: first isolate `v^2` and then take a root.

Multiply by `2`: `2K = m v^2`. Divide by `m`, with `m > 0`: `2K/m = v^2`. Take the root: `v = +/- sqrt(2K/m)`. If the problem asks for speed, use `v = sqrt(2K/m)` because speed is a magnitude. If it asks for velocity along an axis, the sign must be decided from the direction of motion.

The physical condition is double. Mass must be positive and kinetic energy cannot be negative in this classical model. If the data produce a root of a negative number, do not force the calculation: review data, units, or model.

## Third guided case: unknown in a denominator

Average pressure may be written as `p = F/A`. If force and pressure are known, solving for area requires removing `A` from the denominator first. Multiply both sides by `A`: `p A = F`. Then divide by `p`: `A = F/p`, provided that `p` is not zero.

The physical reading matters: for the same force, greater pressure means smaller contact area. If the rearrangement produced a negative area, the issue would not be merely algebraic, because geometric area cannot be negative. That restriction forces a review of the sign used for normal force, pressure, or the problem convention.

## Fourth guided case: repeated variable

In some models the unknown appears more than once. For example, a simplified resistive force relation may be written `F = b v + c v^2`. If `F` is known, solving for `v` is not done by moving one term: it is the quadratic equation `c v^2 + b v - F = 0`.

The formal solution uses the quadratic formula: `v = (-b +/- sqrt(b^2 + 4 c F))/(2c)`, if `c` is not zero. Physics filters the branches. If `b`, `c`, and `F` are positive and a positive speed is requested, the branch with `+` before the root is usually selected. The other branch may be negative and fail to represent the stated situation.

# Inverse example

## Given result

Suppose the final rearranged result of a problem is `F = m a`, and substituting the data gives `F = 12 N`. This does not only say twelve; it says that the net force needed to produce the given acceleration on the given mass is twelve newtons.

If the positive axis was chosen to the right and the result were negative, the net force would point left. The sign should be interpreted, not erased.

## What physical question it can answer

This result can answer questions such as what net force is required for a mass to accelerate in a specified way, what acceleration would result from a different force, or what mass could be accelerated by an available force.

The inverse reading shows that a formula is a relation between quantities, not a fixed recipe. The same equality can support several physical questions if the unknown, units, and model assumptions are identified correctly.

<!-- algebra-depth-v2 -->
# Example read by levels

## Basic level

Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.

## Intermediate level

Solve the same setup after changing one input by a factor `10` or `1/10`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of formula rearrangement.

## Advanced level

Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.

