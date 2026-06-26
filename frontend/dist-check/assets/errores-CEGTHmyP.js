const e=`## Errores conceptuales

### Error 1: Aplicar la fuerza magnética a cargas en reposo

**Por qué parece correcto**

El estudiante sabe que el campo magnético [[B]] existe en todo punto del espacio y que ejerce fuerzas. La generalización errónea es que esas fuerzas actúan sobre cualquier carga, en movimiento o en reposo, igual que el campo eléctrico.

**Por qué es incorrecto**

La fuerza de Lorentz magnética es proporcional a la velocidad [[v]] de la carga. Si [[v]] es cero, la fuerza es exactamente nula, independientemente de cuánto valga [[B]]. El campo magnético no actúa sobre cargas estáticas; esa es la diferencia fundamental con el campo eléctrico.

**Señal de detección**

El alumno calcula una fuerza magnética sobre un electrón o protón en reposo, o afirma que un conductor estático en un campo magnético experimenta fuerza sobre sus cargas libres aunque no haya corriente.

**Corrección conceptual**

La condición necesaria para que exista fuerza magnética es que la carga tenga velocidad no nula con una componente perpendicular a [[B]]. Si la carga está en reposo o se mueve paralela a [[B]], la fuerza es nula.

**Mini-ejemplo de contraste**

Un electrón en reposo dentro de un campo de 1 T no experimenta ninguna fuerza magnética, aunque el campo sea mil veces más intenso que el de un imán de nevera. El mismo electrón moviéndose a 10⁶ m/s perpendicular al campo experimenta una fuerza de 1.6×10⁻¹³ N.

---

### Error 2: Confundir la dependencia 1/r del hilo recto con la 1/r² del campo eléctrico

**Por qué parece correcto**

El estudiante aprende que tanto el campo eléctrico de carga puntual como el campo magnético de hilo recto son campos "que decaen con la distancia". La fórmula más recordada de electricidad tiene el cuadrado en el denominador, y el alumno la aplica por analogía al magnetismo.

**Por qué es incorrecto**

El campo de un hilo recto infinito decae con 1/r, no con 1/r². La diferencia geométrica es fundamental: la superficie que rodea a una carga puntual es una esfera (área proporcional a r²), mientras que la superficie que rodea a un hilo infinito es un cilindro (área proporcional a r). Las líneas de campo se distribuyen en esa superficie, dando dependencias diferentes.

**Señal de detección**

Al duplicar la distancia al hilo, el alumno obtiene un campo cuatro veces menor en lugar de dos veces menor. O bien, al comparar los campos a dos distancias distintas, el ratio es el cuadrado en lugar de ser lineal.

**Corrección conceptual**

Para el hilo recto: duplicar [[r]] divide [[B]] entre dos. Para el campo eléctrico de carga puntual: duplicar r divide el campo entre cuatro. El origen de la diferencia es la geometría de la distribución de fuente: puntual (esférica) frente a lineal (cilíndrica).

**Mini-ejemplo de contraste**

Con un hilo que conduce 10 A, el campo a 1 cm es aproximadamente 200 μT y a 2 cm es aproximadamente 100 μT (la mitad). Si el alumno usa la ley inversa del cuadrado, obtiene 50 μT, un error del 100%.

## Errores de modelo

### Error 3: Usar la fórmula del hilo infinito para cables cortos o en geometrías curvas

**Por qué parece correcto**

La fórmula del hilo recto es sencilla y da siempre un resultado numérico. El alumno tiende a aplicarla a cualquier conductor sin verificar si la geometría lo justifica.

**Por qué es incorrecto**

La fórmula del hilo recto infinito asume que el conductor es perfectamente recto y que su longitud es mucho mayor que la distancia de evaluación. Para un hilo de longitud finita, una espira circular o una bobina, el campo tiene una forma completamente diferente que requiere integrar la ley de Biot-Savart.

**Señal de detección**

El campo calculado no coincide con mediciones experimentales, o cambia de forma inesperada a medida que el punto de evaluación se aleja del centro del conductor hacia sus extremos.

**Corrección conceptual**

Antes de aplicar la fórmula del hilo recto, verificar que la longitud del conductor sea al menos diez veces mayor que la distancia de evaluación [[r]]. Para conductores de longitud comparable a [[r]], usar la ley de Biot-Savart.

**Mini-ejemplo de contraste**

Para un cable de 10 cm de longitud y un punto de evaluación a 5 cm de su centro, la distancia es comparable a la longitud del cable y la fórmula del hilo infinito sobreestima el campo real en más del 20%.

## Errores matemáticos

### Error 4: Olvidar el factor 2π en el denominador de la fórmula del hilo recto

**Por qué parece correcto**

La estructura de la fórmula tiene varios factores numéricos: [[mu_0]], la corriente [[I]] y la distancia [[r]]. El factor 2π en el denominador es fácil de omitir si el alumno memoriza la fórmula de forma incompleta.

**Por qué es incorrecto**

El factor 2π proviene de la integración de Biot-Savart sobre el hilo infinito y representa la simetría cilíndrica del problema. Omitirlo produce un campo aproximadamente 6.28 veces mayor que el real.

**Señal de detección**

El campo calculado para una corriente de 1 A a 1 m es aproximadamente 6.28 veces mayor que el valor correcto de 2×10⁻⁷ T. El error es fácil de confirmar: el valor correcto es [[mu_0]] dividido entre 2π multiplicado por la corriente dividida entre la distancia.

**Corrección conceptual**

El factor 2π siempre aparece en el denominador de la fórmula del hilo recto porque se integra sobre el ángulo azimutal completo alrededor del hilo. Para el solenoide la fórmula es diferente, sin ese factor.

**Mini-ejemplo de contraste**

Para 1 A a 1 m: el valor correcto es aproximadamente 2×10⁻⁷ T. Sin el factor 2π el resultado sería 4π×10⁻⁷ T, unas 6.28 veces mayor. El factor detecta automáticamente el error.

## Errores de interpretación

### Error 5: Creer que la fuerza magnética puede realizar trabajo y cambiar la energía cinética

**Por qué parece correcto**

El estudiante ve que un campo magnético curva la trayectoria de una partícula y cambia la dirección de su velocidad. Cambiar la velocidad parece implicar cambiar la energía cinética, ya que la energía cinética depende de la velocidad.

**Por qué es incorrecto**

La energía cinética depende del cuadrado de la **rapidez** (módulo de la velocidad), no de su dirección. La fuerza magnética [[F_m]] es siempre perpendicular a [[v]], por lo que no cambia el módulo de [[v]]. La rapidez permanece constante; solo cambia la dirección. El trabajo neto de [[F_m]] sobre cualquier trayectoria es siempre cero.

**Señal de detección**

El alumno calcula que una partícula que entra en un campo magnético sale con mayor (o menor) energía cinética que la que tenía al entrar, atribuyendo el cambio a la fuerza magnética.

**Corrección conceptual**

Para acelerar partículas cargadas se necesita un campo eléctrico, no magnético. El papel del campo magnético en los aceleradores (ciclotrones, sincrotrones) es guiar y doblar la trayectoria, nunca acelerar. La aceleración la produce un campo eléctrico aplicado en puntos concretos del recorrido.

**Mini-ejemplo de contraste**

Un protón que entra en un campo [[B]] uniforme a 10⁶ m/s describe un círculo perfecto y sale con exactamente la misma rapidez de 10⁶ m/s. Su energía cinética antes y después del campo es idéntica. Si el campo hubiera cambiado su energía, sería un motor de movimiento perpetuo, lo que viola la conservación de la energía.

## Regla de autocontrol rápido

Antes de dar por bueno un cálculo de campo magnético o fuerza de Lorentz:

1. ¿La carga está en movimiento? Si no, la fuerza magnética es cero.
2. ¿El denominador de la fórmula del hilo recto contiene 2π·r?
3. ¿El resultado tiene unidades de T (para campo) o N (para fuerza)?
4. ¿El módulo de [[B]] es positivo?
5. ¿La distancia de evaluación es menor que un décimo de la longitud del conductor?

Si alguna de estas comprobaciones falla, el cálculo tiene un error que debe corregirse antes de continuar.
`;export{e as default};
