# Models

## Ideal model

The standard model of the temperature leaf treats the Celsius, kelvin, and Fahrenheit scales as **exact linear relationships** with constant conversion coefficients independent of the temperature value. Under this assumption, conversion between [[T_K]], [[T_C]], and [[T_F]] is always an affine function (linear with offset), and [[DeltaT]] is the same numerical quantity in both Celsius and kelvin.

This model assumes that the conversion relationships are **exact SI definitions** and that the thermometer used to measure temperature is ideal (it does not alter the state of the measured system, has instantaneous response, and is perfectly linear over its operating range). In secondary and upper secondary laboratory practice, all commonly used thermometers (mercury, alcohol, digital) behave with sufficient linearity for the model to be valid.

## Hypotheses

- **Linearity of scales**: the relationship between any pair of scales (Celsius-kelvin, Celsius-Fahrenheit) is linear with constant coefficients. This assumption is exact by SI definition for Celsius-kelvin. For Fahrenheit it is also exact by historical definition.

- **Invariance of coefficients with temperature**: the factors 273.15, 9/5, and 32 do not depend on the value of [[T_K]], [[T_C]], or [[T_F]]. This is absolutely true because these are definitions, not empirical relationships.

- **Ideal thermometer**: the measuring device does not perturb the system, has no thermal inertia, and its response is instantaneous. In practice, real thermometers have minimal inertia and perturbation, but negligible for most applications.

- **System in thermal equilibrium**: the measured temperature is representative of the whole system, which requires the system to be in internal thermal equilibrium. If there are temperature gradients within the system (an object at different temperatures inside and at its surface), the locally measured temperature may differ from the system average.

## Quantitative validity domain

The conversion relationships are exact by definition for any temperature in the physically realisable range, i.e., [[T_K]] > 0 K. There is no upper validity limit.

For standard laboratory thermometers, precision is of the order of ±0.1 °C for calibrated mercury thermometers and ±0.01 °C for precision digital thermometers. In primary metrology, helium gas thermometers achieve uncertainties of ±0.001 K.

The ideal thermometer model introduces negligible error when the mass of the thermometer is much less than the mass of the measured system (less than 1/100 in calorific ratio). For a 10 g mercury thermometer in a 1-litre water container, the perturbation correction is of the order of 0.001 °C.

## Model failure signals

- **Calculated [[T_K]] negative**: indicates that [[T_C]] entered is below –273.15 °C, violating the physical limit of the model. Impossible in practice; almost always indicates a data error.

- **Celsius-Fahrenheit conversion not giving 32 for [[T_C]] equal to zero**: signal that the +32 term was omitted or the 9/5 factor was applied incorrectly.

- **[[DeltaT]] with opposite sign to the described physical process**: if the problem states the system is heated but [[DeltaT]] is negative, the subtraction order is inverted (initial minus final temperature was calculated instead of final minus initial).

- **Result [[T_K]] equal to [[T_C]]**: indicates that the 273.15 offset was forgotten in the Celsius-kelvin conversion.

## Extended or alternative model

For high-precision metrological applications (primary laboratories, standard calibration), the International Temperature Scale of 1990 (ITS-90) defines temperature through fixed points of pure substances (triple point of water at 273.16 K, etc.) and standard thermometers (platinum resistance thermometer, gas thermometer). This model extends the kelvin scale with higher accuracy in specific ranges.

When temperature is introduced to students at advanced university level, the model is generalised: thermodynamic temperature is defined as the partial derivative of internal energy with respect to entropy at constant volume. This microscopic definition is the basis of statistical mechanics and is independent of any conversion relationship.

When to switch to the extended model: when measurement precision demands uncertainty below 0.01 K, when working at temperatures below 14 K or above 1235 K (where ITS-90 uses radiation thermometers), or when a temperature definition valid for quantum systems out of equilibrium is required.

## Operational comparison

| Criterion | Standard model (linear conversion) | Extended model (ITS-90 or thermodynamic) |
|---|---|---|
| Typical precision | ±0.1 °C to ±0.01 °C depending on thermometer | < ±0.001 K in primary laboratories |
| Calculation complexity | Single arithmetic operation | Requires calibration table and fitting |
| Validity range | Entire physical range (0 K to +∞) | Specific range per standard thermometer |
| Educational level | Secondary, upper secondary, first university year | Advanced metrology, research thermometry |
| Tool | Direct algebraic formula | Calibration curve, ITS-90 table |
