# Sistemas No Inerciales (Introduccion)

## Idea clave
Un sistema no inercial es un marco que acelera o rota respecto a uno inercial. En ese marco, para mantener forma tipo Newton, aparecen fuerzas ficticias que no provienen de interacciones fisicas reales.

## 1- Que problema resuelve este tema
Cuando observas desde un coche que arranca, un ascensor acelerado o una plataforma giratoria, ves movimientos que no se explican con las fuerzas reales habituales.

La duda clave es: por que parece que un cuerpo acelera "sin causa" Este tema responde que el problema no esta en Newton, sino en el marco elegido.

## 2- Que significa que un marco no sea inercial
Un marco es no inercial si su aceleracion respecto a un marco inercial es distinta de cero, ya sea:

- traslacion acelerada,
- rotacion (aunque la rapidez angular sea constante).

En esos casos, la forma directa \(\sum \vec F = m\vec a\) con solo fuerzas reales no cierra correctamente.

## 3- Ecuacion de trabajo en traslacion acelerada
Si el marco tiene aceleracion \(\vec a_{ref}\), se introduce:

$$
\vec F_{fic} = -m\vec a_{ref}
$$

Y se escribe dentro del marco no inercial:

$$
\sum \vec F_{reales} + \vec F_{fic} = m\vec a_{rel}
$$

donde \(\vec a_{rel}\) es la aceleracion medida en ese marco.

## 4- Sentido fisico de la fuerza ficticia
No es una fuerza de contacto ni de campo. No hay un agente material que la "aplique".

Es un termino de correccion dinamica para compensar que el observador acelera. Permite usar una ecuacion formalmente igual a Newton dentro de un marco que no cumple sus hipotesis originales.

## 5- Casos tipicos de no inercialidad
- coche que acelera o frena,
- autobus que toma curva,
- ascensor con aceleracion vertical,
- carrusel o disco en rotacion.

En todos ellos aparecen desviaciones aparentes que el estudiante suele interpretar mal si no separa fuerzas reales de fuerzas ficticias.

## 6- Introduccion a marcos rotantes
En marcos que rotan aparecen terminos ficticios adicionales, entre ellos:

- centrifuga,
- Coriolis.

No se derivan aqui en detalle, pero debes retener que su origen es el mismo: la no inercialidad del marco, no una interaccion nueva entre cuerpos.

## 7- Metodo de resolucion en problemas basicos
1. Decide en que marco vas a resolver.
2. Si el marco acelera, identifica \(\vec a_{ref}\).
3. Introduce \(\vec F_{fic}=-m\vec a_{ref}\).
4. Dibuja DCL con fuerzas reales y ficticia separadas.
5. Plantea ecuaciones por ejes y resuelve.
6. Interpreta el resultado en terminos del observador elegido.

## 8- Errores frecuentes
- Llamar "fuerza real" a la ficticia.
- Olvidar el signo negativo en \(\vec F_{fic}\).
- Mezclar aceleracion del marco con aceleracion relativa del cuerpo.
- Usar el mismo DCL para dos marcos distintos.
- Concluir causas fisicas incorrectas por no distinguir observador.

## 9- Ejemplo guiado corto
Un bloque sobre el piso de un vagon acelera con el vagon hacia la derecha con \(\vec a_{ref}=a\hat{i}\). En el marco del vagon, sobre el bloque aparece:

$$
\vec F_{fic}=-ma\hat{i}
$$

Si no hay otras fuerzas horizontales reales relevantes:

$$
\sum F_x^{reales} + F_{fic,x} = m a_{rel,x}
$$

La ecuacion explica por que el bloque parece desplazarse hacia atras respecto al vagon.

## 10- Sintesis final
En dinamica, elegir marco es parte del modelo. Si el marco no es inercial, la lectura correcta exige introducir fuerzas ficticias o cambiar de marco. Entender esto evita errores conceptuales en casi todos los temas avanzados de mecanica.

