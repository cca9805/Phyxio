# Errores comunes: colisiones bidimensionales

## Errores conceptuales

### Error 1: Sumar magnitudes de velocidad directamente sin considerar la dirección

**Por qué parece correcto:**
En una dimensión, el momento lineal se suma de forma casi escalar (solo con signos), por lo que parece natural sumar las rapideces [[v1i]] y [[v2i]] para obtener el total.

**Por qué es incorrecto:**
El momento lineal es una magnitud vectorial. En dos dimensiones, dos velocidades de igual magnitud pueden anularse si sus direcciones son opuestas, o sumarse de forma compleja si son oblicuas. Sumar escalares ignora la "identidad direccional" del movimiento.

**Señal de detección:**
El momento total calculado es mayor que la suma de los componentes individuales proyectados, o el resultado no varía al cambiar el ángulo [[theta1i]] de impacto.

**Corrección conceptual:**
Utiliza siempre la ley de conservación vectorial:

{{f:vec}}

Descompón cada vector en sus proyecciones cartesianas [[v1ix]] y [[v1iy]] antes de realizar cualquier operación aritmética.

**Mini-ejemplo de contraste:**
Si dos cuerpos de 1 kg se mueven a 1 m/s perpendicularmente, el momento total no es 2 kg·m/s, sino la hipotenusa del triángulo: aproximadamente 1,41 kg·m/s.

## Errores de modelo

### Error 2: Asumir que la colisión es siempre elástica sin verificar la energía

**Por qué parece correcto:**
Muchos problemas académicos asumen elasticidad perfecta por simplicidad, lo que lleva a pensar que la energía cinética [[Ki]] siempre es igual a [[Kf]].

**Por qué es incorrecto:**
En el mundo real, casi todas las colisiones disipan energía ([[DeltaK]] < 0). Aplicar la conservación de energía a un choque inelástico sobre-determina el sistema y conduce a resultados físicamente imposibles.

**Señal de detección:**
Las velocidades finales [[v1f]] calculadas son demasiado altas, o el problema proporciona un coeficiente de restitución que se ignora en el cálculo.

**Corrección conceptual:**
Calcula siempre el balance energético:

{{f:energy_loss}}

Solo usa la conservación de energía si el enunciado garantiza explícitamente que el choque es elástico. En caso contrario, confía únicamente en la conservación del momento.

**Mini-ejemplo de contraste:**
En un choque inelástico donde los cuerpos quedan pegados, la energía final puede ser mucho menor que la inicial. Forzar [[Ki]] = [[Kf]] daría una velocidad de salida errónea y excesiva.

## Errores matemáticos

### Error 3: Error de cuadrante al calcular el ángulo de dispersión final

**Por qué parece correcto:**
La función arcotangente en la calculadora devuelve un valor que parece ser el ángulo directo de la trayectoria [[theta1f]].

**Por qué es incorrecto:**
La función atan(y/x) solo devuelve valores entre -90° y 90°. Si el cuerpo se mueve hacia el segundo o tercer cuadrante (componente [[v1fx]] negativa), la calculadora dará un ángulo erróneo si no se corrige manualmente o se usa la función atan2(y, x).

**Señal de detección:**
El ángulo obtenido sitúa al cuerpo moviéndose "hacia dentro" del punto de impacto en lugar de alejarse de él.

**Corrección conceptual:**
Dibuja siempre un diagrama de componentes. Si [[v1fx]] es negativa, suma 180° al resultado de la arcotangente para situar el vector en el cuadrante correcto. Usa la siguiente relación con precaución:

{{f:angle_theta1f}}

**Mini-ejemplo de contraste:**
Para [[v1fx]] = -1 y [[v1fy]] = 1, la calculadora dirá -45°, pero el ángulo real es 135°. El cuerpo retrocede y sube, no avanza y baja.

## Errores de interpretación

### Error 4: Ignorar la independencia de los ejes X e Y

**Por qué parece correcto:**
Parece que lo que ocurre en un eje debe afectar "proporcionalmente" al otro para mantener la forma del vector.

**Por qué es incorrecto:**
Las leyes de Newton garantizan que las fuerzas en X solo cambian el momento en X. En una colisión lisa, el momento tangencial no cambia aunque el normal sufra una variación violenta. Los ejes son canales de información independientes.

**Señal de detección:**
Se intenta usar la misma relación de cambio para [[v1fx]] que para [[v1fy]] sin una justificación física o geométrica.

**Corrección conceptual:**
Plantea las ecuaciones como dos mundos separados que solo se conectan al final para reconstruir el vector total [[v1f]]:

{{f:x}}

{{f:y}}

**Mini-ejemplo de contraste:**
En un choque contra una pared horizontal, la velocidad en X se mantiene constante mientras que la velocidad en Y invierte su signo. No hay "mezcla" de componentes si no hay fuerzas oblicuas.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado en 2D, aplica esta lista:

1. **Vectorialidad**: ¿He sumado componentes o he sumado módulos? (Solo componentes es correcto).
2. **Energía**: ¿Es [[Kf]] menor o igual a [[Ki]]? (Si es mayor, hay un error grave).
3. **Cuadrantes**: ¿La dirección de [[theta1f]] coincide con los signos de las componentes finales?
4. **Independencia**: ¿Se conserva el momento en AMBOS ejes por separado?
