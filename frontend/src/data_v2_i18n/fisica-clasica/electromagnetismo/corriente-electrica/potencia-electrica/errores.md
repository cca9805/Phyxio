## Errores conceptuales


### Error 1: Confundir [[potencia_electrica]] con [[energia_electrica]]
#### Por que parece correcto
Ambas magnitudes aparecen juntas en problemas de consumo y ambas se relacionan con energia. En una lectura superficial, el estudiante asume que son nombres distintos de la misma idea.
#### Por que es incorrecto
[[potencia_electrica]] representa rapidez de transferencia energetica y [[energia_electrica]] representa acumulacion en un intervalo. Igual energia acumulada puede venir de perfiles de potencia muy distintos.
#### Senal de deteccion
La solucion compara aparatos solo por watt-hora y omite explicar si hubo picos de potencia relevantes para seguridad termica.
#### Correccion conceptual
Forzar siempre dos frases separadas: una frase para tasa y otra para acumulacion. Luego vincularlas al intervalo temporal explicitamente.
#### Mini-ejemplo
Dos cargas consumen la misma [[energia_electrica]] diaria. La carga A opera suave todo el dia; la carga B concentra la demanda en minutos con [[potencia_electrica]] alta. La B puede exigir cableado mas robusto pese a igual energia total.

## Errores de modelo

**Por qué parece correcto**

Control 1: En Potencia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

**Mini-ejemplo de contraste**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.


### Error 1: Aplicar forma resistiva fuera de regimen resistivo
#### Por que parece correcto
La expresion resistiva suele ser corta y familiar, por eso se reutiliza automaticamente sin revisar condiciones fisicas.
#### Por que es incorrecto
Si la carga no es predominantemente resistiva, la equivalencia simple entre variables puede romperse y la estimacion de [[potencia_electrica]] perder validez.
#### Senal de deteccion
El resultado no coincide con mediciones directas de [[tension_electrica]] e [[corriente_electrica]] o el calentamiento observado es incompatible con el calculo.
#### Correccion conceptual
Empezar desde medicion directa en el elemento y usar forma resistiva solo cuando [[resistencia_electrica]] efectiva este justificada en el regimen de trabajo.
#### Mini-ejemplo
Una carga conmutada presenta corriente pulsante. Aplicar un esquema resistivo unico subestima picos termicos y lleva a una conclusion optimista.

## Errores matemáticos

**Por qué parece correcto**

Control 6: En Potencia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Por qué es incorrecto**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Señal de detección**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

**Corrección conceptual**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Mini-ejemplo de contraste**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.


### Error 1: Mezcla de unidades de [[tiempo]]
#### Por que parece correcto
Minutos y horas son unidades cotidianas, y al estudiante le parece natural sustituirlas sin conversion previa.
#### Por que es incorrecto
Al trabajar en SI para energia en joule, usar minutos u horas introduce factores de escala que distorsionan el valor final.
#### Senal de deteccion
La solucion reporta cifras de energia desproporcionadas para el contexto o cambia de unidad sin justificar conversion.
#### Correccion conceptual
Fijar una convencion unica de unidades al inicio y documentar conversion temporal antes de sustituir datos.
#### Mini-ejemplo
Con la misma [[potencia_electrica]], usar una hora como si fueran segundos multiplica artificialmente la energia y puede simular un consumo imposible.

## Errores de interpretación

**Por qué parece correcto**

Control 11: En Potencia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Por qué es incorrecto**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

**Señal de detección**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Corrección conceptual**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Mini-ejemplo de contraste**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.


### Error 1: Concluir solo desde el promedio
#### Por que parece correcto
El promedio resume datos y simplifica el reporte, por eso parece suficiente para cerrar el problema.
#### Por que es incorrecto
Un promedio moderado puede ocultar picos que comprometen limites termicos, protecciones y vida util.
#### Senal de deteccion
La interpretacion final no menciona maximos, transitorios ni comparacion con umbrales de seguridad.
#### Correccion conceptual
Complementar siempre la lectura promedio con un chequeo de picos y con la razon pico sobre promedio cuando haya dinamica variable.
#### Mini-ejemplo
Una carga con promedio aceptable muestra picos repetidos de arranque; el componente falla antes de lo esperado por esfuerzo termico ciclico.

## Regla de autocontrol rápido

1. Pregunta minima: estoy reportando [[potencia_electrica]] o [[energia_electrica]]?
2. Verificacion de modelo: la carga es realmente resistiva en este regimen?
3. Verificacion numerica: unidades coherentes, redondeo final y control dimensional.
4. Verificacion fisica: potencia por debajo del limite nominal con margen razonable.
5. Verificacion didactica: la conclusion explica causalidad, no solo aritmetica.

**Por qué parece correcto**

Control 16: En Potencia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

**Por qué es incorrecto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Señal de detección**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Corrección conceptual**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Mini-ejemplo de contraste**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.