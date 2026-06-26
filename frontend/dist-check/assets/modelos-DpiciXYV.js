const e=`\uFEFF# Modelos de flotabilidad y empuje

## Modelo ideal
El modelo ideal del Principio de Arquímedes se fundamenta en la estática de fluidos pura, donde se asume que la fuerza de empuje es una consecuencia exclusivamente geométrica y densídica. En este marco, el fluido se comporta como un medio continuo, incompresible y en reposo absoluto, permitiendo que la magnitud del empuje sea una función lineal y directa del volumen sumergido. Es el modelo estándar utilizado en la enseñanza de la física general y en el diseño preliminar de estructuras flotantes, proporcionando una precisión asombrosa para la gran mayoría de las aplicaciones náuticas e industriales convencionales sin necesidad de recurrir a la dinámica de fluidos computacional compleja.

## Hipótesis
Para que el modelo de Arquímedes sea rigurosamente operativo, debemos aceptar las siguientes hipótesis simplificadoras y restrictivas:
1.  **Fluido en reposo absoluto**: Se desprecia cualquier movimiento macroscópico del fluido (corrientes, oleaje, turbulencias) que podría generar fuerzas dinámicas adicionales como la sustentación o el arrastre viscoso.
2.  **Incompresibilidad**: Se asume que tanto el fluido ([[rho_f]]) como el sólido tienen densidades constantes en todo su volumen, ignorando cambios por variación de presión hidrostática extrema.
3.  **Campo gravitatorio uniforme**: La aceleración de la gravedad [[g]] se considera constante en todo el espacio ocupado por el cuerpo sumergido.
4.  **Ausencia de efectos superficiales**: Se desprecian las fuerzas de tensión superficial y capilaridad que actúan en la interfase entre el fluido y el aire en la línea de flotación.
5.  **Cuerpo rígido**: El objeto sumergido no sufre deformaciones estructurales debido a la presión externa que alteren su volumen [[V_des]].

## Dominio de validez cuantitativo
Este modelo mantiene su integridad predictiva bajo las siguientes condiciones de contorno:
-   **Profundidad moderada**: El modelo es válido siempre que h < 2000 m. Por encima de esta cota, la compresibilidad del agua puede alterar el resultado en más de un 1%.
-   **Escala macroscópica efectiva**: El objeto debe ser de un tamaño tal que R > 0.01 m, para asegurar que la tensión superficial sea una fuerza de segundo orden.
-   **Velocidad nula**: El error en la fuerza neta se mantiene inferior al 5% si la velocidad del fluido es despreciable. El **orden de magnitud** de las fuerzas viscosas debe ser despreciable frente al empuje.

## Señales de fallo del modelo
Usted debe identificar de inmediato que el modelo ideal de Arquímedes está fallando o es insuficiente si observa lo siguiente:
-   El objeto, aunque sea más denso que el fluido (como una aguja de acero), permanece en la superficie. Esto indica que la **tensión superficial** ha tomado el control.
-   El objeto experimenta oscilaciones o movimientos laterales impredecibles. Esto sugiere la presencia de **vórtices dinámicos** o corrientes no estáticas.
-   Para cuerpos elásticos sumergidos a gran profundidad, si el empuje calculado no logra predecir el equilibrio, es señal de que el **volumen se ha comprimido** mecánicamente.

## Modelo extendido o alternativo
Cuando conviene cambiar de modelo: Cuando el sistema involucra fluidos en movimiento o cuerpos cuya geometría cambia bajo presión, el modelo hidrostático puro debe ser reemplazado por el **Modelo Dinámico de Navier-Stokes** o por el estudio de **Flotabilidad Compresible**. En estos modelos, el empuje de Arquímedes se considera solo como un término fuente de fuerza dentro de un balance de momentum complejo. Para barcos en alta mar, el modelo extendido debe incluir el análisis de estabilidad metacéntrica.

## Comparación operativa
El **modelo ideal** brilla por su simplicidad analítica; permite cálculos rápidos de carga útil en barcos, balanzas de densidad y aerostática básica con una incertidumbre mínima. Por el contrario, el **modelo extendido** (dinámico y compresible) es el requerimiento innegociable en la ingeniería de submarinos de gran profundidad, diseño de drones submarinos de alta velocidad y en la astrofísica estelar, donde los fluidos son gases altamente compresibles y las corrientes de convección dominan la física del sistema.\r
\r
`;export{e as default};
