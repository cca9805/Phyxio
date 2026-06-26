const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un motor aplica un torque constante [[tau]] de 50 N m sobre un eje que gira 12 rad. Después, en otro tramo, el torque varía linealmente con el ángulo desde 50 N m hasta 20 N m durante 10 rad. Calcula el trabajo total [[W]] y la potencia instantánea [[P]] si al final [[omega]] es 30 rad/s y el torque final es 20 N m.\r
\r
## Datos\r
\r
Primer tramo: [[tau]] constante de 50 N m y [[theta]] de 12 rad. Segundo tramo: torque variable entre 50 N m y 20 N m durante 10 rad. Estado final: [[omega]] igual a 30 rad/s. Se usan la relación de trabajo con torque constante, la relación de trabajo con torque variable y la relación de potencia angular.\r
\r
## Definición del sistema\r
\r
El sistema es el eje accionado por el motor. El motor es agente externo que entrega energía. No se incluyen pérdidas internas porque el enunciado no las da. Si existieran pérdidas, el trabajo externo no coincidiría con el aumento de energía rotacional del eje.\r
\r
## Modelo físico\r
\r
El modelo físico tiene eje fijo, signo positivo en el sentido del giro y torque conocido. En el primer tramo [[tau]] es constante. En el segundo tramo [[tau]] depende de [[theta]], así que el trabajo se interpreta como área bajo la curva torque-ángulo.\r
\r
## Justificación del modelo\r
\r
El enunciado separa explícitamente tramo constante y tramo variable. Por eso no se usa una sola multiplicación para todo el proceso. La velocidad angular final permite calcular potencia instantánea con [[P]], [[tau]] y [[omega]] del mismo eje y del mismo instante.\r
\r
## Resolución simbólica\r
\r
Para el primer tramo se usa la relación de trabajo con torque constante: el trabajo es [[tau]] por [[theta]]. Para el tramo variable se usa la relación de trabajo con torque variable: como la variación es lineal, el área es torque medio por desplazamiento angular. Para la potencia final se usa la relación de potencia angular.\r
\r
## Sustitución numérica\r
\r
Primer tramo:\r
\r
{{f:trabajo_torque_constante}}\r
\r
. Segundo tramo:\r
\r
{{f:trabajo_torque_variable}}\r
\r
Con torque medio 35 N m, el trabajo del tramo variable es 35 * 10 = 350 J. Trabajo total: 950 J. Potencia final:\r
\r
{{f:potencia_angular}}\r
\r
.\r
\r
## Validación dimensional\r
\r
El producto de newton metro por radianes da joules porque el radián es adimensional. El producto de newton metro por radianes por segundo da watts. Las unidades confirman que [[W]] es energía acumulada y [[P]] es ritmo de transferencia.\r
\r
## Interpretación física\r
\r
El resultado significa que el motor entregó 950 J al eje en el proceso ideal. La potencia final no es el trabajo total: solo describe el ritmo instantáneo al final. Si el torque final se mantuviera durante más tiempo, entonces esa potencia podría integrarse para obtener trabajo adicional.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En un freno de disco, el torque suele oponerse al giro. Supón que un freno ejerce [[tau]] de -120 N m mientras la rueda gira 25 rad. Al inicio la velocidad angular es alta, pero en un instante medido [[omega]] vale 15 rad/s. Queremos estimar trabajo de frenado y potencia disipada en ese instante.\r
\r
## Estimación física\r
\r
Con torque aproximadamente constante, la relación de trabajo con torque constante da\r
\r
{{f:trabajo_torque_constante}}\r
\r
. La potencia instantánea con la relación de potencia angular es\r
\r
{{f:potencia_angular}}\r
\r
. El signo negativo indica que el rotor pierde energía. En valor absoluto, el freno está extrayendo energía a un ritmo de 1800 W.\r
\r
## Interpretación\r
\r
El trabajo negativo no desaparece; se transforma principalmente en calor en pastillas y disco. Si el torque de frenado cambiara durante la maniobra, habría que usar la relación de trabajo con torque variable y calcular el área real bajo la curva. Esta lectura permite distinguir energía total extraída, potencia instantánea y carga térmica acumulada.\r
\r
## Control de errores del ejemplo\r
\r
La primera comprobación es angular: los 12 rad y 10 rad ya están en la unidad correcta. Si se hubieran dado vueltas, habría que convertirlas antes de multiplicar. La segunda comprobación es de constancia: el primer tramo admite producto directo, pero el segundo no, porque [[tau]] cambia de 50 N m a 20 N m. Usar solo el torque final daría 200 J; usar solo el inicial daría 500 J; el área trapezoidal da 350 J, que respeta la variación lineal.\r
\r
La tercera comprobación es temporal. La potencia final de 600 W no significa que durante todo el proceso se hayan entregado 600 J cada segundo. Solo describe el ritmo al final, cuando [[tau]] vale 20 N m y [[omega]] vale 30 rad/s. Si el problema pidiera energía durante un intervalo posterior, habría que conocer cuánto tiempo dura ese estado o cómo evolucionan [[tau]] y [[omega]].\r
\r
## Variante con signo opuesto\r
\r
Si el mismo eje estuviera girando en sentido positivo pero el torque final fuera -20 N m, la potencia final sería -600 W. El signo no es un detalle algebraico: indica que el agente externo está extrayendo energía del eje. En ese caso el trabajo de un tramo con torque negativo reduciría la energía mecánica del rotor o aparecería como energía disipada en el entorno. Esta variante ayuda a detectar respuestas que informan solo valores absolutos y pierden la lectura física.\r
\r
## Cierre interpretativo\r
\r
El ejemplo completo combina los tres usos centrales del leaf: producto para torque constante, área para torque variable y potencia para tasa instantánea. La respuesta no se considera cerrada hasta que se han declarado eje, signo, unidad angular y estado temporal. Esa disciplina es la que permite pasar de una cuenta numérica a una lectura física de motores, frenos o transmisiones reales.`;export{a as default};
