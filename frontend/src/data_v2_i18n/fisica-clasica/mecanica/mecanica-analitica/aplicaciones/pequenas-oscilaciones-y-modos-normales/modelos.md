# Modelos para Pequenas oscilaciones y modos normales

## Modelo ideal

El modelo ideal es un sistema clasico regular en el que equilibrio estable, linealizacion, matrices de masa y rigidez, autovalores, frecuencias propias, modos normales y superposicion modal puede describirse con variables suaves [[eta]], [[M]], [[K]], [[omega]], [[A]], [[phi]], [[t]]. El modelo asume que la estructura analitica es el objeto que se pone a prueba, no una decoracion opcional.

## Hipotesis

- Las variables pertenecen al mismo sistema mecanico coherente.
- Las transformaciones, derivadas, separaciones o linealizaciones son regulares.
- La magnitud dominante [[omega]] tiene el papel fisico declarado en magnitudes.yaml.
- El caso limite sigue siendo reconocible despues de aplicar la relacion formal.

## Dominio de validez cuantitativo

El modelo es cuantitativamente valido mientras la escala estructural permanece controlada. Las pequenas oscilaciones exigen [[eta]] pequena; los cambios canonicos exigen condicion de corchete exacta; la separacion Hamilton-Jacobi exige una escala de accion consistente; los criterios de Poisson exigen observables suaves. Una deriva del diez por ciento en una comprobacion estructural supuestamente exacta ya es una alerta de modelo.


El criterio cuantitativo debe ser explicito: para una aproximacion declarada pequena, usa un control como variacion relativa <= 10% (0.10); para una condicion canonica o de corchete exacta, la tolerancia teorica aceptada es cero y solo se admite redondeo numerico en computacion. Conviene cambiar de modelo cuando se supera esa cota, cuando aparece una transformacion singular, cuando un modo deja de ser lineal o cuando la estructura conservada deriva sin causa fisica.

## Senales de fallo del modelo

El modelo falla cuando el resultado depende de variables no admisibles, cuando una estructura conservada deriva sin causa fisica, cuando se mezclan dimensiones o cuando no se recupera un caso limite. En esos casos la formula puede escribirse, pero ya no representa el sistema original.

## Modelo extendido o alternativo

Usa mecanica hamiltoniana con ligaduras, teoria de perturbaciones, modos normales no lineales, integracion numerica o un modelo lagrangiano directo cuando las hipotesis fallen. La extension debe elegirse por el fallo fisico, no porque el algebra resulte incomoda.

## Comparacion operativa

Las ecuaciones directas son mejores para trayectorias explicitas. Este leaf avanzado es mejor para estructura, reduccion y diagnostico. Los modelos numericos son mejores cuando la estructura reducida no cierra analiticamente. El modelo correcto es el mas simple que conserva la pregunta fisica.

## Criterio de transicion

Conviene cambiar al modelo alternativo cuando el error observable es mayor que la tolerancia declarada, cuando se pierde el caso limite o cuando la magnitud dominante deja de conservar su unidad y su papel fisico. Esta transicion forma parte de la fisica, no es una reparacion final.
