## Historical problem

The first electrical distribution systems of the 1880s needed a device to connect and disconnect equipment without directly manipulating the wiring. The physical challenge was to ensure that contact resistance [[resistencia_en_estado_on]] was low and stable: the first knife switches had high and variable [[resistencia_en_estado_on]], which generated local heating and voltage losses in the connected load.

The physical model that quantifies this loss, [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]], was the design criterion that guided the development of new contact alloys and geometries throughout the 20th century.

## Prior conceptual difficulty

Before the contact resistance model was established, engineers and technicians attributed switch heating to excessive load current, not to degradation of the switching contact itself. This confusion between circuit overload and deterioration of the switching device delayed correct diagnosis and led to wrong solutions such as replacing fuses instead of the switch.

The distinction between [[corriente_de_maniobra]] (which depends on the load) and [[resistencia_en_estado_on]] (which depends on contact condition) is the key conceptual insight that resolves this confusion.

## What changed

Electrical contact engineering, developed throughout the 20th century, established the quantitative model of [[resistencia_en_estado_on]] and defined optimal alloys to minimise it. Pure silver, silver-cadmium, and later silver-tin oxide reduced [[resistencia_en_estado_on]] by a factor of 10 to 100 compared to initial copper or iron contacts.

IEC 60669 standardisation formalised contact resistance tests and durability expressed in number of operations, translating the physical model of [[perdida_resistiva_en_on]] and [[energia_disipada_en_conduccion]] into verifiable industrial quality criteria.

## Impact on physics

The model [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] is a direct application of localised Joule's law. Its adoption in switch engineering demonstrated that even milliohm resistances generate significant dissipation when current is high: with [[corriente_de_maniobra]] = 10 A and [[resistencia_en_estado_on]] = 0.05 ohm, [[perdida_resistiva_en_on]] = 5 W — sufficient to cause thermal degradation in continuous use.

This quantitative result changed the design criterion: instead of minimising only switch size and cost, maximum admissible [[resistencia_en_estado_on]] began to be specified as a contractual parameter between manufacturer and user.

## Connection with modern physics

In modern power electronics, the [[resistencia_en_estado_on]] parameter of power MOSFET transistors is the direct equivalent of the mechanical switch contact resistance. With currents of tens or hundreds of amperes and [[resistencia_en_estado_on]] in milliohms, [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] is the dominant design parameter of high-efficiency converters.

The physics of the domestic mechanical switch and the power transistor are identical in principle: both are governed by localised Joule's law with a conduction resistance [[resistencia_en_estado_on]] that determines loss [[perdida_resistiva_en_on]] and device efficiency.