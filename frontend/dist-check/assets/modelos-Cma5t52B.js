const e=`# Modelos de simetrias y conservaciones

## Modelo ideal

El modelo ideal describe un sistema lagrangiano conservativo cuyo [[L]] admite una simetria continua. La variable esencial no es una trayectoria particular, sino la estructura que permanece igual cuando se desplaza el sistema, se rota, se avanza el origen temporal o se aplica una transformacion infinitesimal generada por [[X_i]]. En ese marco, la carga [[Q]] se conserva porque el cambio de [[L]] bajo la transformacion es nulo o, en formulaciones mas avanzadas, una derivada total.

La lectura mas simple aparece con una coordenada ciclica: si [[L]] no depende de una coordenada, el momento conjugado [[p_i]] asociado cumple [[dpdt]] igual a cero. Esa regla convierte una simetria del modelo en una cantidad medible o calculable. Para sistemas mecanicos ordinarios, las simetrias traslacionales producen [[P]], las rotacionales producen [[J]] y la invariancia temporal produce [[E]].

## Hipotesis

- El sistema se describe mediante un lagrangiano [[L]] suficientemente regular. Si se viola, la derivada [[DLv]] y el momento [[p_i]] pierden significado operativo.
- La transformacion continua generada por [[X_i]] deja invariante la accion, no solo una ecuacion aislada escrita de forma conveniente.
- No hay fuerzas externas no conservativas ocultas. Si existen rozamiento, control activo o pares externos, la conservacion de [[Q]] puede romperse.
- Las variables generalizadas son independientes dentro del dominio elegido. Si la parametrizacion introduce redundancias, [[p_i]] puede no ser una cantidad fisica directamente interpretable.
- Para las formas elementales [[P]] = [[m]][[v]] y [[J]] = [[r]][[P]], se asumen masa constante, geometria definida y direccion compatible con la simplificacion escalar usada.

## Dominio de validez cuantitativo

Cuantitativamente, el modelo es fiable cuando los cambios relativos de la carga conservada son pequenos frente a la escala del problema. En una simulacion ideal, una razon como \`|Delta Q|/|Q| < 10^-3\` suele ser aceptable en ejercicios numericos introductorios, mientras que una cota menor que \`10^-6\` para [[dpdt]] puede usarse como control local de coordenada ciclica. Si esas cotas crecen de manera sistematica, no basta con culpar al redondeo. Hay que revisar si la simetria esta realmente presente en [[L]] o si una fuerza externa rompe el supuesto.

Para la conservacion de [[E]], el lagrangiano no debe depender explicitamente del tiempo. Para la conservacion de [[P]], el entorno no debe seleccionar una posicion privilegiada. Para la conservacion de [[J]], no debe haber un torque externo respecto del origen elegido. Estas condiciones son fisicas, no ornamentales: determinan si una igualdad puede usarse como diagnostico, como atajo de calculo o como prediccion.

## Senales de fallo del modelo

Una primera senal de fallo es que [[Q]] cambie de forma monotona en un sistema donde se habia declarado simetria exacta. Otra senal es que [[dpdt]] no sea cero aunque se haya llamado ciclica a una coordenada; en ese caso suele existir una dependencia explicita de [[L]] que no se reconocio. Tambien falla el modelo si [[P]] o [[J]] se interpretan como conservados en presencia de fuerzas o torques externos.

El fallo didactico mas frecuente consiste en memorizar la pareja "simetria-conservacion" sin comprobar la condicion de modelo. Noether no sustituye al analisis fisico: lo organiza. Antes de usar una conservacion, hay que identificar la simetria, su generador [[X_i]], la carga [[Q]] y el limite que podria romperla.

## Modelo extendido o alternativo

Un modelo extendido admite simetrias rotas, fuerzas generalizadas no conservativas o invariancias aproximadas. En ese caso, la carga ya no se conserva exactamente, pero su tasa de cambio puede interpretarse como medida de la ruptura. Por ejemplo, una fuerza de arrastre pequena puede hacer que [[E]] disminuya lentamente; un torque externo puede modificar [[J]]; una fuerza horizontal puede cambiar [[P]].

Conviene cambiar al modelo extendido cuando los datos muestran deriva sistematica, cuando el sistema intercambia energia con el entorno o cuando el lagrangiano efectivo contiene terminos dependientes del tiempo. En ese escenario, la pregunta deja de ser "que se conserva exactamente" y pasa a ser "que simetria aproximada explica la escala de variacion observada".

## Comparacion operativa

- Modelo ideal: permite reducir calculo, comprobar soluciones y explicar por que [[Q]], [[E]], [[P]] o [[J]] permanecen constantes.
- Modelo extendido: permite tratar rozamiento, excitacion externa, medios no homogeneos y simetrias solo aproximadas.
- Precision: el ideal es exacto dentro de sus hipotesis; el extendido estima desviaciones y tasas de perdida.
- Complejidad: el ideal exige identificar simetria y generador; el extendido exige cuantificar el mecanismo de ruptura.
- Uso didactico: el ideal enseña la conexion profunda entre forma de [[L]] y conservacion; el extendido evita convertir esa conexion en una receta automatica.

La decision practica es clara: usar el modelo ideal para descubrir invariantes y simplificar la dinamica, y pasar al extendido cuando el propio sistema muestre que el invariante ya no se mantiene dentro de la tolerancia fisica esperada.
`;export{e as default};
