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
{{f:aceleracion_rodadura_plano}}\r
\r
 da unidades imposibles; usar\r
\r
{{f:aceleracion_rodadura_plano}}\r
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
{{f:aceleracion_rodadura_plano}}\r
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
La regla completa añade una pregunta de método: ¿la incógnita pertenece a una causa, a una restricción o a un balance? Si la incógnita es [[a_cm]], no basta con copiar una relación de aceleración; hay que comprobar que [[I]], [[m]], [[R]], [[g]] y [[phi]] pertenecen al modelo. Si la incógnita es [[K_total]] o [[E_total]], el error típico es olvidar que la energía de rodadura se reparte entre avance y giro. Si aparece [[tau]], el DCL debe explicar qué fuerza lo produce.\r
\r
Otro error frecuente consiste en resolver por energía y después afirmar el sentido del rozamiento sin haber usado dinámica. La energía puede dar rapidez, pero no determina por sí sola una fuerza de contacto. También ocurre lo contrario: se escriben ecuaciones de fuerzas para hallar una rapidez final cuando el balance de energía era más corto y más transparente. La estrategia correcta no premia el método más largo, sino el que responde a la pregunta física.\r
\r
Un último control es gráfico. En el SVG debe verse la condición de rodadura, en el DCL deben verse peso, normal y rozamiento estático, y en el Coord debe verse cómo cambian la aceleración o la energía al variar parámetros. Si el cálculo dice que aumenta [[a_cm]] al aumentar [[I]] en el mismo plano, la lectura física contradice la fórmula. Si el cálculo conserva [[E_total]] durante un deslizamiento con disipación, el modelo está mal elegido.`;export{e as default};
