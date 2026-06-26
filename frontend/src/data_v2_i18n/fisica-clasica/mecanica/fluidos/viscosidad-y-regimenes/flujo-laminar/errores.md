# Errores Comunes en Flujo Laminar

## Errores conceptuales

### Error
**Confundir caudal con velocidad de las láminas**
- **Por qué parece correcto**: Es intuitivo pensar que el fluido se mueve como un pistón sólido y que todo el volumen avanza a la misma velocidad.
- **Por qué es incorrecto**: Debido a la viscosidad, el fluido se "pega" a las paredes y se desliza capa sobre capa, creando un perfil donde cada punto tiene una velocidad distinta.
- **Señal de detección**: Caudales calculados que son el doble de lo esperado o tiempos de tránsito inconsistentes con la velocidad máxima.
- **Corrección conceptual**: El caudal [[Q]] es la integral del perfil de velocidades; la velocidad media es exactamente la mitad de la máxima [[v_max]] en el centro.
- **Mini-ejemplo**: Si [[v_max]] es 2 m/s, usar 2 m/s para calcular el caudal dará un valor 100 % erróneo; se debe usar 1 m/s.

### Error
**Pensar que la rugosidad siempre afecta a la fricción**
- **Por qué parece correcto**: En la vida diaria, las superficies rugosas siempre generan más fricción que las lisas.
- **Por qué es incorrecto**: En régimen laminar, se forma una capa límite viscosa que recubre las irregularidades de la pared, haciendo que el fluido "resbale" sobre fluido estático.
- **Señal de detección**: Intentar buscar el coeficiente de rugosidad en el diagrama de Moody para un Reynolds menor a 2000.
- **Corrección conceptual**: El factor de fricción en flujo laminar depende únicamente de [[Re]] (factor de fricci?n igual a 64 dividido por [[Re]]) y es independiente del material del tubo.
- **Mini-ejemplo**: Un tubo de acero oxidado y uno de vidrio liso tendrán la misma pérdida de carga si el flujo es estrictamente laminar.

## Errores de modelo

### Error
**Aplicar Poiseuille en la zona de entrada de la tubería**
- **Por qué parece correcto**: Se asume que las leyes del leaf se aplican desde el primer milímetro de la tubería.
- **Por qué es incorrecto**: El fluido necesita una distancia física (longitud de entrada) para organizar sus láminas y alcanzar el perfil parabólico estable.
- **Señal de detección**: Caídas de presión [[deltaP]] medidas que son mayores a las calculadas teóricamente cerca de la entrada.
- **Corrección conceptual**: La ley de Poiseuille solo es válida para flujo "totalmente desarrollado".
- **Mini-ejemplo**: En un tubo de 1 m de largo con una entrada brusca, los primeros 10 cm no seguirán la ley de Poiseuille con precisión.

### Error
**Ignorar los límites del Número de Reynolds**
- **Por qué parece correcto**: Las fórmulas son sencillas de aplicar y es tentador usarlas para cualquier velocidad.
- **Por qué es incorrecto**: Por encima de [[Re]] ? 2300, las fuerzas inerciales rompen las láminas y el flujo se vuelve turbulento, cambiando totalmente la física del sistema.
- **Señal de detección**: Resultados de caudal que no coinciden con la realidad cuando la velocidad es alta o la viscosidad [[eta]] es baja.
- **Corrección conceptual**: Siempre verifique el Número de Reynolds antes de aplicar modelos laminares.
- **Mini-ejemplo**: Intentar calcular el flujo de agua en una tubería de incendio usando Poiseuille dará errores masivos ya que ese flujo es turbulento.

## Errores matemáticos

### Error
**Confusión entre radio y diámetro en la cuarta potencia**
- **Por qué parece correcto**: Ambos miden la dimensión del tubo y a veces se usan indistintamente en fórmulas rápidas.
- **Por qué es incorrecto**: La ley usa el radio [[R]] elevado a la cuarta potencia. Usar el diámetro di?metro multiplica el error por 16.
- **Señal de detección**: Resultados de caudal [[Q]] absurdamente grandes o pequeños (fuera de órdenes de magnitud lógicos).
- **Corrección conceptual**: Siempre convierta el diámetro a radio y asegúrese de elevar a la potencia 4.
- **Mini-ejemplo**: Si el radio es 1 cm (el radio a la cuarta potencia vale 1 en esas unidades), usar el diámetro de 2 cm daría dos elevado a cuatro da 16, un error del 1500 %.

### Error
**Inconsistencia de unidades en la viscosidad**
- **Por qué parece correcto**: La viscosidad se da a menudo en centiPoise (cP) porque son números más manejables.
- **Por qué es incorrecto**: Las fórmulas de presión y caudal requieren unidades coherentes del SI (Pa*s).
- **Señal de detección**: Resultados que fallan por factores de 10, 100 o 1000.
- **Corrección conceptual**: Un centipoise equivale a una milésima de pascal-segundo. Realice la conversión antes de cualquier cálculo.
- **Mini-ejemplo**: Usar 1 en la fórmula para agua en lugar de 0.001 dará una caída de presión mil veces menor a la real.

## Errores de interpretación

### Error
**Creer que la presión es constante a lo largo de la tubería**
- **Por qué parece correcto**: En circuitos eléctricos o flujos ideales, a veces se asumen tramos sin pérdida.
- **Por qué es incorrecto**: La viscosidad es una fuerza disipativa que consume energía mecánica en cada milímetro de avance.
- **Señal de detección**: Diagramas de energía que muestran una línea horizontal de presión en un tubo con fluido viscoso.
- **Corrección conceptual**: Debe existir un gradiente de presión negativo (caída) para que el fluido venza la fricción interna.
- **Mini-ejemplo**: En una tubería horizontal de 10 m, si la presión de entrada es 100 kPa, la de salida debe ser menor a 100 kPa para que haya movimiento.

## Regla de autocontrol rápido
Para verificar sus resultados, aplique la **Prueba del 2-4-8**:
1.  **2**: ¿Es la velocidad máxima [[v_max]] el **doble** de la media?
2.  **4**: ¿Ha elevado el radio [[R]] a la **cuarta** potencia?
3.  **8**: ¿Ha incluido el factor **ocho** en el denominador de la ley de Poiseuille?
Si cumple estas tres condiciones y su Reynolds es menor a 2300, su solución es estructuralmente sólida.
