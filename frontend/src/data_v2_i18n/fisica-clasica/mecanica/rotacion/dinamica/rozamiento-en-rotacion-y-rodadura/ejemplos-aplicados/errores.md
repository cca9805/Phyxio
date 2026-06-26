# Errores comunes en rotacion con rozamiento

## Errores conceptuales

### Error 1. Tratar todo frenado como un solo mecanismo
#### Por que parece correcto
Porque en muchos problemas introductorios se usa una sola ley efectiva y el calculo parece cerrar con rapidez.
#### Por que es incorrecto
En sistemas reales el frenado puede ser casi seco en una zona y mas viscoso en otra. Si se mezclan ambos mecanismos, se interpretan mal [[mu_k]], [[b_rot]] y la forma temporal de [[omega]].
#### Senal de deteccion
La curva cambia de pendiente con la velocidad o el ajuste semilog solo funciona en una parte del registro.
#### Correccion conceptual
Preguntar primero que mecanismo domina y solo despues elegir torque_coulomb, torque_viscoso o un modelo mixto.
#### Mini-ejemplo
Si la parada parece lineal al inicio pero se suaviza despues, no conviene defender un torque seco unico para toda la maniobra.

### Error 2. Confundir ajuste numerico con explicacion fisica
#### Por que parece correcto
Porque una curva que se acerca a los datos produce la sensacion de que el problema ya esta resuelto.
#### Por que es incorrecto
Un ajuste puede ser bueno en una ventana corta y aun asi exigir parametros absurdos o una evolucion de energia imposible en frenado pasivo.
#### Senal de deteccion
Aparecen [[mu_k]] o [[b_rot]] poco plausibles, o [[K_rot]] no disminuye como deberia.
#### Correccion conceptual
Exigir signos coherentes, dominio de validez y una historia causal clara para el torque disipativo.
#### Mini-ejemplo
Si el modelo encaja pero predice energia creciente sin motor, el problema no esta bien explicado aunque el error numerico sea pequeno.

## Errores de modelo

### Error 3. Imponer rozamiento seco cuando domina el termino viscoso
#### Por que parece correcto
Porque una desaceleracion visible suele hacer pensar en un torque casi constante.
#### Por que es incorrecto
Si el sistema esta lubricado, la resistencia puede depender de la propia velocidad y no de un [[mu_k]] efectivo constante.
#### Senal de deteccion
El modelo seco reproduce mal la curvatura temporal o exige un [[mu_k]] irreal para el material.
#### Correccion conceptual
Comparar el caso con torque_viscoso y revisar si la forma de [[omega]] se acerca a un decaimiento_exponencial.
#### Mini-ejemplo
Un rodillo que frena muy rapido al inicio y mas lento despues suele pedir un termino viscoso antes que una zapata seca ideal.

### Error 4. Olvidar el radio efectivo del contacto
#### Por que parece correcto
Porque el estudiante recuerda la fuerza de rozamiento pero no siempre recuerda que el efecto dinamico depende del brazo respecto al eje.
#### Por que es incorrecto
Sin R no se calcula bien el torque y se distorsiona toda la prediccion de [[alpha]] y de energia.
#### Senal de deteccion
La cuenta usa [[mu_k]] y [[N_normal]] pero nunca identifica donde actua la fuerza.
#### Correccion conceptual
Escribir primero el brazo mecanico del contacto y luego aplicar torque_coulomb.
#### Mini-ejemplo
La misma fuerza tangencial no frena igual si actua a 2 cm del eje que si actua a 20 cm.

## Errores matematicos

### Error 5. Mezclar rpm con rad/s
#### Por que parece correcto
Porque ambos numeros describen "velocidad de giro" y el valor puede seguir pareciendo razonable a simple vista.
#### Por que es incorrecto
Las formulas dinamicas y energeticas del leaf usan [[omega]] en unidades coherentes; usar rpm sin convertir deforma torque, potencia y energia.
#### Senal de deteccion
No aparece el factor de conversion correspondiente cuando el dato original esta en rpm.
#### Correccion conceptual
Convertir primero y solo despues sustituir en energia_rotacional o en la ecuacion dinamica.
#### Mini-ejemplo
Si alguien usa 300 rpm como si fueran 300 rad/s, la energia sale exagerada por mucho aunque el algebra sea impecable.

### Error 6. Redondear demasiado pronto
#### Por que parece correcto
Porque simplifica la cuenta y da sensacion de orden.
#### Por que es incorrecto
En ventanas cortas, pequenos cambios en [[alpha]] o [[b_rot]] alteran bastante la prediccion posterior de [[omega]].
#### Senal de deteccion
El resultado cambia mucho al repetir la cuenta con una o dos cifras mas.
#### Correccion conceptual
Mantener precision intermedia y redondear solo al final de la interpretacion.
#### Mini-ejemplo
Un [[b_rot]] truncado demasiado pronto puede hacer que un ajuste viscoso parezca peor de lo que realmente es.

## Errores de interpretacion

### Error 7. Aceptar un frenado pasivo con aumento de energia
#### Por que parece correcto
Porque el estudiante mira la ecuacion final y supone que el signo ya esta bien resuelto.
#### Por que es incorrecto
Si no hay aporte motor, un aumento sostenido de [[K_rot]] contradice la idea misma de disipacion.
#### Senal de deteccion
El producto [[tau_roz]] por [[omega]] no representa potencia disipativa negativa o la energia sube en el grafico.
#### Correccion conceptual
Volver al convenio de signos y verificar que el torque realmente se oponga al movimiento.
#### Mini-ejemplo
Si un informe afirma que el sistema se frena mientras la energia de giro aumenta, hay un error de modelo o de signos.

### Error 8. Extender una ley local a toda la parada
#### Por que parece correcto
Porque un ajuste inicial bueno da confianza para extrapolar.
#### Por que es incorrecto
Que una ley funcione al principio no garantiza que siga sirviendo cerca de velocidad baja o en otro regimen.
#### Senal de deteccion
Los residuos crecen al ampliar la ventana o cambia la pendiente en escala semilog.
#### Correccion conceptual
Separar tramos y justificar donde deja de ser valido el modelo inicial.
#### Mini-ejemplo
Una [[alpha]] casi constante durante dos segundos no autoriza a predecir toda la parada sin revisar el cambio de mecanismo.

## Regla de autocontrol rapido

### Error 9. Resolver sin una secuencia minima de verificacion
#### Por que parece correcto
Porque parece ahorrar tiempo cuando el ejercicio tiene pocos datos.
#### Por que es incorrecto
Sin una revision minima, resultados fragiles pueden parecer robustos y terminar en una conclusion tecnica equivocada.
#### Senal de deteccion
No se puede explicar en una frase por que se eligio el modelo ni donde deja de ser valido.
#### Correccion conceptual
Seguir siempre esta secuencia: signos, unidades, parametros, mecanismo disipativo, energia y conclusion de validez.
#### Mini-ejemplo
Una solucion que calcula bien [[alpha]] pero no revisa energia ni dominio de validez aun no esta realmente cerrada.
