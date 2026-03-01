# Energía orbital

## Idea clave
La energía orbital permite clasificar de forma inmediata el tipo de trayectoria (ligada o no ligada) y calcular parámetros orbitales sin integrar toda la ecuación de movimiento en cada caso.

## 1- ¿Qué estudia este subtema y por qué es central?
Este subtema estudia cómo se reparte la energía mecánica en un sistema gravitatorio orbital y cómo ese balance determina la geometría de la órbita.

Es central porque unifica:
- energía cinética,
- energía potencial gravitatoria,
- y condición de ligadura/escape.

## 2- Energía total y energía específica
Energía mecánica total:

$$
E=K+U
$$

con

$$
K=\frac{1}{2}mv^2,
\qquad U=-G\frac{Mm}{r}
$$

Energía específica (por unidad de masa del satélite):

$$
\varepsilon=\frac{E}{m}=\frac{v^2}{2}-\frac{GM}{r}
$$

Ventaja de \(\varepsilon\): elimina dependencia explícita de \(m\) para análisis orbital básico.

## 3- Relación con semieje mayor
Para órbitas keplerianas ligadas:

$$
E=-\frac{GMm}{2a}
$$

$$
\varepsilon=-\frac{GM}{2a}
$$

Interpretación:
- cuanto menor \(a\), más negativa la energía (órbita más "profunda"),
- cuanto mayor \(a\), energía menos negativa.

## 4- Clasificación por signo energético
- \(E<0\) o \(\varepsilon<0\): órbita ligada (elipse/círculo).
- \(E=0\) o \(\varepsilon=0\): umbral parabólico (escape justo).
- \(E>0\) o \(\varepsilon>0\): trayectoria no ligada (hipérbola).

Esta clasificación responde de forma directa a "¿el objeto se queda o se va?".

## 5- Caso circular como referencia
En órbita circular \(a=r\):

$$
E_{circ}=-\frac{GMm}{2r}
$$

Además:

$$
K=+\frac{GMm}{2r},
\qquad U=-\frac{GMm}{r}
$$

Por tanto en circular ideal se cumple \(K=-\frac{1}{2}U\).

## 6- Preguntas lógicas de alumno (respuestas directas)
**¿Cómo puede ser negativa la energía total?**
Porque se toma \(U(\infty)=0\). Si \(E<0\), falta energía para ir al infinito: el sistema está ligado.

**¿Qué cambia si duplico la masa del satélite?**
\(E\) se duplica (es total), pero \(\varepsilon\) no cambia para mismo estado orbital.

**¿Puede haber gran velocidad y seguir ligado?**
Sí, depende también de \(r\): la ligadura la decide \(\varepsilon\), no solo \(v\).

**¿Cuándo usar \(E\) y cuándo \(\varepsilon\)?**
Usa \(\varepsilon\) para geometría orbital y clasificación; usa \(E\) cuando importe la energía total real del satélite.

## 7- Método de resolución paso a paso
1. Define estado orbital (\(r\), \(v\), \(M\), y \(m\) si piden total).
2. Calcula \(\varepsilon=v^2/2-GM/r\).
3. Clasifica trayectoria por signo de \(\varepsilon\).
4. Si es ligada, calcula \(a=-GM/(2\varepsilon)\).
5. Si necesitas energía total, usa \(E=m\varepsilon\).
6. Verifica unidades y consistencia física.
7. Concluye en términos de tipo orbital y estabilidad energética.

## 8- Ejemplo guiado
Datos: \(M=5.97\times10^{24}\,\mathrm{kg}\), \(r=8.0\times10^6\,\mathrm{m}\), \(v=7.0\times10^3\,\mathrm{m/s}\), \(m=500\,\mathrm{kg}\).

Energía específica:

$$
\varepsilon=\frac{v^2}{2}-\frac{GM}{r}
=\frac{(7000)^2}{2}-\frac{(6.67\times10^{-11})(5.97\times10^{24})}{8.0\times10^6}
\approx -2.55\times10^7\,\mathrm{J/kg}
$$

Como \(\varepsilon<0\), la órbita es ligada.

Semieje mayor:

$$
a=-\frac{GM}{2\varepsilon}\approx 7.8\times10^6\,\mathrm{m}
$$

Energía total:

$$
E=m\varepsilon\approx -1.28\times10^{10}\,\mathrm{J}
$$

## 9- Conexión con otros subtemas
- Conecta con vis-viva en velocidad orbital.
- Interpreta leyes de Kepler desde energía.
- Se relaciona con velocidad de escape como frontera \(E=0\).

## 10- Síntesis final
Dominar energía orbital permite resolver y clasificar órbitas con rapidez y criterio: no solo obtienes números, entiendes si una trayectoria está ligada, cuán "profunda" es y cómo cambia al modificar velocidad o radio.
