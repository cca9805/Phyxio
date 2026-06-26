# Errores frecuentes — Ciclo Diesel

## Errores conceptuales

### Error 1: Creer que el rendimiento Diesel siempre es menor que el de Otto

**Por qué parece correcto**
La fórmula muestra que, para la misma relación de compresión, el factor de corte siempre penaliza al Diesel. Un alumno concluye que el Diesel es inherentemente peor que el Otto.

**Por qué es incorrecto**
Los motores Diesel operan con relaciones de compresión mucho mayores (14 a 25) que los Otto (8 a 12), porque el combustible no está presente durante la compresión y no hay riesgo de detonación prematura. Esta mayor compresión compensa con creces la penalización del factor de corte, haciendo que los motores Diesel reales sean más eficientes que los Otto reales.

**Señal de detección**
El alumno afirma que los motores Diesel son menos eficientes sin especificar a relación de compresión igual o a condiciones reales de operación.

**Corrección conceptual**
A relación de compresión igual, el Otto es más eficiente. En condiciones reales de operación, el Diesel es más eficiente porque puede usar relaciones de compresión imposibles para el Otto.

**Mini-ejemplo de contraste**
Otto con [[r]] de 10 y [[gamma]] de 1.4 tiene rendimiento de 60.2 %. Diesel con [[r]] de 20, [[r_c]] de 2 y [[gamma]] de 1.4 tiene rendimiento de 64.7 %. El Diesel supera al Otto a pesar del factor de corte porque su relación de compresión es el doble.

## Errores de modelo

### Error 2: Asumir que [[gamma]] es constante a todas las temperaturas

**Por qué parece correcto**
Los libros de texto presentan la fórmula con [[gamma]] de 1.4 como constante universal del aire, y los problemas tipo examen siempre usan este valor fijo.

**Por qué es incorrecto**
El índice adiabático del aire desciende de 1.4 a temperatura ambiente a valores cercanos a 1.3 o menores a las temperaturas de combustión (1500 a 2500 K). Los gases de combustión contienen además dióxido de carbono y agua, con [[gamma]] aún menor. Usar 1.4 sobreestima el rendimiento teórico en un 10 a 15 %.

**Señal de detección**
El alumno obtiene rendimientos teóricos superiores al 65 % para relaciones de compresión moderadas sin cuestionar la validez del modelo de aire frío.

**Corrección conceptual**
El modelo de aire frío ([[gamma]] de 1.4) da el límite superior. El modelo de aire caliente ([[gamma]] de 1.3) es más realista. El valor exacto requiere integración numérica con tablas de propiedades dependientes de la temperatura.

**Mini-ejemplo de contraste**
Con [[r]] de 18 y [[r_c]] de 2, aire frío ([[gamma]] de 1.4) da rendimiento de 60.0 %, pero aire caliente ([[gamma]] de 1.3) da 52.7 %. La diferencia de 7.3 puntos porcentuales no es despreciable en ingeniería.

## Errores matemáticos

### Error 3: Confundir la relación de compresión con la relación de corte

**Por qué parece correcto**
Ambas son cocientes de volúmenes adimensionales, y sus símbolos ([[r]] y [[r_c]]) son similares en notación compacta.

**Por qué es incorrecto**
La relación de compresión [[r]] es el cociente entre el volumen máximo y el mínimo del cilindro (geométrica, fija). La relación de corte [[r_c]] es el cociente entre los volúmenes al final y al inicio de la combustión isobárica (operativa, variable). Intercambiarlas en la fórmula produce errores numéricos enormes porque [[r]] es típicamente 14 a 25 mientras que [[r_c]] es típicamente 1.5 a 4.

**Señal de detección**
El alumno sustituye valores de 18 o 20 donde debería ir [[r_c]], obteniendo rendimientos negativos o mayores que uno.

