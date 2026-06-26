# Aplicaciones

## 1. Refrigerador domestico

### Contexto de la aplicacion

El refrigerador domestico mantiene los alimentos a temperaturas entre 2 y 8 grados Celsius (275 a 281 K) extrayendo calor [[Q_C]] del interior y rechandolo al ambiente de la cocina como [[Q_H]]. El compresor opera ciclicamente controlado por un termostato, consumiendo trabajo [[W]].

### Magnitudes relevantes

- [[T_C]]: 268 a 278 K (interior del refrigerador o congelador)
- [[T_H]]: 295 a 313 K (ambiente de la cocina)
- [[Q_C]]: 150 a 400 W (capacidad frigorifica)
- [[W]]: 60 a 150 W (potencia del compresor)
- [[Q_H]]: 210 a 550 W (calor rechazado por el condensador)
- [[Delta_S_total]]: 0.2 a 1.5 W/K (produccion de entropia)

Variable dominante: La diferencia [[T_H]] menos [[T_C]] determina el trabajo minimo de Carnot y, por tanto, el consumo energetico del compresor.

Limite de validez: El modelo deja de aplicarse en forma simple si el sistema tiene multiples zonas de temperatura, si el compresor opera con inverter de velocidad variable, o si la puerta se abre frecuentemente alterando [[T_C]].

## 2. Bomba de calor para calefaccion

### Contexto de la aplicacion

La bomba de calor aerotermica extrae calor [[Q_C]] del aire exterior (foco frio) y lo entrega como [[Q_H]] al interior de un edificio (foco caliente). El principio de funcionamiento es identico al del refrigerador, pero el efecto util es [[Q_H]] entregado al interior, haciendo que el sistema sea mas eficiente que la calefaccion electrica directa.

### Magnitudes relevantes

- [[T_C]]: 263 a 283 K (aire exterior en invierno)
- [[T_H]]: 293 a 323 K (temperatura de distribucion interior)
- [[Q_H]]: 3000 a 15000 W (capacidad de calefaccion)
- [[W]]: 1000 a 5000 W (potencia del compresor)
- [[Q_C]]: 2000 a 10000 W (calor extraido del exterior)

Variable dominante: La temperatura exterior [[T_C]] determina la eficiencia y la capacidad del sistema. A menor [[T_C]], mayor [[W]] necesario.

Limite de validez: Por debajo de [[T_C]] de 253 K (menos 20 C), muchas bombas aerotermicas pierden capacidad y requieren resistencias de apoyo, abandonando el ciclo invertido puro.

## 3. Aire acondicionado (modo refrigeracion)

### Contexto de la aplicacion

El aire acondicionado tipo split extrae calor [[Q_C]] del interior de un edificio y lo rechaza como [[Q_H]] al exterior. Opera como refrigerador donde [[T_C]] es la temperatura interior y [[T_H]] es la temperatura exterior. La diferencia de temperatura tipica es pequena (10 a 20 K), lo que permite altos COP.

### Magnitudes relevantes

- [[T_C]]: 293 a 299 K (interior a 20-26 C)
- [[T_H]]: 303 a 318 K (exterior en verano)
- [[Q_C]]: 2000 a 12000 W (capacidad de refrigeracion)
- [[W]]: 500 a 4000 W (consumo del compresor)
- [[Delta_S_total]]: 0.5 a 5 W/K (produccion de entropia)

Variable dominante: La diferencia [[T_H]] menos [[T_C]], tipicamente 10 a 25 K, determina el COP teorico y real del sistema.

Limite de validez: El principio se complica si hay deshumidificacion simultanea o si el equipo opera en modo inverter con carga parcial variable.

## 4. Criogenia (licuefaccion de gases)

### Contexto de la aplicacion

Para licuar nitrogeno (77 K) o helio (4 K) se necesitan ciclos invertidos con diferencias de temperatura extremas. El principio de funcionamiento es identico: [[Q_H]] es [[Q_C]] mas [[W]], pero el trabajo necesario es enorme comparado con la energia extraida.

### Magnitudes relevantes

- [[T_C]]: 4 a 77 K (temperaturas criogenicas)
- [[T_H]]: 293 a 310 K (ambiente)
- [[W]] minimo / [[Q_C]]: 2.9 (nitrogeno) a 72 (helio)
- [[Delta_S_total]]: muy alta por multiples etapas

Variable dominante: [[T_C]] criogenica extremadamente baja hace que el cociente ([[T_H]] menos [[T_C]]) dividido entre [[T_C]] sea enorme.

Limite de validez: El modelo de un solo ciclo no es aplicable; se requieren cascadas o ciclos en multiples etapas. La fraccion de Carnot real es del 5 al 15 por ciento.

## 5. Refrigeracion industrial alimentaria

### Contexto de la aplicacion

Las camaras frigorificas industriales mantienen productos a temperaturas de menos 18 a menos 40 grados Celsius para congelacion rapida. Operan con sistemas de compresion en dos etapas, extrayendo [[Q_C]] del producto y rechazando [[Q_H]] mediante torres de enfriamiento.

### Magnitudes relevantes

- [[T_C]]: 233 a 255 K (camara de congelacion)
- [[T_H]]: 303 a 318 K (condensacion con torre)
- [[Q_C]]: 50 a 500 kW (capacidad total)
- [[W]]: 25 a 300 kW (potencia instalada)
- [[Delta_S_total]]: alta por irreversibilidades en dos etapas

Variable dominante: La diferencia de temperatura de 50 a 85 K hace que [[W]] minimo sea una fraccion significativa de [[Q_C]], encareciendo la operacion.

Limite de validez: Los sistemas de dos etapas reducen irreversibilidades pero anaden complejidad. El modelo simple de un ciclo subestima el trabajo real en un 30 a 50 por ciento.

## Sintesis de aplicaciones

En todas las aplicaciones, el principio fundamental es identico: [[Q_H]] es [[Q_C]] mas [[W]], y [[Delta_S_total]] debe ser no negativa. Lo que cambia entre aplicaciones es la diferencia de temperatura [[T_H]] menos [[T_C]], que determina el trabajo minimo y la eficiencia del sistema. A menor diferencia de temperatura, menor trabajo necesario y mayor COP. En criogenia, donde las diferencias son extremas, el principio sigue siendo valido pero el trabajo real domina completamente la operacion del sistema.
