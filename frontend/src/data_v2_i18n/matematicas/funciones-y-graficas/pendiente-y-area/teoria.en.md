# Slope and area

## What it is

Slope measures how much the vertical quantity changes when the horizontal quantity advances. On a graph, it answers "at what rate does this change with respect to that". Area under a curve measures accumulation: it adds small contributions over an interval.

They are not interchangeable operations. Slope reads local or average steepness; area reads total accumulated amount. In physics, this separates velocity from displacement, force from impulse, power from energy, and current from charge.

## Why it appears in physics

It appears because many physical laws ask not only for a value, but for changes and accumulations. On a position-time graph, slope is velocity. On a velocity-time graph, area is displacement. On a force-time graph, area is impulse.

It also appears in work, electricity, thermodynamics, and fluids. A curve may tell how much is transferred, how much accumulates, or how fast a quantity changes, provided the axes are identified correctly.

## Visual or geometric idea

Slope appears as steepness. If a line rises a lot for each horizontal step, the rate of change is large and positive. If it falls, the slope is negative. If it is horizontal, the vertical quantity does not change with the horizontal one.

![Slope as rise divided by run](/graphs/matematicas/funciones-y-graficas/pendiente-y-area/pendiente-secante-tangente.svg)

Area appears as a region. If the curve lies above the horizontal axis, signed area is positive; if it lies below, it is negative. In a physical graph, that region is not just geometry: its units come from multiplying the units of the two axes.

![Positive and negative area under a curve](/graphs/matematicas/funciones-y-graficas/pendiente-y-area/area-bajo-curva-signo.svg)

## Minimal symbolic language

Average slope between two points is written as vertical change divided by horizontal change: `m = Delta y / Delta x`. In physics, if the axes are `x (m)` and `t (s)`, then `Delta x / Delta t` has units `m/s` and is interpreted as average velocity.

Accumulated area is represented as a sum of rectangles or, at advanced level, as an integral. If the axes are `v (m/s)` and `t (s)`, the product `v Delta t` has units `m`, so area under a velocity-time graph represents displacement.

![Slope and area in kinematics graphs](/graphs/matematicas/funciones-y-graficas/pendiente-y-area/cinematica-pendiente-area.svg)

## What the result means

The result of a slope is a rate: "how much the vertical quantity changes per unit of the horizontal quantity". Its unit is a quotient of units. A slope of `3 m/s` in a position-time graph means position increases `3 m` each second on that interval.

The result of an area is an accumulation. Its unit is the product of the axis units. An area of `12 N s` under a force-time curve is not a force: it is impulse, and it measures change in momentum.

## When not to use it

Do not use slope when the question asks for accumulated amount over an interval. If a velocity-time graph asks for total displacement, calculating only a slope answers a different question. Do not use area when the question asks for instantaneous rate of change.

Do not ignore sign or units. A negative area may indicate displacement in the negative direction, extracted work, or charge transferred in the opposite sense. A visually steep slope on compressed axes is not accepted by appearance: it must be calculated with the real scales.

## Operational summary

First identify axes, units, and interval. If the question says "rate", "change rate", "speed of change", or "steepness", think slope. If it says "total", "accumulated", "displacement", "work", "impulse", or "charge", think area.

The basic level is distinguishing rise, fall, region, and sign. The intermediate level is computing average slope and simple areas with units. The advanced level is interpreting instantaneous slope, signed areas, piecewise intervals, and the link with derivatives and integrals.
