# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: bosones
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un gas ideal de bosones está en equilibrio a [[temperatura]] de 120 nK. Se estudia un estado excitado cuya [[energia]] está 4,0 x 10^-31 J por encima del cero elegido. El [[potencial_quimico]] del gas vale -1,0 x 10^-31 J. Calcula la [[ocupacion_media]] del estado y explica si se trata de un estado poco poblado o con ocupación bosónica apreciable. Después estima, para átomos de [[masa_particula]] 1,44 x 10^-25 kg, si una [[densidad_particulas]] de 1,0 x 10^20 m^-3 está cerca del régimen degenerado usando la [[longitud_onda_termica]].

## Datos
- [[temperatura]]: 120 nK
- [[energia]]: 4,0 x 10^-31 J
- [[potencial_quimico]]: -1,0 x 10^-31 J
- [[constante_boltzmann]]: 1,38 x 10^-23 J/K
- [[masa_particula]]: 1,44 x 10^-25 kg
- [[constante_planck]]: 6,63 x 10^-34 J s
- [[densidad_particulas]]: 1,0 x 10^20 m^-3

## Definición del sistema
El sistema es una nube diluida de bosones materiales en equilibrio térmico. No se sigue una partícula individual, sino la población media de un estado cuántico definido por su [[energia]]. El reservorio fija la [[temperatura]] y el [[potencial_quimico]], por lo que el cálculo pertenece al ensamble gran canónico. La [[ocupacion_media]] no representa una probabilidad entre cero y uno, sino el número medio de partículas en ese estado. La segunda parte del problema no pregunta por ese estado aislado, sino por la cercanía global al régimen cuántico mediante [[longitud_onda_termica]] y [[densidad_particulas]].

## Modelo físico
Se usa estadística Bose-Einstein para un gas ideal. El estado tiene [[energia]] fija, el gas posee [[temperatura]] uniforme y el [[potencial_quimico]] se mantiene por debajo del nivel energético permitido. Para la escala espacial cuántica se usa la [[longitud_onda_termica]] de de Broglie, adecuada para partículas no relativistas de [[masa_particula]]. No se incluyen interacciones entre átomos ni correcciones por trampa externa; por tanto, el resultado debe leerse como una estimación de primer modelo, no como ajuste experimental completo.

## Justificación del modelo
El modelo es apropiado porque las partículas son bosones y pueden compartir un estado, que es justo la propiedad investigada por la [[ocupacion_media]]. La [[temperatura]] es extremadamente baja, de modo que la escala [[constante_boltzmann]][[temperatura]] es comparable con las diferencias de [[energia]] planteadas. Además, el [[potencial_quimico]] es menor que la [[energia]] del estado, lo que evita una ocupación no física. Para la parte de degeneración, usar [[longitud_onda_termica]] es natural porque compara el tamaño cuántico térmico con la separación media implícita en [[densidad_particulas]].

## Resolución simbólica
Para la ocupación del estado se aplica la relación de Bose-Einstein:

{{f:bose_einstein_ocupacion}}

El control físico es la diferencia entre [[energia]] y [[potencial_quimico]] dividida por [[constante_boltzmann]][[temperatura]]. Si esa razón es grande, la [[ocupacion_media]] será pequeña; si se acerca a cero desde valores permitidos, crecerá mucho.

Para estimar la escala cuántica espacial se usa:

{{f:longitud_onda_termica_de_broglie}}

Con ella se forma el producto de degeneración [[densidad_particulas]][[longitud_onda_termica]]^3. Si este producto es del orden de la unidad, las ondas térmicas empiezan a solaparse de forma importante.

## Sustitución numérica
La escala térmica vale aproximadamente [[constante_boltzmann]][[temperatura]] = 1,38 x 10^-23 x 1,20 x 10^-7 J, es decir 1,66 x 10^-30 J. La diferencia energética relevante es [[energia]] - [[potencial_quimico]] = 5,0 x 10^-31 J. La razón entre ambas magnitudes es aproximadamente 0,30. La exponencial asociada es de orden 1,35, por lo que la [[ocupacion_media]] resulta cercana a 1/(1,35 - 1), es decir aproximadamente 2,9 bosones.

Para la [[longitud_onda_termica]], el cálculo da una escala del orden de 2 x 10^-7 m. Entonces [[longitud_onda_termica]]^3 es del orden de 8 x 10^-21 m^3. Al multiplicar por [[densidad_particulas]], el producto resulta cercano a 0,8, lo que indica cercanía al régimen degenerado.

## Validación dimensional
En la ocupación Bose-Einstein, [[energia]], [[potencial_quimico]] y [[constante_boltzmann]][[temperatura]] tienen dimensión de energía, así que la razón usada en la exponencial es adimensional. Por eso la [[ocupacion_media]] queda sin unidad: cuenta número medio de partículas. En la [[longitud_onda_termica]], [[constante_planck]] aporta unidad de acción y el denominador combina [[masa_particula]] con energía térmica; el resultado final tiene dimensión de longitud. Finalmente, [[densidad_particulas]] tiene unidad m^-3 y [[longitud_onda_termica]]^3 tiene unidad m^3, así que el producto de degeneración es adimensional.

## Interpretación física
El resultado [[ocupacion_media]] cercano a 3 significa que el estado no está apenas vacío: varios bosones pueden ocuparlo de media porque la diferencia entre [[energia]] y [[potencial_quimico]] es menor que la escala térmica. No hay contradicción con una ocupación mayor que 1, ya que los bosones no obedecen exclusión de Pauli. Además, el producto de degeneración próximo a la unidad indica que la nube se encuentra cerca de un régimen donde la descripción clásica pierde fuerza. Físicamente, bajar más la [[temperatura]] aumentaría la [[longitud_onda_termica]] y favorecería el solapamiento cuántico; subir la [[energia]] del estado reduciría su población; acercar el [[potencial_quimico]] al nivel bajo aumentaría la acumulación.

# Ejemplo de aplicación real
## Contexto
En un laboratorio de gases ultrafríos se enfrían átomos bosónicos para observar cuándo dejan de comportarse como una nube clásica. Los investigadores no miran solo la velocidad media: estiman [[temperatura]], [[densidad_particulas]] y [[longitud_onda_termica]] para saber si las ondas cuánticas de partículas distintas empiezan a solaparse. También analizan la distribución de [[ocupacion_media]] entre estados de distinta [[energia]] para detectar acumulación en los niveles bajos.

## Estimación física
Supón una nube con [[temperatura]] de 200 nK y [[masa_particula]] comparable a la de rubidio. La [[longitud_onda_termica]] será del orden de 10^-7 m, una escala enorme para una partícula atómica. Si la separación media entre partículas también está en esa escala, entonces [[densidad_particulas]][[longitud_onda_termica]]^3 se acerca a 1. Esa estimación no prueba por sí sola condensación perfecta, pero sí sitúa el experimento en el borde donde la estadística bosónica domina. Una variación modesta de [[temperatura]] puede cambiar mucho la proximidad a [[densidad_critica]].

## Interpretación
La aplicación real muestra por qué los bosones son especiales: al enfriar, no solo disminuye la agitación térmica, también crece la relevancia de compartir estados. La [[ocupacion_media]] de niveles bajos aumenta porque [[energia]], [[potencial_quimico]] y [[temperatura]] reorganizan el peso estadístico. Si la nube se acerca a [[densidad_critica]], el sistema deja de ser una colección clásica de trayectorias independientes y se convierte en un objeto colectivo. Esa transición de lectura, de partículas separadas a estado compartido, es el corazón físico del leaf.

