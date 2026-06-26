const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
En un taller mecánico de precisión, se utiliza un elevador hidráulico para levantar un motor industrial cuya masa es de M  igual a  2500text{ kg}. El sistema consta de dos émbolos circulares conectados por una tubería llena de aceite hidráulico incompresible. El émbolo de entrada (donde se aplica la fuerza) tiene un diámetro de D_1  igual a  5text{ cm}, mientras que el émbolo de salida (donde descansa el motor) tiene un diámetro de D_2  igual a  45text{ cm}. Calcula la fuerza de entrada [[F1]] que debe aplicar el operario mediante una palanca para mantener el motor en equilibrio. Además, determina la presión [[p]] que soporta el fluido en el interior del sistema. Toma la gravedad como g  igual a  9.81text{ m/s}^2.\r
\r
## Datos\r
- Masa del motor a elevar: M  igual a  2500text{ kg}\r
- Diámetro del émbolo de entrada: D_1  igual a  0.05text{ m}\r
- Diámetro del émbolo de salida: D_2  igual a  0.45text{ m}\r
- Aceleración de la gravedad: g  igual a  9.81text{ m/s}^2\r
- Fuerza de salida necesaria (peso del motor): [[F2]]  igual a  M cdot g\r
\r
## Definición del sistema\r
El sistema se define como una prensa hidráulica ideal que contiene un fluido incompresible confinado en un circuito cerrado. El sistema se encuentra en equilibrio estático. El entorno es el taller mecánico, que ejerce la presión atmosférica, la cual se cancela al trabajar con presiones manométricas o al aplicarse por igual en ambos émbolos. Consideramos los émbolos como superficies rígidas y sin rozamiento con las paredes.\r
\r
## Modelo físico\r
Aplicaremos el **Principio de Pascal**, el cual establece que la presión aplicada en el émbolo 1 se transmite íntegramente al émbolo 2. El modelo asume que el fluido no se comprime y que no hay pérdidas de carga ni fugas. La fuerza resultante [[F2]] en el émbolo de mayor área será proporcional a la fuerza aplicada [[F1]] multiplicada por la relación de las áreas [[A1]] y [[A2]].\r
\r
## Justificación del modelo\r
Se justifica el uso del modelo de Pascal debido a que el aceite hidráulico tiene un módulo de compresibilidad muy alto, comportándose como un sólido rígido ante la presión. Ignoramos el peso del propio aceite y la diferencia de altura entre émbolos ya que la presión generada por la carga externa (2500text{ kg}) es varios órdenes de magnitud superior a la presión hidrostática del líquido contenido en el elevador.\r
\r
## Resolución simbólica\r
Calculamos primero las áreas de los émbolos a partir de sus diámetros:\r
A_1  igual a  pi (D_1/2)^2\r
A_2  igual a  pi (D_2/2)^2\r
\r
Usamos la ley de Pascal para igualar las presiones:\r
\r
{{f:ley_pascal}}\r
\r
\r
frac{F_1}{A_1}  igual a  frac{F_2}{A_2} implies F_1  igual a  F_2 cdot frac{A_1}{A_2}\r
\r
\r
Como F_2 es el peso del motor (M cdot g), la expresión final para la fuerza de entrada es:\r
\r
{{f:multiplicacion_fuerza}}\r
\r
F_1  igual a  M cdot g cdot frac{D_1^2}{D_2^2}\r
\r
\r
Para la presión [[p]]:\r
\r
p  igual a  frac{F_1}{A_1}\r
\r
\r
## Sustitución numérica\r
1. Fuerza de salida: F_2  igual a  2500 cdot 9.81  igual a  24,525text{ N}.\r
2. Áreas:\r
   A_1  igual a  pi cdot (0.025)^2  igual a  0.001963text{ m}^2\r
   A_2  igual a  pi cdot (0.225)^2  igual a  0.159043text{ m}^2\r
3. Fuerza de entrada [[F1]]:\r
   F_1  igual a  24,525 cdot frac{0.001963}{0.159043}  igual a  24,525 cdot (5/45)^2  igual a  24,525 cdot (1/81) approx 302.78text{ N}.\r
4. Presión [[p]]:\r
   p  igual a  frac{302.78}{0.001963} approx 154,243text{ Pa} approx 1.54text{ bar}.\r
\r
## Validación dimensional\r
[F]  igual a  text{M} cdot text{L} cdot text{T}^{-2} (Newton).\r
[F cdot (A/A)]  igual a  [F cdot (text{L}^2 / text{L}^2)]  igual a  [F].\r
La fórmula de fuerza es dimensionalmente correcta.\r
[F/A]  igual a  (text{M} cdot text{L} cdot text{T}^{-2}) / text{L}^2  igual a  text{M} cdot text{L}^{-1} cdot text{T}^{-2} (Pascal). Correcto.\r
\r
## Interpretación física\r
El resultado [[F1]] approx 303text{ N} **significa** que un solo operario puede elevar un motor de 2.5text{ toneladas} aplicando una fuerza equivalente a levantar solo 30text{ kg}. Esto **indica** la enorme ventaja mecánica (factor de 81) que proporciona el sistema hidráulico gracias a la transmisión íntegra de la presión [[p]].\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
El sistema de frenado hidráulico de un automóvil es la aplicación más común del principio de Pascal. Cuando pisas el pedal del freno, aplicas una fuerza sobre un cilindro maestro (émbolo pequeño), la cual se transmite a través del líquido de frenos hasta las pinzas (émbolos grandes) en cada rueda, multiplicando la fuerza para detener el vehículo de forma segura.\r
\r
## Estimación física\r
Si aplicas una fuerza de 100text{ N} en un pedal con una relación de áreas de 1:10 entre el cilindro maestro y los bombines de las ruedas, **estimamos** que la fuerza total de frenado será:\r
\r
{{f:multiplicacion_fuerza}}\r
\r
\r
F_2  igual a  F_1 cdot 10  igual a  100 cdot 10  igual a  1000text{ N}\r
\r
\r
Este valor de 1000text{ N} por rueda es suficiente para generar el rozamiento necesario contra el disco y detener el coche en pocos metros. Este **orden de magnitud** es típico en sistemas de frenado asistido.\r
\r
## Interpretación\r
Este cálculo **significa** que el fluido permite que un esfuerzo humano moderado se convierta en una fuerza de frenado potente. El principio de Pascal nos **indica** que si el líquido tiene burbujas de aire (que es compresible), la presión no se transmitiría íntegramente y el pedal se sentiría "esponjoso", comprometiendo la seguridad.\r
\r
\r
`;export{e as default};
