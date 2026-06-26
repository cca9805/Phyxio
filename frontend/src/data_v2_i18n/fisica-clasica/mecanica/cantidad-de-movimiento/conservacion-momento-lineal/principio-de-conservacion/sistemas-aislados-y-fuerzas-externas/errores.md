# Errores comunes: sistemas aislados y fuerzas externas

## Errores conceptuales

### Error 1: Confundir fuerzas internas con externas según la frontera

**Por qué parece correcto:**
Fuerzas como el peso o el rozamiento suelen clasificarse siempre de la misma forma en los problemas básicos, por lo que parece que su naturaleza es fija.

**Por qué es incorrecto:**
La distinción interno/externo depende exclusivamente de dónde se trace la frontera del sistema. Si incluimos la Tierra en nuestro sistema, el peso se vuelve una fuerza interna. Si la excluimos, es externa. Olvidar esta relatividad lleva a balances de momento incompletos o a duplicar fuerzas erróneamente.

**Señal de detección:**
El balance de momento no cierra ([[Pinitial]] no es igual a [[Pfinal]]) a pesar de haber incluido todos los cuerpos que interactúan.

**Corrección conceptual:**
Definir explícitamente los límites del sistema antes de listar las fuerzas. Toda fuerza cuyo origen y destino estén dentro de la frontera debe ignorarse en el balance del [[momento_lineal_total]].

**Mini-ejemplo de contraste:**
Dos patinadores se empujan. Si el sistema es solo uno de ellos, el empujón es una fuerza externa que cambia su momento. Si el sistema son ambos, el empujón es interno y el momento total se mantiene constante.

## Errores de modelo

### Error 2: Asumir aislamiento total ante fuerzas externas permanentes

**Por qué parece correcto:**
En la mayoría de los choques rápidos, el sistema parece aislado porque el cambio ocurre casi instantáneamente.

**Por qué es incorrecto:**
Fuerzas externas permanentes como la gravedad o el rozamiento con el suelo siempre están presentes. Aunque en intervalos de milisegundos su efecto sea despreciable, en tiempos mayores rompen la conservación del momento.

**Señal de detección:**
El resultado numérico predice que un objeto se moverá indefinidamente a velocidad constante tras un choque en una superficie rugosa.

**Corrección conceptual:**
Verificar la condición de aislamiento (fórmula **cond**). Si existen fuerzas externas, evaluar si el intervalo de [[tiempo]] es lo suficientemente corto para que el impulso externo sea nulo.

**Mini-ejemplo de contraste:**
Un bloque choca con otro sobre una mesa con mucha fricción. La conservación del momento solo es válida para predecir la velocidad justo tras el impacto, pero no para describir el movimiento posterior donde la fricción (fuerza externa) domina el sistema.

## Errores matemáticos

### Error 3: Omitir la masa de componentes pasivos del sistema

**Por qué parece correcto:**
Si un objeto está inicialmente en reposo, a veces se olvida incluir su masa en el cálculo del momento final cuando los cuerpos quedan unidos.

**Por qué es incorrecto:**
El [[momento_lineal_total]] depende de la masa total del sistema en movimiento. En un choque inelástico, la masa inercial aumenta, lo que reduce la velocidad final para mantener el balance de momento constante.

**Señal de detección:**
La velocidad final calculada es idéntica a la inicial, como si el cuerpo en reposo no hubiera ofrecido ninguna resistencia inercial.

**Corrección conceptual:**
Utilizar la suma de masas individuales ([[m1]] + [[m2]]) al aplicar la fórmula **inelastic_collision**.

**Mini-ejemplo de contraste:**
Un proyectil impacta en un bloque de madera. Si solo se usa la masa del proyectil para calcular la velocidad final, el resultado será físicamente imposible.

## Errores de interpretación

### Error 4: Ignorar la conservación por componentes

**Por qué parece correcto:**
Si hay una fuerza externa actuando (como la gravedad vertical), se suele concluir erróneamente que el momento no se conserva en ninguna dirección.

**Por qué es incorrecto:**
La conservación puede ser parcial. Un sistema puede no estar aislado verticalmente pero estar perfectamente aislado horizontalmente. Ignorar esto impide resolver problemas complejos de proyectiles o colisiones en rampa.

**Señal de detección:**
Afirmar que no se puede usar el principio de conservación porque "hay peso", ignorando que el movimiento ocurre en un eje donde el peso no tiene componente.

**Corrección conceptual:**
Analizar la [[fuerza_externa_neta]] componente a componente. Si en el eje X la fuerza es nula, el momento en X se conserva independientemente de lo que ocurra en el eje Y.

**Mini-ejemplo de contraste:**
Un balón rueda por el suelo y choca con otro balón en movimiento lateral. La gravedad actúa verticalmente, pero en el eje horizontal la [[fuerza_externa_neta]] es nula durante el impacto. Si el alumno descarta la conservación por la presencia del peso, no puede determinar las velocidades horizontales post-choque. Si en cambio aplica la conservación solo en el eje horizontal (donde sí rige), obtiene el resultado correcto sin necesidad de modelar las fuerzas verticales.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado, aplica esta lista de comprobación:

1. **Frontera**: ¿He listado qué cuerpos están dentro y cuáles fuera?
2. **Impulso**: ¿He verificado que las fuerzas externas no actúan durante un [[tiempo]] significativo?
3. **Ejes**: ¿He aplicado la conservación solo en los ejes donde la fuerza externa neta es nula?
4. **Coherencia**: ¿El sistema final tiene más masa y, por tanto, menos velocidad que el inicial?
