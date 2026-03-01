# Transformacion de Legendre

## Idea clave
La transformacion de Legendre reemplaza velocidades generalizadas por momentos conjugados y abre la puerta al formalismo hamiltoniano.

## Recorrido de aprendizaje (de principio a fin)
- Partes de L(q,qdot,t) ya construido.
- Defines p_i = partial L / partial qdot_i.
- Reescribes la dinamica en terminos de (q_i,p_i,t).
- Obtienes H y preparas las ecuaciones canonicas.

## Variables y parametros
- p_i: momento conjugado de q_i.
- H(q,p,t): hamiltoniano.
- L(q,qdot,t): lagrangiano base.
- qdot_i: velocidad generalizada.

## Ecuaciones fundamentales

$$
p_i = \frac{\partial L}{\partial \dot q_i}
$$

$$
H = \sum_i p_i\dot q_i - L
$$

$$
dH = \sum_i \dot q_i\,dp_i - \sum_i \dot p_i\,dq_i - \frac{\partial L}{\partial t}dt
$$

## Intuicion fisica
- No es un truco algebraico: cambia el espacio donde describes la dinamica.
- En ese nuevo espacio, la estructura de las ecuaciones queda mas simetrica.
- La transformacion solo funciona bien si puedes despejar qdot en funcion de p.

## Metodo de resolucion paso a paso
1. Calcula p_i para cada coordenada.
2. Comprueba que el mapeo qdot -> p es invertible.
3. Construye H y expresa todo en variables canonicas.
4. Simplifica y verifica unidades de cada termino.
5. Interpreta fisicamente el resultado antes de seguir con Hamilton.

## Errores frecuentes
- Tratar p_i siempre como m v sin revisar la coordenada usada.
- Olvidar que H puede depender explicitamente del tiempo.
- Aplicar Legendre en un lagrangiano singular sin analizar restricciones.

## Conexion con otros temas
- Paso obligatorio para ecuaciones de Hamilton.
- Relacion directa con conservacion de energia en sistemas autonomos.
- Base de metodos avanzados en mecanica y teoria de campos.

## Que es calculable y que no (en Phyxio)
- Calculable: p y H para modelos elementales de una coordenada.
- En graficas: comparacion didactica entre variables de entrada y canonicas.
- No cubre: tratamiento completo de sistemas singulares tipo Dirac.
