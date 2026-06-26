# Thermal Expansion

## Conceptual context

Thermal expansion is one of the most universal and practically significant phenomena in engineering and everyday life. When a solid, liquid, or gas receives energy in the form of heat, its particles vibrate with greater amplitude around their equilibrium positions. This increased molecular agitation translates macroscopically into an increase in the average interatomic distances and, at the macroscopic scale, into an increase in the size of the object. The inverse phenomenon—contraction on cooling—is equally predictable and symmetric.

This leaf focuses on the expansion of solids, where the phenomenon has a particularly clean quantitative description: the change in a linear dimension and the change in volume are, to first approximation, proportional to both the initial dimension and the applied temperature change. This proportionality allows two material-characteristic coefficients—[[alpha]] and [[beta]]—to be introduced, which encapsulate all the thermomechanical information needed for the most common applications.

Understanding thermal expansion is a direct prerequisite for analysing thermal stresses, designing expansion joints in bridges and railway tracks, calibrating instruments subjected to temperature variations, or interpreting the behaviour of fluids in closed containers.

## 🟢 Essential level

When you heat a metal, **it lengthens**. When you cool it, **it shortens**. This is the central idea of linear thermal expansion: the length of a solid changes when its temperature changes.

The length change is not arbitrary: it is **proportional** to the original length of the object and to how much the temperature changes. If you have a bar twice as long, it expands twice as much. If you heat it twice as much, it also expands twice as much. The factor that governs how much each material expands is the **linear expansion coefficient** [[alpha]]: a characteristic number of the material, extremely small (of the order of millionths of inverse kelvin), that differentiates aluminium from steel or glass.

In the same way that a linear dimension changes, the total volume of the solid also changes. The volumetric change is governed by its own coefficient, [[beta]], which for isotropic solids is approximately three times [[alpha]]. The fact that these coefficients are so small explains why thermal expansion goes unnoticed in everyday objects at small temperature changes, yet becomes critical in large structures or where tight tolerances are required.

## 🔵 Formal level

The law of linear expansion states that the length change [[DeltaL]] of a solid is:

{{f:dilatacion_lineal}}

where [[alpha]] is the linear expansion coefficient of the material (in K⁻¹), [[L0]] is the initial length at the reference temperature, and [[DeltaT]] is the temperature change. The final length of the solid is [[L0]] plus [[DeltaL]].

The coefficient [[alpha]] depends exclusively on the material: steel has values around 12×10⁻⁶ K⁻¹, aluminium around 23×10⁻⁶ K⁻¹, and invar (a special Fe-Ni alloy) barely 1×10⁻⁶ K⁻¹. This intensive property does not change if the bar is cut in half: the reference length [[L0]] changes, but [[alpha]] remains the same.

The three-dimensional extension of this law is the volumetric expansion:

{{f:dilatacion_volumetrica}}

where [[beta]] is the volumetric expansion coefficient, [[V0]] is the initial volume, and [[DeltaV]] is the volume change. For isotropic solids there is a geometric relation between the two coefficients:

{{f:relacion_beta_alpha}}

This relation is obtained by computing the volume of a cube of side [[L0]] after expansion. The final side is [[L0]] plus [[DeltaL]], so the final volume is the cube of that sum. Expanding and retaining only the first-order terms in [[alpha]]·[[DeltaT]] (which is of order 10⁻³ for 100 K changes), the volume change is three times [[alpha]] multiplied by [[V0]] and [[DeltaT]], confirming that [[beta]] is approximately three times [[alpha]] for isotropic solids.

The most useful rearrangements of the linear law allow [[alpha]] to be determined from an experimental measurement of [[DeltaL]], or the temperature change [[DeltaT]] required to produce a specified elongation to be found.

## 🔴 Structural level

The validity of the linear model rests on the assumption that [[alpha]] is constant over the temperature range considered. In reality, [[alpha]] depends on temperature: for most metals it increases slightly with T. At very low temperatures (near absolute zero), [[alpha]] tends to zero according to Debye's law, which means the linear model overestimates expansion in that regime. At very high temperatures (near melting), the dependence of [[alpha]] on T can become non-negligible and the linear model underestimates the actual change.

The operational validity condition is that the term [[alpha]]·[[DeltaT]] is small compared to unity. For common metals and temperature changes below 300 K, this criterion is easily met: the maximum error introduced by treating [[alpha]] as constant is below 2%, fully acceptable for engineering purposes.

The relation [[beta]] ≈ 3·[[alpha]] further requires the solid to be **isotropic**: its mechanical and thermal properties must be equal in all spatial directions. Polycrystalline metals are isotropic at the macroscopic scale, but materials such as wood, unidirectional composites, or crystals with low symmetry have different coefficients in each direction. In those cases, each direction has its own [[alpha]], and the volumetric coefficient is the sum of the three linear coefficients (one per direction), not necessarily three times the linear one.

Another important model limit is the presence of internal stresses. If the solid cannot expand freely—because it is restrained, bolted, or bonded to another material with a different [[alpha]]—constrained expansion generates **thermal stresses**. In those cases the actual [[DeltaL]] may be zero or even negative, while the internal stress grows. This phenomenon lies outside the scope of the free-expansion law, but is conceptually inseparable from it: understanding free expansion is the indispensable first step for analysing thermal stresses in real structures.

