const e=`## Errores conceptuales

### Error 1: Confundir la ley de Coulomb con una dependencia lineal en la distancia

**Por qué parece correcto**

El alumno ha interiorizado que "más lejos, menos fuerza" y generaliza por analogía con otras situaciones cotidianas —resistencia del aire, presión hidrostática, atenuación del sonido— donde la disminución suele ser aproximadamente proporcional a la distancia. La generalización incorrecta lleva a suponer que doblar la distancia equivale a reducir la fuerza a la mitad.

**Por qué es incorrecto**

La ley de Coulomb tiene [[r12]] al cuadrado en el denominador. La relación es inversa cuadrática, no inversa lineal. Cuando [[r12]] se duplica, [[F_C]] se reduce por un factor de cuatro, no de dos. Esta estructura matemática es una consecuencia geométrica de la propagación isótropa de la interacción en el espacio tridimensional, y está verificada experimentalmente con altísima precisión.

**Señal de detección**

Si el alumno escribe que doblar la distancia reduce la fuerza a la mitad, o si construye una tabla donde [[F_C]] y [[r12]] cambian con la misma proporción, es señal inequívoca de este error.

**Corrección conceptual**

La dependencia es con el cuadrado de [[r12]]. Para memorizar la diferencia, conviene recordar la fórmula dimensional: la fuerza cae como uno dividido entre el cuadrado de la distancia, igual que la intensidad luminosa de una fuente puntual.

**Mini-ejemplo de contraste**

Dos cargas a 2 cm producen [[F_C]] de 1 N. Al separarlas a 4 cm (el doble), la fuerza calculada correctamente es 0.25 N. El error clásico daría 0.5 N. La diferencia es un factor de dos, que es detectable experimentalmente.

### Error 2: Usar el signo de una sola carga para determinar si la fuerza es atractiva o repulsiva

**Por qué parece correcto**

El alumno sabe que las cargas positivas "repelen" y las cargas negativas "atraen". Si solo hay una carga positiva, tiende a pensar que la interacción siempre será repulsiva con cualquier otra carga, ignorando el signo de la segunda.

**Por qué es incorrecto**

El carácter atractivo o repulsivo de la fuerza coulombiana depende del **producto** [[q1]]·[[q2]], no del signo de ninguna de las dos de forma independiente. Si el producto es negativo (cargas de signo opuesto), la fuerza es atractiva; si es positivo (mismo signo), es repulsiva. Una carga positiva y una negativa se atraen aunque solo una de ellas sea positiva.

**Señal de detección**

El alumno declara que la fuerza sobre una carga positiva es siempre repulsiva, sin consultar el signo de la otra carga. O bien, ante dos cargas negativas, concluye que se atraen porque "lo negativo atrae a lo negativo".

**Corrección conceptual**

El criterio correcto: mismo signo → repulsión; signos opuestos → atracción. Esto equivale a evaluar si el producto [[q1]]·[[q2]] es positivo (repulsión) o negativo (atracción). Nunca se determina la dirección por el signo de una sola carga.

**Mini-ejemplo de contraste**

Dos cargas de −3 μC y −3 μC. El alumno incorrecto podría pensar "negativo atrae negativo". El producto es positivo (negativo por negativo), así que la fuerza es repulsiva. Dos cargas iguales —ya sean positivas o negativas— siempre se repelen.

## Errores de modelo

### Error 3: Aplicar la ley de Coulomb a objetos macroscópicos sin verificar la condición de carga puntual

**Por qué parece correcto**

La ley de Coulomb parece aplicarse a cualquier sistema de cargas independientemente del tamaño de los objetos. El estudiante la aplica directamente a esferas de 5 cm de radio separadas 6 cm, sin cuestionar si la aproximación puntual es válida.

**Por qué es incorrecto**

La ley de Coulomb en su forma básica vale para cargas puntuales. Cuando el tamaño de los objetos es comparable a [[r12]], la distribución real de carga en la superficie del conductor difiere de una carga puntual concentrada en el centro geométrico, y la fuerza real es diferente de la predicha. A 6 cm de separación con radios de 5 cm, la condición de carga puntual está claramente violada.

**Señal de detección**

El enunciado describe objetos con dimensiones explícitas (radio, longitud, área) que son apreciables respecto a [[r12]], y el alumno los trata como si fueran cargas puntuales sin comentar la hipótesis.

**Corrección conceptual**

Para objetos con extensión comparable a [[r12]], la fuerza debe calcularse integrando las contribuciones de los elementos diferencial de carga, o usando el teorema de Gauss si hay simetría. La condición de seguridad práctica es que el tamaño de los objetos sea menor del 10% de [[r12]].

**Mini-ejemplo de contraste**

Una esfera de 10 cm de radio con carga total [[q1]] y otra igual a 12 cm del centro. Aplicar Coulomb directamente da un error superior al 50% porque las cargas se redistribuyen sobre la superficie y no equivalen a una carga puntual en el centro a esa distancia.

## Errores matemáticos

### Error 4: No convertir las unidades de [[r12]] a metros antes de sustituir

**Por qué parece correcto**

El enunciado da [[r12]] en centímetros, que es la unidad más natural para describir experimentos de laboratorio. El alumno sustituye directamente el valor numérico sin convertir, porque el cálculo parece correcto en apariencia.

**Por qué es incorrecto**

La constante [[k_e]] está expresada en unidades del SI (N·m²·C⁻²). Para que la dimensión de la fórmula sea coherente, [[r12]] debe estar en metros. Usar centímetros sin convertir introduce un factor de 10⁻² en [[r12]] que, elevado al cuadrado en el denominador, produce un error de cuatro órdenes de magnitud en [[F_C]].

**Señal de detección**

El resultado de [[F_C]] es diez mil veces mayor que el valor correcto para la misma configuración. O bien, el alumno escribe la distancia en centímetros (por ejemplo, cinco) y la sustituye directamente en la fórmula sin convertir a metros.

**Corrección conceptual**

Convertir siempre [[r12]] a metros multiplicando por 0.01 antes de sustituir. Es útil el hábito de escribir la unidad junto al valor numérico durante la sustitución para detectar inconsistencias dimensionales.

**Mini-ejemplo de contraste**

Dos cargas de 1 μC a 10 cm de separación. Con [[r12]] en metros (0.10 m): [[F_C]] ≈ 0.9 N. Con [[r12]] en centímetros (10): [[F_C]] calculada incorrectamente da 9×10⁻⁴ N. La diferencia de cuatro órdenes de magnitud es indetectable sin la verificación de unidades.

## Errores de interpretación

### Error 5: Interpretar [[F_C]] negativa como fuerza atractiva

**Por qué parece correcto**

En mecánica, las fuerzas con signo negativo suelen indicar dirección "hacia el origen" o "de retroceso". El estudiante transfiere esta convención a la fuerza de Coulomb y concluye que un resultado negativo significa atracción.

**Por qué es incorrecto**

La fórmula escalar de Coulomb da siempre el **módulo** de la fuerza, que es intrínsecamente positivo. Si el alumno incluye el signo del producto de las cargas en la fórmula escalar, puede obtener un resultado negativo, pero ese resultado no es el módulo sino una cantidad sin significado físico directo. El carácter atractivo o repulsivo se interpreta vectorialmente por separado, no como signo del módulo.

**Señal de detección**

El alumno calcula [[F_C]] como el producto algebraico (con signo) de [[q1]], [[q2]], [[k_e]] y el inverso del cuadrado de [[r12]], y luego interpreta el resultado negativo como fuerza atractiva, dándolo por correcto.

**Corrección conceptual**

El módulo de [[F_C]] se calcula siempre con los valores absolutos de las cargas. El carácter atractivo o repulsivo es información cualitativa que se determina comparando los signos de [[q1]] y [[q2]], y se comunica describiendo la dirección vectorial de la fuerza, no como signo del módulo.

**Mini-ejemplo de contraste**

Dos cargas de +2 μC y −3 μC a 5 cm. El módulo es positivo y vale aproximadamente 21.6 N. El producto algebraico con signo daría −21.6, que no es el módulo sino un número auxiliar. Decir "la fuerza es −21.6 N" es incorrecto; lo correcto es "la fuerza tiene módulo 21.6 N y es atractiva".

## Regla de autocontrol rápido

Para verificar rápidamente cualquier resultado con la ley de Coulomb:

1. ¿El módulo de [[F_C]] es positivo? Si no, hay error en la fórmula usada.
2. ¿Se ha convertido [[r12]] a metros? Multiplicar por 0.01 si estaba en centímetros.
3. ¿Doblar [[r12]] reduce [[F_C]] a un cuarto? Verificar con un caso simple.
4. ¿El carácter atractivo/repulsivo coincide con el signo del producto de las cargas? Mismo signo repele, signo opuesto atrae.
5. ¿El resultado es coherente con las referencias de orden de magnitud? Cargas de μC a cm producen fuerzas del orden de décimas a unidades de Newton.
`;export{e as default};
