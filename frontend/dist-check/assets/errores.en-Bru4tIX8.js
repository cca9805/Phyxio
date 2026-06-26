const e=`\uFEFF# Common Errors in Density\r
\r
## Conceptual errors\r
\r
### Error 1: Confusion between total mass and density\r
**why it seems correct**: A massive object (like a ship) generates a visual impression of "heaviness" that the brain instinctively associates with high density.\r
**why it is incorrect**: Density [[rho]] is an intensive property; it depends on the m/V ratio, not on the total amount of matter. A ship floats because its average density (including the air inside) is less than that of water, despite having thousands of tons of mass.\r
**detection signal**: The student claims an object will sink "because it weighs a lot," without considering the volume it occupies.\r
**conceptual correction**: Remember that density measures mass concentration, not accumulation. A giant iceberg is less dense than a small lead pellet.\r
**mini-example**: \r
- *Wrong*: "The ocean liner sinks because it has a lot of mass."\r
- *Correct*: "The ocean liner floats because its total mass divided by its total volume is less than that of water."\r
\r
### Error 2: Believing that a liquid's density is immutable\r
**why it seems correct**: In most elementary hydrostatics problems, water is always taken as 1000 kg/m al cubo, creating the false illusion that it is a universal physical constant.\r
**why it is incorrect**: The density of any fluid changes with temperature and, to a lesser extent, with pressure. Water at 90^circC is significantly less dense than at 4^circC.\r
**detection signal**: Thermal expansion is ignored in problems where there are significant temperature changes.\r
**conceptual correction**: Density is a function of the thermodynamic state, with [[rho]] depending on pressure and temperature. For liquids, the temperature effect is dominant.\r
**mini-example**:\r
- *Failure*: Using the same density for cold water and boiling water in a precise mass balance.\r
- *Reality*: Hot water occupies more volume for the same mass, so its density is lower.\r
\r
## Model errors\r
\r
### Error 3: Applying the homogeneous fluid model to non-miscible mixtures\r
**why it seems correct**: It is tempting to average the densities of two liquids (like water and oil) to obtain a "system density."\r
**why it is incorrect**: If the fluids do not mix, they do not form a homogeneous continuous medium. There will be a clear interface, and each phase will maintain its own density [[rho]].\r
**detection signal**: An attempt is made to calculate a single hydrostatic pressure using a density average in a stratified tank.\r
**conceptual correction**: In multiphase systems, each fluid must be treated separately with its own [[rho]] value.\r
**mini-example**:\r
- *Limit*: Assuming that a mixture of 1 L of mercury and 1 L of water has a density of (13.6 + 1)/2 = 7.3 g/cm al cubo.\r
- *Alternative*: There are two layers; the pressure at the bottom is the sum of the pressures of each individual layer.\r
\r
## Mathematical errors\r
\r
### Error 4: Inverting the formula (V/m instead of m/V)\r
**why it seems correct**: Under exam pressure, a student may vaguely remember that "it is a division" and place the terms randomly.\r
**why it is incorrect**: The physical definition requires mass per unit volume. Inverting the formula gives us the **specific volume**, which is a different magnitude.\r
**detection signal**: Dimensional analysis gives units of m al cubo/kg, which is the inverse of what is expected.\r
**conceptual correction**: Always think of the unit: "kilograms per each cubic meter." The "per" indicates division by volume.\r
**mini-example**:\r
- *Nonsense*: Dividing volume by mass and obtaining a very low value, incompatible with an ordinary liquid.\r
- *Sense*: Dividing mass by volume and obtaining an absolute density of 500 kg/m al cubo.\r
\r
## Interpretation errors\r
\r
### Error 5: Not distinguishing between absolute density and specific gravity ([[SG]])\r
**why it seems correct**: Both numbers usually have similar magnitudes when working in g/cm al cubo units (where water density is 1).\r
**why it is incorrect**: [[rho]] has units (kg/m al cubo); [[SG]] is dimensionless. Confusing them causes massive errors when working in the International System.\r
**detection signal**: The student says the specific gravity of mercury is "13.6 kg/m al cubo".\r
**conceptual correction**: Specific gravity is a ratio. Multiply [[SG]] by the density of water (1000) to obtain the absolute density.\r
**mini-example**:\r
- *Confusion*: "The density is 0.8". (0.8 what? 0.8 kg/m al cubo is air or 0.8 g/cm al cubo is oil?).\r
- *Clarity*: "The specific gravity is 0.8, therefore the density is 800 kg/m al cubo".\r
\r
## Quick self-control rule\r
Before handing in a result, pass the fluid through the **Three States Filter**:\r
1. Is it a **gas**? Its density should be close to 1 kg/m al cubo. If it gives 1000, you've calculated a liquid.\r
2. Is it a **liquid**? Its density should be close to 1000 kg/m al cubo. If it gives 1, you've calculated a gas.\r
3. Does the object **float**? Its density must be lower than the medium's. If it gives higher and the problem says it floats, check the sign or the solving.\r
If the result obtained for water is 1 kg/m al cubo, you have forgotten the liter-to-cubic-meter conversion factor.\r
`;export{e as default};
