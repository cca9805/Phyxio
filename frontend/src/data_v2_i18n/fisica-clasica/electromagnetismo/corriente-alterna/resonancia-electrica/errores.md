## Errores conceptuales


### Error 1: pensar que resonancia es solo una frecuencia bonita
Por que parece correcto:
La mayoria de ejercicios escolares se detienen en calcular [[f0]].

Senal de deteccion:
Se reporta [[f0]] pero no se discuten [[factor_de_calidad]], [[ancho_de_banda]] ni limites de corriente.

Mini-ejemplo de contraste:
Dos circuitos pueden tener la misma [[f0]] y comportarse distinto si cambia [[resistencia_total_serie]].

Correccion conceptual:
Resonancia es posicion mas forma de respuesta, no solo posicion.

**Por qué parece correcto**

Control 1: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.


### Error 2: interpretar Q como eficiencia energetica
Por que parece correcto:
Q alta suena a "calidad alta" y se asocia intuitivamente a mejor rendimiento.

Senal de deteccion:
Se concluye que subir Q siempre mejora todo aspecto del sistema.

Mini-ejemplo de contraste:
Q alta mejora selectividad, pero reduce tolerancia a deriva y puede exigir control mas fino.

Correccion conceptual:
Trata [[factor_de_calidad]] como medida de selectividad y amortiguamiento, no como eficiencia global.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.


### Error 3: usar modelo ideal sin validar perdidas efectivas
Por que parece correcto:
La ecuacion base es simple y da resultados plausibles.

Senal de deteccion:
La corriente medida cerca de resonancia difiere de forma sistematica de la predicha.

Mini-ejemplo de contraste:
Si resistencia parasita y carga modifican [[resistencia_total_serie]] efectiva, el modelo minimo deja de cerrar.

Correccion conceptual:
Incluye resistencia equivalente real y revisa umbrales de validez.

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.


### Error 4: extrapolar respuesta resonante fuera de vecindad
Por que parece correcto:
Se aplica la misma intuicion de pico a cualquier frecuencia de barrido.

Senal de deteccion:
Se usan conclusiones de resonancia para regiones muy alejadas de [[f0]].

Mini-ejemplo de contraste:
Lejos de resonancia domina otra relacion de impedancia y la aproximacion de banda falla.

Correccion conceptual:
Declara rango de aplicacion antes de transferir conclusiones.

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.


### Error 5: confundir conversion angular y ordinaria
Por que parece correcto:
Ambas se llaman frecuencia en lenguaje informal.

Senal de deteccion:
Aparecen escalas imposibles al comparar calculo con medicion.

Mini-ejemplo de contraste:
Usar [[omega0]] como si fuera [[f0]] desplaza numericamente toda la sintonia.

Correccion conceptual:
Fija convencion de unidad al inicio y manten conversion explicita.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.


### Error 6: tratar ancho de banda como constante
Por que parece correcto:
Se memoriza [[ancho_de_banda]] como dato fijo una vez calculado.

Senal de deteccion:
Se cambia [[resistencia_total_serie]] o [[factor_de_calidad]] y se conserva el mismo [[ancho_de_banda]] sin justificacion.

Mini-ejemplo de contraste:
Si aumenta amortiguamiento, la banda efectiva se ensancha en general.

Correccion conceptual:
Actualiza [[ancho_de_banda]] cada vez que cambie selectividad del circuito.

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.


### Error 7: cerrar diseno sin verificar limite termico
Por que parece correcto:
La sintonia parece correcta y se asume que eso basta.

Senal de deteccion:
No se contrasta [[corriente_resonante]] con capacidad real de componente y proteccion.

Mini-ejemplo de contraste:
Un circuito puede estar bien sintonizado y aun asi operar fuera de margen seguro.

Correccion conceptual:
Integra respuesta resonante con validacion de seguridad electrica.

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.


### Error 8: ignorar deriva de parametros
Por que parece correcto:
Los valores nominales de hoja de datos se tratan como invariantes.

Senal de deteccion:
El prototipo se ajusta en banco pero pierde sintonia en operacion.

Mini-ejemplo de contraste:
Variacion termica de [[inductancia]] y [[capacitancia]] mueve [[f0]] y afecta [[ancho_de_banda]].

Correccion conceptual:
Incluye tolerancias y sensibilidad antes del cierre final.

## Regla de autocontrol rápido

Antes de validar el resultado, revisa cinco puntos: unidades coherentes, conversion entre [[omega0]] y [[f0]], consistencia entre [[factor_de_calidad]] y [[ancho_de_banda]], comparacion de [[corriente_resonante]] con limite termico, y dominio de validez del modelo usado.

**Por qué parece correcto**

Control 29: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 29.

**Por qué es incorrecto**

Control 30: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 30.

**Señal de detección**

Control 31: En Resonancia electrica, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 31.

**Corrección conceptual**

Control 32: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 32.