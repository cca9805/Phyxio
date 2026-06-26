# Errores frecuentes en simetrias y conservaciones

## Errores conceptuales

### Error 1: Llamar conservada a una cantidad sin identificar la simetria

**Por que parece correcto**
En muchos problemas introductorios se anuncia que [[E]], [[P]] o [[J]] se conservan antes de discutir el modelo. Esa costumbre hace parecer que la conservacion es una etiqueta del problema, no una consecuencia fisica.

**Por que es incorrecto**
Una conservacion lagrangiana exige una simetria de [[L]]. La carga [[Q]] se conserva porque existe una transformacion generada por [[X_i]] que no cambia la accion. Sin esa condicion, la igualdad puede ser falsa aunque la formula tenga aspecto familiar.

**Senal de deteccion**
La solucion usa una cantidad constante, pero no puede decir que simetria la produce ni que termino de [[L]] la respeta.

**Correccion conceptual**
Antes de imponer una conservacion, nombrar la simetria, el generador [[X_i]] y la carga [[Q]] asociada.

**Mini-ejemplo de contraste**
Una particula libre conserva [[P]]; una particula sometida a una fuerza externa horizontal no conserva [[P]] aunque se siga escribiendo [[P]] = [[m]][[v]].

### Error 2: Confundir simetria con reposo

**Por que parece correcto**
Si algo se conserva, puede parecer que "no ocurre nada". La intuicion mezcla invariancia de una cantidad con ausencia de movimiento.

**Por que es incorrecto**
Que [[dpdt]] sea cero significa que [[p_i]] no cambia, no que la coordenada o la velocidad generalizada [[qdi]] sean nulas. Un sistema puede moverse intensamente mientras conserva momento o energia.

**Senal de deteccion**
Se interpreta una conservacion como trayectoria quieta o como velocidad cero.

**Correccion conceptual**
Distinguir entre cantidad constante y estado inmovil. La conservacion restringe la evolucion, pero no la cancela.

**Mini-ejemplo de contraste**
Un planeta puede conservar [[J]] mientras cambia continuamente de posicion y velocidad.

## Errores de modelo

### Error 3: Aplicar Noether con fuerzas externas no conservativas

**Por que parece correcto**
El formalismo lagrangiano parece general y se tiende a extenderlo sin revisar las hipotesis.

**Por que es incorrecto**
Rozamiento, empujes externos o controles activos pueden romper la simetria de [[L]]. Entonces [[Q]] deja de ser constante o solo se conserva de forma aproximada.

**Senal de deteccion**
Los datos muestran deriva monotona de [[E]], [[P]] o [[J]], pero la solucion insiste en una conservacion exacta.

**Correccion conceptual**
Incluir la interaccion externa o cambiar a un modelo de simetria rota.

**Mini-ejemplo de contraste**
Un bloque sin rozamiento conserva energia mecanica; con rozamiento, [[E]] disminuye y esa perdida no es un error algebraico.

### Error 4: Usar [[J]] = [[r]][[P]] fuera de su geometria

**Por que parece correcto**
La expresion escalar es compacta y recuerda la formula vectorial del momento angular.

**Por que es incorrecto**
La forma escalar presupone una geometria compatible, normalmente brazo perpendicular o magnitudes ya proyectadas. Si [[r]] y [[P]] no representan esa geometria, [[J]] queda mal interpretado.

**Senal de deteccion**
Se multiplica distancia por momento lineal sin especificar eje, brazo ni direccion.

**Correccion conceptual**
Comprobar la geometria antes de reducir una relacion vectorial a forma escalar.

**Mini-ejemplo de contraste**
Una fuerza o un momento lineal paralelo al radio no produce el mismo momento angular que uno perpendicular.

## Errores matematicos

### Error 5: Derivar respecto de la coordenada en vez de la velocidad

**Por que parece correcto**
El simbolo [[p_i]] se asocia mentalmente a una coordenada y no a una derivada de [[L]].

**Por que es incorrecto**
El momento conjugado se define con [[DLv]], es decir, con la derivada de [[L]] respecto de [[qdi]], no respecto de la coordenada. Cambiar esa derivada cambia la magnitud fisica.

**Senal de deteccion**
Aparece un [[p_i]] con unidades incompatibles con momento o energia por velocidad.

**Correccion conceptual**
Calcular primero la dependencia de [[L]] en la velocidad generalizada y solo despues interpretar [[p_i]].

**Mini-ejemplo de contraste**
Para energia cinetica cuadratica, derivar respecto de velocidad produce una cantidad proporcional a velocidad; derivar respecto de posicion puede producir cero o una fuerza, que es otra cosa.

## Errores de interpretacion

### Error 6: Creer que una conservacion aproximada es exacta

**Por que parece correcto**
En medidas reales, una cantidad casi constante parece validar la teoria sin mas analisis.

**Por que es incorrecto**
Una variacion pequena puede significar simetria aproximada, escala de perturbacion baja o tolerancia numerica, no conservacion exacta. El criterio depende del dominio de validez.

**Senal de deteccion**
Se ignora una tendencia sistematica porque los cambios son pequenos en valor absoluto.

**Correccion conceptual**
Comparar `Delta Q` con la escala de [[Q]] y con la precision del modelo. Si la deriva supera la tolerancia, buscar la ruptura de simetria.

**Mini-ejemplo de contraste**
Una pelota en aire puede conservar energia aproximadamente al inicio, pero la resistencia termina reduciendo [[E]] de forma medible.

## Regla de autocontrol rapido

Antes de aceptar una conservacion, comprobar cinco puntos: 1) el lagrangiano [[L]] esta definido, 2) la simetria continua esta identificada, 3) el generador [[X_i]] tiene significado fisico, 4) la carga [[Q]] se relaciona con una magnitud observable como [[E]], [[P]] o [[J]], y 5) no hay interaccion externa que rompa la simetria.

Si uno de esos puntos falla, la conservacion no debe usarse como atajo de calculo. Debe tratarse como hipotesis a verificar, como aproximacion o como resultado invalido para ese modelo.
