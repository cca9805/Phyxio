const e=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una piedra se suelta desde el reposo en el borde de un acantilado de 45 m de altura [[h]] sobre el mar. Toma el sentido positivo hacia arriba, 45 m y 0, y usa 9,8 m/s².\r
\r
Calcula: **(a)** el tiempo [[t]] que tarda en llegar al agua; **(b)** la velocidad [[v]] con que impacta; **(c)** la posición a los 2 s tras ser soltada; **(d)** verifica la velocidad de impacto mediante \`la relacion correspondiente.\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
## Datos\r
\r
| Símbolo | Significado | Valor |\r
|---|---|---|\r
| $h$ | altura del acantilado | $45\\;\\text{m}$ |\r
| $y_0$ | posición vertical [[y]] inicial [[y0]] | $45\\;\\text{m}$ |\r
| $v_0$ | velocidad inicial [[v0]] | $0\\;\\text{m/s}$ (soltada desde el reposo) |\r
| $g$ | aceleración gravitatoria | $9{,}8\\;\\text{m/s}^2$ |\r
| $y_\\text{suelo}$ | posición del agua (referencia) | $0\\;\\text{m}$ |\r
| $t_c$ | instante del apartado (c) | $2{,}0\\;\\text{s}$ |\r
\r
Sentido positivo: hacia arriba.\r
\r
## Definición del sistema\r
\r
El sistema es la piedra modelada como partícula puntual en movimiento vertical bajo gravedad [[g]] . Las magnitudes núcleo son h (altura del acantilado), [[y0]] (posición inicial en el eje vertical), [[v0]] (velocidad inicial nula), v (velocidad instantánea), g (aceleración gravitatoria), t (tiempo), y\` (posición vertical) y [[dy]] (desplazamiento vertical [[dy]] neto). La aceleración es $-g$ (hacia abajo) en todo el trayecto.\r
\r
## Modelo físico\r
\r
 [[h_max]] [[t_sub]] \r
\r
\r
El modelo es caída libre con 0. Las cuatro relaciones del leaf que se aplican son la relacion correspondiente (apartado a), la relacion correspondiente (apartado b), la relacion correspondiente (apartado c) y la relacion correspondiente (apartado d). El modelo es válido porque la resistencia del aire es despreciable para una piedra en ese rango de alturas y velocidades, y $g$ se mantiene constante.\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
{{f:caida_libre_velocidad}}\r
\r
{{f:caida_libre_posicion}}\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
## Justificación del modelo\r
\r
La piedra es densa y compacta (densidad ≫ densidad del aire), por lo que la fuerza de arrastre aerdinámico F_D ≈ (1)/(2)ρ_aire C_D A v² es despreciable frente al peso $mg$ a las velocidades alcanzadas (≤ 30 m/s). Para estimar la corrección: con C_D ≈ 0,5, A ≈ 10^-3 m² y ρ_aire ≈ 1,2 kg/m³, la desaceleración por rozamiento a 30 m/s es sim 0,03 m/s², frente a 9,8 m/s²: menos del 0,3 %. La altura de 45 m está muy por debajo de los límites donde $g$ varía de forma apreciable (la variación de $g$ entre el suelo y 45 m es de orden $10^{-5}\\;\\text{m/s}^2$, totalmente irrelevante). Por tanto, modelar el sistema como partícula en caída libre con $g$ constante introduce un error inferior al 1 % en todas las magnitudes calculadas. Si el objeto fuera ligero (pluma, hoja de papel) o si la altura fuera del orden de kilómetros, habría que incorporar resistencia del aire o variación de $g$ respectivamente.\r
\r
## Resolución simbólica\r
\r
{{f:caida_libre_tiempo_subida}}\r
\r
\r
{{f:caida_libre_altura_maxima}}\r
\r
\r
**Apartado (a) — tiempo de caída** (la relacion correspondiente, válida para 0):\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
**Apartado (b) — velocidad de impacto** la relacion correspondiente:\r
\r
{{f:caida_libre_velocidad}}\r
\r
\r
\r
(El signo negativo indica dirección hacia abajo, coherente con el sentido positivo elegido.)\r
\r
**Apartado (c) — posición a $t_c$** la relacion correspondiente:\r
\r
{{f:caida_libre_posicion}}\r
\r
\r
\r
**Apartado (d) — verificación** la relacion correspondiente:\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
\r
## Sustitución numérica\r
\r
**Apartado (a):**\r
\r
\r
**Apartado (b):**\r
\r
\r
La velocidad de impacto es $29{,}7\\;\\text{m/s}$ hacia abajo (≈ 107 km/h).\r
\r
**Apartado (c):**\r
\r
\r
A los 2 s la piedra ha caído 19,6 m y se encuentra a 25,4 m sobre el agua.\r
\r
**Apartado (d):**\r
\r
\r
## Validación dimensional\r
\r
El tiempo conserva dimensi?n temporal porque procede de una ra?z de longitud dividida por aceleraci?n. La velocidad queda en m/s, la posici?n mantiene unidades de longitud y Torricelli compara t?rminos con dimensi?n de velocidad al cuadrado.\r
\r
\r
## Interpretación física\r
\r
El apartado (a) aplica la relacion correspondiente, que solo es válida cuando 0: bajo esta condición, el tiempo de caída crece como la raíz cuadrada de la altura, lo que explica por qué duplicar la altura no duplica el tiempo (se multiplica por √(2) ≈ 1,41). El apartado (b) muestra que la relacion correspondiente es lineal en $t$: la velocidad crece a razón de 9,8 m/s por cada segundo, y tras 3 s la piedra alcanza casi 30 m/s. El apartado (c) pone en evidencia la dependencia cuadrática de la posición con el tiempo: en los primeros 2 s (66 % del tiempo de vuelo) la piedra recorre solo 19,6 m (44 % de la altura), lo que ilustra que la caída se acelera progresivamente. El apartado (d) confirma el resultado con la relacion correspondiente, que elimina el tiempo y conecta directamente velocidad y posición; la concordancia entre ambos métodos valida la consistencia interna del modelo.\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
{{f:caida_libre_velocidad}}\r
\r
{{f:caida_libre_torricelli}}\r
\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Para estimar la profundidad de un pozo sin medidor, se deja caer una piedra desde el borde y se cronometra el tiempo hasta oír el impacto con el agua. El cronómetro registra 2,6 s (ignorando el tiempo de propagación del sonido, que es una aproximación válida si el pozo no supera los 50 m).\r
\r
## Estimación física\r
\r
Con la relacion correspondiente despejando $h$:\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
\r
\r
Si el sonido tarda aproximadamente t_sonido → 33 m/340 m/s ≈ 0,10 s en recorrer el pozo, el tiempo real de caída es t ≈ 2,5 s, lo que reduce $h$ a unos 31 m: la corrección por sonido es pequeña pero no despreciable en pozos profundos.\r
\r
## Interpretación\r
\r
La clave de este método es que la relacion correspondiente transforma una medida de tiempo (sencilla de hacer con un cronómetro) en una estimación de longitud (difícil de medir directamente en un pozo). La incertidumbre principal proviene de la reacción del cronometrador (±0,2 s típicamente) y del tiempo de propagación del sonido ignorado. Para pozos de más de 80 m, el retraso sonoro supera los 0,24 s y la sobreestimación de la profundidad se vuelve significativa; en ese caso habría que resolver el sistema de ecuaciones que incluye ambos tiempos.\r
\r
{{f:caida_libre_tiempo_vuelo}}\r
\r
`;export{e as default};
