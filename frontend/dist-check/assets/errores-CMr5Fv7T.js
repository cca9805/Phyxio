const e=`## Errores conceptuales

### Error 1: Confundir B con H

**Por qué parece correcto**

La analogia incorrecta nace porque ambos campos se dibujan con flechas y suelen tener la misma direccion en problemas simples. El alumno generaliza esa coincidencia visual y piensa que [[B]] y [[H]] son nombres equivalentes.

**Por qué es incorrecto**

[[H]] describe la excitacion asociada a corrientes libres, mientras [[B]] incluye la respuesta del material. En un nucleo magnetico, ignorar [[M]] borra precisamente el fenomeno que el leaf intenta explicar.

**Señal de detección**

El alumno sustituye datos de campo total en una relacion que pide excitacion aplicada, o interpreta una pendiente de material como si perteneciera solo a la bobina.

**Corrección conceptual**

Primero separa fuente, material y resultado. Usa [[H]] para la excitacion, [[M]] para la respuesta interna y [[B]] para el campo total.

**Mini-ejemplo de contraste**

Dos bobinas iguales pueden tener la misma [[H]] y distinto [[B]] si una contiene aire y otra ferrita. La diferencia no procede de la corriente libre, sino de la respuesta magnetica del material.

## Errores de modelo

### Error 2: Usar [[mu_r]] constante en saturacion

**Por qué parece correcto**

El mecanismo cognitivo es la extrapolacion excesiva: si una tabla da [[mu_r]], parece natural usarla en cualquier punto de trabajo sin mirar la curva real.

**Por qué es incorrecto**

En ferromagneticos, [[mu_r]] suele ser una pendiente efectiva. Cerca de saturacion, aumentar [[H]] ya no produce el mismo incremento proporcional de [[B]].

**Señal de detección**

El resultado predice campos muy altos en un nucleo ordinario o la grafica esperada sigue recta cuando los datos experimentales se aplanan.

**Corrección conceptual**

Trata [[mu_r]] como propiedad del tramo lineal indicado. Si el problema menciona saturacion o histeresis, cambia a una curva experimental.

**Mini-ejemplo de contraste**

Un nucleo puede concentrar mucho campo al inicio y casi no ganar campo adicional despues. Usar la misma pendiente en ambos tramos exagera el diseño.

## Errores matemáticos

### Error 3: Tratar [[chi_m]] como siempre positiva

**Por qué parece correcto**

La asociacion intuitiva entre magnetismo y atraccion lleva a pensar que la respuesta material siempre acompaña al campo aplicado.

**Por qué es incorrecto**

[[chi_m]] puede ser negativa en materiales diamagneticos. Eso significa oposicion debil de [[M]] respecto a [[H]], no ausencia de respuesta.

**Señal de detección**

El alumno descarta valores negativos de susceptibilidad o cambia su signo para que el material "parezca magnetico".

**Corrección conceptual**

Conserva el signo de [[chi_m]] y leelo como orientacion de la respuesta. El modulo informa sobre la intensidad relativa.

**Mini-ejemplo de contraste**

Un material diamagnetico puede alterar ligeramente el campo aunque no sea atraido como un ferromagnetico. Forzar susceptibilidad positiva cambia el fenomeno.

## Errores de interpretación

### Error 4: Creer que mayor permeabilidad siempre mejora el dispositivo

**Por qué parece correcto**

La regla memorizada "mayor permeabilidad concentra mas campo" funciona en casos introductorios y se transforma en una generalizacion sin condiciones.

**Por qué es incorrecto**

El dispositivo real tambien depende de geometria, entrehierros, saturacion, frecuencia y perdidas. Un material con gran [[mu_r]] puede ser mala eleccion si se calienta o se satura pronto.

**Señal de detección**

La seleccion del material se justifica solo con [[mu_r]], sin mencionar rango de [[H]], limite de [[B]] ni condiciones de trabajo.

**Corrección conceptual**

Compara la permeabilidad dentro del rango operativo, no como valor aislado. Luego revisa saturacion y perdidas.

**Mini-ejemplo de contraste**

Un nucleo con gran respuesta inicial puede fallar en una fuente de potencia si entra pronto en saturacion. Otro material mas moderado puede mantener mejor la linealidad.

## Regla de autocontrol rápido

Antes de cerrar un problema, formula tres preguntas: que impone la fuente, que responde el material y que campo total se obtiene. Si la misma magnitud contesta las tres, probablemente has confundido [[H]], [[M]] y [[B]].

Despues revisa si [[mu_r]] y [[chi_m]] se estan usando dentro de un tramo lineal. Si aparece saturacion, remanencia, curva cerrada o calentamiento, la respuesta no debe cerrarse con una constante unica.
`;export{e as default};
