# Calculo Del Torque

## Idea clave
Calcular torque no es "meter datos en una formula". Primero se define eje y signo; despues se elige la ecuacion que realmente corresponde al tipo de datos del problema.

## 1- Que se calcula exactamente en este subtema
Se calcula el efecto de giro de una o varias fuerzas respecto a un eje:
- modulo del torque,
- signo del torque,
- torque neto cuando hay varias contribuciones.

## 2- Paso cero obligatorio: eje y convencion de signo
Antes de cualquier numero:
1. define el eje/punto de referencia,
2. fija una convencion de signo (por ejemplo antihorario positivo),
3. mantenla en todo el ejercicio.

Sin ese paso, el resultado puede salir numericamente "bonito" pero fisicamente mal.

## 3- Caso A: datos en brazo perpendicular
Si conoces fuerza y brazo perpendicular:

$$
\tau = Fd
$$

Uso ideal:
- problemas de puerta, llave, palanca,
- situaciones donde el brazo se ve directamente en el esquema.

## 4- Caso B: datos en distancia y angulo
Si conoces \(r\), \(F\) y \(\theta\):

$$
\tau = rF\sin(\theta)
$$

y

$$
d = r\sin(\theta)
$$

Criterio:
- \(\theta\) es el angulo entre \(\vec r\) y \(\vec F\), no entre fuerza y eje.

## 5- Caso C: datos en componentes (2D)
Si tienes vectores en componentes:

$$
\tau_z = r_xF_y - r_yF_x
$$

Ventaja:
- evita errores geometricos cuando el diagrama no es simple,
- muy util en problemas con varias fuerzas inclinadas.

## 6- Torque neto y enlace dinamico
Con varias fuerzas:

$$
\tau_{net} = \sum \tau_i
$$

Luego, si el problema pide respuesta dinamica:

$$
\sum \tau = I\alpha
$$

## 7- Metodo de resolucion recomendado
1. Dibuja esquema y define eje.
2. Elige convencion de signo.
3. Decide si usar \(Fd\), \(rF\sin\theta\) o componentes.
4. Calcula torque de cada fuerza con signo.
5. Suma torques y obtiene \(\tau_{net}\).
6. Si procede, conecta con \(\sum\tau = I\alpha\).
7. Verifica unidades: N*m.
8. Interpreta el signo final (sentido de giro).

## 8- Ejemplo completo guiado
Datos:
- \(r=0.40\ \text{m}\)
- \(F=25\ \text{N}\)
- \(\theta=60^\circ\)

Paso 1. Torque por angulo:

$$
\tau = rF\sin\theta = 0.40\cdot25\cdot\sin 60^\circ
$$

$$
\tau \approx 0.40\cdot25\cdot0.866 = 8.66\ \text{N m}
$$

Paso 2. Interpretacion:
- si la fuerza induce giro antihorario con tu convenio, \(\tau=+8.66\ \text{N m}\),
- si induce horario, \(\tau=-8.66\ \text{N m}\).

## 9- Errores que mas puntos hacen perder
- usar distancia al eje en lugar de brazo perpendicular.
- tomar mal el angulo de la formula seno.
- mezclar grados y radianes sin revisar calculadora.
- olvidar signo de cada contribucion en sumatoria de torques.
- cerrar el ejercicio sin interpretar el sentido del giro.

## 10- Sintesis final
Dominar el calculo de torque significa:
- seleccionar bien la ecuacion,
- conservar coherencia de signos,
- y traducir el numero final en una lectura fisica clara del giro del sistema.
