# Guided example

## Physical situation

A proposed distance travelled from rest is d = a t. The task is to detect whether the expression can be correct.

The goal is to answer the question without treating the formula as a black box. You must recognise which datum changes, which condition remains fixed, and what mathematical relation the model represents.

## Mathematical translation

Distance has dimension L. Acceleration has L/T^2 and time has T. The product a t has L/T, which is speed.

The translation separates physical quantities from operations. This prevents choosing a tool by habit and forces a justification of why the operation answers the question.

## Step-by-step calculation

Compare dimensions: [d] = L, [a t] = (L/T^2)T = L/T. Since L does not match L/T, the formula is dimensionally malformed.

Each step preserves the original relation. If a factor, unit, or condition is changed, it must be declared before accepting the numerical result.

## Reading the result

The result does not give the exact formula, but it rejects an impossible form. A compatible option would contain a t^2, although the numerical factor still requires physics.

The physical reading includes unit, scale, and dependence. The final number is valid only if this reading matches the expected behaviour of the system.

## Common error avoided

This avoids applying a mechanical operation without reading the model. It also avoids losing units, ignoring signs, or extrapolating a rule outside its domain.

# Inverse example

## Given result

If an expression has dimensions of energy, it may answer questions about work, kinetic energy, or potential energy, but not directly about speed.

## What physical question it can answer

It reconstructs which quantity was being sought and which physical model stood behind the calculation. This matters because in real problems a mathematical output is often interpreted before the exact question is known.

<!-- algebra-depth-v2 -->
# Example read by levels

## Basic level

Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.

## Intermediate level

Solve the same setup after changing one input by a factor `10` or `1/10`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of dimensional analysis.

## Advanced level

Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.

