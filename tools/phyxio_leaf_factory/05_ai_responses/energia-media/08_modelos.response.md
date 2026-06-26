# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: energia-media
# Target response file: modelos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Energia media
## Modelo ideal
El modelo ideal describe un gas clásico, diluido y en equilibrio térmico. Cada partícula contribuye con energía cinética traslacional, y la [[energia_media]] por partícula queda determinada por la [[temperatura]] absoluta. No se estudian detalles de cada choque, sino el promedio estadístico que emerge cuando hay muchas partículas y las velocidades siguen una distribución estable. La [[energia_total]] se interpreta como la suma de esa media sobre [[numero_particulas]].

{{f:energia_media_particula}}

{{f:energia_total_temperatura}}

## Hipótesis
- Equilibrio térmico: si hay regiones con distinta [[temperatura]], una sola [[energia_media]] no describe todo el gas.
- Gas ideal diluido: si las interacciones son fuertes, la energía potencial intermolecular altera la lectura de [[energia_total]].
- Régimen clásico: si la cuantización domina, la equipartición usada en {{f:energia_media_particula}} deja de ser válida.
- Energía traslacional: si rotaciones, vibraciones o ionización son relevantes, la [[energia_total]] completa necesita más términos.
- [[temperatura]] absoluta en kelvin: usar Celsius dentro de la relación produce una escala energética falsa.

## Dominio de validez cuantitativo
El modelo es razonable para gases diluidos con densidad baja respecto a la de un líquido, [[temperatura]] suficientemente alta frente a la temperatura cuántica característica del gas y presiones moderadas donde el factor de compresibilidad cumple aproximadamente Z ≈ 1. En aula, suele aceptarse para gases monoatómicos cerca de 300 K y 1 atm. Debe evitarse si [[temperatura]] < 10 K para gases ligeros sin revisar efectos cuánticos, si la presión es de decenas de atmósferas, o si aparecen interacciones colectivas. La [[energia_media]] debe ser positiva y del orden de [[k_boltzmann]] por [[temperatura]]; valores negativos o escalas macroscópicas por partícula son señales de error.

## Señales de fallo del modelo
Una gráfica [[energia_media]] frente a [[temperatura]] que no sea lineal indica que el modelo simple no basta. También falla si aparece un intercepto experimental claro, si la pendiente no es compatible con [[k_boltzmann]], si el gas cambia de fase, si las partículas forman moléculas con modos internos activos o si no hay equilibrio. Otra señal es confundir el aumento de [[numero_particulas]] con aumento de [[energia_media]]: al duplicar [[numero_particulas]] a [[temperatura]] fija, solo cambia [[energia_total]].

## Modelo extendido o alternativo
Para gases reales se añaden correcciones de interacción y volumen molecular. Para gases moleculares se consideran grados de libertad rotacionales y vibracionales. A baja [[temperatura]] se necesita estadística cuántica; a alta [[temperatura]], pueden aparecer ionización o correcciones relativistas. El cambio de modelo es apropiado cuando los datos dejan de seguir la recta clásica o cuando el fenómeno observado no es solo traslacional.

## Comparación operativa
| Situación | Modelo recomendado | Qué predice | Riesgo principal |
|---|---|---|---|
| Gas monoatómico diluido a 300 K | Clásico ideal | [[energia_media]] lineal con [[temperatura]] | Usar Celsius |
| Más partículas a igual [[temperatura]] | Suma extensiva | Aumenta [[energia_total]] | Creer que aumenta [[energia_media]] |
| Gas denso o alta presión | Gas real | Correcciones a energía y estado | Ignorar interacciones |
| Baja [[temperatura]] | Modelo cuántico | Fallo de equipartición clásica | Forzar la recta clásica |

