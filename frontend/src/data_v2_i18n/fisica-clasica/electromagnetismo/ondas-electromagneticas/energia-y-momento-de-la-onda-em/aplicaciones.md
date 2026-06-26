# Aplicaciones

## 1. Paneles solares y presupuesto de potencia

Un panel solar convierte parte de la intensidad media [[intensidad_media_de_poynting]] de la radiacion incidente en potencia electrica util. La lectura fisica empieza antes del rendimiento: primero hay que saber cuanta potencia electromagnetica llega realmente al area efectiva [[area_iluminada]]. Solo despues entran eficiencia, temperatura y electronica de conversion.

Variable dominante: [[intensidad_media_de_poynting]].

Límite de validez: la intensidad debe ser aproximadamente uniforme sobre el panel y el area usada debe ser el area proyectada frente al Sol. Si el panel esta inclinado, su [[potencia_electromagnetica_incidente]] se reduce aunque la radiacion externa no cambie.

Esta aplicacion obliga a distinguir intensidad local y potencia total. Dos paneles bajo la misma luz pueden tener la misma [[intensidad_media_de_poynting]], pero entregar potencias distintas por tener areas y rendimientos distintos. El leaf aporta la primera capa del calculo: energia electromagnetica que cruza una superficie antes de transformarse.

En diagnostico energetico, esta lectura evita atribuir un bajo rendimiento al campo incidente cuando el problema real esta en orientacion, suciedad, sombreado o electronica. Si [[intensidad_media_de_poynting]] es razonable pero [[potencia_electromagnetica_incidente]] resulta baja, la primera sospecha debe caer sobre [[area_iluminada]] efectiva, no sobre la onda.

## 2. Presion de radiacion en velas solares

Una vela solar usa el momento de la radiacion como mecanismo de propulsion. Aunque [[p_rad]] sea muy pequeña, actua de forma continua y no necesita combustible. En grandes superficies ligeras, el empuje acumulado puede modificar trayectorias orbitales durante semanas o meses.

Variable dominante: [[p_rad]].

Límite de validez: el modelo absorbente es solo una primera estimacion. Las velas reales buscan alta reflectividad, orientacion controlada y materiales muy ligeros. Si la reflexion domina, el empuje efectivo cambia y hay que ampliar el modelo.

La aplicacion muestra por que [[densidad_de_momento_electromagnetico]] no es un detalle teorico. El momento transportado por la onda se convierte en impulso mecanico. La intensidad [[intensidad_media_de_poynting]] fija el orden de magnitud del empuje, mientras el area y la masa de la vela determinan si ese empuje produce una aceleracion util.

El interes practico esta en la acumulacion. Un empuje diminuto que seria irrelevante en un laboratorio con rozamiento puede ser decisivo en el espacio, donde actua durante mucho tiempo y sin contacto. Por eso conviene leer [[p_rad]] junto con geometria y masa, no como un numero aislado.

## 3. Seguridad laser y daño termico

En seguridad laser, una intensidad alta puede depositar potencia peligrosa en areas pequeñas. La magnitud [[potencia_electromagnetica_incidente]] permite estimar cuanta potencia entra en un tejido, sensor o recubrimiento. La presion de radiacion suele ser secundaria; el riesgo principal es termico o fotoquimico.

Variable dominante: [[potencia_electromagnetica_incidente]].

Límite de validez: si el campo es tan intenso que ioniza el aire, modifica el material o produce efectos no lineales, el modelo de onda plana clasica deja de ser suficiente. Tambien hay que considerar absorcion espectral, tiempo de exposicion y tamaño del punto iluminado.

El valor didactico es separar dos preguntas que se confunden con facilidad. Una intensidad grande no implica siempre una potencia grande si el area es diminuta, pero si se concentra en tejido sensible puede ser peligrosa. La cadena [[intensidad_media_de_poynting]], [[area_iluminada]] y [[potencia_electromagnetica_incidente]] da la primera estimacion responsable.

Tambien ayuda a comparar exposiciones. Un haz ancho puede tener mayor potencia total y menor riesgo local, mientras un punto pequeño puede tener poca potencia total pero una intensidad peligrosa. La decision de seguridad depende de la magnitud que gobierna el mecanismo de daño.

## 4. Optica de precision y microfuerzas

En espejos de interferometros, microbalanzas y cavidades opticas, el empuje de radiacion puede introducir ruido o desplazamientos medibles. Aunque [[p_rad]] sea pequeña, los sistemas tienen masas reducidas, suspensiones delicadas y tiempos largos de integracion. Por eso el momento electromagnetico no puede ignorarse.

Variable dominante: [[densidad_de_momento_electromagnetico]].

Límite de validez: el modelo absorbente solo sirve para estimar el orden de magnitud. En cavidades y espejos reales importan reflexion, multiples rebotes, fase, estabilidad mecanica y distribucion espacial del haz.

Esta aplicacion conecta el leaf con metrologia. La onda se comporta como portadora simultanea de energia y momento. Un cambio pequeño en [[intensidad_media_de_poynting]] puede no alterar la temperatura de forma notable, pero si acoplarse a una resonancia mecanica o a una lectura interferometrica sensible.

La lectura correcta exige preguntar si el dispositivo mide potencia, desplazamiento o ruido de fuerza. Si mide desplazamiento, [[p_rad]] puede ser mas relevante que [[potencia_electromagnetica_incidente]]. Si mide calentamiento, ocurre lo contrario. El mismo haz puede dominar efectos distintos segun el instrumento.

## 5. Comunicaciones y antenas receptoras

Una antena o receptor no absorbe toda la onda que pasa por una region; capta una fraccion asociada a su area efectiva y a su adaptacion electromagnetica. La intensidad [[intensidad_media_de_poynting]] describe la onda disponible, mientras [[potencia_electromagnetica_incidente]] aproxima la potencia capturada cuando se conoce el area efectiva.

Variable dominante: [[area_iluminada]].

Límite de validez: el modelo de area uniforme falla si el campo varia mucho sobre la antena, si la polarizacion no acopla bien, si hay reflexiones cercanas o si el receptor esta en campo cercano de la fuente.

La aplicacion muestra por que el leaf no es solo optico. En radiofrecuencia, microondas o luz visible, la misma idea de energia por area organiza la recepcion. El receptor responde a potencia total disponible, pero esa potencia nace de una intensidad local de onda.

En diseño de enlaces, separar [[intensidad_media_de_poynting]] de [[potencia_electromagnetica_incidente]] evita confundir cobertura con energia recibida. La cobertura describe el campo disponible en el espacio; la potencia recibida depende de geometria, orientacion, polarizacion y acoplamiento del receptor. El leaf aporta el puente fisico entre ambas lecturas.