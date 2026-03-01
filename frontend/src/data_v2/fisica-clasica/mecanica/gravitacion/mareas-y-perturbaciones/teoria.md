# Mareas y perturbaciones

## Idea clave
Las mareas aparecen porque la gravedad no actúa igual en todos los puntos de un cuerpo extenso. Las perturbaciones orbitales aparecen cuando, además de la atracción central dominante, actúan efectos secundarios pequeños que se acumulan con el tiempo.

## 1- ¿Qué estudia este subtema y por qué es importante?
Este subtema estudia dos fenómenos muy conectados:
- **Mareas**: efecto diferencial del campo gravitatorio.
- **Perturbaciones**: desviaciones respecto a la órbita ideal de dos cuerpos.

Es importante porque los sistemas reales nunca son "dos cuerpos perfectos": hay terceros cuerpos, no esfericidad, rozamiento tenue y resonancias que alteran la evolución a largo plazo.

## 2- ¿Por qué la marea depende de \(1/d^3\) y no de \(1/d^2\)?
La fuerza gravitatoria total sigue \(1/d^2\), pero la marea mide una **diferencia** de campo entre dos puntos cercanos de un cuerpo. Esa diferencia es un gradiente espacial del campo, y al derivar aparece una dependencia dominante \(\propto 1/d^3\).

Aproximación típica de aceleración mareal:

$$
a_{marea} \approx 2G\frac{MR}{d^3}
$$

donde \(M\) es masa perturbadora, \(R\) tamaño del cuerpo afectado y \(d\) distancia entre centros.

## 3- Imagen física correcta de una marea
En el lado cercano al perturbador, la gravedad es ligeramente mayor; en el lado lejano, ligeramente menor. El resultado es una deformación diferencial con dos "abultamientos" principales.

Por eso:
- marea no es "fuerza extra" independiente,
- marea es diferencia de aceleración dentro del mismo cuerpo.

## 4- Perturbaciones orbitales: qué son y cómo se interpretan
Si \(\vec a_{central}\) domina y hay aceleraciones adicionales pequeñas \(\vec a_{pert,i}\), el modelo básico es:

$$
\vec a_{total}=\vec a_{central}+\sum_i \vec a_{pert,i}
$$

Régimen perturbativo:

$$
\left|\vec a_{pert}\right| \ll \left|\vec a_{central}\right|
$$

Esto no significa "irrelevante": efectos pequeños por órbita pueden generar cambios apreciables en meses o años.

## 5- Variables y parámetros clave
- \(G\): constante de gravitación universal.
- \(M\): masa perturbadora.
- \(R\): escala radial del cuerpo deformado.
- \(d\): distancia centro a centro.
- \(a_{marea}\): aceleración mareal característica.
- \(a_{central}\): aceleración principal de la órbita.
- \(a_{pert}\): aceleración perturbativa efectiva.
- \(\varepsilon\): parámetro perturbativo \((a_{pert}/a_{central})\).
- \(\tau\): torque mareal característico.

## 6- Fórmulas útiles y lectura física
Aceleración de marea (orden dominante):

$$
a_{marea}\approx 2G\frac{MR}{d^3}
$$

Parámetro de perturbación:

$$
\varepsilon=\frac{a_{pert}}{a_{central}}
$$

Comparación relativa entre dos perturbadores 1 y 2:

$$
\frac{a_{marea,1}}{a_{marea,2}}=\frac{M_1}{M_2}\left(\frac{d_2}{d_1}\right)^3
$$

Escalado de torque mareal (orden de magnitud):

$$
\tau \sim r\,F_{marea}
$$

Lectura física:
- mayor \(M\) aumenta la marea,
- mayor \(d\) la reduce muy rápido,
- mayor tamaño \(R\) del cuerpo afectado aumenta la diferencia de aceleración interna.

## 7- Preguntas lógicas de alumno (respuestas directas)
**¿Por qué la Luna domina mareas terrestres frente al Sol, si el Sol es más masivo?**
Porque la dependencia en distancia es cúbica para marea. La proximidad lunar compensa sobradamente su menor masa.

**¿Perturbación pequeña significa despreciable?**
No. Puede ser pequeña instantáneamente y grande acumulada en tiempos largos.

**¿Marea y perturbación son lo mismo?**
No exactamente. La marea es un tipo de efecto diferencial gravitatorio; perturbación es cualquier desviación respecto al modelo ideal central.

**¿Siempre necesito integración numérica?**
No. Para primer análisis basta estimación de órdenes de magnitud y criterio perturbativo.

## 8- Método de resolución paso a paso
1. Identifica cuerpo afectado, perturbador(es) y geometría básica.
2. Calcula o estima \(a_{central}\).
3. Estima \(a_{marea}\) con la fórmula de gradiente.
4. Si hay varios perturbadores, compara contribuciones con razón cúbica de distancias.
5. Evalúa \(\varepsilon=a_{pert}/a_{central}\).
6. Decide: primer orden perturbativo o necesidad de modelo más completo.
7. Interpreta si el efecto relevante es instantáneo (deformación) o secular (evolución orbital).

## 9- Ejemplo guiado de comparación
Comparar efecto mareal de Luna (L) y Sol (S) sobre la Tierra:

$$
\frac{a_{marea,L}}{a_{marea,S}}=\frac{M_L}{M_S}\left(\frac{d_S}{d_L}\right)^3
$$

Usando valores típicos:
- \(M_L\approx 7.35\times10^{22}\,\mathrm{kg}\),
- \(M_S\approx 1.99\times10^{30}\,\mathrm{kg}\),
- \(d_L\approx 3.84\times10^8\,\mathrm{m}\),
- \(d_S\approx 1.50\times10^{11}\,\mathrm{m}\),

se obtiene una razón del orden de \(\sim 2\), coherente con que la Luna domina el efecto mareal principal.

## 10- Síntesis final
Dominar mareas y perturbaciones significa pasar del "modelo ideal" al "sistema real":
- entender gradientes gravitatorios,
- estimar qué términos son relevantes,
- y predecir efectos acumulativos sin perder criterio físico.
