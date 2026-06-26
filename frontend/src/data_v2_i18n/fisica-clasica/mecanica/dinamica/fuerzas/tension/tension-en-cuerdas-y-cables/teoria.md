# Tension en cuerdas y cables

## Contexto conceptual

Este tema responde a una pregunta fundamental: como se transmite, se reparte y cambia la traccion en elementos flexibles como cuerdas y cables. La magnitud central es [[T]], pero una lectura completa del leaf exige ir mas alla del valor total. En problemas reales aparecen componentes [[Tx]] y [[Ty]], dependencia angular mediante [[theta]], diferencias entre masas [[m1]] y [[m2]], y variacion espacial de la tension en cables con masa lineal [[lambda]], expresada por el gradiente [[dT_dy]].

Entender tension no consiste solo en resolver una ecuacion aislada. Consiste en decidir que modelo estas usando: cuerda ideal o cable masivo, equilibrio o aceleracion, sistema simple o maquina de Atwood. Esa decision cambia las relaciones que puedes usar y la interpretacion fisica final.

El valor didactico del tema es que conecta tres habilidades clave: representar fuerzas de forma coherente, usar condiciones de validez antes de calcular y traducir el resultado a lectura causal del sistema. Esta competencia reaparece en dinamica traslacional, rotacion, estructuras y analisis de seguridad mecanica.

## 🟢 Nivel esencial

La intuicion base es simple: una cuerda solo puede traccionar, no empujar. Eso obliga a que la direccion de la fuerza coincida con el eje local de la cuerda. Cuando una carga cuelga inmovil, la cuerda transmite una traccion que compensa su peso. Cuando una cabina acelera hacia arriba, la cuerda debe transmitir una traccion mayor que en equilibrio. Cuando dos masas estan acopladas por polea ideal, la misma cuerda transmite una tension comun que determina aceleraciones y fuerzas internas.

Otro punto esencial es diferenciar valor total y componentes. En un cable inclinado, la traccion total no se usa directamente en todas las ecuaciones de equilibrio; a veces importa la proyeccion horizontal y otras veces la proyeccion vertical. Confundir esa distincion suele producir errores de signo o de magnitud.

Tambien hay una idea de modelo que conviene fijar temprano. En cuerda ideal, la tension puede tratarse como uniforme en tramos sin masa ni rozamiento de polea. En cable con masa, la tension cambia con la posicion porque cada seccion debe sostener el peso del tramo inferior. Esta diferencia conceptual explica por que algunas situaciones admiten un unico valor uniforme y otras requieren un campo de tension.

En resumen, el nivel esencial del tema no es memorizar relaciones, sino reconocer tres preguntas antes de calcular: que regimen fisico describe el sistema, que parte de la tension necesitas interpretar y en que direccion actua esa traccion.

## 🔵 Nivel formal

Ahora expresemos esas ideas con relaciones cuantitativas, cada una asociada a un uso fisico distinto dentro del leaf.

**Equilibrio vertical simple:**

{{f:tension_equilibrio_vertical}}

Valida para una masa suspendida en reposo o en velocidad constante vertical, con cuerda ideal y eje vertical coherente con el planteo.

**Movimiento vertical acelerado:**

{{f:tension_vertical_acelerada}}

Valida para movimiento vertical con aceleracion conocida del sistema de referencia del problema y masa efectiva bien definida.

**Aceleracion en Atwood ideal:**

{{f:atwood_aceleracion}}

Valida en maquina de Atwood ideal, con cuerda inextensible y polea ideal, despreciando rozamientos y masas rotacionales de polea.

**Tension en Atwood ideal:**

{{f:atwood_tension}}

Valida bajo las mismas hipotesis ideales de Atwood; permite estimar la tension comun del tramo cuando ambas masas estan acopladas por la misma cuerda.

**Componente horizontal de tension:**

{{f:componentes_tension_x}}

Valida cuando [[theta]] representa el angulo entre la cuerda y el eje de referencia elegido para descomponer fuerzas.

**Componente vertical de tension:**

{{f:componentes_tension_y}}

Valida con la misma convencion angular y se usa para cerrar equilibrio o dinamica en el eje vertical.

**Gradiente de tension en cable con masa:**

{{f:gradiente_tension_cable_masivo}}

Valida para cable continuo con masa lineal [[lambda]] aproximadamente uniforme, en regimen cuasiestatico o con aceleraciones tratables en el modelo adoptado.

**Uniformidad de tension en cuerda ideal:**

{{f:tension_uniforme_cuerda_ideal}}

Valida como criterio de modelo para tramos ideales sin masa y sin disipacion relevante; no es una ecuacion de despeje numerico directo, sino una condicion estructural.

En conjunto, estas relaciones cubren tres escalas de lectura: fuerza total, descomposicion por ejes y variacion espacial. Usarlas correctamente exige verificar hipotesis antes de sustituir datos.

