const a=`# Ejemplo tipo examen

## Enunciado

Una espira rectangular se coloca dentro de una region donde el campo magnetico es uniforme. El campo tiene modulo 0.40 T, el area de la espira es 0.030 m² y la orientacion inicial tiene factor [[cos_theta]] de 0.75. Despues se gira la espira hasta que el factor de orientacion pasa a 0.20. Determinar el flujo inicial, el flujo final y la variacion de flujo.

## Datos

- Campo magnetico uniforme: 0.40 T.
- Area de la espira: 0.030 m².
- Factor de orientacion inicial: 0.75.
- Factor de orientacion final: 0.20.
- Misma normal elegida durante todo el proceso.

## Definición del sistema

El sistema fisico es una sola espira plana. La superficie relevante es el area encerrada por la espira, no el grosor del cable. La normal se elige una vez y se conserva para comparar [[Phi_i]] y [[Phi_f]].

## Modelo físico

Se usa el modelo de campo uniforme y superficie plana. Las magnitudes nucleares son [[B]], [[B_perp]], [[A]], [[cos_theta]], [[Phi_B]] y [[DeltaPhi]]. Como el campo es uniforme y el area no cambia, el unico cambio fisico procede de la orientacion.

## Justificación del modelo

El enunciado indica campo uniforme y una espira plana, por lo que el flujo puede describirse con el modelo algebraico. El modelo dejaria de ser suficiente si el campo variara mucho sobre la espira, si la superficie se deformara o si la normal cambiara de convencion entre estado inicial y final.

## Resolución simbólica

Primero se calcula el flujo en cada estado mediante:

{{f:flujo_uniforme}}

La componente normal que justifica la lectura de orientacion es:

{{f:componente_normal}}

La escala maxima de referencia para esa espira y ese campo es:

{{f:flujo_maximo}}

Finalmente, la variacion que importa para induccion se obtiene mediante:

{{f:variacion_flujo}}

## Sustitución numérica

Para el estado inicial, multiplicar 0.40 T por 0.030 m² y por 0.75 da 0.0090 Wb. Por tanto [[Phi_i]] tiene valor 0.0090 Wb.

Para el estado final, el mismo producto usando el factor 0.20 da 0.0024 Wb. Por tanto [[Phi_f]] tiene valor 0.0024 Wb.

La componente normal inicial [[B_perp]] se obtiene aplicando el factor 0.75 al campo de 0.40 T, lo que da 0.30 T. En el estado final, aplicar el factor 0.20 da una componente normal de 0.080 T.

La escala maxima se obtiene con el campo y el area sin perdida de orientacion; el resultado es 0.012 Wb. Asi [[Phi_max]] permite comprobar que ambos flujos reales quedan por debajo del maximo.

La variacion final menos inicial da un cambio de -0.0066 Wb. Por tanto [[DeltaPhi]] es negativa y su modulo es 0.0066 Wb.

## Validación dimensional

El tesla multiplicado por metro cuadrado produce weber. En notacion dimensional, \`T·m²\` corresponde a \`[M L² T⁻² I⁻¹]\`, que es la dimension de [[Phi_B]].

El factor [[cos_theta]] es adimensional, por lo que no altera las unidades. La resta entre [[Phi_f]] y [[Phi_i]] tambien conserva weber, asi que [[DeltaPhi]] tiene la misma unidad fisica que el flujo.

## Interpretación física

El flujo disminuye porque la espira se orienta peor frente al campo. Ni [[B]] ni [[A]] cambian; el cambio esta enteramente en [[cos_theta]] y en la componente normal [[B_perp]]. Fisicamente, la espira sigue dentro del mismo campo, pero ofrece menos area proyectada a las lineas de campo.

El signo negativo de [[DeltaPhi]] no indica un flujo imposible. Indica que, con la normal elegida, el flujo final es menor que el inicial. Este signo sera esencial al estudiar la fem inducida y la oposicion descrita por la ley de Lenz.

Si el giro hubiera continuado hasta invertir la espira, el signo de [[Phi_B]] podria cambiar aunque [[B]] y [[A]] siguieran iguales. Esa posibilidad muestra que el flujo es una lectura orientada, no una simple cantidad de campo acumulada sin direccion.

# Ejemplo de aplicación real

## Contexto

En una dinamo escolar, una bobina gira entre polos magneticos. Aunque el campo del iman sea casi constante, el flujo cambia porque cambia la orientacion de la bobina. Este cambio periodico de [[Phi_B]] es la base de la generacion electrica elemental.

## Estimación física

Supongamos una bobina con area efectiva de 0.005 m² en un campo de 0.20 T. El flujo maximo de una espira es aproximadamente 0.001 Wb. Cuando la bobina gira desde cruce perpendicular hasta orientacion tangente, el flujo pasa de ese valor maximo a un valor cercano a cero.

Si la bobina tiene muchas vueltas, el flujo enlazado total aumenta en proporcion al numero de espiras, pero la idea fisica no cambia: lo importante es que [[DeltaPhi]] se repite ciclo tras ciclo.

## Interpretación

El dispositivo no necesita aumentar [[B]] para producir variacion de flujo; basta cambiar la orientacion. Esta lectura separa la causa geometrica de la causa magnetica y explica por que los generadores convierten rotacion mecanica en senal electrica.

El orden correcto de analisis es identificar [[Phi_max]], leer como cambia [[cos_theta]] y despues interpretar [[DeltaPhi]]. Si se mira solo el campo del iman, se pierde la razon principal por la que la dinamo funciona.

En una dinamo real, aumentar el area de la bobina no siempre es la mejor solucion, porque tambien aumenta tamano y resistencia. La lectura de flujo ayuda a decidir si conviene mejorar [[B]], aumentar [[A]] o cambiar la orientacion efectiva durante el giro.
`;export{a as default};
