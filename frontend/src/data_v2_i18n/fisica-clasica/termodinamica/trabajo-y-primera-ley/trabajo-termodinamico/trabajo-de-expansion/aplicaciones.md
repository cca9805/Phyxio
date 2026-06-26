# Aplicaciones


## 1. Motores de combustión interna

En la carrera de expansión de un motor de cuatro tiempos, los gases de combustión empujan el émbolo hacia abajo, realizando trabajo mecánico que se transmite al cigüeñal. El trabajo por ciclo depende de la presión media de los gases durante la expansión y del [[volumen]] desplazado por el émbolo, que es la cilindrada del cilindro. Los ingenieros de motores optimizan la relación entre presión máxima de combustión y el perfil de expansión para maximizar [[trabajo_termodinamico]] por ciclo.

Variable dominante: ** [[presion]] media de los gases de combustión y [[variacion_de_volumen]] de la carrera de expansión.

Límite de validez: ** modelo isobárico como primera aproximación; en la práctica la presión varía con el [[volumen]] siguiendo una curva politrópica.

## 2. Turbinas de vapor en centrales eléctricas

En una turbina de vapor, el vapor a alta presión se expande a través de los álabes de la turbina, realizando trabajo sobre el rotor. El trabajo total por kilogramo de vapor es proporcional a la integral de la presión sobre el [[volumen]] específico a lo largo de la expansión. Las turbinas modernas operan entre presiones de decenas de MPa y décimas de MPa, con grandes variaciones de [[volumen]] específico.

Variable dominante: ** integral ∫p dV a lo largo de la expansión del vapor en la turbina.

Límite de validez: ** el proceso real es irreversible por fricción y transferencia de calor; el trabajo real es menor que el trabajo ideal isentrópico calculado con la integral.

## 3. Respiración y ventilación pulmonar

El diafragma y los músculos intercostales aumentan el [[volumen]] de la cavidad torácica, reduciendo la presión del aire en los pulmones por debajo de la presión atmosférica. Este gradiente de presión impulsa el aire hacia los pulmones, que se expanden realizando trabajo sobre la corriente de aire. En cada ciclo respiratorio, los músculos realizan trabajo mecánico equivalente a [[presion]]·[[variacion_de_volumen]] para mover el [[volumen]] corriente de aire.

Variable dominante: ** diferencia entre la presión alveolar y la presión atmosférica, y el [[volumen]] corriente respirado.

Límite de validez: ** el modelo de proceso isobárico es una buena aproximación para respiración tranquila; en esfuerzo intenso los gradientes de presión son mayores y el proceso se aleja del caso ideal.

## 4. Lanzamiento de proyectiles por expansión de gas

En armas de fuego, aire comprimido o gas a alta presión se expande detrás del proyectil, realizando trabajo sobre él y acelerándolo por el cañón. El trabajo total realizado sobre el proyectil es la integral de la presión del gas sobre el recorrido del proyectil, que equivale a la integral ∫p dV del gas en expansión. La energía cinética del proyectil al salir del cañón es aproximadamente igual a ese trabajo, descontando las pérdidas por fricción.

Variable dominante: ** presión del gas propulsor en función del [[volumen]] ocupado por el gas detrás del proyectil.

Límite de validez: ** proceso altamente irreversible y rápido; el modelo cuasi-estático solo es una primera aproximación. Las pérdidas por calor al cañón y por fricción reducen el trabajo útil real.

## 5. Compresores industriales de gas

Los compresores utilizan trabajo mecánico externo para comprimir un gas, reduciendo su [[volumen]] ([[variacion_de_volumen]] < 0) y aumentando su presión. El trabajo consumido por el compresor es el que el émbolo realiza sobre el gas, que en la convención física es negativo (se realiza trabajo sobre el sistema). En la práctica industrial, los compresores se caracterizan por su trabajo específico (trabajo por kg de gas comprimido), que determina el consumo energético y el dimensionado del motor eléctrico.

Variable dominante: ** integral ∫p dV a lo largo del proceso de compresión, con [[variacion_de_volumen]] negativo.

Límite de validez: ** el modelo isotérmico (mínimo trabajo de compresión teórico) y el modelo adiabático (máximo calentamiento) enmarcan el comportamiento real de los compresores. La refrigeración intermedia (compresión multietapa) acerca el proceso al caso isotérmico y reduce el trabajo consumido.

## 6. Globos meteorológicos y sondas estratosféricas

Los globos meteorológicos ascienden desde el nivel del mar hasta altitudes de 30–40 km, donde la [[presion]] atmosférica cae de 10⁵ Pa a menos de 10³ Pa. A medida que el globo asciende, el gas en su interior se expande porque la [[presion]] exterior disminuye. El [[trabajo_termodinamico]] realizado por el gas durante esa expansión equivale a la energía mecánica invertida en inflar el globo contra la presión atmosférica decreciente a lo largo de todo el ascenso. Este trabajo es la integral de la [[presion]] exterior sobre la [[variacion_de_volumen]] total del globo, que puede aumentar hasta 100 veces su [[volumen]] inicial.

Variable dominante: ** [[variacion_de_volumen]] total del globo a lo largo del ascenso, desde el [[volumen]] inicial en el suelo hasta el [[volumen]] máximo antes del estallido; la [[presion]] exterior decrece de forma aproximadamente exponencial con la altitud.

Límite de validez: ** el modelo isobárico es una primera aproximación válida solo en tramos cortos de ascenso donde la variación de [[presion]] es pequeña; el cálculo riguroso requiere integrar p(V) a lo largo de toda la trayectoria de ascenso, usando el perfil de presión atmosférica estándar.