## Errores conceptuales


### Error 1: Creer que la fuerza magnética puede acelerar una partícula

**Por qué parece correcto**

La partícula está en movimiento y experimenta una fuerza magnética [[fuerza_magnetica]]. Una fuerza sobre una partícula se asocia intuitivamente con una aceleración que cambia la rapidez: si hay fuerza, la partícula va "más rápido o más lento". El alumno no distingue entre cambio de dirección y cambio de rapidez.

**Por qué es incorrecto**

[[fuerza_magnetica]] es siempre perpendicular a [[velocidad_de_la_particula]]. La potencia que entrega a la partícula es el producto escalar de la fuerza y la velocidad, que es cero cuando ambos vectores son perpendiculares. Sin potencia, no hay transferencia de energía cinética: la rapidez permanece constante. La fuerza magnética solo desvía la trayectoria; nunca acelera ni frena.

**Señal de detección**

El alumno calcula un cambio de energía cinética de la partícula atribuyéndolo al campo magnético, o dice que la partícula "acelera" al entrar en un campo magnético sin campo eléctrico presente.

**Corrección conceptual**

Solo la componente eléctrica [[fuerza_electrica]] puede cambiar la energía cinética. Para que una partícula gane rapidez, necesita un campo eléctrico que realice trabajo positivo sobre ella. El campo magnético solo curva la trayectoria; la rapidez antes y después de recorrer cualquier arco en campo magnético puro es idéntica.

**Mini-ejemplo de contraste**

Un electrón entra en un campo magnético perpendicular a su velocidad y describe una semicircunferencia. Al salir, tiene exactamente la misma rapidez que tenía al entrar, aunque su dirección de movimiento haya cambiado 180°. El campo magnético no aportó ni extrajo energía cinética.

---


### Error 2: Aplicar la regla de la mano derecha para carga negativa sin invertir el resultado

**Por qué parece correcto**

La regla de la mano derecha es el procedimiento estándar para el producto vectorial. El alumno la aplica correctamente para obtener la dirección de [[velocidad_de_la_particula]]×[[campo_magnetico]] y asume que esa es la dirección de [[fuerza_magnetica]] también para cargas negativas.

**Por qué es incorrecto**

La fuerza magnética es [[carga_electrica]] multiplicado por el producto vectorial [[velocidad_de_la_particula]]×[[campo_magnetico]]. Para carga negativa, [[carga_electrica]] es negativo, y el producto de un negativo por el resultado del producto vectorial invierte la dirección. La regla de la mano derecha da la dirección del producto vectorial puro; para aplicarla a [[fuerza_magnetica]] hay que considerar el signo de [[carga_electrica]].

**Señal de detección**

El alumno obtiene la misma dirección de deflexión para un protón y un electrón que se mueven en la misma dirección bajo el mismo campo magnético. Un protón y un electrón se desvían en direcciones opuestas bajo las mismas condiciones.

**Corrección conceptual**

Aplicar la regla de la mano derecha para encontrar la dirección de [[velocidad_de_la_particula]]×[[campo_magnetico]], luego multiplicar por el signo de [[carga_electrica]]. Para carga positiva, la fuerza es en la dirección de [[velocidad_de_la_particula]]×[[campo_magnetico]]; para carga negativa, en la dirección opuesta.

**Mini-ejemplo de contraste**

Protón y electrón entran por la izquierda con la misma velocidad horizontal en un campo magnético vertical apuntando hacia arriba. El protón se desvía hacia adelante (fuera de la página); el electrón se desvía hacia atrás (dentro de la página). La amplitud de la deflexión es la misma si tienen la misma velocidad, pero la dirección es opuesta.

---

## Errores de modelo


### Error 3: Ignorar [[sin_theta]] y asumir siempre que la fuerza magnética es máxima

**Por qué parece correcto**

Los problemas más simples presentan [[velocidad_de_la_particula]] perpendicular a [[campo_magnetico]], caso en el que [[sin_theta]] es 1 y la fórmula se simplifica al máximo. El alumno memoriza esa forma simplificada y la aplica a todos los casos sin comprobar el ángulo.

**Por qué es incorrecto**

