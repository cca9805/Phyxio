const a=`# Ejemplo tipo examen

## Enunciado

Una onda periodica se propaga por una cuerda. La distancia entre dos crestas consecutivas es [[lambda]] = 0,80 m y una marca de la cuerda completa 5,0 oscilaciones cada segundo. La amplitud de la perturbacion es [[A]] = 0,030 m.

Determina [[f]], [[T]] y [[v]]. Despues interpreta que representa [[y]] para un punto de la cuerda.

## Datos

- [[lambda]] = 0,80 m.
- [[f]] = 5,0 Hz.
- [[A]] = 0,030 m.
- El medio es una cuerda ideal con perturbaciones pequenas.

## Definición del sistema

El sistema observado es la cuerda y, dentro de ella, un punto marcado. La coordenada [[x]] localiza donde se mira la onda y [[t]] fija el instante de observacion. La perturbacion [[y]] mide la separacion local de la cuerda respecto al equilibrio.

## Modelo físico

Se usa el modelo de onda periodica viajera. La forma se repite en el espacio y en el tiempo, y el patron avanza sin que la cuerda completa viaje con el patron.

## Justificación del modelo

El modelo es adecuado porque se dan crestas consecutivas y oscilaciones por segundo. Eso permite hablar de [[lambda]], [[f]], [[T]] y [[v]] con significado fisico claro.

Fallaria si fuera un pulso aislado sin periodicidad definida o si la amplitud fuera tan grande que cambiara la tension de la cuerda.

## Resolución simbólica

La rapidez de propagacion de una onda periodica se obtiene con:

{{f:velocidad_onda}}

La relacion temporal entre periodo y frecuencia es:

{{f:periodo_frecuencia}}

Para interpretar la perturbacion local en una onda ideal puede usarse:

{{f:onda_armonica_basica}}

Estas tres relaciones separan propagacion, repeticion temporal y estado local.

La resolucion usa todas las magnitudes nucleares del caso. [[lambda]] y [[f]] se combinan para obtener [[v]], [[f]] se invierte para leer [[T]], y [[A]] limita los valores posibles de [[y]]. Las coordenadas [[x]] y [[t]] no son resultados finales aqui, pero indican que la perturbacion solo tiene sentido cuando se declara donde y cuando se observa.

## Sustitución numérica

Con [[lambda]] = 0,80 m y [[f]] = 5,0 Hz, la rapidez del patron es 4,0 m/s. El periodo asociado a 5,0 ciclos por segundo es 0,20 s.

La amplitud [[A]] = 0,030 m indica que un punto de la cuerda se separa como maximo 3,0 cm del equilibrio. No indica que ese punto avance 4,0 m en un segundo.

La sustitucion se lee en dos pasos. Primero, multiplicar 0,80 m por 5,0 ciclos por segundo da una rapidez de patron de 4,0 m/s. Segundo, repartir un segundo entre cinco ciclos da una duracion de 0,20 s por ciclo. Por tanto, la onda combina una escala espacial, una escala temporal y una escala local de perturbacion.

## Validación dimensional

- Velocidad: longitud por frecuencia da \`[L T^-1]\`.
- Periodo: inverso de frecuencia da \`[T]\`.
- Perturbacion: el perfil armonico devuelve una longitud, \`[L]\`.

Las unidades son coherentes: no se ha sumado una longitud con una frecuencia ni se ha confundido tiempo con distancia.

## Interpretación física

El resultado [[v]] = 4,0 m/s describe la rapidez de avance del patron: una cresta se desplaza cuatro metros cada segundo si el medio sigue igual. La marca de la cuerda no recorre esos cuatro metros; oscila alrededor de su posicion.

El valor [[T]] = 0,20 s dice que la marca tarda dos decimas de segundo en repetir su estado. La amplitud [[A]] = 0,030 m mide la excursion maxima local. Por tanto, una onda combina dos lecturas: movimiento local del medio y propagacion global del patron.

Si se aumentara [[f]] manteniendo [[lambda]], las crestas pasarian mas a menudo y el patron avanzaria mas rapido. Si se aumentara [[A]] manteniendo las demas magnitudes, la marca subiria y bajaria mas, pero la separacion entre crestas no cambiaria por esa razon. Esta diferencia muestra que el resultado no es una sustitucion aislada: clasifica que parte del fenomeno cambia.

# Ejemplo de aplicación real

## Contexto

En una ola pequena sobre agua, una hoja flotante sube y baja al paso de las crestas. A simple vista parece que la hoja viaja con la ola, pero una observacion cuidadosa muestra que su desplazamiento horizontal neto es pequeno comparado con el avance de la cresta.

## Estimación física

Si dos crestas consecutivas estan separadas unos 2,0 m y pasan tres crestas por un punto cada 6,0 s, la frecuencia es aproximadamente 0,50 Hz y el periodo es 2,0 s. La rapidez del patron es entonces unos 1,0 m/s.

Si la hoja sube y baja unos 5 cm, esa distancia corresponde a [[A]], no a [[lambda]]. La hoja revela la perturbacion local [[y]], mientras las crestas revelan el avance del patron.

## Interpretacion

La estimacion muestra por que el concepto de onda no debe reducirse a "algo que se mueve". Lo que se mueve con rapidez de propagacion es la forma organizada. El medio responde localmente y puede volver casi a su posicion inicial despues del paso de la perturbacion.

Si el viento aumenta la amplitud de las olas, la hoja se movera mas arriba y abajo, pero eso no obliga a duplicar la separacion entre crestas. Si las crestas llegan con mayor frecuencia manteniendo una separacion parecida, el patron avanzara con mayor rapidez. La aplicacion permite distinguir visualmente [[A]], [[lambda]], [[f]] y [[v]] en un caso real.
`;export{a as default};
