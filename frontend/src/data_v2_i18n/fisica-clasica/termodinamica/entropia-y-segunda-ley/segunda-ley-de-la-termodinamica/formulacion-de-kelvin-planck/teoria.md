# Formulación de Kelvin-Planck

## Contexto conceptual

La formulacion de Kelvin-Planck es una forma de la segunda ley centrada en maquinas térmicas. Afirma que ninguna maquina que opere en [[ciclo]] puede tener como único efecto extraer calor de un solo foco y convertirlo completamente en [[W]]. La frase parece tecnica, pero responde a una pregunta directa: por que no existe un motor perfecto que tome [[Q_H]] de una fuente caliente y lo devuelva todo como trabajo útil.

El punto clave no es la conservación de la energía. La primera ley permite escribir un balance, pero no decide que conversiones son posibles. Kelvin-Planck agrega la restriccion direccional: una parte del calor absorbido debe rechazarse como [[Q_C]] hacia un foco frio, o el dispositivo no puede cerrar un [[ciclo]] físico.

## 🟢 Nivel esencial

Una maquina térmica toma calor de un foco caliente, produce trabajo y rechaza una parte del calor a un foco frio. Si alguien propone una maquina ciclica que toma [[Q_H]] y entrega exactamente la misma cantidad como [[W]], esta proponiendo una maquina prohibida por la segunda ley.

La razon intuitiva es que el calor es energía desordenada y el trabajo es energía organizada. Convertir toda la energía desordenada en energía organizada, una y otra vez, sin dejar ningún otro efecto en el entorno, exigiria borrar irreversibilidad sin compensacion. La segunda ley dice que eso no ocurre en sistemas macroscopicos.

La magnitud estrella del leaf es [[eta]], la eficiencia térmica. Si [[eta]] fuese igual a uno, todo el calor absorbido se habria convertido en trabajo. Kelvin-Planck obliga a que una maquina ciclica real quede por debajo de esa conversion total.

> [!NOTE]
> El enunciado no dice que el calor no pueda producir trabajo. Dice que una maquina ciclica no puede convertir todo el calor de un único foco en trabajo como único resultado.

## 🔵 Nivel formal

El balance energético de una maquina térmica ciclica se expresa mediante:

{{f:balance_motor_termico}}

La eficiencia térmica se define como:

{{f:eficiencia_motor}}

La prohibicion central de Kelvin-Planck queda resumida por:

{{f:limite_kelvin_planck}}

Cuando la maquina opera entre dos focos reversibles ideales, el techo de rendimiento viene dado por:

{{f:eficiencia_carnot_motor}}

La lectura entrópica general del mismo limite se resume con:

{{f:entropia_ciclo_motor}}

Estas formulas deben leerse juntas. El balance de energía permite calcular [[W]], pero la segunda ley limita cuanto puede crecer [[eta]]. Si [[Q_C]] se fuerza a cero mientras el motor sigue siendo ciclico, el rendimiento perfecto entra en la zona prohibida.

Formalmente, el enunciado distingue una igualdad contable de una desigualdad física. La igualdad del balance solo reparte energía entre [[W]] y [[Q_C]]. La desigualdad de Kelvin-Planck dice que el reparto con [[Q_C]] nulo no es admisible para una maquina repetible. Por eso un resultado numerico no se acepta solo porque las unidades cuadren: también debe respetar el sentido termodinámico del [[ciclo]].

La comparacion con [[eta_carnot]] anade una segunda capa formal. Si se conocen [[T_H]] y [[T_C]], no basta con verificar que [[eta]] sea menor que uno. La maquina real debe quedar por debajo del limite reversible de esos focos. Esto convierte el enunciado en una herramienta de diagnostico: detecta motores perfectos, temperaturas mal usadas y balances donde se ha omitido el calor rechazado.

## 🔴 Nivel estructural

Kelvin-Planck separa tres ideas que suelen mezclarse. La primera es la conservación de energía: en un [[ciclo]], la energía interna de la sustancia de trabajo vuelve al valor inicial. La segunda es la degradacion de energía: el calor no se transforma integramente en trabajo útil. La tercera es la necesidad de un entorno: el motor necesita un foco frio [[T_C]] para rechazar calor y completar el proceso.

La formulacion también explica por que la temperatura importa. A mayor [[T_H]] y menor [[T_C]], el limite reversible [[eta_carnot]] aumenta. Pero incluso en el caso ideal de Carnot, mientras [[T_C]] sea positiva, la eficiencia máxima sigue siendo menor que uno. La única forma matemática de acercarse a uno seria llevar el foco frio hacia cero absoluto o hacer infinito el foco caliente, condiciones físicas no disponibles para una maquina ordinaria.

