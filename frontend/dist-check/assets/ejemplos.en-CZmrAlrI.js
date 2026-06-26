const e=`# Exam-type example

## Problem statement

A simply supported rectangular aluminium plate has [[a_dim]] of 0.60 m and [[b_dim]] of 0.40 m. Its thickness [[h_placa]] is 3.0 mm, Young's modulus [[E_young]] is 70 GPa, Poisson's ratio [[nu_p]] is 0.33, and volumetric density [[rho_vol]] is 2700 kg/m³. Calculate the bending stiffness, the surface mass density, and the frequency of mode (1,1). Then compare qualitatively with mode (2,1).

## Data

- [[a_dim]]: 0.60 m
- [[b_dim]]: 0.40 m
- [[h_placa]]: 0.0030 m
- [[E_young]]: 70 GPa, that is 70 × 10⁹ Pa
- [[nu_p]]: 0.33
- [[rho_vol]]: 2700 kg/m³
- Fundamental mode: [[m]] = 1, [[n]] = 1
- Compared higher mode: [[m]] = 2, [[n]] = 1

## System definition

The system is a thin rectangular plate vibrating transversely. The dominant quantity to obtain is [[f_mn]], because it identifies the frequency at which the plate can resonate for a given nodal pattern. Before that frequency can be computed, two intermediate quantities are needed. The first is [[D_placa]], which measures resistance to bending curvature. The second is [[rho_s]], which measures inertia per unit area.

The indices [[m]] and [[n]] are not units or material constants. They describe how many spatial half-periods fit along the directions associated with [[a_dim]] and [[b_dim]]. Therefore mode (2,1) should not be interpreted as "twice the frequency" of mode (1,1), but as a pattern with an additional spatial variation along [[x]].

## Physical model

This example uses the Kirchhoff thin-plate regime of the leaf "modes in plates and membranes." The core magnitudes of the plate regime are [[D_placa]] and [[rho_s]]. The modal frequency [[f_mn]] is built from the plate bending stiffness [[D_placa]] and the surface inertia [[rho_s]], together with the rectangular geometry [[a_dim]], [[b_dim]] and the spatial indexes [[m]] and [[n]].

The plate is idealized as homogeneous, isotropic, and simply supported on all four edges, so the transverse displacement vanishes at the boundaries. In this regime the modal frequency is controlled by the ratio [[D_placa]] / [[rho_s]] and by the square of the modal wave numbers associated with [[m]] and [[n]]. That relation is the core physical link of this leaf: bending stiffness resists curvature while surface inertia resists acceleration.

The model is reasonable because the 3.0 mm thickness is much smaller than the in-plane dimensions: [[h_placa]] is of millimetre order, while [[a_dim]] and [[b_dim]] are of decimetre order. If the plate were thick, anisotropic, laminated, strongly damped, or if tension [[T_mem]] became dominant, the ideal thin-plate formula would stop being an accurate prediction.

## Model justification

The central physical question is how geometry and material properties determine frequencies and nodal patterns. This example separates that question into three decisions: compute [[D_placa]] from material and thickness, compute [[rho_s]] from surface mass, and use modal indices to distinguish different patterns.

The plate model, rather than the membrane model, is justified because the main restoring effect is bending stiffness. No surface tension [[T_mem]] or membrane surface density [[rho_mem]] is provided, so using the membrane formula would mix a different physical regime into the problem.

## Symbolic solution

Bending stiffness is obtained with:

{{f:rigidez_flexion_placa}}

Plate surface mass density is obtained with:

{{f:densidad_superficial_placa}}

The rectangular plate modal frequency is obtained with:

{{f:frecuencia_modal_placa}}

First compute [[D_placa]], then [[rho_s]], and only then [[f_mn]]. The order matters: inserting [[rho_vol]] directly into the modal formula would create a dimensional inconsistency, because the plate model requires mass per unit area, not mass per unit volume.

## Numerical substitution

For [[D_placa]], cubing 0.0030 m gives a very small number, but it is multiplied by Young's modulus. After applying the Poisson correction with [[nu_p]] = 0.33, the stiffness is approximately 177 N m. This is reasonable for a thin metal plate: not a floppy sheet, but not a thick rigid slab.

For [[rho_s]], multiplying 2700 kg/m³ by 0.0030 m gives approximately 8.1 kg/m². This is the surface inertia that must be accelerated during vibration.

For mode (1,1), the geometric term combines one variation in [[x]] and one in [[y]]. With these dimensions, the contribution associated with [[b_dim]] is larger because 0.40 m is smaller than 0.60 m. The resulting frequency lies in the several-hundred-hertz range, around 520 Hz with these ideal data.

For mode (2,1), the [[m]]/[[a_dim]] term is doubled before being squared. The frequency clearly increases, but not by a simple linear rule. The plate does not generate exact one-dimensional harmonics like an ideal string; it orders two-dimensional modes through the sum of spatial contributions in both directions.

## Dimensional validation

In [[D_placa]], [[E_young]] has pressure units and [[h_placa]] contributes a cubic power of length. Division by dimensionless factors leaves a bending stiffness expressed as N·m.

In [[rho_s]], multiplying [[rho_vol]] by [[h_placa]] converts kg/m³ into kg/m². This conversion is essential because a plate is modelled as a vibrating surface.

In [[f_mn]], the square root of the ratio [[D_placa]]/[[rho_s]] combines with squared geometric terms. The final result has frequency dimension. If kg/m³ appears inside the final modal formula, the error is conceptual, not merely numerical.

## Physical interpretation

The fundamental frequency is determined neither by size alone nor by material alone. [[D_placa]] contains stiffness and grows very rapidly with thickness; [[rho_s]] contains the inertia resisting acceleration; [[a_dim]] and [[b_dim]] determine which spatial wavelengths can fit on the plate. This is not a purely numerical exercise: the physical interpretation explains what the formula means in terms of forces and motion.

For a given mode, the plate vibrates with a nodal pattern set by [[m]] and [[n]]. Mode (1,1) has the smoothest pattern compatible with the simply supported edges, while mode (2,1) introduces an additional nodal line roughly perpendicular to [[x]]. That extra curvature requires more bending energy, so the frequency is higher even though the underlying material and dimensions are the same.

The important practical insight is that a mode is a shape, not just a number. The same external excitation can couple strongly to one mode and weakly to another depending on how the forcing overlaps the high-amplitude regions. In the plate regime, increasing [[h_placa]] usually raises frequencies by increasing [[D_placa]], while adding a mass layer increases [[rho_s]] and tends to lower frequencies. The decision of whether to stiffen, add mass, change boundary conditions, or switch to a tensioned membrane regime depends on the qualitative interplay between these dominant magnitudes.

# Real-world example

## Context

An acoustics engineer inspects a metal machine cover that produces a strong buzz near 500 Hz. The cover can initially be modelled as a rectangular aluminium plate with dimensions close to those in the previous example. The goal is not to obtain an exact laboratory frequency, but to decide whether the buzz may be associated with mode (1,1) or a higher mode.

## Physical estimation

The estimate uses the same physical chain: [[E_young]], [[h_placa]], and [[nu_p]] determine [[D_placa]]; [[rho_vol]] and [[h_placa]] determine [[rho_s]]; the pair ([[a_dim]], [[b_dim]]) and modal indices determine [[f_mn]]. If the first ideal frequency falls near 500 Hz, the cover has a clear candidate for resonance with the motor excitation.

Changing thickness is very effective. Increasing [[h_placa]] raises [[D_placa]] with a cubic dependence and also increases [[rho_s]], but the net effect on [[f_mn]] is approximately proportional to thickness. By contrast, adding surface mass without increasing stiffness lowers the frequency. This is why attaching a heavy layer can shift resonance downward, while adding ribs or changing thickness can shift it upward.

## Interpretation

The real application shows why plate modes are not just a decorative list of drawings. The nodal pattern indicates where the plate moves strongly and where it barely moves. If a stiffener is placed on a nodal line, it may have little effect on the problematic mode. If it is placed in a high-amplitude region, it can substantially change frequency or damping.

The technical decision is not only to compute [[f_mn]]. It is to compare that frequency with the external excitation, inspect the spatial pattern, check whether the thin-plate model is valid, and decide whether stiffness, mass, boundary conditions, or damping should be changed.
`;export{e as default};
