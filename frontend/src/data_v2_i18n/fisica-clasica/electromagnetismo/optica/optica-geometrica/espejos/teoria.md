## Contexto conceptual

Un espejo es una superficie pulida que refleja la luz de forma especular, es decir, siguiendo la ley de la reflexion. Dentro de la optica geometrica, los espejos son el primer dispositivo que permite formar **imagenes** de objetos: copias luminosas cuya posicion, tamano y orientacion dependen de la geometria de la superficie y de la distancia del objeto.

La optica de espejos complementa la de lentes al usar reflexion en lugar de refraccion. Comprender como un espejo esferico forma imagenes es esencial para interpretar telescopios reflectores, retrovisores de vehiculos, espejos de dentista y sistemas de concentracion solar, todos ellos presentes en la vida cotidiana y en la ingenieria.

## 🟢 Nivel esencial

Un **espejo plano** produce una imagen del mismo tamano que el objeto, a la misma distancia detras del espejo y con orientacion lateral invertida (inversion izquierda-derecha). La imagen es **virtual**: no puede recogerse en una pantalla porque los rayos reflejados no convergen realmente sino que sus prolongaciones parecen cruzarse detras del espejo.

Un **espejo concavo** tiene la superficie reflectante en la cara interior de una esfera. Los rayos paralelos al eje optico convergen en un punto llamado **foco** (F), situado a mitad de camino entre el vertice y el centro de curvatura. Si el objeto esta mas alla del foco, la imagen es real e invertida; si el objeto esta entre el foco y el espejo, la imagen es virtual, derecha y aumentada.

Un **espejo convexo** tiene la superficie reflectante en la cara exterior de la esfera. Los rayos paralelos divergen tras la reflexion como si procedieran de un foco virtual situado detras del espejo. La imagen siempre es virtual, derecha y reducida, lo que proporciona un campo de vision amplio, util en retrovisores y espejos de seguridad.

## 🔵 Nivel formal

La relacion cuantitativa entre la distancia del objeto [[d_o]], la distancia de la imagen [[d_i]] y la distancia focal [[distancia_focal_del_espejo]] viene dada por la ecuacion del espejo:

{{f:ecuacion_espejo}}

Donde [[d_o]] es la distancia desde el objeto hasta el vertice del espejo, [[d_i]] la distancia desde el vertice hasta la imagen y [[distancia_focal_del_espejo]] la distancia focal. En la convencion de signos habitual, las distancias reales (delante del espejo) son positivas y las virtuales (detras del espejo) negativas. Para un espejo concavo [[distancia_focal_del_espejo]] es positivo; para un espejo convexo [[distancia_focal_del_espejo]] es negativo.

El tamano relativo de la imagen se describe mediante el aumento lateral:

{{f:aumento_lateral}}

El signo de [[aumento_lateral]] indica la orientacion: negativo significa imagen invertida y positivo imagen derecha. El valor absoluto indica el factor de escala.

La distancia focal se relaciona con la geometria del espejo a traves de:

{{f:distancia_focal_radio}}

Donde [[radio_de_curvatura_del_espejo]] es el radio de curvatura de la superficie esferica. Esta relacion es exacta dentro de la aproximacion paraxial.

> [!NOTE]
> La convencion de signos es el aspecto mas critico al resolver problemas de espejos. Un error de signo en [[distancia_focal_del_espejo]] o [[d_o]] cambia completamente la naturaleza de la imagen (real frente a virtual, invertida frente a derecha).

## 🔴 Nivel estructural

La ecuacion del espejo se deriva trazando dos rayos principales desde un punto del objeto: el rayo paralelo al eje que se refleja pasando por el foco, y el rayo que pasa por el centro de curvatura que se refleja sobre si mismo. La interseccion de ambos rayos reflejados define la posicion de la imagen. Aplicando semejanza de triangulos se obtiene la relacion entre las distancias.

La aproximacion paraxial supone que los rayos forman angulos pequenos con el eje optico, de modo que el seno y la tangente del angulo se aproximan al angulo en radianes. Esta simplificacion es valida mientras la apertura del espejo sea mucho menor que [[radio_de_curvatura_del_espejo]]. Cuando la apertura es grande, los rayos marginales no convergen en el mismo punto que los paraxiales, generando **aberracion esferica**. Para corregirla se usan espejos parabolicos, cuya superficie no es esferica sino un paraboloide de revolucion que garantiza convergencia perfecta para rayos paralelos al eje.

> [!WARNING]
> La ecuacion del espejo solo es valida para espejos esfericos dentro de la aproximacion paraxial. Para espejos de gran apertura o fuentes fuera del eje, los resultados pueden diferir significativamente de la prediccion paraxial.

La dualidad entre imagenes reales y virtuales se refleja en el signo de [[d_i]]. En espejos concavos, la transicion entre imagen real e imagen virtual ocurre exactamente cuando el objeto se situa en el foco: para [[d_o]] mayor que [[distancia_focal_del_espejo]], la imagen es real; para [[d_o]] menor que [[distancia_focal_del_espejo]], es virtual. En espejos convexos no existe esa transicion porque la imagen es siempre virtual con [[d_i]] negativo.

## Interpretación física profunda

El signo negativo en la definicion de [[aumento_lateral]] codifica la inversion geometrica de la imagen. Cuando [[d_i]] y [[d_o]] tienen el mismo signo (ambos positivos para objeto real e imagen real), [[aumento_lateral]] resulta negativo, indicando inversion. Este resultado no es arbitrario: la inversion se produce porque los rayos reflejados cruzan el eje optico antes de converger, invirtiendo la orientacion vertical de la imagen respecto al objeto.

