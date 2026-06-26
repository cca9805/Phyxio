# Ejemplo tipo examen


## Enunciado

Se dispone de un componente electrónico marcado como una [[resistencia]] de precisión de 1500 \(\Omega\). Un estudiante decide verificar este valor en el laboratorio aplicando una diferencia de potencial o [[tension]] de exactamente 12.0 V mediante una fuente de alimentación regulada de corriente continua. Al realizar la medición con un amperímetro digital de alta impedancia, se registra una [[intensidad]] de [[intensidad]] de 8.0 mA circulando a través del dispositivo. El estudiante debe determinar mediante el cálculo riguroso:
1. La [[resistencia]] real [[resistencia]] medida utilizando la relación fundamental de la conducción.
2. La [[conductancia]] del componente para evaluar su facilidad de paso.
3. El error relativo porcentual respecto al valor marcado por el fabricante.
4. Una verificación geométrica: si el componente fuera un cilindro de carbón de 5 mm de largo y 0.1 mm2 de sección, ¿qué valor de [[resistencia]] se esperaría teóricamente?

## Datos

- [[tension]] aplicada: 12.0 V (medida con voltímetro de precisión).
- [[intensidad]] medida: 8.0 mA (equivalente a 0.008 A en el SI).
- Resistencia nominal: 1500 \(\Omega\) (indicada por el fabricante).
- Para la verificación: [[longitud]] = 0.005 m, [[area]] = 0.0000001 m2, [[rho]] carbón = 0.000035 \(\Omega \cdot m\).

## Definición del sistema

El sistema físico analizado consiste en un único resistor lineal conectado a una malla simple con una fuente ideal de [[tension]] constante. Se asume que los cables de conexión poseen una [[resistencia]] parásita despreciable en comparación con el valor del componente bajo prueba. El amperímetro se considera ideal, sin introducir una caída de [[tension]] interna significativa que pudiera falsear la lectura de [[tension]] del componente.

## Modelo físico

El modelo adoptado es el de un componente óhmico ideal en régimen estacionario. La relación entre las magnitudes fundamentales se rige por la proporcionalidad directa entre [[tension]] y corriente. Se asume que la temperatura del elemento no varía durante la toma de datos para evitar desviaciones térmicas en la resistividad. Además, se emplea el modelo geométrico para la verificación física del material.

{{f:ley_ohm}}

{{f:resistencia_geometrica}}

Para cuantificar la capacidad del material de permitir el paso de la carga, se emplea la magnitud física denominada la [[conductancia]]:

{{f:definicion_conductancia}}

## Justificación del modelo

El uso de este modelo es plenamente apropiado dado que el componente es una [[resistencia]] de película metálica diseñada para operar de forma lineal en el rango de tensiones de laboratorio. Esto se debe a que en estos materiales los portadores de carga tienen un tiempo de relajación constante, lo que garantiza que la [[intensidad]] responde proporcionalmente a la [[tension]]. La medición en corriente continua y régimen estacionario permite ignorar efectos inductivos. Además, el intervalo temporal de la prueba es corto, garantizando que la disipación térmica por efecto Joule no eleve la temperatura del material.

## Resolución simbólica

Se aplican las relaciones fundamentales definidas para este leaf para despejar las variables objetivo en función de los datos conocidos de [[tension]] y corriente, así como las propiedades geométricas en el segundo paso:

{{f:ley_ohm}}

{{f:definicion_conductancia}}

{{f:resistencia_geometrica}}

## Sustitución numérica

1. Calculamos la [[resistencia]] real del dispositivo aplicando la relación de proporcionalidad directa de la ley de Ohm:
\( 12.0 / 0.008 \rightarrow 1500 \ \Omega \)

2. Calculamos la [[conductancia]] correspondiente, que nos da una medida de la facilidad de conducción eléctrica:
\( 1 / 1500 \rightarrow 0.000667 \ S \)
Esta cifra indica que por cada voltio aplicado, el flujo de carga aumenta en aproximadamente 0.67 mA.

3. Evaluamos el error relativo del componente comparando el valor medido con el nominal de 1500 \(\Omega\):
\( 0 \% \) de error relativo.

