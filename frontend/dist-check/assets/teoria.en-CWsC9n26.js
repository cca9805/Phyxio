const e=`# Elastic Properties of Solids

## Conceptual context

An elastic solid does more than occupy space: it stores energy when deformed and releases it when the external action is removed. That ability allows a mechanical disturbance to travel through the material as a wave. Elastic properties describe how much deformation appears under a given action and what kind of shape the medium tends to recover.

The key point is to separate three physical responses: stretching or compressing a bar, changing shape by shear, and compressing the whole volume. In an isotropic material these responses are not freely independent; they are connected by material symmetry and by energetic stability.

## 🟢 Essential level

The essential idea is that stiffness is not a single word. A solid may strongly resist tension, resist shear less, and still be difficult to compress volumetrically. Several elastic parameters are therefore introduced, each associated with a different way of deforming the same material.

[[E_young]] measures response to stretching or compression along one direction. [[G_shear]] measures response to shape change, without requiring much volume change. [[K_bulk]] measures resistance to reducing or increasing volume under uniform pressure. [[nu_poisson]] describes the lateral contraction that accompanies longitudinal extension.

This separation avoids a common confusion: a material is not "stiff" in only one way. Rubber may be hard to compress while being easy to shear. A metal may resist both tension and shear strongly. A fluid may resist compression, but it cannot sustain an elastic bulk shear deformation. That difference explains why transverse waves require solids.

At this level no calculation is needed. It is enough to read each constant as answering a distinct physical question: how much it stretches, how much its shape changes, how much its volume changes, and how much it narrows laterally. That qualitative reading prepares the formal use of equations.

The learner should therefore keep the first pass verbal and visual: imagine pulling, sliding, squeezing and lateral narrowing before introducing symbols, tables, numerical substitutions or derived constants in later formal work.

## 🔵 Formal level

In the linear regime, each modulus is defined as a ratio between a mechanical action and the deformation it produces. The law for uniaxial tension is:

{{f:modulo_young}}

The shear relation uses tangential stress and angular strain:

{{f:modulo_cizalla}}

Uniform compression is described with the bulk modulus:

{{f:modulo_compresibilidad}}

Relative lateral contraction is summarized by Poisson's ratio:

{{f:relacion_poisson}}

In an isotropic solid, knowing two elastic constants is enough to reconstruct the others. A particularly common relation is:

{{f:relacion_E_G_nu}}

The working variables appear here: [[sigma]] and [[epsilon]] for tension, [[tau]] and [[gamma]] for shear, [[DeltaP]] and [[DeltaV_rel]] for volumetric compression, and [[epsilon_long]] together with transverse strain for Poisson coupling. All quantities must be expressed coherently: stresses and moduli in pascals, strains as dimensionless ratios, and signs according to the convention of the problem.

The algebra also imposes restrictions. Moduli that store elastic energy must be positive. Poisson's ratio cannot be chosen arbitrarily, because outside the physical interval the material would not have stable elastic energy. This condition is not decorative: it prevents impossible results when converting between moduli.

## 🔴 Structural level

The deep reason for these relations is the decomposition of stress and strain into volumetric and deviatoric parts. The volumetric part changes the size of a material element; the deviatoric part changes its shape. [[K_bulk]] governs the first and [[G_shear]] governs the second. [[E_young]] mixes both because uniaxial tension stretches in one direction and contracts in the others.

This structure connects elasticity with waves. A longitudinal wave compresses and dilates the medium, so it sees a combination of volumetric and shear resistance. A transverse wave mainly changes shape without dominant compression, so it depends on shear rigidity. That is why ideal fluids can transmit pressure waves but not bulk elastic transverse waves.

In anisotropic materials the story changes. The constants are no longer reduced to two independent parameters, and propagation direction matters. In viscoelastic materials, moduli depend on frequency and may include dissipation. In plasticity, the linear relation no longer describes the process because deformation is not fully recovered.

## Deep physical interpretation

Elastic moduli are a way of reading stored energy. A small deformation changes the internal energy of the material; the derivative of that energy produces stress. If the material needs much energy for a small deformation, the corresponding modulus is large. If it needs little energy, the modulus is small.

This reading explains why stability requires positivity. If a deformation could lower energy without limit, the initial state would not be stable and the material would deform spontaneously. Inequalities between moduli are therefore physical conditions before they are algebraic rules.

## Order of magnitude

In metals, [[E_young]] is usually tens to hundreds of gigapascals. In soft polymers it may fall to megapascals. [[G_shear]] is often smaller than Young's modulus, but of the same order in many solids. [[K_bulk]] can be very high in nearly incompressible materials, even when they deform easily in shear.

A quick check is to ask whether the result looks like a real solid. A steel modulus in pascals should be near 10 to the power of 11; a value near 200 without units is probably in gigapascals and must not be entered directly into an SI formula.

## Personalized resolution method

First identify the mechanical action: normal, tangential, hydrostatic or lateral coupling. Second, choose the modulus that responds to that action. Third, convert units and treat strains as ratios, not as percentages left unconverted. Fourth, check whether the material may be treated as isotropic and linear.

If the problem combines two moduli, use the isotropic relation only when the statement allows that hypothesis. If a transverse wave appears, pay special attention to shear rigidity. If uniform compression or longitudinal velocity appears, check the volumetric contribution.

## Special cases and extended example

An idealized rubber near incompressibility can have Poisson's ratio close to 0.5: it changes shape easily but almost does not change volume. Cork can have a small Poisson ratio because its porous structure allows unusual lateral deformation. An auxetic material has negative Poisson ratio: when stretched, it widens laterally instead of narrowing.

In an ultrasonic test, measuring longitudinal and transverse velocities allows elastic constants to be estimated without destroying the part. The reading is powerful, but it depends on the material being approximately homogeneous, isotropic and linear at the wavelength scale.

## Real student questions

Why are there so many moduli if all of them measure stiffness? Because each modulus answers a different way of deforming. Stretching, shearing and changing volume are not the same physical operation.

Why are two constants enough in an isotropic solid? Because symmetry removes preferred directions. Once two independent responses are fixed, the others are forced by deformation geometry and stability.

## Cross-cutting connections and study paths

This topic connects Hooke's law, waves in solids, seismology, ultrasonics and strength of materials. It also prepares the tensorial reading of stress and strain, where moduli stop being a list of names and become a constitutive law.

## Final synthesis

Elastic properties of solids organize the relation between stress, strain and stored energy. The didactic key is not to overload the idea of stiffness: first identify the type of deformation being observed; then apply the appropriate modulus and formal relation.
`;export{e as default};
