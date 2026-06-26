const e=`# Applications of the Adiabatic Process\r
\r
## 1. Diesel engine: ignition by adiabatic compression\r
\r
In a diesel engine, air is compressed in the cylinder with a compression ratio of between 15:1 and 22:1. The compression process is so rapid that it can be treated as essentially adiabatic. Air enters at ambient temperature (about 300 K) and, after adiabatic compression, its temperature rises to 750–900 K. That temperature is sufficient to ignite the injected diesel fuel without a spark plug.\r
\r
Dominant variable: [[T2]], because ignition requires exceeding the fuel self-ignition temperature (about 500–550 °C for diesel).\r
\r
Validity limit: The adiabatic model fails if compression is slow (heat has time to transfer to cylinder walls) or if wall cooling is so effective that gas temperature does not rise enough. In very small engines, the surface-to-volume ratio of the cylinder is larger and heat losses are more significant.\r
\r
The value of [[gamma]] for air (1.40) directly determines the achievable ignition temperature. If a gas with lower [[gamma]], such as water vapour, were used, adiabatic compression would produce less heating and the diesel engine would not work with that gas. Engine design is based on the relationship between [[gamma]], the compression ratio and the [[T2]] provided by the adiabatic formula.\r
\r
## 2. Dry adiabatic lapse rate in the atmosphere\r
\r
When an air mass rises in the atmosphere, its pressure decreases because atmospheric pressure falls with altitude. The ascent process is fast enough to be treated as adiabatic: the air does not have time to exchange heat with its surroundings. For this reason, rising air temperature falls with altitude following the dry adiabatic lapse rate, approximately 9.8 K per kilometre of ascent.\r
\r
Dominant variable: [[DeltaT_ad]], because it determines whether an air mass is denser or less dense than the surrounding air and therefore whether vertical motion is stable or unstable.\r
\r
Validity limit: The dry adiabatic lapse rate applies only to unsaturated air without water vapour condensation. If the air saturates and vapour condenses, condensation releases latent heat and the actual cooling is less (moist adiabatic lapse rate, about 6 K/km). Also, in the stratosphere temperature increases with altitude, which reverses the instability condition.\r
\r
This principle is essential in meteorology for predicting cloud formation, atmospheric stability and the generation of convective winds. Severe thunderstorms occur when the actual temperature gradient exceeds the adiabatic one, creating instability where air accelerates upward.\r
\r
## 3. Refrigeration by adiabatic expansion in Joule-Thomson cycles and turboexpanders\r
\r
In the industrial production of liquefied nitrogen, oxygen and other cryogenic gases, compressed gas expands adiabatically through a turbine or expander. Gas temperature falls during this expansion, following the adiabatic relation, and eventually the gas can reach temperatures below its liquefaction point.\r
\r
Dominant variable: [[T2]], because the goal of the process is to reduce gas temperature to the liquefaction or cryogenic storage range.\r
\r
Validity limit: Near the critical point of the gas, the ideal-gas model with constant [[gamma]] is no longer accurate and thermodynamic property tables are needed. Also, the Joule-Thomson process (through a valve, not a turbine) is irreversible and does not follow the reversible adiabatic law exactly.\r
\r
The efficiency of a liquefaction cycle depends on how many kelvin of temperature drop are achieved per joule of compression work invested. The larger [[gamma]] and the larger the expansion ratio, the greater the drop in [[T2]], which allows more efficient cycles with fewer compression stages to be designed.\r
\r
## 4. Brayton cycle: basis of the jet engine and gas turbine\r
\r
The Brayton cycle, which describes the operation of jet engines, gas turbines and turbojets, includes two adiabatic processes: compression in the compressor and expansion in the turbine. In the compressor, air is compressed adiabatically and its temperature rises. In the turbine, combustion gases expand adiabatically, producing the mechanical work that propels the aircraft or generates electricity.\r
\r
Dominant variable: [[W]], because the difference between work produced in the turbine and work consumed in the compressor determines the net power output of the cycle.\r
\r
Validity limit: In practice, the processes are neither perfectly adiabatic nor reversible. The isentropic efficiency of the compressor and turbine measures the deviation from the ideal adiabatic process and is typically between 0.80 and 0.92 in well-designed machines. Losses from friction, turbulence and heat transfer reduce actual efficiency.\r
\r
Adiabatic analysis of the Brayton cycle allows calculation of the combustion chamber inlet temperature, the optimal compression ratio and exhaust gas temperature. All these parameters are critical for the structural design of engine materials, which must withstand the temperatures resulting from adiabatic compression.\r
\r
## 5. Sound in a gas: adiabatic propagation of pressure waves\r
\r
The speed of sound in a gas depends on [[gamma]] precisely because sound waves compress and expand the gas adiabatically. Newton calculated the speed of sound assuming isothermality and obtained a value about 20% below the actual value. Laplace corrected the calculation by recognising that pressure oscillations are too fast for significant heat transfer, so the process is adiabatic, not isothermal.\r
\r
Dominant variable: [[gamma]], because the speed of sound in an ideal gas is proportional to the square root of [[gamma]] divided by density.\r
\r
Validity limit: For very low frequencies (slow infrasound) or in highly thermally conductive media, oscillations may be partially isothermal and effective [[gamma]] approaches 1. At very high ultrasonic frequencies, the local equilibrium assumption may fail and the speed of sound may depend on frequency (dispersion).\r
\r
This application shows that the adiabatic process is not just an extreme laboratory case: it is the natural regime of any rapid mechanical perturbation in a gas. Meteorology, underwater acoustics, medical ultrasound diagnostics and the design of wind instruments all depend on the correct adiabatic description of pressure oscillations.\r
`;export{e as default};
