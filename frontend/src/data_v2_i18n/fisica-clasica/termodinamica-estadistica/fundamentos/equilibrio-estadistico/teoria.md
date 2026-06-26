## Contexto conceptual

El equilibrio estadístico no significa inmovilidad microscópica. Un sistema puede seguir saltando entre estados accesibles mientras sus ocupaciones medias ya no cambian. La clave está en comparar [[probabilidad_estado]], [[tasa_transicion]] y [[flujo_probabilidad]] durante un intervalo de [[tiempo]] suficiente. Si los tránsitos hacia un estado compensan los tránsitos que salen de él, la distribución se vuelve estacionaria. Así, el equilibrio se reconoce por ausencia de deriva estadística, no por ausencia de actividad.

## 🟢 Nivel esencial

Imagina muchos sistemas idénticos observados al mismo [[tiempo]]. Cada copia puede estar en un estado distinto, con una [[probabilidad_estado]] asociada. Aunque una copia cambie de estado, el conjunto puede mantener la misma distribución si cada ida queda compensada por una vuelta equivalente. Esa compensación se lee mediante el [[flujo_probabilidad]]: si no hay tránsito neto preferente, las ocupaciones permanecen estables.

La [[temperatura]] del entorno y la [[energia_estado]] ayudan a fijar qué estados son más probables, pero el criterio esencial es estacionario: la distribución no cambia al avanzar el [[tiempo]]. Por eso equilibrio estadístico no es reposo microscópico, sino balance colectivo entre transiciones que siguen ocurriendo. La pregunta útil no es qué hace una copia aislada, sino si la población completa mantiene sus proporciones y cierra sus intercambios. Un baño térmico que controla la [[temperatura]] convierte la [[constante_boltzmann]] en puente entre [[energia_estado]] microscópica y [[probabilidad_estado]] de cada configuración.

## 🔵 Nivel formal

El análisis formal empieza separando ocupación, transición y normalización. La condición estacionaria exige que cada [[probabilidad_estado]] permanezca constante durante el [[tiempo]] de observación, de modo que la distribución no tenga deriva neta. Esta condición no elimina las transiciones: solo exige que las entradas y salidas estadísticas de cada estado se compensen en promedio.

{{f:criterio_probabilidad_estacionaria}}

Además, las probabilidades deben sumar toda la población estadística accesible, sin pérdidas ni duplicaciones. Esa comprobación evita diagnosticar equilibrio cuando falta un estado oculto o cuando se ha contado dos veces la misma población.

{{f:normalizacion_probabilidades}}

Para dos estados conectados, el balance detallado compara el tránsito directo con el inverso mediante la [[tasa_transicion]].

{{f:balance_detallado_dos_estados}}

Si los dos tránsitos no se compensan, aparece [[flujo_probabilidad]] neto, que señala una dirección estadística preferente entre estados y rompe el balance microscópico.

{{f:flujo_probabilidad_neto}}

La [[entropia]] de Gibbs resume cuán repartida está la distribución cuando el equilibrio es compatible con el conjunto de estados accesibles.

{{f:entropia_gibbs_equilibrio}}

En un entorno térmico, [[temperatura]], [[constante_boltzmann]], [[energia_estado]] y [[peso_boltzmann]] orientan la distribución esperada. La lectura formal no busca una trayectoria individual, sino una distribución estable, normalizada y compatible con las tasas observadas. Por eso la misma fotografía de probabilidades debe acompañarse de una lectura dinámica de sus intercambios.

## 🔴 Nivel estructural

La estructura del modelo descansa en varias hipótesis explícitas. Primero, el conjunto de estados accesibles debe estar bien definido: si aparecen estados nuevos durante la observación, la normalización inicial deja de representar el sistema. Segundo, las [[tasa_transicion]] deben poder interpretarse como promedios estables; si cambian bruscamente con el [[tiempo]], una [[probabilidad_estado]] aparentemente constante puede ser solo una pausa transitoria. Tercero, la muestra estadística debe ser suficientemente grande o repetible para distinguir fluctuaciones locales de una tendencia real. Cuarto, la convención de sentido para [[flujo_probabilidad]] debe fijarse antes de comparar flechas directas e inversas. El invariante básico es la conservación de población: toda probabilidad pertenece a algún estado accesible, y la suma total no debe crecer ni disminuir.

El límite de validez aparece cuando el sistema está impulsado desde fuera, cuando hay memoria fuerte entre saltos, o cuando el baño térmico no mantiene una [[temperatura]] estable. En esos casos, el equilibrio estadístico simple puede confundirse con un régimen estacionario no equilibrado: las [[probabilidad_estado]] no cambian, pero existen ciclos persistentes de [[flujo_probabilidad]]. El balance detallado es entonces más exigente que la mera estacionariedad.

