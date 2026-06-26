# Applications

## 1. Thermal diagnosis of buildings

Dominant variable: [[flujo_radiativo]]
Validity limit: 250 K ≤ [[temperatura_absoluta]] ≤ 330 K and approximately uniform [[emisividad]]

Building thermal cameras estimate differences in [[temperatura_absoluta]] from infrared [[flujo_radiativo]]. A poorly insulated facade may show warmer areas in winter because they conduct energy from inside and emit more outward. The [[emisividad]] of paint, brick, glass, or metal changes the reading. What is measured is radiation, not direct temperature. For a specific region, [[flujo_radiativo]] allows comparison without depending on total [[area_superficie]]. To estimate losses from a full wall, effective surface must be included.

This application predicts where energy is being lost, but it also constrains overconfident interpretation. A bright spot in a thermal image may indicate a real leak, a different [[emisividad]], or a reflection from another source. The radiative [[temperatura_ambiente]] of the sky or nearby buildings can alter [[potencia_neta]], especially on clear nights. A serious inspection therefore combines image, material, viewing angle, and environmental conditions. The radiation model acts as a conceptual lantern: it separates the part of the signal due to temperature from the part due to surface and surroundings.

## 2. Furnaces, resistors, and incandescent surfaces

Dominant variable: [[potencia_radiada]]
Validity limit: [[temperatura_absoluta]] > 600 K, defined [[area_superficie]], and 0 ≤ [[emisividad]] ≤ 1

In furnaces, electric resistors, and hot plates, thermal radiation can dominate energy exchange. [[potencia_radiada]] estimates how much a hot surface emits toward colder pieces or enclosure walls. [[temperatura_absoluta]] is decisive: a small temperature increase can multiply emission. [[area_superficie]] sets how much emitting region participates, and [[emisividad]] depends on oxidation, roughness, or coating.

This application measures or predicts heating power, losses toward walls, and the rate at which a workpiece receives energy. It also compares surface treatments. A dark resistor can transfer more useful radiation than a shiny surface at the same [[temperatura_absoluta]]. The limit appears when furnace geometry does not allow every surface to see every other surface, or when radiative shadows exist. In furnaces with moving air, radiative [[potencia_neta]] must be combined with convection. In high-precision furnaces, [[emisividad]] may vary with temperature and wavelength, so the gray model is only the first floor of the tower.

## 3. Thermal control of satellites

Dominant variable: [[potencia_neta]]
Validity limit: space vacuum, characterized surfaces, and radiation dominant while external convection is absent

In satellites, external convection is practically absent, so thermal control depends strongly on radiation. A surface emits according to [[temperatura_absoluta]], [[area_superficie]], and [[emisividad]], but also absorbs solar, terrestrial, or internal radiation. [[potencia_neta]] decides whether a panel gains or loses energy. Coatings are selected to control [[emisividad]] and absorption.

This application predicts thermal equilibrium, overheating risks, and radiator needs. A satellite may alternate between sunlight and shadow, so its effective radiative [[temperatura_ambiente]] changes along the orbit. A radiator with large [[area_superficie]] and high [[emisividad]] can reject energy to space, while sensitive electronics are insulated to avoid extreme thermal swings. The validity limit appears if orientation, eclipses, planetary reflection, internal conduction, or wavelength-dependent optical properties are ignored. Still, the base question remains the same: how much is emitted, how much is received, and what net balance remains?

## 4. Non-contact infrared thermometry

Dominant variable: [[emisividad]]
Validity limit: 0 < [[emisividad]] ≤ 1, visible surface, and controlled radiative environment

An infrared thermometer estimates [[temperatura_absoluta]] from received radiation. To convert signal into temperature it needs an assumed or configured [[emisividad]]. If the chosen value does not match the material, the result can be misleading. Human skin, a matte wall, and polished metal are not read in the same way. This application measures radiation to predict temperature, reversing the usual reasoning from [[potencia_radiada]].

[[temperatura_ambiente]] must also be considered, because reflective surfaces can pick up radiation from nearby objects. In electrical maintenance, a hot connection may indicate risk; in medicine, a skin reading depends on distance, skin condition, sweat, and surroundings; in cooking, a shiny pan can fool the sensor. The validity limit is not only in the formula, but in the measurement scene. The visible [[area_superficie]] must properly fill the sensor field, and [[emisividad]] must be adjusted. Without that care, the number may look surgical while behaving like a compass beside a magnet.

## 5. Nighttime radiative cooling

Dominant variable: [[temperatura_ambiente]]
Validity limit: clear sky, weak wind, and radiative [[temperatura_ambiente]] lower than ground temperature

On clear nights, cars, roofs, or crops can cool by radiating toward a sky with very low radiative [[temperatura_ambiente]]. Even if air is not below freezing, [[potencia_neta]] can favor energy loss from the surface. High [[emisividad]] increases that loss, and exposed [[area_superficie]] determines total power. This application explains dew, frost, and roof cooling.

It is also used in materials designed for passive cooling. A coating may seek high [[emisividad]] in the infrared to emit energy toward the sky while keeping low solar absorption during the day. In agriculture, understanding nighttime radiation helps anticipate frost on leaves or fruit even when the air thermometer does not look alarming. The model fails if clouds, strong wind, or high humidity are present, because they change incoming radiation and add convection. The correct reading is not that “cold falls from the sky,” but that the surface loses net energy toward an effectively colder radiative environment.