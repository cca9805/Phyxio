const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Se conecta una fuente ideal de [[V]] = 12 V a tres resistencias en paralelo: [[R1]] = 6 ohm, [[R2]] = 3 ohm y [[R3]] = 2 ohm. Se pide determinar [[Req]], [[Geq]], las corrientes de rama [[I1]], [[I2]], [[I3]] y la corriente total [[It]]. Luego se solicita justificar físicamente el reparto de corriente y verificar la coherencia del resultado por dos caminos independientes.\r
\r
Además, el examen pide explicar qué ocurre si una cuarta rama con resistencia muy alta se agrega al circuito y por qué ese cambio puede ser casi irrelevante en corriente total pese a modificar formalmente la topología. La respuesta debe separar cálculo simbólico, sustitución numérica, validación dimensional e interpretación causal.\r
\r
## Datos\r
Datos numéricos de entrada para la resolución base: [[V]] = 12 V, [[R1]] = 6 ohm, [[R2]] = 3 ohm y [[R3]] = 2 ohm. Supuestos de trabajo: ramas conectadas, comportamiento predominantemente óhmico, y resistencia de cable despreciable frente a cada rama para primer análisis.\r
\r
## Definición del sistema\r
El sistema es una red resistiva de tres ramas activas entre dos nodos comunes. La variable de fuente es la tensión [[V]] común a cada rama. Las magnitudes de estado buscadas son [[I1]], [[I2]], [[I3]] e [[It]]. Las magnitudes de estructura equivalente son [[Req]] y [[Geq]].\r
\r
No hay elementos reactivos, no hay dependencia temporal explícita y se asume comportamiento óhmico en ventana térmica moderada. Por diseño didáctico, la resistencia de cables se considera despreciable frente a cada resistencia de rama para evitar contaminar el cierre principal con una no idealidad secundaria.\r
\r
## Modelo físico\r
El modelo físico adopta ley de rama bajo tensión común y balance nodal de corrientes. La equivalencia de red se obtiene por la suma recíproca de resistencias o por suma directa de conductancias. El vínculo entre ambas representaciones se impone con recíproco global.\r
\r
Magnitudes núcleo usadas de forma explícita: [[Req]], [[Geq]], [[V]], [[I1]], [[I2]], [[I3]], [[It]], [[R1]], [[R2]], [[R3]], [[G1]], [[G2]], [[G3]]. Relaciones núcleo usadas: equivalencia resistiva, equivalencia conductiva, corriente por rama y cierre total.\r
\r
## Justificación del modelo\r
La justificación física del modelo es que una conexión en paralelo comparte diferencia de potencial entre ramas, por lo que cada corriente se define por oposición local de su propia resistencia. Esta hipótesis es coherente con comportamiento óhmico y con la observación experimental de reparto no uniforme en ramas con resistencias distintas.\r
\r
El uso simultáneo de [[Req]] y [[Geq]] no es redundante: sirve como verificación cruzada para reducir errores de unidad, transcripción o interpretación. Si ambos caminos no convergen, el problema no está en una cifra aislada, sino en la consistencia del planteo.\r
\r
## Resolución simbólica\r
Primero, equivalencia resistiva:\r
\r
{{f:req_reciproco}}\r
\r
Segundo, equivalencia conductiva y relación recíproca:\r
\r
{{f:geq_suma}}\r
\r
{{f:geq_reciproco}}\r
\r
Tercero, corrientes de rama:\r
\r
{{f:corriente_rama_1}}\r
\r
{{f:corriente_rama_2}}\r
\r
{{f:corriente_rama_3}}\r
\r
Cuarto, cierre nodal:\r
\r
{{f:corriente_total}}\r
\r
Estas relaciones cubren el núcleo del leaf: cálculo de red equivalente y reparto causal de corriente.\r
\r
## Sustitución numérica\r
Aplicando la equivalencia resistiva:\r
1/[[Req]] = 1/6 + 1/3 + 1/2 = 1, luego [[Req]] = 1 ohm.\r
\r
Por ruta conductiva:\r
[[G1]] = 1/[[R1]] = 1/6 S, [[G2]] = 1/[[R2]] = 1/3 S, [[G3]] = 1/[[R3]] = 1/2 S.\r
Suma: [[Geq]] = [[G1]] + [[G2]] + [[G3]] = 1 S.\r
Chequeo recíproco: [[Geq]] = 1/[[Req]] = 1/1 = 1 S.\r
\r
Corrientes de rama:\r
[[I1]] = 12/6 = 2 A,\r
[[I2]] = 12/3 = 4 A,\r
[[I3]] = 12/2 = 6 A.\r
\r
Cierre total:\r
[[It]] = [[I1]] + [[I2]] + [[I3]] = 2 + 4 + 6 = 12 A.\r
\r
Verificación alternativa: [[It]] = [[V]]/[[Req]] = 12/1 = 12 A.\r
\r
## Validación dimensional\r
La ecuación de corriente de rama usa volt dividido por ohm, por lo que produce ampere, unidad correcta de [[I1]], [[I2]], [[I3]]. La ecuación de equivalencia conductiva usa siemens y su suma conserva siemens, unidad correcta de [[Geq]]. El recíproco de ohm entrega siemens, por lo que la relación [[Geq]] = 1/[[Req]] también es consistente.\r
\r
El cierre [[It]] = [[I1]] + [[I2]] + [[I3]] conserva homogeneidad de unidad porque todos los términos están en ampere. Esto elimina ambigüedad formal y confirma que el resultado no depende de una coincidencia numérica accidental.\r
\r
## Interpretación física\r
La interpretación física profunda es que la topología paralelo no distribuye corriente por simetría visual del diagrama, sino por admisión eléctrica de cada rama. Por eso, una variación localizada en una resistencia modifica de manera no uniforme el reparto, y ese cambio local puede afectar disipación, envejecimiento y protección antes de comprometer el límite global de fuente.\r
\r
También se confirma una regla de causalidad útil: cuando disminuye una resistencia de rama bajo tensión común, aumenta su corriente de rama y suele aumentar la corriente total del sistema. Esta regla conecta directamente con diagnóstico de campo, porque una deriva térmica o un fallo parcial de componente puede detectarse observando tendencia de [[I1]], [[I2]], [[I3]] junto con [[It]] y no solo un valor instantáneo aislado.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Un tablero de control industrial alimenta tres módulos en paralelo. El módulo de instrumentación tiene oposición equivalente cercana a [[R1]], el módulo de comunicación se aproxima a [[R2]] y el módulo de actuadores ligeros a [[R3]]. Se desea evaluar si una fuente existente de 15 A es suficiente con margen térmico antes de agregar un cuarto módulo auxiliar.\r
\r
La decisión no se toma solo por valor de corriente total en estado nominal. También se considera distribución de corriente de rama, porque una rama dominante puede exigir disipación local y fusible específico aunque el total aún quede por debajo del límite de fuente.\r
\r
## Estimación física\r
Con los datos nominales ya calculados, la red demanda [[It]] = 12 A. El margen de fuente respecto al límite de 15 A es 3 A. Si se agrega una rama auxiliar de alta resistencia, por ejemplo 60 ohm, la corriente adicional estimada es [[V]]/60 = 0.2 A. La nueva corriente total esperada sería aproximadamente 12.2 A, todavía dentro de margen global.\r
\r
Sin embargo, la estimación útil no termina en el total. La rama más exigente sigue siendo la de menor resistencia, asociada a [[R3]], con [[I3]] = 6 A. Si esa rama experimenta deriva térmica a menor resistencia efectiva, puede aumentar su demanda y reducir margen local de protección incluso cuando la fuente global aún parece segura.\r
\r
## Interpretación\r
El caso real confirma la lectura central del leaf: el paralelo determina simultáneamente una oposición equivalente más baja y un reparto de corriente gobernado por cada rama. La ingeniería práctica requiere mirar ambos niveles. [[Req]] y [[Geq]] resumen estructura global; [[I1]], [[I2]], [[I3]] revelan el esfuerzo local.\r
\r
La decisión técnica robusta no es solo aceptar que [[It]] < límite de fuente. También exige verificar que la rama dominante mantenga margen térmico y que el esquema de protección por rama siga siendo válido tras cada cambio de carga. Esta interpretación conecta cálculo de examen con criterio operativo de mantenimiento y seguridad.`;export{e as default};
