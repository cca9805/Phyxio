const e=`# Physical applications\r
\r
## 1. Laboratory measurements\r
\r
In laboratories, lengths are measured in millimetres, masses in grams, times in milliseconds, and voltages in millivolts. Scientific notation brings those data into compatible units before a formula is applied.\r
\r
This conversion prevents scale errors. A mass of \`5 g\` is not \`5 kg\`, and a distance of \`2 mm\` is not \`2 m\`. The prefix changes the order of magnitude of the calculation.\r
\r
## 2. Kinematics\r
\r
In motion, distances range from millimetres in vibrations to kilometres in travel. Speeds may be expressed in \`m/s\`, \`km/h\`, or even astronomical scales.\r
\r
Using powers of ten helps decide whether a calculated speed or acceleration is reasonable. If a walking person appears with \`10^5 m/s\`, a conversion has gone wrong.\r
\r
## 3. Electricity\r
\r
<!-- algebra-numbered-app-fix-v1:3 -->\r
Physical context: a circuit or device with currents and powers at different scales. Operational use: calculate with converted prefixes and compare whether the result belongs to electronics or industrial power.\r
\r
Electricity uses prefixes constantly: milliamperes, microcoulombs, kilohms, and megawatts. Operating without conversion can change a current or power by factors of a thousand or a million.\r
\r
In circuits, writing each prefix as a power of ten makes units coherent and shows whether the result belongs to domestic, electronic, or industrial scale.\r
\r
## 4. Atomic and microscopic physics\r
\r
<!-- algebra-numbered-app-fix-v1:4 -->\r
Physical context: atomic, molecular, or microscopic phenomena. Operational use: calculate the equivalent power of ten and interpret whether the scale matches the object being studied.\r
\r
Atomic scales use nanometres, picometres, electronvolts, and very small charges. Without scientific notation, microscopic numbers are hidden among zeros and become hard to compare.\r
\r
The power of ten shows whether a length belongs to a molecule, a cell, or an everyday object. That reading prevents mixing incompatible physical levels.\r
\r
## 5. Astronomy\r
\r
Astronomy involves kilometres, astronomical units, enormous masses, and long times. Scientific notation writes those values without losing the reader in strings of zeros.\r
\r
It also allows comparison of scales. A planetary radius, an orbital distance, and an interstellar distance are not in the same order of magnitude; reading the exponents places the phenomenon.\r
\r
<!-- algebra-intensive-fix-v1 -->\r
## Intensive transfer closure\r
\r
In the laboratory, the context appears when converting millimetres to metres, microseconds to seconds, or milliamperes to amperes. The operational use is to convert all data before comparing, because a misread prefix can change the result by factors of a thousand or a million.\r
\r
In electricity, \`2 mA\` and \`2 MA\` are not typographic variants: they describe radically different physical systems. Detecting that scale prevents dangerous errors in power, resistance, and dissipated energy.\r
\r
In astronomy and microscopic physics, scientific notation compares radii, masses, times, and energies that do not fit ordinary decimal writing. Correct interpretation is not only moving decimal points, but preserving order of magnitude and unit.\r
\r
`;export{e as default};
