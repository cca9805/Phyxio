## Errores conceptuales


### Error 1: Confundir el interruptor con una proteccion activa

#### Por que parece correcto

El interruptor y el magnetotermico tienen aspecto similar y estan ambos en el cuadro electrico. Ambos permiten cortar el circuito. Muchos usuarios los tratan como dispositivos equivalentes.

#### Por que es incorrecto

El interruptor es un dispositivo de maniobra: abre y cierra el circuito manualmente. No detecta [[corriente_de_maniobra]] excesiva ni actua automaticamente. Un interruptor con [[perdida_resistiva_en_on]] elevada no activa ningun mecanismo de proteccion.

#### Senal de deteccion

El alumno dice que apagando el interruptor el riesgo desaparece. El riesgo no desaparece al apagar: el contacto degradado con [[resistencia_en_estado_on]] alta seguira causando [[perdida_resistiva_en_on]] elevada cada vez que se encienda.

#### Correccion conceptual

El interruptor controla (maniobra manual); el magnetotermico protege (actuacion automatica). La solucion al calentamiento del interruptor es sustituirlo, no cambiar el habito de uso.

#### Mini-ejemplo de contraste

Incorrecto: interruptor caliente implica que hay que usarlo menos. Correcto: interruptor caliente con [[perdida_resistiva_en_on]] > 5 W implica que hay que sustituirlo independientemente de la frecuencia de uso.

---

**Por qué parece correcto**

Control 1: En Interruptores, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

### Error 2: Asumir que todos los interruptores son equivalentes

#### Por que parece correcto

Todos los interruptores tienen la misma funcion basica: abrir y cerrar el circuito. El alumno asume que si uno funciona mecanicamente, es adecuado para cualquier carga.

#### Por que es incorrecto

Un interruptor disenado para [[corriente_de_maniobra]] = 6 A operando con [[corriente_de_maniobra]] = 10 A tiene [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] mucho mayor. Ademas, la vida util en maniobras depende de la corriente de carga y del tipo de carga (resistiva o inductiva).

#### Senal de deteccion

El alumno sustituye un interruptor averiado por otro de menor calibre sin verificar [[corriente_de_maniobra]] de la carga.

#### Correccion conceptual

Verificar que [[corriente_de_maniobra]] nominal del interruptor sea mayor o igual que [[corriente_de_maniobra]] de la carga. Usar siempre la corriente maxima de la carga para dimensionar el interruptor.

#### Mini-ejemplo de contraste

Incorrecto: cualquier interruptor de 10 A sirve para cualquier carga. Correcto: verificar que [[corriente_de_maniobra]] de la carga sea menor que el nominal del interruptor y calcular [[perdida_resistiva_en_on]] para el [[resistencia_en_estado_on]] esperado.

---

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Interruptores, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

### Error 3: Aplicar el modelo estatico a cargas inductivas

#### Por que parece correcto

La formula [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] no menciona el tipo de carga. El alumno la aplica directamente con [[corriente_de_maniobra]] nominal sin considerar la naturaleza inductiva.

#### Por que es incorrecto

Las cargas inductivas tienen corriente de arranque de 4-8 veces [[corriente_de_maniobra]] nominal durante transitorios breves. El modelo estatico usa [[corriente_de_maniobra]] nominal y subestima la disipacion real durante los arranques. Ademas, el ciclado frecuente genera arcos que degradan [[resistencia_en_estado_on]] con el tiempo.

#### Senal de deteccion

El alumno calcula [[perdida_resistiva_en_on]] = 0,6 W para un termostato de bomba con [[corriente_de_maniobra]] = 3,5 A y concluye que no hay riesgo, sin considerar la corriente de arranque ni el numero de maniobras diarias.

#### Correccion conceptual

Identificar primero el tipo de carga. Para carga inductiva con ciclado frecuente, el modelo estatico es insuficiente. El parametro diagnostico de vida util es el numero de operaciones, no [[perdida_resistiva_en_on]] estatica.

