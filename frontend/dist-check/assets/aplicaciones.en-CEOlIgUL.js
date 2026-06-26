const e=`## 1. Safety valve in industrial boilers

An industrial steam boiler is essentially a metal container that subjects water and steam to high temperatures and pressures. When the outlet valve accidentally closes while the burner continues supplying heat, the steam behaves as a gas in an isochoric process: the container volume is constant and all thermal energy goes into increasing [[DeltaU]], raising steam temperature and pressure proportionally.

Pressure rises linearly with absolute temperature according to Gay-Lussac's isochoric law, and can exceed the container's rupture limit if there is no relief mechanism. Safety valves are designed to open when pressure exceeds a threshold, converting the process from isochoric to isobaric or venting steam to the exterior. The calculation of that threshold comes directly from isochoric process analysis: for a given volume of steam with [[n]] moles and heat capacity [[Cv]], the pressure increase per degree of temperature is precisely known and allows sizing the valve.

Dominant variable: the absolute temperature of the steam, which determines the pressure exerted on the container walls.
Validity limit: the isochoric model is valid as long as the valve remains closed and no phase change of the steam occurs (partial condensation would alter the effective [[Cv]] calculation).

---

## 2. Otto-cycle combustion engine (combustion phase)

In the ideal Otto cycle of a gasoline engine, the combustion phase (burning of the air-fuel mixture) is modelled as an isochoric process. The piston is momentarily at top dead centre, where its speed is zero, and combustion occurs in such a brief time that the chamber volume can be considered constant during that instant.

During this isochoric phase, the chemical energy released in combustion transforms into [[DeltaU]] of the gas, sharply raising its temperature and pressure without the piston having advanced. It is precisely this elevated pressure that then pushes the piston downward in the expansion stroke (a different, non-isochoric process). The useful work of the engine comes from the subsequent expansion stroke, not from the isochoric combustion phase itself. The efficiency of the ideal Otto cycle depends directly on the ratio between the energy added in the isochoric phase and the work extracted in the expansion.

Dominant variable: the heat of combustion added during the isochoric phase, which determines the pressure and temperature increase at the start of the expansion stroke.
Validity limit: the isochoric combustion model is valid when the engine speed is high enough that combustion time is much shorter than the time of one piston stroke; at low speed, combustion occurs with some piston displacement and the process is no longer strictly isochoric.

---

## 3. Compressed-gas storage in cylinders

Compressed-gas cylinders (medical oxygen, industrial hydrogen, vehicular natural gas) are high-strength steel or alloy containers designed to hold gas at high pressure. When stored in environments with temperature variation (direct sun outdoors, non-air-conditioned spaces), the gas undergoes an isochoric process: the cylinder volume does not change and pressure varies proportionally to absolute temperature.

A medical oxygen cylinder filled to 150 bar at 20 °C (293 K) can reach approximately 164 bar if exposed to an ambient temperature of 50 °C (323 K), because the ratio of 323 to 293 is 1.10. Although the relative increase seems small, at high absolute pressures that 10 % represents 15 additional bar that must fall within the cylinder's safety margin. The design safety factors for compressed-gas cylinders explicitly include the margin for isochoric over-pressure due to ambient temperature variation.

Dominant variable: the ambient temperature to which the cylinder is exposed, which directly determines the internal gas pressure via Gay-Lussac's isochoric law.
Validity limit: the ideal isochoric gas model is valid as long as the gas remains in the gas phase; if temperature drops below the liquefaction point of the gas (for example, propane liquefies at 0 °C at 1 atm), the process is no longer isochoric and the pressure-temperature relationship changes radically.

---

## 4. Constant-volume gas thermometry

The constant-volume gas thermometer is the reference instrument of the thermodynamic temperature scale. It consists of a glass or steel bulb filled with a non-reactive gas (usually helium or nitrogen) connected to a pressure gauge, with a mechanism to keep the gas volume strictly constant during measurement. Temperature is determined by measuring the gas pressure and applying the isochoric proportionality between pressure and absolute temperature.

This thermometer is used as a primary temperature standard because its behaviour directly corresponds to the thermodynamic definition of temperature: the pressure of an ideal gas at constant volume is proportional to absolute temperature, with a proportionality that does not depend on the type of gas in the ideal-gas limit. The constant-volume gas thermometer allows temperature measurements with uncertainty below one thousandth of a kelvin in metrology laboratories, based exclusively on isochoric analysis.

Dominant variable: the gas pressure, which acts as a direct thermometric signal proportional to absolute temperature.
Validity limit: the perfect isochoric model applies when the bulb volume is rigorously maintained constant; in practice, thermal expansion of the bulb introduces a small systematic correction that metrology laboratories compute and compensate.

---

## 5. Aerosol overheating accident analysis

Aerosol containers (deodorant, hairspray, spray paint) hold a mixture of gaseous propellant and product under pressure. If the container is exposed to intense heat sources (inside a car in summer sun, proximity to flame), the propellant gas undergoes an isochoric process because the metal container does not deform appreciably. Internal pressure rises proportionally to absolute temperature until it can exceed the can's rupture pressure, with explosion risk.

Safety agencies (UN and ADR regulations for dangerous goods transport) prohibit exposing aerosol containers to temperatures above 50 °C precisely because of this mechanism. At 50 °C (323 K) compared to the filling temperature of 20 °C (293 K), internal pressure increases by the ratio of 323 to 293, approximately 10 %. Since aerosols are filled at design pressures of 3 to 8 bar, that 10 % increase can bring pressure close to the container's rupture limit if the can already has any structural imperfection.

Dominant variable: the absolute temperature of the propellant gas inside the container, which determines the pressure exerted on the metal wall.
Validity limit: the pure isochoric analysis is valid as long as the propellant remains in the gas phase; if part of the propellant is in the liquid phase (as occurs under normal storage conditions), the relationship between temperature and pressure follows the propellant's vapour pressure curve, which is more complex than the linear isochoric law.
`;export{e as default};
