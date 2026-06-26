## Contexto conceptual

Una lente es un medio transparente limitado por dos superficies curvas que desvian la luz por refraccion. A diferencia de los espejos, que trabajan por reflexion, las lentes transmiten la luz y la redirigen hacia un punto focal o la dispersan desde el. El estudio de las lentes constituye el pilar de la **optica geometrica aplicada**: desde las gafas correctoras hasta los sistemas de proyeccion, la formacion de imagenes depende de comprender como la geometria de la lente y su material determinan el camino de los rayos.

Este leaf se centra en el modelo de **lente delgada**, donde el espesor del vidrio es despreciable frente a las distancias de trabajo. Este modelo permite predecir la posicion, tamano y orientacion de la imagen formada a partir de magnitudes medibles experimentalmente.

## 🟢 Nivel esencial

Cuando un haz de rayos paralelos atraviesa una lente convergente, los rayos se cruzan en un punto llamado **foco**. La distancia entre el centro de la lente y el foco es la **distancia focal** [[distancia_focal]]. Si la lente es divergente, los rayos divergen y sus prolongaciones se cortan en un foco virtual.

La posicion de la imagen [[d_i]] depende de donde se coloque el objeto [[d_o]] respecto al foco. Si el objeto esta mas alla del foco de una lente convergente, la imagen es **real** (puede proyectarse en pantalla) e **invertida**. Si el objeto esta entre la lente y el foco, la imagen es **virtual**, **derecha** y **amplificada**. El **aumento lateral** [[aumento_lateral]] cuantifica cuanto mas grande o pequena es la imagen respecto al objeto y si esta invertida o no.

## 🔵 Nivel formal

La relacion fundamental que gobierna la formacion de imagenes en una lente delgada es:

{{f:ecuacion_lente_delgada}}

Esta ecuacion conecta la distancia focal [[distancia_focal]] con la posicion del objeto [[d_o]] y la posicion de la imagen [[d_i]]. Los signos siguen la convencion: distancias positivas en el sentido de propagacion de la luz. Para una lente convergente [[distancia_focal]] es positivo; para una divergente, negativo. Si [[d_i]] resulta positivo la imagen es real; si es negativo, virtual.

El tamano y orientacion de la imagen se obtienen mediante el aumento lateral:

{{f:aumento_lateral}}

El signo negativo indica que cuando [[d_i]] y [[d_o]] son ambos positivos, [[aumento_lateral]] es negativo: la imagen real esta invertida. El modulo de [[aumento_lateral]] mayor que uno significa imagen amplificada; menor que uno, reducida.

La relacion entre la distancia focal y las propiedades fisicas de la lente viene dada por la ecuacion del fabricante:

{{f:ecuacion_fabricante_lentes}}

Aqui [[indice_de_refraccion_de_la_lente]] es el indice de refraccion del material y [[radio_de_curvatura_de_la_primera_superficie]], [[radio_de_curvatura_de_la_segunda_superficie]] son los radios de curvatura de las superficies. Esta ecuacion muestra que la potencia optica de la lente depende tanto del material como de la geometria de sus superficies.

## 🔴 Nivel estructural

La estructura del modelo de lente delgada descansa sobre tres pilares: la **aproximacion paraxial**, la **despreciabilidad del espesor** y la **homogeneidad del medio exterior**. Cuando alguno de estos pilares falla, el modelo produce predicciones incorrectas.

La aproximacion paraxial exige que los rayos formen angulos pequenos con el eje optico. En la practica, esto se cumple razonablemente cuando la apertura de la lente es mucho menor que su distancia focal. Para lentes de gran apertura, aparecen **aberraciones esfericas** que desplazan la imagen real respecto a la prediccion paraxial. La aberracion cromatica surge adicionalmente cuando la luz no es monocromatica, porque [[indice_de_refraccion_de_la_lente]] depende de la longitud de onda.

La dependencia de [[d_i]] con [[d_o]] es **hiperbolica**: cuando [[d_o]] se acerca al foco, [[d_i]] tiende a infinito (la imagen se forma muy lejos). Cuando [[d_o]] vale exactamente [[distancia_focal]], la ecuacion predice imagen en el infinito y el modelo pierde sentido practico local. Este comportamiento asintotico delimita la zona de operacion estable de cualquier sistema optico basado en lentes.

La ecuacion del fabricante revela que lentes de igual forma geometrica pero distinto material producen focales diferentes. Un aumento de [[indice_de_refraccion_de_la_lente]] reduce la distancia focal, incrementando la potencia optica. Esto tiene implicaciones directas en el diseno: materiales de alto indice permiten lentes mas delgadas y ligeras con la misma potencia. Sin embargo, materiales de alto indice suelen presentar mayor dispersion, lo que introduce aberracion cromatica.

El aumento lateral [[aumento_lateral]] conecta directamente con la conservacion de la relacion de tamanos. La inversion de la imagen (signo negativo de [[aumento_lateral]]) no es un artefacto matematico sino una consecuencia geometrica del cruce de rayos en un punto: todo par de rayos que converge en un punto imagen real invierte necesariamente la orientacion del objeto. Solo cuando la imagen es virtual (los rayos no convergen realmente) la imagen mantiene la orientacion original.

