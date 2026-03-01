# Ecuaciones de Hamilton

## Idea clave
La evolucion temporal de un sistema queda determinada por dos ecuaciones acopladas de primer orden, una para cada variable canonica.

## Recorrido de aprendizaje (de principio a fin)
- Construyes H(q,p,t).
- Derivas parciales respecto a p para obtener qdot.
- Derivas parciales respecto a q para obtener pdot con signo menos.
- Integras el sistema en el tiempo y analizas su fase.

## Variables y parametros
- q_i: coordenadas generalizadas.
- p_i: momentos conjugados.
- H: hamiltoniano del sistema.
- qdot_i y pdot_i: derivadas temporales canonicas.

## Ecuaciones fundamentales

$$
\dot q_i = \frac{\partial H}{\partial p_i}
$$

$$
\dot p_i = -\frac{\partial H}{\partial q_i}
$$

$$
H=\frac{p^2}{2m}+\frac{1}{2}kq^2 \quad (oscilador\ ejemplo)
$$

## Intuicion fisica
- q y p evolucionan de forma acoplada y simetrica.
- El espacio fase muestra geometria de la dinamica, no solo una curva temporal.
- La conservacion de H aparece de forma natural en sistemas autonomos.

## Metodo de resolucion paso a paso
1. Escribe H en terminos de q y p.
2. Calcula derivadas parciales para qdot y pdot.
3. Sustituye condiciones iniciales y resuelve el sistema.
4. Representa la trayectoria en plano fase (q,p).
5. Valida conservaciones y sentido fisico de la solucion.

## Errores frecuentes
- Cambiar el signo de pdot por inercia de notacion newtoniana.
- Usar H(q,qdot) en vez de H(q,p).
- Olvidar que la solucion requiere dos condiciones iniciales canonicas.

## Conexion con otros temas
- Permite analisis de estabilidad y periodicidad.
- Es puente hacia mecanica estadistica y cuantica.
- Complementa y no reemplaza la interpretacion lagrangiana.

## Que es calculable y que no (en Phyxio)
- Calculable: qdot, pdot y lectura de H en modelos clasicos.
- En graficas: evolucion de variables canonicas y estado de muestra.
- No cubre: integradores simplecticos avanzados y caos hamiltoniano detallado.
