# Applications


## 1. Internal combustion engines

In the expansion stroke of a four-stroke engine, combustion gases push the piston downward, doing mechanical work transmitted to the crankshaft. Work per cycle depends on the mean gas pressure during expansion and the volume swept by the piston, which is the cylinder displacement. Engine engineers optimise the ratio between peak combustion pressure and the expansion profile to maximise [[trabajo_termodinamico]] per cycle.

Dominant variable: ** mean [[presion]] of combustion gases and [[variacion_de_volumen]] of the expansion stroke.

Validity limit: ** isobaric model as a first approximation; in practice pressure varies with volume following a polytropic curve.

## 2. Steam turbines in power plants

In a steam turbine, high-pressure steam expands through the turbine blades, doing work on the rotor. Total work per kilogram of steam is proportional to the integral of pressure over specific volume along the expansion. Modern turbines operate between pressures of tens of MPa and tenths of MPa, with large specific volume changes.

Dominant variable: ** integral ∫p dV along the steam expansion in the turbine.

Validity limit: ** the real process is irreversible due to friction and heat transfer; actual work is less than the ideal isentropic work computed from the integral.

## 3. Breathing and pulmonary ventilation

The diaphragm and intercostal muscles increase the volume of the thoracic cavity, reducing the air pressure in the lungs below atmospheric pressure. This pressure gradient drives air into the lungs, which expand doing work on the airflow. In each breathing cycle, the muscles do mechanical work equivalent to [[presion]]·[[variacion_de_volumen]] to move the tidal volume of air.

Dominant variable: ** difference between alveolar pressure and atmospheric pressure, and the tidal volume breathed.

Validity limit: ** the isobaric process model is a good approximation for quiet breathing; during intense exercise the pressure gradients are larger and the process departs from the ideal case.

## 4. Projectile launching by gas expansion

In firearms, compressed air or high-pressure gas expands behind the projectile, doing work on it and accelerating it through the barrel. Total work done on the projectile is the integral of the gas pressure over the projectile travel, equivalent to the integral ∫p dV of the expanding gas. The kinetic energy of the projectile leaving the barrel approximately equals that work, minus friction losses.

Dominant variable: ** propellant gas pressure as a function of the volume occupied by the gas behind the projectile.

Validity limit: ** highly irreversible and rapid process; the quasi-static model is only a first approximation. Heat losses to the barrel and friction reduce the actual useful work.

## 5. Industrial gas compressors

Compressors use external mechanical work to compress a gas, reducing its volume ([[variacion_de_volumen]] < 0) and increasing its pressure. Work consumed by the compressor is the work the piston does on the gas, which in the physics convention is negative (work is done on the system). In industrial practice, compressors are characterised by their specific work (work per kg of compressed gas), which determines energy consumption and motor sizing.

Dominant variable: ** integral ∫p dV along the compression process, with negative [[variacion_de_volumen]].

Validity limit: ** the isothermal model (theoretical minimum compression work) and the adiabatic model (maximum heating) bracket the real behaviour of compressors. Inter-stage cooling (multi-stage compression) moves the process towards the isothermal case and reduces consumed work.

## 6. Weather balloons and stratospheric probes

Weather balloons ascend from sea level to altitudes of 30–40 km, where atmospheric [[presion]] falls from roughly 10⁵ Pa to less than 10³ Pa. As the balloon rises, the gas inside expands because the external pressure continuously decreases. The [[trabajo_termodinamico]] done by the gas throughout the ascent equals the mechanical energy invested in inflating the balloon against the decreasing atmospheric pressure. This work is the integral of the external [[presion]] over the [[variacion_de_volumen]] of the balloon, which can grow to nearly 100 times its initial [[volumen]] before bursting at peak altitude. This large expansion is what allows the balloon to carry instrument payloads to the stratosphere for meteorological and atmospheric research. The [[trabajo_termodinamico]] done during the ascent quantifies precisely how much energy the gas must supply to push back the atmosphere and create space for the growing balloon.

Dominant variable: ** [[variacion_de_volumen]] of the balloon throughout the ascent, from the initial [[volumen]] on the ground to the maximum [[volumen]] before burst; [[presion]] decreases approximately exponentially with altitude following the standard atmospheric profile, so the [[trabajo_termodinamico]] integral must account for a strongly varying pressure.

Validity limit: ** the isobaric model is a valid first approximation only over short ascent segments where [[presion]] changes little; a rigorous calculation requires integrating p(V) along the full ascent trajectory using the international standard atmosphere pressure profile. Rapid ascent rates can introduce additional irreversibilities that cause actual work to differ from the quasi-static integral, and real latex balloons also deform non-uniformly, making the effective pressure non-uniform across the balloon surface.
