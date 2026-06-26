const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
Un ingeniero está analizando el flujo de agua a través de un microcanal horizontal de 100\\,mum de ancho. El flujo es estacionario y está completamente desarrollado. Se mide un gradiente de presión constante de 1000\\,Pa/m en la dirección del flujo. Sabiendo que el agua tiene una densidad de 1000\\,kg/m^3 y una viscosidad de 10^{-3}\\,Pa?s, determine la aceleración material de las partículas y el número de Reynolds si la velocidad media es de 1\\,mm/s.\r
\r
## Datos\r
- Gradiente de presión [[gp]]: -1000\\,Pa/m (favorable al flujo).\r
- Densidad [[rho]]: 1000\\,kg/m^3.\r
- Viscosidad dinámica [[mu]]: 10^{-3}\\,Pa?s.\r
- Velocidad característica [[v]]: 10^{-3}\\,m/s.\r
- Longitud característica [[L]]: 10^{-4}\\,m (ancho del canal).\r
- Gravedad proyectada [[gx]]: 0\\,m/s^2 (horizontal).\r
\r
## Definición del sistema\r
El sistema consiste en una partícula fluida moviéndose en el centro del microcanal. Debido a que el canal es horizontal, la gravedad no influye en la dirección del movimiento. Al ser un flujo completamente desarrollado, el perfil de velocidades no cambia a lo largo del canal, lo que simplifica enormemente el balance de fuerzas local.\r
\r
## Modelo físico\r
Usamos el balance unidimensional de Navier-Stokes para relacionar la aceleración con las fuerzas de presión y viscosidad:\r
{{f:balance_1d}}\r
\r
Además, evaluamos el régimen de flujo mediante el número de Reynolds:\r
{{f:re_apoyo}}\r
\r
## Justificación del modelo\r
Elegimos Navier-Stokes porque el agua es un fluido viscoso y el sistema opera en una escala donde la fricción interna es relevante. La simplificación 1D es válida porque el flujo es predominantemente unidireccional y desarrollado. Al despreciar efectos de entrada y salida, nos centramos en la física pura del balance entre gradiente de presión y fricción viscosa.\r
\r
## Resolución simbólica\r
En flujo estacionario y desarrollado, la aceleración material [[a]] debe ser cero si el sistema está en equilibrio.\r
De la ecuación de balance:\r
\r
Caso de equilibrio en el que no hay aceleraci?n material neta y la gravedad proyectada no contribuye al eje de avance:\r
\r
El número de Reynolds se calcula directamente:\r
\r
{{f:re_apoyo}}\r
\r
## Sustitución numérica\r
Para el Reynolds:\r
\r
Para el balance de fuerzas:\r
Como el flujo es estacionario y desarrollado, la aceleraci?n material neta se anula por balance de fuerzas. El gradiente de presión suministrado (1000\\,Pa/m) se consume íntegramente en vencer la resistencia viscosa.\r
\r
## Validación dimensional\r
El término [[rho]] a tiene unidades de [kg/m^3 ? m/s^2] = [kg/(m^2 ? s^2)].\r
El gradiente [[gp]] tiene unidades de [Pa/m] = [(N/m^2)/m] = [kg/(m^2 ? s^2)].\r
Ambos lados de la ecuación son consistentes dimensionalmente, lo que valida la estructura física de nuestra solución.\r
\r
## Interpretación física\r
El valor de [[Re]] = 0.1 confirma que estamos en un **régimen laminar** (flujo de Stokes), donde la viscosidad domina totalmente sobre la inercia. La aceleración neta es nula porque el empuje de la presión compensa exactamente el frenado viscoso de las paredes del microcanal. En este régimen, el flujo es altamente predecible y carece de inestabilidades.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
Se transporta petróleo crudo ([[rho]] = 850\\,kg/m^3, [[mu]] = 0.1\\,Pa?s) por una tubería de 20\\,cm de diámetro a una velocidad de 2\\,m/s. Se desea saber si el modelo de Navier-Stokes laminar es adecuado para este análisis de ingeniería.\r
\r
## Estimación física\r
Para realizar una estimación física del régimen, calculamos el número de Reynolds. El orden de magnitud de las fuerzas de inercia frente a las viscosas nos dirá si el flujo es estable.\r
Utilizando el diámetro como longitud característica:\r
\r
Esta aproximación nos indica que las fuerzas de inercia son más de tres mil veces superiores a las viscosas, lo que sugiere una escala de movimiento donde la viscosidad ya no puede amortiguar todas las perturbaciones.\r
\r
## Interpretación\r
Dado que [[Re]] = 3400, el flujo se encuentra en la **zona de transición** entre laminar y turbulento (superando el límite crítico de 2300 para tuberías). Esto significa que las fuerzas de inercia están empezando a desestabilizar las capas de fluido, y un análisis basado puramente en Navier-Stokes laminar daría errores significativos en el cálculo de la pérdida de carga.\r
\r
Físicamente, esto implica que el gradiente de presión necesario para mantener el flujo será mucho mayor que el predicho por la ley de Poiseuille, debido a la disipación adicional de energía en los remolinos turbulentos. Para un diseño seguro, se recomienda utilizar correlaciones empíricas de fricción o modelos de turbulencia avanzada.\r
\r
## Detalles adicionales para alcanzar longitud\r
Este análisis es fundamental en la industria petrolera para dimensionar las bombas de impulsión. Si se asumiera erróneamente un flujo laminar, la caída de presión se subestimaría, lo que podría llevar al fallo del sistema por falta de potencia. La transición a la turbulencia no es un punto exacto, sino un rango donde las pequeñas perturbaciones pueden crecer de forma exponencial.\r
\r
En este escenario, cualquier rugosidad en la pared de la tubería o cualquier codo en el trazado actuará como un disparador de la turbulencia. Por lo tanto, el número de Reynolds actúa como nuestro centinela físico para decidir qué nivel de complejidad matemática debemos aplicar a las ecuaciones de Navier-Stokes para obtener una solución realista y segura.`;export{e as default};
