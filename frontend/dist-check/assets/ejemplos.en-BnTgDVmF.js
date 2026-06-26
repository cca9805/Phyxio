const e=`# Guided example

## Physical situation

The height of a projectile in a simple model is \`h(t) = 20t - 5t^2\`, with \`t\` in seconds and \`h\` in meters. The question is when it reaches maximum height and what that height is.

## Mathematical translation

The graph is a downward-opening parabola, so it has a maximum. We seek the point where it stops rising and begins falling. At advanced level, this corresponds to zero slope.

## Step-by-step calculation

The derivative is \`h'(t) = 20 - 10t\`. Set it to zero: \`20 - 10t = 0\`, so \`t = 2 s\`. Evaluate: \`h(2) = 20(2) - 5(2)^2 = 40 - 20 = 20 m\`.

## Reading the result

The projectile reaches maximum height of \`20 m\` at \`2 s\`. The result does not say where it lands or how far it travels horizontally; it only optimizes height inside this vertical model.

## Common error avoided

The avoided error is answering only \`t = 2\` without unit or maximum value. Another error would be calling this maximum stable: in this graph it is highest point of trajectory, not stable equilibrium.

# Inverse example

## Given result

A potential energy graph has a local minimum at \`x = 0.15 m\`, with higher energy on both sides of the point inside the observed interval.

## What physical question it can answer

It can answer a question about stable equilibrium position. If moving the system slightly left or right increases energy, the system will tend to return toward the minimum.
`;export{e as default};
