# Leyes de Kepler

## Idea clave
Las leyes de Kepler describen la geometría y el ritmo del movimiento orbital: forma de la trayectoria, variación de velocidad a lo largo de la órbita y relación precisa entre período y tamaño orbital.

## 1- ¿Qué estudia este subtema y por qué sigue siendo clave?
Este subtema estudia tres regularidades fundamentales del movimiento orbital que permiten predecir posiciones, tiempos y escalas sin resolver toda la dinámica diferencial desde cero.

Sigue siendo clave porque:
- organiza la intuición orbital,
- conecta observación con teoría,
- y se aplica en planetas, satélites y misiones espaciales.

## 2- Primera ley: órbitas elípticas
Los cuerpos orbitan en elipses con la masa central en uno de los focos.

Parámetros importantes:
- semieje mayor \(a\),
- semieje menor \(b\),
- excentricidad \(e\).

Ecuación polar de la elipse (foco en el origen):

$$
r(\theta)=\frac{a(1-e^2)}{1+e\cos\theta}
$$

Interpretación:
- \(e=0\) -> círculo,
- \(0<e<1\) -> elipse.

## 3- Segunda ley: áreas iguales en tiempos iguales
La línea que une el cuerpo central con el satélite barre áreas iguales en tiempos iguales:

$$
\frac{dA}{dt}=\text{cte}
$$

Lectura física:
- cerca del periapsis la velocidad es mayor,
- cerca del apoapsis la velocidad es menor,
- no porque "acelere al azar", sino por conservación del momento angular en fuerza central.

## 4- Tercera ley: vínculo entre período y tamaño orbital
Para órbitas alrededor del mismo cuerpo central:

$$
T^2=\frac{4\pi^2}{GM}a^3
$$

Forma comparativa:

$$
\frac{T_1^2}{T_2^2}=\frac{a_1^3}{a_2^3}
$$

Esto permite escalar órbitas de forma inmediata sin recalcular dinámica completa.

## 5- Preguntas lógicas de alumno (respuestas directas)
**¿Por qué en periapsis va más rápido?**
Porque para conservar momento angular con radio menor, la velocidad tangencial debe aumentar.

**¿La tercera ley vale entre planetas de sistemas distintos?**
No en forma simple. La forma de cociente requiere misma masa central.

**¿Kepler es solo empírico o tiene base dinámica?**
Nació empírico (datos), pero Newton mostró que surge de gravitación inversa al cuadrado.

**¿Si duplico \(a\), se duplica \(T\)?**
No. \(T\propto a^{3/2}\), crece más que linealmente.

## 6- Variables que debes identificar
- \(a\): semieje mayor.
- \(b\): semieje menor.
- \(e\): excentricidad.
- \(r\): distancia instantánea al foco.
- \(T\): período orbital.
- \(M\): masa central.
- \(\mu=GM\): parámetro gravitatorio.
- \(A\): área barrida.

## 7- Método de resolución paso a paso
1. Determina si problema es geométrico (\(a,e,r\)) o temporal (\(T\)).
2. Si hay comparación de órbitas, verifica misma masa central.
3. Aplica ecuación correcta: elipse, ley areal o tercera ley.
4. En tercera ley, usa SI antes de sustituir.
5. Revisa coherencia (órbitas mayores deben dar períodos mayores).
6. Interpreta resultado en términos de movimiento real (rápido/lento según zona orbital).

## 8- Ejemplo guiado
Datos: satélite A con \(a_1=7000\,\mathrm{km}\), satélite B con \(a_2=14000\,\mathrm{km}\), misma masa central.

Usando tercera ley comparativa:

$$
\frac{T_2}{T_1}=\left(\frac{a_2}{a_1}\right)^{3/2}=2^{3/2}=2.828
$$

Interpretación: duplicar semieje mayor casi triplica el período orbital.

## 9- Conexión con otros subtemas
- Se conecta con velocidad orbital: variación de \(v\) en la elipse.
- Se conecta con energía orbital: \(a\) ligado al estado energético.
- Base para efemérides, navegación espacial y diseño de órbitas operativas.

## 10- Síntesis final
Dominar las leyes de Kepler significa leer una órbita como un sistema coherente de geometría, tiempo y dinámica. Te permite predecir comportamiento orbital con rapidez, criterio y base física sólida.
