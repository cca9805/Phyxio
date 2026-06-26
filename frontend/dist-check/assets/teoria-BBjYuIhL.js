const e=`\uFEFF# Sistemas aislados\r
\r
## Contexto conceptual\r
\r
Un **sistema aislado** es aquel sobre el cual la fuerza externa neta es cero. No significa que no existan fuerzas: las partículas dentro del sistema pueden interactuar intensamente entre sí (fuerzas internas), pero la suma de todas las fuerzas que llegan desde fuera se anula. En esa situación, el momento lineal total del sistema se conserva exactamente.\r
\r
¿Cuándo ocurre esto en la práctica? Estrictamente, nunca — siempre hay gravedad, rozamiento con el aire, etc. Pero en muchos escenarios el sistema está *aproximadamente* aislado durante el evento de interés: una colisión que dura milisegundos, una explosión interna, o un sistema en el espacio donde la gravedad es despreciable. En esos casos, tratar el sistema como aislado es una aproximación excelente.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial de un sistema aislado es una decisión de modelo: interesa saber si el conjunto elegido puede tratarse como si el entorno no alterara de forma apreciable su movimiento global durante el intervalo estudiado. Cuando esto ocurre, el comportamiento del sistema está gobernado por lo que sucede dentro de él y no por influencias externas.\r
\r
Esto no significa ausencia de fuerzas. Dentro del sistema puede haber contactos intensos, tensiones o explosiones internas; lo decisivo es que esas acciones se compensan al mirar el conjunto completo. Por eso la frontera del sistema importa tanto como la cuenta final.\r
\r
Dos cuerpos que chocan sobre una mesa pueden no ser aislados verticalmente y, sin embargo, comportarse como un sistema aislado en horizontal durante el breve tiempo del impacto. La pregunta correcta siempre es en qué componente y durante qué intervalo el entorno deja de mandar.\r
\r
## 🔵 Nivel formal\r
\r
En el nivel formal, el sistema aislado se define evaluando la suma vectorial de todas las fuerzas que actúan sobre cada partícula. Por la Tercera Ley de Newton, sabemos que las fuerzas internas forman pares de acción y reacción que se cancelan al sumar sobre todo el sistema.\r
\r
Esto implica que la tasa de cambio temporal del momento total depende exclusivamente de la fuerza externa neta. Si esta fuerza externa es nula, el momento total se mantiene estrictamente constante. \r
\r
Para construir este balance, definimos primero el momento inicial total [[pTotI]] del conjunto:\r
\r
{{f:Pinicial}}\r
\r
Y el momento final total [[pTotF]] de las partículas tras la interacción:\r
\r
{{f:Pfinal}}\r
\r
Cuando el aislamiento es perfecto o la interacción es lo suficientemente breve, establecemos la conservación igualando ambos estados:\r
\r
{{f:cons}}\r
\r
Si necesitamos calcular el momento final de una de las partes tras un evento aislado, reordenamos la ecuación principal:\r
\r
{{f:cons_solve_pTotF}}\r
\r
En los casos en que el aislamiento no es perfecto, el teorema del impulso-momento revela la variación de momento total [[DeltaPtot]] introducida por el entorno:\r
\r
\r
Cuando se analizan interacciones entre dos cuerpos de forma detallada, la expresión más utilizada es la ecuación completa:\r
\r
{{f:cons_completa}}\r
\r
**Condición de aislamiento por componentes:** puede ocurrir que la componente horizontal de la fuerza externa sea nula, pero la vertical no lo sea. En ese caso, la conservación se aplica de forma independiente solo al eje aislado.\r
\r
{{f:balance}}\r
\r
## 🔴 Nivel estructural\r
\r
El concepto de sistema aislado depende críticamente de tres decisiones de modelado:\r
\r
**1. Definición de las fronteras del sistema**\r
- Si incluyes más cuerpos dentro del sistema, más fuerzas se vuelven internas y el sistema se aproxima más a estar aislado.\r
- Ejemplo: en una colisión coche-peatón, si defines el sistema como "coche + peatón", la fuerza del impacto es interna. Si defines solo el peatón como sistema, la fuerza del coche es externa.\r
\r
**2. Escala temporal**\r
- Un sistema puede estar aislado durante milisegundos (colisión) pero no durante segundos (el rozamiento frena las piezas).\r
- Esto justifica la aproximación impulsiva: durante un intervalo muy corto, el impulso externo se aproxima a cero.\r
\r
**3. Dirección**\r
- El aislamiento puede valer en una dirección pero no en otra. En una mesa de billar: aislado horizontalmente, no verticalmente.\r
\r
### Tabla de validez\r
\r
| Escenario | ¿Aislado? | Componente conservada |\r
|-----------|-----------|----------------------|\r
| Colisión sobre hielo (sin rozamiento) | Sí (horizontal) | Momento en el plano horizontal |\r
| Colisión sobre mesa con rozamiento | Aproximado (breve) | Momento horizontal (durante el choque) |\r
| Explosión interna en el espacio | Sí (3D) | Vector momento completo |\r
| Caída libre + separación | No (gravedad) | Momento horizontal si no hay viento |\r
\r
## Interpretación física profunda\r
\r
La conservación del momento en un sistema aislado es una consecuencia directa de la homogeneidad del espacio: las leyes de la física no cambian si desplazas todo el sistema a otra posición. Por el teorema de Noether, esa simetría traslacional implica una cantidad conservada, que resulta ser el momento lineal.\r
\r
Esto significa que la conservación del momento no es una ley empírica independiente: es una consecuencia geométrica del espacio en que vivimos. Si el espacio no fuera homogéneo (por ejemplo, cerca de una singularidad gravitatoria), el momento no se conservaría globalmente.\r
\r
## Orden de magnitud\r
\r
Para decidir si un sistema está "suficientemente aislado", compara el impulso externo con el interno:\r
\r
Para decidir si un sistema está "suficientemente aislado", compara el orden de magnitud de la fuerza externa con la fuerza interna media durante el evento. Si el cociente entre la fuerza externa y la fuerza interna es mucho menor que la unidad (menor que 0.01, por ejemplo), el sistema es efectivamente aislado. En una colisión de billar, la fuerza de contacto interno es de unos miles de newtons, mientras que la fricción externa apenas aporta un newton, por lo que su influencia relativa es del orden de una milésima.\r
\r
## Método de resolución personalizado\r
\r
1. **Definir las fronteras**: ¿qué cuerpos forman parte del sistema?\r
2. **Listar fuerzas externas**: gravedad, normales, rozamientos, resortes externos.\r
3. **Evaluar si se cancelan**: ¿la suma neta es cero? ¿O al menos en la dirección de interés?\r
4. **Evaluar la escala temporal**: ¿el evento es tan rápido que las externas no tienen tiempo de cambiar el momento significativamente?\r
5. **Aplicar conservación** en las componentes donde se cumpla, asegurando que el momento inicial iguala al final.\r
\r
## Casos especiales y ejemplo extendido\r
\r
- **Explosión desde el reposo**: una granada en reposo explota en fragmentos. El momento total es cero antes y después. Los fragmentos salen en direcciones tales que la suma vectorial de sus momentos es nula.\r
- **Retroceso de un arma**: el sistema pistola+bala está aislado si el tirador no ejerce fuerza durante la deflagración (que dura aproximadamente un milisegundo). La bala sale hacia adelante; la pistola retrocede con momento igual y opuesto.\r
- **Patinadores empujándose**: dos patinadores en reposo sobre hielo se empujan. Si tienen masas distintas [[m1]] y [[m2]], sus velocidades finales [[v1f]] y [[v2f]] serán inversamente proporcionales a sus masas para que el momento total se mantenga nulo ([[m1]]·[[v1f]] + [[m2]]·[[v2f]] = 0).\r
\r
**Ejemplo**: Un petardo de 0.5 kg en reposo sobre hielo explota en dos fragmentos de [[m1]] = 0.3 kg y [[m2]] = 0.2 kg. El fragmento de 0.3 kg sale a [[v1f]] = 4 m/s a la derecha. ¿Cuál será la velocidad final [[v2f]] del otro fragmento si inicialmente estaban en reposo ([[v1i]] = 0, [[v2i]] = 0)?\r
\r
Al aplicar la conservación ([[pTotI]] = 0), el momento inicial nulo debe igualar a la suma de momentos finales de los fragmentos, lo que arroja una velocidad [[v2f]] de 6 m/s en sentido opuesto. Sale a 6 m/s hacia la izquierda.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Existe un sistema perfectamente aislado?** En sentido estricto, no. Pero la aproximación es excelente cuando las fuerzas externas son mucho menores que las internas o actúan perpendicularmente a la dirección de interés.\r
- **¿La gravedad impide que un sistema sea aislado?** Depende. Si el movimiento es horizontal y la normal equilibra la gravedad verticalmente, el sistema puede estar aislado en la dirección horizontal.\r
- **¿Qué pasa si elegí mal las fronteras del sistema?** El momento total no se conserva, pero puedes corregir utilizando el teorema del impulso para incorporar el efecto de la fuerza externa.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Precedente**: [Momento lineal](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/momento-lineal) y [Tercera Ley de Newton](leaf:fisica-clasica/mecanica/dinamica/leyes-de-newton/tercera-ley).\r
- **Formalización**: [Enunciado y condiciones de conservación](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/enunciado-y-condiciones-de-aplicacion).\r
- **Aplicación**: [Colisiones](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas).\r
- **Conexión profunda**: Teorema de Noether y simetría traslacional.\r
\r
\r
\r
Identificar correctamente un sistema aislado es el primer paso en cualquier análisis de conservación. El error más frecuente de los estudiantes es incluir fuerzas internas como si fueran externas, o viceversa. La regla práctica es: dibuja la frontera del sistema y clasifica cada fuerza según actúe desde dentro o desde fuera de esa frontera. Cuando las fuerzas externas son despreciables durante el intervalo de interés (como en colisiones breves donde la fricción actúa durante milisegundos frente a fuerzas de contacto de miles de newtons), el sistema se comporta como aislado a efectos prácticos. Esta aproximación es la base de todo análisis de colisiones y explosiones en física clásica y de partículas.\r
\r
## Síntesis final\r
\r
Un sistema es aislado cuando la fuerza externa neta es cero, haciendo que su momento total se conserve exactamente. En la práctica, la decisión de "aislamiento" es siempre una aproximación controlada por tres factores: definición de fronteras, escala temporal y dirección. Dominar esta decisión es la clave para aplicar correctamente la conservación del momento en cualquier problema de colisiones o explosiones.\r
\r
\r
\r
`;export{e as default};
