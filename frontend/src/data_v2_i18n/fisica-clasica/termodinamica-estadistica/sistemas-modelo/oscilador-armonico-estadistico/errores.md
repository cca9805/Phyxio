## Errores conceptuales


### Error 1: Confundir [[energia_media]] con energía instantánea
**Por qué parece correcto**
El símbolo parece dar “la energía del oscilador” y eso invita a imaginar un valor único.
**Por qué es incorrecto**
[[energia_media]] es un promedio estadístico sobre ocupaciones; una medida individual puede corresponder a un [[numero_cuantico]] concreto.
**Señal de detección**
El razonamiento habla de trayectoria única y no menciona [[probabilidad_ocupacion]].
**Corrección conceptual**
Lee [[energia_media]] como valor esperado en equilibrio térmico.
**Mini-ejemplo de contraste**
Dos mediciones pueden dar niveles distintos, aunque el promedio de muchas mediciones coincida con [[energia_media]].


### Error 2: Creer que cero [[temperatura]] elimina toda energía
**Por qué parece correcto**
En modelos clásicos, enfriar parece apagar el movimiento.
**Por qué es incorrecto**
El oscilador cuántico mantiene una contribución mínima ligada a [[hbar]] y [[frecuencia_angular]].
**Señal de detección**
El resultado fuerza [[energia_media]] a cero sin revisar la fórmula cuántica.
**Corrección conceptual**
Distingue excitación térmica y energía de punto cero.
**Mini-ejemplo de contraste**
Bajar [[temperatura]] reduce ocupaciones excitadas, pero no borra la base cuántica.

## Errores de modelo


### Error 3: Usar equipartición en cualquier régimen
**Por qué parece correcto**
{{f:limite_clasico_equiparticion}}
parece una regla simple y familiar.
**Por qué es incorrecto**
Solo vale cuando la escala térmica domina claramente sobre [[energia_cuantica]].
**Señal de detección**
No se compara [[temperatura]] con [[frecuencia_angular]].
**Corrección conceptual**
Antes de usar el límite, compara energía térmica y separación cuántica.
**Mini-ejemplo de contraste**
Un modo de alta [[frecuencia_angular]] puede seguir casi congelado a la misma [[temperatura]] que excita otro modo más blando.


### Error 4: Aplicar el modelo a un oscilador anarmónico
**Por qué parece correcto**
Muchos sistemas vibran cerca de un equilibrio.
**Por qué es incorrecto**
Si [[frecuencia_angular]] cambia con amplitud, los niveles no mantienen separación constante.
**Señal de detección**
El gráfico experimental se curva de forma incompatible con el modelo armónico.
**Corrección conceptual**
Usa el modelo armónico solo cerca del equilibrio y con amplitudes pequeñas.
**Mini-ejemplo de contraste**
Una vibración molecular débil puede aproximarse así; una vibración muy excitada necesita correcciones.

## Errores matemáticos


### Error 5: Dar unidades a [[funcion_particion]]
**Por qué parece correcto**
Aparece en fórmulas que calculan energía.
**Por qué es incorrecto**
[[funcion_particion]] normaliza pesos y debe ser adimensional.
**Señal de detección**
La solución escribe julios junto a [[funcion_particion]].
**Corrección conceptual**
Reserva unidades de energía para [[energia_media]] y [[energia_cuantica]].
**Mini-ejemplo de contraste**
Una suma de probabilidades normalizadas no produce julios por sí sola.


### Error 6: Olvidar normalizar [[probabilidad_ocupacion]]
**Por qué parece correcto**
Los factores de Boltzmann parecen probabilidades directas.
**Por qué es incorrecto**
Necesitan dividirse por [[funcion_particion]] para que la suma total sea uno.
**Señal de detección**
Las probabilidades suman más o menos que 1.
**Corrección conceptual**
Incluye siempre la normalización estadística.
**Mini-ejemplo de contraste**
Un peso grande indica estado favorecido, pero solo la probabilidad normalizada tiene lectura directa.

## Errores de interpretación


### Error 7: Pensar que mayor [[frecuencia_angular]] siempre facilita la excitación
**Por qué parece correcto**
Mayor frecuencia suena a más movimiento.
**Por qué es incorrecto**
Mayor [[frecuencia_angular]] aumenta [[energia_cuantica]], separando más los niveles.
**Señal de detección**
La solución predice más ocupación excitada sin subir [[temperatura]].
**Corrección conceptual**
Mayor separación hace más cara cada excitación.
**Mini-ejemplo de contraste**
A igual [[temperatura]], el modo más rígido puede tener menor ocupación excitada.


### Error 8: Interpretar [[beta]] como [[temperatura]] directa
**Por qué parece correcto**
[[beta]] aparece como variable térmica.
**Por qué es incorrecto**
[[beta]] crece cuando [[temperatura]] disminuye.
**Señal de detección**
El razonamiento dice que subir [[beta]] calienta el sistema.
**Corrección conceptual**
Lee [[beta]] como selectividad térmica inversa.
**Mini-ejemplo de contraste**
Con [[beta]] grande, los niveles altos quedan más penalizados.

## Regla de autocontrol rápido

Comprueba tres cosas antes de aceptar el resultado: [[funcion_particion]] adimensional, [[probabilidad_ocupacion]] normalizada y [[energia_media]] coherente con la comparación entre [[temperatura]] y [[energia_cuantica]].