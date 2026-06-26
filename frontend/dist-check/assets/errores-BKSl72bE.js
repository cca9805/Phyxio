const e=`# Errores

## Errores conceptuales

### Error 1: usar la misma serie para todos los tubos

**Por que parece correcto:** todos los tubos tienen aire, longitud y sonido, asi que parece natural aplicar una unica regla de resonancia.

**Por que es incorrecto:** la frontera cambia la forma modal. Un tubo abierto-abierto tiene vientres de desplazamiento en ambos extremos, mientras un abierto-cerrado combina vientre y nodo. Por eso la serie de [[f_n]] cambia.

**Senal de deteccion:** aparecen armonicos pares en un tubo que el enunciado describe como cerrado por un extremo.

**Correccion conceptual:** identifica primero los extremos y solo despues elige [[n]] o [[m]].

**Mini-ejemplo:** una flauta abierta y un tubo tapado de longitud parecida no tienen la misma frecuencia fundamental ideal.

## Errores de modelo

Un error de modelo frecuente es usar [[L]] como si fuera siempre la longitud acustica. En una boca abierta, la oscilacion del aire se extiende algo fuera del tubo, y por eso [[L_eff]] puede ser mayor que la longitud fisica. Si el problema menciona correccion de extremo, ignorarla desplaza todas las frecuencias.

Tambien es un error tratar cualquier cavidad como tubo simple. Una botella, una campana o un resonador con agujeros laterales pueden requerir modelos extendidos. El tubo ideal es estrecho, casi uniforme y con extremos bien definidos.

## Errores matemáticos

El fallo matematico mas habitual es sustituir [[m]] como si fuera [[n]]. En tubo cerrado, el factor modal no avanza por todos los enteros de la serie abierta, sino por impares generados desde [[m]]. Otro fallo es colocar el cuatro del tubo cerrado donde corresponde el dos del tubo abierto, o al reves.

Las unidades tambien importan. [[v]] debe estar en m/s, [[L_eff]] en metros y [[f_n]] en hertz. Si se usan centimetros sin convertir, la frecuencia puede quedar cien veces mayor de lo razonable.

La validacion dimensional debe acabar en \`[T⁻¹]\`.

## Errores de interpretación

Un error de interpretacion es mezclar nodos de desplazamiento con nodos de presion. En un extremo cerrado, el desplazamiento del aire tiene nodo, pero la presion tiene vientre. Si no se declara que variable se esta dibujando, el modo puede parecer contradictorio.

Otro error es pensar que una resonancia fuerte significa que el tubo contiene cualquier frecuencia. En realidad, una respuesta grande indica compatibilidad entre [[L_eff]], [[v]] y la familia modal. Las frecuencias intermedias pueden excitar aire, pero no reconstruyen un patron estacionario estable.

Tambien se interpreta mal la ausencia de un armonico. Si un tubo abierto-cerrado no muestra el segundo modo de la serie abierta, eso no significa que el tubo este defectuoso. Significa que su frontera cerrada selecciona otra familia modal. La ausencia de ciertos picos es informacion fisica, no un dato perdido.

## Regla de autocontrol rápido

Antes de aceptar el resultado, pregunta: el tubo es abierto-abierto o abierto-cerrado; estoy usando [[L_eff]] y no una longitud equivocada; el indice modal es [[n]] o [[m]] segun corresponda; la frecuencia [[f_n]] queda en un orden audible razonable.

Si cualquiera de esas respuestas queda ambigua, vuelve al dibujo de nodos y vientres antes de hacer algebra. La forma modal decide que serie tiene sentido.
`;export{e as default};
