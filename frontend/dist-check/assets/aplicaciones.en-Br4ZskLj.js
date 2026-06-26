const e=`\uFEFF## 1. Vapor-compression refrigeration systems

Domestic refrigerators, air conditioners, and industrial cold rooms work by circulating a refrigerant that changes state. In the evaporator, the fluid vaporizes at low temperature and absorbs [[Q_lat]] from the space to be cooled. In the condenser, the same fluid becomes liquid again and releases that heat outdoors. The technical value of the cycle is not a large temperature change of the fluid; it is the ability to move a large amount of energy during the phase transition.

In a real installation, refrigerant mass flow rate and [[L]] determine the scale of heat transported per unit time. A refrigerant with a high specific latent heat can carry more energy with less circulating mass. This is why fluid selection affects not only safety and environmental impact, but also compressor size, heat-exchanger area, and electricity use.

Dominant variable: [[L]] of the refrigerant in the evaporator and the mass changing state per second.

Validity limit: the constant-[[L]] model is a first estimate. If evaporation pressure changes significantly, [[T_trans]] and effective latent heat also change.

## 2. Thermal storage with phase-change materials

Phase-change materials, or PCMs, store energy at nearly constant temperature. A paraffin wax melting near 25 C can absorb heat during the day without strongly increasing indoor temperature. At night, when it solidifies, it returns that energy. The advantage over ordinary concrete or water is that a large part of the storage occurs as [[Q_lat]], not only as sensible heat.

The design criterion is to choose a [[T_trans]] close to the temperature to be stabilized. If the melting point is too low, the material is already liquid and will not store useful latent energy. If it is too high, it will not melt. The mass [[m]] of PCM fixes total storage capacity together with [[L]].

Dominant variable: [[Q_lat]] during the charging stage, because it measures energy stored while the PCM melts.

Validity limit: the ideal model assumes complete transition. In large panels there can be internal gradients, and only a fraction of the PCM may change state in each daily cycle.

## 3. Steam sterilization in autoclaves

An autoclave sterilizes using water steam above atmospheric pressure. Increasing pressure raises the boiling [[T_trans]] above 100 C; this is why steam can be near 121 C. When it condenses on a colder load, it releases a large [[Q_lat]] directly at the surface, heating instruments, packages, or culture media rapidly and effectively.

The effect is not explained by temperature alone. Steam carries latent energy that is released upon condensation, so it can transfer heat much more intensely than dry air at a similar temperature. In medical and laboratory applications, exposure time is chosen so that the whole load reaches sterilizing temperature for the required interval.

Dominant variable: [[T_trans]] of steam at autoclave pressure and [[Q_lat]] released by condensation.

Validity limit: if air pockets, poorly wetted surfaces, or regions without steam contact remain, the uniform condensation model no longer describes the real transfer.

## 4. Sweating and body cooling

Sweating cools the body because water on the skin evaporates and absorbs [[Q_lat]]. That heat leaves the body and helps dissipate thermal power during exercise or hot weather. Skin temperature does not need to drop much for the mechanism to be effective; the key is that each small mass [[m]] of evaporated water removes latent energy.

Relative humidity controls the process. In dry air, sweat evaporates readily and the body loses heat. In saturated air, sweat remains liquid on the skin: discomfort increases, but evaporation and latent-energy removal are weak. This is why the same air temperature can be tolerable in a dry climate and dangerous in a humid climate.

Dominant variable: [[Q_lat]] extracted by evaporation of water on the skin.

Validity limit: the model only estimates energy removed by evaporation; it does not include blood circulation, radiation, convection, or physiological limits on sweat production.

## 5. Clouds, storms, and latent-heat release

When moist air rises, it expands and cools. At the dew point, part of the water vapor condenses into cloud droplets. That condensation releases [[Q_lat]] to the surrounding air, warming it relative to the environment and potentially reinforcing the updraft. Latent heat of condensation is therefore a central energy source in convective clouds and storms.

In an intense storm, large masses of vapor change state over a few hours. Although each kilogram condenses into tiny droplets, summing [[m]] over the whole cloud volume gives an enormous energy. This mechanism links microscopic phase-change thermodynamics to atmospheric phenomena on kilometre scales.

Dominant variable: total mass of vapor that condenses and [[L]] of water under atmospheric conditions.

Validity limit: the real atmosphere does not keep temperature or pressure constant; weather models compute [[T_trans]], humidity, and latent release as distributed quantities with height.\r
\r
This final check keeps the estimate tied to the leaf quantities rather than to unrelated thermal details.\r
`;export{e as default};
