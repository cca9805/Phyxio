# Aplicaciones prácticas: centro de masas en sistemas discretos

## 1. Distribución de carga en una plataforma

Una plataforma transporta tres equipos pesados en posiciones conocidas. Cada equipo se modela como una masa puntual porque su tamaño es pequeño frente a la distancia entre anclajes. El cálculo de [[xcm]] permite decidir si la plataforma queda equilibrada o si una rueda soportará demasiada carga.

Variable dominante: [[xcm]]

Límite de validez: los equipos deben permanecer fijos y sus masas deben concentrarse razonablemente en sus puntos de montaje.

La aplicación usa [[m_i]], [[x_i]] y [[M]] para anticipar el sesgo de carga. Si el equipo más pesado está a la derecha, el centro de masas debe desplazarse hacia ese lado. Un resultado fuera del intervalo de posiciones indicaría un error de referencia.

El criterio práctico no es solo obtener un número, sino decidir si el apoyo, la rueda o el anclaje principal quedan cerca de [[xcm]]. Si el centro calculado se aleja de la zona de soporte, la solución no consiste en recalcular, sino en redistribuir masas: acercar el equipo dominante al centro o compensarlo con otra contribución.

## 2. Diseño de un robot móvil con módulos discretos

En un robot educativo, batería, controlador y sensor se colocan en puntos diferentes del chasis. Aunque el chasis sea extendido, los módulos dominantes pueden tratarse como masas discretas para una primera decisión de diseño. El objetivo es que [[xcm]] quede cerca del eje entre ruedas.

Variable dominante: [[M]]

Límite de validez: la masa del chasis debe ser pequeña o incorporarse como otra contribución discreta equivalente.

Este cálculo evita probar configuraciones al azar. Si [[m_2]] representa la batería y está lejos del eje, moverla unos centímetros puede desplazar [[xcm]] más que mover un sensor ligero. La fórmula muestra qué cambio tiene impacto real.

En diseño iterativo, esta lectura permite comparar alternativas antes de construir. Una configuración puede tener la misma [[M]] que otra y, sin embargo, ser peor si concentra demasiado peso en un extremo. Por eso el dato decisivo es la pareja entre masa y posición, no la masa total aislada.

## 3. Análisis de equilibrio en una barra con pesos colgados

En laboratorio se cuelgan masas en marcas de una barra ligera. Si la barra puede despreciarse, cada peso se representa por una masa puntual. La posición [[xcm]] predice dónde habría que colocar el apoyo para equilibrar el conjunto sin giro inicial.

Variable dominante: [[x_2]]

Límite de validez: la barra debe tener masa despreciable o incluirse como contribución adicional.

La lectura física es inmediata: el apoyo debe moverse hacia el lado con mayor producto masa por posición. No basta mirar el peso mayor; también importa su distancia al origen.

Esta aplicación es especialmente útil para detectar errores de signo. Si una masa está a la izquierda del origen y se escribe como si estuviera a la derecha, el punto de apoyo recomendado aparece en el lado incorrecto. La comprobación visual del equilibrio ayuda a validar la tabla de datos.

## 4. Organización de paquetes en un vehículo

Un repartidor coloca varios paquetes en posiciones conocidas dentro de una furgoneta. Para evitar sobrecargar un eje, se estima el centro de masas longitudinal del conjunto de paquetes. Cada paquete se aproxima como masa puntual en su centro geométrico.

Variable dominante: [[m_i]]

Límite de validez: los paquetes no deben deslizarse durante el transporte y sus centros deben estar bien localizados.

La utilidad práctica es decidir qué paquete cambiar de sitio. Intercambiar dos paquetes de masas diferentes no conserva [[xcm]], aunque las posiciones disponibles sean las mismas. La masa mayor debe colocarse cerca del centro seguro si se quiere reducir el sesgo.

En este caso, el modelo discreto también ayuda a comunicar la decisión. No hace falta describir toda la geometría de la furgoneta: basta indicar qué paquete domina y cuánto se aleja del eje seguro. Si el paquete pesado no puede moverse, el cálculo sugiere qué carga secundaria puede compensar mejor.

## 5. Reconstrucción de un sistema a partir de sensores

En un banco de pruebas, varios sensores miden la posición de masas acopladas a un carril. El software calcula [[xcm]] en tiempo real para resumir el estado del sistema. Como las masas se identifican individualmente, el modelo discreto es más rápido y transparente que un modelo continuo.

Variable dominante: [[x_i]]

Límite de validez: el número de masas debe ser finito y cada posición debe medirse con el mismo origen.

Esta aplicación muestra la ventaja operativa del leaf: convierte una lista de datos en una magnitud global interpretable. Si una lectura de sensor salta de origen o de signo, [[xcm]] cambia de forma incoherente y el error se detecta con el chequeo de rango.

El uso con sensores exige una precaución adicional: todas las posiciones deben sincronizarse en el mismo instante. Si una masa se registra antes que otra, el valor de [[xcm]] puede mezclar configuraciones distintas. El modelo sigue siendo discreto, pero la calidad del resultado depende de que la lista represente un único estado físico.

En conjunto, estas aplicaciones comparten una pregunta: qué masa domina y desde qué posición arrastra el promedio. El valor de [[M]] normaliza el cálculo, pero el significado físico está en las parejas masa-posición. Por eso el método discreto es útil cuando el sistema se puede descomponer en piezas finitas y cada pieza tiene ubicación clara.
