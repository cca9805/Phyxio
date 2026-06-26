const e=`## Errores conceptuales

### Error 1: Creer que las ondas de flexión no son dispersivas

**Por qué parece correcto**

El alumno ha estudiado las ondas en cuerdas y las ondas longitudinales en barras, donde la velocidad es constante e independiente de la frecuencia. Generaliza este resultado a todas las ondas en sólidos, concluyendo que la velocidad de propagación es una propiedad del material, no de la onda.

**Por qué es incorrecto**

La dispersión flexional es consecuencia del **orden de la derivada espacial** en la ecuación de movimiento. La cuerda y la barra longitudinal usan la segunda derivada, produciendo ondas no dispersivas. La viga en flexión involucra la cuarta derivada, lo que introduce una relación cuadrática entre frecuencia y número de onda. Esto hace que la velocidad de fase dependa de la frecuencia. Es una propiedad estructural del tipo de deformación, no solo del material.

**Señal de detección**

El alumno calcula una única velocidad de fase flexional (sin especificar la frecuencia) y la usa para todas las frecuencias. Afirma que un pulso de flexión mantiene su forma al propagarse.

**Corrección conceptual**

La velocidad de fase flexional siempre requiere especificar la frecuencia. Para un material y sección dados, [[v_fase_flex]] es diferente a cada frecuencia. Un pulso de flexión se ensancha temporalmente al propagarse porque sus componentes frecuenciales viajan a velocidades diferentes.

**Mini-ejemplo de contraste**

Un golpe en un raíl de tren produce un pulso breve. A 10 m del punto de impacto, las componentes de 5 kHz llegan en 6 ms (v_f ≈ 1700 m/s) mientras que las de 500 Hz llegan en 19 ms (v_f ≈ 530 m/s). El observador percibe primero las frecuencias agudas y después las graves, fenómeno imposible en un medio no dispersivo.

---

### Error 2: Confundir velocidad de fase con velocidad de grupo

**Por qué parece correcto**

En ondas no dispersivas (cuerda, barra longitudinal), velocidad de fase y velocidad de grupo son iguales. El alumno asume que esto siempre es así y usa indistintamente ambos conceptos, o desconoce la existencia de la velocidad de grupo.

**Por qué es incorrecto**

En ondas flexionales, la velocidad de grupo es **exactamente el doble** de la velocidad de fase. La velocidad de fase indica cuán rápido se mueve un patrón de crestas, pero la energía viaja al doble de esa velocidad. Si se usa la velocidad de fase para estimar tiempos de llegada de señales o transmisión de potencia, se obtiene un error del 100 % (se duplica el tiempo real).

**Señal de detección**

El alumno usa [[v_fase_flex]] para calcular el tiempo que un impacto tarda en recorrer la longitud de una viga, obteniendo un tiempo doble del real. O bien, al medir experimentalmente la velocidad de un pulso, encuentra un valor que no coincide con la fórmula de velocidad de fase.

**Corrección conceptual**

En ondas flexionales de Euler-Bernoulli, la velocidad de grupo vale 2·[[v_fase_flex]]. Para calcular tiempos de llegada o transmisión de energía, usar siempre [[v_grupo_flex]]. La velocidad de fase solo es relevante para describir la evolución espacial del patrón de interferencia.

**Mini-ejemplo de contraste**

Una barra de aluminio de 2 m de longitud se golpea en un extremo. La velocidad de fase a 1 kHz es 150 m/s (tiempo aparente de 13.3 ms) pero la energía llega realmente en 6.7 ms porque v_g vale 300 m/s. Si se cronometra la llegada del impacto, se mide la velocidad de grupo, no la de fase.

## Errores de modelo

### Error 1: Aplicar Euler-Bernoulli a frecuencias donde la longitud de onda es comparable al espesor

**Por qué parece correcto**

La fórmula de Euler-Bernoulli es simple, elegante y numéricamente estable. No da señal matemática de fallo: produce un número para cualquier frecuencia. El alumno la aplica sin verificar el rango de validez.

**Por qué es incorrecto**

Cuando [[lambda_flex]] es comparable al espesor (menor de 6 veces), la deformación por cortante transversal y la inercia rotacional reducen significativamente la velocidad real por debajo de la predicción de Euler-Bernoulli. El error puede superar el 30 % y crece monótonamente con la frecuencia. El modelo sobreestima las velocidades porque ignora un mecanismo físico que frena la onda.

**Señal de detección**

La velocidad de fase calculada supera el 50 % de la velocidad longitudinal del mismo material. Para acero, si [[v_fase_flex]] resulta mayor de 2500 m/s, el modelo está fuera de rango. Las mediciones experimentales caen por debajo de las predicciones de forma sistemática.

**Corrección conceptual**

Calcular siempre el producto k·[[r_giro]] y verificar que sea menor de 0.3. Si no lo es, usar la teoría de Timoshenko que incorpora cortante e inercia rotacional y predice la saturación correcta de la velocidad.

**Mini-ejemplo de contraste**

Una barra de acero de 5 mm flectando a 200 kHz tendría según Euler-Bernoulli una velocidad de fase de 1840 m/s. La medición real da unos 1200 m/s porque la deformación por cortante frena la onda. El error es del 53 %, inaceptable para cualquier diseño.

---

### Error 2: Usar la fórmula de velocidad longitudinal para calcular la propagación de flexión

**Por qué parece correcto**

La velocidad longitudinal en barras (raíz de E/rho) es una fórmula sencilla y muy conocida. El alumno la aplica a todos los problemas de propagación en vigas, sin distinguir el tipo de onda.

**Por qué es incorrecto**

La velocidad longitudinal no contiene información sobre la geometría de la sección porque las ondas longitudinales no dependen de la forma de la sección (solo del área para la masa lineal). Las ondas flexionales dependen críticamente del momento de inercia [[I_seccion]], que refleja cómo está distribuido el material respecto al eje neutro. Usar la velocidad longitudinal para flexión produce errores de un orden de magnitud a frecuencias audibles.

**Señal de detección**

El alumno obtiene una velocidad de flexión constante (independiente de la frecuencia) para una viga metálica, del orden de miles de m/s. Esto es la velocidad longitudinal, no la flexional.

**Corrección conceptual**

La velocidad de fase flexional requiere incluir explícitamente [[I_seccion]], [[rho_lin]] y [[omega]]. No se puede obtener a partir de una sola propiedad del material. A 1 kHz en una barra de acero de 5 mm, la flexional es unas 40 veces más lenta que la longitudinal.

**Mini-ejemplo de contraste**

La velocidad longitudinal en acero es 5100 m/s (constante). La flexional a 1 kHz es 130 m/s, a 10 kHz es 410 m/s, a 100 kHz es 1300 m/s. Usar 5100 m/s para todas las frecuencias produce errores de 4× a 40× según la frecuencia.

## Errores matemáticos

### Error 1: Olvidar la raíz cuarta en la fórmula de velocidad de fase

**Por qué parece correcto**

El alumno recuerda que la velocidad de propagación suele ser la raíz cuadrada de un cociente rigidez/densidad. Aplica la raíz cuadrada al producto EI por [[omega]] al cuadrado dividido por rho·A, en lugar de la raíz cuarta, obteniendo un resultado con dimensiones incorrectas.

**Por qué es incorrecto**

La velocidad de fase flexional es la raíz **cuarta** del producto EI por [[omega]] al cuadrado dividido por rho·A. Esto se demuestra a partir de la definición de velocidad de fase como cociente entre frecuencia angular y número de onda, combinada con la relación de dispersión donde [[omega]] es proporcional al cuadrado del número de onda. La raíz cuadrada del cociente EI/(rho·A) no da una velocidad sino un parámetro con dimensiones de velocidad al cuadrado por longitud, que es incorrecto dimensionalmente para [[v_fase_flex]].

**Señal de detección**

El resultado de [[v_fase_flex]] tiene unidades incorrectas (m²/s en vez de m/s) o produce valores numéricamente absurdos (del orden de 10⁶ m/s para una barra normal a frecuencia audible).

**Corrección conceptual**

La fórmula correcta es [[v_fase_flex]] igual a la raíz cuarta del producto EI por [[omega]] al cuadrado dividido por rho·A. Dimensionalmente: \`[M L⁻¹ T⁻²]·[L⁴]·[T⁻²]/[M L⁻¹]\` da \`[L⁴ T⁻⁴]\`; su raíz cuarta da \`[L T⁻¹]\`.

**Mini-ejemplo de contraste**

Para acero, usando EI por [[omega]] al cuadrado dividido por rho·A con los valores numéricos típicos a 1 kHz, la raíz cuarta da 130 m/s (correcto); la raíz cuadrada daría 17 000 m/s (absurdo, mayor que la velocidad longitudinal).

---

### Error 2: Introducir la frecuencia en Hz donde se requiere rad/s

**Por qué parece correcto**

Las fuentes de excitación suelen especificarse en Hz (oscilador, función generadora). El alumno introduce directamente el valor en Hz en la fórmula de [[v_fase_flex]] sin multiplicar por 2π.

**Por qué es incorrecto**

La fórmula de velocidad de fase contiene [[omega]] en rad/s. Si se introduce f en Hz, se obtiene una velocidad (2π)^(1/2) ≈ 2.5 veces menor que la real, porque la raíz cuarta de [[omega]] al cuadrado es la raíz cuadrada de [[omega]], y [[omega]] es 2π·f.

**Señal de detección**

Las velocidades calculadas son sistemáticamente un factor 2.5 menores que las medidas experimentalmente, para todas las frecuencias. La curva de dispersión tiene la forma correcta (raíz cuadrada) pero está desplazada hacia abajo.

**Corrección conceptual**

Siempre convertir Hz a rad/s multiplicando por 2π antes de sustituir en la fórmula. Alternativamente, reescribir la fórmula en función de f directamente: [[v_fase_flex]] es la raíz cuarta de (EI·4π²·f²/rho·A).

**Mini-ejemplo de contraste**

A 1000 Hz, [[omega]] vale 6283 rad/s. Usar 1000 en la fórmula en vez de 6283 produce un error de factor (6283/1000)^(1/2) ≈ 2.51. La velocidad resultante sale 52 m/s en vez de 130 m/s.

## Errores de interpretación

### Error 1: Interpretar velocidad de fase cero a frecuencia cero como ausencia de propagación

**Por qué parece correcto**

La fórmula indica que cuando [[omega]] tiende a cero, [[v_fase_flex]] tiende a cero. El alumno concluye que las ondas de muy baja frecuencia no se propagan en la viga.

**Por qué es incorrecto**

El límite de frecuencia cero no corresponde a una onda de flexión sino a una deformación estática. La viga sigue respondiendo a cargas estáticas (la solución estática existe y es finita), pero esa respuesta no tiene carácter ondulatorio. Las ondas de flexión existen a cualquier frecuencia finita, por baja que sea; simplemente su velocidad se reduce y su longitud de onda se hace muy grande. La transición es continua, no abrupta.

**Señal de detección**

El alumno afirma que "por debajo de cierta frecuencia crítica la viga no puede propagar ondas de flexión". No existe tal frecuencia de corte en Euler-Bernoulli; la dispersión reduce la velocidad pero no anula la propagación.

**Corrección conceptual**

Toda frecuencia finita produce una onda de flexión propagante con velocidad finita (aunque pueda ser muy baja). No hay frecuencia de corte. Lo que ocurre a muy baja frecuencia es que la longitud de onda se hace tan grande que la respuesta es esencialmente estática y el concepto de onda pierde utilidad práctica.

**Mini-ejemplo de contraste**

A 1 Hz ([[omega]] ≈ 6.28 rad/s), una barra de acero de 5 mm tiene [[v_fase_flex]] ≈ 4 m/s y [[lambda_flex]] ≈ 4 m. La onda existe, pero su longitud de onda es comparable a la longitud de la viga y la respuesta se describe mejor como una vibración del modo fundamental.

---

### Error 2: Asumir que la velocidad de grupo siempre es menor que la de fase

**Por qué parece correcto**

En muchos sistemas dispersivos familiares (ondas en agua profunda, ondas electromagnéticas en medios con dispersión normal), la velocidad de grupo es menor que la de fase. El alumno generaliza esta experiencia a todos los sistemas dispersivos.

**Por qué es incorrecto**

En ondas de flexión de vigas, la relación de dispersión es cuadrática con concavidad hacia arriba ([[omega]] proporcional al cuadrado del número de onda). La derivada de [[omega]] respecto al número de onda da la velocidad de grupo, que es exactamente el doble de la velocidad de fase. Aquí la velocidad de grupo es **mayor** que la de fase. Es un ejemplo de dispersión anómala (velocidad de grupo mayor que velocidad de fase).

**Señal de detección**

El alumno dibuja la velocidad de grupo por debajo de la velocidad de fase en el gráfico de dispersión, o afirma que la energía viaja más lento que las crestas.

**Corrección conceptual**

En ondas flexionales de Euler-Bernoulli, v_g es siempre exactamente el doble de v_f. La energía viaja más rápido que el patrón de fase. Esto es una consecuencia directa de que la curva de [[omega]] frente al número de onda es una parábola convexa.

**Mini-ejemplo de contraste**

A 1 kHz en acero con sección de 5 mm, v_f es 130 m/s y v_g es 260 m/s. Un cronómetro midiendo la llegada de un pulso indicaría 260 m/s, no 130 m/s. Si el alumno asume v_g menor que v_f (digamos 65 m/s), predice un tiempo de llegada 4 veces mayor que el real.

## Regla de autocontrol rápido

Antes de dar por bueno un cálculo de [[v_fase_flex]], verificar:

1. **Dimensiones del resultado:** [[v_fase_flex]] debe tener unidades de m/s. Si tiene m²/s, se ha olvidado la raíz cuarta.
2. **Rango:** para vigas metálicas a frecuencias audibles (100 Hz–10 kHz), [[v_fase_flex]] típica es 50–1000 m/s. Valores de miles de m/s a frecuencia audible señalan error.
3. **Comparación con longitudinal:** [[v_fase_flex]] debe ser siempre menor que la velocidad longitudinal sqrt([[E_young]]/[[rho_vol]]). Si no lo es, el modelo está fuera de rango.
4. **Relación grupo-fase:** [[v_grupo_flex]] debe ser exactamente 2·[[v_fase_flex]]. Si difiere, se ha aplicado una relación incorrecta.
5. **Dependencia con frecuencia:** [[v_fase_flex]] debe cambiar si se cambia [[omega]]. Un resultado constante indica que se ha usado la fórmula longitudinal por error.
6. **Unidades de entrada:** [[omega]] en rad/s (no Hz), [[I_seccion]] en m⁴ (no cm⁴), [[E_young]] en Pa (no GPa).
`;export{e as default};
