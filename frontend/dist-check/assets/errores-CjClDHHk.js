const e=`\uFEFF# Hidrodinámica - Errores Comunes y Diagnóstico\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir presión estática con fuerza de empuje\r
#### Por qué parece correcto\r
Muchos estudiantes asumen que una presión [[p]] alta siempre implica una velocidad [[v]] alta porque el fluido "empuja con más fuerza".\r
\r
#### Por qué es incorrecto\r
El principio de Bernoulli demuestra que en un conducto horizontal, donde la velocidad aumenta (estrechamiento), la presión estática disminuye. La energía se conserva transformando energía de presión en energía cinética.\r
\r
#### Señal de detección\r
Al observar estrechamientos, el estudiante espera que la presión suba cuando en realidad baja.\r
\r
#### Corrección conceptual\r
Recordar que la presión [[p]] es una forma de energía potencial que se intercambia con la cinética. Si el fluido se acelera, debe extraer esa energía de su propia presión.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: El agua en el estrechamiento de un Venturi tiene más presión.\r
- ✅ **Correcto**: Tiene más velocidad, pero su presión es menor.\r
\r
### Error 2: Ignorar la conservación de la masa (Caudal)\r
#### Por qué parece correcto\r
Se piensa que el agua se "comprime" al pasar por un estrechamiento, permitiendo que pase menos volumen total por segundo.\r
\r
#### Por qué es incorrecto\r
En líquidos incompresibles, el caudal [[Q]] es constante en todo el conducto. Lo que entra por un extremo debe salir por el otro en el mismo intervalo de tiempo.\r
\r
#### Señal de detección\r
Obtener caudales diferentes en la entrada y salida de un conducto cerrado sin ramificaciones.\r
\r
#### Corrección conceptual\r
Validar siempre el producto de área [[A]] por velocidad [[v]] en cada sección del sistema.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: Q_1 > Q_2 en una tubería que se estrecha.\r
- ✅ **Correcto**: A_1 v_1  igual a  A_2 v_2.\r
\r
## Errores de modelo\r
\r
### Error 3: Aplicar Bernoulli en zonas de alta turbulencia\r
#### Por qué parece correcto\r
Se intenta usar la ecuación de Bernoulli\r
\r
{{f:head_hidro}}\r
\r
para calcular la caída de presión a través de una válvula casi cerrada o una bomba.\r
\r
#### Por qué es incorrecto\r
Bernoulli asume flujo ideal sin pérdidas. En dispositivos mecánicos o zonas de gran turbulencia, la disipación de energía es masiva y el modelo ideal falla.\r
\r
#### Señal de detección\r
Resultados de presión imposibles o falta de términos de potencia en el balance.\r
\r
#### Corrección conceptual\r
Transicionar al modelo de Bernoulli Extendido que incluya pérdidas de carga y trabajo de eje.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: Usar Bernoulli puro a través de una bomba hidráulica.\r
- ✅ **Correcto**: Usar el balance de energía con el término de potencia de bomba.\r
\r
## Errores matemáticos\r
\r
### Error 4: Inconsistencia dimensional en Bernoulli\r
#### Por qué parece correcto\r
Es tentador sumar directamente la presión en Pascales con la altura en metros.\r
\r
#### Por qué es incorrecto\r
Cada término de la ecuación debe tener las mismas unidades. No se pueden sumar [Pa] con [m].\r
\r
#### Señal de detección\r
Unidades finales inconsistentes o errores de varios órdenes de magnitud.\r
\r
#### Corrección conceptual\r
Asegurarse de que todos los términos estén en metros (dividendo por [[rho]] g) o todos en Pascales (multiplicando por [[rho]] g).\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: 100000text{ Pa} + 10text{ m}.\r
- ✅ **Correcto**: 100000text{ Pa} + (10text{ m} cdot 1000text{ kg/m}^3 cdot 9.81text{ m/s}^2).\r
\r
## Errores de interpretación\r
\r
### Error 5: No validar la presión absoluta\r
#### Por qué parece correcto\r
Se calcula una presión manométrica muy negativa y se acepta como válida.\r
\r
#### Por qué es incorrecto\r
La presión absoluta mínima es el vacío (cero). Si la presión manométrica cae por debajo de -1text{ atm}, el resultado es físicamente imposible.\r
\r
#### Señal de detección\r
Presiones calculadas que implican tensiones de tracción imposibles en el líquido.\r
\r
#### Corrección conceptual\r
Sumar siempre la presión atmosférica para verificar que la presión absoluta sea positiva.\r
\r
#### Mini-ejemplo\r
- ❌ **Incorrecto**: Presión de -2text{ bar} manométricos.\r
- ✅ **Correcto**: La presión mínima es -1.013text{ bar} manométricos (vacío total).\r
\r
## Regla de autocontrol rápido\r
\r
- **Paso 1**: ¿He verificado la Continuidad? Comprueba que A cdot v es constante.\r
- **Paso 2**: ¿Las unidades son consistentes? Verifica que todos los términos estén en metros o Pascales.\r
- **Paso 3**: ¿El signo de la altura [[z]] es correcto respecto al nivel de referencia?\r
- **Paso 4**: ¿La presión absoluta resultante es positiva?\r
- **Paso 5**: ¿He incluido las pérdidas si el tramo es largo o tiene accesorios?\r
`;export{e as default};
