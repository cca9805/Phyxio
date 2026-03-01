# Bloque Colgante

## Idea clave
Un bloque colgante se resuelve con una sola ecuacion dinamica vertical, pero el resultado depende totalmente del convenio de signos. La fisica no cambia: cambian los signos algebraicos.

## 1- Que fenomeno estudia este subtema
Este subtema estudia el movimiento vertical de una masa suspendida por una cuerda, donde las fuerzas principales son peso y tension.

Permite responder:
- cuando hay equilibrio,
- cuando acelera hacia abajo,
- cuando acelera hacia arriba.

## 2- Base conceptual: fuerzas que compiten
Sobre el bloque actuan:
- peso \(P=mg\) hacia abajo,
- tension \(T\) hacia arriba.

La aceleracion sale de la diferencia entre ambas.

Si eliges hacia abajo como positivo:

$$
mg-T=ma
$$

Si eliges hacia arriba como positivo, cambia la forma algebraica, pero no el resultado fisico.

## 3- Elementos que debes identificar siempre
- \(m\): masa del bloque (kg).
- \(g\): gravedad (m/s^2).
- \(T\): tension de la cuerda (N).
- \(a\): aceleracion vertical (m/s^2).
- eje positivo elegido y sentido real del movimiento.

## 4- Formulacion matematica minima (y lectura fisica)
Segunda ley vertical (convencion abajo positiva):

$$
mg-T=ma
$$

Despeje de tension:

$$
T=m(g-a)
$$

Casos utiles:

$$
a=0\ \Rightarrow\ T=mg
$$

$$
a>0\ (\text{hacia abajo})\ \Rightarrow\ T<mg
$$

$$
a<0\ (\text{hacia arriba en este convenio})\ \Rightarrow\ T>mg
$$

## 5- Cuando aplica este modelo (validez)
Aplica bien cuando:
- la cuerda es ideal (inextensible y sin masa),
- el movimiento es vertical y 1D,
- se desprecia resistencia del aire.

Debes extender el modelo cuando:
- hay poleas reales con inercia/rozamiento,
- hay elasticidad de cuerda,
- el sistema tiene varias masas acopladas.

## 6- Metodo de resolucion para problemas tipo
1. Fija eje vertical y sentido positivo.
2. Dibuja diagrama de cuerpo libre.
3. Escribe \(\sum F_y=ma\) con signos coherentes.
4. Despeja la incognita (\(T\), \(a\) o \(m\)).
5. Comprueba unidad y signo del resultado.
6. Interpreta si el sentido de \(a\) es coherente con \(T\) y \(mg\).

## 7- Errores frecuentes que bloquean el aprendizaje
- Cambiar de convenio de signos a mitad del ejercicio.
- Usar \(T=mg\) en un caso acelerado.
- Tratar \(a\) como positiva "por defecto" sin definir eje.
- Introducir normal en un sistema puramente colgante.

## 8- Ejemplo guia (de principio a fin)
Datos: \(m=2\ \text{kg}\), \(a=1.5\ \text{m/s}^2\) hacia abajo, \(g=9.8\ \text{m/s}^2\).

Con eje positivo hacia abajo:

$$
T=m(g-a)=2(9.8-1.5)=16.6\ \text{N}
$$

Comprobacion:
\(T<mg=19.6\ \text{N}\), por tanto el bloque acelera hacia abajo, consistente con el dato.

## 9- Aplicaciones reales
- Ascensores y elevacion de cargas.
- Grúas y polipastos en regimen simple.
- Calibracion de dinamometros en sistemas verticales.
- Analisis preliminar de traccion en cables.

## 10- Sintesis final
Dominar el bloque colgante significa saber traducir un diagrama vertical en ecuaciones con signos correctos y cerrar cada resultado con interpretacion fisica, no solo numerica.
