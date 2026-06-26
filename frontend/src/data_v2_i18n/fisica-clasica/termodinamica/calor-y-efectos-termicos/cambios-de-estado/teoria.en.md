# Phase Changes

## Conceptual context

A phase change is a transition between phases of a substance: melting, solidification, vaporization, condensation, sublimation, or deposition. Its central feature is that exchanged energy does not change temperature while two phases coexist. That energy is the total latent heat [[Q_lat]].

The central physical question is: how much energy is needed to change the state of a substance, and why does temperature not vary during the transition? The answer depends on three quantities: the mass [[m]] that changes state, the specific latent heat [[L]] of the material, and the transition temperature [[T_trans]]. This leaf is not only about warming or cooling; it is about deciding when heat changes the structure of matter.

## 🟢 Essential level

If ice at 0 C is heated, its temperature does not immediately rise. The incoming heat is used to break the structure of the solid phase and convert ice mass into liquid water. As long as ice and water coexist, the system remains at [[T_trans]].

The larger the mass [[m]] changing state, the larger [[Q_lat]] is. If the material has a large [[L]], each kilogram requires much energy. This is why vaporizing water requires much more energy than melting the same mass of ice: vaporization separates molecules almost completely.

The operating idea is simple: first check whether two phases are present; then ask how much mass is changing state; finally decide whether energy remains to raise or lower temperature. On a phase-change plateau, more heat means more transformed mass, not more degrees Celsius.

## 🔵 Formal level

The general relation of this leaf is:

{{f:calor_latente_general}}

The thermal condition during the plateau is:

{{f:temperatura_transicion_constante}}

For melting or solidification, the material fusion value is used:

{{f:calor_latente_fusion}}

For vaporization or condensation, the vaporization value is used:

{{f:calor_latente_vaporizacion}}

The sign is assigned by process: positive when the substance absorbs heat (melting, vaporization, sublimation) and negative when it releases heat (solidification, condensation, deposition). [[L]] is a positive property of the material and of the concrete transition. In an energy balance it is added with its physical sign, but data tables usually provide only the magnitude.

The key formal check is to compare available energy with the required latent energy. If available energy is not enough for mass times specific latent heat, the transition is partial. In that case a later final temperature must not be solved; the fraction of mass that changes state is found, and the system remains at [[T_trans]]. If available energy exceeds the full latent segment, the excess can then be used as sensible heat. In the notation of this leaf, [[Q_lat]] measures energy, [[m]] measures sample size, [[L]] measures material response, and [[T_trans]] fixes the thermal condition. These four quantities must be read together: larger mass increases energy; changing material modifies the slope; changing pressure can shift the transition temperature.

## 🔴 Structural level

In a first-order transition, enthalpy changes discontinuously at [[T_trans]], but temperature and pressure remain fixed while two phases are in equilibrium. At the molecular scale, [[L]] measures structural energy: melting removes crystal order; vaporization overcomes almost all cohesive forces of the liquid.

The graph of temperature versus supplied heat alternates sloped segments and plateaus. Sloped segments are sensible heating; the plateau at [[T_trans]] represents [[Q_lat]]. Its horizontal width grows linearly with [[m]] and [[L]]. Therefore a long plateau does not mean the system is inactive; it means energy is changing phase.

The value of [[T_trans]] is not universal: it depends on the substance, pressure, and purity. For pure water at atmospheric pressure, 0 C and 100 C are useful references, but in salt water or in an autoclave those temperatures shift. The structural version of the model asks about pressure, purity, and completion of the transition before applying a table value. It also distinguishes local equilibrium from global equilibrium: a large sample may contain zones already transformed and zones still in the initial phase. In that case the ideal model remains useful as a global energy balance, but the time reading needs heat transport, nucleation, and internal gradients.

## Deep physical interpretation

The common mistake is assuming every heat input raises temperature. In a transition, heat does not increase the average kinetic energy of particles; it changes microscopic configuration. That is why a pot of boiling water at atmospheric pressure remains near 100 C even while the burner keeps supplying energy.

If the available energy is less than the required amount, the phase change is partial. The system does not jump to a new temperature: it remains as a two-phase mixture at [[T_trans]]. That condition is a strong physical clue for deciding whether to calculate a final temperature or a mass that changes state.

The sign interpretation also matters. Melting, vaporization, and sublimation absorb energy from the surroundings; solidification, condensation, and deposition release it. The magnitude may be the same for an ideal reverse process, but the effect on the surroundings is completely different.

## Order of magnitude

For water at atmospheric pressure, melting 1 kg of ice requires about 334 kJ, while vaporizing 1 kg of water requires about 2260 kJ. Heating 1 kg of water by only 1 K requires about 4.2 kJ. This is why a phase-change plateau can dominate the energy balance even when the temperature interval looks small.

In a cup with ice and hot water, tens of kilojoules can be consumed by melting before the final temperature rises above 0 C. In a boiler, vaporization dominates even more strongly: much of the energy is invested in producing steam, not in adding a few degrees to liquid water.

## Personalized resolution method

First order the process by temperatures: segments before [[T_trans]], the phase-change plateau, and later segments. Second compute or estimate the available heat before assuming the entire mass changes state. Third apply the leaf formula only to the mass that actually completes the transition. Fourth interpret the result: if two phases remain, the final temperature must be [[T_trans]].

A reliable sketch is a temperature-versus-energy line: slope, plateau, slope. Each slope corresponds to sensible heat; each plateau corresponds to [[Q_lat]]. If a stage is absent from the sketch, it is probably absent from the energy balance. This representation prevents mixing a final temperature with a partial transition.

## Special cases and extended example

If 0.300 kg of ice at 0 C is mixed with hot water, no final temperature should be calculated before checking the fusion energy. The latent energy needed is proportional to [[m]] and [[L]]. If the hot water cannot provide that value, only part of the ice melts and equilibrium stays at [[T_trans]].

In a refrigerator the reverse cycle is used: the refrigerant vaporizes by absorbing [[Q_lat]] inside and condenses outside by releasing it. The same concept explains sweating: evaporating water from skin extracts a large energy per kilogram. It also explains why steam burns are severe: when steam condenses on skin, it releases latent heat quickly.

## Real student questions

Why does temperature not change if I keep heating? Because energy is used to change phase, not to increase thermal agitation.

Can I always use the same [[L]]? No. Use the melting, vaporization, or sublimation value that matches the material and pressure of the problem.

What if there is not enough energy? The transition is partial and the system remains at [[T_trans]] with two phases. In that case the natural unknown is often transformed mass, not final temperature.

## Cross-cutting connections and study paths

This leaf connects with calorimetry because phase changes enter energy balances as additional segments. It also connects with heat engines, refrigeration, meteorology, clouds, industrial steam, and phase diagrams. To continue, study specific heat, calorimetry, and then phase thermodynamics.

In engineering problems, the same idea combines with power and mass flow rate: if a machine evaporates more mass per second, it exchanges more latent heat per second. In meteorology, water-vapor condensation releases energy that feeds convective clouds.

## Final synthesis

A phase change exchanges [[Q_lat]] at constant temperature [[T_trans]]. The operating rule is simple: mass changing state [[m]] times specific latent heat [[L]]. The real difficulty is deciding whether the transition is complete, selecting the correct value of [[L]], and respecting that temperature remains fixed while phases coexist.

