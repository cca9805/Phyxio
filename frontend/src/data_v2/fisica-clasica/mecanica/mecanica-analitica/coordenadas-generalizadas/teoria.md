# Coordenadas generalizadas

## Idea clave
Una coordenada generalizada es cualquier variable independiente que describe el estado del sistema de forma minima y util para resolver el problema.

## Recorrido de aprendizaje (de principio a fin)
- Identificas cuantas variables independientes tiene el sistema real.
- Eliges coordenadas adaptadas a su geometria y ligaduras.
- Expresas posicion, velocidad y energia en esas coordenadas.
- Preparas el terreno para Lagrange y Hamilton sin algebra innecesaria.

## Variables y parametros
- q_i: coordenadas generalizadas (unidad segun cada variable).
- n: numero de particulas del sistema.
- C: numero de ligaduras independientes.
- f: grados de libertad efectivos.
- r, theta: ejemplo tipico de coordenadas polares.

## Ecuaciones fundamentales

$$
x = r\cos\theta
$$

$$
y = r\sin\theta
$$

$$
f = 3n - C \quad (sistemas en 3D)
$$

$$
f = 2n - C \quad (sistemas planos)
$$

## Intuicion fisica
- No hay coordenadas "mejores" en abstracto: hay coordenadas mas utiles para cada problema.
- La buena eleccion reduce calculo y clarifica la fisica.
- Si una coordenada no cambia, normalmente hay una simetria aprovechable.

## Metodo de resolucion paso a paso
1. Dibuja el sistema y enumera todas las restricciones geometricas.
2. Cuenta grados de libertad esperados antes de definir variables.
3. Propone un conjunto q_i independiente y sin redundancias.
4. Reescribe x, y, z y velocidades en funcion de q_i y qdot_i.
5. Verifica que puedes reconstruir el estado completo con ese conjunto.

## Errores frecuentes
- Usar mas coordenadas de las necesarias y luego forzar restricciones al final.
- Confundir variable geometrica con grado de libertad real.
- Olvidar unidades al mezclar angulos, longitudes y desplazamientos.

## Conexion con otros temas
- Base directa para escribir T(q,qdot) y V(q).
- Paso previo obligatorio para ecuaciones de Lagrange.
- Clave para interpretar coordenadas ciclicas y conservaciones.

## Que es calculable y que no (en Phyxio)
- Calculable: conversiones basicas de coordenadas y conteo de grados de libertad.
- En graficas: lectura de relacion entre variables y su evolucion didactica.
- No cubre: cambios de coordenadas avanzados con geometria diferencial completa.
