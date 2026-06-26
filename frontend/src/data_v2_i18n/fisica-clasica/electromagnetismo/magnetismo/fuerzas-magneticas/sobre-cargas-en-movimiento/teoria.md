## Contexto conceptual

Una carga electrica en reposo no siente una fuerza magnetica por el mero hecho de estar dentro de un campo. El magnetismo aparece, para una particula puntual, cuando hay **movimiento relativo** entre la carga y el campo. Por eso este leaf conecta el concepto de [[campo_magnetico]] con la trayectoria real de una particula cargada.

La idea sirve para entender camaras de niebla, espectrometros de masas, aceleradores y confinamiento magnetico de plasmas. En todos esos casos, el campo no solo "esta ahi": organiza el movimiento mediante una fuerza perpendicular.

> [!NOTE]
> El tema no sustituye a la fuerza electrica. Aqui se estudia la parte magnetica que aparece cuando una [[carga_electrica]] se mueve con [[rapidez]] dentro de [[campo_magnetico]].

## 🟢 Nivel esencial

La fuerza magnetica sobre una carga movil es una **fuerza de desviacion**. Si una particula cargada entra en una zona con campo magnetico, el campo puede doblar su trayectoria sin empujarla hacia delante como lo haria una fuerza tangencial. La magnitud que resume esa interaccion es [[fuerza_magnetica]].

La desviacion depende de tres ideas sencillas: cuanta carga tiene la particula, con que [[rapidez]] atraviesa el campo y que intenso es el campo. Tambien importa la **orientacion**. Si la particula avanza paralela a las lineas de campo, el efecto magnetico desaparece; si avanza perpendicularmente, el efecto es maximo.

> [!WARNING]
> No imagines [[campo_magnetico]] como un viento que arrastra la carga. El campo fija una direccion geometrica y la fuerza aparece perpendicular al movimiento y al campo.

## 🔵 Nivel formal

El modelo formal usa el modulo de la fuerza magnetica para separar intensidad y direccion. La direccion se obtiene con la regla de la mano derecha y con el signo de [[carga_electrica]]; el calculo del modulo usa [[carga_electrica]], [[rapidez]], [[campo_magnetico]] y el factor angular [[s_theta]]. La relacion declarativa es:

{{f:fuerza_magnetica_lorentz}}

Esta expresion muestra una dependencia lineal: duplicar [[rapidez]] duplica [[fuerza_magnetica]] si [[carga_electrica]], [[campo_magnetico]] y [[s_theta]] no cambian. El factor [[s_theta]] recoge la parte perpendicular del movimiento; por eso una misma particula puede sentir fuerza maxima, parcial o nula dentro del mismo campo.

Cuando la fuerza es perpendicular a la velocidad, no aumenta la [[rapidez]] de forma ideal, sino que produce aceleracion centripeta. La traduccion dinamica entre fuerza e inercia se escribe:

{{f:aceleracion_centripeta_magnetica}}

Si ademas el campo es uniforme y la entrada es perpendicular, la trayectoria es circular. El radio se obtiene equilibrando la desviacion magnetica con la inercia de la particula:

{{f:radio_trayectoria_circular}}

Este tercer resultado explica por que [[radio_de_trayectoria]] aumenta con [[masa_de_la_particula]] y [[rapidez]], pero disminuye con [[carga_electrica]] y [[campo_magnetico]]. La formula se usa con modulos; el signo de la carga no hace negativo el radio, sino que invierte el sentido de giro.

## 🔴 Nivel estructural

La estructura profunda del tema es geometrica. La fuerza magnetica no se decide solo por "campo grande" o "carga grande", sino por la relacion entre tres direcciones: la del movimiento, la del campo y la de la fuerza. Esa arquitectura explica que [[fuerza_magnetica]] sea maxima en movimiento perpendicular y nula en movimiento paralelo.

El segundo nivel estructural es dinamico. Si [[fuerza_magnetica]] siempre queda perpendicular a [[rapidez]], no realiza trabajo mecanico ideal sobre una particula aislada. La energia cinetica puede mantenerse aproximadamente constante mientras cambia la direccion. Por eso [[a_c]] no debe leerse como aceleracion tangencial, sino como **cambio de direccion por unidad de tiempo**.

El radio [[radio_de_trayectoria]] condensa la competencia entre inercia y magnetismo. Una particula mas masiva conserva mejor su direccion; una particula con mayor carga se curva mas. Una particula mas rapida tiene mas inercia transversal y describe un radio mayor, aunque la fuerza tambien aumente. Esta lectura evita el error de pensar que [[rapidez]] mayor implica siempre curva mas cerrada.

El modelo falla o necesita correcciones cuando el campo cambia mucho dentro de la orbita, cuando la [[rapidez]] se acerca a escalas relativistas, cuando hay colisiones frecuentes o cuando un campo electrico externo modifica la energia. En esos casos, la trayectoria deja de ser el circulo simple descrito por [[radio_de_trayectoria]] y hay que usar dinamica vectorial completa.

