const e=`# Errores frecuentes: Condicion sumatoria fuerzas\r
\r
## Errores conceptuales\r
\r
### Error 1: Igualar equilibrio con ausencia de fuerzas\r
\r
### Por qué parece correcto\r
En lenguaje cotidiano, "equilibrio" suena a "nada actua". Por eso muchos estudiantes esperan un diagrama vacio o casi vacio.\r
\r
### Por que es incorrecto\r
En equilibrio traslacional puede haber varias fuerzas grandes. Lo que se anula es la suma vectorial, no cada fuerza por separado.\r
\r
### Senal de deteccion\r
Si en tu desarrollo fuerzas no nulas desaparecen sin justificacion, probablemente confundiste ausencia con compensacion.\r
\r
### Mini-ejemplo\r
Una caja en reposo sobre mesa tiene peso y normal no nulos, pero resultante vertical nula.\r
\r
### Corrección conceptual\r
Piensa siempre en pares o sistemas de compensacion: peso con normal, o componentes de tensiones con el peso total.\r
\r
### Error 2: Usar solo una componente para declarar equilibrio\r
\r
### Por qué parece correcto\r
Muchos problemas se presentan con una direccion dominante, y eso induce a revisar solo eje x o solo eje y.\r
\r
### Por que es incorrecto\r
En 2D debes cumplir simultaneamente sumFx = 0 y sumFy = 0. Cumplir una no garantiza la otra.\r
\r
### Senal de deteccion\r
Revisa si escribiste dos ecuaciones independientes. Si solo hay una, falta una condicion de cierre.\r
\r
### Mini-ejemplo\r
Si sumFx cierra pero queda componente vertical sin compensar, el cuerpo acelera en y.\r
\r
### Corrección conceptual\r
Implementa un protocolo fijo: primero eje x, luego eje y, luego verificacion de consistencia global.\r
\r
### Error 3: Mezclar masa [[m]] con fuerza [[F]]\r
\r
### Por qué parece correcto\r
En el habla comun se dice "este objeto pesa 5 kilos", y eso mezcla unidades de masa con fuerza.\r
\r
### Por que es incorrecto\r
La masa se mide en kg y la fuerza en N. No puedes sumar [[m]] con [[T]] ni con [[F]] sin convertir.\r
\r
### Senal de deteccion\r
Haz control dimensional en cada ecuacion. Si aparecen terminos kg + N, hay error inmediato.\r
\r
### Mini-ejemplo\r
Escribir [[T]] + [[m]] en una misma ecuacion produce mezcla de unidades incompatibles.\r
\r
### Corrección conceptual\r
Convierte siempre masa a peso antes de sumar fuerzas. Mantener SI limpio evita errores de orden de magnitud.\r
\r
## Errores de modelo\r
\r
### Error 4: Signos inconsistentes en descomposición angular\r
\r
### Por qué parece correcto\r
El seno y coseno se recuerdan de memoria, pero muchas veces sin fijar desde donde se mide [[theta]].\r
\r
### Por que es incorrecto\r
El signo de cada componente depende del cuadrante y del convenio de ejes. Un signo mal puesto rompe el balance.\r
\r
### Senal de deteccion\r
Comprueba si al cambiar ligeramente [[theta]] tu resultado cambia en direccion absurda. Es una alarma tipica de signo.\r
\r
### Mini-ejemplo\r
Al aumentar [[theta]], la componente vertical deberia crecer; si decrece, el signo probablemente esta invertido.\r
\r
### Corrección conceptual\r
Declara referencia angular al inicio y dibuja flechas de componente antes de escribir algebra.\r
\r
### Error 5: Aceptar tensiones negativas en cuerdas ideales\r
\r
### Por qué parece correcto\r
Como el algebra "cerró", parece tentador aceptar cualquier numero final.\r
\r
### Por que es incorrecto\r
Una cuerda ideal no empuja; solo tracciona. Tension negativa indica hipotesis o signos incorrectos.\r
\r
### Senal de deteccion\r
Si [[T]] < 0 tras despejar, revisa orientaciones asumidas y ecuaciones por eje.\r
\r
### Mini-ejemplo\r
Si calculas [[T]] negativa en una eslinga, el problema suele estar en la direccion elegida para la tension.\r
\r
### Corrección conceptual\r
Replantea direcciones de fuerza y vuelve a resolver. El objetivo no es forzar el numero, sino restaurar coherencia fisica.\r
\r
### Error 6: Olvidar la tolerancia experimental al evaluar [[R]]\r
\r
### Por qué parece correcto\r
El criterio teorico dice [[R]] = 0 y parece razonable exigir cero absoluto en calculadora.\r
\r
### Por que es incorrecto\r
En mediciones reales hay ruido, redondeo e incertidumbre angular. Exigir cero exacto puede llevar a diagnosticos falsos.\r
\r
### Senal de deteccion\r
Si tu residuo es pequeno pero no nulo, compara con una banda de tolerancia antes de descartar el modelo.\r
\r
### Mini-ejemplo\r
Un residuo de 0.5 N puede ser aceptable si las fuerzas principales rondan 300 N.\r
\r
### Corrección conceptual\r
Usa criterio operativo: abs(sumFx) y abs(sumFy) deben ser pequenos respecto de una fuerza de referencia del sistema.\r
\r
## Errores matemáticos\r
\r
### Error 7: Concluir equilibrio total sin revisar rotación\r
\r
### Por qué parece correcto\r
Este leaf enfatiza sumatoria de fuerzas, por lo que es facil olvidar otros criterios de estatica.\r
\r
### Por que es incorrecto\r
Un cuerpo extendido puede cumplir sumF = 0 y aun asi girar si la sumatoria de momentos no es cero.\r
\r
### Senal de deteccion\r
Si el problema involucra barras, placas o apoyos separados, pregunta explicitamente por torque neto.\r
\r
### Mini-ejemplo\r
Una regla apoyada en dos puntos puede no trasladarse y aun asi empezar a rotar.\r
\r
### Corrección conceptual\r
Distingue equilibrio traslacional de equilibrio rotacional. Usa el leaf de momentos cuando corresponda.\r
\r
## Errores de interpretación\r
\r
### Error 8: Extrapolar fuera del dominio de validez\r
\r
### Por qué parece correcto\r
Una vez aprendido un metodo, es natural querer usarlo en todo contexto.\r
\r
### Por que es incorrecto\r
Si hay friccion fuerte, aceleracion o efectos dinamicos dominantes, el modelo de equilibrio simple pierde capacidad explicativa.\r
\r
### Senal de deteccion\r
Mira residuales sistematicos y contradicciones experimentales repetidas.\r
\r
### Mini-ejemplo\r
Si siempre aparece residuo horizontal en la misma direccion, probablemente falta modelar friccion.\r
\r
### Corrección conceptual\r
Cuando conviene cambiar de modelo, cambia sin forzar resultados: incorpora friccion, momentos o dinamica segun el caso.\r
\r
### Error 9: Entregar solo números sin interpretación física\r
\r
### Por qué parece correcto\r
En evaluaciones rapidas, llegar a un valor numerico parece suficiente.\r
\r
### Por que es incorrecto\r
Sin interpretacion no sabes si el resultado tiene sentido causal, de escala y de signo.\r
\r
### Senal de deteccion\r
Si no puedes explicar que fuerza compensa a cual y por que, tu solucion esta incompleta.\r
\r
### Mini-ejemplo\r
Reportar solo "[[T]] = valor" sin describir compensacion vertical deja la conclusion fisica incompleta.\r
\r
### Corrección conceptual\r
Cierra cada ejercicio con tres frases: estado del sistema, mecanismo dominante y limite de validez del resultado.\r
\r
## Regla de autocontrol rápido\r
\r
1. Verifica unidades en cada ecuacion de eje.\r
2. Revisa signo y direccion de cada componente.\r
3. Comprueba que las dos sumatorias cierran dentro de tolerancia.\r
4. Evalua si el problema exige tambien balance de momentos.\r
5. Explica fisicamente el resultado antes de darlo por final.\r
\r
Aplicar esta rutina reduce la mayoria de errores recurrentes en equilibrio traslacional.\r
`;export{e as default};
