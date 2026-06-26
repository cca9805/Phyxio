# Ejemplo tipo examen


## Enunciado

Una bobina larga produce una intensidad magnetica uniforme en el interior de un nucleo. Se introduce un material lineal y reversible cuya permeabilidad relativa se conoce. Estima la permeabilidad absoluta, la susceptibilidad magnetica, la [[magnetizacion]] inducida y el campo magnetico total. Decide ademas si el material se comporta como concentrador fuerte de campo dentro del modelo lineal.

## Datos

- Intensidad magnetica aplicada: 800 A/m.
- Permeabilidad relativa del material: 1500.
- Permeabilidad del vacio: 1.2566e-6 H/m.
- Regimen indicado: lineal, isotropo y sin saturacion apreciable.

## Definición del sistema

El sistema es el volumen central del nucleo, donde se supone que [[intensidad_magnetica]] es practicamente uniforme. Se toma la direccion positiva en el sentido de la corriente que magnetiza la bobina. El material no se trata como imán permanente, sino como medio que responde mediante [[magnetizacion]] inducida.

La magnitud de salida mas util para fuerzas o induccion posterior sera [[campo_magnetico_total]], pero antes conviene leer [[mu]] y [[chi_m]] para saber que tipo de respuesta material se esta usando.

## Modelo físico

Se aplica el modelo lineal de materiales magneticos. La permeabilidad relativa [[mu_r]] compara el material con el vacio, la permeabilidad absoluta [[mu]] da la escala dimensional y la susceptibilidad [[chi_m]] mide la [[magnetizacion]] por unidad de [[intensidad_magnetica]].

La respuesta interna se resume con [[magnetizacion]], mientras que [[campo_magnetico_total]] representa el campo total dentro del material. La separacion entre estas magnitudes es el punto fisico central del ejercicio.

## Justificación del modelo

El enunciado declara regimen lineal y ausencia de saturacion apreciable. Eso justifica usar una pendiente constante para relacionar [[campo_magnetico_total]] con [[intensidad_magnetica]] y [[magnetizacion]] con [[intensidad_magnetica]]. Si el nucleo estuviera cerca de saturacion o mostrara histeresis, habria que reemplazar estas constantes por una curva experimental.

El valor de [[mu_r]] es alto, asi que se espera una concentracion fuerte de campo respecto al vacio. La validez no procede de que el numero sea alto, sino de que el problema restringe el calculo al tramo lineal.

## Resolución simbólica

Primero se obtiene la permeabilidad absoluta:

{{f:permeabilidad_absoluta}}

Despues se calcula la susceptibilidad asociada a la permeabilidad relativa:

{{f:susceptibilidad_desde_permeabilidad}}

Con esa susceptibilidad se estima la [[magnetizacion]] inducida:

{{f:magnetizacion_lineal}}

Por ultimo se obtiene el campo total en el medio:

{{f:campo_material_lineal}}

El orden logico evita confundir causa y resultado: [[intensidad_magnetica]] es la entrada, [[magnetizacion]] es respuesta interna, [[mu]] es escala del medio y [[campo_magnetico_total]] es el campo final.

## Sustitución numérica

Multiplicar 1.2566e-6 H/m por 1500 da aproximadamente 1.885e-3 H/m. Por tanto [[mu]] es aproximadamente 1.885e-3 H/m.

Restar la referencia unidad a 1500 da 1499. Por tanto [[chi_m]] es aproximadamente 1499, un valor efectivo muy alto y positivo.

Multiplicar 1499 por 800 A/m da aproximadamente 1.199e6 A/m. Por tanto [[magnetizacion]] es aproximadamente 1.199e6 A/m y apunta en el sentido de [[intensidad_magnetica]].

Multiplicar 1.885e-3 H/m por 800 A/m da aproximadamente 1.51 T. Por tanto [[campo_magnetico_total]] es aproximadamente 1.51 T dentro del tramo lineal declarado.

## Validación dimensional

La permeabilidad absoluta [[mu]] conserva la unidad H/m porque [[mu_r]] es adimensional. La susceptibilidad [[chi_m]] tambien es adimensional, ya que compara respuesta material con excitacion aplicada.

Para [[magnetizacion]], multiplicar una magnitud adimensional por [[intensidad_magnetica]] conserva A/m. Esa unidad corresponde a dimension de corriente por longitud.

Para [[campo_magnetico_total]], el producto de H/m por A/m produce tesla. La unidad resultante tiene dimension magnetica de masa por tiempo al cuadrado y corriente inversa. Las unidades son coherentes con el papel fisico de cada magnitud.

## Interpretación física

El resultado muestra un material que concentra fuertemente el campo en el tramo lineal indicado. La clave no es solo que [[campo_magnetico_total]] sea grande, sino que [[mu_r]] y [[chi_m]] son grandes y positivos: la [[magnetizacion]] inducida acompaña a la excitacion aplicada y amplifica el campo total respecto al vacio.

Si [[intensidad_magnetica]] se duplicara dentro del mismo tramo lineal, [[magnetizacion]] y [[campo_magnetico_total]] tambien aumentarian proporcionalmente. Pero esa conclusion depende de no alcanzar saturacion. Si una curva real del material se aplana alrededor de valores cercanos a este campo, la estimacion de 1.51 T tendria que revisarse con datos experimentales.

Fisicamente, [[intensidad_magnetica]] no es "el campo final de la bobina dentro del nucleo"; es la excitacion que permite activar la respuesta del material. [[campo_magnetico_total]] es el resultado que importaria para fuerzas magneticas o para flujo en un circuito magnetico. Separar esas dos lecturas evita el error central de este leaf.

# Ejemplo de aplicación real


## Contexto

En el diseño preliminar de un transformador pequeño se compara si conviene usar aire o un nucleo ferromagnetico blando. La bobina puede producir la misma [[intensidad_magnetica]] en ambos casos, pero el dispositivo necesita un [[campo_magnetico_total]] mucho mayor para guiar flujo con pocas espiras.

El ingeniero no puede elegir solo por el valor nominal de [[mu_r]]. Debe comprobar que el punto de trabajo se mantiene lejos de saturacion y que las perdidas aceptables no obligan a otro material.

## Estimación física

Si el nucleo trabaja en un tramo con [[mu_r]] de orden mil, el campo total [[campo_magnetico_total]] puede ser de orden mil veces el que se obtendria en aire para la misma [[intensidad_magnetica]]. Esa es la razon fisica por la que los nucleos magneticos reducen el tamaño de transformadores e inductores.

Sin embargo, cuando [[campo_magnetico_total]] se acerca a valores de teslas, la curva del material suele dejar de ser una recta perfecta. Entonces la cifra de [[mu_r]] inicial ya no decide el diseño por si sola. La estimacion debe complementarse con curva de saturacion, frecuencia y perdidas.

## Interpretación

El material magnetico funciona como concentrador de campo solo mientras conserva una pendiente util. En aire, [[mu_r]] esta cerca de uno y la bobina necesita mas corriente o mas espiras para alcanzar el mismo efecto.

La decision practica no es "material con mayor [[mu_r]] siempre gana". Es elegir el material cuya respuesta lineal, limite de [[campo_magnetico_total]], perdidas y geometria son compatibles con el uso real del transformador.