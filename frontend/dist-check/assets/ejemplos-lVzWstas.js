const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una guia didactica de dinamica compara cinco escenas tipicas donde aparece exigencia radial: objeto atado a cuerda, curva plana, curva peraltada ideal, cima de loop y satelite en orbita circular. El objetivo es calcular la demanda radial comun y verificar que cambia la fuerza real dominante segun el contexto fisico. Se conocen [[m]], [[r]], [[v]], [[mu]], [[g]], [[th]], [[G]] y [[M]] para diferentes subcasos del mismo ejercicio.\r
\r
El profesor pide una respuesta integrada: no se admite resolver cada escena como receta aislada. Se debe mostrar continuidad entre las formulas del leaf y justificar por que [[Frad]] y [[Fc]] no son fuerzas adicionales, sino lectura de la resultante radial de fuerzas reales como [[Tn]], [[Nn]] o [[fs]].\r
\r
## Datos\r
\r
- Subcaso A (cuerda horizontal): [[m]] = 2.0 kg, [[r]] = 1.2 m, [[v]] = 3.0 m/s.\r
- Subcaso B (curva plana): [[r]] = 60 m, [[mu]] = 0.45, [[g]] = 9.8 m/s^2.\r
- Subcaso C (curva peraltada ideal): [[r]] = 90 m, [[th]] = 0.20 rad, [[g]] = 9.8 m/s^2.\r
- Subcaso D (loop en la cima): [[r]] = 12 m, [[g]] = 9.8 m/s^2.\r
- Subcaso E (orbita circular): [[M]] = 5.97e24 kg, [[G]] = 6.674e-11, [[r]] = 6.8e6 m.\r
\r
Se exige ademas un chequeo dimensional y una interpretacion fisica final donde se expliquen semejanzas y diferencias causales entre los cinco escenarios.\r
\r
## Definición del sistema\r
\r
En todos los subcasos se define eje radial positivo hacia el centro de curvatura. En cada escena, la trayectoria es aproximadamente circular y se ignoran perturbaciones secundarias para extraer el mecanismo principal. La aceleracion [[ac]] representa la curvatura de la velocidad, mientras [[Frad]] representa la suma radial de fuerzas reales.\r
\r
Para cuerda horizontal, la fuerza radial proviene de [[Tn]]. En curva plana, proviene de [[fs]] hasta el limite de adherencia dado por [[mu]]. En curva peraltada ideal, la geometria definida por [[th]] permite que la reaccion normal aporte componente radial sin exigir friccion principal. En loop, la condicion de contacto involucra [[Nn]] y gravedad [[g]]. En orbita, la interaccion gravitatoria gobernada por [[G]] y [[M]] cumple el papel radial.\r
\r
## Modelo físico\r
\r
Se usan las seis relaciones nucleares del leaf:\r
\r
{{f:base_radial}}\r
\r
{{f:cuerda_tension}}\r
\r
{{f:curva_plana_velocidad_max}}\r
\r
{{f:peralte_ideal}}\r
\r
{{f:loop_contacto_minimo}}\r
\r
{{f:orbita_circular}}\r
\r
El modelo unifica las escenas: la exigencia de curvatura siempre se expresa radialmente, pero el agente fisico que la sostiene cambia. Esa es la idea central de "ejemplos tipicos": mismo esqueleto dinamico, distintas fuentes de fuerza real.\r
\r
## Justificación del modelo\r
\r
El modelo es pertinente porque cada subcaso representa un patron canonico de curso introductorio y de uso tecnico. La cuerda horizontal captura un sistema con agente radial unico. La curva plana muestra limite de adherencia. El peralte ideal muestra redistribucion geometrica de carga radial. El loop identifica condicion de contacto minimo. La orbita demuestra el mismo principio en escala astronomica.\r
\r
Esta seleccion no es arbitraria: cubre cinco dominios donde estudiantes suelen mezclar conceptos. Al resolverlos en una cadena comun, se evita la fragmentacion y se fortalece el criterio de transferencia entre contextos.\r
\r
## Resolución simbólica\r
\r
1. En todos los casos se parte de la estructura radial basica para relacionar [[Frad]], [[m]], [[v]] y [[r]].\r
2. Para cuerda horizontal se identifica directamente que [[Tn]] suministra la resultante radial.\r
3. En curva plana se despeja la rapidez limite usando [[mu]], [[g]] y [[r]], interpretando que [[fs]] no puede exceder su maximo estatico.\r
4. En curva peraltada ideal se obtiene la rapidez de diseno a partir de [[th]], [[g]] y [[r]] sin depender del rozamiento principal.\r
5. En loop se calcula la rapidez minima en la cima para conservar contacto (condicion limite [[Nn]] igual a cero).\r
6. En orbita circular se relacionan [[G]], [[M]], [[r]] y [[v]] para velocidad orbital estable.\r
\r
Al final, todos los subcasos se comparan en una misma tabla conceptual: demanda radial, fuente radial y condicion de validez.\r
\r
## Sustitución numérica\r
\r
En el subcaso de cuerda, la tension [[Tn]] requerida queda del orden de decenas de newton, coherente con masas pequenas y radios cortos. En curva plana, la rapidez maxima obtenida queda en rango de carretera secundaria y muestra sensibilidad clara a cambios de [[mu]]. Una lluvia que reduzca adherencia disminuye margen de forma inmediata.\r
\r
En curva peraltada ideal, la rapidez de diseno resultante para [[th]] moderado es mayor que en curva plana equivalente, evidenciando el efecto geometrico. En loop, la velocidad minima de contacto muestra que no basta "dar una vuelta": hay un umbral fisico preciso para no perder apoyo en la cima. En orbita, la velocidad calculada cae en rango de kilometros por segundo, consistente con ordenes de magnitud conocidos para satelites bajos.\r
\r
La comparacion numerica confirma la unidad conceptual: cambia la escala, no el principio radial.\r
\r
## Validación dimensional\r
\r
Todas las expresiones usadas mantienen consistencia de unidades:\r
\r
- La base radial produce unidades de fuerza a partir de masa, velocidad y radio.\r
- La expresion de curva plana produce velocidad al combinar [[mu]] adimensional con [[g]] y [[r]].\r
- La condicion de peralte mantiene razon adimensional en tangente de [[th]].\r
- El loop entrega velocidad con dimension correcta de raiz de aceleracion por longitud.\r
- La formula orbital combina [[G]] y [[M]] para recuperar velocidad.\r
\r
Este control evita errores frecuentes: confundir radio con diametro, tratar [[mu]] como magnitud dimensional o mezclar unidades de velocidad sin conversion.\r
\r
## Interpretación física\r
\r
El resultado didactico clave es que la "fuerza centripeta" no aparece como entidad extra. En cada caso, una fuerza real concreta o su combinacion radial satisface la exigencia de curvatura: [[Tn]] en cuerda, [[fs]] en curva plana, componente de [[Nn]] en peralte, peso y normal en loop, gravedad en orbita.\r
\r
Tambien se observa que aumentar [[v]] incrementa fuertemente la demanda radial y reduce margen de seguridad cuando la fuente radial tiene limite. Por eso las estrategias de control cambian por contexto: en carretera se interviene adherencia y geometria; en loop se asegura umbral de velocidad; en orbita se diseña radio-altitud y energia de insercion.\r
\r
La lectura final es causal y transferible: mismo formalismo radial, distintos mecanismos fisicos segun la escena.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un centro de entrenamiento para ingenieria mecanica y aeroespacial usa un modulo integrado de practicas. Los alumnos pasan por cinco estaciones: plataforma circular con cuerda, maqueta de curva plana, pista peraltada de prueba, aro vertical instrumentado y simulador orbital. El objetivo curricular es eliminar la idea de que cada problema de giro es "otra formula distinta".\r
\r
## Estimación física\r
\r
En cada estacion se mide [[v]] y [[r]], se estima la demanda radial y se identifica la fuente de fuerza responsable. La instrumentacion confirma patrones comunes: donde la fuente radial tiene limite operativo, el margen se vuelve sensible a variaciones de velocidad o de contacto. En la curva plana, pequeñas variaciones de [[mu]] producen cambios visibles en velocidad segura. En la estacion peraltada, el ajuste de [[th]] desplaza parte de la carga radial desde friccion hacia normal.\r
\r
En el loop, la zona critica es la cima: por debajo del umbral calculado desaparece contacto y el comportamiento deja de corresponder al modelo simple. En el simulador orbital, el cambio de [[r]] modifica la velocidad de equilibrio prevista por la ley gravitatoria y se valida con trayectorias numéricas.\r
\r
## Interpretación\r
\r
Este laboratorio muestra por que los ejemplos tipicos son pedagogicamente potentes: no son ejercicios aislados, sino una familia de casos donde la misma estructura radial se expresa con distintos agentes fisicos. El estudiante que integra estas estaciones deja de memorizar plantillas y empieza a razonar por mecanismo causal.\r
\r
En practica profesional, esa habilidad mejora decisiones de diseno y de seguridad: permite escoger que variable conviene intervenir en cada contexto (geometria, adherencia, velocidad o condicion de contacto) con fundamento fisico y no solo por costumbre.\r
`;export{a as default};
