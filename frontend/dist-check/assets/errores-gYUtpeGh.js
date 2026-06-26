const e=`## Errores conceptuales

### Error 1: Creer que la temperatura mide la velocidad de una molécula concreta

**Por qué parece correcto**

El alumno asocia "mayor temperatura" con "moléculas más rápidas" y generaliza esa relación a cada partícula individual. Es una analogía con magnitudes colectivas como la velocidad de un grupo: si el grupo es "más rápido", cada miembro también lo es. La confusión surge de no distinguir entre una magnitud promedio estadística y una magnitud individual.

**Por qué es incorrecto**

La temperatura está ligada a la **media estadística** de la energía cinética translacional de todas las moléculas, no a la velocidad de ninguna en particular. En un gas a 300 K hay moléculas casi en reposo y otras moviéndose diez veces más rápido que [[v_rms]]. La distribución de Maxwell-Boltzmann es continua y asimétrica; [[T]] solo fija su escala característica. Decir que "a mayor temperatura, cada molécula va más rápido" es una simplificación que falla al razonar sobre fluctuaciones, efusión gaseosa o escape atmosférico.

**Señal de detección**

El alumno afirma que "a 300 K todas las moléculas se mueven a 515 m/s" o calcula la energía cinética de una molécula concreta usando [[v_rms]] directamente como si fuera su velocidad real.

**Corrección conceptual**

[[v_rms]] es la raíz de la media de los cuadrados de velocidades: un valor representativo del conjunto, no la velocidad de ninguna molécula individual. La distribución real tiene una forma estadística: la mayoría de las moléculas están cerca de [[v_rms]], pero hay una fracción que se aleja mucho en ambas direcciones.

**Mini-ejemplo de contraste**

Si cada molécula de nitrógeno tuviera exactamente 515 m/s, no habría escape gaseoso en ninguna atmósfera planetaria. Sin embargo, Titán retiene nitrógeno a pesar de su baja gravedad porque la cola de la distribución de Maxwell-Boltzmann no supera la velocidad de escape del satélite. El razonamiento de "velocidad uniforme" no predice este resultado.

---

### Error 2: Confundir calor con temperatura en el contexto cinético

**Por qué parece correcto**

En el lenguaje cotidiano, "más caliente" y "más temperatura" parecen sinónimos. El alumno traslada este uso coloquial al contexto físico y asume que una mayor [[T]] equivale a que el gas "tiene más calor", como si el calor fuera una propiedad almacenada en el gas igual que la energía interna.

**Por qué es incorrecto**

El calor es energía **en tránsito**, no una propiedad del gas. Un gas puede tener mucha [[E_k_mol]] (y por tanto alta [[T]]) pero solo transfiere calor cuando está en contacto con otro sistema a distinta temperatura. Dos gases distintos a la misma [[T]] pueden tener energías internas totales muy diferentes si difieren en número de moléculas o en grados de libertad activos. La teoría cinética clarifica que [[T]] mide la energía por molécula, mientras que la energía interna total depende también de [[N]].

**Señal de detección**

El alumno dice que "el gas caliente contiene más calor" o que "añadir calor siempre aumenta la temperatura", olvidando los cambios de estado isotérmicos.

**Corrección conceptual**

La temperatura [[T]] es proporcional a [[E_k_mol]] por molécula; el calor es lo que se transfiere cuando [[T]] difiere entre dos sistemas. Un gas puede absorber calor a [[T]] constante si hay un cambio de estado, porque la energía se invierte en romper enlaces intermoleculares, no en acelerar las moléculas.

**Mini-ejemplo de contraste**

Cuando el agua hierve a 100 °C, se le puede añadir calor durante minutos sin que su temperatura suba. Si temperatura y calor fueran lo mismo, añadir calor siempre debería elevar [[T]]. Esto contradice directamente la observación experimental básica de los cambios de fase.

---

## Errores de modelo

### Error 1: Aplicar el modelo cinético ideal a gases reales a alta presión

**Por qué parece correcto**

El alumno ha visto el modelo cinético ideal en clase como válido para cualquier gas, y lo aplica mecánicamente sin comprobar las condiciones. La ecuación de presión cinética tiene una forma tan limpia y universal que parece aplicable en todos los casos.

**Por qué es incorrecto**

El modelo ideal asume moléculas puntuales sin interacciones. A presiones superiores a varios MPa, el volumen propio de las moléculas representa una fracción no despreciable del volumen total, y las fuerzas atractivas de Van der Waals reducen la presión efectiva. Usar la fórmula cinética ideal en esas condiciones produce valores de [[P]] que pueden diferir de los reales en varios porcentajes, lo que es inaceptable en aplicaciones de ingeniería.

**Señal de detección**

El alumno calcula [[P]] para un gas a alta presión con la fórmula cinética ideal y obtiene un valor mayor que el medido experimentalmente, especialmente a bajas temperaturas donde las interacciones atractivas son más relevantes.

**Corrección conceptual**

El modelo cinético ideal es una aproximación de primer orden válida a presiones bajas y temperaturas moderadas. Cuando la presión supera el millón de pascales o la temperatura se aproxima al punto crítico del gas, debe emplearse el modelo de Van der Waals u otro modelo de estado más completo.

**Mini-ejemplo de contraste**

Para el dióxido de carbono a 300 K y 7 MPa (cerca de su punto crítico, 7.38 MPa), el modelo ideal predice un volumen molar de aproximadamente 3.5 litros por mol, mientras que el valor experimental es de cerca de 1.5 litros por mol. El error relativo supera el 100 %, lo que deja claro que el modelo ideal es inaplicable en esas condiciones.

---

### Error 2: Incluir grados de libertad rotacionales en la fórmula de la energía cinética media

**Por qué parece correcto**

El alumno ha visto en termodinámica que la energía interna de un gas diatómico vale más que la del monoatómico, y asume que la fórmula de [[E_k_mol]] del leaf ya incorpora esa diferencia. Confunde la expresión translacional con la expresión total para gases poliatómicos.

**Por qué es incorrecto**

La fórmula [[E_k_mol]] proporcional a [[T]] que aparece en este leaf corresponde **exclusivamente** a los tres grados de libertad translacionales, válida para todos los gases. Los grados rotacionales añaden energía adicional en gases diatómicos y poliatómicos, pero esa contribución no altera [[v_rms]] (que solo depende de la traslación) ni la presión cinética, que también es puramente translacional.

**Señal de detección**

El alumno usa un coeficiente distinto de tres medios para calcular la energía media translacional de un gas monoatómico, o aplica la capacidad calorífica a volumen constante del gas diatómico dentro de la fórmula de [[E_k_mol]].

**Corrección conceptual**

La expresión de energía cinética media del leaf solo cuenta traslación: siempre es proporcional a tres medios multiplicado por [[k_B]] y [[T]], independientemente del tipo de gas. Los grados rotacionales aumentan la **energía interna total**, pero no cambian la expresión de [[v_rms]] ni la fórmula cinética de [[P]].

**Mini-ejemplo de contraste**

Dos gases —uno monoatómico como el argón y uno diatómico como el nitrógeno— a la misma [[T]] tienen exactamente la misma [[E_k_mol]] translacional y por tanto el mismo [[v_rms]] si tienen la misma masa molecular. La diferencia entre ambos gases no aparece en [[v_rms]] sino en la capacidad calorífica a volumen constante, que incluye los grados rotacionales.

---

## Errores matemáticos

### Error 1: Usar la temperatura en grados Celsius en lugar de kelvin

**Por qué parece correcto**

El alumno está habituado a medir temperatura en grados Celsius en la vida cotidiana y en muchos problemas de calor y temperatura anteriores. La costumbre de escribir "temperatura de 20 grados" sin especificar la escala lleva a sustituir directamente ese valor en la fórmula de [[v_rms]] sin convertir.

**Por qué es incorrecto**

Las fórmulas de [[v_rms]] y [[E_k_mol]] utilizan [[T]] en kelvin porque están derivadas de la energía cinética **absoluta**. El cero de la escala Celsius es arbitrario (punto de fusión del agua a presión estándar), mientras que el cero kelvin corresponde a energía cinética nula. Usar Celsius puede producir resultados negativos (para temperaturas bajo cero) o valores erróneos por hasta un 10 % a temperatura ambiente.

**Señal de detección**

El alumno sustituye 20 en lugar de 293 K en la fórmula de [[v_rms]], obteniendo un valor de velocidad notablemente inferior al correcto. Si la temperatura es bajo cero en Celsius, el error produce raíz de número negativo, lo que es un indicador inmediato del problema.

**Corrección conceptual**

Siempre convertir: sumar 273.15 a la temperatura en grados Celsius para obtener el valor en kelvin antes de sustituir en cualquier fórmula de la teoría cinética.

**Mini-ejemplo de contraste**

Un problema pide [[v_rms]] del nitrógeno a 27 °C. Con Celsius, el resultado sería la raíz de un valor unas catorce veces menor que el correcto, dando una velocidad de unos 138 m/s en lugar de los correctos 515 m/s. El error es de más de un factor tres, completamente indetectable sin el orden de magnitud de referencia.

---

### Error 2: Usar la masa molar en lugar de la masa de una molécula

**Por qué parece correcto**

En problemas de gases ideales y estequiometría, el alumno trabaja habitualmente con masas molares en g/mol o kg/mol. Al llegar a la teoría cinética, usa la misma magnitud sin advertir que la fórmula de [[v_rms]] requiere la masa de **una sola molécula**, no de un mol.

**Por qué es incorrecto**

La fórmula cinética opera a escala molecular: cada término describe una molécula. La masa molar en kg/mol es la masa de aproximadamente 602 mil trillones de moléculas. Usar ese valor en la fórmula de [[v_rms]] produce velocidades miles de veces menores que las reales, lo que contradice directamente los órdenes de magnitud observados.

**Señal de detección**

El alumno obtiene velocidades del orden de 0.01 m/s para gases a temperatura ambiente, o calcula [[E_k_mol]] con un valor en julios que corresponde a la energía de un mol entero, no de una molécula.

**Corrección conceptual**

Dividir la masa molar en kg/mol entre el número de Avogadro (aproximadamente 6.022 × 10²³ moléculas por mol) para obtener [[m_mol]] en kg por molécula antes de sustituir en la fórmula de [[v_rms]].

**Mini-ejemplo de contraste**

Para el nitrógeno, la masa molar es aproximadamente 0.028 kg/mol. La masa de una molécula es aproximadamente 4.65 × 10⁻²⁶ kg. Si se usa la masa molar en la fórmula de [[v_rms]] a 300 K, el resultado sería del orden de 0.58 m/s, absurdamente menor que los 515 m/s correctos.

---

## Errores de interpretación

### Error 1: Creer que comprimir un gas a temperatura fija aumenta la velocidad molecular

**Por qué parece correcto**

El alumno observa que comprimir un gas aumenta su presión y recuerda que [[P]] depende de [[v_rms]]. Concluye erróneamente que la compresión debe haber acelerado las moléculas. La confusión reside en no distinguir entre el aumento de frecuencia de colisiones y el aumento de velocidad individual.

**Por qué es incorrecto**

A temperatura constante (proceso isotérmico), [[T]] no cambia y por tanto [[E_k_mol]] y [[v_rms]] tampoco cambian. La presión aumenta porque hay más moléculas por unidad de volumen al comprimir: la **densidad numérica** aumenta, incrementando la frecuencia de colisiones por unidad de área, pero la velocidad de cada colisión individual es la misma.

**Señal de detección**

El alumno explica el aumento de presión en una compresión isotérmica diciendo que "las moléculas van más rápido", en lugar de decir que "hay más moléculas por unidad de volumen".

**Corrección conceptual**

La velocidad molecular [[v_rms]] solo cambia con [[T]], no con [[V]]. La presión kinética depende de [[v_rms]] al cuadrado pero también del cociente [[N]] entre [[V]]: al comprimir, [[V]] baja y [[N]] es constante, aumentando la densidad molecular y con ella la presión, sin tocar las velocidades.

**Mini-ejemplo de contraste**

Si se comprime a la mitad el volumen de un gas a temperatura constante, la presión se duplica (ley de Boyle). Si las moléculas se hubieran acelerado, [[E_k_mol]] habría aumentado y la temperatura también, lo que contradice la hipótesis isotérmica. La velocidad no ha cambiado; solo aumentó la densidad de colisiones.

---

## Regla de autocontrol rápido

Antes de dar por válido cualquier resultado de teoría cinética, verificar tres puntos:

Primero, **unidades de temperatura**: la temperatura debe estar en kelvin. Si el resultado de [[v_rms]] está por debajo de 100 m/s para un gas común a temperatura ambiente, casi con certeza se usaron grados Celsius.

Segundo, **escala de la masa molecular**: [[m_mol]] debe estar entre 10⁻²⁷ y 10⁻²⁵ kg para gases habituales. Un valor en el rango de los gramos o kilogramos indica uso de masa molar en lugar de masa por molécula.

Tercero, **coherencia entre magnitudes**: [[E_k_mol]] debe ser proporcional a [[T]] con el factor fijo de tres medios multiplicado por [[k_B]]. Si se calculan [[E_k_mol]] y [[v_rms]] por separado, el producto de la mitad de [[m_mol]] por [[v_rms]] al cuadrado debe coincidir con [[E_k_mol]] dentro del margen de redondeo. Una discrepancia mayor del 1 % señala un error de cálculo o de unidades.
`;export{e as default};
