# Scientific notation and prefixes

## What it is

Scientific notation writes a number as a value between 1 and 10 multiplied by a power of ten. Instead of writing `300000000`, we write `3 x 10^8`. Instead of writing `0.0000012`, we write `1.2 x 10^-6`. The value is the same, but the scale becomes visible.

SI prefixes do the same job for units: kilo means `10^3`, milli means `10^-3`, micro means `10^-6`, and nano means `10^-9`. Saying `5 km` is the same as saying `5 x 10^3 m`; saying `2 ms` is the same as saying `2 x 10^-3 s`.

## Why it appears in physics

Physics works across very different scales. A planet has a size of millions of metres, a molecule may be measured in nanometres, an electric charge can be of order `10^-19 C`, and the speed of light is of order `10^8 m/s`. Without scientific notation, calculations become crowded with zeros and orders of magnitude are easily lost.

It also appears because laboratory units often use prefixes. A sensor may measure millivolts, a ruler millimetres, a mass grams, or a frequency megahertz. To use formulas coherently, those data must be converted to compatible units before calculating.

In Phyxio, this leaf naturally connects with the unit converter. The converter helps check transformations such as `km/h` to `m/s`, `cm^2` to `m^2`, or `g/cm^3` to `kg/m^3`, but it should not replace scale reasoning: before opening it, predict the expected exponent. The calculator is useful afterwards for operating with coherent values, and the constants table prevents copying values such as `c`, `G`, `g`, or elementary charge incorrectly when scale problems involve physical constants.

## Visual or geometric idea

A power of ten indicates how many steps you move on a decimal scale. Multiplying by `10^3` moves three places toward larger values; multiplying by `10^-3` moves three places toward smaller values. This is not algebraic decoration: it places the number on a scale of sizes.

Prefixes are labels for those steps. Kilo, mega, and giga point toward large scales; milli, micro, and nano point toward small scales. The coefficient, such as `3.2` in `3.2 x 10^5`, gives the finer position within that scale.

## Minimal symbolic language

Scientific notation has the form `a x 10^n`, where `1 <= a < 10` and `n` is an integer. The value `a` is the coefficient, and `n` indicates the order of magnitude. Positive exponents represent values larger than the base unit; negative exponents represent values smaller than the base unit.

To multiply powers of ten, add exponents: `10^a x 10^b = 10^(a+b)`. To divide them, subtract exponents: `10^a / 10^b = 10^(a-b)`. To convert prefixes, replace the prefix by its power of ten and keep the base unit.

The real difficulty appears when a prefixed unit is raised to a power. One centimetre is `10^-2 m`, but one square centimetre is `(10^-2 m)^2 = 10^-4 m^2`. One cubic millimetre is `(10^-3 m)^3 = 10^-9 m^3`. The prefix factor is raised too, not only the written unit.

Compound units also require care. To convert `km/h` to `m/s`, changing kilometres to metres is not enough: hours must also be changed to seconds. Thus `1 km/h = 10^3 m / 3600 s`, approximately `0.278 m/s`. In density, `g/cm^3` combines mass and volume: `1 g/cm^3 = 10^-3 kg / 10^-6 m^3 = 10^3 kg/m^3`.

Engineering notation often uses exponents that are multiples of three because they match SI prefixes: `10^3` kilo, `10^6` mega, `10^-3` milli, `10^-6` micro. This is not always normalized scientific notation, but it often communicates the useful prefix more clearly.

## What the result means

A result in scientific notation lets you read physical scale quickly. If a length is `4 x 10^-9 m`, it is nanometre-scale; if an energy is `2 x 10^6 J`, it is megajoule-scale. The power of ten tells you the level of the phenomenon before detailed interpretation.

It also helps judge whether an answer is reasonable. If a table height comes out as `10^5 m`, the issue is not only numerical; the physical scale is absurd. If a household current comes out as `10^-12 A`, a prefix or conversion has probably been lost.

Scale also tells you about the instrument or phenomenon. Millimetres suggest small mechanical measurements, micrometres suggest microscopy or fine tolerances, and nanometres suggest molecules, light, or materials. Kilowatts suggest powerful devices; megawatts suggest industrial installations. Reading the prefix means reading physical context.

For that reason, leaving the result in the base unit is not always best. `0.000004 s` is correct, but `4 microseconds` communicates the scale better. Internally, however, it may be safer to calculate in seconds and only convert at the end for communication.

Phyxio's unit converter should be read as a scale check. If you expected `72 km/h` to be close to `20 m/s` and the converter confirms it, the calculation gains confidence. If you expected nanometres and a macroscopic length appears, the result is not accepted automatically: prefix, unit power, and compound unit must be reviewed.

## When not to use it

Do not use scientific notation to hide a bad conversion. Writing a number with powers of ten does not make it correct. First identify the quantity, the prefix it originally had, and the unit required by the formula.

Do not round too early either. In multi-step calculations, keeping two or three significant figures prevents the scale from being correct while the final value loses useful precision. Scientific notation organizes scale; it does not replace judgement about uncertainty.

Do not mix prefixes inside the same formula without choosing a coherent unit system. Using millimetres for one length, metres for another, and seconds for time can be valid if the formula was built that way, but most physical laws are safer after conversion to compatible units. Coherence matters more than compact-looking numbers.

Do not apply prefixes to dimensionless quantities as if they were physical units. A ratio, an angle in radians, or a coefficient may have numerical scale, but it is not converted in the same way as metres, seconds, or newtons.

## Operational summary

Use scientific notation when numbers have many zeros, when SI prefixes appear, or when order of magnitude matters. Convert each datum to a power of ten, operate with coefficients and exponents separately, and check the final unit.

The physical goal is scale reading: knowing whether the calculation concerns kilometres, millimetres, nanoseconds, megawatts, or microcoulombs. A good answer has a number, a power of ten, a unit, and an interpretation of size.

<!-- algebra-depth-v2 -->
## Depth layer: scientific notation and SI prefixes

This leaf should not act as a short list of rules, but as a tool for thinking through physics problems. The goal is to move between microscopic, human, and astronomical scales without losing powers of ten. A basic student must recognise the target quantity and expected unit; an intermediate student must justify the chosen operation; an advanced student must anticipate limits, dependencies, and cases where the model no longer applies.

The prefix is not decoration: it changes the power of ten and therefore the physical scale of the datum.

| Prefix | Factor | Reading |
|---|---|---|
| nano | `10^-9` | very small scale |
| micro | `10^-6` | fine laboratory scale |
| milli | `10^-3` | thousandth part |
| kilo | `10^3` | thousands |
| mega | `10^6` | millions |
| giga | `10^9` | billions |

The test of understanding is comparison. If an input is multiplied by `2`, by `10`, or by `1/2`, the student should say what happens to the output before using the calculator. That prediction turns algebra into physical control of the result.

