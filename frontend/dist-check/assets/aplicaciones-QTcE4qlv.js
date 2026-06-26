const e=`# Aplicaciones de la sustentación aerodinámica\r
\r
## 1. Diseño preliminar de alas de avión\r
\r
En aviación, la aplicación principal consiste en estimar si un ala puede generar la fuerza necesaria para sostener la aeronave en una fase de vuelo. El ingeniero compara [[L]] con el peso y ajusta velocidad, superficie y [[C_L]] mediante geometría o configuración de flaps.\r
\r
Variable dominante: [[C_L]], porque condensa perfil, ángulo de ataque y configuración.\r
\r
Límite de validez: régimen subsonico bajo, flujo adherido y datos de coeficiente compatibles con el ala real.\r
\r
La decisión concreta es elegir si conviene aumentar velocidad, área efectiva o coeficiente. Cada opción tiene coste: pista, resistencia, potencia o margen frente a pérdida.\r
\r
## 2. Alerones invertidos en automoción\r
\r
Un alerón de competición usa la misma física con orientación opuesta. La fuerza no busca elevar el coche, sino aumentar la carga sobre los neumáticos para mejorar adherencia en curva y frenada.\r
\r
Variable dominante: [[v]], porque la carga aerodinámica cambia de forma muy sensible con la velocidad.\r
\r
Límite de validez: cerca del suelo, el efecto suelo y las interferencias con la carrocería modifican el flujo respecto a un ala aislada.\r
\r
La decisión concreta es equilibrar agarre adicional frente a resistencia aerodinámica. Demasiada carga puede mejorar curva y empeorar velocidad punta.\r
\r
## 3. Palas de aerogeneradores\r
\r
Cada sección de una pala funciona como un perfil alar. La sustentación local no se usa para volar, sino para producir una componente tangencial que genera par sobre el rotor.\r
\r
Variable dominante: velocidad relativa local, porque cambia con el viento y con la rotación de la pala.\r
\r
Límite de validez: las pérdidas de punta, el desprendimiento y la variación radial exigen modelos de pala más completos.\r
\r
La decisión concreta es escoger torsión y ángulo local para maximizar par sin entrar en pérdida.\r
\r
## 4. Velas náuticas\r
\r
Una vela trimada actúa como un perfil flexible. El aire genera una resultante que, combinada con la quilla, permite avanzar incluso con viento lateral.\r
\r
Variable dominante: orientación del perfil, porque decide si la fuerza tiene componente propulsiva útil.\r
\r
Límite de validez: la vela se deforma y cambia su curvatura, por lo que el coeficiente no es fijo.\r
\r
La decisión concreta es ajustar el trimado para mantener flujo adherido y evitar flameo o pérdida.\r
\r
## 5. Vuelo de aves y drones lentos\r
\r
Aves planeadoras y drones de baja velocidad usan alas grandes o perfiles de alto [[C_L]] para generar sustentación con poca velocidad. El objetivo es sostenerse con gasto energético reducido.\r
\r
Variable dominante: [[S]], porque aumentar superficie reduce la velocidad necesaria para una misma fuerza.\r
\r
Límite de validez: a escalas pequeñas, la viscosidad relativa y el número de Reynolds modifican mucho el comportamiento.\r
\r
La decisión concreta es elegir entre ala grande, velocidad mayor o perfil más agresivo según autonomía, maniobrabilidad y margen de pérdida.\r
\r
## 6. Drones de ala fija en misiones de vigilancia\r
\r
En drones de ala fija, la sustentación permite ahorrar energía frente a un multirrotor, porque no hace falta sostener todo el peso mediante empuje vertical continuo. El diseño busca una velocidad de crucero donde [[L]] compense el peso con un [[C_L]] moderado.\r
\r
Variable dominante: autonomía de vuelo, porque el objetivo técnico es mantener [[L]] con el menor coste energético posible.\r
\r
Límite de validez: las ráfagas, el vuelo a bajo Reynolds y las maniobras cerradas pueden hacer que el coeficiente real se aleje de la estimación simple.\r
\r
La decisión concreta consiste en escoger envergadura, superficie y velocidad de crucero para maximizar duración sin acercarse al régimen de pérdida.\r
\r
En todas estas aplicaciones, la misma advertencia se repite: la sustentación útil no se evalúa solo por el valor de la fuerza, sino por el margen disponible antes de pérdida, la resistencia asociada y la estabilidad de la configuración. Por eso el cálculo elemental debe verse como una primera criba física. Después entran curvas polares, ensayos de túnel de viento y simulaciones que corrigen el coeficiente para el caso real.\r
\r
## 7. Túneles de viento y calibración de perfiles\r
\r
En un túnel de viento, un perfil se ensaya con velocidad y densidad controladas para medir fuerzas y construir curvas de [[C_L]]. Esta aplicación no busca solo confirmar que existe sustentación, sino obtener datos fiables para usar después en modelos globales.\r
\r
Variable dominante: [[C_L]], porque el ensayo transforma una geometría concreta en un coeficiente medible para distintas condiciones.\r
\r
Límite de validez: la escala del modelo, el número de Reynolds y la turbulencia del túnel deben representar el caso real; de lo contrario, el coeficiente medido no se puede trasladar directamente.\r
\r
La decisión concreta consiste en elegir condiciones de ensayo que reproduzcan el régimen de vuelo relevante y no solo una escena visual parecida.\r
\r
## 8. Hélices y rotores\r
\r
Las palas de una hélice o de un rotor generan fuerzas aerodinámicas locales muy parecidas a las de un ala. La diferencia es que cada sección ve una velocidad relativa distinta porque combina avance y rotación.\r
\r
Variable dominante: velocidad relativa local, porque cambia desde la raíz hasta la punta de la pala y controla la fuerza generada.\r
\r
Límite de validez: el modelo de sección alar necesita corregirse por flujo helicoidal, pérdidas de punta e interacción entre palas.\r
\r
La decisión concreta consiste en ajustar torsión, cuerda y régimen de giro para generar fuerza útil sin llevar las secciones críticas a pérdida.`;export{e as default};
