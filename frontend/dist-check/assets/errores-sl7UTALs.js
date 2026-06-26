const e=`## Errores conceptuales

### Error 1: Las ondas transversales existen en cualquier medio material

**Por qué parece correcto**

El alumno generaliza la experiencia con el sonido: "el sonido se propaga en solidos, liquidos y gases, luego todos los tipos de onda tambien". Ademas, en problemas de ondas mecanicas elementales, las ondas en cuerdas son transversales, y las cuerdas estan en contacto con el aire, que no las inhibe. Esta analogia incorrecta lleva a creer que la transversalidad es una propiedad del solido en vibracion, no del medio de propagacion.

**Por qué es incorrecto**

Una onda transversal requiere que el medio soporte **esfuerzos de corte** en reposo. Los fluidos (liquidos y gases) tienen modulo de corte [[G_corte]] nulo: ante cualquier esfuerzo tangencial, fluyen en lugar de deformarse elasticamente. Por tanto, [[v_T]] es cero en un fluido y la onda S simplemente no puede propagarse. Esta es la razon fisica por la que los terremotos no producen ondas S en el nucleo externo liquido de la Tierra: la sismologia lo detecta como una zona de sombra que confirma el caracter liquido de ese nucleo.

**Señal de detección**

El alumno calcula [[v_T]] usando datos de un liquido (por ejemplo, agua con [[G_corte]] de 0 Pa) y obtiene un resultado numericamente finito, o afirma que el agua transmite ondas transversales de alta frecuencia.

**Corrección conceptual**

Las ondas S existen exclusivamente en solidos porque el solido es el unico tipo de medio que posee [[G_corte]] diferente de cero. La condicion necesaria y suficiente para la existencia de ondas transversales es que el modulo de corte del medio sea estrictamente positivo.

**Mini-ejemplo de contraste**

Aplicar la formula de [[v_T]] al agua: [[G_corte]] del agua en el regimen estatico es cero, luego la raiz cuadrada de cero partido entre la densidad da cero. No hay onda S. En contraste, el hielo (agua solida) tiene [[G_corte]] de aproximadamente 3.5 GPa y [[v_T]] cercana a 1900 m/s. El cambio de fase liquido-solido activa la onda transversal.

---

### Error 2: La velocidad de la onda P en un solido 3D se calcula directamente con el modulo de Young

**Por qué parece correcto**

En el estudio de vibraciones de barras, la velocidad longitudinal se calcula con [[E_young]] y [[rho]] sin mas factores. El alumno extrapola esta formula al caso general del solido tridimensional, creyendo que el modulo de Young es el parametro universal de la rigidez longitudinal.

**Por qué es incorrecto**

La formula de barra delgada supone que el material puede contraerse lateralmente con libertad (el diametro de la barra es mucho menor que la longitud de onda). En un solido tridimensional, la material circundante impide esa contraccion lateral, lo que genera un **confinamiento** que endurece efectivamente el material. El modulo relevante es el modulo confinado, que combina [[E_young]] y [[nu]] y siempre supera a [[E_young]] para cualquier [[nu]] positivo. Usar [[E_young]] solo produce una [[v_L]] sistematicamente subestimada.

**Señal de detección**

El alumno calcula [[v_L]] para el acero usando solo [[E_young]] de 200 GPa y [[rho]] de 7800 kg/m³, obteniendo aproximadamente 5060 m/s, en lugar de los 5800 a 5900 m/s que da la formula correcta con el factor de Poisson.

**Corrección conceptual**

En un solido tridimensional usar siempre la formula longitudinal completa, que incluye [[E_young]], [[nu]] y [[rho]]. La formula de barra delgada (raiz de [[E_young]] partido entre [[rho]]) es solo valida cuando el diametro de la barra es mucho menor que la longitud de onda de la perturbacion.

**Mini-ejemplo de contraste**

Para acero con [[nu]] de 0.30, el modulo confinado efectivo es aproximadamente 269 GPa, un 35 % mayor que [[E_young]]. La velocidad longitudinal correcta es un 16 % mayor que la calculada solo con [[E_young]]. Esta discrepancia sistematica delata el error en cualquier comparacion con tablas de referencia.

---

## Errores de modelo

### Error 1: Aplicar el modelo isotropo a un material con estructura orientada

**Por qué parece correcto**

El alumno dispone de los valores de [[E_young]], [[G_corte]] y [[nu]] en el catalogo del fabricante del material. Esos valores son validos para carga en una direccion especifica (la de fabricacion del laminado, la de la fibra), pero el alumno los usa para calcular la velocidad de onda en una direccion arbitraria, asumiendo que el material es isotropo.

**Por qué es incorrecto**

Los materiales compuestos de fibra (CFRP, GFRP), la madera, los huesos y los laminados metalicos son **anisotropos**: sus propiedades elasticas dependen de la orientacion. En estos materiales existen hasta tres velocidades longitudinales distintas (una por eje de simetria) y varias velocidades de corte. El modelo de una sola [[v_L]] y una sola [[v_T]] es incorrecto y puede producir errores de mas del 50 % en la velocidad calculada.

**Señal de detección**

La velocidad medida experimentalmente varia significativamente al rotar el transductor sobre la superficie del material. En un material isotropo verdadero, la velocidad no deberia depender del angulo de inspeccion.

**Corrección conceptual**

Para materiales anisotropos, la teoria correcta es la elasticidad anisotropa con tensor de modulos de cuarto orden. En la practica, para materiales ortotropos (tres planos de simetria), se miden experimentalmente las velocidades en las tres direcciones principales y se obtienen los cinco o nueve modulos elasticos independientes.

**Mini-ejemplo de contraste**

En un laminado unidireccional de fibra de carbono, la velocidad longitudinal en la direccion de la fibra puede ser de 9000 m/s, mientras que perpendicularmente es de apenas 2500 m/s. Usar un solo valor de [[E_young]] para ambas da un error del 260 % en una de las dos direcciones.

---

## Errores matemáticos

### Error 1: Confundir el coeficiente de Poisson con la razon entre velocidades

**Por qué parece correcto**

El alumno sabe que [[nu]] y la razon [[v_T]]/[[v_L]] estan relacionados, y simplifica pensando que son iguales o proporcionales de forma simple. Esto induce a creer que [[nu]] de 0.30 implica que [[v_T]]/[[v_L]] es 0.30.

**Por qué es incorrecto**

La relacion entre [[nu]] y la razon [[v_T]]/[[v_L]] es no lineal y no trivial. Para [[nu]] de 0.30, la razon [[v_T]]/[[v_L]] es aproximadamente 0.55, no 0.30. La formula correcta implica una raiz cuadrada de una expresion racional en [[nu]], lo que produce una funcion estrictamente creciente de 0 a 0.71 cuando [[nu]] va de 0 a 0.5.

**Señal de detección**

El alumno escribe directamente que [[v_T]] es igual a [[nu]] multiplicado por [[v_L]], produciendo un valor de [[v_T]] para acero ([[nu]] de 0.30, [[v_L]] de 5900 m/s) de apenas 1770 m/s en lugar de los correctos 3200 m/s.

**Corrección conceptual**

La razon [[v_T]]/[[v_L]] se obtiene dividiendo la formula de [[v_T]] entre la de [[v_L]] y simplificando. El resultado es la raiz cuadrada de la cantidad (1 menos 2 veces [[nu]]) partido entre (2 veces la cantidad (1 menos [[nu]])). Esta expresion, evaluada en [[nu]] de 0.30, da aproximadamente 0.546, no 0.30.

**Mini-ejemplo de contraste**

Para un material hipotetico con [[nu]] de 0.25, la razon [[v_T]]/[[v_L]] es la raiz cuadrada de 0.5 partido entre 1.5, que resulta en 0.577. Un alumno que use [[nu]] directamente como razon obtiene 0.25: un error del 130 %.

---

## Errores de interpretación

### Error 1: Interpretar la onda de Rayleigh como mas rapida que la onda S porque "viaja por la superficie"

**Por qué parece correcto**

La idea intuitiva es que la superficie es un "atajo" respecto al volumen, y que una onda que no tiene que atravesar el interior del material llegara antes. Ademas, en sismologia se habla de que las ondas superficiales "dominan" el sismograma al final del registro, lo que el alumno interpreta como mayor velocidad.

**Por qué es incorrecto**

La onda de Rayleigh llega **despues** que la onda S al sismografo precisamente porque es mas lenta: [[v_R]] esta entre el 87 y el 96 % de [[v_T]]. La razon por la que domina el sismograma no es la velocidad sino la **amplitud**: la onda de Rayleigh transporta mas energia por unidad de longitud de frente de onda porque la amplitud solo decrece como la raiz cuadrada de la distancia (en 2D sobre la superficie), mientras que las ondas de volumen decrecen como 1/distancia en 3D.

**Señal de detección**

El alumno calcula un tiempo de llegada de la onda de Rayleigh menor que el de la onda S para el mismo recorrido, o afirma que la onda superficial seria util para deteccion anticipada en alerta sismica.

**Corrección conceptual**

La onda de Rayleigh es siempre mas lenta que la S del mismo material. El orden de llegada en un sismograma es: primero onda P, luego onda S, finalmente ondas superficiales (Rayleigh y Love). Las ondas superficiales producen mayor dano no por velocidad sino por mayor amplitud y duracion de la sacudida.

**Mini-ejemplo de contraste**

Para acero con [[v_T]] de 3200 m/s y [[v_R]] de 2970 m/s, en una distancia de 10 m la onda S llega a los 3.1 ms y la de Rayleigh a los 3.4 ms. La diferencia es pequeña (menos del 10 %) pero la onda de Rayleigh llega siempre segunda. Invertir el orden produciria una conclusion fisicamente incorrecta sobre la alerta temprana.

---

## Regla de autocontrol rápido

Para verificar rapidamente que el calculo de velocidades de onda es correcto, aplicar las tres comprobaciones siguientes antes de dar el resultado por valido:

**Comprobacion 1 — Jerarquia de velocidades**: [[v_L]] debe ser mayor que [[v_T]] y este debe ser mayor que [[v_R]]. Si la jerarquia no se cumple, hay un error en los modulos o en la formula elegida.

**Comprobacion 2 — Razon velocidades**: La razon [[v_T]]/[[v_L]] debe estar entre 0.5 y 0.7 para la gran mayoria de materiales de ingenieria. Valores fuera de ese rango indican un [[nu]] fuera de los limites fisicos o un error de unidades en los modulos.

**Comprobacion 3 — Orden de magnitud por material**: Para metales comunes (acero, aluminio, cobre), [[v_L]] debe estar entre 4000 y 7000 m/s. Para polimeros tecnicos, entre 1000 y 3000 m/s. Para suelos blandos, entre 100 y 500 m/s. Un resultado fuera de ese rango para el material dado es una señal clara de error de unidades o de modelo.
`;export{e as default};
