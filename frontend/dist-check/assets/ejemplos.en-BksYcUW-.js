const e=`# Exam-type example

## Problem statement

A tank receives hot water through one inlet and discharges water through one outlet. The inlet flow is 2.0 kg/s and the outlet flow is 1.5 kg/s. The inlet stream carries a specific energy of 420 kJ/kg and the outlet is estimated at 380 kJ/kg. The tank receives 8 kW of heat from the surroundings and delivers 3 kW as auxiliary mechanical work. Decide whether the system accumulates mass and energy.

## Data

- Inlet mass flow: [[m_dot]] equal to 2.0 kg/s.
- Outlet mass flow: [[m_dot]] equal to 1.5 kg/s.
- Inlet specific energy: [[e_flujo]] equal to 420 kJ/kg.
- Outlet specific energy: [[e_flujo]] equal to 380 kJ/kg.
- Heat transfer rate: [[Q_dot]] equal to 8 kW into the system.
- Work rate: [[W_dot]] equal to 3 kW leaving the system.

## System definition

The system is the whole tank with its inlet and outlet sections. It is open because mass crosses the boundary. The boundary also allows heat from the surroundings and mechanical work outward. Internal content is described by [[m_sys]] and [[E_sys]].

## Physical model

We use the control-volume model with mean properties in each stream. The mass balance calculates [[dm_sys]] from inlet and outlet [[m_dot]]. The energy balance calculates [[dE_sys]] by adding [[Q_dot]], [[W_dot]], and stream power [[m_dot]] times [[e_flujo]]. Here [[e_flujo]] is taken as stream specific energy; if velocity and elevation were negligible, it would be practically the enthalpy [[h]].

## Model justification

The model is physically explicit because every boundary channel is identified. The inlet and outlet carry mass; therefore heat minus work is not enough. The inlet stream carries more specific energy than the outlet, and the inlet flow is also larger. Both causes favor energy accumulation. Output work competes against that accumulation, while incoming heat reinforces it.

## Symbolic solution

Mass balance:

{{f:balance_masa_abierto}}

Specific energy carried by a stream:

{{f:energia_especifica_flujo}}

Energy balance:

{{f:balance_energia_flujo}}

## Numerical substitution

Mass accumulation is the difference between inlet and outlet: 2.0 kg/s minus 1.5 kg/s. The tank gains 0.5 kg/s, so [[m_sys]] increases. Even though there is an outlet, more water enters than leaves.

For energy, the inlet mass stream contributes 2.0 times 420 kJ/s, or 840 kW. The outlet removes 1.5 times 380 kJ/s, or 570 kW. The mass-transport difference is 270 kW into the system. Adding [[Q_dot]] of 8 kW and subtracting [[W_dot]] of 3 kW gives 275 kW of net energy accumulation. Therefore [[E_sys]] increases rapidly.

In reading symbols, [[dm_sys]] is positive and [[dE_sys]] is also positive. If the tank operated this way for 10 s, it would accumulate 5 kg of water and 2750 kJ of energy. That time estimate confirms that this is not a small rounding issue, but a clear macroscopic evolution of the open system.

## Dimensional validation

- [[m_dot]] has dimension \`[M T⁻¹]\`; a difference of mass flows also remains in kg/s.
- [[e_flujo]] has dimension \`[L² T⁻²]\`, equivalent to J/kg.
- The product of [[m_dot]] and [[e_flujo]] has dimension \`[M L² T⁻³]\`, which is W.
- [[Q_dot]] and [[W_dot]] are also measured in W, so the energy balance is dimensionally coherent.

## Physical interpretation

The tank is not at steady state. It accumulates mass because more enters than leaves, and it accumulates energy because the incoming stream dominates over the outgoing stream and over delivered work. The result shows the difference between open and closed systems: even with little external heat, energy can grow strongly through mass transport.

# Real-world example

## Context

A ventilation unit introduces outdoor air into a room and extracts indoor air. If flows do not match, room pressure changes; if the specific energies of the streams differ, the HVAC unit must compensate. The room is modeled as an open system because air crosses doors, grilles, and ducts.

## Physical estimation

If 0.30 kg/s of air enters and 0.28 kg/s leaves, air accumulation is 0.02 kg/s. In one minute that equals 1.2 kg of additional air if no other leak appears. For energy, a 10 kJ/kg difference between incoming and outgoing air with 0.30 kg/s already represents about 3 kW, comparable to a domestic HVAC unit.

If the air moves slowly and there are no large elevation changes, specific energy can be approximated by [[h]]. Then an enthalpy difference of 10 kJ/kg with 0.30 kg/s gives the same 3 kW reading. If the room contains about 60 kg of air, an accumulation of 1.2 kg per minute is already a relative change near 2% per minute, too large to call steady without compensating leaks.

## Interpretation

The quantitative reading explains why a room may look stable for a few seconds while still accumulating mass or energy. The open-system model forces attention to flows, not only temperatures. If ventilation is balanced in mass but not in energy, [[m_sys]] may remain constant while [[E_sys]] changes through stream energy and equipment [[Q_dot]].

The estimate also shows why the mass balance must be written before the energy balance. If one does not know whether [[m_sys]] grows or stays constant, the required thermal power is easy to misread. The open system orders the reading: boundary first, streams next, energy afterward.
`;export{e as default};
