# Problemas con ligaduras

## Idea clave
En sistemas acoplados por ligaduras, la clave no es escribir muchas ecuaciones, sino imponer correctamente la restriccion que ata los movimientos.

## Recorrido de aprendizaje (de principio a fin)
- Identificas la condicion geometrica de la ligadura.
- Relacionas aceleraciones de los cuerpos acoplados.
- Resuelves una dinamica conjunta con menos variables.
- Interpretras la tension como fuerza interna que transmite el acoplamiento.

## Variables y parametros
- m1, m2: masas conectadas.
- a: aceleracion comun impuesta por la ligadura.
- T: tension en la cuerda ideal.
- g: gravedad.

## Ecuaciones fundamentales

$$
a = \frac{(m_2-m_1)g}{m_1+m_2}
$$

$$
T = \frac{2m_1m_2}{m_1+m_2}g
$$

## Intuicion fisica
- Si m2 > m1, el sistema acelera hacia el lado de m2.
- La tension queda entre los pesos de cada masa en configuracion ideal.
- Cuando m1 = m2, la aceleracion neta se anula.

## Metodo de resolucion paso a paso
1. Define sentido positivo y escribe la ligadura.
2. Plantea ecuaciones dinamicas para cada masa con signo consistente.
3. Suma y elimina T para obtener a.
4. Sustituye a en una ecuacion para calcular T.
5. Comprueba limites: m1 = m2 y casos de gran desbalance.

## Errores frecuentes
- Cambiar signos entre ecuaciones de cada bloque.
- Olvidar que ambos cuerpos comparten modulo de aceleracion.
- Usar formula ideal en problemas con polea masiva sin corregir modelo.

## Conexion con otros temas
- Entrenamiento directo para restricciones y coordenadas dependientes.
- Relacion con multiplicadores de Lagrange en formulacion general.
- Base para sistemas multi-cuerpo con acoplamientos mecanicos.

## Que es calculable y que no (en Phyxio)
- Calculable: aceleracion y tension del sistema ideal.
- En graficas: sensibilidad de a y T frente a razon de masas.
- No cubre: perdidas por rozamiento, inercia de polea y elasticidad de cuerda.