#### Mini-ejemplo de contraste

Incorrecto: calcular [[perdida_resistiva_en_on]] con [[corriente_de_maniobra]] nominal para una bomba y concluir que el interruptor es adecuado. Correcto: estimar la corriente de arranque y evaluar si el interruptor esta disenado para ese perfil de carga.

---

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Interruptores, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

### Error 4: Ignorar [[perdida_resistiva_en_on]] porque [[resistencia_en_estado_on]] es pequena

#### Por que parece correcto

[[resistencia_en_estado_on]] tipica de un interruptor (0,01-0,1 ohm) es mucho menor que la resistencia de la carga. Parece razonable despreciarla.

#### Por que es incorrecto

[[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]]. Con [[corriente_de_maniobra]] = 10 A y [[resistencia_en_estado_on]] = 0,05 ohm: [[perdida_resistiva_en_on]] = 5 W. No es despreciable para el diagnostico termico del contacto aunque sea inapreciable para el balance de potencia del circuito.

#### Senal de deteccion

El alumno calcula [[perdida_resistiva_en_on]] con [[corriente_de_maniobra]] = 1 A (iluminacion) y generaliza que [[perdida_resistiva_en_on]] siempre es pequeña para todos los interruptores.

#### Correccion conceptual

Calcular siempre [[perdida_resistiva_en_on]] para la corriente real de la carga. La escala de [[perdida_resistiva_en_on]] depende de [[corriente_de_maniobra]]^2, no de [[resistencia_en_estado_on]] sola. Un mismo [[resistencia_en_estado_on]] puede ser inofensivo para iluminacion y peligroso para calefaccion.

#### Mini-ejemplo de contraste

Incorrecto: [[resistencia_en_estado_on]] = 0,05 ohm es despreciable. Correcto: con [[corriente_de_maniobra]] = 10 A, [[perdida_resistiva_en_on]] = 5 W — umbral de riesgo termico del contacto.

---

## Errores matemáticos

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Interruptores, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

### Error 5: Olvidar el cuadrado en [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]]

#### Por que parece correcto

En la ley de Ohm, V = [[corriente_de_maniobra]] x R, la relacion es lineal. El alumno aplica la misma logica a la potencia y calcula [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]] x [[resistencia_en_estado_on]].

#### Por que es incorrecto

La potencia disipada en una resistencia es [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]], no [[corriente_de_maniobra]] x [[resistencia_en_estado_on]]. La diferencia no es solo numerica: las unidades de [[corriente_de_maniobra]] x [[resistencia_en_estado_on]] son voltios, no vatios. El error es detectable dimensionalmente.

#### Senal de deteccion

El alumno obtiene [[perdida_resistiva_en_on]] en voltios, o bien calcula un valor 10 veces menor del correcto.

#### Correccion conceptual

Aplicar siempre la ley de Joule: la potencia disipada en [[resistencia_en_estado_on]] crece con el cuadrado de [[corriente_de_maniobra]]. Verificar dimensiones: amperios al cuadrado multiplicado por ohmios da vatios, no voltios.

#### Mini-ejemplo de contraste

Incorrecto: [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]] x [[resistencia_en_estado_on]] = 8,7 x 0,08 = 0,70 (en voltios, no vatios). Correcto: [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] = 8,7 al cuadrado multiplicado por 0,08 = 6,05 W.

---

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.

### Error 6: Confundir [[resistencia_en_estado_on]] con la resistencia de la carga

#### Por que parece correcto

Ambas son resistencias en el mismo circuito en serie. El alumno puede confundir la resistencia del interruptor con la resistencia equivalente del equipo conectado.

#### Por que es incorrecto