For liquids, volumetric expansion is dominant and [[beta]] is characteristic of each fluid. Water exhibits an anomalous behaviour between 0 and 4 °C: [[beta]] is effectively negative in that range, meaning that water contracts when heated, reaches its maximum density at 4 °C, and then expands again above 4 °C. This anomaly, due to the partial breakdown of the hydrogen-bond network, has crucial ecological consequences: denser water sinks to the bottom of lakes in winter, protecting aquatic fauna from complete freezing.

## Deep physical interpretation

The linear expansion [[DeltaL]] carries a sign: positive when the solid is heated and lengthens, negative when it cools and contracts. This sign is not an arbitrary convention but reflects the real direction of the thermal process. A calculation that yields negative [[DeltaL]] for a heating process (positive [[DeltaT]]) reveals an error, almost always an inverted subtraction order in the temperature difference.

The deeper reason why [[DeltaL]] is proportional to [[L0]] is that expansion is an **intensive phenomenon in relative terms**: each infinitesimal segment of the bar expands by the same fraction [[alpha]]·[[DeltaT]] of its own length. Summing all segments, the total effect is proportional to the total length. A longer bar contains more segments contributing to the total.

## Order of magnitude

For structural steel with [[alpha]] ≈ 12×10⁻⁶ K⁻¹ and a temperature change of 50 K (typical annual thermal range in central Europe), a 1-metre bar expands by approximately 0.6 mm. The same bar, but 100 metres long, would expand by 60 mm. A 1000-metre suspension bridge experiences length changes of around 600 mm, making expansion joints indispensable.

These values illustrate the contrast of scales: in a 5 cm screw, the seasonal thermal change is barely 3 micrometres—completely negligible. In a 200-metre industrial pipeline, the same temperature variation produces 120 mm of displacement, capable of rupturing welds and flanges if not accommodated. A physically reasonable result has [[DeltaL]] of the order of [[alpha]]·[[L0]]·[[DeltaT]], with [[alpha]] in the range 10⁻⁶ to 10⁻⁵ K⁻¹.

## Personalized resolution method

1. **Identify the regime**: decide whether working with linear expansion ([[DeltaL]]) or volumetric expansion ([[DeltaV]]), or both.
2. **Collect the data**: initial length or volume ([[L0]] or [[V0]]), temperature change [[DeltaT]] with correct sign (T_final minus T_initial), and material coefficient ([[alpha]] or [[beta]]).
3. **Select the formula and correct rearrangement**: if [[DeltaL]] is sought, apply the linear law directly; if [[alpha]] is sought, rearrange; if [[DeltaT]] is sought, rearrange.
4. **Check the sign of the result**: positive [[DeltaL]] means heating; negative means cooling. If the sign does not match the described physical process, review [[DeltaT]].
5. **Verify the order of magnitude**: the ratio [[DeltaL]]/[[L0]] must be of the order of [[alpha]]·[[DeltaT]], typically between 10⁻⁴ and 10⁻². Results outside this range indicate data errors.

## Special cases and extended example

**Differential expansion in bimetals**: when two bonded materials have different [[alpha]], the one that expands more forces the assembly to bend. This principle is used in mechanical thermostats and also explains unwanted deformation in composite parts.

**Liquid expansion in containers**: when a liquid with known [[beta]] is heated inside a rigid container whose material also has a non-zero [[beta]], the net free volume change is the difference between the liquid's expansion and the container's expansion. If the liquid has a larger [[beta]] than the container material, the internal pressure rises on heating—relevant in boilers and closed hydraulic systems.

**Water between 0 and 4 °C**: water has an effectively negative [[beta]] in that interval. It contracts when heated up to about 4 °C, where density is maximum; above that temperature it expands like other liquids.

## Real student questions

**Why does [[DeltaL]] depend on [[L0]]?**
Because each segment of the bar contributes its own fraction of elongation. A longer bar contains more segments that expand.

**Why is [[beta]] approximately three times [[alpha]]?**
Because an isotropic solid changes in three directions. Keeping only the linear term, the three contributions add.

**Can I use degrees Celsius?**
Yes, when using a temperature difference [[DeltaT]]. The mistake is using an absolute temperature as if it were an interval.

**What if the solid is blocked?**
Free expansion becomes thermal stress. The solid tries to change size, but the mechanical constraint turns that blocked change into internal stress.

## Cross-cutting connections and study paths

Thermal expansion connects with [phase changes](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/cambios-de-estado), where the linear model fails during a transition, and with [specific heat capacity](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico), because absorbed energy produces the temperature increase that drives expansion.

In the domain of materials mechanics, free expansion is the starting point for analysing thermal stresses, which require combining the expansion law with Hooke's law. In a complete materials physics curriculum, this leaf is the first link in that chain.

The precision of [[alpha]] determines the reliability of tolerances in optics, turbines, and metal structures. A small coefficient error can become insufficient clearance when [[L0]] is large or [[DeltaT]] is wide.

## Final synthesis

The thermal expansion of solids is governed by two linear constitutive laws connecting the dimensional change to the temperature change through the coefficients [[alpha]] and [[beta]]—intensive properties of the material. The geometric relation [[beta]] ≈ 3·[[alpha]] for isotropic solids links one-dimensional behaviour to three-dimensional behaviour, and the sign of [[DeltaL]] and [[DeltaV]] immediately identifies whether the process is heating or cooling. Mastery of the linear model with its validity limits—small deformation regime, absence of phase change, isotropy, and approximately constant [[alpha]]—is the key to applying this leaf with real physical judgement.
