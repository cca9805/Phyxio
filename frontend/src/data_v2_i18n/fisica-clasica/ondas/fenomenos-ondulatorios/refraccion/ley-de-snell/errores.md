## Errores conceptuales

### Error 1: Medir el ángulo desde la superficie en vez de la normal

**Por qué parece correcto**

Intuitivamente, la superficie es la referencia visible y tangible. El alumno ve el rayo «rasante» o «empinado» respecto a la superficie y tiende a medir el ángulo respecto a ella, por analogía con el ángulo de una rampa o una pendiente.

**Por qué es incorrecto**

La ley de Snell usa explícitamente el ángulo con la normal. Si se mide desde la superficie, el valor obtenido es el complementario del correcto (noventa grados menos el ángulo real). Al sustituir en la fórmula, el seno del complemento es el coseno del ángulo verdadero, lo que produce un resultado físicamente incoherente.

**Señal de detección**

El ángulo refractado calculado es mayor que el incidente cuando debería ser menor (pasando a un medio más denso), o el resultado del arcoseno supera la unidad para datos que claramente permiten refracción.

**Corrección conceptual**

El ángulo de incidencia [[theta_1]] y el de refracción [[theta_2]] se miden siempre desde la recta perpendicular a la interfaz en el punto de contacto. La normal es la dirección de simetría del problema; las propiedades ópticas solo cambian perpendicularmente a la superficie.

**Mini-ejemplo de contraste**

Un rayo llega a un vidrio con incidencia de 30 grados respecto a la normal. Si el alumno mide respecto a la superficie, interpreta 60 grados. Aplicando la ley de Snell con 60 grados e índice del vidrio 1.50, obtiene un seno mayor que uno, lo que le indica (erróneamente) reflexión total. Con los 30 grados correctos, el seno del ángulo refractado es 0.33, dando un ángulo de refracción de unos 19 grados, resultado perfectamente razonable.

### Error 2: Invertir los medios en la ley de Snell

**Por qué parece correcto**

El alumno puede razonar «la luz viene del aire y entra en el vidrio, el vidrio es más denso, así que [[n1]] debe ser el mayor». Esta asociación confunde «medio más denso» con «primer medio».

**Por qué es incorrecto**

[[n1]] es siempre el índice del medio por donde viaja el rayo incidente y [[n2]] el del medio por donde viaja el rayo refractado, independientemente de cuál sea mayor. Invertirlos invierte la predicción de si el rayo se acerca o se aleja de la normal.

**Señal de detección**

El resultado predice que el rayo se aleja de la normal al entrar en un medio más denso, lo cual contradice la experiencia directa y la regla cualitativa fundamental.

**Corrección conceptual**

El medio 1 es aquel donde el rayo ya está viajando antes de llegar a la interfaz. El medio 2 es aquel al que el rayo pasa después de cruzar la interfaz. Nunca se asigna según cuál tenga mayor o menor índice.

**Mini-ejemplo de contraste**

Luz en aire ([[n1]] de 1.00) incide a 45 grados sobre agua ([[n2]] de 1.33). Resultado correcto: [[theta_2]] de unos 32 grados, el rayo se acerca a la normal. Si el alumno invierte y usa [[n1]] de 1.33 y [[n2]] de 1.00, obtiene [[theta_2]] de unos 70 grados, prediciendo que el rayo se aleja de la normal al entrar en agua, lo cual es absurdo.

## Errores de modelo

### Error 3: Aplicar la ley de Snell a superficies rugosas

**Por qué parece correcto**

La ley de Snell parece universal: «siempre que hay un cambio de medio, la refracción ocurre». El alumno la aplica a cualquier interfaz sin considerar el estado de la superficie.

**Por qué es incorrecto**

La ley de Snell asume una interfaz plana a escala de la longitud de onda. Cuando la rugosidad superficial es comparable a la longitud de onda, la normal local varía punto a punto y la refracción produce un haz disperso en múltiples direcciones (scattering), no un rayo nítido con un solo ángulo.

**Señal de detección**

Al medir experimentalmente, el rayo refractado no es una línea bien definida sino una mancha difusa o un cono de luz. Los datos no se ajustan a un ángulo único.

**Corrección conceptual**

Antes de aplicar la ley de Snell, verificar que la superficie es lisa a escala óptica (rugosidad mucho menor que la longitud de onda). Para superficies rugosas se necesitan modelos de dispersión como el modelo de Beckmann o aproximaciones estadísticas.

