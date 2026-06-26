const e=`# Ejemplo tipo examen

## Enunciado

Una rendija rectangular de ancho desconocido es iluminada por un laser de helio-neon con longitud de onda de 632.8 nm. En una pantalla situada a 2.00 metros de la rendija, se observa que el primer minimo de difraccion aparece a 5.00 mm del maximo central. Se pide: (a) calcular el ancho de la rendija, (b) determinar la posicion del segundo minimo, y (c) verificar si es valida la aproximacion de angulo pequeno para este sistema.

## Datos

- Longitud de onda: 632.8 nm
- Distancia a pantalla: 2.00 m
- Posicion primer minimo: 5.00 mm
- Orden del primer minimo: primer orden

## Definición del sistema

El sistema consiste en una rendija unidimensional iluminada por luz monocromatica coherente (laser). La difraccion de Fraunhofer produce un patron de intensidad en la pantalla distante. Los minimos de intensidad aparecen en posiciones definidas por la condicion de interferencia destructiva.

## Modelo físico

Se aplica el modelo de difraccion de Fraunhofer para una rendizada rectangular:

- Iluminacion plana monocromatica
- Campo lejano (L mucho mayor que ancho de rendija)
- Aproximacion de angulo pequeno a verificar

La condicion de minimos de difraccion vincula [[theta_dif]] con la longitud de onda, la abertura y el orden:

{{f:condicion_minimos}}

La posicion lineal en la pantalla se relaciona con el angulo mediante:

{{f:posicion_lineal_minimos}}

## Justificación del modelo

El modelo de Fraunhofer es aplicable porque la distancia a la pantalla (2 m) es mucho mayor que el ancho esperado de la rendija (tipicamente milimetrico o menor). La iluminacion con laser proporciona luz coherente y monocromatica necesaria para patrones nitidos.

El modelo dejaria de ser valido si: (1) la pantalla estuviera muy cerca (campo cercano de Fresnel); (2) la iluminacion fuera policromatica (patrones superpuestos de diferentes longitudes de onda); o (3) la rendija no fuera rectangular (patron modificado por geometria).

## Resolución simbólica

Para el ancho de la rendija, despejamos de la condicion de minimos combinada con la relacion geometrica. Para angulo pequeno:

{{f:condicion_minimos}}

{{f:posicion_lineal_minimos}}

Despejando el ancho:

{{f:posicion_lineal_minimos}}

Para el segundo minimo, usando la misma relacion de posicion:

La posicion del segundo minimo es el doble de la del primero.

## Sustitución numérica

**Calculo del ancho de rendija:**

Operacion: multiplicar el orden, la longitud de onda y la distancia, dividiendo por la posicion del minimo.

Desglose numerico: usando los valores dados se obtiene un ancho de aproximadamente 0.253 mm.

Por tanto [[a_abertura]] aproximadamente 0.253 mm

**Calculo del segundo minimo:**

Operacion: multiplicar el orden del minimo por la distancia del primer minimo al centro.

Desglose numerico: el segundo minimo aparece al doble de distancia, es decir 10 mm.

Por tanto [[y_posicion]] para el segundo minimo es 10.0 mm.

Alternativamente, usando la posicion del primer minimo: el segundo minimo esta al doble de distancia, resultando aproximadamente 10 mm.

**Verificacion de aproximacion de angulo pequeno:**

El angulo [[theta_dif]] del primer minimo se obtiene con la aproximacion de angulo pequeno:

{{f:aproximacion_angulo_pequeno}}

Resulta aproximadamente la posicion dividida por la distancia, es decir unos 0.0025 rad

Este angulo es mucho menor que el limite tipico de 0.14 rad, asi que la aproximacion es valida con error menor al 0.1%.

## Validación dimensional

- Unidades de ancho: nanometros por metros dividido por metros da metros
- Desglose dimensional: longitud por longitud dividido por longitud da longitud.
- Conversion: 2.53 por 10 a la menos 4 metros equivale a 0.253 mm (escala razonable para rendija optica)

## Interpretación física

El resultado indica que la rendija tiene un ancho de aproximadamente un cuarto de milimetro. Este es un valor tipico para rendijas de laboratorio optico. La pequenez del ancho explica por que el patron de difraccion es observable: el cociente entre longitud de onda y ancho es del orden de milesimo, produciendo angulos de difraccion medibles en milimetros sobre la pantalla.

El segundo minimo aparece exactamente al doble de distancia del centro que el primero, confirmando la linealidad de la relacion posicion-orden en la aproximacion de angulo pequeno. Esta simetria y proporcionalidad son caracteristicas distintivas del patron de difraccion de Fraunhofer.

La validacion del angulo pequeno es crucial: con angulos tan pequeños, las diferencias entre la funcion seno y el angulo en radianes son despreciables. Esto justifica el uso de la formula simplificada y garantiza que los calculos son precisos sin necesidad de funciones trigonometricas exactas.

Si el ancho de rendija fuera el doble, la posicion del primer minimo se reduciria a la mitad, demostrando la relacion inversa entre ancho de abertura y extension del patron de difraccion. Esta dependencia inversa es fundamental para el diseno de filtros espaciales y sistemas opticos.

---

# Ejemplo de aplicación real

## Contexto

Los **espectrometros de red de difraccion** son instrumentos opticos que separan la luz en sus componentes espectrales mediante la difraccion por una rejilla con miles de lineas por milimetro. Cuando luz blanca atraviesa la red, cada longitud de onda se difracta en un angulo caracteristico, permitiendo analizar la composicion espectral de fuentes luminosas.

En astronomia, los espectrometros de red acoplados a telescopios permiten determinar la composicion quimica de estrellas y galaxias distantes. Cada elemento quimico produce lineas espectrales caracteristicas (longitudes de onda especificas) que aparecen como maximos de intensidad en posiciones angulares calculables por la ecuacion de difraccion.

## Estimación física

Consideremos un espectrometro con red de 1200 lineas por milimetro iluminada por luz de sodio (linea amarilla caracteristica a 589 nm). El espaciado entre rendijas es de 833 nm.

Para el primer orden de difraccion, el angulo satisface la condicion de la red: el seno del angulo es proporcional al cociente entre longitud de onda y espaciado de la red. Con los valores dados, este cociente es aproximadamente 0.707.

Por tanto theta aproximadamente 45 grados. Este angulo es facilmente medible y permite detectar la linea de sodio.

Para una segunda linea cercana (589.6 nm, la otra linea del doblete del sodio), el angulo es apenas ligeramente mayor (45.04 grados). Una red con suficiente resolucion puede separar estas dos lineas de 0.6 nm de diferencia, permitiendo identificar el elemento sodio en la fuente luminosa.

## Interpretación

La estimacion muestra que la difraccion por redes permite separar longitudes de onda con precision angular. El espectrometro convierte diferencias de longitud de onda en diferencias de angulo medibles. La resolucion espectral depende del numero total de lineas iluminadas y del orden de difraccion.

La aplicacion en astronomia es crucial: la luz de estrellas lejanas es demasiado debil para analisis quimico directo, pero el espectrometro de red dispersa esta luz en un espectro analizable. Las lineas de absorcion y emision revelan elementos presentes, temperaturas, velocidades radiales (desplazamiento Doppler) y campos magneticos de objetos astronomicos inaccesibles.

Variable dominante: el espaciado de la red de difraccion (lineas por milimetro), que determina la dispersion angular y la resolucion espectral alcanzable.

Límite de validez: la teoria supone rendijas ideales e iluminacion coherente. En redes reales, imperfecciones de fabricacion, efectos de polarizacion y dispersiones del sustrato modifican ligeramente los angulos teoricos. Ademas, a ordenes muy altos, los espectros de diferentes ordenes pueden superponerse (ambiguedad de orden), requiendo filtros de seleccion.
`;export{e as default};
