# Dos masas unidas por cuerda

## Contexto conceptual

La máquina de Atwood responde a una pregunta fundamental: ¿cómo acoplan dos masas conectadas por una cuerda ideal su movimiento? Este sistema simple encapsula principios universales de dinámica: acoplamiento de cuerpos, fuerzas de restricción y la conservación de la restricción geométrica (la cuerda inextensible).

En el estudio de la mecánica newtoniana, comprender cómo las magnitudes [[m1]], [[m2]], [[g]], [[a]] y [[T]] se relacionan permite predecir el comportamiento de sistemas acoplados. La cuerda ideal actúa como transmisor perfecto de fuerza, mientras que la polea ideal cambia la dirección sin disipar energía.

El aprendizaje de este concepto proporciona herramientas transferibles a elevadores, sistemas de transporte por cable, y análisis de equilibrio dinámico en ingeniería mecánica.

## 🟢 Nivel esencial

Imagina dos objetos unidos por una cuerda que pasa por una polea. Si uno pesa más que el otro, el más pesado tiende a bajar y el más ligero sube. No se mueven por separado: la cuerda obliga a que el avance de uno corresponda al avance del otro.

La idea central es la asimetría de pesos. Si ambos lados pesan igual, el sistema puede quedarse en reposo o moverse con velocidad constante. Si un lado pesa más, aparece una tendencia neta que arrastra a todo el conjunto. La cuerda transmite esa acción y la polea cambia su dirección.

La aceleración no es caída libre, porque la masa que baja debe arrastrar también a la que sube. El sistema completo tiene inercia, y esa inercia compartida reduce la aceleración. La tensión es la fuerza interna que mantiene acopladas las dos partes.

Tres casos extremos desarrollan intuición:

- **Equilibrio**: pesos iguales producen aceleración nula.

- **Casi caída libre**: si un lado domina mucho, el movimiento se parece al de una caída libre, pero nunca ignora por completo la otra masa.

- **Tensión intermedia**: la cuerda no tira como el peso mayor ni como el menor; adopta un valor compatible con el movimiento común.

## 🔵 Nivel formal

Ahora expresemos estas relaciones cuantitativamente mediante las ecuaciones de Newton.

Para cada masa individual, aplicamos la segunda ley. Para [[m1]] (suponiendo que sube):

[[T]] − [[m1]]·[[g]] = [[m1]]·[[a]]

Para [[m2]] (suponiendo que baja):

[[m2]]·[[g]] − [[T]] = [[m2]]·[[a]]

Resolviendo este sistema de dos ecuaciones con dos incógnitas ([[a]] y [[T]]), obtenemos las fórmulas fundamentales del leaf:

**Aceleración del sistema acoplado:**

{{f:aceleracion_atwood}}

Esta ecuación muestra que [[a]] es proporcional a la diferencia de masas e inversamente proporcional a la masa total. El signo de [[a]] indica el sentido real del movimiento respecto a la elección de ejes.

La diferencia de masas aparece en el numerador porque solo el desequilibrio de pesos impulsa el movimiento. La suma de masas aparece en el denominador porque ambas masas deben acelerarse juntas. Esta estructura evita dos errores frecuentes: atribuir la caída solo a la masa mayor o calcular la aceleración como si el cuerpo ligero no existiera.

**Tensión en la cuerda ideal:**

{{f:tension_atwood}}

La tensión depende del producto de ambas masas. Cuando una masa es mucho mayor que la otra, la tensión se aproxima al doble del peso de la masa menor.

Estas fórmulas son válidas cuando: la cuerda es ideal (sin masa, inextensible), la polea es ideal (sin masa, sin rozamiento), y el movimiento es puramente vertical sin oscilaciones.

El chequeo formal más importante es doble. Primero, el módulo de [[a]] no debe superar [[g]] en el modelo ideal. Segundo, [[T]] debe quedar entre los pesos de ambas masas cuando el sistema acelera. Si alguno de esos controles falla, el error suele estar en el signo de una ecuación o en haber usado ejes incompatibles para los dos cuerpos.

## 🔴 Nivel estructural

El modelo de Atwood ideal tiene límites estructurales definidos:

**Límites de validez del modelo ideal:**

1. **Cuerda real**: Si la cuerda tiene masa comparable a las masas del sistema, la tensión ya no es uniforme. La inextensibilidad también falla si la carga supera el módulo elástico del material.