**Mini-ejemplo de contraste**

Un haz láser de 633 nm incide sobre un vidrio pulido con rugosidad de 5 nm: se observa un rayo refractado nítido a un ángulo bien definido por la ley de Snell. El mismo haz sobre una superficie esmerilada con rugosidad de 500 nm produce un patrón difuso sin dirección privilegiada. La ley de Snell solo explica el primer caso.

## Errores matemáticos

### Error 4: Calcular el ángulo crítico cuando [[n1]] es menor que [[n2]]

**Por qué parece correcto**

El alumno memoriza la fórmula del ángulo crítico y la aplica mecánicamente sin verificar la condición de existencia. Razona «la fórmula existe, puedo usarla siempre».

**Por qué es incorrecto**

El ángulo crítico solo tiene sentido cuando la luz viaja de un medio más denso a uno menos denso ([[n1]] mayor que [[n2]]). Si [[n1]] es menor que [[n2]], el cociente [[n2]]/[[n1]] es mayor que uno, y el arcoseno de un valor mayor que uno no tiene solución real. Físicamente, no hay reflexión total en esa dirección.

**Señal de detección**

La calculadora devuelve «error» o «NaN» al intentar evaluar el arcoseno. Si se fuerza el cálculo, aparece un número complejo o un mensaje de dominio inválido.

**Corrección conceptual**

Antes de calcular [[theta_c]], verificar que [[n1]] es estrictamente mayor que [[n2]]. Si no se cumple esta condición, la reflexión total interna no existe para esa configuración: la luz siempre puede refractarse, con cualquier ángulo de incidencia.

**Mini-ejemplo de contraste**

Luz en aire ([[n1]] de 1.00) incide sobre vidrio ([[n2]] de 1.52). El alumno intenta calcular el ángulo crítico: arcoseno de (1.52/1.00), lo que da arcoseno de 1.52, indefinido. La reflexión total no ocurre cuando la luz va del aire al vidrio. Si la luz fuera desde el vidrio hacia el aire, entonces sí: arcoseno de (1.00/1.52) da aproximadamente 41 grados.

## Errores de interpretación

### Error 5: Creer que reflexión total significa que la luz desaparece en el segundo medio

**Por qué parece correcto**

El nombre «reflexión total» sugiere que toda la luz se queda en el primer medio y que en el segundo medio no ocurre absolutamente nada. La imagen mental es que el segundo medio queda completamente oscuro.

**Por qué es incorrecto**

Aunque toda la energía reflejada regresa al primer medio, en el segundo medio existe una onda evanescente que penetra una distancia del orden de la longitud de onda. Esta onda no transporta energía neta, pero su campo eléctrico no es cero. Además, si otro medio se acerca a distancias submicrométras, la onda evanescente puede acoplarse y transmitir energía (reflexión total frustrada).

**Señal de detección**

El alumno afirma que «detrás de la interfaz el campo eléctrico es exactamente cero» o no puede explicar el fenómeno de la reflexión total frustrada (usado en microscopía TIRF y acopladores de fibra óptica).

**Corrección conceptual**

En reflexión total interna, toda la energía se refleja pero el campo electromagnético penetra exponencialmente en el segundo medio como una onda evanescente. La amplitud decae como la exponencial de la distancia dividida por una longitud de penetración que es del orden de la longitud de onda. No hay transporte neto de energía salvo que otro medio esté muy próximo.

**Mini-ejemplo de contraste**

Un haz en vidrio incide sobre la interfaz vidrio-aire por encima del ángulo crítico: se refleja totalmente. Si se acerca un segundo prisma de vidrio a menos de 200 nm de la primera superficie, parte de la luz aparece en el segundo prisma. Esto demuestra que el campo no es cero en el medio 2, contradiciendo la idea de «desaparición total».

## Regla de autocontrol rápido

Antes de dar por válido un resultado de la ley de Snell, aplicar tres comprobaciones rápidas: primera, que el ángulo refractado esté entre cero y noventa grados; segunda, que si la luz pasa a un medio más denso el ángulo refractado sea menor que el incidente (y viceversa); tercera, que si se intenta calcular el ángulo crítico, el medio 1 sea el de mayor índice. Si alguna de estas tres comprobaciones falla, revisar la asignación de medios y la referencia angular antes de proseguir.