## 🔴 Nivel estructural

El analisis estructural del leaf se apoya en cinco decisiones:

1. Naturaleza del elemento flexible: si trabajas con cuerda ideal, puedes usar uniformidad de tension por tramos; si el cable tiene masa apreciable, aparece variacion espacial de [[T]] y debes considerar [[dT_dy]].

2. Geometria del problema: cuando hay inclinacion, las componentes [[Tx]] y [[Ty]] controlan balances distintos. La tension total [[T]] por si sola no cierra el problema sin proyecciones.

3. Regimen dinamico: en equilibrio vertical la tension compensa peso; en aceleracion vertical la tension cambia con la demanda inercial. Mezclar ambos regimens sin justificar produce errores sistematicos.

4. Acoplamiento de masas: en Atwood ideal, las dos masas comparten condicion cinematica y la cuerda transmite una tension comun. Esta estructura reduce grados de libertad y permite resolver aceleracion y tension en conjunto.

5. Validez del modelo: si aparecen rozamiento de polea, elasticidad significativa, vibraciones o grandes variaciones temporales, el modelo simple pierde precision y conviene pasar a uno extendido.

La consecuencia didactica es clara: resolver bien no es aplicar muchas formulas, sino elegir pocas y correctas para el regimen correcto.

## Interpretacion fisica profunda

Interpretar tension de forma profunda implica leer transferencia de carga. Una cuerda no almacena fuerza fija; transmite demanda mecanica entre puntos de un sistema. Si aumenta la masa colgante o la aceleracion requerida, aumenta la tension necesaria. Si cambia la direccion del cable, cambia la reparticion entre componente horizontal y vertical, y con ello cambian las reacciones en apoyos.

En cables masivos, la tension suele crecer hacia arriba porque cada punto superior soporta el peso del tramo inferior. Esa lectura espacial evita errores frecuentes cuando se asume uniformidad donde no corresponde.

## Orden de magnitud

En aplicaciones escolares e introductorias, [[g]] suele tratarse como casi constante localmente. Las masas [[m]], [[m1]] y [[m2]] suelen estar en rangos de laboratorio o de equipos ligeros. Las tensiones [[T]], [[Tx]] y [[Ty]] pueden variar desde pocos newtons hasta centenares, segun carga y geometria. Si una cuenta produce una componente mayor que la tension total o un gradiente [[dT_dy]] incompatible con [[lambda]], el resultado merece revision inmediata.

## Metodo de resolucion personalizado

1. Identificar si el sistema es cuerda ideal, cable masivo o Atwood ideal.
2. Fijar ejes y convencion de signos antes de proyectar tension.
3. Elegir ecuaciones coherentes con ese modelo y con el regimen, equilibrio o aceleracion.
4. Resolver primero variables estructurales y luego componentes.
5. Comprobar unidades, signos, orden de magnitud y consistencia de modelo.

## Casos especiales y ejemplo extendido

Caso limite 1: [[theta]] cercano a cero en un cable casi horizontal incrementa sensibilidad de las componentes y puede exigir tension total alta para sostener pequena componente vertical. Caso limite 2: en Atwood, si [[m1]] y [[m2]] son casi iguales, la aceleracion baja y el sistema se vuelve sensible a perturbaciones no modeladas. Caso limite 3: en cable largo con [[lambda]] apreciable, ignorar gradiente lleva a subestimar cargas en el anclaje superior.

## Preguntas reales del alumno

**Por que a veces uso [[T]] y otras [[Tx]] o [[Ty]]?**
Porque la ecuacion de balance depende del eje analizado. Usar la magnitud incorrecta en el eje equivocado rompe la coherencia del planteo.

**Cuando debo dejar de usar cuerda ideal?**
Cuando la masa propia de cable, elasticidad, rozamiento de polea o vibraciones afectan el resultado en una escala comparable al efecto principal.

**Como se detecta un error rapido?**
Si una componente supera el valor total, si una tension sale negativa sin justificacion de signo, o si la variacion espacial contradice [[lambda]], hay incoherencia.

## Conexiones transversales y rutas de estudio

Este leaf conecta con leyes de Newton, descomposicion vectorial, maquinas simples, estabilidad de estructuras tensadas, izado industrial y robotica con cables. Tambien enlaza con metodos de modelado donde una misma magnitud exige representacion escalar, vectorial proyectada o distribuida en el espacio.

## Sintesis final

La sintesis del leaf es: [[T]] transmite, [[Tx]] y [[Ty]] reparten, y [[dT_dy]] revela como cambia la carga cuando el elemento flexible tiene masa [[lambda]]. La comprension real aparece cuando eliges el modelo correcto, aplicas la ecuacion correcta y justificas fisicamente el resultado en lugar de limitarte al calculo algebraico.
