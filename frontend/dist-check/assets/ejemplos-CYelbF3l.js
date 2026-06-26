const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un laboratorio de mecanica usa un pendulo para estimar tiempos de referencia en una practica. El montaje tiene longitud [[L]] igual a 1.20 m y se realiza en un entorno con gravedad [[g]] igual a 9.81 m/s^2. La masa [[m]] del bob es 0.40 kg. Se libera desde un angulo inicial [[theta]] de 0.20 rad respecto a la vertical estable. Se pide estimar la frecuencia angular [[omega]], el periodo [[Tper]] y el torque gravitatorio inicial [[tau]]. Ademas, se solicita interpretar que magnitudes controlan el reloj del sistema y cual magnitud controla la accion restauradora instantanea.\r
\r
## Datos\r
\r
Se consideran como datos de entrada [[L]], [[g]], [[m]] y [[theta]]. El ensayo se diseña para regime de pequenas oscilaciones, con hilo inextensible y pivote de baja friccion. El objetivo principal es lectura temporal, pero se incluye el calculo de [[tau]] para vincular la dinamica local con el mismo montaje.\r
\r
La incertidumbre de longitud se mantiene por debajo de un porcentaje bajo, y el angulo inicial se fija con una guia mecanica para evitar dispersion excesiva. Esto permite que la comparacion entre prediccion y cronometraje real tenga valor didactico y no dependa solo de azar experimental.\r
\r
## Definición del sistema\r
\r
El sistema es un pendulo simple de un grado de libertad angular. La coordenada generalizada es [[theta]]. La gravedad [[g]] y la longitud [[L]] determinan la escala temporal del movimiento alrededor del equilibrio inferior. La masa [[m]] participa en la dinamica de torque instantaneo y en la energia, pero en el modelo ideal no altera la lectura de periodo para pequenas oscilaciones.\r
\r
El ensayo separa dos planos de analisis. Plano temporal global: calculo de [[omega]] y [[Tper]]. Plano dinamico local: calculo de [[tau]] para el estado inicial dado por [[theta]]. Esta separacion es intencional para evitar confundir una magnitud de ciclo con una magnitud de instante.\r
\r
## Modelo físico\r
\r
Se usa el modelo de pendulo simple con aproximacion temporal de pequenas oscilaciones para ritmo y periodo. En paralelo, se mantiene la expresion trigonometrica de torque para describir el estado local inicial. El modelo incluye restricciones de validez: amplitud moderada, hilo sin elasticidad relevante y perdidas por ciclo no dominantes.\r
\r
La hipotesis se considera razonable porque el montaje fue construido para oscilaciones de baja amplitud y con pivote de baja friccion. Si los datos de campo mostraran cambio sistematico de [[Tper]] al variar amplitud, o decaimiento pronunciado por ciclo, el modelo deberia ampliarse.\r
\r
## Justificación del modelo\r
\r
La eleccion no es solo tradicional; es fisicamente defendible para la pregunta planteada. El problema pide ritmo de oscilacion y torque inicial, no una simulacion completa de largo plazo con disipacion detallada. Con [[theta]] moderado, la lectura temporal lineal ofrece buena precision para propósitos de practica. Al mismo tiempo, mantener [[tau]] con dependencia angular preserva la direccion restauradora real del instante inicial.\r
\r
El criterio de aceptacion del modelo es operativo: se mantiene mientras el periodo medido no muestre deriva sistematica al repetir el ensayo con amplitud similar y mientras la perdida de amplitud por ciclo permanezca baja frente al objetivo del experimento. Se rechaza el modelo lineal simple si el periodo cambia de forma consistente al aumentar amplitud o si el decaimiento por ciclo se vuelve dominante.\r
\r
Esta combinacion permite entrenar dos competencias: identificar magnitudes que fijan reloj global y magnitudes que describen accion instantanea. La solucion no se limita a un numero final; construye una lectura causal util para decidir que parametro ajustar en un experimento real.\r
\r
## Resolución simbólica\r
\r
La frecuencia angular natural en pequenas oscilaciones se obtiene con:\r
\r
{{f:omega}}\r
\r
El periodo de ciclo se obtiene con:\r
\r
{{f:Tper}}\r
\r
El torque gravitatorio instantaneo se calcula con:\r
\r
{{f:tau}}\r
\r
Secuencia de uso: primero se determina [[omega]] con [[g]] y [[L]]. Luego se convierte a [[Tper]]. Finalmente se evalua [[tau]] con [[m]], [[g]], [[L]] y [[theta]] para el estado inicial.\r
\r
## Sustitución numérica\r
\r
Con [[g]] y [[L]] del montaje, el cociente gravedad sobre longitud proporciona una escala temporal de segundo inverso al cuadrado. Al extraer raiz, se obtiene un valor de [[omega]] del orden de varios radianes por segundo, consistente con oscilaciones de banco de laboratorio.\r
\r
Con ese ritmo, el periodo [[Tper]] queda del orden de pocos segundos. Esa escala coincide con lo que un cronometraje manual puede resolver de forma fiable durante varios ciclos, especialmente si se promedia sobre oscilaciones consecutivas.\r
\r
Para el torque inicial, se introducen [[m]], [[g]], [[L]] y [[theta]] inicial. Como el angulo de partida es positivo segun convenio adoptado, [[tau]] debe resultar con signo opuesto para reflejar retorno hacia la vertical. La magnitud resultante queda en un rango compatible con un bob de masa subkilogramo y brazo de palanca del orden de metro.\r
\r
## Validación dimensional\r
\r
En [[omega]], la dimension de [[g]] dividida por [[L]] corresponde a uno sobre tiempo al cuadrado, y su raiz da uno sobre tiempo. En [[Tper]], una constante angular adimensional dividida por [[omega]] produce tiempo.\r
\r
En [[tau]], el producto de [[m]], [[g]] y [[L]] produce unidad de momento de fuerza. La funcion trigonometrica no altera dimension. Por tanto, la salida dimensional es coherente con torque mecanico.\r
\r
Adicionalmente, se valida coherencia de signo: si [[theta]] cruza al lado opuesto, [[tau]] debe cambiar de signo. Esta comprobacion protege contra errores de convencion, que suelen pasar desapercibidos cuando solo se inspecciona valor absoluto.\r
\r
## Interpretación física\r
\r
El resultado temporal indica que el montaje posee un reloj mecanico determinado por [[L]] y [[g]]. Esto implica que, para ajustar el tiempo de ciclo, conviene modificar longitud efectiva o entorno de gravedad equivalente, no la masa del bob. Esta conclusion es central en el uso didactico del pendulo.\r
\r
El resultado de [[tau]] agrega una lectura local: muestra cuanta accion restauradora existe al inicio y hacia que lado corrige el sistema. Por tanto, [[tau]] no reemplaza a [[Tper]], sino que complementa la interpretacion al explicar el mecanismo instantaneo de retorno.\r
\r
Desde una perspectiva de regimen, el caso cae en zona donde la aproximacion temporal lineal es aceptable. Si el laboratorio repitiera el ensayo con angulos mucho mayores, esperaria una desviacion creciente del periodo ideal. Esto implica que la relacion temporal usada aqui no debe extrapolarse sin control a amplitudes grandes.\r
\r
En terminos operativos, la solucion permite dos decisiones concretas. Si se desea oscilacion mas lenta, aumentar [[L]] es la palanca principal. Si se desea mayor accion restauradora inicial para el mismo angulo, aumentar [[m]] o [[L]] escala [[tau]], pero no cambia la lectura temporal ideal en el mismo grado que variar longitud. Esta distincion entre control de ritmo y control de torque es justamente el aprendizaje que se busca consolidar.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Un equipo de museo cientifico diseña un modulo interactivo para mostrar oscilaciones de pendulo a visitantes. El sistema debe ser suficientemente lento para que el publico observe varios ciclos, pero no tan lento que pierda atencion. Ademas, el montaje debe operar con seguridad mecanica, evitando esfuerzos excesivos en el pivote durante lanzamientos repetidos.\r
\r
El equipo puede ajustar longitud del hilo, masa del bob y amplitud inicial programada por un mecanismo de liberacion. El reto es convertir esas decisiones en criterios cuantitativos simples y comunicables para mantenimiento.\r
\r
## Estimación física\r
\r
Primero se fija un rango deseado de [[Tper]] para experiencia de usuario. Con ese objetivo, se selecciona [[L]] y se estima [[omega]] de referencia usando gravedad local del sitio. Luego se evalua [[tau]] para la amplitud maxima permitida en operacion normal y se verifica que el soporte mecanico tenga margen estructural suficiente.\r
\r
La estimacion revela una tension de diseno habitual. Un [[L]] grande mejora visibilidad del ciclo porque alarga [[Tper]], pero tambien puede aumentar requerimientos de espacio y desplazar trayectoria del bob. Una amplitud mayor mejora impacto visual, pero incrementa [[tau]] inicial y exige mayor robustez del conjunto.\r
\r
Para mantener equilibrio entre pedagogia y seguridad, se adopta una amplitud moderada y se ajusta [[L]] hasta alcanzar el rango temporal objetivo. Despues se prueba en campo y se compara el periodo observado con el esperado. Si la desviacion permanece dentro de tolerancia, el modelo ideal se mantiene como herramienta de operacion.\r
\r
## Interpretación\r
\r
Este caso muestra como un modelo de pendulo no solo sirve para resolver un ejercicio, sino para tomar decisiones de diseno. La lectura temporal con [[omega]] y [[Tper]] permite configurar experiencia de usuario. La lectura dinamica con [[tau]] permite verificar exigencia mecanica y seguridad.\r
\r
La causalidad del problema es clara: [[L]] y [[g]] dominan el reloj, mientras [[theta]] y [[m]] escalan la accion instantanea de retorno mediante [[tau]]. Esto implica que cambiar masa para ajustar tiempo seria una estrategia ineficiente en el marco ideal.\r
\r
El ejemplo tambien deja una regla de mantenimiento: si con el tiempo el periodo medido cambia sin haber tocado [[L]], puede haber variacion de longitud efectiva, deterioro del pivote o cambios de regimen por amplitud. Esa observacion convierte el pendulo en un diagnostico operativo, no solo en una demostracion estetica.\r
\r
En resumen, la aplicacion real confirma que las ecuaciones del leaf funcionan como herramientas de decision cuando se respetan dominio y coherencia fisica. Esto implica menos prueba y error, mejor comunicacion tecnica y mayor calidad en la implementacion final.`;export{e as default};
