const e=`# Modelos de Intensidad y Nivel Sonoro

## Modelo ideal

El **modelo de fuente puntual en campo libre** es el paradigma fundamental para describir la intensidad sonora. Este modelo simplifica cualquier emisor sonoro como un punto geometrico infinitesimal que irradia energia acustica de manera perfectamente simetrica en todas las direcciones del espacio tridimensional.

En este modelo, la **potencia acustica** [[P]] total emitida por la fuente se conserva y se distribuye uniformemente sobre la superficie de esferas concentricas cuyo radio [[r]] aumenta con la propagacion. La **intensidad sonora** [[I]] resultante en cualquier punto del espacio es la potencia dividida por el area de la esfera que pasa por ese punto.

La magnitud central [[I]] representa la **densidad superficial de potencia** fluyendo radialmente hacia el exterior. El modelo supone que el medio es homogeneo (misma densidad y temperatura en todas partes) e isotropo (mismas propiedades en todas direcciones), sin que existan obstaculos que reflejen, absorban o difracten la energia sonora.

## Hipotesis

1. **Fuente puntual omnidireccional**: La fuente se aproxima como un punto sin dimension espacial, emitiendo identica potencia en todos los angulos solidos. Si se viola: cerca de una fuente de tamano finito, la intensidad real difiere significativamente de la predicha, especialmente en direcciones perpendiculares al eje principal de emision.

2. **Propagacion esferica libre**: La onda se expande en espacio tridimensional infinito sin fronteras. Si se viola: en habitaciones o recintos cerrados, las reflexiones en paredes crean un campo difuso donde la ley del inverso del cuadrado no se cumple.

3. **Medio homogeneo e isotropo**: El aire tiene densidad y temperatura uniformes en toda la region de interes. Si se viola: variaciones de temperatura (gradientes termicos) o viento causan refraccion y curvatura en los rayos sonoros, desviando la energia de la trayectoria radial ideal.

4. **Campo lejano**: El observador esta a una distancia [[r]] mucho mayor que la dimension caracteristica de la fuente y que la longitud de onda dominante. Si se viola: en el campo cercano, la distribucion de intensidad es compleja y depende de la geometria especifica del emisor; la aproximacion esferica falla.

5. **Sin absorcion atmosferica**: El medio no disipa energia mecanica en forma de calor. Si se viola: a grandes distancias o altas frecuencias, la intensidad decae mas rapidamente que la predicha por la ley geometrica debido a la absorcion molecular del aire.

## Dominio de validez cuantitativo

El modelo es cuantitativamente confiable cuando se cumple la desigualdad:

\`r > max(3d, 3lambda)\`

Donde d es el diametro caracteristico de la fuente y lambda es la longitud de onda del sonido a la frecuencia dominante. Tipicamente, para sonido audible alrededor de 1000 Hz, esto significa distancias mayores a aproximadamente 1 metro para fuentes pequenas.

Rango tipico de intensidad donde el modelo es util: desde el **umbral de audicion** (10⁻¹² W/m², equivalente a 0 dB) hasta el **umbral de dolor** (aproximadamente 1 W/m², equivalente a 120 dB). Fuera de este rango, la percepcion o los efectos no lineales del aire invalidan las aplicaciones practicas.

Orden de magnitud de potencias tipicas donde el modelo aplica:

- Susurro: P ≈ 10⁻⁹ W
- Conversacion: P ≈ 10⁻⁵ W
- Altavoz domestico: P ≈ 0.1 a 10 W
- Orquesta sinfonica: P ≈ 10 W
- Motor a reaccion: P ≈ 10⁵ W

## Señales de fallo del modelo

1. **Intensidad medida mayor que la calculada**: Si un sonometro registra valores significativamente mayores que los predichos por el modelo de fuente puntual a distancia [[r]] conocida, indica la presencia de **reflexiones** constructivas (interiores reverberantes) o que la fuente tiene **directividad** significativa apuntando hacia el receptor.

2. **Desviacion de la pendiente logaritmica**: Al graficar L versus log(r), el modelo predice una pendiente de -20 dB por decada de distancia. Una pendiente menos negativa (ej: -10 dB/decada) indica **campo de linea fuente** o presencia de **reverberacion** dominante.

3. **Variacion con direccion a distancia fija**: En una esfera de radio constante centrada en la fuente, el modelo predice intensidad uniforme. Variaciones superiores al 20% entre distintas direcciones revelan **no isotropia** de la fuente real.

4. **Atenuacion excesiva a alta frecuencia**: Si la intensidad de componentes de alta frecuencia cae mas rapido que la de baja frecuencia al aumentar [[r]], la **absorcion atmosferica** esta operando significativamente.

5. **Distancia critica**: Cuando [[r]] es comparable al tamano de la fuente, la intensidad real puede ser tanto el doble como la mitad de la predicha, dependiendo de la posicion relativa al eje de emision.

## Modelo extendido o alternativo

El **modelo de campo cercano (near field)** extiende la descripcion a distancias donde la fuente no puede aproximarse como puntual. En esta region, la intensidad depende de la **geometria especifica** del emisor. Por ejemplo, un piston circular radiante presenta un campo cercano complejo con oscilaciones de intensidad (lobulos) antes de estabilizarse en el patron esferico lejano.

Para recintos cerrados, el **modelo de campo difuso reverberante** reemplaza la propagacion libre. Este modelo divide el campo sonoro en dos componentes: el **campo directo** (que sigue la ley del inverso del cuadrado) y el **campo reverberante** (distribuido aproximadamente uniformemente). La transicion ocurre aproximadamente a la **distancia critica**:

La distancia critica se estima con una expresion proporcional a la raiz cuadrada del volumen dividido por el tiempo de reverberacion.

Donde Q es el factor de directividad de la fuente, V el volumen del recinto, y T60 el tiempo de reverberacion. Para distancias mucho menores que la distancia critica domina el campo directo; para distancias mucho mayores, el campo reverberante.

Para fuentes direccionales, el **modelo de fuente con directividad** introduce el **factor de directividad** Q, modificando la intensidad efectiva:

La directividad multiplica la potencia efectiva irradiada hacia el receptor.

Con Q igual a 1 para fuente omnidireccional, Q igual a 2 para fuente radiando en semiespacio (ej: sobre suelo rigido), y Q mucho mayor que 1 para fuentes altamente direccionales como bocinas.

## Comparacion operativa

| Caracteristica | Modelo ideal (campo libre) | Modelo extendido (campo reverberante) |
|---|---|---|
| **Geometria** | Espacio infinito abierto | Recinto cerrado con reflexiones |
| **Dependencia con r** | I ∝ r⁻² (esferica) | I ≈ constante en campo reverberante |
| **Precision** | Alta en campo lejano libre | Necesaria para interiores |
| **Complejidad** | Baja (una formula) | Alta (suma de campos directo y reverberante) |
| **Parametros extra** | Ninguno | T60, V, coeficientes de absorcion |
| **Aplicacion tipica** | Exteriores, espacios abiertos | Salas de concierto, auditorios, fabricas |
| **Limite de validez** | r > 3d, espacio libre | V > 0, T60 finito |

**Transicion explicita**: Se recomienda usar el modelo ideal cuando el tiempo de reverberacion T60 es menor que el tiempo de viaje directo desde fuente a receptor (campo directo dominante). Cuando T60 > 5 veces el tiempo de viaje directo, el modelo reverberante es esencial para precision cuantitativa.
`;export{e as default};
