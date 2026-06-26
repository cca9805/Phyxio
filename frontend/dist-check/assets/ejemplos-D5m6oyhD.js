const e=`# Ejemplo tipo examen

## Enunciado
Un transductor ultrasónico de 5 MHz se utiliza para inspeccionar una placa de acero. La amplitud inicial del pulso es de 2.0 MPa. Después de atravesar 15 mm de material, la amplitud medida es de 0.8 MPa. Determine el coeficiente de atenuación del material, la longitud de atenuación característica y la pérdida total en decibelios. Analice si la frecuencia seleccionada es adecuada para detectar defectos de 2 mm de tamaño.

## Datos
- Frecuencia del transductor: 5 MHz
- Amplitud inicial: 2.0 MPa
- Amplitud a 15 mm: 0.8 MPa
- Distancia de propagación: 15 mm
- Tamaño mínimo de defecto a detectar: 2 mm
- Velocidad del sonido en acero: 5900 m/s

## Definición del sistema
El sistema consiste en una onda ultrasónica longitudinal que se propaga en acero homogéneo. Se asume propagación en haz colimado (ondas planas) y atenuación exponencial pura. La magnitud dominante es el coeficiente de atenuación [[alpha]], que caracteriza las pérdidas intrínsecas del material. La amplitud inicial [[A0]] representa la señal en el origen, mientras que [[A]] es la amplitud atenuada después de recorrer la distancia [[x]].

## Modelo físico
Se aplica el modelo de atenuación exponencial para ondas planas en medio homogéneo. La relación entre amplitud inicial [[A0]], amplitud a distancia [[A]], coeficiente de atenuación [[alpha]] y distancia [[x]] sigue la ley exponencial. El modelo es válido mientras el haz sea colimado y el material sea homogéneo e isótropo. Este modelo fundamental conecta la pérdida de amplitud con las propiedades intrínsecas del material a través de [[alpha]].

## Justificación del modelo
El modelo exponencial es apropiado porque la distancia (15 mm) es mucho menor que el diámetro típico del haz (10-20 mm), cumpliendo la aproximación de onda plana. El acero es homogéneo a escala de la longitud de onda (1.2 mm), por lo que [[alpha]] puede considerarse constante. El modelo dejaría de ser válido si la distancia fuera comparable al diámetro del haz o si existieran gradientes de propiedades en el material. La validez también requiere que no haya dispersión geométrica significativa, lo cual se cumple en la configuración descrita.

## Resolución simbólica
Para determinar el coeficiente de atenuación, partimos de la ley exponencial fundamental que relaciona la amplitud inicial [[A0]], la amplitud a distancia [[A]], el coeficiente de atenuación [[alpha]] y la distancia [[x]]:

{{f:atenuacion_exponencial}}

Esta fórmula establece la relación exponencial entre la pérdida de amplitud y la distancia. Para obtener [[alpha]], se aplica logaritmo natural a ambos lados y se despeja el coeficiente de atenuación, aislándolo como cociente entre el logaritmo del ratio de amplitudes y la distancia recorrida.

Una vez obtenido [[alpha]], calculamos la longitud de atenuación característica usando la relación inversa:

{{f:longitud_atenuacion}}

Esta fórmula nos da la distancia donde la amplitud se reduce al 37% del valor inicial.

Para expresar la pérdida en decibelios, utilizamos la relación logarítmica base 10:

{{f:perdida_db}}

Esta escala logarítmica permite comparar pérdidas en diferentes rangos de amplitud y es estándar en ingeniería de ultrasonidos.

Para evaluar la idoneidad de la frecuencia, consideramos la dependencia del coeficiente con la frecuencia:

{{f:dependencia_frecuencia}}

Además, en medios donde la dispersión es significativa, la relación entre velocidad de fase y de grupo:

{{f:relacion_dispersion}}

Estas relaciones permiten predecir cómo cambiaría la atenuación y la propagación del pulso al variar la frecuencia del transductor.

## Sustitución numérica
Para el coeficiente de atenuación, tomar el logaritmo natural del cociente 0.8/2.0 y dividir por 0.015 m. El cociente 0.8/2.0 es 0.4, cuyo logaritmo natural es aproximadamente negativo 0.916. Dividiendo negativo 0.916 entre 0.015 m da aproximadamente 61.1 Np/m. Por tanto [[alpha]] tiene un valor de aproximadamente 61.1 Np/m.

Para la longitud de atenuación, calcular el inverso de 61.1 Np/m, lo que da aproximadamente 0.0164 m o 16.4 mm. Así [[L_d]] tiene un valor de aproximadamente 16.4 mm.

Para la pérdida en decibelios, calcular 20 × log10(2.0/0.8). El cociente 2.0/0.8 es 2.5, cuyo logaritmo base 10 es aproximadamente 0.398. Multiplicando por 20 da aproximadamente 7.96 dB. Por tanto [[L_db]] tiene un valor de aproximadamente 7.96 dB.

## Validación dimensional
- Coeficiente de atenuación: adimensional/metro = \`[L⁻¹]\` ✓
- Longitud de atenuación: metro = \`[L]\` ✓  
- Pérdida en dB: adimensional (referencia dB) ✓

Unidades de [[alpha]]: el logaritmo natural es adimensional, dividido por metros resulta Np/m, dimensión \`[L⁻¹]\`.

Unidades de [[L_d]]: el inverso de Np/m resulta metros, dimensión \`[L]\`.

Unidades de [[L_db]]: logaritmo base 10 es adimensional, multiplicado por 20 mantiene adimensionalidad con referencia dB.

Desglose dimensional: el argumento del exponencial [[alpha]]·[[x]] debe ser adimensional, resultado de \`[L⁻¹]\` por \`[L]\` igual a \`[1]\`.

El cociente [[A]]/[[A0]] es adimensional por naturaleza, consistente con las expectativas del modelo.

## Interpretación física

El coeficiente de atenuación de 61.1 Np/m revela que el acero presenta pérdidas moderadas a 5 MHz. Este valor indica que el material disipa energía a una tasa que permite inspecciones de profundidad media mientras mantiene buena resolución. La longitud de atenuación de 16.4 mm establece la escala física característica: cada 16.4 mm de material, la señal ultrasónica pierde el 63% de su amplitud, lo cual es consistente con aceros de carbono estándar a esta frecuencia.

La pérdida total de 7.96 dB sobre 15 mm confirma que la señal permanece bien por encima del umbral de detección típico (40 dB), garantizando una relación señal-ruido adecuada para detección fiable de defectos. Este valor de pérdida es óptimo para aplicaciones industriales donde se necesita balance entre penetración y sensibilidad.

La longitud de onda calculada de 1.18 mm cumple el criterio fundamental de detección: debe ser menor que la mitad del tamaño del defecto objetivo (1 mm para defectos de 2 mm). Esto asegura que el defecto producirá reflexiones significativas y no será "invisible" para la frecuencia seleccionada. La elección de 5 MHz es por tanto físicamente apropiada para los requisitos de detección especificados.

El análisis de compromiso frecuencia-resolución-penetración muestra que cualquier cambio en la frecuencia tendría consecuencias predecibles: aumentar a 10 MHz mejoraría la resolución a 0.59 mm pero probablemente duplicaría [[alpha]] según la ley de potencia, reduciendo la penetración efectiva a menos de 40 mm. Disminuir a 2 MHz aumentaría la penetración a >200 mm pero la longitud de onda de 2.95 mm sería insuficiente para detectar defectos de 2 mm, violando el criterio de detección.

La profundidad máxima teórica de detección, calculada como cinco veces la longitud de atenuación, dando aproximadamente 82 mm, representa el límite práctico donde la señal alcanzaría el umbral de ruido del sistema. Este valor es adecuado para la mayoría de componentes industriales de espesor moderado y confirma que la configuración seleccionada es físicamente viable para la aplicación descrita.

En este caso específico, aunque el acero no es fuertemente dispersivo a 5 MHz, es importante considerar la relación entre [[v_f]] y [[v_g]] para aplicaciones de alta precisión temporal. En medios con dispersión débil, ambas velocidades difieren menos de un 1%, pero en materiales con microestructura compleja la diferencia puede superar el 10%, afectando la resolución temporal en la detección de defectos muy cercanos.

# Ejemplo de aplicación real

## Contexto
En una planta de generación de energía, se debe inspeccionar un tubo de aleación de titanio de 50 mm de espesor para detectar corrosión interna. El tubo opera a 400°C y está sometido a vibraciones que pueden causar fisuras por fatiga. Se dispone de transductores de 2.5 MHz y 10 MHz, y se necesita determinar la frecuencia óptima que balancee resolución y penetración.

## Estimación física
Para titanio a temperatura elevada, el coeficiente de atenuación típico es aproximadamente 15 Np/m a 2.5 MHz y sigue una ley de potencia con exponente n de aproximadamente 1.2. Usando la relación de dependencia con la frecuencia:

{{f:dependencia_frecuencia}}

A 10 MHz, [[alpha]] sería aproximadamente 15 multiplicado por (10/2.5) elevado a la potencia de 1.2, lo que da aproximadamente 94.5 Np/m.

Con 2.5 MHz, la longitud de atenuación es aproximadamente 66.7 mm. La pérdida total a 50 mm sería aproximadamente 0.75 longitudes, correspondiente a una atenuación donde permanece aproximadamente el 47% de amplitud. En dB, esto es aproximadamente 6.5 dB, perfectamente detectable.

Con 10 MHz, la longitud de atenuación es aproximadamente 10.6 mm. La pérdida total a 50 mm sería aproximadamente 4.7 longitudes, correspondiente a una atenuación donde permanece aproximadamente el 0.9% de amplitud. En dB, esto es aproximadamente 40 dB, cerca del límite de detección.

La longitud de onda a 2.5 MHz (asumiendo 6100 m/s en titanio) es 2.44 mm, permitiendo detectar defectos mayores a 1.2 mm. A 10 MHz, la longitud de onda es 0.61 mm, permitiendo detectar defectos mayores a 0.3 mm.

## Interpretación
Para detección de corrosión interna (típicamente > 1 mm), 2.5 MHz es suficiente y proporciona excelente penetración con pérdidas moderadas. Para detección de fisuras por fatiga incipientes (pueden ser < 0.5 mm), 10 MHz sería necesario pero la penetración sería limitada.

La estrategia óptima sería usar 2.5 MHz para inspección general de corrosión y 10 MHz solo para regiones críticas donde se sospechen fisuras pequeñas. La temperatura elevada aumenta [[alpha]] aproximadamente un 20% comparado con temperatura ambiente, por lo que los márgenes de detección son más conservadores.

En este caso, la frecuencia de 2.5 MHz proporciona el mejor compromiso para la aplicación principal, con profundidad útil de penetración de aproximadamente tres veces la longitud de atenuación, más que suficiente para el espesor del tubo.
`;export{e as default};
