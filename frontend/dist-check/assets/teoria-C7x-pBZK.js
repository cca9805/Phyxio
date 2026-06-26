const e=`# Condición Cinemática de Rodadura\r
\r
## Contexto conceptual\r
\r
Este leaf estudia la pregunta mínima que decide si una rueda está rodando o deslizando. No se trata todavía de neumáticos complejos o suspensión, sino de la ligadura básica que conecta el avance del centro de masas con el giro del cuerpo cuando el contacto con el suelo permanece instantáneamente en reposo.\r
\r
La física es precisa: traslación y rotación pueden aparecer por separado y solo quedan coordinadas cuando el contacto impone una restricción geométrica compatible con la adherencia disponible. Este leaf enseña a pasar de una escena visual cotidiana a una prueba cuantitativa de régimen, permitiendo diagnosticar si el punto de apoyo rasca el suelo o permanece en reposo.\r
\r
## 🟢 Nivel esencial\r
\r
La intuición esencial es concreta: una rueda rueda sin deslizar cuando el borde no "arrastra" suelo en el punto de apoyo. El centro avanza y la rueda gira, pero el contacto inferior no barre superficie ni hacia delante ni hacia atrás. \r
\r
Imagina una marca pintada en la periferia. Si hay rodadura pura, esa marca llega al suelo y, en ese instante, queda momentáneamente quieta respecto al pavimento. Si la marca se ve “frotando” suelo, la ligadura ideal se ha roto. Esto nos obliga a separar tres estados: la rueda puede girar sin avanzar (patinar), avanzar sin girar (bloqueo/deslizar) o hacer ambas de forma coordinada (rodar). Solo el tercer caso, donde el avance y el giro están perfectamente sintonizados, pertenece a la rodadura pura.\r
\r
Entender la condición de rodadura no es solo memorizar una igualdad, sino aprender a leer el "estado" de una interfaz. Es la diferencia entre observar un objeto que se mueve y comprender por qué ese movimiento es eficiente y no disipativo.\r
\r
## 🔵 Nivel formal\r
\r
La relación central es la condición ideal de rodadura, que vincula la velocidad lineal del centro de masas [[v]] con la velocidad angular del sólido [[omega]] y el radio geométrico [[R]]:\r
\r
{{f:condicion_rodadura}}\r
\r
Esta igualdad expresa que el avance del eje coincide con el perímetro de arco "desenrollado" sobre el suelo. Para diagnosticar qué ocurre realmente en el punto de contacto, definimos la velocidad de contacto instantánea:\r
\r
{{f:velocidad_contacto}}\r
\r
Un valor nulo indica rodadura pura y ausencia de deslizamiento relativo. Si es distinto de cero, la interfaz está deslizando. Esta misma idea se condensa en el indicador escalar de régimen o residuo de deslizamiento, una herramienta fundamental para clasificar el movimiento:\r
\r
{{f:consistencia_rodadura}}\r
\r
Un residuo positivo (\r
\r
{{f:relacion_aceleracion}}\r
\r
) indica que el centro avanza más de lo que acompaña el giro (derrape por traslación). Un residuo negativo (\r
\r
{{f:relacion_aceleracion}}\r
\r
) indica que el giro supera al avance lineal (patinamiento por rotación). Si el sistema evoluciona en el tiempo manteniendo este régimen de adherencia, la ligadura se transmite directamente a la aceleración lineal [[a]] y a la aceleración angular [[alpha]]:\r
\r
{{f:relacion_aceleracion}}\r
\r
La precisión en este nivel exige un convenio de signos riguroso y coherente. Si el sentido positivo de la rotación no se elige en sintonía con el avance, el signo del residuo se invertirá, invalidando el diagnóstico físico esencial entre patinamiento y derrape.\r
\r
## 🔴 Nivel estructural\r
\r
La validez de esta ligadura depende de cuatro pilares: una geometría rígida con un radio [[R]] constante, un contacto puntual bien definido, adherencia suficiente y una escala temporal adecuada. En términos dinámicos, la fricción estática [[f_s]] disponible, gobernada por el coeficiente de rozamiento estático [[mu_s]] y el peso del cuerpo (producto de la masa [[m]] por la gravedad [[g]]), debe ser suficiente para impedir el arrastre relativo.\r
\r
Si la adherencia se rompe, el sistema pasa a depender del coeficiente cinético [[mu_k]] y el modelo ideal debe sustituirse por uno de deslizamiento disipativo. Además, en el nivel estructural, la facilidad para iniciar o alterar este movimiento de rodadura viene dictada por el momento de inercia [[I]] del cuerpo y, en planos inclinados, por el ángulo [[theta]] de la superficie. Si el cuerpo se deforma, el radio efectivo cambia y la ligadura deja de ser exacta.\r
\r
Estructuralmente, el residuo [[delta]] actúa como detector de régimen. Mientras [[delta]] sea despreciable frente a la escala del movimiento, la ligadura es una descripción válida. Cuando [[delta]] crece, la condición deja de comportarse como una ley operativa y pasa a señalar que el modelo ha fallado, requiriendo una descripción dinámica completa con fricción y disipación.\r
\r
En sistemas reales, como neumáticos de vehículos o robots móviles, esta condición nunca se cumple al 100%. Siempre existe un pequeño deslizamiento o deformación. Por tanto, la rodadura pura es un modelo límite: una idealización extremadamente útil que marca la frontera entre el movimiento puramente cinemático y el proceso dinámico de fricción y desgaste.\r
\r
## Interpretación física profunda\r
\r
El corazón del leaf es la diferencia entre el avance real y el avance exigido por el giro. Cuando [[v_contacto]] es cero, el punto inferior está instantáneamente en reposo. Esto no implica ausencia de fuerza; la fricción estática puede ser intensa, pero no realiza trabajo disipativo porque no hay desplazamiento relativo local.\r
\r
Esta eficiencia es la que hace que la rueda sea una tecnología revolucionaria: evita el raspado continuo contra el suelo. En cuanto aparece un residuo [[delta]] significativo, la interfaz empieza a disipar energía mecánica en forma de calor y ruido. El signo de [[delta]] da el diagnóstico: el derrape suele asociarse a [[delta]] positivo, mientras que el patinamiento suele asociarse a [[delta]] negativo.\r
\r
## Orden de magnitud\r
\r
Si una rueda de radio [[R]] = 0.30 m avanza a [[v]] = 6 m/s, la velocidad angular compatible [[omega]] debe ser del orden de 20 rad/s. Un residuo [[delta]] de 0.02 m/s puede ser despreciable para un coche a 30 m/s, pero crítico para un robot de precisión que se mueve a 0.10 m/s. El criterio de validez no es el "cero absoluto", sino la pequeñez de [[delta]] frente a [[v]].\r
\r
## Método de resolución personalizado\r
\r
1. Fija un convenio de signos coherente para todas las magnitudes cinemáticas.\r
2. Calcula el avance teórico compatible con el giro mediante [[omega]] y [[R]].\r
3. Compara ese valor con la velocidad lineal medida [[v]].\r
4. Calcula [[delta]] o, equivalentemente, [[v_contacto]].\r
5. Diagnostica: si [[delta]] es aproximadamente cero, hay rodadura pura; si no, hay deslizamiento.\r
6. Aplica la relación entre [[a]] y [[alpha]] solo si el diagnóstico confirma rodadura pura.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Supongamos una rueda con [[R]] = 0.25 m y [[omega]] = 16 rad/s. El avance compatible es [[v]] = 4.0 m/s.\r
\r
- Si medimos [[v]] = 4.0 m/s, [[delta]] es nulo: rodadura pura.\r
- Si medimos [[v]] = 5.0 m/s, [[delta]] = +1.0 m/s: derrape (el centro avanza más que el giro).\r
- Si medimos [[v]] = 3.0 m/s, [[delta]] = -1.0 m/s: patinamiento (el giro domina al avance).\r
\r
El valor absoluto del residuo mide la intensidad del fallo de la ligadura, mientras que su signo clasifica la naturaleza del deslizamiento.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Por qué usar [[v_contacto]] y [[delta]] si parecen lo mismo?** [[v_contacto]] se enfoca en el reposo local del punto de apoyo; [[delta]] actúa como indicador global de la calidad del régimen.\r
- **¿Hay fricción en rodadura pura?** Sí, puede haber fricción estática. Lo que no hay es deslizamiento relativo (raspado).\r
- **¿Cuándo aplico la relación de contacto?** Únicamente tras confirmar que el contacto se mantiene adherido durante el intervalo de tiempo estudiado.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf es el puente entre la cinemática de rotación y la dinámica con rozamiento. Es fundamental para entender el funcionamiento del ABS (frenado antibloqueo), el control de tracción en vehículos y la odometría en robótica, donde pequeños residuos de deslizamiento se acumulan como errores de posicionamiento.\r
\r
## Síntesis final\r
\r
Dominar la condición de rodadura significa saber verificar una ligadura. No es una receta automática, sino una hipótesis de adherencia. El éxito del análisis depende de calcular [[delta]]: si es casi nulo, el modelo cinemático es válido; si no, su signo indica si la rueda derrapa o patina, señalando la necesidad de un análisis dinámico más complejo.`;export{e as default};
