# Modelos de energia potencial gravitatoria

## Modelo ideal

El modelo ideal considera una fuente puntual o esfericamente equivalente con masa [[M]], una masa de prueba [[m]] y distancia radial [[r]] medida desde el centro de la fuente. Bajo estas hipotesis, la energia potencial [[U]] queda completamente descrita por un campo central conservativo. La ventaja didactica es que cada estado energetico puede compararse con otro sin resolver ecuaciones diferenciales de movimiento completo. El modelo permite conectar directamente configuracion espacial y balance de energia.

## Hipotesis

Las hipotesis operativas son claras. Primero, interaccion gravitatoria clasica, sin efectos relativistas fuertes. Segundo, ausencia de disipacion mecanica apreciable para aplicar conservacion entre [[DeltaU]] y [[DeltaK]]. Tercero, referencia energetica explicita y consistente para evitar ambiguedad en signo de [[U]], [[Ui]], [[Uf]] y [[Wg]]. Cuarto, uso de unidades SI para [[G]], [[M]], [[m]], [[ri]] y [[rf]]. Quinto, trayectoria radial o analizable por estados energeticos equivalentes.

## Dominio de validez cuantitativo

El modelo general de este leaf funciona cuando [[ri]] > 0 y [[rf]] > 0, y cuando la fuente puede aproximarse por simetria central. En practicas de aula, un criterio cuantitativo util es usar modelo local solo si h/r <= 0.01. Si h/r supera 0.01, conviene volver a la formulacion general con radios absolutos. Otro criterio util es exigir error relativo energetico <= 5 por ciento para aceptar aproximaciones lineales. Si el error estimado > 5 por ciento, se cambia de modelo.

## Senales de fallo del modelo

Una senal de fallo aparece cuando la lectura de signos contradice la fisica esperada del proceso. Por ejemplo, salida radial con [[DeltaU]] negativa sin justificacion de referencia. Otra senal aparece cuando los datos mezclan alturas locales y radios absolutos sin conversion consistente. Tambien falla el modelo si se usa [[g]] constante en trayectos donde la variacion radial es grande. En esos casos, la coherencia energetica entre [[Wg]] y [[DeltaU]] se rompe y obliga a revisar hipotesis.

## Modelo extendido o alternativo

Cuando el campo deja de ser central simple o la precision requerida aumenta, se usa un modelo extendido por potencial efectivo o por simulacion numerica de multiples cuerpos. En regimen terrestre local, la alternativa simplificada es el modelo lineal con [[h]] y [[g]]. En escalas orbitales, la alternativa robusta es conservar la expresion radial completa y complementar con condicion de estado ligado usando [[E]]. El cambio de modelo no es decorativo; responde a umbral fisico y a criterio de error permitido.

Cuando conviene cambiar de modelo: si h/r > 0.01 o si el error relativo estimado supera 5 por ciento, se abandona la aproximacion local y se usa la formulacion radial general.

## Comparacion operativa

Modelo ideal radial: rapido, interpretable y suficiente para gran parte de problemas academicos. Modelo local: mas simple para desplazamientos pequenos y lectura inmediata de orden de magnitud, pero sensible al abuso fuera de dominio. Modelo extendido: mas costoso, necesario cuando hay geometrias complejas o alta precision. Regla operativa final: si h/r <= 0.01 y objetivo es estimacion, usar local; si h/r > 0.01 o se requiere trazabilidad energetica rigurosa, usar general; si hay multiples fuentes relevantes, migrar a modelo extendido.