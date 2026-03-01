# Momentos Tipicos

## Idea clave
Las formulas tipicas de momento de inercia son atajos utiles, pero solo funcionan bien si entiendes que cada una representa una geometria concreta y un eje concreto.

## 1- Que fenomeno estudia este subtema
Este subtema responde una necesidad practica: como obtener rapido \(I\) para cuerpos habituales sin resolver una integral en cada ejercicio.

No se trata de memorizar una tabla, sino de saber:
- que geometria tienes,
- sobre que eje gira,
- y si el modelo de homogeneidad es razonable.

## 2- Base conceptual: por que cambian los coeficientes
Los coeficientes \(\frac{1}{2}\), \(\frac{2}{5}\), \(\frac{1}{12}\), etc., no son arbitrarios.

Cada coeficiente mide, de forma resumida, como esta repartida la masa respecto al eje:
- masa mas alejada -> mayor \(I\),
- masa mas concentrada cerca del eje -> menor \(I\).

## 3- Elementos de identificacion correcta
- \(I\): momento de inercia (kg m^2).
- \(m\): masa total (kg).
- \(R\): radio (m).
- \(L\): longitud (m).
- \(a,b\): dimensiones de placa (m).
- eje de giro: dato obligatorio antes de elegir formula.

## 4- Formulacion matematica minima (tabla razonada)

$$
I_{aro}=mR^2
$$

$$
I_{disco}=\frac{1}{2}mR^2
$$

$$
I_{esfera}=\frac{2}{5}mR^2
$$

$$
I_{barra,centro}=\frac{1}{12}mL^2
$$

$$
I_{barra,extremo}=\frac{1}{3}mL^2
$$

$$
I_{placa}=\frac{1}{12}m(a^2+b^2)
$$

## 5- Cuando aplican estas relaciones (modelo y validez)
Estas formulas aplican bien cuando:
- el cuerpo puede idealizarse como homogeneo,
- la geometria se aproxima a los casos tabulados,
- el eje coincide con el eje de la formula.

Debes revisar el modelo cuando:
- hay huecos o composicion de materiales,
- el eje real no coincide con el tabulado,
- la pieza requiere descomposicion en partes.

## 6- Metodo de resolucion para problemas con formulas tipicas
1. Dibuja el cuerpo y fija el eje real.
2. Elige la formula tabulada correcta.
3. Si el eje no coincide, traslada con Steiner.
4. Calcula \(I\) y conecta con \(\tau=I\alpha\) o energia.
5. Verifica unidades y orden de magnitud.
6. Interpreta comparando con otras geometrias.

## 7- Errores frecuentes que bloquean el aprendizaje
- Usar formula de disco para aro por similitud visual.
- Olvidar que la misma pieza cambia \(I\) al cambiar de eje.
- Memorizar coeficientes sin entender su significado fisico.
- Aplicar tablas de cuerpo homogeneo en cuerpos no homogeneos sin ajuste.

## 8- Ejemplo guia (de principio a fin)
Comparacion con mismo \(m\) y \(R\):

$$
I_{aro}=mR^2,\qquad I_{disco}=\frac{1}{2}mR^2
$$

Relación:

$$
\frac{I_{aro}}{I_{disco}}=2
$$

Si el torque es el mismo, el disco acelera angularmente el doble que el aro.

## 9- Aplicaciones reales
- Seleccion de rotores en maquinas.
- Analisis de ruedas y rodadura.
- Diseno de volantes de inercia.
- Verificacion experimental en laboratorio.

## 10- Sintesis final
Dominar momentos tipicos significa dejar de usar tablas "a ciegas" y empezar a leerlas como modelos fisicos de distribucion de masa respecto a un eje concreto.
