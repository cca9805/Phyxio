const e=`# Errores comunes

## Errores conceptuales

### Error 1: imaginar el campo como un empuje frontal

**Por qué parece correcto**

La analogia incorrecta con viento o corriente hace pensar que [[B]] arrastra la particula en su propia direccion.

**Por qué es incorrecto**

Para una carga movil, [[F_B]] es perpendicular a [[v]] y a [[B]]. El campo no actua como un empuje frontal.

**Señal de detección**

El alumno dibuja la fuerza paralela al campo o paralela a la trayectoria.

**Corrección conceptual**

Leer primero la geometria: movimiento, campo y fuerza forman direcciones perpendiculares en el caso ideal.

**Mini-ejemplo de contraste**

Una carga que entra perpendicularmente en un campo uniforme no avanza hacia las lineas de campo; se curva lateralmente.

## Errores de modelo

### Error 2: aplicar siempre trayectoria circular

**Por qué parece correcto**

La generalizacion excesiva del caso perpendicular hace olvidar que [[s_theta]] puede variar.

**Por qué es incorrecto**

Solo la componente perpendicular produce la curvatura circular simple. Con componente paralela, el movimiento ideal se vuelve helicoidal.

**Señal de detección**

El alumno usa [[r]] sin comprobar si la entrada es perpendicular a [[B]].

**Corrección conceptual**

Antes de calcular radio, decidir si el movimiento es perpendicular, paralelo o mixto respecto al campo.

**Mini-ejemplo de contraste**

Una particula paralela al campo puede tener [[q]], [[v]] y [[B]] apreciables, pero no mostrar curvatura magnetica.

## Errores matemáticos

### Error 3: convertir el signo de la carga en radio negativo

**Por qué parece correcto**

La confusion de magnitudes con orientacion lleva a insertar el signo de [[q]] dentro de todos los resultados.

**Por qué es incorrecto**

[[r]] es una longitud positiva. El signo de [[q]] decide el sentido de giro, no una distancia negativa.

**Señal de detección**

Aparece un radio negativo o se descarta una respuesta por tener signo.

**Corrección conceptual**

Calcular modulos para [[F_B]] y [[r]], y analizar el sentido vectorial en un paso separado.

**Mini-ejemplo de contraste**

Un proton y un electron con igual modulo de carga pueden tener igual radio y curvarse hacia lados opuestos.

## Errores de interpretación

### Error 4: leer aceleracion como aumento de rapidez

**Por qué parece correcto**

En mecanica basica se asocia aceleracion con ir cada vez mas rapido, sin distinguir direccion.

**Por qué es incorrecto**

En el caso magnetico perpendicular, [[a_c]] cambia la direccion de [[v]] y no representa aceleracion tangencial ideal.

**Señal de detección**

El alumno afirma que el campo magnetico entrega energia cinetica por si solo.

**Corrección conceptual**

Relacionar [[a_c]] con curvatura y reservar el cambio de rapidez para fuerzas con componente tangencial.

**Mini-ejemplo de contraste**

Una particula que describe una circunferencia puede mantener rapidez constante mientras cambia continuamente de direccion.

## Regla de autocontrol rápido

Antes de cerrar un ejercicio, revisa cuatro preguntas. Primero, si la particula tiene [[q]] y [[v]]. Segundo, si el movimiento tiene componente perpendicular medida por [[s_theta]]. Tercero, si se pide modulo o sentido. Cuarto, si el uso de [[r]] exige campo uniforme y entrada perpendicular.

Si alguna respuesta no esta clara, no sustituyas numeros todavia. La mayoria de errores del leaf aparecen por saltar directamente a [[F_B]] sin decidir la geometria.
`;export{e as default};
