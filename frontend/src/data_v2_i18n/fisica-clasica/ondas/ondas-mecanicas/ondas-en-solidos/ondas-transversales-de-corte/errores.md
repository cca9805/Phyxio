## Errores conceptuales


### Error 1: Creer que una onda S viaja igual en solidos y fluidos

**Por qué parece correcto**

Las ondas mecanicas se explican a menudo como perturbaciones que necesitan un medio, y el alumno concluye que cualquier medio material sirve.

**Por qué es incorrecto**

La onda S necesita [[modulo_de_cizalla]] positivo. Un fluido ideal puede comprimir y expandir, pero no sostener una deformacion elastica de corte de volumen.

**Señal de detección**

El enunciado habla de liquido, gas o nucleo externo y aun asi se calcula una [[v_s]] finita.

**Corrección conceptual**

Antes de aplicar formulas, pregunta si el medio recupera elasticamente su forma ante cizalla.

**Mini-ejemplo de contraste**

Una roca transmite ondas S; el agua transmite ondas de presion, no ondas S elasticas de volumen.


### Error 2: Confundir movimiento transversal con transporte lateral de masa

**Por qué parece correcto**

La particula se mueve de lado, asi que parece natural imaginar que todo el material deriva lateralmente.

**Por qué es incorrecto**

La propagacion describe avance de fase y energia; las particulas oscilan alrededor del equilibrio.

**Señal de detección**

La explicacion dice que el bloque de solido se desplaza completo junto con la onda.

**Corrección conceptual**

Distingue direccion de movimiento local y direccion de propagacion del patron.

**Mini-ejemplo de contraste**

En una fila elastica, cada punto sube y baja mientras la cresta avanza horizontalmente.

## Errores de modelo


### Error 3: Usar el modelo continuo cuando la onda ve la microestructura

**Por qué parece correcto**

La formula de [[v_s]] parece depender solo de propiedades tabuladas del material.

**Por qué es incorrecto**

Si [[lambda_s]] es comparable con granos, fibras o poros, aparecen dispersion y scattering.

**Señal de detección**

La velocidad cambia al variar [[f_onda]] aunque el material nominal sea el mismo.

**Corrección conceptual**

Compara longitud de onda con la escala que se pretende promediar antes de aceptar el continuo.

**Mini-ejemplo de contraste**

Un ultrasonido de baja frecuencia ve una pieza como homogenea; uno de frecuencia alta puede resolver defectos.


### Error 4: Ignorar anisotropia o estratificacion

**Por qué parece correcto**

Muchos problemas introductorios suponen isotropia sin anunciar sus limites.

**Por qué es incorrecto**

En cristales, laminados o suelos estratificados, la velocidad depende de direccion y polarizacion.

**Señal de detección**

Dos componentes transversales llegan con tiempos distintos o la velocidad cambia con el azimut.

**Corrección conceptual**

Pasa a un modelo anisotropo o multicapa cuando la geometria del material domina la lectura.

**Mini-ejemplo de contraste**

Una placa compuesta puede transmitir mas rapido a lo largo de las fibras que a traves de ellas.

## Errores matemáticos


### Error 5: Introducir gigapascales como pascales

**Por qué parece correcto**

El numero del modulo se copia de una tabla y parece ya estar en unidades cientificas.

**Por qué es incorrecto**

[[modulo_de_cizalla]] en gigapascales debe convertirse a pascales antes de combinarse con [[rho_medio]].

**Señal de detección**

La velocidad calculada sale miles de veces menor que la de un solido conocido.

**Corrección conceptual**

Convierte todo a SI antes de calcular y revisa el orden de magnitud final.

**Mini-ejemplo de contraste**

Un acero no da una velocidad S de unos pocos metros por segundo; debe estar en kilometros por segundo.


### Error 6: Intercambiar rigidez e inercia

**Por qué parece correcto**

Ambas magnitudes aparecen juntas y el cociente puede invertirse por descuido algebraico.

**Por qué es incorrecto**

La rigidez acelera la recuperacion; la densidad introduce inercia. Invertirlas cambia la dimension fisica.

**Señal de detección**

El analisis dimensional no conduce a velocidad o el resultado baja al aumentar la rigidez.

**Corrección conceptual**

Lee el cociente como restauracion dividida por inercia.

**Mini-ejemplo de contraste**

Un material mas rigido, con densidad fija, debe aumentar [[v_s]], no reducirla.

## Errores de interpretación


### Error 7: Leer impedancia transversal como impedancia longitudinal

**Por qué parece correcto**

Ambas impedancias tienen unidades parecidas y se usan en problemas de interfaces.

**Por qué es incorrecto**

[[impedancia_transversal]] usa [[v_s]] y describe respuesta de corte; la impedancia longitudinal usa una velocidad P.

**Señal de detección**

Se predicen reflexiones de onda S usando datos de onda P sin justificar conversion de modo.

**Corrección conceptual**

Asocia cada impedancia con el modo fisico que transporta la energia.

**Mini-ejemplo de contraste**

En una interfaz solido-solido, la reflexion SH se lee con impedancias de corte.


### Error 8: Atribuir energia sin amplitud definida

**Por qué parece correcto**

La velocidad de propagacion parece suficiente para hablar de una onda mas energetica.

**Por qué es incorrecto**

La densidad [[u_s]] requiere amplitud [[amplitud_transversal]] y frecuencia angular [[omega_angular]], no solo velocidad.

**Señal de detección**

La solucion compara energias sin datos de amplitud o sin una hipotesis armonica.

**Corrección conceptual**

Separa rapidez de propagacion, que depende del medio, e intensidad, que depende de la excitacion.

**Mini-ejemplo de contraste**

Dos ondas S en el mismo acero tienen la misma velocidad, pero amplitudes distintas implican energias distintas.

## Regla de autocontrol rápido

Si el medio no tiene rigidez de corte, no hay onda S elastica de volumen. Si [[v_s]] supera a [[v_p]], revisa datos, unidades o modelo. Si [[lambda_s]] no domina la microestructura, usa un modelo extendido.