Tambien importa distinguir escala local y escala global. Una relacion local de fuerza puede ser correcta aunque la trayectoria completa no sea circular si el campo cambia de zona a zona.

> [!TIP]
> Para razonar bien, separa siempre tres capas: modulo de [[fuerza_magnetica]], sentido vectorial decidido por [[carga_electrica]], y forma de trayectoria resumida por [[radio_de_trayectoria]].

## Interpretación física profunda

La fuerza magnetica es una fuerza que revela una **asimetria direccional**. No basta saber cuanto vale [[campo_magnetico]]; hay que saber como se mueve la carga respecto al campo. Esa dependencia angular convierte al magnetismo en una herramienta de seleccion: particulas con distintas relaciones entre [[carga_electrica]] y [[masa_de_la_particula]] no siguen la misma curva.

El signo de [[carga_electrica]] no altera la intensidad calculada si se trabaja con modulos, pero cambia una consecuencia observacional crucial: el lado hacia el que se dobla la trayectoria. Dos particulas con igual [[masa_de_la_particula]], igual [[rapidez]] e igual modulo de carga pueden curvarse con el mismo [[radio_de_trayectoria]] y en sentidos opuestos.

## Orden de magnitud

Para un proton con [[rapidez]] del orden de un millon de metros por segundo en un campo de decimas de tesla, [[fuerza_magnetica]] puede quedar alrededor de diez a la menos catorce newtons. Parece pequeno, pero sobre una [[masa_de_la_particula]] microscopica produce [[a_c]] enorme. En cambio, para campos ambientales de microteslas, la fuerza cae varios ordenes de magnitud. Un resultado macroscopico en newtons para una sola particula elemental seria sospechoso salvo que la [[rapidez]] o el campo fueran extraordinarios.

## Método de resolución personalizado

Primero identifica si la particula esta cargada y en movimiento. Despues decide si se pide **modulo**, **sentido** o **trayectoria**. Para el modulo usa [[carga_electrica]], [[rapidez]], [[campo_magnetico]] y [[s_theta]]. Para el sentido, aplica la regla de la mano derecha y corrige con el signo de [[carga_electrica]]. Para trayectoria circular, comprueba perpendicularidad y usa [[masa_de_la_particula]] para estimar [[radio_de_trayectoria]].

> [!WARNING]
> No introduzcas el signo de [[carga_electrica]] para obtener un radio negativo. El signo describe sentido de giro, no longitud negativa.

## Casos especiales y ejemplo extendido

Si la carga entra paralela al campo, [[s_theta]] se anula y no hay fuerza magnetica aunque [[campo_magnetico]] sea grande. Si entra perpendicularmente, [[s_theta]] es maximo y la trayectoria ideal se curva en un circulo. Entre ambos extremos aparece una trayectoria helicoidal: la componente paralela avanza y la perpendicular gira.

En un selector magnetico de particulas, dos iones con igual [[rapidez]] y carga distinta no se separan por "sentir magnetismo" de forma abstracta, sino porque su [[radio_de_trayectoria]] cambia. Esa diferencia permite inferir masa o relacion carga masa midiendo la curvatura.

## Preguntas reales del alumno

- **¿Por que el campo magnetico no cambia la [[rapidez]]?** Porque en el caso perpendicular ideal [[fuerza_magnetica]] apunta de lado respecto a [[rapidez]], de modo que cambia direccion mas que energia cinetica.
- **¿Una carga negativa tiene fuerza negativa?** No en el modulo [[fuerza_magnetica]]. Lo que se invierte es el sentido vectorial de la desviacion.
- **¿Por que entra el angulo si el campo es el mismo?** Porque solo la parte del movimiento perpendicular a [[campo_magnetico]] produce desviacion magnetica.
- **¿Una particula mas rapida se curva mas?** No necesariamente. Aunque [[fuerza_magnetica]] aumenta, tambien aumenta la inercia asociada al movimiento y el [[radio_de_trayectoria]] circular crece a campo fijo.

## Conexiones transversales y rutas de estudio

Este leaf se apoya en [campo magnetico](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico) y prepara el estudio de fuerzas sobre conductores. Tambien conecta con movimiento circular de mecanica, porque [[a_c]] y [[radio_de_trayectoria]] traducen una interaccion electromagnetica a lenguaje cinetico.

La ruta natural es pasar de particulas individuales a corrientes electricas. Una corriente es un conjunto de muchas cargas moviles, y por eso la fuerza magnetica sobre un conductor se entiende como suma colectiva de estas desviaciones.

## Síntesis final

La fuerza magnetica sobre cargas en movimiento une carga, [[rapidez]], campo y geometria. Su rasgo esencial es perpendicular: curva trayectorias, selecciona particulas y convierte el magnetismo en una herramienta para controlar movimiento sin empujar necesariamente en la direccion de avance.