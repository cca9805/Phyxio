# Exam-type example

## Problem statement

Two bodies lie on the same horizontal axis. Body 1 has mass [[m1]] = 2 kg and is at [[x1]] = 0 m. Body 2 has mass [[m2]] = 6 kg and is at [[x2]] = 4 m. Define the system, compute the total mass [[M]], compute the coordinate [[xcm]] of the center of mass, and explain why the result does not coincide with the geometric midpoint. Also use the structural reading [[Mxcm]] to check the calculation.

## Data

| Quantity | Value |
|---|---|
| [[m1]] | 2 kg |
| [[x1]] | 0 m |
| [[m2]] | 6 kg |
| [[x2]] | 4 m |

The positions are measured from the same origin and in the same positive direction. The masses are non-negative, so the final result must lie between 0 m and 4 m.

## System definition

The system contains only the two indicated bodies. The table, support, and any external object are not included. The definition of center of mass depends on this boundary: if another mass were included, [[M]], [[Mxcm]], and [[xcm]] would change. The model is one-dimensional because the two relevant positions are given on the same axis.

## Physical model

The total mass is obtained with the operational definition:

{{f:M}}

The center-of-mass coordinate is obtained as a weighted average:

{{f:xcm}}

The multiplied form checks the total spatial moment:

{{f:Mxcm}}

The vector expression exists as a conceptual extension:

{{f:rcm_general}}

This exercise uses the scalar case, but the idea is the same as in the vector form: each position counts according to the mass occupying it.

## Model justification

The model is valid because the bodies are treated as point masses and their positions are measured with a common origin. We are not computing the internal center of mass of each body; we are finding the representative point of the system formed by both. Since [[m2]] is larger than [[m1]] and is located at [[x2]], [[xcm]] is expected to lie closer to 4 m than to 0 m.

## Symbolic solution

First, the total mass [[M]] is built from the partial masses. Then the weighted numerator is formed: position [[x1]] is weighted by [[m1]], and position [[x2]] is weighted by [[m2]]. The final coordinate [[xcm]] is obtained by dividing that weighted sum by [[M]].

The relation [[Mxcm]] provides the same result without losing structure: the product of total mass and collective position must match the sum of the spatial contributions of the two bodies. If that equality fails, a mass or position was changed during substitution.

As an extension, if the same reasoning were applied to more particles or to a plane, each point mass would be replaced by a generic contribution [[m_i]] located at a vector [[r_i]], and the result would be the vector [[rcm]]:

{{f:rcm_general}}

This form is not used for the final number in the exercise, but it confirms that the definition of [[xcm]] is the one-dimensional case of a more general rule.

## Numerical substitution

The total mass is [[M]] = 8 kg. The spatial contribution of body 1 is zero because it is located at the origin. The spatial contribution of body 2 dominates the numerator because it combines a 6 kg mass with a 4 m position. The weighted sum is 24 kg m.

Dividing 24 kg m by 8 kg gives [[xcm]] = 3 m. The structural reading is [[Mxcm]] = 24 kg m, consistent with the sum of system contributions with respect to the origin.

## Dimensional validation

The quantity [[M]] is measured in kg. The quantity [[Mxcm]] is measured in kg m because it combines mass and position. Dividing kg m by kg leaves [[xcm]] in meters. The final dimension is length, as required for a position.

The range is also valid: 3 m lies between [[x1]] = 0 m and [[x2]] = 4 m. It is also closer to 4 m than to 0 m, exactly as expected because [[m2]] is the dominant mass.

## Physical interpretation

The result does not mean that a real particle exists at 3 m. It means that the two-body system has an equivalent collective position at that point. The geometric midpoint would be 2 m, but that value would ignore that the second body has three times the mass of the first. The definition of center of mass corrects that geometric intuition and shifts the result toward the larger mass.

If [[m1]] and [[m2]] were equal, the center would coincide with the midpoint. If [[m2]] increased, [[xcm]] would move even closer to [[x2]]. These variations show that the definition is not an isolated formula, but a tool for interpreting mass distributions.

# Real-world example

## Context

A technician places a battery and a toolbox on a light board. The battery is approximated as [[m1]] near the left end, and the toolbox as [[m2]] toward the right. The goal is not to study the board itself, but to estimate where the representative point of the two loads lies in order to decide where to place a support.

## Physical estimation

Before calculating, the technician observes that the toolbox is heavier and farther from the origin. Therefore, [[xcm]] is expected to be clearly shifted toward the toolbox. If the board is 1 m long and the toolbox is near 0.8 m, a reasonable estimate may place the center of mass between 0.5 m and 0.8 m, not near the left end.

The quantitative reading uses the same quantities as the exam example: define [[M]], compute [[Mxcm]] as a weighted sum, and divide to obtain [[xcm]]. If the result lies outside the board, the positions should be checked to ensure they were measured from the same origin.

## Interpretation

The real application shows the purpose of the definition: it turns a load distribution into a decision position. The support should be placed close to [[xcm]] if initial rotation is to be avoided. It is not enough to look at the geometric center of the board, because the relevant physical system is the set of loads and their positions.

If the technician added more loads, the two-body table would no longer be enough and the model would become a list of contributions [[m_i]]. If those loads were spread over a surface, each one would have a vector [[r_i]] and the representative point would be [[rcm]]. The practical reading would not change: the center shifts toward heavier and farther contributions.

## Checklist

1. Are all system masses defined?
2. Do [[x1]] and [[x2]] use the same origin?
3. Is [[M]] the sum of the included masses?
4. Does [[xcm]] lie inside the position interval?
5. Does the result shift toward the larger mass?
