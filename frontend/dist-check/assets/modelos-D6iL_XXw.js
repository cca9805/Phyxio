const e=`# Modelos físicos: con rozamiento\r
\r
## Modelo ideal\r
\r
El modelo base describe un bloque de masa [[m]] sobre un plano inclinado de ángulo [[theta]] con gravedad [[g]], pero ahora con contacto rugoso. La diferencia central respecto al caso sin rozamiento es que la fuerza tangencial ya no queda determinada solo por la proyección del peso: aparece una fuerza de fricción que se opone al movimiento o al intento de movimiento.\r
\r
Este modelo no es una abstracción vacía. Es el primer nivel que permite distinguir entre un bloque que permanece en reposo, un bloque que está a punto de deslizar y un bloque que ya se mueve. Esa distinción cambia por completo la dinámica y la lectura física del sistema.\r
\r
## Hipótesis\r
\r
Las hipótesis operativas son:\r
\r
- El bloque permanece en contacto con el plano durante todo el análisis.\r
- La superficie puede describirse con coeficientes [[mu_e]] y [[mu_c]].\r
- La normal [[N]] se obtiene por equilibrio perpendicular al plano.\r
- El rozamiento estático actúa solo hasta un máximo [[f_s_max]].\r
- Una vez roto el reposo, domina el rozamiento cinético.\r
- La geometría del plano mantiene [[theta]] constante en el tramo analizado.\r
\r
Estas hipótesis permiten construir un modelo sencillo pero con verdadero poder predictivo.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen estas condiciones numéricas:\r
\r
- 0 <= [[theta]] <= 90 grados.\r
- [[mu_e]] >= 0 y [[mu_c]] >= 0.\r
- En superficies secas típicas, [[mu_c]] <= [[mu_e]].\r
- El reposo es esperable si tan([[theta]]) <= [[mu_e]].\r
- El deslizamiento es esperable si tan([[theta]]) > [[mu_e]].\r
- El umbral angular [[theta_c]] = arctan([[mu_e]]).\r
- La zona de transición es delicada cuando |tan([[theta]]) - [[mu_e]]| < 0.05.\r
- El error relativo entre predicción y medición debería ser <= 10 por ciento en prácticas básicas.\r
\r
Este bloque cuantitativo es esencial: el alumno no solo memoriza ecuaciones, también aprende a situar el sistema respecto del umbral.\r
\r
## Señales de fallo del modelo\r
\r
Busca estas señales de que el modelo ya no representa bien el sistema:\r
\r
- El cálculo predice reposo, pero el bloque desliza repetidamente.\r
- El cálculo predice deslizamiento, pero el bloque permanece quieto con margen amplio.\r
- La aceleración medida cambia de forma incompatible con [[mu_c]] fijo.\r
- La normal [[N]] calculada resulta negativa o mayor que el peso total sin fuerzas externas adicionales.\r
- El comportamiento depende fuertemente de contaminación superficial, humedad o vibración.\r
\r
En esos casos, el problema no es de álgebra: es que la hipótesis de contacto simple dejó de ser suficiente.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal falla, conviene escalar a uno de estos niveles:\r
\r
- Contacto con fricción variable dependiente de estado superficial.\r
- Modelo con histéresis de transición entre adherencia y deslizamiento.\r
- Inclusión de deformación o microvibraciones si el material es blando o el soporte es irregular.\r
- Modelo con fuerzas adicionales si existe empuje, frenado o aceleración externa.\r
\r
Transición explícita recomendada: cambia al modelo extendido cuando el sistema esté cerca del umbral (por ejemplo, |tan([[theta]]) - [[mu_e]]| < 0.05), cuando el error predicción-medición supere 10 por ciento de forma sistemática, o cuando aparezcan variaciones de superficie (humedad, polvo, vibración) que rompan la hipótesis de contacto simple.\r
\r
Cuándo cambiar de modelo: si el estado alterna entre reposo y deslizamiento con pequeñas perturbaciones, o si la predicción deja de reproducir los datos medidos de forma consistente, deja el modelo ideal y usa el modelo extendido.\r
\r
La transición correcta no consiste en abandonar la física simple, sino en aumentar complejidad solo cuando la evidencia lo exige.\r
\r
### Cuándo conviene cambiar de modelo\r
\r
La transición explícita al modelo alternativo debe hacerse cuando ocurra al menos una de estas condiciones:\r
\r
- El sistema está en zona umbral: |tan([[theta]]) - [[mu_e]]| < 0.05.\r
- El error entre predicción y medición supera 10 por ciento de forma persistente.\r
- El estado observado alterna entre reposo y deslizamiento con pequeñas perturbaciones.\r
- Cambios de superficie (humedad, polvo, vibración) rompen la hipótesis de contacto simple.\r
\r
En cualquiera de esos casos, conviene cambiar del modelo ideal al modelo extendido para mantener validez física y utilidad predictiva.\r
\r
Frase operativa para el criterio: cuando conviene pasar al modelo alternativo es cuando los datos observados dejan de ser consistentes con el modelo ideal.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo ideal | Modelo extendido |\r
|---------|--------------|------------------|\r
| **Variable de control principal** | [[theta]] y [[mu_e]] | [[theta]], [[mu_e]], [[mu_c]] y estado superficial |\r
| **Pregunta que responde** | ¿Desliza o no? | ¿Con qué aceleración y con qué umbral? |\r
| **Precisión** | Muy alta lejos del umbral | Mayor cerca del umbral y en laboratorio real |\r
| **Complejidad** | Ecuaciones directas | Tramo estático + tramo cinético |\r
| **Uso recomendado** | Predicción inicial y docencia | Validación, diseño y diagnóstico |\r
\r
El criterio práctico es simple: si la situación está claramente por debajo o por encima de [[theta_c]], el modelo ideal ya entrega mucha información. Si la situación está cerca de [[theta_c]], la sensibilidad aumenta y conviene medir con más cuidado.\r
\r
## Lectura física del cambio de régimen\r
\r
El punto clave es que la fricción no solo "resta" movimiento. En el reposo, la fricción estática iguala la componente necesaria hasta un máximo [[f_s_max]]. En el deslizamiento, la fricción cinética ya no se ajusta libremente: adopta un valor ligado a [[mu_c]] y [[N]]. Ese cambio de lógica explica por qué el modelo debe bifurcarse.\r
\r
La consecuencia pedagógica es poderosa. El estudiante aprende que una misma rampa puede describirse con dos leyes distintas según el estado del movimiento. Eso es física real: el régimen importa.\r
\r
## Síntesis operativa\r
\r
Usa este modelo así:\r
\r
1. Calcula [[theta_c]] a partir de [[mu_e]].\r
2. Compara [[theta]] con [[theta_c]].\r
3. Si [[theta]] <= [[theta_c]], analiza reposo con el umbral estático y la fricción máxima disponible.\r
4. Si [[theta]] > [[theta_c]], usa la normal, la fricción cinética y la aceleración con rozamiento.\r
5. Verifica que el resultado sea coherente con la escala de [[mu_e]], [[mu_c]] y [[N]].\r
\r
Ese flujo convierte el rozamiento en una decisión física, no en una colección de fórmulas sueltas.`;export{e as default};
