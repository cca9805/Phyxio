const e=`# Physical applications\r
\r
## 1. Checking results in problems\r
\r
The most immediate use is detecting impossible answers. If a human acceleration comes out as \`10^5 m/s^2\`, the problem does not need more decimals; it needs a review of units, formula, or data.\r
\r
This control should happen before submitting any result. A calculator can produce many digits for an answer that has no physical meaning.\r
\r
## 2. Kinematics\r
\r
<!-- algebra-numbered-app-fix-v1:2 -->\r
Physical context: motion with known ranges of speed, distance, and time. Operational use: estimate the scale before calculating and detect impossible conversions.\r
\r
In motion, order of magnitude separates walking, running, driving, flying, and orbiting. Each situation occupies different ranges of speed, distance, and time.\r
\r
It also helps detect wrong conversions between kilometres per hour and metres per second, or between minutes and seconds.\r
\r
## 3. Dynamics and forces\r
\r
<!-- algebra-numbered-app-fix-v1:3 -->\r
Physical context: mechanical interactions competing on the same body. Operational use: compare force orders to decide which term dominates the model.\r
\r
In dynamics, comparing force orders of magnitude helps identify dominant interactions. A force of \`10^3 N\` is not treated like a force of \`10^-2 N\` if both act on the same body.\r
\r
This is essential when deciding whether friction, weight, thrust, tension, or air resistance may be neglected in a first approximation.\r
\r
## 4. Energy and power\r
\r
<!-- algebra-numbered-app-fix-v1:4 -->\r
Physical context: energy transfer or consumption in devices and processes. Operational use: estimate power or energy and detect whether the result belongs to another physical scale.\r
\r
Orders of magnitude distinguish everyday, industrial, and astronomical energy scales. A joule, a kilojoule, a megajoule, and a gigajoule describe very different processes.\r
\r
Power behaves similarly: milliwatts, watts, kilowatts, and megawatts correspond to radically different devices and systems.\r
\r
## 5. Astronomical and microscopic scales\r
\r
In astronomy and microscopic physics, order of magnitude is essential because exact numbers are often less informative than scale. Planetary radii, orbital distances, atoms, and molecules are separated by many powers of ten.\r
\r
Reading exponents places the phenomenon at the correct level and prevents comparisons between objects belonging to incompatible scales.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Intensive transfer closure\r
\r
In mechanics, the typical context is estimating whether a velocity, acceleration, or energy has human, planetary, or microscopic scale. The operational use is to make an approximate calculation before detailed calculation to detect unit errors.\r
\r
In electricity, an order-of-magnitude power estimate distinguishes a sensor, a bulb, a motor, and a power plant. If the result is six orders away from expectation, the problem is not rounding: a conversion or model is probably wrong.\r
\r
In the laboratory, estimating order of magnitude decides whether a measurement will be visible with the available instrument. An uncertainty of \`0.1 mm\` cannot resolve an expected variation of \`10^-6 m\` without changing technique.\r
\r
`;export{e as default};