Los casos frontera son importantes. Si [[flujo_probabilidad]] es casi nulo dentro del error experimental, el modelo de equilibrio puede ser útil aunque cada transición individual siga ocurriendo. Si el [[desbalance_estadistico]] es pequeño pero sistemático, conviene prolongar la observación o revisar las tasas. Si una [[probabilidad_estado]] se acerca a cero, su contribución a la [[entropia]] exige cuidado numérico. La lectura gráfica tipo DCL muestra entradas y salidas de probabilidad como flechas compensadas: no representa fuerzas mecánicas, sino balance de tráfico estadístico. El modelo falla cuando las flechas no se cierran, cuando la normalización se rompe, o cuando la distribución depende del historial previo y no solo de los estados actuales. También falla si se mezclan datos tomados a distintas [[temperatura]] o si se interpretan promedios de corta duración como equilibrio definitivo. Por eso la lectura estructural debe comprobar simultáneamente normalización, estacionariedad, balance de pares, tamaño de muestra y consistencia del diagrama visual. Si una de esas piezas no encaja, el resultado puede ser regularidad temporal, pero no equilibrio estadístico bien diagnosticado.

## Interpretación física profunda

La idea central es que el equilibrio estadístico convierte el desorden microscópico en regularidad macroscópica. Cada sistema individual puede comportarse de forma imprevisible, pero la nube completa de ocupaciones se vuelve estable. [[flujo_probabilidad]] mide si esa nube se desplaza entre estados; [[desbalance_estadistico]] indica cuánto falta para el balance. La [[entropia]] no es una etiqueta moral de desorden, sino una medida de reparto estadístico. Cuando las transiciones se compensan, el sistema deja de mostrar una dirección neta de evolución en el espacio de probabilidades.

## Orden de magnitud

En simulaciones pequeñas, un [[desbalance_estadistico]] menor que 10^-2 puede considerarse cercano al equilibrio si el ruido estadístico es comparable. En experimentos, conviene observar varios tiempos característicos: si durante 10 a 100 intervalos de transición las [[probabilidad_estado]] no derivan y [[flujo_probabilidad]] oscila alrededor de cero, la hipótesis estacionaria es razonable.

## Método de resolución personalizado

Primero enumera los estados accesibles y asigna cada [[probabilidad_estado]]. Después verifica la normalización. Tercero, estima las [[tasa_transicion]] directas e inversas. Cuarto, calcula o interpreta [[flujo_probabilidad]] para detectar dirección neta. Quinto, distingue estacionariedad global de balance detallado. Por último, usa [[entropia]], [[temperatura]] y [[peso_boltzmann]] solo dentro del modelo térmico adecuado.

## Casos especiales y ejemplo extendido

En un sistema de dos estados, el equilibrio se reconoce cuando el tránsito promedio de A hacia B compensa el de B hacia A. Si ambos estados tienen igual [[energia_estado]], sus ocupaciones pueden ser parecidas. Si una energía es mayor, el [[peso_boltzmann]] puede reducir su ocupación a [[temperatura]] moderada. En un ciclo de tres estados puede ocurrir algo más sutil: cada [[probabilidad_estado]] permanece constante, pero existe corriente circular. Ese caso es estacionario, aunque no necesariamente de equilibrio detallado.

## Preguntas reales del alumno

¿Equilibrio significa que nada cambia? No. Cambian microestados, pero no cambia la distribución.

¿Por qué importa [[flujo_probabilidad]] si ya conozco las probabilidades? Porque dos distribuciones iguales pueden esconder dinámicas distintas.

¿La [[entropia]] siempre aumenta hasta el equilibrio? En un sistema aislado ideal tiende a un máximo compatible, pero aquí se analiza una distribución estadística bajo hipótesis concretas.

¿Puedo usar siempre [[peso_boltzmann]]? Solo si el entorno térmico y la [[temperatura]] permiten una descripción canónica.

## Conexiones transversales y rutas de estudio

Este leaf conecta con función de partición, distribución de Boltzmann, procesos de Markov, irreversibilidad y termodinámica macroscópica. También prepara la lectura de fluctuaciones, porque una distribución estacionaria todavía puede presentar variaciones microscópicas medibles.

## Síntesis final

El equilibrio estadístico es balance dinámico: las transiciones siguen ocurriendo, pero la distribución deja de moverse. La señal física no es quietud, sino [[flujo_probabilidad]] neto nulo y [[probabilidad_estado]] estacionaria.