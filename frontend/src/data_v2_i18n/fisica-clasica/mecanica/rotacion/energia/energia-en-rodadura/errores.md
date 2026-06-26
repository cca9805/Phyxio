# Errores frecuentes en energía en rodadura

## Errores conceptuales

### Error 1: mezclar traslación y rotación como si fueran lo mismo
**Por qué parece correcto:** El cuerpo avanza y gira a la vez, y visualmente parece un único movimiento.
**Por qué es incorrecto:** [[K_total]] tiene una parte con [[m]] y [[v_cm]] y otra con [[I]] y [[omega]]. Cada término mide una forma distinta de movimiento.
**Señal de detección:** El resultado solo usa velocidad lineal o solo velocidad angular.
**Corrección conceptual:** Escribir siempre las dos contribuciones antes de simplificar con [[R]].
**Mini-ejemplo de contraste:** Un aro y un disco con igual [[m]], [[R]] y [[v_cm]] no tienen la misma energía porque sus [[I]] son distintos.

### Error 2: creer que rodadura implica automáticamente no deslizamiento
**Por qué parece correcto:** En lenguaje cotidiano una rueda que se mueve se dice que rueda.
**Por qué es incorrecto:** En física, rodadura pura exige que el contacto no patine y que [[v_cm]] sea coherente con [[R]] y [[omega]].
**Señal de detección:** La marca de contacto resbala o los datos no cumplen la relación cinemática.
**Corrección conceptual:** Validar la condición de contacto antes de sustituir.
**Mini-ejemplo de contraste:** Un neumático bloqueado se desplaza, pero no cumple rodadura pura; su energía se disipa en calor.

## Errores de modelo

### Error 3: olvidar pérdidas al haber patinaje
**Por qué parece correcto:** El balance ideal con [[E_total]] parece conservarse.
**Por qué es incorrecto:** El deslizamiento transforma parte de la energía en calor y rompe la condición ideal.
**Señal de detección:** La velocidad final medida es menor que la predicha por conservación ideal.
**Corrección conceptual:** Añadir energía disipada o trabajo de rozamiento.
**Mini-ejemplo de contraste:** Si una bola patina al arrancar, no toda la energía potencial acaba en [[K_total]].

### Error 4: usar un momento de inercia de eje equivocado
**Por qué parece correcto:** El valor de [[I]] aparece en una tabla y se sustituye directamente.
**Por qué es incorrecto:** [[I]] debe pertenecer al eje central de giro usado en la rodadura.
**Señal de detección:** El reparto entre energía traslacional y rotacional resulta imposible o no coincide con el tipo de cuerpo.
**Corrección conceptual:** Revisar eje, geometría y, si procede, aplicar ejes paralelos.
**Mini-ejemplo de contraste:** Una varilla no tiene el mismo [[I]] alrededor de su centro que alrededor de un extremo.

## Errores matemáticos

### Error 5: usar diámetro en lugar de radio
**Por qué parece correcto:** El dato geométrico visible suele ser el ancho total de la rueda.
**Por qué es incorrecto:** La condición usa [[R]], no el diámetro.
**Señal de detección:** [[omega]] calculada sale a la mitad o al doble de lo esperable.
**Corrección conceptual:** Convertir diámetro a radio antes de usar la restricción.
**Mini-ejemplo de contraste:** Con diámetro `0.6 m`, el radio correcto es `0.3 m`, no `0.6 m`.

### Error 6: mezclar grados y radianes en [[phi]] o [[theta]]
**Por qué parece correcto:** Los ángulos [[phi]] y [[theta]] se escriben con números familiares.
**Por qué es incorrecto:** Las funciones trigonométricas y el trabajo angular exigen unidades coherentes.
**Señal de detección:** La componente de [[g]] o el trabajo por [[tau]] no tiene escala plausible.
**Corrección conceptual:** Declarar modo angular y convertir antes de calcular.
**Mini-ejemplo de contraste:** `30°` no es `30 rad`; usarlo así destruye el balance de [[E_total]].

## Errores de interpretación

### Error 7: llamar energía total a la energía cinética
**Por qué parece correcto:** [[K_total]] ya suma dos términos y parece completa.
**Por qué es incorrecto:** [[E_total]] puede incluir energía potencial y pérdidas; [[K_total]] solo es cinética.
**Señal de detección:** En una rampa no aparece ninguna referencia a altura, [[g]] o [[phi]].
**Corrección conceptual:** Nombrar con precisión si se habla de cinética total o mecánica total.
**Mini-ejemplo de contraste:** En la parte alta de una rampa puede haber [[E_total]] grande aunque [[K_total]] sea cero.

### Error 8: leer el gráfico como decoración
**Por qué parece correcto:** El gráfico parece solo una ayuda visual.
**Por qué es incorrecto:** En esta hoja debe mostrar el reparto entre traslación y rotación.
**Señal de detección:** La suma de barras no coincide con [[K_total]].
**Corrección conceptual:** Comprobar que las contribuciones visuales cierran el balance.
**Mini-ejemplo de contraste:** Si la barra rotacional aumenta al cambiar [[I]], la barra total también debe reflejarlo.

## Regla de autocontrol rápido

Comprueba cinco cosas: el contacto no desliza, [[R]] es realmente radio, [[I]] corresponde al eje central, [[K_total]] suma dos términos y [[E_total]] solo se usa cuando hay potencial o pérdidas declaradas. Si además aparecen [[a_cm]], [[alpha]], [[tau]] o [[theta]], verifica que pertenecen al modelo y no son datos sobrantes.