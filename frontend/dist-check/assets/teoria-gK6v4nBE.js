const e=`# Diferencia de potencial

## Contexto conceptual

La diferencia de potencial es una de las magnitudes centrales de la electrostática y, por extensión, de toda la electrotecnia. Su importancia radica en que **permite cuantificar el efecto energético del campo eléctrico sin necesidad de conocer la trayectoria** que sigue una carga entre dos puntos. Esta independencia de la trayectoria es consecuencia directa de que el campo eléctrico es conservativo.

Históricamente, el concepto de diferencia de potencial surgió como una generalización del trabajo mecánico. Cuando se comprobó que el trabajo realizado por la fuerza eléctrica al mover una carga entre dos puntos no dependía del camino recorrido, fue posible definir una función escalar —el potencial eléctrico— cuya diferencia entre dos puntos daba directamente ese trabajo por unidad de carga.

Este leaf se centra en la pregunta física central: **¿cuánto trabajo por unidad de carga se necesita para mover una carga entre dos puntos del campo eléctrico?** La respuesta convierte la diferencia de potencial en la herramienta fundamental para analizar circuitos, condensadores y movimiento de partículas cargadas.

## 🟢 Nivel esencial

Imagina que tienes que llevar una pelota cuesta arriba: necesitas hacer trabajo. Si la sueltas, el campo gravitatorio la lleva cuesta abajo sin que necesites empujarla. El campo eléctrico actúa de forma análoga con las cargas: entre dos puntos del campo hay siempre una "cuesta energética" que facilita el movimiento en un sentido y lo dificulta en el contrario.

La diferencia de potencial [[V_AB]] entre dos puntos A y B mide exactamente esa "cuesta" por unidad de carga: cuánto trabajo realiza el campo al mover una carga positiva de A a B. Si [[V_AB]] es positiva, el campo impulsa a la carga de A a B (A está "arriba" en el paisaje energético). Si [[V_AB]] es negativa, el campo frena ese movimiento.

Una consecuencia inmediata: si mueves una carga sobre una superficie donde el potencial es constante —una **superficie equipotencial**— el campo no realiza ni requiere trabajo. Las líneas del campo eléctrico son siempre perpendiculares a las superficies equipotenciales.

> [!NOTE]
> El voltaje que indica el cargador de tu móvil (5 V, 12 V, 20 V) es exactamente una diferencia de potencial. Indica cuánta energía por coulomb de carga puede entregar ese cargador al circuito del dispositivo.

## 🔵 Nivel formal

La diferencia de potencial entre A y B se define como el trabajo realizado por el campo eléctrico por unidad de carga positiva:

{{f:diferencia_potencial_trabajo}}

donde [[V_AB]] es la diferencia de potencial en voltios, [[W_AB]] es el trabajo realizado por la fuerza eléctrica en julios, y [[q]] es la carga eléctrica en coulombios.

El voltio es la unidad del SI para la diferencia de potencial, equivalente a un julio por culombio (J·C⁻¹). Esta definición muestra que [[V_AB]] no depende de [[q]]: es una propiedad del campo en esos dos puntos, no de la carga que se mueve.

Cuando el campo es **uniforme** —como entre las placas de un condensador plano— la diferencia de potencial se calcula directamente como:

{{f:diferencia_potencial_campo_uniforme}}

donde [[E_unif]] es el módulo del campo en N/C y [[d_AB]] es la proyección del desplazamiento A→B sobre la dirección del campo en metros.

**Dimensionalmente**, el voltio se descompone en J·C⁻¹, equivalente a N·m·C⁻¹ y a kg·m²·s⁻³·A⁻¹. La coherencia dimensional de la segunda fórmula se verifica: el producto N/C por metros resulta N·m/C, es decir J/C, que es precisamente el voltio ✓.

> [!TIP]
> La diferencia de potencial tiene signo: invertir el orden de los subíndices cambia el signo, por lo que [[V_AB]] y [[V_BA]] son opuestos. Convención habitual: el primero indica el punto de llegada respecto al de partida.

## 🔴 Nivel estructural

La diferencia de potencial es consecuencia directa del carácter **conservativo del campo eléctrico**. Un campo es conservativo si el trabajo que realiza no depende de la trayectoria sino solo de los puntos inicial y final. Esta propiedad permite definir una función escalar —el potencial eléctrico— en cada punto del espacio, de modo que:

La diferencia de potencial [[V_AB]] equivale a la diferencia de los potenciales absolutos en A y en B. El potencial absoluto requiere elegir un punto de referencia con potencial cero (usualmente el infinito o tierra), pero la diferencia de potencial es independiente de esa elección.

En la **forma diferencial**, el campo eléctrico es el opuesto del gradiente del potencial: el campo apunta en la dirección de máximo decrecimiento del potencial. Esta relación implica que el campo es más intenso donde las superficies equipotenciales están más juntas.

La relación entre [[E_unif]] y [[V_AB]] en campo uniforme refleja esta idea: el campo es mayor cuando la misma diferencia de potencial está comprimida en una distancia [[d_AB]] menor. Este principio explica por qué los condensadores pequeños con la misma tensión tienen campos más intensos que los grandes, con consecuencias directas para la ruptura dieléctrica.

> [!WARNING]
> La fórmula del campo uniforme (proporcionalidad entre [[V_AB]], [[E_unif]] y [[d_AB]]) solo es válida para campo uniforme. Cerca de una carga puntual, el campo no es uniforme y la diferencia de potencial requiere integración.

La **invarianza de la diferencia de potencial respecto a la trayectoria** tiene una consecuencia profunda: en cualquier trayectoria cerrada que vuelva al punto de partida, el trabajo total del campo eléctrico es cero. Esto es el teorema de la circulación del campo electrostático y es equivalente a afirmar que no existen fuentes de energía electrostática por recircular una carga.

## Interpretación física profunda

El potencial eléctrico en un punto del espacio es una forma de "almacén de energía" por unidad de carga. Una carga positiva colocada en un punto de alto potencial tiene una energía potencial alta; si se la suelta, el campo la acelera hacia puntos de menor potencial, convirtiendo energía potencial en cinética.

La diferencia de potencial [[V_AB]] mide exactamente cuánta energía potencial por unidad de carga puede convertirse en trabajo al pasar de A a B. En circuitos eléctricos, esta es la base de toda la electrotecnia: la batería mantiene una diferencia de potencial entre sus terminales, y esa diferencia impulsa a los electrones por el circuito.

> [!NOTE]
> Las superficies equipotenciales son análogas a las curvas de nivel en un mapa topográfico. El campo eléctrico apunta siempre "cuesta abajo", perpendicular a las equipotenciales, igual que la fuerza gravitatoria apunta en la dirección de máxima pendiente.

## Orden de magnitud

Las diferencias de potencial de interés práctico abarcan más de quince órdenes de magnitud: desde microvolts en señales neuronales (10⁻⁶ V) hasta megavolts en rayos y transformadores de alta tensión (10⁶ V). En electrónica de consumo, las tensiones típicas son 1.5 V (pila), 5 V (USB), 12 V (coche), 230 V (red doméstica).

El electrón-voltio (eV), unidad de energía muy usada en física de partículas y electrónica, es la energía ganada por un electrón al atravesar una diferencia de potencial de 1 V: equivale a 1.6×10⁻¹⁹ J. Un electrón acelerado por 100 V gana 100 eV, equivalentes a 1.6×10⁻¹⁷ J de energía cinética.

## Método de resolución personalizado

Para calcular [[V_AB]] o [[W_AB]] de forma sistemática:

1. **Identificar los puntos A y B**: precisar el punto de partida y el de llegada. El orden de los subíndices determina el signo.
2. **Determinar el tipo de campo**: ¿es uniforme (condensador plano) o no uniforme (carga puntual, distribución continua)?
3. **Elegir la fórmula apropiada**: campo uniforme → multiplicar [[E_unif]] por [[d_AB]]; caso general → calcular trabajo o usar potenciales absolutos.
4. **Calcular [[d_AB]]**: si el campo es uniforme, proyectar el desplazamiento sobre la dirección del campo.
5. **Obtener [[V_AB]]** y luego el trabajo [[W_AB]] multiplicando [[q]] por [[V_AB]] si se necesita.
6. **Verificar el signo**: ¿el campo facilita o dificulta el movimiento? El signo de [[V_AB]] debe ser coherente con la geometría.

## Casos especiales y ejemplo extendido

**Movimiento perpendicular al campo**: si la carga se mueve perpendicularmente al campo eléctrico, la proyección [[d_AB]] es cero y [[V_AB]] es nulo. La carga se mueve sobre una superficie equipotencial y el campo no hace trabajo. Este principio explica por qué las cargas en un conductor se distribuyen en la superficie: una redistribución que generara diferencias de potencial en el interior provocaría corrientes hasta anularse.

**Carga negativa en un campo**: si [[V_AB]] es positivo y [[q]] es negativo, [[W_AB]] es negativo: el campo frena a la carga negativa cuando se mueve de A a B (en el sentido del campo). La carga negativa sería acelerada si se moviera de B a A, en sentido contrario al campo.

**Condensador plano**: un condensador con placas separadas 2 mm y campo de 10⁴ N/C tiene una diferencia de potencial de 20 V (producto de 10⁴ por 2×10⁻³). Si se duplica la separación manteniendo el campo, la diferencia de potencial se duplica a 40 V.

## Preguntas reales del alumno

**¿Por qué el trabajo del campo eléctrico no depende de la trayectoria?**

Porque el campo eléctrico en electrostática deriva de un potencial escalar: es el gradiente negativo del potencial. Matemáticamente, la integral de línea de un gradiente entre dos puntos solo depende de los valores de la función en esos puntos, no del camino. Esta propiedad es exactamente la definición de campo conservativo.

**¿La diferencia de potencial es lo mismo que el voltaje?**

Sí. "Voltaje" y "diferencia de potencial" son términos equivalentes en la práctica. El término "voltaje" se usa más en electrotecnia y circuitos; "diferencia de potencial" en física fundamental. Ambos se miden en voltios (V).

**¿Por qué el campo eléctrico apunta de mayor a menor potencial?**

Porque el campo es el gradiente negativo del potencial. El gradiente apunta en la dirección de máximo crecimiento de la función; el campo, siendo su opuesto, apunta en la dirección de máximo decrecimiento. Una carga positiva libre se mueve en la dirección del campo y, por tanto, hacia potenciales menores, ganando energía cinética y perdiendo energía potencial.

**¿Puede haber diferencia de potencial sin carga entre los dos puntos?**

Sí. La diferencia de potencial es una propiedad del campo en esos dos puntos, no de las cargas que puedan estar presentes entre ellos. El campo —y por tanto el potencial— existe aunque no haya cargas de prueba.

## Conexiones transversales y rutas de estudio

La diferencia de potencial conecta hacia atrás con la ley de Coulomb (de donde se deriva el potencial de una carga puntual) y con la ley de Gauss (que determina el campo del que se calcula el potencial). Hacia adelante, es el fundamento del análisis de condensadores (leaf: condensadores), de la energía potencial eléctrica, y de toda la electrotecnia mediante la ley de Ohm y las leyes de Kirchhoff.

En física moderna, la diferencia de potencial generalizada aparece en electrodinámica cuántica como el potencial escalar del cuadrivector electromagnético, vinculando esta magnitud clásica con la estructura fundamental de la interacción electromagnética.

## Síntesis final

La diferencia de potencial [[V_AB]] cuantifica el trabajo del campo eléctrico por unidad de carga al desplazar una carga de A a B, siendo independiente de la trayectoria por el carácter conservativo del campo. En campo uniforme, [[V_AB]] es proporcional a [[E_unif]] y a [[d_AB]], lo que convierte la geometría del problema en el factor clave. El trabajo sobre cualquier carga concreta se obtiene multiplicando [[V_AB]] por [[q]], conectando la propiedad del campo con el efecto dinámico medible.
`;export{e as default};
