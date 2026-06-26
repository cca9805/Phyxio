const e=`## Modelo ideal

El modelo ideal trata el medio como **lineal, homogeneo y estable**. Cada onda produce una perturbacion propia y el estado observable se obtiene sumando esas perturbaciones en el mismo punto e instante. La superposicion no altera la identidad de las ondas: despues del cruce, cada una continua propagandose como si la otra no hubiera modificado permanentemente el medio.

La simplificacion central es separar causa y lectura local. [[y_1]] y [[y_2]] son aportes individuales, mientras que [[y_resultante]] es lo que mide un sensor situado en el punto de cruce. La energia o intensidad se interpreta despues, usando [[A_resultante]] e [[I_relativa]] cuando corresponde.

## Hipótesis

- El medio es lineal: si se duplica una perturbacion pequena, la respuesta del medio tambien se duplica; si se viola, aparecen distorsiones.
- Las ondas se evaluan en el mismo punto e instante; si no, la suma mezcla estados fisicos incompatibles.
- Las amplitudes son pequenas frente a la escala del sistema; si no, la tension, presion o indice efectivo pueden cambiar.
- Las ondas no se absorben de forma apreciable durante el cruce; si hay absorcion fuerte, la suma local no describe toda la evolucion.

## Dominio de validez cuantitativo

El modelo es razonable cuando la amplitud es menor del 5 % de la escala geometrica dominante del sistema. En una cuerda de 1 m, desplazamientos de pocos milimetros suelen comportarse linealmente. En acustica ordinaria, presiones sonoras pequeñas frente a la presion ambiental mantienen el regimen lineal.

Como regla de orden de magnitud, si la perturbacion cambia propiedades del medio de forma visible, se abandona la superposicion simple. Una amplitud 10 % mayor que la escala de linealidad ya exige comprobar efectos no lineales.

## Señales de fallo del modelo

Una señal clara de fallo es que dos pulsos no recuperen su forma despues de cruzarse. Si quedan deformados, retrasados o con armonicos nuevos, el medio ha introducido interaccion no lineal o disipacion significativa.

Otra señal es que el resultado medido no cambie proporcionalmente al duplicar una fuente. Si duplicar [[A_1]] no duplica el aporte esperado de amplitud, la respuesta deja de ser lineal y la formula de suma directa pierde valor predictivo.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si las amplitudes son grandes, si el medio cambia durante la propagacion o si aparecen armonicos nuevos. En esos casos se usan ecuaciones no lineales, modelos dispersivos o simulacion numerica.

La transicion al modelo extendido no elimina la idea de suma, pero la vuelve local y aproximada. Puede seguir siendo util descomponer una señal en modos, aunque esos modos ya no evolucionen de manera completamente independiente.

## Comparación operativa

| Criterio | Modelo lineal de superposicion | Modelo extendido |
|---|---|---|
| Precision | Alta para amplitudes pequeñas | Mejor en amplitudes grandes |
| Complejidad | Baja, suma algebraica directa | Alta, requiere ecuaciones no lineales |
| Lectura grafica | Curvas individuales y suma | Evolucion acoplada o distorsionada |
| Limite | No predice choques ni saturacion | Puede incluir choque, absorcion o dispersion |
`;export{e as default};