**Corrección conceptual**
Identificar cada variable por su significado físico: [[r]] controla cuánto se comprime el gas (geometría del motor), [[r_c]] controla cuánto dura la combustión (cantidad de combustible).

**Mini-ejemplo de contraste**
Con [[r]] de 18 y [[r_c]] de 2 se obtiene rendimiento de 60.0 %. Si se intercambian ([[r]] de 2, [[r_c]] de 18), la fórmula da un valor de menos 2.3, que es absurdo y señala inmediatamente el error.

## Errores de interpretación

### Error 4: Creer que aumentar la relación de corte siempre produce más trabajo neto

**Por qué parece correcto**
Más combustible inyectado significa más calor absorbido [[Q_H]], y parece intuitivo que más energía de entrada signifique más trabajo de salida.

**Por qué es incorrecto**
Aumentar [[r_c]] incrementa [[Q_H]], pero la fracción de [[Q_H]] que se convierte en trabajo ([[eta_D]]) disminuye. El efecto neto sobre [[W_neto]] depende de cuál efecto domina. Existe un valor óptimo de [[r_c]] que maximiza [[W_neto]] por ciclo; más allá de ese punto, el incremento de [[Q_H]] no compensa la caída de [[eta_D]].

**Señal de detección**
El alumno propone aumentar indefinidamente la inyección de combustible para obtener más potencia, sin considerar la caída del rendimiento.

**Corrección conceptual**
El trabajo neto es el producto de [[eta_D]] por [[Q_H]]. Aumentar [[r_c]] incrementa [[Q_H]] linealmente pero reduce [[eta_D]] de forma no lineal. El óptimo se encuentra derivando [[W_neto]] respecto a [[r_c]] e igualando a cero.

**Mini-ejemplo de contraste**
Con [[r]] de 18 y [[gamma]] de 1.4: para [[r_c]] de 2, [[eta_D]] es 0.600 y si [[Q_H]] es 1000 kJ/kg, [[W_neto]] es 600 kJ/kg. Para [[r_c]] de 4, [[eta_D]] es 0.504 y si [[Q_H]] sube a 2000 kJ/kg, [[W_neto]] es 1008 kJ/kg (más trabajo pero mucho menos eficiente). Para [[r_c]] de 6, [[eta_D]] cae a 0.436 y con [[Q_H]] de 3000 kJ/kg, [[W_neto]] es 1308 kJ/kg, pero el motor rechaza 1692 kJ/kg al foco frío.

## Regla de autocontrol rápido

### Error 5: Olvidar que el rendimiento Diesel con [[r_c]] de uno se reduce al de Otto

**Por qué parece correcto**
El alumno trata las fórmulas de Otto y Diesel como completamente independientes, sin ver la conexión algebraica.

**Por qué es incorrecto**
Sustituyendo [[r_c]] igual a uno en la fórmula Diesel, el factor de corte se simplifica por la regla de L'Hôpital a [[gamma]] elevado a [[gamma]] dividido entre [[gamma]], que es uno. La fórmula se reduce entonces a uno menos uno dividido entre [[r]] elevado a [[gamma]] menos uno, que es exactamente la fórmula del ciclo Otto. Verificar este límite es una prueba de coherencia algebraica esencial.

**Señal de detección**
El alumno no puede explicar la relación entre Otto y Diesel ni verificar que la fórmula Diesel contiene a la de Otto como caso particular.

**Corrección conceptual**
Siempre verificar que, al sustituir [[r_c]] igual a uno, la fórmula Diesel reproduce la de Otto. Si no lo hace, hay un error de transcripción o cálculo.

**Mini-ejemplo de contraste**
Con [[r]] de 10 y [[gamma]] de 1.4: la fórmula de Otto da uno menos uno dividido entre 10 elevado a 0.4, es decir, uno menos 0.3981, que es 0.602. La fórmula Diesel con [[r_c]] de 1.001 da 0.6018. La coincidencia confirma la coherencia.
