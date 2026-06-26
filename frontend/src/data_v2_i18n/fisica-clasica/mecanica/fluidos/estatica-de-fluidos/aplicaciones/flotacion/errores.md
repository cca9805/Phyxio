# Errores frecuentes en la Flotación

## Errores conceptuales

### Error 1: Creer que la flotación depende solo de la masa
Muchos alumnos piensan que si un objeto es muy pesado (masivo), automáticamente se hunde, mientras que si es ligero, flota.
- **Por qué parece correcto**: Un clip es ligero y un tronco de madera es masivo. En la experiencia cotidiana, los objetos pequeños suelen ser menos intimidantes.
- **Por qué es incorrecto**: La flotación depende de la **densidad promedio** y del volumen desplazado, no de la masa absoluta. Un portaaviones de 100.000 toneladas flota, mientras que un clip de 1 gramo se hunde.
- **Señal de detección**: Resolver un problema usando solo el peso sin considerar el volumen sumergido.
- **Corrección**: Analizar siempre la densidad relativa \([[rho_obj]] / [[rho_f]]\).
- **Mini-ejemplo**: Una bola de acero de 1 kg se hunde; una bolsa de aire de 1 kg flota.

### Error 2: Confundir Empuje con Presión
Creer que el empuje es una fuerza que el fluido hace "porque sí", sin conectarlo con la diferencia de presiones.
- **Por qué parece correcto**: El empuje se siente como una fuerza neta ascendente misteriosa que aparece al sumergir algo.
- **Por qué es incorrecto**: El empuje es la resultante de todas las fuerzas de presión que actúan sobre el cuerpo. Como la presión aumenta con la profundidad, la fuerza hacia arriba en la cara inferior es mayor que la fuerza hacia abajo en la cara superior.
- **Señal de detección**: Dificultad para explicar el origen de la fuerza o creer que el empuje es constante a cualquier profundidad en un recipiente abierto.
- **Corrección**: Derivar el empuje como la integral de la presión sobre la superficie del cuerpo sumergido.
- **Mini-ejemplo**: Si no hay fluido debajo del cuerpo (ej. una ventosa pegada herméticamente al fondo), no hay empuje ascendente, solo presión hacia abajo.

## Errores de modelo

### Error 3: Aplicar el modelo en fluidos con corrientes rápidas
Intentar usar la igualdad $E=P$ de forma aislada cuando el objeto está siendo arrastrado por una corriente fuerte.
- **Por qué parece correcto**: Porque el Principio de Arquímedes es una ley universal.
- **Por qué es incorrecto**: En fluidos en movimiento, entran en juego las fuerzas de arrastre (drag) y el principio de Bernoulli. La flotación estática es solo una parte de la dinámica total.
- **Señal de detección**: El objeto se inclina o se sumerge más de lo previsto por la hidrostática pura.
- **Corrección**: Sumar el término de presión dinámica al cálculo del equilibrio y considerar el flujo de cantidad de movimiento.
- **Mini-ejemplo**: Un tronco en un río rápido no solo flota, sino que se sumerge más al chocar con obstáculos debido a la presión dinámica.

### Error 4: Ignorar la compresibilidad en grandes profundidades
Suponer que el volumen total del objeto [[Vtot]] es constante independientemente de la presión externa.
- **Por qué parece correcto**: Los sólidos y líquidos se consideran incompresibles en la mayoría de los problemas escolares.
- **Por qué es incorrecto**: A presiones extremas, incluso los materiales sólidos se comprimen. Si el volumen [[Vtot]] disminuye, la densidad aumenta, lo que puede romper el equilibrio de flotación inicial.
- **Señal de detección**: Resultados experimentales en el fondo del mar que no coinciden con los cálculos de superficie.
- **Corrección**: Incorporar el módulo de compresibilidad para calcular el volumen real bajo presión.
- **Mini-ejemplo**: Los submarinos deben compensar la compresión de su casco para mantener una flotabilidad neutra.

## Errores matemáticos

### Error 5: No usar unidades coherentes de densidad
Mezclar $\text{g/cm}^3$ con $\text{kg/m}^3$ en la misma fórmula.
- **Por qué parece correcto**: Porque las densidades relativas son adimensionales y a veces "parece" que no importa.
- **Por qué es incorrecto**: El factor de error es de 1000. Una fracción sumergida de 0.8 podría calcularse erróneamente como un valor absurdo.
- **Señal de detección**: Obtener fracciones sumergidas mayores a 1000 o menores a 0.001.
- **Corrección**: Convertir siempre a unidades del SI ($\text{kg/m}^3$).
- **Mini-ejemplo**: Usar densidad 1 para agua y densidad 800 para aceite en la misma resta.

## Errores de interpretación

### Error 6: Suponer que el centro de flotación es el centro de masa
Creer que el empuje se aplica siempre en el mismo punto geométrico que el peso.
- **Por qué parece correcto**: Por simetría en objetos simples como cubos homogéneos.
- **Por qué es incorrecto**: El peso se aplica en el centro de masa del objeto total, pero el empuje se aplica en el centro de masa del **volumen desplazado**.
- **Señal de detección**: El objeto siempre se voltea (capsize) al intentar que flote.
- **Corrección**: Diferenciar $G$ (centro de gravedad) de $C$ (centro de carena).
- **Mini-ejemplo**: Un barco con mucha carga en la cubierta tiende a volcar porque su centro de gravedad sube demasiado respecto al de carena.

## Regla de autocontrol rápido
Antes de dar por bueno un resultado de flotación, verifica la **Prueba de Consistencia de Densidad**: 
1. Si la densidad del objeto es menor que la densidad del fluido, el resultado de la fracción sumergida **debe** ser decimal entre 0 y 1.
2. Multiplica siempre la densidad relativa por el volumen total para verificar que el volumen sumergido resultante no sea físicamente imposible. Si tu cálculo dice que se sumerge el 110%, el objeto simplemente se hunde.