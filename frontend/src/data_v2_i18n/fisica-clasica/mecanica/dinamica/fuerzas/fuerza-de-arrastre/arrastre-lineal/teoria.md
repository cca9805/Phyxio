# Arrastre lineal

## Contexto conceptual

Este leaf estudia un modelo fisico concreto: como aparece y como se interpreta la fuerza resistiva cuando un cuerpo se mueve en un fluido y, en el rango de trabajo, esa resistencia crece en proporcion a la rapidez relativa. La pregunta central no es solo numerica; es de lectura mecanica. Queremos poder mirar una grafica de [[F_d]] frente a [[v]] y un diagrama de cuerpo libre, y reconocer cuando el comportamiento es lineal, que significa esa linealidad y que consecuencias tiene para el movimiento.

La magnitud protagonista es [[F_d]], pero no puede entenderse aislada. El parametro [[b]] resume la interaccion entre cuerpo y medio en el regimen lineal; [[v]] define la excitacion del mecanismo resistivo; [[m]] determina cuanta inercia hay que amortiguar; y [[tau]] condensa la escala temporal de respuesta del sistema. Esta red de magnitudes distingue este leaf de sus vecinos: aqui construimos una lectura operativa del arrastre lineal con dominio propio.

Una confusion muy frecuente es tratar este tema como una formula suelta. Ese enfoque falla porque borra el criterio de validez. El mismo cuerpo puede mostrar comportamientos distintos si cambia el fluido, la escala de rapidez o la forma efectiva. Por eso este leaf insiste en dos ideas a la vez: causalidad fisica y frontera del modelo. Causalidad, para entender por que crece [[F_d]] al aumentar [[v]]. Frontera, para saber cuando seguir usando esta descripcion y cuando migrar a otra.

## 🟢 Nivel esencial

En nivel esencial buscamos intuicion mecanica estable, sin sobrecargar algebra. Imagina tres escenas de baja a moderada rapidez:

1. Una esfera pequena cayendo en glicerina.
2. Una cuenta moviendose en aceite dentro de un tubo transparente.
3. Un objeto ligero desplazandose en aire casi quieto a velocidad modesta.

En las tres, si aumentas la rapidez relativa respecto al fluido, la resistencia aumenta de forma clara y ordenada. Esa lectura cualitativa es la base del modelo lineal: mas rapidez, mas resistencia, con una proporcion aproximadamente constante mientras no cambie el regimen.

La clave didactica es separar tres ideas que el alumno suele mezclar: la resistencia no impulsa, se opone; la rapidez debe leerse respecto al medio; y el parametro resistivo depende del escenario, no solo del objeto. Con estas aclaraciones desaparecen muchos errores antes de escribir ecuaciones.

Otra lectura esencial importante es temporal. Aunque todavia no se resuelva una ecuacion diferencial completa, conviene anticipar que no todos los sistemas ceden al fluido con la misma rapidez. Esta idea prepara el uso posterior de la escala temporal del modelo sin adelantar algebra innecesaria.

El nivel esencial debe cerrar con una pregunta simple: el comportamiento observado parece proporcional o claramente curvo? Si aparece curvatura sistematica, hay que revisar condiciones antes de aplicar el modelo lineal.

## 🔵 Nivel formal

Ahora pasamos a relaciones cuantitativas. El bloque formal introduce dos ecuaciones nucleares del leaf y su lectura operativa.

La ley constitutiva del arrastre lineal es:

{{f:arrastre_lineal_estandar}}

Esta expresion no es un truco algebraico. Expresa que el modulo de [[F_d]] escala linealmente con [[v]] cuando [[b]] se mantiene aproximadamente constante en el intervalo analizado. El parametro [[b]] tiene unidades de N s/m y funciona como pendiente fisica de la relacion fuerza-rapidez.

La escala temporal caracteristica se modela con:

{{f:tiempo_relajacion_lineal}}

Esta segunda relacion integra inercia y disipacion. Si [[m]] aumenta, [[tau]] aumenta; si [[b]] aumenta, [[tau]] disminuye. Por eso [[tau]] no es una fuerza ni un tiempo total de recorrido, sino un marcador de que tan rapido responde el sistema frente a la accion resistiva del fluido.

Con estas dos ecuaciones, el flujo formal recomendado es:

1. Definir sistema, direccion de movimiento y fluido de referencia.
2. Verificar que [[v]] sea rapidez relativa al medio.
3. Elegir si se busca [[F_d]], [[b]] o [[tau]].
4. Sustituir con unidades coherentes en SI.
5. Revisar coherencia dimensional y sentido fisico.

