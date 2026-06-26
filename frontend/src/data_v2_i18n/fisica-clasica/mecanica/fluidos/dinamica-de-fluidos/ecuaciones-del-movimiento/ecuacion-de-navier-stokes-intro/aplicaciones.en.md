# Navier-Stokes Intro — Applications

## 1. Industrial piping network design

In drinking water installations, hydraulic systems, and industrial plants, pipes must be sized with a balance between allowable pressure loss and installation cost. The Hagen-Poiseuille law (derived directly from laminar NS) gives the pressure required to move a given flow rate through a pipe of radius R, length L, and fluid viscosity [[mu]]:

The **R^4 dependence** means that doubling the radius reduces the required pressure by a factor of 16 at the same flow rate. This extreme sensitivity guides diameter selection in low-head-loss systems.

Dominant variable: pressure gradient -partial p/partial x

Validity limit: [[Re]] < 2300 (laminar flow); in viscous fluids or small flow rates. For water in distribution networks at high velocity ([[Re]] > 4000) the Darcy-Weisbach equation with the Moody friction factor is used instead.

---

## 2. Microfluidics and lab-on-chip devices

Integrated biochemical analysis devices (lab-on-chip) operate with channels of width w aprox 10–500\,mum. At these scales, [[Re]] ll 1 and Navier-Stokes reduces to the fully linear Stokes equation:

This linearity allows the design of mixers, cell separators, and flow control systems with exact analytical NS solutions. The parabolic velocity profile is fundamental for calculating particle residence time and solute dispersion (Taylor dispersion).

Dominant variable: dynamic viscosity [[mu]] of the carrying fluid

Validity limit: straight channel of uniform cross-section, fully developed flow, Newtonian fluid. Biological fluids (whole blood, mucus) can behave as non-Newtonian at low shear rates.

---

## 3. Lubrication in bearings and hydrodynamic journal bearings

In a hydrodynamic journal bearing, the lubricant separating the shaft from the housing is a thin oil film between two surfaces with relative motion. The Navier-Stokes balance in this film (thin-film hypothesis h ll R; Reynolds lubrication equation) produces the pressure supporting the axial load:

Bearing design requires calculating the minimum film thickness h_min (avoiding metal-to-metal contact) and the minimum oil viscosity under operating conditions. **Viscosity** is the control variable: more viscous oils support higher loads but generate more heat through internal friction.

Dominant variable: dynamic viscosity [[mu]] of the lubricant

Validity limit: film Reynolds number Re_f = [[rho]] U h/[[mu]] < 1000; thin-film hypothesis (h ll lateral dimension). Fails when the lubricant cavitates or when temperature rises enough that [[mu]] falls below the required minimum.

---

## 4. Vascular biomechanics and blood circulation

Blood flows through arteries and veins following the same Navier-Stokes equations (with corrections for non-Newtonian behavior at low shear rates). In the coronary artery at rest, [[Re]] aprox 200–400 and the flow is laminar and pulsatile. In the aorta, [[Re]] aprox 3000–4000 and the flow is intermittently turbulent.

The key physiological quantity is the **wall shear stress (WSS)**:

WSS values < 0.4 Pa at arterial bifurcations are associated with higher atherosclerosis risk; values > 40 Pa are associated with endothelial damage. NS simulations on real vascular geometry (obtained from medical imaging) allow these risk zones to be identified before a clinical event.

Dominant variable: wall shear stress linked to near-wall momentum transfer and local geometry.

Validity limit: blood can be treated as Newtonian at high shear rates; at low shear rates a non-Newtonian model such as Carreau-Yasuda is more appropriate.

---

## 5. Flow in filters and porous media

In a porous medium (filter, soil, membrane), the fluid moves through microscopic channels at very low velocities. Darcy's equation (derived from NS for Re_pore ll 1) states that the filtration velocity is proportional to the pressure gradient:

where k is the medium permeability (m²). Navier-Stokes at the pore scale explains the **hydraulic resistance** of the filter, the filtration cycle time, and the effect of fouling: when pores shrink, k decreases and the pressure required for the same flow rate increases according to NS.

Dominant variable: viscosity [[mu]] of the filtered fluid (controls pressure loss per unit filter thickness)

Validity limit: Re_pore = [[rho]] u d_p / [[mu]] < 10 (linear Darcy flow); for Re_pore > 10 use the Forchheimer correction with the inertial term betarho u^2.

The design of industrial filtration systems — from water treatment plants to pharmaceutical sterile filtration — relies on calculating the pressure drop at a given flow rate and scheduling filter regeneration before clogging becomes critical. Engineers also use NS-based pore-scale simulations to determine the optimal porosity and channel geometry that maximize throughput while minimizing fouling, making the Navier-Stokes equation a central tool in process engineering and environmental fluid mechanics.

In practical engineering workflows, these models are used to size pumps, evaluate pressure-drop margins, and rank design alternatives before prototyping. This reduces commissioning risk and improves reliability under realistic operating envelopes.

They also improve technical traceability by documenting assumptions on regime, wall behavior, and material properties, which is essential for audits, lifecycle maintenance planning, and safe operating-window updates during plant retrofits.