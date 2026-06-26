# Ejemplo tipo examen

## Enunciado

Un altavoz emite ondas sonoras de manera uniforme en todas direcciones con una potencia acustica de 5.0 W. Un espectador A se encuentra a 2.0 m del altavoz, mientras que otro espectador B esta a 8.0 m del mismo altavoz, en la misma direccion pero en sentido opuesto respecto a A.

Se pide:

a) Calcular la intensidad sonora y el nivel de intensidad sonora en la posicion del espectador A.

b) Calcular la intensidad sonora y el nivel de intensidad sonoro en la posicion del espectador B.

c) Determinar cuantas veces mayor es la intensidad fisica en A comparada con B, y cuantos decibelios de diferencia hay entre ambas posiciones.

d) Si se coloca un segundo altavoz identico junto al primero, ambos emitiendo simultaneamente, calcular el nuevo nivel sonoro en la posicion de A.

## Datos

- Potencia del altavoz: [[P]] = 5.0 W
- Distancia espectador A: 2.0 m
- Distancia espectador B: 8.0 m
- Intensidad de referencia: [[I_0]] = 10⁻¹² W/m²
- Fuente omnidireccional en campo libre

## Definicion del sistema

Sistema fisico: dos puntos de observacion en el campo sonoro generado por una fuente puntual omnidireccional radiando en espacio libre homogeneo. La geometria es esfericamente simetrica alrededor del altavoz.

Variables relevantes:
- [[I]]: Intensidad sonora en cada punto (magnitud a calcular)
- [[L]]: Nivel de intensidad sonora en cada punto (magnitud a calcular)
- [[P]]: Potencia acustica emitida por la fuente (dato conocido)
- [[r]]: Distancia radial desde la fuente al observador (dato conocido)

## Modelo fisico

Se aplica el modelo de **fuente puntual omnidireccional en campo libre**, donde la potencia acustica se distribuye uniformemente sobre la superficie de esferas concentricas.

La intensidad en cualquier punto a distancia r viene dada por:

{{f:intensidad_potencia}}

El nivel de intensidad sonora se calcula mediante:

{{f:nivel_intensidad}}

Para la comparacion entre dos puntos a distintas distancias, se usa la relacion:

{{f:intensidad_distancia}}

## Justificacion del modelo

El modelo es aplicable porque:

- El altavoz es relativamente pequeno comparado con las distancias de observacion (d < 0.3 m, r > 2 m), cumpliendo la condicion de campo lejano (r > 3d).
- Se especifica emision uniforme en todas direcciones (omnidireccional).
- Se assume aire como medio homogeneo a temperatura constante.
- No se mencionan reflexiones ni obstaculos, validando la aproximacion de campo libre.

El modelo dejaria de ser valido si:

- Los espectadores estuvieran a menos de 1 metro (campo cercano, efectos de directividad del altavoz).
- Hubiera paredes cercanas creando reflexiones significativas (campo reverberante).
- La distancia fuera mayor a cientos de metros (absorcion atmosferica significativa a altas frecuencias).

## Resolucion simbolica

**Apartado a) Intensidad y nivel en A**

Para el espectador A a distancia r_A:

{{f:intensidad_potencia}}

Donde I_A es la intensidad a calcular.

Sustituyendo simbolicamente:

La intensidad en A sigue la relacion de intensidad desde potencia.

El nivel en A se calcula como:

{{f:nivel_intensidad}}

Donde L_A es el nivel a determinar.

**Apartado b) Intensidad y nivel en B**

Analogamente para el espectador B:

La intensidad en B sigue la misma relacion de intensidad desde potencia.

{{f:nivel_intensidad}}

**Apartado c) Relacion entre A y B**

Usando la ley del inverso del cuadrado para la relacion de intensidades:

{{f:intensidad_distancia}}

La diferencia de niveles en decibelios:

ΔL = L_A - L_B = 10 × log(I_A/I_B) = 10 × log((r_B/r_A)²) = 20 × log(r_B/r_A)

**Apartado d) Dos altavoces en A**

Con dos fuentes identicas, la potencia total se duplica.

La nueva intensidad:

I_A' = (2P) / (4π × r_A²) = 2 × I_A

El nuevo nivel:

