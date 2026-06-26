const a=`# Ejemplo tipo examen

## Enunciado

Un carro de masa [[m]]=2.0 kg se mueve con velocidad [[v]]=3.0 m/s a una altura [[h]]=0.80 m respecto de una referencia horizontal. Se pide calcular [[T]], [[V]], [[L]] y [[E]], interpretar que energia domina y explicar por que el lagrangiano no debe confundirse con la energia mecanica total.

## Datos

- [[m]]=2.0 kg.
- [[v]]=3.0 m/s.
- [[h]]=0.80 m.
- [[g]]=9.81 m/s2.
- La referencia de [[V]] es el plano horizontal desde el que se mide [[h]].

## Definición del sistema

El sistema es un carro tratado como particula o cuerpo rigido con velocidad traslacional efectiva. Solo se considera energia cinetica traslacional y energia potencial gravitatoria uniforme. No se incluyen rozamientos, motores ni cambios de referencia durante el calculo.

## Modelo físico

El modelo usa la velocidad para calcular [[T]], la altura para calcular [[V]], y despues forma dos combinaciones distintas: [[L]] como diferencia y [[E]] como suma.

{{f:energia_cinetica_traslacional}}

{{f:energia_potencial_gravitatoria}}

{{f:lagrangiano_mecanico}}

{{f:energia_mecanica_total}}

## Justificación del modelo

El modelo es adecuado porque todas las magnitudes pertenecen al mismo estado fisico: la misma masa, el mismo instante y la misma referencia vertical. La energia potencial se interpreta como almacenamiento por posicion, mientras que la energia cinetica se interpreta como movimiento.

No se usa la expresion elastica porque no hay deformacion ni rigidez [[k]]. Tampoco se usa una velocidad generalizada [[qdi]] porque el enunciado entrega una velocidad ordinaria [[v]]. Esta seleccion evita mezclar modelos distintos bajo una apariencia energetica comun.

La hipotesis de campo gravitatorio uniforme tambien es razonable porque la altura es pequena frente al radio terrestre. Si el problema ocurriera en una orbita amplia, la expresion de [[V]] tendria que cambiar y el ejemplo ya no seria una simple aplicacion de energia potencial gravitatoria uniforme.

## Resolución simbólica

Primero se calcula la parte cinetica con la velocidad:

{{f:energia_cinetica_traslacional}}

Despues se calcula la parte potencial gravitatoria:

{{f:energia_potencial_gravitatoria}}

Si el mismo sistema se escribiera en coordenadas acopladas, la energia cinetica tendria que prepararse con la forma metrica:

{{f:energia_cinetica_metrica}}

Con ambas magnitudes se construye el lagrangiano:

{{f:lagrangiano_mecanico}}

Y, por contraste, la energia mecanica total:

{{f:energia_mecanica_total}}

La resolucion simbolica muestra la diferencia conceptual: [[L]] no suma energias, sino que compara movimiento y configuracion con signo.

Si el enunciado pidiera preparar una ecuacion de Lagrange en una coordenada de avance, esta construccion seria el punto de partida. Si pidiera solo verificar conservacion entre dos alturas, entonces la magnitud de trabajo seria [[E]]. El mismo par [[T]] y [[V]] alimenta dos decisiones distintas.

## Sustitución numérica

Energia cinetica:

- [[T]]=0.5*2.0*3.0^2=9.0 J.

Energia potencial:

- [[V]]=2.0*9.81*0.80=15.7 J aproximadamente.

Lagrangiano:

- [[L]]=9.0-15.7=-6.7 J.

Energia mecanica:

- [[E]]=9.0+15.7=24.7 J.

## Validación dimensional

[[T]] tiene unidad \\(\\mathrm{kg\\cdot m^2/s^2}\\), equivalente a julio. [[V]] tiene unidad \\(\\mathrm{kg\\cdot m/s^2\\cdot m}\\), tambien julio. Por eso [[L]] y [[E]] conservan unidad de energia aunque representen operaciones distintas.

## Interpretación física

El valor negativo de [[L]] no indica energia negativa del sistema. Indica que, en esta referencia, la energia potencial supera a la cinetica. La energia mecanica total [[E]] es positiva y representa la suma de ambas contribuciones.

Si el carro aumentara su velocidad manteniendo [[h]] fija, [[T]] crecería cuadraticamente y podria superar a [[V]]. En el grafico, ese cruce coincide con [[L]]=0, pero no con reposo ni equilibrio. Es solo el punto donde las dos contribuciones energeticas igualan su valor.

Tambien se observa una lectura de escala. El termino potencial esta cerca de 16 J y el cinetico cerca de 9 J, por lo que ninguno es despreciable. Un modelo que eliminara una de las dos partes perderia informacion relevante sobre el estado.

# Ejemplo de aplicación real

## Contexto

En una simulacion didactica de una montaña rusa, el profesor quiere que el alumnado vea cuando domina la energia por movimiento y cuando domina la energia por altura. El sistema registra [[m]], [[v]] y [[h]] en varios puntos de la trayectoria.

## Estimación física

Para un carrito de [[m]]=250 kg a [[h]]=12 m, la energia potencial gravitatoria ronda 29 kJ. Si en ese punto la velocidad es [[v]]=8 m/s, la energia cinetica es 8 kJ. La lectura fisica es clara: en la parte alta domina [[V]], y la velocidad todavia no concentra la mayor parte de la energia.

En un punto mas bajo, por ejemplo [[h]]=3 m con la misma masa, [[V]] baja a unos 7.4 kJ. Si la velocidad sube a [[v]]=14 m/s, [[T]] pasa a unos 24.5 kJ. La comparacion cuantitativa muestra que el dominio energetico se ha invertido: ahora el movimiento pesa mas que la altura.

Como orden de magnitud, ambas cifras estan en decenas de kilojulios, por lo que el intercambio es plausible para una atraccion real y no un artefacto numerico.

## Interpretación

El valor educativo no esta en obtener un numero aislado, sino en comparar escalas. Si el carrito baja y [[h]] disminuye mientras [[v]] aumenta, [[V]] se transforma en [[T]] dentro del modelo ideal. [[E]] sirve para discutir conservacion, mientras [[L]] prepara el paso a una ecuacion lagrangiana si se elige una coordenada de avance sobre la pista.

La misma tabla de datos permite al profesor hacer dos preguntas distintas. Una pregunta de conservacion revisa si [[E]] se mantiene aproximadamente constante. Una pregunta lagrangiana exige escribir [[h]] y [[v]] en funcion de una coordenada de la pista para construir [[L]] con significado dinamico.
`;export{a as default};
