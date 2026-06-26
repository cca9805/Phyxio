# Errores frecuentes: Con rozamiento

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto
Porque en un resultado final solo se observa [[a]] y parece que la aceleración "aparece" por sí sola.

#### Por que es incorrecto
La aceleración no es causa, es consecuencia del balance entre componente paralela del peso y fricción de contacto.

#### Senal de deteccion
El estudiante describe el sistema diciendo "acelera porque acelera" sin mencionar [[theta]], [[mu_c]], [[N]] o [[f_r]].

#### Correccion conceptual
Explicar siempre la cadena causal: cambia [[theta]] -> cambia la componente tangencial del peso -> cambia la fuerza neta -> cambia [[a]].

#### Mini-ejemplo
Si aumentas [[theta]] y no cambias el material, la fuerza motriz sube; por eso [[a]] sube. El efecto no es autónomo.

### Error 2: Aplicar la fórmula mecánicamente sin validar contexto

#### Por que parece correcto
Las fórmulas en tablas suelen verse universales y da confianza aplicarlas sin mirar hipótesis.

#### Por que es incorrecto
Las expresiones de rozamiento suponen contacto seco, régimen definido y geometría estable.

#### Senal de deteccion
Se calcula [[a]] sin preguntar si el bloque está en reposo estático o en deslizamiento cinético.

#### Correccion conceptual
Antes de sustituir números, decidir régimen con [[theta_c]] y revisar validez física del modelo.

#### Mini-ejemplo
Con tan([[theta]]) <= [[mu_e]] no debe usarse directamente la ecuación cinética; primero se verifica reposo.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto
[[mu_e]] y [[mu_c]] tienen unidades iguales y nombres parecidos.

#### Por que es incorrecto
Representan mecanismos distintos: uno fija el techo de adherencia, el otro gobierna deslizamiento.

#### Senal de deteccion
Se iguala [[mu_c]] a [[mu_e]] sin evidencia experimental o se usa [[mu_e]] durante movimiento.

#### Correccion conceptual
Separar explícitamente ramas: estática con [[f_s_max]], cinética con [[f_r]].

#### Mini-ejemplo
En una rampa, el bloque puede estar en reposo con [[mu_e]] alto; al deslizar, el cálculo debe usar [[mu_c]].

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto
El modelo ideal funciona en muchos ejercicios de aula.

#### Por que es incorrecto
Cerca de [[theta_c]] pequeñas perturbaciones cambian régimen y la respuesta deja de ser robusta.

#### Senal de deteccion
Resultados inestables entre repeticiones con la misma fórmula y parámetros casi iguales.

#### Correccion conceptual
Introducir criterios de transición y considerar modelo extendido cuando haya sensibilidad extrema.

#### Mini-ejemplo
Si al repetir ensayo cambia el estado reposo/deslizamiento por poca humedad, el modelo ideal ya no basta.

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto
Se asume que una ecuación correcta en un problema será correcta en cualquier otro.

#### Por que es incorrecto
Un modelo siempre tiene dominio; fuera de él, la predicción puede ser numéricamente fina pero físicamente falsa.

#### Senal de deteccion
Predicciones coherentes en papel pero incompatibles con mediciones sistemáticas.

#### Correccion conceptual
Comparar siempre orden de magnitud, condiciones de contacto y calidad de datos antes de confiar en el cálculo.

#### Mini-ejemplo
Si la superficie tiene vibración activa, asumir fricción de Coulomb constante puede sesgar el resultado.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto
El álgebra formal parece cerrada y suficiente.

#### Por que es incorrecto
En física importa el significado: un despeje con signo erróneo cambia sentido de fuerza y régimen.

#### Senal de deteccion
Aparece [[a]] negativa donde el sistema observado acelera cuesta abajo.

#### Correccion conceptual
Rehacer despeje con diagrama de ejes y verificar signos antes de continuar.

#### Mini-ejemplo
Si eliges eje positivo cuesta abajo, [[f_r]] entra restando; invertirlo sin justificar invierte el resultado.

### Error 7: Olvidar constantes o unidades

#### Por que parece correcto
Parece detalle administrativo frente a la idea física principal.

#### Por que es incorrecto
Una unidad mal convertida arrastra todos los resultados, incluso si la lógica es correcta.

#### Senal de deteccion
Valores de [[N]] o [[a]] fuera de escala para masas y ángulos razonables.

#### Correccion conceptual
Uniformar unidades al inicio y cerrar chequeo dimensional al final.

#### Mini-ejemplo
Confundir grados y radianes en funciones trigonométricas altera el cálculo de [[theta_c]].

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que el modelo

#### Por que parece correcto
Muchos decimales dan apariencia de exactitud.

#### Por que es incorrecto
La incertidumbre del modelo y del experimento limita precisión útil.

#### Senal de deteccion
Se reportan cuatro decimales en [[a]] sin análisis de error ni dispersión de medidas.

#### Correccion conceptual
Redondear según calidad de datos y declarar margen cuando proceda.

#### Mini-ejemplo
Si [[mu_c]] se estimó con variación de +/-0.03, no tiene sentido reportar [[a]] con cuatro cifras decimales.

### Error 9: Saltarte la interpretación física del resultado

#### Por que parece correcto
Al obtener un número se percibe que la tarea terminó.

#### Por que es incorrecto
Sin lectura causal no hay criterio para diseño, seguridad ni diagnóstico.

#### Senal de deteccion
El informe termina con "[[a]] = valor" y no explica régimen ni consecuencias operativas.

#### Correccion conceptual
Traducir siempre el número a comportamiento: qué régimen hay, qué variable domina y qué riesgo aparece.

#### Mini-ejemplo
Dos soluciones con [[a]] parecida pueden implicar riesgos distintos si una está cerca de [[theta_c]] y otra lejos.

## Regla de autocontrol rápido

Usa esta lista al terminar un problema:

- ¿Tiene coherencia dimensional?
- ¿El signo físico es consistente con el eje elegido?
- ¿El régimen está bien identificado (estático o cinético)?
- ¿El valor está en orden de magnitud plausible?
- ¿La interpretación conecta resultado con decisión física?

Si una respuesta es "no", corrige antes de dar por válido el ejercicio.