La revision dimensional no es decorativa. Si [[F_d]] no queda en N o si [[tau]] no queda en s, el problema no es "detalle de unidades": es ruptura del modelo. Tambien importa revisar dominio: en despejes para [[b]] o [[tau]], no se deben aceptar valores fisicamente imposibles como parametros negativos en un caso que supone disipacion ordinaria.

En lectura grafica, el modelo lineal ofrece una ventaja fuerte: la grafica [[F_d]]-[[v]] ideal es una recta que pasa por el origen. La pendiente representa [[b]]. Ese hecho permite calibrar rapidamente el sistema con datos experimentales y detectar desviaciones de regimen: si la curva deja de ser aproximadamente recta en el tramo estudiado, probablemente el modelo lineal deja de ser suficiente.

Otra utilidad formal es el analisis de sensibilidad. Cambios relativos pequenos en [[b]] o [[v]] producen cambios relativos comparables en [[F_d]]. Esta propiedad hace que el modelo lineal sea muy pedagogico en etapas iniciales: permite conectar intuicion, grafica y calculo sin saltos bruscos de complejidad.

## 🔴 Nivel estructural

El nivel estructural responde la pregunta mas importante de un modelo: cuando confiar y cuando cambiar.

El arrastre lineal es valioso porque simplifica y explica, pero no pretende describir todos los escenarios de flujo. Su dominio tipico aparece en situaciones donde la proporcionalidad entre [[F_d]] y [[v]] es buena aproximacion en la ventana de operacion. Fuera de esa ventana, aparecen terminos que ya no pueden ignorarse.

Criterios estructurales de validez en practica:

1. La pendiente experimental de la relacion [[F_d]]-[[v]] se mantiene aproximadamente constante en el rango de interes.
2. La geometria efectiva del cuerpo no cambia de manera relevante durante la medicion.
3. El medio no cambia de forma abrupta (temperatura, composicion o condiciones que alteren apreciablemente [[b]]).
4. El error entre modelo y medida permanece en el margen acordado para la aplicacion.

Cuando alguno de estos puntos falla, la estrategia no es "ajustar a mano" para salvar la ecuacion. La estrategia correcta es declarar transicion de modelo. En este tema, una transicion comun es pasar a descripciones no lineales cuando la grafica deja de ser recta y la sensibilidad de [[F_d]] a [[v]] aumenta de forma sistematica.

Tambien hay frontera conceptual con leafs hermanos:

- Frente a arrastre cuadratico: aqui domina proporcionalidad con [[v]], no crecimiento no lineal fuerte.
- Frente a coeficiente de arrastre: aqui usamos [[b]] como parametro operativo del regimen lineal, no como estudio general de todos los coeficientes de forma.
- Frente a numero de Reynolds y regimenes: este leaf no clasifica todo el mapa de regimenes; usa una hipotesis local de linealidad.
- Frente a velocidad terminal: aqui construimos bloque de arrastre lineal que luego servira para balances dinamicos mas completos.

Estructuralmente, [[tau]] ofrece un puente muy util entre estatico y dinamico. No necesitamos resolver todo para interpretar: si [[tau]] es grande frente al tiempo de interes del experimento, el sistema apenas alcanza a ajustarse; si [[tau]] es pequeno, el ajuste ocurre rapido. Este criterio temporal evita errores de interpretacion en laboratorio y en aplicaciones tecnicas.

Un segundo aporte estructural es metodologico: el modelo lineal obliga a documentar condiciones. Sin registro de fluido, intervalo de rapidez y geometria efectiva, comparar valores de [[b]] entre ensayos puede ser engañoso.

## Interpretación física profunda

Interpretar profundo significa traducir numeros en mecanismo causal y en decision. Si una cuenta arroja mayor [[F_d]], la pregunta no termina ahi: que variable lo produjo y que accion conviene tomar?

Ejemplo de lectura causal: si [[v]] aumenta y [[b]] se mantiene, el incremento de [[F_d]] indica mayor tasa de disipacion de cantidad de movimiento en el medio. Ejemplo de lectura de diseño: si para la misma [[v]] observas mayor [[F_d]], revisar [[b]] puede revelar cambio en medio o geometria efectiva.

La lectura temporal con [[tau]] tambien tiene contenido fisico fuerte. Un [[tau]] pequeno sugiere amortiguamiento rapido de transitorios; un [[tau]] grande sugiere persistencia de la inercia. Esta idea conecta este leaf con control, respuesta transitoria y estabilidad operativa.

