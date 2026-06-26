## Modelo ideal

El modelo canonico de tipos de onda en solidos asume un **medio elastico lineal, isotropo y homogeneo** de extension infinita (o semiespacio para las ondas superficiales). En este marco, la unica informacion necesaria son dos constantes elasticas independientes —por ejemplo, [[modulo_de_young]] y [[nu]], o equivalentemente [[modulo_de_corte]] y [[rho]]— junto con la densidad.

En este modelo cada tipo de onda (P, S, Rayleigh) existe de forma pura e independiente, sin acoplamiento entre ellos. Una perturbacion de compresion genera exclusivamente onda P; una perturbacion de corte genera exclusivamente onda S. Los tres tipos viajan con velocidades fijas determinadas por las propiedades del medio, y no hay dispersion: todas las frecuencias avanzan a la misma velocidad.

Este modelo simplificado captura el comportamiento macroscopico de la inmensa mayoria de los materiales de ingenieria en el rango de frecuencias de los ultrasonidos de inspeccion y de la sismologia de terremotos lejanos.

## Hipótesis

- El material es **isotropo**: las propiedades elasticas son identicas en todas las direcciones. Si se viola esta hipotesis (fibra de carbono, madera, tejido biologico), la velocidad de cada tipo de onda depende de la orientacion de propagacion.

- El material es **homogeneo**: las propiedades no cambian de un punto a otro. Si existe un gradiente de propiedades (recubrimiento sobre sustrato, suelo estratificado), la velocidad de la onda de Rayleigh se vuelve dependiente de la frecuencia.

- El regimen es **elastico lineal**: la tension es proporcional a la deformacion con los mismos modulos a cualquier amplitud. Si se viola (deformaciones plasticas, fractura), los modulos efectivos cambian y las velocidades de onda se alteran.

- El medio es **no viscoso**: no hay disipacion de energia durante la propagacion. Los materiales viscoelasticos (polimeros, tejidos biologicos, suelos saturados) presentan atenuacion y dispersion incluso en el caso homogeneo.

- Para la onda de Rayleigh: la superficie libre es **plana** y la profundidad del solido es **semi-infinita**. En laminas o barras de espesor finito, la onda de Rayleigh se convierte en ondas de Lamb con dispersion.

## Dominio de validez cuantitativo

El modelo elastico isotropo es valido cuando la longitud de onda supera en al menos 10 veces el tamano del grano o defecto mas grande del material. Para acero con grano de 50 µm, esto impone frecuencias por debajo de aproximadamente 12 MHz para una onda P de 5900 m/s. Por encima de esa frecuencia, el scattering de grano produce atenuacion y dispersion no modeladas.

En terminos de deformacion, el modelo lineal es valido para deformaciones menores del 0.1 % para la mayoria de metales; en caucho y polimeros elastomeros este limite puede extenderse hasta el 10 %. La condicion cuantitativa es que la tension no supere el 50 % de la tension de fluencia del material.

Para la onda de Rayleigh, el modelo de semiespacio homogeneo es valido cuando la longitud de onda es mayor que 5 veces el espesor de cualquier capa superficial con propiedades diferentes. Para frecuencias de inspeccion de 1 MHz y [[velocidad_de_onda_de_rayleigh]] de 3000 m/s, la longitud de onda es 3 mm, de modo que la hipotesis de homogeneidad en superficie es valida si el recubrimiento mide menos de 0.6 mm.

## Señales de fallo del modelo

- La **velocidad medida depende de la frecuencia**: el modelo predice velocidades constantes. Si la velocidad de fase varia con la frecuencia, hay dispersion real (estratificacion o viscoelasticidad) no captada por el modelo ideal.

- **Atenuacion fuerte con la distancia**: una onda en un solido elastico ideal no se atenua con la distancia (solo decrece geometricamente por divergencia del frente). Si la atenuacion es mucho mayor que la geometrica, hay un mecanismo disipativo (viscosidad, scattering de grano, termoelasticidad) no modelado.

- **Aparicion de ondas extra no previstas**: en un solido isotropo ideal solo existen las tres familias descritas. Si el ensayo detecta ecos o llegadas adicionales no explicadas por reflexiones geometricas, puede haber anisotropia o conversion de modo en interfaces internas no declaradas.

- **Variacion de velocidad con la amplitud**: en el modelo lineal la velocidad no depende de la amplitud. Si el ensayo muestra velocidades distintas para pulsos de diferente amplitud, el material opera en el regimen no lineal.

## Modelo extendido o alternativo

El modelo extendido mas comun incorpora **viscoelasticidad lineal**: se añade una parte imaginaria a los modulos elasticos, lo que produce atenuacion proporcional a la frecuencia y una ligera dependencia de la velocidad de fase con la frecuencia. Este modelo captura el comportamiento de polimeros, tejidos biologicos y suelos finos saturados.

Cuando el solido es estratificado, el modelo se extiende a la **teoria de medios estratificados** (matriz de transferencia de Thomson-Haskell), que predice la dispersion de las ondas de Rayleigh y Love en funcion de la geometria de las capas y sus propiedades.

Para frecuencias muy altas (ultrasonica de alta resolucion o inspeccion de grano fino), el modelo de **scattering de Mie** o el de **scattering de Rayleigh de grano** permite predecir la atenuacion y la dispersion producidas por la microestructura del material.

Cuando conviene pasar al modelo extendido: cuando la atenuacion medida supera en un factor 2 a la predicha por la ley geometrica; cuando la velocidad medida varia mas del 1 % entre dos frecuencias de inspeccion separadas por un octavo; o cuando el material tiene capas documentadas con espesor mayor que la decima parte de la longitud de onda de inspeccion. Cambiar a la teoria de medios estratificados cuando se trabaja con recubrimientos, suelos estratificados o laminas multi-capa.

## Comparación operativa

| Criterio | Modelo ideal elastico | Modelo viscoelastico lineal | Modelo estratificado |
|---|---|---|---|
| Variables de entrada | [[modulo_de_young]], [[modulo_de_corte]], [[rho]], [[nu]] | [[modulo_de_young]], [[modulo_de_corte]], [[rho]], [[nu]], factor de perdidas | Propiedades por capa, espesores |
| Velocidad de onda | Constante con la frecuencia | Ligeramente dependiente de la frecuencia | Fuertemente dependiente de la frecuencia |
| Atenuacion | Solo geometrica | Proporcional a la frecuencia | Dependiente de la frecuencia y la capa |
| Aplicaciones | Metales, ceramicas, rocas duras | Polimeros, tejidos, suelos finos | Recubrimientos, pavimentos, suelos estratificados |
| Complejidad computacional | Baja | Moderada | Alta |
| Precision en metales de grano fino | Alta (error menor al 1 %) | Innecesaria | Innecesaria |