El nuevo nivel se obtiene aplicando la relacion de nivel a la intensidad duplicada.

## Sustitucion numerica

**Apartado a) Espectador A**

Para A se sustituye [[P]] de 5.0 W y distancia de 2.0 m en la relacion de intensidad desde potencia.

Operacion: 5.0 / (4 × 3.14159 × 4.0) = 5.0 / 50.265 = 0.09947 W/m²

Por tanto [[I]] ≈ 9.95 × 10⁻² W/m²

L_A = 10 × log(9.95 × 10⁻² / 10⁻¹²)

Operacion: 10 × log(9.95 × 10¹⁰) = 10 × 10.998 = 109.98 dB

Por tanto [[L]] ≈ 110 dB

**Apartado b) Espectador B**

Para B se sustituye [[P]] de 5.0 W y distancia de 8.0 m en la relacion de intensidad desde potencia.

Operacion: 5.0 / (4 × 3.14159 × 64.0) = 5.0 / 804.25 = 0.006217 W/m²

Por tanto [[I]] ≈ 6.22 × 10⁻³ W/m²

L_B = 10 × log(6.22 × 10⁻³ / 10⁻¹²)

Operacion: 10 × log(6.22 × 10⁹) = 10 × 9.794 = 97.94 dB

Por tanto [[L]] ≈ 98 dB

**Apartado c) Comparacion**

La relacion de intensidades entre A y B es 16.

La intensidad fisica en A es 16 veces mayor que en B.

La diferencia de niveles entre A y B es 12 dB.

Verificacion con formula: ΔL = 20 × log(8.0/2.0) = 20 × log(4) = 20 × 0.602 = 12.04 dB ✓

**Apartado d) Dos altavoces**

I_A' = 2 × 9.95 × 10⁻² W/m² = 0.199 W/m²

L_A' = 10 × log(0.199 / 10⁻¹²) = 10 × log(1.99 × 10¹¹) = 10 × 11.30 = 113.0 dB

La aproximacion rapida suma 3 dB al nivel inicial y da 113 dB.

## Validacion dimensional

**Unidades de intensidad:**

[W] / [m²] = W/m² → M L² T⁻³ / L² = M L⁻² T⁻³ ✓ (dimension correcta para intensidad)

**Unidades de nivel:**

log(adimensional) → adimensional, expresado en dB ✓

**Unidades de diferencia de niveles:**

La diferencia entre niveles conserva la unidad dB.

**Coherencia fisica de valores:**

- Intensidades positivas: 9.95 × 10⁻² W/m² > 0 y 6.22 × 10⁻³ W/m² > 0 ✓
- Niveles dentro de rango audible: 110 dB y 98 dB estan entre 0 dB y 140 dB ✓
- Relacion de intensidades > 1 cuando r_B > r_A: 16 > 1 ✓
- Diferencia de niveles positiva cuando I_A > I_B: 12 dB > 0 ✓

## Interpretacion fisica

El resultado muestra que a 2 metros de un altavoz de 5 W, el nivel sonoro de 110 dB es extremadamente alto, comparable a un concierto de rock muy cercano o a maquinaria industrial sin proteccion. Esto excede los limites de exposicion segura (tipicamente 85 dB para 8 horas), por lo que la exposicion prolongada causaria dano auditivo permanente.

A 8 metros de distancia, el nivel cae a 98 dB, aun elevado pero 12 dB menor. Esta reduccion representa que la intensidad fisica es 16 veces menor (ley del inverso del cuadrado), aunque perceptivamente solo suena aproximadamente 2.5 veces mas suave (la percepcion logaritmica comprime el rango). Esto demuestra que duplicar la distancia no duplica la reduccion perceptual: alejarse de 2 m a 8 m (cuadruplicar distancia) reduce el sonido a un cuarto de intensidad pero no a un cuarto de sensacion.

La adicion del segundo altavoz aumenta el nivel solo 3 dB, de 110 dB a 113 dB. Aunque duplicamos la potencia fisica (y por tanto la intensidad), la percepcion de "el doble de fuerte" corresponde a aproximadamente 10 dB de aumento, no 3 dB. Por tanto, dos altavoces identicos juntos suenan apenas perceptiblemente mas fuertes que uno solo, a pesar de duplicar la energia emitida. Esto ilustra la compresion logaritmica de la percepcion auditiva.

