# Ejemplo tipo examen


## Enunciado

Se conecta una fuente ideal de [[tension_comun_del_paralelo]] = 12 V a tres resistencias en paralelo: [[resistencia_de_rama_1]] = 6 ohm, [[resistencia_de_rama_2]] = 3 ohm y [[resistencia_de_rama_3]] = 2 ohm. Se pide determinar [[resistencia_equivalente]], [[conductancia_equivalente]], las corrientes de rama [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]] y la corriente total [[corriente_total]]. Luego se solicita justificar físicamente el reparto de corriente y verificar la coherencia del resultado por dos caminos independientes.

Además, el examen pide explicar qué ocurre si una cuarta rama con resistencia muy alta se agrega al circuito y por qué ese cambio puede ser casi irrelevante en corriente total pese a modificar formalmente la topología. La respuesta debe separar cálculo simbólico, sustitución numérica, validación dimensional e interpretación causal.

## Datos

Datos numéricos de entrada para la resolución base: [[tension_comun_del_paralelo]] = 12 V, [[resistencia_de_rama_1]] = 6 ohm, [[resistencia_de_rama_2]] = 3 ohm y [[resistencia_de_rama_3]] = 2 ohm. Supuestos de trabajo: ramas conectadas, comportamiento predominantemente óhmico, y resistencia de cable despreciable frente a cada rama para primer análisis.

## Definición del sistema

El sistema es una red resistiva de tres ramas activas entre dos nodos comunes. La variable de fuente es la tensión [[tension_comun_del_paralelo]] común a cada rama. Las magnitudes de estado buscadas son [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]] e [[corriente_total]]. Las magnitudes de estructura equivalente son [[resistencia_equivalente]] y [[conductancia_equivalente]].

No hay elementos reactivos, no hay dependencia temporal explícita y se asume comportamiento óhmico en ventana térmica moderada. Por diseño didáctico, la resistencia de cables se considera despreciable frente a cada resistencia de rama para evitar contaminar el cierre principal con una no idealidad secundaria.

## Modelo físico

El modelo físico adopta ley de rama bajo tensión común y balance nodal de corrientes. La equivalencia de red se obtiene por la suma recíproca de resistencias o por suma directa de conductancias. El vínculo entre ambas representaciones se impone con recíproco global.

Magnitudes núcleo usadas de forma explícita: [[resistencia_equivalente]], [[conductancia_equivalente]], [[tension_comun_del_paralelo]], [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]], [[corriente_total]], [[resistencia_de_rama_1]], [[resistencia_de_rama_2]], [[resistencia_de_rama_3]], [[conductancia_de_rama_1]], [[conductancia_de_rama_2]], [[conductancia_de_rama_3]]. Relaciones núcleo usadas: equivalencia resistiva, equivalencia conductiva, corriente por rama y cierre total.

## Justificación del modelo

La justificación física del modelo es que una conexión en paralelo comparte diferencia de potencial entre ramas, por lo que cada corriente se define por oposición local de su propia resistencia. Esta hipótesis es coherente con comportamiento óhmico y con la observación experimental de reparto no uniforme en ramas con resistencias distintas.

El uso simultáneo de [[resistencia_equivalente]] y [[conductancia_equivalente]] no es redundante: sirve como verificación cruzada para reducir errores de unidad, transcripción o interpretación. Si ambos caminos no convergen, el problema no está en una cifra aislada, sino en la consistencia del planteo.

## Resolución simbólica

Primero, equivalencia resistiva:

{{f:req_reciproco}}

Segundo, equivalencia conductiva y relación recíproca:

{{f:geq_suma}}

{{f:geq_reciproco}}

Tercero, corrientes de rama:

{{f:corriente_rama_1}}

{{f:corriente_rama_2}}

{{f:corriente_rama_3}}

Cuarto, cierre nodal:

{{f:corriente_total}}

Estas relaciones cubren el núcleo del leaf: cálculo de red equivalente y reparto causal de corriente.

## Sustitución numérica

Aplicando la equivalencia resistiva:
1/[[resistencia_equivalente]] = 1/6 + 1/3 + 1/2 = 1, luego [[resistencia_equivalente]] = 1 ohm.

Por ruta conductiva:
[[conductancia_de_rama_1]] = 1/[[resistencia_de_rama_1]] = 1/6 S, [[conductancia_de_rama_2]] = 1/[[resistencia_de_rama_2]] = 1/3 S, [[conductancia_de_rama_3]] = 1/[[resistencia_de_rama_3]] = 1/2 S.
Suma: [[conductancia_equivalente]] = [[conductancia_de_rama_1]] + [[conductancia_de_rama_2]] + [[conductancia_de_rama_3]] = 1 S.
Chequeo recíproco: [[conductancia_equivalente]] = 1/[[resistencia_equivalente]] = 1/1 = 1 S.

