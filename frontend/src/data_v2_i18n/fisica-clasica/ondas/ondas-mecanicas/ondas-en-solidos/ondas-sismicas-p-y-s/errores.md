## Errores conceptuales


### Error 1: Creer que las ondas S se propagan en liquidos

**Por que parece correcto**

El alumno generaliza la experiencia cotidiana: las olas del mar (que son superficiales) y el sonido en el agua (que son ondas P) sugieren que "el agua transmite ondas". La confusion surge al no distinguir entre ondas de compresion y ondas de cizalla.

**Por que es incorrecto**

Las ondas S requieren un modulo de cizalla [[modulo_de_cizalla]] distinto de cero. Los fluidos ideales no resisten cizalla: [[modulo_de_cizalla]] es exactamente cero, lo que hace que [[v_s]] se anule. Solo las ondas P (que usan [[modulo_de_compresibilidad]]) sobreviven en un fluido.

**Senal de deteccion**

Si en un calculo aparece [[v_s]] finita para un medio declarado como liquido, el alumno ha asumido incorrectamente un [[modulo_de_cizalla]] distinto de cero.

**Correccion conceptual**

En cualquier fluido, [[modulo_de_cizalla]] es cero y [[v_s]] es cero. Las ondas S solo existen en solidos. Las ondas en el agua son P (compresion) o superficiales (Rayleigh, Love).

**Mini-ejemplo de contraste**

Agua: [[modulo_de_compresibilidad]] de 2.2 GPa, [[modulo_de_cizalla]] nulo, densidad 1000 kg/m3. Aplicando la formula de [[v_s]] con [[modulo_de_cizalla]] cero se obtiene [[v_s]] cero: la onda S no existe. Solo [[v_p]] da 1483 m/s.


### Error 2: Confundir velocidad en barra con velocidad de onda P en medio infinito

**Por que parece correcto**

Ambas son "velocidades de onda longitudinal en solido" y ambas dependen de un modulo elastico y la densidad. El alumno asocia la formula de barra (raiz de E entre rho) con la de onda P (que incluye [[modulo_de_compresibilidad]] mas 4/3 de [[modulo_de_cizalla]]).

**Por que es incorrecto**

La formula de barra usa el modulo de Young porque la barra se deforma libremente en la direccion transversal. En medio infinito la deformacion lateral esta confinada, por lo que aparece [[modulo_de_compresibilidad]] mas el termino de cizalla. Para acero, la velocidad en barra es 5100 m/s pero la de la onda P en medio infinito es 5960 m/s (un 16 por ciento mas).

**Senal de deteccion**

El alumno usa solo el modulo de Young en la formula de onda P, o usa [[modulo_de_compresibilidad]] mas [[modulo_de_cizalla]] para una barra. Los resultados difieren un 10–20 por ciento de los valores tabulados.

**Correccion conceptual**

En barra esbelta: raiz de E entre rho. En medio infinito: raiz de ([[modulo_de_compresibilidad]] mas 4/3 [[modulo_de_cizalla]]) entre [[rho_medio]]. Son formulas distintas para geometrias distintas.

**Mini-ejemplo de contraste**

Acero: usando solo E (210 GPa) y rho (7850) da 5170 m/s (barra). Usando K (160 GPa) mas 4/3 por G (80 GPa) da raiz de (266.7 GPa / 7850) que es 5830 m/s (onda P). La diferencia es de 660 m/s.

## Errores de modelo


### Error 3: Asumir propagacion rectilínea en distancias grandes

**Por que parece correcto**

Para sismos locales (menos de 100 km), la trayectoria es aproximadamente recta y la formula directa de [[delta_t_ps]] funciona bien. El alumno extrapola esto a distancias mayores.

**Por que es incorrecto**

La Tierra no es homogenea: la velocidad aumenta con la profundidad, lo que curva las trayectorias hacia arriba (ley de Snell). A mas de 200 km, las ondas siguen arcos y las dromocronas dejan de ser lineales. Usar la formula lineal de [[delta_t_ps]] a 1000 km de distancia produce errores superiores al 30 por ciento.

**Senal de deteccion**

