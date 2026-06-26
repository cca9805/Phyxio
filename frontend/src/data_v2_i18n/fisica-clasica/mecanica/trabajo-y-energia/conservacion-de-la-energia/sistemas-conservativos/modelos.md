# Modelos

## Modelo ideal

El modelo ideal de sistemas conservativos supone que el problema puede describirse con un balance entre [[K]] y [[U]] sin perdida ni aporte neto adicional. En esta version, [[Em]] actua como magnitud de cierre del estado mecanico y la comparacion entre [[Ki]], [[Ui]], [[Kf]] y [[Uf]] basta para interpretar la evolucion. Es un modelo especialmente potente en caidas libres cortas, ascensos ideales, resortes con perdida despreciable y recorridos donde la fuerza relevante admite energia potencial bien definida.

La gran ventaja del modelo ideal es que reemplaza el seguimiento punto a punto por una lectura entre estados. Eso hace que el problema sea mas transparente y, a menudo, mas fisico. En vez de perderse en detalles locales, el analisis se centra en que parte del presupuesto mecanico estaba inicialmente en movimiento y que parte estaba almacenada en la configuracion.

## Hipótesis

La primera hipotesis es que la interaccion dominante es conservativa. La segunda es que [[Ui]] y [[Uf]] usan una referencia potencial coherente. La tercera es que el sistema elegido no cambia entre estado inicial y final. La cuarta es que cualquier intercambio no conservativo relevante puede considerarse nulo o suficientemente pequeno para no controlar la respuesta.

Estas hipotesis no son decorativas. Si una sola falla, la lectura de conservacion ideal puede seguir produciendo un numero, pero ya no una interpretacion defendible. Por eso la seleccion del modelo ocurre antes de sustituir datos y no despues.

## Dominio de validez cuantitativo

Como criterio operativo, el modelo ideal es razonable cuando el modulo de [[Wnc]] es <= 5% de [[Em]] en la escala del problema y cuando la incertidumbre experimental esperada es mayor que esa desviacion. Tambien es razonable cuando el cambio de referencia potencial entre [[Ui]] y [[Uf]] usa exactamente el mismo convenio en todo el ejercicio. Si la perdida por rozamiento, arrastre o motor supera ese margen, la lectura puramente conservativa deja de ser el mejor primer modelo.

Otro criterio util es comparar la variacion esperada de [[K]] y [[U]] con cualquier mecanismo disipativo conocido. Si la disipacion estimada es mucho menor que el intercambio principal entre [[K]] y [[U]], el modelo ideal sigue siendo informativo. Si la disipacion es del mismo orden, hay que pasar al balance con [[Wnc]].

## Señales de fallo del modelo

El modelo falla cuando obliga a obtener una [[Kf]] negativa, cuando requiere cambiar el cero potencial entre estados, cuando predice una recuperacion de altura que el sistema real no muestra, o cuando la suma mecanica observada cae sistematicamente de un estado a otro. Tambien falla cuando el problema incluye rozamiento, frenado, deformacion irreversible o accion motriz y aun asi el analista insiste en imponer conservacion ideal.

Una señal adicional de fallo aparece cuando la interpretacion verbal y el numero dejan de coincidir. Si el resultado parece compatible solo despues de forzar signos, ignorar perdidas o redefinir la referencia, el modelo elegido ya no esta leyendo bien la fisica.

## Modelo extendido o alternativo

El modelo extendido introduce [[Wnc]] y convierte la conservacion ideal en balance general. La pregunta ya no es si [[Em]] permanece constante, sino cuanto cambia por accion de mecanismos no conservativos. Este paso no destruye la estructura del tema; la amplia. De hecho, es la extension natural cuando rozamiento, aporte externo o disipacion no pueden seguir tratandose como detalle menor.

Cuando conviene cambiar a modelo alternativo es una decision practica, no filosofica. Si el mecanismo adicional tiene impacto observable, debe aparecer en la ecuacion y en la interpretacion.

## Comparación operativa

El modelo ideal es mas simple y muy potente cuando el problema esta dominado por conversion entre [[K]] y [[U]]. El modelo extendido es mas fiel cuando la desviacion del caso ideal deja de ser pequena. El primero ofrece claridad y rapidez. El segundo ofrece honestidad fisica y evita sobreinterpretar una conservacion inexistente.

En uso experto, ambos modelos no compiten; se encadenan. Primero se prueba si la idealizacion conservativa captura el fenomeno. Si no lo hace, se pasa a [[Wnc]] sin abandonar el lenguaje energetico. Esa continuidad es precisamente una de las fortalezas del leaf.