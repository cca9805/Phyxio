const e=`# Errores en ondas transversales de corte\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que una onda S viaja igual en solidos y fluidos\r
\r
**Por qué parece correcto**\r
\r
Las ondas mecanicas se explican a menudo como perturbaciones que necesitan un medio, y el alumno concluye que cualquier medio material sirve.\r
\r
**Por qué es incorrecto**\r
\r
La onda S necesita [[G_shear]] positivo. Un fluido ideal puede comprimir y expandir, pero no sostener una deformacion elastica de corte de volumen.\r
\r
**Señal de detección**\r
\r
El enunciado habla de liquido, gas o nucleo externo y aun asi se calcula una [[v_s]] finita.\r
\r
**Corrección conceptual**\r
\r
Antes de aplicar formulas, pregunta si el medio recupera elasticamente su forma ante cizalla.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una roca transmite ondas S; el agua transmite ondas de presion, no ondas S elasticas de volumen.\r
\r
### Error 2: Confundir movimiento transversal con transporte lateral de masa\r
\r
**Por qué parece correcto**\r
\r
La particula se mueve de lado, asi que parece natural imaginar que todo el material deriva lateralmente.\r
\r
**Por qué es incorrecto**\r
\r
La propagacion describe avance de fase y energia; las particulas oscilan alrededor del equilibrio.\r
\r
**Señal de detección**\r
\r
La explicacion dice que el bloque de solido se desplaza completo junto con la onda.\r
\r
**Corrección conceptual**\r
\r
Distingue direccion de movimiento local y direccion de propagacion del patron.\r
\r
**Mini-ejemplo de contraste**\r
\r
En una fila elastica, cada punto sube y baja mientras la cresta avanza horizontalmente.\r
\r
## Errores de modelo\r
\r
### Error 3: Usar el modelo continuo cuando la onda ve la microestructura\r
\r
**Por qué parece correcto**\r
\r
La formula de [[v_s]] parece depender solo de propiedades tabuladas del material.\r
\r
**Por qué es incorrecto**\r
\r
Si [[lambda_s]] es comparable con granos, fibras o poros, aparecen dispersion y scattering.\r
\r
**Señal de detección**\r
\r
La velocidad cambia al variar [[f_onda]] aunque el material nominal sea el mismo.\r
\r
**Corrección conceptual**\r
\r
Compara longitud de onda con la escala que se pretende promediar antes de aceptar el continuo.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un ultrasonido de baja frecuencia ve una pieza como homogenea; uno de frecuencia alta puede resolver defectos.\r
\r
### Error 4: Ignorar anisotropia o estratificacion\r
\r
**Por qué parece correcto**\r
\r
Muchos problemas introductorios suponen isotropia sin anunciar sus limites.\r
\r
**Por qué es incorrecto**\r
\r
En cristales, laminados o suelos estratificados, la velocidad depende de direccion y polarizacion.\r
\r
**Señal de detección**\r
\r
Dos componentes transversales llegan con tiempos distintos o la velocidad cambia con el azimut.\r
\r
**Corrección conceptual**\r
\r
Pasa a un modelo anisotropo o multicapa cuando la geometria del material domina la lectura.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una placa compuesta puede transmitir mas rapido a lo largo de las fibras que a traves de ellas.\r
\r
## Errores matemáticos\r
\r
### Error 5: Introducir gigapascales como pascales\r
\r
**Por qué parece correcto**\r
\r
El numero del modulo se copia de una tabla y parece ya estar en unidades cientificas.\r
\r
**Por qué es incorrecto**\r
\r
[[G_shear]] en gigapascales debe convertirse a pascales antes de combinarse con [[rho_medio]].\r
\r
**Señal de detección**\r
\r
La velocidad calculada sale miles de veces menor que la de un solido conocido.\r
\r
**Corrección conceptual**\r
\r
Convierte todo a SI antes de calcular y revisa el orden de magnitud final.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un acero no da una velocidad S de unos pocos metros por segundo; debe estar en kilometros por segundo.\r
\r
### Error 6: Intercambiar rigidez e inercia\r
\r
**Por qué parece correcto**\r
\r
Ambas magnitudes aparecen juntas y el cociente puede invertirse por descuido algebraico.\r
\r
**Por qué es incorrecto**\r
\r
La rigidez acelera la recuperacion; la densidad introduce inercia. Invertirlas cambia la dimension fisica.\r
\r
**Señal de detección**\r
\r
El analisis dimensional no conduce a velocidad o el resultado baja al aumentar la rigidez.\r
\r
**Corrección conceptual**\r
\r
Lee el cociente como restauracion dividida por inercia.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un material mas rigido, con densidad fija, debe aumentar [[v_s]], no reducirla.\r
\r
## Errores de interpretación\r
\r
### Error 7: Leer impedancia transversal como impedancia longitudinal\r
\r
**Por qué parece correcto**\r
\r
Ambas impedancias tienen unidades parecidas y se usan en problemas de interfaces.\r
\r
**Por qué es incorrecto**\r
\r
[[Z_s]] usa [[v_s]] y describe respuesta de corte; la impedancia longitudinal usa una velocidad P.\r
\r
**Señal de detección**\r
\r
Se predicen reflexiones de onda S usando datos de onda P sin justificar conversion de modo.\r
\r
**Corrección conceptual**\r
\r
Asocia cada impedancia con el modo fisico que transporta la energia.\r
\r
**Mini-ejemplo de contraste**\r
\r
En una interfaz solido-solido, la reflexion SH se lee con impedancias de corte.\r
\r
### Error 8: Atribuir energia sin amplitud definida\r
\r
**Por qué parece correcto**\r
\r
La velocidad de propagacion parece suficiente para hablar de una onda mas energetica.\r
\r
**Por qué es incorrecto**\r
\r
La densidad [[u_s]] requiere amplitud [[A_s]] y frecuencia angular [[omega_angular]], no solo velocidad.\r
\r
**Señal de detección**\r
\r
La solucion compara energias sin datos de amplitud o sin una hipotesis armonica.\r
\r
**Corrección conceptual**\r
\r
Separa rapidez de propagacion, que depende del medio, e intensidad, que depende de la excitacion.\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos ondas S en el mismo acero tienen la misma velocidad, pero amplitudes distintas implican energias distintas.\r
\r
## Regla de autocontrol rápido\r
\r
Si el medio no tiene rigidez de corte, no hay onda S elastica de volumen. Si [[v_s]] supera a [[v_p]], revisa datos, unidades o modelo. Si [[lambda_s]] no domina la microestructura, usa un modelo extendido.\r
`;export{e as default};
