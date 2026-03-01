# Ligaduras y grados de libertad

## Idea clave
Las ligaduras no son un detalle secundario: determinan cuantas variables realmente puedes mover de forma independiente.

## Recorrido de aprendizaje (de principio a fin)
- Partes del numero bruto de coordenadas posibles.
- Identificas restricciones geometricas y cinematicas.
- Eliminas redundancias para llegar al modelo minimo.
- Compruebas que el conteo coincide con el comportamiento fisico observado.

## Variables y parametros
- n: numero de particulas o cuerpos puntuales.
- C: numero de restricciones independientes.
- f: grados de libertad.
- q_i: coordenadas independientes tras aplicar ligaduras.

## Ecuaciones fundamentales

$$
f = 3n - C
$$

$$
f = 2n - C
$$

$$
\phi_\alpha(q_1,\ldots,q_s,t)=0 \quad (ligaduras\ holonomas)
$$

## Intuicion fisica
- Una ligadura elimina movimiento posible, no solo una variable escrita.
- Dos ecuaciones de restriccion no siempre son independientes: hay que comprobarlo.
- Si el conteo no encaja con la fisica, la seleccion de ligaduras es incorrecta.

## Metodo de resolucion paso a paso
1. Define si trabajas en 2D o 3D.
2. Cuenta coordenadas iniciales del sistema sin restricciones.
3. Escribe todas las ligaduras y revisa independencia.
4. Resta restricciones y obtiene los grados de libertad.
5. Selecciona un conjunto minimo q_i para el modelado dinamico.

## Errores frecuentes
- Restar ligaduras dependientes como si fueran independientes.
- Confundir condicion inicial con ligadura permanente.
- No distinguir restricciones de posicion y de velocidad.

## Conexion con otros temas
- Determina la dimension del espacio de configuracion.
- Impacta directamente en la forma final de L y H.
- Es esencial en problemas con poleas, barras y superficies impuestas.

## Que es calculable y que no (en Phyxio)
- Calculable: GDL en sistemas sencillos con restricciones explicitas.
- En graficas: comparacion de conteo 2D/3D y efecto de C sobre f.
- No cubre: formulacion completa con multiplicadores de Lagrange en sistemas complejos.
