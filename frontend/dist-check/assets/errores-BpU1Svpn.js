const e=`# Errores frecuentes: Con rozamiento\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### Por que parece correcto\r
Porque en un resultado final solo se observa [[a]] y parece que la aceleración "aparece" por sí sola.\r
\r
#### Por que es incorrecto\r
La aceleración no es causa, es consecuencia del balance entre componente paralela del peso y fricción de contacto.\r
\r
#### Senal de deteccion\r
El estudiante describe el sistema diciendo "acelera porque acelera" sin mencionar [[theta]], [[mu_c]], [[N]] o [[f_r]].\r
\r
#### Correccion conceptual\r
Explicar siempre la cadena causal: cambia [[theta]] -> cambia la componente tangencial del peso -> cambia la fuerza neta -> cambia [[a]].\r
\r
#### Mini-ejemplo\r
Si aumentas [[theta]] y no cambias el material, la fuerza motriz sube; por eso [[a]] sube. El efecto no es autónomo.\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar contexto\r
\r
#### Por que parece correcto\r
Las fórmulas en tablas suelen verse universales y da confianza aplicarlas sin mirar hipótesis.\r
\r
#### Por que es incorrecto\r
Las expresiones de rozamiento suponen contacto seco, régimen definido y geometría estable.\r
\r
#### Senal de deteccion\r
Se calcula [[a]] sin preguntar si el bloque está en reposo estático o en deslizamiento cinético.\r
\r
#### Correccion conceptual\r
Antes de sustituir números, decidir régimen con [[theta_c]] y revisar validez física del modelo.\r
\r
#### Mini-ejemplo\r
Con tan([[theta]]) <= [[mu_e]] no debe usarse directamente la ecuación cinética; primero se verifica reposo.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### Por que parece correcto\r
[[mu_e]] y [[mu_c]] tienen unidades iguales y nombres parecidos.\r
\r
#### Por que es incorrecto\r
Representan mecanismos distintos: uno fija el techo de adherencia, el otro gobierna deslizamiento.\r
\r
#### Senal de deteccion\r
Se iguala [[mu_c]] a [[mu_e]] sin evidencia experimental o se usa [[mu_e]] durante movimiento.\r
\r
#### Correccion conceptual\r
Separar explícitamente ramas: estática con [[f_s_max]], cinética con [[f_r]].\r
\r
#### Mini-ejemplo\r
En una rampa, el bloque puede estar en reposo con [[mu_e]] alto; al deslizar, el cálculo debe usar [[mu_c]].\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### Por que parece correcto\r
El modelo ideal funciona en muchos ejercicios de aula.\r
\r
#### Por que es incorrecto\r
Cerca de [[theta_c]] pequeñas perturbaciones cambian régimen y la respuesta deja de ser robusta.\r
\r
#### Senal de deteccion\r
Resultados inestables entre repeticiones con la misma fórmula y parámetros casi iguales.\r
\r
#### Correccion conceptual\r
Introducir criterios de transición y considerar modelo extendido cuando haya sensibilidad extrema.\r
\r
#### Mini-ejemplo\r
Si al repetir ensayo cambia el estado reposo/deslizamiento por poca humedad, el modelo ideal ya no basta.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### Por que parece correcto\r
Se asume que una ecuación correcta en un problema será correcta en cualquier otro.\r
\r
#### Por que es incorrecto\r
Un modelo siempre tiene dominio; fuera de él, la predicción puede ser numéricamente fina pero físicamente falsa.\r
\r
#### Senal de deteccion\r
Predicciones coherentes en papel pero incompatibles con mediciones sistemáticas.\r
\r
#### Correccion conceptual\r
Comparar siempre orden de magnitud, condiciones de contacto y calidad de datos antes de confiar en el cálculo.\r
\r
#### Mini-ejemplo\r
Si la superficie tiene vibración activa, asumir fricción de Coulomb constante puede sesgar el resultado.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### Por que parece correcto\r
El álgebra formal parece cerrada y suficiente.\r
\r
#### Por que es incorrecto\r
En física importa el significado: un despeje con signo erróneo cambia sentido de fuerza y régimen.\r
\r
#### Senal de deteccion\r
Aparece [[a]] negativa donde el sistema observado acelera cuesta abajo.\r
\r
#### Correccion conceptual\r
Rehacer despeje con diagrama de ejes y verificar signos antes de continuar.\r
\r
#### Mini-ejemplo\r
Si eliges eje positivo cuesta abajo, [[f_r]] entra restando; invertirlo sin justificar invierte el resultado.\r
\r
### Error 7: Olvidar constantes o unidades\r
\r
#### Por que parece correcto\r
Parece detalle administrativo frente a la idea física principal.\r
\r
#### Por que es incorrecto\r
Una unidad mal convertida arrastra todos los resultados, incluso si la lógica es correcta.\r
\r
#### Senal de deteccion\r
Valores de [[N]] o [[a]] fuera de escala para masas y ángulos razonables.\r
\r
#### Correccion conceptual\r
Uniformar unidades al inicio y cerrar chequeo dimensional al final.\r
\r
#### Mini-ejemplo\r
Confundir grados y radianes en funciones trigonométricas altera el cálculo de [[theta_c]].\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que el modelo\r
\r
#### Por que parece correcto\r
Muchos decimales dan apariencia de exactitud.\r
\r
#### Por que es incorrecto\r
La incertidumbre del modelo y del experimento limita precisión útil.\r
\r
#### Senal de deteccion\r
Se reportan cuatro decimales en [[a]] sin análisis de error ni dispersión de medidas.\r
\r
#### Correccion conceptual\r
Redondear según calidad de datos y declarar margen cuando proceda.\r
\r
#### Mini-ejemplo\r
Si [[mu_c]] se estimó con variación de +/-0.03, no tiene sentido reportar [[a]] con cuatro cifras decimales.\r
\r
### Error 9: Saltarte la interpretación física del resultado\r
\r
#### Por que parece correcto\r
Al obtener un número se percibe que la tarea terminó.\r
\r
#### Por que es incorrecto\r
Sin lectura causal no hay criterio para diseño, seguridad ni diagnóstico.\r
\r
#### Senal de deteccion\r
El informe termina con "[[a]] = valor" y no explica régimen ni consecuencias operativas.\r
\r
#### Correccion conceptual\r
Traducir siempre el número a comportamiento: qué régimen hay, qué variable domina y qué riesgo aparece.\r
\r
#### Mini-ejemplo\r
Dos soluciones con [[a]] parecida pueden implicar riesgos distintos si una está cerca de [[theta_c]] y otra lejos.\r
\r
## Regla de autocontrol rápido\r
\r
Usa esta lista al terminar un problema:\r
\r
- ¿Tiene coherencia dimensional?\r
- ¿El signo físico es consistente con el eje elegido?\r
- ¿El régimen está bien identificado (estático o cinético)?\r
- ¿El valor está en orden de magnitud plausible?\r
- ¿La interpretación conecta resultado con decisión física?\r
\r
Si una respuesta es "no", corrige antes de dar por válido el ejercicio.`;export{e as default};
