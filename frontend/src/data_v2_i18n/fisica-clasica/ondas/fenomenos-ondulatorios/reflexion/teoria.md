# Reflexion

## Contexto conceptual

La **reflexión** ocurre cuando una onda alcanza una frontera y parte de su perturbación vuelve al medio de origen. Es un fenómeno común en luz, sonido, ondas de agua, cuerdas y señales electromagnéticas. La idea central no es solo que la onda “rebota”, sino que la frontera impone una dirección de salida y puede devolver solo una fracción de la intensidad.

Este leaf se centra en dos preguntas conectadas: la dirección de la onda reflejada y la cantidad de energía que vuelve. Para responderlas se usan el ángulo de incidencia [[theta_i]], el ángulo de reflexión [[theta_r]], la intensidad incidente [[I_incidente]], la intensidad reflejada [[I_reflejada]] y la reflectancia [[R_reflectancia]].

La reflexión es la base de espejos, ecos, radar, sonar, fibras ópticas, aislamiento acústico y lectura de superficies. También prepara el estudio de refracción, interferencia y ondas estacionarias, porque cada reflexión puede cambiar dirección, fase e intensidad.

## 🟢 Nivel esencial

Imagina una onda que llega a una pared lisa. Si la pared se comporta de forma regular, la onda sale rebotada con una simetría clara respecto a una línea perpendicular a la pared, llamada normal. Esa línea es la referencia correcta para medir ángulos.

La regla intuitiva es simple: la onda sale tan inclinada respecto a la normal como llegó. Si llega casi de frente, vuelve casi sobre sí misma. Si llega muy rasante, sale también rasante por el otro lado de la normal.

> [!TIP]
> No midas el ángulo desde la superficie. La ley de la reflexión usa siempre la normal local.

La reflexión tampoco implica que toda la energía vuelva. Un vidrio refleja una parte de la luz y transmite otra; una pared devuelve parte del sonido y absorbe parte. Por eso dirección reflejada e intensidad reflejada son preguntas distintas.

## 🔵 Nivel formal

Para reflexión especular en una frontera plana y lisa frente a la longitud de onda, la relación angular fundamental es:

{{f:ley_reflexion}}

Esta relación dice que [[theta_r]] y [[theta_i]] se miden desde la misma normal. No compara ángulos respecto a la superficie ni direcciones absolutas en el espacio. La normal actúa como eje de simetría local entre el rayo incidente y el rayo reflejado.

En la práctica, esta igualdad angular debe aplicarse después de fijar la convención geométrica. Si el dato inicial se da respecto a la superficie, primero hay que reconstruir el ángulo respecto a la normal; si se mezclan referencias, el rayo reflejado queda colocado en una dirección físicamente distinta.

La cantidad de intensidad que vuelve se modela mediante:

{{f:intensidad_reflejada}}

Aquí [[R_reflectancia]] representa la fracción energética reflejada por la frontera. Si [[R_reflectancia]] es pequeña, la onda reflejada puede tener dirección bien definida pero intensidad débil. Si [[R_reflectancia]] se acerca a uno en una frontera pasiva, casi toda la intensidad incidente vuelve al medio original.

La ley angular y la ley energética responden preguntas diferentes. La primera predice hacia dónde sale la onda. La segunda estima cuánta intensidad transporta esa onda reflejada. Confundirlas lleva a pensar que un espejo geométrico siempre devuelve toda la energía, o que una reflexión débil no obedece la ley angular.

## 🔴 Nivel estructural

La reflexión especular exige una frontera **localmente regular**. “Lisa” no significa perfecta a escala humana, sino suave frente a la longitud de onda. Una superficie que parece pulida para ondas de radio puede ser rugosa para luz visible; una pared lisa para sonido grave puede dispersar sonido agudo. Por eso la misma superficie puede producir reflexión ordenada para unas ondas y reflexión difusa para otras.

La normal es local. En una superficie curva, cada punto tiene su propia normal, y por tanto cada punto predice una dirección reflejada distinta. Los espejos curvos, antenas parabólicas y reflectores acústicos aprovechan esta variación para concentrar o dispersar ondas. La ley de la reflexión sigue siendo local, pero la geometría global transforma el frente de onda.

> [!WARNING]
> Una reflexión puede cambiar la fase de la perturbación según el tipo de frontera. La ley angular no decide por sí sola si hay inversión de fase.

