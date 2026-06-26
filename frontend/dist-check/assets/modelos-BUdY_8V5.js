const e=`## Modelo ideal

El modelo ideal de materiales magneticos usa un medio lineal, isotropo, homogeneo y reversible. En ese marco, [[H]] actua como excitacion aplicada, [[M]] como respuesta interna proporcional y [[B]] como campo total resultante. La complejidad microscopica de dominios, espines y corrientes ligadas queda resumida por [[mu]], [[mu_r]] y [[chi_m]].

La simplificacion central es tratar la curva constitutiva como una recta dentro del tramo estudiado. Esto conserva la diferencia fisica entre fuente, material y resultado, pero ignora saturacion, remanencia, coercitividad, anisotropia y perdidas por ciclo.

## Hipótesis

- El material se comporta linealmente: si se viola, [[mu_r]] deja de ser una pendiente constante y el calculo extrapola mal.
- La respuesta es reversible: si se viola, aparece memoria magnetica y [[M]] depende de la historia previa.
- El medio se trata como isotropo: si se viola, la direccion de [[B]] puede no coincidir con la de [[H]].
- La temperatura permanece estable: si se viola, la respuesta magnetica puede cambiar durante el proceso.
- La geometria no introduce desmagnetizacion dominante: si se viola, el campo interno efectivo difiere del campo aplicado estimado.

Estas hipotesis no son detalles administrativos. Son la frontera entre usar una constante material y necesitar una curva experimental.

## Dominio de validez cuantitativo

El modelo es razonable cuando el tramo usado de la curva [[B]] frente a [[H]] conserva pendiente casi constante. Como regla de trabajo, un error inferior al 5 % en la pendiente experimental permite tratar [[mu]] como efectiva para calculos introductorios.

En materiales blandos, campos por debajo de 1 T < zona de saturacion de muchos nucleos tecnicos suelen permitir una primera estimacion, aunque el umbral real depende de la aleacion. En materiales diamagneticos y paramagneticos debiles, la respuesta es tan pequeña que el orden de magnitud de [[chi_m]] suele controlar mas que la saturacion.

## Señales de fallo del modelo

Una primera señal de fallo es que la grafica [[B]] frente a [[H]] se curva de forma visible. Si al duplicar la excitacion el campo total aumenta mucho menos de lo esperado, la pendiente efectiva ya no es constante.

Otra señal es la remanencia: al retirar la excitacion, [[M]] no vuelve al estado inicial. Tambien son sospechosos el calentamiento por perdidas magneticas, la dependencia con la frecuencia, la diferencia entre ciclos de subida y bajada, o una respuesta distinta al girar la muestra.

## Modelo extendido o alternativo

Cuando conviene pasar al modelo extendido: si aparecen saturacion, remanencia o ciclos de histeresis, se sustituye la constante [[mu_r]] por una curva experimental del material. En ese modelo, el estado depende del punto de trabajo y de la trayectoria seguida.

Para materiales anisotropos, conviene cambiar a un modelo tensorial de permeabilidad. Para dispositivos con entrehierro, conviene pasar al modelo de circuito magnetico con reluctancias, porque la geometria puede dominar mas que el material.

## Comparación operativa

| Criterio | Modelo lineal ideal | Modelo extendido |
|---|---|---|
| Precision | Buena en tramos de pendiente estable | Mejor cerca de saturacion o con memoria |
| Complejidad | Usa [[mu_r]] y [[chi_m]] como parametros compactos | Requiere curva, historia y a veces frecuencia |
| Rango de aplicacion | Materiales debiles o ferromagneticos lejos de saturacion | Nucleos reales, imanes, transformadores y ciclos |
| Lectura fisica | Distingue [[H]], [[M]] y [[B]] con claridad | Añade remanencia, coercitividad y perdidas |
| Limite principal | No describe histeresis | Exige datos experimentales fiables |
`;export{e as default};
