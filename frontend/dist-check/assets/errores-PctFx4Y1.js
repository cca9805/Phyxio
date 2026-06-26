const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que la energia se pierde solo porque [[K]] disminuye\r
\r
Por que parece correcto:\r
Se observa una reduccion de [[K]] en parte del ciclo y se concluye que la energia total ya no se conserva.\r
\r
Senal de deteccion:\r
La explicacion ignora el aumento simultaneo de [[U]] en el mismo tramo.\r
\r
Mini-ejemplo de contraste:\r
Cerca de un extremo, [[K]] puede ser pequena mientras [[U]] es grande y [[E]] sigue estable.\r
\r
Correccion conceptual:\r
No leer una componente aislada; el criterio relevante es el balance entre [[K]], [[U]] y [[E_total]].\r
\r
### Error 2: pensar que energia constante implica magnitudes componentes constantes\r
\r
Por que parece correcto:\r
Se asume que si [[E]] no cambia, entonces [[K]] y [[U]] deberian ser fijas.\r
\r
Senal de deteccion:\r
El estudiante se sorprende cuando las componentes varian temporalmente.\r
\r
Mini-ejemplo de contraste:\r
En equilibrio, [[K]] puede ser alta y [[U]] baja; en un extremo sucede lo opuesto, sin romper conservacion.\r
\r
Correccion conceptual:\r
La constancia pertenece a la suma ideal, no a cada termino por separado.\r
\r
## Errores de modelo\r
\r
### Error 3: usar conservacion ideal cuando hay disipacion visible\r
\r
Por que parece correcto:\r
La ecuacion de energia ideal es sencilla y se aplica por inercia incluso con datos degradados.\r
\r
Senal de deteccion:\r
[[E]] muestra deriva sistematica y aun asi se insiste en interpretar intercambio puro.\r
\r
Mini-ejemplo de contraste:\r
Si el nivel total cae ciclo a ciclo, ya no basta el modelo ideal sin perdidas.\r
\r
Correccion conceptual:\r
Cuando la deriva es persistente, pasar a un modelo amortiguado o justificar por que la deriva no es fisica.\r
\r
### Error 4: confundir parametro con estado energetico\r
\r
Por que parece correcto:\r
Se mezclan [[A]] o [[k]] con magnitudes que realmente cambian en el tiempo como [[K]] y [[U]].\r
\r
Senal de deteccion:\r
La resolucion trata [[A]] como si fuera una energia instantanea.\r
\r
Mini-ejemplo de contraste:\r
[[A]] fija la escala de [[E]], pero no sustituye la lectura dinamica de intercambio entre componentes.\r
\r
Correccion conceptual:\r
Separar con claridad parametros estructurales de estados energeticos instantaneos.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar unidades en reconstruccion energetica\r
\r
Por que parece correcto:\r
Los factores numericos parecen pequenos y el resultado queda “cercano” a lo esperado.\r
\r
Senal de deteccion:\r
Se combina [[k]] en una unidad y [[x]] o [[A]] en otra sin conversion previa.\r
\r
Mini-ejemplo de contraste:\r
Una conversion omitida puede duplicar o dividir la energia reconstruida por un factor grande.\r
\r
Correccion conceptual:\r
Normalizar unidades antes de calcular cualquier energia.\r
\r
### Error 6: cerrar con suma numerica sin chequeo de signo y rango\r
\r
Por que parece correcto:\r
La suma final produce un valor positivo y se da por buena sin revisar consistencia.\r
\r
Senal de deteccion:\r
No se comprueba si [[K]] y [[U]] son no negativas ni si [[E]] queda en un orden de magnitud plausible.\r
\r
Mini-ejemplo de contraste:\r
Una energia potencial negativa en este modelo suele indicar algebra o datos mal tratados.\r
\r
Correccion conceptual:\r
Acompañar cada calculo con control de no negatividad y orden de magnitud.\r
\r
## Errores de interpretación\r
\r
### Error 7: confundir intercambio energetico con cambio de causa fisica\r
\r
Por que parece correcto:\r
Como las curvas de [[K]] y [[U]] se cruzan, se interpreta que el sistema entra en otro régimen.\r
\r
Senal de deteccion:\r
Se usan palabras como “transicion de modelo” cuando solo hubo intercambio normal entre componentes.\r
\r
Mini-ejemplo de contraste:\r
El cruce de componentes es esperable en MHS ideal y no implica nueva fisica por si solo.\r
\r
Correccion conceptual:\r
Distinguir entre redistribucion interna de energia y cambio real de mecanismo.\r
\r
### Error 8: reportar conservacion como eslogan y no como evidencia\r
\r
Por que parece correcto:\r
Se escribe “se conserva la energia” sin mostrar como se verifico la afirmacion.\r
\r
Senal de deteccion:\r
No aparece contraste cuantitativo entre [[K]]+[[U]] y [[E]] o [[E_total]].\r
\r
Mini-ejemplo de contraste:\r
Una conclusion de conservacion sin balance verificable es solo narrativa, no validacion.\r
\r
Correccion conceptual:\r
Afirmar conservacion solo despues de mostrar coherencia cuantitativa y fisica.\r
\r
## Regla de autocontrol rápido\r
\r
1. Identificar si la pregunta pide componente energetica o energia total.\r
2. Verificar unidades antes de calcular.\r
3. Revisar no negatividad de [[K]] y [[U]].\r
4. Contrastar [[K]]+[[U]] con [[E]] o [[E_total]].\r
5. Cerrar con lectura fisica del intercambio, no solo con una suma.\r
`;export{e as default};
