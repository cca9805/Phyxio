const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un resorte ideal vertical sostiene una masa puntual. Se conoce [[m]] = 1.80 kg, [[k]] = 120 N/m y [[g]] = 9.81 m/s^2. La masa se deja en reposo estatico y luego se desplaza 1.0 cm hacia abajo respecto de su posicion de equilibrio. Se pide:\r
\r
1. Calcular la deformacion de equilibrio [[x_eq]].\r
2. Verificar el caracter restaurador de la fuerza elastica para el desplazamiento incremental.\r
3. Calcular la fuerza elastica signada [[Fel]], su modulo [[Fm]] y la energia [[Uel]] asociada a la deformacion de equilibrio.\r
4. Interpretar si el resultado es compatible con un rango lineal razonable.\r
\r
## Datos\r
\r
- [[m]] = 1.80 kg\r
- [[k]] = 120 N/m\r
- [[g]] = 9.81 m/s^2\r
- Desplazamiento incremental alrededor de equilibrio: [[x]] = +0.010 m con eje positivo hacia abajo\r
- Se asume resorte ideal en tramo lineal y sin historesis apreciable para la maniobra descrita\r
\r
## Definición del sistema\r
\r
Sistema de una sola masa y un solo elemento elastico local. El analisis se realiza en 1D vertical. Se define el origen en la longitud natural del resorte y eje positivo hacia abajo. Bajo esa convencion, el peso actua positivo y la respuesta elastica de retorno debe oponerse a la deformacion.\r
\r
Este punto es esencial: en este leaf no modelamos una red de muelles ni acoplamientos multiples, sino la ley constitutiva local que vincula deformacion y fuerza. La distincion evita mezclar este tema con hojas de sistemas con muelles.\r
\r
## Modelo físico\r
\r
El modelo usa las relaciones nucleares del leaf:\r
\r
{{f:hooke_1d}}\r
\r
{{f:hooke_modulo}}\r
\r
{{f:equilibrio_vertical_muelle}}\r
\r
{{f:energia_potencial_elastica}}\r
\r
{{f:criterio_restaurador}}\r
\r
Con ellas se cubre direccion de fuerza, intensidad, equilibrio estatico, almacenamiento energetico y chequeo de coherencia causal.\r
\r
## Justificación del modelo\r
\r
Se adopta Hooke lineal porque la deformacion esperada esta en un rango pequeno y se supone ausencia de plastificacion. Ademas, la pregunta pide expresamente una lectura de equilibrio y respuesta incremental, para la cual la ley constitutiva local es la herramienta correcta.\r
\r
Si el resultado arrojara [[x_eq]] excesiva frente al tramo lineal real del componente, entonces la conclusion no seria "la formula falla" sino "cambio de modelo o de elemento". Esta justificacion fisica explicita protege contra extrapolacion ingenua.\r
\r
## Resolución simbólica\r
\r
Para equilibrio:\r
\r
{{f:equilibrio_vertical_muelle}}\r
\r
Para fuerza signada en torno al eje declarado:\r
\r
{{f:hooke_1d}}\r
\r
Para el modulo:\r
\r
{{f:hooke_modulo}}\r
\r
Para energia almacenada a deformacion dada:\r
\r
{{f:energia_potencial_elastica}}\r
\r
Y para validar restauracion en el desplazamiento incremental:\r
\r
{{f:criterio_restaurador}}\r
\r
La secuencia simbolica no es decorativa. Cada relacion responde a una pregunta distinta del mismo sistema.\r
\r
## Sustitución numérica\r
\r
Equilibrio:\r
\r
[[x_eq]] = ([[m]]*[[g]])/[[k]] = (1.80*9.81)/120 = 0.14715 m\r
\r
Fuerza incremental para [[x]] = +0.010 m:\r
\r
[[Fel]] = -[[k]]*[[x]] = -120*0.010 = -1.20 N\r
\r
Modulo:\r
\r
[[Fm]] = [[k]]*|[[x]]| = 1.20 N\r
\r
Energia en la deformacion de equilibrio:\r
\r
[[Uel]] = (1/2)*[[k]]*[[x_eq]]^2 = 0.5*120*(0.14715)^2 = 1.30 J aprox.\r
\r
Chequeo restaurador:\r
\r
[[Fel]]*[[x]] = (-1.20)*(+0.010) = -0.012 < 0\r
\r
Se cumple condicion restauradora bajo la convencion definida.\r
\r
## Validación dimensional\r
\r
1. En [[x_eq]]: kg*(m/s^2)/(N/m) = kg*(m/s^2)/(kg/s^2) = m. Correcto.\r
2. En [[Fel]]: unidad de rigidez por unidad de longitud da unidad de fuerza, resultado coherente.\r
3. En [[Uel]]: unidad de rigidez multiplicada por longitud al cuadrado da unidad de energia, resultado coherente.\r
\r
Ademas del chequeo de unidades, se verifica orden de magnitud: una extension de 14.7 cm para 1.8 kg y 120 N/m es razonable, no absurda. Eso refuerza confianza en el calculo.\r
\r
## Interpretación física\r
\r
El resultado muestra una extension esttica significativa pero plausible. El valor de [[x_eq]] implica que el sistema opera en una zona donde conviene confirmar experimentalmente linealidad, porque no todas las geometrías reales toleran ese recorrido manteniendo [[k]] constante.\r
\r
La fuerza incremental calculada es restauradora y su modulo coincide con la lectura esperada de intensidad. La energia [[Uel]] en equilibrio no es despreciable, por lo que cambios modestos de masa pueden aumentar de forma relevante la energia almacenada. Desde perspectiva de diseño, la decision practica seria verificar el tramo lineal del elemento y, si fuera menor que 0.147 m, migrar a un resorte de mayor [[k]] o a un modelo no lineal.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un banco de calibracion de un dinamometro escolar, el equipo tecnico necesita definir un rango operativo seguro para evitar lecturas sesgadas. Se utiliza un resorte con rigidez nominal [[k]] = 300 N/m y se aplican cargas equivalentes a masas entre 0.1 y 1.0 kg. El objetivo no es solo obtener una escala, sino asegurar que la proporcionalidad fuerza-deformacion siga activa durante el uso docente.\r
\r
## Estimación física\r
\r
Para una masa de 0.5 kg, la carga gravitatoria es [[m]]*[[g]] = 4.905 N. Si el resorte se mantiene lineal, la deformacion esperada en equilibrio es:\r
\r
[[x_eq]] = ([[m]]*[[g]])/[[k]] = 4.905/300 = 0.01635 m\r
\r
Para 1.0 kg, [[x_eq]] seria aproximadamente 0.0327 m. Ambas extensiones son pequenas y compatibles con un instrumento de recorrido corto.\r
\r
Si el fabricante indica linealidad confiable hasta 0.040 m, entonces el rango de calibracion propuesto es razonable. La energia maxima en ese rango puede estimarse por [[Uel]] y sirve para evaluar fatiga por ciclos repetidos. Esta lectura cuantitativa permite justificar una regla operativa: no exceder 1.0 kg en actividades de aula.\r
\r
## Interpretación\r
\r
La aplicacion confirma el valor practico del leaf: una ley constitutiva local bien usada transforma un objeto simple en instrumento de medicion trazable. Tambien deja una leccion de calidad: no basta con trazar una escala; hay que declarar rango valido, revisar deriva de [[k]] y mantener coherencia entre fuerza signada [[Fel]] y lectura escalar [[Fm]].\r
\r
Con esta metodologia, la ley de Hooke deja de ser una formula de memoria y pasa a ser criterio operativo para decisiones de laboratorio.\r
`;export{e as default};
