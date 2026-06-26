const e=`# Physical applications\r
\r
## 1. Radioactivity\r
\r
It appears in decay laws. It calculates remaining amount, half-life, or elapsed time. The result means fraction of undecayed nuclei. The dangerous error is subtracting the same amount each interval instead of applying the same factor. As a final control, the learner must explain which datum changes, which quantity is calculated, and which physical conclusion can accept or reject the result.\r
\r
## 2. Damping\r
\r
It appears when oscillation amplitudes decrease proportionally to their value. It calculates envelope, time constant, or relative reduction. The result interprets dissipation. The dangerous error is confusing oscillation frequency with exponential loss rate. As a final control, the learner must explain which datum changes, which quantity is calculated, and which physical conclusion can accept or reject the result.\r
\r
## 3. Waves and sound\r
\r
It appears in decibels and intensity scales. It calculates multiplicative comparisons using logarithms. The result means ratio between intensities. The dangerous error is treating decibels as linear units. As a final control, the learner must explain which datum changes, which quantity is calculated, and which physical conclusion can accept or reject the result.\r
\r
## 4. Thermodynamics\r
\r
It appears in processes involving ratios, entropy, and relaxation toward equilibrium. It calculates changes associated with quotients or time evolution. The result expresses relative tendency. The dangerous error is applying logarithms to dimensional quantities without first forming a dimensionless ratio. As a final control, the learner must explain which datum changes, which quantity is calculated, and which physical conclusion can accept or reject the result.\r
\r
## 5. Electronics\r
\r
It appears in capacitor charging and discharging. It calculates voltage, current, or time to reach a percentage. The result means asymptotic approach. The dangerous error is expecting the capacitor to reach the final value exactly in finite time. As a final control, the learner must explain which datum changes, which quantity is calculated, and which physical conclusion can accept or reject the result.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Intensive transfer closure\r
\r
In radioactivity, cooling, and RC circuits, the physical context is change proportional to the amount present. The operational use of the logarithm is to solve for time from a dimensionless ratio such as \`N/N0\`, \`T/T0\`, or \`V/V0\`.\r
\r
In waves, sound, and intensity measurements, logarithmic scales compare orders of magnitude. Decibels and pH are not linear units: a small difference on the scale can represent a large factor in the physical quantity.\r
\r
In data analysis, a semilog plot detects whether an experimental decay is really exponential. If the points do not form a line, the model may require several time constants, background noise, or a different physical mechanism.\r
\r
`;export{e as default};
