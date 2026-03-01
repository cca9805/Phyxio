# Ejemplos Aplicados De Rotacion Con Rozamiento

## Idea clave
En sistemas reales, el torque aplicado no se convierte integramente en aceleracion angular: una parte se pierde en torques resistentes. El movimiento real lo decide el torque neto.

## 1- Que se estudia en este subtema
No se introduce una ley nueva. Se aplica de forma realista:

$$
\sum\tau = I\alpha
$$

pero separando claramente:
- torque que impulsa,
- torque que se opone,
- y respuesta angular resultante.

## 2- Estructura fisica del modelo
Modelo base:

$$
\tau_{net} = \tau_{ap} - \tau_{roz}
$$

$$
\alpha = \frac{\tau_{net}}{I} = \frac{\tau_{ap}-\tau_{roz}}{I}
$$

Interpretacion:
- si \(\tau_{ap} > \tau_{roz}\), acelera,
- si \(\tau_{ap} = \tau_{roz}\), \(\alpha=0\) (regimen angular constante),
- si \(\tau_{ap} < \tau_{roz}\), frena.

## 3- Lectura del signo y sentido de giro
El signo de \(\alpha\) no es decorativo: indica en que sentido cambia \(\omega\).

- \(\alpha > 0\): \(\omega\) crece en el sentido positivo elegido.
- \(\alpha < 0\): \(\omega\) decrece en ese sentido (frenado angular).

Regla didactica:
- define una convencion al inicio y no la cambies.

## 4- Evolucion temporal cuando alpha es constante
Si \(\alpha\) se puede aproximar constante en un intervalo:

$$
\omega(t)=\omega_0+\alpha t
$$

Para tiempo de parada en frenado (\(\omega_f=0\)):

$$
t_{parada}=\frac{-\omega_0}{\alpha}
$$

(usa \(\alpha<0\) para que \(t_{parada}>0\)).

## 5- Conexion con energia y potencia
En rotacion, el torque resistente suele disipar energia.

Potencia mecanica instantanea:

$$
P = \tau\,\omega
$$

Si \(\tau_{roz}\) se opone al giro, su potencia asociada es extraida del sistema mecanico y termina como calor.

## 6- Metodo de resolucion recomendado
1. Dibuja esquema y define eje de giro.
2. Identifica torques motores y resistentes.
3. Asigna signos a cada torque.
4. Calcula \(\tau_{net}\).
5. Aplica \(\alpha=\tau_{net}/I\).
6. Si piden evolucion temporal, usa \(\omega(t)=\omega_0+\alpha t\).
7. Interpreta fisicamente el resultado.

## 7- Ejemplo guiado completo
Datos:
- \(I=0.80\ \text{kg m}^2\)
- \(\tau_{ap}=3.2\ \text{N m}\)
- \(\tau_{roz}=1.0\ \text{N m}\)
- \(\omega_0=4.0\ \text{rad/s}\)

Paso 1. Torque neto:

$$
\tau_{net}=3.2-1.0=2.2\ \text{N m}
$$

Paso 2. Aceleracion angular:

$$
\alpha=\frac{2.2}{0.80}=2.75\ \text{rad/s}^2
$$

Paso 3. Velocidad angular tras 3 s:

$$
\omega(3)=4.0+2.75\cdot3=12.25\ \text{rad/s}
$$

Lectura final:
- el sistema acelera claramente,
- el rozamiento reduce la aceleracion respecto al caso ideal sin perdidas.

## 8- Caso de frenado puro
Si \(\tau_{ap}=0\) y solo actua \(\tau_{roz}\):

$$
\alpha = -\frac{\tau_{roz}}{I}
$$

Con \(I=1.2\ \text{kg m}^2\), \(\tau_{roz}=0.6\ \text{N m}\), \(\omega_0=5\ \text{rad/s}\):

$$
\alpha=-0.5\ \text{rad/s}^2,\quad t_{parada}=\frac{-5}{-0.5}=10\ \text{s}
$$

## 9- Errores frecuentes
- restar mal el torque resistente por no fijar signo.
- usar formulas temporales con \(\alpha\) variable como si fuera constante.
- mezclar torques de ejes distintos.
- interpretar \(\alpha<0\) como "giro en sentido contrario inmediato".

## 10- Sintesis final
Este subtema te ensena a modelar sistemas rotacionales reales. La diferencia entre resolver bien o mal suele estar en tres puntos: eje comun, signos coherentes y lectura fisica del torque neto.
