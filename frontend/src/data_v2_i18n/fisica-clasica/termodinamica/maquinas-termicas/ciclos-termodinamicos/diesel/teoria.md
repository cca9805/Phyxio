# Ciclo Diesel

## Contexto conceptual

El ciclo Diesel es el modelo termodinámico idealizado que describe el funcionamiento de los motores de encendido por compresión. A diferencia del ciclo Otto, donde la combustión se modela a volumen constante, en el Diesel la adición de calor ocurre a presión constante. Esta diferencia tiene consecuencias profundas: permite relaciones de compresión mucho mayores y habilita el uso de combustibles más densos, pero introduce un factor de penalización en el rendimiento que depende de la duración de la combustión.

Este leaf se sitúa dentro del bloque de ciclos termodinámicos porque extiende el marco de análisis del ciclo Otto incorporando un parámetro adicional, la relación de corte, que cuantifica la fracción del volumen durante la cual se inyecta calor. Comprender el Diesel es esencial para evaluar motores de camiones, locomotoras, buques y generadores industriales.

## 🟢 Nivel esencial

Un motor Diesel funciona comprimiendo aire hasta que alcanza una temperatura tan alta que el combustible inyectado se enciende espontáneamente, sin necesidad de bujía. El ciclo idealizado consta de cuatro procesos: compresión adiabática, adición de calor a presión constante, expansión adiabática y rechazo de calor a volumen constante. El rendimiento térmico mide qué fracción de la energía inyectada como calor se convierte en trabajo mecánico útil.

La diferencia clave respecto al ciclo Otto es que la combustión ocurre mientras el pistón se mueve, a presión constante, lo cual aumenta el volumen del gas durante la inyección de calor. Esto introduce la relación de corte [[r_c]], que mide cuánto se expande el gas durante la combustión. Cuanto mayor es [[r_c]], más calor se inyecta pero más se degrada el rendimiento. El rendimiento también crece al aumentar la relación de compresión [[r]], pero con rendimientos marginales decrecientes al igual que en el ciclo Otto.

## 🔵 Nivel formal

El ciclo Diesel ideal consta de cuatro procesos reversibles: una compresión adiabática de 1 a 2 que eleva la presión y temperatura del aire, una expansión isobárica de 2 a 3 donde se absorbe [[Q_H]] a presión constante, una expansión adiabática de 3 a 4 que produce la mayor parte del trabajo, y una isocórica de 4 a 1 donde se cede [[Q_C]] al foco frío.

La fórmula central del rendimiento es:

{{f:rendimiento_diesel}}

Esta expresión muestra que [[eta_D]] depende de tres parámetros: [[r]], [[r_c]] y [[gamma]]. El factor entre corchetes en la fórmula es siempre mayor que uno para [[r_c]] mayor que uno, lo que significa que el rendimiento Diesel es siempre inferior al de Otto para la misma [[r]]. Sin embargo, los motores Diesel pueden operar con [[r]] mucho mayor (14 a 25 frente a 8 a 12 en Otto), lo que compensa con creces esta penalización.

El balance energético del ciclo es:

{{f:balance_energetico_diesel}}

Y el rendimiento también puede expresarse como cociente directo de energías:

{{f:rendimiento_alternativo_diesel}}

Cuando [[r_c]] tiende a uno, el factor de penalización tiende también a uno y la fórmula se reduce exactamente a la del ciclo Otto: [[eta_D]] se convierte en uno menos uno dividido entre [[r]] elevado a [[gamma]] menos uno. Esto confirma que el Otto es un caso particular del Diesel con combustión instantánea.

## 🔴 Nivel estructural

La potencia del análisis del ciclo Diesel reside en separar los efectos de la compresión (controlada por [[r]]) y de la duración de la combustión (controlada por [[r_c]]). El rendimiento aumenta con [[r]] porque la compresión adiabática eleva la temperatura antes de la combustión, mejorando la calidad termodinámica del calor suministrado. Pero el rendimiento disminuye con [[r_c]] porque una combustión prolongada degrada la uniformidad del proceso y genera más entropía.

Las condiciones de validez del modelo son cuatro. Primera, el gas debe comportarse como ideal con propiedades constantes. Segunda, los procesos de compresión y expansión deben ser adiabáticos y reversibles. Tercera, la combustión debe ocurrir estrictamente a presión constante. Cuarta, el rechazo de calor debe ser isocórico, equivalente al cierre instantáneo de las válvulas de escape.

En la práctica, ninguna de estas condiciones se cumple exactamente. La variación de [[gamma]] con la temperatura (de 1.4 en aire frío a 1.3 en gases de combustión calientes) reduce el rendimiento real. Las pérdidas por transferencia de calor a las paredes del cilindro, la fricción del pistón y la combustión incompleta reducen adicionalmente la eficiencia.

Un aspecto estructural profundo es la **comparación con Carnot**: el ciclo Diesel entre las mismas temperaturas extremas tiene un rendimiento menor que el de Carnot porque el calor se absorbe a presión constante (con temperatura variable) en lugar de isotérmicamente. La diferencia cuantifica la irreversibilidad intrínseca del modo de combustión Diesel. El teorema de Gouy-Stodola establece que la pérdida de trabajo es proporcional a la entropía generada durante la combustión no isotérmica, multiplicada por la temperatura del foco frío.

