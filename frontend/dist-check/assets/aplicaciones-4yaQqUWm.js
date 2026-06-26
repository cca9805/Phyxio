const e=`# Aplicaciones de Condicion de estacionariedad

## 1. Cuerdas de instrumentos

Variable dominante: [[L]].

Límite de validez: cuerda ideal con extremos fijos, tension uniforme y amortiguamiento bajo.

En instrumentos de cuerda, la longitud efectiva [[L]] decide que modos caben entre el puente y el punto de apoyo. Al pisar una cuerda se reduce [[L]], por lo que suben las frecuencias permitidas. El modo fundamental y sus armonicos aparecen porque [[n]] toma valores enteros. La condicion de estacionariedad explica por que no cualquier frecuencia vibra con la misma fuerza.

Esta aplicacion conecta geometria y sonido. La fuente puede excitar muchas frecuencias, pero la cuerda refuerza las que coinciden con [[f_n]]. El resultado audible depende de los modos permitidos y de como se excitan.

En la practica, el instrumentista cambia [[L]] con los dedos y ajusta [[v]] mediante tension. La condicion modal explica por que dos cuerdas de igual longitud pueden sonar distinto si el medio cambia.

## 2. Tubos sonoros

Variable dominante: [[lambda]].

Límite de validez: usar la condicion correcta para extremos abiertos o cerrados; el modelo de cuerda fija no se copia directamente.

En flautas, organos y tubos de laboratorio, la columna de aire sostiene modos estacionarios. La longitud de onda [[lambda]] debe ser compatible con las condiciones en los extremos. Un tubo abierto no impone lo mismo que uno cerrado, pero la idea central se mantiene: la geometria de la cavidad selecciona una familia discreta.

La aplicacion muestra por que cambiar la longitud del tubo cambia el tono. La rapidez [[v]] del sonido convierte esa condicion espacial en frecuencias audibles.

Tambien permite entender correcciones de extremo. Si el extremo abierto no actua exactamente en el borde geometrico, la longitud efectiva cambia y con ella cambia [[f_n]].

## 3. Resonadores acusticos

Variable dominante: [[f_n]].

Límite de validez: cavidad aproximadamente uniforme y perdidas moderadas; con absorcion fuerte el modo se ensancha.

Los resonadores acusticos se diseñan para responder con fuerza cerca de ciertas frecuencias. La frecuencia modal [[f_n]] indica donde el sistema acumula energia de forma eficiente. Si la excitacion cae entre modos, la respuesta suele ser menor. Por eso salas, cajas de instrumentos y cavidades tecnicas se analizan con condiciones de estacionariedad.

La condicion no basta para predecir amplitud exacta, pero si identifica frecuencias candidatas. Despues se añaden perdidas, acoplamiento y geometria real.

En diseño acustico, esta primera lista de candidatos evita probar frecuencias al azar y ayuda a separar modo permitido de modo fuertemente excitado.

## 4. Microondas en cavidades

Variable dominante: [[n]].

Límite de validez: la cavidad electromagnetica requiere condiciones de campo, no desplazamiento mecanico de cuerda.

Aunque este leaf se formula con ondas de cuerda, la idea de modo entero aparece tambien en cavidades electromagneticas. El numero [[n]] representa una seleccion discreta compatible con fronteras conductoras. La geometria decide que patrones de campo pueden sostenerse.

La aplicacion sirve para transferir la idea, no la formula literal. En microondas se sustituyen nodos de desplazamiento por condiciones de campo electrico y magnetico.

Asi se ve que la estacionariedad es una estructura de frontera. Aunque cambie la magnitud que oscila, el modo sigue siendo una compatibilidad espacial discreta.

## 5. Vibraciones en estructuras

Variable dominante: [[v]].

Límite de validez: estructura aproximable como sistema lineal; daños o plasticidad cambian las frecuencias modales.

Vigas, puentes y placas tienen modos propios. La rapidez efectiva [[v]] depende de material y geometria, y junto con dimensiones como [[L]] determina frecuencias modales. Si una excitacion externa coincide con una de ellas, puede aparecer resonancia.

La condicion de estacionariedad ayuda a entender por que ciertas frecuencias son peligrosas. No todas las vibraciones se amplifican igual: el modo debe encajar con la estructura.

En mantenimiento, comparar frecuencias medidas con valores esperados puede revelar cambios de rigidez o daño incipiente antes de una deformacion visible.

## 6. Laboratorio escolar con cuerda vibrante

Variable dominante: [[n]].

Límite de validez: amplitud pequeña y extremos bien fijados; si la cuerda se afloja, el patron se desplaza.

La cuerda vibrante permite ver nodos y vientres. Al aumentar la frecuencia de excitacion aparecen modos de orden mayor. Contar vientres permite identificar [[n]] y comprobar si la condicion espacial coincide con [[L]] y [[lambda]].

Esta aplicacion es especialmente didactica porque separa tres hechos: la cuerda sigue moviendose, el patron queda fijo y solo algunos modos son estables.

Tambien obliga a contar nodos y vientres, no solo a mirar una curva bonita. Esa lectura conecta directamente con la variable discreta [[n]].

## 7. Diseño de cavidades de medida

Variable dominante: [[L]].

Límite de validez: geometria estable; cambios termicos o mecanicos alteran la longitud efectiva.

En sensores y cavidades de calibracion, la longitud [[L]] se usa para fijar frecuencias modales conocidas. Medir un cambio en [[f_n]] puede revelar cambios de velocidad, temperatura o geometria. La condicion de estacionariedad convierte una medicion de frecuencia en informacion sobre el sistema.

La lectura practica es que una frontera mal definida produce incertidumbre modal. Por eso el diseño cuida soportes, materiales y estabilidad dimensional.

Si la cavidad se dilata por temperatura, [[L]] cambia y la frecuencia medida se desplaza. Ese desplazamiento puede ser error o señal util, segun el objetivo del sensor.
`;export{e as default};
