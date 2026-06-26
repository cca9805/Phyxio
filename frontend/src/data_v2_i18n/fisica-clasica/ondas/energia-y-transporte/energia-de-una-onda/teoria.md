## Contexto conceptual

Las ondas transportan energía a través del espacio sin transportar materia de forma neta. Esta capacidad de transferir energía desde una fuente hasta un receptor distante es una de las propiedades más importantes de los fenómenos ondulatorios. Desde las olas del mar hasta las señales electromagnéticas que llevan información a nuestros dispositivos, el transporte de energía mediante ondas es fundamental en la naturaleza y la tecnología.

El análisis energético de las ondas nos permite comprender cuánta energía se propaga, cómo se distribuye espacialmente y qué factores controlan su intensidad. Este conocimiento es esencial para diseñar sistemas de comunicación, aprovechar energía renovable marina, comprender la acústica arquitectónica y predecir el comportamiento de terremotos.

## 🟢 Nivel esencial

Una onda es una perturbación que se propaga. Cuando lanzamos una piedra en un estanque, las ondas circulares transportan la energía del impacto hacia los bordes. El agua no se desplaza netamente hacia afuera, sino que oscila localmente mientras la energía viaja a través del medio.

La energía de una onda está directamente relacionada con su **[[amplitud]]**. Una ola alta en el mar lleva mucha más energía que una pequeña ondulación. De hecho, la energía crece con el cuadrado de la [[amplitud]]: duplicar la altura de la ola cuadruplica su energía. Esto explica por qué las tormentas con olas gigantes son tan destructivas.

La **frecuencia** también juega un papel crucial. Las ondas de mayor frecuencia (que oscilan más rápido) transportan más energía que las de baja frecuencia con la misma [[amplitud]]. Este principio explica por qué los ultrasonidos de alta frecuencia pueden utilizarse en medicina para procedimientos terapéuticos, mientras que sonidos de baja frecuencia y gran [[amplitud]] pueden dañar estructuras por resonancia.

## 🔵 Nivel formal

La descripción matemática del transporte energético ondulatorio comienza con la densidad de energía. Para una onda transversal en una cuerda, [[u_energia]] se interpreta como densidad lineal instantánea de energía, es decir, energía por unidad de longitud de cuerda:

{{f:densidad_energia_cuerda}}

Esta expresión muestra que la densidad de energía varía armónicamente con la posición y el tiempo, siendo máxima donde el seno cuadrado alcanza su valor unitario. El factor [[mu]] representa la inercia lineal del medio, [[omega]] la rapidez de oscilación y [[amplitud]] la magnitud de la perturbación.

Para obtener la energía total contenida en un ciclo completo de la onda, integramos la densidad sobre una longitud de onda. Promediando las contribuciones temporales, llegamos a la expresión fundamental:

{{f:energia_total_ciclo}}

Esta fórmula revela que la energía por ciclo depende cuadráticamente tanto de la [[amplitud]] como de la frecuencia angular. La dependencia cuadrática de [[omega]] es particularmente significativa: duplicar la frecuencia cuadruplica la energía, mientras que duplicar la [[amplitud]] también la cuadruplica.

La tasa de transferencia de energía, es decir, la **potencia** transportada [[potencia_de_la_onda]] por la onda, se obtiene multiplicando la energía por unidad de longitud por la velocidad de propagación:

{{f:potencia_onda_cuerda}}

Esta expresión es válida para ondas progresivas unidireccionales. Para ondas en medios tridimensionales, la generalización introduce la sección transversal [[seccion_transversal]] por la que fluye la energía:

{{f:potencia_onda_general}}

Esta formulación unificada aplica a ondas mecánicas, electromagnéticas y acústicas, destacando la universalidad del transporte energético ondulatorio. La potencia [[potencia_de_la_onda]] representa la energía que atraviesa una sección del medio por unidad de tiempo, siendo la magnitud clave para diseñar sistemas de captación de energía undimotriz.

## 🔴 Nivel estructural

La estructura profunda del transporte energético ondulatorio revela un intercambio continuo entre formas cinética y potencial de la energía. En una cuerda vibrante, cuando un elemento pasa por la posición de equilibrio, su velocidad transversal es máxima (energía cinética máxima) mientras que la deformación es nula (energía potencial mínima). Medio período después, el elemento alcanza su máximo desplazamiento con velocidad nula: toda la energía es potencial, almacenada en la deformación elástica.

Este intercambio perpetuo, que promedia a igual contribución de ambas formas sobre un ciclo, es lo que permite la propagación sin acumulación neta de energía en ningún punto. La energía fluye a través del medio, no se queda en él. Esta distinción es crucial: el medio actúa como conductor, no como capacitor energético permanente.

