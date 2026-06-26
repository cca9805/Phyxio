# Aplicaciones

## 1. Diagnóstico térmico de edificios

Variable dominante: [[flujo_radiativo]]
Límite de validez: 250 K ≤ [[temperatura_absoluta]] ≤ 330 K y [[emisividad]] aproximadamente uniforme

Las cámaras térmicas de edificios estiman diferencias de [[temperatura_absoluta]] a partir del [[flujo_radiativo]] infrarrojo. Una fachada mal aislada puede mostrar zonas más calientes en invierno porque conducen energía desde el interior y emiten más hacia el exterior. La [[emisividad]] de pintura, ladrillo, vidrio o metal cambia la lectura. Lo que se mide es radiación, no temperatura directa. Para una zona concreta, el [[flujo_radiativo]] permite comparar sin depender de la [[area_superficie]] total. Para estimar pérdidas de una pared completa, se necesita multiplicar por la superficie efectiva.

Esta aplicación predice dónde se pierde energía, pero también restringe interpretaciones demasiado rápidas. Una mancha brillante en una imagen térmica puede indicar una fuga real, una [[emisividad]] distinta o una reflexión de otra fuente. La [[temperatura_ambiente]] radiativa del cielo o de edificios cercanos puede alterar la [[potencia_neta]], especialmente en noches despejadas. Por eso una inspección seria combina imagen, material, ángulo de observación y condiciones ambientales. El modelo de radiación térmica actúa como linterna conceptual: ilumina qué parte de la señal pertenece a temperatura, qué parte a superficie y qué parte al entorno.

## 2. Hornos, resistencias y superficies incandescentes

Variable dominante: [[potencia_radiada]]
Límite de validez: [[temperatura_absoluta]] > 600 K, [[area_superficie]] definida y 0 ≤ [[emisividad]] ≤ 1

En hornos, resistencias eléctricas y placas calefactoras, la radiación térmica puede dominar el intercambio energético. La [[potencia_radiada]] permite estimar cuánto emite una superficie caliente hacia piezas más frías o paredes del recinto. La [[temperatura_absoluta]] es decisiva: un pequeño aumento de temperatura puede multiplicar la emisión. La [[area_superficie]] marca cuánta zona emisora participa, y la [[emisividad]] depende de oxidación, rugosidad o recubrimiento.

Esta aplicación mide o predice potencia de calentamiento, pérdidas hacia paredes y rapidez con la que una pieza recibe energía. También permite comparar tratamientos superficiales. Una resistencia oscura puede transferir más radiación útil que una superficie brillante a igual [[temperatura_absoluta]]. El límite aparece cuando la geometría del horno no permite suponer que toda superficie ve a toda superficie, o cuando hay sombras radiativas. En hornos con aire en movimiento, la [[potencia_neta]] radiativa debe combinarse con convección. En hornos de alta precisión, la [[emisividad]] puede variar con temperatura y longitud de onda, de modo que el modelo gris es solo el primer piso de la torre.

## 3. Control térmico de satélites

Variable dominante: [[potencia_neta]]
Límite de validez: vacío espacial, superficies caracterizadas y radiación dominante frente a convección externa nula

En satélites, la convección externa desaparece prácticamente, así que el control térmico depende mucho de la radiación. Una superficie emite según su [[temperatura_absoluta]], [[area_superficie]] y [[emisividad]], pero también absorbe radiación solar, terrestre o interna. La [[potencia_neta]] decide si un panel gana o pierde energía. Los recubrimientos se eligen para controlar [[emisividad]] y absorción.

Esta aplicación predice equilibrio térmico, riesgos de sobrecalentamiento y necesidades de radiadores. Un satélite puede alternar entre iluminación solar y sombra, así que su [[temperatura_ambiente]] radiativa efectiva cambia con la órbita. Un radiador con gran [[area_superficie]] y [[emisividad]] alta puede expulsar energía al espacio, mientras componentes electrónicos sensibles se aíslan para no sufrir oscilaciones térmicas extremas. El modelo falla si se ignoran orientación, eclipses, reflexión planetaria, conducción interna o propiedades ópticas dependientes de longitud de onda. Aun así, la pregunta base sigue siendo la misma: cuánto emite, cuánto recibe y qué balance neto queda.

## 4. Termometría infrarroja sin contacto

Variable dominante: [[emisividad]]
Límite de validez: 0 < [[emisividad]] ≤ 1, superficie visible y entorno radiativo controlado

Un termómetro infrarrojo estima [[temperatura_absoluta]] a partir de radiación recibida. Para convertir señal en temperatura necesita una [[emisividad]] asumida o configurada. Si el valor elegido no corresponde al material, el resultado puede ser muy engañoso. Una piel humana, una pared mate y un metal pulido no se leen igual. Esta aplicación mide radiación para predecir temperatura, invirtiendo el razonamiento habitual de la [[potencia_radiada]].

También debe considerarse la [[temperatura_ambiente]], porque superficies reflectantes pueden recoger radiación de objetos cercanos. En mantenimiento eléctrico, una conexión caliente puede indicar riesgo; en medicina, una lectura cutánea depende de distancia, piel, sudor y entorno; en cocina, una sartén brillante puede engañar al sensor. El límite de validez no está solo en la fórmula, sino en la escena de medida. La [[area_superficie]] visible debe llenar adecuadamente el campo del sensor, y la [[emisividad]] debe estar ajustada. Sin esa precaución, el número puede parecer quirúrgico y ser, en realidad, una brújula al lado de un imán.

## 5. Enfriamiento radiativo nocturno

Variable dominante: [[temperatura_ambiente]]
Límite de validez: cielo despejado, viento débil y [[temperatura_ambiente]] radiativa menor que la del suelo

En noches despejadas, coches, tejados o cultivos pueden enfriarse radiando hacia un cielo con [[temperatura_ambiente]] radiativa muy baja. Aunque el aire no esté bajo cero, la [[potencia_neta]] puede favorecer pérdida energética desde la superficie. La [[emisividad]] alta aumenta esa pérdida, y la [[area_superficie]] expuesta determina la potencia total. Esta aplicación explica rocío, escarcha y enfriamiento de cubiertas.

También se usa en materiales diseñados para refrigeración pasiva. Un recubrimiento puede buscar alta [[emisividad]] en el infrarrojo para emitir energía hacia el cielo y, a la vez, baja absorción solar durante el día. En agricultura, comprender la radiación nocturna ayuda a anticipar heladas en hojas o frutos aunque el termómetro del aire no parezca alarmante. El modelo falla si hay nubes, viento intenso o humedad elevada, porque cambian la radiación entrante y añaden convección. La lectura correcta no es que “el frío baja del cielo”, sino que la superficie pierde energía neta hacia un entorno radiativo eficazmente más frío.