# Curvas planas y peraltadas

## Contexto conceptual

Este tema responde a una pregunta fundamental: ¿Como se reparte la componente radial entre rozamiento y normal en una curva plana o peraltada, y que velocidad sigue siendo segura?. En el estudio de la dinámica y de la cinemática, comprender cómo las magnitudes se relacionan es crucial para predecir y controlar el movimiento de los objetos.

La magnitud [[Frad]] (resultante radial) es central en este análisis. Su definición y comportamiento en diferentes contextos permiten una comprensión profunda de los fenómenos físicos observables. Fuerza neta hacia el centro de la curva.

El aprendizaje de este concepto te proporciona herramientas intelectuales que reaparecerán en numerosos contextos de la física y sus aplicaciones técnicas.

## 🟢 Nivel esencial

Comencemos con la intuición más básica. Cuando observas un objeto en movimiento, lo primero que notas es cómo su posición cambia. Pero más importante aún es entender *por qué* esa posición cambia de la forma que lo hace.

La idea central es que existen magnitudes fundamentales que permiten describir completamente qué está pasando. No necesitas memorizar fórmulas al principio; necesitas visualizar cómo una magnitud afecta otra.

Piensa en ejemplos cotidianos:
- Cuando una cuerda se tensa, ejerce una fuerza
- Cuando el terreno es inclinado, la gravedad afecta el movimiento de forma distinta
- Cuando algo gira, su rapidez de giro determina la intensidad de la "presión" hacia afuera

En cada caso, hay una relación causa-efecto que puede ser medida y expresada de manera universal. Esa universalidad es lo que buscamos en este leaf.

Para curvas planas y peraltadas, la intuicion correcta se resume asi: toda trayectoria curva exige una accion continua hacia el centro. Esa accion se expresa como [[Frad]] y debe sostenerse con mecanismos de contacto reales. Esta lectura evita dos errores comunes: inventar una fuerza ficticia y olvidar que la seguridad en curva depende del balance fisico disponible, no de un truco algebraico.

## 🔵 Nivel formal

Ahora expresemos estas relaciones de forma cuantitativa. Las ecuaciones que siguen no son memorables al azar; cada una expresa una relación física auténtica.


**Ecuacion radial del movimiento circular:**

{{f:radial_base}}

La resultante radial de fuerzas reales iguala m v al cuadrado entre r.

Esta relación es válida cuando: Movimiento circular en marco inercial.

Limitaciones:
- r no puede ser cero
- m no puede ser cero


**Velocidad maxima en curva plana:**

{{f:curva_plana_vmax}}

La friccion estatica maxima determina la velocidad limite en curva plana.

Esta relación es válida cuando: Curva plana con coeficiente de rozamiento estatico conocido.

Limitaciones:
- r no puede ser cero
- [[mu]] no puede ser cero


**Angulo de peralte ideal:**

{{f:peralte_ideal}}

La inclinacion permite trazar la curva sin depender de la friccion.

Esta relación es válida cuando: Peralte sin friccion a velocidad constante.

Limitaciones:
- r no puede ser cero


**Rozamiento estatico maximo:**

{{f:adherencia_maxima}}

La fuerza de rozamiento estatico no puede superar este valor.

Esta relacion es valida cuando: Contacto con superficie solida sin deslizamiento.

Limitaciones:
- N no puede ser cero


La estructura de estas ecuaciones refleja estructuras profundas de la física. Las dependencias mostradas —cómo una magnitud aparece elevada al cuadrado o dividiendo— no son accidentes algebraicos sino consecuencias de la causalidad física real.

## 🔴 Nivel estructural

El análisis estructural revela cuándo y cómo el modelo funciona. Todo modelo simplificador tiene un rango de validez más allá del cual aparecen efectos que invalidan la aproximación.

Para este tema, los límites principales surgen cuando:

1. **Límites de escala**: Magnitudes muy pequeñas o muy grandes donde efectos cuánticos o relativistas se vuelven importantes.

2. **Límites de régimen**: Cuando las condiciones cambian tan rápidamente que las hipótesis del modelo (como constancia de ciertas magnitudes) fallan.

3. **Límites de modelo**: Cuando se ignoran efectos que en las condiciones reales no pueden despreciarse (como rozamiento, deformación, etc.).

Entender estos límites es lo que distingue a un usuario de fórmulas de un verdadero conocedor del tema. Un experto no solo aplica la ecuación; sabe cuándo dejar de usarla.

En este leaf, el nivel estructural se vuelve especialmente util cuando se comparan estrategias de diseno. En curva plana, casi toda la exigencia de [[Frad]] depende de [[fs]], que a su vez esta acotada por [[mu]] y [[Nn]]. En curva peraltada, el mismo objetivo dinamico puede cumplirse con menor dependencia de [[fs]] gracias a la orientacion de [[Nn]] dada por [[th]]. La conclusion estructural no es "una formula nueva", sino una regla de decision: para un flujo con [[v]] variable y clima cambiante, conviene evaluar si el control de velocidad alcanza o si se requiere rediseno geometrico.

## Interpretación física profunda