2. **Polea real**: Poleas con masa distribuyen inercia rotacional; poleas con rozamiento en el eje introducen torques disipativos que reducen la aceleración efectiva.

3. **Régimen dinámico**: A altas aceleraciones pueden aparecer efectos de flotabilidad del aire, vibraciones de la cuerda, o deslizamiento si la fricción cuerda-polea es insuficiente.

**Señales de fallo del modelo:**

- Si la aceleración medida difiere más del 10% de la predicha idealmente, alguna hipótesis falla
- Si la tensión varía a lo largo de la cuerda, la cuerda no es suficientemente "ideal"
- Si el sistema oscila transversalmente, la aproximación unidimensional se rompe

**Extensión a modelos más complejos:**

El modelo de Atwood con polea masilla o cuerda extensible requiere incluir ecuaciones de rotación o elasticidad. El límite de transición ocurre cuando la energía cinética rotacional o elástica es comparable a la energía de traslación.

La estructura del modelo puede leerse como una cadena de decisiones: primero se decide si la cuerda impone la misma aceleración; después se decide si la polea solo cambia la dirección de la fuerza o también almacena energía rotacional; por último se comprueba si la tensión puede tratarse como uniforme. Si cualquiera de esas respuestas cambia, las fórmulas cerradas del modelo ideal dejan de ser el núcleo del análisis y pasan a ser una aproximación de referencia.

En una polea con inercia, parte de la diferencia de pesos acelera la rotación de la polea, de modo que la aceleración lineal disminuye. En una cuerda elástica, las masas pueden tener aceleraciones instantáneas distintas y aparece una dinámica oscilatoria. En una cuerda con masa, la tensión cambia de punto a punto porque cada tramo debe acelerar su propia masa. Estos cambios no contradicen el modelo ideal; delimitan su dominio.

## Interpretación física profunda

El significado físico trasciende la sustitución numérica.

**Simetría y antisimetría**: Si intercambias [[m1]] y [[m2]], la aceleración cambia de signo pero mantiene el mismo módulo. La tensión, sin embargo, permanece invariante (simetría del producto). Esto refleja que la tensión depende de cómo interactúan ambas masas, no de cuál está arriba o abajo.

**Interpretación de límites:**
- Cuando [[m2]] >> [[m1]]: [[a]] → [[g]] y [[T]] → 2·[[m1]]·[[g]]. La masa pequeña experimenta una aceleración cercana a la gravedad, soportando el doble de su peso.
- Cuando [[m1]] = [[m2]]: [[a]] = 0 y [[T]] = [[m1]]·[[g]] = [[m2]]·[[g]]. Equilibrio perfecto sin movimiento.
- Cuando [[m1]] → 0: [[a]] → [[g]] y [[T]] → 0. La cuerda se vuelve "transparente" dinámicamente.

**Conservación de la restricción**: La inextensibilidad de la cuerda impone que ambas masas compartan el mismo módulo de aceleración. Esta restricción es lo que acopla sus movimientos y permite plantear el sistema como dos ecuaciones ligadas.

## Orden de magnitud

Referencias numéricas típicas para desarrollar intuición:

**[[m1]]**: 0.05 kg a 5 kg en laboratorios escolares y universitarios.

**[[m2]]**: 0.05 kg a 5 kg, típicamente ligeramente mayor que [[m1]] para producir aceleración medible.

**[[g]]**: 9.8 m/s² en la Tierra (a menudo 10 m/s² en cálculos aproximados).

**[[a]]**: 0 a valores cercanos a [[g]]; típicamente 0.5 a 4 m/s² en montajes prácticos con diferencias moderadas de masa.

**[[T]]**: Entre el peso menor y el peso mayor; típicamente 1 N a 100 N en sistemas de laboratorio.

Estos órdenes permiten validación rápida: una tensión de 500 N en un sistema de 1 kg es claramente errónea.

## Método de resolución personalizado

Procedimiento para resolver problemas de máquina de Atwood:

1. **Dibujar el diagrama**: Esquematizar ambas masas, la cuerda, la polea, y elegir ejes coherentes (positivo hacia arriba para la masa que suponemos sube, positivo hacia abajo para la que baja).

2. **Plantear ecuaciones de Newton**: Para cada masa, identificar fuerzas (tensión arriba, peso abajo) y escribir la segunda ley.

