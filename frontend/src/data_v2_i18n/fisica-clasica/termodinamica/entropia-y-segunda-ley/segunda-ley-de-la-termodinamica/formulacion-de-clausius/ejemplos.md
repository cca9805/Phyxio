# Ejemplo tipo examen

## Enunciado

Un refrigerador domestico debe mantener su compartimento interior a una temperatura de 277 K (4 °C) cuando la temperatura ambiente es de 298 K (25 °C). Se desea extraer una cantidad de calor [[Q]] = 5000 J del interior frio hacia el ambiente caliente.

Se pide:
a) Calcular el trabajo mínimo teorico necesario para realizar esta transferencia.
b) Determinar el coeficiente de eficiencia (COP) de Carnot para estas temperaturas.
c) Si el refrigerador real tiene un COP que es el 30% del valor de Carnot, calcular el trabajo real consumido y la eficiencia energética del aparato.
d) Calcular el cambio de entropía del universo para el proceso real.

## Datos

- Temperatura interior (foco frio): [[T_B]] = 277 K (4 °C)
- Temperatura ambiente (foco caliente): [[T_A]] = 298 K (25 °C)
- Calor a extraer: [[Q]] = 5000 J
- Diferencia de temperaturas: [[DeltaT]] = [[T_A]] - [[T_B]] = 21 K
- Rendimiento real del refrigerador: COP_real = 0.30 × COP_Carnot

## Definición del sistema

El sistema analizado es el refrigerador, que opera como un dispositivo ciclico que transfere calor del foco frio (interior de la nevera) al foco caliente (ambiente exterior). El sistema recibe trabajo electrico desde el exterior y transfiere calor en contra del gradiente térmico natural.

- **Foco frio**: Interior del refrigerador ([[T_B]] = 277 K)
- **Foco caliente**: Ambiente exterior ([[T_A]] = 298 K)
- **Proceso**: Transferencia forzada de [[Q]] = 5000 J del frio al caliente
- **Agente externo**: Compresor que consume trabajo electrico [[W]]

## Modelo físico

Se aplica el modelo de focos térmicos infinitos con temperaturas constantes. El refrigerador opera mediante un ciclo de compresión-expansión de un refrigerante que:

1. Evapora en el interior frio a baja presión, absorbiendo calor [[Q]] del compartimento
2. Se comprime mecánicamente (consumiendo trabajo [[W]]) elevando su presión y temperatura
3. Se condensa en el exterior caliente, cediendo calor [[Q]] + [[W]] al ambiente
4. Se expande, retornando a las condiciones iniciales

El modelo asume:
- Operacion ciclica estacionaria
- Temperaturas constantes de ambos focos
- Proceso reversible para el limite de Carnot
- Irreversibilidades reales para el calculo práctico

## Justificacion del modelo

El modelo de focos térmicos es aplicable porque:
- El refrigerador es un dispositivo ciclico que opera continuamente
- La capacidad calorifica del interior y del ambiente es efectivamente infinita comparada con [[Q]] = 5000 J
- Las temperaturas se mantienen constantes por la accion del termostato y la inercia térmica del ambiente

Las irreversibilidades reales (friccion mecánica, transferencias finitas de temperatura, perdidas térmicas) reducen el rendimiento respecto al ideal de Carnot, justificando el factor de 0.30 aplicado.

## Resolucion simbolica

Para el trabajo mínimo teorico (proceso reversible de Carnot):

{{f:trabajo_reversion_clausius}}

Para el coeficiente de eficiencia de Carnot:

{{f:eficiencia_carnot_refrigeracion}}

Para el cambio de entropía reversible asociado a una transferencia:

{{f:entropia_transferencia}}

En modelos extendidos también pueden aparecer [[C]], [[C_A]], [[C_B]], [[L]], [[P_termica]], [[T_0]], [[T_A0]], [[T_B0]], [[T_C]], [[T_K]], [[T_max]] y [[U]].

