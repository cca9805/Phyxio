# Hidrodinámica - Errores Comunes y Diagnóstico

## Errores conceptuales

### Error 1: Confundir presión estática con fuerza de empuje
#### Por qué parece correcto
Muchos estudiantes asumen que una presión [[p]] alta siempre implica una velocidad [[v]] alta porque el fluido "empuja con más fuerza".

#### Por qué es incorrecto
El principio de Bernoulli demuestra que en un conducto horizontal, donde la velocidad aumenta (estrechamiento), la presión estática disminuye. La energía se conserva transformando energía de presión en energía cinética.

#### Señal de detección
Al observar estrechamientos, el estudiante espera que la presión suba cuando en realidad baja.

#### Corrección conceptual
Recordar que la presión [[p]] es una forma de energía potencial que se intercambia con la cinética. Si el fluido se acelera, debe extraer esa energía de su propia presión.

#### Mini-ejemplo
- ❌ **Incorrecto**: El agua en el estrechamiento de un Venturi tiene más presión.
- ✅ **Correcto**: Tiene más velocidad, pero su presión es menor.

### Error 2: Ignorar la conservación de la masa (Caudal)
#### Por qué parece correcto
Se piensa que el agua se "comprime" al pasar por un estrechamiento, permitiendo que pase menos volumen total por segundo.

#### Por qué es incorrecto
En líquidos incompresibles, el caudal [[Q]] es constante en todo el conducto. Lo que entra por un extremo debe salir por el otro en el mismo intervalo de tiempo.

#### Señal de detección
Obtener caudales diferentes en la entrada y salida de un conducto cerrado sin ramificaciones.

#### Corrección conceptual
Validar siempre el producto de área [[A]] por velocidad [[v]] en cada sección del sistema.

#### Mini-ejemplo
- ❌ **Incorrecto**: Q_1 > Q_2 en una tubería que se estrecha.
- ✅ **Correcto**: A_1 v_1  igual a  A_2 v_2.

## Errores de modelo

### Error 3: Aplicar Bernoulli en zonas de alta turbulencia
#### Por qué parece correcto
Se intenta usar la ecuación de Bernoulli

{{f:head_hidro}}

para calcular la caída de presión a través de una válvula casi cerrada o una bomba.

#### Por qué es incorrecto
Bernoulli asume flujo ideal sin pérdidas. En dispositivos mecánicos o zonas de gran turbulencia, la disipación de energía es masiva y el modelo ideal falla.

#### Señal de detección
Resultados de presión imposibles o falta de términos de potencia en el balance.

#### Corrección conceptual
Transicionar al modelo de Bernoulli Extendido que incluya pérdidas de carga y trabajo de eje.

#### Mini-ejemplo
- ❌ **Incorrecto**: Usar Bernoulli puro a través de una bomba hidráulica.
- ✅ **Correcto**: Usar el balance de energía con el término de potencia de bomba.

## Errores matemáticos

### Error 4: Inconsistencia dimensional en Bernoulli
#### Por qué parece correcto
Es tentador sumar directamente la presión en Pascales con la altura en metros.

#### Por qué es incorrecto
Cada término de la ecuación debe tener las mismas unidades. No se pueden sumar [Pa] con [m].

#### Señal de detección
Unidades finales inconsistentes o errores de varios órdenes de magnitud.

#### Corrección conceptual
Asegurarse de que todos los términos estén en metros (dividendo por [[rho]] g) o todos en Pascales (multiplicando por [[rho]] g).

#### Mini-ejemplo
- ❌ **Incorrecto**: 100000text{ Pa} + 10text{ m}.
- ✅ **Correcto**: 100000text{ Pa} + (10text{ m} cdot 1000text{ kg/m}^3 cdot 9.81text{ m/s}^2).

## Errores de interpretación

### Error 5: No validar la presión absoluta
#### Por qué parece correcto
Se calcula una presión manométrica muy negativa y se acepta como válida.

#### Por qué es incorrecto
La presión absoluta mínima es el vacío (cero). Si la presión manométrica cae por debajo de -1text{ atm}, el resultado es físicamente imposible.

#### Señal de detección
Presiones calculadas que implican tensiones de tracción imposibles en el líquido.

#### Corrección conceptual
Sumar siempre la presión atmosférica para verificar que la presión absoluta sea positiva.

#### Mini-ejemplo
- ❌ **Incorrecto**: Presión de -2text{ bar} manométricos.
- ✅ **Correcto**: La presión mínima es -1.013text{ bar} manométricos (vacío total).

## Regla de autocontrol rápido

- **Paso 1**: ¿He verificado la Continuidad? Comprueba que A cdot v es constante.
- **Paso 2**: ¿Las unidades son consistentes? Verifica que todos los términos estén en metros o Pascales.
- **Paso 3**: ¿El signo de la altura [[z]] es correcto respecto al nivel de referencia?
- **Paso 4**: ¿La presión absoluta resultante es positiva?
- **Paso 5**: ¿He incluido las pérdidas si el tramo es largo o tiene accesorios?
