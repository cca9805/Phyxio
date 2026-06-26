# Applications

## 1. Domestic refrigerator

### Application context

The domestic refrigerator maintains food at temperatures between 2 and 8 degrees Celsius (275 to 281 K) by extracting heat [[Q_C]] from the interior and rejecting it to the kitchen environment as [[Q_H]]. The compressor operates cyclically controlled by a thermostat, consuming work [[W]].

### Relevant magnitudes

- [[T_C]]: 268 to 278 K (refrigerator or freezer interior)
- [[T_H]]: 295 to 313 K (kitchen environment)
- [[Q_C]]: 150 to 400 W (cooling capacity)
- [[W]]: 60 to 150 W (compressor power)
- [[Q_H]]: 210 to 550 W (heat rejected by condenser)
- [[Delta_S_total]]: 0.2 to 1.5 W/K (entropy production)

Dominant variable: The difference [[T_H]] minus [[T_C]] determines the minimum Carnot work and therefore the compressor energy consumption.

Validity limit: The model ceases to apply simply if the system has multiple temperature zones, if the compressor operates with variable-speed inverter, or if the door is opened frequently altering [[T_C]].

## 2. Heat pump for heating

### Application context

The air-source heat pump extracts heat [[Q_C]] from outdoor air (cold reservoir) and delivers it as [[Q_H]] to the building interior (hot reservoir). The operating principle is identical to the refrigerator, but the useful effect is [[Q_H]] delivered to the interior, making the system more efficient than direct electric heating.

### Relevant magnitudes

- [[T_C]]: 263 to 283 K (outdoor air in winter)
- [[T_H]]: 293 to 323 K (indoor distribution temperature)
- [[Q_H]]: 3000 to 15000 W (heating capacity)
- [[W]]: 1000 to 5000 W (compressor power)
- [[Q_C]]: 2000 to 10000 W (heat extracted from outdoors)

Dominant variable: The outdoor temperature [[T_C]] determines the efficiency and capacity of the system. The lower [[T_C]], the greater the required [[W]].

Validity limit: Below [[T_C]] of 253 K (minus 20 C), many air-source pumps lose capacity and require auxiliary resistance heaters, departing from the pure reversed cycle.

## 3. Air conditioning (cooling mode)

### Application context

The split air conditioner extracts heat [[Q_C]] from the building interior and rejects it as [[Q_H]] outdoors. It operates as a refrigerator where [[T_C]] is the indoor temperature and [[T_H]] is the outdoor temperature. The typical temperature difference is small (10 to 20 K), allowing high COP.

### Relevant magnitudes

- [[T_C]]: 293 to 299 K (interior at 20-26 C)
- [[T_H]]: 303 to 318 K (exterior in summer)
- [[Q_C]]: 2000 to 12000 W (cooling capacity)
- [[W]]: 500 to 4000 W (compressor consumption)
- [[Delta_S_total]]: 0.5 to 5 W/K (entropy production)

Dominant variable: The difference [[T_H]] minus [[T_C]], typically 10 to 25 K, determines the theoretical and real COP of the system.

Validity limit: The principle becomes more complex if simultaneous dehumidification occurs or if the equipment operates in inverter mode with variable partial load.

## 4. Cryogenics (gas liquefaction)

### Application context

To liquefy nitrogen (77 K) or helium (4 K), reversed cycles with extreme temperature differences are needed. The operating principle is identical: [[Q_H]] equals [[Q_C]] plus [[W]], but the required work is enormous compared to the extracted energy.

### Relevant magnitudes

- [[T_C]]: 4 to 77 K (cryogenic temperatures)
- [[T_H]]: 293 to 310 K (environment)
- Minimum [[W]] / [[Q_C]]: 2.9 (nitrogen) to 72 (helium)
- [[Delta_S_total]]: very high due to multiple stages

Dominant variable: The extremely low cryogenic [[T_C]] makes the ratio ([[T_H]] minus [[T_C]]) divided by [[T_C]] enormous.

Validity limit: The single-cycle model is not applicable; cascades or multi-stage cycles are required. The real Carnot fraction is 5 to 15 percent.

## 5. Industrial food refrigeration

### Application context

Industrial cold rooms maintain products at temperatures of minus 18 to minus 40 degrees Celsius for rapid freezing. They operate with two-stage compression systems, extracting [[Q_C]] from the product and rejecting [[Q_H]] through cooling towers.

### Relevant magnitudes

- [[T_C]]: 233 to 255 K (freezing chamber)
- [[T_H]]: 303 to 318 K (condensation with cooling tower)
- [[Q_C]]: 50 to 500 kW (total capacity)
- [[W]]: 25 to 300 kW (installed power)
- [[Delta_S_total]]: high due to irreversibilities in two-stage compression

Dominant variable: The temperature difference of 50 to 85 K makes minimum [[W]] a significant fraction of [[Q_C]], increasing operational cost.

Validity limit: Two-stage systems reduce irreversibilities but add complexity. The simple single-cycle model underestimates real work by 30 to 50 percent.

## Application synthesis

In all applications, the fundamental principle is identical: [[Q_H]] equals [[Q_C]] plus [[W]], and [[Delta_S_total]] must be non-negative. What changes between applications is the temperature difference [[T_H]] minus [[T_C]], which determines the minimum work and system efficiency. The smaller the temperature difference, the less work needed and the higher the COP. In cryogenics, where differences are extreme, the principle remains valid but real work completely dominates system operation. Understanding these operating regimes helps engineers select appropriate technologies: simple single-stage compressors for domestic refrigeration with small temperature differences, cascade systems for deep freezing, and multi-stage expansion systems for gas liquefaction at cryogenic temperatures. The universal validity of the energy balance and the entropy constraint makes this principle the foundation for all thermal engineering design involving heat transfer against gradients.