Interpretar tambien exige declarar limite. Una conclusion fisica madura siempre incluye una frase de validez: "esta lectura vale mientras la relacion entre [[F_d]] y [[v]] permanezca aproximadamente lineal en el rango de trabajo". Sin esa frase, el resultado queda incompleto.

## Orden de magnitud

Para no perder sentido fisico, conviene manejar referencias de escala:

- [[v]]: desde fracciones de m/s en fluidos densos hasta decenas de m/s en aire, segun aplicacion.
- [[b]]: muy sensible al medio y a la geometria efectiva; no debe copiarse entre escenarios sin justificar.
- [[F_d]]: crece con [[v]] dentro del regimen lineal; el valor absoluto depende de [[b]] y del contexto.
- [[m]]: no fija por si sola el arrastre instantaneo, pero condiciona la respuesta temporal.
- [[tau]]: referencia de rapidez de ajuste; util para decidir si un transitorio es rapido o lento.

Si un resultado sale fuera de escala esperable, el primer chequeo es semantico: se uso [[v]] relativa al fluido? el [[b]] corresponde al escenario? las unidades son coherentes? Este protocolo simple evita gran cantidad de errores de examen y de laboratorio.

## Método de resolución personalizado

1. Delimita sistema y fluido de referencia.
2. Dibuja DCL y declara direccion de [[F_d]] opuesta al movimiento.
3. Define [[v]] relativa al medio y selecciona datos confiables.
4. Aplica la relacion de arrastre lineal para estimar [[F_d]].
5. Si corresponde, calcula [[tau]] para leer dinamica temporal.
6. Verifica unidades, rango y coherencia causal.
7. Redacta conclusion con mecanismo y limite de validez.

Este metodo evita el error clasico de "sustitucion ciega" y obliga a cerrar con interpretacion fisica util.

## Casos especiales y ejemplo extendido

Caso especial 1: [[v]] cercana a cero. En ese limite, [[F_d]] tambien se acerca a cero en el modelo ideal, y otras fuerzas pueden dominar completamente.

Caso especial 2: cambio de fluido. Manteniendo el mismo cuerpo y rapidez parecida, [[b]] puede variar mucho y desplazar la respuesta resistiva.

Caso especial 3: masa muy grande con [[b]] moderado. El valor de [[tau]] puede crecer y hacer visible un transitorio largo antes de alcanzar comportamiento cuasi estable.

Ejemplo extendido sugerido: comparar dos ensayos del mismo objeto en medios distintos, estimar [[F_d]] y [[tau]] en cada uno, y discutir cual escenario presenta ajuste mas rapido y por que. Esta comparacion integra lectura de fuerza y lectura temporal sin abandonar el nucleo lineal.

## Preguntas reales del alumno

Por que este leaf insiste tanto en [[v]] relativa?
Porque el fluido "siente" movimiento relativo. Usar velocidad de suelo sin revisar medio puede introducir errores sistematicos.

Puede [[F_d]] ser alta aunque el objeto no sea muy grande?
Si. Basta que [[b]] sea alta por propiedades del medio o por configuracion geometrica efectiva.

[[tau]] es el tiempo total que dura el movimiento?
No. [[tau]] es una escala caracteristica de ajuste, no la duracion completa del fenomeno.

Si la grafica no es recta, el experimento esta mal?
No necesariamente. Puede indicar salida del dominio lineal y necesidad de transicion de modelo.

## Conexiones transversales y rutas de estudio

Este leaf conecta de forma directa con segunda ley de Newton, con lectura de DCL y con introduccion a transitorios amortiguados. Tambien prepara el salto a temas vecinos: regimenes de arrastre, arrastre no lineal y velocidad terminal.

Ruta sugerida:

1. Consolidar lectura causal [[F_d]]-[[v]] en regimen lineal.
2. Practicar estimacion de [[b]] a partir de pendiente experimental.
3. Incorporar [[tau]] para interpretar rapidez de ajuste.
4. Comparar con un caso no lineal para decidir cambio de modelo.

Con esta secuencia, el alumno deja de ver formulas sueltas y construye criterio de modelado.

## Síntesis final

Dominar arrastre lineal significa reconocer una estructura simple pero potente: [[F_d]] crece con [[v]] bajo una pendiente fisica [[b]], y la respuesta temporal del sistema puede resumirse con [[tau]]. Esta doble lectura, fuerza y tiempo caracteristico, permite pasar de calculo mecanico a interpretacion causal con frontera de validez explicita.

El valor del leaf no esta en repetir una ecuacion, sino en decidir bien: cuando aplicar el modelo lineal, como verificarlo en datos, y cuando migrar a otro marco. Ese criterio es transferible a toda la fisica aplicada.