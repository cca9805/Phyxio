const a=`# Historia del tensor de inercia\r
\r
## Problema histórico\r
\r
El problema historico aparecio cuando la mecanica dejo de estudiar solo particulas y tuvo que describir cuerpos extensos que giraban alrededor de ejes arbitrarios. Para un disco o una barra en un eje principal bastaba a veces con un unico momento de inercia, pero esa descripcion se rompia en cuerpos asimetricos y en marcos no alineados. Hacia falta una herramienta que recogiera toda la geometria inercial del cuerpo y no solo un numero aislado.\r
\r
## Dificultad conceptual previa\r
\r
La dificultad previa era doble. Por un lado, costaba aceptar que [[momento_angular]] y [[omega]] no tenian por que ser paralelos. Por otro, resultaba poco intuitivo que las componentes fuera de la diagonal, [[producto_inercia]], no fueran un artificio algebraico sino una huella real de la asimetria respecto a los ejes elegidos. Sin esa idea, muchos problemas tridimensionales parecian inconsistentes aunque en realidad estaban mal coordinatizados.\r
\r
## Qué cambió\r
\r
El cambio decisivo fue pasar de un unico escalar a una matriz simetrica capaz de mapear [[omega]] en [[momento_angular]]. Con Euler y el desarrollo de la dinamica del cuerpo rigido se consolido la idea de que el tensor de inercia resume la distribucion de masa respecto a un origen y unos ejes, y que una rotacion adecuada permite encontrar ejes principales donde la matriz se diagonaliza. A partir de ahi, el desorden aparente de la rotacion tridimensional empezo a tener estructura.\r
\r
## Impacto en la física\r
\r
El impacto fue grande porque el tensor de inercia permitio tratar estabilidad rotacional, precesion, energia y control de orientacion con un lenguaje comun. Gracias a el se pudo explicar por que algunos giros son estables, por que otros producen bamboleo, y como la forma del cuerpo entra directamente en la dinamica. Tambien abrio la puerta a formulaciones modernas en mecanica analitica, robots, satelites y dinamica molecular.\r
\r
## Conexión con física moderna\r
\r
La misma idea sigue viva hoy en control de actitud de satelites, diseño de drones, balanceo de rotores, reconstruccion de masa en biomecanica y simulacion computacional. En todos esos contextos la pregunta sigue siendo la misma: como la geometria de masa, recogida en el tensor y en [[producto_inercia]], condiciona la direccion y la estabilidad del giro. El leaf actual es la puerta de entrada a esa lectura moderna.`;export{a as default};
