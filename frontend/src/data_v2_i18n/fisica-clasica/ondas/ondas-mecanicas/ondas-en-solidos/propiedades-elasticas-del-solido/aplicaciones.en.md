# Applications

## 1. Structural design of steel beams and columns

The sizing of structural elements in civil construction depends directly on the [[modulo_de_young]] of steel. A structural engineer needs to guarantee that the maximum deflection of a beam under service load does not exceed a permitted fraction of the span (typically the length divided by 250 or 300). Deflection is inversely proportional to the Young modulus: the greater the stiffness, the smaller the deformation under the same load.

For a simply supported beam with a centred point load, the maximum deflection depends on the cube of the span, the load and the product of the Young modulus and the moment of inertia of the cross-section. The design decision consists of choosing a profile whose moment of inertia, combined with the [[modulo_de_young]] of steel (200 GPa), keeps the deflection within limits. If aluminium (70 GPa) is used, the cross-section must be significantly larger to achieve the same stiffness.

Dominant variable: the [[modulo_de_young]] of the material, which controls the elastic deformation of the structure under service loads.
Validity limit: the model ceases to be valid when the stress exceeds the elastic limit of steel (typically between 250 and 600 MPa), at which point permanent plastic deformation appears.

## 2. Non-destructive material characterisation by ultrasonics

Measuring ultrasonic wave velocities in a part allows determining its elastic constants without damaging it. The longitudinal velocity depends on the plane-wave modulus (combination of [[modulo_de_compresibilidad]] and [[modulo_de_cizalla]]) and the transverse velocity depends exclusively on [[modulo_de_cizalla]]. With both velocities and the density, all moduli are calculated.

This technique is routinely used in quality control of castings, forgings and welds. An internal defect (pore, inclusion, crack) locally modifies the elastic constants and alters the propagation velocity, enabling its detection. Precision depends on the transducer frequency and the quality of acoustic coupling between the sensor and the part.

Dominant variable: the [[modulo_de_cizalla]] of the material, whose local variation signals the presence of defects or microstructural changes.
Validity limit: the technique requires the wavelength to be much larger than the material grain size for coherent propagation. At frequencies above 20 MHz in coarse-grained metals, grain scattering invalidates the measurements.

## 3. Material selection for springs and coils

The design of a helical spring for a vehicle suspension requires knowing the [[modulo_de_cizalla]] of the wire steel. The spring rate is directly proportional to the shear modulus and to the fourth power of the wire diameter, and inversely proportional to the cube of the mean coil diameter and the number of active coils.

The engineer must select a steel with adequate [[modulo_de_cizalla]] (typically 80 GPa for spring steels) and verify that the maximum shear stress does not exceed the fatigue limit of the material. An error in the shear modulus produces a spring that is too soft or too stiff, compromising vehicle comfort or safety.

Dominant variable: the [[modulo_de_cizalla]] of the wire material, which sets the spring rate.
Validity limit: the linear elastic model fails if the angular strain of the wire exceeds the elastic regime, generally when the shear stress exceeds 40% of the steel ultimate tensile strength.

## 4. Seismology and the internal structure of the Earth

Seismologists use the velocities of P (longitudinal) and S (transverse) waves recorded by station networks to infer the distribution of [[modulo_de_compresibilidad]] and [[modulo_de_cizalla]] in the Earth interior. The disappearance of S waves when crossing the outer core demonstrated that it is liquid, because a fluid has zero [[modulo_de_cizalla]] and does not support transverse waves.

The relationship between P and S velocities provides the effective [[nu_poisson]] of each geological layer. Seismic discontinuities (Mohorovicic, Gutenberg, Lehmann) correspond to abrupt changes in elastic constants associated with phase transitions or composition changes. The resolution of seismic tomography depends on station density and the angular coverage of wave paths.

Dominant variable: the ratio between [[modulo_de_compresibilidad]] and [[modulo_de_cizalla]] in each geological layer, which determines wave velocities and the presence or absence of transverse waves.
Validity limit: the isotropic elastic model fails in regions with seismic anisotropy (such as the upper mantle beneath oceanic ridges), where velocities depend on propagation direction and models with at least five constants are needed.

## 5. Design of orthopaedic prostheses and biomaterials

In orthopaedic implantology, the material selection for a hip or knee prosthesis must consider elastic compatibility with the surrounding bone. If the [[modulo_de_young]] of the implant is much higher than that of bone (cortical bone has approximately 15-25 GPa, while titanium alloys have 110 GPa and stainless steel 200 GPa), the phenomenon of stress shielding occurs: the implant absorbs most of the load and the adjacent bone, not being mechanically stimulated, resorbs and weakens.

To mitigate this problem, biomedical engineering develops porous materials or metallic foams whose effective [[modulo_de_young]] approaches that of bone, as well as beta titanium alloys with lower moduli (50-80 GPa). The [[nu_poisson]] of the material also influences the stress distribution at the bone-implant interface.

Dominant variable: the [[modulo_de_young]] of the implant material, whose discrepancy with that of bone determines the degree of stress shielding.
Validity limit: the linear elastic model is insufficient for bone tissue, which is anisotropic, viscoelastic and biologically remodels in response to loading. The analysis requires coupled mechanobiological models when the study period exceeds weeks.