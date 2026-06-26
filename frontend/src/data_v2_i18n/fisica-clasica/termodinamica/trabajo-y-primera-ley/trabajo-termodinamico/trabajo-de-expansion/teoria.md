## Contexto conceptual

El trabajo termodinámico [[trabajo_termodinamico]] es la forma de energía que se transfiere entre un sistema y su entorno cuando la frontera del sistema se desplaza. En la práctica, esto ocurre cuando un gas empuja un émbolo, un globo se infla o un pistón comprime vapor en una turbina. Entender [[trabajo_termodinamico]] es el primer paso para comprender la primera ley de la termodinámica y para calcular el balance energético de cualquier proceso.

La distinción clave respecto al trabajo mecánico ordinario es que [[trabajo_termodinamico]] es una **magnitud de proceso**: no caracteriza el estado del sistema sino la transición entre dos estados.

## 🟢 Nivel esencial

Cuando un gas se expande, empuja la pared que lo confina y transfiere energía al entorno. Ese intercambio de energía mecánica es [[trabajo_termodinamico]]. Si el gas se contrae, es el entorno quien transfiere energía al gas; en ese caso [[trabajo_termodinamico]] es negativo según la convención física.

La regla de signos más intuitiva: **expansión implica trabajo positivo** (el gas «hace» algo), **compresión implica trabajo negativo** (algo se hace sobre el gas). Esta convención es la estándar en física; en química a veces se invierte, por lo que siempre hay que verificar cuál usa el enunciado.

La magnitud del [[trabajo_termodinamico]] depende de dos factores: cuánta [[presion]] ejerce el gas sobre la pared y cuánto se desplaza esa pared, es decir, en qué medida cambia el [[volumen]]. A mayor presión y mayor [[variacion_de_volumen]], mayor energía se transfiere mecánicamente. Esta lógica intuitiva se puede visualizar como el área bajo la curva en un diagrama de [[presion]] frente a [[volumen]], y se formalizará en el siguiente nivel con las expresiones matemáticas precisas.

## 🔵 Nivel formal

En un proceso isobárico (presión constante), el trabajo es simplemente el producto de la presión por la variación de [[volumen]]:

{{f:trabajo_isobarico}}

Para un proceso con presión variable, [[trabajo_termodinamico]] se obtiene integrando la presión sobre el [[volumen]] a lo largo de la trayectoria:

{{f:trabajo_integral}}

Esta integral es fundamental porque muestra que [[trabajo_termodinamico]] depende de la trayectoria: dos caminos distintos entre los mismos estados inicial y final pueden dar valores distintos de [[trabajo_termodinamico]].

En ambos casos, el signo del resultado está determinado por el signo de [[variacion_de_volumen]]: si el [[volumen]] final supera al inicial, [[variacion_de_volumen]] es positivo y [[trabajo_termodinamico]] es positivo (el gas realiza trabajo). Si el [[volumen]] decrece, el resultado es negativo (trabajo realizado sobre el gas). Para un proceso isotérmico de gas ideal, la integral da [[trabajo_termodinamico]] proporcional al logaritmo de la razón de volúmenes, y respeta la misma regla de signos.

> [!NOTE]
> Un litro-atmósfera equivale a 101.325 julios. En problemas que dan [[presion]] en atm y [[volumen]] en litros, multiplicar el resultado por ese factor de conversión para obtener julios.

> [!WARNING]
> La fórmula [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] solo es válida si [[presion]] es constante durante todo el proceso. Usarla con [[presion]] variable produce resultados incorrectos.

## 🔴 Nivel estructural

El hecho de que [[trabajo_termodinamico]] dependa de la trayectoria tiene consecuencias profundas: **no existe una función de estado «trabajo almacenado»**. A diferencia de la energía interna o la entalpía, no se puede hablar del «trabajo que tiene el sistema» en un instante dado.

En el diagrama p-V, el trabajo es el área encerrada entre la curva del proceso y el eje de volúmenes. Procesos distintos entre los mismos estados dibujan curvas distintas y encierran áreas distintas. Un ciclo cerrado en el diagrama p-V encierra un área neta no nula, que representa el trabajo neto realizado en ese ciclo.

La **expansión libre** es el caso extremo de proceso irreversible: el gas se expande contra el vacío (presión externa nula) y [[trabajo_termodinamico]] = 0 aunque [[variacion_de_volumen]] sea grande. Ninguna energía se transfiere al entorno porque no hay fuerza de oposición. Este resultado sorprende porque el [[volumen]] cambia pero el trabajo es cero.

> [!TIP]
> En el diagrama p-V, la dirección del recorrido importa: recorrer la curva de izquierda a derecha (expansión) da [[trabajo_termodinamico]] positivo; de derecha a izquierda (compresión) da [[trabajo_termodinamico]] negativo. Un ciclo recorrido en sentido horario realiza trabajo neto positivo (motor).

