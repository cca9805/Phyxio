const e=`## 1. Design of isotope separators for uranium enrichment

The separation of uranium isotopes for nuclear fuel relies on the difference in [[v_rms]] between molecules of uranium-235 hexafluoride and uranium-238 hexafluoride. Although both compounds have very similar molar masses (349 and 352 g/mol respectively), kinetic theory predicts that at the same [[T]] their root mean square speeds differ by a factor of approximately 1.004. This multiplicative factor is tiny, but it is sufficient for the lighter isotope to be progressively concentrated in the advancing stream through thousands of gaseous diffusion cascade stages. The design of each cell requires precise calculation of mass flow as a function of [[v_rms]], [[T]] and the orifice geometry.

Dominant variable: [[m_mol]] (the mass difference between isotopes controls the per-stage separation factor).

Validity limit: the ideal kinetic model applies because gaseous uranium hexafluoride at working pressures (a few kPa) is well below its critical pressure. At pressures above 150 kPa or temperatures below 340 K the gas begins to condense and the model fails.

---

## 2. Prediction of the speed of sound in gases

The speed of sound in an ideal gas is proportional to [[v_rms]]: it depends on the square root of [[T]] divided by [[m_mol]] multiplied by a factor involving the specific heat ratio. For the design of wind instruments, condenser microphones and ultrasonic temperature sensors, knowing how sound speed varies with [[T]] and gas composition is essential. When helium and nitrogen are mixed (as in medical anesthesia with helium-oxygen blends), the resulting [[v_rms]] changes appreciably and with it the speed of sound, affecting the patient's voice quality.

Dominant variable: [[T]] (sound speed varies with the square root of [[T]], readily detected in remote temperature sensing applications).

Validity limit: the ideal kinetic model is valid for gases at atmospheric pressure between 200 K and 1500 K. Above 1500 K in diatomic gases, vibrational degrees of freedom activate and the adiabatic coefficient changes, introducing corrections that the simple kinetic model does not capture.

---

## 3. Selection of refrigerant gases in cryogenic systems

In the liquefaction of industrial gases (nitrogen, argon, oxygen), the Joule–Thomson expansion process exploits deviations from ideal behavior to cool the gas. The starting point of the analysis is always the initial [[T]], which determines the [[v_rms]] of the gas and the mean kinetic energy [[E_k_mol]] to be extracted. Process engineers use kinetic theory to estimate what minimum pre-cooling [[T]] is required before expansion for the Joule–Thomson effect to produce cooling rather than heating (the effect reverses sign above the Joule–Thomson inversion temperature). For nitrogen, that inversion temperature is approximately 620 K at atmospheric pressure.

Dominant variable: [[T]] (the inlet temperature to the heat exchanger determines whether the gas cools or heats upon expansion).

Validity limit: the ideal kinetic model only predicts the qualitative direction of the effect. For precise quantitative calculations of inversion temperature, the Van der Waals model or more complex equations of state are required. The ideal model is inapplicable for gases near or below the critical point.

---

## 4. Estimation of helium leakage in meteorological balloons

Helium balloons used in meteorology gradually lose gas through effusion through the balloon material. The effusion rate is proportional to [[v_rms]] of helium, which at 20 °C is approximately 1350 m/s, much greater than that of nitrogen (515 m/s) or argon (430 m/s). This is why helium escapes much faster than other gases through the pores of latex. Meteorological balloon manufacturers must estimate the inflated balloon's lifetime by calculating the effusion rate as a function of [[m_mol]], [[T]] and the average pore size of the material, deriving that calculation directly from Graham's law, which is itself a direct consequence of kinetic theory.

Dominant variable: [[m_mol]] (molecular mass inversely controls the effusion rate: a lower-mass gas escapes faster at the same temperature).

Validity limit: kinetic effusion law is valid when the mean free path of molecules is greater than the pore diameter. For pores larger than 1 mm, the flow is viscous (not effusive) and kinetic [[v_rms]] no longer governs the leakage rate.

---

## 5. Analysis of the exosphere layer in planetology

In a planet's exosphere (the outermost atmospheric region where molecules no longer collide with each other), particles move in independent ballistic trajectories. A fraction of those molecules has speeds exceeding the planet's gravitational escape velocity. Kinetic theory allows calculating what fraction of the gas present in the exosphere exceeds escape velocity as a function of [[T]] and [[m_mol]]. This calculation is fundamental to understanding why Earth retains nitrogen and oxygen but not free hydrogen (whose [[v_rms]] at 1000 K in the exosphere approaches 5000 m/s, already close to Earth's escape velocity of 11 200 m/s), while Mars, with lower gravity and a thinner atmosphere, has lost much of its original atmosphere over billions of years.

Dominant variable: [[v_rms]] (directly linked to [[T]] and [[m_mol]]; the high-speed tail of the Maxwell–Boltzmann distribution determines the long-term atmospheric escape rate).

Validity limit: this analysis assumes that the velocity distribution in the exosphere is the equilibrium Maxwell–Boltzmann distribution, which is an approximation. In the real exosphere, the distribution is truncated at the escape velocity because the fastest molecules have already escaped; the equilibrium kinetic model slightly overestimates the escape rate.
`;export{e as default};
