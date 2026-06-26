const e=`## Modelo ideal

El modelo ideal trata el solido como un medio continuo, homogeneo, isotropo y elastico lineal. En estas condiciones, el tensor de rigidez tiene exactamente dos componentes independientes. Todas las relaciones entre modulos son consecuencias algebraicas exactas de esta simetria. No hay aproximaciones: las formulas son identidades validas para cualquier par de valores dentro del rango termodinamico.

Las constantes que se relacionan son [[E_young]], [[G_shear]], [[K_bulk]], [[nu_poisson]], [[lambda_lame]] y el segundo parametro de Lame (mu, identico a G). Cualquier par de ellas determina las restantes.

## Hipotesis

- Isotropia: el material tiene la misma respuesta mecanica en todas las direcciones. Si hay textura cristalografica, laminacion o fibras, esta hipotesis se viola.

- Elasticidad lineal: la relacion tension-deformacion es lineal y reversible. Las relaciones son invalidas en regimen plastico, viscoelastico o de grandes deformaciones.

- Homogeneidad: las propiedades son uniformes en todo el volumen. Si hay gradientes (materiales funcionalmente graduados), cada punto tiene sus propias constantes.

- Medio continuo: se ignoran la estructura atomica y los defectos. Las relaciones son macroscopicas y promediadas sobre escalas mucho mayores que la distancia interatomica.

- Estabilidad termodinamica: la energia de deformacion es definida positiva. Esto impone G mayor que cero, K mayor que cero y -1 menor que nu menor o igual que 0.5.

## Dominio de validez cuantitativo

Las relaciones son exactas (no aproximadas) dentro del dominio de isotropia y elasticidad lineal. Los limites cuantitativos son los del regimen elastico de cada material: tipicamente deformaciones menores del 0.1 % para metales y del 1 % para polimeros.

El rango termodinamico de [[nu_poisson]] es estrictamente (-1, 0.5]. Para nu exactamente igual a 0.5, K diverge y el material es incompresible. Para nu exactamente igual a -1, G diverge.

Los modulos deben ser todos positivos (excepto [[lambda_lame]], que puede ser negativo para nu negativo). Si un calculo produce G negativo o K negativo, hay un error de datos o el material no es isotropo estable.

## Señales de fallo del modelo

- Los modulos medidos experimentalmente no satisfacen las relaciones algebraicas: indica anisotropia o heterogeneidad del material.

- El valor de nu calculado cae fuera de (-1, 0.5]: indica error experimental o material no elastico lineal.

- Los valores de E, G o K dependen de la direccion de medida: el material no es isotropo y se necesita un modelo anisotropo.

- Los modulos dependen de la frecuencia de excitacion: comportamiento viscoelastico, no elastico puro.

- Los modulos cambian con la amplitud de carga: no linealidad, fuera del regimen lineal.

## Modelo extendido o alternativo

Para materiales anisotropos, el modelo inmediatamente superior es la elasticidad ortotropa (9 constantes independientes) o la isotropia transversal (5 constantes). Para anisotropia general, se necesitan 21 constantes (tensor de rigidez completo en notacion de Voigt).

Para comportamiento viscoelastico, los modulos se reemplazan por modulos complejos dependientes de la frecuencia (E*, G*, K*), con parte real (almacenamiento) y parte imaginaria (perdida).

Para grandes deformaciones, se usan modelos hiperelasticos (Mooney-Rivlin, Ogden, neo-hookeano) que no se expresan en terminos de modulos constantes.

Cuando conviene pasar al modelo extendido: cuando las medidas en distintas direcciones difieren sistematicamente, cuando los modulos dependen de la frecuencia, cuando las deformaciones superan el 1 %, o cuando el material tiene estructura interna orientada (fibras, capas, cristales anisotropos).

## Comparacion operativa

| Criterio | Modelo isotropo (2 constantes) | Modelo ortotropo (9 constantes) |
|---|---|---|
| Constantes independientes | 2 | 9 |
| Ensayos necesarios | 1 (traccion uniaxial con medida lateral) | Minimo 6 (traccion en 3 ejes + cizalla en 3 planos) |
| Relaciones de conversion | Formulas cerradas entre cualquier par | No existen formulas universales de conversion |
| Aplicabilidad | Metales policristalinos, vidrio, polimeros amorfos | Composites, madera, hueso, cristales no cubicos |
| Complejidad computacional | Aritmetica elemental | Algebra matricial 6x6 |
`;export{e as default};
