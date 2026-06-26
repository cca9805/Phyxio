# Errores comunes en el Principio Fundamental de la Hidrostática

## Errores conceptuales

### Error 1: Confundir el signo de la cota vertical
#### Por qué parece correcto
En la vida cotidiana solemos medir la altura desde el suelo hacia arriba como algo positivo. Sin embargo, en muchos problemas de hidrostática se mide la profundidad desde la superficie hacia abajo. Si no se define un origen estricto, es fácil mezclar ambos criterios y terminar sumando presión cuando se debería restar, o viceversa.

#### Por qué es incorrecto
La consistencia matemática es fundamental. Si definimos el eje z positivo hacia arriba (altitud), entonces descender significa que delta z es negativo. Puesto que la presión aumenta al bajar, la fórmula debe compensar este signo. El error de signo es la causa número uno de resultados físicamente absurdos (como presiones que disminuyen al bajar al fondo del mar).

#### Señal de detección
Se detecta inmediatamente si al calcular la presión en un punto inferior obtenemos un valor menor que en el punto superior. Físicamente, el punto de menor cota z (más profundo) siempre debe tener mayor presión si el fluido está sobre él.

#### Corrección conceptual
Define siempre un sistema de coordenadas explícito antes de empezar. Si usas z positivo hacia arriba, usa [[p2]] es [[p1]] + [[rho]] g ([[z1]] - [[z2]]). Si usas profundidad h positiva hacia abajo, usa p es presion de referencia + [[rho]] g h. No mezcles ambos sistemas en la misma ecuación.

#### Mini-ejemplo
Si el punto 1 está a 10 m de altura y el punto 2 a 2 m, el cambio de cota es [[z2]] - [[z1]] es -8 m (descenso). La presión en 2 debe ser mayor que en 1.

## Errores de modelo

### Error 2: Suponer densidad constante en grandes columnas de gas
#### Por qué parece correcto
Para tramos de unos pocos metros, la densidad del aire parece constante. Al aplicar la fórmula lineal incremento de presion es [[rho]] g delta z en un laboratorio, los resultados son precisos, lo que lleva al alumno a creer que el modelo es universal para cualquier altura.

#### Por qué es incorrecto
La atmósfera terrestre tiene miles de metros de altura. A medida que subimos, la presión disminuye, y como el aire es un gas (fluido compresible), su densidad disminuye drásticamente. Usar una [[rho]] constante para calcular la presión en el Everest daría un error de más del 60\% respecto a la realidad.

#### Señal de detección
Detectado al obtener presiones negativas a altitudes elevadas o al ignorar que el aire a nivel del mar es mucho más "pesado" que el aire en la alta atmósfera.

#### Corrección conceptual
Distingue entre fluidos incompresibles (líquidos) y compresibles (gases). Para grandes desniveles en gases, el modelo estructural debe cambiar a la ley barométrica exponencial.

#### Mini-ejemplo
A 10 km de altura, el aire tiene aproximadamente un tercio de la densidad que tiene a nivel del mar. El modelo lineal fallaría por completo.

## Errores matemáticos

### Error 3: No convertir unidades de densidad de g/cm³ a kg/m³
#### Por qué parece correcto
Muchos libros de química dan la densidad del agua como 1 g/cm^3 o la del mercurio como 13.6 g/cm^3. Son números fáciles de recordar y parece inofensivo usarlos directamente en la calculadora junto con g es 9.81 m/s^2.

#### Por qué es incorrecto
El sistema internacional (SI) requiere que la masa esté en kg y el volumen en m^3. Usar 1 g/cm^3 en lugar de 1000 kg/m^3 hará que el resultado de la presión sea 1000 veces menor de lo que debería ser. Los Pascales resultantes serán erróneos.

#### Señal de detección
Si al calcular la presión a 10 m de profundidad en agua obtienes unos 100 Pa en lugar de 100,000 Pa (cerca de 1 atm), definitivamente tienes un error de unidades en la densidad.

#### Corrección conceptual
Antes de pulsar cualquier tecla en la calculadora, asegura que [[rho]] esté en kg/m^3. Recuerda que 1 g/cm^3 es 1000 kg/m^3.

#### Mini-ejemplo
Para el mercurio, debes usar 13600 kg/m^3. Usar 13.6 te dará una presión tres órdenes de magnitud inferior a la real.

## Errores de interpretación

### Error 4: Olvidar que [[p1]] es la presión total, no solo la atmosférica
#### Por qué parece correcto
En los ejemplos básicos de "recipiente abierto", el punto superior siempre es la superficie y [[p1]] coincide con p_{atm}. El alumno se acostumbra a asociar [[p1]] únicamente con la atmósfera.

#### Por qué es incorrecto
El Principio Fundamental es general. El punto 1 puede ser cualquier punto sumergido a cualquier presión. Si estamos analizando el tramo entre dos profundidades de un depósito cerrado y presurizado, [[p1]] será la presión en el primer nivel, que ya incluye la sobrepresión del gas superior.

#### Señal de detección
Ocurre cuando se calcula la presión en el fondo de un depósito de combustible presurizado ignorando la presión del gas sobre el líquido, tomando solo 1 atm por defecto.

#### Corrección conceptual
Diferencia siempre entre presión absoluta y manométrica. Asegúrate de que [[p1]] representa la presión absoluta real en la cota [[z1]], sea cual sea su origen.

#### Mini-ejemplo
En un sistema hidráulico cerrado, [[p1]] puede ser de cientos de atmósferas. Ignorar esto y usar 1 atm llevaría a un error catastrófico.

## Regla de autocontrol rápido
1. **Verificación de la Proporcionalidad:** ¿He obtenido más presión en el punto más bajo? (Check de coherencia).
2. **Consistencia de Unidades:** ¿Está la densidad en kg/m^3 y las cotas en metros? (Check de Pascales).
3. **Control de Referencia:** ¿He sumado la presión del punto de partida [[p1]] al incremento calculado? (Check de valor absoluto).


