const a=`# Ejemplo tipo examen

## Enunciado

Un sistema de inercia-resorte consta de un cuerpo de 0.5 kg unido a un resorte de constante elastica 200 N/m. El sistema esta sujeto a una fuerza armonica externa de amplitud 10 N. Sabiendo que el sistema tiene un factor de calidad de 20, determinar:

a) La frecuencia natural del sistema
b) La amplitud de oscilacion cuando la frecuencia forzada coincide exactamente con la natural
c) El ancho de banda de la curva de resonancia

## Datos

- Inercia del sistema: [[masa]] = 0.5 kg
- Constante restauradora: [[constante_restauradora]] = 200 N/m
- Amplitud de fuerza externa: F₀ = 10 N
- Factor de calidad: [[factor_calidad]] = 20
- Frecuencia forzada: [[frecuencia_forzada]] = [[frecuencia_natural]] (para el apartado b)

## Definicion del sistema

El sistema fisico consiste en un oscilador armonico amortiguado y forzado, constituido por un cuerpo puntual unido a un resorte ideal y sometida a una fuerza externa armonica. El sistema opera en regimen estacionario despues de un tiempo suficiente para disipar los transitorios iniciales.

Las magnitudes relevantes son la inercia del cuerpo, la constante del resorte que proporciona la fuerza recuperadora, y el factor de calidad que caracteriza las perdidas energeticas del sistema.

## Modelo fisico

Aplicamos el modelo del oscilador armonico amortiguado y forzado en regimen estacionario. Las hipotesis fundamentales son:

- El resorte obedece la ley de Hooke (comportamiento lineal)
- El amortiguamiento es viscoso y lineal (proporcional a la velocidad)
- La fuerza externa es puramente armonica (sin componentes de otros armónicos)
- El sistema ha alcanzado el estado estacionario (se han disipado los transitorios)

## Justificacion del modelo

El modelo es apropiado porque:

- Las deformaciones del resorte con las amplitudes esperadas permanecen en el rango lineal tipico de resortes metalicos (menos del 10% de deformacion relativa)
- El factor de calidad moderado (20 unidades) indica amortiguamiento viscoso dominante sin efectos no lineales significativos
- La fuerza armonica pura es una idealizacion razonable para excitadores electromecanicos bien disenados
- El tiempo de establecimiento para este factor de calidad es aproximadamente veinte ciclos, razonablemente alcanzable en un experimento de laboratorio

## Resolucion simbolica

Para el apartado a, aplicamos la formula de la frecuencia natural del sistema:

{{f:frecuencia_natural_sistema}}

Despejando la frecuencia natural:

[[frecuencia_natural]] = (1/(2π)) × √([[constante_restauradora]]/[[masa]])

Para el apartado b, en resonancia la amplitud se simplifica considerablemente. El desplazamiento de fase entre fuerza y desplazamiento es de noventa grados, y la amplitud depende exclusivamente del amortiguamiento:

[[amplitud_forzada]] = F₀ / (b × [[frecuencia_natural]])

Donde b es el coeficiente de amortiguamiento, relacionado con el factor de calidad mediante:

[[factor_calidad]] = [[frecuencia_natural]] × [[masa]] / b

Combinando estas relaciones, obtenemos:

[[amplitud_forzada]] = (F₀ × [[factor_calidad]]) / ([[constante_restauradora]])

Para el apartado c, el ancho de banda resulta directamente del factor de calidad:

[[ancho_banda]] = [[frecuencia_natural]] / [[factor_calidad]]

## Sustitucion numerica

Apartado a:

Sustituyendo los valores, la frecuencia natural resulta ser aproximadamente 3.18 Hz.

Apartado b:

Sustituyendo los valores, la amplitud de resonancia resulta ser 1.0 metro.

Apartado c:

El ancho de banda resulta de dividir la frecuencia natural entre el factor de calidad, obteniendo aproximadamente 0.16 Hz.

## Validacion dimensional

Las dimensiones de los resultados son consistentes:

- Frecuencia natural: raiz cuadrada de fuerza por longitud dividida por inercia produce unidades de tiempo inversa, es decir, hertz
- Amplitud: fuerza dividida por coeficiente de amortiguamiento por frecuencia produce unidades de longitud, es decir, metros
- Ancho de banda: frecuencia dividida por factor adimensional produce unidades de frecuencia, es decir, hertz

## Interpretacion fisica

La frecuencia natural de 3.18 Hz corresponde a oscilaciones moderadamente rapidas, aproximadamente tres ciclos completos por segundo. Este valor es razonable para un sistema inercia-resorte de laboratorio con la inercia y rigidez especificadas.

La amplitud de resonancia de 1.0 metro es considerablemente grande, indicando que el sistema con factor de calidad 20 acumula significativamente la energia de la fuerza externa. En una situacion real, esta amplitud podria exceder el rango lineal del resorte, sugiriendo que el modelo podria necesitar correcciones no lineales o que el sistema requiere proteccion contra amplitudes excesivas.

El ancho de banda de 0.16 Hz indica una resonancia moderadamente selectiva. El sistema responde significativamente solo cuando la frecuencia forzada se encuentra dentro de aproximadamente 0.08 Hz de la frecuencia natural (media anchura a media altura). Esto implica que la sintonizacion debe ser precisa para obtener la maxima respuesta.

---

# Ejemplo de aplicacion real

## Contexto

Los receptores de radio AM utilizan circuitos resonantes LC para seleccionar la emisora deseada entre todas las senales que llegan a la antena. Cada emisora transmite en una frecuencia portadora especifica, y el circuito resonante del receptor debe sintonizarse a esa frecuencia para captarla preferentemente.

Consideremos un receptor de radio AM que debe sintonizar emisoras en el rango de 530 kHz a 1700 kHz. El circuito sintonizado utiliza un capacitor variable cuya capacitancia puede ajustarse entre 50 pF y 500 pF. El inductor tiene una inductancia fija que debe determinarse para cubrir todo el rango de frecuencias requerido.

## Estimacion fisica

La frecuencia de resonancia de un circuito LC sigue una estructura matematica analoga al oscilador mecanico, con la inductancia L representando la inercia del flujo magnetico (similar a la inercia mecanica) y la capacitancia C representando la capacidad de almacenamiento de carga (inversamente analoga a la rigidez).

Para cubrir el rango completo de frecuencias AM con el rango de capacitancias disponible, calculamos la inductancia necesaria. La frecuencia es inversamente proporcional a la raiz cuadrada del producto de inductancia y capacitancia.

Para la frecuencia maxima (1700 kHz) usamos la capacitancia minima (50 pF), y viceversa. Despejando la inductancia, esta resulta inversamente proporcional al cuadrado de la frecuencia multiplicada por la capacitancia.

Para 530 kHz y 500 pF, el calculo arroja aproximadamente 180 microhenries.

Verificamos con 1700 kHz y 50 pF, obteniendo aproximadamente 175 microhenries.

La consistencia entre ambos calculos confirma que una inductancia de aproximadamente 180 μH permite cubrir todo el rango de frecuencias AM con el capacitor variable especificado.

El factor de calidad de estos circuitos tipicamente excede 50, proporcionando suficiente selectividad para separar emisoras adyacentes espaciadas por 10 kHz (separacion estandar en AM).

## Interpretacion

El circuito resonante LC actua como un filro selectivo de frecuencia. Al girar el dial del radio, se varia la capacitancia del capacitor variable, desplazando la frecuencia natural del circuito. Cuando esta frecuencia natural coincide con la frecuencia portadora de una emisora, el circuito entra en resonancia y transmite eficientemente esa senal al amplificador posterior.

El alto factor de calidad (Q > 50) garantiza que el circuito responda significativamente solo a la frecuencia sintonizada, rechazando emisoras cercanas. Sin esta selectividad, todas las emisoras se escucharian simultaneamente superpuestas. La resonancia electrica, analogamente a la mecanica, permite seleccionar senales especificas de un espectro complejo.
`;export{a as default};