En el limite donde [[d_o]] tiende al infinito, [[d_i]] tiende a [[distancia_focal_del_espejo]]: los rayos procedentes de una fuente muy lejana convergen exactamente en el foco. Este principio es la base de los telescopios reflectores y de los concentradores solares. En el otro extremo, cuando [[d_o]] se aproxima a [[distancia_focal_del_espejo]], [[d_i]] diverge hacia el infinito, produciendo un haz de rayos reflejados practicamente paralelos, como ocurre en una linterna con espejo parabolico.

## Orden de magnitud

Para un espejo concavo de laboratorio tipico, [[radio_de_curvatura_del_espejo]] esta entre 0.10 y 1.00 m, de modo que [[distancia_focal_del_espejo]] varia entre 0.05 y 0.50 m. Retrovisores de vehiculos tienen radios de 1 a 3 m (convexos, [[distancia_focal_del_espejo]] negativo). Telescopios astronomicos emplean espejos con [[radio_de_curvatura_del_espejo]] de varios metros. Un resultado donde [[d_i]] supere [[d_o]] por un factor de 10 o mas deberia revisarse salvo que el objeto este muy proximo al foco. Un aumento [[aumento_lateral]] de magnitud superior a 5 es infrecuente fuera de montajes opticos especializados.

## Método de resolución personalizado

1. **Identificar el tipo de espejo**: concavo ([[distancia_focal_del_espejo]] positivo) o convexo ([[distancia_focal_del_espejo]] negativo).
2. **Obtener [[distancia_focal_del_espejo]]**: si se da [[radio_de_curvatura_del_espejo]], aplicar la relacion focal-radio.
3. **Sustituir en la ecuacion del espejo**: con [[d_o]] y [[distancia_focal_del_espejo]], despejar [[d_i]].
4. **Calcular el aumento**: con [[d_i]] y [[d_o]], obtener [[aumento_lateral]].
5. **Interpretar signos**: [[d_i]] positivo indica imagen real; negativo, virtual. [[aumento_lateral]] negativo indica imagen invertida; positivo, derecha.
6. **Verificar coherencia**: comprobar que el tipo de imagen (real o virtual, derecha o invertida) es compatible con la posicion del objeto y el tipo de espejo.

## Casos especiales y ejemplo extendido

- **Objeto en el centro de curvatura** ([[d_o]] igual a [[radio_de_curvatura_del_espejo]]): la imagen se forma en el mismo punto, [[d_i]] igual a [[radio_de_curvatura_del_espejo]], con [[aumento_lateral]] igual a menos uno. La imagen es real, invertida y del mismo tamano que el objeto.

- **Objeto en el foco** ([[d_o]] igual a [[distancia_focal_del_espejo]]): la ecuacion del espejo da [[d_i]] infinito. No se forma imagen finita; los rayos reflejados salen paralelos. Este caso es la base de los reflectores de linternas y faros.

- **Espejo convexo**: sin importar la posicion del objeto, [[d_i]] es siempre negativo y el modulo de [[aumento_lateral]] siempre menor que uno. La imagen es virtual, derecha y reducida, lo que explica la advertencia "los objetos en el espejo estan mas cerca de lo que aparentan" en los retrovisores.

## Preguntas reales del alumno

**¿Por que los retrovisores de los coches son convexos y no concavos?**
Un espejo convexo siempre produce una imagen reducida, lo que abarca un campo de vision mas amplio que un espejo plano del mismo tamano. El inconveniente es que los objetos parecen mas lejanos de lo que estan.

**¿Es cierto que un espejo concavo puede encender fuego?**
Si. Cuando un espejo concavo de gran diametro se orienta hacia el Sol, concentra la luz solar en el foco. La densidad de energia en ese punto puede ser suficiente para encender materiales inflamables. Este principio se usa en hornos solares.

**¿Que pasa si pongo un objeto exactamente en el foco de un espejo concavo?**
No se forma imagen en ninguna posicion finita: los rayos reflejados salen paralelos y "se encuentran en el infinito". En la practica, la imagen se proyecta como un haz colimado.

**¿Un espejo plano es un caso particular de espejo esferico?**
Si. Un espejo plano equivale a un espejo esferico con radio de curvatura infinito, lo que da una focal infinita. La ecuacion del espejo se reduce entonces a [[d_i]] igual a menos [[d_o]], imagen virtual a igual distancia detras del espejo.

## Conexiones transversales y rutas de estudio

Los espejos conectan directamente con las [lentes](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/lentes), cuya ecuacion tiene estructura identica pero usa refraccion en lugar de reflexion. Tambien se relacionan con la [reflexion](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/reflexion), que proporciona la ley fundamental sobre la que se construye la optica de espejos.

Fuera de la optica geometrica, los espejos aparecen en cavidades laser, interferometros y telescopios de ondas gravitacionales, conectando con optica fisica y con fisica moderna.

## Síntesis final

Los espejos esferico forman imagenes cuya posicion y tamano quedan determinados por la ecuacion del espejo y el aumento lateral. La convencion de signos distingue imagenes reales de virtuales y orientacion invertida de derecha. Dominar estas relaciones permite interpretar desde un simple retrovisor hasta un telescopio reflector, y constituye la base para el estudio posterior de lentes y sistemas opticos compuestos.