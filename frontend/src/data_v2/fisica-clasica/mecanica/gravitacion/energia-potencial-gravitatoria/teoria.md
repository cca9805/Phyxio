# Energía potencial gravitatoria

## Idea clave
La energía potencial gravitatoria mide cuánta energía está asociada a la posición relativa entre masas en un campo gravitatorio. Es la herramienta más directa para resolver problemas de subida, caída y órbitas sin depender siempre de descomponer fuerzas.

## 1- ¿Qué estudia este subtema y por qué importa?
Este subtema responde a una pregunta central: ¿cómo cuantificar energéticamente "estar más cerca o más lejos" de una masa fuente?

Importa porque:
- permite resolver problemas por conservación de energía,
- conecta gravitación con velocidad de escape y órbitas,
- reduce errores algebraicos frente a enfoques solo dinámicos cuando hay varios estados inicial/final.

## 2- ¿Qué significa físicamente que \(U\) sea negativa?
Con la referencia habitual \(U(\infty)=0\), la expresión gravitatoria es:

$$
U(r)=-G\frac{Mm}{r}
$$

Que sea negativa significa que el sistema está ligado gravitatoriamente. Para llevar la masa hasta el infinito necesitas aportar energía externa.

Conclusión física:
- acercarse a \(M\) hace \(U\) más negativa,
- alejarse hace \(U\) menos negativa (aumenta \(U\)).

## 3- Variables que debes identificar siempre
- \(G\): constante de gravitación universal.
- \(M\): masa fuente (planeta, estrella, etc.).
- \(m\): masa de prueba.
- \(r\): distancia entre centros de masa.
- \(U\): energía potencial gravitatoria.
- \(K\): energía cinética.
- \(E\): energía mecánica total.
- \(W_g\): trabajo de la fuerza gravitatoria.

## 4- Fórmulas fundamentales y lectura correcta
Energía potencial gravitatoria:

$$
U(r)=-G\frac{Mm}{r}
$$

Cambio de energía potencial entre dos radios:

$$
\Delta U = U_f-U_i = -GMm\left(\frac{1}{r_f}-\frac{1}{r_i}\right)
$$

Energía mecánica:

$$
E=K+U
$$

Conservación (sin disipación externa):

$$
\Delta K + \Delta U = 0
$$

Trabajo gravitatorio:

$$
W_g=-\Delta U
$$

Caso aproximado cerca de superficie (solo si \(h\ll R\)):

$$
\Delta U \approx mgh
$$

## 5- Preguntas lógicas de alumno (respuestas directas)
**¿Por qué a veces uso \(-GMm/r\) y otras \(mgh\)?**
Porque \(mgh\) es aproximación local de \(-GMm/r\) cuando el cambio de altura es pequeño frente al radio del astro.

**¿Si \(U\) es negativa, la energía "no existe"?**
No. El valor absoluto depende de la referencia; lo físicamente medible en procesos es \(\Delta U\).

**¿La masa de prueba influye en \(U\)?**
Sí, \(U\propto m\). Pero la forma del "pozo gravitatorio" por unidad de masa se describe mejor con potencial \(V=U/m\).

**¿Cómo sé si un sistema está ligado?**
Si la energía mecánica total \(E<0\), el sistema está ligado gravitatoriamente.

## 6- Método de resolución paso a paso
1. Define estados inicial y final con radios \(r_i\), \(r_f\).
2. Elige referencia energética (normalmente infinito).
3. Calcula \(U_i\) y \(U_f\) con la misma referencia.
4. Si hay velocidades, añade \(K_i\), \(K_f\) y usa conservación.
5. Calcula \(\Delta U\), \(\Delta K\), \(W_g\) según lo pedido.
6. Revisa signos y unidades antes de concluir.
7. Interpreta: ¿el sistema ganó o perdió energía mecánica utilizable?

## 7- Errores típicos que debes evitar
- Cambiar referencia de energía entre pasos.
- Usar \(mgh\) fuera del dominio \(h\ll R\).
- Perder signos en \(\Delta U\) y en \(W_g=-\Delta U\).
- Medir \(r\) desde la superficie y no desde el centro del astro.
- Mezclar km con m o masas fuera de SI.

## 8- Ejemplo guiado completo
Datos: \(M=5.97\times10^{24}\,\mathrm{kg}\), \(m=200\,\mathrm{kg}\), \(r_i=6.8\times10^6\,\mathrm{m}\), \(r_f=7.2\times10^6\,\mathrm{m}\).

Cambio de energía potencial:

$$
\Delta U=-GMm\left(\frac{1}{r_f}-\frac{1}{r_i}\right)
$$

Sustituyendo:

$$
\Delta U\approx - (6.67\times10^{-11})(5.97\times10^{24})(200)
\left(\frac{1}{7.2\times10^6}-\frac{1}{6.8\times10^6}\right)
$$

Resultado aproximado:

$$
\Delta U\approx +6.5\times10^8\,\mathrm{J}
$$

Interpretación: al subir de radio, \(U\) aumenta (se hace menos negativa). Si no hay aporte externo de trabajo, esa subida debe venir de una reducción de \(K\).

## 9- Conexión con otros subtemas
- Enlace directo con campo y potencial gravitatorio: \(U=mV\).
- Base para energía orbital total y condición de órbita ligada.
- Conecta con velocidad de escape al imponer energía final nula en infinito.
- Puente conceptual entre dinámica (fuerzas) y formulación energética global.

## 10- Síntesis final
Dominar energía potencial gravitatoria significa entender que la gravedad no solo "acelera": también define un paisaje energético. Resolver bien implica usar la referencia correcta, mantener signos coherentes y elegir entre enfoque dinámico o energético según el problema.
