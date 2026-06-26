# Guided example

## Physical situation

A sensor records the position of a cart on a straight track. The graph shows `x (m)` versus `t (s)`. From `t = 0 s` to `t = 2 s`, the position goes from `0 m` to `4 m`. From `t = 2 s` to `t = 5 s`, the curve is almost horizontal around `4 m`.

The question does not ask for an exact velocity. It asks what happens to the motion in those two intervals and asks for the approximate position at `4 s`.

## Mathematical translation

The mathematical object is a graph of a vertical variable `x` against a horizontal variable `t`. The main operation is coordinate and trend reading: read a vertical value for a given time and describe whether the curve increases or stays constant.

Visual data: horizontal axis in seconds, vertical axis in meters, increasing interval from `0` to `2 s`, nearly horizontal interval from `2` to `5 s`. The vertical result will have meters as unit; intervals will have seconds as unit.

## Step-by-step calculation

First read the interval from `0 s` to `2 s`: the curve rises from `0 m` to `4 m`, so position increases. Then read the interval from `2 s` to `5 s`: the curve stays near `4 m`, so position changes very little.

For `t = 4 s`, move upward from the horizontal value `4` until the curve is reached, then project horizontally to the vertical axis. The approximate reading is `x = 4 m`. Do not count squares without reading labels, because scale defines the value of each division.

## Reading the result

Physically, the cart moves away from the origin during the first two seconds and then is almost at rest near `4 m` from the origin. The reading `x = 4 m` at `4 s` means position, not total distance traveled.

The conclusion must remain inside the displayed interval. We do not know whether after `5 s` the cart stays still, returns, or accelerates, because the graph does not contain that information.

## Common error avoided

The avoided error is calculating one average slope and answering only with a velocity. The graph shows two different behaviors: first changing position, then constant position. Reducing everything to one number loses the rest interval.

# Inverse example

## Given result

On a temperature-time graph for a cooling object, the curve falls quickly at first and then levels off near `22 C`. At `300 s`, the approximate temperature is `24 C`.

## What physical question it can answer

That result can answer questions such as: "what temperature does the object have after five minutes?", "is it approaching room temperature?", and "does cooling keep the same rate all the time?". The leveling shape indicates that change becomes slower as the object approaches the environment.

It does not by itself prove the microscopic cause of cooling or allow an exact prediction of when the object reaches `22 C`. That would require an additional physical model and more precise data.
