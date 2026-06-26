# Pitot Tube - Guided Examples

This leaf uses two core formulas in sequence. The first organizes the pressure reading, and the second converts that reading into fluid speed. The examples below are built precisely around that logic: first read the pressure difference correctly, then interpret the speed represented by that difference.

# Exam-type example

## Problem statement
A Pitot-static probe installed on a light aircraft reads a stagnation pressure of 101770 Pa and a static pressure of 101325 Pa. Air density at the flight condition may be taken as 1.225 kg/m3. Compute the indicated speed in m/s and in km/h, and justify whether the incompressible model of the leaf is appropriate.

## Data
- Stagnation pressure: 101770 Pa
- Static pressure: 101325 Pa
- Air density: 1.225 kg/m3

## System definition
We model the streamline that reaches the probe. The target quantity is the aircraft-relative airspeed, but the instrument does not measure speed directly. It measures two pressures: a frontal reading associated with stagnation and a lateral reading associated with the undisturbed local flow.

## Physical model
The leaf first uses the pressure-difference relation from the two instrument readings, and then uses the speed relation to convert that pressure difference into speed:

{{f:delta_pitot}}

{{f:velocidad_pitot}}

## Model justification
The physical justification is straightforward. This is a light-aircraft case with a moderate pressure reading, so the expected speed is far below the range where air compressibility dominates. The statement does not involve shock waves, transonic motion, or severe probe misalignment. It describes a standard operational reading, which makes the incompressible Pitot model the correct first tool.

## Symbolic solution
First construct the pressure difference from [[p_t]] and [[p]].

Then apply the speed relation with [[dp]] and [[rho]].

Combining both gives speed from the difference between total and static pressure.

## Numerical substitution
First compute the pressure difference: [[dp]] = 445 Pa.

Now compute speed from [[dp]] and [[rho]]: [[v]] ≈ 26.95 m/s.

Convert to transport units: [[v]] ≈ 97.0 km/h.

## Dimensional validation

Pressure divided by density yields units equivalent to m^2/s^2. Taking the square root returns m/s, so the formula is dimensionally consistent.

## Physical interpretation
The result means more than "the aircraft is flying at about 97 km/h." It means the incoming air carries enough kinetic energy to create an extra frontal pressure of 445 Pa when brought to rest at the probe tip. That extra pressure is the mechanical fingerprint of the relative motion between aircraft and air.

The scale also matters physically. This is not an extreme speed; it is fully compatible with a light aircraft. That supports the modeling choice. If the result had been of the order of several hundred meters per second, the algebra might still look valid, but the physical reading would change and compressibility would need to be checked explicitly.

The key lesson is that a Pitot probe does not "see speed" directly. It sees the pressure change created by stagnation and reconstructs speed from that energetic effect. The instrument is therefore a pressure-based reader of motion, not a geometric tracker.

---

# Real-world example

## Context
In an industrial ventilation duct, a Pitot tube is connected to a water differential manometer. The duct cross-sectional area is 0.1257 m2. The manometer shows a water-column height of 32 mm. Air density in the duct may be taken as 1.20 kg/m3. Estimate the pressure difference, air speed, and volumetric flow rate.

## Physical estimation
Here the primary reading is not a direct pressure difference but a manometric height. Therefore the first quantitative step is to reconstruct [[dp]] before applying the speed relation.

The equivalent pressure difference is obtained from the hydrostatic relation and gives approximately [[dp]] = 313.9 Pa.

Now apply the core Pitot speed formula:

{{f:velocidad_pitot}}

With that difference, the estimated speed is [[v]] ≈ 22.9 m/s.

The corresponding volumetric flow rate is Q ≈ 2.88 m^3/s.

This estimate already has a clear physical scale: a rather short water column corresponds to a fast and industrially relevant airflow inside the duct.

## Interpretation
The interpretation should not stop at the flow-rate number. The important point is that a small water-column height can represent a pressure difference large enough to correspond to air moving at tens of meters per second. That is possible because the manometer fluid is much denser than the air being measured, so a short liquid displacement can encode a meaningful aerodynamic pressure difference.

It is also essential to separate the roles of the two densities. Water density is used to convert height into pressure difference. Air density is used to convert pressure difference into speed. If those densities were mixed, the final speed would be badly misread. This is not a minor numerical issue; it is a physical interpretation error about what each part of the setup is actually measuring.

From an engineering perspective, the result shows why the Pitot principle is so useful outside aviation. With a simple pressure reading and a careful model interpretation, one obtains a practical first estimate of duct flow rate without moving mechanical parts.