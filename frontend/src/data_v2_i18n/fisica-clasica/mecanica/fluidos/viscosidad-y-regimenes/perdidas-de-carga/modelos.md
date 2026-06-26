# Modelos de Pérdida de Carga: De Darcy a Colebrook

El análisis de las pérdidas de carga se basa en la transición de un modelo puramente teórico y determinista (flujo laminar) a uno semi-empírico y probabilístico (flujo turbulento). Esta dualidad es fundamental para entender la fiabilidad de nuestros cálculos hidráulicos.

## ## Modelo ideal
El modelo ideal para las pérdidas de carga es la **Ecuación de Darcy-Weisbach**. Se considera el modelo "estándar" porque es dimensionalmente consistente y aplicable a cualquier fluido newtoniano. En este modelo, la energía disipada se asume como una función lineal de la longitud del conducto e inversamente proporcional al diámetro, escalando con el cuadrado de la velocidad media.
-   **Variables centrales**: Altura de pérdida [[hf]], factor de fricción [[f]], longitud [[L]], diámetro [[D]] y velocidad [[v]].
-   **Lo que se busca**: Una predicción de la caída de presión que permita dimensionar sistemas de transporte de fluidos sin errores catastróficos.

## ## Hipótesis
Para que el modelo de Darcy-Weisbach sea aplicable, se asumen los siguientes supuestos:
1.  **Fluido Newtoniano**: El esfuerzo cortante es proporcional al gradiente de velocidad (la viscosidad dinámica es constante para una temperatura dada).
2.  **Incompresibilidad**: La densidad [[rho]] del fluido no cambia significativamente a lo largo del conducto (válido para líquidos y gases a baja velocidad Mach < 0.3).
3.  **Flujo Estable y Desarrollado**: Se asume que el perfil de velocidades no cambia a lo largo del tramo recto analizado (lejos de perturbaciones).
4.  **Confinamiento Circular**: El modelo base asume tuberías cilíndricas. Para otras formas, se introduce la hipótesis del **Radio Hidráulico**.

## ## Dominio de validez cuantitativo
El éxito del modelo depende del cálculo del factor [[f]]:
-   **Régimen Laminar ([[Re]] < 2300)**: El dominio es exacto y analítico. La rugosidad no influye.
-   **Régimen Turbulento ([[Re]] > 4000)**: El dominio es semi-empírico. La validez depende de la precisión de la rugosidad absoluta del material.
-   **Zona de Transición (2300 < [[Re]] < 4000)**: El modelo de Darcy es inestable en esta zona. Se recomienda sobredimensionar el sistema asumiendo flujo turbulento por seguridad.
-   **Escala**: El modelo es válido desde tuberías capilares hasta grandes túneles de agua, siempre que se mantenga el concepto de medio continuo.

## ## Señales de fallo del modelo
El modelo de Darcy-Weisbach falla o da resultados erróneos cuando:
1.  **Fluido No-Newtoniano**: Si el fluido es sangre, polímeros o lodos espesos, la viscosidad cambia con la velocidad y [[f]] no sigue las leyes estándar.
2.  **Cavitación**: Si la pérdida de carga es tan alta que la presión cae por debajo de la presión de vapor, se forman burbujas que rompen el modelo de fase única.
3.  **Altas Velocidades (Gases)**: Si la velocidad del gas supera el 30% de la velocidad del sonido, los efectos de compresibilidad dominan y se requiere el modelo de **Flujo de Fanno**.

## ## Modelo extendido o alternativo
Existen alternativas para simplificar o extender el cálculo dependiendo de la precisión requerida:
-   **Ecuación de Hazen-Williams**: Muy usada en ingeniería civil para redes de agua. Es más simple pero solo válida para agua a temperaturas normales. **cuando conviene**: Migrar a Hazen-Williams solo para cálculos rápidos en redes de gran escala con agua a temperatura ambiente.
-   **Ecuación de Colebrook-White**: El modelo extendido para hallar [[f]] en flujo turbulento. Es la más precisa pero requiere iteración. **cuando conviene**: Usar Colebrook-White cuando la precisión sea crítica y se disponga de herramientas computacionales.
-   **Ecuación de Haaland**: Una alternativa explícita a Colebrook que ofrece un error menor al 2%. **cuando conviene**: Es el modelo recomendado para cálculos manuales rápidos que no admitan iteraciones.

## ## Comparación operativa
Mientras que el modelo de **flujo ideal (Bernoulli)** desprecia la fricción para simplificar el aprendizaje, el modelo de **Pérdidas de Carga** es el que se usa en la vida profesional. En la práctica, un ingeniero prefiere el modelo de Darcy-Weisbach sobre Hazen-Williams debido a su carácter universal; aunque sea más complejo de calcular, permite modelar desde aire acondicionado hasta oleoductos de crudo pesado con la misma estructura física. La elección final suele depender de la normativa local o de la disponibilidad de datos sobre la rugosidad del material.