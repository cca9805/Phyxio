## Errores conceptuales


### Error 1: Pensar que sin brillo no hay radiación

**Por qué parece correcto**
El ojo humano solo percibe una parte pequeña del espectro. Como una pared templada no brilla, parece que su [[potencia_radiada]] es nula.

**Por qué es incorrecto**
Todo cuerpo con [[temperatura_absoluta]] emite radiación térmica. A temperaturas cotidianas, la emisión suele estar en infrarrojo.

**Señal de detección**
El razonamiento afirma que solo una resistencia al rojo o una llama emiten.

**Corrección conceptual**
La visibilidad no decide si existe radiación. Decide si nuestro ojo puede detectarla.

**Mini-ejemplo de contraste**
Una mesa a 295 K no brilla, pero contribuye al intercambio radiativo con una persona cercana.


### Error 2: Creer que la radiación necesita aire

**Por qué parece correcto**
En calor se estudian conducción, convección y radiación juntas, y la convección sí necesita un fluido.

**Por qué es incorrecto**
La radiación térmica es electromagnética y puede propagarse en el vacío.

**Señal de detección**
El alumno dice que en una cámara de vacío la [[potencia_radiada]] desaparece.

**Corrección conceptual**
En vacío se elimina la convección externa, no la emisión radiativa.

**Mini-ejemplo de contraste**
El Sol calienta la Tierra a través del espacio.

## Errores de modelo


### Error 3: Usar emisión bruta cuando se pide intercambio neto

**Por qué parece correcto**
La [[potencia_radiada]] es la magnitud más directa y parece responder a cualquier pregunta de radiación.

**Por qué es incorrecto**
Si existe [[temperatura_ambiente]], el cuerpo también recibe radiación del entorno. La magnitud adecuada suele ser [[potencia_neta]].

**Señal de detección**
El enunciado da [[temperatura_ambiente]], pero la resolución no la usa.

**Corrección conceptual**
Para balance con entorno, usa la relación neta.

{{f:radiacion_neta}}

**Mini-ejemplo de contraste**
Un cuerpo a 310 K en una sala a 300 K emite bastante, pero su pérdida neta es mucho menor que su emisión bruta.


### Error 4: Tomar siempre [[emisividad]] igual a uno

**Por qué parece correcto**
Muchos ejercicios iniciales hablan de cuerpo negro o emisor ideal.

**Por qué es incorrecto**
Las superficies reales tienen [[emisividad]] propia. Un metal pulido y una pintura mate no se comportan igual.

**Señal de detección**
El cálculo ignora datos de material o acabado superficial.

**Corrección conceptual**
Solo usa [[emisividad]] igual a uno si el enunciado declara cuerpo negro o emisor ideal.

**Mini-ejemplo de contraste**
Dos placas a la misma [[temperatura_absoluta]] y con igual [[area_superficie]] pueden emitir potencias distintas.

## Errores matemáticos


### Error 5: Sustituir grados Celsius

**Por qué parece correcto**
La escala Celsius es cotidiana y parece natural usar 25 para temperatura ambiente.

**Por qué es incorrecto**
Las fórmulas radiativas usan [[temperatura_absoluta]] en kelvin. Elevar 25 en lugar de 298 altera totalmente el resultado.

**Señal de detección**
Aparece una [[potencia_radiada]] absurdamente pequeña para una superficie templada.

**Corrección conceptual**
Convierte siempre a kelvin antes de usar T⁴.

{{f:ley_stefan_boltzmann}}

**Mini-ejemplo de contraste**
25 °C no es 25 K, sino aproximadamente 298 K.


### Error 6: Restar temperaturas en vez de cuartas potencias

**Por qué parece correcto**
En conducción se usan diferencias de temperatura, así que parece natural copiar esa estructura.

**Por qué es incorrecto**
La radiación neta compara emisiones, y cada emisión depende de la cuarta potencia.

**Señal de detección**
La solución usa una resta simple entre [[temperatura_absoluta]] y [[temperatura_ambiente]].

**Corrección conceptual**
Primero se calcula la cuarta potencia de cada temperatura absoluta y después se resta.

**Mini-ejemplo de contraste**
Entre 600 K y 300 K, la emisión no se duplica: con lo demás constante, se multiplica por 16.

## Errores de interpretación


### Error 7: Confundir potencia con energía total

**Por qué parece correcto**
La frase “calor emitido” suena a cantidad acumulada.

**Por qué es incorrecto**
[[potencia_radiada]] y [[potencia_neta]] son ritmos de transferencia, no energía acumulada.

**Señal de detección**
El resultado se interpreta en joules cuando la unidad calculada es W.

**Corrección conceptual**
Para obtener energía total hace falta un intervalo de tiempo.

**Mini-ejemplo de contraste**
Una placa puede emitir 100 W durante 10 s o durante 1 h; la potencia es la misma, la energía no.


### Error 8: Tratar una [[potencia_neta]] negativa como imposible

**Por qué parece correcto**
La emisión bruta no puede ser negativa, así que el signo parece un fallo.

**Por qué es incorrecto**
[[potencia_neta]] es un balance. Un valor negativo puede indicar absorción neta desde el entorno.

**Señal de detección**
El alumno toma valor absoluto sin explicar el sentido físico.

**Corrección conceptual**
Interpreta el signo según el convenio: pérdida o ganancia neta.

**Mini-ejemplo de contraste**
Un objeto frío dentro de un horno puede recibir más radiación de la que emite.

## Regla de autocontrol rápido

Antes de aceptar un resultado, comprueba: temperaturas en K, 0 ≤ [[emisividad]] ≤ 1, [[area_superficie]] en m² y unidad final W o W/m² según la magnitud pedida.