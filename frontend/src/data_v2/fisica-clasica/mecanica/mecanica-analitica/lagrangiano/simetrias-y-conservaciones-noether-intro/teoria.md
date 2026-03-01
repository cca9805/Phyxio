# Simetrias y conservaciones (Noether intro)

## Idea clave
Si la accion no cambia bajo una transformacion continua, existe una cantidad fisica que permanece constante durante la evolucion.

## Recorrido de aprendizaje (de principio a fin)
- Identificas que transformacion deja invariante el problema.
- Relacionas esa invariancia con una cantidad dinamica.
- Usas la conservacion para reducir ecuaciones y validar resultados.
- Ganas una herramienta de verificacion potente en problemas complejos.

## Variables y parametros
- p_i: momento conjugado asociado a q_i.
- L_z: momento angular respecto a un eje.
- E: energia total en sistemas autonomos.
- L: lagrangiano del sistema.

## Ecuaciones fundamentales

$$
\frac{\partial L}{\partial q_i}=0 \Rightarrow p_i = \text{cte}
$$

$$
\frac{\partial L}{\partial t}=0 \Rightarrow E = \text{cte}
$$

$$
p_i = \frac{\partial L}{\partial \dot q_i}
$$

## Intuicion fisica
- Noether traduce geometria del problema en constantes de movimiento.
- Conservacion no significa fuerza cero: significa invariancia estructural.
- Detectar simetrias al inicio ahorra trabajo al final.

## Metodo de resolucion paso a paso
1. Inspecciona si hay invariancia por traslacion espacial, rotacion o tiempo.
2. Escribe la magnitud candidata a conservarse.
3. Verifica con Euler-Lagrange que su derivada temporal es cero.
4. Usa la cantidad conservada para reducir orden o acotar la solucion.
5. Comprueba consistencia con el comportamiento de las graficas.

## Errores frecuentes
- Asumir conservacion de energia en sistemas con forzamiento externo explicito.
- Confundir simetria discreta con simetria continua de Noether.
- No distinguir momento lineal de momento conjugado en coordenadas curvilineas.

## Conexion con otros temas
- Explica por que aparecen integrales primeras en muchos problemas clasicos.
- Prepara el salto conceptual al formalismo hamiltoniano.
- Conecta con fisica moderna mas alla de la mecanica clasica.

## Que es calculable y que no (en Phyxio)
- Calculable: lectura de magnitudes conservadas en modelos basicos.
- En graficas: comparacion de tendencias de p, Lz y energia.
- No cubre: demostracion variacional completa en notacion avanzada.