[[fuerza_magnetica]] depende de [[sin_theta]], el seno del ángulo entre [[velocidad_de_la_particula]] y [[campo_magnetico]]. Si [[velocidad_de_la_particula]] es paralela a [[campo_magnetico]], [[sin_theta]] es cero y [[fuerza_magnetica]] es nula, aunque la partícula se mueva rápido y el campo sea intenso. Ignorar [[sin_theta]] lleva a sobrestimar la fuerza magnética en todos los casos donde el ángulo no es 90°.

**Señal de detección**

El alumno calcula [[fuerza_magnetica]] como [[carga_electrica]]·[[velocidad_de_la_particula]]·[[campo_magnetico]] sin incluir [[sin_theta]] cuando el enunciado especifica que [[velocidad_de_la_particula]] no es perpendicular a [[campo_magnetico]], o cuando la geometría no es explícitamente perpendicular.

**Corrección conceptual**

Siempre identificar el ángulo entre [[velocidad_de_la_particula]] y [[campo_magnetico]] antes de calcular. Si el problema no especifica perpendicularidad, leer la geometría con cuidado. [[sin_theta]] igual a 1 solo se puede asumir cuando está explícitamente indicado que [[velocidad_de_la_particula]] es perpendicular a [[campo_magnetico]].

**Mini-ejemplo de contraste**

Un electrón se mueve en la dirección del campo magnético ([[sin_theta]] igual a cero). La fuerza magnética es nula: el electrón avanza en línea recta sin ninguna deflexión. Si el mismo electrón se moviera en dirección perpendicular, la fuerza sería máxima y la trayectoria sería circular.

---


### Error 4: Confundir la fuerza de Lorentz con la fuerza gravitatoria en problemas de equilibrio

**Por qué parece correcto**

En problemas de equilibrio de una partícula cargada (como la gota de Millikan), la fuerza eléctrica puede compensar la gravitatoria. El alumno confunde los dos tipos de fuerza y mezcla las expresiones, usando la masa cuando debería usar [[carga_electrica]] o viceversa.

**Por qué es incorrecto**

La fuerza gravitatoria depende de la masa de la partícula; la fuerza de Lorentz depende de [[carga_electrica]]. Son magnitudes completamente diferentes: una gota puede tener mucha masa y poca [[carga_electrica]], o poca masa y mucha [[carga_electrica]]. Las expresiones de equilibrio que igualan fuerzas de distinto tipo deben identificar correctamente qué magnitud entra en cada una.

**Señal de detección**

El alumno escribe la condición de equilibrio con la misma variable (masa o carga) en ambos miembros, o no distingue si el campo que equilibra la gravedad es eléctrico o magnético.

**Corrección conceptual**

En equilibrio: la fuerza gravitatoria depende de la masa y g; la fuerza eléctrica depende de [[carga_electrica]] y [[campo_electrico]]; la magnética depende de [[carga_electrica]], [[velocidad_de_la_particula]] y [[campo_magnetico]]. Identificar cada fuerza por su expresión y asegurarse de que las unidades sean coherentes antes de igualar.

**Mini-ejemplo de contraste**

En el experimento de Millikan, la gota en equilibrio tiene peso igual a la fuerza eléctrica: masa por g igual a [[carga_electrica]] por [[campo_electrico]]. Si el alumno escribe masa por g igual a masa por [[campo_electrico]], la ecuación no tiene sentido dimensional y siempre será un error.

---

## Errores matemáticos


### Error 5: Sumar escalares en lugar de combinar vectorialmente [[fuerza_electrica]] y [[fuerza_magnetica]]

**Por qué parece correcto**

La fórmula de la fuerza de Lorentz total suma los dos términos algebraicamente. El alumno interpreta esto como una suma de módulos y calcula la fuerza total como la suma aritmética de [[fuerza_electrica]] y [[fuerza_magnetica]] sin considerar la dirección de cada componente.

**Por qué es incorrecto**

[[fuerza_electrica]] y [[fuerza_magnetica]] son vectores. La fuerza total [[fuerza_de_lorentz]] es su suma vectorial. Si [[fuerza_electrica]] y [[fuerza_magnetica]] son perpendiculares entre sí (caso común cuando [[campo_electrico]] y [[campo_magnetico]] son perpendiculares), el módulo de [[fuerza_de_lorentz]] no es la suma de los módulos sino la raíz cuadrada de la suma de sus cuadrados. Sumar módulos cuando los vectores no son paralelos siempre sobreestima la fuerza total.

