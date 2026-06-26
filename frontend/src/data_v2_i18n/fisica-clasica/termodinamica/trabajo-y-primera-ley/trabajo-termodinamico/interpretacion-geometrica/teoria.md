## Contexto conceptual

El diagrama p-V es la representación gráfica del estado de un sistema termodinámico en el espacio presión-[[volumen]]. Cada punto del diagrama es un estado de equilibrio; cada curva es una trayectoria entre estados. La clave es que el **área bajo esa curva equivale exactamente al trabajo [[trabajo_termodinamico]] del proceso**, convirtiendo el diagrama p-V en una herramienta de lectura directa sin necesidad de integrar analíticamente.

Esta equivalencia geométrica tiene una consecuencia inmediata y poderosa: como distintas curvas entre los mismos estados encierran áreas distintas, el trabajo **depende de la trayectoria**.

## 🟢 Nivel esencial

Imagina el diagrama p-V como un mapa donde el gas «viaja» de un estado a otro. Si el camino va hacia la derecha (el [[volumen]] crece), el gas se expande y realiza trabajo positivo. Si va hacia la izquierda, se comprime y el trabajo es negativo. La cantidad de trabajo es el «tamaño» del área que queda entre el camino y el eje de los volúmenes.

Para un ciclo completo (el gas vuelve al punto de partida), el trabajo neto es el área del «agujero» que encierra el bucle en el diagrama. Si el bucle se recorre en sentido horario, el trabajo neto es positivo (es un motor). Si es antihorario, es negativo (es un refrigerador).

La clave intuitiva es que el área no es un recurso matemático opcional: es exactamente lo que la física define como trabajo. Cuando el émbolo de un motor empuja el pistón hacia abajo durante la expansión de los gases de combustión, cada pequeñísimo desplazamiento del pistón multiplica la presión instantánea por ese desplazamiento infinitesimal de [[volumen]]. Sumar todos esos productos es una integral, y la integral es el área. Por eso medir el área del diagrama p-V y calcular analíticamente ∫p dV siempre dan el mismo número: son la misma operación matemática expresada de dos formas distintas.

## 🔵 Nivel formal

El trabajo en cualquier proceso cuasi-estático es:

{{f:trabajo_area_pV}}

Para un ciclo completo, el trabajo neto es:

{{f:trabajo_ciclo}}

Los tipos de proceso generan curvas características en el diagrama p-V:

- **Isobárico** (p constante): línea horizontal. Área = rectángulo de base ΔV y altura p.
- **Isocórico** (V constante): línea vertical. Área = 0 (no hay trabajo).
- **Isotérmico** (T constante): hipérbola p(V) decreciente. El área es la región bajo esa curva entre el [[volumen]] inicial y el final.
- **Adiabático** (Q = 0): curva más empinada que la isotérmica. Área menor que la isotérmica entre los mismos extremos de [[volumen]].

La lectura del trabajo para cada tipo de proceso es directa: en el proceso isobárico, el área es un rectángulo (base ΔV, altura p) y el resultado es p·ΔV. En el proceso isotérmico, el área es la superficie encerrada bajo la hipérbola, que se calcula integrando y cuyo valor es nRT·ln(V_f/V_i). En el proceso adiabático, el área es menor que la isotérmica para los mismos extremos de [[volumen]] porque la curva desciende más rápidamente.

> [!NOTE]
> La curva adiabática es siempre más empinada que la isotérmica a través del mismo punto del diagrama p-V. Por eso el trabajo en una expansión adiabática es menor que en una expansión isotérmica entre los mismos estados de [[volumen]].

> [!WARNING]
> Solo los procesos cuasi-estáticos tienen una curva bien definida en el diagrama p-V. Los procesos irreversibles rápidos (explosiones, expansión libre) no se representan como curvas y el área no puede leerse directamente.

## 🔴 Nivel estructural

La interpretación geométrica hace visible algo fundamental: la **dependencia de [[trabajo_termodinamico]] con la trayectoria**. Dibuja dos curvas distintas entre los mismos estados inicial A y final B; cada una encierra una área diferente bajo el eje de volúmenes. El trabajo es diferente para cada trayectoria aunque los estados inicial y final sean idénticos.