En curvas de carretera, la interpretacion fisica util no termina en "el numero calculado". El punto clave es identificar que palanca modifica el riesgo con mayor eficiencia. Si el problema dominante es variacion de adherencia, conviene actuar sobre pavimento y operacion. Si el problema dominante es geometrico, conviene actuar sobre radio y peralte.

La pregunta correcta, entonces, no es solo "cuanto vale" una magnitud, sino "que decision habilita" ese valor. Cuando [[Frad]] exigida queda cerca del limite de contacto, una pequena variacion ambiental puede volver inestable la maniobra. Esa lectura causal es la que transforma un calculo escolar en criterio de ingenieria.

Tambien importa distinguir estabilidad nominal de estabilidad robusta. Una curva puede funcionar en seco y fallar en lluvia sin haber cambiado ni [[r]] ni velocidad media observada. El cambio aparece en la capacidad de sostener demanda radial bajo incertidumbre. Entender esa diferencia es una competencia central de este leaf.

## Orden de magnitud

Para desarrollar sentido físico, es crucial tener referencias numéricas. Los siguientes órdenes de magnitud son típicos en este contexto:


**[[m]]**: 0.1 - 100000 kg

**[[r]]**: 5 - 5000 m

**[[v]]**: 1 - 100 m/s

**[[g]]**: 9.78 - 9.82 m/s^2

**[[mu]]**: 0.05 - 1.2

**[[th]]**: 0 - 0.70 rad

**[[Nn]]**: 0 - 1000000 N

**[[fs]]**: 0 - 100000 N

**[[Frad]]**: 0 - 1000000 N

**[[ac]]**: 0.1 - 50 m/s^2


Estos valores te permiten hacer un "test de cordura": si tu resultado es radicalmente diferente, probablemente cometiste un error o aplicaste el modelo fuera de su rango.

## Método de resolución personalizado

El procedimiento recomendado para este leaf se centra en decisiones de diseno y operacion, no solo en sustitucion numerica:

1. **Caracterizar escenario vial**: identificar si la curva es plana o peraltada y si hay variaciones relevantes de pavimento.
2. **Construir balance radial**: determinar como se compone [[Frad]] con contacto real.
3. **Calcular margen**: comparar demanda de curvatura con capacidad disponible en condiciones seca y humeda.
4. **Evaluar sensibilidad**: revisar cuanto cambia el margen ante pequenas variaciones de velocidad.
5. **Emitir decision tecnica**: proponer accion concreta sobre geometria, mantenimiento o control operativo.

## Casos especiales y ejemplo extendido

**Caso especial 1 — Curva de radio decreciente**: cuando el trazado real no mantiene [[r]] constante, el margen no puede evaluarse con una sola fotografia del sistema. Es necesario separar subtramos y detectar el punto de maxima exigencia.

**Caso especial 2 — Operacion estacional**: una geometria que cumple en verano puede quedar al limite en temporada de lluvia por degradacion de adherencia. Este caso obliga a pasar de "cumple/no cumple" a analisis por escenarios.

**Ejemplo extendido integrado**: comparar dos intervenciones sobre el mismo tramo: control estricto de velocidad frente a rediseno de peralte, cuantificando impacto en robustez anual.

## Preguntas reales del alumno

**¿Por que una curva "que siempre funciono" puede volverse peligrosa de pronto?**
Porque el sistema real no depende solo de la geometria. Cambios de adherencia y pequenas subidas de velocidad pueden reducir mucho el margen.

**¿El peralte reemplaza por completo a la friccion?**
No. El peralte redistribuye demanda radial cerca de la velocidad de diseno, pero fuera de ese rango la friccion vuelve a ser decisiva.

**¿Por que la masa no siempre aparece como factor de velocidad maxima?**
Porque en ciertas expresiones de equilibrio radial se simplifica entre demanda y capacidad de contacto, aunque siga siendo relevante para otras cargas del sistema.

**¿Que reporte tecnico minimo deberia entregar?**
Velocidad objetivo, radio efectivo, escenario de adherencia, margen estimado y recomendacion operativa concreta.

## Conexiones transversales y rutas de estudio

Este tema conecta mecanica elemental con ingenieria vial aplicada. Se apoya en leyes de Newton y descomposicion de fuerzas, y proyecta hacia dinamica de vehiculos, auditoria de seguridad y modelado transitorio.

La ruta recomendada es: primero dominar lectura causal en curva plana; luego comparar con curva peraltada; despues estudiar escenarios con incertidumbre de adherencia y, finalmente, pasar a modelos dinamicos avanzados cuando el caso real lo exija.

Esa progresion convierte conocimiento aislado en criterio profesional transferible.

## Síntesis final

Has visto como una magnitud aparentemente simple ([[Frad]]) es en realidad el corazon de un conjunto de relaciones que gobiernan comportamientos observables. La verdadera comprension consiste en no solo memorizar la ecuacion sino en desarrollar intuicion sobre cuando aplica, que pasa en limites extremos y como el patron reaparece en nuevos contextos.

El dominio de este tema te proporciona no solo una herramienta de cálculo sino un modo de pensar sobre los sistemas físicos que es transferible, versátil y poderoso.