> [!WARNING]
> Los procesos irreversibles, como la expansión libre o la expansión rápida contra presión constante externa, no siguen una curva suave en el diagrama p-V. La integral solo es rigurosa para procesos cuasi-estáticos.

## Interpretación física profunda

La expresión [[trabajo_termodinamico]] = ∫p dV tiene una interpretación geométrica inmediata: el área bajo la curva p(V). Esta equivalencia geométrica es la razón por la que el diagrama p-V es tan poderoso: convierte el cálculo de integrales en lectura de áreas. En ciclos de motor (Carnot, Otto, Diesel), el área del ciclo en el diagrama p-V es el trabajo neto por ciclo.

## Orden de magnitud

En un proceso isobárico a presión atmosférica (10⁵ Pa) con una variación de [[volumen]] de 1 litro (10⁻³ m³), [[trabajo_termodinamico]] es 100 J. Un motor de automóvil con cilindrada de 1 litro y presión media de 10⁶ Pa produce del orden de 1000 J por ciclo. En experimentos de laboratorio los valores habituales van de 1 J a 1 kJ.

Un resultado en MJ para un sistema de laboratorio con unos pocos litros de gas es señal de un error de unidades: verificar que [[presion]] está en Pa y [[volumen]] en m³.

## Método de resolución personalizado

1. **Identificar el tipo de proceso**: ¿es isobárico ([[presion]] constante), isotérmico, adiabático o isocórico?
2. **Aplicar la fórmula correcta**: isobárico → [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]]; isotérmico → [[trabajo_termodinamico]] = nRT·ln(V_f/V_i); isocórico → [[trabajo_termodinamico]] = 0.
3. **Verificar el signo de [[variacion_de_volumen]]**: [[variacion_de_volumen]] = V_f − V_i. Expansión da positivo.
4. **Convertir unidades si es necesario**: 1 atm equivale a 101 325 Pa; 1 L equivale a 10⁻³ m³.
5. **Comprobar el resultado** con el orden de magnitud esperado para el proceso.

## Casos especiales y ejemplo extendido

**Isocórico**: [[volumen]] constante implica [[variacion_de_volumen]] = 0 y [[trabajo_termodinamico]] = 0. Todo el calor va a cambiar la energía interna.

**Expansión libre**: el gas se expande contra el vacío (p_ext = 0). [[trabajo_termodinamico]] = 0. La energía interna no cambia si el gas es ideal.

**Ciclo motor**: en un ciclo cerrado en el diagrama p-V, el trabajo neto es el área encerrada por el ciclo. Si el ciclo se recorre en sentido horario, el trabajo neto es positivo (motor). En sentido antihorario, negativo (bomba de calor o refrigerador).

## Preguntas reales del alumno

**¿Por qué [[trabajo_termodinamico]] depende de la trayectoria si estamos hablando de energía?**
Porque [[trabajo_termodinamico]] no es la energía almacenada en el sistema sino la energía en tránsito a través de la frontera durante el proceso. La energía almacenada (energía interna) sí es función de estado; [[trabajo_termodinamico]] y el calor Q son las formas en que esa energía cambia.

**¿Por qué en expansión libre [[trabajo_termodinamico]] es igual a 0 si el [[volumen]] cambia?**
Porque [[trabajo_termodinamico]] es igual a ∫p_ext dV. Si la presión externa es cero (vacío), no hay fuerza que oponga resistencia al gas y no se transfiere energía mecánica al entorno, independientemente de cuánto se expanda el gas.

**¿Cómo sé si el enunciado usa la convención física o la química?**
La convención física define [[trabajo_termodinamico]] > 0 cuando el sistema realiza trabajo (expansión). La convención química define W es igual a −p·ΔV (W < 0 para expansión). En España los libros de física usan frecuentemente la convención física; los de química, la convención química. El enunciado suele indicarlo con el signo de la primera ley: ΔU es igual a Q − W (física) o ΔU es igual a Q + W (química).

## Conexiones transversales y rutas de estudio

[[trabajo_termodinamico]] entra directamente en la **primera ley de la termodinámica** (leaf: [Primera ley](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/primera-ley-de-la-termodinamica)). La interpretación geométrica del trabajo como área en el diagrama p-V se desarrolla en el leaf de [Interpretación geométrica](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/trabajo-termodinamico/interpretacion-geometrica). Los procesos termodinámicos específicos (isobárico, isotérmico, adiabático) calculan [[trabajo_termodinamico]] con fórmulas adaptadas a cada caso.

## Síntesis final

[[trabajo_termodinamico]] es la energía intercambiada mecánicamente a través de la frontera móvil. En procesos isobáricos se calcula como [[presion]]·[[variacion_de_volumen]]; en general es el área bajo la curva p-V. Su dependencia de la trayectoria lo distingue de las magnitudes de estado y hace imprescindible especificar el tipo de proceso antes de calcular.