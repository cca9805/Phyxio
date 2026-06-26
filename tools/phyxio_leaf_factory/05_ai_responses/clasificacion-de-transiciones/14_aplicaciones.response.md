# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: clasificacion-de-transiciones
# Target response file: aplicaciones.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Aplicaciones
## 1. Calorimetría de materiales con cambio estructural
Variable dominante: [[calor_latente]]
Límite de validez: [[calor_latente]] > 10² J/mol y barridos térmicos suficientemente lentos

En calorimetría diferencial se mide energía intercambiada al cruzar una zona de [[temperatura]] cercana a [[temperatura_critica]]. Si la señal integrada produce [[calor_latente]] finito, la clasificación se inclina hacia una transición de primer orden. Esta aplicación permite predecir si un material puede absorber o liberar energía en una ventana estrecha, algo útil en almacenamiento térmico. La magnitud complementaria es [[salto_entropia]], porque conecta la energía intercambiada con la reorganización de configuraciones accesibles. El límite práctico aparece cuando la señal es comparable al ruido o cuando la muestra no alcanza equilibrio. En ese caso, un pico calorimétrico ancho puede mezclar transición real, histéresis y retardo cinético.

## 2. Transiciones magnéticas y pérdida de orden
Variable dominante: [[parametro_de_orden]]
Límite de validez: |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻¹ cerca del régimen crítico

En un material magnético, el [[parametro_de_orden]] puede representar magnetización espontánea. Al aproximarse a [[temperatura_critica]], su comportamiento distingue una desaparición continua de un salto abrupto. Si no hay [[calor_latente]] y el [[parametro_de_orden]] se reduce suavemente, la transición se interpreta como continua o crítica. La predicción importante no es solo el valor de [[temperatura_critica]], sino cómo cambia la organización interna. [[exponente_critico_beta]] y [[amplitud_critica]] ayudan a ajustar la escala crítica. El modelo deja de ser simple si hay dominios, anisotropías fuertes o impurezas que redondean la curva y ocultan el comportamiento ideal.

## 3. Diseño de materiales con memoria de forma
Variable dominante: [[salto_parametro_de_orden]]
Límite de validez: [[salto_parametro_de_orden]] mayor que cinco veces la incertidumbre instrumental

En aleaciones con memoria de forma, el cambio de fase puede implicar una reorganización estructural apreciable. El [[salto_parametro_de_orden]] cuantifica la diferencia entre dos fases y ayuda a decidir si el cambio es abrupto. Si también aparece [[calor_latente]], el material puede almacenar energía durante el ciclo, pero puede sufrir histéresis. Lo que se mide es una señal estructural, óptica o mecánica relacionada con el [[parametro_de_orden]]. Lo que se predice es la repetibilidad del cambio y el rango de [[temperatura]] útil. La clasificación restringe el diseño: una transición fuerte ofrece respuesta intensa, pero una transición más continua puede ser más suave y estable.

## 4. Diagramas de fase en mezclas binarias
Variable dominante: [[energia_libre_gibbs]]
Límite de validez: fases comparadas en equilibrio y composición controlada dentro del rango experimental

En mezclas binarias se comparan fases mediante [[energia_libre_gibbs]]. La clasificación de una transición ayuda a decidir si dos fases coexisten con discontinuidad o si el cambio de composición y orden es gradual. Se mide la [[temperatura_critica]], la composición y, cuando procede, un [[parametro_de_orden]] asociado a separación, estructura u orientación. El análisis predice si aparecerá coexistencia de fases, salto de propiedades o régimen crítico. El límite de validez surge cuando la difusión es lenta: la muestra puede parecer fuera de equilibrio y dar una clasificación engañosa. Por eso la lectura termodinámica debe separarse de la cinética de mezcla.

## 5. Superconductividad y transiciones sin calor latente
Variable dominante: [[orden_de_transicion]]
Límite de validez: ausencia de [[calor_latente]] resoluble y transición reproducible cerca de [[temperatura_critica]]

En muchas transiciones superconductoras ideales, el cambio se clasifica como continuo: no se observa [[calor_latente]] finito, pero cambia un [[parametro_de_orden]] asociado al estado colectivo. La utilidad de la clasificación consiste en restringir qué se espera medir: no un salto energético molar grande, sino cambios en respuestas electromagnéticas y comportamiento crítico. Aunque este leaf no desarrolla el modelo microscópico, sí aporta el lenguaje para distinguir discontinuidad termodinámica, continuidad del [[parametro_de_orden]] y singularidades. El límite de validez aparece si la muestra es granular, impura o tiene campos externos intensos, porque esos factores pueden ensanchar la transición y dificultar la lectura del [[orden_de_transicion]].

