const e=`# Errores frecuentes: Centro de masas en cuerpos extendidos\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
Por qué parece correcto: la expresión de [[xcm]] parece una división simple y da la impresión de que la posición sale "automáticamente" de los números.\r
\r
Por qué es incorrecto: [[xcm]] no existe sin un modelo previo de distribución de [[dm]] en función de [[x]] o [[r]]. Primero se define cómo se reparte masa; luego aparece el resultado.\r
\r
Señal de detección: en la explicación no se menciona ni [[dm]] ni la ley de densidad ([[lambda]], [[sigma]] o [[rho]]).\r
\r
Corrección conceptual: narrar siempre la cadena causal completa: geometría + densidad -> [[dm]] -> [[I_x]] y [[M]] -> [[xcm]] o [[R_cm]].\r
\r
Mini-ejemplo: dos barras con la misma [[M]] total pero distinta [[lambda]] no comparten el mismo [[xcm]].\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
Por qué parece correcto: memorizar una única plantilla de cálculo ahorra tiempo en ejercicios rutinarios.\r
\r
Por qué es incorrecto: cada expresión corresponde a una geometría distinta; no puedes usar [[rho]][[V]] si el problema es lineal con [[lambda]] y [[L]].\r
\r
Señal de detección: se usa una fórmula de masa y luego aparecen unidades incompatibles (por ejemplo kg/m cuando debería ser kg).\r
\r
Corrección conceptual: elegir primero el modelo geométrico dominante y recién después seleccionar la relación constitutiva adecuada.\r
\r
Mini-ejemplo: lámina delgada -> [[sigma]][[A]], no [[rho]][[V]].\r
\r
### Error 3: Confundir magnitudes similares\r
\r
Por qué parece correcto: [[M]], [[I_x]], [[xcm]] y [[R_cm]] aparecen juntas y tienen notación parecida.\r
\r
Por qué es incorrecto: representan niveles físicos diferentes: [[M]] es cantidad total, [[I_x]] es momento de primer orden y [[xcm]] es cociente de ambos.\r
\r
Señal de detección: se interpreta [[I_x]] como posición o se reporta [[R_cm]] con unidades de kg.\r
\r
Corrección conceptual: verificar unidades en cada paso y escribir explícitamente significado físico de cada símbolo.\r
\r
Mini-ejemplo: [[I_x]] en kg m dividido por [[M]] en kg produce [[xcm]] en m.\r
\r
\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
Por qué parece correcto: en problemas académicos limpios, el modelo continuo uniforme suele funcionar muy bien.\r
\r
Por qué es incorrecto: en sistemas reales, vacíos internos, piezas móviles o gradientes fuertes de densidad rompen hipótesis sin avisar.\r
\r
Señal de detección: el cálculo predice un [[R_cm]] estable, pero la medición repetida cambia con configuración interna mínima.\r
\r
Corrección conceptual: incorporar subcomponentes y pasar a un modelo compuesto cuando aparezcan discrepancias sistemáticas.\r
\r
Mini-ejemplo: dron con batería suelta cambia [[xcm]] entre ensayos aunque [[M]] total no cambie.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
Por qué parece correcto: una solución previa exitosa genera confianza excesiva.\r
\r
Por qué es incorrecto: extrapolar fuera del dominio destruye validez causal del resultado.\r
\r
Señal de detección: aparecen correcciones ad hoc para "forzar" que el número cierre.\r
\r
Corrección conceptual: declarar explícitamente condiciones de uso (geometría, continuidad, rango material) antes de resolver.\r
\r
Mini-ejemplo: usar modelo de lámina para una pieza con espesor dominante desplaza artificialmente [[R_cm]].\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
Por qué parece correcto: el álgebra se vuelve mecánica cuando se repiten ejercicios.\r
\r
Por qué es incorrecto: un paso de despeje con signo o factor mal copiado altera la posición final del centro de masas.\r
\r
Señal de detección: [[xcm]] queda fuera del intervalo geométrico de [[x]] analizado.\r
\r
Corrección conceptual: mantener notación simbólica hasta el final y validar con límites antes de sustituir números.\r
\r
Mini-ejemplo: en una barra entre 0 y [[L]], obtener [[xcm]] > [[L]] indica error algebraico o de modelo.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
Por qué parece correcto: en integrales largas parece más cómodo revisar unidades solo al final.\r
\r
Por qué es incorrecto: errores de unidad en [[lambda]], [[sigma]] o [[rho]] contaminan todo [[M]] y todo [[R_cm]].\r
\r
Señal de detección: [[M]] sale en unidades imposibles o [[xcm]] no queda en metros.\r
\r
Corrección conceptual: controlar unidades en cada bloque intermedio: [[dm]], [[I_x]], [[M]] y cociente final.\r
\r
Mini-ejemplo: introducir [[lambda]] en g/cm sin convertir produce sesgo fuerte en [[xcm]].\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
Por qué parece correcto: más decimales transmiten sensación de control técnico.\r
\r
Por qué es incorrecto: el error dominante puede venir de simplificaciones geométricas, no del redondeo numérico.\r
\r
Señal de detección: se reporta [[xcm]] con cuatro decimales cuando entradas experimentales tienen una sola cifra confiable.\r
\r
Corrección conceptual: ajustar cifras significativas al nivel real de incertidumbre del modelo y de datos.\r
\r
Mini-ejemplo: [[xcm]] = 1.11 m es más honesto que 1.11137 m si [[L]] se midió con resolución de 1 cm.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
Por qué parece correcto: terminar en un valor numérico parece cerrar el problema.\r
\r
Por qué es incorrecto: sin interpretación no se sabe si el resultado ayuda a decidir diseño, medición o diagnóstico.\r
\r
Señal de detección: informe con ecuaciones completas pero sin frase causal sobre desplazamiento de [[R_cm]].\r
\r
Corrección conceptual: traducir siempre el número a consecuencia física observable y acción técnica posible.\r
\r
Mini-ejemplo: "[[xcm]] se desplaza a la derecha, conviene mover batería al centro".\r
\r
## Regla de autocontrol rápido\r
\r
Usa esta checklist mental después de resolver un problema:\r
\r
✓ **¿Tiene sentido dimensional?** Verifica \\\\([	ext{resultado}] = [	ext{esperado}]\\\\)\r
\r
✓ **¿Es físicamente razonable?** ¿Está dentro del rango de órdenes de magnitud típicos?\r
\r
✓ **¿El signo es correcto?** ¿Indica dirección/sentido coherente con el problema?\r
\r
✓ **¿Respeta los límites del modelo?** ¿Estoy en el rango donde el modelo fue validado?\r
\r
✓ **¿Puedo explicar qué significa?** Si no puedes contar la historia física del resultado, algo falta.\r
\r
Si alguno de estos puntos falla, reexamina tu trabajo antes de confiar en el resultado.\r
`;export{e as default};
