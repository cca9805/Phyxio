const e=`## Modelo ideal

El modelo ideal del principio de superposición trata cada carga fuente como una carga **puntual** en posición fija, rodeada de vacío. En este modelo se asume que el campo o la fuerza total resulta de sumar exactamente [[N_cargas]] contribuciones independientes, sin que ninguna carga fuente modifique la distribución de las demás.

Las magnitudes que se conservan en el modelo son [[k_e]], los valores con signo de cada [[q_i]] y las posiciones geométricas de cada carga. Las magnitudes que varían libremente son las distancias [[r_i]] al punto de observación, que cambian cuando se evalúa el campo en distintos puntos del espacio.

El modelo ignora los efectos de inducción: en la realidad, la presencia de una carga externa puede redistribuir las cargas sobre conductores cercanos, modificando las posiciones efectivas. El modelo ideal supone que las cargas están fijas o que los objetos cargados son no conductores.

## Hipótesis

- **Cargas puntuales**: cada objeto cargado se representa por su carga total concentrada en un punto. Si esta hipótesis se viola (objetos extendidos), la suma discreta debe reemplazarse por integración sobre la distribución de carga.
- **Posiciones fijas**: las cargas no se mueven durante el cálculo. Si las cargas se mueven (electrodinámica), hay que añadir los efectos de campo retardado y radiación.
- **Medio lineal**: el espacio entre las cargas es vacío o un dieléctrico lineal homogéneo. En medios no lineales, los campos no se superponen de forma independiente.
- **Ausencia de efectos de inducción**: las cargas fuente no redistribuyen sus cargas como reacción al campo de las demás. Esta hipótesis falla para conductores próximos entre sí.
- **Régimen electrostático**: las cargas están en reposo o se mueven muy lentamente. Para cargas en movimiento a velocidades comparables a las de la luz, la superposición sigue siendo válida pero los campos de cada carga son los campos de Liénard-Wiechert, no el campo de Coulomb estático.

## Dominio de validez cuantitativo

El modelo de superposición de cargas puntuales es válido cuando la distancia de separación entre objetos cargados es mayor de 10 veces su tamaño característico. Para esferas de radio 1 cm, la aproximación de carga puntual es razonable para distancias r > 10 cm entre centros.

El error relativo al usar el modelo puntual para una esfera conductora a distancia r es inferior al 1 % cuando r > 10·a, donde \`a\` es el radio de la esfera. Para r > 2·a el error es del orden del 5 %.

La velocidad de las cargas debe ser inferior a 0.01·c, es decir, inferior a 3×10⁶ m/s, para que los efectos relativistas sean despreciables (corrección inferior al 0.01 %).

## Señales de fallo del modelo

- **Campo que no decrece con la distancia esperada**: si [[E_total]] no decrece aproximadamente como la inversa del cuadrado de la distancia al alejarse de una carga, puede haber redistribución de carga inducida no contemplada.
- **Fuerza que no respeta la tercera ley de Newton**: si la fuerza calculada de [[q_i]] sobre la carga de prueba no es igual y opuesta a la fuerza de la carga de prueba sobre [[q_i]], hay un error en el cálculo de los vectores unitarios.
- **Resultado dependiente de la carga de prueba elegida para medir el campo**: [[E_total]] debe ser independiente del valor de la carga de prueba. Si cambiando la carga de prueba cambia el campo calculado, las cargas inducidas están modificando la distribución fuente.
- **Campo nulo donde no debería serlo**: si el sistema tiene cargas de un solo signo pero se obtiene un punto de [[E_total]] nulo entre ellas, hay un error de signo en alguna contribución.

## Modelo extendido o alternativo

Cuando las cargas no son puntuales sino distribuidas en un volumen, una superficie o una línea, el principio de superposición sigue siendo válido pero la suma discreta se reemplaza por una **integral sobre la distribución de carga**. Cada diferencial de carga \`dq\` contribuye al campo con su propio término de Coulomb, y [[E_total]] se obtiene integrando todas las contribuciones.

Para distribuciones con alta simetría (esférica, cilíndrica, planar), la ley de Gauss es el método más eficiente porque evita la integración explícita. Cuando conviene pasar al modelo de distribución continua: cuando la fuente de campo es un objeto extendido cuyo tamaño es comparable a la distancia de observación, cuando la precisión requerida es alta, o cuando el sistema tiene geometría no puntual.

Cuando conviene usar la ley de Gauss en lugar de la suma directa: cuando el sistema tiene simetría esférica, cilíndrica o planar, lo que reduce la integral tridimensional a una expresión algebraica sencilla.

## Comparación operativa

| Criterio | Modelo ideal (cargas puntuales) | Modelo extendido (distribución continua) |
|---|---|---|
| Precisión | Alta para objetos pequeños a distancias grandes | Alta para cualquier geometría |
| Complejidad | Suma de N términos vectoriales | Integración vectorial tridimensional |
| Rango de aplicación | Objetos cuyo tamaño es mucho menor que su separación | Objetos extendidos a cualquier distancia |
| Simetría requerida | Ninguna | No necesaria, pero simplifica si existe |
| Herramienta matemática | Álgebra vectorial | Cálculo integral o ley de Gauss |
`;export{e as default};
