const e=`# Errores frecuentes en diferencia de potencial

## Errores conceptuales

### Error 1: Invertir el orden de los subíndices

**Por qué parece correcto**

El alumno trata [[V_AB]] y [[V_BA]] como si fueran la misma magnitud, por analogía con la distancia entre dos puntos, que sí es simétrica. La notación con subíndices parece un simple etiquetado del par de puntos, no una indicación de dirección.

**Por qué es incorrecto**

La diferencia de potencial tiene signo y depende del orden: [[V_AB]] es el potencial en A menos el potencial en B, mientras que [[V_BA]] es el potencial en B menos el potencial en A. Son opuestos en signo. Invertirlos invierte también el signo del trabajo [[W_AB]], lo que puede llevar a concluir que el campo frena una carga cuando en realidad la acelera.

**Señal de detección**

El trabajo calculado tiene módulo correcto pero signo erróneo. La carga supuestamente gana energía cinética moviéndose en sentido contrario al campo, lo cual contradice la física.

**Corrección conceptual**

El primer subíndice de [[V_AB]] indica el punto desde el que se calcula y el segundo el punto de referencia. Antes de operar, identificar explícitamente cuál es A y cuál es B, y trazar el vector de desplazamiento A→B para asignar el signo correcto.

**Mini-ejemplo de contraste**

Si A está a 100 V y B a 0 V, [[V_AB]] vale 100 V y el campo impulsa a una carga positiva de A a B. Si el alumno usa [[V_BA]] calculado erróneamente como 100 V en lugar de −100 V, concluirá que el campo impulsa la carga en sentido contrario, lo cual es físicamente absurdo.

### Error 2: Confundir diferencia de potencial con energía potencial

**Por qué parece correcto**

Los nombres "diferencia de potencial" y "energía potencial eléctrica" son muy similares y se usan a veces de forma intercambiable en el lenguaje cotidiano. Además, ambas magnitudes están relacionadas, lo que refuerza la confusión.

**Por qué es incorrecto**

[[V_AB]] tiene unidades de voltios (J/C), no de joules. Es trabajo por unidad de carga, una propiedad del campo en esos dos puntos. La energía potencial eléctrica, en cambio, es [[W_AB]] y depende también de la carga [[q]] que se mueve: [[W_AB]] es [[q]] multiplicado por [[V_AB]].

**Señal de detección**

El resultado del "trabajo" tiene unidades de voltios en lugar de joules, o el valor numérico difiere del correcto en un factor igual a la carga.

**Corrección conceptual**

Distinguir siempre: [[V_AB]] es la "diferencia de alturas energéticas por unidad de carga"; [[W_AB]] es la energía que gana o pierde una carga concreta [[q]] al descender esa diferencia de altura. Para obtener [[W_AB]], multiplicar [[V_AB]] por [[q]] con su signo.

**Mini-ejemplo de contraste**

Una diferencia de potencial de 9 V entre dos bornes de batería no significa que la batería entregue 9 J a cualquier carga. Si se conecta una resistencia por la que circulan 2 C de carga, la energía entregada es 18 J. Confundir [[V_AB]] con [[W_AB]] daría 9 J independientemente de la carga transferida, lo cual es incorrecto.

## Errores de modelo

### Error 3: Aplicar la fórmula de campo uniforme fuera de su dominio

**Por qué parece correcto**

La fórmula [[V_AB]] proporcional a [[E_unif]] y [[d_AB]] es sencilla y da resultados numéricos siempre, incluso cuando el campo no es uniforme. El alumno la aplica por defecto sin verificar la condición de uniformidad.

**Por qué es incorrecto**

La relación proporcional entre [[V_AB]], [[E_unif]] y [[d_AB]] solo es válida cuando el campo es constante en toda la región entre A y B. Cerca de una carga puntual, el campo decrece con el cuadrado de la distancia; el resultado de aplicar la fórmula uniforme allí es sistemáticamente incorrecto.

**Señal de detección**

El resultado difiere del obtenido por integración directa. Si la geometría es esférica o cilíndrica, la dependencia de [[V_AB]] con la distancia es logarítmica o con potencias, no lineal.

**Corrección conceptual**

Antes de aplicar la fórmula, verificar que el campo sea realmente uniforme en la región de interés. En geometrías con simetría esférica o cilíndrica, usar la integración del campo o los potenciales absolutos derivados de la ley de Coulomb.

**Mini-ejemplo de contraste**

Calcular la diferencia de potencial entre 1 cm y 2 cm de una carga puntual de 1 µC usando campo uniforme (con el campo en el punto medio) da un resultado que difiere en más del 20 % del valor correcto obtenido por integración. La diferencia de potencial real varía con el inverso de la distancia, no linealmente.

### Error 4: Ignorar los efectos de borde en condensadores reales

**Por qué parece correcto**

El modelo del condensador plano ideal con campo uniforme es el que se enseña habitualmente, y el alumno lo aplica sin considerar que solo es válido lejos de los bordes.

**Por qué es incorrecto**

Cerca de los bordes de las placas, el campo se curva hacia afuera y deja de ser perpendicular a las placas. La diferencia de potencial calculada con campo uniforme sobreestima el valor real en esas regiones.

**Señal de detección**

Las medidas experimentales de campo cerca de los bordes son significativamente distintas de las predicciones del modelo uniforme. El campo medido tiene componentes laterales que el modelo ignora.

**Corrección conceptual**

El modelo de campo uniforme es válido solo cuando la separación entre placas es mucho menor que sus dimensiones laterales. Para condensadores reales con relaciones de aspecto moderadas, el efecto de borde modifica el campo en una franja de anchura comparable a la separación entre placas.

**Mini-ejemplo de contraste**

Un condensador con placas de 2 cm × 2 cm separadas 1 cm tiene efectos de borde que afectan a casi todo el condensador. El modelo uniforme predice el mismo campo en el centro y en el borde, cuando en realidad difieren sustancialmente.

## Errores matemáticos

### Error 5: Usar la longitud total de la trayectoria en lugar de la proyección sobre el campo

**Por qué parece correcto**

El alumno identifica [[d_AB]] con la distancia recorrida, que es la longitud del camino, por analogía con otros problemas de física donde la distancia total es el parámetro relevante.

**Por qué es incorrecto**

Solo la componente del desplazamiento paralela al campo contribuye a [[V_AB]]. Si el camino es oblicuo respecto al campo, [[d_AB]] es la proyección del vector de desplazamiento sobre la dirección del campo, no la longitud del camino. Un camino más largo perpendicular al campo no produce diferencia de potencial.

**Señal de detección**

El resultado de [[V_AB]] depende de qué trayectoria se elige entre A y B, lo que contradice el carácter conservativo del campo eléctrico: la diferencia de potencial entre dos puntos es única.

**Corrección conceptual**

[[d_AB]] es la proyección escalar del vector de desplazamiento A→B sobre la dirección del campo. Si el desplazamiento forma un ángulo con el campo, multiplicar la longitud del desplazamiento por el coseno de ese ángulo. Desplazamiento perpendicular al campo no produce variación de potencial.

**Mini-ejemplo de contraste**

Un electrón que se mueve 5 cm en diagonal en un campo horizontal, con la componente horizontal de 3 cm y la vertical de 4 cm, experimenta la misma diferencia de potencial que si se hubiera movido solo 3 cm en la dirección del campo. Usar 5 cm sobreestima [[V_AB]] en un factor 5/3 ≈ 1.67.

## Errores de interpretación

### Error 6: Concluir que el campo es cero porque la diferencia de potencial es cero

**Por qué parece correcto**

Si entre dos puntos no hay diferencia de potencial, el campo "no hace nada" al mover una carga entre ellos, lo que intuitivamente suena a que no hay campo en esa región.

**Por qué es incorrecto**

[[V_AB]] nulo significa que A y B están al mismo potencial, es decir, que la integral del campo sobre cualquier camino entre A y B es cero. Pero el campo puede ser intenso en cada punto del camino; simplemente sus contribuciones positivas y negativas se compensan en la integral. El campo es cero en un punto solo si su módulo es cero en ese punto.

**Señal de detección**

El alumno afirma que no hay campo eléctrico entre dos puntos equipotenciales. Sin embargo, entre las dos caras de un conductor en equilibrio hay diferencia de potencial nula y campo nulo en el interior, pero el campo en la superficie puede ser intenso.

**Corrección conceptual**

Separar las afirmaciones: "diferencia de potencial nula entre A y B" no implica "campo nulo en todos los puntos entre A y B". Las superficies equipotenciales son precisamente aquellas sobre las que el campo no hace trabajo, pero el campo puede ser perpendicular a ellas y tener módulo no nulo.

**Mini-ejemplo de contraste**

Dos puntos diametralmente opuestos en una esfera conductora tienen diferencia de potencial cero entre ellos (toda la esfera es equipotencial), pero el campo eléctrico en la superficie exterior puede ser intenso y perpendicular a ella. Concluir campo cero en la superficie por [[V_AB]] nulo sería erróneo.

## Regla de autocontrol rápido

Para verificar que el cálculo de [[V_AB]] y [[W_AB]] es correcto, aplicar estos tres controles antes de dar el resultado:

**Verificación de signo**: El potencial disminuye en la dirección del campo. Si el desplazamiento A→B sigue la dirección del campo, [[V_AB]] debe ser positivo (A está a mayor potencial). Si es negativo o si el desplazamiento es contrario al campo, verificar que el signo de [[V_AB]] sea coherente con la geometría descrita.

**Verificación dimensional**: [[V_AB]] debe tener unidades de voltios (J/C). El producto [[q]] por [[V_AB]] debe dar joules. Si las unidades no cuadran, hay un error en la identificación de las magnitudes usadas.

**Verificación de magnitud**: En un condensador típico de laboratorio (placas separadas 1 cm con campo de 10³ N/C), la diferencia de potencial es del orden de 10 V. Diferencias de potencial mayores de kV o menores de mV en ese mismo sistema indican error de cálculo o de datos. Usar siempre una estimación de orden de magnitud para detectar resultados absurdos antes de presentar el resultado final.
`;export{e as default};
