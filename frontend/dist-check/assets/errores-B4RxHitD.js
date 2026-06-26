const e=`## Errores conceptuales

### Error 1: Olvidar el factor 2 en la formula de eco

**Por qué parece correcto**

El alumno razona: "el sonido viaja de aqui hasta el objeto a la velocidad del sonido, luego la distancia es velocidad por tiempo". Esta logica es correcta para una trayectoria de ida, pero el tiempo que mide el equipo —el tiempo de vuelo [[t_vuelo]]— es el tiempo total de ida y vuelta, no el de una sola trayectoria.

**Por qué es incorrecto**

El pulso emitido recorre la distancia [[d_eco]] hasta el objeto, se refleja y luego recorre la misma distancia [[d_eco]] de vuelta hasta el receptor. El tiempo total medido corresponde a dos veces la distancia buscada dividida entre [[v_sonido]]. Si no se divide entre 2, la distancia calculada es el doble de la real: el objeto parece estar al doble de su distancia verdadera.

**Señal de detección**

El alumno calcula una profundidad de objeto de 15 cm en ecografia medica con un tiempo de vuelo de 195 microsegundos y [[v_sonido]] de 1540 m/s. El resultado sin el factor 2 es 30 cm, el doble de la distancia real.

**Corrección conceptual**

Siempre aplicar la formula de distancia por eco con el divisor 2. El tiempo de vuelo de un sistema de eco es siempre el tiempo de ida y vuelta. Si el equipo reporta el tiempo de una sola via, hay que multiplicarlo por 2 antes de usar esa formula, o bien usar directamente la version de una sola trayectoria: [[d_eco]] es igual a [[v_sonido]] multiplicado por el tiempo de ida solamente.

**Mini-ejemplo de contraste**

Un sonar en agua detecta un eco con [[t_vuelo]] de 2 segundos y [[v_sonido]] de 1500 m/s. Sin el factor 2: distancia aparente de 3000 m. Con el factor 2 correcto: distancia real de 1500 m. La diferencia equivale a ubicar el objeto al doble de su posicion real, un error de navegacion critico.

---

### Error 2: Usar la velocidad del sonido del medio incorrecto

**Por qué parece correcto**

El alumno memoriza que la velocidad del sonido es "aproximadamente 340 m/s" y usa ese valor en cualquier problema que involucre sonido, sin reparar en que ese valor corresponde al aire a temperatura ambiente y que el sonido viaja mucho mas rapido en liquidos y solidos.

**Por qué es incorrecto**

[[v_sonido]] depende critica y fuertemente del medio. En agua de mar es de aproximadamente 1500 m/s, mas de cuatro veces el valor en aire. En tejido blando es de aproximadamente 1540 m/s. En acero supera los 5900 m/s. Usar el valor del aire en un problema de sonar submarino produce una distancia calculada cuatro veces menor que la real; en ecografia medica, el error es del mismo factor.

**Señal de detección**

El alumno calcula la profundidad del fondo marino a partir de un eco de sonar de 2 segundos usando [[v_sonido]] de 340 m/s, obteniendo 340 m, cuando la profundidad real (con [[v_sonido]] de 1500 m/s) es de 1500 m.

**Corrección conceptual**

Identificar siempre el medio de propagacion antes de asignar [[v_sonido]]. Para sonar submarino: agua de mar, [[v_sonido]] entre 1450 y 1550 m/s segun temperatura y salinidad. Para ecografia medica: tejido blando, [[v_sonido]] aproximadamente 1540 m/s. Para sensores de aparcamiento: aire, [[v_sonido]] aproximadamente 340 m/s a 20 °C.

**Mini-ejemplo de contraste**

Un sensor ultrasonico de aparcamiento detecta un obstaculo en aire con [[t_vuelo]] de 6 ms. Con [[v_sonido]] de 340 m/s: distancia correcta de 1.02 m. Si se usara el valor del agua (1500 m/s) por error: distancia calculada de 4.5 m, completamente fuera de rango para un sensor de aparcamiento.

---

## Errores de modelo

### Error 1: Sumar decibelios como si fueran magnitudes lineales

**Por qué parece correcto**

El alumno ve que el nivel de un altavoz es de 70 dB y el de otro es tambien 70 dB, y concluye que juntos producen 140 dB. La logica de "sumar los valores" parece directa, igual que se suman voltios o metros.

**Por qué es incorrecto**

El decibelio es una escala logaritmica. Dos fuentes identicas de [[IL]] de 70 dB producen juntas una intensidad doble de la de cada una por separado. Convertir 70 dB a intensidad da un valor proporcional a 10 elevado a 7 en unidades de I0. Dos veces esa intensidad da 10 elevado a 7 multiplicado por 2. Tomando el logaritmo: 10 veces el logaritmo de (2 multiplicado por 10 elevado a 7) da aproximadamente 73 dB, no 140 dB. El resultado correcto es 73 dB.

**Señal de detección**

El alumno afirma que instalar un segundo compresor identico al primero (que produce 85 dB) elevara el nivel a 170 dB. En realidad, el segundo compresor sube el nivel en apenas 3 dB, hasta 88 dB.

**Corrección conceptual**

Para combinar fuentes de sonido: (1) convertir cada [[IL]] a intensidad [[I]] usando la formula inversa del nivel sonoro, (2) sumar las intensidades linealmente, (3) reconvertir la intensidad total a [[IL]]. Dos fuentes iguales siempre suman 3 dB al nivel de una sola. Diez fuentes iguales suman 10 dB.

**Mini-ejemplo de contraste**

Cuatro maquinas en una sala producen cada una 80 dB. El alumno que suma directamente obtiene 320 dB, un nivel imposible que excede el umbral fisico de presion sonora maxima de aproximadamente 194 dB. El calculo correcto: cuatro intensidades iguales, factor 4 sobre una sola, que corresponde a 10 veces el logaritmo de 4 en base 10, mas 80 dB, igual a aproximadamente 86 dB.

---

## Errores matemáticos

### Error 1: Confundir la formula del logaritmo con la de la raiz cuadrada

**Por qué parece correcto**

Algunos alumnos recuerdan vagamente que el decibelio involucra un "factor 10 y una potencia" pero confunden la formula logaritmica con una formula de potencia. Esto lleva a calcular [[IL]] como 10 multiplicado por la raiz cuadrada de la razon de intensidades, en lugar del logaritmo en base 10 de esa razon.

**Por qué es incorrecto**

La formula correcta del nivel de intensidad usa el logaritmo en base 10 de la razon [[I]]/I0, multiplicado por 10. El logaritmo y la raiz cuadrada son funciones matematicamente distintas y producen resultados muy diferentes. Para una intensidad 100 veces mayor que I0, el logaritmo base 10 de 100 es 2, y [[IL]] da 20 dB. La raiz cuadrada de 100 es 10, lo que daria 100 dB: un error de factor 5 en el resultado.

**Señal de detección**

El alumno calcula un [[IL]] de 100 dB para una intensidad 100 veces el umbral de referencia, cuando el resultado correcto es 20 dB.

**Corrección conceptual**

Memorizar la estructura de la formula logaritmica del nivel sonoro: es 10 veces el logaritmo en base 10 del cociente de intensidades. El factor 10 delante convierte beles en decibelios; el logaritmo base 10 es la funcion que produce los valores caracteristicos: 20 dB para un factor 100 de intensidad, 40 dB para un factor 10000, y 60 dB para un factor 1000000.

**Mini-ejemplo de contraste**

Intensidad de 10⁻⁶ W/m² con I0 de 10⁻¹² W/m²: la razon es 10⁶. El logaritmo base 10 de 10⁶ es 6. Multiplicado por 10 da 60 dB. Si se usa la raiz cuadrada de 10⁶ que es 1000, multiplicado por 10 da 10000 dB: un resultado fisicamente absurdo que excede cualquier nivel sonoro conocido.

---

## Errores de interpretación

### Error 1: Interpretar el indice de reduccion sonora como la absorcion del material

**Por qué parece correcto**

El alumno sabe que los materiales "absorben" el sonido y piensa que [[R_aislamiento]] describe esa absorcion. Un material con [[R_aislamiento]] de 50 dB parece ser uno que "absorbe el 50 % del sonido" o que "convierte el 50 % de la energia en calor".

**Por qué es incorrecto**

[[R_aislamiento]] describe cuanto sonido **no pasa** de un recinto a otro a traves de un elemento constructivo. Es una medida de transmision, no de absorcion. Un material puede tener [[R_aislamiento]] muy alto (buena particion) sin absorber nada: un muro de hormigon macizo refleja casi todo el sonido que recibe de vuelta al recinto emisor, con muy poca absorcion, pero practicamente nada pasa al recinto receptor. La absorcion (expresada en coeficiente de absorcion) describe cuanto sonido se transforma en calor dentro del propio recinto; son propiedades independientes y complementarias.

**Señal de detección**

El alumno afirma que una sala con paredes de alta absorcion tendra bajo nivel de ruido en la sala adyacente, confundiendo el tratamiento acustico del recinto (absorcion) con el aislamiento entre recintos (reduccion sonora).

**Corrección conceptual**

Distincion critica: la **absorcion** controla el nivel reverberante dentro del mismo recinto (tiempo de reverberacion, eco, intelligibilidad). El **aislamiento** ([[R_aislamiento]]) controla cuanto sonido pasa a los recintos contiguos. Para aislar una sala de ensayo del pasillo adyacente, hay que usar masas altas y dobles hojas (mayor [[R_aislamiento]]). Para mejorar la acustica dentro de la misma sala de ensayo, hay que añadir materiales absorbentes en sus paredes interiores.

**Mini-ejemplo de contraste**

Un estudio de grabacion tiene las paredes internas recubiertas de espuma acustica de alta absorcion (coeficiente de absorcion superior a 0.9 a frecuencias medias). Sin embargo, la pared medianera con el piso de arriba tiene poca masa. El resultado: la reverberacion dentro del estudio es excelente (tiempo de reverberacion muy bajo), pero el sonido de los pasos del piso de arriba entra con claridad porque la pared no tiene [[R_aislamiento]] suficiente. Los dos problemas son independientes y requieren soluciones distintas.

---

## Regla de autocontrol rápido

Para verificar rapidamente los calculos de aplicaciones del sonido, aplicar las tres comprobaciones siguientes:

**Comprobacion 1 — Factor 2 del eco**: En todo calculo de [[d_eco]] a partir de [[t_vuelo]], verificar que se ha dividido entre 2. Si el resultado parece el doble de lo esperado para el contexto, este es el error mas probable.

**Comprobacion 2 — Medio de propagacion correcto**: Antes de usar [[v_sonido]], identificar el medio: aire (340 m/s), agua (1500 m/s), tejido blando (1540 m/s). Un resultado fuera del orden de magnitud esperado para el contexto (distancias de centimetros en ecografia abdominal, de cientos de metros en sonar portuario) delata un medio incorrecto.

**Comprobacion 3 — Suma de decibelios**: Si se suman fuentes de sonido, el resultado nunca puede superar el nivel de una sola fuente en mas de 10 dB por cada multiplicacion por 10 del numero de fuentes. Dos fuentes identicas dan 3 dB mas que una. Si el resultado supera esos limites, se han sumado los dB directamente en lugar de las intensidades.
`;export{e as default};
