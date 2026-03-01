# Condicion De Sumatoria De Momentos

## Idea clave
Un cuerpo esta en equilibrio rotacional cuando la suma algebraica de todos los momentos respecto al eje elegido es cero.

$$
\sum M = 0
$$

Esto significa que los giros horarios y antihorarios se compensan exactamente.

## 1- Que aporta frente al equilibrio traslacional
La condicion \(\sum F=0\) evita aceleracion lineal, pero no garantiza que el cuerpo no gire. Para anular giro necesitas, ademas, \(\sum M=0\).

## 2- Como funciona el equilibrio completo
Equilibrio estatico completo:

$$
\sum F_x=0,\qquad \sum F_y=0,\qquad \sum M=0
$$

Si falla cualquiera de esas ecuaciones, el cuerpo acelera lineal o angularmente.

## 3- Eleccion del eje: estrategia clave
Puedes elegir cualquier eje, pero elegir bien reduce algebra:
- si una fuerza pasa por el eje, su momento es cero,
- colocar el eje en una reaccion desconocida puede eliminar esa incognita.

## 4- Formula operativa de momentos
Para cada fuerza:

$$
M_i = F_i d_i
$$

con signo segun convenio (por ejemplo, antihorario positivo).

## 5- Metodo sistematico de resolucion
1- Dibuja DCL del cuerpo.
2- Fija convenio de signos para momentos.
3- Elige eje conveniente.
4- Calcula cada momento con brazo perpendicular.
5- Escribe \(\sum M=0\).
6- Combina con \(\sum F_x=0\), \(\sum F_y=0\) si hace falta.
7- Verifica unidades y sentido fisico.

## 6- Ejemplo guiado de viga simple
Viga horizontal apoyada en un extremo. Carga \(R=300\,\mathrm{N}\) a \(1.2\,\mathrm{m}\), fuerza \(P\) en sentido contrario a \(2.0\,\mathrm{m}\).

Tomando momentos en el apoyo:

$$
P\cdot 2.0 - 300\cdot 1.2 = 0
$$

$$
P = 180\,\mathrm{N}
$$

## 7- Interpretacion fisica del resultado
La fuerza de menor modulo puede equilibrar una carga mayor si actua con brazo mayor. Esa es la base de palancas y maquinas simples.

## 8- Errores criticos
- Cambiar signo de momentos sin criterio fijo.
- Medir mal brazos de palanca.
- Usar distancia al punto de aplicacion en vez de perpendicular a linea de accion.
- No combinar con equilibrio traslacional cuando hay varias reacciones.

## 9- Alcance del modelo
Este subtema trabaja en estatica plana de cuerpos rigidos. No incluye deformacion elastica detallada, vibraciones ni dinamica angular transitoria.

## 10- Sintesis final
La condicion sumatoria de momentos es el cierre matematico del equilibrio rotacional. Dominada junto con sumatoria de fuerzas, permite resolver la mayor parte de problemas de estatica elemental con rigor.