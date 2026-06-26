## Errores conceptuales


### Error 1: creer que amplitud y valor eficaz son equivalentes
Por que parece correcto:
Ambas magnitudes usan voltios o amperios y muchas veces aparecen juntas en tablas.

Senal de deteccion:
Se usa [[amplitud_de_tension]] directamente donde el problema pide consumo energético o potencia media.

Mini-ejemplo de contraste:
Una señal puede tener [[amplitud_de_tension]] alta y aun así requerir convertir a [[tension_eficaz]] para evaluar [[potencia_activa]].

Correccion conceptual:
[[amplitud_de_tension]] describe pico instantáneo. [[tension_eficaz]] describe equivalencia energética. No son intercambiables.

**Por qué parece correcto**

Control 1: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: tratar [[phi]] como dato decorativo
Por que parece correcto:
El enfoque inicial suele centrarse en amplitud y [[frecuencia]], dejando fase al final.

Senal de deteccion:
La potencia activa se discute sin mencionar [[phi]] ni su impacto causal.

Mini-ejemplo de contraste:
Con [[tension_eficaz]] e [[corriente_eficaz]] fijos, cambiar [[phi]] cambia [[potencia_activa]] de forma significativa.

Correccion conceptual:
[[phi]] organiza la transferencia útil en AC y debe entrar explícitamente en la lectura física.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: asumir senoide pura en señales distorsionadas
Por que parece correcto:
Las fórmulas básicas son simples y producen resultados rápidos.

Senal de deteccion:
Se aplica la conversión estándar de pico a RMS sin revisar forma de onda.

Mini-ejemplo de contraste:
Si el osciloscopio muestra recorte o armónicos fuertes, la conversión ideal deja de ser exacta.

Correccion conceptual:
Verifica dominancia sinusoidal antes de aplicar relaciones de modelo mínimo.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: usar relaciones temporales sin control de unidad
Por que parece correcto:
Frecuencia y [[frecuencia]] angular parecen casi la misma variable.

Senal de deteccion:
Los ciclos temporales no coinciden con medición observada.

Mini-ejemplo de contraste:
Sustituir [[omega]] por [[frecuencia]] sin factor 2π desplaza toda la escala temporal.

Correccion conceptual:
Mantén explícita la conversión entre [[frecuencia]] y [[omega]] en cada paso.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: escribir período con fórmula incorrecta
Por que parece correcto:
La presencia de 2π en expresiones angulares induce confusión por analogía.

Senal de deteccion:
[[periodo]] calculado no coincide con reciprocidad esperada frente a [[frecuencia]].

Mini-ejemplo de contraste:
Con 50 Hz, el período correcto es 0.02 s, no 0.1256 s.

Correccion conceptual:
Usa siempre la relación inversa directa entre [[frecuencia]] y período.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: omitir factor de fase en potencia activa
Por que parece correcto:
Multiplicar [[tension_eficaz]] por [[corriente_eficaz]] parece suficiente cuando la carga luce "estable".

Senal de deteccion:
Se reporta [[potencia_activa]] sin justificación del desfase.

Mini-ejemplo de contraste:
Para igual [[tension_eficaz]] e [[corriente_eficaz]], potencia activa disminuye cuando aumenta [[phi]].

Correccion conceptual:
Incluye el factor trigonométrico asociado a [[phi]] en cualquier cálculo de [[potencia_activa]].

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: mezclar descripción temporal y descripción energética
Por que parece correcto:
La señal puede visualizarse bien aunque el balance energético esté mal interpretado.

Senal de deteccion:
Conclusiones sobre rendimiento se basan solo en forma de [[v_t]].

Mini-ejemplo de contraste:
Una forma temporal similar puede tener distinta potencia útil por variación de fase.

Correccion conceptual:
Conecta siempre lectura temporal con [[tension_eficaz]], [[corriente_eficaz]] y [[potencia_activa]].

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: ignorar trazabilidad entre instrumentos
Por que parece correcto:
Se asume que todos los equipos miden "la misma tensión".

Senal de deteccion:
No se distingue entre lectura de osciloscopio y lectura RMS.

Mini-ejemplo de contraste:
Osciloscopio reporta picos; medidor RMS reporta equivalencia energética.

Correccion conceptual:
Asigna cada medición a su magnitud física antes de comparar resultados.

## Regla de autocontrol rápido

Antes de cerrar una resolución, responde: ¿etiqueté cada dato como instantáneo, pico o eficaz?, ¿[[frecuencia]] y [[omega]] están convertidas con coherencia?, ¿[[periodo]] es recíproco de [[frecuencia]]?, ¿incluí [[phi]] al evaluar [[potencia_activa]]? Si una respuesta falla, la conclusión no es confiable.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo [[tiempo]]; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Magnitudes alternas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.