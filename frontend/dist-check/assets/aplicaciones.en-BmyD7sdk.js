const e=`# Applications of aerodynamic lift\r
\r
## 1. Preliminary aircraft wing design\r
\r
En aviación, la aplicación principal consiste en estimar si un ala puede generar la fuerza necesaria para sostener la aeronave en una fase de vuelo. El ingeniero compara [[L]] con el peso y ajusta velocidad, superficie y [[C_L]] mediante geometría o configuración de flaps.\r
\r
Dominant variable: [[C_L]], porque condensa perfil, ángulo de ataque y configuración.\r
\r
Validity limit: régimen subsonico bajo, flujo adherido y datos de coeficiente compatibles con el ala real.\r
\r
La decisión concreta es elegir si conviene aumentar velocidad, área efectiva o coeficiente. Cada opción tiene coste: pista, resistencia, potencia o margen frente a pérdida.\r
\r
## 2. Inverted wings in motorsport\r
\r
Un alerón de competición usa la misma física con orientación opuesta. La fuerza no busca elevar el coche, sino aumentar la carga sobre los neumáticos para mejorar adherencia en curva y frenada.\r
\r
Dominant variable: [[v]], porque la carga aerodinámica cambia de forma muy sensible con la velocidad.\r
\r
Validity limit: cerca del suelo, el efecto suelo y las interferencias con la carrocería modifican el flujo respecto a un ala aislada.\r
\r
La decisión concreta es equilibrar agarre adicional frente a resistencia aerodinámica. Demasiada carga puede mejorar curva y empeorar velocidad punta.\r
\r
## 3. Wind turbine blades\r
\r
Cada sección de una pala funciona como un perfil alar. La sustentación local no se usa para volar, sino para producir una componente tangencial que genera par sobre el rotor.\r
\r
Dominant variable: velocidad relativa local, porque cambia con el viento y con la rotación de la pala.\r
\r
Validity limit: las pérdidas de punta, el desprendimiento y la variación radial exigen modelos de pala más completos.\r
\r
La decisión concreta es escoger torsión y ángulo local para maximizar par sin entrar en pérdida.\r
\r
## 4. Sailing sails\r
\r
Una vela trimada actúa como un perfil flexible. El aire genera una resultante que, combinada con la quilla, permite avanzar incluso con viento lateral.\r
\r
Dominant variable: orientación del perfil, porque decide si la fuerza tiene componente propulsiva útil.\r
\r
Validity limit: la vela se deforma y cambia su curvatura, por lo que el coeficiente no es fijo.\r
\r
La decisión concreta es ajustar el trimado para mantener flujo adherido y evitar flameo o pérdida.\r
\r
## 5. Birds and slow drones\r
\r
Aves planeadoras y drones de baja velocidad usan alas grandes o perfiles de alto [[C_L]] para generar sustentación con poca velocidad. El objetivo es sostenerse con gasto energético reducido.\r
\r
Dominant variable: [[S]], porque aumentar superficie reduce la velocidad necesaria para una misma fuerza.\r
\r
Validity limit: a escalas pequeñas, la viscosidad relativa y el número de Reynolds modifican mucho el comportamiento.\r
\r
La decisión concreta es elegir entre ala grande, velocidad mayor o perfil más agresivo según autonomía, maniobrabilidad y margen de pérdida.\r
\r
## 6. Fixed-wing drones in surveillance missions\r
\r
For fixed-wing drones, lift saves energy compared with multirotors because the vehicle does not need to support all its weight through continuous vertical thrust. The design seeks a cruise speed where [[L]] balances weight with a moderate [[C_L]].\r
\r
Dominant variable: flight endurance, because the technical goal is to maintain [[L]] with the smallest possible energy cost.\r
\r
Validity limit: gusts, low-Reynolds flight and tight maneuvers can make the real coefficient differ from the simple estimate.\r
\r
The concrete decision is to choose span, surface and cruise speed to maximize duration without approaching stall.\r
\r
Across all these applications, the same warning applies: useful lift is not judged only by the value of the force, but by the available stall margin, associated drag and stability of the configuration. The elementary calculation should therefore be treated as a first physical filter. Wind-tunnel data, polar curves and simulations then refine the coefficient for the real case.\r
\r
## 7. Wind tunnels and airfoil calibration\r
\r
In a wind tunnel, an airfoil is tested under controlled speed and density to measure forces and build [[C_L]] curves. This application does not only confirm that lift exists; it produces reliable data for later use in global models.\r
\r
Dominant variable: [[C_L]], because the test converts a specific geometry into a measurable coefficient under different conditions.\r
\r
Validity limit: model scale, Reynolds number and tunnel turbulence must represent the real case; otherwise the measured coefficient cannot be transferred directly.\r
\r
The concrete decision is to choose test conditions that reproduce the relevant flight regime, not merely a visually similar scene.\r
\r
## 8. Propellers and rotors\r
\r
Propeller and rotor blades generate local aerodynamic forces very similar to those of a wing. The difference is that each blade section sees a different relative speed because forward motion and rotation are combined.\r
\r
Dominant variable: local relative speed, because it changes from root to tip and controls the generated force.\r
\r
Validity limit: the airfoil-section model must be corrected for helical flow, tip losses and blade interaction.\r
\r
The concrete decision is to adjust twist, chord and rotational regime to generate useful force without driving critical sections into stall.`;export{e as default};