Si se quisiera alcanzar un nivel seguro de 70 dB (conversacion normal), habria que aumentar significativamente la distancia: al despejar [[r]] desde el nivel objetivo se obtiene una distancia de aproximadamente 400 metros, o habria que reducir drasticamente la potencia del altavoz. Esto muestra la dificultad de mitigar ruido de alta potencia mediante solamente distancia en espacios abiertos.

---

# Ejemplo de aplicacion real

## Contexto

Una constructora esta evaluando la exposicion al ruido de los trabajadores en una obra donde se utiliza un martillo neumatico. La normativa de prevencion de riesgos laborales establece que el nivel de exposicion diaria no debe exceder los 80 dB(A) para 8 horas de jornada. El martillo tiene una potencia acustica estimada de 0.5 W y se modela como fuente omnidireccional en campo libre.

El capataz necesita determinar:
- A que distancia minima debe colocarse la senalizacion de zona de riesgo para cumplir la normativa de 85 dB (limite para uso obligatorio de proteccion auditiva)
- A que distancia debe situarse el puesto de control del supervisor para mantener niveles inferiores a 70 dB (zona confortable para trabajo administrativo)

## Estimacion fisica

Para la distancia de seguridad de 85 dB:

La estimacion cuantitativa se hace en dos pasos: convertir el nivel limite a [[I]] y despues despejar [[r]] con la potencia acustica conocida.

Primero determinamos la intensidad correspondiente a 85 dB:

Se usa la relacion de nivel con objetivo de 85 dB.

Resolviendo para I:

La intensidad objetivo resultante es `3.16 x 10^-4 W/m^2`.

Ahora usando la relacion de intensidad con distancia:

{{f:intensidad_potencia}}

Resolviendo para r:

Se despeja [[r]] en la relacion de intensidad desde potencia.

Sustituyendo la potencia de 0.5 W y la intensidad objetivo de 3.16 por diez a la menos 4 W/m²:

Sustituyendo [[P]] de 0.5 W e [[I]] de `3.16 x 10^-4 W/m^2`:

Operacion: 0.5 / (0.00397) = 125.9

La raiz cuadrada da [[r]] de 11.2 m.

Para la zona de control a 70 dB:

Para 70 dB, la intensidad objetivo es `10^-5 W/m^2`.

Con esa intensidad, la distancia de control se obtiene de nuevo con la relacion de intensidad desde potencia.

Operacion: 0.5 / (1.257 × 10⁻⁴) = 3979

La distancia resultante es 63.1 m.

## Interpretacion

Las estimaciones indican que la senalizacion de zona de proteccion obligatoria debe establecerse a aproximadamente 12 metros del martillo neumatico. Mas cerca de esta distancia, el nivel excede 85 dB, requiriendo uso obligatorio de tapones o auriculares antiruido segun la normativa laboral. Este perimetro es razonablemente manejable en una obra tipica, permitiendo la operacion del equipo con las protecciones adecuadas.

El puesto de control administrativo deberia ubicarse a mas de 63 metros del punto de operacion del martillo para mantener niveles inferiores a 70 dB, equivalente a conversacion normal y considerado confortable para trabajo de oficina o supervision sin proteccion auditiva. Esta distancia es significativamente mayor y puede requerir:

- Ubicar la caseta de control en una posicion alejada del centro de actividad
- Utilizar barreras acusticas parciales que reduzcan efectivamente la potencia percibida
- Establecer horarios rotativos donde el martillo no opere continuamente cerca del puesto fijo

La reduccion de 15 dB (de 85 a 70 dB) requiere aumentar la distancia por un factor de aproximadamente 5.6 (de 11 m a 63 m), consistente con la ley del inverso del cuadrado donde reducir a la mitad la intensidad fisica requiere multiplicar por sqrt(2) la distancia, y hacerlo 30 veces (diferencia de 15 dB) requiere multiplicar por sqrt(30) ≈ 5.5.

Si el supervisor debe permanecer mas cerca por razones operativas, alternativas incluyen colocar una barrera acustica que reduzca efectivamente la potencia aparente del emisor, o programar los trabajos con martillo durante periodos donde el puesto de control este desatendido o reubicado temporalmente.
