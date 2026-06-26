# Teoría — Ciclo Otto

## Contexto conceptual

El ciclo Otto es el modelo termodinámico idealizado que describe el funcionamiento de los motores de encendido por chispa, comúnmente conocidos como motores de gasolina. El problema central que resuelve es determinar qué fracción de la energía térmica liberada durante la combustión puede convertirse en trabajo mecánico útil, y cómo esa fracción depende exclusivamente de la geometría del cilindro (relación de compresión) y las propiedades del gas (índice adiabático). El ciclo Otto es el más simple de todos los ciclos de potencia porque su rendimiento no depende de la cantidad de calor suministrado, lo que lo diferencia fundamentalmente del Diesel.

## 🟢 Nivel esencial

El ciclo Otto consta de cuatro procesos: compresión adiabática del gas, adición de calor a volumen constante (simulando la combustión instantánea de la mezcla aire-combustible), expansión adiabática que produce trabajo, y rechazo de calor a volumen constante (simulando el escape).

El rendimiento térmico [[eta_O]] depende exclusivamente de dos parámetros: la relación de compresión [[r]] y el índice adiabático [[gamma]]. A diferencia del ciclo Diesel, el rendimiento Otto no depende de la cantidad de calor suministrado [[Q_H]]. A mayor [[r]], mayor rendimiento, pero con rendimientos marginales decrecientes. A mayor [[gamma]], mayor rendimiento porque las adiabáticas son más empinadas y el ciclo se aproxima más al de Carnot.

Cuando [[r]] crece, la fracción de [[Q_H]] convertida en [[W_neto]] aumenta y la fracción cedida como [[Q_C]] disminuye. El límite práctico de [[r]] en motores de gasolina (8 a 12) viene impuesto por la detonación prematura del combustible, no por la termodinámica. El trabajo neto [[W_neto]] es siempre la diferencia entre [[Q_H]] y [[Q_C]], y el rendimiento es siempre el cociente entre [[W_neto]] y [[Q_H]].

## 🔵 Nivel formal

El rendimiento térmico del ciclo Otto se define como la fracción del calor absorbido [[Q_H]] que se convierte en trabajo neto [[W_neto]]:

{{f:rendimiento_alternativo_otto}}

La fórmula explícita del rendimiento es:

{{f:rendimiento_otto}}

El balance energético del ciclo es:

{{f:balance_energetico_otto}}

La potencia del análisis del ciclo Otto reside en que [[eta_O]] depende de un único parámetro geométrico: la relación de compresión [[r]]. El exponente [[gamma]] menos uno amplifica el efecto de [[r]]: con [[gamma]] de 1.4, el factor de compresión uno dividido entre [[r]] elevado a 0.4 cae rápidamente al aumentar [[r]], produciendo un rendimiento que crece con concavidad negativa. El calor rechazado [[Q_C]] es siempre [[Q_H]] multiplicado por el factor de compresión inverso.

Las condiciones de validez del modelo son cuatro. Primera, el gas debe comportarse como ideal con propiedades constantes. Segunda, los procesos de compresión y expansión deben ser adiabáticos y reversibles. Tercera, la combustión debe ser instantánea a volumen constante. Cuarta, el rechazo de calor debe ser isocórico, equivalente al cierre instantáneo de las válvulas de escape.

En la práctica, ninguna de estas condiciones se cumple exactamente. La variación de [[gamma]] con la temperatura (de 1.4 en aire frío a 1.3 en gases de combustión calientes) reduce el rendimiento real. Las pérdidas por transferencia de calor a las paredes del cilindro, la fricción del pistón y la combustión no instantánea reducen adicionalmente la eficiencia.

La derivada del rendimiento respecto a [[r]] es siempre positiva pero decreciente, lo que confirma la concavidad negativa de la curva. Para [[gamma]] de 1.4, la derivada en [[r]] de 8 es aproximadamente 0.022 por unidad de [[r]], mientras que en [[r]] de 12 cae a 0.012, casi la mitad. Este análisis de sensibilidad permite cuantificar el beneficio marginal de aumentar la relación de compresión y justifica la búsqueda de combustibles de mayor octanaje que permitan operar con [[r]] más altas.

La relación entre el rendimiento Otto y el de Carnot entre las mismas temperaturas extremas del ciclo cuantifica la irreversibilidad del proceso de combustión isocórica. Para [[r]] de 10, el rendimiento Otto de 0.602 es aproximadamente un 86 % del Carnot equivalente entre las temperaturas máxima y mínima del ciclo, lo que muestra que la combustión a volumen constante aprovecha razonablemente bien el potencial termodinámico disponible.

## 🔴 Nivel estructural

Un aspecto estructural profundo es la **comparación con Carnot**: el ciclo Otto entre las mismas temperaturas extremas tiene un rendimiento menor que el de Carnot porque el calor se absorbe y se rechaza a volumen constante (con temperatura variable) en lugar de isotérmicamente. La diferencia cuantifica la irreversibilidad intrínseca del modo de combustión Otto. El teorema de Gouy-Stodola establece que la pérdida de trabajo es proporcional a la entropía generada durante la combustión no isotérmica, multiplicada por la temperatura del foco frío.

La condición de validez más restrictiva del modelo de aire frío es la constancia de [[gamma]]. En un motor real, [[gamma]] varía continuamente durante el ciclo: es 1.4 al inicio de la compresión con aire frío, desciende a 1.35 al final de la compresión por el calentamiento, y cae a 1.28-1.30 durante la combustión por la presencia de productos como dióxido de carbono y vapor de agua. Usar un valor promedio efectivo de [[gamma]] de 1.3 en lugar de 1.4 reduce el rendimiento teórico de 0.602 a 0.499 para [[r]] de 10, una corrección del 17 % que es fundamental para estimaciones de ingeniería.

