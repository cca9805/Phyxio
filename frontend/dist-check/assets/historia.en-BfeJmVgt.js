const e=`# Historical Evolution of Resistive Heating

## Historical problem

For most of the 20th century, residential heating was evaluated almost exclusively by an equipment's ability to provide immediate heat, without considering the [[electrical consumption|E]] accumulated over the season. Electric resistive heating spread massively in the 1960s and 70s thanks to the electrification of homes and the perception that electricity was a "clean" and convenient source. Installing an electric radiator was trivial compared to central hot-water heating systems, which required boilers, pipes, and hydraulic radiators.

The fundamental problem was the absence of an analytical framework for evaluating the cost of prolonged use. [[emitter power|P]] was the only indicator communicated; [[effective usage time|t]] was ignored as an analysis variable. No one systematically calculated seasonal [[electrical consumption|E]] or compared it to the heat the building actually needed.

## Prior conceptual difficulty

The concept of [[coefficient of performance|COP]] as a tool for technological comparison was practically unknown outside academic circles. Users lacked the distinction between local conversion efficiency and the energy efficiency of the complete system. This led to a systematic confusion: equipment with [[conversion efficiency|eta]] ≈ 1 seemed optimal, without considering that this same value of [[COP]] = 1 meant exactly the worst theoretical case for a heating system operating with an external heat source (the air) available free of charge.

The [[useful heat|Q]] required for a home depended on the building envelope, something users did not associate with heating costs. The implicit formula was "if I'm cold, I buy a more powerful radiator," ignoring that demand could be reduced by investing in insulation.

## What changed

The energy crises of the 1970s and the subsequent sustained rise in electricity prices forced a change in perspective. For the first time, users began consciously relating [[electrical consumption|E]] to economic cost. The appearance on the market of domestic heat pumps in the 1980s–90s, with [[COP]] values of 2.5 to 4, made directly visible the energy advantage of thermodynamic cycles over direct conversion.

Resistive heating did not disappear, but its role changed radically: from universal solution to contextual solution. Today it is used primarily as low-installation-cost spot heating, as temporary support for demand peaks, or as a reference for calculating the potential savings of an alternative technology. [[COP]] = 1 went from being an implicit characteristic to being the explicit comparison point against which every more efficient system is measured.

## Impact on physics

This evolution drove the development of residential energy audit methodologies. The distinction between nominal [[emitter power|P]] and real [[effective usage time|t]] became a basic competence for installation technicians. Portable consumption meters, available since the 2000s at accessible prices, democratized the ability to measure the actual [[electrical consumption|E]] of any resistive emitter with ±1% accuracy.

## Connection with modern physics

Today, resistive heating remains the clearest pedagogical model for introducing the concepts of energy, power, and cost in domestic contexts, precisely because its physical transparency allows establishing the baseline from which all other technologies are evaluated. With the proliferation of the Internet of Things (IoT) and smart plugs, it is now possible to measure the [[electrical consumption|E]] of any resistive emitter in real time and automatically compare it with the cost of more efficient alternatives. The resistive [[COP]] = 1 has gone from being an implicit property to being an active reference data point in home energy management platforms.
`;export{e as default};
