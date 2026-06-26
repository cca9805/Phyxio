const e=`# Guided example

## Physical situation

A body receives two vectors related to torque: one points right with magnitude 6 units and another points upward with magnitude 8 units. The question is which vector result describes the combined effect and what physical meaning it has.

## Mathematical translation

The vectors are written as components in perpendicular axes: A = (6, 0) and B = (0, 8). The mathematical object is a vector combination in the same basis, not a sum of names or a comparison of isolated magnitudes.

## Step-by-step calculation

The resultant is R = A + B = (6, 8). Its magnitude is sqrt(6^2 + 8^2) = 10. The direction forms an angle whose tangent is 8/6, so it points into the first quadrant, between the original two vectors.

## Reading the result

The result means the combined effect is not 14 in an arbitrary direction, but an arrow of magnitude 10 with defined direction. If the units were newtons, the resultant is in newtons; if they were meters per second, it is in meters per second.

## Common error avoided

The avoided error is adding magnitudes when directions are perpendicular. That sum would only be valid for collinear vectors with the same sense. Here geometry requires components and magnitude reconstruction.

# Inverse example

## Given result

A resultant vector R = (0, 0) is obtained by adding three forces applied to a point particle, all expressed in the same axes and with the same unit.

## What physical question it can answer

It can answer whether the point is in equilibrium after considering those forces. It does not mean no forces exist, but that their vector effects cancel in the chosen basis.
`;export{e as default};
