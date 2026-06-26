const e=`# Modelo físico\r
\r
## Modelo ideal\r
\r
El modelo ideal es una **onda electromagnetica plana, armonica y transversal** que se propaga en el vacio. Sus campos se describen mediante valores eficaces [[E0]] y [[B0]], y el transporte se resume en la intensidad media [[S_med]]. El modelo no intenta describir la estructura completa de la fuente; solo estudia un frente suficientemente lejos y suficientemente uniforme.\r
\r
La interpretacion energetica se organiza con [[u_EM]], que mide energia media por volumen, y con [[S_med]], que mide potencia por area. La interpretacion mecanica aparece mediante [[g_EM]] y [[p_rad]], siempre como modulos asociados al sentido de propagacion.\r
\r
## Hipótesis\r
\r
La primera hipotesis es que la onda puede tratarse como plana sobre la region observada. Eso exige que el area efectiva [[A]] sea pequeña frente a la escala de variacion del haz. La segunda hipotesis es que el medio no introduce absorcion, dispersion ni reflexion interna relevante antes de que la onda alcance la superficie.\r
\r
Tambien se supone incidencia normal cuando se usa [[p_rad]] de forma directa. Si la superficie esta inclinada, el area proyectada reemplaza a [[A]]. Si hay reflexion especular importante, el empuje mecanico cambia porque el momento electromagnetico sale con direccion distinta.\r
\r
## Dominio de validez cuantitativo\r
\r
Como criterio practico, el modelo local es razonable si la intensidad no cambia mas de 10 % a lo largo del area iluminada. Para aplicaciones ordinarias, una condicion segura es [[S_med]] < 1e6 W/m2 y una superficie absorbente sin calentamiento destructivo. En optica de precision o laser intenso, el limite puede ser mucho menor si el material se deforma o cambia su absorcion.\r
\r
Para una lectura de presion clasica, [[p_rad]] debe ser pequeña frente a la presion mecanica dominante del montaje. Si [[p_rad]] > 1 Pa, conviene revisar si el regimen sigue siendo una onda clasica plana, si hay concentracion extrema o si el material ya no se comporta linealmente.\r
\r
## Señales de fallo del modelo\r
\r
El modelo empieza a fallar si el haz esta muy enfocado, si la intensidad varia mucho sobre [[A]], si aparecen efectos no lineales del material o si la superficie refleja mas energia de la que absorbe. Tambien falla si se usa [[P_rad]] como si fuese una propiedad local de la onda, porque la potencia total depende del area interceptada.\r
\r
Otra señal de fallo es obtener una presion comparable a cargas mecanicas ordinarias a partir de una iluminacion comun. En ese caso suele haberse omitido la escala [[c]] o se ha usado una intensidad que en realidad era potencia total.\r
\r
## Modelo extendido o alternativo\r
\r
El primer modelo extendido introduce reflectividad. Una superficie reflectante no solo absorbe momento; cambia la direccion del momento saliente, por lo que el empuje puede ser mayor que en absorcion ideal. Ese modelo necesita un coeficiente optico adicional y ya no queda descrito solo por [[S_med]] y [[c]].

Conviene cambiar de modelo cuando la pregunta ya no se responde con absorcion normal, area efectiva uniforme y onda plana. La transicion explicita ocurre si la reflexion es dominante, si la incidencia es oblicua, si la intensidad varia mas de 10 % sobre [[A]], o si el medio material reparte energia y momento con la materia.

Otro modelo extendido permite medios materiales. En un medio dispersivo, la velocidad relevante no siempre coincide con [[c]], y la energia puede repartirse entre campo y materia. Entonces [[u_EM]], [[S_med]] y [[g_EM]] requieren definiciones mas cuidadosas.
\r
## Comparación operativa\r
\r
El modelo ideal es rapido, calculable y adecuado para entender la relacion entre energia, intensidad y presion. Es la eleccion correcta cuando el frente es uniforme y la superficie absorbe de forma simple. Su ventaja pedagogica es que separa tres preguntas: cuanta energia hay en el campo, cuanta cruza una superficie y cuanto empuje produce.\r
\r
El modelo extendido es necesario cuando importa el material, la direccion de incidencia o la reflexion. Es mas realista, pero tambien introduce parametros que pueden ocultar el nucleo fisico. Por eso conviene empezar con el modelo ideal y ampliar solo cuando una señal de fallo lo exija.\r
\r
`;export{e as default};
