# Brayton and Rankine Cycles

## Conceptual context

The Brayton and Rankine cycles are the two major power cycles underpinning modern electricity generation. The Brayton cycle is the thermodynamic foundation of gas turbines, jet engines and combined-cycle power plants. The Rankine cycle is the steam-water cycle that drives turbines in coal, nuclear and concentrated solar power plants. Understanding both cycles means understanding how most of the energy consumed by humanity is converted into electricity.

Both cycles answer the same fundamental question: given a temperature difference between a hot source and a cold sink, how much useful work can be extracted per joule of heat supplied? The answer is limited by the second law of thermodynamics, and both cycles represent engineering solutions optimized for different temperature ranges and different working fluids.

The comparison between Brayton and Rankine is not merely academic: every year, investment decisions worth billions of euros are made based precisely on which cycle offers higher efficiency for a given application.

## 🟢 Essential level

Imagine a pressure cooker connected to a turbine. Heat causes the fluid to expand forcefully, pushing the turbine blades and producing mechanical work. At the end, the fluid must be returned to the start of the cycle at the lowest possible cost. That is the central idea of any power cycle.

The **Brayton** cycle uses gas (typically air) as the working fluid. Gas enters the compressor, is compressed to high pressure, absorbs heat in a combustion chamber and expands through the turbine producing work. Hot exhaust gases are released to the atmosphere. What makes the Brayton special is that both the compressor and turbine always work with gas.

The **Rankine** cycle uses steam. Liquid water is pumped to high pressure, heated until it becomes steam in the boiler, the steam expands through the turbine producing work, and is finally condensed back to liquid in the condenser. The key advantage of Rankine is that pumping liquid requires far less work than compressing gas: the density of liquid is much higher.

[[eta_th]] measures in both cycles how much of the energy supplied is converted into useful work. That fraction is always below the theoretical limit of the Carnot cycle operating between the same temperatures.

## 🔵 Formal level

In the ideal Brayton cycle with constant gas properties, efficiency depends only on the pressure ratio [[r_p]] and the adiabatic index [[gamma]] of the gas:

{{f:rendimiento_brayton}}

This expression shows that [[eta_th]] increases with [[r_p]] in a sub-linear fashion. For air with [[gamma]] approximately equal to 1.40, a pressure ratio of ten yields a theoretical efficiency of around 48 %, while [[r_p]] of twenty raises it to 57 %. However, increasing [[r_p]] indefinitely is not the optimal strategy: although [[eta_th]] grows, [[W_neto]] per unit mass may decrease if the compressor outlet temperature approaches the maximum cycle temperature.

The energy balance of the cycle is the direct expression of the first law:

{{f:balance_energetico}}

All absorbed heat [[Q_H]] is distributed between net work [[W_neto]] and rejected heat [[Q_C]]. The second law guarantees that [[Q_C]] can never be zero.

For the Rankine cycle, efficiency is calculated as the ratio of net work to the heat supplied in the boiler:

{{f:rendimiento_rankine}}

The supplied heat [[Q_H]] includes the energy needed to heat the water, evaporate it and superheat it. The hydraulic pump work is negligible compared to the steam turbine work, which qualitatively distinguishes Rankine from Brayton.

## 🔴 Structural level

**Structural differences between Brayton and Rankine.** The fundamental difference between both cycles is not just in the working fluid but in thermodynamic topology. In Brayton, the compressor works on gas: adiabatic compression simultaneously raises pressure and temperature, and compression work can consume between 40 % and 60 % of the gross turbine work. In Rankine, the pump works on incompressible liquid: pump work is typically less than 2 % of turbine work, so virtually all gross work becomes net work. This asymmetry explains why Rankine dominates in large power plants where condensation infrastructure is justified.

**The role of [[r_p]] in Brayton and the maximum temperature.** There is a fundamental design tension: maximizing [[eta_th]] requires as high a [[r_p]] as possible, but maximizing [[W_neto]] per unit mass requires an optimal [[r_p]] that is well below the efficiency-maximizing one. This duality has practical consequences: a gas turbine designed for maximum efficiency may produce less power per kilogram of fuel than one designed for maximum specific work. Aircraft engine designers prioritize specific work (thrust-to-weight ratio); power plant designers prioritize [[eta_th]].

**Physical limits and real improvements.** Both cycles operate well below the Carnot limit. In Brayton, compressor and turbine irreversibilities (characterized by isentropic efficiencies of 85–90 %) reduce the real [[eta_th]] compared to the ideal. In Rankine, the most effective improvements are reheating (steam expands in two stages with intermediate reheating) and regeneration (feedwater is preheated using steam extracted from the turbine). With multiple reheating and regeneration, modern steam plants achieve [[eta_th]] of 40–47 %, compared to 30–35 % for the basic Rankine cycle.

