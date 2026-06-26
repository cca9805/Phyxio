# Superposicion

## Contexto conceptual

La **superposicion** es la regla que permite entender que ocurre cuando varias ondas llegan al mismo punto de un medio. En vez de elegir una onda y descartar la otra, el medio muestra una perturbacion unica que resulta de sumar los aportes instantaneos.

Este principio es la base de interferencia, ondas estacionarias, difraccion, batidos sonoros y muchas tecnicas de medida. Su potencia esta en una idea sencilla: en un medio lineal, cada onda atraviesa a las otras sin destruir su identidad, pero el detector local solo observa la suma.

## 🟢 Nivel esencial

Cuando dos pulsos se cruzan en una cuerda, la cuerda no puede estar en dos posiciones distintas a la vez. En cada punto adopta una unica posicion: la suma de lo que pediria cada pulso por separado. Si ambos empujan hacia arriba, el desplazamiento aumenta; si uno empuja hacia arriba y otro hacia abajo, pueden cancelarse.

La magnitud central es [[y_resultante]]. Se obtiene a partir de [[y_1]] y [[y_2]], que son perturbaciones con signo. Ese detalle es decisivo: una perturbacion hacia abajo no se suma como cantidad positiva, sino como aporte contrario. Por eso dos ondas pueden atravesarse y, durante un instante, dejar el medio casi en equilibrio.

La lectura esencial es local: se mira un punto concreto del medio y un instante concreto. La misma pareja de ondas puede reforzarse en una zona y compensarse en otra, porque los signos de las perturbaciones cambian con la posicion y el tiempo.

> [!TIP]
> Antes de hablar de intensidad o energia, pregunta siempre que se suma: desplazamientos, presiones, campos o intensidades. En superposicion lineal se suman perturbaciones.

## 🔵 Nivel formal

La forma mas directa del principio es la suma punto a punto de perturbaciones:

{{f:superposicion_lineal}}

Esta relacion debe leerse localmente. [[y_1]] y [[y_2]] tienen que evaluarse en el mismo punto y en el mismo instante. Si una onda se mide en una cresta y la otra en otro lugar, la suma no representa un estado fisico real del medio. El signo de cada perturbacion contiene informacion de fase local.

Cuando las dos ondas sinusoidales llegan en fase y perturban el medio en la misma direccion, sus amplitudes maximas se suman de forma directa:

{{f:amplitud_en_fase}}

Esta relacion no sustituye a la suma general: es un caso especial. [[A_1]] y [[A_2]] son amplitudes no negativas, mientras que [[y_1]] y [[y_2]] son valores instantaneos con signo. Confundir ambos niveles lleva a predicciones incorrectas cuando las ondas llegan desfasadas.

Una vez obtenida la amplitud combinada, puede hacerse una lectura energetica relativa:

{{f:intensidad_relativa}}

La intensidad relativa [[I_relativa]] no se suma antes de la superposicion. Primero se obtiene [[A_resultante]] o [[y_resultante]] segun el problema, y despues se interpreta la escala energetica. Por eso duplicar la amplitud no duplica la lectura energetica: la aumenta de forma cuadratica.

## 🔴 Nivel estructural

La superposicion descansa en la **linealidad** de la ecuacion de onda. Si una perturbacion posible cumple el modelo y otra tambien, la suma de ambas tambien es una solucion. Esta propiedad no es una regla visual; es una consecuencia matematica de que el medio responde proporcionalmente a la perturbacion.

El punto delicado es distinguir la onda como entidad global y la perturbacion como valor local. Dos ondas pueden atravesarse sin rebotar porque cada una mantiene su propagacion. Sin embargo, en el punto donde coinciden, el instrumento no separa causas: mide solo el valor total [[y_resultante]]. Esa diferencia explica por que la cancelacion local no significa desaparicion global de energia.

El modelo falla cuando la respuesta del medio deja de ser proporcional. En una cuerda muy tensa puede funcionar bien para pequenas amplitudes, pero no para deformaciones enormes. En fluidos, ondas acusticas intensas pueden formar choques; en optica, intensidades laser extremas cambian el indice del medio. En todos esos casos, las ondas dejan de atravesarse como si fueran independientes.

