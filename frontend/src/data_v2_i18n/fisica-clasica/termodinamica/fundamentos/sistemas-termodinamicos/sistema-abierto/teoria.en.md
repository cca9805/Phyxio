# Open System

## Conceptual context

An open system is a selected portion of reality used to study mass and energy exchange. Its defining feature is not that it is literally exposed to air, but that its boundary allows matter to cross. A turbine, nozzle, compressor, boiling pot with escaping vapor, living organism, or ventilated room can be modeled as an open system when inlets and outlets matter.

The boundary of an open system is often called a control volume. It may be fixed, like a pipe section, or idealized as moving. The important step is to state which streams cross the boundary and what energy they carry. The core magnitudes are mass flow rate [[m_dot]], contained mass [[m_sys]], stored energy [[E_sys]], heat transfer rate [[Q_dot]], work rate [[W_dot]], and specific flow energy [[e_flujo]].

## 🟢 Essential Level

The essential idea is that an open system is not conserved just because it is drawn inside a boundary. If more mass enters than leaves, [[m_sys]] increases. If more mass leaves than enters, [[m_sys]] decreases. If inlets and outlets balance, contained mass may remain constant even while continuous flow crosses the boundary.

Energy behaves similarly, but it has more channels. Energy may cross as heat [[Q_dot]], as work [[W_dot]], or attached to the mass that enters and leaves. This last channel distinguishes an open system from a closed system: each kilogram of fluid carries enthalpy [[h]], kinetic energy, and potential energy. Ignoring this transport gives an incomplete balance.

> [!NOTE]
> Open system means that mass crosses the boundary. If only energy crosses and mass does not, the system is closed, not open.

## 🔵 Formal Level

The mass balance is:

{{f:balance_masa_abierto}}

The specific energy of a stream is summarized by:

{{f:energia_especifica_flujo}}

The macroscopic energy balance for the control volume is:

{{f:balance_energia_flujo}}

These relations are balances, not new laws separate from conservation. The first counts matter. The second defines the energy accompanying each unit mass. The third combines heat, work, and energy transported by streams. All require an explicit sign convention: commonly [[Q_dot]] is positive into the system, [[W_dot]] is positive as produced power leaving the system, and streams are separated into inlets and outlets.

At steady state, the derivatives of [[m_sys]] and [[E_sys]] may be zero. That does not make the system closed. A turbine in steady operation keeps internal mass and energy almost constant, yet receives and expels mass continuously. Steadiness only says there is no net accumulation, not that there is no exchange.

Formally, every term in the balance must answer a boundary question. Mass inlets add, mass outlets subtract, heat is signed according to whether it enters or leaves, and work depends on the chosen convention. This discipline prevents mixing a closed-system balance with an open-system one. It also checks results: if [[dm_sys]] is zero but [[m_dot]] is not, flow is compensated; if [[dE_sys]] is zero with large powers, energy exchange is steady.

## 🔴 Structural Level

The model structure depends on how the boundary is chosen. If the boundary cuts a pipe, a term involving [[m_dot]] appears with stream properties. If the boundary surrounds a whole tank, there may be several inlets and outlets. If it surrounds an electrical component with cooling, work, heat, and coolant flow can cross at the same time.

It also matters which properties can be neglected. In many thermal machines, enthalpy [[h]] dominates kinetic and potential energy; in nozzles and diffusers, kinetic energy may be central; in lines with large elevation changes, potential energy is not always negligible. The correct decision is made by comparing orders of magnitude, not by habit.

The open system is the gateway to the first law in engineering. It allows real equipment to be studied without tracking each particle individually. Instead of following a fixed mass, one studies a volume through which streams pass. This choice simplifies turbines, compressors, heat exchangers, pumps, and reactors, provided the streams are well defined.

Another structural point is separating accumulation from transport. [[dm_sys]] and [[dE_sys]] describe internal slopes: how mass and energy inside the control volume change. Terms containing [[m_dot]] describe transport through the boundary. In an ideal steady state the internal slopes are zero, but transport terms may still be very large.

## Deep Physical Interpretation

The boundary of an open system acts as a counter. It counts how much mass enters, how much leaves, what energy each stream carries, and what energy crosses without mass as heat or work. If the net balance is positive, the system accumulates. If it is negative, it loses material or energy. If it is zero, it may be in steady operation with permanent flow.

Enthalpy appears because pushing mass through a flow boundary requires flow work. The energy balance for open systems therefore uses [[h]] rather than only internal energy. This is not cosmetic notation: it prevents forgetting the energy associated with introducing or expelling fluid.

## Order of Magnitude

A mass flow [[m_dot]] of 1 kg/s of water with a specific energy difference of 10 kJ/kg transports 10 kW. In a turbine, 10 kg/s with an enthalpy drop of 100 kJ/kg corresponds to 1 MW ideally. These numbers show why the mass-transport term may dominate over small heat losses.

In small laboratories, [[Q_dot]] may be tens of watts; in industrial plants, it may be megawatts. The same balance applies, but physical interpretation requires scale.

## Personalized resolution method

1. Draw the open-system boundary.
2. Label every inlet and outlet with [[m_dot]].
3. Choose the sign convention for heat and work.
4. Write the mass balance first.
5. Assign each stream its [[e_flujo]], or its [[h]] if other terms are negligible.
6. Write the energy balance and only then apply simplifications.

## Special Cases and Extended Example

**Steady state.** Inlets and outlets balance. [[m_sys]] and [[E_sys]] do not change, but the system is still open if [[m_dot]] exists.

**Tank filling.** If mass enters and none leaves, [[m_sys]] increases. Even without shaft work, stored energy can grow because the incoming stream carries energy.

**Ideal turbine.** In an adiabatic steady turbine, the enthalpy drop of the stream mainly becomes output [[W_dot]]. The system is open because the fluid passes through the device.

## Real Student Questions

**Q: Can an open system have constant mass?**

A: Yes. Total inlet flow only needs to equal total outlet flow. Constant [[m_sys]] does not mean the system is closed.

**Q: Why does enthalpy appear instead of only internal energy?**

A: Because mass crossing a flow boundary carries internal energy plus push work. Enthalpy groups both contributions.

**Q: If there is no heat, can the open system still change energy?**

A: Yes. It can change energy through work or through energy entering and leaving with mass.

## Cross-cutting connections and study paths

This leaf connects with closed system, isolated system, thermodynamic equilibrium, first law, enthalpy, thermal machines, fluid dynamics, and steady processes. A natural path is: boundary, mass balance, specific stream energy, energy balance, and then special cases such as turbines, compressors, and heat exchangers.

## Final Synthesis

An open system exchanges mass and energy with its surroundings. Correct reading requires counting inlets, outlets, heat, work, and energy transported by streams. The balance does not ask whether the system "looks still"; it asks what crosses the boundary and what accumulates inside.

The final tool is therefore physical accounting: boundary first, streams next, powers last. If that order is respected, the open system stops being a label and becomes a method for reading real machines and processes.
