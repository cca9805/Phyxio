# Errores frecuentes en el pendulo

## Errores conceptuales

### Error 1 : creer que [[m]] cambia [[Tper]] en el pendulo simple ideal

**Por que parece correcto**: en muchos problemas dinamicos una masa mayor responde mas lento.

**Senal de deteccion**: al cambiar solo [[m]] en el mismo montaje se reporta cambio en [[omega]] o [[Tper]].

**Mini-ejemplo de contraste**: dos masas distintas con misma [[L]] en el mismo campo [[g]] pueden mantener el mismo ritmo ideal.

**Correccion conceptual**: en el modelo simple, el reloj temporal depende de [[L]] y [[g]], no de [[m]].

### Error 2 : interpretar [[theta]] como desplazamiento lineal sin contexto angular

**Por que parece correcto**: al mirar la trayectoria se percibe un desplazamiento del bob.

**Senal de deteccion**: se mezclan grados y radianes sin conversion y el signo de [[tau]] pierde sentido.

**Mini-ejemplo de contraste**: un mismo valor numerico de [[theta]] en grados y en radianes representa estados muy distintos.

**Correccion conceptual**: tratar [[theta]] como variable angular con convenio de signo explicito.

## Errores de modelo

### Error 3 : usar pequenas oscilaciones con amplitudes grandes

**Por que parece correcto**: la curva visual sigue pareciendo periodica.

**Senal de deteccion**: el periodo medido crece al aumentar amplitud inicial.

**Mini-ejemplo de contraste**: para amplitud moderada, la prediccion lineal y la medicion coinciden mejor que para amplitud alta.

**Correccion conceptual**: usar el modelo lineal solo en su dominio y escalar a no lineal cuando el error temporal supera el objetivo.

### Error 4 : ignorar amortiguamiento en datos con perdida clara por ciclo

**Por que parece correcto**: el sistema sigue oscilando y se asume que es ideal.

**Senal de deteccion**: maxima amplitud decrece de forma sistematica entre ciclos consecutivos.

**Mini-ejemplo de contraste**: en aire quieto y pivote fino, la perdida puede ser pequena; en pivote rugoso, no.

**Correccion conceptual**: incorporar termino disipativo cuando la energia no se conserva a escala del problema.

## Errores matemáticos

### Error 5 : invertir tendencia entre [[L]] y [[omega]]

**Por que parece correcto**: se piensa que un arco mayor implica mayor velocidad angular por inercia.

**Senal de deteccion**: al aumentar [[L]] se reporta aumento de [[omega]] en el mismo campo [[g]].

**Mini-ejemplo de contraste**: un pendulo largo suele tener oscilacion mas lenta que uno corto en las mismas condiciones.

**Correccion conceptual**: revisar tendencia de raiz inversa entre [[L]] y [[omega]] antes de sustituir datos.

### Error 6 : perder el signo restaurador en [[tau]]

**Por que parece correcto**: se trabaja solo con modulos para simplificar calculo.

**Senal de deteccion**: [[tau]] mantiene signo fijo aunque [[theta]] cruce la vertical.

**Mini-ejemplo de contraste**: si [[theta]] cambia de lado, [[tau]] debe cambiar de signo para conservar retorno.

**Correccion conceptual**: conservar convenio angular y validar oposicion de signos entre [[theta]] y [[tau]].

### Error 7 : mezclar unidades de [[L]] o [[g]]

**Por que parece correcto**: el valor numerico se ve razonable y el calculo parece cerrar.

**Senal de deteccion**: el resultado temporal queda fuera de orden de magnitud esperado para el montaje.

**Mini-ejemplo de contraste**: una longitud en centimetros sin conversion produce periodos artificialmente pequenos.

**Correccion conceptual**: convertir todo a SI antes de aplicar relaciones temporales.

## Errores de interpretación

### Error 8 : reportar solo numero de [[Tper]] sin lectura causal

**Por que parece correcto**: la consigna a veces pide un unico valor final.

**Senal de deteccion**: el informe no explica si el resultado se debe a [[L]] alta, [[g]] baja o ambas.

**Mini-ejemplo de contraste**: dos montajes pueden tener igual [[Tper]] por combinaciones distintas de parametros.

**Correccion conceptual**: cerrar cada resultado con causalidad fisica y limite de validez.

### Error 9 : usar [[tau]] para justificar directamente el periodo

**Por que parece correcto**: ambas magnitudes pertenecen al mismo sistema.

**Senal de deteccion**: se concluye sobre [[Tper]] solo con una evaluacion local de [[tau]].

**Mini-ejemplo de contraste**: [[tau]] en un instante no determina por si sola el reloj completo de un ciclo.

**Correccion conceptual**: separar lectura instantanea de torque y lectura global de ritmo.

### Error 10 : extrapolar modelo ideal a cualquier planeta o entorno sin revisar dominio

**Por que parece correcto**: la relacion temporal parece universal.

**Senal de deteccion**: se ignoran variaciones de [[g]], friccion o condiciones de montaje.

**Mini-ejemplo de contraste**: cambiar entorno de gravedad altera periodo incluso con igual geometria.

**Correccion conceptual**: validar condiciones de entorno y nivel de precision requerido antes de usar el resultado.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio de pendulo, verifica cinco puntos. Primero, coherencia de unidades para [[L]], [[g]] y [[theta]]. Segundo, tendencia correcta: si [[L]] sube, [[omega]] baja y [[Tper]] sube. Tercero, signo dinamico: [[tau]] debe oponerse a [[theta]]. Cuarto, dominio de validez: amplitud y perdidas deben ser compatibles con el modelo usado. Quinto, cierre fisico: explicar en una frase por que el resultado tiene ese orden de magnitud y que limita su aplicacion.

Si cualquiera de estos puntos falla, el numero final puede ser util como operacion algebraica, pero no como lectura fisica confiable. El objetivo de esta seccion no es evitar todo error por memoria, sino construir una rutina de control que convierta cada resultado en una conclusion defendible.