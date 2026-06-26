# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: relacion-con-entropia-clasica
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Relacion con entropia clasica

## Modelo ideal
El modelo ideal compara dos estados de equilibrio del mismo sistema y permite leer la misma [[delta_entropia]] de dos maneras. La lectura clásica usa [[calor_reversible]] y [[temperatura]] para medir el cambio de [[entropia]]. La lectura estadística usa [[numero_microestados]] o [[ratio_microestados]] para medir cómo cambia la multiplicidad microscópica compatible con el macroestado. Ambas lecturas son equivalentes cuando describen el mismo cambio físico.

## Hipótesis
- Estados inicial y final de equilibrio: si no hay equilibrio, [[temperatura]] y [[entropia]] pueden no estar bien definidas.
- Camino reversible de cálculo: si se usa calor real irreversible como [[calor_reversible]], la [[delta_entropia]] queda mal estimada.
- Mismo sistema en ambas lecturas: si el conteo de [[numero_microestados]] pertenece a otro sistema, no representa la misma [[entropia]].
- [[temperatura]] absoluta positiva: si se usa Celsius o valores no absolutos, la relación clásica pierde sentido.
- Multiplicidades comparables: [[ratio_microestados]] debe comparar estados bajo restricciones compatibles.

## Dominio de validez cuantitativo
En laboratorio, el modelo es razonable para procesos entre estados próximos al equilibrio con [[temperatura]] > 0 K y cambios macroscópicos bien definidos. Un criterio operativo es usar [[calor_reversible]] de 1 J a 10⁵ J y [[temperatura]] entre 10² K y 10³ K para obtener [[delta_entropia]] entre 10⁻³ J/K y 10³ J/K. En la lectura estadística debe cumplirse [[numero_microestados]] > 0 y [[ratio_microestados]] > 0; si [[ratio_microestados]] = 1, el cambio entrópico estadístico es nulo.

## Señales de fallo del modelo
Falla si el sistema está lejos del equilibrio durante todo el proceso, si no puede asignarse una [[temperatura]] única, si se mezclan microestados de sistemas distintos, o si el resultado predice signo opuesto entre [[calor_reversible]]/[[temperatura]] y [[ratio_microestados]]. También hay fallo si aparece una [[delta_entropia]] con unidades distintas de J/K.

## Modelo extendido o alternativo
Para procesos irreversibles reales se usa un camino reversible equivalente entre los mismos estados. Para sistemas pequeños, fluctuantes o cuánticos, el conteo de [[numero_microestados]] debe sustituirse por modelos estadísticos más detallados. Si hay gradientes fuertes de [[temperatura]], se integra localmente en lugar de usar una única temperatura.

## Comparación operativa
| Lectura | Datos principales | Ventaja | Riesgo |
|---|---|---|---|
| Clásica reversible | [[calor_reversible]], [[temperatura]] | Directa en problemas térmicos | Usar calor irreversible |
| Estadística | [[numero_microestados]], [[ratio_microestados]], [[k_boltzmann]] | Explica el origen microscópico | Contar estados incompatibles |
| Equivalente | [[delta_entropia]] por ambas vías | Verifica coherencia física | Mezclar sistemas o restricciones |

