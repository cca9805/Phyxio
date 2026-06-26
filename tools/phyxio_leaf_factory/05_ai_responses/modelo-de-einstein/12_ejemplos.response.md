# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: modelo-de-einstein
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen

## Enunciado

Un sólido aislante se aproxima mediante el modelo de Einstein. Su [[temperatura_einstein]] es 320 K. Se calienta una muestra de un mol hasta una [[temperatura]] de 160 K a volumen constante. Calcula el [[parametro_reducido]] e interpreta el valor del [[calor_especifico_molar_volumen_constante]] respecto al límite clásico. Después estima qué ocurriría si la misma muestra estuviera a 640 K. El objetivo no es solo obtener números, sino responder cómo depende el calor específico molar de la comparación entre [[temperatura]] y [[temperatura_einstein]].

## Datos

- [[temperatura_einstein]]: 320 K
- Primera [[temperatura]]: 160 K
- Segunda [[temperatura]]: 640 K
- [[constante_gases]]: 8,314 J mol⁻¹ K⁻¹
- Modelo: osciladores cuánticos idénticos a volumen constante
- Magnitud buscada: [[calor_especifico_molar_volumen_constante]]
- Magnitud auxiliar: [[parametro_reducido]]

## Definición del sistema

El sistema es un mol de sólido cristalino idealizado. No se analiza la conducción de calor dentro de la muestra ni la dilatación, porque la magnitud buscada es el [[calor_especifico_molar_volumen_constante]]. Cada átomo se representa como parte de un conjunto de osciladores armónicos con una frecuencia única, codificada por la [[temperatura_einstein]]. La muestra se considera en equilibrio térmico, de modo que una sola [[temperatura]] describe todos los osciladores. Esta definición separa dos niveles: el nivel microscópico, donde la energía vibracional está cuantizada, y el nivel macroscópico, donde se mide cuánta energía por mol y por kelvin puede absorber el sólido.

## Modelo físico

Usamos el modelo de Einstein porque el enunciado proporciona una única [[temperatura_einstein]] y pide interpretar el efecto de cambiar [[temperatura]]. La variable que organiza el problema es [[parametro_reducido]], porque condensa la comparación entre escala del material y estado térmico. Cuando [[parametro_reducido]] es grande, el salto cuántico resulta caro y el [[calor_especifico_molar_volumen_constante]] se reduce. Cuando [[parametro_reducido]] es pequeño, muchos niveles vibracionales participan y el resultado se acerca al límite clásico. La [[energia_interna]] no es la magnitud final, aunque ayuda a recordar que el calor específico mide una variación de energía, no la energía total almacenada.

## Justificación del modelo

El modelo es adecuado para un ejercicio de primer análisis porque no hay datos sobre ramas acústicas, electrones libres, transición de fase ni anisotropía. La muestra se trata como aislante y armónica. Si el problema diera una curva experimental con ley cúbica a baja [[temperatura]], el modelo de Debye sería preferible; si diera un pico de calor específico, habría que sospechar una transición o contribución adicional. Aquí la lectura buscada es interna al leaf: ver cómo la misma [[temperatura_einstein]] produce respuestas distintas cuando la [[temperatura]] cambia. Además, trabajar con un mol justifica el uso de [[constante_gases]] en vez de [[numero_atomos]] y [[constante_boltzmann]].

## Resolución simbólica

Primero se calcula el parámetro de régimen:

{{f:parametro_reducido_einstein}}

Para la primera situación, la comparación entre [[temperatura_einstein]] y [[temperatura]] fija si el sólido está por debajo o por encima de su escala vibracional. Después se aplica la expresión molar:

{{f:calor_especifico_molar_einstein}}

La interpretación del resultado se hace comparándolo con el límite clásico molar, cercano a 3R. Para la segunda [[temperatura]], se repite el cálculo del [[parametro_reducido]] y se evalúa de nuevo el mismo factor funcional. No se usa la fórmula de [[capacidad_calorifica_volumen_constante]] total porque el sistema se ha definido por un mol, no por [[numero_atomos]]. Tampoco necesitamos calcular [[energia_interna]], aunque su fórmula explica el origen microscópico de la dependencia térmica.