## Interpretación física profunda

El rendimiento del ciclo Diesel tiene una lectura física inmediata: para una relación de compresión de 18 y una relación de corte de 2 con aire ([[gamma]] de 1.4), el rendimiento es aproximadamente 0.60, lo que significa que el 60 % de la energía térmica inyectada se convierte en trabajo mecánico y el 40 % restante se disipa obligatoriamente al foco frío. Si se aumenta [[r_c]] a 3 (más combustible inyectado), el rendimiento cae a aproximadamente 0.54, mostrando que inyectar más calor no siempre mejora la potencia neta por unidad de energía suministrada.

La sensibilidad al índice adiabático [[gamma]] es significativa: con aire frío (1.4) el rendimiento para [[r]] de 18 y [[r_c]] de 2 es 0.60, pero con gases de combustión calientes (1.3) cae a 0.53, una diferencia del 12 % que los modelos simplificados suelen ignorar.

## Orden de magnitud

Un motor Diesel de camión con [[r]] de 18 y [[r_c]] de 2.5 tiene un rendimiento teórico de 0.57. El rendimiento real de un motor Diesel moderno de inyección directa está entre 0.40 y 0.45, lo que representa un 70 a 79 % del valor teórico. Las pérdidas principales provienen de la transferencia de calor (8 %), la fricción mecánica (5 %) y la combustión incompleta (3 %).

## Método de resolución personalizado

Para resolver un problema de ciclo Diesel se recomienda seguir estos pasos. Primero, identificar [[r]], [[r_c]] y [[gamma]] del enunciado. Segundo, aplicar la fórmula del rendimiento Diesel para obtener [[eta_D]]. Tercero, si se conoce [[Q_H]], calcular [[W_neto]] usando el rendimiento. Cuarto, obtener [[Q_C]] por balance energético. Quinto, verificar que [[eta_D]] sea menor que el rendimiento de Carnot entre las temperaturas extremas del ciclo.

## Casos especiales y ejemplo extendido

Caso especial uno: si [[r_c]] tiende a uno, el factor de penalización tiende a uno y el ciclo se reduce al de Otto. Caso especial dos: si [[r_c]] tiende a [[r]], la combustión ocupa todo el volumen disponible y el rendimiento cae drásticamente. Caso especial tres: si [[gamma]] tiende a uno, todas las curvas de rendimiento se aplanan y la diferencia entre Diesel y Otto desaparece, pero este límite no tiene sentido físico real.

Ejemplo extendido: un motor industrial opera con [[r]] de 20, [[r_c]] de 2 y [[gamma]] de 1.4. El rendimiento Diesel es uno menos uno dividido entre 20 elevado a 0.4 multiplicado por el factor (2 elevado a 1.4 menos 1) dividido entre (1.4 por (2 menos 1)). El factor de compresión da uno dividido entre 3.314 que es 0.3018. El factor de corte da (2.639 menos 1) dividido entre 1.4, que es 1.171. El producto es 0.3018 por 1.171 que da 0.3534. El rendimiento resulta uno menos 0.3534, es decir, 0.647 o 64.7 %.

## Preguntas reales del alumno

Pregunta uno: si el Diesel tiene peor rendimiento que el Otto a la misma relación de compresión, por qué se usa? Porque los motores Diesel pueden usar relaciones de compresión mucho mayores (18 a 25 frente a 8 a 12) sin detonación, lo que más que compensa la penalización del factor de corte.

Pregunta dos: cómo se interpreta que [[r_c]] tienda a uno? Significa que la combustión sería instantánea, sin expansión isobárica, lo que convierte el Diesel en un Otto. Es el límite de combustible mínimo.

Pregunta tres: puede un motor Diesel superar el rendimiento de Carnot? Nunca. El Carnot entre las temperaturas extremas del ciclo siempre será mayor. La diferencia mide las irreversibilidades del modo de combustión isobárica.

## Conexiones transversales y rutas de estudio

El ciclo Diesel se conecta hacia atrás con el ciclo Otto (caso particular con [[r_c]] igual a uno) y con el ciclo de Carnot (límite superior teórico). Se conecta hacia adelante con el ciclo dual o mixto, que combina combustión a volumen y presión constante para representar mejor los motores reales. Lateralmente, la relación con la segunda ley y la producción de entropía permite cuantificar las pérdidas asociadas a la combustión no isotérmica.

## Síntesis final

El ciclo Diesel establece el rendimiento teórico máximo de los motores de encendido por compresión como función de tres parámetros: la relación de compresión, la relación de corte y el índice adiabático. Su rendimiento siempre es inferior al de Otto para la misma relación de compresión, pero la posibilidad de operar con relaciones de compresión mucho mayores hace que los motores Diesel sean globalmente más eficientes en la práctica. La relación de corte cuantifica la duración de la combustión y constituye el factor de penalización exclusivo del ciclo Diesel.
