const e=`## Conceptual errors

### Error 1: Believing temperature measures the speed of a specific molecule

**Why it seems correct**

The student associates "higher temperature" with "faster molecules" and generalizes that relationship to each individual particle. It is an analogy with collective quantities like group speed: if the group is "faster," each member is too. The confusion arises from not distinguishing between a statistical average quantity and an individual quantity.

**Why it is incorrect**

Temperature is tied to the **statistical mean** of the translational kinetic energy of all molecules, not to the speed of any single one. In a gas at 300 K there are molecules nearly at rest and others moving ten times faster than [[v_rms]]. The Maxwell–Boltzmann distribution is continuous and asymmetric; [[T]] only sets its characteristic scale. Saying "at higher temperature every molecule moves faster" is an oversimplification that fails when reasoning about fluctuations, effusion or atmospheric escape.

**Detection signal**

The student claims that "at 300 K all molecules move at 515 m/s" or calculates the kinetic energy of a specific molecule using [[v_rms]] directly as if it were that molecule's actual speed.

**Conceptual correction**

[[v_rms]] is the root of the mean squared speeds: a representative value for the ensemble, not the speed of any individual molecule. The real distribution has a statistical shape: most molecules are near [[v_rms]], but a fraction deviates considerably in both directions.

**Contrasting mini-example**

If every nitrogen molecule had exactly 515 m/s, no atmosphere would experience gas escape on any planet. Yet Titan retains nitrogen despite its low gravity because the tail of its Maxwell–Boltzmann distribution does not exceed the moon's escape velocity. The "uniform speed" reasoning cannot predict this result.

---

### Error 2: Confusing heat with temperature in the kinetic context

**Why it seems correct**

In everyday language "hotter" and "higher temperature" seem synonymous. The student carries this colloquial usage into physics and assumes higher [[T]] means the gas "contains more heat," as if heat were a stored property like internal energy.

**Why it is incorrect**

Heat is energy **in transit**, not a property of the gas. A gas can have high [[E_k_mol]] (and therefore high [[T]]) but only transfers heat when it is in contact with another system at a different temperature. Two different gases at the same [[T]] can have very different total internal energies if they differ in number of molecules or active degrees of freedom. Kinetic theory clarifies that [[T]] measures energy per molecule, while total internal energy also depends on [[N]].

**Detection signal**

The student says "the hot gas contains more heat" or that "adding heat always raises temperature," forgetting isothermal phase changes.

**Conceptual correction**

Temperature [[T]] is proportional to [[E_k_mol]] per molecule; heat is what is transferred when [[T]] differs between two systems. A gas can absorb heat at constant [[T]] during a phase change because the energy goes into breaking intermolecular bonds, not into accelerating molecules.

**Contrasting mini-example**

When water boils at 100 °C, heat can be added for minutes without the temperature rising. If temperature and heat were the same, adding heat would always raise [[T]]. This directly contradicts the basic experimental observation of phase transitions.

---

## Model errors

### Error 1: Applying the ideal kinetic model to real gases at high pressure

**Why it seems correct**

The student has seen the ideal kinetic model in class as valid for any gas and applies it mechanically without checking conditions. The kinetic pressure equation looks so clean and universal that it seems applicable in all cases.

**Why it is incorrect**

The ideal model assumes point-like molecules without interactions. At pressures above several MPa, the molecular own volume represents a non-negligible fraction of the total volume, and Van der Waals attractive forces reduce the effective pressure. Using the ideal kinetic formula in those conditions produces [[P]] values that can deviate from reality by several percent, unacceptable in engineering applications.

**Detection signal**

The student calculates [[P]] for a high-pressure gas using the ideal kinetic formula and gets a value higher than the experimental measurement, especially at low temperatures where attractive interactions are more relevant.

**Conceptual correction**

The ideal kinetic model is a first-order approximation valid at low pressures and moderate temperatures. When pressure exceeds one million pascals or temperature approaches the critical point of the gas, the Van der Waals model or another complete equation of state must be used.

**Contrasting mini-example**

For carbon dioxide at 300 K and 7 MPa (near its critical point, 7.38 MPa), the ideal model predicts a molar volume of approximately 3.5 liters per mole, while the experimental value is about 1.5 liters per mole. The relative error exceeds 100 %, making clear that the ideal model is inapplicable under those conditions.

---

### Error 2: Including rotational degrees of freedom in the mean kinetic energy formula

**Why it seems correct**

The student has seen in thermodynamics that the internal energy of a diatomic gas is higher than that of a monatomic gas, and assumes that the [[E_k_mol]] formula in this leaf already incorporates that difference. The student confuses the translational expression with the total expression for polyatomic gases.

**Why it is incorrect**

The [[E_k_mol]] formula proportional to [[T]] that appears in this leaf applies **exclusively** to the three translational degrees of freedom, valid for all gases. Rotational degrees add extra energy in diatomic and polyatomic gases, but that contribution does not alter [[v_rms]] (which depends only on translation) or the kinetic pressure, which is also purely translational.

**Detection signal**

The student uses a coefficient other than three halves for the mean translational energy of a monatomic gas, or applies the constant-volume heat capacity of a diatomic gas inside the [[E_k_mol]] formula.

**Conceptual correction**

The mean kinetic energy expression in this leaf only counts translation: it is always proportional to three halves times [[k_B]] times [[T]], regardless of gas type. Rotational degrees increase the **total internal energy**, but do not change the [[v_rms]] expression or the kinetic [[P]] formula.

**Contrasting mini-example**

Two gases — monatomic argon and diatomic nitrogen — at the same [[T]] have exactly the same translational [[E_k_mol]] and therefore the same [[v_rms]] if they share the same molecular mass. The difference between them does not appear in [[v_rms]] but in the constant-volume heat capacity, which includes rotational degrees.

---

## Mathematical errors

### Error 1: Using temperature in Celsius instead of kelvin

**Why it seems correct**

The student is accustomed to measuring temperature in Celsius in everyday life and in many earlier heat and temperature problems. The habit of writing "temperature of 20 degrees" without specifying the scale leads to directly substituting that value into the [[v_rms]] formula without converting.

**Why it is incorrect**

The formulas for [[v_rms]] and [[E_k_mol]] use [[T]] in kelvin because they are derived from **absolute** kinetic energy. The Celsius zero is arbitrary (the melting point of water at standard pressure), while absolute zero corresponds to zero kinetic energy. Using Celsius can produce negative results (for sub-zero temperatures) or values off by up to 10 % at room temperature.

**Detection signal**

The student substitutes 20 instead of 293 K in the [[v_rms]] formula, obtaining a speed noticeably lower than the correct value. If the Celsius temperature is below zero, the error produces the square root of a negative number, an immediate indicator of the problem.

**Conceptual correction**

Always convert: add 273.15 to the Celsius temperature to obtain the value in kelvin before substituting into any kinetic theory formula.

**Contrasting mini-example**

A problem asks for [[v_rms]] of nitrogen at 27 °C. With Celsius, the result would be the square root of a value about fourteen times smaller than correct, giving a speed around 138 m/s instead of the correct 515 m/s. The error exceeds a factor of three, completely undetectable without the reference order of magnitude.

---

### Error 2: Using molar mass instead of molecular mass

**Why it seems correct**

In ideal gas and stoichiometry problems, the student routinely works with molar masses in g/mol or kg/mol. When reaching kinetic theory, the same quantity is used without noticing that the [[v_rms]] formula requires the mass of **one single molecule**, not of a mole.

**Why it is incorrect**

The kinetic formula operates at the molecular scale: every term describes one molecule. Molar mass in kg/mol is the mass of approximately 602 thousand trillion molecules. Using that value in the [[v_rms]] formula produces speeds thousands of times smaller than reality, directly contradicting observed orders of magnitude.

**Detection signal**

The student obtains speeds of the order of 0.01 m/s for gases at room temperature, or calculates [[E_k_mol]] with a value in joules corresponding to the energy of an entire mole, not a single molecule.

**Conceptual correction**

Divide the molar mass in kg/mol by Avogadro's number (approximately 6.022 × 10²³ molecules per mole) to obtain [[m_mol]] in kg per molecule before substituting into the [[v_rms]] formula.

**Contrasting mini-example**

For nitrogen, the molar mass is approximately 0.028 kg/mol. The mass of one molecule is approximately 4.65 × 10⁻²⁶ kg. Using the molar mass in the [[v_rms]] formula at 300 K would yield a result of about 0.58 m/s, absurdly lower than the correct 515 m/s.

---

## Interpretation errors

### Error 1: Believing that compressing a gas at fixed temperature increases molecular speed

**Why it seems correct**

The student observes that compressing a gas increases its pressure and recalls that [[P]] depends on [[v_rms]]. The erroneous conclusion is that compression must have accelerated the molecules. The confusion lies in not distinguishing between an increase in collision frequency and an increase in individual molecular speed.

**Why it is incorrect**

At constant temperature (isothermal process), [[T]] does not change, and therefore [[E_k_mol]] and [[v_rms]] do not change either. Pressure increases because there are more molecules per unit volume when compressed: the **number density** increases, raising the collision frequency per unit area, but the speed of each individual collision remains the same.

**Detection signal**

The student explains the pressure increase in an isothermal compression by saying "the molecules move faster," instead of saying "there are more molecules per unit volume."

**Conceptual correction**

Molecular speed [[v_rms]] only changes with [[T]], not with [[V]]. Kinetic pressure depends on [[v_rms]] squared but also on the ratio [[N]] to [[V]]: compression lowers [[V]] while keeping [[N]] constant, increasing molecular density and thus pressure, without touching the speeds.

**Contrasting mini-example**

If the volume of a gas is halved at constant temperature, pressure doubles (Boyle's law). If the molecules had accelerated, [[E_k_mol]] would have increased and so would temperature, contradicting the isothermal hypothesis. Speed has not changed; only the collision density has increased.

---

## Quick self-control rule

Before accepting any kinetic theory result, check three points.

First, **temperature units**: temperature must be in kelvin. If [[v_rms]] is below 100 m/s for a common gas at room temperature, Celsius was almost certainly used instead of kelvin.

Second, **molecular mass scale**: [[m_mol]] must be between 10⁻²⁷ and 10⁻²⁵ kg for typical gases. A value in the gram or kilogram range indicates molar mass was used instead of mass per molecule.

Third, **consistency between quantities**: [[E_k_mol]] must be proportional to [[T]] with the fixed factor of three halves times [[k_B]]. If [[E_k_mol]] and [[v_rms]] are calculated separately, half of [[m_mol]] times [[v_rms]] squared must match [[E_k_mol]] within rounding error. A discrepancy larger than 1 % signals a calculation or unit error.
`;export{e as default};
