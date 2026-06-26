const e=`## Conceptual errors

### Error 1: Believing S waves propagate in liquids

**Por que parece correcto**

The student generalizes everyday experience: ocean waves (which are surface waves) and sound in water (P waves) suggest that "water transmits waves." The confusion arises from not distinguishing compression waves from shear waves.

**Por que es incorrecto**

S waves require a nonzero shear modulus [[G_shear]]. Ideal fluids do not resist shear: [[G_shear]] is exactly zero, making [[v_s]] zero. Only P waves (which use [[K_bulk]]) survive in a fluid.

**Senal de deteccion**

If a calculation shows finite [[v_s]] for a medium declared as liquid, the student has incorrectly assumed a nonzero [[G_shear]].

**Correccion conceptual**

In any fluid, [[G_shear]] is zero and [[v_s]] is zero. S waves only exist in solids. Waves in water are P (compression) or surface (Rayleigh, Love).

**Mini-ejemplo de contraste**

Water: [[K_bulk]] of 2.2 GPa, [[G_shear]] zero, density 1000 kg/m3. Applying the [[v_s]] formula with zero [[G_shear]] gives [[v_s]] of zero: the S wave does not exist. Only [[v_p]] gives 1483 m/s.

### Error 2: Confusing bar wave speed with P-wave velocity in infinite medium

**Por que parece correcto**

Both are "longitudinal wave velocities in solids" and both depend on an elastic modulus and density. The student associates the bar formula (root of E over rho) with the P-wave formula (which includes [[K_bulk]] plus 4/3 times [[G_shear]]).

**Por que es incorrecto**

The bar formula uses Young's modulus because the bar deforms freely in the transverse direction. In an infinite medium, lateral deformation is confined, so [[K_bulk]] plus the shear term appears. For steel, bar wave speed is 5100 m/s but P-wave velocity in infinite medium is 5960 m/s (16 percent more).

**Senal de deteccion**

The student uses only Young's modulus in the P-wave formula, or uses [[K_bulk]] plus [[G_shear]] for a bar. Results differ 10–20 percent from tabulated values.

**Correccion conceptual**

In slender bar: root of E over rho. In infinite medium: root of ([[K_bulk]] plus 4/3 [[G_shear]]) over [[rho_medio]]. They are different formulas for different geometries.

**Mini-ejemplo de contraste**

Steel: using only E (210 GPa) and rho (7850) gives 5170 m/s (bar). Using K (160 GPa) plus 4/3 times G (80 GPa) gives root of (266.7 GPa / 7850) which is 5830 m/s (P wave). The difference is 660 m/s.

## Model errors

### Error 3: Assuming straight-line propagation over large distances

**Por que parece correcto**

For local earthquakes (less than 100 km), the path is approximately straight and the direct [[delta_t_ps]] formula works well. The student extrapolates this to greater distances.

**Por que es incorrecto**

The Earth is not homogeneous: velocity increases with depth, curving paths upward (Snell's law). Beyond 200 km, waves follow arcs and travel-time curves are no longer linear. Using the linear [[delta_t_ps]] formula at 1000 km distance produces errors exceeding 30 percent.

**Senal de deteccion**

If the estimated distance from [[delta_t_ps]] with constant velocities differs greatly from the real distance (from GPS or multi-station triangulation), the homogeneous model is no longer valid.

**Correccion conceptual**

For distances over 200 km, use travel-time tables (hodochrones) computed with radial velocity models (PREM, IASP91). The linear formula is only valid for local earthquakes.

**Mini-ejemplo de contraste**

Earthquake at 500 km. With homogeneous model ([[v_p]] 6000 m/s, [[v_s]] 3460 m/s): [[delta_t_ps]] gives 61.3 s, estimated distance 500 km. But real hodochrones (IASP91 model) give [[delta_t_ps]] of 54 s for 500 km. Using 61.3 s in real tables would estimate 570 km (14 percent error).

### Error 4: Ignoring the effect of Poisson's ratio on the velocity ratio

**Por que parece correcto**

The student calculates [[v_p]] and [[v_s]] separately and assumes their ratio is constant (e.g., root of 3). They do not realize that [[ratio_vp_vs]] depends on the material.

**Por que es incorrecto**

The [[ratio_vp_vs]] depends directly on [[nu_poisson]], which varies from 0 to 0.5 depending on the material and its saturation state. In dry rock [[nu_poisson]] is around 0.25 (ratio 1.73), but in saturated rock it can rise to 0.35 (ratio 2.1).

**Senal de deteccion**

The student uses a fixed ratio of 1.73 for all materials without verifying the corresponding Poisson coefficient.

**Correccion conceptual**

Always calculate [[ratio_vp_vs]] from measured velocities or from tabulated [[nu_poisson]] for the specific material. The square root of 3 is only valid for [[nu_poisson]] exactly equal to 0.25.

**Mini-ejemplo de contraste**

Dry rock with [[nu_poisson]] of 0.25: [[ratio_vp_vs]] is root of 3, approximately 1.73. Same rock saturated with [[nu_poisson]] of 0.35: [[ratio_vp_vs]] is root of (2×0.65)/(1-0.7), i.e., root of (1.3/0.3), giving 2.08. The difference is 20 percent.

## Mathematical errors

### Error 5: Forgetting the 4/3 factor in the P-wave velocity formula

**Por que parece correcto**

The student remembers that [[v_p]] depends on [[K_bulk]] and [[G_shear]] but omits the 4/3 coefficient before [[G_shear]]. It seems logical to add both moduli directly.

**Por que es incorrecto**

The 4/3 factor comes from the tensorial relationship between volumetric strain and shear strain in the elastic wave equation of motion. Omitting it changes the result significantly.

**Senal de deteccion**

The calculated [[v_p]] is slightly lower than expected (because the full [[G_shear]] contribution is missing). Also [[ratio_vp_vs]] comes out lower than expected.

**Correccion conceptual**

The correct formula is root of ([[K_bulk]] plus 4/3 [[G_shear]]) over [[rho_medio]]. The 4/3 is non-negotiable.

**Mini-ejemplo de contraste**

With [[K_bulk]] of 75 GPa and [[G_shear]] of 32 GPa: correct, K plus 4/3 G gives 117.7 GPa. Incorrect (without 4/3), K plus G gives 107 GPa. The difference in [[v_p]] is 300 m/s (5 percent).

### Error 6: Inverting velocities when calculating delta_t

**Por que parece correcto**

The student writes the time difference as d times (1/[[v_p]] minus 1/[[v_s]]), obtaining a negative value which they then "correct" with absolute value.

**Por que es incorrecto**

The P wave arrives first, so its travel time is shorter. The correct formula is d times (1/[[v_s]] minus 1/[[v_p]]), which is positive. Inverting the order gives the opposite sign and can cause confusion about the physical meaning.

**Senal de deteccion**

A negative [[delta_t_ps]] is obtained before applying absolute value. The student should ask why the sign comes out wrong.

**Correccion conceptual**

The formula is [[delta_t_ps]] equals [[d_foco]] times (1/[[v_s]] minus 1/[[v_p]]). The S wave arrives later (longer time), so its inverse velocity goes first in the subtraction to give a positive result.

**Mini-ejemplo de contraste**

With [[d_foco]] of 100 km, [[v_p]] of 6000 m/s, and [[v_s]] of 3460 m/s. Correct: 100000 times (1/3460 minus 1/6000) gives 12.2 s. Incorrect (inverted): 100000 times (1/6000 minus 1/3460) gives minus 12.2 s.

## Interpretation errors

### Error 7: Interpreting absence of S waves as absence of earthquake

**Por que parece correcto**

If a seismogram does not show an S phase, the student may think no earthquake occurred or the instrument failed.

**Por que es incorrecto**

The absence of S waves indicates that the path crossed a liquid zone (outer core). The earthquake did occur, but S waves were absorbed. It is precisely the **evidence** that there is a fluid along the path.

**Senal de deteccion**

The seismogram shows clear P waves but no S waves at stations in the shadow zone (104–140 degrees). At closer stations, S waves do appear.

**Correccion conceptual**

Absence of S does not mean absence of earthquake. It means there is a layer of zero [[G_shear]] (fluid) between focus and station. It is valuable geophysical data, not an instrumental failure.

**Mini-ejemplo de contraste**

Earthquake in Japan, station in South America (angular distance 130 degrees). The station records P (refracted by the core) but not S. Correct conclusion: the outer core is liquid. Incorrect conclusion: the earthquake was too weak to generate S waves.

### Error 8: Believing the [[v_p]]/[[v_s]] ratio is always the square root of 3

**Por que parece correcto**

Many introductory textbooks give 1.73 as "typical" and the student memorizes it as universal.

**Por que es incorrecto**

The value 1.73 only corresponds to [[nu_poisson]] of 0.25. In saturated clay [[nu_poisson]] can be 0.4, giving [[ratio_vp_vs]] of 2.45. In auxetic materials, [[ratio_vp_vs]] can drop below 1.5.

**Senal de deteccion**

The student applies 1.73 as a universal constant to estimate [[v_s]] from [[v_p]] (or vice versa) without verifying the material.

**Correccion conceptual**

The [[ratio_vp_vs]] depends on the material and its state. It must always be calculated from measured or tabulated [[nu_poisson]], or measured directly by comparing P and S arrival times.

**Mini-ejemplo de contraste**

Dry granite: [[ratio_vp_vs]] near 1.73. Saturated clay: [[ratio_vp_vs]] of 2.4. If 1.73 is used for the clay and [[v_p]] is 2000 m/s, [[v_s]] is estimated at 1155 m/s. The real value is 833 m/s. Error of 39 percent.

## Quick self-control rule

Before validating a seismic wave calculation, check these three points:

1. **[[v_p]] greater than [[v_s]]**: always, without exception in a real solid. If reversed, there is an error in the elastic moduli.
2. **[[ratio_vp_vs]] between 1.4 and 2.5 for rocks**: values outside this range are suspicious and require review.
3. **[[delta_t_ps]] positive and of the correct order**: for local earthquakes (less than 100 km), [[delta_t_ps]] should be less than 20 s. For teleseisms (thousands of km), it can be several minutes.
`;export{e as default};