Desde el punto de vista de entropía, el motor recibe calor desde el foco caliente y rechaza calor al foco frio. En un [[ciclo]] reversible ideal, los intercambios estan ajustados para que la entropía total no disminuya. En un motor real, friccion, gradientes finitos y disipacion hacen que [[DeltaS_universo]] sea positiva. Una maquina perfecta con un único foco intentaria producir trabajo sin rechazo y sin aumento de entropía, por eso queda excluida.

## Interpretacion física profunda

La frase "único efecto" es esencial. Un proceso no ciclico podria convertir parte de una energía interna inicial en trabajo y acabar en otro estado. Kelvin-Planck habla de maquinas que vuelven al estado inicial y pueden repetirse indefinidamente. Si después de cada vuelta todo queda igual salvo que se produjo trabajo, habria una fuente inagotable de trabajo tomada de una sola reserva térmica.

La restriccion no depende de la tecnologia disponible. Mejorar turbinas, lubricantes o intercambiadores puede acercar [[eta]] a [[eta_carnot]], pero no atravesar el limite. La ingenieria reduce perdidas; no elimina la necesidad física de [[Q_C]] cuando el dispositivo es ciclico.

## Orden de magnitud

Una central térmica que recibe vapor a unos 800 K y rechaza calor al ambiente a unos 300 K tiene un limite reversible de eficiencia moderado. El rendimiento real queda bastante por debajo por irreversibilidades de combustión, transferencia de calor, turbinas y condensadores. Si un calculo escolar da [[eta]] mayor que [[eta_carnot]], el resultado no indica una maquina excelente: indica una hipótesis o unidad mal usada.

Para detectar absurdos, revisa tres escalas. Primero, [[eta]] debe estar entre cero y uno. Segundo, [[T_H]] y [[T_C]] deben estar en kelvin. Tercero, [[Q_C]] no debe desaparecer si se afirma que el sistema opera como motor ciclico entre focos finitos.

## Metodo de resolucion personalizado

1. Identifica si el dispositivo es realmente un [[ciclo]]. Si no vuelve al estado inicial, no apliques Kelvin-Planck de forma automatica.
2. Separa entradas y salidas: [[Q_H]] entra desde el foco caliente, [[W]] sale como trabajo útil y [[Q_C]] se rechaza al foco frio.
3. Usa el balance energético del motor presentado en el nivel formal.
4. Calcula o estima [[eta]] a partir del trabajo útil y el calor absorbido.
5. Compara con el limite conceptual de Kelvin-Planck y, si hay dos focos, con el techo de Carnot.
6. Si aparece eficiencia perfecta, rechazo nulo o entropía total negativa, interpreta el resultado como violacion de segunda ley.

## Casos especiales y ejemplo extendido

**Motor ideal reversible entre dos focos.** No viola Kelvin-Planck porque rechaza [[Q_C]] al foco frio. Puede alcanzar [[eta_carnot]] solo en el limite reversible, sin gradientes finitos ni friccion.

**Motor con un único foco.** Si se pretende extraer [[Q_H]] de una sola reserva y entregar [[W]] como único efecto, el [[ciclo]] queda prohibido. No basta con invocar conservación de energía.

**Ejemplo extendido.** Un motor recibe [[Q_H]] igual a 1000 J por [[ciclo]] y entrega 350 J de trabajo útil. El balance exige un rechazo de 650 J. La eficiencia es 0.35, físicamente posible si queda por debajo del limite de Carnot asociado a sus focos.

## Preguntas reales del alumno

**P: Si la energía se conserva, por que no convertir todo el calor en trabajo?**

R: Porque conservar energía no basta. La segunda ley restringe la calidad de la energía y exige que el [[ciclo]] no reduzca la entropía total.

**P: El rechazo de calor es solo una perdida tecnica?**

R: No. Parte del rechazo puede reducirse con mejor diseno, pero una maquina ciclica entre focos finitos siempre necesita algun [[Q_C]].

**P: Kelvin-Planck y Clausius dicen cosas distintas?**

R: Son formulaciones equivalentes. Si pudieras violar una, podrias construir un dispositivo que violara la otra.

## Conexiones transversales y rutas de estudio

Este leaf conecta con la formulacion de Clausius, el [[ciclo]] de Carnot, maquinas térmicas reales, entropía y procesos reversibles. La ruta natural es: comprender primero el balance de calor y trabajo; después comparar Kelvin-Planck con Clausius; luego estudiar Carnot como limite reversible; finalmente analizar motores reales con irreversibilidades.

## Síntesis final

Kelvin-Planck dice que un motor ciclico no puede convertir todo el calor de un único foco en trabajo útil. La energía se conserva, pero la segunda ley impone un rechazo térmico o una produccion de entropía compatible con el entorno. Por eso [[eta]] tiene un techo físico y el motor perfecto de segunda especie no existe.