Si la distancia estimada a partir de [[delta_t_ps]] con velocidades constantes difiere mucho de la distancia real (por GPS o triangulacion con multiples estaciones), el modelo homogeneo ya no es valido.

**Correccion conceptual**

Para distancias mayores de 200 km, usar tablas de tiempos de viaje (dromocronas) calculadas con modelos de velocidad radial (PREM, IASP91). La formula lineal solo es valida para sismos locales.

**Mini-ejemplo de contraste**

Sismo a 500 km. Con modelo homogeneo ([[v_p]] 6000 m/s, [[v_s]] 3460 m/s): [[delta_t_ps]] da 61.3 s, distancia estimada 500 km. Pero las dromocronas reales (modelo IASP91) dan [[delta_t_ps]] de 54 s para 500 km. Usar 61.3 s en tablas reales estimaria 570 km (error del 14 por ciento).


### Error 4: Ignorar el efecto del coeficiente de Poisson sobre el cociente de velocidades

**Por que parece correcto**

El alumno calcula [[v_p]] y [[v_s]] por separado y asume que su cociente es constante (por ejemplo, la raiz de 3). No percibe que el [[ratio_vp_vs]] depende del material.

**Por que es incorrecto**

El [[ratio_vp_vs]] depende directamente de [[nu_poisson]], que varia entre 0 y 0.5 segun el material y su estado de saturacion. En roca seca [[nu_poisson]] ronda 0.25 (ratio 1.73), pero en roca saturada puede subir a 0.35 (ratio 2.1).

**Senal de deteccion**

El alumno usa un ratio fijo de 1.73 para todos los materiales sin verificar el coeficiente de Poisson correspondiente.

**Correccion conceptual**

Siempre calcular [[ratio_vp_vs]] a partir de las velocidades medidas o del [[nu_poisson]] tabulado para el material especifico. La raiz de 3 solo es valida para [[nu_poisson]] exactamente 0.25.

**Mini-ejemplo de contraste**

Roca seca con [[nu_poisson]] de 0.25: [[ratio_vp_vs]] es la raiz de 3, aproximadamente 1.73. Misma roca saturada con [[nu_poisson]] de 0.35: [[ratio_vp_vs]] es la raiz de (2×0.65)/(1-0.7), es decir raiz de (1.3/0.3), que da 2.08. La diferencia es del 20 por ciento.

## Errores matemáticos


### Error 5: Olvidar el factor 4/3 en la formula de velocidad P

**Por que parece correcto**

El alumno recuerda que [[v_p]] depende de [[modulo_de_compresibilidad]] y [[modulo_de_cizalla]] pero omite el coeficiente 4/3 delante de [[modulo_de_cizalla]]. Parece logico sumar los dos modulos directamente.

**Por que es incorrecto**

El factor 4/3 proviene de la relacion tensorial entre deformacion volumetrica y deformacion de cizalla en la ecuacion de movimiento de onda elastica. Omitirlo cambia el resultado significativamente.

**Senal de deteccion**

El valor de [[v_p]] calculado es ligeramente inferior al esperado (porque falta la contribucion completa de [[modulo_de_cizalla]]). Tambien el [[ratio_vp_vs]] sale menor del esperado.

**Correccion conceptual**

La formula correcta es raiz de ([[modulo_de_compresibilidad]] mas 4/3 [[modulo_de_cizalla]]) entre [[rho_medio]]. El 4/3 no es negociable.

**Mini-ejemplo de contraste**

Con [[modulo_de_compresibilidad]] de 75 GPa y [[modulo_de_cizalla]] de 32 GPa: correcto, K mas 4/3 G da 117.7 GPa. Incorrecto (sin 4/3), K mas G da 107 GPa. La diferencia en [[v_p]] es de 300 m/s (un 5 por ciento).


### Error 6: Invertir las velocidades al calcular delta_t

**Por que parece correcto**

El alumno escribe la diferencia de tiempos como d por (1/[[v_p]] menos 1/[[v_s]]), obteniendo un valor negativo que luego "corrige" con valor absoluto.

**Por que es incorrecto**

