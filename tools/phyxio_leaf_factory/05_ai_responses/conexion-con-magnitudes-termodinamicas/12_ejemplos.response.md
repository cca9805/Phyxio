# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: conexion-con-magnitudes-termodinamicas
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un sistema canónico sencillo tiene una [[funcion_particion]] conocida experimentalmente alrededor de 300 K. A [[temperatura]] de 300 K se mide Z = 12, y un ajuste local da [[derivada_log_particion_temperatura]] de 0,006 K⁻¹. Además, al representar [[energia_libre_helmholtz]] frente a [[temperatura]] a [[volumen]] constante se obtiene [[pendiente_energia_libre_temperatura]] de -2,5·10⁻²³ J/K. Se pide estimar [[energia_libre_helmholtz]], [[energia_interna]] y [[entropia]], e interpretar qué indica la variación térmica.

## Datos
- [[temperatura]]: 300 K
- [[funcion_particion]]: 12
- [[constante_boltzmann]]: 1,38·10⁻²³ J/K
- [[derivada_log_particion_temperatura]]: 0,006 K⁻¹
- [[pendiente_energia_libre_temperatura]]: -2,5·10⁻²³ J/K
- [[volumen]]: constante durante la lectura térmica

## Definición del sistema
El sistema se considera un conjunto de microestados discretos en equilibrio con un baño térmico. La [[temperatura]] está impuesta externamente y el [[volumen]] no cambia, por lo que la respuesta térmica se puede leer sin mezclarla con trabajo mecánico. La [[funcion_particion]] resume los pesos estadísticos de los estados accesibles. No se intenta conocer la trayectoria de cada partícula, sino la información colectiva suficiente para reconstruir magnitudes macroscópicas.

## Modelo físico
Usamos el ensamble canónico. La magnitud generadora es [[funcion_particion]], y desde ella se obtiene [[energia_libre_helmholtz]]. Después se leen dos respuestas: [[energia_interna]] mediante la variación de ln Z con [[temperatura]], y [[entropia]] mediante la pendiente de [[energia_libre_helmholtz]] respecto a [[temperatura]]. La [[presion]] no se calcula en este ejemplo porque no se ha proporcionado [[pendiente_energia_libre_volumen]].

## Justificación del modelo
El problema declara una [[temperatura]] definida, un [[volumen]] constante y una [[funcion_particion]] positiva y adimensional. Esas condiciones son las que hacen válido el tratamiento canónico. Además, las pendientes se dan como respuestas locales, lo que evita tener que reconstruir toda la curva de [[energia_libre_helmholtz]]. Si el sistema estuviera fuera de equilibrio o el [[volumen]] cambiara, el significado de [[entropia]] obtenido por pendiente térmica quedaría contaminado por otros procesos.

## Resolución simbólica
Primero convertimos la [[funcion_particion]] en [[energia_libre_helmholtz]].

{{f:energia_libre_desde_particion}}

Luego usamos la sensibilidad térmica del logaritmo de Z para obtener [[energia_interna]].

{{f:energia_interna_desde_particion}}

Por último, usamos la pendiente térmica de la energía libre para estimar [[entropia]].

{{f:entropia_desde_energia_libre}}

La relación de [[presion]] queda fuera del cálculo numérico, pero conceptualmente sería necesaria si se analizara la respuesta ante [[volumen]].

{{f:presion_desde_energia_libre}}

## Sustitución numérica
Para [[energia_libre_helmholtz]], el factor kBT vale aproximadamente 1,38·10⁻²³ J/K · 300 K = 4,14·10⁻²¹ J. Como ln(12) ≈ 2,48, resulta una [[energia_libre_helmholtz]] de orden -1,03·10⁻²⁰ J. Para [[energia_interna]], se combina kBT² con [[derivada_log_particion_temperatura]]: 1,38·10⁻²³ · 300² · 0,006 ≈ 7,45·10⁻²¹ J. Para [[entropia]], una pendiente [[pendiente_energia_libre_temperatura]] negativa de -2,5·10⁻²³ J/K conduce a una entropía positiva de 2,5·10⁻²³ J/K bajo el convenio usual.

## Validación dimensional
La [[funcion_particion]] no tiene unidades, por eso ln Z tampoco. En [[energia_libre_helmholtz]], [[constante_boltzmann]] por [[temperatura]] da J, que coincide con energía. En [[energia_interna]], [[constante_boltzmann]] aporta J/K, el factor térmico aporta K² y [[derivada_log_particion_temperatura]] aporta K⁻¹; el resultado vuelve a ser J. En [[entropia]], la pendiente de [[energia_libre_helmholtz]] respecto a [[temperatura]] tiene J/K, que es la unidad correcta de entropía.

## Interpretación física
El resultado muestra que una [[funcion_particion]] moderada puede producir una [[energia_libre_helmholtz]] negativa porque el logaritmo de Z representa accesibilidad estadística. La [[energia_interna]] positiva indica que, a 300 K, los microestados excitados contribuyen de forma apreciable a la energía media. La [[entropia]] positiva significa que al aumentar [[temperatura]] la [[energia_libre_helmholtz]] desciende, porque el sistema gana formas microscópicas relevantes de organizarse. Físicamente, el valor aislado de Z no basta: la pregunta importante es cómo cambia con [[temperatura]] y cómo esa variación se transforma en pendientes y respuestas macroscópicas.

# Ejemplo de aplicación real
## Contexto
Imagina un pequeño conjunto de moléculas adsorbidas en una superficie, donde cada molécula puede ocupar varios estados vibracionales. Al subir la [[temperatura]], algunos estados que antes casi no contribuían pasan a tener peso estadístico. Un laboratorio puede ajustar una [[funcion_particion]] efectiva a partir de datos espectroscópicos y usarla para estimar cambios en [[energia_libre_helmholtz]] y [[entropia]].

## Estimación física
A escala molecular, kBT a temperatura ambiente es del orden de 10⁻²¹ J. Si la [[funcion_particion]] pasa de 3 a 30 entre dos valores de [[temperatura]], el cambio logarítmico es de orden unidad, no de orden diez. Eso significa que [[energia_libre_helmholtz]] cambia en una escala comparable a unos pocos kBT por molécula. Una estimación razonable de [[entropia]] molecular estará en torno a una o varias veces [[constante_boltzmann]], siempre que los estados añadidos sean realmente accesibles.

## Interpretación
La aplicación real enseña que la [[funcion_particion]] no solo predice números: organiza qué información experimental importa. Si la curva de [[energia_libre_helmholtz]] frente a [[temperatura]] se vuelve más inclinada, la [[entropia]] aumenta. Si el cambio de [[volumen]] de la superficie fuera relevante, habría que incorporar [[pendiente_energia_libre_volumen]] para estimar [[presion]] o tensión efectiva. El modelo sigue siendo útil mientras los estados incluidos representen la física dominante.

