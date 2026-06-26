const e=`## Errores conceptuales

### Error 1: Medir el angulo de incidencia desde la superficie en vez de desde la normal

**Por qué parece correcto**

El alumno ve la superficie como referencia natural porque es el elemento fisico visible. La generalizacion incorrecta es suponer que el angulo relevante es el formado entre el rayo y la superficie, no el formado con una linea imaginaria perpendicular.

**Por qué es incorrecto**

La ley de reflexion se formula con respecto a la normal, no a la superficie. Si se mide el angulo desde la superficie (llamemoslo alfa), el angulo correcto para la ley es 90 menos alfa. Usar alfa directamente produce un rayo reflejado con direccion erronea.

**Señal de detección**

El alumno obtiene un rayo reflejado que no cumple la simetria respecto a la normal, o suma angulos que dan mas de 90 grados respecto a la normal.

**Corrección conceptual**

Dibujar siempre la normal primero, perpendicular a la superficie en el punto de contacto. Medir [[theta_i]] y [[theta_r]] desde esa normal. Si el enunciado da el angulo respecto a la superficie, convertirlo restando de 90 grados antes de aplicar la ley.

**Mini-ejemplo de contraste**

Un rayo incide a 30 grados de la superficie. Correcto: [[theta_i]] es 60 grados (medido desde la normal), luego [[theta_r]] es 60 grados. Incorrecto: usar 30 grados directamente como [[theta_i]], obteniendo un rayo reflejado a solo 30 grados de la normal, mucho mas vertical de lo que deberia.

## Errores de modelo

### Error 2: Asumir que la ley de reflexion no se aplica en superficies rugosas

**Por qué parece correcto**

En una superficie rugosa no se ve un reflejo definido (como en un espejo), por lo que la analogia incorrecta es concluir que la luz no sigue la ley de reflexion en ese caso.

**Por qué es incorrecto**

La ley de reflexion se cumple localmente en cada punto microscopico de la superficie. Lo que cambia es que cada punto tiene una normal diferente (aleatoria), por lo que cada rayo individual se refleja en una direccion distinta. El efecto macroscopico es dispersion difusa, pero la ley fundamental se sigue aplicando a cada rayo individual.

**Señal de detección**

El alumno afirma que la reflexion difusa viola la ley de reflexion, o que no hay reflexion en superficies mate.

**Corrección conceptual**

La reflexion difusa es la aplicacion masiva de la ley de reflexion a millones de normales locales orientadas al azar. La ley no falla: lo que falla es la suposicion de una normal unica para toda la superficie. En cada microfaceta, [[theta_r]] sigue siendo exactamente igual a [[theta_i]] respecto a la normal de esa microfaceta.

**Mini-ejemplo de contraste**

Superficie pulida: todos los puntos comparten la misma normal, todos los rayos reflejan en la misma direccion, se ve imagen nitida. Superficie rugosa: las normales locales varian aleatoriamente, cada rayo refleja en direccion diferente, se ve iluminacion uniforme sin imagen.

## Errores matemáticos

### Error 3: Invertir los indices de refraccion al calcular el angulo critico

**Por qué parece correcto**

El alumno memoriza la formula del angulo critico como arcoseno de un cociente de indices, pero la confusion de magnitudes hace que intercambie numerador y denominador.

**Por qué es incorrecto**

El angulo critico solo existe cuando la luz pasa de un medio mas denso a uno menos denso ([[n1]] mayor que [[n2]]). La formula correcta tiene [[n2]] en el numerador y [[n1]] en el denominador. Si se invierten, el cociente es mayor que uno y el arcoseno no existe, o se obtiene un valor absurdo.

**Señal de detección**

La calculadora devuelve error al intentar el arcoseno de un numero mayor que uno, o el alumno obtiene un angulo critico mayor de 90 grados.

**Corrección conceptual**

Recordar que [[theta_c]] siempre resulta menor que 90 grados. Si [[n1]] es mayor que [[n2]], el cociente [[n2]] dividido entre [[n1]] es menor que uno, y el arcoseno esta bien definido. Si se obtiene un numero mayor que uno, los indices estan invertidos.

**Mini-ejemplo de contraste**

Interfaz vidrio-aire: [[n1]] de 1.5, [[n2]] de 1.0. Correcto: arcoseno de 1.0 dividido entre 1.5 da aproximadamente 42 grados. Incorrecto: arcoseno de 1.5 dividido entre 1.0 da arcoseno de 1.5, que no existe.

### Error 4: No identificar correctamente la normal en superficies curvas

**Por qué parece correcto**

En superficies planas la normal es obvia y unica. La generalizacion excesiva lleva al alumno a asumir que la normal es siempre vertical o siempre perpendicular a una linea de referencia horizontal.

**Por qué es incorrecto**

En superficies curvas, la normal cambia de punto a punto. En un espejo esferico, la normal en cada punto apunta hacia el centro de curvatura. Si se usa una normal incorrecta, los angulos medidos no corresponden a la ley de reflexion y la prediccion del rayo reflejado es erronea.

**Señal de detección**

Los rayos reflejados trazados no convergen en el foco esperado de un espejo esferico, o la imagen predicha tiene posicion incoherente con la ecuacion del espejo.

**Corrección conceptual**

En cada punto de una superficie curva, trazar el radio que une ese punto con el centro de curvatura. La normal es la prolongacion de ese radio. Solo entonces medir [[theta_i]] y [[theta_r]] respecto a esa normal local.

**Mini-ejemplo de contraste**

Rayo incidente a 20 grados del eje optico de un espejo concavo, incidiendo a 5 cm del vertice. Correcto: la normal en ese punto apunta hacia el centro de curvatura (desviada del eje), y [[theta_i]] se mide desde esa normal local. Incorrecto: medir [[theta_i]] desde el eje optico, ignorando la curvatura local, y obtener un rayo reflejado que no pasa por el foco.

## Errores de interpretación

### Error 5: Confundir reflexion total con reflexion al 100 por ciento de intensidad

**Por qué parece correcto**

El termino total sugiere que toda la luz se refleja con maxima intensidad en cualquier circunstancia. La confusion de magnitudes (direccion versus intensidad) refuerza el error.

**Por qué es incorrecto**

La reflexion total interna es un fenomeno de direccion, no de intensidad absoluta: toda la luz que llega a la interfaz se refleja (no hay rayo transmitido), pero la intensidad del rayo reflejado depende de la intensidad del rayo incidente. Ademas, la reflexion total solo ocurre cuando [[theta_i]] supera [[theta_c]] y solo en la direccion de medio denso a medio menos denso. Una superficie metalica puede reflejar el 95 por ciento de la luz a cualquier angulo, pero no es reflexion total interna.

**Señal de detección**

El alumno aplica el concepto de reflexion total a una superficie metalica o a una interfaz donde la luz va de medio menos denso a mas denso.

**Corrección conceptual**

La reflexion total interna requiere tres condiciones simultaneas: [[n1]] mayor que [[n2]], [[theta_i]] mayor que [[theta_c]], y la luz viajando desde el medio denso. Si alguna no se cumple, la reflexion no es total aunque la superficie sea muy reflectante.

**Mini-ejemplo de contraste**

Luz en aire ([[n1]] de 1.0) incidiendo sobre vidrio ([[n2]] de 1.5): no existe angulo critico en esta direccion, por mucho angulo que tenga el rayo siempre habra transmision parcial. Luz en vidrio ([[n1]] de 1.5) incidiendo sobre aire ([[n2]] de 1.0) a 50 grados: supera [[theta_c]] de 42 grados, toda la luz se refleja.

## Regla de autocontrol rápido

Antes de dar por valido un resultado de reflexion, verificar estos tres puntos:

- **Simetria angular**: [[theta_r]] debe ser exactamente igual a [[theta_i]]. Si difieren, hay un error en la identificacion de la normal o en la medicion del angulo.
- **Rango fisico**: ambos angulos deben estar entre 0 y 90 grados. Un angulo negativo o mayor de 90 grados respecto a la normal es fisicamente imposible.
- **Condicion de reflexion total**: si se calcula [[theta_c]], comprobar que [[n1]] sea mayor que [[n2]]. Si no lo es, no existe angulo critico y cualquier valor obtenido es un artefacto del calculo.
`;export{e as default};
