# Ecuacion Fundamental

## Idea clave
La ecuacion central de la dinamica rotacional es

$$
\sum\tau = I\alpha
$$

y solo funciona bien cuando torques e inercia se calculan respecto al mismo eje y con una convencion de signos coherente.

## 1- Que pregunta fisica responde esta ecuacion
Responde a la pregunta dinamica esencial del giro:
- dado un torque neto, que aceleracion angular produce el sistema

Tambien responde la inversa:
- que torque neto necesitas para imponer una aceleracion angular deseada

## 2- Significado de cada termino

$$
\sum\tau
$$
- causa dinamica de giro (suma algebraica de torques con signo).

$$
I
$$
- resistencia al cambio de estado de giro (depende del eje y distribucion de masa).

$$
\alpha
$$
- respuesta angular instantanea del sistema.

## 3- Regla de oro de eje y signo
Para evitar errores estructurales:
1. elige eje de analisis,
2. calcula todos los torques respecto a ese eje,
3. usa el mismo eje para el valor de \(I\),
4. define convencion de signo y mantenla.

Si rompes cualquiera de esos pasos, el resultado pierde validez fisica.

## 4- Formas operativas de despeje

$$
\alpha = \frac{\sum\tau}{I}
$$

$$
I = \frac{\sum\tau}{\alpha}
$$

$$
\sum\tau = I\alpha
$$

Lectura inmediata:
- para \(I\) fija, \(\alpha\) escala linealmente con torque neto,
- para torque fijo, \(\alpha\) decrece al aumentar \(I\).

## 5- Casos importantes de interpretacion
Caso A: \(\sum\tau=0\)
- entonces \(\alpha=0\),
- puede haber reposo angular o velocidad angular constante.

Caso B: \(\sum\tau\neq0\)
- hay aceleracion angular,
- \(\omega\) cambia con el tiempo.

## 6- Relacion con energia y trabajo rotacional
Cuando el torque realiza trabajo, puede cambiar energia cinetica rotacional.

En forma diferencial:

$$
\delta W = \tau\,d\theta
$$

y en dinamica rotacional se conecta con la evolucion de \(\omega\).

## 7- Metodo de resolucion en problemas reales
1. DCL o esquema dinamico con fuerzas reales.
2. Proyeccion a torque respecto al eje elegido.
3. Suma algebraica de torques.
4. Seleccion de \(I\) correcta para ese eje.
5. Aplicacion de \(\sum\tau = I\alpha\).
6. Interpretacion de signo y magnitud de \(\alpha\).

## 8- Ejemplo completo guiado
Disco con \(I=0.80\,\text{kg m}^2\).
- torque motor: \(+5.0\,\text{N m}\)
- torque resistente: \(-1.4\,\text{N m}\)

Paso 1. Torque neto:

$$
\sum\tau = 5.0-1.4 = 3.6\ \text{N m}
$$

Paso 2. Aceleracion angular:

$$
\alpha = \frac{3.6}{0.80}=4.5\ \text{rad/s}^2
$$

Interpretacion:
- \(\alpha>0\) en la convencion elegida,
- el sistema acelera su giro en el sentido positivo.

## 9- Errores tipicos que arruinan el planteo
- sumar modulos de torque sin signo.
- usar \(I\) de otro eje distinto al de torques.
- confundir \(\sum\tau=0\) con "objeto en reposo".
- mezclar rad/s y rpm sin conversion cuando se enlaza con datos experimentales.

## 10- Sintesis final
Dominar esta ecuacion significa poder pasar del esquema fisico al resultado dinamico con rigor:
- torque neto bien construido,
- inercia bien seleccionada,
- y lectura fisica clara de la evolucion angular.
