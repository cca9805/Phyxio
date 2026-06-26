# Guided example

## Physical situation

A signal is reduced by half every fixed interval. The question is how much remains after several intervals.

The goal is to answer the question without treating the formula as a black box. You must recognise which datum changes, which condition remains fixed, and what mathematical relation the model represents.

## Mathematical translation

The tool is exponential because change occurs by factor, not by constant subtraction. If each interval keeps 1/2, the quantity is multiplied repeatedly.

The translation separates physical quantities from operations. This prevents choosing a tool by habit and forces a justification of why the operation answers the question.

## Step-by-step calculation

After n intervals, N = N0 (1/2)^n remains. If n = 3, N0/8 remains. If N/N0 is known and n is requested, a logarithm is used.

Each step preserves the original relation. If a factor, unit, or condition is changed, it must be declared before accepting the numerical result.

## Reading the result

The result means remaining fraction. It is not linear loss: early intervals remove more absolute amount than later intervals.

The physical reading includes unit, scale, and dependence. The final number is valid only if this reading matches the expected behaviour of the system.

## Common error avoided

This avoids applying a mechanical operation without reading the model. It also avoids losing units, ignoring signs, or extrapolating a rule outside its domain.

# Inverse example

## Given result

If ln(N0/N) appears, the natural physical question is how long an exponential decay takes to reach a given fraction.

## What physical question it can answer

It reconstructs which quantity was being sought and which physical model stood behind the calculation. This matters because in real problems a mathematical output is often interpreted before the exact question is known.

<!-- algebra-depth-v2 -->
# Example read by levels

## Basic level

Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.

## Intermediate level

Solve the same setup after changing one input by a factor `10` or `1/10`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of logarithms and exponentials.

## Advanced level

Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.

