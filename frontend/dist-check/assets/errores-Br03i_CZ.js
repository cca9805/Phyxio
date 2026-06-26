const e=`# Errores Comunes en Flujo Laminar\r
\r
## Errores conceptuales\r
\r
### Error\r
**Confundir caudal con velocidad de las láminas**\r
- **Por qué parece correcto**: Es intuitivo pensar que el fluido se mueve como un pistón sólido y que todo el volumen avanza a la misma velocidad.\r
- **Por qué es incorrecto**: Debido a la viscosidad, el fluido se "pega" a las paredes y se desliza capa sobre capa, creando un perfil donde cada punto tiene una velocidad distinta.\r
- **Señal de detección**: Caudales calculados que son el doble de lo esperado o tiempos de tránsito inconsistentes con la velocidad máxima.\r
- **Corrección conceptual**: El caudal [[Q]] es la integral del perfil de velocidades; la velocidad media es exactamente la mitad de la máxima [[v_max]] en el centro.\r
- **Mini-ejemplo**: Si [[v_max]] es 2 m/s, usar 2 m/s para calcular el caudal dará un valor 100 % erróneo; se debe usar 1 m/s.\r
\r
### Error\r
**Pensar que la rugosidad siempre afecta a la fricción**\r
- **Por qué parece correcto**: En la vida diaria, las superficies rugosas siempre generan más fricción que las lisas.\r
- **Por qué es incorrecto**: En régimen laminar, se forma una capa límite viscosa que recubre las irregularidades de la pared, haciendo que el fluido "resbale" sobre fluido estático.\r
- **Señal de detección**: Intentar buscar el coeficiente de rugosidad en el diagrama de Moody para un Reynolds menor a 2000.\r
- **Corrección conceptual**: El factor de fricción en flujo laminar depende únicamente de [[Re]] (factor de fricci?n igual a 64 dividido por [[Re]]) y es independiente del material del tubo.\r
- **Mini-ejemplo**: Un tubo de acero oxidado y uno de vidrio liso tendrán la misma pérdida de carga si el flujo es estrictamente laminar.\r
\r
## Errores de modelo\r
\r
### Error\r
**Aplicar Poiseuille en la zona de entrada de la tubería**\r
- **Por qué parece correcto**: Se asume que las leyes del leaf se aplican desde el primer milímetro de la tubería.\r
- **Por qué es incorrecto**: El fluido necesita una distancia física (longitud de entrada) para organizar sus láminas y alcanzar el perfil parabólico estable.\r
- **Señal de detección**: Caídas de presión [[deltaP]] medidas que son mayores a las calculadas teóricamente cerca de la entrada.\r
- **Corrección conceptual**: La ley de Poiseuille solo es válida para flujo "totalmente desarrollado".\r
- **Mini-ejemplo**: En un tubo de 1 m de largo con una entrada brusca, los primeros 10 cm no seguirán la ley de Poiseuille con precisión.\r
\r
### Error\r
**Ignorar los límites del Número de Reynolds**\r
- **Por qué parece correcto**: Las fórmulas son sencillas de aplicar y es tentador usarlas para cualquier velocidad.\r
- **Por qué es incorrecto**: Por encima de [[Re]] ? 2300, las fuerzas inerciales rompen las láminas y el flujo se vuelve turbulento, cambiando totalmente la física del sistema.\r
- **Señal de detección**: Resultados de caudal que no coinciden con la realidad cuando la velocidad es alta o la viscosidad [[eta]] es baja.\r
- **Corrección conceptual**: Siempre verifique el Número de Reynolds antes de aplicar modelos laminares.\r
- **Mini-ejemplo**: Intentar calcular el flujo de agua en una tubería de incendio usando Poiseuille dará errores masivos ya que ese flujo es turbulento.\r
\r
## Errores matemáticos\r
\r
### Error\r
**Confusión entre radio y diámetro en la cuarta potencia**\r
- **Por qué parece correcto**: Ambos miden la dimensión del tubo y a veces se usan indistintamente en fórmulas rápidas.\r
- **Por qué es incorrecto**: La ley usa el radio [[R]] elevado a la cuarta potencia. Usar el diámetro di?metro multiplica el error por 16.\r
- **Señal de detección**: Resultados de caudal [[Q]] absurdamente grandes o pequeños (fuera de órdenes de magnitud lógicos).\r
- **Corrección conceptual**: Siempre convierta el diámetro a radio y asegúrese de elevar a la potencia 4.\r
- **Mini-ejemplo**: Si el radio es 1 cm (el radio a la cuarta potencia vale 1 en esas unidades), usar el diámetro de 2 cm daría dos elevado a cuatro da 16, un error del 1500 %.\r
\r
### Error\r
**Inconsistencia de unidades en la viscosidad**\r
- **Por qué parece correcto**: La viscosidad se da a menudo en centiPoise (cP) porque son números más manejables.\r
- **Por qué es incorrecto**: Las fórmulas de presión y caudal requieren unidades coherentes del SI (Pa*s).\r
- **Señal de detección**: Resultados que fallan por factores de 10, 100 o 1000.\r
- **Corrección conceptual**: Un centipoise equivale a una milésima de pascal-segundo. Realice la conversión antes de cualquier cálculo.
- **Mini-ejemplo**: Usar 1 en la fórmula para agua en lugar de 0.001 dará una caída de presión mil veces menor a la real.\r
\r
## Errores de interpretación\r
\r
### Error\r
**Creer que la presión es constante a lo largo de la tubería**\r
- **Por qué parece correcto**: En circuitos eléctricos o flujos ideales, a veces se asumen tramos sin pérdida.\r
- **Por qué es incorrecto**: La viscosidad es una fuerza disipativa que consume energía mecánica en cada milímetro de avance.\r
- **Señal de detección**: Diagramas de energía que muestran una línea horizontal de presión en un tubo con fluido viscoso.\r
- **Corrección conceptual**: Debe existir un gradiente de presión negativo (caída) para que el fluido venza la fricción interna.\r
- **Mini-ejemplo**: En una tubería horizontal de 10 m, si la presión de entrada es 100 kPa, la de salida debe ser menor a 100 kPa para que haya movimiento.\r
\r
## Regla de autocontrol rápido\r
Para verificar sus resultados, aplique la **Prueba del 2-4-8**:\r
1.  **2**: ¿Es la velocidad máxima [[v_max]] el **doble** de la media?\r
2.  **4**: ¿Ha elevado el radio [[R]] a la **cuarta** potencia?\r
3.  **8**: ¿Ha incluido el factor **ocho** en el denominador de la ley de Poiseuille?\r
Si cumple estas tres condiciones y su Reynolds es menor a 2300, su solución es estructuralmente sólida.
`;export{e as default};