3. **Imponer la restricción**: Igualar los módulos de aceleración ([[a]] común) debido a la cuerda inextensible.

4. **Resolver el sistema**: Sumar o restar ecuaciones para eliminar [[T]] y obtener [[a]], luego sustituir para hallar [[T]].

5. **Interpretar el signo de [[a]]**: Positivo confirma el sentido supuesto; negativo indica que el movimiento es opuesto.

6. **Validar**: Verificar que [[T]] esté entre ambos pesos, y que |[[a]]| ≤ [[g]].

## Casos especiales y ejemplo extendido

**Caso especial 1 — Equilibrio dinámico**: Cuando [[m1]] = [[m2]], la aceleración es cero pero la tensión no lo es. La tensión iguala al peso común, manteniendo el sistema en reposo (o con velocidad constante si se le dio un empuje inicial). Muchos errores surgen de confundir aceleración nula con ausencia de fuerzas.

**Caso especial 2 — Caída libre asintótica**: Cuando una masa es despreciable frente a la otra ([[m1]] << [[m2]]), la aceleración se aproxima a [[g]] y la tensión tiende a cero. La cuerda no ejerce fuerza significativa; la masa pequeña "cae libre" arrastrada por la grande que cae casi libremente.

**Ejemplo extendido — Polea móvil**: En sistemas con polea móvil (donde la polea misma sube o baja), las relaciones cambian porque la geometría de la cuerda modifica las relaciones cinemáticas. Si una polea móvil tiene masa propia significativa, la inercia total aumenta y la aceleración efectiva disminuye respecto al modelo de Atwood estándar.

## Preguntas reales del alumno

**¿Por qué la tensión es la misma en ambos lados de la cuerda?**
En el modelo ideal, la cuerda sin masa no acumula fuerza neta. Si las tensiones fueran distintas, un segmento infinitesimal de cuerda tendría aceleración infinita. En cuerdas reales con masa, la tensión varía ligeramente a lo largo de la cuerda.

**¿Qué pasa si la cuerda tiene elasticidad?**
La cuerda elástica permite que las masas tengan aceleraciones instantáneamente distintas mientras la cuerda se estira. El sistema oscila hasta alcanzar un régimen estacionario. La transición al modelo ideal ocurre cuando el tiempo de estiramiento es despreciable frente al tiempo de observación.

**¿Por qué la aceleración es menor que [[g]] siempre?**
La diferencia de pesos es siempre menor que el peso de la masa mayor (que sería la fuerza en caída libre). Además, esa diferencia debe acelerar ambas masas, no solo una. Por tanto, [[a]] = [[g]]·Δm/(m_total) < [[g]].

**¿Dónde se usa esto en la realidad?**
Elevadores con contrapeso, funiculares, sistemas de transporte minero, y en general cualquier mecanismo donde se aprovecha la diferencia de pesos para reducir el trabajo del motor.

## Conexiones transversales y rutas de estudio

**Prerequisitos esenciales:**
- Leyes de Newton (dinámica puntual)
- Descomposición vectorial de fuerzas
- Concepto de inercia y masa gravitatoria vs. inercial

**Continuaciones naturales:**
- Dinámica rotacional (cuando la polea tiene inercia)
- Energía y trabajo (análisis energético del sistema)
- Oscilaciones (si la cuerda es elástica)

**Aplicaciones directas:**
- Sistemas de elevación con contrapeso
- Transporte por cable en minería y montaña
- Máquinas simples (polipastos, aparejos)

**Conexión histórica:**
George Atwood (1746-1807) diseñó esta máquina para estudiar la gravedad con precisión en tiempos donde cronómetros de alta resolución no existían. Al reducir la aceleración efectiva, permitió medir [[g]] con mayor precisión.

## Síntesis final

La máquina de Atwood encapsula la esencia de sistemas acoplados: dos cuerpos unidos por una restricción geométrica que impone igualdad de aceleraciones. Las fórmulas obtenidas revelan que la aceleración depende de la asimetría de masas normalizada por la inercia total, mientras que la tensión emerge como fuerza de acoplamiento intermedia entre ambos pesos.

Dominar este leaf significa comprender cómo plantear ecuaciones de movimiento ligadas, interpretar el significado físico de resultados algebraicos, y reconocer los límites donde el modelo ideal requiere extensiones. Estas habilidades son transferibles a sistemas mecánicos complejos, desde elevadores hasta dinámicas moleculares simplificadas.