La onda P llega primero, asi que su tiempo de viaje es menor. La formula correcta es d por (1/[[v_s]] menos 1/[[v_p]]), que es positiva. Invertir el orden da el signo contrario y puede causar confusion sobre el significado fisico.

**Senal de deteccion**

Se obtiene [[delta_t_ps]] negativo antes de aplicar valor absoluto. El alumno deberia preguntarse por que el signo sale mal.

**Correccion conceptual**

La formula es [[delta_t_ps]] igual a [[d_foco]] por (1/[[v_s]] menos 1/[[v_p]]). La S llega despues (tiempo mayor), luego su inverso de velocidad va primero en la resta para dar positivo.

**Mini-ejemplo de contraste**

Con [[d_foco]] de 100 km, [[v_p]] de 6000 m/s y [[v_s]] de 3460 m/s. Correcto: 100000 por (1/3460 menos 1/6000) da 12.2 s. Incorrecto (invertido): 100000 por (1/6000 menos 1/3460) da menos 12.2 s.

## Errores de interpretación


### Error 7: Interpretar ausencia de ondas S como ausencia de sismo

**Por que parece correcto**

Si un sismograma no muestra fase S, el alumno puede pensar que no hubo terremoto o que el instrumento fallo.

**Por que es incorrecto**

La ausencia de ondas S indica que la trayectoria ha atravesado una zona liquida (nucleo externo). El sismo si ocurrio, pero las ondas S fueron absorbidas. Es justamente la **evidencia** de que hay un fluido en el camino.

**Senal de deteccion**

El sismograma muestra ondas P claras pero no S en estaciones situadas en la zona de sombra (104–140 grados). En estaciones mas cercanas si aparecen las S.

**Correccion conceptual**

La ausencia de S no significa ausencia de sismo. Significa que entre foco y estacion hay una capa de [[modulo_de_cizalla]] nulo (fluido). Es un dato geofisico valioso, no un fallo instrumental.

**Mini-ejemplo de contraste**

Sismo en Japon, estacion en America del Sur (distancia angular 130 grados). La estacion registra P (refractada por el nucleo) pero no S. Conclusion correcta: el nucleo externo es liquido. Conclusion incorrecta: el sismo fue demasiado debil para generar S.


### Error 8: Creer que el cociente [[v_p]]/[[v_s]] es siempre la raiz de 3

**Por que parece correcto**

Muchos manuales introductorios dan el valor 1.73 como "tipico" y el alumno lo memoriza como universal.

**Por que es incorrecto**

El valor 1.73 solo corresponde a [[nu_poisson]] de 0.25. En sedimentos arcillosos saturados [[nu_poisson]] puede ser 0.4, dando [[ratio_vp_vs]] de 2.45. En materiales auxeticos, [[ratio_vp_vs]] puede bajar de 1.5.

**Senal de deteccion**

El alumno aplica 1.73 como constante universal para estimar [[v_s]] a partir de [[v_p]] (o viceversa) sin verificar el material.

**Correccion conceptual**

El [[ratio_vp_vs]] depende del material y su estado. Siempre debe calcularse a partir de [[nu_poisson]] medido o tabulado, o medirse directamente comparando tiempos de llegada P y S.

**Mini-ejemplo de contraste**

Granito seco: [[ratio_vp_vs]] cercano a 1.73. Arcilla saturada: [[ratio_vp_vs]] de 2.4. Si se usa 1.73 para la arcilla y [[v_p]] es 2000 m/s, se estima [[v_s]] de 1155 m/s. El valor real es 833 m/s. Error del 39 por ciento.

## Regla de autocontrol rápido

Antes de dar por valido un calculo de ondas sismicas, verificar estos tres puntos:

1. **[[v_p]] mayor que [[v_s]]**: siempre, sin excepcion en un solido real. Si salen al reves, hay un error en los modulos elasticos.
2. **[[ratio_vp_vs]] entre 1.4 y 2.5 para rocas**: valores fuera de este rango son sospechosos y requieren revision.
3. **[[delta_t_ps]] positivo y del orden correcto**: para sismos locales (menos de 100 km), [[delta_t_ps]] debe ser menor de 20 s. Para telesismos (miles de km), puede ser de varios minutos.