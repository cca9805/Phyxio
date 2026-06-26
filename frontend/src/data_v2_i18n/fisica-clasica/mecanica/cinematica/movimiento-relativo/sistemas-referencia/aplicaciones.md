# Aplicaciones prácticas: sistemas de referencia [[frame_sigma]] 

## 1. Seguimiento por cámara fija en una pista

En una pista de pruebas, una cámara anclada al suelo registra el paso de un coche eléctrico y de un dron que lo acompaña. La decisión concreta es determinar si la velocidad que aparece en el video corresponde al coche respecto al suelo o al coche respecto al dron. Si el analista no fija desde el principio el [[frame_sigma]] de la cámara fija, termina mezclando el desplazamiento del coche con el desplazamiento del sensor móvil y la lectura temporal pierde significado.

Aquí el marco fijo al suelo conviene porque el objetivo es comparar la trayectoria con marcas pintadas sobre el asfalto. La aplicación muestra por qué la posición [[r_vec]] no es un dato bruto del objeto, sino una magnitud ligada a un origen [[O]] y a un observador. Cambiar a un marco asociado al dron podría simplificar el seguimiento visual, pero ocultaría la información que el ingeniero necesita para certificar el ensayo.

**Variable dominante**: Posición [[r_vec]] del coche respecto al marco fijo de la pista.

**Límite de validez:** Solo funciona si la cámara fija no vibra de forma apreciable y el marco del suelo permanece inercial durante el ensayo.

## 2. Robot de picking sobre cinta transportadora

En un centro logístico, una cinta transportadora lleva cajas hacia un brazo robot montado sobre una guía móvil. La decisión real es escoger desde qué marco se programará el cierre de la pinza. Si el software usa un marco fijo al suelo, la caja parece avanzar con rapidez apreciable; si usa el marco de la guía, la misma caja puede verse casi quieta durante el instante de agarre.

La aplicación es distinta de la pista porque aquí importa estabilizar una maniobra local. El técnico necesita separar la velocidad del marco [[v_frame]] de la pequeña corrección relativa de la caja. Si confunde ambas, la pinza llegará tarde. El caso deja claro que el mejor marco no es el más "verdadero", sino el que vuelve más simple la decisión concreta.

**Variable dominante**: Velocidad del marco móvil [[v_frame]] respecto al suelo del almacén.

**Límite de validez:** La comparación es v?lida mientras la guía móvil mantenga velocidad casi constante durante el agarre.

## 3. Información al pasajero dentro de un tren

Un sistema de información quiere mostrar al pasajero dos datos: la velocidad del tren respecto a la vía y la velocidad de una persona caminando por el pasillo respecto al vagón. La decisión de diseño consiste en no presentar ambos valores como si midieran lo mismo. Si la interfaz no distingue marcos, el usuario puede interpretar erróneamente que caminar dentro del tren cambia la velocidad comercial del convoy.

Esta aplicación obliga a diferenciar niveles: el movimiento interno del pasajero dentro del marco y el movimiento del marco entero respecto a la vía. El leaf aparece aquí como criterio de interfaz: dos lecturas pueden ser correctas y, aun así, resultar engañosas si no se explicita desde qué sistema de referencia [[frame_sigma]] se formulan.

**Variable dominante**: Marco de referencia [[frame_sigma]] elegido para cada mensaje operativo.

**Límite de validez:** La interfaz debe separar velocidades respecto al vagón y respecto a la vía; si el tren acelera, la lectura requiere otro modelo.

## 4. Maniobra de atraque con plataforma flotante

Durante un atraque, una plataforma flotante se mueve despacio respecto al muelle mientras un operario observa desde cubierta y otro desde tierra. El mismo vector de posición [[r_vec]] del gancho puede ser casi constante para el operario embarcado y, al mismo tiempo, disminuir rápidamente para el observador del muelle.

Si no se explicita el cambio de observador, una orden como "ya estamos quietos" puede ser localmente verdadera y globalmente falsa. El ejemplo enseña por qué la referencia correcta no solo simplifica cálculos: coordina decisiones entre personas que miran el mismo evento desde marcos distintos.

**Variable dominante**: Posición [[r_vec]] lateral del gancho respecto al muelle (marco de seguridad).

**Límite de validez:** La orden operativa solo es fiable si se declara si el marco de seguridad es el muelle o la plataforma flotante.

## 5. Análisis de video en laboratorio docente

En un laboratorio, se graba un carrito con una cámara fija y con una móvil. La decisión didáctica es mostrar que los dos videos no se contradicen aunque produzcan coordenadas distintas. El alumno puede ver que el evento de cruce ocurre una sola vez, pero que la lectura de posición [[r_vec]] depende del origen [[O]] elegido y que la velocidad [[v]] cambia por la presencia de [[v_frame]] .

El valor pedagógico es alto porque hace visible un error común: creer que existe una posición "absoluta" y que el observador solo añade ruido a la medida. El leaf enseña que medir es, por definición, medir respecto a algo.

**Variable dominante**: Elección explícita del origen [[O]] y el tiempo común [[t_global]] .

**Límite de validez:** La comparación didáctica exige relojes sincronizados y ejes paralelos entre cámara fija y cámara móvil.
