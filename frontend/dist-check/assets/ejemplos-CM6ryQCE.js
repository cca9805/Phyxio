const e=`# Ejemplo tipo examen

## Enunciado

Una particula de masa [[m]] se mueve sin fuerzas externas en una direccion. El lagrangiano no depende de la posicion absoluta. Identifica la simetria, escribe la cantidad conservada y estima tambien el momento angular simple si la particula se observa con brazo radial [[r]].

## Datos

- [[m]] = 2,0 kg.
- [[v]] = 3,0 m/s.
- [[r]] = 0,50 m.
- El lagrangiano [[L]] no distingue traslaciones espaciales en la direccion del movimiento.

## Definición del sistema

El sistema es una particula libre ideal. La coordenada de traslacion no aparece explicitamente en el lagrangiano, por lo que la posicion absoluta no tiene significado dinamico. La informacion relevante es la velocidad y el momento conjugado asociado.

## Modelo físico

Se usa el modelo lagrangiano regular de una particula libre. La simetria traslacional implica conservacion de momento lineal. Si ademas se considera una rotacion alrededor de un punto con brazo radial perpendicular, puede estimarse un momento angular simple.

El modelo queda anclado al leaf porque parte de [[L]], identifica el generador [[X_i]] de la transformacion y lee la carga [[Q]] que corresponde. En este caso elemental, la carga traslacional se expresa como [[P]], y la lectura rotacional auxiliar se expresa como [[J]] solo bajo la geometria indicada. La condicion de coordenada ciclica tambien tiene lectura directa: si [[dpdt]] es cero dentro de la tolerancia, [[p_i]] permanece constante y la simetria no se ha roto.

## Justificación del modelo

El modelo es valido porque no hay fuerza externa dependiente de posicion, no hay rozamiento y no hay potencial que seleccione un punto privilegiado del espacio. La conservacion no se impone como regla memorizada; se deduce de la simetria espacial del lagrangiano.

## Resolución simbólica

El momento conjugado se define por:

{{f:momento_conjugado_noether}}

La forma general de la carga de Noether es:

{{f:carga_noether}}

Una coordenada ciclica conserva su momento:

{{f:coordenada_ciclica}}

La simetria temporal produciria:

{{f:energia_por_invariancia_temporal}}

La simetria traslacional produce el momento lineal:

{{f:momento_lineal_por_traslacion}}

La simetria rotacional produce el momento angular plano simple:

{{f:momento_angular_por_rotacion}}

## Sustitución numérica

Con [[m]] = 2,0 kg y [[v]] = 3,0 m/s, el momento lineal conservado vale 6,0 kg m/s. Con [[r]] = 0,50 m, el momento angular simple asociado vale 3,0 kg m^2/s. Estos valores no son conservados por el numero en si, sino porque el modelo no distingue traslaciones ni, en el caso angular, orientaciones si la simetria rotacional es valida.

Si se midiera una variacion persistente de [[p_i]], la conclusion correcta no seria ajustar el numero final, sino revisar si el lagrangiano contiene una dependencia de posicion o si actua una fuerza externa no declarada. El calculo numerico sirve para estimar la escala; la conservacion se decide por la simetria.

## Validación dimensional

[[P]] tiene unidades de kg m/s porque resulta de masa por velocidad. [[J]] tiene unidades de kg m^2/s porque multiplica un brazo radial por un momento lineal. [[E]] tendria unidades de joule y [[Q]] tendria unidades dependientes del generador [[X_i]].

## Interpretación física

La lectura importante es causal: la homogeneidad espacial causa conservacion de [[P]]. Si se añadiera un potencial que depende de la posicion, esa homogeneidad desapareceria y el momento lineal ya no tendria por que mantenerse. En el caso rotacional, si aparece un torque externo, se rompe la conservacion de [[J]].

El ejemplo muestra que Noether no es una formula aislada. Es una forma de preguntar que elecciones no importan para el sistema. Si la posicion absoluta no importa, aparece [[P]]. Si la orientacion absoluta no importa, aparece [[J]]. Si el origen temporal no importa, aparece [[E]].

El resultado numerico tambien tiene una lectura de escala. Un valor de [[P]] de 6,0 kg m/s es coherente con una masa de pocos kilogramos y una velocidad de pocos metros por segundo. Un valor de [[J]] de 3,0 kg m^2/s es menor porque el brazo radial elegido es medio metro. Esa comparacion evita confundir momento lineal con momento angular y muestra por que cada conservacion responde a una simetria distinta.

# Ejemplo de aplicación real

## Contexto

En una mesa de aire, un disco se mueve casi sin rozamiento. Mientras no haya fuerzas horizontales externas apreciables, trasladar todo el experimento unos centimetros no cambia la fisica. Esa simetria explica que el momento lineal horizontal se mantenga aproximadamente constante.

Un registro experimental puede mostrar pequenas oscilaciones de [[P]] por ruido de medicion. Lo importante es distinguir ruido alrededor de un valor estable de una deriva sostenida. La primera situacion es compatible con una simetria practica; la segunda exige buscar una causa fisica que rompa la homogeneidad espacial.

## Estimación física

Si el disco duplica su velocidad manteniendo la masa, [[P]] tambien se duplica. Si se observa respecto de un punto situado al doble de distancia perpendicular, [[J]] tambien se duplica para el mismo [[P]]. Estas estimaciones permiten detectar si una desviacion experimental se debe a fuerza externa, error de medicion o perdida de simetria.

## Interpretación

La aplicacion real es diagnostica. Antes de resolver ecuaciones completas, se identifica que debe conservarse si el modelo ideal es correcto. Cuando los datos no respetan esa conservacion, el profesor puede preguntar que simetria se rompio: rozamiento, pendiente de la mesa, fuerza externa o torque no considerado.

Esta forma de trabajo ayuda a un alumno a no tratar las formulas como recetas. Primero se declara el modelo, despues se identifica la simetria y solo entonces se usa la cantidad conservada. Si el resultado no coincide con la experiencia, el fallo se busca en las hipotesis fisicas y no en una sustitucion numerica aislada.
`;export{e as default};
