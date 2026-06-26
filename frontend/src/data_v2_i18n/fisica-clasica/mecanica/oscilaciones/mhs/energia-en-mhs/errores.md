# Errores frecuentes

## Errores conceptuales

### Error 1: creer que la energia se pierde solo porque [[K]] disminuye

Por que parece correcto:
Se observa una reduccion de [[K]] en parte del ciclo y se concluye que la energia total ya no se conserva.

Senal de deteccion:
La explicacion ignora el aumento simultaneo de [[U]] en el mismo tramo.

Mini-ejemplo de contraste:
Cerca de un extremo, [[K]] puede ser pequena mientras [[U]] es grande y [[E]] sigue estable.

Correccion conceptual:
No leer una componente aislada; el criterio relevante es el balance entre [[K]], [[U]] y [[E_total]].

### Error 2: pensar que energia constante implica magnitudes componentes constantes

Por que parece correcto:
Se asume que si [[E]] no cambia, entonces [[K]] y [[U]] deberian ser fijas.

Senal de deteccion:
El estudiante se sorprende cuando las componentes varian temporalmente.

Mini-ejemplo de contraste:
En equilibrio, [[K]] puede ser alta y [[U]] baja; en un extremo sucede lo opuesto, sin romper conservacion.

Correccion conceptual:
La constancia pertenece a la suma ideal, no a cada termino por separado.

## Errores de modelo

### Error 3: usar conservacion ideal cuando hay disipacion visible

Por que parece correcto:
La ecuacion de energia ideal es sencilla y se aplica por inercia incluso con datos degradados.

Senal de deteccion:
[[E]] muestra deriva sistematica y aun asi se insiste en interpretar intercambio puro.

Mini-ejemplo de contraste:
Si el nivel total cae ciclo a ciclo, ya no basta el modelo ideal sin perdidas.

Correccion conceptual:
Cuando la deriva es persistente, pasar a un modelo amortiguado o justificar por que la deriva no es fisica.

### Error 4: confundir parametro con estado energetico

Por que parece correcto:
Se mezclan [[A]] o [[k]] con magnitudes que realmente cambian en el tiempo como [[K]] y [[U]].

Senal de deteccion:
La resolucion trata [[A]] como si fuera una energia instantanea.

Mini-ejemplo de contraste:
[[A]] fija la escala de [[E]], pero no sustituye la lectura dinamica de intercambio entre componentes.

Correccion conceptual:
Separar con claridad parametros estructurales de estados energeticos instantaneos.

## Errores matemáticos

### Error 5: mezclar unidades en reconstruccion energetica

Por que parece correcto:
Los factores numericos parecen pequenos y el resultado queda “cercano” a lo esperado.

Senal de deteccion:
Se combina [[k]] en una unidad y [[x]] o [[A]] en otra sin conversion previa.

Mini-ejemplo de contraste:
Una conversion omitida puede duplicar o dividir la energia reconstruida por un factor grande.

Correccion conceptual:
Normalizar unidades antes de calcular cualquier energia.

### Error 6: cerrar con suma numerica sin chequeo de signo y rango

Por que parece correcto:
La suma final produce un valor positivo y se da por buena sin revisar consistencia.

Senal de deteccion:
No se comprueba si [[K]] y [[U]] son no negativas ni si [[E]] queda en un orden de magnitud plausible.

Mini-ejemplo de contraste:
Una energia potencial negativa en este modelo suele indicar algebra o datos mal tratados.

Correccion conceptual:
Acompañar cada calculo con control de no negatividad y orden de magnitud.

## Errores de interpretación

### Error 7: confundir intercambio energetico con cambio de causa fisica

Por que parece correcto:
Como las curvas de [[K]] y [[U]] se cruzan, se interpreta que el sistema entra en otro régimen.

Senal de deteccion:
Se usan palabras como “transicion de modelo” cuando solo hubo intercambio normal entre componentes.

Mini-ejemplo de contraste:
El cruce de componentes es esperable en MHS ideal y no implica nueva fisica por si solo.

Correccion conceptual:
Distinguir entre redistribucion interna de energia y cambio real de mecanismo.

### Error 8: reportar conservacion como eslogan y no como evidencia

Por que parece correcto:
Se escribe “se conserva la energia” sin mostrar como se verifico la afirmacion.

Senal de deteccion:
No aparece contraste cuantitativo entre [[K]]+[[U]] y [[E]] o [[E_total]].

Mini-ejemplo de contraste:
Una conclusion de conservacion sin balance verificable es solo narrativa, no validacion.

Correccion conceptual:
Afirmar conservacion solo despues de mostrar coherencia cuantitativa y fisica.

## Regla de autocontrol rápido

1. Identificar si la pregunta pide componente energetica o energia total.
2. Verificar unidades antes de calcular.
3. Revisar no negatividad de [[K]] y [[U]].
4. Contrastar [[K]]+[[U]] con [[E]] o [[E_total]].
5. Cerrar con lectura fisica del intercambio, no solo con una suma.
