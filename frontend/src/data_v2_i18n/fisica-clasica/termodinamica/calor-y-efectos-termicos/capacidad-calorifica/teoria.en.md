# Heat Capacity

## Conceptual context

Total heat capacity [[C]] measures how much energy a specific body must absorb or release to change its temperature by one kelvin. It does not describe only the material: it describes the whole body. A small glass of water and a large water tank have the same material, but very different heat capacities.

The central physical question is direct: how much energy does a body need to change its temperature by one degree? The answer depends on [[C]] and on the temperature change [[DeltaT]]. The exchanged heat [[Q]] is positive if the body warms and negative if it cools.

## 🟢 Essential level

A body with large [[C]] changes temperature only slightly when it receives a given amount of heat. This is why a swimming pool warms slowly under sunlight, while a small metal spoon can change temperature quickly. Heat capacity acts like thermal inertia: the larger it is, the harder it is to move the temperature.

The key difference from specific heat is that [[C]] belongs to the complete object. Specific heat belongs to the material. If the amount of the same material is doubled, total heat capacity doubles even though the material is unchanged. This is why a pot full of water needs much more heat than a cup to rise by the same number of degrees.

The everyday idea is simple: not all bodies respond equally to the same energy input. Some show a rapid temperature rise, while others barely move. That difference does not mean that one body contains heat and the other does not; it means that the received energy is spread over more mass, more internal parts, or a larger apparatus.

## 🔵 Formal level

The operational definition is:

{{f:definicion_capacidad_calorifica}}

When the body is homogeneous, it can also be obtained from the material specific heat:

{{f:capacidad_calorifica_desde_especifico}}

The unit of [[C]] is J/K. The unit of [[Q]] is J, and [[DeltaT]] is measured in K or in degrees Celsius when it is a temperature difference. If [[DeltaT]] is positive, the body warms and [[Q]] must be positive. If [[DeltaT]] is negative, the body cools and [[Q]] must be negative. [[C]] does not change sign: for stable materials it is always positive.

The formula represents sensible heat only. If melting, boiling, or another phase change occurs between the initial and final temperatures, a latent-heat segment appears and must not be hidden inside [[C]].

In a formal measurement, three decisions should be separated. The first is choosing the system: sample only, sample plus container, or complete apparatus. The second is deciding whether [[C]] is taken as a direct datum or built from the material. The third is checking that the temperature interval is small enough that the effective value of [[C]] does not change appreciably. These decisions prevent mixing a property of the body with a property of the material, and prevent using a straight-line slope where the real curve is no longer linear.

## 🔴 Structural level

Structurally, [[C]] is an extensive property. In a composite body, the thermal contributions of all parts are added: container, liquid, lid, sensor, or sample. This addition explains why a real calorimeter cannot be ignored: the container also absorbs heat and changes the balance if its heat capacity is comparable to that of the sample.

At the microscopic scale, absorbed heat increases internal modes such as translation, vibration, rotation, or collective lattice modes. Near absolute zero, many modes are unavailable and [[C]] can vary strongly with temperature. Near a phase transition, the linear relation also fails because energy changes structure without producing an ordinary [[DeltaT]].

In a graph of [[Q]] versus [[DeltaT]], [[C]] is the slope. A steep line corresponds to a body that needs much energy for a small temperature change. A shallow line corresponds to a body that responds with large temperature changes to little energy.

The structure of the concept is clearest in energy balances. If several elements share a final temperature, each one demands a portion of the heat proportional to its heat capacity. The element with the largest [[C]] dominates the response of the assembly and pulls the equilibrium temperature toward its initial state. This is why a small sample inside a heavy calorimeter can look anomalous if the instrument is ignored: the sample is not failing, the chosen system boundary is.

There is also a differential reading. If the experimental graph curves, the local slope changes and a single capacity no longer describes the whole interval. One then uses an average capacity over a range or a temperature-dependent capacity. This distinction matters in low-temperature materials, solids near structural transitions, and fluids when evaporation or mixed phases appear.

## Deep physical interpretation

Heat capacity is not heat stored like a substance inside the body. It is a relation between exchanged energy and thermal response. A body with large [[C]] is not necessarily hotter; it only has greater ability to absorb or release heat with a smaller temperature variation.

This reading prevents a common error: comparing materials only by specific heat. A material with high specific heat but small mass can have lower total heat capacity than a large block of another material with lower specific heat. In real problems, the correct question is almost always about the complete body.

## Order of magnitude

A metal coin can have [[C]] of a few J/K. A cup of water is around hundreds of J/K. One litre of water has a few thousand J/K. A domestic tank of one hundred litres has hundreds of thousands of J/K. This scale explains why water is used as a thermal regulator and why heating large liquid masses requires substantial power.

In a laboratory, a calorimeter heat capacity can be tens or hundreds of J/K. If the sample is small, that value is not negligible and must enter the balance. In engineering, walls, fluids, and structures can reach millions of J/K.

## Personalized resolution method

First identify whether the process is sensible heating without a phase change. Second decide whether [[C]] is known directly or must be built from material and mass. Third define the sign of [[DeltaT]] as final temperature minus initial temperature. Fourth calculate [[Q]] or [[C]] with the leaf formula and check that signs are coherent.

If the result gives negative [[C]], do not interpret it as an exotic material: check signs. If [[Q]] and [[DeltaT]] do not have the same sign, the setup is reversed.

## Special cases and extended example

In a calorimeter, the container heat capacity behaves like additional thermal mass. If an electrical resistor delivers energy to water inside a metal cup, part heats the water and part heats the cup. Ignoring the cup makes the energy look smaller or biases the sample specific heat.

In a composite body, an effective heat capacity is calculated. For example, a bottle with liquid, glass, and cap has a total [[C]] that is the physical sum of each part. That total capacity determines how much the temperature of the whole assembly changes after a heat input.

## Real student questions

Why do two objects of the same material have different [[C]]? Because [[C]] depends on the amount of matter in the object, not only on the material.

Can degrees Celsius be used for [[DeltaT]]? Yes, for temperature differences one kelvin and one degree Celsius have the same size.

Why can [[C]] not be negative? Because a stable body that absorbs heat increases temperature; a negative value means a sign or data error.

## Cross-cutting connections and study paths

This leaf connects with heat, specific heat, and calorimetry. In calorimetry, each body weights the equilibrium according to its heat capacity. In phase changes, the [[C]] formula is not enough because latent heat appears. In thermal engineering, [[C]] combines with power to estimate heating and cooling times.

A useful next step is to study calorimetry after this leaf: there, several bodies with different heat capacities exchange heat until they reach a common temperature. The same quantity [[C]] becomes the coefficient that determines which body pulls the equilibrium temperature more strongly.

## Final synthesis

[[C]] measures the energy per kelvin needed to change the temperature of a specific body. [[Q]] and [[DeltaT]] describe the process; [[C]] describes the body's thermal response. The relation is linear only while no phase change occurs and while heat capacity is approximately constant.