Corrientes de rama:
[[corriente_de_rama_1]] = 12/6 = 2 A,
[[corriente_de_rama_2]] = 12/3 = 4 A,
[[corriente_de_rama_3]] = 12/2 = 6 A.

Cierre total:
[[corriente_total]] = [[corriente_de_rama_1]] + [[corriente_de_rama_2]] + [[corriente_de_rama_3]] = 2 + 4 + 6 = 12 A.

Verificación alternativa: [[corriente_total]] = [[tension_comun_del_paralelo]]/[[resistencia_equivalente]] = 12/1 = 12 A.

## Validación dimensional

La ecuación de corriente de rama usa volt dividido por ohm, por lo que produce ampere, unidad correcta de [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]]. La ecuación de equivalencia conductiva usa siemens y su suma conserva siemens, unidad correcta de [[conductancia_equivalente]]. El recíproco de ohm entrega siemens, por lo que la relación [[conductancia_equivalente]] = 1/[[resistencia_equivalente]] también es consistente.

El cierre [[corriente_total]] = [[corriente_de_rama_1]] + [[corriente_de_rama_2]] + [[corriente_de_rama_3]] conserva homogeneidad de unidad porque todos los términos están en ampere. Esto elimina ambigüedad formal y confirma que el resultado no depende de una coincidencia numérica accidental.

## Interpretación física

La interpretación física profunda es que la topología paralelo no distribuye corriente por simetría visual del diagrama, sino por admisión eléctrica de cada rama. Por eso, una variación localizada en una resistencia modifica de manera no uniforme el reparto, y ese cambio local puede afectar disipación, envejecimiento y protección antes de comprometer el límite global de fuente.

También se confirma una regla de causalidad útil: cuando disminuye una resistencia de rama bajo tensión común, aumenta su corriente de rama y suele aumentar la corriente total del sistema. Esta regla conecta directamente con diagnóstico de campo, porque una deriva térmica o un fallo parcial de componente puede detectarse observando tendencia de [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]] junto con [[corriente_total]] y no solo un valor instantáneo aislado.

# Ejemplo de aplicación real


## Contexto

Un tablero de control industrial alimenta tres módulos en paralelo. El módulo de instrumentación tiene oposición equivalente cercana a [[resistencia_de_rama_1]], el módulo de comunicación se aproxima a [[resistencia_de_rama_2]] y el módulo de actuadores ligeros a [[resistencia_de_rama_3]]. Se desea evaluar si una fuente existente de 15 A es suficiente con margen térmico antes de agregar un cuarto módulo auxiliar.

La decisión no se toma solo por valor de corriente total en estado nominal. También se considera distribución de corriente de rama, porque una rama dominante puede exigir disipación local y fusible específico aunque el total aún quede por debajo del límite de fuente.

## Estimación física

Con los datos nominales ya calculados, la red demanda [[corriente_total]] = 12 A. El margen de fuente respecto al límite de 15 A es 3 A. Si se agrega una rama auxiliar de alta resistencia, por ejemplo 60 ohm, la corriente adicional estimada es [[tension_comun_del_paralelo]]/60 = 0.2 A. La nueva corriente total esperada sería aproximadamente 12.2 A, todavía dentro de margen global.

Sin embargo, la estimación útil no termina en el total. La rama más exigente sigue siendo la de menor resistencia, asociada a [[resistencia_de_rama_3]], con [[corriente_de_rama_3]] = 6 A. Si esa rama experimenta deriva térmica a menor resistencia efectiva, puede aumentar su demanda y reducir margen local de protección incluso cuando la fuente global aún parece segura.

## Interpretación

El caso real confirma la lectura central del leaf: el paralelo determina simultáneamente una oposición equivalente más baja y un reparto de corriente gobernado por cada rama. La ingeniería práctica requiere mirar ambos niveles. [[resistencia_equivalente]] y [[conductancia_equivalente]] resumen estructura global; [[corriente_de_rama_1]], [[corriente_de_rama_2]], [[corriente_de_rama_3]] revelan el esfuerzo local.

La decisión técnica robusta no es solo aceptar que [[corriente_total]] < límite de fuente. También exige verificar que la rama dominante mantenga margen térmico y que el esquema de protección por rama siga siendo válido tras cada cambio de carga. Esta interpretación conecta cálculo de examen con criterio operativo de mantenimiento y seguridad.