Los **límites de validez** del modelo lineal surgen cuando la [[amplitud]] deja de ser pequeña comparada con la longitud de onda [[lambda]]. La condición A << [[lambda]] asegura que las pendientes de la cuerda permanezcan pequeñas, validando la aproximación de tensión constante. Cuando A se aproxima a [[lambda]], aparecen efectos no lineales: la velocidad de propagación depende de la [[amplitud]] local, la forma de onda se distorsiona generando armónicos superiores, y la relación de dispersión se modifica.

En medios disipativos reales, la potencia [[potencia_de_la_onda]] calculada representa un valor ideal. La atenuación por fricción interna reduce exponencialmente la potencia con la distancia recorrida, siguiendo un factor exp(-αx) donde α depende de las propiedades viscoelásticas del medio. Para ondas electromagnéticas en conductores, esta atenuación es extremadamente rápida (efecto pelicular), mientras que en fibras ópticas de sílice ultra-pura puede ser de apenas 0.2 dB/km.

## Interpretación física profunda

La **proporcionalidad cuadrática** de la energía con la [[amplitud]] tiene raíces en la naturaleza armónica del oscilador subyacente. Tanto la energía cinética (proporcional a velocidad al cuadrado) como la potencial (proporcional a desplazamiento al cuadrado para fuerzas restauradoras lineales) contribuyen con términos en A². Esta doble contribución explica el factor 1/2 promedio cuando se integra sobre el ciclo.

La dependencia cuadrática con [[omega]] refleja que la velocidad transversal de los elementos del medio escala linealmente con la frecuencia para una [[amplitud]] dada (v_max = [[omega]]·[[amplitud]]). Como la energía cinética depende del cuadrado de la velocidad, aparece el [[omega]]². Físicamente, esto significa que ondas de alta frecuencia son intrínsecamente más "intensas" energéticamente que ondas de baja frecuencia con la misma [[amplitud]].

El concepto de **densidad de energía** [[u_energia]] introduce una localización espacial de la energía que no es posible en mecánica de partículas puntuales. En una cuerda se lee por unidad de longitud; en un medio tridimensional se lee por unidad de volumen. Esa distinción evita mezclar modelos 1D con modelos volumétricos.

## Orden de magnitud

Las escalas de energía ondulatoria abarcan rangos enormes. Una onda sonora típica transporta densidad de aproximadamente 10⁻⁶ J/m³, mientras que un láser de pulso corto con potencia pico de gigawatts alcanza densidades superiores a 10¹² J/m³.

En **energía renovable marina**, las olas del Atlántico Norte transportan típicamente 50-70 kW por metro de frente de onda. Un captador de 100 m teóricamente accedería a varios megawatts, aunque eficiencias reales raramente superan el 30%.

Para detectar errores de cálculo, verificar que la energía total [[energia_de_la_onda]] nunca exceda (1/2)·[[mu]]·[[lambda]]³·[[omega]]², que sería la energía cinética de traslación de toda la masa de un ciclo moviéndose a velocidad [[omega]]·[[amplitud]]. Valores superiores indican violación del régimen lineal o error en los parámetros.

## Método de resolución personalizado

El análisis energético de ondas requiere una secuencia sistemática:

1. **Identificar el tipo de onda**: mecánica transversal, longitudinal, electromagnética, o acústica. Esto determina qué expresiones de densidad de energía aplican.

2. **Caracterizar el medio**: densidad lineal [[mu]], sección transversal [[seccion_transversal]], módulos elásticos relevantes. Para ondas electromagnéticas, la permitividad y permeabilidad del medio.

3. **Determinar parámetros cinemáticos**: [[amplitud]], frecuencia [[omega]], longitud de onda [[lambda]], velocidad de propagación v.

4. **Calcular densidad de energía**: aplicar la fórmula específica para el tipo de onda, promediando temporalmente si se busca valor medio.

5. **Integrar para energía total**: multiplicar densidad media por volumen (o longitud para ondas unidimensionales) del sistema.

6. **Evaluar potencia transportada**: relacionar energía con tiempo característico de tránsito, o usar expresión directa de flujo energético.

> [!TIP]
> Siempre verificar primero la condición de validez del régimen lineal: A << λ. Si no se cumple, todo el análisis anterior requiere revisión con métodos no lineales.

## Casos especiales y ejemplo extendido

