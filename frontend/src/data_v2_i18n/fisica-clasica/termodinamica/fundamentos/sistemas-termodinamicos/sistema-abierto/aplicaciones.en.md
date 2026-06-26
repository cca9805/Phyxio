# Applications of Open Systems

## 1. Steam and Gas Turbines

A turbine is modeled as an open system because a fluid enters, crosses the device, and leaves with lower specific energy. The enthalpy drop becomes shaft work, with losses due to heat, friction, and residual kinetic energy. The energy balance estimates [[W_dot]] without tracking each steam particle.

Dominant variable: [[m_dot]], because produced power scales with the flow rate crossing the machine.

Validity limit: If the flow is unsteady, if intense condensation occurs, or if properties vary strongly across the outlet section, a more detailed model is needed.

The physical reading is direct: a small energy drop per kilogram can produce large power if the flow rate is high. Industrial turbines therefore combine high [[m_dot]] with differences in [[h]] of tens or hundreds of kJ/kg.

In real operation, the balance helps detect losses. If measured shaft power is lower than expected from the drop in [[h]], the difference points to irreversibilities, leakage, outlet kinetic energy, or unaccounted heat transfer. The open-system model therefore does not only calculate ideal power; it also organizes equipment diagnosis.

## 2. Compressors and Pumps

Compressors and pumps consume work to raise the specific energy of a stream. They are open systems because the fluid does not remain inside the device; it enters, receives mechanical energy, and exits in another state. In liquid pumps, pressure increase often dominates; in gas compressors, temperature also changes appreciably.

Dominant variable: [[W_dot]], because the purpose of the device is to transfer power to the fluid.

Validity limit: If heating, leakage, or pulsating flow is important, the simple steady balance may underestimate required energy.

The balance separates useful power and losses. If outlet specific energy does not rise as much as supplied work, the difference appears as heat, irreversibility, or internal energy not converted into useful flow effect.

In hydraulic networks, the same approach estimates energy required per unit flow. Increasing [[m_dot]] without changing the specific energy rise directly increases required power. A small pump can move much water if the pressure rise is low, while a high-pressure pump demands large [[W_dot]] even with moderate flow.

## 3. Heat Exchangers

A heat exchanger has at least two streams crossing the equipment boundaries. It is often idealized with no shaft work and negligible external heat loss, so energy lost by one stream is gained by the other. It is open even if the device looks like a sealed casing.

Dominant variable: [[Q_dot]], because it expresses the rate of energy transfer between streams.

Validity limit: If losses to the environment, mixing between streams, or thermal accumulation during startup are large, the steady model must be corrected.

The practical use is sizing exchange surfaces and estimating outlet temperatures. A small flow can be heated strongly; a large flow may require large power to change only a few degrees.

During startup, the heat exchanger is not yet at steady state: part of the energy heats the casing and internal walls. During that interval [[E_sys]] changes and the balance must include accumulation. Once stabilized, the same device can be treated as steady and stream terms dominate the reading.

## 4. Building Ventilation and HVAC

A ventilated room behaves as an open system because air enters and leaves. Even when the air mass looks almost constant, energy transported by streams may dominate the thermal balance. Opening a window changes heating or cooling load even if the walls do not change immediately.

Dominant variable: [[e_flujo]], because each kilogram of air carries sensible energy and, in extended models, moisture.

Validity limit: If stratification, dead zones, or strong local currents exist, a single mean temperature does not describe the room well.

This application connects thermodynamics with comfort. The system may be steady in mass without being in thermal equilibrium with surfaces, occupants, and solar radiation.

It also quantifies infiltration. If unmeasured cold air enters, the apparent energy balance does not close: the equipment supplies more [[Q_dot]] than expected to maintain temperature. Reinterpreting the room as an open system with an additional inlet turns the failure into an uncounted flow instead of a mystery.

## 5. Reactors and Biological Processes

Continuous reactors and living organisms exchange matter and energy constantly. Reactants enter and products leave a reactor; nutrients and oxygen enter a living organism, while waste, heat, and work leave. The open-system model allows balances even when internal composition changes.

Dominant variable: [[m_dot]], because inlet and outlet rates control residence time, accumulation, and conversion.

Validity limit: If reactions are fast, concentration gradients are large, or internal compartments matter, the single control volume must be split into submodels.

The central idea is that being alive or operating continuously does not place a system outside conservation. It means conservation must be applied by counting flows. The mass balance prevents fictitious creation or destruction of matter, and the energy balance shows where observed heat or work comes from.

In biological processes, the model also separates storage from rate. An organism may keep body mass nearly constant for hours while exchanging oxygen, water, food, heat, and muscular work. Constancy of [[m_sys]] does not imply absence of metabolism; it means inlets, outlets, and internal conversions balance over the observed scale.
