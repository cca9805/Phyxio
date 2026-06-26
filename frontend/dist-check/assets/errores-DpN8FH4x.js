const e=`\uFEFF# Errores comunes en el Principio Fundamental de la Hidrostática\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir el signo de la cota vertical\r
#### Por qué parece correcto\r
En la vida cotidiana solemos medir la altura desde el suelo hacia arriba como algo positivo. Sin embargo, en muchos problemas de hidrostática se mide la profundidad desde la superficie hacia abajo. Si no se define un origen estricto, es fácil mezclar ambos criterios y terminar sumando presión cuando se debería restar, o viceversa.\r
\r
#### Por qué es incorrecto\r
La consistencia matemática es fundamental. Si definimos el eje z positivo hacia arriba (altitud), entonces descender significa que delta z es negativo. Puesto que la presión aumenta al bajar, la fórmula debe compensar este signo. El error de signo es la causa número uno de resultados físicamente absurdos (como presiones que disminuyen al bajar al fondo del mar).\r
\r
#### Señal de detección\r
Se detecta inmediatamente si al calcular la presión en un punto inferior obtenemos un valor menor que en el punto superior. Físicamente, el punto de menor cota z (más profundo) siempre debe tener mayor presión si el fluido está sobre él.\r
\r
#### Corrección conceptual\r
Define siempre un sistema de coordenadas explícito antes de empezar. Si usas z positivo hacia arriba, usa [[p2]] es [[p1]] + [[rho]] g ([[z1]] - [[z2]]). Si usas profundidad h positiva hacia abajo, usa p es presion de referencia + [[rho]] g h. No mezcles ambos sistemas en la misma ecuación.\r
\r
#### Mini-ejemplo\r
Si el punto 1 está a 10 m de altura y el punto 2 a 2 m, el cambio de cota es [[z2]] - [[z1]] es -8 m (descenso). La presión en 2 debe ser mayor que en 1.\r
\r
## Errores de modelo\r
\r
### Error 2: Suponer densidad constante en grandes columnas de gas\r
#### Por qué parece correcto\r
Para tramos de unos pocos metros, la densidad del aire parece constante. Al aplicar la fórmula lineal incremento de presion es [[rho]] g delta z en un laboratorio, los resultados son precisos, lo que lleva al alumno a creer que el modelo es universal para cualquier altura.\r
\r
#### Por qué es incorrecto\r
La atmósfera terrestre tiene miles de metros de altura. A medida que subimos, la presión disminuye, y como el aire es un gas (fluido compresible), su densidad disminuye drásticamente. Usar una [[rho]] constante para calcular la presión en el Everest daría un error de más del 60\\% respecto a la realidad.\r
\r
#### Señal de detección\r
Detectado al obtener presiones negativas a altitudes elevadas o al ignorar que el aire a nivel del mar es mucho más "pesado" que el aire en la alta atmósfera.\r
\r
#### Corrección conceptual\r
Distingue entre fluidos incompresibles (líquidos) y compresibles (gases). Para grandes desniveles en gases, el modelo estructural debe cambiar a la ley barométrica exponencial.\r
\r
#### Mini-ejemplo\r
A 10 km de altura, el aire tiene aproximadamente un tercio de la densidad que tiene a nivel del mar. El modelo lineal fallaría por completo.\r
\r
## Errores matemáticos\r
\r
### Error 3: No convertir unidades de densidad de g/cm³ a kg/m³\r
#### Por qué parece correcto\r
Muchos libros de química dan la densidad del agua como 1 g/cm^3 o la del mercurio como 13.6 g/cm^3. Son números fáciles de recordar y parece inofensivo usarlos directamente en la calculadora junto con g es 9.81 m/s^2.\r
\r
#### Por qué es incorrecto\r
El sistema internacional (SI) requiere que la masa esté en kg y el volumen en m^3. Usar 1 g/cm^3 en lugar de 1000 kg/m^3 hará que el resultado de la presión sea 1000 veces menor de lo que debería ser. Los Pascales resultantes serán erróneos.\r
\r
#### Señal de detección\r
Si al calcular la presión a 10 m de profundidad en agua obtienes unos 100 Pa en lugar de 100,000 Pa (cerca de 1 atm), definitivamente tienes un error de unidades en la densidad.\r
\r
#### Corrección conceptual\r
Antes de pulsar cualquier tecla en la calculadora, asegura que [[rho]] esté en kg/m^3. Recuerda que 1 g/cm^3 es 1000 kg/m^3.\r
\r
#### Mini-ejemplo\r
Para el mercurio, debes usar 13600 kg/m^3. Usar 13.6 te dará una presión tres órdenes de magnitud inferior a la real.\r
\r
## Errores de interpretación\r
\r
### Error 4: Olvidar que [[p1]] es la presión total, no solo la atmosférica\r
#### Por qué parece correcto\r
En los ejemplos básicos de "recipiente abierto", el punto superior siempre es la superficie y [[p1]] coincide con p_{atm}. El alumno se acostumbra a asociar [[p1]] únicamente con la atmósfera.\r
\r
#### Por qué es incorrecto\r
El Principio Fundamental es general. El punto 1 puede ser cualquier punto sumergido a cualquier presión. Si estamos analizando el tramo entre dos profundidades de un depósito cerrado y presurizado, [[p1]] será la presión en el primer nivel, que ya incluye la sobrepresión del gas superior.\r
\r
#### Señal de detección\r
Ocurre cuando se calcula la presión en el fondo de un depósito de combustible presurizado ignorando la presión del gas sobre el líquido, tomando solo 1 atm por defecto.\r
\r
#### Corrección conceptual\r
Diferencia siempre entre presión absoluta y manométrica. Asegúrate de que [[p1]] representa la presión absoluta real en la cota [[z1]], sea cual sea su origen.\r
\r
#### Mini-ejemplo\r
En un sistema hidráulico cerrado, [[p1]] puede ser de cientos de atmósferas. Ignorar esto y usar 1 atm llevaría a un error catastrófico.\r
\r
## Regla de autocontrol rápido\r
1. **Verificación de la Proporcionalidad:** ¿He obtenido más presión en el punto más bajo? (Check de coherencia).\r
2. **Consistencia de Unidades:** ¿Está la densidad en kg/m^3 y las cotas en metros? (Check de Pascales).\r
3. **Control de Referencia:** ¿He sumado la presión del punto de partida [[p1]] al incremento calculado? (Check de valor absoluto).\r
\r
\r
`;export{e as default};
