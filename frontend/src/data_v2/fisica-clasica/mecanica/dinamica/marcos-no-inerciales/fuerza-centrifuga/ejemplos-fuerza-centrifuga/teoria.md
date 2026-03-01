# Ejemplos De Fuerza Centrifuga

## Idea clave
Este subtema convierte la definicion en criterio de resolucion: identificar rapido el marco, escoger formula y leer el resultado en contexto real.

## 1- Para que sirve resolver ejemplos
Resolver ejemplos evita aprender la centrifuga como "formula aislada". Aqui se entrena:
- seleccion de variables relevantes,
- control de unidades,
- interpretacion de tendencia fisica.

## 2- Plantilla comun de problema
En un marco rotatorio, si conoces \(m\), \(r\) y \(\Omega\):

$$
F_{cf}=m\Omega^2r
$$

Si conoces \(m\), \(v\) y \(r\):

$$
F_{cf}=m\frac{v^2}{r}
$$

## 3- Caso A: curva de vehiculo idealizada
Un pasajero de masa \(m\) en una curva circular percibe efecto lateral hacia afuera en el marco del coche.

Lectura:
- aumentar \(v\) incrementa mucho el efecto (cuadrado de \(v\)),
- aumentar \(r\) lo reduce si \(v\) se mantiene.

## 4- Caso B: centrifugadora de laboratorio
En una centrifugadora, cambiar rpm altera \(\Omega\). Como \(F_{cf}\propto\Omega^2\), pequenas subidas de rpm producen cambios grandes en separacion de fases.

## 5- Caso C: rotacion humana en plataforma
Problema tipico de aula:
- comparar dos radios con misma \(\Omega\),
- comparar dos \(\Omega\) con mismo radio,
- ordenar efectos sin calcular primero.

Esta lectura previa evita errores numericos y mejora el control del resultado final.

## 6- Metodo practico en 6 pasos
1. Marco rotatorio explicitado.
2. Datos en SI.
3. Formula segun datos disponibles.
4. Despeje simbolico.
5. Sustitucion y control dimensional.
6. Interpretacion de sensibilidad (\(r\), \(v\), \(\Omega\)).

## 7- Ejemplo numerico completo
Masa \(m=55\,\text{kg}\), radio \(r=3.2\,\text{m}\), velocidad angular \(\Omega=2.1\,\text{rad/s}\):

$$
F_{cf}=m\Omega^2r=55\cdot(2.1)^2\cdot 3.2
$$

$$
F_{cf}=55\cdot 4.41\cdot 3.2=776.16\,\text{N}
$$

Interpretacion:
- valor alto para percepcion corporal,
- dominar \(\Omega\) es critico en seguridad de sistemas rotatorios.

## 8- Errores que aparecen en ejercicios
- usar rpm sin conversion:

$$
\Omega=\frac{2\pi\,\text{rpm}}{60}
$$

- confundir efecto radial con tangencial,
- usar datos de marco inercial y rotatorio simultaneamente.

## 9- Conexion con diseno y seguridad
Estos ejemplos no son solo academicos:
- diseno de curvas y limites de velocidad,
- centrifugas industriales y medicas,
- confort y seguridad en atracciones mecanicas.

## 10- Sintesis final
Si dominas estos ejemplos, pasas de "saber la formula" a decidir con criterio cuando aplicarla, como validar el resultado y como explicarlo fisicamente.
