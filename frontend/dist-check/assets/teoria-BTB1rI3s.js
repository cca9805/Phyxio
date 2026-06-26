const e=`# Movimiento vertical bajo gravedad [[g]] \r
\r
## Contexto conceptual\r
\r
El movimiento vertical bajo gravedad es un caso particular del MRUA donde la aceleración es la gravedad terrestre, dirigida siempre hacia abajo. Abarca la caída libre (sin velocidad [[v]] inicial [[v0]] ), el lanzamiento vertical hacia arriba y el lanzamiento vertical hacia abajo. Aunque las ecuaciones son las mismas del MRUA con a, este tema merece tratamiento propio porque introduce ideas fundamentales: la independencia de la masa, la simetría temporal y la conexión directa con la conservación de la energía.\r
\r
Galileo desafió siglos de pensamiento aristotélico al demostrar que todos los cuerpos caen con la misma aceleración, independientemente de su peso. La célebre demostración del Apolo 15, donde el astronauta David Scott dejó caer un martillo y una pluma en la Luna, confirmó de forma espectacular esta predicción en ausencia de aire.\r
\r
## 🟢 Nivel esencial\r
\r
Cuando un objeto se mueve hacia arriba o hacia abajo cerca de la superficie terrestre, aparece una situación física muy reconocible. Puede ascender, ir frenándose, detenerse un instante y comenzar a descender. También puede soltarse desde cierta altura [[h]] y caer cada vez más deprisa. La idea central de este tema es aprender a leer ese comportamiento de forma física antes de intentar describirlo con herramientas cuantitativas.\r
\r
La primera pregunta importante es muy simple: dónde está el objeto en cada momento dentro del eje vertical que hemos elegido. La segunda pregunta también es básica: si en ese instante el objeto está subiendo, está bajando o está cambiando de fase. Estas dos lecturas bastan para construir una imagen correcta del fenómeno sin necesidad de entrar todavía en expresiones formales.\r
\r
La intuición adecuada es la siguiente. Durante la subida, el movimiento va perdiendo impulso ascendente hasta llegar al punto más alto. Durante la bajada, el movimiento se vuelve cada vez más intenso en sentido descendente. Lo importante aquí no es hacer cuentas, sino reconocer que el cambio de comportamiento no ocurre porque la gravedad aparezca o desaparezca, sino porque actúa durante todo el proceso.\r
\r
En este nivel, el alumno debe quedarse con una imagen física clara: el movimiento vertical bajo gravedad es una evolución ordenada en la que cambian la altura y el estado de movimiento, mientras la acción gravitatoria sigue presente de principio a fin. Esta lectura es completamente descriptiva y prepara el terreno para la formulación cuantitativa posterior.\r
\r
## 🔵 Nivel formal\r
\r
En la nomenclatura técnica del tema, las relaciones núcleo que organizan el movimiento vertical bajo gravedad son \`caida_libre_posicion\`, \`caida_libre_velocidad\`, \`caida_libre_tiempo_vuelo\` y \`caida_libre_torricelli. La primera conecta la posición vertical [[y]] con el tiempo [[t]] cuando la aceleración es constante e igual a \\( -g \\); la segunda describe cómo cambia la velocidad con el tiempo; la tercera permite obtener el tiempo de vuelo en configuraciones compatibles con el modelo; y la cuarta relaciona velocidad y altura sin necesidad de pasar explícitamente por el tiempo. Nombrarlas así de forma explícita mantiene la coherencia entre teoría, fórmulas, ejemplos e interpretación.\r
\r
Definimos el eje vertical $y$ positivo hacia arriba. La aceleración es a con 9.8 m/s². Las ecuaciones cinemáticas se escriben:\r
\r
\r
\r
\r
Para un lanzamiento hacia arriba desde 0 con velocidad inicial v_0 > 0, la altura máxima se alcanza cuando $v = 0$:\r
\r
\r
El tiempo de subida es t_s y, por simetría, el tiempo total de vuelo (regreso al mismo nivel) es t_vuelo → 2v_0 / g.\r
\r
En caída libre desde el reposo (0, y_0), la velocidad al llegar al suelo cumple:\r
\r
\r
resultado que puede obtenerse también por conservación de energía: mgh.\r
\r
### Lectura cruzada de las ecuaciones\r
\r
Las relaciones caida_libre_posicion\`, \`caida_libre_velocidad\` y \`caida_libre_torricelli\` no son fórmulas independientes, sino distintas proyecciones del mismo modelo físico. Cada una responde a una pregunta diferente: cómo cambia la altura con el tiempo, cómo cambia la velocidad o cómo se relacionan directamente altura y velocidad.\r
\r
Elegir una u otra no es una cuestión de preferencia algebraica, sino de lectura física del problema. Si el tiempo es un dato natural del experimento, la descripción temporal es la más directa. Si el tiempo no aparece o no interesa, la relación entre altura y velocidad permite eliminarlo sin perder coherencia física.\r
\r
Esta flexibilidad es clave: el modelo no cambia, pero la forma de usarlo sí se adapta a la información disponible y a la pregunta que se quiere responder.\r
\r
\r
Relaciones formales adicionales del leaf:\r
\r
\r
\r
\r
\r
\r
\r
\r
Relaciones formales adicionales del leaf:\r
\r
{{f:caida_libre_tiempo_subida}}\r
\r
{{f:caida_libre_altura_maxima}}\r
\r
{{f:caida_libre_posicion}}\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
{{f:caida_libre_torricelli}}\r
\r
{{f:caida_libre_velocidad}}\r
\r
## 🔴 Nivel estructural\r
\r
El modelo "gravedad constante" exige que la altura de caída sea mucho menor que el radio terrestre (R_T ≈ 6370 km). A alturas comparables a $R_T$, la aceleración gravitatoria disminuye según g(r) → GM/r², y las ecuaciones del MRUA dejan de ser válidas. Para un salto de paracaidista desde 4 km, el error de suponer $g$ constante es inferior al 0.1 %, pero para un satélite a 400 km ya es apreciable.\r
\r
Dimensionalmente, y_max tiene unidades $\\frac{[L]^2/[T]^2}{[L]/[T]^2} = [L]$, confirmando coherencia. Este análisis también revela que la altura máxima depende solo de $v_0$ y $g$, no de la masa. La independencia de la masa es consecuencia directa de la equivalencia entre masa inercial y masa gravitatoria, un pilar de la relatividad general.\r
\r
Desde la óptica energética, todo el movimiento vertical se reduce a un intercambio entre energía cinética y potencial gravitatoria:\r
\r
\r
En el punto más alto, $K = 0$ y toda la energía es potencial. En el punto más bajo, $U_g$ es mínima y $K$ es máxima. Las ecuaciones cinemáticas no son más que la traducción temporal de esta conservación.\r
\r
La resistencia del aire rompe la simetría temporal. Con arrastre, el tiempo de bajada es mayor que el de subida, la velocidad de regreso es menor que $v_0$, y existe una velocidad terminal v_t (para arrastre lineal) que el MRU alcanza cuando el peso iguala la fuerza de arrastre. Reconocer cuándo el arrastre es despreciable (objetos densos, velocidades bajas) versus dominante (plumas, paracaídas) es clave para la validez del modelo.\r
\r
### Dominio de validez cuantitativo\r
\r
El modelo de movimiento vertical bajo gravedad es una idealización útil, pero no universal. Su validez depende de condiciones físicas concretas que pueden estimarse de forma aproximada.\r
\r
En alturas del orden de pocos metros hasta varias decenas de metros, el valor de \\( g \\) puede considerarse constante con un error despreciable. Sin embargo, cuando la velocidad del objeto crece lo suficiente, el rozamiento con el aire deja de ser pequeño frente al peso. En objetos ligeros o con gran superficie, este efecto aparece incluso en caídas cortas.\r
\r
Cuando la velocidad alcanza varios metros por segundo, la fuerza de arrastre puede dejar de ser despreciable y la aceleración deja de ser aproximadamente constante.\r
\r
Por tanto, el criterio práctico es doble: alturas moderadas y velocidades no excesivas. Fuera de ese rango, el modelo debe ampliarse para incluir fuerzas adicionales.\r
\r
## Interpretación física profunda\r
\r
El movimiento vertical bajo gravedad es la manifestación más directa de la geometría del espacio-tiempo cerca de una masa. En relatividad general, la caída libre no es un movimiento "forzado" sino la trayectoria natural (geodésica) en un espacio-tiempo curvado. Que todos los cuerpos recorran la misma geodésica — independientemente de su masa — es equivalente a decir que la gravedad no es una fuerza sino una curvatura.\r
\r
A nivel clásico, la simetría temporal del lanzamiento vertical expresa la reversibilidad de las leyes de Newton sin disipación: filmar la subida y reproducirla al revés es indistinguible de la bajada real.\r
\r
## Orden de magnitud\r
\r
| Situación | Datos | Resultado |\r
|---|---|---|\r
| Caída desde mesa (1 m) | 1 m | 0.45 s, 4.4 m/s |\r
| Lanzamiento a 20 m/s hacia arriba | 20 m/s | 20.4 m, t_vuelo → 4.1 s |\r
| Caída desde rascacielos (200 m) | 200 m | 6.4 s, 63 m/s (sin aire) |\r
| Velocidad terminal humana | cuerpo extendido | ≈ 55 m/s (con aire) |\r
\r
## Método de resolución personalizado\r
\r
1. **Definir** eje $y$ positivo hacia arriba y el origen de posiciones. \r
2. **Asignar signos** a $v_0$: positivo si se lanza hacia arriba, negativo si se lanza hacia abajo. \r
3. **Escribir** a (siempre negativo con eje hacia arriba). \r
4. **Seleccionar** la ecuación apropiada según las magnitudes conocidas. \r
5. **Resolver** y comprobar que la velocidad final tiene sentido (ej: al caer, $v < 0$ con eje arriba).\r
\r
*Ejemplo:* Desde un puente de 45 m se lanza una piedra hacia abajo a -3 m/s. ¿Cuánto tarda en llegar al agua ($y = 0$)?\r
\r
\r
Resolviendo la cuadrática: t ≈ 2.76 s (se descarta la raíz negativa).\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso 1 — Caída libre pura.** Un objeto se suelta desde 80 m. Velocidad al llegar al suelo:\r
\r
\r
**Caso 2 — Lanzamiento vertical con regreso.** Se lanza una pelota con 15 m/s desde el suelo. Altura máxima:\r
\r
\r
Tiempo de vuelo: t. La pelota pasa por cualquier altura intermedia dos veces: una subiendo y otra bajando.\r
\r
**Caso 3 — Dos objetos a distinta altura.** Desde lo alto de un edificio de 50 m se suelta un objeto (A), y simultáneamente desde el suelo se lanza otro (B) hacia arriba a 25 m/s. ¿Cuándo se cruzan?\r
\r
\r
Los términos cuadráticos se cancelan porque ambos comparten la misma aceleración.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué una hoja de papel cae más lento que una piedra?** Por la resistencia del aire, no porque la gravedad las acelere diferente. Arruga la hoja en una bola compacta y verás que cae casi tan rápido como la piedra.\r
\r
**¿La aceleración es 9.8 o 10?** El valor exacto medio a nivel del mar es $9.807\\;\\text{m/s}^2$. Se usa g ≈ 10 m/s² para estimaciones rápidas y $9.8\\;\\text{m/s}^2$ para cálculos estándar.\r
\r
**¿Qué pasa si lanzo algo en un planeta con distinta gravedad?** Las mismas ecuaciones aplican; solo cambia el valor de $g$. En la Luna, g_Luna ≈ 1.6 m/s², así que los objetos caen seis veces más lento y saltan seis veces más alto.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Desde el MRUA:** fijar a en las ecuaciones del MRUA genera inmediatamente las ecuaciones de este tema. \r
- **Hacia tiro parabólico:** combinar movimiento vertical bajo gravedad con MRU horizontal produce la trayectoria parabólica del proyectil. \r
- **Hacia energía:** la conservación K + U_g → cte es equivalente a las ecuaciones cinemáticas y más poderosa cuando las trayectorias son curvas. \r
- **Hacia gravitación universal:** cuando las alturas son grandes, $g$ deja de ser constante y se necesita la ley F.\r
\r
## Síntesis final\r
\r
El movimiento vertical bajo gravedad es la aplicación más directa y rica del MRUA. Encierra lecciones profundas: la universalidad de la caída libre, la simetría temporal, la equivalencia entre masa inercial y gravitatoria, y el intercambio energético entre cinética y potencial. Dominarlo prepara el camino hacia el tiro parabólico, la dinámica de fuerzas gravitatorias y, en última instancia, la relatividad general.\r
\r
\r
 [[t_sub]] \r
 [[h_max]] \r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
