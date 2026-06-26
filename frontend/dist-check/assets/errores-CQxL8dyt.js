const e=`## Errores conceptuales

### Error 1: Creer que una lente convergente siempre forma imagen real

**Por qué parece correcto**

El alumno generaliza la experiencia habitual de proyectar imagenes en pantalla con lentes convergentes. Como la mayoria de ejercicios usan objetos lejanos, la imagen siempre sale real, y el alumno concluye que es una propiedad intrinseca de la lente convergente.

**Por qué es incorrecto**

Cuando el objeto se coloca entre la lente y el foco ([[d_o]] menor que [[f]]), la ecuacion de la lente delgada produce [[d_i]] negativo. Los rayos refractados divergen y solo sus prolongaciones hacia atras se cortan: la imagen es virtual. La lente convergente actua como lupa en esta configuracion.

**Señal de detección**

El alumno obtiene [[d_i]] negativo y lo descarta como error de calculo o invierte el signo manualmente para forzar una imagen real.

**Corrección conceptual**

Una lente convergente puede formar imagen real o virtual dependiendo de la posicion del objeto respecto al foco. La lente no determina por si sola el tipo de imagen; la relacion entre [[d_o]] y [[f]] es decisiva.

**Mini-ejemplo de contraste**

Una lupa de focal 5 cm con un insecto a 3 cm de la lente: [[d_i]] resulta menos 7.5 cm (imagen virtual amplificada). El mismo insecto a 10 cm: [[d_i]] resulta 10 cm (imagen real invertida). Misma lente, resultado opuesto segun la posicion.

### Error 2: Confundir distancia focal con distancia de la imagen

**Por qué parece correcto**

Ambas magnitudes se miden en metros desde la lente y en muchos esquemas aparecen en el mismo eje. El alumno memoriza que la imagen se forma en el foco y aplica esa regla siempre.

**Por qué es incorrecto**

La imagen solo se forma en el foco cuando el objeto esta en el infinito. Para cualquier otra posicion del objeto, [[d_i]] es diferente de [[f]]. La ecuacion de la lente muestra que [[d_i]] depende de [[d_o]] y de [[f]] conjuntamente.

**Señal de detección**

El alumno sustituye directamente [[d_i]] por [[f]] sin usar la ecuacion de la lente, obteniendo aumentos incorrectos.

**Corrección conceptual**

El foco es el punto donde convergen los rayos paralelos al eje. La imagen de un objeto a distancia finita se forma a una distancia [[d_i]] que depende de la relacion entre [[d_o]] y [[f]] segun la ecuacion de la lente delgada.

**Mini-ejemplo de contraste**

Lente de focal 10 cm con objeto a 20 cm: [[d_i]] es 20 cm, no 10 cm. Si el alumno usara [[d_i]] igual a [[f]], predice la imagen a 10 cm y obtiene un aumento erroneo de 0.5 en lugar del correcto menos 1.

## Errores de modelo

### Error 3: Aplicar la ecuacion de lente delgada a una lente gruesa sin correccion

**Por qué parece correcto**

La ecuacion de la lente delgada es simple y funciona bien en la mayoria de problemas didacticos. El alumno la aplica a cualquier lente sin verificar si el espesor es despreciable.

**Por qué es incorrecto**

En lentes gruesas, los planos principales no coinciden con el centro geometrico. Las distancias [[d_o]] y [[d_i]] deben medirse desde los planos principales, no desde la superficie. Usar la ecuacion sin esta correccion introduce un error sistematico proporcional al espesor.

**Señal de detección**

La imagen medida experimentalmente aparece desplazada respecto a la prediccion teorica en una cantidad comparable al espesor de la lente.

**Corrección conceptual**

El modelo de lente delgada es una aproximacion valida solo cuando el espesor es mucho menor que [[f]]. Para lentes gruesas, hay que localizar los planos principales y medir distancias desde ellos.

**Mini-ejemplo de contraste**

Lente de espesor 15 mm con focal 30 mm: el espesor es la mitad de la focal. La prediccion de lente delgada da [[d_i]] de 60 mm para objeto a 60 mm. La medicion real muestra la imagen a unos 53 mm: error del 12 % por ignorar el espesor.

## Errores matematicos

### Error 4: Invertir la convencion de signos de los radios de curvatura

**Por qué parece correcto**

Distintos libros usan convenciones diferentes para [[R1]] y [[R2]]. El alumno memoriza una regla de un libro y la aplica con la formula de otro, obteniendo focales con signo incorrecto.

**Por qué es incorrecto**

La ecuacion del fabricante de lentes exige una convencion consistente. En la convencion estandar, [[R1]] es positivo si el centro de curvatura esta del lado de la imagen. Mezclar convenciones invierte el signo de [[f]] y predice una lente divergente donde hay una convergente o viceversa.

**Señal de detección**

El alumno obtiene focal negativa para una lente biconvexa (que debe ser convergente) o focal positiva para una biconcava.

**Corrección conceptual**

Antes de usar la ecuacion del fabricante, verificar la convencion de signos del texto de referencia. En la convencion habitual: para una lente biconvexa, [[R1]] es positivo y [[R2]] es negativo.

**Mini-ejemplo de contraste**

Lente biconvexa con radios de 20 cm, [[n]] de 1.5. Con signos correctos ([[R1]] positivo, [[R2]] negativo): focal de 20 cm (convergente). Con signos invertidos: focal de menos 20 cm (divergente). El error de signo convierte la prediccion en fisicamente absurda.

## Errores de interpretacion

### Error 5: Interpretar aumento negativo como imagen mas pequena

**Por qué parece correcto**

En la vida cotidiana, negativo se asocia con menos. El alumno lee [[m]] negativo y concluye que la imagen es mas pequena que el objeto.

**Por qué es incorrecto**

El signo de [[m]] indica orientacion, no tamano. Un [[m]] de menos 3 significa imagen tres veces mas grande e invertida. El tamano lo da el modulo de [[m]]; el signo indica si la imagen esta derecha o invertida.

**Señal de detección**

El alumno describe una imagen con [[m]] de menos 2 como reducida cuando en realidad esta amplificada al doble e invertida.

**Corrección conceptual**

El aumento lateral [[m]] codifica dos informaciones: el modulo da el factor de escala (mayor que 1 amplifica, menor que 1 reduce) y el signo da la orientacion (positivo derecha, negativo invertida). Ambas lecturas deben hacerse por separado.

**Mini-ejemplo de contraste**

Objeto a 15 cm de lente de focal 10 cm: [[d_i]] resulta 30 cm, [[m]] resulta menos 2. El alumno dice imagen reducida. Resultado correcto: imagen el doble de grande e invertida. Si [[m]] fuera menos 0.5, entonces si seria reducida (a la mitad) e invertida.

## Regla de autocontrol rapido

Antes de dar por bueno un resultado de lentes, verificar estos tres puntos:

1. **Coherencia de signo entre [[d_i]] y [[m]]**: si [[d_i]] es positivo, [[m]] debe ser negativo (imagen real invertida). Si [[d_i]] es negativo, [[m]] debe ser positivo (imagen virtual derecha). Una combinacion contraria indica error.

2. **Coherencia de tipo de lente**: si [[f]] es negativo (lente divergente) y se obtiene [[d_i]] positivo con objeto real, hay error. La lente divergente con objeto real siempre da [[d_i]] negativo.

3. **Plausibilidad del modulo de [[m]]**: para una sola lente delgada, modulos de [[m]] mayores que 10 son inusuales y sugieren que el objeto esta demasiado cerca del foco, zona donde el modelo es inestable.
`;export{e as default};
