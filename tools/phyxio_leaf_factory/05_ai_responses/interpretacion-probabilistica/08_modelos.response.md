# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: interpretacion-probabilistica
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Interpretacion probabilistica
## Modelo ideal
El modelo ideal considera un sistema con restricciones macroscópicas fijas y un conjunto bien definido de microestados accesibles. Cada microestado compatible se trata con el mismo peso inicial, de modo que [[probabilidad_macroestado]] depende de cuántas configuraciones pertenecen al macroestado observado. La idea central es que [[numero_microestados_macro]] no describe una fuerza ni una preferencia consciente del sistema: mide cuántas maneras microscópicas producen la misma apariencia macroscópica. Cuando se comparan dos macrostados, [[ratio_probabilidades]] resume el cambio de peso estadístico y [[delta_entropia]] lo expresa en escala entrópica mediante [[k_boltzmann]].

## Hipótesis
- Microestados equiprobables: si existen sesgos dinámicos, barreras o preparación no equilibrada, [[probabilidad_macroestado]] deja de ser solo un cociente de recuentos.
- Mismo espacio accesible: [[numero_microestados_macro]] y [[numero_microestados_total]] deben pertenecer al mismo sistema. Si cambian las restricciones, la fracción pierde sentido.
- Macrostados no solapados: cada microestado debe pertenecer claramente al macroestado contado. Si las categorías se mezclan, [[numero_microestados_macro]] se sobreestima.
- Comparación homogénea: [[probabilidad_inicial]] y [[probabilidad_final]] solo se comparan si usan las mismas reglas de conteo.
- Recuentos positivos: [[numero_microestados_total]] debe ser mayor que cero; de lo contrario no hay espacio estadístico físico.

## Dominio de validez cuantitativo
El modelo es apropiado si 0 ≤ [[numero_microestados_macro]] ≤ [[numero_microestados_total]] y [[numero_microestados_total]] > 0. Para comparaciones, [[numero_microestados_inicial]] > 0 y [[numero_microestados_final]] > 0. En ejercicios introductorios pueden usarse recuentos de 10² a 10⁶ microestados, siempre que el cociente sea interpretable. Si [[probabilidad_macroestado]] > 1 o [[ratio_probabilidades]] < 0, hay un error de conteo. Una [[delta_entropia]] positiva debe corresponder a mayor peso relativo final, no a menor multiplicidad.

## Señales de fallo del modelo
El modelo falla si el sistema no está cerca del equilibrio, si los microestados no son igualmente accesibles o si la dinámica impide visitar regiones del espacio de fases. También falla cuando se mezclan macrostados definidos con variables diferentes, por ejemplo comparar un estado inicial a energía fija con otro a temperatura impuesta sin redefinir [[numero_microestados_total]]. Otra señal de alarma es interpretar [[delta_entropia]] como energía o como probabilidad directa.

## Modelo extendido o alternativo
Si los microestados no son equiprobables, conviene usar una distribución de probabilidad explícita sobre estados microscópicos. En sistemas térmicos no aislados puede aparecer una descripción canónica, donde los pesos dependen de energía y temperatura. En procesos fuera del equilibrio se necesitan modelos dinámicos, tasas de transición o simulaciones. El recuento simple sigue siendo útil como brújula conceptual, pero ya no basta para predecir [[probabilidad_macroestado]].

## Comparación operativa
| Situación | Modelo útil | Magnitud clave | Riesgo principal |
|---|---|---|---|
| Recuento equiprobable | Interpretación probabilística simple | [[probabilidad_macroestado]] | Confundir fracción con causa |
| Comparación entre macrostados | Peso relativo | [[ratio_probabilidades]] | Usar espacios accesibles distintos |
| Lectura entrópica | Probabilidad-entropía | [[delta_entropia]] | Tratar entropía como probabilidad |
| Sistema sesgado | Distribución ponderada | [[probabilidad_final]] | Ignorar barreras dinámicas |

