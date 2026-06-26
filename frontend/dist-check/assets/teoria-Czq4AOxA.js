const e=`# Tornillo - Teoría y fundamentos

## Contexto conceptual

El tornillo es una de las máquinas simples más sofisticadas de la mecánica clásica, representando la culminación evolutiva del plano inclinado. Su función primordial es la transformación de un movimiento de rotación pura en un movimiento de traslación lineal, permitiendo una multiplicación de fuerza que supera en órdenes de magnitud a la de palancas o poleas convencionales de tamaño similar. En términos geométricos, un tornillo no es más que un plano inclinado que ha sido enrollado en forma de hélice alrededor de un cilindro central.

La genialidad de este mecanismo reside en su compacidad. Mientras que para mover una roca de una tonelada con una palanca necesitaríamos un brazo de varios metros de largo, un tornillo de apenas unos centímetros puede lograr el mismo efecto mediante la repetición cíclica de vueltas. Esta propiedad lo hace indispensable en cualquier aplicación donde se requiera precisión milimétrica combinada con fuerzas inmensas.

---

## 🟢 Nivel esencial

El tornillo es un convertidor de distancia por esfuerzo. Imaginemos que queremos subir un objeto pesado una altura pequeña. Podríamos levantarlo directamente (haciendo mucha fuerza en poca distancia) o empujarlo por una rampa muy larga y suave (haciendo poca fuerza en mucha distancia). El tornillo elige esta segunda opción: nos obliga a recorrer una trayectoria circular muy larga con la mano para que la carga solo avance una fracción de milímetro hacia arriba o hacia adelante en cada giro completo.

Esta rampa enrollada crea lo que llamamos ventaja mecánica. Gracias a ella, el esfuerzo circular que aplicamos con una llave o manivela se multiplica para vencer una carga axial inmensa. Es el mismo principio que permite que una persona de complexión media pueda elevar un automóvil completo utilizando un simple gato de tornillo: estamos pagando el esfuerzo con metros de giro para obtener toneladas de presión concentrada.

Conceptos fundamentales:
- **Paso de rosca**: Es la altura de la rampa. Es la distancia lineal que el tornillo avanza cuando completamos un giro de 360 grados.
- **Brazo de palanca**: Es la longitud de la herramienta que usamos para girar. Cuanto más largo sea este brazo, menor será la fuerza que tengamos que hacer.
- **Rozamiento y rendimiento**: En el tornillo, el roce entre los filetes de la rosca es muy alto. Aunque esto hace que perdamos energía, es lo que permite que el tornillo se quede quieto y no retroceda bajo carga por su propio peso.

---

## 🔵 Nivel formal

En el estudio formal, cuantificamos el comportamiento del tornillo analizando el equilibrio de energías y fuerzas. El modelo matemático básico se construye sobre el principio del trabajo virtual, asumiendo inicialmente un sistema ideal sin pérdidas por fricción para establecer los límites teóricos del diseño.

### 1. Geometría del Plano Inclinado Helicoidal
Si desenrollamos una sola vuelta de la rosca del tornillo, obtendremos un triángulo rectángulo donde la base es la circunferencia recorrida por el radio de palanca y la altura es el paso de rosca [[p]]. La relación entre estas dos longitudes define la potencia teórica del mecanismo y su capacidad de transformación de movimiento.

**Ventaja mecánica ideal**

{{f:ventaja_mecanica_ideal}}

Esta expresión nos muestra que la multiplicación de fuerza es proporcional a la relación entre la circunferencia de giro y el avance axial. Un tornillo con un paso muy pequeño y una palanca larga producirá una fuerza casi infinita en teoría, limitada solo por la resistencia de los materiales involucrados.

### 2. El Modelo de Fuerza Ideal
Bajo condiciones de equilibrio ideal, la fuerza tangencial [[F]] mínima para iniciar el movimiento de la carga [[R]] se calcula asumiendo que no hay disipación de calor. Es la cota inferior de esfuerzo que cualquier ingeniero debe conocer antes de dimensionar un sistema real:

{{f:fuerza_ideal}}

### 3. Dinámica con Fricción: El Modelo Real
En la realidad, el contacto entre las superficies metálicas de la rosca genera un rozamiento considerable que consume parte del trabajo de entrada. Introducimos el rendimiento [[eta]], un factor de eficiencia que suele oscilar entre 0,15 y 0,45 en tornillos de potencia estándar. La fuerza real que debemos aplicar es siempre superior a la ideal para compensar estas pérdidas disipativas:

{{f:fuerza_real}}

Este rendimiento se define como la proporción de energía útil que llega a la carga frente a la energía total suministrada por el operario o el motor de accionamiento:

{{f:eficiencia}}

Y para completar el dimensionamiento formal del sistema de tornillo se usan también:

{{f:torque_basico}}

{{f:torque_real}}

{{f:condicion_geometria}}

{{f:error_rendimiento}}

---

## 🔴 Nivel estructural

Desde una perspectiva estructural, el tornillo es un sistema autobloqueante cuya seguridad depende críticamente de la fricción interna. No se trata solo de mover cargas, sino de sostenerlas de forma segura contra la gravedad sin necesidad de frenos externos.

### El fenómeno del autobloqueo
Un tornillo es estructuralmente seguro si es capaz de sostener la carga axial [[R]] sin necesidad de una fuerza externa de retención [[F]]. Físicamente, esto ocurre cuando el ángulo de rozamiento de los materiales es mayor que el ángulo de inclinación de la hélice. Matemáticamente, la condición de autobloqueo suele cumplirse cuando el rendimiento [[eta]] es inferior al 50 por ciento. Si diseñáramos un tornillo demasiado eficiente, la carga podría caerse sola, girando el tornillo en sentido contrario.

### El Torque de entrada
En el diseño de máquinas, no solemos hablar de fuerza lineal de entrada, sino de torque [[tau]] o momento torsor. Es el esfuerzo de rotación que debe suministrar un motor o un operario. El torque básico se relaciona con la palanca de accionamiento y la fuerza tangencial aplicada:

Sin embargo, el torque real de diseño debe incluir la resistencia del tornillo y su ineficiencia inherente debido al rozamiento:

### Límites de validez estructural y fallos del modelo
El modelo de plano inclinado helicoidal es una aproximación válida mientras se cumpla la condición geométrica de que el paso de rosca [[p]] sea significativamente menor que la trayectoria circular recorrida. Si el paso fuera comparable a la circunferencia, el tornillo dejaría de comportarse como una máquina simple multiplicadora de fuerza. Además, el error relativo entre el modelo ideal y el real crece exponencialmente con la fricción, haciendo que el cálculo ideal sea insuficiente para dimensionar estructuras reales:

---

## Interpretación física profunda

El tornillo opera como un transformador de impedancia mecánica. Al igual que un transformador eléctrico convierte alto voltaje y baja corriente en bajo voltaje y alta corriente, el tornillo convierte alta velocidad angular y bajo torque en baja velocidad lineal y alta fuerza axial. Esta transformación es un proceso conservativo en términos de potencia ideal, pero el parámetro [[eta]] nos recuerda que el mundo real es disipativo y genera calor en cada superficie de contacto.

La magia del tornillo es que permite a un ser humano aplicar presiones de escala industrial. Al girar una manivela, estamos recorriendo un camino tan largo que la densidad de fuerza requerida es mínima en cada punto. Es una victoria de la geometría sobre la resistencia de los materiales. Sin embargo, esa misma geometría impone límites: un tornillo diseñado para fuerza extrema será extremadamente lento para el desplazamiento, ilustrando el compromiso eterno de la mecánica: nunca se gana fuerza sin pagar en distancia recorrida.

---

## Orden de magnitud

Para visualizar estas magnitudes, analicemos un gato de coche estándar de taller:
- **Radio de palanca [[r]]**: 0,25 metros.
- **Paso de rosca [[p]]**: 0,004 metros.
- **Carga axial [[R]]**: 8000 Newtons.
- **Ventaja mecánica ideal**: Aproximadamente 393. Esto significa que idealmente solo necesitaríamos 20 Newtons para levantar el coche.
- **Rendimiento real [[eta]]**: 35 por ciento.
- **Fuerza real [[F]]**: Resulta en unos 58 Newtons. Sigue siendo un esfuerzo muy ligero, equivalente a sostener una bolsa de la compra pesada, pero capaz de elevar una tonelada de masa sin dificultad.

---

## Método de resolución personalizado

Para abordar cualquier problema de tornillo, sigue este protocolo sistemático de cinco pasos:
1. **Mapeo de incógnitas**: Determina si el objetivo es hallar el esfuerzo de entrada [[F]], la carga soportada [[R]], o el torque [[tau]] total.
2. **Homogenización de unidades**: El paso [[p]] suele venir en milímetros en los catálogos; conviértelo siempre a metros dividiendo por 1000 antes de realizar cualquier operación.
3. **Selección del régimen de cálculo**: Si el enunciado menciona fricción o rozamiento explícito, utiliza obligatoriamente el modelo de \`fuerza_real\`. Si no, calcula la \`fuerza_ideal\` indicando que es un límite teórico inferior.
4. **Cálculo del Torque**: Multiplica la fuerza tangencial hallada por el brazo de palanca [[r]] para obtener el torque [[tau]] en unidades de Nm.
5. **Chequeo de seguridad física**: Verifica si el resultado tiene sentido físico (p. ej., la fuerza aplicada debe ser mucho menor que la carga axial levantada).

---

## Casos especiales y ejemplo extendido

**Tornillos de alta eficiencia**: Existen sistemas donde el deslizamiento se sustituye por rodadura de bolas de acero (husillos de bolas). Aquí el rendimiento [[eta]] sube al 90 por ciento. Estos sistemas NO son autobloqueantes: si se quita la fuerza de entrada, la carga cae por su propio peso. Se usan en robótica de alta precisión donde la velocidad es prioritaria.

**Ejemplo de prensa industrial**: Una prensa de taller aplica 15 Nm de torque con un tornillo de 2 mm de paso y 30 por ciento de rendimiento estimado. La carga axial [[R]] resultante es de 14137 Newtons. Esto demuestra que una pequeña herramienta manual puede generar una fuerza de cierre de 1,4 toneladas, suficiente para procesos de fabricación pesada.

---

## Preguntas reales del alumno

**¿Por qué si la ventaja mecánica es tan alta, a veces cuesta tanto girar el tornillo?**
Generalmente se debe a un rendimiento [[eta]] degradado por falta de lubricación o suciedad acumulada entre los filetes. El rozamiento puede subir tanto que el operario termina haciendo más fuerza para vencer la fricción interna que para mover la carga útil.

**¿Qué pasa si el radio de la palanca [[r]] es muy pequeño en el diseño?**
La ventaja mecánica disminuye drásticamente. Si intentas girar un tornillo de potencia con los dedos, la fuerza tangencial [[F]] requerida tiende a infinito debido a la falta de brazo de palanca, por eso siempre necesitamos herramientas de accionamiento largas.

**¿El paso de rosca [[p]] influye directamente en la velocidad de avance?**
Sí, es una relación inversa. Un paso pequeño da mucha fuerza pero requiere muchas vueltas completas para avanzar apenas un centímetro. Es el cambio de marchas fundamental de la mecánica de tornillos de potencia.

---

## Conexiones transversales y rutas de estudio

El estudio del tornillo abre la puerta a conceptos avanzados de la física aplicada y la ingeniería:
- **Dinámica de Rotación**: El concepto de torque [[tau]] es central aquí y se profundiza en el estudio del equilibrio del sólido rígido y momentos.
- **Termodinámica**: El calor generado por el bajo rendimiento [[eta]] es una aplicación directa de la disipación de energía por fricción superficial.
- **Elasticidad**: Las inmensas cargas axial [[R]] someten al núcleo del tornillo a esfuerzos de compresión que se estudian en resistencia de materiales.
- **Plano Inclinado**: Es la base conceptual de la hélice; entender la descomposición de fuerzas es el primer paso para formalizar el tornillo.

---

## Síntesis final para el examen

El tornillo es el conversor de esfuerzo más eficiente de la ingeniería clásica cuando se evalúa en términos de fuerza multiplicada por espacio ocupado. Combina la geometría del plano inclinado con la acción de la palanca para producir una [[ventaja_mecanica]] extraordinaria. Su rendimiento [[eta]] bajo no es un defecto sino una característica de seguridad que lo convierte en la máquina autobloqueante por excelencia.

Puntos clave para el éxito en el examen de física:

1. La **ventaja mecánica ideal** es una propiedad puramente geométrica:

2. El **modelo real de diseño** siempre debe incluir el rendimiento:

3. El **autobloqueo** es una función de la fricción y la baja pendiente del paso [[p]].

4. Un error común en los problemas es olvidar la conversión de unidades de milímetros a metros.

5. El **torque** [[tau]] es el producto de la fuerza por el brazo de palanca:

6. La condición de diseño segura requiere verificar siempre la geometría:
`;export{e as default};
