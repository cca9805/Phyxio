const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Se estudia una curva vial plana de radio [[r]] por la que circula un automovil de masa [[m]]. El laboratorio de seguridad desea saber si, para una rapidez [[v]] dada, la adherencia de los neumaticos alcanza para suministrar la fuerza radial requerida sin derrape. Tambien quiere comparar ese resultado con una alternativa peraltada que permite redistribuir la carga radial entre la normal [[Nn]] y la friccion estatica [[fs]].\r
\r
La pregunta fisica central no es solo numerica. Se debe decidir que mecanismo sostiene la resultante radial [[Frad]] en cada configuracion y como cambia la exigencia cuando sube [[v]]. El problema busca que el estudiante no trate la curva plana y la curva peraltada como casos aislados, sino como dos estrategias de diseno para satisfacer la misma condicion dinamica.\r
\r
## Datos\r
\r
- [[m]] = 1400 kg\r
- [[r]] = 85 m\r
- [[v]] = 18 m/s\r
- [[g]] = 9.8 m/s^2\r
- [[mu]] = 0.35\r
\r
Adicionalmente, se plantea una variante: la via se redisenia con peralte para la misma rapidez objetivo [[v]], y se pide estimar el angulo [[th]] ideal y comentar como se modifica el papel de [[fs]] en regimen nominal.\r
\r
## Definición del sistema\r
\r
Se modela el vehiculo como particula que describe una trayectoria circular de radio constante [[r]]. En la curva plana, la resultante radial [[Frad]] la aporta principalmente [[fs]], mientras que en la curva peraltada la geometria de la via permite que la componente radial de [[Nn]] participe de forma directa. En ambos casos, la aceleracion centripeta [[ac]] se interpreta como la exigencia kinematica asociada a curvar la velocidad.\r
\r
El eje radial se toma positivo hacia el centro de giro. El eje vertical se usa para balancear componentes de peso y normal. Esta convencion evita confundir causa y efecto: primero se identifican fuerzas reales, luego se evalua su proyeccion radial y finalmente se contrasta con la demanda de movimiento circular.\r
\r
## Modelo físico\r
\r
Las relaciones nucleares del leaf para este ejercicio son:\r
\r
{{f:radial_base}}\r
\r
{{f:adherencia_maxima}}\r
\r
{{f:curva_plana_vmax}}\r
\r
{{f:peralte_ideal}}\r
\r
Estas ecuaciones se leen como un sistema coherente. La primera fija la demanda radial total. La segunda limita la capacidad de contacto por friccion. La tercera resume el caso plano en un criterio de rapidez maxima. La cuarta expresa la inclinacion que reduce dependencia de friccion para una rapidez de diseno.\r
\r
## Justificación del modelo\r
\r
El modelo es adecuado porque se trata de una curva de radio casi constante, velocidades no relativistas y contacto neumatico-pavimento dentro de regimen de adherencia estatica. No se observan baches severos ni frenado brusco dominante durante el tramo evaluado, por lo que la aproximacion de movimiento circular uniforme es una primera descripcion razonable.\r
\r
Tambien se justifica separar dos escenarios: plano y peraltado. En campo real ambos aparecen como decisiones de infraestructura con costos y beneficios diferentes. El modelo permite comparar cual variable controla el riesgo: en curva plana domina el limite de [[mu]], mientras que en curva peraltada aparece un diseno geometrico via [[th]] que reduce exigencia a [[fs]] en velocidad objetivo.\r
\r
## Resolución simbólica\r
\r
Para la curva plana se calcula primero la demanda radial por unidad de masa con la expresion de movimiento circular. A partir de ella se obtiene la fuerza radial total [[Frad]] y la aceleracion [[ac]]. Luego se contrasta esa demanda con la capacidad maxima de friccion a traves de [[fs]] y de la expresion compacta de rapidez maxima.\r
\r
Para el caso peraltado se mantiene la misma rapidez [[v]] y se despeja el angulo [[th]] que hace posible la curva ideal sin requerir friccion neta en el sentido principal de diseno. Ese calculo muestra que el peralte no elimina la dinamica radial; simplemente cambia como se reparte entre componentes de contacto.\r
\r
En simbolos, el flujo es: calcular demanda radial, verificar limite plano y finalmente obtener peralte de diseno para la misma [[v]] y [[r]].\r
\r
## Sustitución numérica\r
\r
Con [[m]] = 1400 kg, [[v]] = 18 m/s y [[r]] = 85 m, la demanda radial resulta del orden de varios kilonewton. La aceleracion [[ac]] queda alrededor de 3.8 m/s^2, valor coherente con una maniobra urbana-rapida pero no extrema. Al comparar con la capacidad de adherencia para [[mu]] = 0.35, el margen existe pero no es amplio; una disminucion moderada de [[mu]] por lluvia podria acercar el sistema al derrape.\r
\r
La rapidez maxima plana calculada con [[mu]], [[g]] y [[r]] queda proxima al valor de operacion, lo que confirma sensibilidad ante variaciones de pavimento. Para el rediseno peraltado, el angulo [[th]] ideal se ubica en un rango razonable para infraestructura vial, permitiendo que parte sustancial de [[Frad]] provenga de la componente de [[Nn]] y no exclusivamente de [[fs]].\r
\r
En terminos de ingenieria, el resultado no solo entrega un numero. Entrega criterio: mantener superficie y neumaticos en buen estado es critico en curva plana; introducir peralte puede ampliar robustez operativa para la misma rapidez objetivo.\r
\r
## Validación dimensional\r
\r
La ecuacion radial entrega unidades de fuerza cuando se evalua [[m]] por [[v]] al cuadrado dividido por [[r]]. La expresion de rapidez maxima devuelve unidades de velocidad porque [[mu]] es adimensional y el producto [[g]] por [[r]] tiene unidades cuadraticas de velocidad. La ecuacion de peralte usa una tangente adimensional para relacionar [[th]] con una razon de aceleraciones.\r
\r
Este control dimensional evita errores tipicos: usar grados como si fueran razon trigonometrica, confundir radio con diametro o tratar [[mu]] como si tuviera unidades. Si alguna unidad no cierra, el problema debe revisarse antes de interpretar seguridad de la maniobra.\r
\r
## Interpretación física\r
\r
La lectura principal es que el mismo requerimiento de curvatura puede satisfacerse por mecanismos distintos. En curva plana, la cadena causal dominante es adherencia lateral. En curva peraltada, parte de esa tarea pasa a la geometria de contacto via [[Nn]], reduciendo la dependencia exclusiva de [[fs]].\r
\r
Tambien se confirma la sensibilidad cuadratica con [[v]]: incrementos moderados de rapidez elevan mucho la demanda de [[Frad]] y [[ac]]. Por eso dos conductores que difieren poco en velocidad pueden experimentar niveles muy diferentes de margen de seguridad.\r
\r
Finalmente, el ejemplo conecta teoria y practica: las ecuaciones no son decorativas. Permiten decidir entre gestionar [[mu]] (mantenimiento y operacion) o redisenar [[th]] y [[r]] (infraestructura) para sostener un nivel de riesgo aceptable.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una concesion vial de zona montanosa se registran incidentes recurrentes en una curva de enlace entre autopista y rampa de salida. El equipo tecnico dispone de datos de velocidad media [[v]], radio efectivo [[r]] y condiciones de pavimento que alteran [[mu]] segun clima. La administracion duda entre dos intervenciones: aumentar control de velocidad o reconstruir la curva con peralte adicional.\r
\r
El analisis con magnitudes del leaf permite comparar alternativas en terminos de demanda radial [[Frad]], aceleracion [[ac]] y robustez frente a variacion de adherencia. Esta comparacion evita decisiones basadas solo en percepcion de conductores o en estadistica historica aislada.\r
\r
## Estimación física\r
\r
Primero se estima la demanda radial para el rango de [[v]] observado en horas punta. Luego se calcula la rapidez maxima segura bajo escenarios de [[mu]] seco y [[mu]] humedo. El contraste muestra que, en lluvia, la curva plana opera cerca del limite. Una reduccion pequena de [[mu]] empuja el sistema a requerir [[fs]] por encima del umbral disponible.\r
\r
Despues se evalua un peralte de diseno usando la expresion de [[th]] ideal para una rapidez objetivo realista. El resultado indica que un peralte moderado desplaza parte de la carga radial hacia la componente de [[Nn]], ampliando margen en condiciones humedas sin exigir reducciones extremas de velocidad.\r
\r
La estimacion incluye lectura operativa: aun con peralte, el sistema no queda libre de limites. Si [[v]] crece por encima del valor de proyecto, vuelve a aumentar la dependencia de [[fs]], por lo que control de velocidad y geometria deben coordinarse.\r
\r
## Interpretación\r
\r
Este caso real evidencia la utilidad del leaf para decisiones de infraestructura. En lenguaje causal: la seguridad en curva depende de como se satisface [[Frad]] bajo incertidumbre de [[mu]]. Si todo descansa en friccion, el sistema se vuelve fragil frente a lluvia y contaminantes. Si el diseno incorpora [[th]] y radio apropiado, la robustez aumenta.\r
\r
La conclusion tecnica no es elegir una sola palanca. Es combinar gestion de [[v]], mejora de textura superficial y peralte coherente con flujo real. Esa sintesis es transferible a otras vias: cuando se cuantifica [[ac]], [[Frad]], [[fs]] y [[Nn]], la decision deja de ser intuitiva y pasa a estar anclada en fisica verificable.\r
`;export{a as default};
