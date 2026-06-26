const e=`# Errores frecuentes

## Errores conceptuales

### Error 1: Tratar el espectro como una lista de nombres

**Por qué parece correcto**

La enseñanza escolar presenta radio, visible y rayos X como etiquetas. Esa memorizacion oculta que todas las regiones se ordenan por [[f]], [[lambda]] y [[E_foton]].

**Por qué es incorrecto**

El espectro es una continuidad fisica. Las fronteras son practicas, no paredes exactas. Lo que cambia es la escala y la interaccion con materia.

**Señal de detección**

El alumno identifica una region por nombre pero no puede decidir si aumenta o disminuye la energia por foton.

**Corrección conceptual**

Ordena siempre con una magnitud. Si sube [[f]], sube [[E_foton]] y baja la longitud de onda en el vacio.

**Mini-ejemplo de contraste**

Una onda infrarroja y una visible cercana no estan separadas por una pared. Cambian de forma continua, aunque los detectores las traten de modo distinto.

## Errores de modelo

### Error 2: Usar el vacio cuando el medio importa

**Por qué parece correcto**

La relacion entre frecuencia y longitud de onda se memoriza con [[c]], y el alumno la aplica en cualquier material sin revisar el contexto.

**Por qué es incorrecto**

En medios dispersivos la longitud de onda y la velocidad de fase pueden cambiar. La frecuencia queda fijada por la fuente, pero la propagacion ya no es la del vacio.

**Señal de detección**

El enunciado menciona vidrio, agua, prisma, fibra optica o indice de refraccion, y la solucion ignora el medio.

**Corrección conceptual**

Usa el modelo de vacio para clasificar de forma inicial. Cambia a propagacion en medios si el problema pregunta por trayectoria, refraccion o dispersion.

**Mini-ejemplo de contraste**

La misma luz puede conservar su frecuencia al entrar en vidrio y cambiar su longitud de onda dentro del material. Clasificacion y propagacion no son la misma pregunta.

## Errores matemáticos

### Error 3: Invertir frecuencia y longitud de onda

**Por qué parece correcto**

Ambas magnitudes describen oscilaciones y aparecen juntas. La analogia ingenua "mas grande significa mas energetico" lleva a asociar longitud de onda mayor con energia mayor.

**Por qué es incorrecto**

En el vacio, [[lambda]] y [[f]] varian de forma inversa. La energia de un foton aumenta con [[f]], no con una longitud de onda mayor.

**Señal de detección**

La solucion coloca radio como region mas energetica que ultravioleta solo porque sus longitudes de onda son mayores.

**Corrección conceptual**

Para energia por foton, mira [[f]] o [[E_foton]]. Para escala espacial, mira [[lambda]]. No intercambies esas lecturas.

**Mini-ejemplo de contraste**

Una antena de radio usa longitudes de onda grandes, pero no por eso sus fotones son mas energeticos que los de luz ultravioleta.

## Errores de interpretación

### Error 4: Confundir energia por foton con intensidad

**Por qué parece correcto**

La palabra energia aparece en ambos casos. El alumno mezcla energia de un cuanto con energia total transportada por una fuente.

**Por qué es incorrecto**

[[E_foton]] mide energia individual. La intensidad total depende de cuantos fotones llegan por segundo y de como se reparte la radiacion.

**Señal de detección**

El alumno afirma que una fuente ultravioleta debil entrega mas potencia total que una fuente infrarroja intensa solo por tener mayor energia por foton.

**Corrección conceptual**

Separa interaccion individual y potencia total. El espectro informa sobre energia por foton; la intensidad requiere otro dato.

**Mini-ejemplo de contraste**

Un puntero visible puede ser menos potente que un calefactor infrarrojo, aunque sus fotones individuales tengan energia diferente. La potencia total no sale de [[E_foton]] sola.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio, responde tres preguntas: que region predice [[f]], que escala espacial predice [[lambda]], y que interaccion individual sugiere [[E_foton]]. Si una respuesta contradice otra, revisa la conversion.

La regla corta es: frecuencia alta significa foton mas energetico; longitud de onda grande significa frecuencia menor en el vacio; intensidad total no se deduce de un solo foton.
`;export{e as default};
