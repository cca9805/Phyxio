const e=`# Errores frecuentes en flujo magnetico

## Errores conceptuales

### Error 1: Confundir campo magnetico con flujo magnetico

**Por qué parece correcto**

El alumno ve que un campo mas intenso produce mas efecto y aplica una generalizacion excesiva: si [[B]] aumenta, cree que el flujo queda completamente determinado.

**Por qué es incorrecto**

[[Phi_B]] depende tambien de [[A]] y de [[cos_theta]]. Un campo grande puede producir flujo nulo si es tangente a la superficie o si el area efectiva no intercepta el campo.

**Señal de detección**

El alumno responde solo con teslas o no menciona area ni orientacion al interpretar el resultado.

**Corrección conceptual**

Leer [[Phi_B]] como campo que atraviesa una superficie orientada. El campo es una causa local; el flujo es una lectura geometrica global.

**Mini-ejemplo de contraste**

Un campo de 1 T paralelo al plano de una espira no atraviesa la espira. Aunque el campo sea intenso, [[B_perp]] es nulo y el flujo resultante tambien.

## Errores de modelo

### Error 2: Usar el modelo uniforme en un campo muy no uniforme

**Por qué parece correcto**

El alumno busca una formula corta y toma un valor de [[B]] medido cerca de una parte de la superficie como si representara toda el area.

**Por qué es incorrecto**

Si el campo cambia mucho sobre [[A]], unas zonas aportan mas que otras e incluso pueden existir cancelaciones. El modelo uniforme deja de representar la fisica del montaje.

**Señal de detección**

El resultado cambia de forma exagerada segun el punto elegido para medir [[B]].

**Corrección conceptual**

Usar el modelo uniforme solo si [[B]] es casi constante. Si no, dividir la superficie en partes o usar una lectura local del campo normal.

**Mini-ejemplo de contraste**

Cerca del borde de un iman, media espira puede recibir campo fuerte y la otra campo debil. Tomar solo el valor maximo sobrestima [[Phi_B]] y predice una induccion que no corresponde al experimento.

## Errores matemáticos

### Error 3: Usar el angulo con el plano en vez de la normal

**Por qué parece correcto**

La superficie se dibuja como un plano visible, de modo que el alumno mide el angulo mas evidente en el dibujo. Es una confusion de representacion.

**Por qué es incorrecto**

El factor [[cos_theta]] se refiere a la orientacion entre el campo y la normal de la superficie. Medir respecto al plano intercambia maximos y ceros.

**Señal de detección**

El alumno obtiene flujo maximo cuando el campo parece deslizarse por la superficie.

**Corrección conceptual**

Dibujar siempre la normal antes de decidir [[cos_theta]]. Si el campo es tangente al plano, [[B_perp]] debe ser nulo.

**Mini-ejemplo de contraste**

Una espira vista de canto por el campo no intercepta lineas de campo. Si el calculo predice flujo maximo, el angulo usado pertenece al plano, no a la normal.

## Errores de interpretación

### Error 4: Olvidar el signo del flujo

**Por qué parece correcto**

En muchos ejercicios solo interesa el valor absoluto, asi que el alumno elimina el signo por costumbre operativa.

**Por qué es incorrecto**

El signo de [[Phi_B]] conserva la direccion de cruce respecto a la normal. Al estudiar [[DeltaPhi]], perder el signo puede invertir la lectura de Lenz.

**Señal de detección**

El alumno interpreta igual un aumento de flujo positivo y una disminucion de flujo negativo.

**Corrección conceptual**

Mantener una normal fija durante todo el problema y comparar [[Phi_i]] con [[Phi_f]] usando la misma convencion.

**Mini-ejemplo de contraste**

Si una bobina gira media vuelta, el flujo puede pasar de positivo a negativo. Decir solo que el modulo es igual oculta que [[DeltaPhi]] es grande.

## Regla de autocontrol rápido

Antes de cerrar un problema de flujo, comprobar cuatro preguntas. Primero, si [[B]] es realmente uniforme. Segundo, si [[A]] es el area efectiva atravesada. Tercero, si [[cos_theta]] se ha tomado con la normal. Cuarto, si [[Phi_i]] y [[Phi_f]] usan la misma convencion de signo.

Si alguna respuesta es dudosa, no sustituyas datos. Redibuja campo, superficie y normal. El 80 % de los errores en flujo magnetico son errores de geometria antes que errores de calculo.
`;export{e as default};
