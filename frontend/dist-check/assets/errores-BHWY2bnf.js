const e=`# Errores frecuentes

## Error 1: elegir la operacion equivocada

Parece razonable usar la misma cuenta para todos los vectores. Falla porque suma, proyeccion y giro responden preguntas distintas. Se detecta leyendo si el enunciado pide resultante, componente, alineacion o eje de rotacion. Se corrige eligiendo la operacion antes de sustituir numeros.

## Error 2: perder el significado de la variable

El error aparece al tratar una flecha como numero sin referencia. Una fuerza, una velocidad o un campo tienen unidades y significado diferentes. Se detecta preguntando que magnitud representa cada vector. Se corrige escribiendo nombre fisico, unidad y sistema de ejes.

## Error 3: ignorar unidades

Las operaciones vectoriales conservan o combinan unidades. Una componente de fuerza sigue en newtons, un trabajo sale en joules y un torque en newton metro. Se detecta calculando unidades finales. Se corrige operando con unidades junto a los numeros.

## Error 4: confundir signo con modulo

Un modulo no puede ser negativo, pero una componente si. Borrar signos destruye direccion y sentido. Se detecta comparando el signo con el dibujo. Se corrige separando modulo, componente y sentido fisico.

## Error 5: aplicar una regla fuera de dominio

Algunas reglas solo valen en bases ortogonales, con vectores en el mismo sistema o en tres dimensiones. Se detecta revisando hipotesis de ejes, plano y dominio. Se corrige declarando base, dimension y limites antes de operar.

## Regla rapida de deteccion

Si una respuesta vectorial no dice direccion, sentido, unidad y significado, esta incompleta. El control minimo es dibujar el resultado y comprobar si coincide con la fisica esperada.
`;export{e as default};
