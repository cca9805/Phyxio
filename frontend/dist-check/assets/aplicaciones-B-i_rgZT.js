const e=`# Aplicaciones de la ley de Biot Savart

## 1. Diseño de bobinas de calibración magnetica

Las bobinas circulares se usan para producir campos conocidos en ensayos de sensores Hall, magnetometros y brujulas electronicas. La ley de Biot Savart permite estimar [[B]] en el centro de una espira a partir de [[I]] y [[R]], sin medir primero el campo.

La hipotesis dominante es que el sensor esta situado en el centro geometrico. En esa posicion, las contribuciones [[dB]] de todos los elementos [[dl]] tienen una direccion axial comun. Si el sensor se desplaza, la suma vectorial cambia y la formula central deja de representar el montaje.

En una calibracion real, se mide primero el cero del sensor y despues se aplica una corriente conocida. La estimacion de Biot Savart permite anticipar si el cambio esperado sera visible frente al ruido del instrumento. Tambien permite elegir un radio que no exija corrientes excesivas.

Variable dominante: [[R]] fija la escala geometrica que concentra o debilita el campo central.
Límite de validez: el modelo falla fuera del centro, con bobinas deformadas o con calentamiento que cambia la corriente.

## 2. Estimacion de campo junto a cables de potencia

En instalaciones electricas, Biot Savart ayuda a estimar el campo cerca de conductores largos antes de hacer mediciones. Para un tramo recto suficientemente largo, el resultado integrado muestra como [[B]] disminuye al aumentar [[r]].

La aplicacion no consiste solo en calcular un numero. Permite decidir distancias de separacion, ubicar sensores sensibles y comparar rutas de cableado. Si ida y retorno van cerca, las contribuciones de ambos conductores pueden cancelarse parcialmente en zonas lejanas.

Esta lectura ayuda en cuadros electricos, bancos de ensayo y laboratorios docentes. Si se observa una lectura magnetica inesperada, la ley orienta la busqueda: corriente mayor, menor distancia o geometria de retorno mal cerrada.

Variable dominante: [[r]] controla la perdida espacial de campo alrededor del conductor.
Límite de validez: el modelo de hilo largo falla cerca de extremos, empalmes, curvas o conductores agrupados.

## 3. Analisis de bobinas pequeñas en instrumentacion

Muchos instrumentos usan pequeñas espiras para generar o detectar campos. Biot Savart permite entender que una bobina compacta no se comporta igual que un hilo recto. La orientacion de cada [[dl]] alrededor de la espira organiza el campo en el eje.

En el diseño, aumentar [[I]] eleva el campo, pero tambien aumenta disipacion. Reducir [[R]] aumenta el campo central, aunque reduce la region util. La ley ayuda a equilibrar intensidad, tamaño y uniformidad sin depender solo de ensayo y error.

La decision final rara vez maximiza solo el campo. Un instrumento necesita estabilidad, repetibilidad y una zona util donde la sonda pueda colocarse sin sensibilidad extrema a milimetros de posicion. Biot Savart permite detectar esa tension entre campo intenso y campo usable.

Variable dominante: [[I]] escala linealmente la contribucion de corriente en el rango magnetostatico.
Límite de validez: en bobinas reales se deben considerar resistencia, calentamiento, numero de vueltas y campo fuera del centro.

## 4. Diagnostico de geometria en montajes de laboratorio

Cuando un experimento mide un campo diferente al esperado, Biot Savart permite separar errores de corriente y errores de geometria. Si [[I]] es estable pero [[B]] cambia al desplazar un poco la sonda, el problema suele estar en [[r]], [[R]] o en la orientacion real de los tramos.

La lectura diferencial es util porque obliga a preguntar que aporta cada parte del conductor. Una pinza mal colocada, un cable doblado o una espira no circular pueden modificar la suma de [[dB]] sin que la fuente electrica cambie.

Tambien sirve para documentar incertidumbres. Si el montaje no es perfectamente circular, el modelo ideal da una referencia, pero el tecnico sabe que la desviacion procede de la geometria. Esa informacion es mas util que repetir una medida sin explicar su origen.

Variable dominante: [[dB]] permite localizar que tramos del conductor dominan el campo medido.
Límite de validez: si hay piezas ferromagneticas cercanas, la respuesta del medio ya no corresponde al vacio ideal.

## 5. Compatibilidad electromagnetica en circuitos compactos

En placas electronicas, corrientes de alimentacion y retorno generan campos que pueden perturbar sensores magneticos o lazos de señal. Biot Savart explica por que un lazo de corriente grande produce mas campo externo que un trazado compacto.

La aplicacion practica es reducir areas de lazo y mantener retorno cerca de ida. Asi, las contribuciones de tramos vecinos tienden a cancelarse a distancia. La ley convierte una regla de diseño en una lectura fisica de suma vectorial.

Tambien ayuda a decidir donde colocar magnetometros dentro de equipos portatiles. La distancia [[r]] a pistas de alta corriente y la orientacion de los tramos determinan si el sensor mide el campo externo buscado o el campo producido por el propio equipo.

En equipos con baterias, motores pequeños o convertidores de potencia, esta aplicacion es critica. Una pista corta pero muy cercana puede dominar la lectura, mientras otra mas larga puede cancelarse por estar junto al retorno. La ley permite razonar esa diferencia antes de rediseñar la placa.

Variable dominante: [[s_theta]] refleja que la orientacion de las pistas afecta la contribucion al punto sensible.
Límite de validez: a frecuencias altas se requieren modelos de onda, inductancias parasitas y distribucion real de corriente.
`;export{e as default};
