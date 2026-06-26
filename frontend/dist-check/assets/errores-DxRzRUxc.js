const e=`## Errores conceptuales

### Error 1: Creer que la fuerza magnética puede acelerar una partícula

**Por qué parece correcto**

La partícula está en movimiento y experimenta una fuerza magnética [[F_m]]. Una fuerza sobre una partícula se asocia intuitivamente con una aceleración que cambia la rapidez: si hay fuerza, la partícula va "más rápido o más lento". El alumno no distingue entre cambio de dirección y cambio de rapidez.

**Por qué es incorrecto**

[[F_m]] es siempre perpendicular a [[v]]. La potencia que entrega a la partícula es el producto escalar de la fuerza y la velocidad, que es cero cuando ambos vectores son perpendiculares. Sin potencia, no hay transferencia de energía cinética: la rapidez permanece constante. La fuerza magnética solo desvía la trayectoria; nunca acelera ni frena.

**Señal de detección**

El alumno calcula un cambio de energía cinética de la partícula atribuyéndolo al campo magnético, o dice que la partícula "acelera" al entrar en un campo magnético sin campo eléctrico presente.

**Corrección conceptual**

Solo la componente eléctrica [[F_E]] puede cambiar la energía cinética. Para que una partícula gane rapidez, necesita un campo eléctrico que realice trabajo positivo sobre ella. El campo magnético solo curva la trayectoria; la rapidez antes y después de recorrer cualquier arco en campo magnético puro es idéntica.

**Mini-ejemplo de contraste**

Un electrón entra en un campo magnético perpendicular a su velocidad y describe una semicircunferencia. Al salir, tiene exactamente la misma rapidez que tenía al entrar, aunque su dirección de movimiento haya cambiado 180°. El campo magnético no aportó ni extrajo energía cinética.

---

### Error 2: Aplicar la regla de la mano derecha para carga negativa sin invertir el resultado

**Por qué parece correcto**

La regla de la mano derecha es el procedimiento estándar para el producto vectorial. El alumno la aplica correctamente para obtener la dirección de [[v]]×[[B]] y asume que esa es la dirección de [[F_m]] también para cargas negativas.

**Por qué es incorrecto**

La fuerza magnética es [[q]] multiplicado por el producto vectorial [[v]]×[[B]]. Para carga negativa, [[q]] es negativo, y el producto de un negativo por el resultado del producto vectorial invierte la dirección. La regla de la mano derecha da la dirección del producto vectorial puro; para aplicarla a [[F_m]] hay que considerar el signo de [[q]].

**Señal de detección**

El alumno obtiene la misma dirección de deflexión para un protón y un electrón que se mueven en la misma dirección bajo el mismo campo magnético. Un protón y un electrón se desvían en direcciones opuestas bajo las mismas condiciones.

**Corrección conceptual**

Aplicar la regla de la mano derecha para encontrar la dirección de [[v]]×[[B]], luego multiplicar por el signo de [[q]]. Para carga positiva, la fuerza es en la dirección de [[v]]×[[B]]; para carga negativa, en la dirección opuesta.

**Mini-ejemplo de contraste**

Protón y electrón entran por la izquierda con la misma velocidad horizontal en un campo magnético vertical apuntando hacia arriba. El protón se desvía hacia adelante (fuera de la página); el electrón se desvía hacia atrás (dentro de la página). La amplitud de la deflexión es la misma si tienen la misma velocidad, pero la dirección es opuesta.

---

## Errores de modelo

### Error 3: Ignorar [[sin_theta]] y asumir siempre que la fuerza magnética es máxima

**Por qué parece correcto**

Los problemas más simples presentan [[v]] perpendicular a [[B]], caso en el que [[sin_theta]] es 1 y la fórmula se simplifica al máximo. El alumno memoriza esa forma simplificada y la aplica a todos los casos sin comprobar el ángulo.

**Por qué es incorrecto**

[[F_m]] depende de [[sin_theta]], el seno del ángulo entre [[v]] y [[B]]. Si [[v]] es paralela a [[B]], [[sin_theta]] es cero y [[F_m]] es nula, aunque la partícula se mueva rápido y el campo sea intenso. Ignorar [[sin_theta]] lleva a sobrestimar la fuerza magnética en todos los casos donde el ángulo no es 90°.

**Señal de detección**

El alumno calcula [[F_m]] como [[q]]·[[v]]·[[B]] sin incluir [[sin_theta]] cuando el enunciado especifica que [[v]] no es perpendicular a [[B]], o cuando la geometría no es explícitamente perpendicular.

**Corrección conceptual**

Siempre identificar el ángulo entre [[v]] y [[B]] antes de calcular. Si el problema no especifica perpendicularidad, leer la geometría con cuidado. [[sin_theta]] igual a 1 solo se puede asumir cuando está explícitamente indicado que [[v]] es perpendicular a [[B]].

**Mini-ejemplo de contraste**

Un electrón se mueve en la dirección del campo magnético ([[sin_theta]] igual a cero). La fuerza magnética es nula: el electrón avanza en línea recta sin ninguna deflexión. Si el mismo electrón se moviera en dirección perpendicular, la fuerza sería máxima y la trayectoria sería circular.

---

### Error 4: Confundir la fuerza de Lorentz con la fuerza gravitatoria en problemas de equilibrio

**Por qué parece correcto**

En problemas de equilibrio de una partícula cargada (como la gota de Millikan), la fuerza eléctrica puede compensar la gravitatoria. El alumno confunde los dos tipos de fuerza y mezcla las expresiones, usando la masa cuando debería usar [[q]] o viceversa.

**Por qué es incorrecto**

La fuerza gravitatoria depende de la masa de la partícula; la fuerza de Lorentz depende de [[q]]. Son magnitudes completamente diferentes: una gota puede tener mucha masa y poca [[q]], o poca masa y mucha [[q]]. Las expresiones de equilibrio que igualan fuerzas de distinto tipo deben identificar correctamente qué magnitud entra en cada una.

**Señal de detección**

El alumno escribe la condición de equilibrio con la misma variable (masa o carga) en ambos miembros, o no distingue si el campo que equilibra la gravedad es eléctrico o magnético.

**Corrección conceptual**

En equilibrio: la fuerza gravitatoria depende de la masa y g; la fuerza eléctrica depende de [[q]] y [[E]]; la magnética depende de [[q]], [[v]] y [[B]]. Identificar cada fuerza por su expresión y asegurarse de que las unidades sean coherentes antes de igualar.

**Mini-ejemplo de contraste**

En el experimento de Millikan, la gota en equilibrio tiene peso igual a la fuerza eléctrica: masa por g igual a [[q]] por [[E]]. Si el alumno escribe masa por g igual a masa por [[E]], la ecuación no tiene sentido dimensional y siempre será un error.

---

## Errores matemáticos

### Error 5: Sumar escalares en lugar de combinar vectorialmente [[F_E]] y [[F_m]]

**Por qué parece correcto**

La fórmula de la fuerza de Lorentz total suma los dos términos algebraicamente. El alumno interpreta esto como una suma de módulos y calcula la fuerza total como la suma aritmética de [[F_E]] y [[F_m]] sin considerar la dirección de cada componente.

**Por qué es incorrecto**

[[F_E]] y [[F_m]] son vectores. La fuerza total [[F_L]] es su suma vectorial. Si [[F_E]] y [[F_m]] son perpendiculares entre sí (caso común cuando [[E]] y [[B]] son perpendiculares), el módulo de [[F_L]] no es la suma de los módulos sino la raíz cuadrada de la suma de sus cuadrados. Sumar módulos cuando los vectores no son paralelos siempre sobreestima la fuerza total.

**Señal de detección**

El alumno obtiene [[F_L]] mayor que cualquiera de los límites físicos posibles, o reporta un valor que no coincide con el resultado de la combinación geométrica correcta.

**Corrección conceptual**

Siempre identificar la dirección de cada componente antes de sumar. Si [[F_E]] y [[F_m]] son paralelas (mismo eje), se suman algebraicamente con signo. Si son perpendiculares, se usa el teorema de Pitágoras. En general, la suma vectorial requiere descomponer cada componente en sus proyecciones sobre los ejes y sumar proyección a proyección.

**Mini-ejemplo de contraste**

En el selector de velocidades de Wien, [[F_E]] apunta en dirección y y [[F_m]] apunta en dirección menos y. Si sus módulos son iguales, [[F_L]] es exactamente cero, no el doble de uno de ellos. Un alumno que sume módulos obtendría el doble en lugar de cero.

---

## Errores de interpretación

### Error 6: Interpretar [[sin_theta]] igual a cero como "no hay fuerza de Lorentz"

**Por qué parece correcto**

Si [[sin_theta]] es cero, [[F_m]] es cero. El alumno generaliza: si la componente magnética es nula, dice que "no hay fuerza de Lorentz", olvidando que puede haber [[F_E]] presente.

**Por qué es incorrecto**

La fuerza de Lorentz total [[F_L]] incluye la componente eléctrica [[F_E]], que no depende de [[sin_theta]] ni de [[v]]. Incluso cuando [[v]] es paralela a [[B]] y [[F_m]] es nula, si hay campo eléctrico [[E]] la partícula experimenta [[F_E]] y [[F_L]] no es nula.

**Señal de detección**

El alumno concluye que una partícula moviéndose en la dirección de [[B]] en presencia de un campo eléctrico no experimenta ninguna fuerza, cuando en realidad experimenta la fuerza eléctrica completa.

**Corrección conceptual**

[[sin_theta]] igual a cero anula solo [[F_m]], no [[F_L]] completa. Verificar siempre si hay campo eléctrico antes de concluir que [[F_L]] es nula. La fuerza de Lorentz es nula solo cuando tanto [[F_E]] como [[F_m]] son nulas simultáneamente.

**Mini-ejemplo de contraste**

Un protón se mueve en la dirección de un campo magnético intenso con campo eléctrico perpendicular presente. [[F_m]] es nula (v paralela a B), pero [[F_E]] es diferente de cero: el protón se acelera lateralmente por el campo eléctrico. La fuerza de Lorentz total no es nula.

---

## Regla de autocontrol rápido

Antes de dar por bueno cualquier resultado de [[F_L]] o [[F_m]], verificar estas cuatro condiciones:

1. **[[sin_theta]] correcto**: si [[v]] es paralela a [[B]], [[F_m]] es cero; si es perpendicular, [[sin_theta]] es 1. Verificar la geometría del problema.
2. **Signos de carga**: la dirección de [[F_m]] se invierte para carga negativa respecto a la dirección del producto vectorial [[v]]×[[B]].
3. **Suma vectorial**: [[F_E]] y [[F_m]] se suman como vectores, no como escalares.
4. **Velocidad y trabajo**: si la fuerza calculada implicaría un cambio de rapidez en campo solo magnético, hay un error; [[F_m]] no realiza trabajo.
`;export{e as default};