La intensidad reflejada depende de la impedancia o propiedades de los medios. En óptica, el contraste de índices influye en [[R_reflectancia]]. En sonido, una frontera rígida refleja mucho y un material poroso absorbe más. En cuerdas, un extremo fijo invierte la perturbación y un extremo libre no la invierte del mismo modo. El detalle cambia con el sistema, pero la separación conceptual se conserva: geometría para dirección, propiedades de frontera para intensidad y fase.

El modelo falla cuando la frontera no puede representarse por una normal única, cuando la rugosidad es comparable con la longitud de onda, o cuando hay múltiples reflexiones cercanas. En esas situaciones, la onda reflejada se reparte en muchas direcciones, se forman patrones complejos o hay que usar un modelo de dispersión.

## Interpretación física profunda

La reflexión revela que una frontera actúa como una condición física sobre la perturbación. No es un choque de objetos rígidos, sino una reorganización del frente de onda para satisfacer las condiciones del medio y de la superficie.

La igualdad angular expresa una simetría espacial. La reflectancia expresa un balance energético. Mantener separadas estas dos lecturas evita errores: la dirección puede estar perfectamente determinada aunque la intensidad reflejada sea pequeña.

## Orden de magnitud

En luz visible, la longitud de onda está en cientos de nanómetros, por eso rugosidades microscópicas pueden destruir la reflexión especular. En sonido audible, la longitud de onda puede ir de centímetros a metros, de modo que paredes ordinarias reflejan tonos graves de forma mucho más ordenada.

Un resultado absurdo aparece si [[theta_r]] se mide desde la superficie mientras [[theta_i]] se midió desde la normal, si [[I_reflejada]] es negativa, o si [[R_reflectancia]] supera uno para una frontera pasiva.

## Método de resolución personalizado

1. Dibuja la frontera y construye la normal local.
2. Identifica [[theta_i]] respecto a la normal, no respecto a la superficie.
3. Usa la ley de reflexión para obtener [[theta_r]].
4. Si se pide intensidad, identifica [[I_incidente]] y [[R_reflectancia]].
5. Calcula [[I_reflejada]] y comprueba si la frontera se comporta como pasiva.
6. Interpreta si la reflexión es especular, difusa, intensa o débil.

> [!NOTE]
> Si el problema da un ángulo respecto a la superficie, primero conviértelo mentalmente al ángulo respecto a la normal antes de aplicar la ley.

## Casos especiales y ejemplo extendido

En un espejo plano, la reflexión de la luz forma imágenes virtuales porque los rayos reflejados parecen venir de detrás del espejo. La ley angular explica la posición aparente de la imagen, mientras que [[R_reflectancia]] explica por qué un espejo real no devuelve toda la luz.

En sonido, un eco aparece cuando una onda sonora se refleja en una pared distante y regresa con retardo perceptible. La dirección del eco depende de la geometría, pero su volumen depende de [[I_reflejada]] y de pérdidas durante el viaje.

En una cuerda, una onda que llega a un extremo fijo se refleja con inversión de la perturbación. El rayo o dirección puede obedecer una simetría simple, pero la fase cambia por la condición de frontera. Ese matiz conecta reflexión con ondas estacionarias.

## Preguntas reales del alumno

**¿Por qué se mide el ángulo desde la normal?**

Porque la normal representa la orientación local de la frontera. Medir desde la superficie cambia el ángulo complementario y rompe la simetría correcta.

**¿Toda reflexión conserva la intensidad?**

No. La dirección puede obedecer la ley aunque [[R_reflectancia]] sea baja y la mayor parte de la energía se transmita o absorba.

**¿Una superficie rugosa no refleja?**

Sí refleja, pero reparte la onda en muchas direcciones. Eso se llama reflexión difusa y no se describe con un único [[theta_r]].

**¿La reflexión cambia siempre la fase?**

No siempre. Depende de la frontera y del tipo de onda. La ley angular no contiene por sí sola esa información.

## Conexiones transversales y rutas de estudio

La reflexión se conecta directamente con [refracción](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/refraccion), porque en una frontera real parte de la onda puede rebotar y parte puede transmitirse hacia otro medio.

También prepara [ondas estacionarias](leaf:fisica-clasica/ondas/ondas-estacionarias/condicion-de-estacionariedad), donde la superposición entre onda incidente y reflejada produce nodos y vientres. En óptica, se enlaza con interferencia en películas delgadas.

## Síntesis final

La reflexión combina una regla geométrica y una lectura energética. La ley angular predice la dirección mediante [[theta_i]] y [[theta_r]], mientras que [[R_reflectancia]] e [[I_incidente]] determinan la intensidad que realmente vuelve como [[I_reflejada]].
