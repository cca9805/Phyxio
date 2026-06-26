const e=`# Errores\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que sistema conservativo significa rapidez constante\r
\r
Por que parece correcto  \r
Porque muchos alumnos asocian la palabra conservacion con la idea de que todo debe permanecer igual. Si observan que la rapidez cambia, concluyen que el modelo ya no puede ser conservativo.\r
\r
Senal de deteccion  \r
El estudiante afirma que si [[K]] cambia entonces [[Em]] no puede conservarse.\r
\r
Mini-ejemplo de contraste  \r
Una masa cae sin rozamiento. [[K]] aumenta claramente mientras [[U]] disminuye. El proceso sigue siendo conservativo porque el total [[Em]] no necesita cambiar.\r
\r
Correccion conceptual  \r
La conservacion se refiere al balance total [[Em]], no a la constancia de cada termino por separado.\r
\r
### Error 2: pensar que [[U]] es una propiedad absoluta y no una magnitud dependiente de referencia\r
\r
Por que parece correcto  \r
El alumno ve valores numericos de [[Ui]] y [[Uf]] y olvida que ambos dependen del cero elegido para el potencial.\r
\r
Senal de deteccion  \r
Se cambian cotas, alturas o referencias entre estado inicial y final sin mencionar el cambio.\r
\r
Mini-ejemplo de contraste  \r
Si en el estado inicial se toma el suelo como referencia y en el final se toma el punto mas bajo de la trayectoria, la comparacion entre [[Ui]] y [[Uf]] deja de tener sentido fisico.\r
\r
Correccion conceptual  \r
[[Ui]], [[Uf]] y [[U]] solo son comparables bajo la misma referencia potencial.\r
\r
## Errores de modelo\r
\r
### Error 3: imponer conservacion ideal cuando [[Wnc]] ya no es despreciable\r
\r
Por que parece correcto  \r
La forma ideal del balance es elegante y conocida, asi que algunos estudiantes la aplican incluso cuando el enunciado menciona rozamiento o frenado.\r
\r
Senal de deteccion  \r
El problema incluye rozamiento, perdida, frenado o aporte externo y aun asi se usa solo el balance conservativo.\r
\r
Mini-ejemplo de contraste  \r
Un bloque baja por una rampa y luego cruza un tramo rugoso. En la rampa lisa el modelo ideal es razonable. En el tramo rugoso aparece [[Wnc]] y el cierre ya no puede ignorarse.\r
\r
Correccion conceptual  \r
Cuando el mecanismo no conservativo afecta el resultado, debe introducirse [[Wnc]] en el balance.\r
\r
### Error 4: confundir definicion de [[Em]] con ley de conservacion\r
\r
Por que parece correcto  \r
La expresion de [[Em]] es tan familiar que muchos alumnos la leen como si ya implicara invariancia entre estados.\r
\r
Senal de deteccion  \r
Se usa la definicion de [[Em]] para concluir conservacion sin analizar el proceso.\r
\r
Mini-ejemplo de contraste  \r
Un sistema con motor tiene [[Em]] definida igual que uno sin motor. La diferencia no esta en la definicion, sino en que el segundo puede necesitar [[Wnc]] positiva.\r
\r
Correccion conceptual  \r
Definir [[Em]] no basta. Hay que decidir si el proceso permite o no su conservacion ideal.\r
\r
## Errores matemáticos\r
\r
### Error 5: perder el signo entre [[Wc]] y [[dU]]\r
\r
Por que parece correcto  \r
Como ambas magnitudes se refieren al mismo cambio fisico, el alumno puede creer que deben llevar el mismo signo.\r
\r
Senal de deteccion  \r
Se obtiene [[Wc]] positiva y [[dU]] tambien positiva en una caida donde el potencial disminuye.\r
\r
Mini-ejemplo de contraste  \r
Si el sistema pasa de una posicion alta a otra baja, [[dU]] debe reflejar una disminucion de potencial. En el convenio habitual, eso corresponde a [[Wc]] positiva.\r
\r
Correccion conceptual  \r
[[Wc]] y [[dU]] deben leerse con signos opuestos en el convenio usado por el leaf.\r
\r
### Error 6: mezclar estados y usar [[Ki]] o [[Kf]] de instantes distintos\r
\r
Por que parece correcto  \r
En ejercicios largos el estudiante recoge varios datos y luego combina magnitudes que no pertenecen al mismo par de estados.\r
\r
Senal de deteccion  \r
El balance usa [[Ki]] de un punto, [[Uf]] de otro y [[Wnc]] de un tramo distinto sin justificarlo.\r
\r
Mini-ejemplo de contraste  \r
Un lanzamiento con rebote tiene varias fases. Si [[Ki]] se toma antes del choque y [[Uf]] despues del rebote, el balance mezcla procesos distintos.\r
\r
Correccion conceptual  \r
Cada ecuacion de balance debe referirse a un mismo sistema y a un mismo intervalo de estados.\r
\r
## Errores de interpretación\r
\r
### Error 7: concluir que [[Wnc]] negativa significa siempre fallo experimental\r
\r
Por que parece correcto  \r
Como el ideal conservativo suele enseñarse primero, cualquier desviacion parece un error y no una pista fisica.\r
\r
Senal de deteccion  \r
El alumno descarta el dato en vez de preguntarse que mecanismo disipa energia.\r
\r
Mini-ejemplo de contraste  \r
En una frenada real, [[Wnc]] negativa no es ruido. Es la huella energetica del proceso disipativo.\r
\r
Correccion conceptual  \r
[[Wnc]] debe interpretarse causalmente. Puede ser la magnitud que mejor describa el fenomeno real.\r
\r
### Error 8: usar el lenguaje de sistemas conservativos como plantilla universal\r
\r
Por que parece correcto  \r
Una vez que el alumno domina el balance ideal, intenta reutilizarlo en cualquier problema sin volver a examinar hipotesis.\r
\r
Senal de deteccion  \r
El enunciado cambia de regimen fisico y el modelo elegido no cambia con el.\r
\r
Mini-ejemplo de contraste  \r
Una caida breve en aire tranquilo puede modelarse casi sin perdidas. Un descenso largo con arrastre importante no. El lenguaje energetico sigue sirviendo, pero el sistema ya no es conservativo puro.\r
\r
Correccion conceptual  \r
El modelo debe cambiar cuando cambia el mecanismo dominante. La habilidad real es decidir cuando el ideal basta y cuando no.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar un problema, revisa estas cuatro preguntas. El mismo sistema aparece en estado inicial y final. [[Ui]] y [[Uf]] usan la misma referencia. La conclusion sobre [[Em]] distingue caso ideal y caso con [[Wnc]]. El signo de [[Wc]] es compatible con el de [[dU]]. Si alguna falla, el error suele estar en el modelo antes que en la cuenta.`;export{e as default};