[[resistencia_en_estado_on]] es la resistencia de los contactos del interruptor. La resistencia de la carga es la resistencia equivalente del equipo. Son en serie pero de ordenes de magnitud muy diferentes: la carga tiene decenas o cientos de ohmios; [[resistencia_en_estado_on]] tiene centesimas o decimas de ohm.

#### Senal de deteccion

El alumno calcula [[corriente_de_maniobra]] incluyendo [[resistencia_en_estado_on]] en el denominador, lo que indica confusion conceptual aunque el efecto sea despreciable numericamente.

#### Correccion conceptual

Calcular [[corriente_de_maniobra]] = [[potencia_de_la_carga]]/[[tension_de_alimentacion]] ignorando [[resistencia_en_estado_on]]. Luego calcular [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] como calculo separado.

#### Mini-ejemplo de contraste

Incorrecto: [[corriente_de_maniobra]] = [[tension_de_alimentacion]] dividido entre la suma de R_carga y [[resistencia_en_estado_on]]. Correcto: [[corriente_de_maniobra]] = [[potencia_de_la_carga]] dividido entre [[tension_de_alimentacion]], y por separado [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]].

---

## Errores de interpretación

**Por qué parece correcto**

Control 21: En Interruptores, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 21.

**Por qué es incorrecto**

Control 22: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 22.

**Señal de detección**

Control 23: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 23.

**Corrección conceptual**

Control 24: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 24.

### Error 7: Interpretar [[energia_disipada_en_conduccion]] grande como peligroso sin contexto

#### Por que parece correcto

Una energia elevada parece indicar un riesgo alto. El alumno ve [[energia_disipada_en_conduccion]] = 100 000 J y lo interpreta como calentamiento peligroso.

#### Por que es incorrecto

El riesgo termico del contacto lo determina [[perdida_resistiva_en_on]] (la tasa de disipacion instantanea), no [[energia_disipada_en_conduccion]] (la energia acumulada). Con [[perdida_resistiva_en_on]] = 0,1 W, el contacto alcanza temperatura de equilibrio baja aunque [[energia_disipada_en_conduccion]] sea grande si [[t_on]] es largo.

#### Senal de deteccion

El alumno calcula [[energia_disipada_en_conduccion]] = 100 kJ para [[perdida_resistiva_en_on]] = 0,1 W operando 1000 horas y concluye que hay riesgo termico.

#### Correccion conceptual

Usar [[perdida_resistiva_en_on]] para diagnostico termico y [[energia_disipada_en_conduccion]] para analisis energetico. Son magnitudes complementarias con usos distintos.

#### Mini-ejemplo de contraste

Incorrecto: [[energia_disipada_en_conduccion]] = 100 000 J implica riesgo termico alto. Correcto: [[perdida_resistiva_en_on]] = 0,1 W implica temperatura de equilibrio baja, sin riesgo termico apreciable.

---

## Regla de autocontrol rápido

Para verificar rapidamente si el analisis de un interruptor es correcto:

1. Calcular [[corriente_de_maniobra]] = [[potencia_de_la_carga]]/[[tension_de_alimentacion]] — no incluir [[resistencia_en_estado_on]] en este paso.
2. Calcular [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]^2 x [[resistencia_en_estado_on]] — verificar que el resultado esta en vatios.
3. Comparar [[perdida_resistiva_en_on]] con los umbrales: menos de 1 W es seguro, entre 1 y 5 W hay que vigilar, mas de 5 W hay que sustituir.
4. Si la carga es inductiva o el interruptor cicla frecuentemente, el modelo estatico puede subestimar la degradacion real.
5. [[energia_disipada_en_conduccion]] sirve para analisis energetico, no para diagnostico termico. El diagnostico termico siempre se hace con [[perdida_resistiva_en_on]].

**Por qué parece correcto**

Control 25: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 25.

**Por qué es incorrecto**

Control 26: En Interruptores, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 26.

**Señal de detección**

Control 27: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 27.

**Corrección conceptual**

Control 28: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 28.