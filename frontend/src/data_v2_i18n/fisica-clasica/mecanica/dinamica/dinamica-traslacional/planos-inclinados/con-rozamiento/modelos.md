# Modelos físicos: con rozamiento

## Modelo ideal

El modelo base describe un bloque de masa [[m]] sobre un plano inclinado de ángulo [[theta]] con gravedad [[g]], pero ahora con contacto rugoso. La diferencia central respecto al caso sin rozamiento es que la fuerza tangencial ya no queda determinada solo por la proyección del peso: aparece una fuerza de fricción que se opone al movimiento o al intento de movimiento.

Este modelo no es una abstracción vacía. Es el primer nivel que permite distinguir entre un bloque que permanece en reposo, un bloque que está a punto de deslizar y un bloque que ya se mueve. Esa distinción cambia por completo la dinámica y la lectura física del sistema.

## Hipótesis

Las hipótesis operativas son:

- El bloque permanece en contacto con el plano durante todo el análisis.
- La superficie puede describirse con coeficientes [[mu_e]] y [[mu_c]].
- La normal [[N]] se obtiene por equilibrio perpendicular al plano.
- El rozamiento estático actúa solo hasta un máximo [[f_s_max]].
- Una vez roto el reposo, domina el rozamiento cinético.
- La geometría del plano mantiene [[theta]] constante en el tramo analizado.

Estas hipótesis permiten construir un modelo sencillo pero con verdadero poder predictivo.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen estas condiciones numéricas:

- 0 <= [[theta]] <= 90 grados.
- [[mu_e]] >= 0 y [[mu_c]] >= 0.
- En superficies secas típicas, [[mu_c]] <= [[mu_e]].
- El reposo es esperable si tan([[theta]]) <= [[mu_e]].
- El deslizamiento es esperable si tan([[theta]]) > [[mu_e]].
- El umbral angular [[theta_c]] = arctan([[mu_e]]).
- La zona de transición es delicada cuando |tan([[theta]]) - [[mu_e]]| < 0.05.
- El error relativo entre predicción y medición debería ser <= 10 por ciento en prácticas básicas.

Este bloque cuantitativo es esencial: el alumno no solo memoriza ecuaciones, también aprende a situar el sistema respecto del umbral.

## Señales de fallo del modelo

Busca estas señales de que el modelo ya no representa bien el sistema:

- El cálculo predice reposo, pero el bloque desliza repetidamente.
- El cálculo predice deslizamiento, pero el bloque permanece quieto con margen amplio.
- La aceleración medida cambia de forma incompatible con [[mu_c]] fijo.
- La normal [[N]] calculada resulta negativa o mayor que el peso total sin fuerzas externas adicionales.
- El comportamiento depende fuertemente de contaminación superficial, humedad o vibración.

En esos casos, el problema no es de álgebra: es que la hipótesis de contacto simple dejó de ser suficiente.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, conviene escalar a uno de estos niveles:

- Contacto con fricción variable dependiente de estado superficial.
- Modelo con histéresis de transición entre adherencia y deslizamiento.
- Inclusión de deformación o microvibraciones si el material es blando o el soporte es irregular.
- Modelo con fuerzas adicionales si existe empuje, frenado o aceleración externa.

Transición explícita recomendada: cambia al modelo extendido cuando el sistema esté cerca del umbral (por ejemplo, |tan([[theta]]) - [[mu_e]]| < 0.05), cuando el error predicción-medición supere 10 por ciento de forma sistemática, o cuando aparezcan variaciones de superficie (humedad, polvo, vibración) que rompan la hipótesis de contacto simple.

Cuándo cambiar de modelo: si el estado alterna entre reposo y deslizamiento con pequeñas perturbaciones, o si la predicción deja de reproducir los datos medidos de forma consistente, deja el modelo ideal y usa el modelo extendido.

La transición correcta no consiste en abandonar la física simple, sino en aumentar complejidad solo cuando la evidencia lo exige.

### Cuándo conviene cambiar de modelo

La transición explícita al modelo alternativo debe hacerse cuando ocurra al menos una de estas condiciones:

- El sistema está en zona umbral: |tan([[theta]]) - [[mu_e]]| < 0.05.
- El error entre predicción y medición supera 10 por ciento de forma persistente.
- El estado observado alterna entre reposo y deslizamiento con pequeñas perturbaciones.
- Cambios de superficie (humedad, polvo, vibración) rompen la hipótesis de contacto simple.

En cualquiera de esos casos, conviene cambiar del modelo ideal al modelo extendido para mantener validez física y utilidad predictiva.

Frase operativa para el criterio: cuando conviene pasar al modelo alternativo es cuando los datos observados dejan de ser consistentes con el modelo ideal.

## Comparación operativa

| Aspecto | Modelo ideal | Modelo extendido |
|---------|--------------|------------------|
| **Variable de control principal** | [[theta]] y [[mu_e]] | [[theta]], [[mu_e]], [[mu_c]] y estado superficial |
| **Pregunta que responde** | ¿Desliza o no? | ¿Con qué aceleración y con qué umbral? |
| **Precisión** | Muy alta lejos del umbral | Mayor cerca del umbral y en laboratorio real |
| **Complejidad** | Ecuaciones directas | Tramo estático + tramo cinético |
| **Uso recomendado** | Predicción inicial y docencia | Validación, diseño y diagnóstico |

El criterio práctico es simple: si la situación está claramente por debajo o por encima de [[theta_c]], el modelo ideal ya entrega mucha información. Si la situación está cerca de [[theta_c]], la sensibilidad aumenta y conviene medir con más cuidado.

## Lectura física del cambio de régimen

El punto clave es que la fricción no solo "resta" movimiento. En el reposo, la fricción estática iguala la componente necesaria hasta un máximo [[f_s_max]]. En el deslizamiento, la fricción cinética ya no se ajusta libremente: adopta un valor ligado a [[mu_c]] y [[N]]. Ese cambio de lógica explica por qué el modelo debe bifurcarse.

La consecuencia pedagógica es poderosa. El estudiante aprende que una misma rampa puede describirse con dos leyes distintas según el estado del movimiento. Eso es física real: el régimen importa.

## Síntesis operativa

Usa este modelo así:

1. Calcula [[theta_c]] a partir de [[mu_e]].
2. Compara [[theta]] con [[theta_c]].
3. Si [[theta]] <= [[theta_c]], analiza reposo con el umbral estático y la fricción máxima disponible.
4. Si [[theta]] > [[theta_c]], usa la normal, la fricción cinética y la aceleración con rozamiento.
5. Verifica que el resultado sea coherente con la escala de [[mu_e]], [[mu_c]] y [[N]].

Ese flujo convierte el rozamiento en una decisión física, no en una colección de fórmulas sueltas.