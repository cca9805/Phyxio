# First Law of Thermodynamics

## Conceptual context

The first law of thermodynamics is an energy-conservation statement for a thermodynamic system. It does not say that heat and work are stored inside matter. It says that energy can cross the system boundary as [[calor_intercambiado]] or [[trabajo_sobre_sistema]], and that the net effect inside the system is [[variacion_energia_interna]]. The boundary is therefore the central object of the model: it decides what belongs to the system and what belongs to the surroundings. Once that boundary is fixed, the question becomes operational: how do heat, work, and internal energy change combine to describe the same physical process?

## 🟢 Essential level

The first law is an energy account book for a closed system. If energy enters as [[calor_intercambiado]] or as [[trabajo_sobre_sistema]], the system gains internal energy. If energy leaves through either route, the system loses internal energy. The key distinction is between transfer and storage: the system stores internal energy, not heat or work. Heat is transfer caused by a temperature difference; work is transfer caused by mechanical action such as compression, expansion, pushing, or deformation. [[variacion_energia_interna]] is the result of the accounting. A positive value means the final state contains more internal energy than the initial state; a negative value means the opposite. Therefore every problem must begin by fixing the sign convention before adding all process terms consistently and carefully.

## 🔵 Formal level

This leaf uses the convention of work done on the system. With that convention, [[calor_intercambiado]] is positive when heat enters the system, and [[trabajo_sobre_sistema]] is positive when the surroundings do work on the system. The central relation is:

{{f:primera_ley_balance}}

This formula does not mean that heat or work are state variables. It means that both are transfer mechanisms that modify internal energy. Internal energy itself is a state function, so its change is defined by comparing the final state with the initial state:

{{f:definicion_variacion_energia_interna}}

Therefore [[variacion_energia_interna]] depends on [[energia_interna_final]] and [[energia_interna_inicial]], not on the path. Two different processes can have the same internal energy change while distributing energy differently between [[calor_intercambiado]] and [[trabajo_sobre_sistema]]. In an adiabatic process, heat transfer is negligible, so the balance reduces to:

{{f:proceso_adiabatico}}

The formal reading requires three checks: all quantities must use energy units, one sign convention must be kept throughout, and the system must be closed so that no energy carried by matter is missing. It also requires separating state data from process data. [[energia_interna_inicial]] and [[energia_interna_final]] describe states; [[calor_intercambiado]] and [[trabajo_sobre_sistema]] describe how energy crossed the boundary during the process.

## 🔴 Structural level

The first law in this form rests on explicit assumptions. The first is that the system is closed: matter does not enter or leave. If steam, fuel, air, or liquid crosses the boundary, that mass carries energy, and the simple closed-system balance is incomplete. The second assumption is that all relevant energy transfers have been classified as [[calor_intercambiado]] or [[trabajo_sobre_sistema]]. A real machine may include electrical input, shaft work, expansion work, friction, thermal losses, or chemical energy; each contribution must be translated into the balance with the correct sign.

The invariant is energy conservation. What changes from one problem to another is the partition between thermal transfer, mechanical transfer, and internal accumulation. [[variacion_energia_interna]] is a state-function change: if [[energia_interna_final]] and [[energia_interna_inicial]] are fixed, its value is fixed even if the process is slow, fast, reversible, or irreversible. By contrast, [[calor_intercambiado]] and [[trabajo_sobre_sistema]] depend on the path. A gas may reach the same final state after receiving much heat and doing work, or after receiving little heat and being compressed differently.

The model breaks down when the system boundary is ambiguous, when the process is not closed, or when the work convention is mixed. Many books use work done by the system as positive; then the work term has the opposite sign from this leaf. Here, compression by the surroundings increases internal energy unless heat leaves enough to compensate. In the energy free-body diagram, the visual reading should show arrows crossing the boundary: incoming arrows add, outgoing arrows subtract, and the result remains inside as internal energy change. If the net sum is zero, the system may have exchanged large amounts of energy but still ends with the same internal energy.

Boundary cases are especially useful. In a complete cycle, [[energia_interna_final]] equals [[energia_interna_inicial]], so [[variacion_energia_interna]] is zero. In an adiabatic process, [[calor_intercambiado]] is neglected and internal change comes from work. In a rigid container, expansion work may be zero, so incoming heat appears directly as internal energy change. These limits guide the graph reading: remove the missing arrow, keep the boundary fixed, and check whether the internal label should grow, shrink, or remain unchanged.

## Deep physical interpretation

Internal energy represents microscopic energy associated with the state of the system: molecular motion, bonds, interactions, and internal configurations. The first law does not require knowing every microscopic detail. It requires measuring what crosses the boundary. [[calor_intercambiado]] is not a substance; it is transfer caused by temperature imbalance. [[trabajo_sobre_sistema]] is not stored content either; it is organized mechanical transfer. The law is powerful because very different processes become one accounting statement. Heating a gas, compressing it with a piston, or letting it expand are different physical actions, yet they all determine [[variacion_energia_interna]] once the system is properly chosen.

## Order of magnitude

In a laboratory, heating 100 g of water by a few kelvin involves [[calor_intercambiado]] of order thousands of joules. Compressing air in a syringe may involve [[trabajo_sobre_sistema]] of tens to hundreds of joules. Engines, boilers, and turbines operate at kJ or MJ scales. A value of 1 J for [[variacion_energia_interna]] in an industrial boiler would be suspiciously small; 1 MJ in a small classroom gas sample would be excessive.

## Personalized resolution method

First define the system and draw its boundary. Then fix the convention: here [[calor_intercambiado]] and [[trabajo_sobre_sistema]] are positive when entering the system. Third, classify each given quantity as heat transfer, mechanical transfer, or state energy. Fourth, convert all units to joules before operating. Fifth, apply the relevant balance and interpret the sign of [[variacion_energia_interna]] only at the end. If the result contradicts physical intuition, review signs, units, and whether the system was really closed.

## Special cases and extended example

In an adiabatic process, thermal insulation makes [[calor_intercambiado]] negligible. If a gas is compressed under those conditions, positive [[trabajo_sobre_sistema]] increases internal energy and usually temperature. In a constant-volume process, expansion work may be zero; then incoming heat appears as internal energy change. In a cycle, such as an engine returning to the same state after each loop, [[energia_interna_final]] and [[energia_interna_inicial]] coincide. Heat may enter and work may leave, but the net internal energy change over the closed cycle is zero. This allows machines to be analyzed without imagining that they accumulate energy indefinitely.

## Real student questions

**If heat enters, does temperature always rise?** Not always. [[calor_intercambiado]] may enter while the system does work on the surroundings, so part of the transferred energy does not remain as internal energy.

**Why does work have the opposite sign in some books?** Because some texts define positive work as work done by the system. This leaf uses [[trabajo_sobre_sistema]], positive when the surroundings work on the system.

**Can [[variacion_energia_interna]] be zero even if heat is exchanged?** Yes. In a cycle, or in a process where incoming heat is compensated by outgoing work, the final internal state may equal the initial state.

## Cross-cutting connections and study paths

The first law connects with expansion work, adiabatic processes, heat engines, and the internal energy of ideal gases. It also prepares the second law, because conserving energy is not enough to decide which processes occur spontaneously. First comes accounting; then comes direction.

## Final synthesis

The first law is the energy accounting of a closed system. [[calor_intercambiado]] and [[trabajo_sobre_sistema]] cross the boundary; [[variacion_energia_interna]] remains as the internal result. Understanding signs, units, and system boundary is understanding the law.
