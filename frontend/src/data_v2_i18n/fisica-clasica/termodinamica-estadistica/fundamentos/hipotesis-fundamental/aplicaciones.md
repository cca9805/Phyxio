# Aplicaciones

## 1. Gases aislados en cajas rígidas
Variable dominante: [[numero_microestados_accesibles]]
Límite de validez: ΔE/E << 1, ΔV/V

La hipótesis fundamental se usa para interpretar por qué un gas aislado tiende a estados macroscópicos uniformes. La [[energia_total]], el [[volumen]] y el [[numero_particulas]] fijan el conjunto accesible. Cada [[probabilidad_microestado]] individual es igual, pero los macroestados homogéneos agrupan una enorme [[multiplicidad_macroestado]]. Se predice qué aspecto macroscópico será más frecuente sin seguir cada molécula. La [[entropia]] mide el tamaño estadístico de ese conjunto y permite comparar situaciones. El resultado restringe cualquier explicación: si se propone que un microestado concreto tiene más peso, debe aparecer una causa física o un [[desbalance_probabilidad]] medible.

## 2. Modelos de mezcla de dos compartimentos
Variable dominante: [[multiplicidad_macroestado]]
Límite de validez: barrera retirada, sistema aislado y microestados igualmente accesibles

Cuando dos compartimentos conectados permiten redistribuir partículas, la hipótesis fundamental explica por qué la distribución equilibrada es la de mayor multiplicidad. La variable que se mide es cuántos microestados corresponden a cada reparto macroscópico. Aunque cada [[probabilidad_microestado]] sea igual, los repartos cercanos a mitad y mitad contienen más combinaciones y por eso dominan. La [[energia_total]] y el [[volumen]] total deben mantenerse fijos. Si hay corrientes, gradientes persistentes o paredes selectivas, el modelo pierde validez y aparece [[desbalance_probabilidad]].

## 3. Estimación de [[entropia]] microcanónica
Variable dominante: [[entropia]]
Límite de validez: [[numero_microestados_accesibles]] > 1 y conteo compatible con restricciones fijas

En problemas donde se estima [[entropia]], la hipótesis fundamental proporciona la base conceptual: no se pondera un microestado sobre otro. Lo que se predice es la escala termodinámica asociada a un conteo microscópico. [[constante_boltzmann]] transforma el conteo en unidades físicas. Esta aplicación se usa en modelos de sólidos, gases ideales simplificados y sistemas discretos de energía. El peligro principal es contar microestados que no satisfacen [[energia_total]], [[volumen]] o [[numero_particulas]], lo que produce una [[entropia]] artificialmente alta.

## 4. Diagnóstico de simulaciones estadísticas
Variable dominante: [[desbalance_probabilidad]]
Límite de validez: muestra suficientemente larga y espacio accesible correctamente definido

En simulaciones, la hipótesis fundamental sirve como prueba de equilibrio. Si una trayectoria numérica visita microestados accesibles con frecuencias muy distintas sin restricción adicional, puede haber mala mezcla, sesgo algorítmico o tiempo insuficiente. Se mide [[desbalance_probabilidad]] para comparar la distribución empírica con la equiprobabilidad esperada. Esta aplicación no exige que cada microestado aparezca igual en muestras pequeñas, pero sí que las diferencias disminuyan al aumentar el tiempo de observación. Si no disminuyen, el sistema o el algoritmo no representan el ensemble microcanónico.

## 5. Comparación de macroestados en sistemas pequeños
Variable dominante: [[probabilidad_microestado]]
Límite de validez: pocos estados discretos, aislamiento ideal y conteo exacto

En sistemas pequeños, como modelos de espines o niveles discretos, se puede contar explícitamente [[numero_microestados_accesibles]]. La hipótesis fundamental permite calcular la [[probabilidad_microestado]] de cada estado y luego agrupar por [[multiplicidad_macroestado]]. Se predice qué macroestado aparecerá con más frecuencia en equilibrio aislado. La aplicación es útil didácticamente porque separa de forma visible probabilidad individual y probabilidad de macroestado. Si [[desbalance_probabilidad]] no es cero en la preparación inicial, el resultado representa el equilibrio ideal, no necesariamente el estado inicial.

## 6. Sistema de espines con dos orientaciones posibles
Variable dominante: [[entropia]]
Límite de validez: espines no interactuantes, campo externo nulo, [[energia_total]] conservada

Un conjunto de N espines sin campo externo ni interacciones tiene todos sus microestados energéticamente equivalentes. La hipótesis fundamental asigna igual [[probabilidad_microestado]] a cada configuración compatible con la [[energia_total]] fija y el [[numero_particulas]] fijo. Para N espines con dos orientaciones posibles, [[numero_microestados_accesibles]] crece exponencialmente con N y puede calcularse exactamente. El macroestado con mayor [[multiplicidad_macroestado]] corresponde a la configuración más desordenada: mitad de espines en cada orientación. La [[entropia]] del sistema, calculada con [[constante_boltzmann]] y el logaritmo de [[numero_microestados_accesibles]], mide esa amplitud estadística. Un [[desbalance_probabilidad]] positivo señala que la distribución empírica favorece un sector del espacio de espines sin causa física explícita.

## 7. Polímero aislado con configuraciones de cadena accesibles
Variable dominante: [[multiplicidad_macroestado]]
Límite de validez: cadena libre, [[energia_total]] fija, sin intercambio con solvente

Una cadena polimérica aislada puede adoptar múltiples conformaciones con la misma energía. La hipótesis fundamental predice que el macroestado extendido y el plegado difieren por su [[multiplicidad_macroestado]]: la configuración enrollada agrupa muchos más microestados compatibles que la extendida bajo las mismas restricciones de [[energia_total]], [[volumen]] y [[numero_particulas]]. La [[probabilidad_microestado]] de cada conformación es la misma, pero la suma sobre el macroestado enrollado o extendido determina su probabilidad total. La [[entropia]] conformacional, calculada con [[constante_boltzmann]], explica la elasticidad estadística del polímero: al estirar la cadena, se reduce [[numero_microestados_accesibles]] y la [[entropia]] disminuye, generando una fuerza restauradora de origen puramente estadístico.

## 8. Sistemas biofísicos con estados conformacionales discretos
Variable dominante: [[probabilidad_microestado]]
Límite de validez: sistema térmicamente aislado durante el análisis, [[numero_particulas]] conservado

En modelos simplificados de proteínas o canales iónicos con un número discreto de estados conformacionales, la hipótesis fundamental suministra la distribución de referencia. Si el sistema tiene cuatro estados de igual [[energia_total]], cada uno recibe la misma [[probabilidad_microestado]]. La [[multiplicidad_macroestado]] distingue macroestados que agrupan varios estados funcionales equivalentes: un canal abierto puede reunir tres microestados y uno cerrado puede reunir uno, por lo que el canal abierto es tres veces más probable sin necesidad de postular ningún mecanismo cinético adicional. Un [[desbalance_probabilidad]] significativo indica que algún ligando, campo o restricción adicional rompe la equivalencia entre microestados accesibles, y el modelo microcanónico ya no describe el sistema sin ampliar el conjunto accesible.