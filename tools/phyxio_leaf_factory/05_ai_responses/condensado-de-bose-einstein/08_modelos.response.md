# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: condensado-de-bose-einstein
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Condensado de bose einstein
## Modelo ideal
El modelo ideal describe un gas homogéneo de bosones no relativistas, sin interacciones apreciables, en equilibrio térmico. La pregunta operativa es si la [[temperatura]] está por debajo de la [[temperatura_critica]] fijada por [[densidad_particulas]], [[masa_particula]], [[constante_planck]] y [[constante_boltzmann]]. Si lo está, aparece una [[fraccion_condensada]] asociada a un [[numero_condensado]] dentro del [[numero_particulas]] total. La lectura es estadística: no sigue trayectorias individuales, sino poblaciones de estados cuánticos.

## Hipótesis
- Bosones indistinguibles: si las partículas fueran fermiones o distinguibles, la acumulación colectiva en el estado fundamental no seguiría este modelo.
- Gas diluido y no interactuante: si las interacciones son fuertes, la [[temperatura_critica]] y la curva de [[fraccion_condensada]] se desplazan.
- Equilibrio térmico: si no hay equilibrio, una única [[temperatura]] no resume el sistema.
- Homogeneidad: si el gas está en una trampa, la [[densidad_particulas]] varía espacialmente y el [[volumen]] efectivo debe tratarse con más cuidado.
- Régimen no relativista: si la energía térmica se acerca a escalas relativistas, la [[masa_particula]] ya no entra con la misma interpretación.

## Dominio de validez cuantitativo
Para un gas atómico ultrafrío ideal, el modelo es razonable cuando [[temperatura]] está por debajo de unos pocos microkelvin, la dilución cumple aproximadamente [[densidad_particulas]] a_s³ << 1 si a_s es la longitud de dispersión, y el número total [[numero_particulas]] es suficientemente grande, por ejemplo N > 10⁴, para que la transición sea nítida. La condensación ideal se espera cuando [[densidad_particulas]] > [[densidad_critica]] o, de forma equivalente, cuando [[temperatura]] < [[temperatura_critica]]. Si [[longitud_onda_termica]] es mucho menor que la separación media n⁻¹/³, el gas sigue siendo esencialmente clásico.

{{f:temperatura_critica_bose}}

{{f:fraccion_condensada_bose}}

## Señales de fallo del modelo
El modelo empieza a fallar si la curva experimental de [[fraccion_condensada]] no se anula cerca de [[temperatura_critica]], si supera 1, si decrece al enfriar, o si depende fuertemente de la geometría de la trampa. También falla cuando las colisiones, pérdidas, anisotropías o efectos de tamaño finito dominan la medida de [[numero_condensado]]. Una señal clara es que dos nubes con igual [[densidad_particulas]] y [[masa_particula]] no comparten el mismo umbral térmico dentro de las incertidumbres.

## Modelo extendido o alternativo
Para gases reales se usa un modelo con interacciones débiles, potencial de trampa y aproximación de densidad local. En ese caso, la [[densidad_particulas]] no es uniforme y la transición se lee como una región central condensada que crece al enfriar. Si el sistema es denso o fuertemente interactuante, conviene pasar a teoría de campo medio, Bogoliubov o simulaciones numéricas.

## Comparación operativa
| Aspecto | Modelo ideal | Modelo extendido |
|---|---|---|
| Interacciones | Despreciadas | Incluidas como corrección |
| Densidad | [[densidad_particulas]] uniforme | Perfil espacial variable |
| Umbral | [[temperatura_critica]] limpio | Umbral desplazado o redondeado |
| Resultado | [[fraccion_condensada]] simple | [[numero_condensado]] dependiente de trampa |
| Uso | Primer cálculo y escala | Experimentos y ajuste fino |

