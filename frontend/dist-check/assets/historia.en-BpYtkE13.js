const e=`# History of domestic electricity cost

## Historical problem

For most of the twentieth century, the domestic electricity bill was perceived as opaque data: a number that arrived at the end of the month without the user having tools to understand where it came from. The [[total bill cost|C_total]] was paid without being able to distinguish which part corresponded to energy consumption, which part was the cost of [[contracted power|P_contratada]], and which part were taxes and regulatory levies. Bill increases were systematically attributed to "the company" without analyzing whether [[energy cost|C_energia]] had increased due to greater use, whether [[billing period days|dias]] were more, or whether the price structure had changed.

## Prior conceptual difficulty

The dominant conceptual model was that cost was proportional to consumption: more kilowatt-hours meant more euros, and less consumption meant less spending. This model completely ignores [[power cost|C_potencia]] as a fixed term and [[additional charges and levies|C_extra]] as charges independent of use. This simplified view led to two structural errors: believing that consuming zero kWh for a month would produce a bill of zero euros, and believing that any reduction in consumption would translate directly into a proportional reduction in [[total bill cost|C_total]].

## What changed

The introduction of time-of-use pricing in the late twentieth century was the first important conceptual step: it revealed that [[energy price per tariff band|precio_i]] was not constant and that the timing of consumption mattered as much as the quantity consumed. Shifting [[energy per tariff period|E_i]] from peak to off-peak hours became a decision with measurable economic impact.

The structural change came with the digitalization of measurement. Smart meters (installed on a large scale in Spain between 2010 and 2018) made it possible for the first time to read consumption at hourly intervals and assign to each kWh the [[energy price per tariff band|precio_i]] corresponding to the exact moment it was consumed. This made it possible to calculate [[energy cost|C_energia]] with real precision, not estimated.

## Conceptual evolution

The most important transition was moving from analyzing [[total bill cost|C_total]] as an undifferentiated whole to decomposing it into its three physically interpretable components. This decomposition transformed domestic bill analysis from passive reading to an active decision tool: what fraction of [[total bill cost|C_total]] can I control with my habits? How much does adjusting [[contracted power|P_contratada]] save? When is it better to invest in equipment efficiency versus changing schedules?

## Impact on physics

The study of [[percentage savings|Ahorro_pct]] in a domestic context is an example of applied physics with direct economic consequences. The need to compare equivalent periods, control confounding variables (days, temperature, occupancy), and separate cause from effect is exactly the experimental method applied in any physics laboratory. The electricity bill, properly analyzed, is a set of experimental data that allows verifying or refuting hypotheses about a home's energy behavior.

## Connection with modern physics

Energy monitoring applications, hourly electricity markets, and active demand management systems are the current tools that operationally implement these principles. The physics of [[energy cost|C_energia]] and [[power cost|C_potencia]] has not changed; what has changed is the temporal resolution and accessibility of the data that allow calculating them precisely.
`;export{e as default};
