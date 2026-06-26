const e=`## 1. Elastic characterisation by ultrasonics

Measuring P and S wave velocities in a solid allows directly calculating G (density times S velocity squared) and K (density times P velocity squared minus four thirds of G). With G and K, E and nu are obtained using the conversion relationships. This method is non-destructive, fast, and provides the four fundamental elastic constants from three measurements (P velocity, S velocity, density).

It is the standard technique in quality control of metallic, ceramic and composite materials. Any deviation from tabulated values indicates heterogeneity, internal defects, anisotropy or composition change.

Dominant variable: the ratios [[ratio_G_E]] and [[ratio_K_E]], which are compared with known material tables to verify material identity and quality.
Validity limit: the method assumes isotropy. If the material is anisotropic, velocities depend on propagation direction and effective moduli are obtained, not the true moduli of the full stiffness tensor.

## 2. Structural design with material selection

In mechanical engineering, material selection for structural components requires knowing the partition between shear stiffness and compressive stiffness. A component subjected to torsion needs high [[G_shear]]; a component under hydrostatic pressure needs high [[K_bulk]]. The conversion relationships allow estimating both from tabulated E and nu, without additional tests.

Ashby diagrams (material property maps) use these relationships to represent each material's location in the elastic constants space. The boundary of the feasible space is determined by the thermodynamic limits of [[nu_poisson]].

Dominant variable: [[nu_poisson]], which controls the partition between G and K for a given E. An engineer needing to maximise G will seek materials with low nu.
Validity limit: in composites and anisotropic materials, the isotropic relationships give a first estimate but not exact values. The full stiffness matrix is required.

## 3. Geophysics and seismology

Seismic P and S wave velocities depend on the elastic moduli of rocks. By inverting the conversion formulae, seismologists obtain E, G, K and nu of geological layers from seismograms. The velocity ratio vP/vS is a unique function of [[nu_poisson]] and is used as a lithological indicator: water-saturated rocks have high nu (close to 0.5), dry or fractured rocks have lower nu.

The relationship between moduli is the fundamental tool of AVO (Amplitude Versus Offset) analysis, which estimates subsurface elastic properties from the angular variation of seismic reflection.

Dominant variable: [[nu_poisson]], obtained from the seismic velocity ratio, is the main discriminant between lithologies.
Validity limit: rocks are not perfectly isotropic (lamination, fracturing). The isotropic relationships give effective averages that may differ from actual directional values.

## 4. Finite element simulation

Finite element codes for isotropic solids require as input the Lame parameters ([[lambda_lame]] and [[G_shear]]) or, equivalently, E and nu. The conversion relationships are applied within the code itself to transform user input data into stiffness tensor parameters.

The choice of input pair affects numerical stability: for nearly incompressible materials (nu close to 0.5), formulating the problem in E and nu produces instabilities (divergent K). A mixed formulation (pressure-displacement) or decomposing the response into volumetric and deviatoric parts is preferable.

Dominant variable: [[lambda_lame]] and [[G_shear]] as direct input to the constitutive tensor.
Validity limit: for nonlinear, anisotropic or rate-dependent materials, more advanced constitutive models are needed.

## 5. Auxetic material design

Auxetic materials (negative nu) are designed by manipulating the microstructure to invert lateral contraction. The conversion relationships predict the mechanical consequences: a material with nu of -0.5 has G equal to 2E/3 and K equal to E/6. Shear stiffness exceeds volumetric stiffness, which is useful in applications of energy absorption by shear (ballistic vests, dampers, acoustic filters).

Design is guided by sweeping nu in the formulae and calculating the resulting G/E and K/E ratios to find the optimal combination for the application.

Dominant variable: [[nu_poisson]] as a design parameter, with ratios [[ratio_G_E]] and [[ratio_K_E]] as objective functions.
Validity limit: real auxetic materials often have significant anisotropy and nonlinear behaviour at large deformations. The isotropic relationships are an initial guide, not a complete model.

Across all these applications, the practical value of the leaf is not memorising a conversion table, but choosing which pair of elastic constants should be measured, specified or controlled. For quick laboratory tests, E and nu are often enough. For wave-based characterisation, G and K are preferable because they connect directly with P and S wave velocities. For tensor finite element simulation, [[lambda_lame]] and [[G_shear]] are the natural pair because they enter the constitutive law directly. This choice reduces scale errors, avoids extrapolating outside the elastic range, and makes it clear when a material requires an anisotropic or nonlinear model instead of the isotropic conversion rules.

A useful engineering check is to compare the converted constants against the intended loading mode. If a component mainly twists, [[ratio_G_E]] matters more than K/E; if it is confined or pressurised, [[ratio_K_E]] dominates the response. When the dominant ratio is inconsistent with the observed behaviour, the issue is usually not arithmetic but model selection: directionality, damage, porosity, temperature or large strain may have moved the material outside the assumptions of the isotropic leaf.
`;export{e as default};
