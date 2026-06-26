const e=`# Errores comunes en colisiones totalmente inelásticas

## Errores conceptuales

### Error 1: Creer que los cuerpos siempre rebotan tras el impacto
**Por qué parece correcto**: Debido a la experiencia cotidiana con pelotas o choques elásticos, tendemos a pensar que un impacto siempre conlleva un rebote proporcional.
**Por qué es incorrecto**: En el leaf de colisiones totalmente inelásticas, la hipótesis central es el acoplamiento permanente. Ignorar esto invalida todo el balance posterior.
**Señal de detección**: Si en el enunciado aparecen términos como "se incrusta", "se pegan" o "conjunto", y tú calculas velocidades finales separadas, has cometido este error.
**Corrección conceptual**: Acepta que el sistema pasa de dos cuerpos a uno solo con masa [[m1]] + [[m2]].
**Mini-ejemplo**: Si una bala de 10 g se incrusta en un bloque de 2 kg, no hay rebote; el conjunto se mueve a una única [[vf]].

### Error 2: Pensar que se pierde toda la energía cinética
**Por qué parece correcto**: Al ser un choque con "pérdida máxima", se asocia intuitivamente con que la energía final es cero.
**Por qué es incorrecto**: Para conservar el momento lineal total [[p]], el centro de masas debe seguir moviéndose. La energía cinética final [[Kf]] es el mínimo indestructible.
**Señal de detección**: Obtener [[Kf]] = 0 cuando el momento inicial del sistema era distinto de cero.
**Corrección conceptual**: La energía final solo es cero si el momento total inicial era cero (choque frontal de cuerpos idénticos).
**Mini-ejemplo**: Un choque de trenes frontal donde ambos quedan parados disipa toda la energía, pero si uno perseguía al otro, el conjunto resultante debe seguir avanzando.

## Errores de modelo

### Error 3: Ignorar el carácter vectorial de la velocidad
**Por qué parece correcto**: Trabajar con magnitudes escalares es algebraicamente más sencillo y rápido.
**Por qué es incorrecto**: Las velocidades [[v1i]] y [[v2i]] son vectores. Si chocan de frente, sus signos deben ser opuestos.
**Señal de detección**: Una [[vf]] resultante que es mayor que cualquiera de las velocidades iniciales en un choque frontal.
**Corrección conceptual**: Define siempre un sistema de referencia (eje X) y asigna signos coherentes a cada vector velocidad.
**Mini-ejemplo**: Dos coches de 1000 kg a 20 m/s chocando de frente tienen momento neto cero, no 40,000 kg·m/s.

### Error 4: Aplicar el modelo en presencia de fuerzas externas intensas
**Por qué parece correcto**: Se asume que las fórmulas de colisiones son leyes universales aplicables en cualquier instante.
**Por qué es incorrecto**: La conservación de [[p]] solo se garantiza si el impulso de las fuerzas externas es despreciable durante el contacto.
**Señal de detección**: Resultados absurdos en colisiones que duran mucho tiempo sobre superficies con altísimo rozamiento.
**Corrección conceptual**: Usa este modelo solo para el instante inmediato del impacto (choque impulsivo).
**Mini-ejemplo**: Un bloque frenado por un muelle mientras recibe un proyectil no conserva el momento lineal global debido a la fuerza elástica externa.

## Errores matemáticos

### Error 5: No sumar las masas en el denominador de la velocidad final
**Por qué parece correcto**: Por inercia mental, se suele dividir el momento total por la masa del proyectil [[m1]] únicamente.
**Por qué es incorrecto**: Tras el choque, la inercia del sistema es la suma de todas las masas acopladas.
**Señal de detección**: Una [[vf]] obtenida que viola la conservación de la energía o que es superior a la velocidad de disparo.
**Corrección conceptual**: Asegúrate de que el denominador en la fórmula de [[vf]] sea la masa total del conjunto.
**Mini-ejemplo**: Dividir 10 kg·m/s entre 0.1 kg da 100 m/s, pero si la masa total es 5.1 kg, la velocidad real es inferior a 2 m/s.

### Error 6: Elevar al cuadrado el sumatorio de masas en la energía cinética
**Por qué parece correcto**: Confusión con la estructura de otras fórmulas de física donde se elevan sumatorios al cuadrado.
**Por qué es incorrecto**: La energía cinética final [[Kf]] es 0.5 * (Masa Total) * [[vf]] al cuadrado. La masa no se eleva al cuadrado.
**Señal de detección**: Resultados de energía con unidades incorrectas o valores astronómicamente altos.
**Corrección conceptual**: La masa es un factor lineal en la expresión de la energía cinética.
**Mini-ejemplo**: Calcular energía como 0.5 * (5 kg)^2 * (2 m/s)^2 es incorrecto; debe ser 0.5 * (5 kg) * (2 m/s)^2.

## Errores de interpretación

### Error 7: Interpretar una [[DeltaK]] positiva como una pérdida
**Por qué parece correcto**: Se asocia cualquier número obtenido en la resta como la "cantidad perdida" sin mirar el signo.
**Por qué es incorrecto**: Una [[DeltaK]] positiva significa ganancia de energía cinética, lo cual es físicamente imposible en un choque pasivo.
**Señal de detección**: Escribir "Pérdida = 500 J" cuando el cálculo da +500 J.
**Corrección conceptual**: La variación de energía debe ser negativa. Un valor positivo indica un error en [[Ki]] o [[Kf]].
**Mini-ejemplo**: Si [[Ki]] = 100 J y [[Kf]] = 20 J, la variación es -80 J (pérdida). Si da +80 J, has intercambiado los términos.

### Error 8: Confundir la fracción de pérdida con el coeficiente de restitución
**Por qué parece correcto**: Ambos son valores adimensionales entre 0 y 1 que miden la "calidad" del choque.
**Por qué es incorrecto**: El coeficiente de restitución mide el retorno de velocidad relativa (aquí es 0), mientras que [[loss_fraction]] mide la energía degradada.
**Señal de detección**: Afirmar que "como el choque es totalmente inelástico, la pérdida de energía es cero".
**Corrección conceptual**: En una colisión totalmente inelástica, el coeficiente de restitución es mínimo (cero) pero la pérdida de energía es máxima.
**Mini-ejemplo**: Un choque puede tener un coeficiente de restitución nulo y perder el 99% de su energía o solo el 10% dependiendo de las masas implicadas.

## Regla de autocontrol rápido
Para verificar tu resultado al instante, recuerda que la velocidad final [[vf]] siempre debe estar comprendida entre los valores de las velocidades iniciales [[v1i]] y [[v2i]]. Si tu [[vf]] es mayor que la más rápida o menor que la más lenta de las velocidades de entrada, has cometido un error de signo o de suma de masas. Además, comprueba siempre que la energía cinética final [[Kf]] sea estrictamente menor que la inicial [[Ki]].
`;export{e as default};
