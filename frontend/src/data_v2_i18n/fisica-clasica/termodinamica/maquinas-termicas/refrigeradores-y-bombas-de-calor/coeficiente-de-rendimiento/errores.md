# Errores frecuentes — Coeficiente de rendimiento

## Errores conceptuales

### Error 1: Asumir que COP mayor que uno viola la segunda ley

**Por qué parece correcto**
El alumno conoce que el rendimiento térmico de un motor está limitado a ser menor que uno por la segunda ley. Al ver un [[COP_ref]] de 5.16, generaliza esa restricción y concluye que el resultado es imposible.

**Por qué es incorrecto**
El COP no mide la conversión de calor en trabajo sino la transferencia de calor por unidad de trabajo consumido. El refrigerador no viola la segunda ley porque transfiere calor del foco frío al caliente consumiendo [[W]], exactamente como la segunda ley permite. El COP puede tomar cualquier valor positivo sin contradicción.

**Señal de detección**
Si el alumno declara que un COP mayor que uno es imposible o viola alguna ley, está confundiendo COP con rendimiento térmico.

**Corrección conceptual**
El COP mide calor transferido por unidad de trabajo, no calor convertido en trabajo. La restricción de ser menor que uno solo aplica al rendimiento térmico de motores. El COP está acotado superiormente por el COP de Carnot, no por uno.

**Mini-ejemplo de contraste**
Un refrigerador entre [[T_C]] de 258 K y [[T_H]] de 308 K tiene COP de Carnot de 5.16. Cada vatio de potencia extrae 5.16 vatios de calor. Si el alumno rechaza este resultado, confunde COP con rendimiento térmico, que para un motor entre los mismos focos sería solo 0.162.

## Errores de modelo

### Error 2: Usar el COP de Carnot como predicción de rendimiento real

**Por qué parece correcto**
El alumno calcula el COP de Carnot con las temperaturas del problema y lo presenta como el COP real del sistema. La fórmula es cerrada y sencilla, lo que invita a usarla directamente.

**Por qué es incorrecto**
El COP de Carnot es un límite teórico que asume reversibilidad total. Los ciclos reales de compresión de vapor tienen irreversibilidades significativas que reducen el COP real a un 30 a 60 % del valor de Carnot. Usar el COP de Carnot como predicción sobreestima drásticamente la capacidad de refrigeración.

**Señal de detección**
Si el alumno dimensiona un compresor o estima el consumo eléctrico usando directamente el COP de Carnot sin aplicar un factor de corrección, está cometiendo este error.

**Corrección conceptual**
El COP de Carnot es una cota superior, no una predicción. Para estimaciones prácticas, aplicar un factor de 0.3 a 0.6 al COP de Carnot según el tipo de sistema y las condiciones de operación.

**Mini-ejemplo de contraste**
Con COP de Carnot de 5.16, el alumno predice que 150 [[W]] de potencia extraen 774 W de calor. En realidad, con un COP real de 2.5 (48 % del Carnot), se extraen solo 375 W. La sobreestimación es del 106 %, lo que llevaría a un subdimensionado grave del compresor.

## Errores matemáticos

### Error 3: Usar temperaturas en Celsius en lugar de kelvin

**Por qué parece correcto**
Los enunciados dan temperaturas en Celsius y el alumno las sustituye directamente en la fórmula del COP de Carnot. El procedimiento parece natural porque los datos ya son números.

**Por qué es incorrecto**
La fórmula del COP de Carnot involucra cocientes de temperaturas absolutas. Con [[T_C]] de menos 15 grados y [[T_H]] de 35 grados en Celsius, el alumno calcula menos 15 dividido entre la diferencia 35 menos (menos 15), obteniendo menos 0.3, un valor negativo sin sentido físico.

**Señal de detección**
Si [[COP_ref]] resulta negativo, nulo o extraordinariamente alto con temperaturas de climatización convencional, es muy probable que se hayan usado Celsius en lugar de kelvin.

**Corrección conceptual**
Convertir siempre ambas temperaturas a kelvin sumando 273.15 antes de sustituir. [[T_C]] de menos 15 grados es 258 K y [[T_H]] de 35 grados es 308 K. El COP correcto es 258 dividido entre 50, dando 5.16.

**Mini-ejemplo de contraste**
En Celsius se obtiene erróneamente menos 0.3 (negativo, sin sentido). En kelvin se obtiene 5.16 (positivo, coherente). La diferencia entre ambos resultados delata inmediatamente el error de unidades.

## Errores de interpretación

### Error 4: Confundir COP de refrigeración con COP de bomba de calor

**Por qué parece correcto**
El alumno usa la fórmula con [[T_H]] en el numerador cuando el problema pide el COP de refrigeración. Ambas fórmulas tienen estructura similar y comparten el mismo denominador, lo que facilita la confusión.

**Por qué es incorrecto**
El COP de refrigeración tiene [[T_C]] en el numerador porque el efecto útil es extraer calor [[Q_C]] del foco frío. El COP de bomba de calor tiene [[T_H]] en el numerador porque el efecto útil es entregar calor [[Q_H]] al foco caliente. Confundir el numerador produce un resultado desplazado en exactamente una unidad.

**Señal de detección**
Si [[COP_bc]] menos [[COP_ref]] no da exactamente uno, hay confusión entre los dos modos de operación o un error en los datos.

**Corrección conceptual**
Identificar siempre el efecto útil del sistema antes de elegir la fórmula. Refrigeración: efecto útil es [[Q_C]], numerador [[T_C]]. Bomba de calor: efecto útil es [[Q_H]], numerador [[T_H]].

**Mini-ejemplo de contraste**
El problema pide COP de refrigeración con [[T_C]] de 258 K y [[T_H]] de 308 K. El valor correcto es 5.16 (numerador [[T_C]]). El alumno calcula 6.16 (numerador [[T_H]]), que es el COP de bomba de calor. La diferencia de exactamente uno confirma la confusión.

## Regla de autocontrol rápido

### Error 5: Olvidar el trabajo en el balance energético

**Por qué parece correcto**
El alumno iguala [[Q_H]] con [[Q_C]], pensando que el refrigerador simplemente traslada calor de un foco a otro. Si el calor se mueve, parece lógico que entre la misma cantidad que sale.

**Por qué es incorrecto**
El balance energético del ciclo invertido establece que [[Q_H]] es [[Q_C]] más [[W]]. El trabajo del compresor se convierte íntegramente en calor adicional que el condensador entrega al foco caliente. El foco caliente siempre recibe más calor del que se extrae del foco frío.

**Señal de detección**
Si [[Q_H]] resulta igual a [[Q_C]], se ha olvidado sumar [[W]]. Verificar siempre que la diferencia [[Q_H]] menos [[Q_C]] sea exactamente [[W]].

**Corrección conceptual**
Aplicar siempre el balance energético como verificación: [[Q_H]] es [[Q_C]] más [[W]]. Si la suma no cuadra, hay error en los datos o en el cálculo del COP.

**Mini-ejemplo de contraste**
Con [[Q_C]] de 774 W y [[W]] de 150 W, [[Q_H]] debe ser 924 W. Si el alumno dice que [[Q_H]] es 774 W, está ignorando los 150 W del compresor, violando la primera ley de la termodinámica.
