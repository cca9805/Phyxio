const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Una rueda de radio\r
\r
{{f:relacion_v_omega}}\r
\r
 gira alrededor de su eje fijo. En el instante estudiado, la velocidad angular es\r
\r
{{f:relacion_v_omega}}\r
\r
 y la aceleración angular es\r
\r
{{f:relacion_v_omega}}\r
\r
.\r
\r
Calcula para un punto situado en el borde: **(a)** la velocidad tangencial [[v_t]]; **(b)** la aceleración tangencial [[a_t]]; **(c)** la aceleración normal (centrípeta) [[a_n]]; **(d)** el módulo de la aceleración total [[a_total]].\r
\r
## Datos\r
\r
| Símbolo | Significado | Valor |\r
|---|---|---|\r
| R | radio de giro del punto | 0{,}40 m |\r
| omega | velocidad angular del sólido | 5{,}0 rad/s |\r
| alpha | aceleración angular del sólido | 2{,}0 rad/s^2 |\r
\r
Sentido positivo: dirección de giro.\r
\r
## Definición del sistema\r
\r
El sistema es la rueda modelada como sólido rígido con eje fijo. La magnitud núcleo del leaf es la velocidad tangencial [[v_t]], que conecta el estado angular del conjunto con el movimiento lineal de cada punto. Las magnitudes derivadas son [[a_t]] (aceleración tangencial), [[a_n]] (aceleración normal centrípeta) y [[a_total]] (módulo de la aceleración total). La hipótesis de sólido rígido garantiza que R es constante y que todos los puntos comparten el mismo estado angular.\r
\r
## Modelo físico\r
\r
Las cuatro relaciones aplicables son la relación velocidad lineal-angular, la relación aceleración tangencial-angular, la relación de aceleración normal y la composición vectorial de aceleraciones. El modelo es válido porque la rueda es rígida y su eje no se desplaza durante el instante analizado.\r
\r
## Justificación del modelo\r
\r
El modelo de sólido rígido es válido porque la deformación elástica de una rueda metálica estándar bajo carga dinámica es del orden de micrómetros para radios de 0,40 m, aproximadamente cien veces menor que la precisión requerida en el cálculo. Se considera que el eje no se traslada porque los cojinetes están correctamente dimensionados para esas cargas. Los efectos aerodinámicos se desprecia a las velocidades del problema (\r
\r
{{f:relacion_v_omega}}\r
\r
,\r
\r
{{f:relacion_v_omega}}\r
\r
): la fuerza de arrastre es inferior al 0,1 % de la fuerza centrípeta. Si la rueda se deformara apreciablemente, \`R\` dependería del tiempo y las relaciones del leaf dejarían de ser exactas; en ese caso habría que integrar la geometría instantánea.\r
\r
## Resolución simbólica\r
\r
**Apartado (a) — velocidad tangencial**:\r
\r
{{f:relacion_v_omega}}\r
\r
**Apartado (b) — aceleración tangencial [[a_t]]**:\r
\r
{{f:relacion_at_alpha}}\r
\r
**Apartado (c) — aceleración normal [[a_n]]**:\r
\r
{{f:aceleracion_normal}}\r
\r
**Apartado (d) — módulo de aceleración total [[a_total]]**:\r
\r
{{f:aceleracion_total_modulo}}\r
\r
## Sustitución numérica\r
\r
Tomando un radio de 0,40 m, una velocidad angular de 5,0 rad/s y una aceleración angular de 2,0 rad/s^2, se obtienen magnitudes lineales coherentes con el régimen de giro moderado del problema. Cada apartado se evalúa con su relación correspondiente y se comprueba que [[a_n]] domina sobre [[a_t]] en este caso.\r
\r
**Apartado (a):**\r
\r
{{f:relacion_v_omega}}\r
\r
**Apartado (b):**\r
\r
{{f:aceleracion_total_modulo}}\r
\r
**Apartado (c):**\r
\r
{{f:aceleracion_normal}}\r
\r
**Apartado (d):**\r
\r
{{f:aceleracion_total_modulo}}\r
\r
## Validación dimensional\r
\r
La dimensión de [[v_t]] es m/s porque combina velocidad angular (1/s) con longitud (m). Tanto [[a_t]] como [[a_n]] quedan en m/s^2, y la combinación cuadrática para [[a_total]] conserva también m/s^2. No aparece ninguna suma de magnitudes incompatibles, por lo que el cierre dimensional es consistente.\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
## Interpretación física\r
\r
El resultado más revelador del problema es la comparación entre [[a_n]] y [[a_t]]: la aceleración normal vale 10{,}0 m/s^2 mientras que la aceleración tangencial es solo 0{,}80 m/s^2, una diferencia de factor 12,5. Esto ocurre porque [[a_n]] escala con omega^2 mientras que [[a_t]] escala con alpha linealmente; en consecuencia, en regímenes de rotación moderada y más todavía en regímenes altos, [[a_n]] domina sobre [[a_t]] de forma aplastante. La aceleración total [[a_total]] ≈ 10,03 m/s² es prácticamente igual a [[a_n]], lo que significa que el vector aceleración apunta casi directamente hacia el eje.\r
\r
Esta jerarquía tiene una consecuencia práctica inmediata: en la mayoría de los sistemas rotativos en régimen de crucero (alpha ≈ 0), [[a_t]] es despreciable y [[a_total]] ≈ [[a_n]] = omega^2·R. Solo durante las fases de arranque o frenado, donde alpha es grande, [[a_t]] llega a competir con [[a_n]]. En el diseño de estructuras rotativas —ruedas, turbinas, discos— el criterio de resistencia debe cubrir principalmente [[a_n]] en régimen permanente, pero verificar también [[a_t]] máxima durante los transitorios.\r
\r
La relación entre velocidad lineal y angular encierra además la razón por la que los puntos más alejados del eje son los que sufren mayores aceleraciones y mayores velocidades: el radio actúa como amplificador lineal de cualquier magnitud angular. Cambiar un punto de R de 0,40 m a R de 0,80 m duplicaría [[v_t]], cuadruplicaría [[a_n]] y duplicaría [[a_t]], aunque omega y alpha sean los mismos para todo el sólido rígido.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
Una centrífuga de laboratorio tiene un rotor de radio\r
\r
{{f:relacion_v_omega}}\r
\r
. El operador programa\r
\r
{{f:relacion_v_omega}}\r
\r
 (≈ 955 rpm) como velocidad de crucero y observa que el rotor alcanza esa velocidad desde el reposo en\r
\r
{{f:relacion_v_omega}}\r
\r
con aceleración angular prácticamente constante.\r
\r
## Estimación física\r
\r
Antes de calcular, un orden de magnitud: a velocidad de crucero\r
\r
{{f:relacion_v_omega}}\r
\r
. Eso es lo que soportan las muestras en los tubos. Durante el arranque,\r
\r
{{f:relacion_v_omega}}\r
\r
, lo que da\r
\r
{{f:relacion_v_omega}}\r
\r
. La [[a_t]] de arranque es 500 veces menor que la [[a_n]] de crucero, confirmando que el criterio de diseño del rotor es [[a_n]], no [[a_t]].\r
\r
En el instante de arranque, cuando\r
\r
{{f:relacion_v_omega}}\r
\r
(mitad del crucero):\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
{{f:aceleracion_total_modulo}}\r
\r
La [[a_t]] contribuye menos del 1 % a [[a_total]] incluso a mitad de velocidad.\r
\r
## Interpretación\r
\r
La diferencia entre [[a_n]] y [[a_t]] explica por qué una centrífuga puede separar partículas por densidad con tanta eficacia: la aceleración efectiva que experimenta cada muestra es casi enteramente centrípeta, equivalente a más de 100 veces la gravedad terrestre en este ejemplo. El arranque lento (5 s) es más una elección de confort mecánico —reducir vibraciones— que una limitación de [[a_t]] sobre la muestra, ya que [[a_t]] es en todo momento insignificante frente a [[a_n]]. Si el fabricante quisiera duplicar la capacidad de separación debería cuadruplicar omega o duplicar R, pues ambas opciones elevan [[a_n]] = omega^2·R; en la práctica se prefiere aumentar omega porque duplicar R aumentaría el tamaño y la masa del rotor cuadráticamente.`;export{a as default};
