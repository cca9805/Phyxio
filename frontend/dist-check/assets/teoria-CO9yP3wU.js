const e=`# Leyes de kepler

## Contexto conceptual

Las leyes de Kepler condensan una idea muy potente: una orbita no se entiende solo como una curva, sino como una relacion entre geometria, tiempo y fuerza central. Una parte dice donde esta el cuerpo central dentro de la elipse; otra explica como cambia el ritmo de recorrido; la ultima conecta el tamano global con el periodo. En este leaf, las magnitudes orbitales forman una lectura completa del movimiento.

Historicamente, Kepler obtuvo estas leyes a partir de datos astronomicos, antes de que Newton explicara su causa dinamica. Didacticamente conviene estudiarlas despues de velocidad orbital porque aqui aparece una dificultad nueva: el movimiento puede ser periodico sin ser circular ni tener rapidez constante. Una elipse kepleriana conserva una estructura global, pero la posicion local cambia de modo no uniforme.

## 🟢 Nivel esencial

La geometria inicial afirma que los planetas y satelites ideales siguen elipses con la masa central en un foco. Esto corrige una intuicion frecuente: el Sol, la Tierra o el cuerpo central no estan en el centro geometrico de la elipse, sino desplazados. Por eso [[r]] no es constante cuando la orbita esta alargada.

El barrido de area introduce el reloj fisico de la orbita. El radio vector barre areas iguales en tiempos iguales, asi que el cuerpo se mueve mas deprisa cuando esta cerca del foco y mas despacio cuando esta lejos. Lo constante no es la rapidez lineal, sino la tasa de area barrida. Esta distincion evita confundir arco recorrido con area barrida.

La relacion periodo-tamano da la escala temporal global: orbitas con mayor [[a]] tardan mas en completarse. El crecimiento del periodo no es lineal; duplicar el semieje mayor no duplica el tiempo de vuelta. Para comparar dos orbitas alrededor de la misma masa central se usa una proporcion de escalas, no una suma de tiempos.

## 🔵 Nivel formal

La escala gravitatoria compacta del sistema se recoge en el parametro [[mu]], definido por la masa central [[M]] y la constante [[G]].

{{f:parametro_gravitatorio}}

La forma polar de la primera ley expresa la distancia focal [[r]] como funcion de [[a]], [[e]] y [[theta]]. Esta relacion permite leer pericentro, apocentro y variacion de distancia desde una sola ecuacion geometrica.

{{f:primera_ley_polar}}

La relacion entre [[a]], [[b]] y [[e]] completa la descripcion de la elipse. Si [[e]] aumenta, [[b]] disminuye respecto a [[a]], y el foco se desplaza mas respecto al centro geometrico.

{{f:relacion_semiejes}}

La segunda ley se escribe como constancia de la velocidad areal. La expresion no pretende calcular por si sola una posicion instantanea, sino fijar una condicion fisica de barrido.

{{f:velocidad_areal_constante}}

Newton permite interpretar esa constancia como consecuencia de la conservacion del momento angular [[L]] cuando la fuerza es central y la masa orbital [[m]] permanece constante.

{{f:relacion_momento_angular_conceptual}}

La tercera ley absoluta calcula el periodo [[T]] a partir de [[a]], [[G]] y [[M]]. Es la forma adecuada cuando se conoce la masa central.

{{f:tercera_ley_absoluta}}

La misma ley puede escribirse con [[mu]], lo que resulta comun en astrodinamica porque [[mu]] suele medirse con mas precision operativa que [[G]] y [[M]] por separado.

{{f:tercera_ley_mu}}

Cuando dos cuerpos orbitan la misma masa central, la forma comparativa elimina [[G]], [[M]] y [[mu]]. Entonces basta con comparar los semiejes mayores para obtener [[T2]] desde la orbita de referencia.

{{f:tercera_ley_comparativa}}

## 🔴 Nivel estructural

El dominio de validez es tan importante como la ecuacion. Las leyes se aplican de forma limpia a un problema de dos cuerpos, con masa central dominante, sin rozamiento atmosferico, sin empuje continuo y sin perturbaciones fuertes de otros cuerpos. En satelites bajos, por ejemplo, el arrastre puede hacer que [[a]] cambie lentamente; entonces la tercera ley sigue siendo una buena fotografia instantanea, pero no una descripcion completa a largo plazo.

La primera ley exige interpretar bien [[e]]. Si [[e]] es cero, la elipse se reduce a una circunferencia y [[r]] coincide con [[a]]. Si [[e]] se acerca a uno, la elipse se alarga mucho y el contraste entre pericentro y apocentro se vuelve grande. Si [[e]] alcanza o supera uno, ya no se trata de una elipse ligada y este leaf deja paso a trayectorias de escape o encuentro.

La tercera ley no dice que todos los planetas con el mismo periodo tengan la misma orbita visual. Dos orbitas pueden compartir [[a]] y [[T]] pero tener distinta [[e]], distinto [[b]] y distinta distribucion de rapidez. Por eso Kepler separa forma, barrido temporal y escala de periodo: cada ley responde una parte distinta de la misma orbita.

## Interpretación física profunda

Las leyes de Kepler son una gramatica para leer orbitas. La primera ley traduce la forma en distancia al foco; la segunda traduce la conservacion dinamica en ritmo temporal; la tercera traduce el tamano global en periodo. Cuando se combinan, permiten pasar de una observacion astronomica a un modelo orbital con significado fisico.

La clave conceptual es que [[a]] y [[e]] no cumplen el mismo papel. [[a]] domina la escala temporal mediante [[T]], mientras [[e]] modifica como se distribuye la distancia y la rapidez a lo largo de la trayectoria. Por eso una orbita muy excentrica no tiene necesariamente un periodo mayor que otra menos excentrica si ambas tienen el mismo semieje mayor.

La segunda ley es especialmente didactica porque rompe la idea de movimiento uniforme. El cuerpo no reparte tiempo por longitud de arco, sino por area barrida desde el foco. Cerca del foco recorre mas arco en el mismo tiempo; lejos del foco recorre menos. La constancia de [[dA_dt]] es una lectura geometrica de una conservacion dinamica.

## Orden de magnitud

En orbitas terrestres bajas, [[a]] es del orden de millones de metros y [[T]] del orden de miles de segundos. Para la Tierra alrededor del Sol, [[a]] pasa a ser del orden de cientos de miles de millones de metros y [[T]] del orden de un ano. Este salto muestra por que la tercera ley es sensible al cubo de la escala espacial.

El parametro [[mu]] terrestre es del orden de diez elevado a catorce en unidades SI, mientras que el solar es muchisimo mayor. Por eso una misma distancia orbital no tendria el mismo periodo alrededor de la Tierra que alrededor del Sol. La masa central cambia el reloj de la orbita aunque la geometria local parezca similar.

## Método de resolución personalizado

Primero identifica si el problema pide forma, ritmo local o periodo global. Si pide distancia a un foco en una elipse, usa [[a]], [[e]] y [[theta]]. Si pide rapidez cualitativa en distintas zonas de la orbita, piensa en area barrida y en [[dA_dt]]. Si pide periodo o comparacion entre orbitas, trabaja con [[a]] y [[T]].

Despues revisa si las orbitas comparten masa central. Si la comparten, la forma comparativa evita datos innecesarios. Si no la comparten, necesitas [[G]] y [[M]], o directamente [[mu]]. Finalmente verifica unidades: [[a]], [[a1]] y [[a2]] deben estar en la misma unidad, y la forma absoluta debe usar SI si se quiere un periodo en segundos.

## Casos especiales y ejemplo extendido

La orbita circular es el caso [[e]] igual a cero. En ella [[b]] coincide con [[a]], [[r]] no cambia y la segunda ley se vuelve compatible con rapidez constante. Este caso es util para empezar, pero no debe ocultar que las leyes de Kepler nacen para explicar orbitas no circulares.

En una orbita eliptica con [[a]] fijo y [[e]] grande, el satelite pasa poco tiempo cerca del pericentro y mucho tiempo cerca del apocentro. La tercera ley conserva el mismo periodo global si [[a]] no cambia, pero la segunda ley redistribuye el movimiento dentro de ese periodo. Esa separacion entre escala global y ritmo local es el aprendizaje central del leaf.

## Preguntas reales del alumno

Una pregunta habitual es: si el planeta va mas rapido cerca del Sol, por que no se escapa. La respuesta es que la rapidez local no decide por si sola el periodo ni la ligadura; aqui solo estamos leyendo la geometria y el ritmo areal. El leaf de energia orbital completa esa decision con energia.

Otra duda frecuente es si una orbita mas alargada tarda siempre mas. No necesariamente. Si mantiene el mismo [[a]], el periodo ideal es el mismo aunque cambie [[e]]. Lo que cambia es el reparto temporal dentro de la orbita: la zona cercana al foco se atraviesa mas deprisa y la zona lejana mas despacio.

## Conexiones transversales y rutas de estudio

Este leaf conecta con velocidad orbital porque la rapidez circular es un caso limite mas simple. Tambien prepara energia orbital, donde el semieje mayor se interpreta energeticamente, y mareas y perturbaciones, donde las desviaciones respecto al modelo ideal dejan de ser despreciables.

En una ruta de estudio, primero conviene dominar [[a]], [[e]] y [[r]] como geometria; despues entender [[dA_dt]] como reloj areal; finalmente usar [[T]] para comparar escalas orbitales. Esa ruta evita mezclar formula, dibujo y criterio fisico antes de que cada pieza tenga significado.

## Síntesis final

Las leyes de Kepler permiten leer una orbita completa sin reducirla a una circunferencia. Al terminar este leaf debes distinguir forma eliptica, barrido areal y escala temporal, saber cuando usar la comparacion de periodos y reconocer los limites del modelo ideal de dos cuerpos. La competencia final no es memorizar tres frases, sino decidir que ley responde cada pregunta orbital.
`;export{e as default};