Otra limitación estructural es la suposición de combustión instantánea. En motores reales a 6000 rpm, cada ciclo dura 20 milisegundos y la combustión ocupa entre 2 y 4 milisegundos. Durante este tiempo, el pistón se mueve significativamente, lo que invalida la suposición isocórica y reduce el trabajo útil. El ciclo dual o mixto corrige esta limitación combinando una fase isocórica con una fase isobárica de combustión.

## Interpretación física profunda

El rendimiento del ciclo Otto tiene una lectura física inmediata: para una relación de compresión de 10 con aire ([[gamma]] de 1.4), el rendimiento es aproximadamente 0.602, lo que significa que el 60.2 % de la energía térmica inyectada se convierte en trabajo mecánico y el 39.8 % restante se disipa obligatoriamente al foco frío. Si se aumenta [[r]] a 12, el rendimiento sube a 0.630, un incremento modesto que ilustra los rendimientos decrecientes a alta compresión.

La sensibilidad al índice adiabático [[gamma]] es significativa: con aire frío (1.4) el rendimiento para [[r]] de 10 es 0.602, pero con gases de combustión calientes (1.3) cae a 0.499, una diferencia de más de 10 puntos porcentuales que los modelos simplificados suelen ignorar.

La independencia del rendimiento respecto a [[Q_H]] tiene una explicación termodinámica profunda: en el ciclo Otto, tanto la combustión como el escape son isocóricos, de modo que un incremento de [[Q_H]] eleva proporcionalmente las temperaturas en ambos procesos. La fracción del calor que se convierte en trabajo queda determinada únicamente por la diferencia de volúmenes entre los estados extremos del ciclo, es decir, por la relación de compresión geométrica.

## Orden de magnitud

Un motor de gasolina de automóvil con [[r]] de 10 tiene un rendimiento teórico de 0.602. El rendimiento real de un motor de gasolina moderno de inyección directa está entre 0.30 y 0.38, lo que representa un 50 a 63 % del valor teórico. Las pérdidas principales provienen de la combustión no instantánea (5 %), la transferencia de calor (10 %), la fricción mecánica (5 %) y el bombeo de gases (3 %).

## Método de resolución personalizado

Para resolver un problema de ciclo Otto se recomienda seguir estos pasos. Primero, identificar [[r]] y [[gamma]] del enunciado. Segundo, aplicar la fórmula del rendimiento Otto para obtener [[eta_O]]. Tercero, si se conoce [[Q_H]], calcular [[W_neto]] usando el rendimiento. Cuarto, obtener [[Q_C]] por balance energético. Quinto, verificar que [[eta_O]] sea menor que el rendimiento de Carnot entre las temperaturas extremas del ciclo.

## Casos especiales y ejemplo extendido

Caso especial uno: si [[r]] tiende a uno, el rendimiento tiende a cero porque no hay compresión y el ciclo degenera. Caso especial dos: si [[r]] tiende a infinito, [[eta_O]] tiende a uno, pero esto es inalcanzable por limitaciones materiales y termodinámicas. Caso especial tres: si [[gamma]] tiende a uno, el rendimiento tiende a cero para cualquier [[r]], pero este límite no tiene sentido físico real.

Ejemplo extendido: un motor opera con [[r]] de 10 y [[gamma]] de 1.4. El rendimiento Otto es uno menos uno dividido entre 10 elevado a 0.4. Calculando 10 elevado a 0.4 se obtiene 2.512. El factor de compresión es uno dividido entre 2.512 que es 0.3981. El rendimiento resulta uno menos 0.3981, es decir, 0.6019 o 60.2 %. Si [[Q_H]] es 1000 kJ/kg, [[W_neto]] es 602 kJ/kg y [[Q_C]] es 398 kJ/kg.

## Preguntas reales del alumno

Pregunta uno: por qué el rendimiento Otto no depende de [[Q_H]]? Porque ambos procesos de intercambio de calor ocurren a volumen constante. La temperatura sube proporcionalmente a [[Q_H]] tanto en la combustión como en el escape, y la fracción convertida en trabajo depende solo de la compresión previa.

Pregunta dos: por qué los motores de gasolina no usan relaciones de compresión más altas? Porque a relaciones de compresión superiores a 12, la mezcla aire-gasolina se autoenciende por compresión antes de que salte la chispa (detonación o knocking), causando daños mecánicos y pérdidas de eficiencia.

Pregunta tres: puede un motor Otto superar el rendimiento de Carnot? Nunca. El Carnot entre las temperaturas extremas del ciclo siempre será mayor. La diferencia mide las irreversibilidades del modo de combustión isocórica.

## Conexiones transversales y rutas de estudio

El ciclo Otto se conecta hacia atrás con el ciclo de Carnot (límite superior teórico) y hacia adelante con el ciclo Diesel (que generaliza la combustión a presión constante introduciendo la relación de corte). El ciclo dual o mixto combina combustión a volumen y presión constante para representar mejor los motores reales. Lateralmente, la relación con la segunda ley y la producción de entropía permite cuantificar las pérdidas asociadas a la combustión no isotérmica.

## Síntesis final

El ciclo Otto establece el rendimiento teórico máximo de los motores de encendido por chispa como función de dos parámetros: la relación de compresión y el índice adiabático. Su fórmula es la más simple de todos los ciclos de potencia porque el rendimiento no depende de la cantidad de calor suministrado. La relación de compresión es el único parámetro de diseño que controla la eficiencia, y su límite práctico viene impuesto por la detonación del combustible, no por la termodinámica.