**Señal de detección**

El alumno obtiene [[fuerza_de_lorentz]] mayor que cualquiera de los límites físicos posibles, o reporta un valor que no coincide con el resultado de la combinación geométrica correcta.

**Corrección conceptual**

Siempre identificar la dirección de cada componente antes de sumar. Si [[fuerza_electrica]] y [[fuerza_magnetica]] son paralelas (mismo eje), se suman algebraicamente con signo. Si son perpendiculares, se usa el teorema de Pitágoras. En general, la suma vectorial requiere descomponer cada componente en sus proyecciones sobre los ejes y sumar proyección a proyección.

**Mini-ejemplo de contraste**

En el selector de velocidades de Wien, [[fuerza_electrica]] apunta en dirección y y [[fuerza_magnetica]] apunta en dirección menos y. Si sus módulos son iguales, [[fuerza_de_lorentz]] es exactamente cero, no el doble de uno de ellos. Un alumno que sume módulos obtendría el doble en lugar de cero.

---

## Errores de interpretación


### Error 6: Interpretar [[sin_theta]] igual a cero como "no hay fuerza de Lorentz"

**Por qué parece correcto**

Si [[sin_theta]] es cero, [[fuerza_magnetica]] es cero. El alumno generaliza: si la componente magnética es nula, dice que "no hay fuerza de Lorentz", olvidando que puede haber [[fuerza_electrica]] presente.

**Por qué es incorrecto**

La fuerza de Lorentz total [[fuerza_de_lorentz]] incluye la componente eléctrica [[fuerza_electrica]], que no depende de [[sin_theta]] ni de [[velocidad_de_la_particula]]. Incluso cuando [[velocidad_de_la_particula]] es paralela a [[campo_magnetico]] y [[fuerza_magnetica]] es nula, si hay campo eléctrico [[campo_electrico]] la partícula experimenta [[fuerza_electrica]] y [[fuerza_de_lorentz]] no es nula.

**Señal de detección**

El alumno concluye que una partícula moviéndose en la dirección de [[campo_magnetico]] en presencia de un campo eléctrico no experimenta ninguna fuerza, cuando en realidad experimenta la fuerza eléctrica completa.

**Corrección conceptual**

[[sin_theta]] igual a cero anula solo [[fuerza_magnetica]], no [[fuerza_de_lorentz]] completa. Verificar siempre si hay campo eléctrico antes de concluir que [[fuerza_de_lorentz]] es nula. La fuerza de Lorentz es nula solo cuando tanto [[fuerza_electrica]] como [[fuerza_magnetica]] son nulas simultáneamente.

**Mini-ejemplo de contraste**

Un protón se mueve en la dirección de un campo magnético intenso con campo eléctrico perpendicular presente. [[fuerza_magnetica]] es nula (v paralela a B), pero [[fuerza_electrica]] es diferente de cero: el protón se acelera lateralmente por el campo eléctrico. La fuerza de Lorentz total no es nula.

---

## Regla de autocontrol rápido

Antes de dar por bueno cualquier resultado de [[fuerza_de_lorentz]] o [[fuerza_magnetica]], verificar estas cuatro condiciones:

1. **[[sin_theta]] correcto**: si [[velocidad_de_la_particula]] es paralela a [[campo_magnetico]], [[fuerza_magnetica]] es cero; si es perpendicular, [[sin_theta]] es 1. Verificar la geometría del problema.
2. **Signos de carga**: la dirección de [[fuerza_magnetica]] se invierte para carga negativa respecto a la dirección del producto vectorial [[velocidad_de_la_particula]]×[[campo_magnetico]].
3. **Suma vectorial**: [[fuerza_electrica]] y [[fuerza_magnetica]] se suman como vectores, no como escalares.
4. **Velocidad y trabajo**: si la fuerza calculada implicaría un cambio de rapidez en campo solo magnético, hay un error; [[fuerza_magnetica]] no realiza trabajo.