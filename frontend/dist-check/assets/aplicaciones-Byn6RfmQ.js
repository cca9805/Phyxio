const e=`# Aplicaciones de Electromagneticas

## 1. Comunicaciones de radio

Variable dominante: [[lambda]].

Límite de validez: aproximacion de onda plana lejos de la antena y sin obstaculos dominantes.

Las comunicaciones de radio usan ondas electromagneticas cuya longitud de onda puede ser comparable con antenas, edificios o distancias urbanas. La magnitud [[lambda]] permite decidir si una antena puede acoplarse bien con una banda, si una onda rodea obstaculos o si una reflexion puede interferir con otra senal. La frecuencia [[f]] identifica el canal, pero la lectura espacial se vuelve practica cuando se traduce a longitud de onda mediante [[c]].

En una aplicacion real, una emisora no solo necesita emitir: debe hacer que el campo llegue con amplitud suficiente y con polarizacion adecuada. [[E0]] orienta la intensidad de campo que puede inducir una tension en la antena receptora. [[B0]] confirma que se trata de una onda electromagnetica completa, aunque el receptor suela aprovechar mas directamente el campo electrico.

## 2. Luz visible y vision

Variable dominante: [[f]].

Límite de validez: lectura de vacio o aire ideal; en medios dispersivos el color y la rapidez requieren otro modelo.

La luz visible es una banda estrecha del espectro electromagnetico. En ese contexto, [[f]] y [[lambda]] se relacionan con color, pero no con una diferencia de rapidez en el vacio. Un aumento de frecuencia mueve la percepcion hacia el extremo violeta y reduce la longitud de onda. Esta aplicacion es buena para corregir la idea de que cada color viaja a una rapidez distinta cuando se ignora el medio.

La amplitud [[E0]] se relaciona con el campo que interactua con cargas en la retina o en un sensor. Sin embargo, para brillo completo se requiere energia e intensidad, no solo amplitud. El leaf aporta la base: la luz es una onda de campos transversales acoplados, y su color depende de escala temporal y espacial.

## 3. Hornos microondas

Variable dominante: [[E0]].

Límite de validez: no calcula calentamiento sin absorcion, cavidad e intensidad.

En un horno microondas, la onda electromagnetica tiene una frecuencia escogida para interactuar eficazmente con dipolos electricos, especialmente moleculas polares como el agua. La amplitud electrica [[E0]] es relevante porque el campo electrico ejerce torques y modifica la energia de rotacion de esas moleculas. La aplicacion ya no se limita a propagacion en vacio, porque aparece materia absorbente y una cavidad con reflexiones.

El modelo del leaf sirve como punto de partida para identificar que hay campo electrico y magnetico oscilantes. Luego se necesita un modelo extendido de absorcion, cavidad e intensidad. La frontera entre modelos es importante: calcular [[lambda]] con [[f]] da escala de onda, pero no calcula directamente el calentamiento.

## 4. Fibra optica

Variable dominante: [[c]].

Límite de validez: [[c]] solo es referencia; la fibra exige velocidad efectiva del medio.

En fibra optica, la informacion viaja mediante ondas electromagneticas guiadas en un material transparente. La rapidez ya no es exactamente [[c]] porque el medio tiene indice de refraccion. Aun asi, la estructura conceptual se conserva: hay campos transversales, frecuencia, longitud de onda y energia transportada. El valor de [[c]] funciona como referencia para entender por que la rapidez real es menor.

Esta aplicacion muestra una transicion de modelo. En el vacio se usa [[c]]; en la fibra se usa una velocidad efectiva dependiente del material y a veces de [[f]]. Si el alumno mantiene la misma rapidez para todos los casos, pierde la diferencia entre el modelo ideal y el modelo material.

## 5. Astronomia y espectro

Variable dominante: [[f]].

Límite de validez: clasifica banda, pero no identifica por si sola el mecanismo de emision.

La astronomia observa ondas electromagneticas de muchas bandas: radio, infrarrojo, visible, ultravioleta, rayos X y gamma. La frecuencia [[f]] permite clasificar procesos fisicos: gas frio, polvo, estrellas calientes, regiones ionizadas o fenomenos de alta energia. [[lambda]] aporta la escala instrumental, porque telescopios distintos se disenan para longitudes de onda distintas.

En esta aplicacion, la onda casi siempre viaja por vacio durante grandes distancias, de modo que [[c]] es una referencia robusta. La amplitud recibida, relacionada con [[E0]] y [[B0]], puede ser extremadamente pequena, pero sigue transportando informacion sobre la fuente. La lectura fisica no consiste en mirar solo un numero, sino en vincular banda, intensidad y mecanismo de emision.

## 6. Seguridad y exposicion electromagnetica

Variable dominante: [[E0]].

Límite de validez: no sustituye umbrales normativos ni modelos de absorcion biologica.

En evaluaciones de exposicion, el campo electrico [[E0]] se usa como indicador operativo porque puede medirse y compararse con umbrales. Sin embargo, el leaf no debe confundirse con una norma de seguridad. Para estimar potencia absorbida se necesitan intensidad, frecuencia, propiedades del tejido y tiempo de exposicion. La onda electromagnetica es el punto de partida, no el modelo completo de riesgo.

La utilidad didactica es clara: si alguien afirma que toda onda electromagnetica es peligrosa por viajar a [[c]], mezcla rapidez con interaccion. Una onda de radio debil, luz visible intensa y radiacion ionizante pertenecen a la misma familia, pero interactuan de maneras muy distintas por sus valores de [[f]], [[lambda]] y amplitud.

## 7. Control remoto y sensores

Variable dominante: [[lambda]].

Límite de validez: la aproximacion plana local no reemplaza antenas, reflexiones ni ruido.

Mandos, radares simples y sensores usan ondas electromagneticas para enviar senales o detectar objetos. [[lambda]] condiciona resolucion, difraccion y tamano de antena. [[f]] condiciona la banda regulada y la tecnologia disponible. [[E0]] y [[B0]] condicionan la senal recibida, aunque el circuito normalmente traduzca esos campos a voltajes.

Aqui el modelo plano puede ser una aproximacion local. Para diseno real hay que incluir antenas, reflexiones y ruido. Aun asi, entender la onda como campos transversales evita creer que la senal es un fluido material que sale del emisor. Lo que se propaga es informacion codificada en una perturbacion electromagnetica.
`;export{e as default};
