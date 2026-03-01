# Energia cinetica y potencial

## Idea clave
La clave del metodo lagrangiano es pasar de fuerzas vectoriales a una descripcion energetica escalar que conserva toda la dinamica.

## Recorrido de aprendizaje (de principio a fin)
- Expresas velocidades en funcion de q_i y qdot_i.
- Construyes T sumando la energia cinetica de cada elemento.
- Modelas V a partir de campos o elasticidad.
- Obtienes L y verificas coherencia dimensional y fisica.

## Variables y parametros
- L: lagrangiano del sistema.
- T: energia cinetica total.
- V: energia potencial total.
- m, v, h, g: magnitudes frecuentes en modelos basicos.

## Ecuaciones fundamentales

$$
L = T - V
$$

$$
T = \frac{1}{2}mv^2
$$

$$
V = mgh
$$

$$
V_{elastico} = \frac{1}{2}kx^2
$$

## Intuicion fisica
- T mide cuanto se mueve el sistema; V mide donde esta situado frente a un campo.
- L no es la energia total: es una combinacion que hace emerger la dinamica correcta.
- Elegir bien q_i simplifica radicalmente las expresiones de T y V.

## Metodo de resolucion paso a paso
1. Define variables independientes y geometria del sistema.
2. Escribe posicion y velocidad de cada masa en funcion de q_i.
3. Suma contribuciones para T y para V.
4. Forma L = T - V y simplifica.
5. Comprueba unidades y limites fisicos del modelo.

## Errores frecuentes
- Olvidar un termino de energia cinetica rotacional cuando corresponde.
- Asignar signo incorrecto a V al cambiar referencia de altura.
- Confundir energia potencial con trabajo neto.

## Conexion con otros temas
- Entrada inmediata a Euler-Lagrange.
- Permite comparar formulacion newtoniana y analitica.
- Puente directo hacia la transformacion de Legendre.

## Que es calculable y que no (en Phyxio)
- Calculable: T, V y L en sistemas modelo de una y pocas coordenadas.
- En graficas: comparativa visual entre terminos energeticos y su escala.
- No cubre: potenciales no conservativos generales sin terminos disipativos explicitos.