> [!WARNING]
> La ecuacion de la lente delgada falla silenciosamente cuando el espesor de la lente no es despreciable. En lentes gruesas, los planos principales no coinciden con el centro optico y las distancias deben medirse desde estos planos, no desde la lente fisica.

## Interpretación física profunda

El signo de [[d_i]] codifica informacion fisica fundamental: no es solo un numero sino un **clasificador del tipo de imagen**. Imagen real significa que la energia luminosa converge fisicamente en un punto del espacio y puede interceptarse con una pantalla. Imagen virtual significa que la convergencia es solo aparente, resultado de prolongar hacia atras las trayectorias de los rayos refractados.

El aumento [[aumento_lateral]] tiene una lectura dual: su **modulo** indica la escala espacial de la imagen y su **signo** indica la paridad de la orientacion. Esta dualidad signo-modulo es comun en magnitudes opticas y conviene tratarla explicitamente para evitar errores de interpretacion.

## Orden de magnitud

Las lentes de laboratorio educativo tienen focales tipicas entre 5 cm y 50 cm. Un ojo humano normal tiene una potencia optica equivalente a una focal de aproximadamente 17 mm. Las lentes de camaras fotograficas varian entre 10 mm (gran angular) y 600 mm (teleobjetivo). Si un calculo produce una focal de 0.001 m para una lente de vidrio comun, el resultado es sospechoso. Analogamente, un aumento lateral de 100 para una sola lente delgada indica proximidad extrema al foco y probable invalidez del modelo paraxial.

## Método de resolución personalizado

- **Paso 1**: Identificar el tipo de lente (convergente si [[distancia_focal]] positivo, divergente si negativo) y los datos disponibles.
- **Paso 2**: Aplicar la ecuacion de la lente delgada para encontrar la magnitud desconocida.
- **Paso 3**: Comprobar el signo de [[d_i]]. Positivo indica imagen real; negativo, virtual.
- **Paso 4**: Calcular [[aumento_lateral]] para determinar tamano y orientacion.
- **Paso 5**: Verificar coherencia de signos entre [[d_i]] y [[aumento_lateral]].
- **Paso 6**: Validar el resultado con un trazado de rayos principales (rayo paralelo, rayo por el centro, rayo por el foco).

## Casos especiales y ejemplo extendido

**Objeto en el infinito**: cuando [[d_o]] tiende a infinito, la ecuacion de la lente da [[d_i]] igual a [[distancia_focal]]. La imagen se forma exactamente en el plano focal. Este es el caso de una camara enfocando un objeto lejano.

**Objeto en el foco**: cuando [[d_o]] es exactamente igual a [[distancia_focal]] en una lente convergente, [[d_i]] tiende a infinito. Los rayos emergen paralelos y no se forma imagen a distancia finita. Este caso se utiliza en proyectores colimados y faros.

**Lente divergente con objeto real**: [[d_i]] siempre resulta negativo, independientemente de la posicion del objeto. La imagen es siempre virtual, derecha y reducida. El modulo de [[aumento_lateral]] es siempre menor que uno.

> [!TIP]
> Para verificar rapidamente la coherencia de un resultado, trazar mentalmente el rayo que pasa por el centro optico (no se desvía) y comprobar que la imagen calculada esta en la interseccion con el rayo paralelo refractado por el foco.

## Preguntas reales del alumno

- **¿Por que la imagen se invierte al pasar el objeto mas alla del foco?**
Porque los rayos cruzan el eje optico al converger. Geometricamente, el rayo superior del objeto termina abajo en la imagen y viceversa.

- **¿Una lente divergente puede formar imagen real?**
No con un objeto real. Solo con un objeto virtual (creado por otra lente) puede una lente divergente producir imagen real, y solo en ciertas condiciones.

- **¿Que ocurre si coloco el objeto exactamente en el centro de curvatura?**
En una lente convergente con objeto a [[d_o]] igual a dos veces [[distancia_focal]], la imagen se forma a la misma distancia al otro lado, con [[aumento_lateral]] igual a menos uno: imagen real, invertida y del mismo tamano.

- **¿Por que las gafas de miope son divergentes?**
El ojo miope converge demasiado, formando la imagen delante de la retina. La lente divergente reduce la convergencia total, desplazando la imagen hacia la retina.

## Conexiones transversales y rutas de estudio

Este leaf conecta directamente con [Refraccion](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/refraccion), que proporciona la base fisica de por que la lente desvía los rayos. Hacia adelante, [Instrumentos opticos](leaf:fisica-clasica/electromagnetismo/optica/optica-geometrica/instrumentos-opticos) combina varias lentes para lograr aumentos mayores. La ecuacion del fabricante enlaza con las propiedades de los materiales opticos estudiadas en otros bloques de electromagnetismo.

## Síntesis final

La lente delgada transforma la posicion y el tamano de un objeto mediante refraccion controlada por su geometria y material. La ecuacion de la lente, el aumento lateral y la ecuacion del fabricante forman un sistema cerrado que permite predecir completamente la imagen para cualquier configuracion paraxial. Dominar los signos de estas magnitudes equivale a dominar la clasificacion de imagenes reales y virtuales.