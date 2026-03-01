# Sistemas Reales

## Idea clave
Un sistema real siempre pierde parte de la energia suministrada. El efecto directo es menos fuerza neta util, menor aceleracion y menor rendimiento global.

## 1- Que estudia este subtema
Este subtema introduce la diferencia entre "modelo perfecto" y "equipo real": friccion, resistencias internas, calentamiento y conversion incompleta de energia.

## 2- Imagen fisica correcta
En un sistema real, la fuerza aplicada no se convierte completamente en fuerza util de movimiento.

Modelo simplificado:

$$
F_{net}=F_{ap}-F_{loss}
$$

## 3- Aceleracion efectiva
Al aplicar segunda ley:

$$
a=\frac{F_{ap}-F_{loss}}{m}
$$

Consecuencia:
- si F_loss aumenta, a disminuye;
- si F_loss se acerca a F_ap, el sistema casi no acelera.

## 4- Eficiencia energetica

$$
\eta=\frac{P_{out}}{P_{in}}
$$

con:

$$
0<\eta\le1
$$

Interpretacion:
- eta cercana a 1: sistema eficiente.
- eta baja: gran parte de la energia se disipa.

## 5- Conexion fuerza-potencia
La degradacion de rendimiento puede analizarse por fuerza (perdidas mecanicas) o por potencia (rendimiento energetico). Ambas lecturas son complementarias.

## 6- Metodo de resolucion recomendado
1. Identifica entradas utiles: F_ap, F_loss, m, P_in, P_out.
2. Calcula F_net y a.
3. Calcula eta y expresa tambien en porcentaje.
4. Evalua si el resultado es fisicamente plausible.
5. Compara con caso ideal para cuantificar penalizacion.

## 7- Escenarios tipicos
- Motores y transmisiones con friccion.
- Sistemas de transporte con resistencias de rodadura.
- Actuadores electricos con perdidas termicas.
- Mecanismos con desgaste progresivo.

## 8- Errores tipicos
- Ignorar perdidas al extrapolar el caso ideal.
- Usar eta mayor que 1 por error de datos/unidades.
- Confundir potencia instantanea con energia total.
- No revisar consistencia entre F_ap, F_loss y signo de a.

## 9- Ejemplo guiado
m=25 kg, F_ap=180 N, F_loss=45 N, P_in=1500 W, P_out=1080 W.

$$
F_{net}=180-45=135\ \text{N}
$$

$$
a=\frac{135}{25}=5.4\ \text{m/s}^2
$$

$$
\eta=\frac{1080}{1500}=0.72=72\%
$$

Interpretacion: el sistema mantiene buena respuesta, pero pierde cerca del 28% de la potencia de entrada.

## 10- Sintesis final
Dominar sistemas reales significa cuantificar perdidas y no confiar ciegamente en el modelo ideal. Ese salto de calidad convierte calculos escolares en analisis tecnicamente utiles.
