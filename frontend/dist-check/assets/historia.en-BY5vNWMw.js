const e=`# History of electrical switches\r
\r
## Historical problem\r
\r
The first electrical distribution systems of the 1880s needed a device to connect and disconnect equipment without directly manipulating the wiring. The physical challenge was to ensure that contact resistance [[R_on]] was low and stable: the first knife switches had high and variable [[R_on]], which generated local heating and voltage losses in the connected load.\r
\r
The physical model that quantifies this loss, [[P_on]] = [[I]]^2 x [[R_on]], was the design criterion that guided the development of new contact alloys and geometries throughout the 20th century.\r
\r
## Prior conceptual difficulty\r
\r
Before the contact resistance model was established, engineers and technicians attributed switch heating to excessive load current, not to degradation of the switching contact itself. This confusion between circuit overload and deterioration of the switching device delayed correct diagnosis and led to wrong solutions such as replacing fuses instead of the switch.\r
\r
The distinction between [[I]] (which depends on the load) and [[R_on]] (which depends on contact condition) is the key conceptual insight that resolves this confusion.\r
\r
## What changed\r
\r
Electrical contact engineering, developed throughout the 20th century, established the quantitative model of [[R_on]] and defined optimal alloys to minimise it. Pure silver, silver-cadmium, and later silver-tin oxide reduced [[R_on]] by a factor of 10 to 100 compared to initial copper or iron contacts.\r
\r
IEC 60669 standardisation formalised contact resistance tests and durability expressed in number of operations, translating the physical model of [[P_on]] and [[E_on]] into verifiable industrial quality criteria.\r
\r
## Impact on physics\r
\r
The model [[P_on]] = [[I]]^2 x [[R_on]] is a direct application of localised Joule's law. Its adoption in switch engineering demonstrated that even milliohm resistances generate significant dissipation when current is high: with [[I]] = 10 A and [[R_on]] = 0.05 ohm, [[P_on]] = 5 W — sufficient to cause thermal degradation in continuous use.\r
\r
This quantitative result changed the design criterion: instead of minimising only switch size and cost, maximum admissible [[R_on]] began to be specified as a contractual parameter between manufacturer and user.\r
\r
## Connection with modern physics\r
\r
In modern power electronics, the [[R_on]] parameter of power MOSFET transistors is the direct equivalent of the mechanical switch contact resistance. With currents of tens or hundreds of amperes and [[R_on]] in milliohms, [[P_on]] = [[I]]^2 x [[R_on]] is the dominant design parameter of high-efficiency converters.\r
\r
The physics of the domestic mechanical switch and the power transistor are identical in principle: both are governed by localised Joule's law with a conduction resistance [[R_on]] that determines loss [[P_on]] and device efficiency.\r
`;export{e as default};
