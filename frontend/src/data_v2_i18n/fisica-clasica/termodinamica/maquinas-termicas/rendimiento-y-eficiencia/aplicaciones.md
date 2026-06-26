## 1. Centrales termoeléctricas de carbón y gas natural

Las centrales termoeléctricas convencionales queman combustible fósil para calentar vapor, que expande en una turbina y mueve un alternador. El ciclo completo —caldera, turbina, condensador, bomba— define directamente [[Q_H]], [[W_util]] y [[Q_C]]. El rendimiento real de estas centrales ha sido históricamente bajo: las instalaciones de carbón de los años 1960–1990 operaban con [[eta]] entre 0.28 y 0.36.

La mejora hacia ciclos supercríticos y ultra-supercríticos eleva la temperatura de vapor por encima de 600 °C, lo que sube [[eta_Carnot]] y permite alcanzar [[eta]] reales de 0.44–0.48. El condensador enfriado con agua de río a 15–20 °C actúa como foco frío. La variable dominante del rendimiento es la temperatura máxima del vapor en la turbina: cada 10 °C de incremento eleva [[eta]] en aproximadamente 0.4 puntos porcentuales.

Variable dominante: temperatura máxima del ciclo de vapor, que determina la cota superior del rendimiento de Carnot y por tanto el margen de mejora posible.
Límite de validez: el modelo de dos focos pierde precisión cuando la temperatura del vapor varía más del 15% durante la absorción de calor en la caldera; para ciclos supercríticos con recalentamiento se necesita integrar el perfil de temperatura a lo largo del intercambiador.

## 2. Motores de combustión interna en automoción

El motor de gasolina y el motor diésel son las aplicaciones de rendimiento térmico más ampliamente conocidas. En ambos casos, [[Q_H]] proviene de la combustión del combustible, [[W_util]] es el trabajo mecánico transferido al cigüeñal y [[Q_C]] se distribuye entre los gases de escape calientes y el sistema de refrigeración por agua.

El motor diésel tiene mayor [[eta]] que el de gasolina (0.40–0.46 frente a 0.25–0.35) porque opera con mayor relación de compresión, lo que aumenta la temperatura máxima del ciclo y sube [[eta_Carnot]] efectivo. Sin embargo, la temperatura de los gases de escape de ambos motores sigue siendo alta (400–700 °C), lo que indica que una fracción significativa de [[Q_C]] se vierte a la atmósfera sin aprovecharse. Los sistemas de turbocompresor recuperan parte de esa entalpía de los gases de escape para comprimir el aire de admisión, reduciendo indirectamente [[Q_H]] necesario para el mismo [[W_util]].

Variable dominante: relación de compresión geométrica, que fija la temperatura máxima del ciclo y condiciona el rendimiento indicado del motor antes de descontar pérdidas mecánicas.
Límite de validez: el modelo de foco fijo pierde validez en los transitorios de arranque en frío y de aceleración brusca; en esos regímenes la temperatura de combustión varía ciclo a ciclo y [[eta]] instantáneo difiere del valor de régimen estacionario.

## 3. Turbinas de gas en generación eléctrica distribuida

Las turbinas de gas de ciclo simple —usadas en generación distribuida y en punta de demanda— absorben calor en la cámara de combustión ([[Q_H]]) y ceden calor en los gases de escape ([[Q_C]]). El rendimiento de estas turbinas ronda 0.28–0.35, claramente inferior al límite de Carnot para sus focos (temperatura de combustión de 1200–1400 K y temperatura de gases de escape de 800–900 K).

La diferencia entre [[eta]] y [[eta_Carnot]] revela que estas turbinas operan con grandes irreversibilidades de transferencia de calor: el gradiente de temperatura entre la llama y el fluido de trabajo es enorme. En el ciclo combinado, los gases de escape de la turbina de gas se usan como foco caliente de un ciclo de vapor secundario, convirtiendo parte del [[Q_C]] de la turbina de gas en [[Q_H]] de la turbina de vapor. El resultado es un [[eta]] global del sistema que supera 0.58–0.62, muy por encima del rendimiento de cada ciclo por separado.

Variable dominante: temperatura de entrada a la turbina (TIT), que fija el límite superior de Carnot; aumentarla requiere materiales refractarios y sistemas de refrigeración de álabes de alta tecnología.
Límite de validez: el ciclo combinado supone que los gases de escape salen con temperatura suficiente para calentar el vapor secundario; si la TIT baja por deslizamiento de carga, el ciclo secundario puede desactivarse y [[eta]] global cae abruptamente.

## 4. Plantas de energía geotérmica

Las plantas geotérmicas extraen calor de depósitos de agua caliente subterránea a temperaturas de 80–200 °C y rechazan calor a condensadores enfriados por agua superficial o aire. El [[eta_Carnot]] para focos a 180 °C y 30 °C (453 K y 303 K) es solo 0.33, lo que limita el rendimiento real a valores de 0.10–0.20 incluso con ciclos bien diseñados.

Aunque [[eta]] sea bajo en términos absolutos, la fuente de calor es gratuita (calor interno de la Tierra), por lo que el coste marginal por kilovatio-hora es muy reducido. La eficiencia relativa [[eta]]/[[eta_Carnot]] de las mejores plantas geotérmicas supera 0.55, comparable a los motores de combustión, lo que indica que el ciclo está bien optimizado dentro de sus restricciones de temperatura.

Los ciclos binarios (fluido orgánico de Rankine) permiten operar con fuentes a 80–120 °C que no pueden utilizarse con ciclos de vapor estándar, ampliando el recurso geotérmico aprovechable aunque con [[eta]] todavía más bajos (0.08–0.14).

Variable dominante: temperatura de la fuente geotérmica, que determina tanto [[eta_Carnot]] como el caudal másico necesario para producir una potencia dada.
Límite de validez: la temperatura del yacimiento puede disminuir con la explotación si la tasa de extracción supera la recarga natural; en ese caso [[eta_Carnot]] decrece y el rendimiento de la planta baja a lo largo de los años.

## 5. Recuperación de calor residual en industria siderúrgica

Las industrias de alta temperatura —acerías, cementeras, hornos de vidrio— generan enormes cantidades de [[Q_C]] como gases de escape calientes (700–1100 °C) y escorias. Instalar generadores de vapor de recuperación (heat recovery steam generators, HRSG) permite convertir parte de ese [[Q_C]] industrial en [[W_util]] eléctrico o mecánico.

En estas instalaciones, el [[Q_H]] del ciclo de vapor es el [[Q_C]] del proceso industrial: el calor residual se recicla como entrada de un segundo ciclo motor. El rendimiento global del sistema energético es la suma ponderada del rendimiento del proceso principal y del rendimiento del ciclo de recuperación, que típicamente aporta entre 15 y 25 puntos porcentuales adicionales de conversión de energía química en electricidad.

La magnitud [[eta]] del ciclo de recuperación es esencial para decidir si la inversión en el HRSG es económicamente viable: si [[eta]] del ciclo secundario es mayor del 20% y el flujo de [[Q_C]] disponible supera los 10 MW térmicos, la instalación se amortiza en menos de cinco años en la mayoría de los contextos industriales.

Variable dominante: temperatura de los gases de escape del proceso principal, que determina el [[eta_Carnot]] del ciclo de recuperación y el caudal de vapor que puede generarse por unidad de flujo másico de gases.
Límite de validez: si la temperatura de los gases de escape varía según la carga del horno (que es habitual en hornos discontinuos), el ciclo de recuperación puede operar en condiciones subóptimas durante los períodos de baja carga, reduciendo el rendimiento medio integrado.
