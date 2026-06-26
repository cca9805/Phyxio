# Aplicaciones de la sustentación aerodinámica

## 1. Diseño preliminar de alas de avión

En aviación, la aplicación principal consiste en estimar si un ala puede generar la fuerza necesaria para sostener la aeronave en una fase de vuelo. El ingeniero compara [[L]] con el peso y ajusta velocidad, superficie y [[C_L]] mediante geometría o configuración de flaps.

Variable dominante: [[C_L]], porque condensa perfil, ángulo de ataque y configuración.

Límite de validez: régimen subsonico bajo, flujo adherido y datos de coeficiente compatibles con el ala real.

La decisión concreta es elegir si conviene aumentar velocidad, área efectiva o coeficiente. Cada opción tiene coste: pista, resistencia, potencia o margen frente a pérdida.

## 2. Alerones invertidos en automoción

Un alerón de competición usa la misma física con orientación opuesta. La fuerza no busca elevar el coche, sino aumentar la carga sobre los neumáticos para mejorar adherencia en curva y frenada.

Variable dominante: [[v]], porque la carga aerodinámica cambia de forma muy sensible con la velocidad.

Límite de validez: cerca del suelo, el efecto suelo y las interferencias con la carrocería modifican el flujo respecto a un ala aislada.

La decisión concreta es equilibrar agarre adicional frente a resistencia aerodinámica. Demasiada carga puede mejorar curva y empeorar velocidad punta.

## 3. Palas de aerogeneradores

Cada sección de una pala funciona como un perfil alar. La sustentación local no se usa para volar, sino para producir una componente tangencial que genera par sobre el rotor.

Variable dominante: velocidad relativa local, porque cambia con el viento y con la rotación de la pala.

Límite de validez: las pérdidas de punta, el desprendimiento y la variación radial exigen modelos de pala más completos.

La decisión concreta es escoger torsión y ángulo local para maximizar par sin entrar en pérdida.

## 4. Velas náuticas

Una vela trimada actúa como un perfil flexible. El aire genera una resultante que, combinada con la quilla, permite avanzar incluso con viento lateral.

Variable dominante: orientación del perfil, porque decide si la fuerza tiene componente propulsiva útil.

Límite de validez: la vela se deforma y cambia su curvatura, por lo que el coeficiente no es fijo.

La decisión concreta es ajustar el trimado para mantener flujo adherido y evitar flameo o pérdida.

## 5. Vuelo de aves y drones lentos

Aves planeadoras y drones de baja velocidad usan alas grandes o perfiles de alto [[C_L]] para generar sustentación con poca velocidad. El objetivo es sostenerse con gasto energético reducido.

Variable dominante: [[S]], porque aumentar superficie reduce la velocidad necesaria para una misma fuerza.

Límite de validez: a escalas pequeñas, la viscosidad relativa y el número de Reynolds modifican mucho el comportamiento.

La decisión concreta es elegir entre ala grande, velocidad mayor o perfil más agresivo según autonomía, maniobrabilidad y margen de pérdida.

## 6. Drones de ala fija en misiones de vigilancia

En drones de ala fija, la sustentación permite ahorrar energía frente a un multirrotor, porque no hace falta sostener todo el peso mediante empuje vertical continuo. El diseño busca una velocidad de crucero donde [[L]] compense el peso con un [[C_L]] moderado.

Variable dominante: autonomía de vuelo, porque el objetivo técnico es mantener [[L]] con el menor coste energético posible.

Límite de validez: las ráfagas, el vuelo a bajo Reynolds y las maniobras cerradas pueden hacer que el coeficiente real se aleje de la estimación simple.

La decisión concreta consiste en escoger envergadura, superficie y velocidad de crucero para maximizar duración sin acercarse al régimen de pérdida.

En todas estas aplicaciones, la misma advertencia se repite: la sustentación útil no se evalúa solo por el valor de la fuerza, sino por el margen disponible antes de pérdida, la resistencia asociada y la estabilidad de la configuración. Por eso el cálculo elemental debe verse como una primera criba física. Después entran curvas polares, ensayos de túnel de viento y simulaciones que corrigen el coeficiente para el caso real.

## 7. Túneles de viento y calibración de perfiles

En un túnel de viento, un perfil se ensaya con velocidad y densidad controladas para medir fuerzas y construir curvas de [[C_L]]. Esta aplicación no busca solo confirmar que existe sustentación, sino obtener datos fiables para usar después en modelos globales.

Variable dominante: [[C_L]], porque el ensayo transforma una geometría concreta en un coeficiente medible para distintas condiciones.

Límite de validez: la escala del modelo, el número de Reynolds y la turbulencia del túnel deben representar el caso real; de lo contrario, el coeficiente medido no se puede trasladar directamente.

La decisión concreta consiste en elegir condiciones de ensayo que reproduzcan el régimen de vuelo relevante y no solo una escena visual parecida.

## 8. Hélices y rotores

Las palas de una hélice o de un rotor generan fuerzas aerodinámicas locales muy parecidas a las de un ala. La diferencia es que cada sección ve una velocidad relativa distinta porque combina avance y rotación.

Variable dominante: velocidad relativa local, porque cambia desde la raíz hasta la punta de la pala y controla la fuerza generada.

Límite de validez: el modelo de sección alar necesita corregirse por flujo helicoidal, pérdidas de punta e interacción entre palas.

La decisión concreta consiste en ajustar torsión, cuerda y régimen de giro para generar fuerza útil sin llevar las secciones críticas a pérdida.