**The Brayton-Rankine combined cycle.** The most elegant solution to the individual limitations is the combined cycle: the exhaust gases from the Brayton cycle, still at 500–600 °C, feed the boiler of a recovery Rankine cycle. The result is an overall [[eta_th]] of 55–62 %, the highest value achievable with natural gas combustion.

## Deep physical interpretation

The efficiency of a power cycle is not simply a quality number: it is the quantitative expression of how much of the exergy available between two temperatures has been converted into real work. Exergy is the useful fraction of energy; the difference between [[eta_th]] and the Carnot efficiency is the exergy destroyed by cycle irreversibilities.

[[Q_C]] is not a design failure: it is the inevitable consequence of the second law. Every cycle operating between two finite-temperature reservoirs must reject heat to the cold sink. Designing with zero [[Q_C]] violates the Kelvin-Planck statement.

## Order of magnitude

A modern industrial gas turbine with [[r_p]] of 18 and maximum temperature of 1500 K achieves a theoretical [[eta_th]] of around 55 % with ideal gas. The real value, after irreversibilities, lies between 38 % and 42 %. A conventional coal steam plant operates at [[eta_th]] of 33–38 %; a pressurized water reactor nuclear plant achieves 33–36 % due to material limitations on [[T_H]].

A clear sign of an error: if you calculate [[eta_th]] above 70 % with conventional gas or steam turbine parameters, there is certainly a mistake in temperature units or in the formula applied.

## Personalized resolution method

When facing a Brayton or Rankine cycle problem, the most reliable protocol is:

1. **Identify the cycle**: Brayton (gas, compressor) or Rankine (steam, pump). Formulas and orders of magnitude differ.
2. **Convert temperatures to kelvin** if given in Celsius. For efficiencies, always kelvin.
3. **Identify the available data**: are [[r_p]] and [[gamma]] known (Brayton), or [[W_neto]] and [[Q_H]] (Rankine)?
4. **Apply the corresponding formula** from this leaf and verify that [[eta_th]] falls between 0 and 1.
5. **Compare with the Carnot efficiency** between [[T_H]] and [[T_C]] as a coherence check: every real cycle has [[eta_th]] below Carnot.

## Special cases and extended example

**Brayton cycle with regenerator.** If turbine exhaust gases are used to preheat the air leaving the compressor, the heat absorbed in the combustion chamber decreases. This improves [[eta_th]] for low [[r_p]] values, where exhaust temperature is high. But for high [[r_p]], exhaust temperature drops so much that the regenerator becomes ineffective.

**Rankine with reheating.** Expanding steam in two stages with intermediate reheating avoids the steam entering high-humidity regions at the end of expansion, which protects the blades and increases [[W_neto]]. Reheating also raises the mean heat absorption temperature, bringing the cycle closer to the Carnot limit.

## Real student questions

**Why does the Rankine cycle use a condenser if that means rejecting heat?**
Because condensing steam to liquid requires far less volume than keeping it as gas. The pump that returns the liquid to its initial state consumes a tiny fraction of the turbine work. Without a condenser, a closed cycle would not be energetically viable.

**Why is the Carnot cycle not used in practice?**
The Carnot cycle requires isothermal heat absorption and rejection processes, which in practice demand infinite heat exchanger areas or process rates approaching zero. It is not technically or economically feasible.

**What is the difference between the ideal and real [[eta_th]]?**
Irreversibilities in the compressor, turbine and heat exchangers reduce the real [[eta_th]] by 20 % to 40 % compared to the ideal. The key data are the isentropic efficiencies of each component.

**How does [[gamma]] affect Brayton cycle efficiency?**
Higher [[gamma]] means temperature rises more in adiabatic compression. This increases compression work but also the expansion potential in the turbine. For a fixed [[r_p]], higher [[gamma]] produces higher [[eta_th]].

## Cross-cutting connections and study paths

The Brayton cycle connects directly with the [Carnot cycle](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/carnot) leaf, whose efficiency is the theoretical upper limit for any cycle operating between [[T_H]] and [[T_C]]. Comparing [[eta_th]] of Brayton with Carnot reveals exactly what fraction of the thermodynamic potential is harnessed.

The [Diesel cycle](leaf:fisica-clasica/termodinamica/maquinas-termicas/ciclos-termodinamicos/diesel) shares adiabatic compression and expansion with Brayton but differs in the heat addition process. Comparing the three gas cycles (Otto, Diesel, Brayton) for the same compression ratio shows that Brayton is the most efficient of the three.

## Final synthesis

The Brayton and Rankine cycles transform high-temperature heat into mechanical work through optimized sequences of thermodynamic processes. [[eta_th]] of Brayton depends on [[r_p]] and [[gamma]]; that of Rankine depends on [[T_H]], [[T_C]] and improvements such as reheating and regeneration. In both cases, [[W_neto]] is the difference between turbine work and compressor or pump work, and [[Q_C]] is the heat inevitably rejected to the environment by mandate of the second law.
