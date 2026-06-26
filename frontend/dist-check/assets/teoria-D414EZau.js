const e=`# Instrumentos opticos

## Contexto conceptual

El ojo humano tiene un limite de resolucion angular y una distancia minima de enfoque que restringen la percepcion de objetos pequenos o lejanos. Los **instrumentos opticos** superan estas restricciones combinando lentes convergentes para ampliar el angulo bajo el cual el observador percibe la imagen. La lupa, el microscopio compuesto y el telescopio refractor son los tres instrumentos fundamentales de la optica geometrica paraxial.

Este leaf se centra en como la **combinacion de lentes delgadas** determina la posicion de la imagen final y el aumento angular del instrumento. Comprender estos principios permite disenar sistemas opticos y evaluar sus prestaciones con criterio fisico, sin depender de recetas algebraicas memorizadas.

## 🟢 Nivel esencial

Cuando un objeto es demasiado pequeno para distinguirlo a simple vista, se necesita una lente que haga que los rayos de luz lleguen al ojo formando un angulo mayor. Ese angulo mayor hace que el cerebro interprete el objeto como mas grande. El **aumento angular** [[M_angular]] cuantifica cuantas veces se amplifica dicho angulo.

La **lupa** es la forma mas sencilla de instrumento optico: una unica lente convergente de focal corta [[f_lupa]] colocada de modo que el objeto quede entre ella y su foco. La imagen resultante es virtual, derecha y ampliada. Para ver objetos aun mas pequenos se recurre al **microscopio compuesto**, que encadena dos lentes: un objetivo de focal muy corta [[f_obj]] y un ocular [[f_oc]] que actua como segunda lupa. El resultado es un aumento total [[M_micro]] mucho mayor que el de cualquier lente sola.

## 🔵 Nivel formal

La ecuacion de la lente delgada relaciona las distancias del objeto [[d_o]], de la imagen [[d_i]] y la focal [[f]]:

{{f:ecuacion_lente_delgada}}

Esta expresion es el punto de partida para analizar cada etapa de un instrumento optico. Si el objeto se situa entre la lente y el foco de una lente convergente, la imagen es virtual y ampliada; este es el principio de la lupa.

El aumento angular de la lupa, con el ojo relajado enfocando al infinito, se obtiene como:

{{f:aumento_angular_lupa}}

donde [[d_pp]] es la distancia convencional del punto proximo (0.25 m). A menor [[f_lupa]], mayor [[M_angular]].

En el microscopio compuesto, el objetivo forma una imagen real intermedia ampliada a una distancia determinada por la longitud del tubo [[L]]. El ocular amplifica angularmente esa imagen intermedia. El aumento total resulta:

{{f:aumento_microscopio}}

El producto refleja que el aumento total es la composicion multiplicativa del aumento lateral del objetivo y del aumento angular del ocular. Un objetivo con [[f_obj]] de pocos milimetros y un ocular con [[f_oc]] de dos a tres centimetros producen aumentos de varios centenares.

> [!NOTE]
> En el telescopio refractor el principio es analogo, pero el objetivo tiene focal larga para recoger luz de objetos lejanos y el ocular tiene focal corta para ampliar angularmente la imagen.

## 🔴 Nivel estructural

La **estructura profunda** de los instrumentos opticos se revela al analizar como se encadenan las conjugaciones opticas. Cada lente establece una relacion entre plano objeto y plano imagen. En un instrumento de dos lentes, la imagen del primer elemento se convierte en objeto del segundo. La posicion relativa de los focos internos controla la separacion optica y, con ella, el aumento total.

La **longitud del tubo** [[L]] del microscopio es la distancia entre el foco imagen del objetivo y el foco objeto del ocular. Al aumentar [[L]], la imagen intermedia crece proporcionalmente, elevando el aumento total. Sin embargo, aumentar [[L]] indefinidamente no es viable porque la luminosidad de la imagen cae y las aberraciones se amplifican.

El **regimen de validez** del modelo de lente delgada exige que los angulos de los rayos respecto al eje optico sean pequenos, que el espesor de cada lente sea despreciable frente a las distancias focales y que la aberracion cromatica no domine. Cuando la apertura numerica del objetivo crece para captar mas detalle, las aberraciones de orden superior invalidan las formulas paraxiales y se requieren modelos de trazado de rayos reales.

La dependencia del aumento angular con la focal es **hiperbolica**: reducir la focal a la mitad duplica el aumento. Esta sensibilidad implica que pequenos errores en la fabricacion de la lente del objetivo se traducen en grandes desviaciones del aumento esperado. Ademas, la **difraccion** impone un limite fisico al aumento util: superar el llamado aumento vacio no revela mas detalle sino que amplifica la mancha de difraccion, degradando la imagen sin aportar informacion nueva.

La coherencia entre la focal del objetivo, la del ocular y la longitud del tubo debe mantenerse: modificar uno de estos parametros sin ajustar los demas produce imagenes desenfocadas o aumentos inutiles. Este acoplamiento es la razon por la que los microscopios comerciales usan distancias normalizadas (tubo de 0.16 m, punto proximo de 0.25 m).

## Interpretacion fisica profunda

El aumento angular no es simplemente un numero que indica cuanto mas grande se ve el objeto. Fisicamente, expresa la **redistribucion del cono de rayos** que llega a la retina. Una lupa con [[M_angular]] igual a 10 hace que el angulo subtendido sea diez veces mayor; esto significa que la imagen retiniana ocupa diez veces mas area, activando mas fotorreceptores y permitiendo distinguir detalles antes invisibles.

En el microscopio, el objetivo genera una primera redistribucion (aumento lateral) y el ocular una segunda (aumento angular). El resultado neto es que la informacion contenida en una region microscopica del objeto se proyecta sobre un area macroscopica de la retina. La **cadena de aumentos** es multiplicativa, no aditiva: duplicar el aumento del objetivo y el del ocular cuadruplica el aumento total, no lo duplica.

## Orden de magnitud

Una lupa de joyeria con [[f_lupa]] de 0.025 m proporciona un aumento angular de aproximadamente 10. Un microscopio escolar con [[f_obj]] de 0.004 m, [[f_oc]] de 0.025 m y [[L]] de 0.16 m alcanza un aumento total cercano a 400. Si el resultado calculado es inferior a 2 para una lupa o inferior a 40 para un microscopio compuesto, conviene revisar los datos. Un aumento de 10 000 sin objetivo de inmersion es fisicamente sospechoso y probablemente excede el aumento util del instrumento.

## Metodo de resolucion personalizado

1. **Identificar el instrumento**: lupa (una lente), microscopio (dos lentes con tubo), telescopio (dos lentes sin tubo finito).
2. **Seleccionar la formula adecuada**: lupa usa la relacion con [[d_pp]] y [[f_lupa]]; microscopio usa la formula con [[L]], [[f_obj]] y [[f_oc]].
3. **Verificar signos**: las focales de lentes convergentes son positivas; las distancias de imagen virtuales son negativas.
4. **Calcular el aumento** y comprobar que el orden de magnitud coincide con los valores tipicos del instrumento.
5. **Validar dimensionalmente**: el aumento angular es adimensional; las distancias deben resultar en metros.

## Casos especiales y ejemplo extendido

- **Objeto en el foco de la lupa**: la imagen se forma en el infinito y el ojo relajado la observa con el maximo confort visual. El aumento angular coincide exactamente con [[d_pp]] dividido entre [[f_lupa]].

- **Microscopio con tubo corto**: si [[L]] es mucho menor que el valor estandar (por ejemplo, la mitad), el aumento lateral del objetivo se reduce proporcionalmente y el aumento total cae. Un microscopio con longitud de tubo de 0.08 m en lugar de 0.16 m pierde la mitad de su aumento total.

- **Lupa con focal larga**: una lente de focal 0.25 m proporciona [[M_angular]] de solo 1, es decir, no amplifica; esto corresponde al limite inferior de utilidad del instrumento.

> [!TIP]
> Para estimar rapidamente el aumento de un microscopio, multiplicar el aumento grabado en el objetivo por el del ocular. Un objetivo 40x con ocular 10x da 400 aumentos.

## Preguntas reales del alumno

- **¿Por que no puedo usar una sola lente muy potente en lugar de un microscopio?**
  Una lente sola con focal de fraccion de milimetro tendria aberraciones enormes y un campo de vision diminuto. El microscopio reparte la tarea entre dos lentes, cada una trabajando en un regimen comodo.

- **¿Que pasa si aumento mucho mas alla del aumento util?**
  La imagen se hace mas grande pero no mas nitida. Se amplifica la mancha de difraccion y el ruido optico, obteniendo lo que se denomina aumento vacio.

- **¿Por que la imagen del microscopio esta invertida?**
  El objetivo forma una imagen real e invertida. El ocular la amplifica pero no la reinvierte. Para observar la orientacion correcta se necesitan prismas adicionales, como en los microscopios estereoscopicos.

- **¿Influye la luz ambiental en el aumento?**
  No en el aumento, pero si en el contraste y la visibilidad. Un buen sistema de iluminacion (condensador) es esencial para aprovechar el aumento del microscopio.

## Conexiones transversales y rutas de estudio

El estudio de instrumentos opticos conecta directamente con el leaf de [Lentes](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/lentes), que establece la ecuacion de la lente delgada, y con [Espejos](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos), donde se desarrolla la formacion de imagenes por reflexion. El concepto de difraccion, tratado en optica fisica, impone el limite ultimo de resolucion que ningun instrumento optico puede superar con aumentos geometricos.

## Sintesis final

Los instrumentos opticos amplifican el angulo bajo el cual el ojo percibe un objeto combinando lentes de focales adecuadas. La lupa usa una sola lente convergente y ofrece aumentos moderados; el microscopio compuesto encadena objetivo y ocular para alcanzar aumentos de centenares. El aumento total es siempre un producto, nunca una suma, y su limite fisico no es la focal mas corta disponible sino la difraccion de la luz.
`;export{e as default};
