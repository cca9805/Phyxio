# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: hipotesis-fundamental
# Target response file: aplicaciones.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Aplicaciones
## 1. Gases aislados en cajas rígidas
Variable dominante: [[numero_microestados_accesibles]]
Límite de validez: ΔE/E << 1, ΔV/V = 0 y ΔN/N = 0

La hipótesis fundamental se usa para interpretar por qué un gas aislado tiende a estados macroscópicos uniformes. La [[energia_total]], el [[volumen]] y el [[numero_particulas]] fijan el conjunto accesible. Cada [[probabilidad_microestado]] individual es igual, pero los macroestados homogéneos agrupan una enorme [[multiplicidad_macroestado]]. Se predice qué aspecto macroscópico será más frecuente sin seguir cada molécula. La [[entropia]] mide el tamaño estadístico de ese conjunto y permite comparar situaciones. El resultado restringe cualquier explicación: si se propone que un microestado concreto tiene más peso, debe aparecer una causa física o un [[desbalance_probabilidad]] medible.

## 2. Modelos de mezcla de dos compartimentos
Variable dominante: [[multiplicidad_macroestado]]
Límite de validez: barrera retirada, sistema aislado y microestados igualmente accesibles

Cuando dos compartimentos conectados permiten redistribuir partículas, la hipótesis fundamental explica por qué la distribución equilibrada es la de mayor multiplicidad. La variable que se mide es cuántos microestados corresponden a cada reparto macroscópico. Aunque cada [[probabilidad_microestado]] sea igual, los repartos cercanos a mitad y mitad contienen más combinaciones y por eso dominan. La [[energia_total]] y el [[volumen]] total deben mantenerse fijos. Si hay corrientes, gradientes persistentes o paredes selectivas, el modelo pierde validez y aparece [[desbalance_probabilidad]].

## 3. Estimación de entropía microcanónica
Variable dominante: [[entropia]]
Límite de validez: [[numero_microestados_accesibles]] > 1 y conteo compatible con restricciones fijas

En problemas donde se estima [[entropia]], la hipótesis fundamental proporciona la base conceptual: no se pondera un microestado sobre otro. Lo que se predice es la escala termodinámica asociada a un conteo microscópico. [[constante_boltzmann]] transforma el conteo en unidades físicas. Esta aplicación se usa en modelos de sólidos, gases ideales simplificados y sistemas discretos de energía. El peligro principal es contar microestados que no satisfacen [[energia_total]], [[volumen]] o [[numero_particulas]], lo que produce una entropía artificialmente alta.

## 4. Diagnóstico de simulaciones estadísticas
Variable dominante: [[desbalance_probabilidad]]
Límite de validez: muestra suficientemente larga y espacio accesible correctamente definido

En simulaciones, la hipótesis fundamental sirve como prueba de equilibrio. Si una trayectoria numérica visita microestados accesibles con frecuencias muy distintas sin restricción adicional, puede haber mala mezcla, sesgo algorítmico o tiempo insuficiente. Se mide [[desbalance_probabilidad]] para comparar la distribución empírica con la equiprobabilidad esperada. Esta aplicación no exige que cada microestado aparezca igual en muestras pequeñas, pero sí que las diferencias disminuyan al aumentar el tiempo de observación. Si no disminuyen, el sistema o el algoritmo no representan el ensemble microcanónico.

## 5. Comparación de macroestados en sistemas pequeños
Variable dominante: [[probabilidad_microestado]]
Límite de validez: pocos estados discretos, aislamiento ideal y conteo exacto

En sistemas pequeños, como modelos de espines o niveles discretos, se puede contar explícitamente [[numero_microestados_accesibles]]. La hipótesis fundamental permite calcular la [[probabilidad_microestado]] de cada estado y luego agrupar por [[multiplicidad_macroestado]]. Se predice qué macroestado aparecerá con más frecuencia en equilibrio aislado. La aplicación es útil didácticamente porque separa de forma visible probabilidad individual y probabilidad de macroestado. Si [[desbalance_probabilidad]] no es cero en la preparación inicial, el resultado representa el equilibrio ideal, no necesariamente el estado inicial.

