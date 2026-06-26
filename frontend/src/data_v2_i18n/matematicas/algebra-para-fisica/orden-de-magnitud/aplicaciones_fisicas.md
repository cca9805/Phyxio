# Aplicaciones fisicas

## 1. Control de resultados en problemas

El uso mas inmediato es detectar respuestas imposibles. Si una aceleracion humana sale como `10^5 m/s^2`, el problema no necesita mas decimales: necesita revisar unidades, formula o datos.

Este control debe hacerse antes de entregar cualquier resultado. La calculadora puede dar muchos digitos a una respuesta que fisicamente no tiene sentido.

## 2. Cinematica

<!-- algebra-numbered-app-fix-v1:2 -->
Contexto fisico: movimiento con rangos conocidos de velocidad, distancia y tiempo. Uso operativo: estima la escala antes de calcular y detecta conversiones imposibles.

En movimiento, el orden de magnitud permite distinguir caminar, correr, circular en coche, volar o viajar en una orbita. Cada situacion ocupa rangos distintos de velocidad, distancia y tiempo.

Tambien ayuda a detectar conversiones equivocadas entre kilometros por hora y metros por segundo, o entre minutos y segundos.

## 3. Dinamica y fuerzas

<!-- algebra-numbered-app-fix-v1:3 -->
Contexto fisico: interacciones mecanicas que compiten sobre el mismo cuerpo. Uso operativo: compara ordenes de fuerza para decidir que termino domina el modelo.

En dinamica, comparar ordenes de fuerza ayuda a saber que interacciones dominan. Una fuerza de `10^3 N` no se trata igual que una de `10^-2 N` si actuan sobre el mismo cuerpo.

Esto es clave para decidir si rozamiento, peso, empuje, tension o resistencia del aire pueden despreciarse en una primera aproximacion.

## 4. Energia y potencia

<!-- algebra-numbered-app-fix-v1:4 -->
Contexto fisico: transferencia o consumo de energia en dispositivos y procesos. Uso operativo: estima potencia o energia y detecta si el resultado pertenece a otra escala fisica.

Los ordenes de magnitud permiten diferenciar energia cotidiana, energia industrial y energia astronomica. Un julio, un kilojulio, un megajulio y un gigajulio pertenecen a escalas muy distintas.

En potencia ocurre lo mismo: miliwatios, vatios, kilovatios y megavatios describen dispositivos y procesos radicalmente diferentes.

## 5. Escalas astronomicas y microscopicas

En astronomia y fisica microscopica, el orden de magnitud es imprescindible porque los numeros exactos son menos informativos que la escala. Radios planetarios, distancias orbitales, atomos y moleculas se separan por muchas potencias de diez.

Leer exponentes permite situar el fenomeno en el nivel correcto y evitar comparar objetos que pertenecen a escalas incompatibles.

<!-- algebra-intensive-fix-v1 -->
## Cierre intensivo de transferencia

En mecanica, el contexto tipico es estimar si una velocidad, una aceleracion o una energia tiene escala humana, planetaria o microscopica. El uso operativo es hacer una cuenta aproximada antes del calculo fino para detectar errores de unidades.

En electricidad, una potencia estimada por orden de magnitud permite distinguir un sensor, una bombilla, un motor y una central. Si el resultado cae seis ordenes fuera de lo esperado, el problema no es redondeo: probablemente hay una conversion o modelo mal usado.

En laboratorio, estimar el orden de magnitud decide si una medida sera visible con el instrumento disponible. Una incertidumbre de `0.1 mm` no sirve para resolver una variacion esperada de `10^-6 m` sin cambiar de tecnica.