Esto contrasta con la energía interna ΔU, que solo depende de los estados A y B, independientemente de la trayectoria. Si [[trabajo_termodinamico]] depende de la trayectoria y ΔU no, entonces el calor Q = ΔU + [[trabajo_termodinamico]] también depende de la trayectoria: para ir del mismo A al mismo B, se necesita diferente cantidad de calor según el camino elegido.

El **área del ciclo** en el diagrama p-V es el trabajo neto. Para comparar ciclos termodinámicos (Carnot, Otto, Diesel), el diagrama p-V muestra visualmente qué ciclo produce más trabajo neto por ciclo: el que encierra más área. El ciclo de Carnot, operando entre dos temperaturas fijas, es el que maximiza el área dado el límite de temperatura máxima y mínima.

> [!TIP]
> Para determinar si un ciclo es motor o refrigerador, basta con mirar el sentido del recorrido: horario = motor (trabajo neto positivo), antihorario = refrigerador o bomba de calor (trabajo neto negativo).

## Interpretación física profunda

El diagrama p-V transforma una integral de cálculo en una medida geométrica. Esto no es una mera simplificación didáctica: el indicador de vapor de James Watt usaba literalmente este principio para medir el trabajo real de una máquina de vapor dibujando la curva p-V del ciclo con un mecanismo mecánico y midiendo el área resultante.

Esta equivalencia también explica por qué el [[trabajo_termodinamico]] depende de la trayectoria mientras que la energía interna no. Si dibujas dos curvas distintas entre el mismo estado A y el mismo estado B en el diagrama p-V, cada curva encierra una área diferente bajo el eje de volúmenes. Dos procesos que conectan los mismos estados pueden realizar trabajos totalmente distintos. El diagrama p-V hace esto visible sin ningún cálculo: basta con comparar las dos áreas.

## Orden de magnitud

Para un ciclo rectangular simple con diferencia de presión de 10⁵ Pa y diferencia de [[volumen]] de 2×10⁻³ m³, el área del rectángulo resultante es 200 J, que es el trabajo neto por ciclo.

## Método de resolución personalizado

1. **Dibujar la trayectoria** del proceso en el diagrama p-V con los valores de p y V en cada estado.
2. **Identificar el área** encerrada entre la curva y el eje de volúmenes.
3. **Calcular el área** geométricamente (rectángulo, trapecio) o analíticamente (integral) según la forma de la curva.
4. **Asignar el signo**: expansión (derecha) = positivo; compresión (izquierda) = negativo.
5. **Para ciclos**: sumar las contribuciones de cada proceso respetando los signos, o calcular directamente el área encerrada por el lazo.

## Casos especiales y ejemplo extendido

**Ciclo Carnot** en diagrama p-V: dos isotérmicas y dos adiabáticas. El área encerrada es el trabajo neto. La eficiencia es [[trabajo_neto_del_ciclo]]/Q_absorbido.

**Ciclo rectangular**: dos isobáricos y dos isocóricos. El área es un rectángulo de lados (p_alta − p_baja) × (V_alta − V_baja). Es el ciclo más simple de analizar geométricamente.

## Preguntas reales del alumno

**¿Por qué el área bajo la curva es exactamente el trabajo y no algo aproximado?**
Porque la definición matemática de [[trabajo_termodinamico]] es igual a ∫p dV es exactamente la integral de Riemann, que es el área bajo la curva. No hay aproximación: es una igualdad exacta.

**¿Puedo comparar el trabajo de dos procesos sin calcular ninguna integral?**
Sí. Si dibujas las dos curvas en el mismo diagrama p-V entre los mismos estados, la que encierra mayor área es la que produce más trabajo. La comparación visual es exacta si las curvas están bien trazadas.

## Conexiones transversales y rutas de estudio

La interpretación geométrica conecta directamente con el leaf de [Trabajo de expansión](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/trabajo-termodinamico/trabajo-de-expansion) y con los ciclos termodinámicos. Los diagramas p-V de los ciclos de Carnot, Otto y Diesel son aplicaciones directas de este leaf.

## Síntesis final

El diagrama p-V convierte el cálculo del trabajo termodinámico en una lectura de áreas. [[trabajo_termodinamico]] = área bajo la curva p(V); [[trabajo_neto_del_ciclo]] = área del lazo cerrado. La dependencia de la trayectoria queda visible como diferencia de áreas entre curvas distintas que conectan los mismos estados.