El grafico natural muestra tres curvas: [[y_1]], [[y_2]] y [[y_resultante]]. Donde las dos curvas tienen el mismo signo, la resultante crece; donde tienen signo opuesto, se reduce. Si se usa un panel de amplitudes en fase, [[A_resultante]] compara el refuerzo maximo y [[I_relativa]] muestra por que el efecto observable puede crecer mucho mas que la amplitud.

## Interpretacion fisica profunda

La superposicion no dice que dos ondas se ignoren. Dice algo mas preciso: en un medio lineal, cada aporte conserva su identidad dinamica mientras el estado local del medio es la suma. Esta idea permite reconciliar dos hechos que parecen contradictorios: dos pulsos se atraviesan y, al mismo tiempo, durante el cruce modifican completamente la forma visible de la cuerda.

La cancelacion local tampoco destruye energia. En interferencia destructiva, la energia no desaparece; se redistribuye espacialmente o queda almacenada de otra forma durante parte del ciclo. Por eso la superposicion debe aplicarse a perturbaciones antes de traducir el resultado a intensidad, brillo o nivel sonoro.

## Orden de magnitud

En una cuerda de laboratorio, amplitudes de milimetros se suman de forma muy fiel: dos pulsos de 2 mm en fase producen una cresta cercana a 4 mm. En sonido, dos altavoces coherentes pueden duplicar la presion acustica local, lo que eleva claramente la intensidad relativa.

Un resultado absurdo aparece si dos perturbaciones pequenas predicen una deformacion comparable al tamano del sistema. Tambien es sospechoso obtener [[I_relativa]] negativa, porque procede de una amplitud al cuadrado.

## Metodo de resolucion personalizado

1. Identifica que magnitud fisica se superpone: desplazamiento, presion, campo electrico o variable equivalente.
2. Escribe los valores instantaneos con signo, no solo sus modulos.
3. Calcula [[y_resultante]] mediante suma algebraica punto a punto.
4. Si el problema habla de ondas en fase, usa [[A_1]], [[A_2]] y [[A_resultante]].
5. Interpreta [[I_relativa]] solo al final, despues de la suma de perturbaciones.

## Casos especiales y ejemplo extendido

> [!NOTE]
> Dos ondas iguales en fase producen refuerzo maximo. La curva resultante tiene la misma forma general, pero con amplitud mayor.

> [!WARNING]
> Dos ondas iguales en oposicion de fase pueden producir cancelacion local. Eso no autoriza a decir que la energia total desaparece.

Ejemplo extendido: dos pulsos en una cuerda llegan al mismo punto. El primero eleva la cuerda 3 mm y el segundo la desplaza 2 mm hacia abajo. La suma local deja una perturbacion de 1 mm hacia arriba. Si ambos hubieran estado en fase y con amplitudes de 3 mm y 2 mm, la amplitud maxima combinada habria sido 5 mm.

## Preguntas reales del alumno

**Por que las ondas no chocan como objetos?**  
Porque en el regimen lineal no se excluyen mutuamente. El medio puede responder a la suma de perturbaciones y, despues del cruce, cada pulso sigue propagandose.

**Puedo sumar siempre amplitudes?**  
No. Solo en casos de fase compatible. En general se suman perturbaciones instantaneas, y la amplitud resultante se deduce despues.

**Si la suma da cero, no hay onda?**  
Hay cancelacion local en ese punto e instante. Las ondas individuales siguen existiendo como contribuciones y pueden reaparecer separadas despues del cruce.

**Por que la intensidad crece tanto cuando aumenta la amplitud?**  
Porque la lectura energetica media suele depender del cuadrado de la amplitud resultante. Por eso un pequeno refuerzo de amplitud puede notarse mucho.

## Conexiones transversales y rutas de estudio

La superposicion prepara directamente [interferencia constructiva](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva) e [interferencia destructiva](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-destructiva). En ambos casos, la diferencia no esta en otra regla, sino en el signo y la fase de los aportes.

Tambien conecta con [difraccion](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/difraccion), donde se suman muchas contribuciones secundarias, y con ondas estacionarias, que nacen de superponer ondas que viajan en sentidos opuestos.

## Sintesis final

La superposicion afirma que, en medios lineales, la perturbacion observable es la suma algebraica local de las perturbaciones individuales. Entenderla exige sumar primero con signo, interpretar despues amplitud e intensidad, y recordar siempre el limite de validez lineal.
