const e=`## Modelo ideal

El modelo estándar del proceso isocórico describe un gas ideal encerrado en un recipiente perfectamente rígido que intercambia calor con el entorno manteniendo el volumen constante. En este modelo el trabajo mecánico es exactamente nulo, la variación de energía interna [[DeltaU]] es igual al calor [[Q]] absorbido, y el calor específico [[Cv]] se trata como una constante determinada por el tipo de gas (monoatómico, diatómico o triatómico).

La simplificación central es que el recipiente no se deforma y el gas se comporta como gas ideal, lo que implica que la energía interna depende solo de la temperatura. Esto permite calcular [[DeltaU]] sin conocer la trayectoria del proceso, únicamente los estados inicial y final. Las magnitudes que se conservan en el modelo son [[n]] (cantidad de sustancia) y [[V]] (volumen); las que cambian son [[T]], [[p]], [[DeltaU]] y [[Q]].

## Hipótesis

- El recipiente es perfectamente rígido: no se deforma bajo ninguna presión interna, de modo que [[V]] permanece exactamente constante durante todo el proceso.
- El gas se comporta como gas ideal: las fuerzas intermoleculares son despreciables y la energía interna depende únicamente de [[T]].
- El calor específico molar [[Cv]] es constante en el rango de temperaturas del problema.
- No hay pérdidas de masa: el gas no escapa ni reacciona químicamente con las paredes.
- El proceso es quasi-estático: los estados intermedios son de equilibrio, lo que permite usar variables de estado en cada instante.

Violar la primera hipótesis introduce un término de trabajo no nulo y el modelo isocórico deja de aplicarse. Violar la segunda (gas no ideal) significa que [[Cv]] depende de [[T]] y la relación lineal [[DeltaU]] igual a [[n]] por [[Cv]] por [[DeltaT]] es solo una aproximación. Violar la cuarta (fuga de gas) cambia [[n]] durante el proceso, invalidando completamente el cálculo.

## Dominio de validez cuantitativo

El modelo isocórico ideal es válido cuando la presión del gas es inferior a 50 atm, ya que por encima de ese valor los gases reales empiezan a desviarse notablemente del comportamiento ideal. Para temperaturas entre 200 K y 1000 K, [[Cv]] permanece prácticamente constante para gases mono y diatómicos, con errores menores al 5 %. A temperaturas superiores a 1000 K los modos vibracionales del gas diatómico se activan y [[Cv]] aumenta, produciendo un error superior al 10 % si se usa el valor constante.

En cuanto a la rigidez del recipiente, la deformación típica de un recipiente de acero industrial a presiones de hasta 200 bar es inferior al 0.1 %, lo que produce un trabajo mecánico despreciable frente a [[DeltaU]]. Sin embargo, para recipientes de materiales flexibles o a presiones superiores a 500 bar, el volumen puede cambiar más del 1 % y el modelo deja de ser estrictamente aplicable.

## Señales de fallo del modelo

- Si el cociente entre la presión final y la inicial no coincide con el cociente entre [[T2]] y [[T1]], hay una desviación del gas ideal o una fuga de masa durante el proceso.
- Si [[DeltaU]] calculado con la fórmula lineal no coincide con el calor medido experimentalmente en más de un 10 %, es probable que [[Cv]] haya variado en el rango de temperatura o que el gas sea real con interacciones intermoleculares significativas.
- Si se detecta que el volumen del recipiente ha cambiado ligeramente al final del proceso (por deformación o expansión térmica de las paredes), el trabajo real no es nulo y el modelo isocórico puro sobreestima [[DeltaU]].
- Si durante el proceso el gas alcanza una temperatura próxima a su punto de condensación o de disociación molecular, el modelo de gas ideal falla completamente.

## Modelo extendido o alternativo

El modelo extendido del proceso isocórico incorpora un [[Cv]] dependiente de la temperatura, calculado mediante la teoría estadística de los grados de libertad activos. Para gases diatómicos por encima de 800 K, los modos vibracionales se activan progresivamente y [[Cv]] puede llegar a valer siete medios de R en lugar de cinco medios, lo que supone un incremento de hasta un 40 % en la capacidad calorífica.

Para gases reales, se pueden usar ecuaciones de estado como la de Van der Waals, que añaden correcciones por volumen molecular y fuerzas atractivas entre moléculas. En este modelo extendido, [[DeltaU]] se calcula integrando el calor específico real sobre el rango de temperatura, y la relación entre presión y temperatura ya no es exactamente lineal.

Cuando conviene pasar al modelo extendido: cuando el proceso involucra gases a temperaturas superiores a 800 K, cuando se trabaja con gases pesados (CO2, vapor de agua) donde los modos vibracionales son relevantes ya desde temperaturas moderadas, o cuando la presión supera las 100 atm. Cambiar a este modelo cuando la precisión requerida en [[DeltaU]] sea menor del 5 %.

## Comparación operativa

| Aspecto | Modelo ideal isocórico | Modelo extendido |
|---|---|---|
| [[Cv]] | Constante | Función de [[T]] |
| Precisión en [[DeltaU]] | ±5-10 % en rango moderado | ±1-2 % en cualquier rango |
| Complejidad de cálculo | Producto algebraico simple | Integral numérica o tablas |
| Rango de validez | Temperaturas moderadas, baja presión | Altas temperaturas o gases reales |
| Señal de fallo | Discrepancia en razón presiones/temperaturas | Variación medida de [[Cv]] |

El modelo ideal es suficiente para la gran mayoría de aplicaciones de laboratorio y de educación formal. El modelo extendido es necesario en ingeniería de procesos, diseño de motores de alta temperatura y cálculos de combustión.
`;export{e as default};