**Ondas estacionarias** representan un caso especial donde la potencia neta transportada es cero. Dos ondas progresivas de igual [[amplitud]] y frecuencia viajando en direcciones opuestas interfieren creando nodos y vientres fijos en el espacio. La energía oscila localmente entre formas cinética y potencial, pero no hay flujo neto. Esta condición es esencial en instrumentos musicales donde las frecuencias resonantes establecen patrones estacionarios.

**Pulsos aislados** no son ondas armónicas puras y requieren tratamiento diferente. La energía total se calcula integrando la densidad instantánea sobre todo el dominio espacial donde el pulso tiene valor significativo. La potencia promedio requiere especificar un intervalo temporal de observación.

**Ejemplo extendido**: Una cuerda de guitarra con densidad lineal 0.5 g/m y tensión 70 N, vibrando en su fundamental de 440 Hz con [[amplitud]] 2 mm. La velocidad resulta de la raíz cuadrada de tensión sobre densidad, dando aproximadamente 374 m/s. La longitud de onda es el cociente entre velocidad y frecuencia, aproximadamente 0.85 m. Aplicando la fórmula de energía total, la energía por ciclo resulta aproximadamente 2.6 mJ. La potencia promedio, pulsada 10 veces por segundo, es aproximadamente 26 mW, suficiente para excitar la caja de resonancia.

## Preguntas reales del alumno

**¿Por qué la energía depende del cuadrado de la [[amplitud]] y no linealmente?**

Tanto la energía cinética como la potencial de un oscilador armónico dependen del cuadrado de las variables de estado (velocidad y desplazamiento respectivamente). Como la velocidad máxima es proporcional a la [[amplitud]] multiplicada por la frecuencia, ambas contribuciones energéticas escalan cuadráticamente con [[amplitud]].

**¿Dónde está la energía en una onda: en los puntos que se mueven más o en los que se deforman más?**

En los puntos de máximo desplazamiento (vientres) la energía es puramente potencial elástica. En los puntos de equilibrio cruzando con velocidad máxima, la energía es puramente cinética. No hay un "lugar" fijo donde resida la energía; fluye continuamente entre estas formas y a través del espacio.

**¿Por qué las ondas electromagnéticas transportan energía sin necesitar un medio material?**

Los campos eléctrico y magnético oscilantes contienen densidad de energía (proporcional a E² y B² respectivamente) que se autorregeneran mutuamente según las ecuaciones de Maxwell. El cambio temporal del campo eléctrico genera rotacional del magnético y viceversa, permitiendo autopropagación en el vacío.

**¿Cómo puede una onda transportar energía si el movimiento medio del medio es cero?**

El transporte no requiere desplazamiento neto de masa, sino transferencia de estado de movimiento entre elementos vecinos. Cada elemento transfiere su momentum al siguiente durante medio período, recibiéndolo de regreso en el siguiente medio período, resultando en desplazamiento medio nulo pero flujo energético continuo.

## Conexiones transversales y rutas de estudio

El análisis de energía ondulatoria conecta naturalmente con [intensidad ondulatoria](leaf:fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria), donde la potencia se normaliza por unidad de área para obtener una magnitud característica del campo lejano. En [flujo de energía](leaf:fisica-clasica/ondas/energia-y-transporte/flujo-de-energia) se estudia el vector de Poynting y sus generalizaciones mecánicas.

La base mecánica del transporte energético remite a [movimiento armónico simple](leaf:fisica-clasica/mecanica/cinematica/movimiento-armonico-simple) donde se establecen las relaciones energéticas fundamentales del oscilador. Para ondas electromagnéticas, el estudio conecta con [ondas electromagnéticas](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/ecuacion-de-onda) donde la densidad de energía se expresa en términos de campos E y B.

En ingeniería, estos conceptos fundamentan el diseño de [acústica arquitectónica](leaf:fisica-clasica/ondas/aplicaciones/aislamiento-acustico) y sistemas de [energía undimotriz](leaf:fisica-clasica/ondas/aplicaciones/energia-undimotriz), donde maximizar la captura de potencia ondulatoria es el objetivo central.

## Síntesis final

La energía de una onda es una manifestación del intercambio perpetuo entre formas cinética y potencial de la energía mecánica (o electromagnética), localizada en el medio de propagación y transportada a velocidad finita a través del espacio. Su cuantificación requiere distinguir cuidadosamente entre densidad local instantánea, energía total de un ciclo, y potencia o tasa de transferencia. La dependencia cuadrática con [[amplitud]] y frecuencia hace que las ondas de alta intensidad sean fenómenos físicamente dominantes, mientras que los límites del régimen lineal marcan las fronteras de validez del análisis estándar. Comprender estos aspectos energéticos es esencial tanto para la física fundamental como para las aplicaciones tecnológicas del transporte ondulatorio.
