# Teorema De Ejes Paralelos

## Idea clave
El teorema de ejes paralelos permite calcular el momento de inercia respecto a un eje desplazado usando el valor respecto al eje por centro de masas, sin rehacer toda la integral.

## 1- Que fenomeno estudia este subtema
Este subtema responde una situacion muy frecuente: el eje real de giro no pasa por el centro de masas.

Ejemplos tipicos:
- puertas que giran sobre bisagra en el borde,
- barras montadas sobre apoyos desplazados,
- piezas con ejes de trabajo no centrados.

## 2- Base conceptual: por que aparece el termino \(md^2\)
Si desplazas el eje una distancia \(d\), toda la masa queda, en promedio, mas lejos del nuevo eje.

Ese alejamiento adicional aumenta la inercia en:

$$
md^2
$$

Por eso el momento sobre eje desplazado siempre cumple \(I \ge I_{cm}\) para ejes paralelos.

## 3- Elementos que debes identificar sin error
- \(I\): momento respecto al eje desplazado.
- \(I_{cm}\): momento respecto al eje por centro de masas.
- \(m\): masa total del cuerpo.
- \(d\): distancia perpendicular entre ejes paralelos.
- \(\tau,\alpha\): si conectas con ecuacion dinamica.

## 4- Formulacion matematica minima (y lectura fisica)

$$
I = I_{cm} + md^2
$$

$$
I_{cm} = I - md^2
$$

$$
d = \sqrt{\frac{I-I_{cm}}{m}}
$$

Uso dinamico posterior:

$$
\alpha=\frac{\tau}{I}
$$

Lectura fisica:
- cambiar el eje cambia la resistencia al giro,
- ese cambio impacta directamente en la aceleracion angular.

## 5- Cuando aplica esta relacion (modelo y validez)
La formula es valida cuando:
- los dos ejes son paralelos,
- \(d\) es la distancia perpendicular entre esos ejes,
- el cuerpo puede tratarse como rigido.

No debes usarla cuando:
- los ejes no son paralelos,
- el problema requiere tratamiento tensorial completo en 3D.

## 6- Metodo de resolucion para problemas con Steiner
1. Identifica el eje por centro de masas y su \(I_{cm}\).
2. Verifica paralelismo entre ejes.
3. Mide \(d\) correctamente.
4. Aplica \(I=I_{cm}+md^2\).
5. Usa el nuevo \(I\) en ecuaciones dinamicas.
6. Valida que \(I\) obtenido sea mayor o igual que \(I_{cm}\).

## 7- Errores frecuentes que bloquean el aprendizaje
- Aplicar Steiner con ejes no paralelos.
- Medir \(d\) desde puntos del dibujo y no entre ejes.
- Usar masa parcial en lugar de masa total.
- Interpretar mal el signo y esperar \(I<I_{cm}\).

## 8- Ejemplo guia (de principio a fin)
Datos: \(I_{cm}=0.20\), \(m=4\), \(d=0.10\).

$$
I = I_{cm}+md^2=0.20+4(0.10)^2=0.24\ \mathrm{kg\,m^2}
$$

Si \(\tau=1.2\ \mathrm{N\,m}\):

$$
\alpha=\frac{\tau}{I}=\frac{1.2}{0.24}=5\ \mathrm{rad/s^2}
$$

## 9- Aplicaciones reales
- diseno de bisagras, tapas y compuertas,
- dimensionado de ejes de soporte en piezas rotativas,
- analisis de mecanismos con montajes descentrados,
- calculo rapido de inercia equivalente en redisenos.

## 10- Sintesis final
Dominar este teorema significa poder trasladar inercia de forma segura entre ejes paralelos y entender como ese traslado modifica la dinamica real del sistema.
