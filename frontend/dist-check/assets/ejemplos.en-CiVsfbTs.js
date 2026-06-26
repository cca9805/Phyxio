const e=`# Guided example\r
\r
## Physical situation\r
\r
We want to estimate the average speed of a person who covers a street of about \`800 m\` in about \`200 s\`. We are not seeking many decimals; we want to know whether the scale corresponds to walking, running, driving, or flying.\r
\r
The distance is close to \`10^3 m\` and the time is close to \`10^2 s\`. The physical formula is speed equals distance divided by time.\r
\r
## Mathematical translation\r
\r
Write \`v = d / t\`. For order of magnitude, use \`d ~ 10^3 m\` and \`t ~ 10^2 s\`. During division, subtract exponents: \`10^3 / 10^2 = 10^1\`.\r
\r
The estimate gives \`v ~ 10^1 m/s\`. This scale means tens of metres per second, even if the more precise value is about \`4 m/s\`.\r
\r
## Step-by-step calculation\r
\r
First round \`800 m\` to \`10^3 m\`. Then round \`200 s\` to \`10^2 s\`. Subtract exponents because the formula divides distance by time.\r
\r
The estimated result is \`10^(3-2) m/s = 10^1 m/s\`. If the detailed calculation is done, \`800/200 = 4 m/s\`, which lies near the same order of magnitude.\r
\r
## Reading the result\r
\r
The scale from \`10^0\` to \`10^1 m/s\` is reasonable for a person moving quickly. If we had obtained \`10^3 m/s\`, it would be absurd for walking and would signal a unit or exponent error.\r
\r
Order of magnitude does not decide whether the person moves exactly at \`4 m/s\` or \`5 m/s\`; it says that the situation is not aircraft scale, snail scale, or projectile scale.\r
\r
## Common error avoided\r
\r
A common error is adding exponents and obtaining \`10^5 m/s\`. That treats division as multiplication. The physical reading detects the error: no person crosses a street at one hundred thousand metres per second.\r
\r
Another error is demanding exactness from the estimate. If the detailed value is \`4 m/s\` and the estimate is \`10 m/s\`, the estimate is still useful for scale control.\r
\r
# Inverse example\r
\r
## Given result\r
\r
Suppose an energy estimate gives \`10^6 J\`. Before knowing the exact value, we already know that the scale is megajoules, much larger than the energy of a small everyday motion.\r
\r
This result may be reasonable for a vehicle, a small explosion, or an industrial process, but not for lifting a pencil a few centimetres.\r
\r
## What physical question it can answer\r
\r
The result can answer whether an effect may be neglected. If the main system handles \`10^8 J\`, a loss of \`10^6 J\` may be small but not necessarily irrelevant. If the system handles \`10^5 J\`, that loss dominates.\r
\r
The inverse example shows that order of magnitude supports physical comparison, not only isolated numerical estimation.\r
\r
<!-- algebra-depth-v2 -->\r
# Example read by levels\r
\r
## Basic level\r
\r
Identify the target quantity, its expected unit, and the datum that most constrains the result. If you cannot state those three things, you should not use the calculator yet.\r
\r
## Intermediate level\r
\r
Solve the same setup after changing one input by a factor \`10\` or \`1/10\`. Observe whether the result changes linearly, inversely, through a power, or through an accumulated factor. That comparison reveals the real structure of order of magnitude.\r
\r
## Advanced level\r
\r
Ask which assumption allows the model to be used. It may be a valid scale, a constant treated as fixed, a linear approximation, independence between variables, or a domain where an inverse function makes sense. If that assumption fails, the number may lose its physical interpretation.\r
\r
`;export{e as default};