Para el cambio de entropía del universo en el proceso real:

El foco frio (interior) pierde calor [[Q]], por lo que su entropía disminuye:

[[DeltaS_B]] = -[[Q]] / [[T_B]]

El foco caliente (ambiente) recibe el calor [[Q]] más el trabajo [[W]], por lo que su entropía aumenta:

[[DeltaS_A]] = ([[Q]] + [[W]]) / [[T_A]]

El trabajo [[W]] proviene de una fuente externa (red electrica) que genera entropía adicional en la central termoelectrica que lo produce.

La entropía del universo es:
[[DeltaS_universo]] = [[DeltaS_A]] + [[DeltaS_B]] + [[DeltaS_generada]]

## Sustitucion numerica

**Apartado a) Trabajo mínimo teorico:**

Aplicando la formula de trabajo mínimo:

{{f:trabajo_reversion_clausius}}

Para el trabajo mínimo, elevar 5000 J por la diferencia de temperaturas (21 K) y dividir por la temperatura del foco frio (277 K) da aproximadamente 379 J. Por tanto [[W_min]] ≈ 379 J.

**Apartado b) COP de Carnot:**

{{f:eficiencia_carnot_refrigeracion}}

Para el COP de Carnot, dividir 277 K por la diferencia de temperaturas (21 K) da aproximadamente 13.2. Por tanto COP_Carnot ≈ 13.2.

**Apartado c) Trabajo real y eficiencia:**

COP_real ≈ 0.30 × 13.2 → 3.96 ≈ 4.0

El trabajo real consumido es:

W_real se calcula como Q/COP_real → 5000 J / 4.0 → 1250 J

**Apartado d) Cambio de entropía del universo:**

Entropía del foco frio: [[DeltaS_B]] = -5000 J / 277 K ≈ -18.05 J/K

Calor cedido al ambiente: Q_ambiente resulta de 5000 J + 1250 J → 6250 J

Entropía del foco caliente: [[DeltaS_A]] = 6250 J / 298 K ≈ 20.97 J/K

Entropía generada por irreversibilidades:
[[DeltaS_generada]] = [[DeltaS_A]] + [[DeltaS_B]] = 20.97 - 18.05 = 2.92 J/K

## Validacion dimensional

- Unidades de trabajo: [W] = J (consistente con energía [M L² T⁻²])
- Unidades de COP: adimensional [1] = [K]/[K] (consistente)
- Unidades de entropía: [ΔS] = J/K (consistente con [M L² T⁻² Θ⁻¹])

Verificacion de ordenes de magnitud:
- Trabajo mínimo (379 J) << Calor transferido (5000 J): correcto, W/Q ≈ 0.08
- COP_Carnot (13.2) >> 1: correcto, limite teorico alto para [[DeltaT]] pequeño
- Trabajo real (1250 J) > Trabajo mínimo (379 J): correcto, proceso real es menos eficiente
- Entropía generada (2.92 J/K) > 0: correcto, segunda ley satisfecha

## Interpretacion física

El resultado muestra que extraer 5000 J de calor del interior frio de una nevera requiere teoricamente un mínimo de 379 J de trabajo electrico. Este limite absoluto, derivado directamente del enunciado de Clausius, no puede ser superado por ningún dispositivo real.

Sin embargo, el refrigerador real consume 1250 J, es decir, 3.3 veces más trabajo que el limite teorico. Esta diferencia se debe a las multiples irreversibilidades del proceso real: friccion mecánica en el compressor, transferencias de calor a traves de diferencias finitas de temperatura, y perdidas térmicas por las paredes del compartimento.

El COP real de 4.0 significa que por cada joule de electricidad consumida, se extraen aproximadamente 4 joules de calor del interior frio. Esto representa una ganancia energética significativa respecto a la situación hipotetica de calentamiento directo, donde 1 J de electricidad solo produciria 1 J de enfriamiento.

