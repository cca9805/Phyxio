const e=`\uFEFF# Errores Comunes en el Análisis de Tuberías\r
\r
El estudio del flujo interno es propenso a errores debido a la complejidad de las interacciones entre la viscosidad y la inercia.\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir presión estática con presión total\r
#### Por qué parece correcto\r
Es muy común pensar que si el fluido se mueve a gran velocidad, debe tener una presión inmensa porque "golpea" con fuerza.\r
\r
#### Por qué es incorrecto\r
Según el principio de Bernoulli y las leyes de conservación de la energía, en un estrechamiento de tubería donde la velocidad [[v]] aumenta, la presión estática disminuye.\r
\r
#### Señal de detección\r
Usted detectará este error cuando al resolver un problema de reducción de diámetro, el resultado de la presión en la zona estrecha sea mayor que en la ancha.\r
\r
#### Corrección conceptual\r
Recuerde que el intercambio entre presión y velocidad es fundamental.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: El agua a la salida de una boquilla tiene más presión.\r
- ✅ **Correcto**: Tiene más velocidad, pero su presión estática es menor.\r
\r
## Errores de modelo\r
\r
### Error 2: Ignorar el régimen de flujo (Reynolds)\r
#### Por qué parece correcto\r
El estudiante tiende a usar la fórmula de factor de fricción más sencilla que conoce (f  igual a  64/[[Re]]) de forma universal.\r
\r
#### Por qué es incorrecto\r
La Ley de Poiseuille (64/[[Re]]) solo es válida para régimen laminar ([[Re]] < 2300). En flujo turbulento, el factor depende de la rugosidad.\r
\r
#### Señal de detección\r
Ocurre cuando se omite el cálculo del número de Reynolds [[Re]] antes de elegir el factor [[f]].\r
\r
#### Corrección conceptual\r
Siempre calcule el número de Reynolds [[Re]] como primer paso.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: Usar f  igual a  64/[[Re]] para agua circulando a 2text{ m/s}.\r
- ✅ **Correcto**: Verificar que [[Re]] es turbulento y usar Moody.\r
\r
## Errores matemáticos\r
\r
### Error 3: Inconsistencia en las unidades de viscosidad\r
#### Por qué parece correcto\r
Existen dos tipos de viscosidad y sus unidades son variadas (Pa·s, cSt). Es fácil confundirlas.\r
\r
#### Por qué es incorrecto\r
Un error en el orden de magnitud cambiará radicalmente el número de Reynolds [[Re]].\r
\r
#### Señal de detección\r
Detectado cuando el Reynolds resultante es un número irracional para fluidos comunes.\r
\r
#### Corrección conceptual\r
Siga estrictamente el Sistema Internacional (Pa cdot s).\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: Introducir centipoise directamente.\r
- ✅ **Correcto**: Convertir 1text{ cP}  igual a  0.001text{ Pa}cdottext{s}.\r
\r
## Errores de interpretación\r
\r
### Error 4: Pensar que el rozamiento calienta el fluido significativamente\r
#### Por qué parece correcto\r
Como la energía mecánica se pierde por fricción [[f]], se asume que el agua debe salir mucho más caliente.\r
\r
#### Por qué es incorrecto\r
Aunque la energía se disipa en calor, la capacidad calorífica de líquidos como el agua es tan alta que el aumento de temperatura es despreciable (milésimas de grado).\r
\r
#### Señal de detección\r
Cuando un alumno justifica una caída de presión [[dp]] basándose en "la dilatación térmica por calor de fricción".\r
\r
#### Corrección conceptual\r
El balance de energía mecánica se enfoca en la presión, no en la temperatura.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: El agua sale caliente de la tubería por el roce.\r
- ✅ **Correcto**: La energía se pierde, pero el aumento de temperatura no es detectable sin sensores ultra-precisos.\r
\r
## Regla de autocontrol rápido\r
Antes de concluir su ejercicio, verifique estos puntos críticos:\r
1.  **Sentido de la Caída**: ¿La presión cae en el sentido del movimiento?\r
2.  **Rango de Velocidad**: ¿La velocidad [[v]] está entre 0.5text{ y }5text{ m/s}?\r
3.  **Realismo del Diámetro**: Verifique la escala del sistema.\r
4.  **Consistencia de Reynolds**: ¿Es coherente el régimen con el fluido?\r
`;export{e as default};
