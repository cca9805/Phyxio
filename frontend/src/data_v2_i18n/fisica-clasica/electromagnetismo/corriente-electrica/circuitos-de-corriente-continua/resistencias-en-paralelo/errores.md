## Errores conceptuales


### Error 1: Tratar paralelo como serie
Por que parece correcto:
Se ve una lista de resistencias y se aplica la regla más recordada de suma directa.

Senal de deteccion:
[[resistencia_equivalente]] queda mayor que la menor rama activa.

Mini-ejemplo de contraste:
Con dos ramas de valor distinto, la red total debe conducir más que cada rama individual.

Correccion conceptual:
Usar suma de recíprocos o suma de conductancias según la representación elegida.

**Por qué parece correcto**

Control 1: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: Suponer corrientes iguales en todas las ramas
Por que parece correcto:
Se confunde igualdad de tensión con igualdad de corriente.

Senal de deteccion:
Se reporta [[corriente_de_rama_1]] igual a [[corriente_de_rama_2]] con [[resistencia_de_rama_1]] y [[resistencia_de_rama_2]] claramente diferentes.

Mini-ejemplo de contraste:
En ramas con resistencia diferente, la de menor resistencia debe absorber más corriente para la misma [[tension_comun_del_paralelo]].

Correccion conceptual:
Separar mentalmente reglas de serie y paralelo antes de comenzar cálculos.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: Incluir en el modelo una rama que no está conectada
Por que parece correcto:
El esquema teórico original tenía tres ramas y se mantiene sin revisar montaje real.

Senal de deteccion:
El balance de [[corriente_total]] no coincide con medición aun con unidades correctas.

Mini-ejemplo de contraste:
Si una rama está abierta, su corriente es nula y no debe contribuir al cierre total.

Correccion conceptual:
Actualizar topología efectiva antes de aplicar ecuaciones.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: Ignorar resistencia de cable cuando sí es relevante
Por que parece correcto:
Se asume que el cable siempre tiene impacto despreciable.

Senal de deteccion:
La diferencia entre predicción y medición supera el umbral aceptable de práctica.

Mini-ejemplo de contraste:
En corrientes altas y conductores largos, la caída en cable puede modificar reparto de ramas.

Correccion conceptual:
Cambiar a modelo extendido cuando conviene cambiar de modelo por impacto operativo.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: Mezclar ohm y kiloohm en una misma sustitución
Por que parece correcto:
Los números parecen razonables a simple vista y no se percibe la escala.

Senal de deteccion:
Corrientes de rama con órdenes de magnitud incompatibles con la fuente.

Mini-ejemplo de contraste:
Una rama de kiloohm bajo pocos voltios no puede producir corriente de amperios en régimen lineal.

Correccion conceptual:
Normalizar unidades antes de operar y verificar escala al final.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: Sumar corrientes sin convención de signo consistente
Por que parece correcto:
Se copia el resultado parcial de cada rama sin revisar referencia de sentido.

Senal de deteccion:
[[corriente_total]] cambia de valor según el orden de escritura de la suma.

Mini-ejemplo de contraste:
Con una única convención, el cierre nodal debe ser único y reproducible.

Correccion conceptual:
Fijar orientación de corrientes al inicio y mantenerla en todo el desarrollo.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: Concluir que una rama es segura solo por corriente moderada
Por que parece correcto:
Se observa una corriente no extrema y se omite análisis térmico local.

Senal de deteccion:
Componente caliente en rama con resistencia baja y ventilación deficiente.

Mini-ejemplo de contraste:
Dos ramas con corrientes cercanas pueden disipar diferente según resistencia y montaje.

Correccion conceptual:
Interpretar resultados de corriente junto con criterio térmico y de protección.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: Aceptar resultado numérico sin contraste de tendencia
Por que parece correcto:
La cuenta cierra y se toma como verdad final.

Senal de deteccion:
Agregar una rama conductora produce menor corriente total en el reporte.

Mini-ejemplo de contraste:
En paralelo pasivo, mayor conductancia total debe asociarse a mayor demanda de corriente para la misma tensión.

Correccion conceptual:
Incluir siempre chequeo de tendencia física además del chequeo algebraico.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio, confirma cuatro puntos: [[resistencia_equivalente]] menor que cada rama activa, suma de corrientes de rama coherente con [[corriente_total]], unidades homogéneas en toda sustitución y tendencia física consistente al agregar o retirar ramas.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Resistencias en paralelo, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.