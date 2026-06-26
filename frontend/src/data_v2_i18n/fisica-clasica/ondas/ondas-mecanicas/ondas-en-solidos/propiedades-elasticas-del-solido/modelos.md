## Modelo ideal

El modelo ideal trata el solido como un continuo elastico lineal isotropo. La respuesta mecanica queda completamente descrita por dos constantes independientes: [[modulo_de_young]] y [[nu_poisson]] (o equivalentemente [[modulo_de_cizalla]] y [[modulo_de_compresibilidad]]). La relacion tension-deformacion es lineal, reversible e instantanea. El material no tiene memoria, no disipa energia y sus propiedades son identicas en todas las direcciones.

Esta simplificacion permite descomponer cualquier estado de tension en una parte volumetrica y una parte deviatoria, cada una gobernada por su modulo correspondiente. Fisicamente, esto equivale a suponer que el solido responde como un resorte ideal: la deformacion es proporcional a la carga y desaparece completamente al retirarla.

## Hipótesis

- El material es isotropo: sus propiedades elasticas no dependen de la direccion de aplicacion del esfuerzo. Si esta hipotesis se viola, se necesitan mas de dos constantes y la relacion entre [[modulo_de_young]], [[modulo_de_cizalla]] y [[nu_poisson]] deja de ser valida.

- La deformacion es infinitesimal: la deformacion es mucho menor que la unidad (tipicamente inferior al 1 %). Si la deformacion es grande (caucho, tejidos biologicos), la relacion lineal falla y se necesita la elasticidad no lineal.

- El comportamiento es elastico lineal: la tension es proporcional a la deformacion (ley de Hooke). Si se supera el limite elastico, aparece plasticidad permanente y las constantes elasticas dejan de describir la respuesta.

- El material es homogeneo: las propiedades son uniformes en todo el volumen. En materiales con gradientes de composicion o porosidad variable, los modulos son funciones de la posicion.

- La respuesta es instantanea: no hay efectos viscosos ni dependencia temporal. En polimeros y materiales biologicos, la respuesta es viscoelastica y depende de la velocidad de carga.

## Dominio de validez cuantitativo

El modelo es valido para deformaciones [[epsilon]] < 0.01 (1 %) en la mayoria de los metales y ceramicas. En estos materiales, el error de la aproximacion lineal es inferior al 1 % cuando la tension esta por debajo del 50 % de la tension de fluencia.

Para metales policristalinos con grano equiaxial, la desviacion de la isotropia perfecta es tipicamente inferior al 5 %, lo que justifica el uso de dos constantes. En monocristales o materiales texturados, el error puede superar el 20 % en ciertas direcciones.

El orden de magnitud de los modulos elasticos va desde 0.01 GPa para elastomeros blandos hasta 1200 GPa para el diamante. El coeficiente de Poisson esta limitado termodinamicamente al rango -1 < [[nu_poisson]] < 0.5.

## Señales de fallo del modelo

- El [[modulo_de_cizalla]] calculado a partir de [[modulo_de_young]] y [[nu_poisson]] difiere del medido experimentalmente en mas de un 10 %: posible anisotropia.

- La curva tension-deformacion experimental se desvía de la recta antes de la tension de fluencia prevista: comportamiento no lineal prematuro, posible presencia de microfisuras o defectos.

- La relacion entre velocidades ultrasonicas longitudinal y transversal no predice correctamente el [[nu_poisson]] tabulado: el material puede tener textura cristalografica.

- El modulo elastico medido varia significativamente con la frecuencia de ensayo: presencia de efectos viscoelasticos que el modelo puramente elastico no captura.

## Modelo extendido o alternativo

El modelo extendido mas inmediato es la elasticidad anisotropa, donde la respuesta del material depende de la direccion. Un cristal cubico necesita tres constantes independientes, un material transversalmente isotropo necesita cinco y el caso general triclinico requiere 21. Las relaciones simples entre dos modulos desaparecen y se trabaja con el tensor completo de rigidez.

Para deformaciones grandes, se emplea la elasticidad no lineal (hiperelasticidad), donde la tension ya no es proporcional a la deformacion sino que se describe mediante una funcion de energia almacenada que depende de invariantes del tensor de deformacion.

Para materiales con respuesta dependiente del tiempo (polimeros, metales a alta temperatura), el modelo se extiende a la viscoelasticidad, donde los modulos se convierten en funciones complejas de la frecuencia.

Cuando conviene pasar al modelo extendido: cuando el error del isotropo supere el 10 % respecto a mediciones experimentales, cuando el material presente anisotropia evidente (compuestos, monocristales) o cuando la frecuencia de carga sea lo suficientemente alta como para activar efectos viscoelasticos.

## Comparación operativa

| Criterio | Modelo isotropo ideal | Modelo extendido |
|---|---|---|
| Constantes necesarias | 2 | 3 a 21 (segun simetria) |
| Relacion entre modulos | Algebraica exacta | No existe en general |
| Precision en metales | Alta (error inferior al 5 %) | Maxima |
| Precision en composites | Baja (error superior al 20 %) | Alta si se conocen las constantes |
| Complejidad analitica | Baja | Alta |
| Rango de deformacion | Infinitesimal | Finito (hiperelasticidad) |