# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: oscilador-armonico-estadistico
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Oscilador armonico estadistico
## Modelo ideal
El modelo ideal describe un único oscilador armónico en equilibrio térmico con un baño de [[temperatura]] fija. Su [[frecuencia_angular]] no cambia con la amplitud, de modo que la separación entre niveles se resume con [[energia_cuantica]]. La [[energia_media]] se obtiene como promedio sobre ocupaciones posibles, no como energía instantánea. La distribución se organiza mediante [[beta]], [[funcion_particion]] y [[probabilidad_ocupacion]].

## Hipótesis
- Potencial armónico: si deja de ser cuadrático, [[frecuencia_angular]] ya no basta para describir los niveles.
- Equilibrio térmico: si el sistema está siendo excitado externamente, [[probabilidad_ocupacion]] no sigue la distribución térmica.
- Baño con [[temperatura]] positiva y estable: si cambia durante la medida, [[beta]] pierde sentido operacional.
- Niveles no degenerados etiquetados por [[numero_cuantico]]: si hay degeneración o acoplamientos, [[funcion_particion]] debe modificarse.
- Constantes [[hbar]] y [[constante_boltzmann]] usadas en SI: si se mezclan unidades, [[energia_media]] puede salir con escala absurda.

## Dominio de validez cuantitativo
El modelo cuántico de un modo aislado es razonable cuando el acoplamiento al baño es débil y la anchura de nivel es mucho menor que [[energia_cuantica]]. Para lectura clásica, usa el límite si la escala térmica asociada a [[constante_boltzmann]] y [[temperatura]] es al menos 10 veces mayor que [[energia_cuantica]]. Para régimen cuántico frío, espera ocupación dominante del estado fundamental si esa escala térmica es menor que 0,1 veces [[energia_cuantica]]. [[probabilidad_ocupacion]] debe cumplir 0 ≤ P_n ≤ 1 y la suma sobre [[numero_cuantico]] debe aproximarse a 1 dentro del error numérico.

{{f:energia_media_cuantica}}

{{f:limite_clasico_equiparticion}}

## Señales de fallo del modelo
El modelo falla si [[energia_media]] disminuye al aumentar [[temperatura]] manteniendo [[frecuencia_angular]] constante, si [[funcion_particion]] aparece con unidades, si [[probabilidad_ocupacion]] no normaliza o si el gráfico no muestra transición suave entre plateau cuántico y tendencia clásica. También es señal de fallo obtener energía negativa para un oscilador estable, usar [[beta]] sin [[temperatura]], o aplicar equipartición cuando solo el estado fundamental está ocupado.

## Modelo extendido o alternativo
Conviene cambiar a un modelo anarmónico si la frecuencia observada depende de la amplitud. Para sólidos o moléculas reales, puede ser necesario sumar muchos modos con distintas [[frecuencia_angular]]. Si hay conducción, disipación o bombeo externo, se necesita dinámica fuera del equilibrio en lugar de una sola [[funcion_particion]].

## Comparación operativa
| Situación | Modelo recomendado | Qué mirar |
|---|---|---|
| Modo aislado en equilibrio | Cuántico armónico | [[energia_media]], [[probabilidad_ocupacion]], [[funcion_particion]] |
| Alta [[temperatura]] | Límite clásico | proporcionalidad con [[temperatura]] |
| Baja [[temperatura]] | Régimen cuántico frío | energía de punto cero y baja ocupación excitada |
| Varios modos acoplados | Modelo multimodo | suma de contribuciones por [[frecuencia_angular]] |
| Potencial no cuadrático | Modelo anarmónico | cambios de frecuencia y desviación gráfica |

