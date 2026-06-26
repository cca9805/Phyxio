const e=`# Exam-type example

## Problem statement
Crude oil ([[rho]] = 880 kg/m^3, dynamic viscosity = 0.02 Pa*s) is transported through a smooth steel pipe 1.2 km long and 40 cm in internal diameter. The mean flow velocity is [[v]] = 2.0 m/s. Determine if the regime is turbulent and calculate the pressure drop required to maintain this transport. Finally, estimate the Kolmogorov scale [[eta]] if the dissipation is [[epsilon]] = 0.5 m^2/s^3.

## Data
- Density [[rho]]: 880 kg/m^3
- Dynamic viscosity: 0.02 Pa*s
- Length [[L]]: 1200 m
- Diameter [[D]]: 0.4 m
- Velocity [[v]]: [[v]] = 2.0 m/s
- Dissipation rate [[epsilon]]: [[epsilon]] = 0.5 m^2/s^3

## System definition
The system consists of a cylindrical duct of constant section, representative of an industrial oil pipeline. Incompressible flow is assumed, which is valid for liquids at moderate pressures. The flow is considered isothermal, ignoring heating due to viscous friction. The flow is assumed to be fully developed, meaning the velocity profile does not change axially. The fluid is Newtonian, following a linear relationship between shear stress and strain rate.

## Physical model
We will use the Reynolds number [[Re]] to classify the flow regime. If [[Re]] > 4000, we will apply turbulence models. For the calculation of the friction factor [[f]] in smooth pipes, we will use the Blasius correlation, which is a robust empirical approximation for the range of interest. The pressure drop [[dp]] will be obtained using the fundamental Darcy-Weisbach equation. For the structural analysis of turbulence, we will calculate the Kolmogorov microscale [[eta]] by relating the kinematic viscosity and the dissipation rate [[epsilon]].

## Model justification
The choice of the Reynolds number as a decision parameter is justified because it represents the balance between inertial forces, which tend to destabilize the flow, and viscous forces, which tend to dampen it. In this scenario, the large dimensions and speed suggest inertial dominance. The Blasius correlation is justified by the absence of significant roughness in new steel pipes and because the resulting Reynolds number remains within its one-quarter-power validity range. The Darcy-Weisbach equation is physically superior to Poiseuille's in this case, as it includes the quadratic term of velocity, essential for capturing energy dissipation by eddies. Finally, the Kolmogorov scale is the standard model to describe the lower limit of the Richardson energy cascade, where energy is finally dissipated into heat.

## Symbolic solution
1. Reynolds number (dimensionless):

2. Blasius friction factor (for smooth pipes):

3. Total pressure drop (Darcy-Weisbach):

4. Kolmogorov microscale:

## Numerical substitution
**[[Re]] calculation:**

Since [[Re]] = 35,200 > 4000, the flow is fully turbulent and the use of laminar models would produce massive errors.

**f calculation:**

**[[dp]] calculation:**

The pressure drop is approximately **1.22 bar**.

**[[eta]] calculation:**
First, we calculate the kinematic viscosity [[nu]] by dividing dynamic viscosity by [[rho]]. With the data in the problem, this gives approximately [[nu]] = 2.27e-5 m^2/s.

The scale is **0.123 mm**.

## Dimensional validation

Since the pascal is force per unit area, the obtained dimension is consistent with a pressure drop.

## Physical interpretation
The obtained value of 1.22 bar is not just a technical figure; it represents the "energy toll" the system must pay for operating in a turbulent regime. This pressure is the macroscopic reflection of a chaotic dance of eddies that are continuously fragmenting. **This implies** that the power needed to pump the oil depends strongly on the turbulence level. The [[eta]] scale of 0.123 mm is fundamental: it tells us that all the energy injected by the pump flows through a cascade of sizes until the eddies are so small that the oil's viscosity completely stops them. **Therefore**, the energy is physically converted into heat at this microscopic scale. It is a reminder that even in the largest systems, the ultimate physics is decided at the microscale.

# Real-world example

## Context
In process engineering, the design of chemical reactors often requires a turbulent regime to ensure that reactants are intimately mixed at the molecular level. A laminar flow would create "pockets" of unmixed reactants, drastically reducing plant yield.

## Physical estimation
Consider a reactor where the fluid has a viscosity similar to water and circulates at 3 m/s in 2 cm tubes. The Reynolds number is 60000. **This indicates** that the flow is highly chaotic. The pressure drop [[dp]] will be high but necessary to generate the required turbulence. The Kolmogorov scale [[eta]] will be about 20 microns. **This means** that mechanical mixing is effective down to very small scales, letting molecular diffusion do the rest of the work almost instantaneously.

## Interpretation
Plant efficiency **depends** on controlling turbulence. If the friction factor [[f]] **increases** due to fouling in the pipe, the pressure drop [[dp]] could exceed the capacity of the pumps, causing a drop in flow rate [[v]] and, **therefore**, a loss of the turbulent regime. **Physically**, this ensures that the chemistry of the process is working correctly. Understanding the [[eta]] scale allows engineers to predict whether the reaction time will be limited by mixing.`;export{e as default};
