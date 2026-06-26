# Errores comunes

## Errores conceptuales

### Error
Confundir [[Wnet]] con el trabajo de una sola fuerza llamativa.

Por que parece correcto
El alumno ve una fuerza dominante, por ejemplo el motor, el peso o el rozamiento, y piensa que esa contribucion basta para explicar el cambio de movimiento. Como esa fuerza suele ser facil de identificar, parece natural igualarla a la causa total del proceso.

Senal de deteccion
La resolucion menciona una sola interaccion y nunca se pregunta por el saldo total. En cuanto se revisa el problema con calma, aparecen otras fuerzas relevantes que tambien hacen trabajo durante el mismo intervalo.

Mini-ejemplo de contraste
Un bloque acelera porque un motor tira de el, pero el rozamiento tambien actua. Si solo se mira la traccion, el cambio de energia cinetica parece mayor que el real. El teorema exige el balance neto, no la contribucion favorita del resolutor.

Correccion conceptual
Recordar que [[Wnet]] significa saldo de todas las contribuciones externas relevantes. El teorema trabajo-energia solo cierra cuando [[Wnet]] y [[dK]] describen el mismo proceso completo.

### Error
Creer que un cambio moderado de rapidez implica un cambio moderado del presupuesto cinetico.

Por que parece correcto
La intuicion cotidiana compara velocidades de manera casi lineal. Si [[vf]] parece apenas mayor o menor que [[vi]], el alumno tiende a pensar que el cambio energetico tambien es pequeno.

Senal de deteccion
El resultado numerico se acepta sin sorpresa aunque la escala energetica sea muy grande para el cambio visual de rapidez. No hay reflexion sobre la diferencia entre comparar movimiento y comparar presupuesto cinetico.

Mini-ejemplo de contraste
Pasar de [[vi]] moderada a una [[vf]] dos veces mayor no duplica sin mas la energia cinetica del sistema. El balance puede crecer mucho mas y exigir un [[Wnet]] mucho mayor de lo imaginado inicialmente.

Correccion conceptual
Leer siempre el resultado a traves de [[Ki]], [[Kf]] y [[dK]], no solo mediante la impresion visual de [[vi]] y [[vf]]. El leaf existe precisamente para disciplinar esa intuicion.

## Errores de modelo

### Error
Usar el teorema trabajo-energia cuando el problema pide evolucion temporal detallada.

Por que parece correcto
El teorema es potente y parece resolver rapido. Eso lleva a aplicarlo incluso cuando la pregunta ya no es global entre estados, sino local en cada instante.

Senal de deteccion
El alumno obtiene [[Wnet]] y [[dK]], pero sigue sin poder responder la pregunta real del enunciado, por ejemplo una fuerza instantanea, un tiempo de pico o una tasa de transferencia.

Mini-ejemplo de contraste
En una frenada puede ser suficiente el teorema para saber cuanto presupuesto cinetico se pierde entre dos estados. Pero si el problema pide la evolucion de la fuerza con el tiempo, hace falta otro marco adicional.

Correccion conceptual
Comprobar antes de empezar si la pregunta central es de balance global o de evolucion temporal. Si es temporal, este leaf debe combinarse con otro modelo.

### Error
Cambiar el sistema a mitad de resolucion.

Por que parece correcto
En muchos ejercicios aparecen varios cuerpos y varias interacciones, y el alumno va cambiando de foco sin advertirlo. La mezcla puede producir numeros plausibles aunque el modelo ya no sea coherente.

Senal de deteccion
[[Ki]] y [[Kf]] se calculan para un cuerpo, mientras [[Wnet]] se interpreta para un conjunto mas amplio o mas estrecho. El resultado parece cerrar solo porque las cifras se encadenan sin control fisico.

Mini-ejemplo de contraste
Si un carrito arrastra una carga, no es lo mismo estudiar solo el carrito que estudiar carrito mas carga. El balance cambia y las magnitudes deben recalcularse para el mismo sistema elegido.

Correccion conceptual
Fijar el sistema al principio y no soltarlo. [[Ki]], [[Kf]], [[dK]] y [[Wnet]] deben pertenecer al mismo objeto fisico desde el inicio hasta el final.

## Errores matemáticos

### Error
Perder el signo de [[dK]] o de [[Wnet]].

Por que parece correcto
Muchos alumnos trabajan con modulos por costumbre y dejan el signo para el final. Eso puede ocultar si el proceso gana o pierde presupuesto cinetico.

Senal de deteccion
La solucion informa solo magnitudes positivas y omite si el proceso corresponde a aceleracion o frenado. Al comparar con la historia fisica, la conclusion queda ambigua o directamente invertida.

Mini-ejemplo de contraste
En una frenada, [[vf]] menor que [[vi]] obliga a que [[dK]] sea negativa y, por tanto, [[Wnet]] tambien. Si ambas salen positivas, el calculo ha roto la lectura fisica del proceso.

Correccion conceptual
Tratar el signo como informacion principal, no como adorno. Antes de sustituir, decidir que significa fisicamente un resultado positivo o negativo.

### Error
Usar datos en unidades inconsistentes y cerrar igual el balance.

Por que parece correcto
La aritmetica puede seguir funcionando formalmente aunque las unidades no sean coherentes. Eso da una falsa sensacion de control.

Senal de deteccion
El numero final tiene una escala absurda para el sistema real o no puede interpretarse como trabajo ni como energia. El alumno rara vez revisa esta incoherencia si no se le obliga.

Mini-ejemplo de contraste
Tomar [[m]] en gramos y la rapidez en metros por segundo sin convertir produce un valor numerico, pero no un trabajo neto interpretable para el leaf.

Correccion conceptual
Comprobar siempre que masa, rapidez y resultados energeticos quedan en unidades compatibles con el analisis mecanico del problema.

## Errores de interpretación

### Error
Cerrar el ejercicio con un numero y sin historia fisica.

Por que parece correcto
En entrenamiento escolar se premia a menudo el valor final y se deja en segundo plano la lectura causal. El alumno aprende a considerar la frase final como un tramite.

Senal de deteccion
La solucion termina en un valor de [[Wnet]] o de [[dK]] sin explicar que interacciones aportaron o retiraron presupuesto cinetico y sin decir por que el signo tiene sentido.

Mini-ejemplo de contraste
Decir que [[Wnet]] vale cierta cantidad no basta. Hay que aclarar si el entorno entrego energia mecanica al sistema o si se la extrajo durante el proceso.

Correccion conceptual
Exigir una frase final de causa y efecto: que cambio ocurrio entre [[Ki]] y [[Kf]], y que saldo de trabajo lo explica.

## Regla de autocontrol rápido

1. Fija el sistema y no lo cambies.
2. Decide si la pregunta es global entre estados o temporal.
3. Comprueba el signo esperado de [[dK]] y de [[Wnet]] antes de calcular.
4. Verifica la escala del resultado para el sistema real.
5. Cierra con una frase que una balance de trabajo y cambio de energia cinetica.