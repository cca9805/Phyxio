const e=`## Errores conceptuales\r
\r
### Error 1: Mezclar traslación y rotación\r
\r
**Por qué parece correcto**\r
La analogía lineal-angular invita a sustituir símbolos similares.\r
\r
**Por qué es incorrecto**\r
Las magnitudes lineales y angulares tienen dimensiones distintas y necesitan una relación física.\r
\r
**Señal de detección**\r
Aparecen unidades incompatibles o se usa radio sin justificarlo.\r
\r
**Corrección conceptual**\r
Primero decide si describes avance, giro o rodadura.\r
\r
**Mini-ejemplo de contraste**\r
Usar\r
\r
{{f:condicion_rodadura_puente}}\r
\r
 da unidades imposibles; usar\r
\r
{{f:condicion_rodadura_puente}}\r
\r
recupera velocidad lineal.\r
\r
## Errores de modelo\r
\r
### Error 1: Suponer rodadura sin comprobar contacto\r
\r
**Por qué parece correcto**\r
Muchos problemas de ruedas la usan por defecto.\r
\r
**Por qué es incorrecto**\r
La condición sin deslizamiento exige contacto estático compatible.\r
\r
**Señal de detección**\r
El rozamiento requerido supera lo razonable o el enunciado habla de patinar.\r
\r
**Corrección conceptual**\r
Declara si hay o no deslizamiento antes de calcular.\r
\r
**Mini-ejemplo de contraste**\r
Una rueda bloqueada en hielo no cumple\r
\r
{{f:condicion_rodadura_puente}}\r
\r
.\r
\r
## Errores matemáticos\r
\r
### Error 1: Usar grados como radianes\r
\r
**Por qué parece correcto**\r
Ambos miden ángulo.\r
\r
**Por qué es incorrecto**\r
Las relaciones diferenciales de rotación usan radianes.\r
\r
**Señal de detección**\r
Resultados inflados por factores cercanos a 57.3.\r
\r
**Corrección conceptual**\r
Convierte a radianes antes de derivar o integrar.\r
\r
**Mini-ejemplo de contraste**\r
90 no equivale a pi/2 en una fórmula diferencial.\r
\r
## Errores de interpretación\r
\r
### Error 1: Leer el gráfico como decoración\r
\r
**Por qué parece correcto**\r
El cálculo parece suficiente.\r
\r
**Por qué es incorrecto**\r
En Phyxio el gráfico valida el significado físico del resultado.\r
\r
**Señal de detección**\r
El resultado no se puede localizar visualmente.\r
\r
**Corrección conceptual**\r
El gráfico debe responder a la pregunta física central.\r
\r
**Mini-ejemplo de contraste**\r
Una curva creciente con aceleración negativa indica error de signo.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar, comprueba: modelo, unidades, signo, orden de magnitud y correspondencia gráfica.\r
\r
En este leaf la regla se concreta así: identifica el avance del centro, identifica el giro, declara el radio y comprueba el contacto. Si falta una de esas piezas, no hay puente físico entre traslación y rotación. Usar la condición de rodadura sin justificar el no deslizamiento es un error de modelo, no solo un despiste algebraico.\r
\r
También hay que leer el gráfico. El centro debe avanzar con [[v_cm]], la rueda debe girar con [[omega]] y el punto de contacto debe poder interpretarse como instantáneamente quieto. Si el dibujo no permite esa lectura, conviene cambiar de modelo antes de aceptar la fórmula.\r
\r
Cuando este error se arrastra a hojas posteriores, aparecen fallos más grandes: se reparte mal [[K_total]], se interpreta mal [[E_total]] o se atribuye a [[tau]] una función que en realidad pertenece a la restricción geométrica. Por eso conviene corregir aquí la lectura de radio, contacto y giro.\r
\r
Un control adicional es verbalizar qué ocurriría si se elimina el contacto. Si la rueda siguiera girando igual pero el centro dejara de avanzar de forma compatible, entonces la relación de rodadura no era una identidad universal. Era una condición física. Esta frase ayuda a detectar respuestas que solo repiten símbolos.\r
\r
También hay errores de signo. Si se elige avance positivo hacia la derecha, el sentido positivo de giro debe elegirse de forma coherente. Un signo opuesto no siempre significa que la física sea imposible, pero sí exige explicar la convención. Sin esa explicación, el gráfico y la fórmula pueden parecer contradictorios.`;export{e as default};
