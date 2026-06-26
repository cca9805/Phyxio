# Ejemplo tipo examen

## Enunciado

Un sistema oscilatorio ideal se libera cerca de su posicion de equilibrio y se estudia con un sensor de desplazamiento. El objetivo del ejercicio es construir una lectura completa del estado dinamico en un instante de interes, sin reducir la respuesta a un unico numero descontextualizado. Se pide describir [[x]], [[v]] y [[a]] para un instante concreto de [[t]], justificar por que el modelo elegido es coherente con la fisica del problema y cerrar con una interpretacion que ayude a decidir si el registro experimental es plausible.

## Datos

Se dispone de una amplitud inicial [[A]] conocida por calibracion previa, una pulsacion [[omega]] obtenida a partir de mediciones de periodicidad, una fase inicial [[phi]] definida por condicion de arranque y un instante [[t]] dentro de la ventana de analisis. Tambien se conoce que el sistema opera en rango lineal y que no se observan perdidas de energia dominantes en los primeros ciclos. Con estos datos, la resolucion puede hacerse con el nucleo formal del leaf.

## Definición del sistema

El sistema se modela como un oscilador armonico simple ideal. Esto implica equilibrio estable, respuesta periodica y acoplamiento restaurador entre desplazamiento y aceleracion. La variable observable principal es [[x]], pero la lectura completa requiere incluir [[v]] y [[a]] para distinguir estados que comparten posicion pero no comparten evolucion temporal. Se asume que la adquisicion temporal tiene resolucion suficiente para detectar cambios de fase y cambios de signo en derivadas.

## Modelo físico

El modelo representa una dinamica lineal en la que el estado evoluciona de forma periodica alrededor del equilibrio. [[A]] fija la escala de excursion, [[omega]] fija la rapidez de variacion, [[phi]] fija la condicion inicial y [[t]] organiza la lectura en el tiempo. La consistencia del modelo se evalua verificando que la salida permanezca acotada, que el desfase entre magnitudes sea compatible con la narrativa dinamica y que no aparezcan derivas sistematicas que sugieran procesos fuera del MHS ideal.

## Justificación del modelo

Se adopta este modelo porque las observaciones iniciales muestran ciclo estable, simetria aproximada y ausencia de envolvente decreciente en la ventana analizada. Esto implica que la hipotesis de linealidad es razonable para el rango medido. Por tanto, usar la ecuacion de movimiento del MHS permite una descripcion causal robusta con bajo costo computacional y alta trazabilidad didactica. Si durante la comprobacion final apareciera deriva consistente de amplitud o desfase acumulado no explicable por incertidumbre instrumental, la decision correcta seria escalar a un modelo no ideal.

## Resolución simbólica

Primero se usa la ley de posicion para obtener el estado principal:

{{f:posicion_mhs}}

Despues se deriva la lectura de velocidad temporal asociada:

{{f:velocidad_mhs}}

Luego se contrasta la tendencia restauradora usando aceleracion:

{{f:aceleracion_mhs}}

Finalmente se verifica coherencia global con la forma diferencial del modelo:

{{f:ecuacion_diferencial_mhs}}

## Sustitución numérica

Con los parametros disponibles se evalua primero [[x]] en el instante seleccionado y se confirma que su magnitud es compatible con el rango impuesto por [[A]]. Luego se evalua [[v]] en el mismo instante para identificar si el sistema se mueve hacia equilibrio o se aleja de el. A continuacion se evalua [[a]] para confirmar tendencia restauradora. La comparacion conjunta de estas tres magnitudes permite descartar interpretaciones ambiguas.

Una buena practica en este punto es repetir la estimacion en dos instantes cercanos para verificar estabilidad local de la lectura. Si el cambio observado sigue el patron esperado de fase, la confianza en el resultado aumenta. Si no lo sigue, se revisan conversiones de unidad, sincronizacion temporal y consistencia del valor de [[phi]].

## Validación dimensional

La validacion dimensional cierra tres chequeos. El primero confirma que [[x]] mantenga unidad de longitud. El segundo confirma que [[v]] mantenga unidad de longitud por tiempo. El tercero confirma que [[a]] mantenga unidad de longitud por tiempo cuadrado. Ademas, se revisa que [[omega]] se exprese de forma compatible con [[t]]. Este bloque evita errores silenciosos que suelen pasar desapercibidos cuando la algebra parece correcta.

Tambien se recomienda verificar orden de magnitud. Si [[omega]] aumenta, el sistema cambia mas rapido y la escala esperada de [[a]] crece de forma sensible. Esta observacion ayuda a interpretar valores aparentemente grandes que en realidad son coherentes con la dinamica del problema.

## Interpretación física

La interpretacion no debe limitarse a reportar una tripleta numerica. Debe explicar causalidad. Si [[x]] esta lejos del equilibrio y [[a]] apunta en sentido de retorno, el sistema mantiene comportamiento restaurador esperado. Si [[v]] tiene signo que confirma desplazamiento hacia equilibrio, la lectura temporal es consistente. Esto implica que el modelo elegido explica no solo un instante, sino la tendencia local del movimiento.

Por tanto, el cierre correcto del ejemplo indica si la respuesta observada es fisicamente plausible y si las hipotesis de linealidad siguen vigentes. En caso de incoherencia persistente entre signos, escalas y fase, la conclusion no debe forzarse. Se debe declarar que el modelo ideal requiere revision o que los datos necesitan depuracion adicional.

# Ejemplo de aplicación real

## Contexto

En una mesa optica escolar se instala un modulo oscilatorio para evaluar estabilidad de una referencia laser. Durante una perturbacion inicial, la posicion lateral de un elemento movil se registra en tiempo real. El equipo docente necesita decidir si la ecuacion de movimiento del MHS alcanza para describir el retorno al equilibrio durante los primeros ciclos o si conviene usar un modelo mas complejo para no introducir sesgo en la practica.

## Estimación física

Se selecciona una ventana temporal de varios ciclos y se estiman [[A]], [[omega]] y [[phi]] a partir de datos iniciales. Luego se reconstruye [[x]] en distintos instantes representativos y se compara con medicion. Se estima tambien [[v]] para distinguir tramos de aproximacion y alejamiento del equilibrio. Finalmente se estima [[a]] para comprobar que la tendencia de restauracion se mantenga en signo y escala.

La lectura cuantitativa se resume en orden de magnitud: amplitud estable, frecuencia temporal consistente y aceleracion acorde con una dinamica de retorno sin deriva sistematica. Esta estimacion implica que el modelo ideal es aceptable para la finalidad pedagogica del experimento dentro de la incertidumbre disponible.

## Interpretación

El analisis muestra que la ecuacion de movimiento del MHS no solo describe la forma de la curva, tambien organiza decisiones de laboratorio. Permite validar si la adquisicion temporal fue suficiente, si la calibracion de fase inicial fue coherente y si la explicacion final mantiene causalidad fisica. Por tanto, el modelo cumple rol operativo: traduce datos en criterio de aceptacion de experimento.

Ademas, la aplicacion real deja una regla de trabajo transferible. Si en futuras sesiones aparece deriva sostenida de amplitud o desfase acumulado fuera de tolerancia, se debe pasar a un modelo con disipacion o forzamiento. Esa transicion no contradice el aprendizaje del MHS; lo fortalece, porque muestra como un modelo ideal bien usado tambien enseña cuando deja de ser suficiente.
