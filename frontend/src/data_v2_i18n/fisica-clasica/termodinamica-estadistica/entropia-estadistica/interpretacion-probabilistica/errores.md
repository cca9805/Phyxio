## Errores conceptuales


### Error 1: Pensar que un macroestado probable empuja al sistema
**Por qué parece correcto**
Porque los macrostados muy probables aparecen con frecuencia y parece natural imaginar una tendencia mecánica.

**Por qué es incorrecto**
La probabilidad no es una fuerza. [[probabilidad_macroestado]] mide una fracción de microestados compatibles dentro de [[numero_microestados_total]].

**Señal de detección**
El alumno dice que el estado final ocurre porque la entropía tira del sistema.

**Corrección conceptual**
Leer la probabilidad como peso estadístico: más [[numero_microestados_macro]] significa más maneras de verse igual, no una interacción nueva.

**Mini-ejemplo de contraste**
Un dado no cae en números altos por una fuerza hacia el seis; si un resultado agrupa más caras posibles, aparece más a menudo por conteo.


### Error 2: Confundir microestado y macroestado
**Por qué parece correcto**
Ambos describen el mismo sistema y se habla de estados en los dos niveles.

**Por qué es incorrecto**
Un microestado fija detalles microscópicos; un macroestado agrupa muchos microestados. [[numero_microestados_macro]] cuenta esa agrupación.

**Señal de detección**
El alumno usa [[numero_microestados_macro]] como si fuera una variable macroscópica directamente observable.

**Corrección conceptual**
Distinguir apariencia externa y configuraciones internas compatibles.

**Mini-ejemplo de contraste**
Dos gases con la misma presión pueden esconder repartos moleculares distintos; esos repartos son microestados.

## Errores de modelo


### Error 3: Comparar probabilidades con restricciones distintas
**Por qué parece correcto**
Las dos cantidades parecen ser probabilidades y ambas tienen el mismo formato numérico.

**Por qué es incorrecto**
[[probabilidad_inicial]] y [[probabilidad_final]] solo son comparables si comparten [[numero_microestados_total]] o un espacio accesible equivalente.

**Señal de detección**
El cálculo cambia energía, volumen o número de partículas entre estados sin redefinir el conjunto accesible.

**Corrección conceptual**
Antes de usar [[ratio_probabilidades]], comprobar que los dos macrostados pertenecen al mismo modelo.

**Mini-ejemplo de contraste**
Comparar una caja cerrada con otra conectada a un baño térmico mezcla reglas estadísticas.


### Error 4: Suponer equiprobabilidad fuera del equilibrio
**Por qué parece correcto**
El recuento simple es elegante y suele funcionar en ejercicios básicos.

**Por qué es incorrecto**
Si la dinámica favorece unas regiones o bloquea otras, no todos los microestados son igualmente accesibles.

**Señal de detección**
El sistema conserva memoria de una preparación inicial o tarda mucho en explorar estados posibles.

**Corrección conceptual**
Usar una distribución ponderada o un modelo dinámico cuando la equiprobabilidad no esté justificada.

**Mini-ejemplo de contraste**
Un gas recién liberado tras quitar una pared no explora al instante todo [[numero_microestados_total]].

## Errores matemáticos


### Error 5: Obtener una probabilidad mayor que uno
**Por qué parece correcto**
Al manipular cocientes grandes, puede olvidarse cuál es el numerador físico.

**Por qué es incorrecto**
[[numero_microestados_macro]] no puede superar [[numero_microestados_total]] si ambos están definidos correctamente.

**Señal de detección**
El resultado de [[probabilidad_macroestado]] supera 1 o aparece como porcentaje mayor que 100%.

**Corrección conceptual**
Revisar el recuento y comprobar que el total incluye al macroestado contado.

**Mini-ejemplo de contraste**
Si hay 200 microestados favorables entre 100 totales, el total está mal definido.


### Error 6: Tratar [[delta_entropia]] como si fuera el cociente directo
**Por qué parece correcto**
Las fórmulas conectan entropía y probabilidad, y el logaritmo puede pasar desapercibido.

**Por qué es incorrecto**
[[delta_entropia]] mide el cambio logarítmico de peso; [[ratio_probabilidades]] es el factor multiplicativo.

**Señal de detección**
El alumno suma entropías cuando debería comparar multiplicidades o exponentiar al invertir la relación.

**Corrección conceptual**
Mantener separadas la escala logarítmica y la escala de cocientes.

**Mini-ejemplo de contraste**
Un aumento pequeño en [[delta_entropia]] puede representar un gran cambio en [[ratio_probabilidades]].

## Errores de interpretación


### Error 7: Leer un macroestado raro como imposible
**Por qué parece correcto**
En sistemas macroscópicos, algunas probabilidades son tan pequeñas que parecen cero.

**Por qué es incorrecto**
Raro no significa prohibido. Si [[numero_microestados_macro]] es positivo, el macroestado tiene peso estadístico.

**Señal de detección**
El alumno afirma que un estado con baja [[probabilidad_macroestado]] no puede aparecer nunca.

**Corrección conceptual**
Distinguir imposibilidad física de improbabilidad práctica.

**Mini-ejemplo de contraste**
Todas las partículas en media caja es posible en principio, aunque sea extraordinariamente raro para muchas partículas.


### Error 8: Asignar dirección espacial al signo de [[delta_entropia]]
**Por qué parece correcto**
El símbolo Delta puede recordar desplazamientos o cambios orientados.

**Por qué es incorrecto**
El signo de [[delta_entropia]] indica aumento o disminución de peso estadístico, no movimiento hacia arriba, derecha o fuera.

**Señal de detección**
El alumno describe una [[delta_entropia]] positiva como una trayectoria geométrica.

**Corrección conceptual**
Interpretar el signo como comparación de multiplicidades entre estados.

**Mini-ejemplo de contraste**
Si [[numero_microestados_final]] es mayor que [[numero_microestados_inicial]], el signo habla de más multiplicidad final.

## Regla de autocontrol rápido

Comprueba siempre tres cosas: que los recuentos sean positivos, que [[probabilidad_macroestado]] esté entre cero y uno, y que [[ratio_probabilidades]] compare macrostados dentro del mismo espacio accesible.