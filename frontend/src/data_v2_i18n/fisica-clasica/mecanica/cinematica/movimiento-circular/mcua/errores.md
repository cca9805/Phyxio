# Errores comunes: MCUA

## Errores conceptuales

### Error 1: Confundir la aceleración angular (\(\alpha\)) con la aceleración tangencial (\( [[a_t]] \))

**Por qué parece correcto**
Porque ambas describen un "cambio" en la rapidez del giro y sus nombres suenan muy similares.

**Por qué es incorrecto**
Es un error de categorías dimensionales. La aceleración angular (\(\alpha\)) describe qué tan rápido cambia el ritmo de rotación en radianes por segundo cuadrado, y es una magnitud común a todos los puntos de un sólido rígido. En cambio, la aceleración tangencial (\( [[a_t]] \)) describe cuánto cambia la rapidez lineal en metros por segundo cuadrado y depende directamente del radio ( [[a_t]] ). Un punto cerca del eje y un punto en el borde tienen la misma \(\alpha\), pero el del borde tiene mucha más \( [[a_t]] \). No distinguirlas impide entender por qué los bordes de los discos sufren más estrés mecánico que el centro.

**Señal de detección**
El alumno intenta sumar algebraicamente \(\alpha\) con velocidades lineales o usa unidades de \(\text{m/s}^2\) para referirse al ritmo de giro del motor.

**Corrección conceptual**
Separar siempre el "mundo angular" (\(\text{rad, rad/s, rad/s}^2\)) del "mundo lineal" (\(\text{m, m/s, m/s}^2\)) usando el radio como único puente conector.

**Mini-ejemplo de contraste**
En un ventilador arrancando, todas las aspas ganan vueltas al mismo ritmo (\(\alpha\)), pero las puntas "corren" más rápido hacia adelante (\( [[a_t]] \)) que la base.

## Errores de modelo

### Error 2: Asumir que la aceleración centrípeta (\( [[a_c]] \)) es constante en el MCUA

**Por qué parece correcto**
Porque en el modelo previo (MCU) la aceleración centrípeta era constante, y tendemos a arrastrar esa inercia mental.

**Por qué es incorrecto**
En el MCUA, la velocidad angular \(\omega\) cambia segundo a segundo. Como la aceleración centrípeta depende del cuadrado de esa velocidad ( [[a_c]] ), la fuerza necesaria para mantener al objeto en el círculo debe aumentar (si acelera) o disminuir (si frena) continuamente. Tratar el \( [[a_c]] \) como un valor fijo conduce a errores masivos en el cálculo de tensiones estructurales y fuerzas inerciales. Un motor que acelera exige cada vez más tracción radial para no desintegrarse.

**Señal de detección**
El alumno utiliza un único valor de \( [[a_c]] \) calculado al inicio del problema para responder preguntas sobre el estado final del sistema.

**Corrección conceptual**
Recordar que en el MCUA, la aceleración centrípeta es una función del tiempo: [[a_c]] (t) → (ω_0 + α t)² R. Siempre debe recalcularse para el instante específico solicitado.

**Mini-ejemplo de contraste**
En una centrífuga que arranca, la presión sobre las paredes del tubo de ensayo no es constante, sino que aumenta cuadráticamente conforme el motor gana velocidad.

## Errores matemáticos

### Error 3: Errores de signo en procesos de frenado (deceleración angular)

**Por qué parece correcto**
Porque se tiende a usar valores absolutos en las fórmulas para evitar complicaciones con los negativos.

**Por qué es incorrecto**
En cinemática rotacional, el signo de \(\alpha\) define si el sistema gana o pierde energía. Si un disco gira en sentido positivo pero frena, \(\alpha\) debe ser negativa. Olvidar este signo en la ecuación de posición (θ → θ_0 + ω_0 t + 1/2 α t²) hará que el objeto parezca acelerar infinitamente en lugar de detenerse. Lo mismo ocurre en la ecuación sin tiempo: un signo mal puesto bajo una raíz cuadrada puede dar lugar a resultados imaginarios o físicamente imposibles.

**Señal de detección**
Al calcular el tiempo de parada de un motor, el alumno obtiene un valor negativo o una velocidad final mayor que la inicial a pesar de estar frenando.

**Corrección conceptual**
Dibujar siempre un sistema de referencia angular. Si el giro y la aceleración tienen sentidos opuestos, \(\alpha\) debe entrar en las ecuaciones con signo negativo.

**Mini-ejemplo de contraste**
Si un tocadiscos tarda 2 segundos en frenar, su \(\alpha\) debe ser tal que al restarla de la velocidad inicial el resultado sea cero, no el doble.

## Errores de interpretación

### Error 4: Mezclar unidades de frecuencia (rpm) con velocidad angular (rad/s) en las fórmulas

**Por qué parece correcto**
Porque las revoluciones por minuto son la unidad estándar en la industria y en los enunciados de los problemas.

**Por qué es incorrecto**
Las ecuaciones cinemáticas del MCUA (como ω² → ω_0² + 2αΔθ) se derivan del cálculo con radianes. Sustituir directamente valores en rpm dentro de estas fórmulas produce errores de factor \(2\pi/60\) que se propagan y se magnifican en los términos cuadráticos. Es uno de los errores que más "accidentes" causa en los exámenes, produciendo órdenes de magnitud totalmente alejados de la realidad física del problema.

**Señal de detección**
Resultados de aceleración o desplazamiento angular absurdamente grandes o pequeños (generalmente erróneos por un factor de ~3600 o ~10).

**Corrección conceptual**
Adoptar el hábito de convertir todos los datos a Unidades del Sistema Internacional (rad/s y rad) antes de escribir la primera línea de resolución algebraica.

**Mini-ejemplo de contraste**
Un motor a $60\;\text{rpm}$ no tiene una velocidad de "60", sino de $2\pi\;\text{rad/s}$ (aprox $6{,}28$). Usar 60 en lugar de 6,28 triplicará erróneamente cualquier cálculo de aceleración posterior.

## Regla de autocontrol rápido

Antes de entregar un problema de MCUA, verifica la **Regla de las Tres Ás (Aceleraciones)**: ¿He calculado la **Angular** (\(\alpha\)) en radianes? ¿He distinguido la **Tangencial** (\( [[a_t]] \)) de la **Centrípeta** (\( [[a_c]] \))? ¿He comprobado que el **Módulo** de la aceleración total aumenta si el sistema está acelerando? Si puedes responder "sí" a las tres, tu análisis cinemático es robusto.
