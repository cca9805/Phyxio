const e=`## Errores conceptuales

### Error 1: Confundir campo eléctrico con fuerza eléctrica

**Por qué parece correcto**

El campo eléctrico [[E_C]] y la fuerza eléctrica [[F_C]] tienen unidades relacionadas y ambos dependen de [[q1]] y de [[r]]. El alumno generaliza intuitivamente que ambas magnitudes son "lo mismo" o que [[E_C]] ya incluye el efecto de [[q2]]. La analogía superficial refuerza esta confusión: si hay campo, hay fuerza, y si hay fuerza, debe haber campo.

**Por qué es incorrecto**

[[E_C]] es una propiedad del espacio creada por [[q1]] que existe aunque no haya [[q2]]. [[F_C]] requiere la presencia de ambas cargas: es el producto de [[E_C]] por [[q2]]. Confundirlos produce errores sistemáticos: calcular [[E_C]] y presentarlo como [[F_C]] omite el factor [[q2]], que puede ser de 10⁻⁶ o de 10⁻¹⁹ culombios, alterando el resultado en muchos órdenes de magnitud.

**Señal de detección**

El alumno obtiene [[F_C]] sin haber usado [[q2]] en ningún paso del cálculo, o presenta el campo eléctrico como la respuesta final a una pregunta que pide la fuerza.

**Corrección conceptual**

El campo eléctrico [[E_C]] en un punto es la fuerza por unidad de carga que experimentaría una carga de prueba positiva en ese punto. La fuerza real [[F_C]] requiere multiplicar [[E_C]] por la carga concreta [[q2]] que ocupa ese punto. Las dos magnitudes son distintas tanto en concepto como en unidades: N/C frente a N.

**Mini-ejemplo de contraste**

En el punto situado a 0.1 m de una carga de 1 µC, el campo [[E_C]] es aproximadamente 900 kN/C. Si en ese punto se coloca una carga [[q2]] de 1 nC, la fuerza [[F_C]] sobre ella es 900 kN/C × 10⁻⁹ C, es decir, aproximadamente 9×10⁻⁴ N. El alumno que confunde campo con fuerza reportaría 900 000 N en lugar de 0.0009 N: un error de nueve órdenes de magnitud.

### Error 2: Creer que la fuerza eléctrica actúa solo en una dirección

**Por qué parece correcto**

El enunciado suele decir "la fuerza sobre [[q2]]", lo que lleva al alumno a pensar que solo [[q2]] experimenta algo. La notación asimétrica del enunciado induce la creencia de que [[q1]] es la fuente pasiva y [[q2]] es el receptor activo de la fuerza.

**Por qué es incorrecto**

La ley de Coulomb es completamente simétrica. La fuerza que [[q1]] ejerce sobre [[q2]] tiene exactamente el mismo módulo que la fuerza que [[q2]] ejerce sobre [[q1]], aunque sentidos contrarios. Ignorar esta reciprocidad lleva a errores en problemas de equilibrio y en el análisis de sistemas de múltiples cargas.

**Señal de detección**

El alumno identifica solo una fuerza en el sistema y no aplica la tercera ley de Newton. En problemas con cargas libres, no calcula la aceleración de [[q1]] sino solo la de [[q2]].

**Corrección conceptual**

La tercera ley de Newton se aplica a todas las fuerzas, incluida la eléctrica. [[q1]] y [[q2]] se afectan mutuamente con la misma intensidad. Solo si [[q1]] está fija (anclada a una masa infinita) se puede ignorar su aceleración; pero la fuerza sobre ella existe igualmente.

**Mini-ejemplo de contraste**

Dos cargas de 1 µC separadas 0.1 m: la fuerza sobre [[q2]] es aproximadamente 0.9 N hacia [[q1]]. Aplicando la tercera ley, la fuerza sobre [[q1]] también es 0.9 N, pero hacia [[q2]]. Si [[q1]] tiene masa 1 mg, su aceleración es enorme: 9×10⁵ m/s². Olvidar esta fuerza sobre [[q1]] es incorrecto aunque [[q1]] sea la carga "fuente".

## Errores de modelo

### Error 1: Aplicar la ley de Coulomb puntual a esferas grandes a distancias cortas

**Por qué parece correcto**

La ley de Coulomb se aplica a cualquier par de cargas, así que el alumno la aplica directamente sin preguntarse si las cargas son realmente puntuales. La fórmula no menciona explícitamente ninguna condición de tamaño.

**Por qué es incorrecto**

Cuando las cargas están en objetos de tamaño comparable a [[r]], la distribución interna de carga genera una fuerza diferente de la predicha por la ley de Coulomb puntual. La fuerza real puede ser mayor (si la carga se concentra en la cara más próxima por inducción) o ligeramente diferente en dirección.

**Señal de detección**

El alumno usa la ley de Coulomb con [[r]] del mismo orden que el tamaño del objeto cargado (por ejemplo, [[r]] de 1 cm para bolas de 5 mm de radio). El error relativo en este caso supera el 10 %.

**Corrección conceptual**

La ley de Coulomb puntual es exacta para esferas cargadas uniformemente evaluadas desde el exterior: en ese caso, toda la carga puede tratarse como concentrada en el centro. Para otros objetos, la condición r >> tamaño es necesaria para que el error sea despreciable.

**Mini-ejemplo de contraste**

Una esfera de radio 5 cm uniformemente cargada con 1 µC. A [[r]] de 6 cm del centro, la ley de Coulomb da un resultado exacto porque el centro está a 6 cm. Pero si se mide desde la superficie más próxima (1 cm), aplicar r de 1 cm en lugar de 6 cm produce un error de factor 36 en la fuerza calculada.

### Error 2: Ignorar el signo de las cargas al determinar el tipo de interacción

**Por qué parece correcto**

Muchos libros de texto dan la ley de Coulomb solo en módulo y añaden después la regla verbal de "igual repele, contrario atrae". El alumno memoriza la regla verbal sin conectarla con el signo del producto [[q1]]·[[q2]] en la fórmula.

**Por qué es incorrecto**

La ley de Coulomb vectorial incorpora el signo de forma automática a través del producto de cargas. Separar la fórmula de la regla verbal genera incoherencia en problemas con tres o más cargas, donde el alumno tiene que combinar fuerzas atractivas y repulsivas y puede equivocarse en el sentido vectorial de cada una.

**Señal de detección**

En un diagrama de fuerzas, el alumno dibuja [[F_C]] sin verificar el signo de [[q1]]·[[q2]], o asigna sentido correcto a la fuerza de forma puramente verbal sin apoyarse en la fórmula.

**Corrección conceptual**

El producto [[q1]]·[[q2]] es positivo cuando las cargas tienen el mismo signo (repulsión) y negativo cuando tienen signos contrarios (atracción). Este signo entra directamente en la fórmula y determina la dirección de [[F_C]] de forma algebraica, sin necesitar reglas adicionales.

**Mini-ejemplo de contraste**

Tres cargas en línea: [[q1]] de +2 µC en el origen, [[q2]] de -3 µC a 10 cm, [[q1]] de +1 µC a 20 cm. La fuerza de la carga central [[q2]] sobre la tercera carga es atractiva (signos contrarios), pero la de [[q1]] (origen) sobre la tercera carga es repulsiva (signos iguales). El alumno que no usa el signo del producto puede invertir una de las dos fuerzas y obtener un resultado erróneo para la fuerza neta.

## Errores matemáticos

### Error 1: Elevar r a la primera potencia en lugar de al cuadrado

**Por qué parece correcto**

La mayoría de las relaciones de proporcionalidad inversa que el alumno ha visto hasta este punto (por ejemplo, presión y volumen en gases ideales) usan el primer exponente. La ley de Coulomb introduce el cuadrado, que no es el caso más común, y el alumno lo omite por inercia.

**Por qué es incorrecto**

La dependencia con [[r]]² en lugar de [[r]] no es un detalle menor: produce errores proporcionales a [[r]] para cada evaluación. Si [[r]] vale 10, el error en el denominador es un factor de 10, haciendo el resultado diez veces mayor de lo correcto.

**Señal de detección**

Al duplicar [[r]] en un cálculo, el alumno obtiene que [[F_C]] se reduce a la mitad en lugar de a un cuarto. Este factor 2 frente al esperado factor 4 delata el uso de [[r]] en lugar de [[r]]².

**Corrección conceptual**

La ley de cuadrado inverso es consecuencia de la geometría tridimensional del espacio: la fuerza se "diluye" sobre la superficie de una esfera de radio [[r]], que crece con [[r]]². El exponente 2 es estructural, no arbitrario.

**Mini-ejemplo de contraste**

Para [[q1]] de 1 µC, [[q2]] de 1 µC y [[r]] de 0.1 m, [[F_C]] correcta es aproximadamente 0.9 N. Usando [[r]] en el denominador (sin cuadrado), se obtiene un resultado proporcional a 1/0.1, es decir, un valor diez veces mayor. Para [[r]] de 1 m, el error sería un factor de 100, mostrando que la diferencia crece con la distancia.

### Error 2: Mezclar unidades de carga (µC, nC, C) en la misma sustitución

**Por qué parece correcto**

Los enunciados dan los datos en unidades de uso común (µC, nC) para evitar números muy pequeños, y el alumno los sustituye directamente en la fórmula olvidando convertir a culombios.

**Por qué es incorrecto**

La constante [[k_e]] está expresada en unidades del SI (culombios), así que todas las cargas deben estar en culombios al sustituir. Mezclar µC sin convertir introduce un factor de 10⁻⁶ por carga, y si ambas cargas están en µC, el error total es un factor de 10⁻¹².

**Señal de detección**

El resultado de [[F_C]] es del orden de 10⁻¹² N para cargas de µC y distancias de centímetros, cuando debería ser del orden de 0.1–10 N.

**Corrección conceptual**

Siempre convertir todas las cargas a culombios antes de sustituir: 1 µC × 10⁻⁶ C/µC da 10⁻⁶ C. Una buena práctica es escribir explícitamente la conversión en el primer paso de cada cálculo.

**Mini-ejemplo de contraste**

Dos cargas de 5 µC separadas 0.05 m. Usando 5 µC directamente en lugar de 5×10⁻⁶ C, el resultado obtenido es 10⁻¹² veces el correcto. El valor correcto de [[F_C]] es aproximadamente 90 N; el resultado con unidades mezcladas sería un valor completamente insignificante del orden de 10⁻¹⁰ N.

## Errores de interpretación

### Error 1: Interpretar [[F_C]] negativa como "fuerza cero" o "error"

**Por qué parece correcto**

El alumno ha aprendido que la fuerza es una magnitud positiva en muchos contextos (peso, fuerza normal, tensión). Cuando la ley de Coulomb da un resultado negativo, lo interpreta como un error de cálculo o lo toma como el módulo ignorando el signo.

**Por qué es incorrecto**

El signo de [[F_C]] es información física esencial: indica atracción (signo negativo en la convención de esta fórmula) o repulsión (signo positivo). Eliminar el signo borra la información sobre el tipo de interacción y puede invertir el sentido del vector fuerza en problemas vectoriales.

**Señal de detección**

El alumno escribe el resultado de [[F_C]] como un valor absoluto sin comentar el signo, o dibuja la fuerza en la dirección incorrecta en un diagrama vectorial.

**Corrección conceptual**

El signo de [[F_C]] proviene del producto [[q1]]·[[q2]]. Es información física: negativo significa atracción, positivo significa repulsión. Siempre interpretar el signo antes de usar [[F_C]] en vectores o en diagramas de fuerzas.

**Mini-ejemplo de contraste**

[[q1]] de +3 µC y [[q2]] de -2 µC a 0.15 m. El producto [[q1]]·[[q2]] es negativo, así que [[F_C]] resulta negativa: atracción. Si el alumno toma el módulo y lo usa en un problema de equilibrio, puede concluir que la carga [[q2]] es empujada hacia fuera del sistema cuando en realidad es atraída hacia [[q1]], invirtiendo la condición de equilibrio.

### Error 2: Creer que duplicar ambas cargas a la vez cuadruplica la fuerza

**Por qué parece correcto**

La fuerza es proporcional a [[q1]] y también a [[q2]], así que al alumno le parece razonable que duplicar ambas simultáneamente cuadruplique el resultado (2×2).

**Por qué es incorrecto**

Efectivamente es correcto: si [[q1]] se duplica, [[F_C]] se duplica; si [[q2]] también se duplica, [[F_C]] se duplica de nuevo. El resultado total al duplicar ambas cargas es multiplicar [[F_C]] por cuatro. El error no está en la conclusión, sino en que muchos alumnos aplican la misma lógica con [[r]] y creen que duplicar [[r]] también cuadruplica la fuerza, cuando en realidad la divide entre cuatro. La confusión entre numerador y denominador produce el error opuesto.

**Señal de detección**

El alumno obtiene el resultado correcto al cambiar las cargas pero se equivoca al cambiar [[r]], o aplica la regla del cuadrado al numerador cuando corresponde al denominador.

**Corrección conceptual**

[[F_C]] es proporcional al producto [[q1]]·[[q2]] (numerador) e inversamente proporcional a [[r]]² (denominador). Cambios en el numerador amplifican la fuerza; cambios en el denominador la reducen. La estructura de la fórmula distingue perfectamente ambos roles.

**Mini-ejemplo de contraste**

[[F_C]] inicial con [[q1]] de 1 µC, [[q2]] de 1 µC y [[r]] de 0.1 m. Duplicar ambas cargas da [[F_C]] multiplicada por cuatro. Duplicar [[r]] da [[F_C]] dividida entre cuatro. El alumno que confunde los roles del numerador y del denominador puede presentar ambas operaciones con el mismo efecto multiplicador, lo que es incorrecto.

## Regla de autocontrol rápido

Antes de cerrar cualquier cálculo con la ley de Coulomb, verificar estos tres puntos:

1. **Unidades**: las cargas están en culombios (no en µC o nC sin convertir), [[r]] está en metros y [[k_e]] está en N·m²·C⁻². Si el resultado de [[F_C]] no está en newtons, hay un error de unidades.
2. **Exponente de [[r]]**: el denominador de la fórmula contiene [[r]] al cuadrado. Si al duplicar [[r]] el resultado no cae a un cuarto, el exponente es incorrecto.
3. **Signo e interpretación**: el signo de [[F_C]] debe ser coherente con el producto [[q1]]·[[q2]]. Si las cargas tienen el mismo signo, [[F_C]] debe ser positiva (repulsión); si tienen signos contrarios, [[F_C]] debe ser negativa (atracción).
`;export{e as default};
