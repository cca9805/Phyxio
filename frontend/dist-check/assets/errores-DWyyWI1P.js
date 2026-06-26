const e=`## Errores conceptuales

### Error 1: creer que resonancia es cualquier amplitud grande

#### Por qué parece correcto
Una amplitud [[X]] grande llama la atención y suele asociarse de inmediato con resonancia.

#### Por qué es incorrecto
[[X]] puede ser grande por una fuerza [[F0]] grande, una rigidez [[k]] pequeña o una medida hecha en transitorio. La resonancia exige comparar la curva de [[X]] al variar [[omega_f]].

#### Señal de detección
El razonamiento usa un solo dato de amplitud y no menciona barrido de frecuencia ni [[omega_r]].

#### Corrección conceptual
Busca el máximo de la curva y compara la frecuencia de trabajo con la zona del pico.

#### Mini-ejemplo
Si duplicas [[F0]], [[X]] sube en todo el barrido, pero eso no desplaza por sí solo el pico resonante.

### Error 2: igualar siempre [[omega_r]] y [[omega0]]

#### Por qué parece correcto
En muchos ejercicios introductorios el amortiguamiento es pequeño y ambas frecuencias casi coinciden.

#### Por qué es incorrecto
Con amortiguamiento [[b]] apreciable, el máximo de desplazamiento se desplaza respecto a [[omega0]]. Ignorar esa diferencia puede llevar a diseñar cerca de una zona peligrosa.

#### Señal de detección
El cálculo no usa [[b]] para localizar el pico.

#### Corrección conceptual
Distingue la escala natural [[omega0]] de la frecuencia real del máximo [[omega_r]].

#### Mini-ejemplo
Un soporte con mucho amortiguamiento puede tener una frecuencia natural clara y, aun así, una curva sin pico estrecho.

## Errores de modelo

### Error 3: medir durante el transitorio

#### Por qué parece correcto
Al encender el sistema aparecen amplitudes grandes y cambios rápidos que parecen resonancia.

#### Por qué es incorrecto
La resonancia se define en régimen estacionario. Si la respuesta libre no ha decaído, la medida mezcla información del arranque con la respuesta forzada.

#### Señal de detección
La amplitud cambia ciclo a ciclo aunque [[F0]] y [[omega_f]] permanezcan constantes.

#### Corrección conceptual
Espera varios ciclos antes de medir [[X]] y repite el barrido de forma controlada.

#### Mini-ejemplo
Un motor puede vibrar mucho al arrancar y estabilizarse después lejos del pico resonante.

### Error 4: aplicar el modelo lineal fuera de rango

#### Por qué parece correcto
Las fórmulas lineales son cómodas y predicen una curva suave.

#### Por qué es incorrecto
Si [[X]] activa holguras, topes o cambios de rigidez, la posición del pico puede depender de la amplitud. Entonces [[omega_r]] deja de ser constante.

#### Señal de detección
El pico se mueve al cambiar [[F0]] o aparece histéresis entre barrido ascendente y descendente.

#### Corrección conceptual
Usa un modelo no lineal o limita el análisis al rango donde [[m]], [[k]] y [[b]] son constantes.

#### Mini-ejemplo
Una suspensión con topes puede parecer segura a baja fuerza y mostrar otro pico a fuerza alta.

## Errores matemáticos

### Error 5: olvidar el amortiguamiento en la amplitud

#### Por qué parece correcto
Cerca de [[omega0]], la diferencia entre inercia y elasticidad domina visualmente la expresión.

#### Por qué es incorrecto
El término con [[b]] impide que la amplitud diverja y determina la altura real del pico. Sin él, el cálculo exagera la respuesta.

#### Señal de detección
El resultado predice amplitudes enormes aunque el sistema tenga disipación apreciable.

#### Corrección conceptual
Mantén el término disipativo al calcular [[X]] y al interpretar [[Q]].

#### Mini-ejemplo
Dos sistemas con la misma [[m]] y [[k]] pueden tener picos muy distintos si cambia [[b]].

### Error 6: usar mal unidades de frecuencia

#### Por qué parece correcto
Frecuencia en hercios y pulsación en rad/s se usan en contextos parecidos.

#### Por qué es incorrecto
Las fórmulas del leaf usan pulsaciones. Mezclar Hz con rad/s cambia [[omega_f]], [[omega0]] y [[omega_r]] por un factor constante y desplaza todo el diagnóstico.

#### Señal de detección
Los valores calculados son aproximadamente varias veces menores o mayores que los esperados.

#### Corrección conceptual
Convierte todas las frecuencias a rad/s antes de aplicar las relaciones del leaf.

#### Mini-ejemplo
Una velocidad de 10 Hz no es [[omega_f]] = 10 rad/s; antes debe convertirse a pulsación.

## Errores de interpretación

### Error 7: pensar que un [[Q]] alto siempre es bueno

#### Por qué parece correcto
Un pico selectivo parece preciso y útil.

#### Por qué es incorrecto
En sensores o instrumentos puede ser útil, pero en estructuras un [[Q]] alto puede aumentar riesgo porque concentra mucha respuesta en una franja estrecha.

#### Señal de detección
La solución celebra un pico alto sin discutir tolerancias ni seguridad.

#### Corrección conceptual
Interpreta [[Q]] según el objetivo: amplificar, filtrar, medir o evitar vibración.

#### Mini-ejemplo
Un puente no busca un [[Q]] alto frente a excitaciones periódicas; un resonador acústico sí puede buscarlo.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio de resonancia, comprueba cuatro preguntas: si la respuesta está en régimen estacionario, si todas las frecuencias están en rad/s, si [[omega_f]] se comparó con [[omega_r]] y si el papel de [[b]] aparece en la altura o anchura del pico. Si falta una de esas piezas, la conclusión física todavía no está cerrada.
`;export{e as default};
