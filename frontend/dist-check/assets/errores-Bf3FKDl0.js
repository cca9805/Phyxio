const e=`\uFEFF# Errores comunes en rotacion con rozamiento\r
\r
## Errores conceptuales\r
\r
### Error 1. Tratar todo frenado como un solo mecanismo\r
#### Por que parece correcto\r
Porque en muchos problemas introductorios se usa una sola ley efectiva y el calculo parece cerrar con rapidez.\r
#### Por que es incorrecto\r
En sistemas reales el frenado puede ser casi seco en una zona y mas viscoso en otra. Si se mezclan ambos mecanismos, se interpretan mal [[mu_k]], [[b_rot]] y la forma temporal de [[omega]].\r
#### Senal de deteccion\r
La curva cambia de pendiente con la velocidad o el ajuste semilog solo funciona en una parte del registro.\r
#### Correccion conceptual\r
Preguntar primero que mecanismo domina y solo despues elegir torque_coulomb, torque_viscoso o un modelo mixto.\r
#### Mini-ejemplo\r
Si la parada parece lineal al inicio pero se suaviza despues, no conviene defender un torque seco unico para toda la maniobra.\r
\r
### Error 2. Confundir ajuste numerico con explicacion fisica\r
#### Por que parece correcto\r
Porque una curva que se acerca a los datos produce la sensacion de que el problema ya esta resuelto.\r
#### Por que es incorrecto\r
Un ajuste puede ser bueno en una ventana corta y aun asi exigir parametros absurdos o una evolucion de energia imposible en frenado pasivo.\r
#### Senal de deteccion\r
Aparecen [[mu_k]] o [[b_rot]] poco plausibles, o [[K_rot]] no disminuye como deberia.\r
#### Correccion conceptual\r
Exigir signos coherentes, dominio de validez y una historia causal clara para el torque disipativo.\r
#### Mini-ejemplo\r
Si el modelo encaja pero predice energia creciente sin motor, el problema no esta bien explicado aunque el error numerico sea pequeno.\r
\r
## Errores de modelo\r
\r
### Error 3. Imponer rozamiento seco cuando domina el termino viscoso\r
#### Por que parece correcto\r
Porque una desaceleracion visible suele hacer pensar en un torque casi constante.\r
#### Por que es incorrecto\r
Si el sistema esta lubricado, la resistencia puede depender de la propia velocidad y no de un [[mu_k]] efectivo constante.\r
#### Senal de deteccion\r
El modelo seco reproduce mal la curvatura temporal o exige un [[mu_k]] irreal para el material.\r
#### Correccion conceptual\r
Comparar el caso con torque_viscoso y revisar si la forma de [[omega]] se acerca a un decaimiento_exponencial.\r
#### Mini-ejemplo\r
Un rodillo que frena muy rapido al inicio y mas lento despues suele pedir un termino viscoso antes que una zapata seca ideal.\r
\r
### Error 4. Olvidar el radio efectivo del contacto\r
#### Por que parece correcto\r
Porque el estudiante recuerda la fuerza de rozamiento pero no siempre recuerda que el efecto dinamico depende del brazo respecto al eje.\r
#### Por que es incorrecto\r
Sin R no se calcula bien el torque y se distorsiona toda la prediccion de [[alpha]] y de energia.\r
#### Senal de deteccion\r
La cuenta usa [[mu_k]] y [[N_normal]] pero nunca identifica donde actua la fuerza.\r
#### Correccion conceptual\r
Escribir primero el brazo mecanico del contacto y luego aplicar torque_coulomb.\r
#### Mini-ejemplo\r
La misma fuerza tangencial no frena igual si actua a 2 cm del eje que si actua a 20 cm.\r
\r
## Errores matematicos\r
\r
### Error 5. Mezclar rpm con rad/s\r
#### Por que parece correcto\r
Porque ambos numeros describen "velocidad de giro" y el valor puede seguir pareciendo razonable a simple vista.\r
#### Por que es incorrecto\r
Las formulas dinamicas y energeticas del leaf usan [[omega]] en unidades coherentes; usar rpm sin convertir deforma torque, potencia y energia.\r
#### Senal de deteccion\r
No aparece el factor de conversion correspondiente cuando el dato original esta en rpm.\r
#### Correccion conceptual\r
Convertir primero y solo despues sustituir en energia_rotacional o en la ecuacion dinamica.\r
#### Mini-ejemplo\r
Si alguien usa 300 rpm como si fueran 300 rad/s, la energia sale exagerada por mucho aunque el algebra sea impecable.\r
\r
### Error 6. Redondear demasiado pronto\r
#### Por que parece correcto\r
Porque simplifica la cuenta y da sensacion de orden.\r
#### Por que es incorrecto\r
En ventanas cortas, pequenos cambios en [[alpha]] o [[b_rot]] alteran bastante la prediccion posterior de [[omega]].\r
#### Senal de deteccion\r
El resultado cambia mucho al repetir la cuenta con una o dos cifras mas.\r
#### Correccion conceptual\r
Mantener precision intermedia y redondear solo al final de la interpretacion.\r
#### Mini-ejemplo\r
Un [[b_rot]] truncado demasiado pronto puede hacer que un ajuste viscoso parezca peor de lo que realmente es.\r
\r
## Errores de interpretacion\r
\r
### Error 7. Aceptar un frenado pasivo con aumento de energia\r
#### Por que parece correcto\r
Porque el estudiante mira la ecuacion final y supone que el signo ya esta bien resuelto.\r
#### Por que es incorrecto\r
Si no hay aporte motor, un aumento sostenido de [[K_rot]] contradice la idea misma de disipacion.\r
#### Senal de deteccion\r
El producto [[tau_roz]] por [[omega]] no representa potencia disipativa negativa o la energia sube en el grafico.\r
#### Correccion conceptual\r
Volver al convenio de signos y verificar que el torque realmente se oponga al movimiento.\r
#### Mini-ejemplo\r
Si un informe afirma que el sistema se frena mientras la energia de giro aumenta, hay un error de modelo o de signos.\r
\r
### Error 8. Extender una ley local a toda la parada\r
#### Por que parece correcto\r
Porque un ajuste inicial bueno da confianza para extrapolar.\r
#### Por que es incorrecto\r
Que una ley funcione al principio no garantiza que siga sirviendo cerca de velocidad baja o en otro regimen.\r
#### Senal de deteccion\r
Los residuos crecen al ampliar la ventana o cambia la pendiente en escala semilog.\r
#### Correccion conceptual\r
Separar tramos y justificar donde deja de ser valido el modelo inicial.\r
#### Mini-ejemplo\r
Una [[alpha]] casi constante durante dos segundos no autoriza a predecir toda la parada sin revisar el cambio de mecanismo.\r
\r
## Regla de autocontrol rapido\r
\r
### Error 9. Resolver sin una secuencia minima de verificacion\r
#### Por que parece correcto\r
Porque parece ahorrar tiempo cuando el ejercicio tiene pocos datos.\r
#### Por que es incorrecto\r
Sin una revision minima, resultados fragiles pueden parecer robustos y terminar en una conclusion tecnica equivocada.\r
#### Senal de deteccion\r
No se puede explicar en una frase por que se eligio el modelo ni donde deja de ser valido.\r
#### Correccion conceptual\r
Seguir siempre esta secuencia: signos, unidades, parametros, mecanismo disipativo, energia y conclusion de validez.\r
#### Mini-ejemplo\r
Una solucion que calcula bien [[alpha]] pero no revisa energia ni dominio de validez aun no esta realmente cerrada.\r
`;export{e as default};
