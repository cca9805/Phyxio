# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: fenomenos-criticos
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Fenomenos criticos
## Modelo ideal
El modelo ideal describe una transición continua alrededor de una [[temperatura_critica]] única. La distancia al punto crítico se resume mediante [[temperatura_reducida]]. En ese régimen, el [[parametro_de_orden]] se anula gradualmente, la [[susceptibilidad]] aumenta y la [[longitud_correlacion]] crece siguiendo leyes de escala. No se modela una sustancia concreta con todos sus detalles microscópicos; se conserva solo lo que controla el comportamiento crítico: simetría, dimensión efectiva, variable de control y observables singulares.

## Hipótesis
- La transición es continua. Si aparece calor latente o salto macroscópico, las leyes de [[parametro_de_orden]], [[susceptibilidad]] y [[longitud_correlacion]] dejan de ser la primera herramienta.
- Existe una [[temperatura_critica]] bien determinada. Si la muestra es inhomogénea, distintos dominios tendrán puntos críticos distintos y se suavizarán las curvas.
- La [[temperatura_reducida]] es pequeña. Si |[[temperatura_reducida]]| > 10^-1, el sistema suele estar fuera de la zona crítica.
- Los campos externos son débiles o nulos. Un campo conjugado puede redondear la desaparición del [[parametro_de_orden]].
- El tamaño de muestra supera claramente la [[longitud_correlacion]]. Si no, la divergencia queda cortada.

## Dominio de validez cuantitativo
El intervalo útil suele estar entre 10^-5 < |[[temperatura_reducida]]| < 10^-1. Por encima de 10^-1 dominan correcciones no críticas. Por debajo de 10^-5 pueden pesar resolución térmica, impurezas y tamaño finito. Para una ley de [[longitud_correlacion]], debe cumplirse [[longitud_correlacion]] menor que el tamaño característico de la muestra. Para estimar [[exponente_critico_gamma]] o [[exponente_critico_nu]], la gráfica logarítmica debe mostrar una pendiente estable al menos en un intervalo de un orden de magnitud.

## Señales de fallo del modelo
El modelo falla si hay histéresis fuerte, saltos abruptos, coexistencia de fases o dependencia clara del historial térmico. También es sospechoso si el [[parametro_de_orden]] no disminuye al acercarse a [[temperatura_critica]], si la [[susceptibilidad]] no aumenta en la ventana crítica o si la [[longitud_correlacion]] satura mucho antes de acercarse al tamaño de muestra. Otra señal es obtener exponentes incompatibles según el intervalo elegido.

## Modelo extendido o alternativo
Si hay discontinuidad, conviene usar clasificación de transiciones de primer orden. Si el tamaño finito domina, se usa escalado de tamaño finito. Si hay campos externos, se necesitan ecuaciones de estado críticas. En simulaciones, puede ser mejor estudiar distribuciones, fluctuaciones y colapso de datos en vez de una única potencia.

## Comparación operativa
| Situación | Modelo adecuado | Señal principal |
|---|---|---|
| Transición continua limpia | Leyes críticas | Potencias en [[temperatura_reducida]] |
| Muestra pequeña | Escalado finito | Saturación de [[longitud_correlacion]] |
| Campo externo presente | Ecuación de estado | [[parametro_de_orden]] redondeado |
| Histéresis o coexistencia | Primer orden | salto o calor latente |

