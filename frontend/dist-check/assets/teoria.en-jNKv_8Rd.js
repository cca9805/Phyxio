const e=`# Extensive Variables

## Conceptual context

Extensive variables are thermodynamic magnitudes that depend on how much system is considered. If two equal copies of a sample are joined, total mass [[m]], volume [[V]], internal energy [[U]], and entropy [[S]] double. This dependence on size is not a flaw: it is what allows balances of matter, energy, and entropy in composite systems.

The difference from intensive variables is operational. An intensive variable characterizes the local or mean state of the substance; an extensive variable counts total amount. Temperature and pressure are not added when two equal bodies are joined, but [[m]] and [[V]] are. Recognizing an extensive variable prevents scale errors when comparing different samples.

## 🟢 Essential Level

The essential idea is the duplication test. If you duplicate the system without changing substance or intensive state, an extensive magnitude doubles. Two liters of water have twice the volume of one liter; two identical blocks have twice the mass of one block; two equal copies of a gas have twice the total internal energy.

The generic symbol [[X_ext]] represents any extensive amount. The unit may be kg, m3, J, or J/K; the question is whether the value grows when the amount of system grows. The scaling factor [[lambda_escala]] summarizes how many equivalent copies are joined.

An everyday way to see this is to think of inventories. If you buy two identical packages, you have twice as much product, but not twice the "kind of product". An extensive counts how many packages, how much mass, or how much total energy there is. By itself it does not describe the local quality of the state.

> [!NOTE]
> Extensive does not mean "large"; it means proportional to system size.

## 🔵 Formal Level

The scaling criterion is:

{{f:criterio_extensividad}}

Subsystem additivity is:

{{f:aditividad_extensiva}}

Dividing compatible extensives can produce a normalized property:

{{f:densidad}}

A common additional normalization is the specific magnitude:

{{f:magnitud_especifica}}

These formulas show two complementary ideas. First, [[X_ext]] grows linearly with [[lambda_escala]] if the scaled system keeps the same intensive state. Second, dividing by [[m]], [[V]], or amount of matter can remove size dependence. Therefore [[rho]] and [[x_esp]] are not extensive even though they are calculated from extensive variables.

The formalism also clarifies additivity. When compatible subsystems are joined, total quantities are added: [[U]], [[S]], [[V]], and [[m]]. The important condition is that the same kind of magnitude and the same reference are used. Energy is not added to entropy, and energies with incompatible references should not be combined blindly.

The particle count [[N]] can also be used as a dimensionless extensive. Even though it has no mechanical unit, it counts total entities and therefore doubles when equivalent copies are joined. This shows that extensivity does not require a complicated physical dimension; it requires total inventory meaning.

In formal problems it is useful to write the total version first and the normalized version afterward. For example, [[U]] is added when writing an energy balance, but [[x_esp]] is used when comparing energy per kg between samples. Switching from one reading to the other without saying so is a common source of errors.

## 🔴 Structural Level

Extensivity depends on scale and on how the system is separated. In ordinary macroscopic systems, surface contributions are often small compared with volume contributions, so additivity works well. In very small systems, interfaces, long-range fields, or boundary effects may break simple proportionality.

One must also distinguish total from density. [[m]] and [[V]] are extensive; [[rho]] is normalized. [[U]] is extensive; energy per kg is a derived intensive property. Total [[S]] is extensive; specific entropy is not. Normalization allows samples of different size to be compared without the larger sample winning automatically.

Another common structure is the passage from balances to properties. Balances conserve or accumulate extensive variables. Equations of state often relate intensive and normalized extensive variables. This separation matters: first decide how much there is; then decide which property per unit amount characterizes the material.

In mixtures and real systems, additivity may depend on what is being added. Total mass usually adds directly in the classical framework. Volume can show contraction of mixing. Total entropy may require entropy of mixing. Energy may need an interaction term. These subtleties do not deny extensivity; they say that the total inventory includes more contributions than those visible before joining the parts.

The structural level therefore does not ask only "does it add or not". It asks which boundary, which scale, and which property definition is being used. A variable may be extensive in the ideal macroscopic model and still need a correction when boundary, mixing, or interaction terms dominate the phenomenon. This reading keeps the simple rule useful without turning it into a dogma.

## Deep Physical Interpretation

An extensive variable represents inventory. Inventory of matter, space, energy, or entropy. If the system is split in two, the total inventory is distributed; if the parts are joined again, it adds. This reading makes extensivity a rule of physical accounting.

Normalization turns inventories into comparable properties. A large tank may have more [[U]] than a small one even when both are at the same temperature. To compare the energetic state of the material, one uses a specific magnitude [[x_esp]] or a density. This avoids confusing total amount with state intensity.

## Order of Magnitude

If 1 kg of a substance occupies 0.001 m3, then 2 kg occupy about 0.002 m3 if the state is the same. If one sample contains 50 kJ of internal energy, two equal copies contain 100 kJ. The proportion is simple, but only under the condition of same material and same intensive state.

By contrast, [[rho]] may remain 1000 kg/m3 for both 1 kg and 2 kg of water. Mass and volume increased; the ratio did not.

## Personalized resolution method

1. Ask whether the magnitude counts a total amount.
2. Imagine duplicating the system without changing intensive state.
3. If the value doubles, treat it as extensive.
4. If you want to compare different samples, normalize by [[m]], [[V]], or amount of matter.
5. In balances, conserve extensives; in properties, use normalized ratios.

## Special Cases and Extended Example

**Surface-dominated systems.** In small droplets or nanostructured materials, surface energy may not scale like volume. Then ideal additivity needs corrections.

**Mixtures.** Total mass is usually additive, but volume may not be exactly the sum of initial volumes if contraction or expansion of mixing occurs.

**Extended example.** Two identical vessels contain the same gas in the same state. When joined, [[m]], [[V]], [[U]], and [[S]] double. Density [[rho]] does not double because both mass and volume double.

## Real Student Questions

**Q: Is internal energy always extensive?**

A: In the usual macroscopic thermodynamic model, yes. It adds when compatible subsystems are joined, except for interaction or surface corrections.

**Q: Density depends on mass; why is it not extensive?**

A: Because duplicating a homogeneous sample also duplicates volume. The ratio [[rho]] remains constant.

**Q: Can entropies be added?**

A: Yes, if they are total entropies of compatible subsystems. Specific entropies are not added as totals.

## Cross-cutting connections and study paths

This leaf connects with intensive variables, open systems, closed systems, mass balances, the first law, entropy, and equations of state. A useful path is: distinguish total from normalized, apply the duplication test, use additivity in balances, and then build specific properties or densities.

## Final Synthesis

An extensive variable grows with system size and adds when compatible subsystems are joined. [[m]], [[V]], [[U]], and [[S]] are physical inventories. Dividing by mass, volume, or amount produces normalized properties such as [[rho]] or [[x_esp]], useful for comparing systems of different size.

The practical rule is twofold: use extensives for balances and normalized properties for comparisons. This prevents confusing a larger system with a more intense state.
`;export{e as default};
