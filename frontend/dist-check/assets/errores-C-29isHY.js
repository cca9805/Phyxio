const e=`# Errores frecuentes en energía en rodadura\r
\r
## Errores conceptuales\r
\r
### Error 1: mezclar traslación y rotación como si fueran lo mismo\r
**Por qué parece correcto:** El cuerpo avanza y gira a la vez, y visualmente parece un único movimiento.\r
**Por qué es incorrecto:** [[K_total]] tiene una parte con [[m]] y [[v_cm]] y otra con [[I]] y [[omega]]. Cada término mide una forma distinta de movimiento.\r
**Señal de detección:** El resultado solo usa velocidad lineal o solo velocidad angular.\r
**Corrección conceptual:** Escribir siempre las dos contribuciones antes de simplificar con [[R]].\r
**Mini-ejemplo de contraste:** Un aro y un disco con igual [[m]], [[R]] y [[v_cm]] no tienen la misma energía porque sus [[I]] son distintos.\r
\r
### Error 2: creer que rodadura implica automáticamente no deslizamiento\r
**Por qué parece correcto:** En lenguaje cotidiano una rueda que se mueve se dice que rueda.\r
**Por qué es incorrecto:** En física, rodadura pura exige que el contacto no patine y que [[v_cm]] sea coherente con [[R]] y [[omega]].\r
**Señal de detección:** La marca de contacto resbala o los datos no cumplen la relación cinemática.\r
**Corrección conceptual:** Validar la condición de contacto antes de sustituir.\r
**Mini-ejemplo de contraste:** Un neumático bloqueado se desplaza, pero no cumple rodadura pura; su energía se disipa en calor.\r
\r
## Errores de modelo\r
\r
### Error 3: olvidar pérdidas al haber patinaje\r
**Por qué parece correcto:** El balance ideal con [[E_total]] parece conservarse.\r
**Por qué es incorrecto:** El deslizamiento transforma parte de la energía en calor y rompe la condición ideal.\r
**Señal de detección:** La velocidad final medida es menor que la predicha por conservación ideal.\r
**Corrección conceptual:** Añadir energía disipada o trabajo de rozamiento.\r
**Mini-ejemplo de contraste:** Si una bola patina al arrancar, no toda la energía potencial acaba en [[K_total]].\r
\r
### Error 4: usar un momento de inercia de eje equivocado\r
**Por qué parece correcto:** El valor de [[I]] aparece en una tabla y se sustituye directamente.\r
**Por qué es incorrecto:** [[I]] debe pertenecer al eje central de giro usado en la rodadura.\r
**Señal de detección:** El reparto entre energía traslacional y rotacional resulta imposible o no coincide con el tipo de cuerpo.\r
**Corrección conceptual:** Revisar eje, geometría y, si procede, aplicar ejes paralelos.\r
**Mini-ejemplo de contraste:** Una varilla no tiene el mismo [[I]] alrededor de su centro que alrededor de un extremo.\r
\r
## Errores matemáticos\r
\r
### Error 5: usar diámetro en lugar de radio\r
**Por qué parece correcto:** El dato geométrico visible suele ser el ancho total de la rueda.\r
**Por qué es incorrecto:** La condición usa [[R]], no el diámetro.\r
**Señal de detección:** [[omega]] calculada sale a la mitad o al doble de lo esperable.\r
**Corrección conceptual:** Convertir diámetro a radio antes de usar la restricción.\r
**Mini-ejemplo de contraste:** Con diámetro \`0.6 m\`, el radio correcto es \`0.3 m\`, no \`0.6 m\`.\r
\r
### Error 6: mezclar grados y radianes en [[phi]] o [[theta]]\r
**Por qué parece correcto:** Los ángulos [[phi]] y [[theta]] se escriben con números familiares.\r
**Por qué es incorrecto:** Las funciones trigonométricas y el trabajo angular exigen unidades coherentes.\r
**Señal de detección:** La componente de [[g]] o el trabajo por [[tau]] no tiene escala plausible.\r
**Corrección conceptual:** Declarar modo angular y convertir antes de calcular.\r
**Mini-ejemplo de contraste:** \`30°\` no es \`30 rad\`; usarlo así destruye el balance de [[E_total]].\r
\r
## Errores de interpretación\r
\r
### Error 7: llamar energía total a la energía cinética\r
**Por qué parece correcto:** [[K_total]] ya suma dos términos y parece completa.\r
**Por qué es incorrecto:** [[E_total]] puede incluir energía potencial y pérdidas; [[K_total]] solo es cinética.\r
**Señal de detección:** En una rampa no aparece ninguna referencia a altura, [[g]] o [[phi]].\r
**Corrección conceptual:** Nombrar con precisión si se habla de cinética total o mecánica total.\r
**Mini-ejemplo de contraste:** En la parte alta de una rampa puede haber [[E_total]] grande aunque [[K_total]] sea cero.\r
\r
### Error 8: leer el gráfico como decoración\r
**Por qué parece correcto:** El gráfico parece solo una ayuda visual.\r
**Por qué es incorrecto:** En esta hoja debe mostrar el reparto entre traslación y rotación.\r
**Señal de detección:** La suma de barras no coincide con [[K_total]].\r
**Corrección conceptual:** Comprobar que las contribuciones visuales cierran el balance.\r
**Mini-ejemplo de contraste:** Si la barra rotacional aumenta al cambiar [[I]], la barra total también debe reflejarlo.\r
\r
## Regla de autocontrol rápido\r
\r
Comprueba cinco cosas: el contacto no desliza, [[R]] es realmente radio, [[I]] corresponde al eje central, [[K_total]] suma dos términos y [[E_total]] solo se usa cuando hay potencial o pérdidas declaradas. Si además aparecen [[a_cm]], [[alpha]], [[tau]] o [[theta]], verifica que pertenecen al modelo y no son datos sobrantes.`;export{e as default};
