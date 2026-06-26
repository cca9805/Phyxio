const e=`# Errores Comunes en el Estudio de la Bomba de Calor

## Errores conceptuales

### Error 1: Confundir transporte de energía con creación de energía
**Por qué parece correcto**
El alumno observa que el sistema entrega 4 julios de calor consumiendo solo 1 julio de [[electricidad|w_elec]]. Por analogía con la eficiencia mecánica, asume que el sistema tiene un rendimiento del 400%, lo que intuitivamente le lleva a pensar que el equipo está "creando" energía extra mediante algún proceso interno misterioso.

**Por qué es incorrecto**
Físicamente, la energía no se crea, se conserva. El error reside en ignorar el segundo foco de energía: el ambiente exterior. La bomba de calor es un sistema abierto que recolecta energía térmica ya existente en el aire. La [[electricidad|w_elec]] solo se usa para mover esa energía, no para generarla desde cero.

**Señal de detección**
Aparece cuando el alumno intenta aplicar la fórmula de rendimiento y se bloquea al ver un valor mayor a 1, o cuando pregunta de dónde salen los julios que faltan en el balance eléctrico.

**Corrección conceptual**
Debes visualizar la bomba de calor como un camión que transporta mercancía (calor). El combustible del camión (electricidad) no genera la mercancía; solo permite moverla desde el almacén (exterior) hasta la tienda (casa).

**Mini-ejemplo de contraste**
Si una bomba de calor creara energía, podrías usar el calor de salida para alimentar una máquina de vapor que moviera el compresor, obteniendo energía infinita gratis. Como el movimiento perpetuo es imposible, queda claro que el calor debe venir de fuera.

## Errores de modelo

### Error 2: Suponer que el COP es constante para cualquier temperatura
**Por qué parece correcto**
Muchos alumnos consideran el [[cop]] como un parámetro fijo del aparato (como la potencia de una bombilla). Esta generalización excesiva ocurre porque en los enunciados simplificados se suele dar un valor único de rendimiento para facilitar el cálculo.

**Por qué es incorrecto**
El [[COP|cop]] depende drásticamente del salto térmico entre los focos. A medida que la temperatura exterior baja, la presión en el evaporador disminuye y el compresor debe trabajar mucho más para alcanzar la presión de condensación, lo que reduce la eficiencia. Ignorar esta dependencia lleva a sobredimensionar el [[ahorro]] en climas extremos.

**Señal de detección**
El alumno predice el mismo [[ahorro económico|ahorro]] para una vivienda en la costa tropical que para una en la alta montaña, basándose únicamente en la ficha técnica del equipo en condiciones estándar.

**Corrección conceptual**
El rendimiento de una bomba de calor es una función variable, no una constante. Imagina subir una cuesta en bicicleta: tu rendimiento para avanzar depende de la inclinación de la pendiente (la diferencia de temperatura).

**Mini-ejemplo de contraste**
Si el [[cop]] fuera constante, el equipo funcionaría igual de bien a -270 grados Celsius que a 10 grados Celsius. Sin embargo, cerca del cero absoluto no hay energía térmica que extraer, por lo que el sistema dejaría de calentar mucho antes de llegar a ese punto.

## Errores matemáticos

### Error 3: Mezclar unidades de potencia y energía en el balance
**Por qué parece correcto**
La confusión de magnitudes entre [[kilovatio]] y [[kilovatio-hora|kWh]] es el error matemático más persistente. El alumno utiliza la potencia en [[kilovatio]] del compresor directamente en fórmulas que requieren energía total, debido a una falta de atención a la dimensión temporal del proceso.

**Por qué es incorrecto**
La potencia es la rapidez con la que se transfiere energía, mientras que el calor acumulado es una cantidad total. Mezclarlas invalida la coherencia dimensional del problema, dando resultados que no pueden compararse con la factura eléctrica o la demanda térmica del edificio.

**Señal de detección**
Aparecen resultados absurdos en el cálculo del [[coste]], con valores de céntimos para calentar un hotel o facturas de millones de euros para una bombilla, debido a factores de 3600 (segundos por [[hora]]) no aplicados.

**Corrección conceptual**
Recuerda que los [[kW|kilovatio]] son como la velocidad de un coche (km/h), mientras que los [[kWh]] son la distancia recorrida (km). Para saber cuánta energía has gastado, debes multiplicar cuánto de rápido iba el flujo por cuánto tiempo ha estado encendido.

**Mini-ejemplo de contraste**
Si confundes magnitudes, una bomba de calor de 10 [[kilovatio]] gastaría lo mismo en un segundo que en un año, lo cual es lógicamente imposible.

## Errores de interpretación

### Error 4: Creer que el calor ambiental extraído es "energía perdida"
**Por qué parece correcto**
Al ver el término [[q_ambiente]] en el lado negativo de un diagrama de flujo, algunos alumnos asumen que es una pérdida de calor hacia el exterior, similar al calor que se escapa por una chimenea en una caldera tradicional.

**Por qué es incorrecto**
Es exactamente lo contrario. El [[q_ambiente]] es la ganancia de energía renovable. El error proviene de una mala interpretación de los signos en el balance: el sistema roba calor al exterior (enfriando el aire de la calle) para inyectarlo en el interior. Es energía ganada para el usuario, no perdida.

**Señal de detección**
El alumno resta el calor ambiental del calor entregado en lugar de sumarlo al trabajo eléctrico para cerrar el balance de la primera ley.

**Corrección conceptual**
Imagina que el exterior es un banco de energía gratuito. El [[q_ambiente]] es el dinero que sacas del cajero para gastarlo en tu casa. No es una pérdida, es un ingreso térmico.

**Mini-ejemplo de contraste**
Si el calor ambiental fuera una pérdida, una bomba de calor calentaría más si la desenchufaras del exterior, lo cual es absurdo ya que el aire frío de salida es la prueba de que el calor ha entrado en la casa.

## Regla de autocontrol rápido
Para verificar si tu análisis de una bomba de calor es físicamente coherente, aplica siempre este chequeo de la Segunda Ley:
1. Comprueba que el [[cop]] sea estrictamente mayor que la unidad. Si el resultado es igual o inferior a 1, tu bomba se comporta como una simple estufa (error de modelo).
2. Verifica que el calor de salida [[q_calor]] sea igual a la suma del trabajo [[w_elec]] y el calor extraído [[q_ambiente]]. Si el calor de salida es menor que la electricidad consumida, has violado la conservación de la energía.
3. Asegúrate de que los [[megajulios|MJ]] y los [[kilovatio-hora|kWh]] estén bien convertidos: un [[kWh]] equivale a 3.6 [[MJ]]. Si no has usado este factor, tu [[coste]] económico estará equivocado por un factor de casi 4 veces.
`;export{e as default};
