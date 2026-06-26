# Ejemplo tipo examen

## Enunciado
Se transporta petróleo crudo ([[rho]] = 880 kg/m^3, viscosidad din?mica = 0.02 Pa*s) a través de una tubería lisa de acero de 1.2 km de longitud y 40 cm de diámetro interno. La velocidad media del flujo es de [[v]] = 2.0 m/s. Determine si el régimen es turbulento y calcule la caída de presión necesaria para mantener este transporte. Finalmente, estime la escala de Kolmogorov [[eta]] si la disipación es de [[epsilon]] = 0.5 m^2/s^3.

## Datos
- Densidad [[rho]]: 880 kg/m^3
- Viscosidad dinámica: 0.02 Pa*s
- Longitud [[L]]: 1200 m
- Diámetro [[D]]: 0.4 m
- Velocidad [[v]]: [[v]] = 2.0 m/s
- Tasa de disipación [[epsilon]]: [[epsilon]] = 0.5 m^2/s^3

## Definición del sistema
El sistema consiste en un conducto cilíndrico de sección constante, representativo de un oleoducto industrial. Se asume flujo incompresible, lo cual es válido para líquidos a presiones moderadas. El flujo se considera isotermo, ignorando el calentamiento por fricción viscosa. Se asume que el flujo está totalmente desarrollado, lo que significa que el perfil de velocidades no cambia axialmente. El fluido es newtoniano, siguiendo una relación lineal entre el esfuerzo cortante y la tasa de deformación.

## Modelo físico
Utilizaremos el número de Reynolds [[Re]] para clasificar el régimen de flujo. Si [[Re]] > 4000, aplicaremos modelos de turbulencia. Para el cálculo del factor de fricción [[f]] en tuberías lisas, emplearemos la correlación de Blasius, que es una aproximación empírica robusta para el rango de interés. La caída de presión [[dp]] se obtendrá mediante la ecuación fundamental de Darcy-Weisbach. Para el análisis estructural de la turbulencia, calcularemos la microescala de Kolmogorov [[eta]] relacionando la viscosidad cinemática y la tasa de disipación [[epsilon]].

## Justificación del modelo
La elección del número de Reynolds como parámetro de decisión se justifica porque representa el balance entre las fuerzas de inercia, que tienden a desestabilizar el flujo, y las fuerzas viscosas, que tienden a amortiguarlo. En este escenario, las grandes dimensiones y la velocidad sugieren una dominancia inercial. La correlación de Blasius se justifica por la ausencia de rugosidad significativa en tuberías de acero nuevas y porque el Reynolds resultante estará dentro del rango de validez de la potencia un cuarto. La ecuación de Darcy-Weisbach es físicamente superior a la de Poiseuille en este caso, ya que incluye el término cuadrático de la velocidad, esencial para capturar la disipación de energía por remolinos. Finalmente, la escala de Kolmogorov es el modelo estándar para describir el límite inferior de la cascada de energía de Richardson, donde la energía se disipa finalmente en calor.

## Resolución simbólica
1. Número de Reynolds (adimensional):

2. Factor de fricción de Blasius (para tuberías lisas):

3. Caída de presión total (Darcy-Weisbach):

4. Escala de microturbulencia de Kolmogorov:

## Sustitución numérica
**CáC?lculo de [[Re]]:**

Como [[Re]] = 35,200 > 4000, el flujo es plenamente turbulento y el uso de modelos laminares produciría errores masivos.

**Cálculo de f:**

**CáC?lculo de [[dp]]:**

La caída de presión es de aproximadamente **1.22 bar**.

**CáC?lculo de [[eta]]:**
Primero calculamos la viscosidad cinemática [[nu]] = viscosidad din?mica/[[rho]] = 0.02 / 880 aproximadamente 2.27 * 10^{-5} m^2/s.

La escala es de **0.123 mm**.

## Validación dimensional

Dado que el pascal equivale a fuerza por unidad de ?rea, la dimensi?n obtenida es coherente con una ca?da de presi?n.

## Interpretación física
El valor obtenido de 1.22 bar no es solo una cifra técnica; representa el "peaje energético" que el sistema debe pagar por operar en régimen turbulento. Esta presión es el reflejo macroscópico de una danza caótica de remolinos que se fragmentan continuamente. La escala [[eta]] de 0.123 mm es fundamental: nos dice que toda la energía inyectada por la bomba fluye a través de una cascada de tamaños hasta que los remolinos son tan pequeños que la viscosidad del petróleo los frena por completo. En este punto, la energía cinética se convierte en calor, aumentando ligeramente la temperatura del crudo. Es un recordatorio de que, incluso en los sistemas más grandes, la física última se decide en la microescala.

# Ejemplo de aplicación real

## Contexto
En la ingeniería de procesos, el diseño de reactores químicos requiere a menudo un régimen turbulento para asegurar que los reactivos se mezclen íntimamente a nivel molecular. Un flujo laminar crearía "bolsas" de reactivos sin mezclar, reduciendo drásticamente el rendimiento de la planta.

## Estimación física
Consideremos un reactor donde el fluido tiene una viscosidad similar al agua y circula a 3 m/s en tubos de 2 cm. El Reynolds es de 60000. La caída de presión [[dp]] será alta, pero necesaria para generar la turbulencia requerida. La escala de Kolmogorov [[eta]] será de unas 20 micras. Esto significa que la mezcla mecánica es efectiva hasta escalas muy pequeñas, dejando que la difusión molecular haga el resto del trabajo de forma casi instantánea.

## Interpretación
La eficiencia de la planta depende del control de la turbulencia. Si el factor de fricción [[f]] aumenta debido a incrustaciones en la tubería, la caída de presión [[dp]] podría superar la capacidad de las bombas, provocando una caída en el caudal [[v]] y, por ende, una pérdida del régimen turbulento y de la calidad de la mezcla. Por ello, monitorizar [[dp]] es la forma indirecta de asegurar que la química del proceso está funcionando correctamente en las escalas más pequeñas del fluido. Entender la escala [[eta]] permite a los ingenieros predecir si el tiempo de reacción estará limitado por la mezcla o por la cinética química pura.