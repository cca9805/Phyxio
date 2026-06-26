const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Se presenta un sistema clasico regular en el lenguaje de Corchetes de Poisson. Decide si puede usarse el formalismo avanzado, identifica la magnitud dominante [[PB]] y declara que estructura fisica se esta poniendo a prueba. Las magnitudes relevantes son [[A]], [[B]], [[PB]], [[qi]], [[pi]], [[H]], [[dA_dt]].\r
\r
## Datos\r
\r
- El sistema pertenece a un unico modelo analitico coherente.\r
- Las variables son suaves y estan dentro del dominio de validez.\r
- Las relaciones pedidas son la relacion definitoria, el criterio estructural y la relacion de caso limite del leaf.\r
- La respuesta debe incluir interpretacion, no solo manipulacion simbolica.\r
\r
## Definicion del sistema\r
\r
El sistema no se define solo por un dibujo. Se define por las variables que hacen significativo el criterio avanzado. En este ejemplo, la tarea es decidir si la descripcion formal preserva, separa, transforma o linealiza la mecanica original sin cambiar la pregunta fisica.\r
\r
## Modelo fisico\r
\r
El modelo usa [[PB]] como magnitud central porque determina la lectura fisica del leaf. Las formulas forman parte del modelo y deben aplicarse como pruebas estructurales:\r
\r
{{f:definicion_corchete_poisson}}\r
\r
{{f:evolucion_temporal_poisson}}\r
\r
{{f:conservacion_por_poisson}}\r
\r
{{f:corchete_canonico_fundamental}}\r
\r
## Justificacion del modelo\r
\r
El modelo es valido porque las variables se suponen regulares, el dominio es clasico y el objeto formal esta unido a un criterio fisico. No es valido solo porque la notacion este disponible. Si no se recupera el limite de particula libre, oscilador armonico, hamiltoniano autonomo o equilibrio estable, el modelo debe rechazarse.\r
\r
## Resolucion simbolica\r
\r
Usa las formulas del leaf en orden. Primero identifica [[PB]], despues aplica la relacion definitoria y luego el criterio de evolucion, transformacion, separacion o modo. La solucion simbolica significa que la estructura puesta a prueba es fisicamente coherente cuando se satisface la condicion requerida. Si la condicion falla, la formula indica el fallo en vez de ocultarlo.\r
\r
{{f:definicion_corchete_poisson}}\r
\r
{{f:evolucion_temporal_poisson}}\r
\r
{{f:conservacion_por_poisson}}\r
\r
{{f:corchete_canonico_fundamental}}\r
\r
## Sustitucion numerica\r
\r
Elige una estimacion de escala unidad para el sistema original. Las formulas mostradas deben mantener [[PB]] en la escala esperada. Si una comprobacion estructural exacta deberia ser cero o uno, una deriva apreciable no es redondeo; indica una hipotesis rota. Si una frecuencia, accion o hamiltoniano transformado cambia mas de aproximadamente diez por ciento bajo una aproximacion pequena, el modelo debe revisarse.\r
\r
## Validacion dimensional\r
\r
Cada termino debe preservar la unidad declarada para [[PB]] o para su cantidad asociada. La comprobacion es fisica: una unidad incorrecta significa que la expresion formal ya no representa el mismo modelo.\r
\r
## Interpretacion fisica\r
\r
El resultado significa que el sistema es fisicamente coherente con la descripcion avanzada declarada. Indica que se preserva, que depende de las hipotesis del modelo y que fallaria si esas hipotesis se retiraran. Por tanto, la respuesta no es solo numerica; es una afirmacion sobre la estructura mecanica.\r
\r
# Ejemplo de aplicacion real\r
\r
## Contexto\r
\r
Un profesor compara dos soluciones del mismo problema de mecanica avanzada. Una solucion es mas corta; la otra comprueba explicitamente la estructura de Corchetes de Poisson. La segunda se prefiere porque demuestra que la simplificacion no cambio el sistema fisico.\r
\r
## Estimacion fisica\r
\r
La estimacion usa la escala original de energia, accion, frecuencia o espacio de fases. El orden de magnitud debe permanecer razonable despues de aplicar la relacion avanzada. Un error de escala revela una variable equivocada, una aproximacion rota o una transformacion inadmisible.\r
\r
## Interpretacion\r
\r
Fisicamente, el ejemplo muestra que la mecanica avanzada es un lenguaje diagnostico. Ayuda a decidir si un resultado es valido, preservado, equivalente, separable o coherente. Por eso [[PB]] debe interpretarse, no solo calcularse.\r
\r
En una correccion de examen, el profesor debe buscar tres evidencias: que el alumno identifica el observable que se prueba, que usa el hamiltoniano como generador de flujo y que interpreta el corchete nulo o no nulo como una afirmacion fisica. Si falta la tercera evidencia, la solucion es solo algebra. Si aparece, el ejemplo muestra dominio real del lenguaje de fase.\r
\r
## Comprobacion docente\r
\r
Una respuesta completa debe contener una frase sobre validez, una frase sobre la magnitud dominante y una frase sobre el caso limite. Esto evita que el ejemplo se convierta en una sustitucion formal. El producto esperado del alumno es una decision fisicamente argumentada: el metodo avanzado se permite, se permite con condiciones o se rechaza porque han fallado las hipotesis del modelo.\r
\r
Para completar el ejemplo, conviene pedir una verificacion verbal final: que observable se prueba, que flujo lo intenta modificar y que conclusion permite el signo del corchete. Esta verificacion evita que el alumno confunda una identidad algebraica con una conservacion fisica. Tambien permite comparar dos soluciones: la mejor no es la mas breve, sino la que justifica por que el observable conserva informacion bajo el hamiltoniano declarado.\r
\r
\r
## Extension didactica del ejemplo\r
\r
El ejemplo tambien puede ampliarse pidiendo al alumno que compare dos observables distintos. Uno puede tener corchete nulo con el hamiltoniano y otro no. Esa comparacion obliga a separar conservacion real de simple valor instantaneo pequeno. Si ambos observables se evaluan en el mismo estado inicial, el alumno ve que el criterio no depende de una fotografia del sistema, sino de como el flujo hamiltoniano lo va a modificar. La extension es util porque convierte el calculo en una decision: que cantidad merece seguimiento, que cantidad puede eliminarse y que cantidad advierte de una interaccion dinamica relevante.\r
`;export{e as default};
