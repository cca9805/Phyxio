# Ley de gravitación universal

## Idea clave
Toda masa atrae a toda masa con una fuerza central y atractiva. Esa fuerza crece con las masas y disminuye muy rápido con la distancia porque sigue una ley inversa al cuadrado.

## 1- ¿Qué estudia este subtema y por qué es fundamental?
Este subtema responde a una pregunta histórica y muy práctica: ¿cómo calcular la atracción gravitatoria entre dos cuerpos y qué consecuencias físicas tiene?

Es fundamental porque conecta problemas cotidianos (peso, caída, satélites) con fenómenos astronómicos (órbitas, sistemas planetarios, mareas) usando un mismo modelo matemático.

## 2- ¿Qué significa físicamente "gravitación universal"?
"Universal" significa que no depende del tipo de material: cualquier par de masas interactúa gravitatoriamente. No importa si son dos piedras, la Tierra y un satélite, o dos estrellas.

Dos ideas que debes fijar:
- La fuerza siempre es atractiva.
- La línea de acción siempre une los centros de masa.

Por eso es una fuerza **central**: su dirección apunta en la recta que une los cuerpos.

## 3- ¿Cómo se modela correctamente un problema gravitatorio?
Antes de calcular, hay que modelar bien:
- Si los cuerpos son pequeños respecto a la distancia entre ellos, se tratan como masas puntuales.
- Si son esferas aproximadamente simétricas (planetas, estrellas), su interacción externa equivale a concentrar toda la masa en el centro.

Este paso es clave: la mayoría de errores no aparecen en la fórmula, sino en un modelo mal planteado.

## 4- Variables y parámetros (qué representa cada una)
- \(G\): constante de gravitación universal \((\mathrm{N\,m^2/kg^2})\).
- \(m_1, m_2\): masas que interactúan \((\mathrm{kg})\).
- \(r\): distancia entre centros de masa \((\mathrm{m})\).
- \(F\): módulo de la fuerza gravitatoria \((\mathrm{N})\).
- \(M\): masa de un astro fuente de campo (por ejemplo, la Tierra).
- \(g\): campo gravitatorio o aceleración gravitatoria local \((\mathrm{m/s^2})\).
- \(P\): peso de un cuerpo \((\mathrm{N})\).

## 5- Fórmulas esenciales y lectura física
Ley de gravitación universal (módulo):

$$
F = G\frac{m_1m_2}{r^2}
$$

Forma vectorial (dirección y sentido):

$$
\vec F_{12} = -G\frac{m_1m_2}{r^2}\,\hat r_{12}
$$

Tercera ley en interacción gravitatoria:

$$
\vec F_{21} = -\vec F_{12}
$$

Campo gravitatorio creado por una masa \(M\):

$$
g = G\frac{M}{r^2}
$$

Peso de una masa \(m\) dentro de ese campo:

$$
P = mg
$$

Aceleración de una masa de prueba por una masa fuente:

$$
a = G\frac{M}{r^2}
$$

Lectura física importante:
- Si duplicas una masa, \(F\) se duplica.
- Si duplicas la distancia, \(F\) pasa a ser \(1/4\).
- En régimen clásico, el valor de \(g\) depende de dónde estás (de \(r\)), no es una constante universal.

## 6- Método de resolución (paso a paso, sin atajos)
1. Dibuja los cuerpos y marca claramente sus centros de masa.
2. Define la distancia correcta \(r\) entre centros (no entre superficies).
3. Convierte todas las magnitudes a SI.
4. Elige ecuación objetivo: \(F\), \(g\), \(P\), \(a\) o variable despejada.
5. Resuelve primero en simbólico y luego sustituye valores.
6. Verifica unidades y orden de magnitud.
7. Interpreta el resultado: magnitud, dirección y coherencia física.

## 7- Preguntas lógicas de un alumno (y respuesta corta)
**¿Por qué la gravedad nunca "se apaga"?**
Porque es de largo alcance: disminuye con \(1/r^2\), pero no se anula exactamente para distancia finita.

**¿Por qué astronautas en órbita parecen "sin peso"?**
No porque no haya gravedad, sino porque están en caída libre continua alrededor de la Tierra.

**¿Por qué en la Luna peso menos?**
Porque \(g\) lunar es menor que \(g\) terrestre al cambiar \(M\) y \(R\) del astro.

**¿Qué pasa si tengo más de dos masas?**
Se aplica superposición: la fuerza/campo total es la suma vectorial de contribuciones de cada masa.

## 8- Ejemplo guiado completo
Datos: \(m_1=500\,\mathrm{kg}\), \(m_2=1000\,\mathrm{kg}\), \(r=20\,\mathrm{m}\), \(G=6.67\times10^{-11}\,\mathrm{N\,m^2/kg^2}\).

Paso 1. Fórmula:

$$
F = G\frac{m_1m_2}{r^2}
$$

Paso 2. Sustitución:

$$
F = 6.67\times10^{-11}\frac{(500)(1000)}{20^2}
= 6.67\times10^{-11}\frac{5\times10^5}{400}
$$

Paso 3. Resultado:

$$
F \approx 8.34\times10^{-8}\,\mathrm{N}
$$

Interpretación: para masas moderadas y distancias de decenas de metros, la gravedad mutua es muy pequeña comparada con otras fuerzas cotidianas.

## 9- Límites del modelo clásico
Este modelo funciona muy bien en muchísimos problemas, pero tiene límites:
- No incluye correcciones relativistas (campos intensos, alta precisión orbital extrema).
- No modela por sí solo distribuciones complejas sin integración/simulación numérica.
- En sistemas de muchos cuerpos, el problema exacto puede requerir métodos numéricos.

## 10- Síntesis final
Dominar la ley de gravitación universal significa:
- modelar correctamente el sistema físico,
- calcular con rigor magnitud y dirección,
- entender por qué la distancia pesa tanto en el resultado,
- y conectar gravedad, campo, peso y órbitas en un marco coherente.
