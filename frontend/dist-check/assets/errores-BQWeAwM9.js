const e=`# Errores en difraccion

## Errores conceptuales

### Error 1: Confundir difraccion con reflexion o refraccion

**Por que parece correcto**

El estudiante observa que la luz cambia de direccion al encontrar un obstaculo, similar a como cambia al reflejarse en un espejo o refractarse al cambiar de medio. Puede pensar que la difraccion es simplemente otro tipo de cambio de direccion.

**Por que es incorrecto**

La reflexion cambia la direccion de ondas que rebotan en una superficie. La refraccion cambia la direccion por cambio de velocidad al entrar en otro medio. La difraccion no requiere ni superficie reflectante ni cambio de medio: la onda se curva y se expande porque llega a un borde, no porque rebote o refracte. La causa fisica es completamente diferente: superposicion de onditas secundarias en lugar de leyes de incidencia o cambio de velocidad.

**Señal de deteccion**

El estudiante describe la difraccion como "la onda rebota en el borde" o "la luz se refracta al pasar por la rendija", usando terminologia de reflexion o refraccion para explicar el patron de difraccion.

**Correccion conceptual**

La difraccion ocurre porque cada punto del frente de onda que pasa por la abertura emite onditas secundarias. Estas onditas se suman en algunas direcciones (maximos) y se cancelan en otras (minimos). No hay rebote ni cambio de medio: es superposicion de ondas que provienen del mismo frente incidente.

**Mini-ejemplo de contraste**

Una onda de agua que encuentra una roca se refleja (rebotando) y tambien se difracta (curvandose alrededor). La parte reflejada regresa; la parte difractada avanza en direcciones nuevas sin haber rebotado. Dos fenomenos distintos, causas distintas, observables simultaneamente.

### Error 2: Pensar que la difraccion solo ocurre en aberturas pequeñas

**Por que parece correcto**

Los ejemplos didacticos tipicamente usan rendijas estrechas porque producen patrones amplios y visibles. El estudiante puede generalizar que solo aberturas microscopicas producen difraccion.

**Por que es incorrecto**

La difraccion ocurre con cualquier abertura, pero la escala angular del patron depende del cociente entre [[lambda]] y el tamano de la abertura. Aberturas grandes tambien producen difraccion, pero los angulos son tan pequenos que el patron parece una sombra nitida. La difraccion es universal: toda onda que encuentra un borde se difracta, independientemente de la escala.

**Señal de deteccion**

El estudiante afirma que "las rendijas anchas no producen difraccion" o pregunta "¿por que no vemos difraccion al pasar por una puerta?".

**Correccion conceptual**

Todas las aberturas producen difraccion, pero la extension angular es inversamente proporcional al ancho. Una rendija de 1 metro con luz visible produce un patron de miliradianes (fracciones de grado), indistinguible de una sombra geometrica. Aumenta la longitud de onda a metros (ondas de radio) y la misma abertura de 1 metro producira difraccion claramente observable.

**Mini-ejemplo de contraste**

Los bordes de un edificio bloquean ondas de radio ([[lambda]] de metros) menos eficazmente que la luz visible ([[lambda]] de micrometros). Por eso puedes captar radio AM dentro de edificios aunque no tengas linea visual con la antena: las ondas de radio se difractan alrededor de los edificios. La difraccion esta siempre presente, solo que su importancia relativa depende del cociente entre [[lambda]] y tamano.

## Errores de modelo

### Error 3: Aplicar el modelo de Fraunhofer en campo cercano

**Por que parece correcto**

El modelo de Fraunhofer tiene formulas simples y es el mas estudiado. El estudiante puede asumir que aplica a cualquier configuracion de abertura y pantalla.

**Por que es incorrecto**

El modelo de Fraunhofer supone campo lejano: la pantalla debe estar a distancia mucho mayor que el ancho de abertura. En campo cercano (pantalla cerca de la abertura), el patron es diferente: las franjas pueden no ser rectas, los minimos no estan en posiciones dadas por la formula simple, y la intensidad varia de forma compleja. Aplicar la formula de Fraunhofer cerca de la abertura produce predicciones incorrectas.

**Señal de deteccion**

El estudiante calcula posiciones de minimos con la aproximacion lineal cuando la pantalla esta a solo unos pocos centimetros de la rendija, o se sorprende porque el patron observado no coincide con las predicciones teoricas.

**Correccion conceptual**

El modelo de Fraunhofer requiere L >> a (tipicamente L > 10a). Si la pantalla esta cerca, se debe usar el modelo de Fresnel (campo cercano) que considera la curvatura de los frentes de onda. La transicion entre modelos depende de la relacion geometrica, no de la naturaleza de la onda.

**Mini-ejemplo de contraste**

A diez centimetros de una rendija muy estrecha, el patron puede seguir la ley de Fraunhofer. A distancia mucho menor de la misma rendija, el patron es diferente: el maximo central esta mas concentrado y los minimos no aparecen exactamente donde predice la aproximacion lineal. La fisica es la misma, pero la aproximacion matematica deja de ser valida.

## Errores matematicos

### Error 4: Confundir angulos en grados con radianes

**Por que parece correcto**

Las calculadoras y software pueden trabajar en grados o radianes. El estudiante puede introducir 30 grados pensando que el calculo usara radianes, o viceversa.

**Por que es incorrecto**

Las formulas de difraccion usan funciones trigonometricas donde el argumento es un angulo. Si mezclas grados y radianes, los resultados son numericamente incorrectos. Por ejemplo, el seno de 30 grados es 0.5, pero el seno de 30 radianes es aproximadamente -0.988. Un error por un factor de 57 (la relacion entre radianes y grados) es enorme y destruye los calculos.

**Señal de deteccion**

Resultados de angulo que son absurdos (negativos cuando deberian ser positivos, mayores que 1 para senos, etc.) o posiciones en pantalla que difieren por ordenes de magnitud de lo esperado.

**Correccion conceptual**

En fisica, los angulos en formulas sin unidades son siempre radianes. Convierte explicitamente: grados a radianes multiplicando por pi/180. Si tu calculadora esta en modo grados, introducir angulos en radianes numericos (ej: 0.5 radianes) producira resultados incorrectos.

**Mini-ejemplo de contraste**

Un angulo de 1 grado es aproximadamente 0.017 radianes. Para angulos pequeños, seno y tangente son aproximadamente iguales al angulo (en radianes). Pero seno de 1 grado es 0.017, mientras que seno de 1 radian es 0.84. Usar 1 grado como si fuera radianes introduce un error del factor 57.

### Error 5: Usar el orden cero como primer minimo

**Por que parece correcto**

El estudiante puede pensar que los ordenes comienzan en cero, como muchos indices en ciencia.

**Por que es incorrecto**

En la condicion de minimos, usar el orden cero corresponde al maximo central, no a un minimo. Los minimos comienzan en el primer orden a cada lado del centro. Usar el orden cero para calcular un minimo da el centro brillante, no una franja oscura.

**Señal de deteccion**

El estudiante predice un minimo en el centro del patron, o afirma que el maximo central es "el minimo de orden cero".

**Correccion conceptual**

Usar el orden cero en la condicion de minimos conduce al angulo central. En el centro todas las onditas llegan en fase, produciendo interferencia constructiva maxima. Los minimos aparecen en ordenes laterales, donde la diferencia de camino entre bordes permite cancelacion completa.

**Mini-ejemplo de contraste**

En una rendija, el centro es el punto mas brillante porque toda la onda llega alli sin desfase. Los puntos oscuros estan a los lados, donde contribuciones de diferentes partes de la rendija se cancelan. El orden cero corresponde al centro brillante; el primer orden lateral marca los primeros puntos oscuros.

## Errores de interpretacion

### Error 6: Interpretar el maximo central como minimo

**Por que parece correcto**

El estudiante puede ver el patron y pensar que la franja central ancha es una "zona de transicion" entre los lados, o puede confundir la terminologia.

**Por que es incorrecto**

El centro del patron de difraccion es siempre el punto de maxima intensidad. Todas las onditas secundarias llegan alli en fase (diferencia de camino cero desde todos los puntos de la abertura), sumando constructivamente. Los minimos estan a los lados, donde las contribuciones se cancelan parcialmente.

**Señal de deteccion**

El estudiante describe el patron como "oscuro en el centro con franjas brillantes a los lados" o identifica incorrectamente los minimos laterales como maximos.

**Correccion conceptual**

El patron de difraccion de una rendija tiene un maximo central ancho y brillante, flanqueado por minimos (zonas oscuras) y luego maximos secundarios mas debiles. La intensidad decrece monotonicamente desde el centro hacia los minimos primeros. La distribucion de intensidad tiene maximo en el centro (angulo cero) y sigue la funcion (seno sobre argumento) al cuadrado.

**Mini-ejemplo de contraste**

Si cubres todo excepto una rendija delgada e iluminas con laser, veras una franja brillante en el centro de la pantalla, no un punto oscuro. Las franjas oscuras aparecen a cierta distancia del centro, no en el centro mismo.

## Regla de autocontrol rapido

**Verificacion dimensional obligatoria**: Antes de aceptar cualquier resultado de angulo o posicion:

- Lambda y ancho de abertura deben estar en las mismas unidades (ambos metros o ambos nanometros) antes de calcular su cociente.
- El argumento de la funcion seno debe ser adimensional. Si tiene unidades, revisa las conversiones.
- La posicion en pantalla debe estar en metros si L esta en metros.

**Verificacion de orden de magnitud**:

- Para luz visible y rendijas estrechas de laboratorio, el angulo del primer minimo suele ser de pocos milirradianes.
- Si obtienes angulos de difraccion de decenas de grados para rendijas milimetricas, revisa las unidades: probablemente usaste micras como milimetros o nanometros como metros.
- Si obtienes angulos mayores que 90 grados, el calculo es fisicamente imposible: revisa que el producto del orden por la longitud de onda no exceda el ancho de abertura.

**Verificacion fisica basica**:

- El maximo central debe estar en el centro (angulo cero).
- Los primeros minimos deben estar simetricos a ambos lados.
- La separacion entre ordenes consecutivos debe ser aproximadamente constante en posicion lineal cuando vale la aproximacion de angulo pequeno.
- La intensidad debe disminuir para ordenes altos (maximos secundarios cada vez mas debiles).
`;export{e as default};