Fisicamente, el aumento de entropía del universo (2.92 J/K) cuantifica la irreversibilidad del proceso. Este incremento entrópico es inevitable en cualquier proceso real y representa la "degradacion" energética: la energía de alta calidad (electricidad) se convierte parcialmente en energía térmica de baja calidad (dispersion al ambiente).

Si el refrigerador operara con el COP de Carnot (13.2), solo consumiria 379 J, reduciendo la factura electrica en un 70%. Sin embargo, alcanzar este limite requeriria procesos infinitamente lentos y sin friccion, impracticables en una aplicación domestica.

# Ejemplo de aplicación real

## Contexto

Las **bombas de calor** son dispositivos que aplican directamente el principio del enunciado de Clausius para calefaccionar edificios de forma eficiente. A diferencia de los refrigeradores (que extraen calor de un espacio frio), las bombas de calor extraen calor del ambiente exterior (aire, agua o suelo, aunque a baja temperatura) y lo transfieren al interior del edificio a mayor temperatura.

En una vivienda en clima templado, el suelo subyacente mantiene una temperatura aproximada de 285 K (12 °C) durante todo el año, mientras que el interior debe calentarse a 293 K (20 °C).

## Estimacion física

Para mantener una habitacion a 293 K cuando el exterior (suelo) esta a 285 K, una bomba de calor debe transferir [[Q]] = 10 000 J de calor del suelo frio al interior caliente por cada ciclo de operación.

Diferencia de temperaturas: [[DeltaT]] resulta de 293 K menos 285 K → aproximadamente 8 K

Trabajo mínimo teorico segun Clausius:

{{f:trabajo_reversion_clausius}}

Para el trabajo mínimo, multiplicar 10000 J por la diferencia de temperaturas (8 K) y dividir por la temperatura del foco frio (285 K) da aproximadamente 281 J. Por tanto [[W_min]] ≈ 281 J.

COP de Carnot para calefaccion (bomba de calor):
El COP de Carnot para calefaccion resulta aproximadamente 36.6 (para [[T_A]] = 293 K y [[DeltaT]] = 8 K)

Una bomba de calor real, con eficiencia del 40% respecto a Carnot, tendria:
COP_real resulta de 0.40 × 36.6 → aproximadamente 14.6

Trabajo real consumido: dividiendo 10000 J entre 14.6 resulta aproximadamente 685 J

## Interpretacion

El resultado demuestra la eficiencia energética extraordinaria de las bombas de calor: para aportar 10000 J de calor a la vivienda, solo se consumen 685 J de energía electrica. El resto del calor (9315 J) se extrae gratuitamente del suelo exterior.

Comparativamente, una resistencia electrica convencional produciría solo 685 J de calor por los mismos 685 J de electricidad. La bomba de calor es aproximadamente 14.6 veces más eficiente que la calefaccion electrica directa.

Esta ganancia energética es posible precisamente porque la bomba de calor **no genera** calor, sino que **bombea** calor existente desde una fuente fria (el suelo) hacia un destino caliente (la vivienda). El trabajo electrico solo sirve para forzar esta transferencia contra el gradiente térmico natural, siguiendo exactamente el principio de Clausius.

El limite de Carnot indica que, teoricamente, se podria obtener aun mayor eficiencia si las irreversibilidades de compresión y transferencias finitas de temperatura se redujeran. Sin embargo, incluso con un [[COP_R]] real cercano a 14.6, la tecnologia sigue siendo muy atractiva energeticamente.

La pequeña diferencia de temperatura (8 K) entre la fuente fria y el destino caliente es clave para esta alta eficiencia. En climas más frios donde el suelo esta a 275 K y la vivienda a 293 K ([[DeltaT]] = 18 K), el COP caeria a aproximadamente 16 (Carnot) y 6.4 (real), reduciendo significativamente la ventaja energética.
