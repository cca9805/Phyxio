# Bernoulli Equation — Applications

## 1. Velocity measurement with Pitot tube

The Bernoulli equation between the free-stream point and the stagnation point of the Pitot tube allows the fluid velocity to be calculated from the measured pressure difference:

{{f:head}}

where the difference between stagnation pressure and static pressure is interpreted as conversion between pressure energy and kinetic energy, using known density [[rho]].

- **Dominant variable:** fluid velocity [[v]] (m/s).
- **Validity limit:** Ma < 0.3; steady and uniform flow at the tube cross-section. For compressible gases the Rayleigh-Pitot correction is required.
- Industrial application: aeronautics (airspeed indicator), hydraulic metrology, industrial ventilation control.

The Pitot tube is the simplest direct velocity measurement tool for moving fluids. Its modern counterpart, the ultrasonic Doppler anemometer, operates on the same fundamental principle but without moving parts or clogging risk. In actual flight conditions, the measured dynamic pressure [[q]] also allows calculation of aerodynamic loading on wing surfaces. Pitot-static systems aboard modern aircraft combine the Pitot tube with a static port to compute true airspeed, vertical speed, and barometric altitude simultaneously from a single set of pressure readings.

## 2. Venturi effect and flow measurement

A Venturi tube uses a reduction in cross-sectional area to accelerate the fluid and generate a measurable pressure drop. Applying Bernoulli and continuity between the wide section A_1 and the throat A_2:

{{f:head}}

- **Dominant variable:** volumetric flow rate Q (m³/s).
- **Validity limit:** incompressible fluid, steady flow, Re > 10^5 to keep discharge coefficient close to design values; not applicable to highly viscous fluids or very low flow rates.
- Industrial application: flow meters in refineries, water treatment plants, and natural gas systems.

The discharge coefficient is typically around 0.96 to 0.99 and accounts for real friction losses at the throat. Venturi tube design requires a small downstream divergence angle of approximately 7 to 15 degrees to prevent boundary layer separation, which would increase energy losses and reduce metering accuracy. Venturi tubes are preferred over orifice plates in large-diameter pipes or wherever permanent pressure loss must be minimized, such as main water supply lines and natural gas transmission pipelines.

## 3. Torricelli's Theorem — Tank drainage

For an open tank with a wall orifice at depth h below the free surface, simplified Bernoulli gives the drainage velocity:

{{f:head}}

- **Dominant variable:** height [[z]] (m) of the water column above the orifice.
- **Validity limit:** tank large enough that surface velocity is negligible; identical pressure at surface and orifice (both at atmosphere). For orifices with vena contracta profile, a typical contraction coefficient near 0.64 applies.
- Practical application: gate design, grain silo drainage, fire suppression systems.

The total emptying time of a constant-section tank depends on tank area, orifice area, and initial head. This result, derived by integrating continuity together with Torricelli's reasoning, is fundamental for sizing industrial storage vessels and emergency discharge systems. In practice, the actual exit velocity is corrected with an empirical velocity coefficient to account for viscous losses near the orifice edge.

## 4. Aerodynamics of airfoils — Wing lift

The velocity difference between the upper stream (higher velocity) and lower stream (lower velocity) of an airfoil generates a pressure difference that produces the lift force. Bernoulli shows:

{{f:q_dinamica}}

The lift force per unit wing span follows from pressure difference between upper and lower surfaces and the airfoil chord.

- **Dominant variable:** velocity difference between upper and lower surfaces of the airfoil.
- **Validity limit:** subsonic flow (Ma < 0.8 for thin airfoils); irrotational inviscid model (potential theory). Viscous and boundary layer separation effects are modeled separately. Does not apply beyond the stall angle of attack.
- Industrial application: wing profile design, wind and hydraulic turbine blades, fan design.

In aeronautical design practice, Bernoulli describes the pressure condition but the full quantitative prediction of lift requires also the Kutta-Joukowski circulation theorem and panel methods. Nevertheless, for order-of-magnitude estimates of lift force in subsonic flow, the Bernoulli approach is practically useful and pedagogically transparent. Modern computational fluid dynamics (CFD) builds on the same conservation principles but resolves viscous and turbulent effects numerically.

## 5. Domestic pipe network — Tap pressure

In a domestic network, the available pressure at an upper-floor tap is lower than at the ground floor. Bernoulli between the building entry point and an upper tap, with similar velocities, allows estimating pressure drop due to elevation difference.

{{f:head}}

- **Dominant variable:** height difference [[z]] between network points.
- **Validity limit:** applicable only when velocity at both points is similar and pipe head losses are negligible (short, large-diameter pipe). In real networks with around 5 m of elevation difference, pressure loss due to height can be close to half a bar and can be significant if supply pressure is low.
- Practical application: minimum pressure verification in plumbing installations, sizing of pressure boosting pumps.

In networks with multiple branches and outlets, total pressure drop is calculated using the extended Bernoulli equation with explicit head-loss terms. Standards such as EN 806 and CIBSE Guide G specify minimum service pressures at each fixture outlet and require hydraulic verification for all building water supply designs.


