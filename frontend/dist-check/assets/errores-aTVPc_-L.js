const e=`# Errores frecuentes — Interruptores\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir el interruptor con una proteccion activa\r
\r
#### Por que parece correcto\r
\r
El interruptor y el magnetotermico tienen aspecto similar y estan ambos en el cuadro electrico. Ambos permiten cortar el circuito. Muchos usuarios los tratan como dispositivos equivalentes.\r
\r
#### Por que es incorrecto\r
\r
El interruptor es un dispositivo de maniobra: abre y cierra el circuito manualmente. No detecta [[I]] excesiva ni actua automaticamente. Un interruptor con [[P_on]] elevada no activa ningun mecanismo de proteccion.\r
\r
#### Senal de deteccion\r
\r
El alumno dice que apagando el interruptor el riesgo desaparece. El riesgo no desaparece al apagar: el contacto degradado con [[R_on]] alta seguira causando [[P_on]] elevada cada vez que se encienda.\r
\r
#### Correccion conceptual\r
\r
El interruptor controla (maniobra manual); el magnetotermico protege (actuacion automatica). La solucion al calentamiento del interruptor es sustituirlo, no cambiar el habito de uso.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: interruptor caliente implica que hay que usarlo menos. Correcto: interruptor caliente con [[P_on]] > 5 W implica que hay que sustituirlo independientemente de la frecuencia de uso.\r
\r
---\r
\r
### Error 2: Asumir que todos los interruptores son equivalentes\r
\r
#### Por que parece correcto\r
\r
Todos los interruptores tienen la misma funcion basica: abrir y cerrar el circuito. El alumno asume que si uno funciona mecanicamente, es adecuado para cualquier carga.\r
\r
#### Por que es incorrecto\r
\r
Un interruptor disenado para [[I]] = 6 A operando con [[I]] = 10 A tiene [[P_on]] = [[I]]^2 x [[R_on]] mucho mayor. Ademas, la vida util en maniobras depende de la corriente de carga y del tipo de carga (resistiva o inductiva).\r
\r
#### Senal de deteccion\r
\r
El alumno sustituye un interruptor averiado por otro de menor calibre sin verificar [[I]] de la carga.\r
\r
#### Correccion conceptual\r
\r
Verificar que [[I]] nominal del interruptor sea mayor o igual que [[I]] de la carga. Usar siempre la corriente maxima de la carga para dimensionar el interruptor.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: cualquier interruptor de 10 A sirve para cualquier carga. Correcto: verificar que [[I]] de la carga sea menor que el nominal del interruptor y calcular [[P_on]] para el [[R_on]] esperado.\r
\r
---\r
\r
## Errores de modelo\r
\r
### Error 3: Aplicar el modelo estatico a cargas inductivas\r
\r
#### Por que parece correcto\r
\r
La formula [[P_on]] = [[I]]^2 x [[R_on]] no menciona el tipo de carga. El alumno la aplica directamente con [[I]] nominal sin considerar la naturaleza inductiva.\r
\r
#### Por que es incorrecto\r
\r
Las cargas inductivas tienen corriente de arranque de 4-8 veces [[I]] nominal durante transitorios breves. El modelo estatico usa [[I]] nominal y subestima la disipacion real durante los arranques. Ademas, el ciclado frecuente genera arcos que degradan [[R_on]] con el tiempo.\r
\r
#### Senal de deteccion\r
\r
El alumno calcula [[P_on]] = 0,6 W para un termostato de bomba con [[I]] = 3,5 A y concluye que no hay riesgo, sin considerar la corriente de arranque ni el numero de maniobras diarias.\r
\r
#### Correccion conceptual\r
\r
Identificar primero el tipo de carga. Para carga inductiva con ciclado frecuente, el modelo estatico es insuficiente. El parametro diagnostico de vida util es el numero de operaciones, no [[P_on]] estatica.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: calcular [[P_on]] con [[I]] nominal para una bomba y concluir que el interruptor es adecuado. Correcto: estimar la corriente de arranque y evaluar si el interruptor esta disenado para ese perfil de carga.\r
\r
---\r
\r
### Error 4: Ignorar [[P_on]] porque [[R_on]] es pequena\r
\r
#### Por que parece correcto\r
\r
[[R_on]] tipica de un interruptor (0,01-0,1 ohm) es mucho menor que la resistencia de la carga. Parece razonable despreciarla.\r
\r
#### Por que es incorrecto\r
\r
[[P_on]] = [[I]]^2 x [[R_on]]. Con [[I]] = 10 A y [[R_on]] = 0,05 ohm: [[P_on]] = 5 W. No es despreciable para el diagnostico termico del contacto aunque sea inapreciable para el balance de potencia del circuito.\r
\r
#### Senal de deteccion\r
\r
El alumno calcula [[P_on]] con [[I]] = 1 A (iluminacion) y generaliza que [[P_on]] siempre es pequeña para todos los interruptores.\r
\r
#### Correccion conceptual\r
\r
Calcular siempre [[P_on]] para la corriente real de la carga. La escala de [[P_on]] depende de [[I]]^2, no de [[R_on]] sola. Un mismo [[R_on]] puede ser inofensivo para iluminacion y peligroso para calefaccion.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: [[R_on]] = 0,05 ohm es despreciable. Correcto: con [[I]] = 10 A, [[P_on]] = 5 W — umbral de riesgo termico del contacto.\r
\r
---\r
\r
## Errores matematicos\r
\r
### Error 5: Olvidar el cuadrado en [[P_on]] = [[I]]^2 x [[R_on]]\r
\r
#### Por que parece correcto\r
\r
En la ley de Ohm, V = [[I]] x R, la relacion es lineal. El alumno aplica la misma logica a la potencia y calcula [[P_on]] = [[I]] x [[R_on]].\r
\r
#### Por que es incorrecto\r
\r
La potencia disipada en una resistencia es [[P_on]] = [[I]]^2 x [[R_on]], no [[I]] x [[R_on]]. La diferencia no es solo numerica: las unidades de [[I]] x [[R_on]] son voltios, no vatios. El error es detectable dimensionalmente.\r
\r
#### Senal de deteccion\r
\r
El alumno obtiene [[P_on]] en voltios, o bien calcula un valor 10 veces menor del correcto.\r
\r
#### Correccion conceptual\r
\r
Aplicar siempre la ley de Joule: la potencia disipada en [[R_on]] crece con el cuadrado de [[I]]. Verificar dimensiones: amperios al cuadrado multiplicado por ohmios da vatios, no voltios.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: [[P_on]] = [[I]] x [[R_on]] = 8,7 x 0,08 = 0,70 (en voltios, no vatios). Correcto: [[P_on]] = [[I]]^2 x [[R_on]] = 8,7 al cuadrado multiplicado por 0,08 = 6,05 W.\r
\r
---\r
\r
### Error 6: Confundir [[R_on]] con la resistencia de la carga\r
\r
#### Por que parece correcto\r
\r
Ambas son resistencias en el mismo circuito en serie. El alumno puede confundir la resistencia del interruptor con la resistencia equivalente del equipo conectado.\r
\r
#### Por que es incorrecto\r
\r
[[R_on]] es la resistencia de los contactos del interruptor. La resistencia de la carga es la resistencia equivalente del equipo. Son en serie pero de ordenes de magnitud muy diferentes: la carga tiene decenas o cientos de ohmios; [[R_on]] tiene centesimas o decimas de ohm.\r
\r
#### Senal de deteccion\r
\r
El alumno calcula [[I]] incluyendo [[R_on]] en el denominador, lo que indica confusion conceptual aunque el efecto sea despreciable numericamente.\r
\r
#### Correccion conceptual\r
\r
Calcular [[I]] = [[P]]/[[V]] ignorando [[R_on]]. Luego calcular [[P_on]] = [[I]]^2 x [[R_on]] como calculo separado.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: [[I]] = [[V]] dividido entre la suma de R_carga y [[R_on]]. Correcto: [[I]] = [[P]] dividido entre [[V]], y por separado [[P_on]] = [[I]]^2 x [[R_on]].\r
\r
---\r
\r
## Errores de interpretacion\r
\r
### Error 7: Interpretar [[E_on]] grande como peligroso sin contexto\r
\r
#### Por que parece correcto\r
\r
Una energia elevada parece indicar un riesgo alto. El alumno ve [[E_on]] = 100 000 J y lo interpreta como calentamiento peligroso.\r
\r
#### Por que es incorrecto\r
\r
El riesgo termico del contacto lo determina [[P_on]] (la tasa de disipacion instantanea), no [[E_on]] (la energia acumulada). Con [[P_on]] = 0,1 W, el contacto alcanza temperatura de equilibrio baja aunque [[E_on]] sea grande si [[t_on]] es largo.\r
\r
#### Senal de deteccion\r
\r
El alumno calcula [[E_on]] = 100 kJ para [[P_on]] = 0,1 W operando 1000 horas y concluye que hay riesgo termico.\r
\r
#### Correccion conceptual\r
\r
Usar [[P_on]] para diagnostico termico y [[E_on]] para analisis energetico. Son magnitudes complementarias con usos distintos.\r
\r
#### Mini-ejemplo de contraste\r
\r
Incorrecto: [[E_on]] = 100 000 J implica riesgo termico alto. Correcto: [[P_on]] = 0,1 W implica temperatura de equilibrio baja, sin riesgo termico apreciable.\r
\r
---\r
\r
## Regla de autocontrol rapido\r
\r
Para verificar rapidamente si el analisis de un interruptor es correcto:\r
\r
1. Calcular [[I]] = [[P]]/[[V]] — no incluir [[R_on]] en este paso.\r
2. Calcular [[P_on]] = [[I]]^2 x [[R_on]] — verificar que el resultado esta en vatios.\r
3. Comparar [[P_on]] con los umbrales: menos de 1 W es seguro, entre 1 y 5 W hay que vigilar, mas de 5 W hay que sustituir.\r
4. Si la carga es inductiva o el interruptor cicla frecuentemente, el modelo estatico puede subestimar la degradacion real.\r
5. [[E_on]] sirve para analisis energetico, no para diagnostico termico. El diagnostico termico siempre se hace con [[P_on]].\r
`;export{e as default};