## Sustitución numérica

Para 160 K, el [[parametro_reducido]] vale aproximadamente 320/160, es decir, 2. El factor de Einstein asociado da un [[calor_especifico_molar_volumen_constante]] claramente menor que 3R; usando la expresión completa resulta alrededor de 18 J mol⁻¹ K⁻¹, mientras 3R es aproximadamente 24,9 J mol⁻¹ K⁻¹. Para 640 K, el [[parametro_reducido]] vale 0,5. En ese caso el factor se acerca mucho más al límite clásico y el [[calor_especifico_molar_volumen_constante]] resulta cercano a 24 J mol⁻¹ K⁻¹. La subida no es una simple proporcionalidad con [[temperatura]], sino una saturación progresiva.

## Validación dimensional

El [[parametro_reducido]] no tiene dimensión porque es el cociente entre dos temperaturas absolutas. El [[calor_especifico_molar_volumen_constante]] debe quedar en J mol⁻¹ K⁻¹, la misma unidad de [[constante_gases]]. Los factores exponenciales y potencias del [[parametro_reducido]] son adimensionales, por lo que no alteran la unidad final. Esta validación descarta errores como usar Celsius, mezclar [[capacidad_calorifica_volumen_constante]] total con calor específico molar o introducir [[numero_atomos]] en un cálculo de un mol.

## Interpretación física

A 160 K, la [[temperatura]] está por debajo de la [[temperatura_einstein]], por lo que el sólido todavía no tiene todos sus osciladores térmicamente activos. El [[parametro_reducido]] cercano a 2 indica que la energía térmica disponible compite con saltos cuánticos apreciables. Por eso el [[calor_especifico_molar_volumen_constante]] no alcanza el valor clásico. A 640 K, la [[temperatura]] supera claramente la escala de Einstein y muchos niveles vibracionales se pueblan; el resultado se aproxima a 3R. Físicamente, el modelo dice que calentar no solo aumenta energía, sino que desbloquea grados de libertad vibracionales. La dependencia esencial está en la relación entre [[temperatura]] y [[temperatura_einstein]], no en la [[temperatura]] aislada.

# Ejemplo de aplicación real

## Contexto

En un laboratorio de materiales se mide el calor específico de un cristal aislante para decidir si su respuesta térmica a temperatura ambiente puede aproximarse por el límite clásico. El fabricante informa de una [[temperatura_einstein]] aproximada de 250 K. La muestra opera entre 80 K y 500 K en un sensor criogénico. La pregunta práctica es si puede usarse un valor constante de [[calor_especifico_molar_volumen_constante]] o si hace falta corregirlo con el modelo de Einstein.

## Estimación física

A 300 K, el [[parametro_reducido]] es del orden de 250/300, aproximadamente 0,8. Ese valor no es mucho menor que 1, así que no estamos en el límite clásico perfecto. Una estimación razonable espera un [[calor_especifico_molar_volumen_constante]] algo inferior a 3R, pero ya bastante cercano. A 80 K, el cociente sería del orden de 3, y la reducción sería mucho más marcada. A 500 K, el cociente cae a 0,5, por lo que el valor se aproxima más al límite alto. La escala de variación no es lineal: el tramo frío exige más cuidado que el tramo caliente.

## Interpretación

Para el diseño del sensor, el modelo permite decidir dónde el uso de una capacidad constante sería una mala aproximación. Cerca de 80 K, la [[capacidad_calorifica_volumen_constante]] total de la pieza dependerá fuertemente de [[temperatura]], así que una estimación clásica sobrestima la energía necesaria para calentarla. Cerca de 500 K, la diferencia se reduce y el cálculo clásico puede ser aceptable si no se necesita gran precisión. La [[temperatura_einstein]] actúa como frontera suave entre dos mundos: por debajo, la cuantización manda; por encima, el sólido se comporta cada vez más como un almacén clásico de energía vibracional.

