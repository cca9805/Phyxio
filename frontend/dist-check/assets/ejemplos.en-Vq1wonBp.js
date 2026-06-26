const e=`# Exam-type example

## Problem statement

A cylinder with a free piston contains 2 mol of nitrogen gas (diatomic ideal gas) at constant pressure of \\(2.00 \\times 10^5\\) Pa. Initial temperature [[T1]] is 300 K, initial volume [[V1]] is 24.94 L. The gas is heated at constant pressure until [[T2]] reaches 450 K. Find [[V2]], [[DeltaV]], [[W]], [[DeltaU]], [[Q]], and verify the energy balance.

## Data

- [[p]] of \\(2.00 \\times 10^5\\) Pa (constant)
- 2 mol of gas ; \\(C_V\\) takes the value \\(\\frac{5}{2}R\\) ; \\(C_p\\) takes the value \\(\\frac{7}{2}R\\)
- [[T1]] of 300 K ; [[V1]] of 24.94 L, equivalent to \\(24.94 \\times 10^{-3}\\) m³
- [[T2]] of 450 K (final state)

## System definition

The system is the nitrogen gas enclosed between the cylinder walls and the free piston. The walls are diathermal (heat exchange allowed). The piston moves without friction, keeping gas pressure equal to external pressure at all times.

## Physical model

The model is **ideal gas undergoing a quasi-static isobaric process**. The central magnitude is constant [[p]], while [[V1]] → [[V2]] and [[T1]] → [[T2]] evolve. Work is given by

{{f:trabajo_isobarico}}

and the volume-temperature relation by

{{f:ley_gay_lussac}}

## Model justification

The ideal gas model holds at this pressure (0.2 MPa ≪ 10 MPa) and these temperatures (300–450 K, well above nitrogen's liquefaction point at ~77 K). The quasi-static assumption is justified because the piston moves slowly and internal pressure remains uniform. If pressure varied or the process were abrupt, the isobaric model would break down and a polytropic description would be needed.

## Symbolic solution

**Final volume**: from Gay-Lussac's law, [[V2]] is obtained by multiplying [[V1]] by the ratio [[T2]] / [[T1]].

**Volume change**: [[DeltaV]] is the difference [[V2]] minus [[V1]].

**Work**: [[W]] is obtained by multiplying [[p]] by [[DeltaV]].

**Internal energy**: for ideal gas, [[DeltaU]] is obtained by multiplying \\(n C_V\\) by [[DeltaT]].

**Heat**: from

{{f:primer_principio_isobarico}}

one obtains [[Q]] as the sum of [[DeltaU]] and [[W]].

## Numerical substitution

Final volume: multiplying 24.94 L by the ratio 450/300 = 1.5 gives 37.41 L. Therefore [[V2]] ≈ 37.41 L.

Volume change: subtracting 24.94 L from 37.41 L gives 12.47 L, equivalent to \\(12.47 \\times 10^{-3}\\) m³. Therefore [[DeltaV]] is approximately \\(+12.47 \\times 10^{-3}\\) m³ (expansion).

Work: multiplying \\(2.00 \\times 10^5\\) Pa by \\(12.47 \\times 10^{-3}\\) m³ gives approximately 2494 J. Therefore [[W]] ≈ 2494 J.

Temperature change: [[DeltaT]] is 450 − 300 = 150 K.

Internal energy: multiplying 2 mol by \\(\\frac{5}{2} \\times 8.314\\) J/(mol·K) by 150 K gives approximately 6236 J. Therefore [[DeltaU]] ≈ 6236 J.

Heat: adding 6236 J and 2494 J gives 8730 J. Therefore [[Q]] ≈ 8730 J.

## Dimensional validation

- Work: \`[Pa] · [m³]\` = \`[N m⁻²] · [m³]\` = \`[N·m]\` = \`[J]\` ✓ → \`[M L² T⁻²]\`
- Internal energy: \`[mol] · [J mol⁻¹ K⁻¹] · [K]\` = \`[J]\` ✓ → \`[M L² T⁻²]\`
- Balance: \`[J]\` = \`[J]\` + \`[J]\` ✓

## Physical interpretation

The nitrogen absorbed 8.73 kJ of heat from its surroundings. Of that total, **2.49 kJ converted to mechanical work** (piston displacement) and **6.24 kJ remained stored as higher molecular kinetic energy** (higher temperature). The ratio [[W]]/[[Q]] (2494/8730, approximately 28.6%) is fixed for any diatomic ideal gas in an isobaric process, equal to the quotient \\(R/C_p\\).

If [[p]] were doubled (to \\(4 \\times 10^5\\) Pa) with the same [[DeltaT]], [[W]] would double but [[DeltaU]] would remain unchanged, because internal energy of an ideal gas depends only on [[DeltaT]], not on [[p]]. This means that at higher working pressure, more total heat [[Q]] must be supplied to achieve the same temperature rise.

In the pV diagram, the process is a horizontal line at \\(2 \\times 10^5\\) Pa. The rectangle below that line — base [[DeltaV]] of \\(12.47 \\times 10^{-3}\\) m³, height [[p]] of \\(2 \\times 10^5\\) Pa — has area exactly [[W]] of 2494 J. This geometry makes it clear that the isobaric process produces more work than the adiabatic between the same volume states, because in the adiabatic process pressure falls as the gas expands.

# Real-world example

## Context

In a forced-air heating system, air flows at constant atmospheric pressure (approximately \\(10^5\\) Pa) through an electric heat exchanger. The mass flow rate is 0.5 kg/s and air temperature rises from [[T1]] (290 K) to [[T2]] (320 K). The task is to estimate the required heating power using the isobaric model.

## Physical estimation

For dry air (diatomic gas, \\(C_p\\) ≈ 1005 J/(kg·K)), the heat required per unit time is the product of mass flow rate, specific heat capacity at constant pressure, and temperature rise. Multiplying 0.5 kg/s by 1005 J/(kg·K) by 30 K gives approximately 15 075 W. Therefore [[Q]] ≈ 15 kW of heating power.

The associated expansion work is far smaller: the term [[W]] (product [[p]] times [[DeltaV]]) in flow terms represents only the quotient \\(R/C_p\\) of total power (approximately 28.6% for a diatomic ideal gas). The remaining fraction ([[DeltaU]] ≈ 71.4%) effectively heats the air.

> [!NOTE]
> At building scale, a 1 K difference in [[T2]] changes the required power by about 503 W. The isobaric model allows precise thermostat tuning directly proportional to [[DeltaT]].

## Interpretation

The isobaric model is the natural choice here because duct pressure is held constant by design. [[DeltaU]] gives the heat actually deposited in the air (raising its temperature), while [[W]] represents the small dilatation work as air passes through the exchanger. The dominant variable is [[DeltaT]]: multiplying it by mass flow and \\(C_p\\) directly yields power, with no need to track volume or density instantaneously.

The model's validity limit is pressure uniformity: if the installation operated with significant pressure differentials (high-power fans in sealed ducts), the process would no longer be strictly isobaric and the pumping work contribution would need to be added. In standard domestic ventilation that term is below 1% of [[Q]] and can safely be neglected.
`;export{e as default};
