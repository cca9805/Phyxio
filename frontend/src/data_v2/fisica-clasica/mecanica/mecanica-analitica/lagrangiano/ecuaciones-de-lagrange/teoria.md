# Ecuaciones de Lagrange

## Idea clave
Las ecuaciones de Lagrange convierten la informacion energetica del sistema en ecuaciones de movimiento sin necesidad de escribir todas las fuerzas de reaccion.

## Recorrido de aprendizaje (de principio a fin)
- Partes de un lagrangiano correcto en coordenadas generalizadas.
- Derivas respecto a q_i y qdot_i con rigor algebraico.
- Incorporas fuerzas no conservativas cuando existen.
- Obtienes ecuaciones diferenciales listas para resolver o simular.

## Variables y parametros
- q_i: coordenada generalizada i-esima.
- qdot_i, qddot_i: derivadas temporal de q_i.
- L(q_i,qdot_i,t): lagrangiano.
- Q_i^{nc}: fuerza generalizada no conservativa.

## Ecuaciones fundamentales

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot q_i}\right)-\frac{\partial L}{\partial q_i}=Q_i^{nc}
$$

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot q}\right)-\frac{\partial L}{\partial q}=0 \quad (caso\ conservativo)
$$

## Intuicion fisica
- El termino d/dt(partial L/partial qdot) recoge inercia generalizada.
- El termino partial L/partial q describe como cambia el potencial y la geometria.
- Si una coordenada no aparece en L, suele haber una magnitud conservada.

## Metodo de resolucion paso a paso
1. Escribe L en terminos de q_i y qdot_i.
2. Calcula partial L/partial q_i y partial L/partial qdot_i.
3. Deriva temporalmente partial L/partial qdot_i.
4. Sustituye en Euler-Lagrange y simplifica.
5. Contrasta la ecuacion obtenida con limites conocidos del problema.

## Errores frecuentes
- Derivar como total lo que es derivada parcial, o viceversa.
- Olvidar que q_i y qdot_i son variables independientes en L.
- Perder signos al pasar terminos de un lado al otro.

## Conexion con otros temas
- Base para estudiar oscilaciones, pendulos y sistemas multigdl.
- Conecta con Noether al analizar coordenadas ciclicas.
- Es el paso previo natural a Hamilton via Legendre.

## Que es calculable y que no (en Phyxio)
- Calculable: ecuaciones de movimiento de sistemas lineales y no lineales sencillos.
- En graficas: interpretacion de aceleracion generalizada y respuesta del sistema.
- No cubre: solucion cerrada de sistemas caoticos o fuertemente no lineales.
