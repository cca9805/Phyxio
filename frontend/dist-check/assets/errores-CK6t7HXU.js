const e=`# Errores comunes: MCUA\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir la aceleración angular (\\(\\alpha\\)) con la aceleración tangencial (\\( [[a_t]] \\))\r
\r
**Por qué parece correcto**\r
Porque ambas describen un "cambio" en la rapidez del giro y sus nombres suenan muy similares.\r
\r
**Por qué es incorrecto**\r
Es un error de categorías dimensionales. La aceleración angular (\\(\\alpha\\)) describe qué tan rápido cambia el ritmo de rotación en radianes por segundo cuadrado, y es una magnitud común a todos los puntos de un sólido rígido. En cambio, la aceleración tangencial (\\( [[a_t]] \\)) describe cuánto cambia la rapidez lineal en metros por segundo cuadrado y depende directamente del radio ( [[a_t]] ). Un punto cerca del eje y un punto en el borde tienen la misma \\(\\alpha\\), pero el del borde tiene mucha más \\( [[a_t]] \\). No distinguirlas impide entender por qué los bordes de los discos sufren más estrés mecánico que el centro.\r
\r
**Señal de detección**\r
El alumno intenta sumar algebraicamente \\(\\alpha\\) con velocidades lineales o usa unidades de \\(\\text{m/s}^2\\) para referirse al ritmo de giro del motor.\r
\r
**Corrección conceptual**\r
Separar siempre el "mundo angular" (\\(\\text{rad, rad/s, rad/s}^2\\)) del "mundo lineal" (\\(\\text{m, m/s, m/s}^2\\)) usando el radio como único puente conector.\r
\r
**Mini-ejemplo de contraste**\r
En un ventilador arrancando, todas las aspas ganan vueltas al mismo ritmo (\\(\\alpha\\)), pero las puntas "corren" más rápido hacia adelante (\\( [[a_t]] \\)) que la base.\r
\r
## Errores de modelo\r
\r
### Error 2: Asumir que la aceleración centrípeta (\\( [[a_c]] \\)) es constante en el MCUA\r
\r
**Por qué parece correcto**\r
Porque en el modelo previo (MCU) la aceleración centrípeta era constante, y tendemos a arrastrar esa inercia mental.\r
\r
**Por qué es incorrecto**\r
En el MCUA, la velocidad angular \\(\\omega\\) cambia segundo a segundo. Como la aceleración centrípeta depende del cuadrado de esa velocidad ( [[a_c]] ), la fuerza necesaria para mantener al objeto en el círculo debe aumentar (si acelera) o disminuir (si frena) continuamente. Tratar el \\( [[a_c]] \\) como un valor fijo conduce a errores masivos en el cálculo de tensiones estructurales y fuerzas inerciales. Un motor que acelera exige cada vez más tracción radial para no desintegrarse.\r
\r
**Señal de detección**\r
El alumno utiliza un único valor de \\( [[a_c]] \\) calculado al inicio del problema para responder preguntas sobre el estado final del sistema.\r
\r
**Corrección conceptual**\r
Recordar que en el MCUA, la aceleración centrípeta es una función del tiempo: [[a_c]] (t) → (ω_0 + α t)² R. Siempre debe recalcularse para el instante específico solicitado.\r
\r
**Mini-ejemplo de contraste**\r
En una centrífuga que arranca, la presión sobre las paredes del tubo de ensayo no es constante, sino que aumenta cuadráticamente conforme el motor gana velocidad.\r
\r
## Errores matemáticos\r
\r
### Error 3: Errores de signo en procesos de frenado (deceleración angular)\r
\r
**Por qué parece correcto**\r
Porque se tiende a usar valores absolutos en las fórmulas para evitar complicaciones con los negativos.\r
\r
**Por qué es incorrecto**\r
En cinemática rotacional, el signo de \\(\\alpha\\) define si el sistema gana o pierde energía. Si un disco gira en sentido positivo pero frena, \\(\\alpha\\) debe ser negativa. Olvidar este signo en la ecuación de posición (θ → θ_0 + ω_0 t + 1/2 α t²) hará que el objeto parezca acelerar infinitamente en lugar de detenerse. Lo mismo ocurre en la ecuación sin tiempo: un signo mal puesto bajo una raíz cuadrada puede dar lugar a resultados imaginarios o físicamente imposibles.\r
\r
**Señal de detección**\r
Al calcular el tiempo de parada de un motor, el alumno obtiene un valor negativo o una velocidad final mayor que la inicial a pesar de estar frenando.\r
\r
**Corrección conceptual**\r
Dibujar siempre un sistema de referencia angular. Si el giro y la aceleración tienen sentidos opuestos, \\(\\alpha\\) debe entrar en las ecuaciones con signo negativo.\r
\r
**Mini-ejemplo de contraste**\r
Si un tocadiscos tarda 2 segundos en frenar, su \\(\\alpha\\) debe ser tal que al restarla de la velocidad inicial el resultado sea cero, no el doble.\r
\r
## Errores de interpretación\r
\r
### Error 4: Mezclar unidades de frecuencia (rpm) con velocidad angular (rad/s) en las fórmulas\r
\r
**Por qué parece correcto**\r
Porque las revoluciones por minuto son la unidad estándar en la industria y en los enunciados de los problemas.\r
\r
**Por qué es incorrecto**\r
Las ecuaciones cinemáticas del MCUA (como ω² → ω_0² + 2αΔθ) se derivan del cálculo con radianes. Sustituir directamente valores en rpm dentro de estas fórmulas produce errores de factor \\(2\\pi/60\\) que se propagan y se magnifican en los términos cuadráticos. Es uno de los errores que más "accidentes" causa en los exámenes, produciendo órdenes de magnitud totalmente alejados de la realidad física del problema.\r
\r
**Señal de detección**\r
Resultados de aceleración o desplazamiento angular absurdamente grandes o pequeños (generalmente erróneos por un factor de ~3600 o ~10).\r
\r
**Corrección conceptual**\r
Adoptar el hábito de convertir todos los datos a Unidades del Sistema Internacional (rad/s y rad) antes de escribir la primera línea de resolución algebraica.\r
\r
**Mini-ejemplo de contraste**\r
Un motor a $60\\;\\text{rpm}$ no tiene una velocidad de "60", sino de $2\\pi\\;\\text{rad/s}$ (aprox $6{,}28$). Usar 60 en lugar de 6,28 triplicará erróneamente cualquier cálculo de aceleración posterior.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de entregar un problema de MCUA, verifica la **Regla de las Tres Ás (Aceleraciones)**: ¿He calculado la **Angular** (\\(\\alpha\\)) en radianes? ¿He distinguido la **Tangencial** (\\( [[a_t]] \\)) de la **Centrípeta** (\\( [[a_c]] \\))? ¿He comprobado que el **Módulo** de la aceleración total aumenta si el sistema está acelerando? Si puedes responder "sí" a las tres, tu análisis cinemático es robusto.\r
`;export{e as default};
