const e=`# Ecuación de Navier-Stokes Intro — Modelo y validez\r
\r
## Modelo ideal\r
El **modelo ideal** de Navier-Stokes en su versión introductoria se basa en la simplificación del balance de momentum para un fluido viscoso que circula por un conducto bajo condiciones de régimen estacionario y flujo plenamente desarrollado. En este escenario, la complejidad de la ecuación diferencial vectorial se reduce a un balance lineal de fuerzas por unidad de volumen, donde la energía mecánica se disipa exclusivamente por fricción interna.\r
\r
Bajo estas condiciones, el balance se expresa como:

Para el caso más simple (horizontal y estacionario), el modelo predice que el gradiente de presion es equilibrado exactamente por el termino de difusion viscosa, resultando en el **Perfil de Poiseuille**.\r
\r
## Hipótesis\r
Para que el modelo simplificado de Navier-Stokes (Hagen-Poiseuille) sea aplicable al 100%, se deben cumplir las siguientes hipótesis de forma simultánea:\r
\r
1. **Fluido Newtoniano**: Se asume que la viscosidad dinamica [[mu]] es constante respecto a la tasa de deformación. El fluido no "se espesa" ni "se adelgaza" por el hecho de moverse más rápido.\r
2. **Régimen Laminar**: Las fuerzas viscosas deben ser dominantes sobre las inerciales. Esto ocurre cuando el numero de Reynolds [[Re]] es inferior a 2300 en tuberías circulares.\r
3. **Flujo Plenamente Desarrollado**: Se asume que nos encontramos lo suficientemente lejos de la entrada del tubo como para que el perfil de velocidad sea invariante. Esto implica que la aceleracion del fluido a es cero.\r
4. **Incompresibilidad**: La densidad del fluido [[rho]] se considera constante en todo el dominio. Válido para casi todos los líquidos y para gases a velocidades moderadas.\r
5. **No Deslizamiento**: Se asume que las moléculas de fluido en contacto directo con la frontera sólida tienen velocidad cero respecto a la pared.\r
\r
## Dominio de validez cuantitativo\r
La aplicabilidad del modelo se define estrictamente a través de parámetros dimensionales y adimensionales:\r
\r
| Parámetro | Rango de Validez | Efecto de Salida del Rango |\r
| :--- | :--- | :--- |\r
| **Número de Reynolds ([[Re]])** | 0 < [[Re]] < 2300 | Por encima de 2300, el flujo entra en transición y el modelo laminar falla. |\r
| **Número de Mach (Ma)** | Ma < 0.3 | Por encima de 0.3, los efectos de compresibilidad alteran la densidad y el balance NS incompresible. |\r
| **Longitud de Entrada** | x > 0.05 ? [[Re]] ? D | Cerca de la entrada, la aceleracion del fluido a no es nula y el modelo de Poiseuille no es exacto. |\r
| **Gradiente de Presión** | Estable | Variaciones bruscas de presión invalidan la hipótesis de flujo estacionario. |\r
\r
Para fluidos comunes como el agua ([[mu]] = 10^{-3}\\,Pa·s), el dominio de validez suele limitarse a velocidades muy bajas o conductos muy estrechos. Para aceites pesados ([[mu]] = 0.5\\,Pa·s), el modelo es válido incluso en tuberías de gran diámetro a velocidades considerables.\r
\r
## Señales de fallo del modelo\r
Un analista debe sospechar que el modelo de Navier-Stokes simplificado está fallando si observa cualquiera de los siguientes comportamientos:\r
\r
- **Discrepancia en el Caudal**: Si el caudal medido es significativamente menor al predicho (Q_{real} < Q_{teorico}), es probable que el flujo sea turbulento o que la tubería tenga una rugosidad no despreciable.\r
- **Vibraciones o Ruido**: El flujo laminar es silencioso. La presencia de zumbidos o vibraciones en la conducción es una señal física de turbulencia y desprendimiento de vórtices.\r
- **Perfil de Velocidad "Chato"**: Si mediciones experimentales muestran que la velocidad es casi uniforme en el centro (en lugar de puntiaguda y parabólica), el régimen es turbulento.\r
- **Dependencia no lineal con el Gradiente**: En el modelo ideal, el caudal Q es linealmente proporcional al gradiente de presion dpdx. Si al doblar la presión el caudal no se dobla, el modelo ha fallado.\r
\r
## Modelo extendido o alternativo\r
Cuando las hipótesis ideales no se sostienen, se recurre a extensiones del modelo o alternativas de ingeniería. La transición explícita ocurre cuando conviene cambiar a modelos turbulentos o enfoques que recapturan la disipación convectiva.\r
\r
1. **Navier-Stokes Turbulento (RANS)**: Utiliza la viscosidad de remolino (viscosidad aparente) para modelar la disipación de energía en flujos de alto numero de Reynolds [[Re]].\r
2. **Ecuación de Darcy-Weisbach**: Alternativa práctica para ingeniería que usa un "factor de fricción" (f de Moody) para cuantificar las pérdidas de carga en cualquier régimen, basándose en datos empíricos.\r
3. **Modelos no Newtonianos**: Como la Ley de Potencia de Ostwald-de Waele, que sustituye la viscosidad dinamica [[mu]] constante por una función dependiente del gradiente de velocidad para fluidos como polímeros o alimentos.\r
4. **CFD (Dinámica de Fluidos Computacional)**: Resolución numérica de la ecuación de Navier-Stokes completa en 3D para geometrías complejas donde el balance 1D es insuficiente.\r
\r
## Comparación operativa\r
A continuación se comparan los modelos según su utilidad práctica:\r
\r
| Situación | Modelo Recomendado | Por qué |\r
| :--- | :--- | :--- |\r
| **Microcanales y Capilares** | NS Laminar 1D | Régimen dominado por viscosidad; precisión analítica muy alta. |\r
| **Tuberías de Agua Urbana** | Darcy-Weisbach | Flujo casi siempre turbulento; rugosidad de pared crítica. |\r
| **Vuelo de Aviones** | NS Turbulento / Euler | Inercia dominante; necesidad de capturar capas límite delgadas. |\r
| **Flujo de Miel o Glicerina** | Stokes / NS Laminar | Viscosidad tan alta que el flujo nunca llega a ser turbulento. |\r
| **Vaciado de Tanques Grandes** | Bernoulli | La viscosidad es despreciable frente a los cambios de altura/presión. |`;export{e as default};
