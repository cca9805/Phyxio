const e=`# Longitud de onda

## Contexto conceptual

La longitud de onda es la escala espacial de repetición de una onda. No mide cuánto sube o baja la perturbación, sino qué distancia separa dos puntos que están en el mismo estado del ciclo.

En una onda sinusoidal se puede leer entre dos crestas consecutivas, pero la idea es más general: puede medirse entre valles, cruces equivalentes o cualquier par de estados de fase iguales.

## 🟢 Nivel esencial

La longitud de onda [[lambda]] es una distancia horizontal dentro del perfil de la onda. Si miras una cuerda o una superficie de agua, mide cuánto hay que avanzar para encontrar el mismo estado de oscilación otra vez.

Una [[lambda]] grande significa que el patrón se repite lentamente en el espacio. Una [[lambda]] pequeña significa que las crestas o estados equivalentes están más juntos. Esta lectura no depende de la altura de la onda: una onda puede ser alta y tener longitud corta, o baja y tener longitud larga.

La idea esencial es comparar posiciones dentro de una misma fotografía del perfil. Si eliges una cresta, debes buscar la siguiente cresta equivalente; si eliges un cruce ascendente por equilibrio, debes buscar otro cruce ascendente.

> [!TIP]
> Mide entre estados equivalentes, no entre un punto cualquiera y otro punto cualquiera.

## 🔵 Nivel formal

La longitud de onda se relaciona con el número de onda:

{{f:numero_onda_longitud}}

La magnitud [[k]] mide cuánto cambia la fase por metro. Si [[lambda]] es grande, la fase cambia despacio con la posición y [[k]] es pequeño. Si [[lambda]] es pequeña, la fase cambia rápido y [[k]] aumenta.

Cuando la onda se propaga con rapidez definida, se conecta con frecuencia:

{{f:velocidad_longitud_frecuencia}}

Esta relación dice que en cada segundo pasan [[f]] ciclos, y cada ciclo ocupa una distancia [[lambda]]. El producto da la distancia que avanza el patrón por segundo. Para calcular [[lambda]] desde [[f]] hace falta conocer [[v]].

En una medición directa, se puede usar:

{{f:longitud_por_crestas}}

Aquí [[Delta_x]] es la distancia medida entre estados equivalentes separados por [[n]] intervalos completos. Medir varios intervalos reduce el error frente a medir solo una separación.

Las tres expresiones responden a preguntas distintas. [[k]] sirve cuando el problema habla de fase espacial. [[v]] y [[f]] sirven cuando se combina ritmo temporal con avance del patrón. [[Delta_x]] y [[n]] sirven cuando la longitud se obtiene de una imagen o una medición directa.

Un control formal útil es revisar dimensiones: [[lambda]] y [[Delta_x]] son longitudes, [[k]] es inverso de longitud y [[v]] combina longitud con ritmo temporal. Esta revisión evita usar una frecuencia como si ya contuviera información espacial.

## 🔴 Nivel estructural

La longitud de onda pertenece a la estructura espacial del patrón. [[T]] y [[f]] describen repetición temporal; [[lambda]] y [[k]] describen repetición espacial. Una onda completa une ambas lecturas mediante la rapidez [[v]] del medio.

La validez exige que exista un patrón espacial reconocible. En un pulso aislado no siempre hay una [[lambda]] única; puede hablarse de anchura del pulso o de componentes espectrales. En una onda deformada, medir entre crestas consecutivas puede dar valores diferentes.

El modelo ideal funciona mejor cuando el medio es aproximadamente uniforme y el patrón mantiene su forma. Si hay dispersión, distintas componentes pueden tener longitudes de onda distintas. Si hay reflexión, las ondas estacionarias muestran nodos y vientres, y la lectura de [[lambda]] debe hacerse con el patrón adecuado.

La lectura gráfica también exige criterio. Contar crestas no es lo mismo que contar intervalos: tres crestas consecutivas encierran dos separaciones de longitud de onda. Esta distinción es clave en medidas experimentales.

La estructura espacial también permite comparar sistemas. Dos ondas con la misma [[f]] pueden tener distinta [[lambda]] si viajan en medios con distinta [[v]]. Dos ondas en el mismo medio pueden cambiar [[lambda]] al cambiar su frecuencia. Por eso la longitud de onda es una propiedad de la onda en un medio, no solo de la fuente.

La validez del modelo depende de que la separación espacial sea estable en la región observada. Si el medio cambia, la onda puede comprimirse o estirarse; si hay reflexión, el patrón visible puede mezclar onda incidente y reflejada. En esos casos, la longitud medida sigue siendo útil, pero debe interpretarse como lectura local o como parte de un modo estacionario.

Otra condición estructural es la coherencia entre escalas. La longitud de onda debe compararse con el tamaño del sistema, con obstáculos y con fronteras. Cuando [[lambda]] es comparable al tamaño de una abertura, aparecen efectos de difracción; cuando es mucho menor, puede dominar una lectura casi geométrica.

## Interpretación física profunda

[[lambda]] no es una propiedad aislada del dibujo. Depende del ritmo temporal y de la rapidez del medio cuando la onda se propaga. En sonido, cambiar la frecuencia en el mismo aire cambia la longitud de onda porque la rapidez se mantiene aproximadamente fija.

El número de onda [[k]] aporta la lectura complementaria: no dice distancia entre crestas directamente, sino densidad espacial de fase. Por eso una onda con muchas oscilaciones en poco espacio tiene [[k]] grande y [[lambda]] pequeña.

Esta lectura evita un error común: una longitud de onda corta no significa por sí sola mayor intensidad. Significa que el patrón espacial se repite con mayor densidad.

## Orden de magnitud

En una cuerda de laboratorio, [[lambda]] puede ser del orden de centímetros o metros. En sonido audible en aire, una frecuencia de 340 Hz corresponde a una longitud de onda de orden 1 m. En luz visible, la escala baja a cientos de nanómetros.

Un resultado absurdo aparece si una cuerda de un metro se describe con una longitud de onda de kilómetros, o si una onda sonora audible se calcula con escala de luz visible. La escala espacial debe ser compatible con el fenómeno y el medio.

También conviene comparar con el tamaño del sistema. Si en una cuerda de 2 m aparece una estimación de [[lambda]] cercana a 0,20 m, caben muchas repeticiones; si aparece una estimación de 20 m, el perfil visible no podría mostrar varios ciclos completos.

## Método de resolución personalizado

Primero decide si la longitud se mide en una gráfica o se calcula desde [[v]] y [[f]]. Si se mide, identifica estados equivalentes y cuenta intervalos completos [[n]]. Si se calcula, comprueba que la rapidez corresponde al medio correcto.

Después interpreta el resultado como escala espacial: pregunta cuántas longitudes de onda caben en el sistema observado. Esa pregunta suele detectar errores de orden de magnitud.

## Casos especiales y ejemplo extendido

En una onda estacionaria, la distancia entre nodos consecutivos no es una longitud de onda completa, sino media longitud de onda. Por eso copiar la regla de cresta a cresta sin mirar el tipo de patrón puede producir errores.

En una señal con varias frecuencias, cada componente puede tener su propia [[lambda]] si la rapidez está definida. Un pulso corto puede contener muchas componentes; entonces no hay una única longitud de onda que describa todo el fenómeno.

## Preguntas reales del alumno

**¿La longitud de onda es la altura de la onda?** No. La altura se relaciona con amplitud; [[lambda]] se mide en la dirección de propagación o de repetición espacial.

**¿Puedo medir entre dos crestas cualquiera?** Sí, si son crestas consecutivas para una longitud de onda, o si divides por el número de intervalos completos.

**¿Mayor frecuencia significa menor longitud de onda?** Solo si la rapidez del medio se mantiene aproximadamente constante.

**¿El número de onda es otra longitud?** No. [[k]] mide ritmo espacial de fase y tiene dimensión inversa de longitud.

## Conexiones transversales y rutas de estudio

Este leaf conecta con [Frecuencia y periodo](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/frecuencia-y-periodo), porque la repetición temporal se combina con la repetición espacial. También conecta con [Fase](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/fase), donde [[k]] mide avance de fase por metro.

Después conviene estudiar velocidad de propagación, interferencia y ondas estacionarias. En todos esos temas, la distancia entre estados equivalentes organiza la lectura espacial del fenómeno.

## Síntesis final

La longitud de onda [[lambda]] mide la separación espacial entre estados equivalentes de una onda. Al relacionarse con [[k]], [[f]], [[T]], [[v]], [[Delta_x]] y [[n]], permite pasar de una lectura gráfica a una descripción cuantitativa de la repetición espacial.
`;export{e as default};