4. Verificación geométrica teórica con los datos del carbón:
\( (0.000035 \cdot 0.005) / 0.0000001 \rightarrow 1750 \ \Omega \)
Este valor es cercano al nominal, sugiriendo que el componente real podría estar fabricado con un material de [[rho]] similar o una geometría ligeramente diferente.

## Validación dimensional

- El cociente entre voltios (unidad de [[tension]]) y amperios (unidad de [[intensidad]]) da como resultado \(\Omega\), que es la unidad correcta para la [[resistencia]].
- El recíproco de la unidad de [[resistencia]] resulta en siemens (S), la unidad estándar para la [[conductancia]] en el SI.
- En la fórmula geométrica, el producto de \(\Omega \cdot m\) por metros, dividido por metros cuadrados, cancela las unidades de [[longitud]] dejando únicamente \(\Omega\).

## Interpretación física

El resultado numérico obtenido muestra una coincidencia absoluta entre el valor nominal y el valor experimental medido. Físicamente, esto indica que el componente es de altísima precisión. La [[conductancia]] obtenida nos informa que por cada voltio de diferencia de potencial aplicado, el material permite el flujo de aproximadamente 0.667 mA. El componente demuestra un comportamiento óhmico ideal perfectamente predecible. La verificación geométrica muestra que pequeños cambios en las dimensiones o el material pueden ajustar la [[resistencia]] a valores específicos de diseño.

# Ejemplo de aplicación real


## Contexto

En el diseño de una infraestructura eléctrica para un pequeño edificio industrial, un equipo debe seleccionar el cable de cobre adecuado para transportar energía a una distancia de 50 metros desde el panel de control principal hasta un motor de precisión. El diseño técnico exige que el cable tenga una [[resistencia]] total máxima de 0.05 \(\Omega\) para minimizar las pérdidas por calor y evitar caídas de [[tension]] que superen el 2% del suministro nominal. Se utiliza cobre electrolítico de alta pureza con una [[rho]] de 0.0000000172 \(\Omega \cdot m\) a temperatura ambiente.

## Estimación física

Antes de realizar el cálculo exacto, los ingenieros realizan una estimación de escala basada en la experiencia. Saben que un cable de cobre estándar de \( 1.5 \ \mathrm{mm}^2 \) tiene una [[resistencia]] de aproximadamente \( 0.012 \ \Omega \) por metro. Para \( 50 \) metros, esto daría una [[resistencia]] de \( 0.6 \ \Omega \) (producto de \( 0.012 \cdot 50 \)), lo cual es 12 veces superior al límite de \( 0.05 \ \Omega \) permitido por el diseño. Por tanto, se estima que se necesitará un cable mucho más grueso, aproximadamente 12 veces más grande en sección, es decir, cerca de \( 18 \ \mathrm{mm}^2 \).

Para determinar la sección transversal exacta [[area]] necesaria, aplicamos el modelo de [[resistencia]] geométrica:

{{f:resistencia_geometrica}}

Datos de entrada:
- [[longitud]] total del conductor: 50 m.
- [[resistencia]] máxima permitida: 0.05 \(\Omega\).
- [[rho]] del cobre electrolítico: 0.0000000172 \(\Omega \cdot m\).

Despejando el [[area]] de la fórmula obtenemos el valor teórico mínimo requerido para cumplir la norma:
\( (0.0000000172 \cdot 50) / 0.05 \rightarrow 0.0000172 \ \mathrm{m}^2 \)

## Interpretación

El valor calculado de \( 0.0000172 \ \mathrm{m}^2 \) (o \( 17.2 \ \mathrm{mm}^2 \)) confirma la estimación física inicial del equipo de ingenieros. Cualquier cable con una sección menor resultaría en una [[resistencia]] mayor a \( 0.05 \ \Omega \), lo que provocaría una caída de [[tension]] superior al límite de seguridad operativa aceptable. En la práctica comercial, se seleccionaría el calibre inmediatamente superior (probablemente \( 25 \ \mathrm{mm}^2 \)) para garantizar un margen de seguridad adicional contra el aumento de temperatura por efecto Joule. Esta elección demuestra cómo el control de la geometría permite adaptar una propiedad fija del material a los requisitos operativos rigurosos de un sistema real.